export const ERC4626Target3 = {
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
            "name": "BelowMinimumContribution",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "DistributeExcessIdleFailed",
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
            "name": "InvalidPresentValue",
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
            "name": "MinimumSharePrice",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "MinimumTransactionAmount",
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
            "name": "PoolAlreadyInitialized",
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
            "inputs": [],
            "name": "RestrictedZeroAddress",
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
            "name": "UnsafeCastToInt256",
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
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "status",
                    "type": "bool"
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
                    "name": "_apr",
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
            "name": "initialize",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
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
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutput",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minVaultSharePrice",
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
            "name": "openLong",
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
            "stateMutability": "payable",
            "type": "function"
        }
    ],
    "bytecode": {
        "object": "0x6102606040523480156200001257600080fd5b50604051620047c6380380620047c68339810160408190526200003591620001bf565b600160005581516001600160a01b03908116608090815260608085015161018052908401516101a05260a0808501516101c05260e08086015190915260c08086015190526101008086015190915261016080860180515190925281516020908101516101209081528351604090810151610140908152945190950151909252860151841661020052918501516102205290840151600880546001600160a01b0319169184169190911790559092015182166101e0521661024052620002b3565b60405161018081016001600160401b03811182821017156200012757634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200014557600080fd5b919050565b6000608082840312156200015d57600080fd5b604051608081016001600160401b03811182821017156200018e57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610200811215620001d557600080fd5b6101e080821215620001e657600080fd5b620001f0620000f5565b9150620001fd856200012d565b82526200020d602086016200012d565b602083015260408501516040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101206200026a8187016200012d565b908301526101406200027e8682016200012d565b9083015261016062000293878783016200014a565b8184015250819350620002a88186016200012d565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161439e620004286000396000818161062c015281816106a30152818161072f015261124201526000505060005050600050506000818161038b01526129a70152600081816101060152818161015d01528181610244015281816117f10152818161185601528181611fbc015281816125c8015281816126040152818161284f01526129810152600081816101b301528181610d6301528181610dab01528181610ecd015261295b0152600061141501526000818161153b0152611e86015260008181610a4901528181610e1e015261150f015260008181610dfd0152611e420152600081816101f601528181610d4101528181610dcc01528181610eee01526129cd0152600081816101d5015281816104550152818161098901526131c1015260006108e00152600081816105ff0152610660015261439e6000f3fe6080604052600436106100295760003560e01c806377d05ff41461002e578063cba2e58d14610054575b600080fd5b61004161003c36600461401b565b61007c565b6040519081526020015b60405180910390f35b61006761006236600461406b565b610093565b6040805192835260208301919091520161004b565b60006100898484846100b0565b90505b9392505050565b6000806100a286868686610324565b915091505b94509492505050565b60006100ba610556565b6100c2610580565b6100cb826105a1565b60055460ff16156100ef57604051637983c05160e01b815260040160405180910390fd5b6000806100fc86856105da565b909250905061012c7f000000000000000000000000000000000000000000000000000000000000000060026140db565b82101561014c57604051632afb507160e21b815260040160405180910390fd5b6005805460ff1916600117905560027f0000000000000000000000000000000000000000000000000000000000000000028203925061018a82610768565b600180546001600160801b0319166001600160801b039290921691909117905561021f61021a837f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610792565b610768565b600180546001600160801b03928316600160801b0292169190911790556102686000807f0000000000000000000000000000000000000000000000000000000000000000610831565b610280600061027a60208701876140f2565b85610831565b61029161028b6108d9565b82610914565b50600061029f878387610cd7565b90506102ae60208601866140f2565b6001600160a01b03167fdfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f9528583866102eb60408b0160208c01614129565b60408051948552602085019390935291830152151560608201526080810189905260a00160405180910390a250505061008c6001600055565b60008061032f610556565b600554610100900460ff1615610358576040516321081abf60e01b815260040160405180910390fd5b610360610580565b610369836105a1565b60008061037688866105da565b909250905060006103878383610d06565b90507f00000000000000000000000000000000000000000000000000000000000000008110156103ca5760405163211ddda360e11b815260040160405180910390fd5b868210156103eb576040516342af972b60e01b815260040160405180910390fd5b60006103f56108d9565b90506104018184610914565b5060008061040f8686610d1b565b90985090925090508a8710156104385760405163c972651760e01b815260040160405180910390fd5b806009600082825461044a9190614146565b9091555061047a90507f000000000000000000000000000000000000000000000000000000000000000084614146565b97506104888288878b610f2c565b600061049560018a6110c8565b90506104ae816104a860208d018d6140f2565b8a610831565b8c8989888d856104c160208301836140f2565b6001600160a01b03167f88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c866104f7898787610cd7565b6105028a88886110fd565b6105126040880160208901614129565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a350909a50505050505050505050506100a76001600055565b60026000540361057957604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561059f57604051631574f9f360e01b815260040160405180910390fd5b565b60006105b060208301836140f2565b6001600160a01b0316036105d75760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000806105ed6040840160208501614129565b1561071f576106276001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333087611125565b6106877f0000000000000000000000000000000000000000000000000000000000000000610656866001614146565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190611192565b604051636e553f6560e01b8152600481018590523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af11580156106f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107189190614159565b9150610757565b8391506107576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333085611125565b61075f611222565b90509250929050565b6000600160801b821061078e57604051630f0af95160e11b815260040160405180910390fd5b5090565b6000806107a3846301e133806112b5565b905060006107b18683610d06565b6107c390670de0b6b3a7640000614146565b9050670de0b6b3a764000081106107f7576107f06107e9670de0b6b3a7640000866112b5565b82906112ca565b905061080f565b61080c6107e9670de0b6b3a76400008661133f565b90505b6108238161081d898b610d06565b90610d06565b925050505b95945050505050565b6000838152600b602090815260408083206001600160a01b038616845290915281208054839290610863908490614146565b90915550506000838152600c602052604081208054839290610886908490614146565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006109057f000000000000000000000000000000000000000000000000000000000000000042614188565b61090f904261419c565b905090565b600082815260076020526040812080546001600160801b031615158061093957504284115b1561094f57546001600160801b03169050610cd1565b61095883610768565b81546001600160801b0319166001600160801b039190911617815561097c83611354565b50600090506007816109ae7f00000000000000000000000000000000000000000000000000000000000000008861419c565b815260208101919091526040016000908120546001600160801b031691506109d76002876110c8565b6000818152600c60205260408120549192508115610b1857506001600080610a01848a88846114f8565b915091508060096000828254610a179190614146565b90915550610a33905084600084610a2d816115c6565b8e6115f0565b610a3d8183614146565b9150610a6d8483888c8d7f000000000000000000000000000000000000000000000000000000000000000061176a565b9150610a81610a7c838b610d06565b6117b4565b60058054600290610aa29084906201000090046001600160701b03166141af565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610acf82610768565b60058054601090610af1908490600160801b90046001600160801b03166141cf565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610b2560018a6110c8565b6000818152600c60205260409020549091508015610c355760019250600080610b51838c8a60016114f8565b915091508060096000828254610b679190614146565b909155508c9050610b8484600085610b7e816115c6565b856117da565b610b8e828461419c565b9250610b9d610a7c848e610d06565b60058054600290610bbe9084906201000090046001600160701b03166141af565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610beb83610768565b60058054601090610c0d908490600160801b90046001600160801b03166141cf565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505b8215610c6c57610c61610c47856115c6565b610c50836115c6565b610c5a91906141ef565b60006119cf565b610c6a89611a82565b505b6000610c778a611bf1565b50604080518c815260208101889052908101849052606081018290529091508b907f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15519060800160405180910390a289985050505050505050505b92915050565b6000610ce96040830160208401614129565b15610cf557508261008c565b610cff8484610d06565b905061008c565b600061008c8383670de0b6b3a7640000611ce1565b6000806000610d87610d2b611cff565b600154600160801b90046001600160801b0316877f0000000000000000000000000000000000000000000000000000000000000000887f0000000000000000000000000000000000000000000000000000000000000000611d20565b91506000610df0610d96611cff565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611d4c565b9050610e478684610e42847f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611d63565b611dce565b15610e5657610e566002611e10565b600080610e64888489611e34565b9092509050610e73828661419c565b9450610e80818489611ce1565b9350610e8c848961419c565b9550670de0b6b3a7640000610f1287610ea3611cff565b610ead9190614146565b600154610ecb908990600160801b90046001600160801b031661419c565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611d4c565b1115610f2257610f226002611e10565b5050509250925092565b600254600160801b90046001600160801b0316610f6e61021a82610f58670de0b6b3a7640000866140db565b6004546001600160801b03169190886001611eb4565b600480546001600160801b0319166001600160801b0392909216919091179055610f9785610768565b60018054600090610fb29084906001600160801b03166141cf565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610fdf84610768565b60018054601090611001908490600160801b90046001600160801b031661420f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061102e84610768565b61103890826141cf565b600280546001600160801b03808416600160801b0291161790559050600061105f83611f71565b905061107d8161106e876115c6565b611078908461422f565b6119cf565b61108684611fb5565b611094576110946003611e10565b600061109f85611a82565b9050806110bf57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156110f25760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600061110f6040830160208401614129565b1561111e57610cff84846112b5565b508261008c565b6040516001600160a01b03848116602483015283811660448301526064820183905261118c9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050612015565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526111e38482612078565b61118c576040516001600160a01b0384811660248301526000604483015261121891869182169063095ea7b39060640161115a565b61118c8482612015565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015611291573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061090f9190614159565b600061008c83670de0b6b3a764000084611ce1565b6000816000036112e35750670de0b6b3a7640000610cd1565b826000036112f357506000610cd1565b60006112fe836115c6565b9050600061131361130e866115c6565b61211b565b905081810261132a670de0b6b3a764000082614257565b905061133581612341565b9695505050505050565b600061008c83670de0b6b3a7640000846124d6565b6005546000908190611377908490600160801b90046001600160801b0316610d06565b6005546201000090046001600160701b031692509050818111156114f35760006113a1838361419c565b90506113b061021a828661133f565b600580546010906113d2908490600160801b90046001600160801b031661420f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061140b85836112b590919063ffffffff16565b90506000611439827f0000000000000000000000000000000000000000000000000000000000000000610d06565b9050806009600082825461144d9190614146565b9091555061145d9050818361419c565b915061146882610768565b600180546000906114839084906001600160801b03166141cf565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506114b0826124fc565b600380546000906114c5908490600f0b614285565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60008061150586866112b5565b91506000611533837f0000000000000000000000000000000000000000000000000000000000000000610d06565b905061155f817f0000000000000000000000000000000000000000000000000000000000000000610d06565b9150831561158257611571828261419c565b61157b908461419c565b9250611599565b61158c828261419c565b6115969084614146565b92505b848610156115bc576115ac838787611ce1565b92506115b9828787611ce1565b91505b5094509492505050565b60006001600160ff1b0382111561078e5760405163396ea70160e11b815260040160405180910390fd5b600354600160801b90046001600160801b031661163961021a8261161c670de0b6b3a7640000866140db565b600454600160801b90046001600160801b031691908a6000611eb4565b600480546001600160801b03928316600160801b02921691909117905561165f86610768565b611669908261420f565b600380546001600160801b03928316600160801b02921691909117905561168f84610768565b600180546000906116aa9084906001600160801b03166141cf565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506116d783612526565b600380546000906116ec908490600f0b614285565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061171c85610768565b6001805460109061173e908490600160801b90046001600160801b031661420f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806117828461177c8a888a611ce1565b906112b5565b905061178f888486611ce1565b6117999082614146565b9050868111156117a95786810391505b509695505050505050565b6000600160701b821061078e5760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b03168381108061181c57507f000000000000000000000000000000000000000000000000000000000000000061181a858361419c565b105b1561182b5761182b6003611e10565b6003549084900390600f0b61184084826141ef565b90508361184c866115c6565b13801561188157507f000000000000000000000000000000000000000000000000000000000000000061187f8383612564565b105b15611890576118906001611e10565b600254600160801b90046001600160801b03166118d261021a826118bc670de0b6b3a7640000886140db565b6004546001600160801b031691908c6000611eb4565b600480546001600160801b0319166001600160801b03929092169190911790556118fc888261419c565b905061190781610768565b600280546001600160801b03928316600160801b02921691909117905561192d83610768565b600180546001600160801b0319166001600160801b039290921691909117905561195682612526565b600380546001600160801b0319166001600160801b039290921691909117905561197f87610768565b600180546010906119a1908490600160801b90046001600160801b03166141cf565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006119f86119de8483612590565b6119e9846000612590565b6119f391906141ef565b612526565b9050600081600f0b1315611a4d5760028054829190600090611a249084906001600160801b03166141cf565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b1215611a7d57611a62816142b2565b60028054600090611a249084906001600160801b031661420f565b505050565b600654600360f81b6000908152600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5490918291611acd916001600160801b03169061419c565b905080600003611ae05750600192915050565b6000611aeb846125a6565b905080600003611aff575060019392505050565b600080611b0d83858861264b565b9150915080611b225750600095945050505050565b600080611b2e84612758565b91509150611b3b82610768565b60068054600090611b569084906001600160801b03166141cf565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b8381610768565b60068054601090611ba5908490600160801b90046001600160801b03166141cf565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611be3611bd5826115c6565b611bde906142d8565b612822565b506001979650505050505050565b600080600080611c08611c0386612912565b612a4c565b9150915080611c1e575060009485945092505050565b6000808611611c2e576000611c38565b611c388387610d06565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b0390921691611ca39190614146565b611cad919061419c565b905080600003611cc65750600096879650945050505050565b6000611cd283836112b5565b98600198509650505050505050565b6000826000190484118302158202611cf857600080fd5b5091020490565b60015460035460009161090f916001600160801b0390911690600f0b612564565b6000611d41878787611d3a88670de0b6b3a764000061419c565b8787612ad9565b979650505050505050565b600061082882611d5d858888611ce1565b906112ca565b6000610089611daa611d7d84670de0b6b3a764000061419c565b611da4670de0b6b3a7640000611d93818a61133f565b611d9d919061419c565b8790612b8a565b90612b8a565b611dbc90670de0b6b3a7640000614146565b61177c84670de0b6b3a764000061419c565b600080611e0585611ddd611cff565b611de79190614146565b600154610ecb908790600160801b90046001600160801b031661419c565b909210949350505050565b80604051633c06d78b60e11b8152600401611e2b91906142f4565b60405180910390fd5b600080611e7e85611da485817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000611e74818c61133f565b611da4919061419c565b9150611eaa827f0000000000000000000000000000000000000000000000000000000000000000610d06565b9050935093915050565b600082600003611ec5575084610828565b8115611f3757611ef6611ed88487614146565b611ee28587610d06565b611eec888a610d06565b61177c9190614146565b90506000611f048588612b9f565b90506000611f128689612bae565b905081831015611f2457819250611f30565b80831115611f30578092505b5050610828565b828503611f4657506000610828565b611335611f53848761419c565b611f5d8587612b8a565b611f67888a610d06565b61177c919061419c565b6000611f99600c6000611f856002866110c8565b8152602001908152602001600020546115c6565b611fab600c6000611f856001876110c8565b610cd191906141ef565b6000611fe17f000000000000000000000000000000000000000000000000000000000000000083612b8a565b600254611ff791906001600160801b0316614146565b60015461200d906001600160801b031684610d06565b101592915050565b600061202a6001600160a01b03841683612bbd565b9050805160001415801561204f57508080602001905181019061204d919061431c565b155b15611a7d57604051635274afe760e01b81526001600160a01b0384166004820152602401611e2b565b6000806000846001600160a01b0316846040516120959190614339565b6000604051808303816000865af19150503d80600081146120d2576040519150601f19603f3d011682016040523d82523d6000602084013e6120d7565b606091505b5091509150818015612101575080511580612101575080806020019051810190612101919061431c565b80156108285750505050506001600160a01b03163b151590565b600080821361213d5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906121c09084901c6115c6565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361235c57506000919050565b680755bf798b4a1bf1e58212612385576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061133574029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6115c6565b60008260001904841183021582026124ed57600080fd5b50910281810615159190040190565b600060016001607f1b0382111561078e5760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03198212801590612547575060016001607f1b038213155b61078e5760405163a5353be560e01b815260040160405180910390fd5b60008082612571856115c6565b61257b91906141ef565b9050600081121561008c5761008c6001611e10565b600081831361259f578161008c565b5090919050565b60025460009081906125c1906001600160801b03168461133f565b90506125ed7f000000000000000000000000000000000000000000000000000000000000000082614146565b6001546001600160801b03161115612645576001547f0000000000000000000000000000000000000000000000000000000000000000906126389083906001600160801b031661419c565b612642919061419c565b91505b50919050565b612653613f56565b60008061265f84612912565b9050600061266c82612a4c565b93509050826126815750600091506127509050565b60006126a86126a3846101600151856101400151610d0690919063ffffffff16565b6115c6565b6126c86126a3856101200151866101000151612b8a90919063ffffffff16565b6126d291906141ef565b604080516101208101825285815260208082019590955260008052600c85527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e85481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b600080600061276f8460c001518560e00151612564565b905060008061277e8684612bcb565b915091508061279557506000958695509350505050565b60006127a18784612cd0565b9050806000036127ba5750600096879650945050505050565b866060015181116127d15796919550909350505050565b50606086015160006127e4888686612d88565b9050806000036127fe575060009788975095505050505050565b838110612815575060009788975095505050505050565b9097909650945050505050565b6001546003546001600160801b0380831692600f9290920b91600160801b900416600080806128748686867f00000000000000000000000000000000000000000000000000000000000000008b6130aa565b9250925092508583146128ab5761288a83610768565b600180546001600160801b0319166001600160801b03929092169190911790555b8482146128dc576128bb82612526565b600380546001600160801b0319166001600160801b03929092169190911790555b8381146110bf576128ec81610768565b600180546001600160801b03928316600160801b02921691909117905550505050505050565b61291a613fa8565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191612a129116613176565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612a4492900416613176565b905292915050565b6000806000806000612a5d866131ec565b9150915080612a7457506000958695509350505050565b612a818660a001516115c6565b612a8a876134f7565b83612a9889600001516115c6565b612aa2919061422f565b612aac919061422f565b612ab691906141ef565b925050506000811215612acf5750600093849350915050565b9360019350915050565b600080612ae9888887878761355b565b9050612b0385611d5d612afc898c614146565b8690610d06565b9750612b10848985611ce1565b975087811015612b2457612b246000611e10565b878103670de0b6b3a76400008110612b5257612b4b6107e9670de0b6b3a76400008861133f565b9050612b6a565b612b676107e9670de0b6b3a7640000886112b5565b90505b80881015612b7c57612b7c6000611e10565b909603979650505050505050565b600061008c8383670de0b6b3a76400006124d6565b6000818311612645578261008c565b600081831161259f578161008c565b606061008c8383600061358a565b60008060008460a0015112612be857505060808201516001612cc9565b60008460a00151612bf8906142d8565b90506000612c3485876101000151886000015160e00151670de0b6b3a7640000612c22919061419c565b8951606081015160809091015161361d565b9350905082612c4b57600080935093505050612cc9565b6000612c57838361133f565b9050670de0b6b3a76400008111612c935780670de0b6b3a7640000039450612c8c8760c0015186610d0690919063ffffffff16565b9450612ca2565b60008094509450505050612cc9565b8660800151851115612cc1578660800151600194509450505050612cc9565b506001925050505b9250929050565b6000612d058360c001518460e00151856101000151866000015160a00151612cf7876115c6565b612d00906142d8565b6130aa565b8551604081019190915260208101919091525282516000908190612d2890612a4c565b91509150801580612d3d575084602001518210155b15612d4d57600092505050610cd1565b600085606001518660400151612d639190614146565b9050612d7e83876020015183611ce19092919063ffffffff16565b611335908261419c565b60008084606001518560400151612d9f9190614146565b60208601516060870151919250600091612db99184611ce1565b90508560a00151600003612dd057915061008c9050565b60005b60048110156130a057612de68286612b9f565b9150612e0d8760c001518860e001518961010001518a6000015160a00151612cf7876115c6565b895160408101919091526020810191909152528651600090612e2e906136c9565b9050612e3b888286613700565b15612e4657506130a0565b60008860a001511315612f9657875180516020820151604083015160a084015160e0909401518c946000948594612ea0949193909290612e8e90670de0b6b3a764000061419c565b88516060810151608090910151613765565b9150915080612eb957600097505050505050505061008c565b818360a0015110612f9257612ecd83613851565b909650905080612ee757600097505050505050505061008c565b612f0c8360c001518460e00151856101000151866000015160a00151612cf78b6115c6565b85516040808201929092526020808201939093529290925284518051918101519281015160a0909101518e5160e00151612f5594929190612e8e90670de0b6b3a764000061419c565b909250905080612f6f57600097505050505050505061008c565b8a60a001518211612f89578597505050505050505061008c565b50505050612dd3565b5050505b600080612fa88a8a8c60a00151613927565b91509150801580612fc15750670de0b6b3a76400008210155b15612fd5576000965050505050505061008c565b81670de0b6b3a764000003915060006130026126a38c604001518d60200151612b8a90919063ffffffff16565b61300f6126a3868a610d06565b61301991906141ef565b90506000811315613043576130328761177c83866112b5565b61303c9087614146565b9550613091565b600081121561308857600061305d8861177c8681866142d8565b905086811015613071578087039650613082565b60009850505050505050505061008c565b50613091565b505050506130a0565b84600101945050505050612dd3565b5095945050505050565b6000806000836000036130c457508691508590508461316b565b6000846130d08a6115c6565b6130da919061422f565b90506130e5866115c6565b8112156131055760405163585fe6df60e11b815260040160405180910390fd5b809350600088126131255761311e6126a3858a8c611ce1565b9250613148565b61313c6126a36131348a6142d8565b86908c6124d6565b613145906142d8565b92505b613167876131568b8b612564565b6131608787612564565b9190611ce1565b9150505b955095509592505050565b600080670de0b6b3a764000061318a6108d9565b61319491906140db565b90508083116131a45760006131ae565b6131ae818461419c565b91506126426131e5670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006140db565b83906112b5565b60008060006132116126a3856101600151866101400151610d0690919063ffffffff16565b6132316126a3866101200151876101000151612b8a90919063ffffffff16565b61323b91906141ef565b9050600061325185600001518660200151612564565b905060008213156133955760008290506000806132a2886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000613293919061419c565b8d606001518e60800151613765565b91509150806132bb575060009788975095505050505050565b8282106133595760006132f5858a60400151868c60e00151670de0b6b3a76400006132e6919061419c565b8d606001518e60800151613c63565b925090508115801561330a57508860c0015184105b156133215750600098600198509650505050505050565b8161333757506000988998509650505050505050565b613340816115c6565b613349906142d8565b9960019950975050505050505050565b6000886020015112613381576133788860a00151856126a3919061419c565b611cd2906142d8565b60a08801518851613378916126a39161419c565b60008212156134e95760006133a9836142d8565b90506000806133de8489604001518a60e00151670de0b6b3a76400006133cf919061419c565b8b606001518c6080015161361d565b91509150806133f7575060009788975095505050505050565b82821061347c576000613431858a60400151868c60e00151670de0b6b3a7640000613422919061419c565b8d606001518e60800151613d26565b925090508115801561344657508860c0015184105b1561345d5750600098600198509650505050505050565b8161347357506000988998509650505050505050565b613349816115c6565b60006134ae858a604001518b60e00151670de0b6b3a764000061349f919061419c565b8c606001518d60800151613dfd565b92509050816134c857506000988998509650505050505050565b6133496134df8a60600151858761177c919061419c565b6126a39083614146565b506000946001945092505050565b600061352a6126a3836101200151670de0b6b3a7640000613518919061419c565b606085015161010086015191906124d6565b611fab6126a3846101600151670de0b6b3a7640000613549919061419c565b60608601516101408701519190611ce1565b600061356785856112ca565b61358061357886611d5d868b612b8a565b8590856124d6565b6113359190614146565b6060814710156135af5760405163cd78605960e01b8152306004820152602401611e2b565b600080856001600160a01b031684866040516135cb9190614339565b60006040518083038185875af1925050503d8060008114613608576040519150601f19603f3d011682016040523d82523d6000602084013e61360d565b606091505b5091509150611335868383613eac565b600080600061362f888888888861355b565b9050600061365a670de0b6b3a764000061364988886112b5565b6136539190614146565b839061133f565b9050670de0b6b3a76400008110613687576136806107e9670de0b6b3a76400008961133f565b905061369f565b61369c6107e9670de0b6b3a7640000896112b5565b90505b808810156136b5576000809350935050506136bf565b8703925060019150505b9550959350505050565b60008060006136d784612a4c565b91509150806136f957604051635516328b60e11b815260040160405180910390fd5b5092915050565b6020830151600090613712908461133f565b60408501516137229084906112b5565b101580156100895750602084015161374b9084613160633b9aca00670de0b6b3a7640000614146565b604085015161375b90849061133f565b1115949350505050565b60008060008812156137875761377a886142d8565b6137849087614146565b95505b60006137938a8a612564565b905060006137a4828a898989613f08565b905060006137c16137b989611d5d898d612b8a565b8890886124d6565b9050808210156137da5760008094509450505050613845565b808203670de0b6b3a76400008110613808576138016107e9670de0b6b3a76400008b6112b5565b9050613820565b61381d6107e9670de0b6b3a76400008b61133f565b90505b8a811015613838576000809550955050505050613845565b8a90039450600193505050505b97509795505050505050565b60008060008360e001511361386b57506000928392509050565b600061387a84600001516134f7565b905060006138a685604001518660600151876040015161389a9190614146565b602088015191906124d6565b9050600082126138cd57808210156138c0578190036138e3565b5060009485945092505050565b6138d6826142d8565b6138e09082614146565b90505b60e085015160c08601516138f89183906124d6565b9050808560c001511015613913575060009485945092505050565b808560c00151036001935093505050915091565b600080600080841261394b57855160400151613944908590614146565b9050613986565b6000613956856142d8565b875160400151909150811015613976578651604001518190039150613984565b600080935093505050612750565b505b8551805160209091015160009161399c91612564565b875160e08101516040909101519192506000916139d3916139c7916139c0916112ca565b8990610d06565b6101008a01519061133f565b885160e08101516080909101516139fe916139f291611d5d9087610d06565b8a51606001519061133f565b613a089190614146565b90506000613a40613a34613a2d8b6000015160e00151876112ca90919063ffffffff16565b8a90612b8a565b6101008b0151906112b5565b905080821015613a5a576000809550955050505050612750565b80820391506000613a9c848b60000151604001518c6000015160e00151670de0b6b3a7640000613a8a919061419c565b8d51606081015160809091015161355b565b90506000613ac68b6000015160e00151670de0b6b3a7640000613abf919061419c565b87906112ca565b905080821015613ae25760008097509750505050505050612750565b8a51608081015160609091015191830391613afe9183916124d6565b9050670de0b6b3a76400008110613b42578a5160e00151613b3b906107e990613b2f90670de0b6b3a764000061419c565b8d5160e001519061133f565b9050613b71565b8a5160e00151613b6e906107e990613b6290670de0b6b3a764000061419c565b8d5160e00151906112b5565b90505b8a5160600151613b8490859083906124d6565b935083670de0b6b3a76400001115613ba85783670de0b6b3a7640000039350613bbb565b6000600197509750505050505050612750565b60008b60e0015112613c1c5760c08b015160e08c0151613bda9161133f565b9250670de0b6b3a76400008310613bfd5760008097509750505050505050612750565b670de0b6b3a76400009290920391613c158484610d06565b9350613c51565b613c4e613c358c60c001518d60e0015161177c906142d8565b613c4790670de0b6b3a7640000614146565b8590610d06565b93505b50919960019950975050505050505050565b6000806000613c75898988888861355b565b9050613c8586611d5d898b614146565b975087811015613c9c576000809250925050613d1b565b878103613caa8186886124d6565b9050670de0b6b3a76400008110613cd757613cd06107e9670de0b6b3a76400008961133f565b9050613cef565b613cec6107e9670de0b6b3a7640000896112b5565b90505b613cf9818661133f565b9050808a1015613d1157600080935093505050613d1b565b8903925060019150505b965096945050505050565b6000806000613d38898988888861355b565b905086881015613d4f576000809250925050613d1b565b9686900396613d5e88876112ca565b975087811015613d75576000809250925050613d1b565b878103613d838186886124d6565b9050670de0b6b3a76400008110613db057613da96107e9670de0b6b3a76400008961133f565b9050613dc8565b613dc56107e9670de0b6b3a7640000896112b5565b90505b613dd2818661133f565b905089811015613dea57600080935093505050613d1b565b9890980398600198509650505050505050565b6000806000613e0f8888888888613f08565b90506000613e33670de0b6b3a7640000613e29888861133f565b6131e59190614146565b9050670de0b6b3a76400008110613e6057613e596107e9670de0b6b3a7640000896112b5565b9050613e78565b613e756107e9670de0b6b3a76400008961133f565b90505b613e8281866112b5565b905088811015613e9a576000809350935050506136bf565b97909703976001975095505050505050565b606082613ec157613ebc82613f2d565b61008c565b8151158015613ed857506001600160a01b0384163b155b15613f0157604051639996b31560e01b81526001600160a01b0385166004820152602401611e2b565b508061008c565b6000613f1485856112ca565b613580613f2586611d5d868b610d06565b859085611ce1565b805115613f3d5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101200160405280613f6a613fa8565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561264557600080fd5b60008060006060848603121561403057600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561405557600080fd5b61406186828701614009565b9150509250925092565b6000806000806080858703121561408157600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156140ad57600080fd5b6140b987828801614009565b91505092959194509250565b634e487b7160e01b600052601160045260246000fd5b8082028115828204841417610cd157610cd16140c5565b60006020828403121561410457600080fd5b81356001600160a01b038116811461008c57600080fd5b80151581146105d757600080fd5b60006020828403121561413b57600080fd5b813561008c8161411b565b80820180821115610cd157610cd16140c5565b60006020828403121561416b57600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b60008261419757614197614172565b500690565b81810381811115610cd157610cd16140c5565b6001600160701b038181168382160190808211156136f9576136f96140c5565b6001600160801b038181168382160190808211156136f9576136f96140c5565b81810360008312801583831316838312821617156136f9576136f96140c5565b6001600160801b038281168282160390808211156136f9576136f96140c5565b808201828112600083128015821682158216171561424f5761424f6140c5565b505092915050565b60008261426657614266614172565b600160ff1b821460001984141615614280576142806140c5565b500590565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610cd157610cd16140c5565b600081600f0b60016001607f1b031981036142cf576142cf6140c5565b60000392915050565b6000600160ff1b82016142ed576142ed6140c5565b5060000390565b602081016004831061431657634e487b7160e01b600052602160045260246000fd5b91905290565b60006020828403121561432e57600080fd5b815161008c8161411b565b6000825160005b8181101561435a5760208186018101518583015201614340565b50600092019182525091905056fea2646970667358221220245d12ee6c1ffdb6065527abc45b2d8c590971fa16aa7f8e538f4130ceae7d9664736f6c63430008140033",
        "sourceMap": "755:375:28:-:0;;;987:141;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1713:1:121;1917:7;:21;5109:17:70;;-1:-1:-1;;;;;5096:30:70;;;;;;;5216;;;;;5190:56;;5669:28;;;;5645:52;;5985:32;;;;;5957:60;;6200:26;;;;;6178:48;;;6256:24;;;;;6236:44;;-1:-1:-1;6305:19:70;;;;6290:34;;;6389:12;;;;;;:18;6377:30;;;6428:12;;-1:-1:-1;6428:17:70;;;;-1:-1:-1;6417:28:70;;;6474:12;;-1:-1:-1;6474:25:70;;;;6455:44;;;;6532:12;;:29;;;;6509:52;;;-1:-1:-1;;6638:21:70;6621:38;;;;-1:-1:-1;;;6687:22:70;6669:40;;6790:18;;;;6776:11;:32;;-1:-1:-1;;;;;;6776:32:70;;;;;;;;;;6834:20;;;;6818:36;;;;1508:16:23;;;755:375:28;;14:347:182;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:182;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:185::-;453:13;;-1:-1:-1;;;;;495:31:182;;485:42;;475:70;;541:1;538;531:12;475:70;366:185;;;:::o;556:681::-;618:5;666:4;654:9;649:3;645:19;641:30;638:50;;;684:1;681;674:12;638:50;717:2;711:9;759:4;747:17;;-1:-1:-1;;;;;779:34:182;;815:22;;;776:62;773:185;;;880:10;875:3;871:20;868:1;861:31;915:4;912:1;905:15;943:4;940:1;933:15;773:185;978:10;974:2;967:22;;1007:6;998:15;;1043:9;1037:16;1029:6;1022:32;1108:2;1097:9;1093:18;1087:25;1082:2;1074:6;1070:15;1063:50;1167:2;1156:9;1152:18;1146:25;1141:2;1133:6;1129:15;1122:50;1226:2;1215:9;1211:18;1205:25;1200:2;1192:6;1188:15;1181:50;;556:681;;;;:::o;1242:1376::-;1366:6;1374;1418:9;1409:7;1405:23;1448:3;1444:2;1440:12;1437:32;;;1465:1;1462;1455:12;1437:32;1488:6;1514:2;1510;1506:11;1503:31;;;1530:1;1527;1520:12;1503:31;1556:17;;:::i;:::-;1543:30;;1596:48;1634:9;1596:48;:::i;:::-;1589:5;1582:63;1677:57;1730:2;1719:9;1715:18;1677:57;:::i;:::-;1672:2;1665:5;1661:14;1654:81;1788:2;1777:9;1773:18;1767:25;1762:2;1755:5;1751:14;1744:49;1846:2;1835:9;1831:18;1825:25;1820:2;1813:5;1809:14;1802:49;1905:3;1894:9;1890:19;1884:26;1878:3;1871:5;1867:15;1860:51;1965:3;1954:9;1950:19;1944:26;1938:3;1931:5;1927:15;1920:51;2025:3;2014:9;2010:19;2004:26;1998:3;1991:5;1987:15;1980:51;2085:3;2074:9;2070:19;2064:26;2058:3;2051:5;2047:15;2040:51;2110:3;2166:2;2155:9;2151:18;2145:25;2140:2;2133:5;2129:14;2122:49;;2190:3;2225:57;2278:2;2267:9;2263:18;2225:57;:::i;:::-;2209:14;;;2202:81;2302:3;2337:57;2375:18;;;2337:57;:::i;:::-;2321:14;;;2314:81;2414:3;2449:62;2503:7;2483:18;;;2449:62;:::i;:::-;2444:2;2437:5;2433:14;2426:86;;2531:5;2521:15;;2555:57;2608:2;2597:9;2593:18;2555:57;:::i;:::-;2545:67;;;;1242:1376;;;;;:::o;:::-;755:375:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x6080604052600436106100295760003560e01c806377d05ff41461002e578063cba2e58d14610054575b600080fd5b61004161003c36600461401b565b61007c565b6040519081526020015b60405180910390f35b61006761006236600461406b565b610093565b6040805192835260208301919091520161004b565b60006100898484846100b0565b90505b9392505050565b6000806100a286868686610324565b915091505b94509492505050565b60006100ba610556565b6100c2610580565b6100cb826105a1565b60055460ff16156100ef57604051637983c05160e01b815260040160405180910390fd5b6000806100fc86856105da565b909250905061012c7f000000000000000000000000000000000000000000000000000000000000000060026140db565b82101561014c57604051632afb507160e21b815260040160405180910390fd5b6005805460ff1916600117905560027f0000000000000000000000000000000000000000000000000000000000000000028203925061018a82610768565b600180546001600160801b0319166001600160801b039290921691909117905561021f61021a837f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610792565b610768565b600180546001600160801b03928316600160801b0292169190911790556102686000807f0000000000000000000000000000000000000000000000000000000000000000610831565b610280600061027a60208701876140f2565b85610831565b61029161028b6108d9565b82610914565b50600061029f878387610cd7565b90506102ae60208601866140f2565b6001600160a01b03167fdfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f9528583866102eb60408b0160208c01614129565b60408051948552602085019390935291830152151560608201526080810189905260a00160405180910390a250505061008c6001600055565b60008061032f610556565b600554610100900460ff1615610358576040516321081abf60e01b815260040160405180910390fd5b610360610580565b610369836105a1565b60008061037688866105da565b909250905060006103878383610d06565b90507f00000000000000000000000000000000000000000000000000000000000000008110156103ca5760405163211ddda360e11b815260040160405180910390fd5b868210156103eb576040516342af972b60e01b815260040160405180910390fd5b60006103f56108d9565b90506104018184610914565b5060008061040f8686610d1b565b90985090925090508a8710156104385760405163c972651760e01b815260040160405180910390fd5b806009600082825461044a9190614146565b9091555061047a90507f000000000000000000000000000000000000000000000000000000000000000084614146565b97506104888288878b610f2c565b600061049560018a6110c8565b90506104ae816104a860208d018d6140f2565b8a610831565b8c8989888d856104c160208301836140f2565b6001600160a01b03167f88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c866104f7898787610cd7565b6105028a88886110fd565b6105126040880160208901614129565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a350909a50505050505050505050506100a76001600055565b60026000540361057957604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561059f57604051631574f9f360e01b815260040160405180910390fd5b565b60006105b060208301836140f2565b6001600160a01b0316036105d75760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000806105ed6040840160208501614129565b1561071f576106276001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333087611125565b6106877f0000000000000000000000000000000000000000000000000000000000000000610656866001614146565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190611192565b604051636e553f6560e01b8152600481018590523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af11580156106f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107189190614159565b9150610757565b8391506107576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333085611125565b61075f611222565b90509250929050565b6000600160801b821061078e57604051630f0af95160e11b815260040160405180910390fd5b5090565b6000806107a3846301e133806112b5565b905060006107b18683610d06565b6107c390670de0b6b3a7640000614146565b9050670de0b6b3a764000081106107f7576107f06107e9670de0b6b3a7640000866112b5565b82906112ca565b905061080f565b61080c6107e9670de0b6b3a76400008661133f565b90505b6108238161081d898b610d06565b90610d06565b925050505b95945050505050565b6000838152600b602090815260408083206001600160a01b038616845290915281208054839290610863908490614146565b90915550506000838152600c602052604081208054839290610886908490614146565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006109057f000000000000000000000000000000000000000000000000000000000000000042614188565b61090f904261419c565b905090565b600082815260076020526040812080546001600160801b031615158061093957504284115b1561094f57546001600160801b03169050610cd1565b61095883610768565b81546001600160801b0319166001600160801b039190911617815561097c83611354565b50600090506007816109ae7f00000000000000000000000000000000000000000000000000000000000000008861419c565b815260208101919091526040016000908120546001600160801b031691506109d76002876110c8565b6000818152600c60205260408120549192508115610b1857506001600080610a01848a88846114f8565b915091508060096000828254610a179190614146565b90915550610a33905084600084610a2d816115c6565b8e6115f0565b610a3d8183614146565b9150610a6d8483888c8d7f000000000000000000000000000000000000000000000000000000000000000061176a565b9150610a81610a7c838b610d06565b6117b4565b60058054600290610aa29084906201000090046001600160701b03166141af565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610acf82610768565b60058054601090610af1908490600160801b90046001600160801b03166141cf565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610b2560018a6110c8565b6000818152600c60205260409020549091508015610c355760019250600080610b51838c8a60016114f8565b915091508060096000828254610b679190614146565b909155508c9050610b8484600085610b7e816115c6565b856117da565b610b8e828461419c565b9250610b9d610a7c848e610d06565b60058054600290610bbe9084906201000090046001600160701b03166141af565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610beb83610768565b60058054601090610c0d908490600160801b90046001600160801b03166141cf565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505b8215610c6c57610c61610c47856115c6565b610c50836115c6565b610c5a91906141ef565b60006119cf565b610c6a89611a82565b505b6000610c778a611bf1565b50604080518c815260208101889052908101849052606081018290529091508b907f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15519060800160405180910390a289985050505050505050505b92915050565b6000610ce96040830160208401614129565b15610cf557508261008c565b610cff8484610d06565b905061008c565b600061008c8383670de0b6b3a7640000611ce1565b6000806000610d87610d2b611cff565b600154600160801b90046001600160801b0316877f0000000000000000000000000000000000000000000000000000000000000000887f0000000000000000000000000000000000000000000000000000000000000000611d20565b91506000610df0610d96611cff565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611d4c565b9050610e478684610e42847f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611d63565b611dce565b15610e5657610e566002611e10565b600080610e64888489611e34565b9092509050610e73828661419c565b9450610e80818489611ce1565b9350610e8c848961419c565b9550670de0b6b3a7640000610f1287610ea3611cff565b610ead9190614146565b600154610ecb908990600160801b90046001600160801b031661419c565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611d4c565b1115610f2257610f226002611e10565b5050509250925092565b600254600160801b90046001600160801b0316610f6e61021a82610f58670de0b6b3a7640000866140db565b6004546001600160801b03169190886001611eb4565b600480546001600160801b0319166001600160801b0392909216919091179055610f9785610768565b60018054600090610fb29084906001600160801b03166141cf565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610fdf84610768565b60018054601090611001908490600160801b90046001600160801b031661420f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061102e84610768565b61103890826141cf565b600280546001600160801b03808416600160801b0291161790559050600061105f83611f71565b905061107d8161106e876115c6565b611078908461422f565b6119cf565b61108684611fb5565b611094576110946003611e10565b600061109f85611a82565b9050806110bf57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156110f25760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600061110f6040830160208401614129565b1561111e57610cff84846112b5565b508261008c565b6040516001600160a01b03848116602483015283811660448301526064820183905261118c9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050612015565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526111e38482612078565b61118c576040516001600160a01b0384811660248301526000604483015261121891869182169063095ea7b39060640161115a565b61118c8482612015565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015611291573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061090f9190614159565b600061008c83670de0b6b3a764000084611ce1565b6000816000036112e35750670de0b6b3a7640000610cd1565b826000036112f357506000610cd1565b60006112fe836115c6565b9050600061131361130e866115c6565b61211b565b905081810261132a670de0b6b3a764000082614257565b905061133581612341565b9695505050505050565b600061008c83670de0b6b3a7640000846124d6565b6005546000908190611377908490600160801b90046001600160801b0316610d06565b6005546201000090046001600160701b031692509050818111156114f35760006113a1838361419c565b90506113b061021a828661133f565b600580546010906113d2908490600160801b90046001600160801b031661420f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061140b85836112b590919063ffffffff16565b90506000611439827f0000000000000000000000000000000000000000000000000000000000000000610d06565b9050806009600082825461144d9190614146565b9091555061145d9050818361419c565b915061146882610768565b600180546000906114839084906001600160801b03166141cf565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506114b0826124fc565b600380546000906114c5908490600f0b614285565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60008061150586866112b5565b91506000611533837f0000000000000000000000000000000000000000000000000000000000000000610d06565b905061155f817f0000000000000000000000000000000000000000000000000000000000000000610d06565b9150831561158257611571828261419c565b61157b908461419c565b9250611599565b61158c828261419c565b6115969084614146565b92505b848610156115bc576115ac838787611ce1565b92506115b9828787611ce1565b91505b5094509492505050565b60006001600160ff1b0382111561078e5760405163396ea70160e11b815260040160405180910390fd5b600354600160801b90046001600160801b031661163961021a8261161c670de0b6b3a7640000866140db565b600454600160801b90046001600160801b031691908a6000611eb4565b600480546001600160801b03928316600160801b02921691909117905561165f86610768565b611669908261420f565b600380546001600160801b03928316600160801b02921691909117905561168f84610768565b600180546000906116aa9084906001600160801b03166141cf565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506116d783612526565b600380546000906116ec908490600f0b614285565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061171c85610768565b6001805460109061173e908490600160801b90046001600160801b031661420f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806117828461177c8a888a611ce1565b906112b5565b905061178f888486611ce1565b6117999082614146565b9050868111156117a95786810391505b509695505050505050565b6000600160701b821061078e5760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b03168381108061181c57507f000000000000000000000000000000000000000000000000000000000000000061181a858361419c565b105b1561182b5761182b6003611e10565b6003549084900390600f0b61184084826141ef565b90508361184c866115c6565b13801561188157507f000000000000000000000000000000000000000000000000000000000000000061187f8383612564565b105b15611890576118906001611e10565b600254600160801b90046001600160801b03166118d261021a826118bc670de0b6b3a7640000886140db565b6004546001600160801b031691908c6000611eb4565b600480546001600160801b0319166001600160801b03929092169190911790556118fc888261419c565b905061190781610768565b600280546001600160801b03928316600160801b02921691909117905561192d83610768565b600180546001600160801b0319166001600160801b039290921691909117905561195682612526565b600380546001600160801b0319166001600160801b039290921691909117905561197f87610768565b600180546010906119a1908490600160801b90046001600160801b03166141cf565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006119f86119de8483612590565b6119e9846000612590565b6119f391906141ef565b612526565b9050600081600f0b1315611a4d5760028054829190600090611a249084906001600160801b03166141cf565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b1215611a7d57611a62816142b2565b60028054600090611a249084906001600160801b031661420f565b505050565b600654600360f81b6000908152600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5490918291611acd916001600160801b03169061419c565b905080600003611ae05750600192915050565b6000611aeb846125a6565b905080600003611aff575060019392505050565b600080611b0d83858861264b565b9150915080611b225750600095945050505050565b600080611b2e84612758565b91509150611b3b82610768565b60068054600090611b569084906001600160801b03166141cf565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b8381610768565b60068054601090611ba5908490600160801b90046001600160801b03166141cf565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611be3611bd5826115c6565b611bde906142d8565b612822565b506001979650505050505050565b600080600080611c08611c0386612912565b612a4c565b9150915080611c1e575060009485945092505050565b6000808611611c2e576000611c38565b611c388387610d06565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b0390921691611ca39190614146565b611cad919061419c565b905080600003611cc65750600096879650945050505050565b6000611cd283836112b5565b98600198509650505050505050565b6000826000190484118302158202611cf857600080fd5b5091020490565b60015460035460009161090f916001600160801b0390911690600f0b612564565b6000611d41878787611d3a88670de0b6b3a764000061419c565b8787612ad9565b979650505050505050565b600061082882611d5d858888611ce1565b906112ca565b6000610089611daa611d7d84670de0b6b3a764000061419c565b611da4670de0b6b3a7640000611d93818a61133f565b611d9d919061419c565b8790612b8a565b90612b8a565b611dbc90670de0b6b3a7640000614146565b61177c84670de0b6b3a764000061419c565b600080611e0585611ddd611cff565b611de79190614146565b600154610ecb908790600160801b90046001600160801b031661419c565b909210949350505050565b80604051633c06d78b60e11b8152600401611e2b91906142f4565b60405180910390fd5b600080611e7e85611da485817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000611e74818c61133f565b611da4919061419c565b9150611eaa827f0000000000000000000000000000000000000000000000000000000000000000610d06565b9050935093915050565b600082600003611ec5575084610828565b8115611f3757611ef6611ed88487614146565b611ee28587610d06565b611eec888a610d06565b61177c9190614146565b90506000611f048588612b9f565b90506000611f128689612bae565b905081831015611f2457819250611f30565b80831115611f30578092505b5050610828565b828503611f4657506000610828565b611335611f53848761419c565b611f5d8587612b8a565b611f67888a610d06565b61177c919061419c565b6000611f99600c6000611f856002866110c8565b8152602001908152602001600020546115c6565b611fab600c6000611f856001876110c8565b610cd191906141ef565b6000611fe17f000000000000000000000000000000000000000000000000000000000000000083612b8a565b600254611ff791906001600160801b0316614146565b60015461200d906001600160801b031684610d06565b101592915050565b600061202a6001600160a01b03841683612bbd565b9050805160001415801561204f57508080602001905181019061204d919061431c565b155b15611a7d57604051635274afe760e01b81526001600160a01b0384166004820152602401611e2b565b6000806000846001600160a01b0316846040516120959190614339565b6000604051808303816000865af19150503d80600081146120d2576040519150601f19603f3d011682016040523d82523d6000602084013e6120d7565b606091505b5091509150818015612101575080511580612101575080806020019051810190612101919061431c565b80156108285750505050506001600160a01b03163b151590565b600080821361213d5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906121c09084901c6115c6565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361235c57506000919050565b680755bf798b4a1bf1e58212612385576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061133574029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6115c6565b60008260001904841183021582026124ed57600080fd5b50910281810615159190040190565b600060016001607f1b0382111561078e5760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03198212801590612547575060016001607f1b038213155b61078e5760405163a5353be560e01b815260040160405180910390fd5b60008082612571856115c6565b61257b91906141ef565b9050600081121561008c5761008c6001611e10565b600081831361259f578161008c565b5090919050565b60025460009081906125c1906001600160801b03168461133f565b90506125ed7f000000000000000000000000000000000000000000000000000000000000000082614146565b6001546001600160801b03161115612645576001547f0000000000000000000000000000000000000000000000000000000000000000906126389083906001600160801b031661419c565b612642919061419c565b91505b50919050565b612653613f56565b60008061265f84612912565b9050600061266c82612a4c565b93509050826126815750600091506127509050565b60006126a86126a3846101600151856101400151610d0690919063ffffffff16565b6115c6565b6126c86126a3856101200151866101000151612b8a90919063ffffffff16565b6126d291906141ef565b604080516101208101825285815260208082019590955260008052600c85527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e85481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b600080600061276f8460c001518560e00151612564565b905060008061277e8684612bcb565b915091508061279557506000958695509350505050565b60006127a18784612cd0565b9050806000036127ba5750600096879650945050505050565b866060015181116127d15796919550909350505050565b50606086015160006127e4888686612d88565b9050806000036127fe575060009788975095505050505050565b838110612815575060009788975095505050505050565b9097909650945050505050565b6001546003546001600160801b0380831692600f9290920b91600160801b900416600080806128748686867f00000000000000000000000000000000000000000000000000000000000000008b6130aa565b9250925092508583146128ab5761288a83610768565b600180546001600160801b0319166001600160801b03929092169190911790555b8482146128dc576128bb82612526565b600380546001600160801b0319166001600160801b03929092169190911790555b8381146110bf576128ec81610768565b600180546001600160801b03928316600160801b02921691909117905550505050505050565b61291a613fa8565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191612a129116613176565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612a4492900416613176565b905292915050565b6000806000806000612a5d866131ec565b9150915080612a7457506000958695509350505050565b612a818660a001516115c6565b612a8a876134f7565b83612a9889600001516115c6565b612aa2919061422f565b612aac919061422f565b612ab691906141ef565b925050506000811215612acf5750600093849350915050565b9360019350915050565b600080612ae9888887878761355b565b9050612b0385611d5d612afc898c614146565b8690610d06565b9750612b10848985611ce1565b975087811015612b2457612b246000611e10565b878103670de0b6b3a76400008110612b5257612b4b6107e9670de0b6b3a76400008861133f565b9050612b6a565b612b676107e9670de0b6b3a7640000886112b5565b90505b80881015612b7c57612b7c6000611e10565b909603979650505050505050565b600061008c8383670de0b6b3a76400006124d6565b6000818311612645578261008c565b600081831161259f578161008c565b606061008c8383600061358a565b60008060008460a0015112612be857505060808201516001612cc9565b60008460a00151612bf8906142d8565b90506000612c3485876101000151886000015160e00151670de0b6b3a7640000612c22919061419c565b8951606081015160809091015161361d565b9350905082612c4b57600080935093505050612cc9565b6000612c57838361133f565b9050670de0b6b3a76400008111612c935780670de0b6b3a7640000039450612c8c8760c0015186610d0690919063ffffffff16565b9450612ca2565b60008094509450505050612cc9565b8660800151851115612cc1578660800151600194509450505050612cc9565b506001925050505b9250929050565b6000612d058360c001518460e00151856101000151866000015160a00151612cf7876115c6565b612d00906142d8565b6130aa565b8551604081019190915260208101919091525282516000908190612d2890612a4c565b91509150801580612d3d575084602001518210155b15612d4d57600092505050610cd1565b600085606001518660400151612d639190614146565b9050612d7e83876020015183611ce19092919063ffffffff16565b611335908261419c565b60008084606001518560400151612d9f9190614146565b60208601516060870151919250600091612db99184611ce1565b90508560a00151600003612dd057915061008c9050565b60005b60048110156130a057612de68286612b9f565b9150612e0d8760c001518860e001518961010001518a6000015160a00151612cf7876115c6565b895160408101919091526020810191909152528651600090612e2e906136c9565b9050612e3b888286613700565b15612e4657506130a0565b60008860a001511315612f9657875180516020820151604083015160a084015160e0909401518c946000948594612ea0949193909290612e8e90670de0b6b3a764000061419c565b88516060810151608090910151613765565b9150915080612eb957600097505050505050505061008c565b818360a0015110612f9257612ecd83613851565b909650905080612ee757600097505050505050505061008c565b612f0c8360c001518460e00151856101000151866000015160a00151612cf78b6115c6565b85516040808201929092526020808201939093529290925284518051918101519281015160a0909101518e5160e00151612f5594929190612e8e90670de0b6b3a764000061419c565b909250905080612f6f57600097505050505050505061008c565b8a60a001518211612f89578597505050505050505061008c565b50505050612dd3565b5050505b600080612fa88a8a8c60a00151613927565b91509150801580612fc15750670de0b6b3a76400008210155b15612fd5576000965050505050505061008c565b81670de0b6b3a764000003915060006130026126a38c604001518d60200151612b8a90919063ffffffff16565b61300f6126a3868a610d06565b61301991906141ef565b90506000811315613043576130328761177c83866112b5565b61303c9087614146565b9550613091565b600081121561308857600061305d8861177c8681866142d8565b905086811015613071578087039650613082565b60009850505050505050505061008c565b50613091565b505050506130a0565b84600101945050505050612dd3565b5095945050505050565b6000806000836000036130c457508691508590508461316b565b6000846130d08a6115c6565b6130da919061422f565b90506130e5866115c6565b8112156131055760405163585fe6df60e11b815260040160405180910390fd5b809350600088126131255761311e6126a3858a8c611ce1565b9250613148565b61313c6126a36131348a6142d8565b86908c6124d6565b613145906142d8565b92505b613167876131568b8b612564565b6131608787612564565b9190611ce1565b9150505b955095509592505050565b600080670de0b6b3a764000061318a6108d9565b61319491906140db565b90508083116131a45760006131ae565b6131ae818461419c565b91506126426131e5670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006140db565b83906112b5565b60008060006132116126a3856101600151866101400151610d0690919063ffffffff16565b6132316126a3866101200151876101000151612b8a90919063ffffffff16565b61323b91906141ef565b9050600061325185600001518660200151612564565b905060008213156133955760008290506000806132a2886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000613293919061419c565b8d606001518e60800151613765565b91509150806132bb575060009788975095505050505050565b8282106133595760006132f5858a60400151868c60e00151670de0b6b3a76400006132e6919061419c565b8d606001518e60800151613c63565b925090508115801561330a57508860c0015184105b156133215750600098600198509650505050505050565b8161333757506000988998509650505050505050565b613340816115c6565b613349906142d8565b9960019950975050505050505050565b6000886020015112613381576133788860a00151856126a3919061419c565b611cd2906142d8565b60a08801518851613378916126a39161419c565b60008212156134e95760006133a9836142d8565b90506000806133de8489604001518a60e00151670de0b6b3a76400006133cf919061419c565b8b606001518c6080015161361d565b91509150806133f7575060009788975095505050505050565b82821061347c576000613431858a60400151868c60e00151670de0b6b3a7640000613422919061419c565b8d606001518e60800151613d26565b925090508115801561344657508860c0015184105b1561345d5750600098600198509650505050505050565b8161347357506000988998509650505050505050565b613349816115c6565b60006134ae858a604001518b60e00151670de0b6b3a764000061349f919061419c565b8c606001518d60800151613dfd565b92509050816134c857506000988998509650505050505050565b6133496134df8a60600151858761177c919061419c565b6126a39083614146565b506000946001945092505050565b600061352a6126a3836101200151670de0b6b3a7640000613518919061419c565b606085015161010086015191906124d6565b611fab6126a3846101600151670de0b6b3a7640000613549919061419c565b60608601516101408701519190611ce1565b600061356785856112ca565b61358061357886611d5d868b612b8a565b8590856124d6565b6113359190614146565b6060814710156135af5760405163cd78605960e01b8152306004820152602401611e2b565b600080856001600160a01b031684866040516135cb9190614339565b60006040518083038185875af1925050503d8060008114613608576040519150601f19603f3d011682016040523d82523d6000602084013e61360d565b606091505b5091509150611335868383613eac565b600080600061362f888888888861355b565b9050600061365a670de0b6b3a764000061364988886112b5565b6136539190614146565b839061133f565b9050670de0b6b3a76400008110613687576136806107e9670de0b6b3a76400008961133f565b905061369f565b61369c6107e9670de0b6b3a7640000896112b5565b90505b808810156136b5576000809350935050506136bf565b8703925060019150505b9550959350505050565b60008060006136d784612a4c565b91509150806136f957604051635516328b60e11b815260040160405180910390fd5b5092915050565b6020830151600090613712908461133f565b60408501516137229084906112b5565b101580156100895750602084015161374b9084613160633b9aca00670de0b6b3a7640000614146565b604085015161375b90849061133f565b1115949350505050565b60008060008812156137875761377a886142d8565b6137849087614146565b95505b60006137938a8a612564565b905060006137a4828a898989613f08565b905060006137c16137b989611d5d898d612b8a565b8890886124d6565b9050808210156137da5760008094509450505050613845565b808203670de0b6b3a76400008110613808576138016107e9670de0b6b3a76400008b6112b5565b9050613820565b61381d6107e9670de0b6b3a76400008b61133f565b90505b8a811015613838576000809550955050505050613845565b8a90039450600193505050505b97509795505050505050565b60008060008360e001511361386b57506000928392509050565b600061387a84600001516134f7565b905060006138a685604001518660600151876040015161389a9190614146565b602088015191906124d6565b9050600082126138cd57808210156138c0578190036138e3565b5060009485945092505050565b6138d6826142d8565b6138e09082614146565b90505b60e085015160c08601516138f89183906124d6565b9050808560c001511015613913575060009485945092505050565b808560c00151036001935093505050915091565b600080600080841261394b57855160400151613944908590614146565b9050613986565b6000613956856142d8565b875160400151909150811015613976578651604001518190039150613984565b600080935093505050612750565b505b8551805160209091015160009161399c91612564565b875160e08101516040909101519192506000916139d3916139c7916139c0916112ca565b8990610d06565b6101008a01519061133f565b885160e08101516080909101516139fe916139f291611d5d9087610d06565b8a51606001519061133f565b613a089190614146565b90506000613a40613a34613a2d8b6000015160e00151876112ca90919063ffffffff16565b8a90612b8a565b6101008b0151906112b5565b905080821015613a5a576000809550955050505050612750565b80820391506000613a9c848b60000151604001518c6000015160e00151670de0b6b3a7640000613a8a919061419c565b8d51606081015160809091015161355b565b90506000613ac68b6000015160e00151670de0b6b3a7640000613abf919061419c565b87906112ca565b905080821015613ae25760008097509750505050505050612750565b8a51608081015160609091015191830391613afe9183916124d6565b9050670de0b6b3a76400008110613b42578a5160e00151613b3b906107e990613b2f90670de0b6b3a764000061419c565b8d5160e001519061133f565b9050613b71565b8a5160e00151613b6e906107e990613b6290670de0b6b3a764000061419c565b8d5160e00151906112b5565b90505b8a5160600151613b8490859083906124d6565b935083670de0b6b3a76400001115613ba85783670de0b6b3a7640000039350613bbb565b6000600197509750505050505050612750565b60008b60e0015112613c1c5760c08b015160e08c0151613bda9161133f565b9250670de0b6b3a76400008310613bfd5760008097509750505050505050612750565b670de0b6b3a76400009290920391613c158484610d06565b9350613c51565b613c4e613c358c60c001518d60e0015161177c906142d8565b613c4790670de0b6b3a7640000614146565b8590610d06565b93505b50919960019950975050505050505050565b6000806000613c75898988888861355b565b9050613c8586611d5d898b614146565b975087811015613c9c576000809250925050613d1b565b878103613caa8186886124d6565b9050670de0b6b3a76400008110613cd757613cd06107e9670de0b6b3a76400008961133f565b9050613cef565b613cec6107e9670de0b6b3a7640000896112b5565b90505b613cf9818661133f565b9050808a1015613d1157600080935093505050613d1b565b8903925060019150505b965096945050505050565b6000806000613d38898988888861355b565b905086881015613d4f576000809250925050613d1b565b9686900396613d5e88876112ca565b975087811015613d75576000809250925050613d1b565b878103613d838186886124d6565b9050670de0b6b3a76400008110613db057613da96107e9670de0b6b3a76400008961133f565b9050613dc8565b613dc56107e9670de0b6b3a7640000896112b5565b90505b613dd2818661133f565b905089811015613dea57600080935093505050613d1b565b9890980398600198509650505050505050565b6000806000613e0f8888888888613f08565b90506000613e33670de0b6b3a7640000613e29888861133f565b6131e59190614146565b9050670de0b6b3a76400008110613e6057613e596107e9670de0b6b3a7640000896112b5565b9050613e78565b613e756107e9670de0b6b3a76400008961133f565b90505b613e8281866112b5565b905088811015613e9a576000809350935050506136bf565b97909703976001975095505050505050565b606082613ec157613ebc82613f2d565b61008c565b8151158015613ed857506001600160a01b0384163b155b15613f0157604051639996b31560e01b81526001600160a01b0385166004820152602401611e2b565b508061008c565b6000613f1485856112ca565b613580613f2586611d5d868b610d06565b859085611ce1565b805115613f3d5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101200160405280613f6a613fa8565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561264557600080fd5b60008060006060848603121561403057600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561405557600080fd5b61406186828701614009565b9150509250925092565b6000806000806080858703121561408157600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156140ad57600080fd5b6140b987828801614009565b91505092959194509250565b634e487b7160e01b600052601160045260246000fd5b8082028115828204841417610cd157610cd16140c5565b60006020828403121561410457600080fd5b81356001600160a01b038116811461008c57600080fd5b80151581146105d757600080fd5b60006020828403121561413b57600080fd5b813561008c8161411b565b80820180821115610cd157610cd16140c5565b60006020828403121561416b57600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b60008261419757614197614172565b500690565b81810381811115610cd157610cd16140c5565b6001600160701b038181168382160190808211156136f9576136f96140c5565b6001600160801b038181168382160190808211156136f9576136f96140c5565b81810360008312801583831316838312821617156136f9576136f96140c5565b6001600160801b038281168282160390808211156136f9576136f96140c5565b808201828112600083128015821682158216171561424f5761424f6140c5565b505092915050565b60008261426657614266614172565b600160ff1b821460001984141615614280576142806140c5565b500590565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610cd157610cd16140c5565b600081600f0b60016001607f1b031981036142cf576142cf6140c5565b60000392915050565b6000600160ff1b82016142ed576142ed6140c5565b5060000390565b602081016004831061431657634e487b7160e01b600052602160045260246000fd5b91905290565b60006020828403121561432e57600080fd5b815161008c8161411b565b6000825160005b8181101561435a5760208186018101518583015201614340565b50600092019182525091905056fea2646970667358221220245d12ee6c1ffdb6065527abc45b2d8c590971fa16aa7f8e538f4130ceae7d9664736f6c63430008140033",
        "sourceMap": "755:375:28:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;1778:227:19;;;;;;:::i;:::-;;:::i;:::-;;;817:25:182;;;805:2;790:18;1778:227:19;;;;;;;;2774:290;;;;;;:::i;:::-;;:::i;:::-;;;;1593:25:182;;;1649:2;1634:18;;1627:34;;;;1566:18;2774:290:19;1419:248:182;1778:227:19;1930:7;1956:42;1968:13;1983:4;1989:8;1956:11;:42::i;:::-;1949:49;;1778:227;;;;;;:::o;2774:290::-;2961:7;2970;2996:61;3006:7;3015:10;3027:19;3048:8;2996:9;:61::i;:::-;2989:68;;;;2774:290;;;;;;;;:::o;1598:3704:66:-;1756:16;2356:21:121;:19;:21::i;:::-;1851:20:66::1;:18;:20::i;:::-;1936:23;1950:8;1936:13;:23::i;:::-;2035:26:::0;;::::1;;2031:100;;;2084:36;;-1:-1:-1::0;;;2084:36:66::1;;;;;;;;;;;2031:100;2259:25;2286:23:::0;2313:67:::1;2335:13;2362:8;2313;:67::i;:::-;2258:122:::0;;-1:-1:-1;2258:122:66;-1:-1:-1;3311:25:66::1;3315:21;3311:1;:25;:::i;:::-;3291:17;:45;3287:121;;;3359:38;;-1:-1:-1::0;;;3359:38:66::1;;;;;;;;;;;3287:121;3564:26:::0;:33;;-1:-1:-1;;3564:33:66::1;3593:4;3564:33;::::0;;3472:1:::1;3476:21;3472:25;3452:45:::0;::::1;::::0;-1:-1:-1;3766:29:66::1;3452:17:::0;3766:27:::1;:29::i;:::-;3737:12;:58:::0;;-1:-1:-1;;;;;;3737:58:66::1;-1:-1:-1::0;;;;;3737:58:66;;;::::1;::::0;;;::::1;::::0;;3833:258:::1;:233;3907:17:::0;3942:23:::1;3983:4:::0;4005:17:::1;4040:12;3833:56;:233::i;:::-;:256;:258::i;:::-;3805:12;:286:::0;;-1:-1:-1;;;;;3805:286:66;;::::1;-1:-1:-1::0;;;3805:286:66::1;::::0;::::1;::::0;;;::::1;::::0;;4596:62:::1;3805:25;::::0;4636:21:::1;4596:5;:62::i;:::-;4668:59;554:1:71;4696:20:66;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;4718:8;4668:5;:59::i;:::-;4779:54;4796:19;:17;:19::i;:::-;4817:15;4779:16;:54::i;:::-;;4881:24;4908:112;4946:13;4973:15;5002:8;4908:24;:112::i;:::-;4881:139:::0;-1:-1:-1;5059:20:66::1;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;-1:-1:-1::0;;;;;5035:234:66::1;;5093:8:::0;5115:16;5166:17;5226:15:::1;::::0;;;::::1;::::0;::::1;;:::i;:::-;5035:234;::::0;;2890:25:182;;;2946:2;2931:18;;2924:34;;;;2974:18;;;2967:34;3044:14;3037:22;3032:2;3017:18;;3010:50;3091:3;3076:19;;3069:35;;;2877:3;2862:19;5035:234:66::1;;;;;;;5280:15;;;2398:20:121::0;1713:1;2924:7;:21;2744:208;1849:3714:67;2086:20;2108;2356:21:121;:19;:21::i;:::-;4261::64;;::::1;::::0;::::1;;;4257:85;;;4305:26;;-1:-1:-1::0;;;4305:26:64::1;;;;;;;;;;;4257:85;2194:20:67::2;:18;:20::i;:::-;2279:23;2293:8;2279:13;:23::i;:::-;2358;2383::::0;2410:61:::2;2432:7;2453:8;2410;:61::i;:::-;2357:114:::0;;-1:-1:-1;2357:114:67;-1:-1:-1;3024:21:67::2;3048:40;2357:114:::0;;3048:23:::2;:40::i;:::-;3024:64;;3118:25;3102:13;:41;3098:117;;;3166:38;;-1:-1:-1::0;;;3166:38:67::2;;;;;;;;;;;3098:117;3246:19;3228:15;:37;3224:106;;;3288:31;;-1:-1:-1::0;;;3288:31:67::2;;;;;;;;;;;3224:106;3373:24;3400:19;:17;:19::i;:::-;3373:46;;3429:51;3446:16;3464:15;3429:16;:51::i;:::-;;3742:26;3778::::0;3917:52:::2;3936:15;3953;3917:18;:52::i;:::-;3814:155:::0;;-1:-1:-1;3814:155:67;;-1:-1:-1;3814:155:67;-1:-1:-1;4029:25:67;;::::2;4025:88;;;4077:25;;-1:-1:-1::0;;;4077:25:67::2;;;;;;;;;;;4025:88;4190:18;4164:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;4279:36:67::2;::::0;-1:-1:-1;4298:17:67::2;4279:16:::0;:36:::2;:::i;:::-;4264:51;;4325:137;4353:18;4385:12;4411:15;4440:12;4325:14;:137::i;:::-;4546:15;4564:97;4599:26;4639:12;4564:21;:97::i;:::-;4546:115:::0;-1:-1:-1;4671:50:67::2;4546:115:::0;4686:20:::2;;::::0;::::2;:8:::0;:20:::2;:::i;:::-;4708:12;4671:5;:50::i;:::-;4784:7:::0;4856:12;4933;5013:15;5108:8;5217:7;5184:19:::2;;::::0;::::2;5108:8:::0;5184:19:::2;:::i;:::-;-1:-1:-1::0;;;;;5162:347:67::2;;5238:13;5265:59;5290:6;5298:16;5316:7;5265:24;:59::i;:::-;5354:66;5386:6;5394:16;5412:7;5354:31;:66::i;:::-;5458:14;::::0;;;::::2;::::0;::::2;;:::i;:::-;5162:347;::::0;;2890:25:182;;;2946:2;2931:18;;2924:34;;;;2974:18;;;2967:34;3044:14;3037:22;3032:2;3017:18;;3010:50;3091:3;3076:19;;3069:35;;;2877:3;2862:19;5162:347:67::2;;;;;;;-1:-1:-1::0;5542:13:67;;-1:-1:-1;;;;;;;;;;;2398:20:121;1713:1;2924:7;:21;2744:208;2431:307;1755:1;2558:7;;:18;2554:86;;2599:30;;-1:-1:-1;;;2599:30:121;;;;;;;;;;;2554:86;1755:1;2714:7;:17;2431:307::o;6530:145:23:-;6597:9;:14;6593:76;;6634:24;;-1:-1:-1;;;6634:24:23;;;;;;;;;;;6593:76;6530:145::o;1898:221:64:-;2042:1;2010:20;;;;:8;:20;:::i;:::-;-1:-1:-1;;;;;2010:34:64;;2006:107;;2067:35;;-1:-1:-1;;;2067:35:64;;;;;;;;;;;2006:107;1898:221;:::o;2335:1468:23:-;2482:20;;2547:15;;;;;;;;:::i;:::-;2543:1205;;;2630:141;-1:-1:-1;;;;;2644:10:23;2630:43;2691:10;2727:4;2750:7;2630:43;:141::i;:::-;3077:115;3142:6;3167:11;:7;3177:1;3167:11;:::i;:::-;-1:-1:-1;;;;;3091:10:23;3077:39;;:115;:39;:115::i;:::-;3221:38;;-1:-1:-1;;;3221:38:23;;;;;3419:25:182;;;3253:4:23;3460:18:182;;;3453:60;3221:6:23;-1:-1:-1;;;;;3221:14:23;;;;3392:18:182;;3221:38:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3206:53;;2543:1205;;;3513:7;;-1:-1:-1;3595:142:23;-1:-1:-1;;;;;3609:6:23;3595:39;3652:10;3688:4;3513:7;3595:39;:142::i;:::-;3775:21;:19;:21::i;:::-;3757:39;;2335:1468;;;;;:::o;884:190:77:-;937:9;-1:-1:-1;;;964:1:77;:12;958:86;;1000:33;;-1:-1:-1;;;1000:33:77;;;;;;;;;;;958:86;-1:-1:-1;1065:1:77;884:190::o;7656:1272:75:-;7892:20;;8130:35;:17;8156:8;8130:25;:35::i;:::-;8118:47;-1:-1:-1;8305:13:75;8327:15;:4;8118:47;8327:12;:15::i;:::-;8321:21;;193:4:74;8321:21:75;:::i;:::-;8305:37;;193:4:74;8356:5:75;:12;8352:300;;8463:36;8473:25;193:4:74;8485:12:75;8473:11;:25::i;:::-;8463:5;;:9;:36::i;:::-;8455:44;;8352:300;;;8607:34;8617:23;193:4:74;8627:12:75;8617:9;:23::i;8607:34::-;8599:42;;8352:300;8820:101;8902:5;8820:56;:23;8852;8820:31;:56::i;:::-;:64;;:101::i;:::-;8801:120;;;;7656:1272;;;;;;;;:::o;5934:316:68:-;6051:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6051:23:68;;;;;;;;;:33;;6078:6;;6051:19;:33;;6078:6;;6051:33;:::i;:::-;;;;-1:-1:-1;;6094:21:68;;;;:12;:21;;;;;:31;;6119:6;;6094:21;:31;;6119:6;;6094:31;:::i;:::-;;;;-1:-1:-1;;6184:59:68;;;1593:25:182;;;1649:2;1634:18;;1627:34;;;-1:-1:-1;;;;;6184:59:68;;;6219:1;;6199:10;;6184:59;;1566:18:182;6184:59:68;;;;;;;5934:316;;;:::o;6260:223:64:-;6336:24;6438:37;6456:19;6438:15;:37;:::i;:::-;6407:69;;:15;:69;:::i;:::-;6376:100;;6260:223;:::o;3253:7270:65:-;3379:7;3511:51;;;:12;:51;;;;;3589:27;;-1:-1:-1;;;;;3589:27:65;:32;;;:81;;;3655:15;3637;:33;3589:81;3572:168;;;3702:27;-1:-1:-1;;;;;3702:27:65;;-1:-1:-1;3695:34:65;;3572:168;3832:28;:16;:26;:28::i;:::-;3802:58;;-1:-1:-1;;;;;;3802:58:65;-1:-1:-1;;;;;3802:58:65;;;;;;;3947:40;3970:16;3947:22;:40::i;:::-;-1:-1:-1;4451:27:65;;-1:-1:-1;4481:12:65;4451:27;4507:35;4525:17;4507:15;:35;:::i;:::-;4481:71;;;;;;;;;;;-1:-1:-1;4481:71:65;;;:87;-1:-1:-1;;;;;4481:87:65;;-1:-1:-1;4601:101:65;4636:27;4677:15;4601:21;:101::i;:::-;4712:27;4742:26;;;:12;:26;;;;;;4578:124;;-1:-1:-1;4812:23:65;;4808:2275;;-1:-1:-1;5026:4:65;5189:21;;5266:190;5313:19;5354:16;5392:19;5189:21;5266:25;:190::i;:::-;5171:285;;;;5496:13;5470:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;5523:238:65;;-1:-1:-1;5557:19:65;5594:1;5613:13;5644:24;5613:13;5644:22;:24::i;:::-;5732:15;5523:16;:238::i;:::-;5995:30;6012:13;5995:30;;:::i;:::-;;;6423:254;6482:19;6519:13;6550:19;6587:16;6621;6655:8;6423:41;:254::i;:::-;6407:270;-1:-1:-1;6912:85:65;:56;6407:270;6951:16;6912:38;:56::i;:::-;:83;:85::i;:::-;6877:31;:120;;:31;;:120;;;;;;;-1:-1:-1;;;;;6877:120:65;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;6877:120:65;;;;;-1:-1:-1;;;;;6877:120:65;;;;;;7047:25;:13;:23;:25::i;:::-;7011:32;:61;;:32;;:61;;;;-1:-1:-1;;;7011:61:65;;-1:-1:-1;;;;;7011:61:65;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;7011:61:65;;;;;-1:-1:-1;;;;;7011:61:65;;;;;;4837:2246;;4808:2275;7201:19;7223:100;7258:26;7298:15;7223:21;:100::i;:::-;7333:26;7362:25;;;:12;:25;;;;;;7201:122;;-1:-1:-1;7401:22:65;;7397:1597;;7613:4;7595:22;;7775:21;7814;7852:188;7899:18;7939:16;7977:19;8018:4;7852:25;:188::i;:::-;7757:283;;;;8080:13;8054:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;8132:15:65;;-1:-1:-1;8191:235:65;8224:18;8107:22;8279:13;8310:24;8279:13;8310:22;:24::i;:::-;8398:14;8191:15;:235::i;:::-;8560:30;8577:13;8560:30;;:::i;:::-;;-1:-1:-1;8823:85:65;:56;8560:30;8862:16;8823:38;:56::i;:85::-;8788:31;:120;;:31;;:120;;;;;;;-1:-1:-1;;;;;8788:120:65;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;8788:120:65;;;;;-1:-1:-1;;;;;8788:120:65;;;;;;8958:25;:13;:23;:25::i;:::-;8922:32;:61;;:32;;:61;;;;-1:-1:-1;;;8922:61:65;;-1:-1:-1;;;;;8922:61:65;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;8922:61:65;;;;;-1:-1:-1;;;;;8922:61:65;;;;;;7425:1569;;;7397:1597;9145:15;9141:701;;;9365:132;9434:30;:19;:28;:30::i;:::-;9402:29;:18;:27;:29::i;:::-;:62;;;;:::i;:::-;9482:1;9365:19;:132::i;:::-;9788:43;9814:16;9788:25;:43::i;:::-;;9141:701;10221:20;10247:44;10274:16;10247:26;:44::i;:::-;-1:-1:-1;10306:176:65;;;4931:25:182;;;4987:2;4972:18;;4965:34;;;5015:18;;;5008:34;;;5073:2;5058:18;;5051:34;;;10220:71:65;;-1:-1:-1;10336:15:65;;10306:176;;4918:3:182;4903:19;10306:176:65;;;;;;;10500:16;10493:23;;;;;;;;;;3253:7270;;;;;:::o;27506:391:64:-;27675:7;27698:15;;;;;;;;:::i;:::-;27694:197;;;-1:-1:-1;27736:7:64;27729:14;;27694:197;27847:33;:7;27863:16;27847:15;:33::i;:::-;27840:40;;;;1610:118:74;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;17698:3870:67:-;17856:26;17896:25;17935:26;18157:251;18203:25;:23;:25::i;:::-;18242:12;:25;-1:-1:-1;;;18242:25:67;;-1:-1:-1;;;;;18242:25:67;18281:12;18319;18345:16;18375:23;18157:32;:251::i;:::-;18137:271;;18541:17;18561:184;18608:25;:23;:25::i;:::-;18647:12;:25;-1:-1:-1;;;18647:25:67;;-1:-1:-1;;;;;18647:25:67;18686:23;18723:12;18561:33;:184::i;:::-;18541:204;;18772:270;18809:12;18839:17;18874:154;18940:9;18971;19002:8;18874:44;:154::i;:::-;18772:19;:270::i;:::-;18755:449;;;19067:126;19123:56;19067:38;:126::i;:::-;19380:16;19419:26;19467:130;19510:12;19540:9;19567:16;19467:25;:130::i;:::-;19366:231;;-1:-1:-1;19366:231:67;-1:-1:-1;19793:29:67;19366:231;19793:29;;:::i;:::-;;-1:-1:-1;20367:92:67;:18;20410:9;20433:16;20367:29;:92::i;:::-;20346:113;-1:-1:-1;20718:33:67;20346:113;20718:12;:33;:::i;:::-;20697:54;;193:4:74;21072:245:67;21151:18;21123:25;:23;:25::i;:::-;:46;;;;:::i;:::-;21187:12;:25;:45;;21215:17;;-1:-1:-1;;;21187:25:67;;-1:-1:-1;;;;;21187:25:67;:45;:::i;:::-;21250:23;21291:12;21072:33;:245::i;:::-;:251;21055:430;;;21348:126;21404:56;21348:38;:126::i;:::-;21495:66;;;17698:3870;;;;;:::o;11533:2037::-;11811:29;;-1:-1:-1;;;11811:29:67;;-1:-1:-1;;;;;11811:29:67;11889:304;:279;11811:29;12044:19;193:4:74;12044:13:67;:19;:::i;:::-;11910:36;;-1:-1:-1;;;;;11910:36:67;;11889:279;12114:18;12150:4;11889:102;:279::i;:304::-;11850:36;:343;;-1:-1:-1;;;;;;11850:343:67;-1:-1:-1;;;;;11850:343:67;;;;;;;;;;12341:31;:19;:29;:31::i;:::-;12311:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;12311:61:67;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;12311:61:67;;;;;-1:-1:-1;;;;;12311:61:67;;;;;;12411:30;:18;:28;:30::i;:::-;12382:12;:59;;:25;;:59;;;;-1:-1:-1;;;12382:59:67;;-1:-1:-1;;;;;12382:59:67;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;12382:59:67;;;;;-1:-1:-1;;;;;12382:59:67;;;;;;12472:30;:18;:28;:30::i;:::-;12451:51;;;;:::i;:::-;12512:29;:49;;-1:-1:-1;;;;;12512:49:67;;;-1:-1:-1;;;12512:49:67;;;;;;12451:51;-1:-1:-1;;12740:30:67;12756:13;12740:15;:30::i;:::-;12716:54;;12780:117;12813:14;12858:29;:18;:27;:29::i;:::-;12841:46;;:14;:46;:::i;:::-;12780:19;:117::i;:::-;12996:28;13007:16;12996:10;:28::i;:::-;12991:186;;13040:126;13096:56;13040:38;:126::i;:::-;13410:12;13425:43;13451:16;13425:25;:43::i;:::-;13410:58;;13483:7;13478:86;;13513:40;;-1:-1:-1;;;13513:40:67;;;;;;;;;;;13478:86;11710:1860;;;11533:2037;;;;:::o;1198:469:71:-;1309:10;-1:-1:-1;;;;;1401:10:71;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:71;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:71;1620:18;;;;1617:34;;1198:469::o;28230:405:64:-;28406:7;28429:15;;;;;;;;:::i;:::-;28425:204;;;28540:33;:7;28556:16;28540:15;:33::i;28425:204::-;-1:-1:-1;28611:7:64;28604:14;;1702:188:118;1829:53;;-1:-1:-1;;;;;5780:15:182;;;1829:53:118;;;5762:34:182;5832:15;;;5812:18;;;5805:43;5864:18;;;5857:34;;;1802:81:118;;1822:5;;1844:18;;;;;5697::182;;1829:53:118;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1829:53:118;;;;;;;;;;;1802:19;:81::i;:::-;1702:188;;;;:::o;3296:380::-;3411:47;;;-1:-1:-1;;;;;6094:32:182;;3411:47:118;;;6076:51:182;6143:18;;;;6136:34;;;3411:47:118;;;;;;;;;;6049:18:182;;;;3411:47:118;;;;;;;;-1:-1:-1;;;;;3411:47:118;-1:-1:-1;;;3411:47:118;;;3474:44;3426:13;3411:47;3474:23;:44::i;:::-;3469:201;;3561:43;;-1:-1:-1;;;;;6094:32:182;;;3561:43:118;;;6076:51:182;3601:1:118;6143:18:182;;;6136:34;3534:71:118;;3554:5;;3576:13;;;;;6049:18:182;;3561:43:118;5902:274:182;3534:71:118;3619:40;3639:5;3646:12;3619:19;:40::i;6289:123:23:-;6378:27;;-1:-1:-1;;;6378:27:23;;193:4:74;6378:27:23;;;817:25:182;6352:7:23;;6378:6;-1:-1:-1;;;;;6378:22:23;;;;790:18:182;;6378:27:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;1884:164:74:-;1946:7;1973:21;1984:1;193:4;1992:1;1973:10;:21::i;3811:844::-;3869:7;3935:1;3940;3935:6;3931:47;;-1:-1:-1;193:4:74;3957:10;;3931:47;4031:1;4036;4031:6;4027:45;;-1:-1:-1;4060:1:74;4053:8;;4027:45;4210:15;4228:12;:1;:10;:12::i;:::-;4210:30;;4402:10;4415:16;4418:12;:1;:10;:12::i;:::-;4415:2;:16::i;:::-;4402:29;-1:-1:-1;4509:18:74;;;4546:19;193:4;4509:18;4546:19;:::i;:::-;;;4638:9;4642:4;4638:3;:9::i;:::-;4623:25;3811:844;-1:-1:-1;;;;;;3811:844:74:o;3462:114::-;3522:7;3549:19;3558:1;193:4;3566:1;3549:8;:19::i;16421:2511:64:-;16780:32;;16527:26;;;;16742:80;;:16;;-1:-1:-1;;;16780:32:64;;-1:-1:-1;;;;;16780:32:64;16742:24;:80::i;:::-;16853:31;;;;;-1:-1:-1;;;;;16853:31:64;;-1:-1:-1;16721:101:64;-1:-1:-1;17027:39:64;;;17023:1903;;;17232:22;17257:39;17278:18;17257;:39;:::i;:::-;17232:64;-1:-1:-1;17569:84:64;:55;17232:64;17607:16;17569:37;:55::i;:84::-;17533:32;:120;;:32;;:120;;;;-1:-1:-1;;;17533:120:64;;-1:-1:-1;;;;;17533:120:64;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;17533:120:64;;;;;-1:-1:-1;;;;;17533:120:64;;;;;;17952:28;17983:70;18023:16;17983:14;:22;;:70;;;;:::i;:::-;17952:101;-1:-1:-1;18067:36:64;18106:80;17952:101;18152:20;18106:28;:80::i;:::-;18067:119;;18226:28;18200:22;;:54;;;;;;;:::i;:::-;;;;-1:-1:-1;18531:52:64;;-1:-1:-1;18555:28:64;18531:52;;:::i;:::-;;;18627:32;:20;:30;:32::i;:::-;18597:12;:62;;:26;;:62;;;;-1:-1:-1;;;;;18597:62:64;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;18597:62:64;;;;;-1:-1:-1;;;;;18597:62:64;;;;;;18705:31;:20;:29;:31::i;:::-;18673:28;:63;;:28;;:63;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;18673:63:64;;;;;;;-1:-1:-1;;;;;18673:63:64;;;;;;18897:18;18876:39;;17068:1858;;;17023:1903;16421:2511;;;:::o;11087:2398:65:-;11274:21;;11680:37;:11;11700:16;11680:19;:37::i;:::-;11664:53;-1:-1:-1;11727:15:65;11745:31;11664:53;11767:8;11745:21;:31::i;:::-;11727:49;-1:-1:-1;11802:33:65;11727:49;11818:16;11802:15;:33::i;:::-;11786:49;;12262:7;12258:557;;;12302:23;12312:13;12302:7;:23;:::i;:::-;12285:40;;;;:::i;:::-;;;12258:557;;;12781:23;12791:13;12781:7;:23;:::i;:::-;12764:40;;;;:::i;:::-;;;12258:557;13033:20;13014:16;:39;13010:469;;;13148:110;:13;13190:16;13224:20;13148:24;:110::i;:::-;13132:126;-1:-1:-1;13358:110:65;:13;13400:16;13434:20;13358:24;:110::i;:::-;13342:126;;13010:469;11320:2165;11087:2398;;;;;;;:::o;2001:204:77:-;2053:8;-1:-1:-1;;;;;2079:1:77;:30;;2073:103;;2133:32;;-1:-1:-1;;;2133:32:77;;;;;;;;;;;16953:1127:69;17255:30;;-1:-1:-1;;;17255:30:69;;-1:-1:-1;;;;;17255:30:69;17335:300;:275;17255:30;17492:19;193:4:74;17492:13:69;:19;:::i;:::-;17356:37;;-1:-1:-1;;;17356:37:69;;-1:-1:-1;;;;;17356:37:69;;;17562:11;17591:5;17335:103;:275::i;:300::-;17295:37;:340;;-1:-1:-1;;;;;17295:340:69;;;-1:-1:-1;;;17295:340:69;;;;;;;;;17778:23;:11;:21;:23::i;:::-;17745:56;;:18;:56;:::i;:::-;17700:30;:101;;-1:-1:-1;;;;;17700:101:69;;;-1:-1:-1;;;17700:101:69;;;;;;;;;17899:31;:19;:29;:31::i;:::-;17869:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;17869:61:69;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;17869:61:69;;;;;-1:-1:-1;;;;;17869:61:69;;;;;;17972:32;:21;:30;:32::i;:::-;17940:28;:64;;:28;;:64;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;17940:64:69;;;;;;;-1:-1:-1;;;;;17940:64:69;;;;;;18043:30;:18;:28;:30::i;:::-;18014:12;:59;;:25;;:59;;;;-1:-1:-1;;;18014:59:69;;-1:-1:-1;;;;;18014:59:69;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;18014:59:69;;;;;-1:-1:-1;;;;;18014:59:69;;;;;;17165:915;16953:1127;;;;;:::o;13567:1674:75:-;13828:21;;14294:119;14396:16;14294:80;:11;14330:21;14353:20;14294:35;:80::i;:::-;:101;;:119::i;:::-;14273:140;-1:-1:-1;14664:50:75;:11;14687:8;14697:16;14664:22;:50::i;:::-;14650:64;;;;:::i;:::-;;;15030:12;15017:10;:25;15013:191;;;15167:12;15154:10;:25;15138:41;;15013:191;15214:20;13567:1674;;;;;;;;:::o;527:190:77:-;580:9;-1:-1:-1;;;607:1:77;:12;601:86;;643:33;;-1:-1:-1;;;643:33:77;;;;;;;;;;;14039:3167:67;14423:12;:26;-1:-1:-1;;;;;14423:26:67;14476:35;;;;:110;;-1:-1:-1;14565:21:67;14527:35;14543:19;14527:13;:35;:::i;:::-;:59;14476:110;14459:289;;;14611:126;14667:56;14611:38;:126::i;:::-;15310:28;;14781:36;;;;;15310:28;;15348:40;15367:21;15310:28;15348:40;:::i;:::-;;;15448:21;15415:30;:19;:28;:30::i;:::-;:54;:230;;;;;15624:21;15485:124;15549:13;15580:15;15485:46;:124::i;:::-;:160;15415:230;15398:464;;;15670:181;15726:111;15670:38;:181::i;:::-;15949:29;;-1:-1:-1;;;15949:29:67;;-1:-1:-1;;;;;15949:29:67;16027:297;:272;15949:29;16181:19;193:4:74;16181:13:67;:19;:::i;:::-;16048:36;;-1:-1:-1;;;;;16048:36:67;;16027:272;16251:11;16280:5;16027:102;:272::i;:297::-;15988:36;:336;;-1:-1:-1;;;;;;15988:336:67;-1:-1:-1;;;;;15988:336:67;;;;;;;;;;16386:31;16406:11;16386:31;;:::i;:::-;;;16459:28;:16;:26;:28::i;:::-;16427:29;:60;;-1:-1:-1;;;;;16427:60:67;;;-1:-1:-1;;;16427:60:67;;;;;;;;;17038:25;:13;:23;:25::i;:::-;17009:12;:54;;-1:-1:-1;;;;;;17009:54:67;-1:-1:-1;;;;;17009:54:67;;;;;;;;;;17104:26;:15;:24;:26::i;:::-;17073:28;:57;;-1:-1:-1;;;;;;17073:57:67;-1:-1:-1;;;;;17073:57:67;;;;;;;;;;17169:30;:18;:28;:30::i;:::-;17140:12;:59;;:25;;:59;;;;-1:-1:-1;;;17140:59:67;;-1:-1:-1;;;;;17140:59:67;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;17140:59:67;;;;;-1:-1:-1;;;;;17140:59:67;;;;;;14250:2956;;;14039:3167;;;;;:::o;13377:551:64:-;13681:12;13696:43;13713:14;:7;13681:12;13713:11;:14::i;:::-;13697:13;:6;13708:1;13697:10;:13::i;:::-;:30;;;;:::i;:::-;13696:41;:43::i;:::-;13681:58;;13761:1;13753:5;:9;;;13749:173;;;13778:25;:43;;13815:5;;13778:25;;;:43;;13815:5;;-1:-1:-1;;;;;13778:43:64;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13778:43:64;;;;;-1:-1:-1;;;;;13778:43:64;;;;;;13446:482;13377:551;;:::o;13749:173::-;13850:1;13842:5;:9;;;13838:84;;;13904:6;13905:5;13904:6;:::i;:::-;13867:25;:44;;:25;;:44;;;;-1:-1:-1;;;;;13867:44:64;;:::i;13838:84::-;13446:482;13377:551;;:::o;21319:1688:66:-;21633:13;:29;-1:-1:-1;;;21412:4:66;21560:70;;;:12;:70;;;;21412:4;;;;21560:102;;-1:-1:-1;;;;;21633:29:66;;21560:102;:::i;:::-;21522:140;;21676:27;21707:1;21676:32;21672:74;;-1:-1:-1;21731:4:66;;21319:1688;-1:-1:-1;;21319:1688:66:o;21672:74::-;21832:12;21847:45;21875:16;21847:27;:45::i;:::-;21832:60;;21906:4;21914:1;21906:9;21902:51;;-1:-1:-1;21938:4:66;;21319:1688;-1:-1:-1;;;21319:1688:66:o;21902:51::-;22133:47;22194:12;22219:149;22271:4;22293:27;22338:16;22219:34;:149::i;:::-;22119:249;;;;22383:7;22378:51;;-1:-1:-1;22413:5:66;;21319:1688;-1:-1:-1;;;;;21319:1688:66:o;22378:51::-;22554:32;22588:21;22613:57;22663:6;22613:49;:57::i;:::-;22553:117;;;;22761:36;:24;:34;:36::i;:::-;22728:13;:69;;:29;;:69;;;;-1:-1:-1;;;;;22728:69:66;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;22728:69:66;;;;;-1:-1:-1;;;;;22728:69:66;;;;;;22833:25;:13;:23;:25::i;:::-;22807:13;:51;;:22;;:51;;;;-1:-1:-1;;;22807:51:66;;-1:-1:-1;;;;;22807:51:66;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;22807:51:66;;;;;-1:-1:-1;;;;;22807:51:66;;;;;;22935:43;22953:24;:13;:22;:24::i;:::-;22952:25;;;:::i;:::-;22935:16;:43::i;:::-;-1:-1:-1;22996:4:66;;21319:1688;-1:-1:-1;;;;;;;21319:1688:66:o;20108:1358:64:-;20207:7;20216:4;20359:26;20387:12;20403:117;20466:40;20489:16;20466:22;:40::i;:::-;20403:45;:117::i;:::-;20358:162;;;;20535:7;20530:56;;-1:-1:-1;20566:1:64;;;;-1:-1:-1;20108:1358:64;-1:-1:-1;;;20108:1358:64:o;20530:56::-;20744:20;20786:1;20767:16;:20;:95;;20861:1;20767:95;;;20802:44;:18;20829:16;20802:26;:44::i;:::-;21008:13;:29;20945:12;:48;;;;20872:21;20896:34;;;;;20744:118;;-1:-1:-1;20872:21:64;-1:-1:-1;;;;;21008:29:64;;;;20896:97;;20945:48;20896:97;:::i;:::-;:141;;;;:::i;:::-;20872:165;;21174:13;21191:1;21174:18;21170:66;;-1:-1:-1;21216:1:64;;;;-1:-1:-1;20108:1358:64;-1:-1:-1;;;;;20108:1358:64:o;21170:66::-;21363:20;21386:35;:12;21407:13;21386:20;:35::i;:::-;21363:58;21454:4;;-1:-1:-1;20108:1358:64;-1:-1:-1;;;;;;;20108:1358:64:o;898:556:74:-;1014:9;1279:1;-1:-1:-1;;1262:19:74;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:74;;1411:27;;898:556::o;6664:253:64:-;6824:12;:26;6868:28;;6722:7;;6760:150;;-1:-1:-1;;;;;6824:26:64;;;;6868:28;;6760:46;:150::i;18147:892:75:-;18410:7;18547:485;18614:23;18655:13;18686:12;18925:18;18931:12;193:4:74;18925:18:75;:::i;:::-;18961:16;18995:23;18547:49;:485::i;:::-;18528:504;18147:892;-1:-1:-1;;;;;;;18147:892:75:o;3330:531::-;3530:17;3736:118;3841:12;3736:87;:23;3784;3809:13;3736:47;:87::i;:::-;:104;;:118::i;15963:541::-;16120:7;16227:270;16363:120;16447:14;16453:8;193:4:74;16447:14:75;:::i;:::-;16363:52;193:4:74;16379:29:75;193:4:74;16389:18:75;16379:9;:29::i;:::-;:35;;;;:::i;:::-;16363:9;;:15;:52::i;:::-;:58;;:120::i;:::-;16337:146;;193:4:74;16337:146:75;:::i;:::-;16228:14;16234:8;193:4:74;16228:14:75;:::i;11815:683:64:-;11971:4;12196:23;12222:221;12297:16;12269:25;:23;:25::i;:::-;:44;;;;:::i;:::-;12327:12;:25;:43;;12355:15;;-1:-1:-1;;;12327:25:64;;-1:-1:-1;;;;;12327:25:64;:43;:::i;12222:221::-;-1:-1:-1;;;;11815:683:64;-1:-1:-1;;;;11815:683:64:o;317:182:73:-;485:6;451:41;;-1:-1:-1;;;451:41:73;;;;;;;;:::i;:::-;;;;;;;;21986:1651:64;22142:16;;23195:129;23311:12;23195:96;23274:16;23195:96;23244:9;193:4:74;23196:21:64;193:4:74;23206:10:64;23196:9;:21::i;:::-;:27;;;;:::i;23195:129::-;23184:140;-1:-1:-1;23596:34:64;23184:140;23613:16;23596;:34::i;:::-;23575:55;;21986:1651;;;;;;:::o;12712:2102:74:-;12906:15;13006:12;13022:1;13006:17;13002:63;;-1:-1:-1;13046:8:74;13039:15;;13002:63;13323:9;13319:1489;;;13420:154;13529:27;13544:12;13529;:27;:::i;:::-;13470:28;:12;13491:6;13470:20;:28::i;:::-;13421:30;:12;13442:8;13421:20;:30::i;:::-;:77;;;;:::i;13420:154::-;13410:164;-1:-1:-1;13921:18:74;13942:20;:6;13953:8;13942:10;:20::i;:::-;13921:41;-1:-1:-1;13976:18:74;13997:20;:6;14008:8;13997:10;:20::i;:::-;13976:41;;14045:10;14035:7;:20;14031:164;;;14085:10;14075:20;;14031:164;;;14130:10;14120:7;:20;14116:79;;;14170:10;14160:20;;14116:79;13334:871;;13319:1489;;;14504:12;14488;:28;14484:75;;-1:-1:-1;14543:1:74;14536:8;;14484:75;14645:152;14752:27;14767:12;14752;:27;:::i;:::-;14695:26;:12;14714:6;14695:18;:26::i;:::-;14646:30;:12;14667:8;14646:20;:30::i;:::-;:75;;;;:::i;7255:675:64:-;7340:6;7745:178;:12;:167;7775:123;7818:27;7867:13;7775:21;:123::i;:::-;7745:167;;;;;;;;;;;;:176;:178::i;:::-;7611:119;:12;:108;7641:64;7663:26;7691:13;7641:21;:64::i;7611:119::-;:312;;;;:::i;12830:376::-;12899:4;13154:45;:21;13182:16;13154:27;:45::i;:::-;13110:25;;:89;;;-1:-1:-1;;;;;13110:25:64;:89;:::i;:::-;13041:12;:26;13033:61;;-1:-1:-1;;;;;13041:26:64;13077:16;13033:43;:61::i;:::-;:166;;;12830:376;-1:-1:-1;;12830:376:64:o;4059:629:118:-;4478:23;4504:33;-1:-1:-1;;;;;4504:27:118;;4532:4;4504:27;:33::i;:::-;4478:59;;4551:10;:17;4572:1;4551:22;;:57;;;;;4589:10;4578:30;;;;;;;;;;;;:::i;:::-;4577:31;4551:57;4547:135;;;4631:40;;-1:-1:-1;;;4631:40:118;;-1:-1:-1;;;;;8186:32:182;;4631:40:118;;;8168:51:182;8141:18;;4631:40:118;8022:203:182;5189:578:118;5272:4;5574:12;5588:23;5623:5;-1:-1:-1;;;;;5615:19:118;5635:4;5615:25;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5573:67;;;;5657:7;:69;;;;-1:-1:-1;5669:17:118;;:22;;:56;;;5706:10;5695:30;;;;;;;;;;;;:::i;:::-;5657:103;;;;-1:-1:-1;;;;;;;;;;5730:26:118;;:30;;;5189:578::o;8508:3846:74:-;8553:8;8606:1;8601;:6;8597:80;;8634:28;;-1:-1:-1;;;8634:28:74;;;;;;;;;;;8597:80;-1:-1:-1;;;;;;9286:41:74;-1:-1:-1;9283:1:74;9279:49;9386:9;;;9366:18;9363:33;9360:1;9356:41;9350:48;9448:9;;;9436:10;9433:25;9430:1;9426:33;9420:40;9506:9;;;9498:6;9495:21;9492:1;9488:29;9482:36;9562:9;;;9556:4;9553:19;9550:1;9546:27;;;9540:34;;;9617:9;;;9612:3;9609:18;9606:1;9602:26;9596:33;9672:9;;;9664:18;;;9661:1;9657:26;;;9651:33;;;9720:9;;;9712:18;;;9706:25;9902:3;:7;;;9872:2;9902:7;9888:22;;;;;-1:-1:-1;;9868:6:74;;;9928:30;;9929:17;;;9928:28;:30::i;:::-;10733:31;10729:35;;10784:5;;10191:2;10783:13;;;10800:32;10782:50;10852:5;;10851:13;;10868:33;10850:51;10921:5;;10920:13;;10937:33;10919:51;10990:5;;10989:13;;11006:33;10988:51;11059:5;;11058:13;;11075:32;11057:50;11127:5;;11126:13;;11143:30;11125:48;10130:31;10126:35;;10181:5;;10180:13;;10197:32;10179:50;10249:5;;10248:13;;10265:32;10247:50;10317:5;;10316:13;;-1:-1:-1;;10315:50:74;10385:5;;10384:13;;-1:-1:-1;;10383:50:74;10453:5;;10452:13;;;-1:-1:-1;;10451:50:74;10519:5;;;-1:-1:-1;;10519:46:74;11514:10;11904:43;11899:48;12027:71;:91;;;;12006:112;12191:72;12186:77;12334:3;12328:9;;;-1:-1:-1;;8508:3846:74:o;4907:3302::-;4953:8;-1:-1:-1;;5130:1:74;:26;5126:40;;-1:-1:-1;5165:1:74;;4907:3302;-1:-1:-1;4907:3302:74:o;5126:40::-;5365:21;5360:1;:26;5356:87;;5411:32;;-1:-1:-1;;;5411:32:74;;;;;;;;;;;5356:87;5716:7;5710:2;5705:7;;;5704:19;;-1:-1:-1;6052:8:74;6136:2;6076:29;6065:7;;;6064:41;-1:-1:-1;;;6064:51:74;6063:75;;6164:29;6160:33;;6156:37;;;;-1:-1:-1;;6835:35:74;;6890:5;;6470:2;6889:13;;;6906:32;6888:50;6958:5;;6957:13;;-1:-1:-1;;6956:51:74;7027:5;;7026:13;;7043:34;7025:52;7097:5;;7096:13;;-1:-1:-1;;7095:53:74;7168:5;;7167:13;;7184:35;7166:53;6476:32;6409:31;6405:35;;6460:5;;6459:13;;6458:50;;;6533:5;;;-1:-1:-1;;6533:40:74;6593:5;;6592:13;;;6609:35;6591:53;6662:5;;-1:-1:-1;;;6662:50:74;7584:10;;;;-1:-1:-1;6063:75:74;;-1:-1:-1;6458:50:74;;6662;8063:129;8094:49;8065:78;;8172:3;:7;;;8064:116;8063:127;:129::i;2284:748::-;2398:9;2663:1;-1:-1:-1;;2646:19:74;2643:1;2640:26;2637:1;2633:34;2626:42;2613:11;2609:60;2582:146;;2712:1;2709;2702:12;2582:146;-1:-1:-1;2979:9:74;;2926:27;;;2923:34;;2975:27;;;2902:114;;2284:748::o;1240:212:77:-;1292:8;-1:-1:-1;;;;;1318:30:77;;;1312:103;;1372:32;;-1:-1:-1;;;1372:32:77;;;;;;;;;;;1616:219;1667:8;-1:-1:-1;;;;;;1693:21:77;;;;;:46;;-1:-1:-1;;;;;;1718:21:77;;;1693:46;1687:119;;1763:32;;-1:-1:-1;;;1763:32:77;;;;;;;;;;;6027:544:75;6162:7;6181:29;6253:16;6213:25;:14;:23;:25::i;:::-;:56;;;;:::i;:::-;6181:88;;6308:1;6283:22;:26;6279:238;;;6325:181;6381:111;6325:38;:181::i;15815:101:74:-;15871:6;15900:1;15896;:5;:13;;15908:1;15896:13;;;-1:-1:-1;15904:1:74;;15815:101;-1:-1:-1;15815:101:74:o;19212:558:64:-;19433:25;;19312:18;;;;19425:80;;-1:-1:-1;;;;;19433:25:64;19479:16;19425:40;:80::i;:::-;19402:103;-1:-1:-1;19548:36:64;19563:21;19402:103;19548:36;:::i;:::-;19519:12;:26;-1:-1:-1;;;;;19519:26:64;:65;19515:222;;;19629:12;:26;19705:21;;19629:57;;19674:12;;-1:-1:-1;;;;;19629:26:64;:57;:::i;:::-;:97;;;;:::i;:::-;19600:126;;19515:222;19746:17;19212:558;;;:::o;8221:1887::-;8421:47;;:::i;:::-;8470:12;8653:63;8719:70;8759:16;8719:22;:70::i;:::-;8653:136;;8799:28;8871:74;8917:18;8871:32;:74::i;:::-;8837:108;-1:-1:-1;8837:108:64;-1:-1:-1;8837:108:64;8955:61;;-1:-1:-1;8999:5:64;;-1:-1:-1;8983:22:64;;-1:-1:-1;8983:22:64;8955:61;9163:20;9337:152;:124;9416:18;:44;;;9337:18;:53;;;:78;;:124;;;;:::i;:::-;:150;:152::i;:::-;9186:136;:112;9254:18;:43;;;9186:18;:48;;;:67;;:112;;;;:::i;:136::-;:303;;;;:::i;:::-;9508:569;;;;;;;;;;;;;;;;;;;-1:-1:-1;9685:34:64;;:12;:34;;;;9508:569;;;;;;;;;;;;;;;;;;;;;;;9894:32;;9508:569;;;;9965:34;;;;9508:569;;;;10035:31;;;;;9508:569;;;;-1:-1:-1;9508:569:64;-1:-1:-1;10097:4:64;;-1:-1:-1;8221:1887:64;;;;;;;:::o;20517:3227:76:-;20636:7;20645;20860:38;20901:169;20978:7;:29;;;21025:7;:31;;;20901:59;:169::i;:::-;20860:210;;21094:29;21137:12;21162:121;21214:7;21239:30;21162:34;:121::i;:::-;21080:203;;;;21298:7;21293:52;;-1:-1:-1;21329:1:76;;;;-1:-1:-1;20517:3227:76;-1:-1:-1;;;;20517:3227:76:o;21293:52::-;21633:32;21668:131;21739:7;21764:21;21668:53;:131::i;:::-;21633:166;;21936:24;21964:1;21936:29;21932:743;;-1:-1:-1;21989:1:76;;;;-1:-1:-1;20517:3227:76;-1:-1:-1;;;;;20517:3227:76:o;21932:743::-;22270:7;:35;;;22242:24;:63;22225:450;;22338:24;22364:21;;-1:-1:-1;20517:3227:76;;-1:-1:-1;;;;20517:3227:76:o;22225:450::-;-1:-1:-1;22629:35:76;;;;22934:21;22958:152;23014:7;23035:30;23079:21;22958:42;:152::i;:::-;22934:176;;23124:13;23141:1;23124:18;23120:62;;-1:-1:-1;23166:1:76;;;;-1:-1:-1;20517:3227:76;-1:-1:-1;;;;;;20517:3227:76:o;23120:62::-;23516:21;23499:13;:38;23495:82;;-1:-1:-1;23561:1:76;;;;-1:-1:-1;20517:3227:76;-1:-1:-1;;;;;;20517:3227:76:o;23495:82::-;23697:24;;23723:13;;-1:-1:-1;20517:3227:76;-1:-1:-1;;;;;20517:3227:76:o;23184:1121:66:-;23325:12;:26;23387:28;;-1:-1:-1;;;;;23325:26:66;;;;23387:28;;;;;;-1:-1:-1;;;23449:25:66;;;23300:22;;;23623:218;23325:26;23387:28;23449:25;23769:21;23808:19;23623:31;:218::i;:::-;23484:357;;;;;;23916:14;23892:20;:38;23888:130;;23975:32;:20;:30;:32::i;:::-;23946:12;:61;;-1:-1:-1;;;;;;23946:61:66;-1:-1:-1;;;;;23946:61:66;;;;;;;;;;23888:130;24057:16;24031:22;:42;24027:137;;24120:33;:22;:31;:33::i;:::-;24089:28;:64;;-1:-1:-1;;;;;;24089:64:66;-1:-1:-1;;;;;24089:64:66;;;;;;;;;;24027:137;24200:13;24177:19;:36;24173:126;;24257:31;:19;:29;:31::i;:::-;24229:12;:59;;-1:-1:-1;;;;;24229:59:66;;;-1:-1:-1;;;24229:59:66;;;;;;;;;23247:1058;;;;;;23184:1121;:::o;10301:1035:64:-;10396:39;;:::i;:::-;10456:873;;;;;;;;10511:12;:26;-1:-1:-1;;;;;10511:26:64;;;10456:873;;10568:28;;;;10456:873;;;;-1:-1:-1;;;10624:25:64;;;;;;10456:873;;;;;;;;;;;;;10734:23;10456:873;;;;10793:21;10456:873;;;;10854:25;10456:873;;;;10906:12;10456:873;;;;10568:28;10950:29;;;;10511:26;10456:873;;;11066:36;;10456:873;;;;;;11019:97;;11066:36;11019:29;:97::i;:::-;10456:873;;11149:30;;-1:-1:-1;;;;;;;;11149:30:64;;;;;;10456:873;;;;11267:37;;10456:873;;;;;11220:98;;11267:37;;;11220:29;:98::i;:::-;10456:873;;10447:882;10301:1035;-1:-1:-1;;10301:1035:64:o;6753:1173:76:-;6860:7;6869:4;7246:19;7290:20;7312:12;7328:65;7372:7;7328:26;:65::i;:::-;7289:104;;;;7412:7;7407:64;;-1:-1:-1;7447:1:76;;;;-1:-1:-1;6753:1173:76;-1:-1:-1;;;;6753:1173:76:o;7407:64::-;7647:39;:7;:28;;;:37;:39::i;:::-;7598:30;7620:7;7598:21;:30::i;:::-;7566:13;7515:32;:7;:21;;;:30;:32::i;:::-;:64;;;;:::i;:::-;:113;;;;:::i;:::-;:171;;;;:::i;:::-;7484:202;;7275:422;;7828:1;7813:12;:16;7809:64;;;-1:-1:-1;7853:1:76;;;;-1:-1:-1;6753:1173:76;-1:-1:-1;;6753:1173:76:o;7809:64::-;7899:12;7914:4;;-1:-1:-1;6753:1173:76;-1:-1:-1;;6753:1173:76:o;2068:1726:78:-;2258:7;2415:9;2427:20;2431:2;2435:1;2438;2441;2444:2;2427:3;:20::i;:::-;2415:32;-1:-1:-1;2585:26:78;2609:1;2585:19;2596:7;2601:2;2596;:7;:::i;:::-;2585:2;;:10;:19::i;:26::-;2580:31;-1:-1:-1;2674:20:78;:1;2580:31;2691:2;2674:12;:20::i;:::-;2669:25;;2768:2;2764:1;:6;2760:166;;;2786:129;2842:59;2786:38;:129::i;:::-;3135:6;;;193:4:74;3165:9:78;;3161:261;;3263:20;3270:12;193:4:74;3280:1:78;3270:9;:12::i;3263:20::-;3258:25;;3161:261;;;3389:22;3396:14;193:4:74;3408:1:78;3396:11;:14::i;3389:22::-;3384:27;;3161:261;3495:2;3491:1;:6;3487:166;;;3513:129;3569:59;3513:38;:129::i;:::-;3771:6;;;;2068:1726;-1:-1:-1;;;;;;;2068:1726:78:o;3190:114:74:-;3250:7;3277:19;3286:1;3289;193:4;3277:8;:19::i;14987:104::-;15045:7;15075:1;15071;:5;:13;;15083:1;15071:13;;15264:104;15322:7;15352:1;15348;:5;:13;;15360:1;15348:13;;2705:151:119;2780:12;2811:38;2833:6;2841:4;2847:1;2811:21;:38::i;43372:3084:76:-;43545:29;43576:12;43765:1;43740:7;:21;;;:26;43736:84;;-1:-1:-1;;43790:12:76;;;;43804:4;43782:27;;43736:84;43829:21;43862:7;:21;;;43861:22;;;:::i;:::-;43829:55;;44000:21;44058:316;44114:31;44159:7;:28;;;44207:7;:26;;;:38;;;193:4:74;44201:44:76;;;;:::i;:::-;44259:26;;:42;;;;44315:49;;;;;44058:42;:316::i;:::-;44031:343;-1:-1:-1;44031:343:76;-1:-1:-1;44031:343:76;44384:56;;44420:1;44423:5;44412:17;;;;;;;;44384:56;45463:24;45490:34;:13;45510;45490:19;:34::i;:::-;45463:61;;193:4:74;45707:16:76;:23;45703:453;;45804:16;193:4:74;45798:22:76;45774:46;;45872:90;45919:7;:29;;;45872:21;:29;;:90;;;;:::i;:::-;45848:114;;45703:453;;;46136:1;46139:5;46128:17;;;;;;;;;45703:453;46338:7;:12;;;46314:21;:36;46310:94;;;46374:7;:12;;;46388:4;46366:27;;;;;;;;;46310:94;-1:-1:-1;46444:4:76;;-1:-1:-1;;;43372:3084:76;;;;;;:::o;24605:1853::-;24785:7;25060:270;25098:7;:29;;;25141:7;:31;;;25186:7;:28;;;25228:7;:26;;;:47;;;25290:30;:19;:28;:30::i;:::-;25289:31;;;:::i;:::-;25060:24;:270::i;:::-;24898:26;;25008:39;;;24884:446;;;;24952:42;;;24884:446;;;;;25424:26;;24898;;;;25385:75;;:25;:75::i;:::-;25340:120;;;;25828:7;25827:8;:62;;;;25861:7;:28;;;25839:18;:50;;25827:62;25823:101;;;25912:1;25905:8;;;;;;25823:101;26173:21;26239:7;:35;;;26197:7;:27;;;:77;;;;:::i;:::-;26173:101;;26331:120;26373:18;26409:7;:28;;;26331:13;:24;;:120;;;;;:::i;:::-;26303:148;;:13;:148;:::i;27340:9726::-;27561:7;27622:21;27688:7;:35;;;27646:7;:27;;;:77;;;;:::i;:::-;28281:28;;;;28221:35;;;;27622:101;;-1:-1:-1;28197:21:76;;28221:125;;27622:101;28221:46;:125::i;:::-;28197:149;;28459:7;:21;;;28484:1;28459:26;28455:77;;28508:13;-1:-1:-1;28501:20:76;;-1:-1:-1;28501:20:76;28455:77;28895:9;28890:8139;871:1;28910;:33;28890:8139;;;29118:41;:13;29136:22;29118:17;:41::i;:::-;29102:57;;29484:288;29526:7;:29;;;29573:7;:31;;;29622:7;:28;;;29668:7;:26;;;:47;;;29734:24;:13;:22;:24::i;29484:288::-;29310:26;;29428:39;;;29292:480;;;;29368:42;;;29292:480;;;;;29848:26;;29310;;29809:79;;:21;:79::i;:::-;29786:102;;29993:167;30066:7;30095:12;30129:13;29993:51;:167::i;:::-;29972:241;;;30193:5;;;29972:241;30463:1;30439:7;:21;;;:25;30435:4231;;;30827:25;;:39;;30892:41;;;;30959:38;;;;31023:46;;;;31101:37;;;;;30648:7;;30605:40;;;;30738:563;;30827:39;;30892:41;;31023:46;31095:43;;193:4:74;31095:43:76;:::i;:::-;31164:25;;:41;;;;31231:48;;;;;30738:63;:563::i;:::-;30697:604;;;;31324:8;31319:290;;31589:1;31582:8;;;;;;;;;;;31319:290;31820:13;31795:6;:20;;;31787:46;31783:2869;;32102:115;32189:6;32102:61;:115::i;:::-;32004:213;;-1:-1:-1;32004:213:76;-1:-1:-1;32004:213:76;32239:201;;32416:1;32409:8;;;;;;;;;;;32239:201;32819:332;32869:6;:28;;;32923:6;:30;;;32979:6;:27;;;33032:6;:25;;;:46;;;33105:24;:13;:22;:24::i;32819:332::-;32624:25;;32756:38;;;;32598:553;;;;32689:41;;;;32598:553;;;;;;;;33298:25;;:39;;33367:41;;;;33438:38;;;;33506:46;;;;;33588:26;;:38;;;33201:600;;33367:41;33438:38;33506:46;33582:44;;193:4:74;33582:44:76;:::i;33201:600::-;33173:628;;-1:-1:-1;33173:628:76;-1:-1:-1;33173:628:76;33823:201;;34000:1;33993:8;;;;;;;;;;;33823:201;34347:7;:21;;;34322:13;:47;34318:316;;34404:13;34397:20;;;;;;;;;;;34318:316;34603:8;;;;28890:8139;;34318:316;30466:4200;;;30435:4231;34960:18;34996:12;35025:192;35096:7;35125:31;35178:7;:21;;;35025:49;:192::i;:::-;34942:275;;;;35236:7;35235:8;:29;;;;193:4:74;35247:10:76;:17;;35235:29;35231:189;;;35404:1;35397:8;;;;;;;;;;35231:189;35480:10;193:4:74;35474:16:76;35461:29;;35792:12;35872:137;:105;35949:7;:27;;;35872:7;:49;;;:76;;:105;;;;:::i;:137::-;35807:46;:35;:12;35828:13;35807:20;:35::i;:46::-;:202;;;;:::i;:::-;35792:217;;36035:1;36027:5;:9;36023:893;;;36200:57;36243:13;36200:34;36208:5;36223:10;36200:22;:34::i;:57::-;36164:93;;:13;:93;:::i;:::-;36128:129;;36023:893;;;36290:1;36282:5;:9;36278:638;;;36383:14;36400:96;36465:13;36400:35;36424:10;36400:35;36409:5;36408:6;:::i;36400:96::-;36383:113;;36527:13;36518:6;:22;36514:344;;;36632:6;36616:13;:22;36600:38;;36514:344;;;36838:1;36831:8;;;;;;;;;;;;36514:344;36293:579;36278:638;;;36896:5;;;;;;36278:638;37001:3;;;;;28947:8082;;;;28890:8139;;;-1:-1:-1;37046:13:76;27340:9726;-1:-1:-1;;;;;27340:9726:76:o;1782:3110::-;2053:21;2088:22;2124:20;2279:19;2302:1;2279:24;2275:111;;-1:-1:-1;2327:14:76;;-1:-1:-1;2343:16:76;;-1:-1:-1;2361:13:76;2319:56;;2275:111;2555:21;2607:19;2579:25;:14;:23;:25::i;:::-;:47;;;;:::i;:::-;2555:71;;2657:32;:21;:30;:32::i;:::-;2640:14;:49;2636:121;;;2712:34;;-1:-1:-1;;;2712:34:76;;;;;;;;;;;2636:121;2790:14;2766:39;;3380:1;3360:16;:21;3356:497;;3493:112;:84;:13;3543:16;3562:14;3493:41;:84::i;:112::-;3475:130;;3356:497;;;3731:111;:83;3779:17;3780:16;3779:17;:::i;:::-;3731:13;;3799:14;3731:39;:83::i;:111::-;3730:112;;;:::i;:::-;3712:130;;3356:497;4569:316;4702:13;4733:138;4801:14;4837:16;4733:46;:138::i;:::-;4569:91;4629:13;4644:15;4569:59;:91::i;:::-;:115;:316;:115;:316::i;:::-;4554:331;;2159:2733;1782:3110;;;;;;;;;;:::o;5697:450:64:-;5796:21;5829:24;193:4:74;5856:19:64;:17;:19::i;:::-;:25;;;;:::i;:::-;5829:52;;5923:16;5907:13;:32;:95;;6001:1;5907:95;;;5954:32;5970:16;5954:13;:32;:::i;:::-;5891:111;-1:-1:-1;6094:46:64;6116:23;193:4:74;6116:17:64;:23;:::i;:::-;6094:13;;:21;:46::i;8254:9098:76:-;8362:6;8370:4;9172:23;9327:130;:102;9395:7;:33;;;9327:7;:42;;;:67;;:102;;;;:::i;:130::-;9198:114;:90;9255:7;:32;;;9198:7;:37;;;:56;;:90;;;;:::i;:114::-;:259;;;;:::i;:::-;9172:285;;9467:30;9500:153;9577:7;:21;;;9616:7;:23;;;9500:59;:153::i;:::-;9467:186;;9903:1;9884:16;:20;9880:7439;;;9920:25;9956:16;9920:53;;10162:21;10185:12;10201:401;10282:7;:21;;;10325:7;:23;;;10370:7;:20;;;10412:7;:28;;;10468:7;:19;;;193:4:74;10462:25:76;;;;:::i;:::-;10509:7;:23;;;10554:7;:30;;;10201:59;:401::i;:::-;10161:441;;;;10621:7;10616:64;;-1:-1:-1;10656:1:76;;;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;8254:9098:76:o;10616:64::-;10857:17;10840:13;:34;10836:2891;;11148:21;11214:389;11314:22;11362:7;:20;;;11408:17;11457:7;:19;;;193:4:74;11451:25:76;;;;:::i;:::-;11502:7;:23;;;11551:7;:30;;;11214:74;:389::i;:::-;11187:416;-1:-1:-1;11187:416:76;-1:-1:-1;11909:8:76;;:84;;;;;11961:7;:32;;;11941:17;:52;11909:84;11884:335;;;-1:-1:-1;12042:1:76;;12045:4;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;;8254:9098:76:o;11884:335::-;12152:7;12147:72;;-1:-1:-1;12191:1:76;;;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;;8254:9098:76:o;12147:72::-;12246:24;:13;:22;:24::i;:::-;12245:25;;;:::i;:::-;12237:40;12272:4;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;;;8254:9098:76:o;10836:2891::-;12962:1;12935:7;:23;;;:28;12931:782;;13021:95;13047:7;:28;;;13022:22;:53;;;;:::i;13021:95::-;13020:96;;;:::i;12931:782::-;13573:28;;;;13549:21;;13548:94;;13549:52;;;:::i;9880:7439::-;13852:1;13833:16;:20;13829:3490;;;13869:25;13905:17;13906:16;13905:17;:::i;:::-;13869:54;;14041:21;14064:12;14080:307;14161:22;14205:7;:20;;;14253:7;:19;;;193:4:74;14247:25:76;;;;:::i;:::-;14294:7;:23;;;14339:7;:30;;;14080:59;:307::i;:::-;14040:347;;;;14406:7;14401:64;;-1:-1:-1;14441:1:76;;;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;8254:9098:76:o;14401:64::-;14642:17;14625:13;:34;14621:2688;;14934:21;15000:387;15098:22;15146:7;:20;;;15192:17;15241:7;:19;;;193:4:74;15235:25:76;;;;:::i;:::-;15286:7;:23;;;15335:7;:30;;;15000:72;:387::i;:::-;14973:414;-1:-1:-1;14973:414:76;-1:-1:-1;15693:8:76;;:84;;;;;15745:7;:32;;;15725:17;:52;15693:84;15668:335;;;-1:-1:-1;15826:1:76;;15829:4;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;;8254:9098:76:o;15668:335::-;15936:7;15931:72;;-1:-1:-1;15975:1:76;;;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;;8254:9098:76:o;15931:72::-;16029:24;:13;:22;:24::i;14621:2688::-;16387:23;16457:335;16546:22;16594:7;:20;;;16646:7;:19;;;193:4:74;16640:25:76;;;;:::i;:::-;16691:7;:23;;;16740:7;:30;;;16457:63;:335::i;:::-;16428:364;-1:-1:-1;16428:364:76;-1:-1:-1;16428:364:76;16810:72;;-1:-1:-1;16854:1:76;;;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;;8254:9098:76:o;16810:72::-;17073:177;17116:122;17189:7;:23;;;17137:13;17117:17;:33;;;;:::i;17116:122::-;17074:164;;:15;:164;:::i;13829:3490::-;-1:-1:-1;17337:1:76;;17340:4;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;8254:9098:76:o;17599:1167::-;17702:6;18560:199;18578:156;18639:7;:32;;;193:4:74;18633:38:76;;;;:::i;:::-;18693:23;;;;18578:24;;;;;:156;:33;:156::i;18560:199::-;18342:203;18360:160;18424:7;:33;;;193:4:74;18418:39:76;;;;:::i;:::-;18479:23;;;;18360:25;;;;;:160;:36;:160::i;20059:343:78:-;20198:7;20387:8;:1;20393;20387:5;:8::i;:::-;20349:35;20360:19;20377:1;20360:12;:2;20369;20360:8;:12::i;:19::-;20349:1;;20381:2;20349:10;:35::i;:::-;:46;;;;:::i;3180:392:119:-;3279:12;3331:5;3307:21;:29;3303:108;;;3359:41;;-1:-1:-1;;;3359:41:119;;3394:4;3359:41;;;8168:51:182;8141:18;;3359:41:119;8022:203:182;3303:108:119;3421:12;3435:23;3462:6;-1:-1:-1;;;;;3462:11:119;3481:5;3488:4;3462:31;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3420:73;;;;3510:55;3537:6;3545:7;3554:10;3510:26;:55::i;15892:1050:78:-;16055:7;16064:4;16276:9;16288:20;16292:2;16296:1;16299;16302;16305:2;16288:3;:20::i;:::-;16276:32;-1:-1:-1;16318:16:78;16337:28;193:4:74;16345:13:78;:1;16355:2;16345:9;:13::i;:::-;:19;;;;:::i;:::-;16337:1;;:7;:28::i;:::-;16318:47;;193:4:74;16379:8:78;:15;16375:293;;16490:26;16503:12;193:4:74;16513:1:78;16503:9;:12::i;16490:26::-;16479:37;;16375:293;;;16629:28;16642:14;193:4:74;16654:1:78;16642:11;:14::i;16629:28::-;16618:39;;16375:293;16813:8;16809:1;:12;16805:60;;;16845:1;16848:5;16837:17;;;;;;;;16805:60;16906:12;;;-1:-1:-1;16920:4:78;;-1:-1:-1;;15892:1050:78;;;;;;;;;:::o;5717:341:76:-;5820:7;5840:20;5862:12;5878:56;5917:7;5878:25;:56::i;:::-;5839:95;;;;5949:7;5944:79;;5979:33;;-1:-1:-1;;;5979:33:76;;;;;;;;;;;5944:79;-1:-1:-1;6039:12:76;5717:341;-1:-1:-1;;5717:341:76:o;41341:1269::-;41968:28;;;;41545:4;;41968:50;;42003:14;41968:34;:50::i;:::-;41858:27;;;;41836:50;;:13;;:21;:50::i;:::-;:182;;:767;;;;-1:-1:-1;42529:28:76;;;;42464:139;;42575:14;42465:34;1037:3;193:4:74;42465:34:76;:::i;42464:139::-;42352:27;;;;42332:48;;:13;;:19;:48::i;:::-;:271;;;41341:1269;-1:-1:-1;;;;41341:1269:76:o;17581:1971:78:-;17786:7;17795:4;18092:1;18085:4;:8;18081:67;;;18131:5;18132:4;18131:5;:::i;:::-;18116:21;;:4;:21;:::i;:::-;18109:28;;18081:67;18643:10;18656:55;18703:1;18706:4;18656:46;:55::i;:::-;18643:68;;18721:9;18733:22;18739:2;18743:1;18746;18749;18752:2;18733:5;:22::i;:::-;18721:34;-1:-1:-1;18765:11:78;18779:37;18790:21;18809:1;18790:14;:2;18799:4;18790:8;:14::i;:21::-;18779:1;;18813:2;18779:10;:37::i;:::-;18765:51;;18834:3;18830:1;:7;18826:55;;;18861:1;18864:5;18853:17;;;;;;;;;18826:55;18951:7;;;193:4:74;18982:15:78;;18978:295;;19096:28;19109:14;193:4:74;19121:1:78;19109:11;:14::i;19096:28::-;19085:39;;18978:295;;;19236:26;19249:12;193:4:74;19259:1:78;19249:9;:12::i;19236:26::-;19225:37;;18978:295;19430:1;19419:8;:12;19415:60;;;19455:1;19458:5;19447:17;;;;;;;;;;19415:60;19516:12;;;;-1:-1:-1;19530:4:78;;-1:-1:-1;;;;17581:1971:78;;;;;;;;;;;:::o;38757:1866:76:-;38908:7;38917:4;39199:1;39164:7;:31;;;:36;39160:84;;-1:-1:-1;39224:1:76;;;;-1:-1:-1;38757:1866:76;-1:-1:-1;38757:1866:76:o;39160:84::-;39295:19;39317:49;39339:7;:26;;;39317:21;:49::i;:::-;39295:71;;39509:11;39523:167;39574:7;:27;;;39645:7;:35;;;39615:7;:27;;;:65;;;;:::i;:::-;39523:28;;;;;:167;:37;:167::i;:::-;39509:181;;39720:1;39704:12;:17;39700:411;;39765:3;39749:12;39741:27;39737:304;;;39820:28;;;39700:411;;39737:304;-1:-1:-1;40017:1:76;;;;-1:-1:-1;38757:1866:76;-1:-1:-1;;;38757:1866:76:o;39700:411::-;40086:13;40087:12;40086:13;:::i;:::-;40071:29;;;;:::i;:::-;;;39700:411;40351:31;;;;40274:29;;;;:119;;40326:3;;40274:38;:119::i;:::-;40268:125;;40476:3;40444:7;:29;;;:35;40440:83;;;-1:-1:-1;40503:1:76;;;;-1:-1:-1;38757:1866:76;-1:-1:-1;;;38757:1866:76:o;40440:83::-;40596:3;40564:7;:29;;;:35;40601:4;40556:50;;;;;;38757:1866;;;:::o;48862:5714::-;49078:7;49087:4;49176:20;49225:1;49210:11;:16;49206:670;;49273:26;;:39;;;:78;;49339:11;;49273:78;:::i;:::-;49242:109;;49206:670;;;49382:18;49411:12;49412:11;49411:12;:::i;:::-;49455:26;;:39;;;49382:42;;-1:-1:-1;49442:52:76;;49438:428;;;49585:26;;:39;;;:76;;;;-1:-1:-1;49438:428:76;;;49842:1;49845:5;49834:17;;;;;;;;49438:428;49368:508;49206:670;50245:26;;:40;;50303:42;;;;;50135:30;;50168:191;;:59;:191::i;:::-;50852:26;;:38;;;;50783:39;;;;;50135:224;;-1:-1:-1;50369:18:76;;50670:274;;50722:208;;50783:129;;:43;:129::i;:::-;50722:31;;:39;:208::i;:::-;50670:28;;;;;:34;:274::i;:::-;50606:26;;:38;;;;50452:83;;;;;50390:265;;50452:193;;:132;;50561:22;50452:108;:132::i;:193::-;50390:26;;:42;;;;:48;:265::i;:::-;:554;;;;:::i;:::-;50369:575;;51014:11;51028:185;51078:125;51133:56;51150:7;:26;;;:38;;;51133:12;:16;;:56;;;;:::i;:::-;51078:31;;:37;:125::i;:::-;51028:28;;;;;:36;:185::i;:::-;51014:199;;51240:3;51227:10;:16;51223:64;;;51267:1;51270:5;51259:17;;;;;;;;;;51223:64;51334:3;51320:17;;;;51577:9;51589:294;51621:22;51657:7;:26;;;:39;;;51716:7;:26;;;:38;;;193:4:74;51710:44:76;;;;:::i;:::-;51768:26;;:42;;;;51824:49;;;;;51589:18;:294::i;:::-;51577:306;;51893:13;51909:84;51945:7;:26;;;:38;;;193:4:74;51939:44:76;;;;:::i;:::-;51909:12;;:16;:84::i;:::-;51893:100;;52011:5;52007:1;:9;52003:201;;;52184:1;52187:5;52176:17;;;;;;;;;;;;52003:201;52310:26;;:49;;;;52373:42;;;;;52245:9;;;;52282:143;;52245:9;;52282:14;:143::i;:::-;52274:151;;193:4:74;52439:5:76;:12;52435:584;;52650:26;;:38;;;52551:169;;52578:128;;52644:44;;193:4:74;52644:44:76;:::i;:::-;52578:26;;:38;;;;:44;:128::i;52551:169::-;52543:177;;52435:584;;;52938:26;;:38;;;52837:171;;52864:130;;52932:44;;193:4:74;52932:44:76;:::i;:::-;52864:26;;:38;;;;:46;:130::i;52837:171::-;52829:179;;52435:584;53171:26;;:42;;;53119:104;;:10;;53152:5;;53119:19;:104::i;:::-;53106:117;;53283:10;193:4:74;53277:16:76;53273:398;;;53356:10;193:4:74;53350:16:76;53337:29;;53273:398;;;53652:1;53655:4;53644:16;;;;;;;;;;;;53273:398;53845:1;53810:7;:31;;;:36;53806:728;;53932:29;;;;53876:31;;;;53868:107;;:46;:107::i;:::-;53862:113;;193:4:74;53993:3:76;:10;53989:168;;54133:1;54136:5;54125:17;;;;;;;;;;;;53989:168;193:4:74;54204:9:76;;;;;54254:23;:10;54204:9;54254:18;:23::i;:::-;54241:36;;53806:728;;;54321:202;54383:126;54458:7;:29;;;54392:7;:31;;;54391:32;;;:::i;54383:126::-;54357:152;;193:4:74;54357:152:76;:::i;:::-;54321:10;;:18;:202::i;:::-;54308:215;;53806:728;-1:-1:-1;54552:10:76;;54564:4;;-1:-1:-1;48862:5714:76;-1:-1:-1;;;;;;;;48862:5714:76:o;11709:1515:78:-;11903:7;11912:4;12066:9;12078:20;12082:2;12086:1;12089;12092;12095:2;12078:3;:20::i;:::-;12066:32;-1:-1:-1;12141:15:78;12154:1;12142:6;12146:2;12142:1;:6;:::i;12141:15::-;12137:19;;12238:1;12234;:5;12230:53;;;12263:1;12266:5;12255:17;;;;;;;12230:53;12487:5;;;12517:18;12487:5;12529:2;12533:1;12517:11;:18::i;:::-;12512:23;;193:4:74;12549:2:78;:9;12545:263;;12648:20;12655:12;193:4:74;12665:1:78;12655:9;:12::i;12648:20::-;12643:25;;12545:263;;;12775:22;12782:14;193:4:74;12794:1:78;12782:11;:14::i;12775:22::-;12770:27;;12545:263;12890:12;:2;12899;12890:8;:12::i;:::-;12885:17;;13027:2;13022;:7;13018:55;;;13053:1;13056:5;13045:17;;;;;;;;13018:55;13193:7;;;-1:-1:-1;13202:4:78;;-1:-1:-1;;11709:1515:78;;;;;;;;;;:::o;5576:1765::-;5768:7;5777:4;5931:9;5943:20;5947:2;5951:1;5954;5957;5960:2;5943:3;:20::i;:::-;5931:32;;6086:2;6082:1;:6;6078:54;;;6112:1;6115:5;6104:17;;;;;;;6078:54;6194:7;;;;;6225:8;6194:7;6231:1;6225:5;:8::i;:::-;6221:12;;6355:1;6351;:5;6347:53;;;6380:1;6383:5;6372:17;;;;;;;6347:53;6604:5;;;6634:18;6604:5;6646:2;6650:1;6634:11;:18::i;:::-;6629:23;;193:4:74;6666:2:78;:9;6662:261;;6764:20;6771:12;193:4:74;6781:1:78;6771:9;:12::i;6764:20::-;6759:25;;6662:261;;;6890:22;6897:14;193:4:74;6909:1:78;6897:11;:14::i;6890:22::-;6885:27;;6662:261;7005:12;:2;7014;7005:8;:12::i;:::-;7000:17;;7142:2;7137;:7;7133:55;;;7168:1;7171:5;7160:17;;;;;;;;7133:55;7310:7;;;;;7319:4;;-1:-1:-1;5576:1765:78;-1:-1:-1;;;;;;;5576:1765:78:o;13859:1409::-;14022:7;14031:4;14543:9;14555:22;14561:2;14565:1;14568;14571;14574:2;14555:5;:22::i;:::-;14543:34;-1:-1:-1;14587:17:78;14607:28;193:4:74;14617:11:78;:1;14625:2;14617:7;:11::i;:::-;:17;;;;:::i;14607:28::-;14587:48;;193:4:74;14649:9:78;:16;14645:300;;14765:29;14779:14;193:4:74;14791:1:78;14779:11;:14::i;14765:29::-;14753:41;;14645:300;;;14907:27;14921:12;193:4:74;14931:1:78;14921:9;:12::i;14907:27::-;14895:39;;14645:300;14966:21;:9;14984:2;14966:17;:21::i;:::-;14954:33;;15143:2;15131:9;:14;15127:62;;;15169:1;15172:5;15161:17;;;;;;;;15127:62;15230:14;;;;;15246:4;;-1:-1:-1;13859:1409:78;-1:-1:-1;;;;;;13859:1409:78:o;4625:582:119:-;4769:12;4798:7;4793:408;;4821:19;4829:10;4821:7;:19::i;:::-;4793:408;;;5045:17;;:22;:49;;;;-1:-1:-1;;;;;;5071:18:119;;;:23;5045:49;5041:119;;;5121:24;;-1:-1:-1;;;5121:24:119;;-1:-1:-1;;;;;8186:32:182;;5121:24:119;;;8168:51:182;8141:18;;5121:24:119;8022:203:182;5041:119:119;-1:-1:-1;5180:10:119;5173:17;;20915:352:78;21056:7;21252:8;:1;21258;21252:5;:8::i;:::-;21210:39;21223:21;21242:1;21223:14;:2;21234;21223:10;:14::i;:21::-;21210:1;;21246:2;21210:12;:39::i;5743:516:119:-;5874:17;;:21;5870:383;;6102:10;6096:17;6158:15;6145:10;6141:2;6137:19;6130:44;5870:383;6225:17;;-1:-1:-1;;;6225:17:119;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:155:182:-;74:5;119:2;110:6;105:3;101:16;97:25;94:45;;;135:1;132;125:12;174:492;278:6;286;294;347:2;335:9;326:7;322:23;318:32;315:52;;;363:1;360;353:12;315:52;399:9;386:23;376:33;;456:2;445:9;441:18;428:32;418:42;;511:2;500:9;496:18;483:32;538:18;530:6;527:30;524:50;;;570:1;567;560:12;524:50;593:67;652:7;643:6;632:9;628:22;593:67;:::i;:::-;583:77;;;174:492;;;;;:::o;853:561::-;966:6;974;982;990;1043:3;1031:9;1022:7;1018:23;1014:33;1011:53;;;1060:1;1057;1050:12;1011:53;1096:9;1083:23;1073:33;;1153:2;1142:9;1138:18;1125:32;1115:42;;1204:2;1193:9;1189:18;1176:32;1166:42;;1259:2;1248:9;1244:18;1231:32;1286:18;1278:6;1275:30;1272:50;;;1318:1;1315;1308:12;1272:50;1341:67;1400:7;1391:6;1380:9;1376:22;1341:67;:::i;:::-;1331:77;;;853:561;;;;;;;:::o;1672:127::-;1733:10;1728:3;1724:20;1721:1;1714:31;1764:4;1761:1;1754:15;1788:4;1785:1;1778:15;1804:168;1877:9;;;1908;;1925:15;;;1919:22;;1905:37;1895:71;;1946:18;;:::i;1977:286::-;2036:6;2089:2;2077:9;2068:7;2064:23;2060:32;2057:52;;;2105:1;2102;2095:12;2057:52;2131:23;;-1:-1:-1;;;;;2183:31:182;;2173:42;;2163:70;;2229:1;2226;2219:12;2268:118;2354:5;2347:13;2340:21;2333:5;2330:32;2320:60;;2376:1;2373;2366:12;2391:241;2447:6;2500:2;2488:9;2479:7;2475:23;2471:32;2468:52;;;2516:1;2513;2506:12;2468:52;2555:9;2542:23;2574:28;2596:5;2574:28;:::i;3115:125::-;3180:9;;;3201:10;;;3198:36;;;3214:18;;:::i;3524:184::-;3594:6;3647:2;3635:9;3626:7;3622:23;3618:32;3615:52;;;3663:1;3660;3653:12;3615:52;-1:-1:-1;3686:16:182;;3524:184;-1:-1:-1;3524:184:182:o;3713:127::-;3774:10;3769:3;3765:20;3762:1;3755:31;3805:4;3802:1;3795:15;3829:4;3826:1;3819:15;3845:112;3877:1;3903;3893:35;;3908:18;;:::i;:::-;-1:-1:-1;3942:9:182;;3845:112::o;3962:128::-;4029:9;;;4050:11;;;4047:37;;;4064:18;;:::i;4095:193::-;-1:-1:-1;;;;;4213:10:182;;;4225;;;4209:27;;4248:11;;;4245:37;;;4262:18;;:::i;4293:197::-;-1:-1:-1;;;;;4415:10:182;;;4427;;;4411:27;;4450:11;;;4447:37;;;4464:18;;:::i;4495:200::-;4561:9;;;4534:4;4589:9;;4617:10;;4629:12;;;4613:29;4652:12;;;4644:21;;4610:56;4607:82;;;4669:18;;:::i;5096:200::-;-1:-1:-1;;;;;5232:10:182;;;5220;;;5216:27;;5255:12;;;5252:38;;;5270:18;;:::i;5301:216::-;5365:9;;;5393:11;;;5340:3;5423:9;;5451:10;;5447:19;;5476:10;;5468:19;;5444:44;5441:70;;;5491:18;;:::i;:::-;5441:70;;5301:216;;;;:::o;6468:193::-;6507:1;6533;6523:35;;6538:18;;:::i;:::-;-1:-1:-1;;;6574:18:182;;-1:-1:-1;;6594:13:182;;6570:38;6567:64;;;6611:18;;:::i;:::-;-1:-1:-1;6645:10:182;;6468:193::o;6666:245::-;6764:2;6734:17;;;6753;;;;6730:41;-1:-1:-1;;;;;6786:44:182;;-1:-1:-1;;;;;;6832:49:182;;6783:99;6780:125;;;6885:18;;:::i;6916:213::-;6951:3;6999:5;6995:2;6984:21;-1:-1:-1;;;;;7029:39:182;7020:7;7017:52;7014:78;;7072:18;;:::i;:::-;7112:1;7108:15;;6916:213;-1:-1:-1;;6916:213:182:o;7266:136::-;7301:3;-1:-1:-1;;;7322:22:182;;7319:48;;7347:18;;:::i;:::-;-1:-1:-1;7387:1:182;7383:13;;7266:136::o;7407:360::-;7571:2;7556:18;;7604:1;7593:13;;7583:144;;7649:10;7644:3;7640:20;7637:1;7630:31;7684:4;7681:1;7674:15;7712:4;7709:1;7702:15;7583:144;7736:25;;;7407:360;:::o;7772:245::-;7839:6;7892:2;7880:9;7871:7;7867:23;7863:32;7860:52;;;7908:1;7905;7898:12;7860:52;7940:9;7934:16;7959:28;7981:5;7959:28;:::i;8230:412::-;8359:3;8397:6;8391:13;8422:1;8432:129;8446:6;8443:1;8440:13;8432:129;;;8544:4;8528:14;;;8524:25;;8518:32;8505:11;;;8498:53;8461:12;8432:129;;;-1:-1:-1;8616:1:182;8580:16;;8605:13;;;-1:-1:-1;8580:16:182;8230:412;-1:-1:-1;8230:412:182:o",
        "linkReferences": {},
        "immutableReferences": {
            "13657": [
                {
                    "start": 1535,
                    "length": 32
                },
                {
                    "start": 1632,
                    "length": 32
                }
            ],
            "13660": [
                {
                    "start": 2272,
                    "length": 32
                }
            ],
            "13663": [
                {
                    "start": 469,
                    "length": 32
                },
                {
                    "start": 1109,
                    "length": 32
                },
                {
                    "start": 2441,
                    "length": 32
                },
                {
                    "start": 12737,
                    "length": 32
                }
            ],
            "13666": [
                {
                    "start": 502,
                    "length": 32
                },
                {
                    "start": 3393,
                    "length": 32
                },
                {
                    "start": 3532,
                    "length": 32
                },
                {
                    "start": 3822,
                    "length": 32
                },
                {
                    "start": 10701,
                    "length": 32
                }
            ],
            "13669": [
                {
                    "start": 3581,
                    "length": 32
                },
                {
                    "start": 7746,
                    "length": 32
                }
            ],
            "13672": [
                {
                    "start": 2633,
                    "length": 32
                },
                {
                    "start": 3614,
                    "length": 32
                },
                {
                    "start": 5391,
                    "length": 32
                }
            ],
            "13675": [
                {
                    "start": 5435,
                    "length": 32
                },
                {
                    "start": 7814,
                    "length": 32
                }
            ],
            "13678": [
                {
                    "start": 5141,
                    "length": 32
                }
            ],
            "13681": [
                {
                    "start": 435,
                    "length": 32
                },
                {
                    "start": 3427,
                    "length": 32
                },
                {
                    "start": 3499,
                    "length": 32
                },
                {
                    "start": 3789,
                    "length": 32
                },
                {
                    "start": 10587,
                    "length": 32
                }
            ],
            "13684": [
                {
                    "start": 262,
                    "length": 32
                },
                {
                    "start": 349,
                    "length": 32
                },
                {
                    "start": 580,
                    "length": 32
                },
                {
                    "start": 6129,
                    "length": 32
                },
                {
                    "start": 6230,
                    "length": 32
                },
                {
                    "start": 8124,
                    "length": 32
                },
                {
                    "start": 9672,
                    "length": 32
                },
                {
                    "start": 9732,
                    "length": 32
                },
                {
                    "start": 10319,
                    "length": 32
                },
                {
                    "start": 10625,
                    "length": 32
                }
            ],
            "13687": [
                {
                    "start": 907,
                    "length": 32
                },
                {
                    "start": 10663,
                    "length": 32
                }
            ],
            "5610": [
                {
                    "start": 1580,
                    "length": 32
                },
                {
                    "start": 1699,
                    "length": 32
                },
                {
                    "start": 1839,
                    "length": 32
                },
                {
                    "start": 4674,
                    "length": 32
                }
            ]
        }
    },
    "methodIdentifiers": {
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"contract IERC4626\",\"name\":\"__vault\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"AddressInsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BelowMinimumContribution\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DistributeExcessIdleFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedInnerCall\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"enum IHyperdrive.InsufficientLiquidityReason\",\"name\":\"reason\",\"type\":\"uint8\"}],\"name\":\"InsufficientLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumSharePrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OutputLimit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PoolAlreadyInitialized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PoolIsPaused\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint112\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minVaultSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"AddressInsufficientBalance(address)\":[{\"details\":\"The ETH balance of the account is not enough to perform the operation.\"}],\"FailedInnerCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"__vault\":\"The ERC4626 compatible vault.\",\"_config\":\"The configuration of the Hyperdrive pool.\"}},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_apr\":\"The target APR.\",\"_contribution\":\"The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The initial number of LP shares created.\"}},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_amount\":\"The amount of capital provided to open the long. The        units of this quantity are either base or vault shares, depending        on the value of `_options.asBase`.\",\"_minOutput\":\"The minimum number of bonds to receive.\",\"_minVaultSharePrice\":\"The minimum vault share price at which to        open the long. This allows traders to protect themselves from        opening a long in a checkpoint where negative interest has        accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The maturity time of the bonds.\",\"_1\":\"The amount of bonds the user received.\"}}},\"title\":\"ERC4626Target3\",\"version\":1},\"userdoc\":{\"errors\":{\"BelowMinimumContribution()\":[{\"notice\":\"Thrown when the initializer doesn't provide sufficient liquidity         to cover the minimum share reserves and the LP shares that are         burned on initialization.\"}],\"DistributeExcessIdleFailed()\":[{\"notice\":\"Thrown when the distribute excess idle calculation fails due         to the starting present value calculation failing.\"}],\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"InsufficientLiquidity(uint8)\":[{\"notice\":\"Thrown when the pool doesn't have sufficient liquidity to         complete the trade.\"}],\"InvalidPresentValue()\":[{\"notice\":\"Thrown when the present value calculation fails.\"}],\"InvalidShareReserves()\":[{\"notice\":\"Thrown when update liquidity brings the share reserves below         the minimum share reserves.\"}],\"InvalidTimestamp()\":[{\"notice\":\"Thrown when the timestamp used to construct an asset ID exceeds         the uint248 scale.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"MinimumSharePrice()\":[{\"notice\":\"Thrown when vault share price is smaller than the minimum share         price. This protects traders from unknowingly opening a long or         short after negative interest has accrued.\"}],\"MinimumTransactionAmount()\":[{\"notice\":\"Thrown when the input or output amount of a trade is smaller         than the minimum transaction amount. This protects traders and         LPs from losses of precision that can occur at small scales.\"}],\"NotPayable()\":[{\"notice\":\"Thrown when ether is sent to an instance that doesn't accept         ether as a deposit asset.\"}],\"OutputLimit()\":[{\"notice\":\"Thrown when a slippage guard is violated.\"}],\"PoolAlreadyInitialized()\":[{\"notice\":\"Thrown when the pool is already initialized and a trader calls         `initialize`. This prevents the pool from being reinitialized         after it has been initialized.\"}],\"PoolIsPaused()\":[{\"notice\":\"Thrown when the pool is paused and a trader tries to add         liquidity, open a long, or open a short. Traders can still         close their existing positions while the pool is paused.\"}],\"RestrictedZeroAddress()\":[{\"notice\":\"Thrown when the owner passed to permit is the zero address. This         prevents users from spending the funds in address zero by         sending an invalid signature to ecrecover.\"}],\"UnsafeCastToInt128()\":[{\"notice\":\"Thrown when casting a value to a int128 that is outside of the         int128 scale.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}],\"UnsafeCastToUint112()\":[{\"notice\":\"Thrown when casting a value to a uint112 that is outside of the         uint128 scale.\"}],\"UnsafeCastToUint128()\":[{\"notice\":\"Thrown when casting a value to a uint128 that is outside of the         uint128 scale.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Initializes the target3 contract.\"},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows the first LP to initialize the market with a target APR.\"},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a long position.\"}},\"notice\":\"ERC4626Hyperdrive's target3 logic contract. This contract contains         several stateful functions that couldn't fit into the Hyperdrive         contract.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/instances/erc4626/ERC4626Target3.sol\":\"ERC4626Target3\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/HyperdriveTarget3.sol\":{\"keccak256\":\"0x805a1d075059fa6a4247f49e9b356f8df3da3bd37d778ad88591766c165529e1\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6bbe4411d4b5fe5f9db08e4c4acef28a6cff80c5a9ae75d2d65a35f1616f0d5a\",\"dweb:/ipfs/QmZLYZU9Wz4gZEiY1vm1JT9me13oWj9scVMgV1tbDLMNup\"]},\"contracts/src/instances/erc4626/ERC4626Base.sol\":{\"keccak256\":\"0xee1d1cbc761adf6eec60161512631235beb00d0655ef3dcd0ec7531c4048304f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://278e515459a4d84a0c44da78949247ece0be57fe16fa9afd1a1c39f14e6f79d7\",\"dweb:/ipfs/QmQhSrHbgLEHzM6sLFmAwgvDycGkYDVXhHrdFj2T3vgZuT\"]},\"contracts/src/instances/erc4626/ERC4626Target3.sol\":{\"keccak256\":\"0x27a16fe03925b87ca1d93a22e80bc3107e08683aa2bda2f07df5bce0c0fa6e06\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://dc0451e71cc56b6ecad265db257c0e1cc8184703e25c99797cb392c7f301d27c\",\"dweb:/ipfs/QmRzKD5tDGKoBa7S7L6U9J4RqXERAGN8vTBvfe6wwHoE57\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0x7d99427dc97cc1b469d205de5ced0eb15c6e305d0a7ef73d45fe7ef47ce7231e\",\"license\":\"GPL-2.0-or-later\",\"urls\":[\"bzz-raw://c7726091d2f569ff79057a693324886e2a5558c586684460b51cd20612be59d3\",\"dweb:/ipfs/QmZv6BBe22fZRaC5iYiTuZMD2ZgUXvMBHjwZLikVSoXjDP\"]},\"contracts/src/interfaces/IERC4626Hyperdrive.sol\":{\"keccak256\":\"0xc7f5a5cbfc5ba21f72fc7699d616e2483d4589514a14b6e39f624d0f4d9453e7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a4d7b144f357e86bfd23c805bb670226aa0c87b078babcd4dd3ec8b8f0b3374f\",\"dweb:/ipfs/QmTYNfB4ABRtPjCVck2uq5wQA8PvxBS45mPkVevc82TTFa\"]},\"contracts/src/interfaces/IERC4626HyperdriveCore.sol\":{\"keccak256\":\"0x94cce9f221023ebf9d4ed4fbafac76d67aee4ee0aa7771c89fcd2d374dfb490a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5ed09d2369f7e9c057d20b0c069f6b9e5242d4c9cd85b3bd49ace51ad16fdba0\",\"dweb:/ipfs/QmNzy2ewTJePinzG4L4SAfxxBySPFJW5Shxb5w4ocBgn5F\"]},\"contracts/src/interfaces/IERC4626HyperdriveRead.sol\":{\"keccak256\":\"0x2039eef677ba37898e8e42dcb321d11d3c87f739122fd03726241252326dea33\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://31eacdd274ac0d6ff2969cb465e0fddb262d223f78f9001d7252bd7370449c73\",\"dweb:/ipfs/QmVNRFMvXk1r8h9pCdSsRhQr5rkj8XgGpNoLwhb6Q6Hzbk\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213\",\"dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb\",\"dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8\",\"dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x8807f9479246301d783b015d6b7f2d7f7e03ab3685302848c57436ebb36a1ce5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://28a4f5d567a5c086ac2ae7e346c207422844865aa5e416909c522556245f8fc9\",\"dweb:/ipfs/QmUXZ2aeMFh86LCxyB4xQTuU4fR5xTcN9VwVtKzZNkv1dX\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0xfc6947a6bfff9ca937fc2654ee56203dbc2ffc3c8bffe40c1334ebc9c81804bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b29d5b70c6cb40ede4e496cbeee4937c5318b43536a450d7c246166d326c85fa\",\"dweb:/ipfs/QmcDD9Bs4Gueepjs92CYJC9UFBMFYSN1QfbfqBJMQECkWj\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x3514b829c99e0015385ff08dd1479e452529a6283e8b6800946542ff21dc9649\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://37ffd17baea5080f4184372ac835bf60694760499756235a61e41a480f4ab3c7\",\"dweb:/ipfs/QmUzEnJhRhpW18MH7GyXsug9u5FLehNfgjR7RAhZizLLVd\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x800d540f89ed4f6f40376e0e586246ab48b79a78f1fb4b7ff979b350fafb8a12\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4aa17285692fa2872fe544d4f4b8fa2b29d68be5380806c804465788e2bdb1ba\",\"dweb:/ipfs/Qmag8aW8ADj9grs9vSL33mpM2F3kbFjh6ePKGGv7pXAGdV\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0x20aad0da5f27cbdded488149694f0c126bfada17ebea0a690f5386a19b826ed0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://de8345bda127a4c5c101fb2668ede0011dbd82ff1ca3dcabd37905d56485efba\",\"dweb:/ipfs/QmYc3Jkm8c5FB1oEZwgWTNGEa8q96WWEJNyjumD8nirBdk\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xa6a716eac09df69f29b4fd76314104895b18c350679132de2db805e673d3650c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5d1e6f1092fa727453030eca383b77182755c972b83b74e6d3cf5937cc50caca\",\"dweb:/ipfs/QmNk5UeZ9ZzNLuivQQjkihaVrQ6y1pnFUn1PdWvpfDJnSU\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d\",\"dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xe86d38d659ce3191d0423a4ee9b6592218a0e59dd72f3e0ec60cfa83809b266e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://91d15d179f83429f36db12d5eac3f575727e16f1505d4cb1b95a11d0876c7534\",\"dweb:/ipfs/QmQDHYp8pgd9maivqkaH2mZ8qtb5ZEmK34n4oDmvAo8nrh\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x8fde664589dfd8a26b6d39aed585388f7c179bf508ffe7688dc6c796a68dc785\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3406b91898282977f3630976461eb344764c0f321d35588b1e31408b64f64263\",\"dweb:/ipfs/QmVGGknjaaG9wnyPHUWAMpDJZ4tANu6hmEQcUU1HnUQ5U5\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
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
                    "name": "BelowMinimumContribution"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "DistributeExcessIdleFailed"
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
                    "name": "InvalidPresentValue"
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
                    "name": "MinimumSharePrice"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "MinimumTransactionAmount"
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
                    "name": "PoolAlreadyInitialized"
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
                    "inputs": [],
                    "type": "error",
                    "name": "RestrictedZeroAddress"
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
                    "name": "UnsafeCastToInt256"
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
                        },
                        {
                            "internalType": "bool",
                            "name": "status",
                            "type": "bool",
                            "indexed": false
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
                            "name": "_apr",
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
                    "name": "initialize",
                    "outputs": [
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
                            "name": "_amount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_minOutput",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_minVaultSharePrice",
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
                    "name": "openLong",
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
                    "constructor": {
                        "params": {
                            "__vault": "The ERC4626 compatible vault.",
                            "_config": "The configuration of the Hyperdrive pool."
                        }
                    },
                    "initialize(uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_apr": "The target APR.",
                            "_contribution": "The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.",
                            "_options": "The options that configure how the operation is settled."
                        },
                        "returns": {
                            "_0": "The initial number of LP shares created."
                        }
                    },
                    "openLong(uint256,uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_amount": "The amount of capital provided to open the long. The        units of this quantity are either base or vault shares, depending        on the value of `_options.asBase`.",
                            "_minOutput": "The minimum number of bonds to receive.",
                            "_minVaultSharePrice": "The minimum vault share price at which to        open the long. This allows traders to protect themselves from        opening a long in a checkpoint where negative interest has        accrued.",
                            "_options": "The options that configure how the trade is settled."
                        },
                        "returns": {
                            "_0": "The maturity time of the bonds.",
                            "_1": "The amount of bonds the user received."
                        }
                    }
                },
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {
                    "constructor": {
                        "notice": "Initializes the target3 contract."
                    },
                    "initialize(uint256,uint256,(address,bool,bytes))": {
                        "notice": "Allows the first LP to initialize the market with a target APR."
                    },
                    "openLong(uint256,uint256,uint256,(address,bool,bytes))": {
                        "notice": "Opens a long position."
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
                "contracts/src/instances/erc4626/ERC4626Target3.sol": "ERC4626Target3"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/external/HyperdriveTarget3.sol": {
                "keccak256": "0x805a1d075059fa6a4247f49e9b356f8df3da3bd37d778ad88591766c165529e1",
                "urls": [
                    "bzz-raw://6bbe4411d4b5fe5f9db08e4c4acef28a6cff80c5a9ae75d2d65a35f1616f0d5a",
                    "dweb:/ipfs/QmZLYZU9Wz4gZEiY1vm1JT9me13oWj9scVMgV1tbDLMNup"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/instances/erc4626/ERC4626Base.sol": {
                "keccak256": "0xee1d1cbc761adf6eec60161512631235beb00d0655ef3dcd0ec7531c4048304f",
                "urls": [
                    "bzz-raw://278e515459a4d84a0c44da78949247ece0be57fe16fa9afd1a1c39f14e6f79d7",
                    "dweb:/ipfs/QmQhSrHbgLEHzM6sLFmAwgvDycGkYDVXhHrdFj2T3vgZuT"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/instances/erc4626/ERC4626Target3.sol": {
                "keccak256": "0x27a16fe03925b87ca1d93a22e80bc3107e08683aa2bda2f07df5bce0c0fa6e06",
                "urls": [
                    "bzz-raw://dc0451e71cc56b6ecad265db257c0e1cc8184703e25c99797cb392c7f301d27c",
                    "dweb:/ipfs/QmRzKD5tDGKoBa7S7L6U9J4RqXERAGN8vTBvfe6wwHoE57"
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
                "keccak256": "0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317",
                "urls": [
                    "bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213",
                    "dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76",
                "urls": [
                    "bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb",
                    "dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56",
                "urls": [
                    "bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8",
                    "dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR"
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
                "keccak256": "0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501",
                "urls": [
                    "bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae",
                    "dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs"
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
                "keccak256": "0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca",
                "urls": [
                    "bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3",
                    "dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenRead.sol": {
                "keccak256": "0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0",
                "urls": [
                    "bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11",
                    "dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveAdmin.sol": {
                "keccak256": "0x8807f9479246301d783b015d6b7f2d7f7e03ab3685302848c57436ebb36a1ce5",
                "urls": [
                    "bzz-raw://28a4f5d567a5c086ac2ae7e346c207422844865aa5e416909c522556245f8fc9",
                    "dweb:/ipfs/QmUXZ2aeMFh86LCxyB4xQTuU4fR5xTcN9VwVtKzZNkv1dX"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveBase.sol": {
                "keccak256": "0xfc6947a6bfff9ca937fc2654ee56203dbc2ffc3c8bffe40c1334ebc9c81804bc",
                "urls": [
                    "bzz-raw://b29d5b70c6cb40ede4e496cbeee4937c5318b43536a450d7c246166d326c85fa",
                    "dweb:/ipfs/QmcDD9Bs4Gueepjs92CYJC9UFBMFYSN1QfbfqBJMQECkWj"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveCheckpoint.sol": {
                "keccak256": "0x3514b829c99e0015385ff08dd1479e452529a6283e8b6800946542ff21dc9649",
                "urls": [
                    "bzz-raw://37ffd17baea5080f4184372ac835bf60694760499756235a61e41a480f4ab3c7",
                    "dweb:/ipfs/QmUzEnJhRhpW18MH7GyXsug9u5FLehNfgjR7RAhZizLLVd"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLP.sol": {
                "keccak256": "0x800d540f89ed4f6f40376e0e586246ab48b79a78f1fb4b7ff979b350fafb8a12",
                "urls": [
                    "bzz-raw://4aa17285692fa2872fe544d4f4b8fa2b29d68be5380806c804465788e2bdb1ba",
                    "dweb:/ipfs/Qmag8aW8ADj9grs9vSL33mpM2F3kbFjh6ePKGGv7pXAGdV"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLong.sol": {
                "keccak256": "0x20aad0da5f27cbdded488149694f0c126bfada17ebea0a690f5386a19b826ed0",
                "urls": [
                    "bzz-raw://de8345bda127a4c5c101fb2668ede0011dbd82ff1ca3dcabd37905d56485efba",
                    "dweb:/ipfs/QmYc3Jkm8c5FB1oEZwgWTNGEa8q96WWEJNyjumD8nirBdk"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveMultiToken.sol": {
                "keccak256": "0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373",
                "urls": [
                    "bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d",
                    "dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveShort.sol": {
                "keccak256": "0xa6a716eac09df69f29b4fd76314104895b18c350679132de2db805e673d3650c",
                "urls": [
                    "bzz-raw://5d1e6f1092fa727453030eca383b77182755c972b83b74e6d3cf5937cc50caca",
                    "dweb:/ipfs/QmNk5UeZ9ZzNLuivQQjkihaVrQ6y1pnFUn1PdWvpfDJnSU"
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
                "keccak256": "0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b",
                "urls": [
                    "bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131",
                    "dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc"
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
                "keccak256": "0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076",
                "urls": [
                    "bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd",
                    "dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/HyperdriveMath.sol": {
                "keccak256": "0xe86d38d659ce3191d0423a4ee9b6592218a0e59dd72f3e0ec60cfa83809b266e",
                "urls": [
                    "bzz-raw://91d15d179f83429f36db12d5eac3f575727e16f1505d4cb1b95a11d0876c7534",
                    "dweb:/ipfs/QmQDHYp8pgd9maivqkaH2mZ8qtb5ZEmK34n4oDmvAo8nrh"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/LPMath.sol": {
                "keccak256": "0x8fde664589dfd8a26b6d39aed585388f7c179bf508ffe7688dc6c796a68dc785",
                "urls": [
                    "bzz-raw://3406b91898282977f3630976461eb344764c0f321d35588b1e31408b64f64263",
                    "dweb:/ipfs/QmVGGknjaaG9wnyPHUWAMpDJZ4tANu6hmEQcUU1HnUQ5U5"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/SafeCast.sol": {
                "keccak256": "0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148",
                "urls": [
                    "bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8",
                    "dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/YieldSpaceMath.sol": {
                "keccak256": "0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891",
                "urls": [
                    "bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c",
                    "dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy"
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
        "absolutePath": "contracts/src/instances/erc4626/ERC4626Target3.sol",
        "id": 6199,
        "exportedSymbols": {
            "ERC4626Base": [
                5811
            ],
            "ERC4626Target3": [
                6198
            ],
            "HyperdriveTarget3": [
                3558
            ],
            "IERC4626": [
                7203
            ],
            "IHyperdrive": [
                7616
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:1092:28",
        "nodes": [
            {
                "id": 6167,
                "nodeType": "PragmaDirective",
                "src": "39:23:28",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 6169,
                "nodeType": "ImportDirective",
                "src": "64:73:28",
                "nodes": [],
                "absolutePath": "contracts/src/external/HyperdriveTarget3.sol",
                "file": "../../external/HyperdriveTarget3.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6199,
                "sourceUnit": 3559,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6168,
                            "name": "HyperdriveTarget3",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3558,
                            "src": "73:17:28",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6171,
                "nodeType": "ImportDirective",
                "src": "138:57:28",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC4626.sol",
                "file": "../../interfaces/IERC4626.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6199,
                "sourceUnit": 7204,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6170,
                            "name": "IERC4626",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7203,
                            "src": "147:8:28",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6173,
                "nodeType": "ImportDirective",
                "src": "196:63:28",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6199,
                "sourceUnit": 7617,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6172,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7616,
                            "src": "205:11:28",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6175,
                "nodeType": "ImportDirective",
                "src": "260:48:28",
                "nodes": [],
                "absolutePath": "contracts/src/instances/erc4626/ERC4626Base.sol",
                "file": "./ERC4626Base.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6199,
                "sourceUnit": 5812,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6174,
                            "name": "ERC4626Base",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5811,
                            "src": "269:11:28",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6198,
                "nodeType": "ContractDefinition",
                "src": "755:375:28",
                "nodes": [
                    {
                        "id": 6197,
                        "nodeType": "FunctionDefinition",
                        "src": "987:141:28",
                        "nodes": [],
                        "body": {
                            "id": 6196,
                            "nodeType": "Block",
                            "src": "1126:2:28",
                            "nodes": [],
                            "statements": []
                        },
                        "documentation": {
                            "id": 6181,
                            "nodeType": "StructuredDocumentation",
                            "src": "819:163:28",
                            "text": "@notice Initializes the target3 contract.\n @param _config The configuration of the Hyperdrive pool.\n @param __vault The ERC4626 compatible vault."
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 6190,
                                        "name": "_config",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 6184,
                                        "src": "1096:7:28",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    }
                                ],
                                "id": 6191,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 6189,
                                    "name": "HyperdriveTarget3",
                                    "nameLocations": [
                                        "1078:17:28"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 3558,
                                    "src": "1078:17:28"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1078:26:28"
                            },
                            {
                                "arguments": [
                                    {
                                        "id": 6193,
                                        "name": "__vault",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 6187,
                                        "src": "1117:7:28",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC4626_$7203",
                                            "typeString": "contract IERC4626"
                                        }
                                    }
                                ],
                                "id": 6194,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 6192,
                                    "name": "ERC4626Base",
                                    "nameLocations": [
                                        "1105:11:28"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 5811,
                                    "src": "1105:11:28"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1105:20:28"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 6188,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 6184,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "1038:7:28",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6197,
                                    "src": "1008:37:28",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 6183,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 6182,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "1008:11:28",
                                                "1020:10:28"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7407,
                                            "src": "1008:22:28"
                                        },
                                        "referencedDeclaration": 7407,
                                        "src": "1008:22:28",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$7407_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 6187,
                                    "mutability": "mutable",
                                    "name": "__vault",
                                    "nameLocation": "1064:7:28",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6197,
                                    "src": "1055:16:28",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC4626_$7203",
                                        "typeString": "contract IERC4626"
                                    },
                                    "typeName": {
                                        "id": 6186,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 6185,
                                            "name": "IERC4626",
                                            "nameLocations": [
                                                "1055:8:28"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7203,
                                            "src": "1055:8:28"
                                        },
                                        "referencedDeclaration": 7203,
                                        "src": "1055:8:28",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC4626_$7203",
                                            "typeString": "contract IERC4626"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "998:79:28"
                        },
                        "returnParameters": {
                            "id": 6195,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1126:0:28"
                        },
                        "scope": 6198,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 6177,
                            "name": "HyperdriveTarget3",
                            "nameLocations": [
                                "782:17:28"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 3558,
                            "src": "782:17:28"
                        },
                        "id": 6178,
                        "nodeType": "InheritanceSpecifier",
                        "src": "782:17:28"
                    },
                    {
                        "baseName": {
                            "id": 6179,
                            "name": "ERC4626Base",
                            "nameLocations": [
                                "801:11:28"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 5811,
                            "src": "801:11:28"
                        },
                        "id": 6180,
                        "nodeType": "InheritanceSpecifier",
                        "src": "801:11:28"
                    }
                ],
                "canonicalName": "ERC4626Target3",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 6176,
                    "nodeType": "StructuredDocumentation",
                    "src": "310:445:28",
                    "text": "@author DELV\n @title ERC4626Target3\n @notice ERC4626Hyperdrive's target3 logic contract. This contract contains\n         several stateful functions that couldn't fit into the Hyperdrive\n         contract.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    6198,
                    5811,
                    3558,
                    10381,
                    13634,
                    12198,
                    11279,
                    12682,
                    8936,
                    9917,
                    13842,
                    67058,
                    8062,
                    8623
                ],
                "name": "ERC4626Target3",
                "nameLocation": "764:14:28",
                "scope": 6199,
                "usedErrors": [
                    7475,
                    7478,
                    7490,
                    7514,
                    7517,
                    7523,
                    7526,
                    7529,
                    7532,
                    7538,
                    7541,
                    7544,
                    7547,
                    7550,
                    7561,
                    7573,
                    7576,
                    7579,
                    7582,
                    66433,
                    66714,
                    66719,
                    66722,
                    67003
                ],
                "usedEvents": [
                    7909,
                    7924,
                    7941,
                    7954,
                    7971,
                    7990,
                    8007,
                    8024,
                    8037,
                    8044,
                    8049,
                    8056,
                    8061,
                    8604,
                    8613,
                    8622
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 28
};
