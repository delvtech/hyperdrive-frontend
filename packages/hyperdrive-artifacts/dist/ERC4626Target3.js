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
                    "name": "_baseAmount",
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
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "bondProceeds",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        }
    ],
    "bytecode": {
        "object": "0x6102606040523480156200001257600080fd5b5060405162004c3c38038062004c3c8339810160408190526200003591620001bf565b600160005581516001600160a01b03908116608090815260608085015161018052908401516101a05260a0808501516101c05260e08086015190915260c08086015190526101008086015190915261016080860180515190925281516020908101516101209081528351604090810151610140908152945190950151909252860151841661020052918501516102205290840151600880546001600160a01b0319169184169190911790559092015182166101e0521661024052620002b3565b60405161018081016001600160401b03811182821017156200012757634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200014557600080fd5b919050565b6000608082840312156200015d57600080fd5b604051608081016001600160401b03811182821017156200018e57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610200811215620001d557600080fd5b6101e080821215620001e657600080fd5b620001f0620000f5565b9150620001fd856200012d565b82526200020d602086016200012d565b602083015260408501516040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101206200026a8187016200012d565b908301526101406200027e8682016200012d565b9083015261016062000293878783016200014a565b8184015250819350620002a88186016200012d565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161481c62000420600039600081816105f60152818161066d015281816106f9015261112f0152600050506000505060005050600061038801526000818160fd015281816101480152818161024a015281816116a70152818161170c01528181611e590152818161240d015281816124490152818161262d015261275f0152600081816101b901528181610d0101528181610d4901528181611c590152612739015260006112ee0152600081816114140152611d1f015260008181610a0b01528181610dbc01526113e8015260008181610d9b0152611cdb0152600081816101fc01528181610cdf01528181610d6a01528181611c7a01526127850152600081816101db01528181610456015281816109530152613212015260006108aa0152600081816105c9015261062a015261481c6000f3fe6080604052600436106100295760003560e01c806377d05ff41461002e578063cba2e58d14610054575b600080fd5b61004161003c3660046144a1565b61007c565b6040519081526020015b60405180910390f35b6100676100623660046144f1565b610093565b6040805192835260208301919091520161004b565b60006100898484846100b0565b90505b9392505050565b6000806100a28686868661032a565b915091505b94509492505050565b60006100ba610559565b6100c2610583565b60055460ff16156100e657604051637983c05160e01b815260040160405180910390fd5b6000806100f386856105a4565b90925090506101237f00000000000000000000000000000000000000000000000000000000000000006002614561565b82101561014357604051632afb507160e21b815260040160405180910390fd5b61016e7f00000000000000000000000000000000000000000000000000000000000000006002614561565b6101789083614578565b6005805460ff19166001179055925061019082610732565b600180546001600160801b0319166001600160801b0392909216919091179055610225610220837f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061075c565b610732565b600180546001600160801b03928316600160801b02921691909117905561026e6000807f00000000000000000000000000000000000000000000000000000000000000006107fb565b6102866000610280602087018761458b565b856107fb565b6102976102916108a3565b826108de565b5060006102a5878387610c74565b90506102b4602086018661458b565b6001600160a01b03167fdfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f9528583866102f160408b0160208c016145c2565b60408051948552602085019390935291830152151560608201526080810189905260a00160405180910390a250505061008c6001600055565b600080610335610559565b600554610100900460ff161561035e576040516321081abf60e01b815260040160405180910390fd5b610366610583565b60008061037388866105a4565b909250905060006103848383610ca3565b90507f00000000000000000000000000000000000000000000000000000000000000008110156103c75760405163211ddda360e11b815260040160405180910390fd5b868210156103e8576040516342af972b60e01b815260040160405180910390fd5b60006103f26108a3565b90506103fe81846108de565b50600080600061040e8787610cb8565b909a5091945092509050878c11156104395760405163c972651760e01b815260040160405180910390fd5b806009600082825461044b91906145df565b9091555061047b90507f0000000000000000000000000000000000000000000000000000000000000000856145df565b985061048a838984898d610e44565b600061049760018b610fb5565b90506104b0816104aa60208e018e61458b565b8b6107fb565b8d8a8a898e856104c3602083018361458b565b6001600160a01b03167f88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c866104f9898787610c74565b6105048a8888610fea565b61051460408801602089016145c2565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a350909b5050505050505050505050506100a76001600055565b60026000540361057c57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b34156105a257604051631574f9f360e01b815260040160405180910390fd5b565b6000806105b760408401602085016145c2565b156106e9576105f16001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333087611012565b6106517f00000000000000000000000000000000000000000000000000000000000000006106208660016145df565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016919061107f565b604051636e553f6560e01b8152600481018590523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af11580156106be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e291906145f2565b9150610721565b8391506107216001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333085611012565b61072961110f565b90509250929050565b6000600160801b821061075857604051630f0af95160e11b815260040160405180910390fd5b5090565b60008061076d846301e133806111a2565b9050600061077b8683610ca3565b61078d90670de0b6b3a76400006145df565b9050670de0b6b3a764000081106107c1576107ba6107b3670de0b6b3a7640000866111a2565b82906111b7565b90506107d9565b6107d66107b3670de0b6b3a764000086611218565b90505b6107ed816107e7898b610ca3565b90610ca3565b925050505b95945050505050565b6000838152600b602090815260408083206001600160a01b03861684529091528120805483929061082d9084906145df565b90915550506000838152600c6020526040812080548392906108509084906145df565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006108cf7f000000000000000000000000000000000000000000000000000000000000000042614621565b6108d99042614578565b905090565b600082815260076020526040812080546001600160801b031615158061090357504284115b1561091957546001600160801b03169050610c6e565b61092283610732565b81546001600160801b0319166001600160801b03919091161781556109468361122d565b50600090506007816109787f000000000000000000000000000000000000000000000000000000000000000088614578565b815260208101919091526040016000908120546001600160801b031691506109a1600287610fb5565b6000818152600c60205260408120549192508115610ada575060016000806109cb848a88846113d1565b9150915080600960008282546109e191906145df565b909155506109f5905084600084808e61149f565b6109ff81836145df565b9150610a2f8483888c8d7f0000000000000000000000000000000000000000000000000000000000000000611619565b9150610a43610a3e838b610ca3565b61166a565b60058054600290610a649084906201000090046001600160701b0316614635565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a9182610732565b60058054601090610ab3908490600160801b90046001600160801b0316614655565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610ae760018a610fb5565b6000818152600c60205260409020549091508015610bef5760019250600080610b13838c8a60016113d1565b915091508060096000828254610b2991906145df565b909155508c9050610b3e846000858085611690565b610b488284614578565b9250610b57610a3e848e610ca3565b60058054600290610b789084906201000090046001600160701b0316614635565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610ba583610732565b60058054601090610bc7908490600160801b90046001600160801b0316614655565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505b8215610c1257610c09610c028583614675565b6000611885565b610c1289611938565b897f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15518a8684610c408e611a75565b60408051948552602085019390935291830152606082015260800160405180910390a2889750505050505050505b92915050565b6000610c8660408301602084016145c2565b15610c9257508261008c565b610c9c8484610ca3565b905061008c565b600061008c8383670de0b6b3a7640000611b33565b600080600080610d25610cc9611b51565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000611b72565b92506000610d8e610d34611b51565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611b9e565b9050610de58785610de0847f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611bb5565b611c20565b15610df457610df46002611ca9565b600080610e0289848a611ccd565b9092509050610e118287614578565b9450610e1d81866145df565b9550610e2a81848a611b33565b9350610e36848a614578565b965050505092959194509250565b600254600160801b90046001600160801b0316610e8661022082610e7085670de0b6b3a7640000614561565b6004546001600160801b03169190896001611d4d565b600480546001600160801b0319166001600160801b0392909216919091179055610eaf86610732565b60018054600090610eca9084906001600160801b0316614655565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610ef784610732565b60018054601090610f19908490600160801b90046001600160801b0316614695565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610f4685610732565b610f509082614655565b600280546001600160801b03808416600160801b02911617905590506000610f7783611e0a565b9050610f8c81610f8788826146b5565b611885565b610f9584611e52565b610fa357610fa36003611ca9565b610fac84611938565b50505050505050565b60006001600160f81b03821115610fdf5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000610ffc60408301602084016145c2565b1561100b57610c9c84846111a2565b508261008c565b6040516001600160a01b0384811660248301528381166044830152606482018390526110799186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050611eb0565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526110d08482611f13565b611079576040516001600160a01b0384811660248301526000604483015261110591869182169063095ea7b390606401611047565b6110798482611eb0565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa15801561117e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d991906145f2565b600061008c83670de0b6b3a764000084611b33565b6000816000036111d05750670de0b6b3a7640000610c6e565b826000036111e057506000610c6e565b8160006111ec85611fb6565b9050818102611203670de0b6b3a7640000826146d5565b905061120e816121c9565b9695505050505050565b600061008c83670de0b6b3a764000084612354565b6005546000908190611250908490600160801b90046001600160801b0316610ca3565b6005546201000090046001600160701b031692509050818111156113cc57600061127a8383614578565b90506112896102208286611218565b600580546010906112ab908490600160801b90046001600160801b0316614695565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006112e485836111a290919063ffffffff16565b90506000611312827f0000000000000000000000000000000000000000000000000000000000000000610ca3565b9050806009600082825461132691906145df565b9091555061133690508183614578565b915061134182610732565b6001805460009061135c9084906001600160801b0316614655565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061138982610732565b6003805460009061139e908490600f0b614703565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806113de86866111a2565b9150600061140c837f0000000000000000000000000000000000000000000000000000000000000000610ca3565b9050611438817f0000000000000000000000000000000000000000000000000000000000000000610ca3565b9150831561145b5761144a8282614578565b6114549084614578565b9250611472565b6114658282614578565b61146f90846145df565b92505b8486101561149557611485838787611b33565b9250611492828787611b33565b91505b5094509492505050565b600354600160801b90046001600160801b03166114e8610220826114cb85670de0b6b3a7640000614561565b600454600160801b90046001600160801b031691908a6000611d4d565b600480546001600160801b03928316600160801b02921691909117905561150e86610732565b6115189082614695565b600380546001600160801b03928316600160801b02921691909117905561153e84610732565b600180546000906115599084906001600160801b0316614655565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506115868361237a565b6003805460009061159b908490600f0b614703565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506115cb85610732565b600180546010906115ed908490600160801b90046001600160801b0316614695565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806116318461162b8a888a611b33565b906111a2565b905061163e888486611b33565b61164890826145df565b90508681111561165f5761165c8782614578565b91505b509695505050505050565b6000600160701b82106107585760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b0316838110806116d257507f00000000000000000000000000000000000000000000000000000000000000006116d08583614578565b105b156116e1576116e16003611ca9565b6116eb8482614578565b600354909150600f0b6116fe8482614675565b9050838513801561173757507f000000000000000000000000000000000000000000000000000000000000000061173583836123b8565b105b15611746576117466001611ca9565b600254600160801b90046001600160801b03166117886102208261177287670de0b6b3a7640000614561565b6004546001600160801b031691908c6000611d4d565b600480546001600160801b0319166001600160801b03929092169190911790556117b28882614578565b90506117bd81610732565b600280546001600160801b03928316600160801b0292169190911790556117e383610732565b600180546001600160801b0319166001600160801b039290921691909117905561180c8261237a565b600380546001600160801b0319166001600160801b039290921691909117905561183587610732565b60018054601090611857908490600160801b90046001600160801b0316614655565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006118ae61189484836123d5565b61189f8460006123d5565b6118a99190614675565b61237a565b9050600081600f0b131561190357600280548291906000906118da9084906001600160801b0316614655565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156119335761191881614730565b600280546000906118da9084906001600160801b0316614695565b505050565b600654600360f81b6000908152600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d549091611983916001600160801b0390911690614578565b905080600003611991575050565b600061199c836123eb565b9050806000036119ab57505050565b6000806119c16119bc848688612490565b612569565b915091506119ce82610732565b600680546000906119e99084906001600160801b0316614655565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611a1681610732565b60068054601090611a38908490600160801b90046001600160801b0316614655565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611a6e81611a6990614756565b612600565b5050505050565b60008060008311611a87576000611a9c565b611a9c836107e7611a97866126f0565b612803565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b0390921691611b0791906145df565b611b119190614578565b90508015611b2857611b2382826111a2565b611b2b565b60005b949350505050565b6000826000190484118302158202611b4a57600080fd5b5091020490565b6001546003546000916108d9916001600160801b0390911690600f0b6123b8565b6000611b93878787611b8c88670de0b6b3a7640000614578565b878761283a565b979650505050505050565b60006107f282611baf858888611b33565b906111b7565b6000610089611bfc611bcf84670de0b6b3a7640000614578565b611bf6670de0b6b3a7640000611be5818a611218565b611bef9190614578565b87906128ff565b906128ff565b611c0e90670de0b6b3a76400006145df565b61162b84670de0b6b3a7640000614578565b600080611c9e85611c2f611b51565b611c3991906145df565b600154611c57908790600160801b90046001600160801b0316614578565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611b9e565b909210949350505050565b80604051633c06d78b60e11b8152600401611cc49190614772565b60405180910390fd5b600080611d17856107e785817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000611d0d818c6111a2565b6107e79190614578565b9150611d43827f0000000000000000000000000000000000000000000000000000000000000000610ca3565b9050935093915050565b600082600003611d5e5750846107f2565b8115611dd057611d8f611d7184876145df565b611d7b8587610ca3565b611d85888a610ca3565b61162b91906145df565b90506000611d9d8588612914565b90506000611dab8689612923565b905081831015611dbd57819250611dc9565b80831115611dc9578092505b50506107f2565b828503611ddf575060006107f2565b61120e611dec8487614578565b611df685876128ff565b611e00888a610ca3565b61162b9190614578565b6000600c6000611e1b600285610fb5565b815260200190815260200160002054600c6000611e39600186610fb5565b815260200190815260200160002054610c6e9190614675565b6000611e7e7f000000000000000000000000000000000000000000000000000000000000000083610ca3565b6002546001546001600160801b03918216600f0b91611e9e9116856128ff565b611ea89190614675565b121592915050565b6000611ec56001600160a01b03841683612932565b90508051600014158015611eea575080806020019051810190611ee8919061479a565b155b1561193357604051635274afe760e01b81526001600160a01b0384166004820152602401611cc4565b6000806000846001600160a01b031684604051611f3091906147b7565b6000604051808303816000865af19150503d8060008114611f6d576040519150601f19603f3d011682016040523d82523d6000602084013e611f72565b606091505b5091509150818015611f9c575080511580611f9c575080806020019051810190611f9c919061479a565b80156107f25750505050506001600160a01b03163b151590565b6000808213611fd85760405163e61b497560e01b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e1982136121e457506000919050565b680755bf798b4a1bf1e5821261220d576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b600082600019048411830215820261236b57600080fd5b50910281810615159190040190565b600060016001607f1b0319821280159061239b575060016001607f1b038213155b6107585760405163a5353be560e01b815260040160405180910390fd5b6000806123c58385614675565b9050600081121561008c57600080fd5b60008183136123e4578161008c565b5090919050565b6002546000908190612406906001600160801b031684611218565b90506124327f0000000000000000000000000000000000000000000000000000000000000000826145df565b6001546001600160801b0316111561248a576001547f00000000000000000000000000000000000000000000000000000000000000009061247d9083906001600160801b0316614578565b6124879190614578565b91505b50919050565b6124986143e3565b60006124a3836126f0565b905060006124b082612803565b905060006124d1836101400151846101200151610ca390919063ffffffff16565b61010084015160e08501516124e5916128ff565b6124ef9190614675565b604080516101208101825285815260208082019590955260008052600c85527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854818301526060810198909852608088019890985260a087015250815160c086015281015160e08501529093015161010083015250919050565b60008060006125808460c001518560e001516123b8565b9050600061258e8583612940565b9050600061259c8683612c3e565b9050806000036125b457506000958695509350505050565b856060015181116125c9579590945092505050565b50606085015160006125db8785612ce9565b9050806000036125f45750600096879650945050505050565b90969095509350505050565b6001546003546001600160801b0380831692600f9290920b91600160801b900416600080806126528686867f00000000000000000000000000000000000000000000000000000000000000008b613113565b9250925092508583146126895761266883610732565b600180546001600160801b0319166001600160801b03929092169190911790555b8482146126ba576126998261237a565b600380546001600160801b0319166001600160801b03929092169190911790555b838114610fac576126ca81610732565b600180546001600160801b03928316600160801b02921691909117905550505050505050565b6126f8614435565b60408051610160810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c083015260025404821660e082015260045490916101008301916127c991166131c7565b81526003546001600160801b03600160801b91829004811660208401526004546040909301926127fb929004166131c7565b905292915050565b60008060006128118461323d565b91509150806128335760405163aeeb825d60e01b815260040160405180910390fd5b5092915050565b60008061284a88888787876132b7565b905061286485611baf61285d898c6145df565b8690610ca3565b9750612871848985611b33565b975087811015612885576128856000611ca9565b60006128918983614578565b9050670de0b6b3a764000081106128be576128b76107b3670de0b6b3a764000088611218565b90506128d6565b6128d36107b3670de0b6b3a7640000886111a2565b90505b808810156128e8576128e86000611ca9565b6128f28189614578565b9998505050505050505050565b600061008c8383670de0b6b3a7640000612354565b600081831161248a578261008c565b60008183116123e4578161008c565b606061008c838360006132e6565b6000808360a001511261295857506080820151610c6e565b60008360a0015161296890614756565b90506129998460c001518560e00151866101000151876000015160a00151886080015161299490614756565b613113565b8651604081019190915260208082019290925291909152845180519101516000916129f9916129c891906123b8565b8651604081015160c0909101516129e790670de0b6b3a7640000614578565b88516060810151608090910151613379565b9050818110612a0f575050506080820151610c6e565b506000612a1d858584613403565b905060005b6003811015612b9957612a518660c001518760e00151886101000151896000015160a001518661299490614756565b885160408101919091526020808201929092529190915286518051910151600091612ab191612a8091906123b8565b8851604081015160c090910151612a9f90670de0b6b3a7640000614578565b8a516060810151608090910151613379565b9050600080612ac089896135a7565b9150915080612ad157505050612b99565b85831115612b2d57849650612afd620f4240670de0b6b3a7640000612af691906145df565b8790610ca3565b8311612b0e57505050505050610c6e565b612b1c8261162b8886614578565b612b2690866145df565b9450612b77565b85831015612b69576000612b458361162b868a614578565b9050858110612b575750505050612b99565b612b618187614578565b955050612b77565b849650505050505050610c6e565b8860800151851115612b8b57886080015194505b836001019350505050612a22565b50828114612c3657612bc78560c001518660e00151876101000151886000015160a001518561299490614756565b875160408101919091526020808201929092529190915285518051910151600091612c2791612bf691906123b8565b8751604081015160c090910151612c1590670de0b6b3a7640000614578565b89516060810151608090910151613379565b9050828110612c34578193505b505b505092915050565b6000612c668360c001518460e00151856101000151866000015160a001518661299490614756565b8551604081019190915260208101919091525282516000908190612c899061323d565b91509150801580612c9e575084602001518210155b15612cae57600092505050610c6e565b600085606001518660400151612cc491906145df565b9050612cdf83876020015183611b339092919063ffffffff16565b61120e9082614578565b60008083606001518460400151612d0091906145df565b90508360a00151600003612d2a5760608401516020850151612d229183611b33565b915050610c6e565b60208401516060850151600091612d42919084611b33565b905060008560a001511315612f845760005b6004811015612f7e57612d838660c001518760e00151886101000151896000015160a001518661299490614756565b885160408101919091526020810191909152528551600090612da490612803565b9050612db187828661380b565b15612dbc5750612f7e565b865180516020820151604083015160a084015160c0909401516000948594612e099490939092909190612df790670de0b6b3a7640000614578565b8e516060810151608090910151613884565b9150915080612e1a57505050612f7e565b6000828a60a0015111612e7d57612e368a8a8c60a00151613966565b92509050811580612e4f5750670de0b6b3a76400008110155b15612e64576000975050505050505050610c6e565b612e7681670de0b6b3a7640000614578565b9050612eaf565b612e868a613c27565b909650915081612ea0576000975050505050505050610c6e565b85975050505050505050610c6e565b6000612ecc8b604001518c602001516128ff90919063ffffffff16565b612ed6868a610ca3565b612ee09190614675565b90506000811315612f1057612eff612ef8838a6128ff565b82906111a2565b612f0990886145df565b9650612f6e565b6000811215612f64576000612f31612f28848b6128ff565b61162b84614756565b905087811015612f4c57612f458189614578565b9750612f5e565b60009950505050505050505050610c6e565b50612f6e565b5050505050612f7e565b8560010195505050505050612d54565b50611b2b565b60005b600481101561310a57612fb68660c001518760e00151886101000151896000015160a001518661299490614756565b885160408101919091526020810191909152528551600090612fd790612803565b9050612fe487828661380b565b15612fef575061310a565b60008061300a89898b60a0015161300590614756565b613d12565b915091508015806130235750670de0b6b3a76400008210155b156130375760009650505050505050610c6e565b61304982670de0b6b3a7640000614578565b915060006130688a604001518b602001516128ff90919063ffffffff16565b6130728589610ca3565b61307c9190614675565b905060008113156130a6576130958761162b83866111a2565b61309f90876145df565b95506130fb565b60008112156130f25760006130c08861162b868186614756565b9050868110156130db576130d48188614578565b96506130ec565b600098505050505050505050610c6e565b506130fb565b5050505061310a565b84600101945050505050612f87565b50949350505050565b60008060008360000361312d5750869150859050846131bc565b6000613139858a6146b5565b90508581121561315c5760405163585fe6df60e11b815260040160405180910390fd5b809350600088126131795761317284898b611b33565b9250613199565b61318d61318589614756565b85908b611b33565b61319690614756565b92505b6131b8876131a78b8b6123b8565b6131b187876123b8565b9190611b33565b9150505b955095509592505050565b600080670de0b6b3a76400006131db6108a3565b6131e59190614561565b90508083116131f55760006131ff565b6131ff8184614578565b9150612487613236670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614561565b83906111a2565b600080600080600061324e86613e51565b915091508061326557506000958695509350505050565b8560a001516132738761408e565b87516132809085906146b5565b61328a91906146b5565b6132949190614675565b9250505060008112156132ad5750600093849350915050565b9360019350915050565b60006132c385856111b7565b6132dc6132d486611baf868b6128ff565b859085612354565b61120e91906145df565b60608147101561330b5760405163cd78605960e01b8152306004820152602401611cc4565b600080856001600160a01b0316848660405161332791906147b7565b60006040518083038185875af1925050503d8060008114613364576040519150601f19603f3d011682016040523d82523d6000602084013e613369565b606091505b509150915061120e8683836140f5565b60008061338987878787876132b7565b905060006133b4670de0b6b3a76400006133a387876111a2565b6133ad91906145df565b8390611218565b9050670de0b6b3a764000081106133e1576133da6107b3670de0b6b3a764000088611218565b90506133f9565b6133f66107b3670de0b6b3a7640000886111a2565b90505b6107ed8188614578565b82516080810151606090910151600091829161347291670de0b6b3a76400009161342c916111a2565b61343691906145df565b610100870151875160c0015161346c91889161345a90670de0b6b3a7640000614578565b8a5160608101516080909101516132b7565b90611218565b9050670de0b6b3a764000081106134b957845160c001516134b2906107b3906134a390670de0b6b3a7640000614578565b670de0b6b3a764000090611218565b90506134eb565b845160c001516134e8906107b3906134d990670de0b6b3a7640000614578565b670de0b6b3a7640000906111a2565b90505b6134f583826145df565b905060008560e00151126135515761354a6135436135248760c001518860e0015161121890919063ffffffff16565b61353690670de0b6b3a7640000614578565b6101008801519087611b33565b8290611218565b9050613582565b61357f61354361356d8760c001518860e0015161162b90614756565b61353690670de0b6b3a76400006145df565b90505b8460c00151811061359757600091505061008c565b808560c001516107f29190614578565b81518051602090910151600091829182916135c1916123b8565b855160c08101516040909101519192506000916135f1916135e591611bef916111b7565b610100880151906111a2565b865160c081015160809091015161361c9161361091611baf90876128ff565b885160600151906111a2565b61362691906145df565b9050600061366583886000015160400151896000015160c00151670de0b6b3a76400006136539190614578565b8a516060810151608090910151614151565b9050670de0b6b3a764000081106136bc576136b56136ae6136a7896000015160c00151670de0b6b3a764000061369b9190614578565b8a5160c00151906111a2565b83906111b7565b8390610ca3565b91506136f0565b6136ed6136ae6136a7896000015160c00151670de0b6b3a76400006136e19190614578565b8a5160c0015190611218565b91505b613740613236613715896000015160c00151670de0b6b3a76400006134a39190614578565b89516080810151606090910151670de0b6b3a7640000916137369190611218565b611baf91906145df565b9150600061375c8789610100015161121890919063ffffffff16565b90508083116137765761376f8382614578565b9250613786565b6000809550955050505050613804565b60008860e00151126137ca576137c3836137b18a60c001518b60e001516111a290919063ffffffff16565b611bf690670de0b6b3a7640000614578565b92506137f9565b6137f6836137e48a60c001518b60e0015161346c90614756565b611bf690670de0b6b3a76400006145df565b92505b509093506001925050505b9250929050565b6000806138258486602001516111a290919063ffffffff16565b905060006138408660400151856111a290919063ffffffff16565b9050818110156138555760009250505061008c565b81811015801561120e57506138796136ae633b9aca00670de0b6b3a76400006145df565b101595945050505050565b60008060008812156138a65761389988614756565b6138a390876145df565b95505b60006138b28a8a6123b8565b905060006138c3828a898989614151565b905060006138e06138d889611baf898d6128ff565b889088612354565b6138ea9083614578565b9050670de0b6b3a76400008110613917576139106107b3670de0b6b3a76400008a6111a2565b905061392f565b61392c6107b3670de0b6b3a76400008a611218565b90505b89811015613946576000809450945050505061395a565b6139508a82614578565b6001945094505050505b97509795505050505050565b8251805160209091015160009182918291613980916123b8565b905060006139bd6139b16139aa896000015160c00151888b6000015160400151611baf91906145df565b88906128ff565b610100890151906111a2565b875160c08101516040909101516139ee916139e2916139db916111b7565b8990610ca3565b6101008a015190611218565b885160c0810151608090910151613a1991613a0d91611baf9088610ca3565b8a516060015190611218565b613a2391906145df565b613a2d9190614578565b90506000613a6c838960000151604001518a6000015160c00151670de0b6b3a7640000613a5a9190614578565b8b5160608101516080909101516132b7565b90506000613aa0896000015160c00151670de0b6b3a7640000613a8f9190614578565b8a5160400151611baf908a906145df565b905080821015613aba576000809550955050505050613c1f565b613adb613ac78284614578565b8a5160608101516080909101519190612354565b9050670de0b6b3a76400008110613b1f57885160c00151613b18906107b390613b0c90670de0b6b3a7640000614578565b8b5160c0015190611218565b9050613b4e565b885160c00151613b4b906107b390613b3f90670de0b6b3a7640000614578565b8b5160c00151906111a2565b90505b885160600151613b619084908390612354565b925082670de0b6b3a764000010613b8b57613b8483670de0b6b3a7640000614578565b9250613b9c565b600060019550955050505050613c1f565b60008960e0015112613be657613bdf613bc68a60c001518b60e0015161121890919063ffffffff16565b613bd890670de0b6b3a7640000614578565b8490610ca3565b9250613c14565b613c11613bff8a60c001518b60e0015161162b90614756565b613bd890670de0b6b3a76400006145df565b92505b509093506001925050505b935093915050565b60008060008360e0015113613c4157506000928392509050565b60c083015183515260e08301518351602001526101008301518351604001528251600090613c6e9061408e565b90506000808212613cb057604085015160608601518391613c9f91613c9390826145df565b60208901519190612354565b613ca99190614578565b9050613cdf565b613cb982614756565b60408601516060870151613cd29190613c9390826145df565b613cdc91906145df565b90505b60e085015160c0860151613cf4918390612354565b9050808560c00151613d069190614578565b95600195509350505050565b8251805160209091015160009182918291613d2c916123b8565b90506000613d566139b16139aa896000015160c00151888b6000015160400151611baf9190614578565b875160c0810151604090910151613d74916139e2916139db916111b7565b885160c0810151608090910151613d9391613a0d91611baf9088610ca3565b613d9d91906145df565b613da79190614578565b90506000613dd4838960000151604001518a6000015160c00151670de0b6b3a7640000613a5a9190614578565b90506000613e08896000015160c00151670de0b6b3a7640000613df79190614578565b8a5160400151611baf908a90614578565b905080821015613e22576000809550955050505050613c1f565b613e2f613ac78284614578565b9050885160c00151613b18906107b390613b0c90670de0b6b3a7640000614578565b6000806000613e73846101400151856101200151610ca390919063ffffffff16565b61010085015160e0860151613e87916128ff565b613e919190614675565b90506000613ea7856000015186602001516123b8565b90506000821315613faa576000829050600080613ef8886000015189602001518a604001518b60a001518c60c00151670de0b6b3a7640000613ee99190614578565b8d606001518e60800151613884565b9150915080613f11575060009788975095505050505050565b828210613f66576000613f4b858a60400151868c60c00151670de0b6b3a7640000613f3c9190614578565b8d606001518e60800151614176565b9050613f5681614756565b9960019950975050505050505050565b6000886020015112613f995760a0880151613f819085614578565b613f8a90614756565b98600198509650505050505050565b60a08801518851613f819190614578565b6000821215614080576000613fbe83614756565b90506000613ff28388604001518960c00151670de0b6b3a7640000613fe39190614578565b8a606001518b60800151613379565b905081811061402e576000613f8a848960400151858b60c00151670de0b6b3a764000061401f9190614578565b8c606001518d6080015161419b565b60006140608489604001518a60c00151670de0b6b3a76400006140519190614578565b8b606001518c60800151614266565b90506140768860600151838561162b9190614578565b613f8a90826145df565b506000946001945092505050565b60006140bd826101000151670de0b6b3a76400006140ac9190614578565b606084015160e08501519190612354565b6140eb836101400151670de0b6b3a76400006140d99190614578565b60608501516101208601519190611b33565b610c6e9190614675565b60608261410a57614105826142f5565b61008c565b815115801561412157506001600160a01b0384163b155b1561414a57604051639996b31560e01b81526001600160a01b0385166004820152602401611cc4565b508061008c565b600061415d85856111b7565b6132dc61416e86611baf868b610ca3565b859085611b33565b600080614187888888888888614321565b90925090508061165f5761165f6000611ca9565b6000806141ab88888787876132b7565b9050858710156141bf576141bf6000611ca9565b6141cd85611baf888a614578565b9650868110156141e1576141e16000611ca9565b60006141f984866141f28b86614578565b9190612354565b9050670de0b6b3a764000081106142265761421f6107b3670de0b6b3a764000088611218565b905061423e565b61423b6107b3670de0b6b3a7640000886111a2565b90505b6142488185611218565b90508881101561425c5761425c6000611ca9565b6128f28982614578565b6000806142768787878787614151565b9050600061429a670de0b6b3a76400006142908787611218565b61323691906145df565b9050670de0b6b3a764000081106142c7576142c06107b3670de0b6b3a7640000886111a2565b90506142df565b6142dc6107b3670de0b6b3a764000088611218565b90505b6142e981856111a2565b90506107ed8882614578565b8051156143055780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b600080600061433389898888886132b7565b905061434386611baf898b6145df565b97508781101561435a5760008092509250506143d8565b600061436b85876141f28c86614578565b9050670de0b6b3a76400008110614398576143916107b3670de0b6b3a764000089611218565b90506143b0565b6143ad6107b3670de0b6b3a7640000896111a2565b90505b6143ba8186611218565b9050808a11156143d1576143ce818b614578565b93505b6001925050505b965096945050505050565b6040518061012001604052806143f7614435565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561248a57600080fd5b6000806000606084860312156144b657600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156144db57600080fd5b6144e78682870161448f565b9150509250925092565b6000806000806080858703121561450757600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561453357600080fd5b61453f8782880161448f565b91505092959194509250565b634e487b7160e01b600052601160045260246000fd5b8082028115828204841417610c6e57610c6e61454b565b81810381811115610c6e57610c6e61454b565b60006020828403121561459d57600080fd5b81356001600160a01b038116811461008c57600080fd5b801515811461431e57600080fd5b6000602082840312156145d457600080fd5b813561008c816145b4565b80820180821115610c6e57610c6e61454b565b60006020828403121561460457600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b6000826146305761463061460b565b500690565b6001600160701b038181168382160190808211156128335761283361454b565b6001600160801b038181168382160190808211156128335761283361454b565b81810360008312801583831316838312821617156128335761283361454b565b6001600160801b038281168282160390808211156128335761283361454b565b8082018281126000831280158216821582161715612c3657612c3661454b565b6000826146e4576146e461460b565b600160ff1b8214600019841416156146fe576146fe61454b565b500590565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610c6e57610c6e61454b565b600081600f0b60016001607f1b0319810361474d5761474d61454b565b60000392915050565b6000600160ff1b820161476b5761476b61454b565b5060000390565b602081016004831061479457634e487b7160e01b600052602160045260246000fd5b91905290565b6000602082840312156147ac57600080fd5b815161008c816145b4565b6000825160005b818110156147d857602081860181015185830152016147be565b50600092019182525091905056fea2646970667358221220f2fa198603af877544dfcd096d03811fe5facea7bc2cba9c0bb483e95b392b1964736f6c63430008140033",
        "sourceMap": "755:375:28:-:0;;;987:141;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1713:1:120;1917:7;:21;5109:17:70;;-1:-1:-1;;;;;5096:30:70;;;;;;;5216;;;;;5190:56;;5669:28;;;;5645:52;;5985:32;;;;;5957:60;;6200:26;;;;;6178:48;;;6256:24;;;;;6236:44;;-1:-1:-1;6305:19:70;;;;6290:34;;;6389:12;;;;;;:18;6377:30;;;6428:12;;-1:-1:-1;6428:17:70;;;;-1:-1:-1;6417:28:70;;;6474:12;;-1:-1:-1;6474:25:70;;;;6455:44;;;;6532:12;;:29;;;;6509:52;;;-1:-1:-1;;6638:21:70;6621:38;;;;-1:-1:-1;;;6687:22:70;6669:40;;6790:18;;;;6776:11;:32;;-1:-1:-1;;;;;;6776:32:70;;;;;;;;;;6834:20;;;;6818:36;;;;1315:16:23;;;755:375:28;;14:347:182;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:182;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:185::-;453:13;;-1:-1:-1;;;;;495:31:182;;485:42;;475:70;;541:1;538;531:12;475:70;366:185;;;:::o;556:681::-;618:5;666:4;654:9;649:3;645:19;641:30;638:50;;;684:1;681;674:12;638:50;717:2;711:9;759:4;747:17;;-1:-1:-1;;;;;779:34:182;;815:22;;;776:62;773:185;;;880:10;875:3;871:20;868:1;861:31;915:4;912:1;905:15;943:4;940:1;933:15;773:185;978:10;974:2;967:22;;1007:6;998:15;;1043:9;1037:16;1029:6;1022:32;1108:2;1097:9;1093:18;1087:25;1082:2;1074:6;1070:15;1063:50;1167:2;1156:9;1152:18;1146:25;1141:2;1133:6;1129:15;1122:50;1226:2;1215:9;1211:18;1205:25;1200:2;1192:6;1188:15;1181:50;;556:681;;;;:::o;1242:1376::-;1366:6;1374;1418:9;1409:7;1405:23;1448:3;1444:2;1440:12;1437:32;;;1465:1;1462;1455:12;1437:32;1488:6;1514:2;1510;1506:11;1503:31;;;1530:1;1527;1520:12;1503:31;1556:17;;:::i;:::-;1543:30;;1596:48;1634:9;1596:48;:::i;:::-;1589:5;1582:63;1677:57;1730:2;1719:9;1715:18;1677:57;:::i;:::-;1672:2;1665:5;1661:14;1654:81;1788:2;1777:9;1773:18;1767:25;1762:2;1755:5;1751:14;1744:49;1846:2;1835:9;1831:18;1825:25;1820:2;1813:5;1809:14;1802:49;1905:3;1894:9;1890:19;1884:26;1878:3;1871:5;1867:15;1860:51;1965:3;1954:9;1950:19;1944:26;1938:3;1931:5;1927:15;1920:51;2025:3;2014:9;2010:19;2004:26;1998:3;1991:5;1987:15;1980:51;2085:3;2074:9;2070:19;2064:26;2058:3;2051:5;2047:15;2040:51;2110:3;2166:2;2155:9;2151:18;2145:25;2140:2;2133:5;2129:14;2122:49;;2190:3;2225:57;2278:2;2267:9;2263:18;2225:57;:::i;:::-;2209:14;;;2202:81;2302:3;2337:57;2375:18;;;2337:57;:::i;:::-;2321:14;;;2314:81;2414:3;2449:62;2503:7;2483:18;;;2449:62;:::i;:::-;2444:2;2437:5;2433:14;2426:86;;2531:5;2521:15;;2555:57;2608:2;2597:9;2593:18;2555:57;:::i;:::-;2545:67;;;;1242:1376;;;;;:::o;:::-;755:375:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x6080604052600436106100295760003560e01c806377d05ff41461002e578063cba2e58d14610054575b600080fd5b61004161003c3660046144a1565b61007c565b6040519081526020015b60405180910390f35b6100676100623660046144f1565b610093565b6040805192835260208301919091520161004b565b60006100898484846100b0565b90505b9392505050565b6000806100a28686868661032a565b915091505b94509492505050565b60006100ba610559565b6100c2610583565b60055460ff16156100e657604051637983c05160e01b815260040160405180910390fd5b6000806100f386856105a4565b90925090506101237f00000000000000000000000000000000000000000000000000000000000000006002614561565b82101561014357604051632afb507160e21b815260040160405180910390fd5b61016e7f00000000000000000000000000000000000000000000000000000000000000006002614561565b6101789083614578565b6005805460ff19166001179055925061019082610732565b600180546001600160801b0319166001600160801b0392909216919091179055610225610220837f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061075c565b610732565b600180546001600160801b03928316600160801b02921691909117905561026e6000807f00000000000000000000000000000000000000000000000000000000000000006107fb565b6102866000610280602087018761458b565b856107fb565b6102976102916108a3565b826108de565b5060006102a5878387610c74565b90506102b4602086018661458b565b6001600160a01b03167fdfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f9528583866102f160408b0160208c016145c2565b60408051948552602085019390935291830152151560608201526080810189905260a00160405180910390a250505061008c6001600055565b600080610335610559565b600554610100900460ff161561035e576040516321081abf60e01b815260040160405180910390fd5b610366610583565b60008061037388866105a4565b909250905060006103848383610ca3565b90507f00000000000000000000000000000000000000000000000000000000000000008110156103c75760405163211ddda360e11b815260040160405180910390fd5b868210156103e8576040516342af972b60e01b815260040160405180910390fd5b60006103f26108a3565b90506103fe81846108de565b50600080600061040e8787610cb8565b909a5091945092509050878c11156104395760405163c972651760e01b815260040160405180910390fd5b806009600082825461044b91906145df565b9091555061047b90507f0000000000000000000000000000000000000000000000000000000000000000856145df565b985061048a838984898d610e44565b600061049760018b610fb5565b90506104b0816104aa60208e018e61458b565b8b6107fb565b8d8a8a898e856104c3602083018361458b565b6001600160a01b03167f88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c866104f9898787610c74565b6105048a8888610fea565b61051460408801602089016145c2565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a350909b5050505050505050505050506100a76001600055565b60026000540361057c57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b34156105a257604051631574f9f360e01b815260040160405180910390fd5b565b6000806105b760408401602085016145c2565b156106e9576105f16001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333087611012565b6106517f00000000000000000000000000000000000000000000000000000000000000006106208660016145df565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016919061107f565b604051636e553f6560e01b8152600481018590523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af11580156106be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e291906145f2565b9150610721565b8391506107216001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333085611012565b61072961110f565b90509250929050565b6000600160801b821061075857604051630f0af95160e11b815260040160405180910390fd5b5090565b60008061076d846301e133806111a2565b9050600061077b8683610ca3565b61078d90670de0b6b3a76400006145df565b9050670de0b6b3a764000081106107c1576107ba6107b3670de0b6b3a7640000866111a2565b82906111b7565b90506107d9565b6107d66107b3670de0b6b3a764000086611218565b90505b6107ed816107e7898b610ca3565b90610ca3565b925050505b95945050505050565b6000838152600b602090815260408083206001600160a01b03861684529091528120805483929061082d9084906145df565b90915550506000838152600c6020526040812080548392906108509084906145df565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006108cf7f000000000000000000000000000000000000000000000000000000000000000042614621565b6108d99042614578565b905090565b600082815260076020526040812080546001600160801b031615158061090357504284115b1561091957546001600160801b03169050610c6e565b61092283610732565b81546001600160801b0319166001600160801b03919091161781556109468361122d565b50600090506007816109787f000000000000000000000000000000000000000000000000000000000000000088614578565b815260208101919091526040016000908120546001600160801b031691506109a1600287610fb5565b6000818152600c60205260408120549192508115610ada575060016000806109cb848a88846113d1565b9150915080600960008282546109e191906145df565b909155506109f5905084600084808e61149f565b6109ff81836145df565b9150610a2f8483888c8d7f0000000000000000000000000000000000000000000000000000000000000000611619565b9150610a43610a3e838b610ca3565b61166a565b60058054600290610a649084906201000090046001600160701b0316614635565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a9182610732565b60058054601090610ab3908490600160801b90046001600160801b0316614655565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610ae760018a610fb5565b6000818152600c60205260409020549091508015610bef5760019250600080610b13838c8a60016113d1565b915091508060096000828254610b2991906145df565b909155508c9050610b3e846000858085611690565b610b488284614578565b9250610b57610a3e848e610ca3565b60058054600290610b789084906201000090046001600160701b0316614635565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610ba583610732565b60058054601090610bc7908490600160801b90046001600160801b0316614655565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505b8215610c1257610c09610c028583614675565b6000611885565b610c1289611938565b897f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15518a8684610c408e611a75565b60408051948552602085019390935291830152606082015260800160405180910390a2889750505050505050505b92915050565b6000610c8660408301602084016145c2565b15610c9257508261008c565b610c9c8484610ca3565b905061008c565b600061008c8383670de0b6b3a7640000611b33565b600080600080610d25610cc9611b51565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000611b72565b92506000610d8e610d34611b51565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611b9e565b9050610de58785610de0847f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611bb5565b611c20565b15610df457610df46002611ca9565b600080610e0289848a611ccd565b9092509050610e118287614578565b9450610e1d81866145df565b9550610e2a81848a611b33565b9350610e36848a614578565b965050505092959194509250565b600254600160801b90046001600160801b0316610e8661022082610e7085670de0b6b3a7640000614561565b6004546001600160801b03169190896001611d4d565b600480546001600160801b0319166001600160801b0392909216919091179055610eaf86610732565b60018054600090610eca9084906001600160801b0316614655565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610ef784610732565b60018054601090610f19908490600160801b90046001600160801b0316614695565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610f4685610732565b610f509082614655565b600280546001600160801b03808416600160801b02911617905590506000610f7783611e0a565b9050610f8c81610f8788826146b5565b611885565b610f9584611e52565b610fa357610fa36003611ca9565b610fac84611938565b50505050505050565b60006001600160f81b03821115610fdf5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000610ffc60408301602084016145c2565b1561100b57610c9c84846111a2565b508261008c565b6040516001600160a01b0384811660248301528381166044830152606482018390526110799186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050611eb0565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526110d08482611f13565b611079576040516001600160a01b0384811660248301526000604483015261110591869182169063095ea7b390606401611047565b6110798482611eb0565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa15801561117e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d991906145f2565b600061008c83670de0b6b3a764000084611b33565b6000816000036111d05750670de0b6b3a7640000610c6e565b826000036111e057506000610c6e565b8160006111ec85611fb6565b9050818102611203670de0b6b3a7640000826146d5565b905061120e816121c9565b9695505050505050565b600061008c83670de0b6b3a764000084612354565b6005546000908190611250908490600160801b90046001600160801b0316610ca3565b6005546201000090046001600160701b031692509050818111156113cc57600061127a8383614578565b90506112896102208286611218565b600580546010906112ab908490600160801b90046001600160801b0316614695565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006112e485836111a290919063ffffffff16565b90506000611312827f0000000000000000000000000000000000000000000000000000000000000000610ca3565b9050806009600082825461132691906145df565b9091555061133690508183614578565b915061134182610732565b6001805460009061135c9084906001600160801b0316614655565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061138982610732565b6003805460009061139e908490600f0b614703565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806113de86866111a2565b9150600061140c837f0000000000000000000000000000000000000000000000000000000000000000610ca3565b9050611438817f0000000000000000000000000000000000000000000000000000000000000000610ca3565b9150831561145b5761144a8282614578565b6114549084614578565b9250611472565b6114658282614578565b61146f90846145df565b92505b8486101561149557611485838787611b33565b9250611492828787611b33565b91505b5094509492505050565b600354600160801b90046001600160801b03166114e8610220826114cb85670de0b6b3a7640000614561565b600454600160801b90046001600160801b031691908a6000611d4d565b600480546001600160801b03928316600160801b02921691909117905561150e86610732565b6115189082614695565b600380546001600160801b03928316600160801b02921691909117905561153e84610732565b600180546000906115599084906001600160801b0316614655565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506115868361237a565b6003805460009061159b908490600f0b614703565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506115cb85610732565b600180546010906115ed908490600160801b90046001600160801b0316614695565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806116318461162b8a888a611b33565b906111a2565b905061163e888486611b33565b61164890826145df565b90508681111561165f5761165c8782614578565b91505b509695505050505050565b6000600160701b82106107585760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b0316838110806116d257507f00000000000000000000000000000000000000000000000000000000000000006116d08583614578565b105b156116e1576116e16003611ca9565b6116eb8482614578565b600354909150600f0b6116fe8482614675565b9050838513801561173757507f000000000000000000000000000000000000000000000000000000000000000061173583836123b8565b105b15611746576117466001611ca9565b600254600160801b90046001600160801b03166117886102208261177287670de0b6b3a7640000614561565b6004546001600160801b031691908c6000611d4d565b600480546001600160801b0319166001600160801b03929092169190911790556117b28882614578565b90506117bd81610732565b600280546001600160801b03928316600160801b0292169190911790556117e383610732565b600180546001600160801b0319166001600160801b039290921691909117905561180c8261237a565b600380546001600160801b0319166001600160801b039290921691909117905561183587610732565b60018054601090611857908490600160801b90046001600160801b0316614655565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006118ae61189484836123d5565b61189f8460006123d5565b6118a99190614675565b61237a565b9050600081600f0b131561190357600280548291906000906118da9084906001600160801b0316614655565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156119335761191881614730565b600280546000906118da9084906001600160801b0316614695565b505050565b600654600360f81b6000908152600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d549091611983916001600160801b0390911690614578565b905080600003611991575050565b600061199c836123eb565b9050806000036119ab57505050565b6000806119c16119bc848688612490565b612569565b915091506119ce82610732565b600680546000906119e99084906001600160801b0316614655565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611a1681610732565b60068054601090611a38908490600160801b90046001600160801b0316614655565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611a6e81611a6990614756565b612600565b5050505050565b60008060008311611a87576000611a9c565b611a9c836107e7611a97866126f0565b612803565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b0390921691611b0791906145df565b611b119190614578565b90508015611b2857611b2382826111a2565b611b2b565b60005b949350505050565b6000826000190484118302158202611b4a57600080fd5b5091020490565b6001546003546000916108d9916001600160801b0390911690600f0b6123b8565b6000611b93878787611b8c88670de0b6b3a7640000614578565b878761283a565b979650505050505050565b60006107f282611baf858888611b33565b906111b7565b6000610089611bfc611bcf84670de0b6b3a7640000614578565b611bf6670de0b6b3a7640000611be5818a611218565b611bef9190614578565b87906128ff565b906128ff565b611c0e90670de0b6b3a76400006145df565b61162b84670de0b6b3a7640000614578565b600080611c9e85611c2f611b51565b611c3991906145df565b600154611c57908790600160801b90046001600160801b0316614578565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611b9e565b909210949350505050565b80604051633c06d78b60e11b8152600401611cc49190614772565b60405180910390fd5b600080611d17856107e785817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000611d0d818c6111a2565b6107e79190614578565b9150611d43827f0000000000000000000000000000000000000000000000000000000000000000610ca3565b9050935093915050565b600082600003611d5e5750846107f2565b8115611dd057611d8f611d7184876145df565b611d7b8587610ca3565b611d85888a610ca3565b61162b91906145df565b90506000611d9d8588612914565b90506000611dab8689612923565b905081831015611dbd57819250611dc9565b80831115611dc9578092505b50506107f2565b828503611ddf575060006107f2565b61120e611dec8487614578565b611df685876128ff565b611e00888a610ca3565b61162b9190614578565b6000600c6000611e1b600285610fb5565b815260200190815260200160002054600c6000611e39600186610fb5565b815260200190815260200160002054610c6e9190614675565b6000611e7e7f000000000000000000000000000000000000000000000000000000000000000083610ca3565b6002546001546001600160801b03918216600f0b91611e9e9116856128ff565b611ea89190614675565b121592915050565b6000611ec56001600160a01b03841683612932565b90508051600014158015611eea575080806020019051810190611ee8919061479a565b155b1561193357604051635274afe760e01b81526001600160a01b0384166004820152602401611cc4565b6000806000846001600160a01b031684604051611f3091906147b7565b6000604051808303816000865af19150503d8060008114611f6d576040519150601f19603f3d011682016040523d82523d6000602084013e611f72565b606091505b5091509150818015611f9c575080511580611f9c575080806020019051810190611f9c919061479a565b80156107f25750505050506001600160a01b03163b151590565b6000808213611fd85760405163e61b497560e01b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e1982136121e457506000919050565b680755bf798b4a1bf1e5821261220d576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b600082600019048411830215820261236b57600080fd5b50910281810615159190040190565b600060016001607f1b0319821280159061239b575060016001607f1b038213155b6107585760405163a5353be560e01b815260040160405180910390fd5b6000806123c58385614675565b9050600081121561008c57600080fd5b60008183136123e4578161008c565b5090919050565b6002546000908190612406906001600160801b031684611218565b90506124327f0000000000000000000000000000000000000000000000000000000000000000826145df565b6001546001600160801b0316111561248a576001547f00000000000000000000000000000000000000000000000000000000000000009061247d9083906001600160801b0316614578565b6124879190614578565b91505b50919050565b6124986143e3565b60006124a3836126f0565b905060006124b082612803565b905060006124d1836101400151846101200151610ca390919063ffffffff16565b61010084015160e08501516124e5916128ff565b6124ef9190614675565b604080516101208101825285815260208082019590955260008052600c85527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854818301526060810198909852608088019890985260a087015250815160c086015281015160e08501529093015161010083015250919050565b60008060006125808460c001518560e001516123b8565b9050600061258e8583612940565b9050600061259c8683612c3e565b9050806000036125b457506000958695509350505050565b856060015181116125c9579590945092505050565b50606085015160006125db8785612ce9565b9050806000036125f45750600096879650945050505050565b90969095509350505050565b6001546003546001600160801b0380831692600f9290920b91600160801b900416600080806126528686867f00000000000000000000000000000000000000000000000000000000000000008b613113565b9250925092508583146126895761266883610732565b600180546001600160801b0319166001600160801b03929092169190911790555b8482146126ba576126998261237a565b600380546001600160801b0319166001600160801b03929092169190911790555b838114610fac576126ca81610732565b600180546001600160801b03928316600160801b02921691909117905550505050505050565b6126f8614435565b60408051610160810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c083015260025404821660e082015260045490916101008301916127c991166131c7565b81526003546001600160801b03600160801b91829004811660208401526004546040909301926127fb929004166131c7565b905292915050565b60008060006128118461323d565b91509150806128335760405163aeeb825d60e01b815260040160405180910390fd5b5092915050565b60008061284a88888787876132b7565b905061286485611baf61285d898c6145df565b8690610ca3565b9750612871848985611b33565b975087811015612885576128856000611ca9565b60006128918983614578565b9050670de0b6b3a764000081106128be576128b76107b3670de0b6b3a764000088611218565b90506128d6565b6128d36107b3670de0b6b3a7640000886111a2565b90505b808810156128e8576128e86000611ca9565b6128f28189614578565b9998505050505050505050565b600061008c8383670de0b6b3a7640000612354565b600081831161248a578261008c565b60008183116123e4578161008c565b606061008c838360006132e6565b6000808360a001511261295857506080820151610c6e565b60008360a0015161296890614756565b90506129998460c001518560e00151866101000151876000015160a00151886080015161299490614756565b613113565b8651604081019190915260208082019290925291909152845180519101516000916129f9916129c891906123b8565b8651604081015160c0909101516129e790670de0b6b3a7640000614578565b88516060810151608090910151613379565b9050818110612a0f575050506080820151610c6e565b506000612a1d858584613403565b905060005b6003811015612b9957612a518660c001518760e00151886101000151896000015160a001518661299490614756565b885160408101919091526020808201929092529190915286518051910151600091612ab191612a8091906123b8565b8851604081015160c090910151612a9f90670de0b6b3a7640000614578565b8a516060810151608090910151613379565b9050600080612ac089896135a7565b9150915080612ad157505050612b99565b85831115612b2d57849650612afd620f4240670de0b6b3a7640000612af691906145df565b8790610ca3565b8311612b0e57505050505050610c6e565b612b1c8261162b8886614578565b612b2690866145df565b9450612b77565b85831015612b69576000612b458361162b868a614578565b9050858110612b575750505050612b99565b612b618187614578565b955050612b77565b849650505050505050610c6e565b8860800151851115612b8b57886080015194505b836001019350505050612a22565b50828114612c3657612bc78560c001518660e00151876101000151886000015160a001518561299490614756565b875160408101919091526020808201929092529190915285518051910151600091612c2791612bf691906123b8565b8751604081015160c090910151612c1590670de0b6b3a7640000614578565b89516060810151608090910151613379565b9050828110612c34578193505b505b505092915050565b6000612c668360c001518460e00151856101000151866000015160a001518661299490614756565b8551604081019190915260208101919091525282516000908190612c899061323d565b91509150801580612c9e575084602001518210155b15612cae57600092505050610c6e565b600085606001518660400151612cc491906145df565b9050612cdf83876020015183611b339092919063ffffffff16565b61120e9082614578565b60008083606001518460400151612d0091906145df565b90508360a00151600003612d2a5760608401516020850151612d229183611b33565b915050610c6e565b60208401516060850151600091612d42919084611b33565b905060008560a001511315612f845760005b6004811015612f7e57612d838660c001518760e00151886101000151896000015160a001518661299490614756565b885160408101919091526020810191909152528551600090612da490612803565b9050612db187828661380b565b15612dbc5750612f7e565b865180516020820151604083015160a084015160c0909401516000948594612e099490939092909190612df790670de0b6b3a7640000614578565b8e516060810151608090910151613884565b9150915080612e1a57505050612f7e565b6000828a60a0015111612e7d57612e368a8a8c60a00151613966565b92509050811580612e4f5750670de0b6b3a76400008110155b15612e64576000975050505050505050610c6e565b612e7681670de0b6b3a7640000614578565b9050612eaf565b612e868a613c27565b909650915081612ea0576000975050505050505050610c6e565b85975050505050505050610c6e565b6000612ecc8b604001518c602001516128ff90919063ffffffff16565b612ed6868a610ca3565b612ee09190614675565b90506000811315612f1057612eff612ef8838a6128ff565b82906111a2565b612f0990886145df565b9650612f6e565b6000811215612f64576000612f31612f28848b6128ff565b61162b84614756565b905087811015612f4c57612f458189614578565b9750612f5e565b60009950505050505050505050610c6e565b50612f6e565b5050505050612f7e565b8560010195505050505050612d54565b50611b2b565b60005b600481101561310a57612fb68660c001518760e00151886101000151896000015160a001518661299490614756565b885160408101919091526020810191909152528551600090612fd790612803565b9050612fe487828661380b565b15612fef575061310a565b60008061300a89898b60a0015161300590614756565b613d12565b915091508015806130235750670de0b6b3a76400008210155b156130375760009650505050505050610c6e565b61304982670de0b6b3a7640000614578565b915060006130688a604001518b602001516128ff90919063ffffffff16565b6130728589610ca3565b61307c9190614675565b905060008113156130a6576130958761162b83866111a2565b61309f90876145df565b95506130fb565b60008112156130f25760006130c08861162b868186614756565b9050868110156130db576130d48188614578565b96506130ec565b600098505050505050505050610c6e565b506130fb565b5050505061310a565b84600101945050505050612f87565b50949350505050565b60008060008360000361312d5750869150859050846131bc565b6000613139858a6146b5565b90508581121561315c5760405163585fe6df60e11b815260040160405180910390fd5b809350600088126131795761317284898b611b33565b9250613199565b61318d61318589614756565b85908b611b33565b61319690614756565b92505b6131b8876131a78b8b6123b8565b6131b187876123b8565b9190611b33565b9150505b955095509592505050565b600080670de0b6b3a76400006131db6108a3565b6131e59190614561565b90508083116131f55760006131ff565b6131ff8184614578565b9150612487613236670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614561565b83906111a2565b600080600080600061324e86613e51565b915091508061326557506000958695509350505050565b8560a001516132738761408e565b87516132809085906146b5565b61328a91906146b5565b6132949190614675565b9250505060008112156132ad5750600093849350915050565b9360019350915050565b60006132c385856111b7565b6132dc6132d486611baf868b6128ff565b859085612354565b61120e91906145df565b60608147101561330b5760405163cd78605960e01b8152306004820152602401611cc4565b600080856001600160a01b0316848660405161332791906147b7565b60006040518083038185875af1925050503d8060008114613364576040519150601f19603f3d011682016040523d82523d6000602084013e613369565b606091505b509150915061120e8683836140f5565b60008061338987878787876132b7565b905060006133b4670de0b6b3a76400006133a387876111a2565b6133ad91906145df565b8390611218565b9050670de0b6b3a764000081106133e1576133da6107b3670de0b6b3a764000088611218565b90506133f9565b6133f66107b3670de0b6b3a7640000886111a2565b90505b6107ed8188614578565b82516080810151606090910151600091829161347291670de0b6b3a76400009161342c916111a2565b61343691906145df565b610100870151875160c0015161346c91889161345a90670de0b6b3a7640000614578565b8a5160608101516080909101516132b7565b90611218565b9050670de0b6b3a764000081106134b957845160c001516134b2906107b3906134a390670de0b6b3a7640000614578565b670de0b6b3a764000090611218565b90506134eb565b845160c001516134e8906107b3906134d990670de0b6b3a7640000614578565b670de0b6b3a7640000906111a2565b90505b6134f583826145df565b905060008560e00151126135515761354a6135436135248760c001518860e0015161121890919063ffffffff16565b61353690670de0b6b3a7640000614578565b6101008801519087611b33565b8290611218565b9050613582565b61357f61354361356d8760c001518860e0015161162b90614756565b61353690670de0b6b3a76400006145df565b90505b8460c00151811061359757600091505061008c565b808560c001516107f29190614578565b81518051602090910151600091829182916135c1916123b8565b855160c08101516040909101519192506000916135f1916135e591611bef916111b7565b610100880151906111a2565b865160c081015160809091015161361c9161361091611baf90876128ff565b885160600151906111a2565b61362691906145df565b9050600061366583886000015160400151896000015160c00151670de0b6b3a76400006136539190614578565b8a516060810151608090910151614151565b9050670de0b6b3a764000081106136bc576136b56136ae6136a7896000015160c00151670de0b6b3a764000061369b9190614578565b8a5160c00151906111a2565b83906111b7565b8390610ca3565b91506136f0565b6136ed6136ae6136a7896000015160c00151670de0b6b3a76400006136e19190614578565b8a5160c0015190611218565b91505b613740613236613715896000015160c00151670de0b6b3a76400006134a39190614578565b89516080810151606090910151670de0b6b3a7640000916137369190611218565b611baf91906145df565b9150600061375c8789610100015161121890919063ffffffff16565b90508083116137765761376f8382614578565b9250613786565b6000809550955050505050613804565b60008860e00151126137ca576137c3836137b18a60c001518b60e001516111a290919063ffffffff16565b611bf690670de0b6b3a7640000614578565b92506137f9565b6137f6836137e48a60c001518b60e0015161346c90614756565b611bf690670de0b6b3a76400006145df565b92505b509093506001925050505b9250929050565b6000806138258486602001516111a290919063ffffffff16565b905060006138408660400151856111a290919063ffffffff16565b9050818110156138555760009250505061008c565b81811015801561120e57506138796136ae633b9aca00670de0b6b3a76400006145df565b101595945050505050565b60008060008812156138a65761389988614756565b6138a390876145df565b95505b60006138b28a8a6123b8565b905060006138c3828a898989614151565b905060006138e06138d889611baf898d6128ff565b889088612354565b6138ea9083614578565b9050670de0b6b3a76400008110613917576139106107b3670de0b6b3a76400008a6111a2565b905061392f565b61392c6107b3670de0b6b3a76400008a611218565b90505b89811015613946576000809450945050505061395a565b6139508a82614578565b6001945094505050505b97509795505050505050565b8251805160209091015160009182918291613980916123b8565b905060006139bd6139b16139aa896000015160c00151888b6000015160400151611baf91906145df565b88906128ff565b610100890151906111a2565b875160c08101516040909101516139ee916139e2916139db916111b7565b8990610ca3565b6101008a015190611218565b885160c0810151608090910151613a1991613a0d91611baf9088610ca3565b8a516060015190611218565b613a2391906145df565b613a2d9190614578565b90506000613a6c838960000151604001518a6000015160c00151670de0b6b3a7640000613a5a9190614578565b8b5160608101516080909101516132b7565b90506000613aa0896000015160c00151670de0b6b3a7640000613a8f9190614578565b8a5160400151611baf908a906145df565b905080821015613aba576000809550955050505050613c1f565b613adb613ac78284614578565b8a5160608101516080909101519190612354565b9050670de0b6b3a76400008110613b1f57885160c00151613b18906107b390613b0c90670de0b6b3a7640000614578565b8b5160c0015190611218565b9050613b4e565b885160c00151613b4b906107b390613b3f90670de0b6b3a7640000614578565b8b5160c00151906111a2565b90505b885160600151613b619084908390612354565b925082670de0b6b3a764000010613b8b57613b8483670de0b6b3a7640000614578565b9250613b9c565b600060019550955050505050613c1f565b60008960e0015112613be657613bdf613bc68a60c001518b60e0015161121890919063ffffffff16565b613bd890670de0b6b3a7640000614578565b8490610ca3565b9250613c14565b613c11613bff8a60c001518b60e0015161162b90614756565b613bd890670de0b6b3a76400006145df565b92505b509093506001925050505b935093915050565b60008060008360e0015113613c4157506000928392509050565b60c083015183515260e08301518351602001526101008301518351604001528251600090613c6e9061408e565b90506000808212613cb057604085015160608601518391613c9f91613c9390826145df565b60208901519190612354565b613ca99190614578565b9050613cdf565b613cb982614756565b60408601516060870151613cd29190613c9390826145df565b613cdc91906145df565b90505b60e085015160c0860151613cf4918390612354565b9050808560c00151613d069190614578565b95600195509350505050565b8251805160209091015160009182918291613d2c916123b8565b90506000613d566139b16139aa896000015160c00151888b6000015160400151611baf9190614578565b875160c0810151604090910151613d74916139e2916139db916111b7565b885160c0810151608090910151613d9391613a0d91611baf9088610ca3565b613d9d91906145df565b613da79190614578565b90506000613dd4838960000151604001518a6000015160c00151670de0b6b3a7640000613a5a9190614578565b90506000613e08896000015160c00151670de0b6b3a7640000613df79190614578565b8a5160400151611baf908a90614578565b905080821015613e22576000809550955050505050613c1f565b613e2f613ac78284614578565b9050885160c00151613b18906107b390613b0c90670de0b6b3a7640000614578565b6000806000613e73846101400151856101200151610ca390919063ffffffff16565b61010085015160e0860151613e87916128ff565b613e919190614675565b90506000613ea7856000015186602001516123b8565b90506000821315613faa576000829050600080613ef8886000015189602001518a604001518b60a001518c60c00151670de0b6b3a7640000613ee99190614578565b8d606001518e60800151613884565b9150915080613f11575060009788975095505050505050565b828210613f66576000613f4b858a60400151868c60c00151670de0b6b3a7640000613f3c9190614578565b8d606001518e60800151614176565b9050613f5681614756565b9960019950975050505050505050565b6000886020015112613f995760a0880151613f819085614578565b613f8a90614756565b98600198509650505050505050565b60a08801518851613f819190614578565b6000821215614080576000613fbe83614756565b90506000613ff28388604001518960c00151670de0b6b3a7640000613fe39190614578565b8a606001518b60800151613379565b905081811061402e576000613f8a848960400151858b60c00151670de0b6b3a764000061401f9190614578565b8c606001518d6080015161419b565b60006140608489604001518a60c00151670de0b6b3a76400006140519190614578565b8b606001518c60800151614266565b90506140768860600151838561162b9190614578565b613f8a90826145df565b506000946001945092505050565b60006140bd826101000151670de0b6b3a76400006140ac9190614578565b606084015160e08501519190612354565b6140eb836101400151670de0b6b3a76400006140d99190614578565b60608501516101208601519190611b33565b610c6e9190614675565b60608261410a57614105826142f5565b61008c565b815115801561412157506001600160a01b0384163b155b1561414a57604051639996b31560e01b81526001600160a01b0385166004820152602401611cc4565b508061008c565b600061415d85856111b7565b6132dc61416e86611baf868b610ca3565b859085611b33565b600080614187888888888888614321565b90925090508061165f5761165f6000611ca9565b6000806141ab88888787876132b7565b9050858710156141bf576141bf6000611ca9565b6141cd85611baf888a614578565b9650868110156141e1576141e16000611ca9565b60006141f984866141f28b86614578565b9190612354565b9050670de0b6b3a764000081106142265761421f6107b3670de0b6b3a764000088611218565b905061423e565b61423b6107b3670de0b6b3a7640000886111a2565b90505b6142488185611218565b90508881101561425c5761425c6000611ca9565b6128f28982614578565b6000806142768787878787614151565b9050600061429a670de0b6b3a76400006142908787611218565b61323691906145df565b9050670de0b6b3a764000081106142c7576142c06107b3670de0b6b3a7640000886111a2565b90506142df565b6142dc6107b3670de0b6b3a764000088611218565b90505b6142e981856111a2565b90506107ed8882614578565b8051156143055780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b600080600061433389898888886132b7565b905061434386611baf898b6145df565b97508781101561435a5760008092509250506143d8565b600061436b85876141f28c86614578565b9050670de0b6b3a76400008110614398576143916107b3670de0b6b3a764000089611218565b90506143b0565b6143ad6107b3670de0b6b3a7640000896111a2565b90505b6143ba8186611218565b9050808a11156143d1576143ce818b614578565b93505b6001925050505b965096945050505050565b6040518061012001604052806143f7614435565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561248a57600080fd5b6000806000606084860312156144b657600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156144db57600080fd5b6144e78682870161448f565b9150509250925092565b6000806000806080858703121561450757600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561453357600080fd5b61453f8782880161448f565b91505092959194509250565b634e487b7160e01b600052601160045260246000fd5b8082028115828204841417610c6e57610c6e61454b565b81810381811115610c6e57610c6e61454b565b60006020828403121561459d57600080fd5b81356001600160a01b038116811461008c57600080fd5b801515811461431e57600080fd5b6000602082840312156145d457600080fd5b813561008c816145b4565b80820180821115610c6e57610c6e61454b565b60006020828403121561460457600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b6000826146305761463061460b565b500690565b6001600160701b038181168382160190808211156128335761283361454b565b6001600160801b038181168382160190808211156128335761283361454b565b81810360008312801583831316838312821617156128335761283361454b565b6001600160801b038281168282160390808211156128335761283361454b565b8082018281126000831280158216821582161715612c3657612c3661454b565b6000826146e4576146e461460b565b600160ff1b8214600019841416156146fe576146fe61454b565b500590565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610c6e57610c6e61454b565b600081600f0b60016001607f1b0319810361474d5761474d61454b565b60000392915050565b6000600160ff1b820161476b5761476b61454b565b5060000390565b602081016004831061479457634e487b7160e01b600052602160045260246000fd5b91905290565b6000602082840312156147ac57600080fd5b815161008c816145b4565b6000825160005b818110156147d857602081860181015185830152016147be565b50600092019182525091905056fea2646970667358221220f2fa198603af877544dfcd096d03811fe5facea7bc2cba9c0bb483e95b392b1964736f6c63430008140033",
        "sourceMap": "755:375:28:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;1649:236:19;;;;;;:::i;:::-;;:::i;:::-;;;817:25:182;;;805:2;790:18;1649:236:19;;;;;;;;2517:336;;;;;;:::i;:::-;;:::i;:::-;;;;1593:25:182;;;1649:2;1634:18;;1627:34;;;;1566:18;2517:336:19;1419:248:182;1649:236:19;1801:16;1836:42;1848:13;1863:4;1869:8;1836:11;:42::i;:::-;1829:49;;1649:236;;;;;;:::o;2517:336::-;2708:20;2730;2781:65;2791:11;2804:10;2816:19;2837:8;2781:9;:65::i;:::-;2762:84;;;;2517:336;;;;;;;;:::o;1452:3496:66:-;1610:16;2356:21:120;:19;:21::i;:::-;1705:20:66::1;:18;:20::i;:::-;1801:26:::0;;::::1;;1797:100;;;1850:36;;-1:-1:-1::0;;;1850:36:66::1;;;;;;;;;;;1797:100;2025:19;2046:23:::0;2073:67:::1;2095:13;2122:8;2073;:67::i;:::-;2024:116:::0;;-1:-1:-1;2024:116:66;-1:-1:-1;3065:25:66::1;3069:21;3065:1;:25;:::i;:::-;3051:11;:39;3047:115;;;3113:38;;-1:-1:-1::0;;;3113:38:66::1;;;;;;;;;;;3047:115;3196:25;3200:21;3196:1;:25;:::i;:::-;3182:39;::::0;:11;:39:::1;:::i;:::-;3278:26:::0;:33;;-1:-1:-1;;3278:33:66::1;3307:4;3278:33;::::0;;3171:50;-1:-1:-1;3480:23:66::1;:11:::0;:21:::1;:23::i;:::-;3451:12;:52:::0;;-1:-1:-1;;;;;;3451:52:66::1;-1:-1:-1::0;;;;;3451:52:66;;;::::1;::::0;;;::::1;::::0;;3541:252:::1;:227;3615:11:::0;3644:23:::1;3685:4:::0;3707:17:::1;3742:12;3541:56;:227::i;:::-;:250;:252::i;:::-;3513:12;:280:::0;;-1:-1:-1;;;;;3513:280:66;;::::1;-1:-1:-1::0;;;3513:280:66::1;::::0;::::1;::::0;;;::::1;::::0;;4298:62:::1;3513:25;::::0;4338:21:::1;4298:5;:62::i;:::-;4370:59;554:1:71;4398:20:66;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;4420:8;4370:5;:59::i;:::-;4481:54;4498:19;:17;:19::i;:::-;4519:15;4481:16;:54::i;:::-;;4583:24;4610:112;4648:13;4675:15;4704:8;4610:24;:112::i;:::-;4583:139:::0;-1:-1:-1;4761:20:66::1;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;-1:-1:-1::0;;;;;4737:178:66::1;;4795:8:::0;4817:16;4847:11;4872:15:::1;::::0;;;::::1;::::0;::::1;;:::i;:::-;4737:178;::::0;;3023:25:182;;;3079:2;3064:18;;3057:34;;;;3107:18;;;3100:34;3177:14;3170:22;3165:2;3150:18;;3143:50;3224:3;3209:19;;3202:35;;;3010:3;2995:19;4737:178:66::1;;;;;;;4926:15;;;2398:20:120::0;1713:1;2924:7;:21;2744:208;1691:3683:67;1928:20;1950;2356:21:120;:19;:21::i;:::-;3349::64;;::::1;::::0;::::1;;;3345:85;;;3393:26;;-1:-1:-1::0;;;3393:26:64::1;;;;;;;;;;;3345:85;2036:20:67::2;:18;:20::i;:::-;2112:23;2137::::0;2164:61:::2;2186:7;2207:8;2164;:61::i;:::-;2111:114:::0;;-1:-1:-1;2111:114:67;-1:-1:-1;2778:21:67::2;2802:40;2111:114:::0;;2802:23:::2;:40::i;:::-;2778:64;;2872:25;2856:13;:41;2852:117;;;2920:38;;-1:-1:-1::0;;;2920:38:67::2;;;;;;;;;;;2852:117;3000:19;2982:15;:37;2978:106;;;3042:31;;-1:-1:-1::0;;;3042:31:67::2;;;;;;;;;;;2978:106;3127:24;3154:19;:17;:19::i;:::-;3127:46;;3183:51;3200:16;3218:15;3183:16;:51::i;:::-;;3496:26;3532:25:::0;3567:26:::2;3737:52;3756:15;3773;3737:18;:52::i;:::-;3603:186:::0;;-1:-1:-1;3603:186:67;;-1:-1:-1;3603:186:67;-1:-1:-1;3603:186:67;-1:-1:-1;3849:25:67;;::::2;3845:88;;;3897:25;;-1:-1:-1::0;;;3897:25:67::2;;;;;;;;;;;3845:88;4010:18;3984:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;4099:36:67::2;::::0;-1:-1:-1;4118:17:67::2;4099:16:::0;:36:::2;:::i;:::-;4084:51;;4145:168;4173:18;4205:12;4231:17;4262:15;4291:12;4145:14;:168::i;:::-;4397:15;4415:97;4450:26;4490:12;4415:21;:97::i;:::-;4397:115:::0;-1:-1:-1;4522:50:67::2;4397:115:::0;4537:20:::2;;::::0;::::2;:8:::0;:20:::2;:::i;:::-;4559:12;4522:5;:50::i;:::-;4635:7:::0;4707:12;4784;4864:15;4959:8;5068:7;5035:19:::2;;::::0;::::2;4959:8:::0;5035:19:::2;:::i;:::-;-1:-1:-1::0;;;;;5013:307:67::2;;5089:13;5116:59;5141:6;5149:16;5167:7;5116:24;:59::i;:::-;5189:66;5221:6;5229:16;5247:7;5189:31;:66::i;:::-;5269:14;::::0;;;::::2;::::0;::::2;;:::i;:::-;5013:307;::::0;;3023:25:182;;;3079:2;3064:18;;3057:34;;;;3107:18;;;3100:34;3177:14;3170:22;3165:2;3150:18;;3143:50;3224:3;3209:19;;3202:35;;;3010:3;2995:19;5013:307:67::2;;;;;;;-1:-1:-1::0;5353:13:67;;-1:-1:-1;;;;;;;;;;;;2398:20:120;1713:1;2924:7;:21;2744:208;2431:307;1755:1;2558:7;;:18;2554:86;;2599:30;;-1:-1:-1;;;2599:30:120;;;;;;;;;;;2554:86;1755:1;2714:7;:17;2431:307::o;6265:145:23:-;6332:9;:14;6328:76;;6369:24;;-1:-1:-1;;;6369:24:23;;;;;;;;;;;6328:76;6265:145::o;2066:1468::-;2213:20;;2278:15;;;;;;;;:::i;:::-;2274:1205;;;2361:141;-1:-1:-1;;;;;2375:10:23;2361:43;2422:10;2458:4;2481:7;2361:43;:141::i;:::-;2808:115;2873:6;2898:11;:7;2908:1;2898:11;:::i;:::-;-1:-1:-1;;;;;2822:10:23;2808:39;;:115;:39;:115::i;:::-;2952:38;;-1:-1:-1;;;2952:38:23;;;;;3552:25:182;;;2984:4:23;3593:18:182;;;3586:60;2952:6:23;-1:-1:-1;;;;;2952:14:23;;;;3525:18:182;;2952:38:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2937:53;;2274:1205;;;3244:7;;-1:-1:-1;3326:142:23;-1:-1:-1;;;;;3340:6:23;3326:39;3383:10;3419:4;3244:7;3326:39;:142::i;:::-;3506:21;:19;:21::i;:::-;3488:39;;2066:1468;;;;;:::o;884:190:76:-;937:9;-1:-1:-1;;;964:1:76;:12;958:86;;1000:33;;-1:-1:-1;;;1000:33:76;;;;;;;;;;;958:86;-1:-1:-1;1065:1:76;884:190::o;7896:1272:74:-;8132:20;;8370:35;:17;8396:8;8370:25;:35::i;:::-;8358:47;-1:-1:-1;8545:13:74;8567:15;:4;8358:47;8567:12;:15::i;:::-;8561:21;;150:4:73;8561:21:74;:::i;:::-;8545:37;;150:4:73;8596:5:74;:12;8592:300;;8703:36;8713:25;150:4:73;8725:12:74;8713:11;:25::i;:::-;8703:5;;:9;:36::i;:::-;8695:44;;8592:300;;;8847:34;8857:23;150:4:73;8867:12:74;8857:9;:23::i;8847:34::-;8839:42;;8592:300;9060:101;9142:5;9060:56;:23;9092;9060:31;:56::i;:::-;:64;;:101::i;:::-;9041:120;;;;7896:1272;;;;;;;;:::o;5921:316:68:-;6038:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6038:23:68;;;;;;;;;:33;;6065:6;;6038:19;:33;;6065:6;;6038:33;:::i;:::-;;;;-1:-1:-1;;6081:21:68;;;;:12;:21;;;;;:31;;6106:6;;6081:21;:31;;6106:6;;6081:31;:::i;:::-;;;;-1:-1:-1;;6171:59:68;;;1593:25:182;;;1649:2;1634:18;;1627:34;;;-1:-1:-1;;;;;6171:59:68;;;6206:1;;6186:10;;6171:59;;1566:18:182;6171:59:68;;;;;;;5921:316;;;:::o;5348:223:64:-;5424:24;5526:37;5544:19;5526:15;:37;:::i;:::-;5495:69;;:15;:69;:::i;:::-;5464:100;;5348:223;:::o;3209:6723:65:-;3335:7;3467:51;;;:12;:51;;;;;3545:27;;-1:-1:-1;;;;;3545:27:65;:32;;;:81;;;3611:15;3593;:33;3545:81;3528:168;;;3658:27;-1:-1:-1;;;;;3658:27:65;;-1:-1:-1;3651:34:65;;3528:168;3788:28;:16;:26;:28::i;:::-;3758:58;;-1:-1:-1;;;;;;3758:58:65;-1:-1:-1;;;;;3758:58:65;;;;;;;3903:40;3926:16;3903:22;:40::i;:::-;-1:-1:-1;4407:27:65;;-1:-1:-1;4437:12:65;4407:27;4463:35;4481:17;4463:15;:35;:::i;:::-;4437:71;;;;;;;;;;;-1:-1:-1;4437:71:65;;;:87;-1:-1:-1;;;;;4437:87:65;;-1:-1:-1;4557:101:65;4592:27;4633:15;4557:21;:101::i;:::-;4668:27;4698:26;;;:12;:26;;;;;;4534:124;;-1:-1:-1;4768:23:65;;4764:2272;;-1:-1:-1;4982:4:65;5145:21;;5222:190;5269:19;5310:16;5348:19;5145:21;5222:25;:190::i;:::-;5127:285;;;;5452:13;5426:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;5479:235:65;;-1:-1:-1;5513:19:65;5550:1;5569:13;;5685:15;5479:16;:235::i;:::-;5948:30;5965:13;5948:30;;:::i;:::-;;;6376:254;6435:19;6472:13;6503:19;6540:16;6574;6608:8;6376:41;:254::i;:::-;6360:270;-1:-1:-1;6865:85:65;:56;6360:270;6904:16;6865:38;:56::i;:::-;:83;:85::i;:::-;6830:31;:120;;:31;;:120;;;;;;;-1:-1:-1;;;;;6830:120:65;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;6830:120:65;;;;;-1:-1:-1;;;;;6830:120:65;;;;;;7000:25;:13;:23;:25::i;:::-;6964:32;:61;;:32;;:61;;;;-1:-1:-1;;;6964:61:65;;-1:-1:-1;;;;;6964:61:65;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;6964:61:65;;;;;-1:-1:-1;;;;;6964:61:65;;;;;;4793:2243;;4764:2272;7154:19;7176:100;7211:26;7251:15;7176:21;:100::i;:::-;7286:26;7315:25;;;:12;:25;;;;;;7154:122;;-1:-1:-1;7354:22:65;;7350:1594;;7566:4;7548:22;;7728:21;7767;7805:188;7852:18;7892:16;7930:19;7971:4;7805:25;:188::i;:::-;7710:283;;;;8033:13;8007:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;8085:15:65;;-1:-1:-1;8144:232:65;8177:18;8060:22;8232:13;;8085:15;8144;:232::i;:::-;8510:30;8527:13;8510:30;;:::i;:::-;;-1:-1:-1;8773:85:65;:56;8510:30;8812:16;8773:38;:56::i;:85::-;8738:31;:120;;:31;;:120;;;;;;;-1:-1:-1;;;;;8738:120:65;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;8738:120:65;;;;;-1:-1:-1;;;;;8738:120:65;;;;;;8908:25;:13;:23;:25::i;:::-;8872:32;:61;;:32;;:61;;;;-1:-1:-1;;;8872:61:65;;-1:-1:-1;;;;;8872:61:65;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;8872:61:65;;;;;-1:-1:-1;;;;;8872:61:65;;;;;;7378:1566;;;7350:1594;9095:15;9091:481;;;9315:126;9352:56;9388:19;9359:18;9352:56;:::i;:::-;9426:1;9315:19;:126::i;:::-;9522:39;9544:16;9522:21;:39::i;:::-;9717:15;9687:204;9746:16;9776:19;9809:18;9841:40;9864:16;9841:22;:40::i;:::-;9687:204;;;4931:25:182;;;4987:2;4972:18;;4965:34;;;;5015:18;;;5008:34;5073:2;5058:18;;5051:34;4918:3;4903:19;9687:204:65;;;;;;;9909:16;9902:23;;;;;;;;;3209:6723;;;;;:::o;25501:391:64:-;25670:7;25693:15;;;;;;;;:::i;:::-;25689:197;;;-1:-1:-1;25731:7:64;25724:14;;25689:197;25842:33;:7;25858:16;25842:15;:33::i;:::-;25835:40;;;;1535:119:73;1597:7;1624:22;1635:1;1638;1641:4;1624:10;:22::i;16240:3916:67:-;16398:26;16438:25;16477:20;16511:26;16733:251;16779:25;:23;:25::i;:::-;16818:12;:25;-1:-1:-1;;;16818:25:67;;-1:-1:-1;;;;;16818:25:67;16857:12;16895;16921:16;16951:23;16733:32;:251::i;:::-;16713:271;;17117:17;17137:184;17184:25;:23;:25::i;:::-;17223:12;:25;-1:-1:-1;;;17223:25:67;;-1:-1:-1;;;;;17223:25:67;17262:23;17299:12;17137:33;:184::i;:::-;17117:204;;17348:270;17385:12;17415:17;17450:154;17516:9;17547;17578:8;17450:44;:154::i;:::-;17348:19;:270::i;:::-;17331:449;;;17643:126;17699:56;17643:38;:126::i;:::-;17956:16;17995:26;18043:130;18086:12;18116:9;18143:16;18043:25;:130::i;:::-;17942:231;;-1:-1:-1;17942:231:67;-1:-1:-1;18336:28:67;17942:231;18336:17;:28;:::i;:::-;18321:43;-1:-1:-1;19038:33:67;19053:18;18321:43;19038:33;:::i;:::-;19018:53;-1:-1:-1;19616:92:67;:18;19659:9;19682:16;19616:29;:92::i;:::-;19595:113;-1:-1:-1;19967:33:67;19595:113;19967:12;:33;:::i;:::-;19946:54;;20011:138;;;16240:3916;;;;;;;:::o;10311:1785::-;10620:29;;-1:-1:-1;;;10620:29:67;;-1:-1:-1;;;;;10620:29:67;10698:309;:284;10620:29;10862:20;:13;10878:4;10862:20;:::i;:::-;10719:36;;-1:-1:-1;;;;;10719:36:67;;10698:284;10933:13;10964:4;10698:102;:284::i;:309::-;10659:36;:348;;-1:-1:-1;;;;;;10659:348:67;-1:-1:-1;;;;;10659:348:67;;;;;;;;;;11155:31;:19;:29;:31::i;:::-;11125:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;11125:61:67;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;11125:61:67;;;;;-1:-1:-1;;;;;11125:61:67;;;;;;11225:30;:18;:28;:30::i;:::-;11196:12;:59;;:25;;:59;;;;-1:-1:-1;;;11196:59:67;;-1:-1:-1;;;;;11196:59:67;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;11196:59:67;;;;;-1:-1:-1;;;;;11196:59:67;;;;;;11286:25;:13;:23;:25::i;:::-;11265:46;;;;:::i;:::-;11321:29;:49;;-1:-1:-1;;;;;11321:49:67;;;-1:-1:-1;;;11321:49:67;;;;;;11265:46;-1:-1:-1;;11549:30:67;11565:13;11549:15;:30::i;:::-;11525:54;-1:-1:-1;11589:109:67;11525:54;11650:38;11674:13;11525:54;11650:38;:::i;:::-;11589:19;:109::i;:::-;11797:28;11808:16;11797:10;:28::i;:::-;11792:186;;11841:126;11897:56;11841:38;:126::i;:::-;12050:39;12072:16;12050:21;:39::i;:::-;10519:1577;;10311:1785;;;;;:::o;1198:469:71:-;1309:10;-1:-1:-1;;;;;1401:10:71;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:71;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:71;1620:18;;;;1617:34;;1198:469::o;26225:405:64:-;26401:7;26424:15;;;;;;;;:::i;:::-;26420:204;;;26535:33;:7;26551:16;26535:15;:33::i;26420:204::-;-1:-1:-1;26606:7:64;26599:14;;1702:188:117;1829:53;;-1:-1:-1;;;;;5780:15:182;;;1829:53:117;;;5762:34:182;5832:15;;;5812:18;;;5805:43;5864:18;;;5857:34;;;1802:81:117;;1822:5;;1844:18;;;;;5697::182;;1829:53:117;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1829:53:117;;;;;;;;;;;1802:19;:81::i;:::-;1702:188;;;;:::o;3296:380::-;3411:47;;;-1:-1:-1;;;;;6094:32:182;;3411:47:117;;;6076:51:182;6143:18;;;;6136:34;;;3411:47:117;;;;;;;;;;6049:18:182;;;;3411:47:117;;;;;;;;-1:-1:-1;;;;;3411:47:117;-1:-1:-1;;;3411:47:117;;;3474:44;3426:13;3411:47;3474:23;:44::i;:::-;3469:201;;3561:43;;-1:-1:-1;;;;;6094:32:182;;;3561:43:117;;;6076:51:182;3601:1:117;6143:18:182;;;6136:34;3534:71:117;;3554:5;;3576:13;;;;;6049:18:182;;3561:43:117;5902:274:182;3534:71:117;3619:40;3639:5;3646:12;3619:19;:40::i;6024:123:23:-;6113:27;;-1:-1:-1;;;6113:27:23;;150:4:73;6113:27:23;;;817:25:182;6087:7:23;;6113:6;-1:-1:-1;;;;;6113:22:23;;;;790:18:182;;6113:27:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;1810:165:73:-;1872:7;1899:22;1910:1;1913:4;1919:1;1899:10;:22::i;3740:838::-;3798:7;3864:1;3869;3864:6;3860:47;;-1:-1:-1;150:4:73;3886:10;;3860:47;3960:1;3965;3960:6;3956:45;;-1:-1:-1;3989:1:73;3982:8;;3956:45;4164:1;4139:15;4341:13;4351:1;4341:2;:13::i;:::-;4328:26;-1:-1:-1;4432:18:73;;;4469:19;150:4;4432:18;4469:19;:::i;:::-;;;4561:9;4565:4;4561:3;:9::i;:::-;4546:25;3740:838;-1:-1:-1;;;;;;3740:838:73:o;3390:115::-;3450:7;3477:20;3486:1;3489:4;3495:1;3477:8;:20::i;15196:2551:64:-;15555:32;;15302:26;;;;15517:80;;:16;;-1:-1:-1;;;15555:32:64;;-1:-1:-1;;;;;15555:32:64;15517:24;:80::i;:::-;15628:31;;;;;-1:-1:-1;;;;;15628:31:64;;-1:-1:-1;15496:101:64;-1:-1:-1;15802:39:64;;;15798:1943;;;16007:22;16032:39;16053:18;16032;:39;:::i;:::-;16007:64;-1:-1:-1;16344:84:64;:55;16007:64;16382:16;16344:37;:55::i;:84::-;16308:32;:120;;:32;;:120;;;;-1:-1:-1;;;16308:120:64;;-1:-1:-1;;;;;16308:120:64;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;16308:120:64;;;;;-1:-1:-1;;;;;16308:120:64;;;;;;16728:28;16759:70;16799:16;16759:14;:22;;:70;;;;:::i;:::-;16728:101;-1:-1:-1;16843:36:64;16882:80;16728:101;16928:20;16882:28;:80::i;:::-;16843:119;;17002:28;16976:22;;:54;;;;;;;:::i;:::-;;;;-1:-1:-1;17307:52:64;;-1:-1:-1;17331:28:64;17307:52;;:::i;:::-;;;17403:32;:20;:30;:32::i;:::-;17373:12;:62;;:26;;:62;;;;-1:-1:-1;;;;;17373:62:64;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;17373:62:64;;;;;-1:-1:-1;;;;;17373:62:64;;;;;;17505:32;:20;:30;:32::i;:::-;17449:28;:102;;:28;;:102;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;17449:102:64;;;;;;;-1:-1:-1;;;;;17449:102:64;;;;;;17712:18;17691:39;;15843:1898;;;15798:1943;15196:2551;;;:::o;10496:2398:65:-;10683:21;;11089:37;:11;11109:16;11089:19;:37::i;:::-;11073:53;-1:-1:-1;11136:15:65;11154:31;11073:53;11176:8;11154:21;:31::i;:::-;11136:49;-1:-1:-1;11211:33:65;11136:49;11227:16;11211:15;:33::i;:::-;11195:49;;11671:7;11667:557;;;11711:23;11721:13;11711:7;:23;:::i;:::-;11694:40;;;;:::i;:::-;;;11667:557;;;12190:23;12200:13;12190:7;:23;:::i;:::-;12173:40;;;;:::i;:::-;;;11667:557;12442:20;12423:16;:39;12419:469;;;12557:110;:13;12599:16;12633:20;12557:24;:110::i;:::-;12541:126;-1:-1:-1;12767:110:65;:13;12809:16;12843:20;12767:24;:110::i;:::-;12751:126;;12419:469;10729:2165;10496:2398;;;;;;;:::o;14619:1128:69:-;14921:30;;-1:-1:-1;;;14921:30:69;;-1:-1:-1;;;;;14921:30:69;15001:301;:276;14921:30;15158:20;:13;15174:4;15158:20;:::i;:::-;15022:37;;-1:-1:-1;;;15022:37:69;;-1:-1:-1;;;;;15022:37:69;;;15229:11;15258:5;15001:103;:276::i;:301::-;14961:37;:341;;-1:-1:-1;;;;;14961:341:69;;;-1:-1:-1;;;14961:341:69;;;;;;;;;15445:23;:11;:21;:23::i;:::-;15412:56;;:18;:56;:::i;:::-;15367:30;:101;;-1:-1:-1;;;;;15367:101:69;;;-1:-1:-1;;;15367:101:69;;;;;;;;;15566:31;:19;:29;:31::i;:::-;15536:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;15536:61:69;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;15536:61:69;;;;;-1:-1:-1;;;;;15536:61:69;;;;;;15639:32;:21;:30;:32::i;:::-;15607:28;:64;;:28;;:64;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;15607:64:69;;;;;;;-1:-1:-1;;;;;15607:64:69;;;;;;15710:30;:18;:28;:30::i;:::-;15681:12;:59;;:25;;:59;;;;-1:-1:-1;;;15681:59:69;;-1:-1:-1;;;;;15681:59:69;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;15681:59:69;;;;;-1:-1:-1;;;;;15681:59:69;;;;;;14831:916;14619:1128;;;;;:::o;13765:1632:74:-;14026:21;;14492:119;14594:16;14492:80;:11;14528:21;14551:20;14492:35;:80::i;:::-;:101;;:119::i;:::-;14471:140;-1:-1:-1;14862:50:74;:11;14885:8;14895:16;14862:22;:50::i;:::-;14848:64;;;;:::i;:::-;;;15228:12;15215:10;:25;15211:149;;;15324:25;15337:12;15324:10;:25;:::i;:::-;15308:41;;15211:149;15370:20;13765:1632;;;;;;;;:::o;527:190:76:-;580:9;-1:-1:-1;;;607:1:76;:12;601:86;;643:33;;-1:-1:-1;;;643:33:76;;;;;;;;;;;12565:3131:67;12949:12;:26;-1:-1:-1;;;;;12949:26:67;13002:35;;;;:110;;-1:-1:-1;13091:21:67;13053:35;13069:19;13053:13;:35;:::i;:::-;:59;13002:110;12985:289;;;13137:126;13193:56;13137:38;:126::i;:::-;13283:36;13300:19;13283:36;;:::i;:::-;13802:28;;13283:36;;-1:-1:-1;13802:28:67;;13840:40;13859:21;13802:28;13840:40;:::i;:::-;;;13937:21;13914:19;13907:51;:227;;;;;14113:21;13974:124;14038:13;14069:15;13974:46;:124::i;:::-;:160;13907:227;13890:461;;;14159:181;14215:111;14159:38;:181::i;:::-;14438:29;;-1:-1:-1;;;14438:29:67;;-1:-1:-1;;;;;14438:29:67;14516:298;:273;14438:29;14670:20;:13;14686:4;14670:20;:::i;:::-;14537:36;;-1:-1:-1;;;;;14537:36:67;;14516:273;14741:11;14770:5;14516:102;:273::i;:298::-;14477:36;:337;;-1:-1:-1;;;;;;14477:337:67;-1:-1:-1;;;;;14477:337:67;;;;;;;;;;14876:31;14896:11;14876:31;;:::i;:::-;;;14949:28;:16;:26;:28::i;:::-;14917:29;:60;;-1:-1:-1;;;;;14917:60:67;;;-1:-1:-1;;;14917:60:67;;;;;;;;;15528:25;:13;:23;:25::i;:::-;15499:12;:54;;-1:-1:-1;;;;;;15499:54:67;-1:-1:-1;;;;;15499:54:67;;;;;;;;;;15594:26;:15;:24;:26::i;:::-;15563:28;:57;;-1:-1:-1;;;;;;15563:57:67;-1:-1:-1;;;;;15563:57:67;;;;;;;;;;15659:30;:18;:28;:30::i;:::-;15630:12;:59;;:25;;:59;;;;-1:-1:-1;;;15630:59:67;;-1:-1:-1;;;;;15630:59:67;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;15630:59:67;;;;;-1:-1:-1;;;;;15630:59:67;;;;;;12776:2920;;;12565:3131;;;;;:::o;12207:580:64:-;12511:12;12526:72;12558:14;:7;12511:12;12558:11;:14::i;:::-;12534:13;:6;12545:1;12534:10;:13::i;:::-;12527:46;;;;:::i;:::-;12526:70;:72::i;:::-;12511:87;;12620:1;12612:5;:9;;;12608:173;;;12637:25;:43;;12674:5;;12637:25;;;:43;;12674:5;;-1:-1:-1;;;;;12637:43:64;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;12637:43:64;;;;;-1:-1:-1;;;;;12637:43:64;;;;;;12276:511;12207:580;;:::o;12608:173::-;12709:1;12701:5;:9;;;12697:84;;;12763:6;12764:5;12763:6;:::i;:::-;12726:25;:44;;:25;;:44;;;;-1:-1:-1;;;;;12726:44:64;;:::i;12697:84::-;12276:511;12207:580;;:::o;18205:1329:66:-;18486:13;:29;-1:-1:-1;;;18375:35:66;18413:70;;;:12;:70;;;;18375:35;;18413:102;;-1:-1:-1;;;;;18486:29:66;;;;18413:102;:::i;:::-;18375:140;;18529:27;18560:1;18529:32;18525:69;;18577:7;18205:1329;:::o;18525:69::-;18680:12;18695:45;18723:16;18695:27;:45::i;:::-;18680:60;;18754:4;18762:1;18754:9;18750:46;;18779:7;;18205:1329;:::o;18750:46::-;18921:32;18955:21;18980:242;19047:161;19099:4;19125:27;19174:16;19047:30;:161::i;:::-;18980:49;:242::i;:::-;18920:302;;;;19313:36;:24;:34;:36::i;:::-;19280:13;:69;;:29;;:69;;;;-1:-1:-1;;;;;19280:69:66;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;19280:69:66;;;;;-1:-1:-1;;;;;19280:69:66;;;;;;19385:25;:13;:23;:25::i;:::-;19359:13;:51;;:22;;:51;;;;-1:-1:-1;;;19359:51:66;;-1:-1:-1;;;;;19359:51:66;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;19359:51:66;;;;;-1:-1:-1;;;;;19359:51:66;;;;;;19487:40;19512:13;19504:22;;;:::i;:::-;19487:16;:40::i;:::-;18271:1263;;;;18205:1329;:::o;18778:773:64:-;18873:20;18970;19012:1;18993:16;:20;:181;;19173:1;18993:181;;;19028:130;19141:16;19028:87;19074:40;19097:16;19074:22;:40::i;:::-;19028:45;:87::i;:130::-;19320:13;:29;19257:12;:48;;;;19184:21;19208:34;;;;;18970:204;;-1:-1:-1;19184:21:64;-1:-1:-1;;;;;19320:29:64;;;;19208:97;;19257:48;19208:97;:::i;:::-;:141;;;;:::i;:::-;19184:165;-1:-1:-1;19374:18:64;;:141;;19480:35;:12;19501:13;19480:20;:35::i;:::-;19374:141;;;19407:1;19374:141;19359:156;18778:773;-1:-1:-1;;;;18778:773:64:o;823:556:73:-;939:9;1204:1;-1:-1:-1;;1187:19:73;1184:1;1181:26;1178:1;1174:34;1167:42;1154:11;1150:60;1123:146;;1253:1;1250;1243:12;1123:146;-1:-1:-1;1340:9:73;;1336:27;;823:556::o;5752:253:64:-;5912:12;:26;5956:28;;5810:7;;5848:150;;-1:-1:-1;;;;;5912:26:64;;;;5956:28;;5848:46;:150::i;18303:892:74:-;18566:7;18703:485;18770:23;18811:13;18842:12;19081:18;19087:12;150:4:73;19081:18:74;:::i;:::-;19117:16;19151:23;18703:49;:485::i;:::-;18684:504;18303:892;-1:-1:-1;;;;;;;18303:892:74:o;3774:531::-;3974:17;4180:118;4285:12;4180:87;:23;4228;4253:13;4180:47;:87::i;:::-;:104;;:118::i;16119:541::-;16276:7;16383:270;16519:120;16603:14;16609:8;150:4:73;16603:14:74;:::i;:::-;16519:52;150:4:73;16535:29:74;150:4:73;16545:18:74;16535:9;:29::i;:::-;:35;;;;:::i;:::-;16519:9;;:15;:52::i;:::-;:58;;:120::i;:::-;16493:146;;150:4:73;16493:146:74;:::i;:::-;16384:14;16390:8;150:4:73;16384:14:74;:::i;10589:683:64:-;10745:4;10970:23;10996:221;11071:16;11043:25;:23;:25::i;:::-;:44;;;;:::i;:::-;11101:12;:25;:43;;11129:15;;-1:-1:-1;;;11101:25:64;;-1:-1:-1;;;;;11101:25:64;:43;:::i;:::-;11158:23;11195:12;10996:33;:221::i;:::-;-1:-1:-1;;;;10589:683:64;-1:-1:-1;;;;10589:683:64:o;317:182:72:-;485:6;451:41;;-1:-1:-1;;;451:41:72;;;;;;;;:::i;:::-;;;;;;;;20071:1666:64;20227:16;;21283:137;21407:12;21283:102;21368:16;21283:102;21336:9;150:4:73;21284:23:64;150:4:73;21296:10:64;21284:11;:23::i;:::-;:29;;;;:::i;21283:137::-;21272:148;-1:-1:-1;21696:34:64;21272:148;21713:16;21696;:34::i;:::-;21675:55;;20071:1666;;;;;;:::o;12314:2102:73:-;12508:15;12608:12;12624:1;12608:17;12604:63;;-1:-1:-1;12648:8:73;12641:15;;12604:63;12925:9;12921:1489;;;13022:154;13131:27;13146:12;13131;:27;:::i;:::-;13072:28;:12;13093:6;13072:20;:28::i;:::-;13023:30;:12;13044:8;13023:20;:30::i;:::-;:77;;;;:::i;13022:154::-;13012:164;-1:-1:-1;13523:18:73;13544:20;:6;13555:8;13544:10;:20::i;:::-;13523:41;-1:-1:-1;13578:18:73;13599:20;:6;13610:8;13599:10;:20::i;:::-;13578:41;;13647:10;13637:7;:20;13633:164;;;13687:10;13677:20;;13633:164;;;13732:10;13722:7;:20;13718:79;;;13772:10;13762:20;;13718:79;12936:871;;12921:1489;;;14106:12;14090;:28;14086:75;;-1:-1:-1;14145:1:73;14138:8;;14086:75;14247:152;14354:27;14369:12;14354;:27;:::i;:::-;14297:26;:12;14316:6;14297:18;:26::i;:::-;14248:30;:12;14269:8;14248:20;:30::i;:::-;:75;;;;:::i;6343:827:64:-;6428:6;6962:12;:187;6996:135;7043:27;7096:13;6996:21;:135::i;:::-;6962:187;;;;;;;;;;;;6723:12;:186;6757:134;6804:26;6856:13;6757:21;:134::i;:::-;6723:186;;;;;;;;;;;;6699:464;;;;:::i;11604:432::-;11673:4;11981:47;:21;12011:16;11981:29;:47::i;:::-;11932:25;;:12;11840:26;-1:-1:-1;;;;;11932:25:64;;;11807:151;;;11832:59;;11840:26;11874:16;11832:41;:59::i;:::-;11807:151;;;;:::i;:::-;:222;;;11604:432;-1:-1:-1;;11604:432:64:o;4059:629:117:-;4478:23;4504:33;-1:-1:-1;;;;;4504:27:117;;4532:4;4504:27;:33::i;:::-;4478:59;;4551:10;:17;4572:1;4551:22;;:57;;;;;4589:10;4578:30;;;;;;;;;;;;:::i;:::-;4577:31;4551:57;4547:135;;;4631:40;;-1:-1:-1;;;4631:40:117;;-1:-1:-1;;;;;8186:32:182;;4631:40:117;;;8168:51:182;8141:18;;4631:40:117;8022:203:182;5189:578:117;5272:4;5574:12;5588:23;5623:5;-1:-1:-1;;;;;5615:19:117;5635:4;5615:25;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5573:67;;;;5657:7;:69;;;;-1:-1:-1;5669:17:117;;:22;;:56;;;5706:10;5695:30;;;;;;;;;;;;:::i;:::-;5657:103;;;;-1:-1:-1;;;;;;;;;;5730:26:117;;:30;;;5189:578::o;8345:3611:73:-;8390:8;8443:1;8438;:6;8434:80;;8471:28;;-1:-1:-1;;;8471:28:73;;;;;;;;;;;8434:80;-1:-1:-1;9479:2:73;-1:-1:-1;;;;;;;8890:1:73;8886:49;8993:9;;;8973:18;8970:33;8967:1;8963:41;8957:48;9055:9;;;9043:10;9040:25;9037:1;9033:33;9027:40;9113:9;;;9105:6;9102:21;9099:1;9095:29;9089:36;9169:9;;;9163:4;9160:19;9157:1;9153:27;;;9147:34;;;9224:9;;;9219:3;9216:18;9213:1;9209:26;9203:33;9279:9;;;9271:18;;;9268:1;9264:26;;;9258:33;;;9327:9;;;9319:18;;;9313:25;9509:3;:7;;;;;9495:22;;;;9542:17;;;10335:31;10331:35;;10386:5;;10385:13;;10402:32;10384:50;10454:5;;10453:13;;10470:33;10452:51;10523:5;;10522:13;;10539:33;10521:51;10592:5;;10591:13;;10608:33;10590:51;10661:5;;10660:13;;10677:32;10659:50;10729:5;;10728:13;;10745:30;10727:48;9732:31;9728:35;;9783:5;;9782:13;;9799:32;9781:50;9851:5;;9850:13;;9867:32;9849:50;9919:5;;9918:13;;-1:-1:-1;;9917:50:73;9987:5;;9986:13;;-1:-1:-1;;9985:50:73;10055:5;;10054:13;;;-1:-1:-1;;10053:50:73;10121:5;-1:-1:-1;;10121:46:73;11116:10;11506:43;11501:48;-1:-1:-1;;9475:6:73;;;;11629:71;:91;11608:112;11793:72;11788:77;11936:3;11930:9;;8345:3611::o;4830:3335::-;4876:8;-1:-1:-1;;5053:1:73;:26;5049:40;;-1:-1:-1;5088:1:73;;4830:3335;-1:-1:-1;4830:3335:73:o;5049:40::-;5288:21;5283:1;:26;5279:87;;5334:32;;-1:-1:-1;;;5334:32:73;;;;;;;;;;;5279:87;5639:7;5633:2;5628:7;;;5627:19;;-1:-1:-1;5975:8:73;6059:2;5999:29;5988:7;;;5987:41;-1:-1:-1;;;5987:51:73;5986:75;;6087:29;6083:33;;6079:37;;;-1:-1:-1;;6758:35:73;;6813:5;;6393:2;6812:13;;;6829:32;6811:50;6881:5;;6880:13;;-1:-1:-1;;6879:51:73;6950:5;;6949:13;;6966:34;6948:52;7020:5;;7019:13;;-1:-1:-1;;7018:53:73;7091:5;;7090:13;;7107:35;7089:53;6399:32;6332:31;6328:35;;6383:5;;6382:13;;6381:50;;;6456:5;;;-1:-1:-1;;6456:40:73;6516:5;6515:13;;;6532:35;6514:53;6585:5;;;-1:-1:-1;;;6585:50:73;7507:10;8044:49;8011:82;8126:3;:7;;;;8010:124;;;;;;-1:-1:-1;;4830:3335:73:o;2211:748::-;2325:9;2590:1;-1:-1:-1;;2573:19:73;2570:1;2567:26;2564:1;2560:34;2553:42;2540:11;2536:60;2509:146;;2639:1;2636;2629:12;2509:146;-1:-1:-1;2906:9:73;;2853:27;;;2850:34;;2902:27;;;2829:114;;2211:748::o;1238:219:76:-;1289:8;-1:-1:-1;;;;;;1315:21:76;;;;;:46;;-1:-1:-1;;;;;;1340:21:76;;;1315:46;1309:119;;1385:32;;-1:-1:-1;;;1385:32:76;;;;;;;;;;;6471:340:74;6606:7;;6657:53;6694:16;6664:14;6657:53;:::i;:::-;6625:85;;6754:1;6728:22;:27;;6720:36;;;;;15417:101:73;15473:6;15502:1;15498;:5;:13;;15510:1;15498:13;;;-1:-1:-1;15506:1:73;;15417:101;-1:-1:-1;15417:101:73:o;18027:558:64:-;18248:25;;18127:18;;;;18240:80;;-1:-1:-1;;;;;18248:25:64;18294:16;18240:40;:80::i;:::-;18217:103;-1:-1:-1;18363:36:64;18378:21;18217:103;18363:36;:::i;:::-;18334:12;:26;-1:-1:-1;;;;;18334:26:64;:65;18330:222;;;18444:12;:26;18520:21;;18444:57;;18489:12;;-1:-1:-1;;;;;18444:26:64;:57;:::i;:::-;:97;;;;:::i;:::-;18415:126;;18330:222;18561:17;18027:558;;;:::o;7381:1570::-;7553:47;;:::i;:::-;7612:63;7678:70;7718:16;7678:22;:70::i;:::-;7612:136;;7758:28;7789:70;7831:18;7789:28;:70::i;:::-;7758:101;;8006:20;8214:128;8280:18;:44;;;8214:18;:36;;;:44;;:128;;;;:::i;:::-;8108:43;;;;8049:35;;;;:116;;:41;:116::i;:::-;8029:327;;;;:::i;:::-;8375:569;;;;;;;;;;;;;;;;;;;-1:-1:-1;8552:34:64;;:12;:34;;;;8375:569;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;8761:32:64;;8375:569;;;;8832:34;;;8375:569;;;;8902:31;;;;8375:569;;;;-1:-1:-1;8375:569:64;7381:1570;-1:-1:-1;7381:1570:64:o;18696:2575:75:-;18815:7;18824;18944:38;18985:169;19062:7;:29;;;19109:7;:31;;;18985:59;:169::i;:::-;18944:210;;19164:29;19196:105;19240:7;19261:30;19196;:105::i;:::-;19164:137;;19590:32;19625:131;19696:7;19721:21;19625:53;:131::i;:::-;19590:166;;19893:24;19921:1;19893:29;19889:743;;-1:-1:-1;19946:1:75;;;;-1:-1:-1;18696:2575:75;-1:-1:-1;;;;18696:2575:75:o;19889:743::-;20227:7;:35;;;20199:24;:63;20182:450;;20295:24;20321:21;;-1:-1:-1;18696:2575:75;-1:-1:-1;;;18696:2575:75:o;20182:450::-;-1:-1:-1;20586:35:75;;;;20891:21;20915:117;20971:7;20992:30;20915:42;:117::i;:::-;20891:141;;21046:13;21063:1;21046:18;21042:62;;-1:-1:-1;21088:1:75;;;;-1:-1:-1;18696:2575:75;-1:-1:-1;;;;;18696:2575:75:o;21042:62::-;21224:24;;21250:13;;-1:-1:-1;18696:2575:75;-1:-1:-1;;;;18696:2575:75:o;19711:1121:66:-;19852:12;:26;19914:28;;-1:-1:-1;;;;;19852:26:66;;;;19914:28;;;;;;-1:-1:-1;;;19976:25:66;;;19827:22;;;20150:218;19852:26;19914:28;19976:25;20296:21;20335:19;20150:31;:218::i;:::-;20011:357;;;;;;20443:14;20419:20;:38;20415:130;;20502:32;:20;:30;:32::i;:::-;20473:12;:61;;-1:-1:-1;;;;;;20473:61:66;-1:-1:-1;;;;;20473:61:66;;;;;;;;;;20415:130;20584:16;20558:22;:42;20554:137;;20647:33;:22;:31;:33::i;:::-;20616:28;:64;;-1:-1:-1;;;;;;20616:64:66;-1:-1:-1;;;;;20616:64:66;;;;;;;;;;20554:137;20727:13;20704:19;:36;20700:126;;20784:31;:19;:29;:31::i;:::-;20756:12;:59;;-1:-1:-1;;;;;20756:59:66;;;-1:-1:-1;;;20756:59:66;;;;;;;;;19774:1058;;;;;;19711:1121;:::o;9144:970:64:-;9239:39;;:::i;:::-;9299:808;;;;;;;;9354:12;:26;-1:-1:-1;;;;;9354:26:64;;;9299:808;;9411:28;;;;9299:808;;;;-1:-1:-1;;;9467:25:64;;;;;;9299:808;;;;;;;;;;;;;9577:23;9299:808;;;;9636:21;9299:808;;;;9684:12;9299:808;;;;9411:28;9728:29;;;;9299:808;;;;9844:36;;9299:808;;9354:26;9299:808;;;9797:97;;9844:36;9797:29;:97::i;:::-;9299:808;;9927:30;;-1:-1:-1;;;;;;;;9927:30:64;;;;;;9299:808;;;;10045:37;;9299:808;;;;;9998:98;;10045:37;;;9998:29;:98::i;:::-;9299:808;;9290:817;9144:970;-1:-1:-1;;9144:970:64:o;6170:342:75:-;6273:7;6293:20;6315:12;6331:56;6370:7;6331:25;:56::i;:::-;6292:95;;;;6402:7;6397:80;;6432:34;;-1:-1:-1;;;6432:34:75;;;;;;;;;;;6397:80;-1:-1:-1;6493:12:75;6170:342;-1:-1:-1;;6170:342:75:o;2068:1646:77:-;2258:7;2415:9;2427:20;2431:2;2435:1;2438;2441;2444:2;2427:3;:20::i;:::-;2415:32;-1:-1:-1;2585:26:77;2609:1;2585:19;2596:7;2601:2;2596;:7;:::i;:::-;2585:2;;:10;:19::i;:26::-;2580:31;-1:-1:-1;2674:20:77;:1;2580:31;2691:2;2674:12;:20::i;:::-;2669:25;;2768:2;2764:1;:6;2760:166;;;2786:129;2842:59;2786:38;:129::i;:::-;3086:10;3099:6;3103:2;3099:1;:6;:::i;:::-;3086:19;;150:4:73;3119:2:77;:9;3115:261;;3217:20;3224:12;150:4:73;3234:1:77;3224:9;:12::i;3217:20::-;3212:25;;3115:261;;;3343:22;3350:14;150:4:73;3362:1:77;3350:11;:14::i;3343:22::-;3338:27;;3115:261;3449:2;3445:1;:6;3441:166;;;3467:129;3523:59;3467:38;:129::i;:::-;3701:6;3705:2;3701:1;:6;:::i;:::-;3694:13;2068:1646;-1:-1:-1;;;;;;;;;2068:1646:77:o;3117:115:73:-;3177:7;3204:20;3213:1;3216;3219:4;3204:8;:20::i;14589:104::-;14647:7;14677:1;14673;:5;:13;;14685:1;14673:13;;14866:104;14924:7;14954:1;14950;:5;:13;;14962:1;14950:13;;2705:151:118;2780:12;2811:38;2833:6;2841:4;2847:1;2811:21;:38::i;40422:9253:75:-;40591:29;40797:1;40772:7;:21;;;:26;40768:76;;-1:-1:-1;40821:12:75;;;;40814:19;;40768:76;40853:21;40886:7;:21;;;40885:22;;;:::i;:::-;40853:55;;41431:284;41473:7;:29;;;41520:7;:31;;;41569:7;:28;;;41615:7;:26;;;:47;;;41688:7;:12;;;41680:21;;;:::i;:::-;41431:24;:284::i;:::-;41257:26;;41375:39;;;41239:476;;;;41315:42;;;;41239:476;;;;;;;;41877:26;;:40;;41939:42;;;41257:26;;41753:506;;41809:190;;41877:40;41809:46;:190::i;:::-;42017:26;;:39;;;;42080:38;;;;;42074:44;;150:4:73;42074:44:75;:::i;:::-;42136:26;;:42;;;;42196:49;;;;;41753:38;:506::i;:::-;41729:530;;42488:13;42471;:30;42467:88;;-1:-1:-1;;;42528:12:75;;;;42521:19;;42467:88;41093:1472;42638:34;42675:161;42735:7;42760:31;42809:13;42675:42;:161::i;:::-;42638:198;;42914:9;42909:5389;1188:1;42929;:43;42909:5389;;;43321:298;43363:7;:29;;;43410:7;:31;;;43459:7;:28;;;43505:7;:26;;;:47;;;43578:26;43570:35;;;:::i;43321:298::-;43147:26;;43265:39;;;43129:490;;;;43205:42;;;;43129:490;;;;;;;;43781:26;;:40;;43843:42;;;43147:26;;43657:506;;43713:190;;43781:40;43713:46;:190::i;:::-;43921:26;;:39;;;;43984:38;;;;;43978:44;;150:4:73;43978:44:75;:::i;:::-;44040:26;;:42;;;;44100:49;;;;;43657:38;:506::i;:::-;43633:530;;44351:18;44387:12;44416:137;44475:7;44504:31;44416:37;:137::i;:::-;44333:220;;;;44572:7;44567:52;;44599:5;;;;;44567:52;44809:13;44793;:29;44789:3134;;;45044:26;45020:50;;45308:113;1374:3;150:4:73;45355:44:75;;;;:::i;:::-;45308:13;;:21;:113::i;:::-;45271:13;:150;45246:263;;45462:28;;;;;;;;45246:263;46374:51;46414:10;46375:29;46391:13;46375;:29;:::i;46374:51::-;46325:100;;:26;:100;:::i;:::-;46276:149;;44789:3134;;;46634:13;46618;:29;46614:1309;;;47416:13;47432:89;47493:10;47433:29;47449:13;47433;:29;:::i;47432:89::-;47416:105;;47552:26;47543:5;:35;47539:87;;47602:5;;;;;;47539:87;47672:34;47701:5;47672:26;:34;:::i;:::-;47643:63;;46649:1072;46614:1309;;;47882:26;47875:33;;;;;;;;;;46614:1309;48097:7;:12;;;48068:26;:41;48064:121;;;48158:7;:12;;;48129:41;;48064:121;48270:3;;;;;42976:5322;;;42909:5389;;;;48416:21;48386:26;:51;48382:1248;;48645:298;48687:7;:29;;;48734:7;:31;;;48783:7;:28;;;48829:7;:26;;;:47;;;48902:26;48894:35;;;:::i;48645:298::-;48471:26;;48589:39;;;48453:490;;;;48529:42;;;;48453:490;;;;;;;;49105:26;;:40;;49167:42;;;48471:26;;48981:506;;49037:190;;49105:40;49037:46;:190::i;:::-;49245:26;;:39;;;;49308:38;;;;;49302:44;;150:4:73;49302:44:75;:::i;:::-;49364:26;;:42;;;;49424:49;;;;;48981:38;:506::i;:::-;48957:530;;49522:13;49505;:30;49501:119;;49579:26;49555:50;;49501:119;48439:1191;48382:1248;49640:28;;40422:9253;;;;:::o;22132:1838::-;22312:7;22587:267;22625:7;:29;;;22668:7;:31;;;22713:7;:28;;;22755:7;:26;;;:47;;;22824:19;22816:28;;;:::i;22587:267::-;22425:26;;22535:39;;;22411:443;;;;22479:42;;;22411:443;;;;;22948:26;;22425;;;;22909:75;;:25;:75::i;:::-;22864:120;;;;23340:7;23339:8;:62;;;;23373:7;:28;;;23351:18;:50;;23339:62;23335:101;;;23424:1;23417:8;;;;;;23335:101;23685:21;23751:7;:35;;;23709:7;:27;;;:77;;;;:::i;:::-;23685:101;;23843:120;23885:18;23921:7;:28;;;23843:13;:24;;:120;;;;;:::i;:::-;23815:148;;:13;:148;:::i;24613:10855::-;24794:7;24855:21;24921:7;:35;;;24879:7;:27;;;:77;;;;:::i;:::-;24855:101;;25033:7;:21;;;25058:1;25033:26;25029:293;;25223:35;;;;25162:28;;;;:149;;25280:13;25162:39;:149::i;:::-;25139:172;;;;;25029:293;25879:28;;;;25819:35;;;;25795:21;;25819:125;;:35;25921:13;25819:46;:125::i;:::-;25795:149;;26052:1;26028:7;:21;;;:25;26024:9407;;;26074:9;26069:5339;839:1;26089;:33;26069:5339;;;26478:309;26524:7;:29;;;26575:7;:31;;;26628:7;:28;;;26678:7;:26;;;:47;;;26755:13;26747:22;;;:::i;26478:309::-;26292:26;;26418:39;;;26270:517;;;;26354:42;;;26270:517;;;;;26871:26;;26292;;26828:87;;:21;:87::i;:::-;26805:110;;27032:183;27109:7;27142:12;27180:13;27032:51;:183::i;:::-;27007:273;;;27256:5;;;27007:273;27712:26;;:40;;27778:42;;;;27846:39;;;;27911:47;;;;27990:38;;;;;27584:21;;;;27623:570;;27712:40;;27778:42;;27846:39;;27911:47;27984:44;;150:4:73;27984:44:75;:::i;:::-;28054:26;;:42;;;;28122:49;;;;;27623:63;:570::i;:::-;27583:610;;;;28216:7;28211:60;;28247:5;;;;;28211:60;28288:18;28362:13;28336:7;:21;;;28328:47;28324:1308;;28493:212;28563:7;28596:31;28661:7;:21;;;28493:44;:212::i;:::-;28399:306;-1:-1:-1;28399:306:75;-1:-1:-1;28731:8:75;;;:29;;;150:4:73;28743:10:75;:17;;28731:29;28727:221;;;28924:1;28917:8;;;;;;;;;;;28727:221;28982:16;28988:10;150:4:73;28982:16:75;:::i;:::-;28969:29;;28324:1308;;;29234:116;29321:7;29234:61;:116::i;:::-;29137:213;;-1:-1:-1;29137:213:75;-1:-1:-1;29137:213:75;29372:200;;29548:1;29541:8;;;;;;;;;;;29372:200;29600:13;29593:20;;;;;;;;;;;28324:1308;30098:12;30211:117;30275:7;:27;;;30211:7;:28;;;:34;;:117;;;;:::i;:::-;30120:35;:12;30141:13;30120:20;:35::i;:::-;30113:237;;;;:::i;:::-;30098:252;;30380:1;30372:5;:9;30368:907;;;30561:55;30584:31;:10;30601:13;30584:16;:31::i;:::-;30569:5;;30561:22;:55::i;:::-;30521:95;;:13;:95;:::i;:::-;30481:135;;30368:907;;;30653:1;30645:5;:9;30641:634;;;30754:14;30771:102;30820:31;:10;30837:13;30820:16;:31::i;:::-;30779:6;30780:5;30779:6;:::i;30771:102::-;30754:119;;30908:13;30899:6;:22;30895:310;;;30965:22;30981:6;30965:13;:22;:::i;:::-;30949:38;;30895:310;;;31181:1;31174:8;;;;;;;;;;;;;30895:310;30656:567;30641:634;;;31251:5;;;;;;;30641:634;31372:3;;;;;26126:5282;;;;;26069:5339;;;;26024:9407;;;31496:9;31491:3930;839:1;31511;:33;31491:3930;;;31900:309;31946:7;:29;;;31997:7;:31;;;32050:7;:28;;;32100:7;:26;;;:47;;;32177:13;32169:22;;;:::i;31900:309::-;31714:26;;31840:39;;;31692:517;;;;31776:42;;;31692:517;;;;;32293:26;;31714;;32250:87;;:21;:87::i;:::-;32227:110;;32454:183;32531:7;32564:12;32602:13;32454:51;:183::i;:::-;32429:273;;;32678:5;;;32429:273;33027:18;33067:12;33100:213;33170:7;33203:31;33269:7;:21;;;33268:22;;;:::i;:::-;33100:44;:213::i;:::-;33005:308;;;;33336:7;33335:8;:29;;;;150:4:73;33347:10:75;:17;;33335:29;33331:205;;;33516:1;33509:8;;;;;;;;;;33331:205;33566:16;33572:10;150:4:73;33566:16:75;:::i;:::-;33553:29;;34049:12;34162:117;34226:7;:27;;;34162:7;:28;;;:34;;:117;;;;:::i;:::-;34071:35;:12;34092:13;34071:20;:35::i;:::-;34064:237;;;;:::i;:::-;34049:252;;34331:1;34323:5;:9;34319:969;;;34512:111;34584:13;34512:34;34520:5;34535:10;34512:22;:34::i;:111::-;34472:151;;:13;:151;:::i;:::-;34432:191;;34319:969;;;34660:1;34652:5;:9;34648:640;;;34761:14;34778:108;34872:13;34778:60;34827:10;34778:60;34787:5;34786:6;:::i;34778:108::-;34761:125;;34921:13;34912:6;:22;34908:310;;;34978:22;34994:6;34978:13;:22;:::i;:::-;34962:38;;34908:310;;;35194:1;35187:8;;;;;;;;;;;;34908:310;34663:573;34648:640;;;35264:5;;;;;;34648:640;35385:3;;;;;31548:3873;;;;31491:3930;;;;35448:13;24613:10855;-1:-1:-1;;;;24613:10855:75:o;2119:3268::-;2390:21;2425:22;2461:20;2616:19;2639:1;2616:24;2612:111;;-1:-1:-1;2664:14:75;;-1:-1:-1;2680:16:75;;-1:-1:-1;2698:13:75;2656:56;;2612:111;2892:21;2916:44;2941:19;2923:14;2916:44;:::i;:::-;2892:68;;2998:21;2974:14;:46;2970:118;;;3043:34;;-1:-1:-1;;;3043:34:75;;;;;;;;;;;2970:118;3121:14;3097:39;;3711:1;3691:16;:21;3687:661;;3868:134;3876:13;3931:16;3970:14;3868:33;:134::i;:::-;3826:190;;3687:661;;;4188:135;4251:17;4252:16;4251:17;:::i;:::-;4196:13;;4291:14;4188:33;:135::i;:::-;4163:174;;;:::i;:::-;4145:192;;3687:661;5064:316;5197:13;5228:138;5296:14;5332:16;5228:46;:138::i;:::-;5064:91;5124:13;5139:15;5064:59;:91::i;:::-;:115;:316;:115;:316::i;:::-;5049:331;;2496:2891;2119:3268;;;;;;;;;;:::o;4785:450:64:-;4884:21;4917:24;150:4:73;4944:19:64;:17;:19::i;:::-;:25;;;;:::i;:::-;4917:52;;5011:16;4995:13;:32;:95;;5089:1;4995:95;;;5042:32;5058:16;5042:13;:32;:::i;:::-;4979:111;-1:-1:-1;5182:46:64;5204:23;150:4:73;5204:17:64;:23;:::i;:::-;5182:13;;:21;:46::i;6998:1166:75:-;7105:7;7114:4;7491:19;7535:20;7557:12;7573:65;7617:7;7573:26;:65::i;:::-;7534:104;;;;7657:7;7652:64;;-1:-1:-1;7692:1:75;;;;-1:-1:-1;6998:1166:75;-1:-1:-1;;;;6998:1166:75:o;7652:64::-;7896:7;:28;;;7840:30;7862:7;7840:21;:30::i;:::-;7767:21;;7760:61;;7808:13;;7760:61;:::i;:::-;:110;;;;:::i;:::-;:165;;;;:::i;:::-;7729:196;;7520:416;;8066:1;8051:12;:16;8047:64;;;-1:-1:-1;8091:1:75;;;;-1:-1:-1;6998:1166:75;-1:-1:-1;;6998:1166:75:o;8047:64::-;8137:12;8152:4;;-1:-1:-1;6998:1166:75;-1:-1:-1;;6998:1166:75:o;17543:343:77:-;17682:7;17871:8;:1;17877;17871:5;:8::i;:::-;17833:35;17844:19;17861:1;17844:12;:2;17853;17844:8;:12::i;:19::-;17833:1;;17865:2;17833:10;:35::i;:::-;:46;;;;:::i;3180:392:118:-;3279:12;3331:5;3307:21;:29;3303:108;;;3359:41;;-1:-1:-1;;;3359:41:118;;3394:4;3359:41;;;8168:51:182;8141:18;;3359:41:118;8022:203:182;3303:108:118;3421:12;3435:23;3462:6;-1:-1:-1;;;;;3462:11:118;3481:5;3488:4;3462:31;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3420:73;;;;3510:55;3537:6;3545:7;3554:10;3510:26;:55::i;13742:861:77:-;13901:7;14116:9;14128:20;14132:2;14136:1;14139;14142;14145:2;14128:3;:20::i;:::-;14116:32;-1:-1:-1;14158:16:77;14177:28;150:4:73;14185:13:77;:1;14195:2;14185:9;:13::i;:::-;:19;;;;:::i;:::-;14177:1;;:7;:28::i;:::-;14158:47;;150:4:73;14219:8:77;:15;14215:293;;14330:26;14343:12;150:4:73;14353:1:77;14343:9;:12::i;14330:26::-;14319:37;;14215:293;;;14469:28;14482:14;150:4:73;14494:1:77;14482:11;:14::i;14469:28::-;14458:39;;14215:293;14584:12;14588:8;14584:1;:12;:::i;50953:2775:75:-;51785:26;;:49;;;;51713:42;;;;;51166:7;;;;51347:525;;150:4:73;;51713:139:75;;:50;:139::i;:::-;:145;;;;:::i;:::-;51445:28;;;;51497:26;;:38;;;51347:329;;51396:31;;51491:44;;150:4:73;51491:44:75;:::i;:::-;51553:26;;:42;;;;51613:49;;;;;51347:31;:329::i;:::-;:348;;:525::i;:::-;51333:539;;150:4:73;51886:3:75;:10;51882:428;;52035:26;;:38;;;51994:94;;52019:55;;52029:44;;150:4:73;52029:44:75;:::i;:::-;150:4:73;;52019:9:75;:55::i;51994:94::-;51988:100;;51882:428;;;52246:26;;:38;;;52203:96;;52228:57;;52240:44;;150:4:73;52240:44:75;:::i;:::-;150:4:73;;52228:11:75;:57::i;52203:96::-;52197:102;;51882:428;52361:20;52367:14;52361:3;:20;:::i;:::-;52355:26;;52571:1;52536:7;:31;;;:36;52532:931;;52594:409;52696:293;52787:131;52863:7;:29;;;52795:7;:31;;;52787:46;;:131;;;;:::i;:::-;52757:161;;150:4:73;52757:161:75;:::i;:::-;52696:28;;;;;52940:31;52696:39;:293::i;:::-;52594:3;;:9;:409::i;:::-;52588:415;;52532:931;;;53040:412;53142:296;53233:134;53312:7;:29;;;53242:7;:31;;;53241:32;;;:::i;53233:134::-;53203:164;;150:4:73;53203:164:75;:::i;53040:412::-;53034:418;;52532:931;53606:7;:29;;;53599:3;:36;53595:75;;53658:1;53651:8;;;;;53595:75;53718:3;53686:7;:29;;;:35;;;;:::i;66411:4306::-;66891:26;;:40;;66949:42;;;;;66587:7;;;;;;66814:191;;:59;:191::i;:::-;67498:26;;:38;;;;67429:39;;;;;66781:224;;-1:-1:-1;67015:18:75;;67316:274;;67370:206;;67429:129;;:43;:129::i;67370:206::-;67316:28;;;;;:36;:274::i;:::-;67252:26;;:38;;;;67100:83;;;;;67036:265;;67100:191;;:130;;67207:22;67100:106;:130::i;:191::-;67036:26;;:42;;;;:50;:265::i;:::-;:554;;;;:::i;:::-;67015:575;;67756:9;67768:296;67802:22;67838:7;:26;;;:39;;;67897:7;:26;;;:38;;;150:4:73;67891:44:75;;;;:::i;:::-;67949:26;;:42;;;;68005:49;;;;;67768:20;:296::i;:::-;67756:308;;150:4:73;68078:1:75;:8;68074:718;;68195:233;68231:183;68258:138;68336:7;:26;;;:38;;;150:4:73;68330:44:75;;;;:::i;:::-;68258:26;;:38;;;;:46;:138::i;:::-;68231:1;;:5;:183::i;:::-;68195:10;;:18;:233::i;:::-;68182:246;;68074:718;;;68550:231;68586:181;68613:136;68689:7;:26;;;:38;;;150:4:73;68683:44:75;;;;:::i;:::-;68613:26;;:38;;;;:44;:136::i;68550:231::-;68537:244;;68074:718;68976:568;69008:526;69461:55;69477:7;:26;;;:38;;;150:4:73;69471:44:75;;;;:::i;69461:55::-;69169:26;;:49;;;;69103:42;;;;;150:4:73;;69103:129:75;;:42;:48;:129::i;:::-;:135;;;;:::i;68976:568::-;68963:581;;69670:13;69686:89;69734:31;69686:7;:28;;;:34;;:89;;;;:::i;:::-;69670:105;;69847:5;69833:10;:19;69829:274;;69881:18;69889:10;69881:5;:18;:::i;:::-;69868:31;;69829:274;;;70083:1;70086:5;70075:17;;;;;;;;;;69829:274;70273:1;70238:7;:31;;;:36;70234:441;;70303:159;70451:10;70326:117;70396:7;:29;;;70334:7;:31;;;70326:48;;:117;;;;:::i;:::-;70304:139;;150:4:73;70304:139:75;:::i;70303:159::-;70290:172;;70234:441;;;70506:158;70653:10;70529:116;70598:7;:29;;;70538:7;:31;;;70537:32;;;:::i;70529:116::-;70507:138;;150:4:73;70507:138:75;:::i;70506:158::-;70493:171;;70234:441;-1:-1:-1;70693:10:75;;-1:-1:-1;70705:4:75;;-1:-1:-1;;;66411:4306:75;;;;;;:::o;38963:769::-;39167:4;39183:26;39212:74;39262:14;39212:7;:28;;;:36;;:74;;;;:::i;:::-;39183:103;;39296:25;39324:72;39359:7;:27;;;39324:13;:21;;:72;;;;:::i;:::-;39296:100;;39430:18;39410:17;:38;39406:81;;;39471:5;39464:12;;;;;;39406:81;39536:18;39515:17;:39;;:210;;;;-1:-1:-1;39663:62:75;39690:34;1005:3;150:4:73;39690:34:75;:::i;39663:62::-;-1:-1:-1;39570:155:75;;38963:769;-1:-1:-1;;;;;38963:769:75:o;15242:1794:77:-;15447:7;15456:4;15753:1;15746:4;:8;15742:67;;;15792:5;15793:4;15792:5;:::i;:::-;15777:21;;:4;:21;:::i;:::-;15770:28;;15742:67;16304:10;16317:55;16364:1;16367:4;16317:46;:55::i;:::-;16304:68;;16382:9;16394:22;16400:2;16404:1;16407;16410;16413:2;16394:5;:22::i;:::-;16382:34;-1:-1:-1;16426:16:77;16449:37;16460:21;16479:1;16460:14;:2;16469:4;16460:8;:14::i;:21::-;16449:1;;16483:2;16449:10;:37::i;:::-;16445:41;;:1;:41;:::i;:::-;16426:60;;150:4:73;16500:8:77;:15;16496:295;;16614:28;16627:14;150:4:73;16639:1:77;16627:11;:14::i;16614:28::-;16603:39;;16496:295;;;16754:26;16767:12;150:4:73;16777:1:77;16767:9;:12::i;16754:26::-;16743:37;;16496:295;16948:1;16937:8;:12;16933:60;;;16973:1;16976:5;16965:17;;;;;;;;;16933:60;17010:12;17021:1;17010:8;:12;:::i;:::-;17024:4;17002:27;;;;;;;15242:1794;;;;;;;;;;;:::o;54767:4623:75:-;55363:26;;:40;;55421:42;;;;;54979:7;;;;;;55286:191;;:59;:191::i;:::-;55253:224;;55487:18;56138:290;56192:222;56251:145;56336:7;:26;;;:38;;;56294:11;56252:7;:26;;;:39;;;:53;;;;:::i;56251:145::-;56192:31;;:37;:222::i;:::-;56138:28;;;;;:36;:290::i;:::-;55970:26;;:38;;;;55901:39;;;;;55788:274;;55840:208;;55901:129;;:43;:129::i;:::-;55840:31;;:39;:208::i;:::-;55788:28;;;;;:34;:274::i;:::-;55724:26;;:38;;;;55570:83;;;;;55508:265;;55570:193;;:132;;55679:22;55570:108;:132::i;:193::-;55508:26;;:42;;;;:48;:265::i;:::-;:554;;;;:::i;:::-;:920;;;;:::i;:::-;55487:941;;56658:9;56670:294;56702:22;56738:7;:26;;;:39;;;56797:7;:26;;;:38;;;150:4:73;56791:44:75;;;;:::i;:::-;56849:26;;:42;;;;56905:49;;;;;56670:18;:294::i;:::-;56658:306;;56974:13;56990:118;57069:7;:26;;;:38;;;150:4:73;57063:44:75;;;;:::i;:::-;56991:26;;:39;;;:53;;57033:11;;56991:53;:::i;56990:118::-;56974:134;;57126:5;57122:1;:9;57118:201;;;57299:1;57302:5;57291:17;;;;;;;;;;57118:201;57336:147;57408:9;57412:5;57408:1;:9;:::i;:::-;57431:26;;:42;;;;57336:49;;;;;;:147;:58;:147::i;:::-;57328:155;;150:4:73;57497:5:75;:12;57493:584;;57708:26;;:38;;;57609:169;;57636:128;;57702:44;;150:4:73;57702:44:75;:::i;:::-;57636:26;;:38;;;;:44;:128::i;57609:169::-;57601:177;;57493:584;;;57996:26;;:38;;;57895:171;;57922:130;;57990:44;;150:4:73;57990:44:75;:::i;:::-;57922:26;;:38;;;;:46;:130::i;57895:171::-;57887:179;;57493:584;58229:26;;:42;;;58177:104;;:10;;58210:5;;58177:19;:104::i;:::-;58164:117;;58342:10;150:4:73;58335:17:75;58331:357;;58381:16;58387:10;150:4:73;58381:16:75;:::i;:::-;58368:29;;58331:357;;;58669:1;58672:4;58661:16;;;;;;;;;;58331:357;58862:1;58827:7;:31;;;:36;58823:525;;58892:199;58954:123;59026:7;:29;;;58962:7;:31;;;58954:46;;:123;;;;:::i;:::-;58928:149;;150:4:73;58928:149:75;:::i;:::-;58892:10;;:18;:199::i;:::-;58879:212;;58823:525;;;59135:202;59197:126;59272:7;:29;;;59206:7;:31;;;59205:32;;;:::i;59197:126::-;59171:152;;150:4:73;59171:152:75;:::i;59135:202::-;59122:215;;58823:525;-1:-1:-1;59366:10:75;;-1:-1:-1;59378:4:75;;-1:-1:-1;;;54767:4623:75;;;;;;;:::o;36150:2095::-;36301:7;36310:4;36592:1;36557:7;:31;;;:36;36553:84;;-1:-1:-1;36617:1:75;;;;-1:-1:-1;36150:2095:75;-1:-1:-1;36150:2095:75:o;36553:84::-;36759:42;;;;36716:26;;:85;36856:44;;;;36811:26;;:42;;:89;36952:28;;;;36910:26;;:39;;:70;37034:26;;36716;;37012:49;;:21;:49::i;:::-;36990:71;;37204:11;37245:1;37229:12;:17;37225:634;;37343:27;;;;37446:35;;;;37526:12;;37284:215;;37392:89;;37343:27;37392:89;:::i;:::-;37284:28;;;;;:215;:37;:215::i;:::-;:255;;;;:::i;:::-;37262:277;;37225:634;;;37834:13;37835:12;37834:13;:::i;:::-;37651:27;;;;37754:35;;;;37592:215;;37651:27;37700:89;;37651:27;37700:89;:::i;37592:215::-;:256;;;;:::i;:::-;37570:278;;37225:634;38099:31;;;;38022:29;;;;:119;;38074:3;;38022:38;:119::i;:::-;38016:125;;38228:3;38196:7;:29;;;:35;;;;:::i;:::-;38188:50;38233:4;;-1:-1:-1;36150:2095:75;-1:-1:-1;;;;36150:2095:75:o;60429:4993::-;61025:26;;:40;;61083:42;;;;;60641:7;;;;;;60948:191;;:59;:191::i;:::-;60915:224;;61149:18;61803:290;61857:222;61916:145;62001:7;:26;;;:38;;;61959:11;61917:7;:26;;;:39;;;:53;;;;:::i;61803:290::-;61632:26;;:38;;;;61563:39;;;;;61450:274;;61502:208;;61563:129;;:43;:129::i;61450:274::-;61386:26;;:38;;;;61232:83;;;;;61170:265;;61232:193;;:132;;61341:22;61232:108;:132::i;61170:265::-;:554;;;;:::i;:::-;:923;;;;:::i;:::-;61149:944;;62323:9;62335:294;62367:22;62403:7;:26;;;:39;;;62462:7;:26;;;:38;;;150:4:73;62456:44:75;;;;:::i;62335:294::-;62323:306;;62639:13;62655:118;62734:7;:26;;;:38;;;150:4:73;62728:44:75;;;;:::i;:::-;62656:26;;:39;;;:53;;62698:11;;62656:53;:::i;62655:118::-;62639:134;;62791:5;62787:1;:9;62783:201;;;62964:1;62967:5;62956:17;;;;;;;;;;62783:201;63001:147;63073:9;63077:5;63073:1;:9;:::i;63001:147::-;62993:155;-1:-1:-1;63371:26:75;;:38;;;63272:169;;63299:128;;63365:44;;150:4:73;63365:44:75;:::i;8492:7050::-;8600:6;8608:4;9410:23;9569:106;9624:7;:33;;;9569:7;:25;;;:33;;:106;;;;:::i;:::-;9487:32;;;;9456:24;;;;:64;;:30;:64::i;:::-;9436:253;;;;:::i;:::-;9410:279;;9699:30;9732:153;9809:7;:21;;;9848:7;:23;;;9732:59;:153::i;:::-;9699:186;;10135:1;10116:16;:20;10112:5397;;;10152:25;10188:16;10152:53;;10394:21;10417:12;10433:401;10514:7;:21;;;10557:7;:23;;;10602:7;:20;;;10644:7;:28;;;10700:7;:19;;;150:4:73;10694:25:75;;;;:::i;:::-;10741:7;:23;;;10786:7;:30;;;10433:59;:401::i;:::-;10393:441;;;;10853:7;10848:64;;-1:-1:-1;10888:1:75;;;;-1:-1:-1;8492:7050:75;-1:-1:-1;;;;;;8492:7050:75:o;10848:64::-;11089:17;11072:13;:34;11068:2044;;11126:21;11150:385;11246:22;11294:7;:20;;;11340:17;11389:7;:19;;;150:4:73;11383:25:75;;;;:::i;:::-;11434:7;:23;;;11483:7;:30;;;11150:70;:385::i;:::-;11126:409;-1:-1:-1;11561:22:75;11126:409;11561:22;:::i;:::-;11553:37;11585:4;;-1:-1:-1;8492:7050:75;-1:-1:-1;;;;;;;;8492:7050:75:o;11068:2044::-;12275:1;12248:7;:23;;;:28;12244:854;;12427:28;;;;12370:85;;:22;:85;:::i;:::-;12333:148;;;:::i;:::-;12300:233;12507:4;;-1:-1:-1;8492:7050:75;-1:-1:-1;;;;;;;8492:7050:75:o;12244:854::-;12973:28;;;;12949:21;;:52;;12973:28;12949:52;:::i;10112:5397::-;13237:1;13218:16;:20;13214:2295;;;13254:25;13290:17;13291:16;13290:17;:::i;:::-;13254:54;;13425:21;13449:262;13505:22;13545:7;:20;;;13589:7;:19;;;150:4:73;13583:25:75;;;;:::i;:::-;13626:7;:23;;;13667:7;:30;;;13449:38;:262::i;:::-;13425:286;;13889:17;13872:13;:34;13868:1631;;13926:21;13950:383;14044:22;14092:7;:20;;;14138:17;14187:7;:19;;;150:4:73;14181:25:75;;;;:::i;:::-;14232:7;:23;;;14281:7;:30;;;13950:68;:383::i;13868:1631::-;14662:23;14688:331;14773:22;14821:7;:20;;;14873:7;:19;;;150:4:73;14867:25:75;;;;:::i;:::-;14918:7;:23;;;14967:7;:30;;;14688:59;:331::i;:::-;14662:357;;15288:130;15365:7;:23;;;15309:13;15289:17;:33;;;;:::i;15288:130::-;15242:176;;:15;:176;:::i;13214:2295::-;-1:-1:-1;15527:1:75;;15530:4;;-1:-1:-1;8492:7050:75;-1:-1:-1;;;8492:7050:75:o;15789:1157::-;15892:6;16769:156;16830:7;:32;;;150:4:73;16824:38:75;;;;:::i;:::-;16884:23;;;;16769:24;;;;;:156;:33;:156::i;:::-;16556:160;16620:7;:33;;;150:4:73;16614:39:75;;;;:::i;:::-;16675:23;;;;16556:25;;;;;:160;:36;:160::i;:::-;16532:407;;;;:::i;4625:582:118:-;4769:12;4798:7;4793:408;;4821:19;4829:10;4821:7;:19::i;:::-;4793:408;;;5045:17;;:22;:49;;;;-1:-1:-1;;;;;;5071:18:118;;;:23;5045:49;5041:119;;;5121:24;;-1:-1:-1;;;5121:24:118;;-1:-1:-1;;;;;8186:32:182;;5121:24:118;;;8168:51:182;8141:18;;5121:24:118;8022:203:182;5041:119:118;-1:-1:-1;5180:10:118;5173:17;;18399:352:77;18540:7;18736:8;:1;18742;18736:5;:8::i;:::-;18694:39;18707:21;18726:1;18707:14;:2;18718;18707:10;:14::i;:21::-;18694:1;;18730:2;18694:12;:39::i;9013:583::-;9203:14;9229:12;9271:141;9323:2;9339:1;9354:2;9370:1;9385;9400:2;9271:38;:141::i;:::-;9251:161;;-1:-1:-1;9251:161:77;-1:-1:-1;9251:161:77;9422:168;;9450:129;9506:59;9450:38;:129::i;4244:1797::-;4432:7;4589:9;4601:20;4605:2;4609:1;4612;4615;4618:2;4601:3;:20::i;:::-;4589:32;;4695:2;4691:1;:6;4687:166;;;4713:129;4769:59;4713:38;:129::i;:::-;4895:15;4908:1;4896:6;4900:2;4896:1;:6;:::i;4895:15::-;4891:19;;4983:1;4979;:5;4975:165;;;5000:129;5056:59;5000:38;:129::i;:::-;5295:10;5308:23;5325:2;5329:1;5309:5;5313:1;5309;:5;:::i;:::-;5308:16;:23;:16;:23::i;:::-;5295:36;;150:4:73;5345:2:77;:9;5341:261;;5443:20;5450:12;150:4:73;5460:1:77;5450:9;:12::i;5443:20::-;5438:25;;5341:261;;;5569:22;5576:14;150:4:73;5588:1:77;5576:11;:14::i;5569:22::-;5564:27;;5341:261;5684:12;:2;5693;5684:8;:12::i;:::-;5679:17;;5772:2;5767;:7;5763:167;;;5790:129;5846:59;5790:38;:129::i;:::-;6027:7;6032:2;6027;:7;:::i;12036:1218::-;12195:7;12710:9;12722:22;12728:2;12732:1;12735;12738;12741:2;12722:5;:22::i;:::-;12710:34;-1:-1:-1;12754:17:77;12774:28;150:4:73;12784:11:77;:1;12792:2;12784:7;:11::i;:::-;:17;;;;:::i;12774:28::-;12754:48;;150:4:73;12816:9:77;:16;12812:300;;12932:29;12946:14;150:4:73;12958:1:77;12946:11;:14::i;12932:29::-;12920:41;;12812:300;;;13074:27;13088:12;150:4:73;13098:1:77;13088:9;:12::i;13074:27::-;13062:39;;12812:300;13133:21;:9;13151:2;13133:17;:21::i;:::-;13121:33;-1:-1:-1;13233:14:77;13245:2;13121:33;13233:14;:::i;5743:516:118:-;5874:17;;:21;5870:383;;6102:10;6096:17;6158:15;6145:10;6141:2;6137:19;6130:44;5870:383;6225:17;;-1:-1:-1;;;6225:17:118;;;;;;;;;;;5870:383;5743:516;:::o;10285:1320:77:-;10479:14;10495:12;10657:9;10669:20;10673:2;10677:1;10680;10683;10686:2;10669:3;:20::i;:::-;10657:32;-1:-1:-1;10732:15:77;10745:1;10733:6;10737:2;10733:1;:6;:::i;10732:15::-;10728:19;;10829:1;10825;:5;10821:53;;;10854:1;10857:5;10846:17;;;;;;;10821:53;11029:10;11042:23;11059:2;11063:1;11043:5;11047:1;11043;:5;:::i;11042:23::-;11029:36;;150:4:73;11079:2:77;:9;11075:263;;11178:20;11185:12;150:4:73;11195:1:77;11185:9;:12::i;11178:20::-;11173:25;;11075:263;;;11305:22;11312:14;150:4:73;11324:1:77;11312:11;:14::i;11305:22::-;11300:27;;11075:263;11420:12;:2;11429;11420:8;:12::i;:::-;11415:17;;11530:2;11525;:7;11521:54;;;11557:7;11562:2;11557;:7;:::i;:::-;11548:16;;11521:54;11594:4;11584:14;;10509:1096;;10285:1320;;;;;;;;;;:::o;-1:-1:-1:-;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:155:182:-;74:5;119:2;110:6;105:3;101:16;97:25;94:45;;;135:1;132;125:12;174:492;278:6;286;294;347:2;335:9;326:7;322:23;318:32;315:52;;;363:1;360;353:12;315:52;399:9;386:23;376:33;;456:2;445:9;441:18;428:32;418:42;;511:2;500:9;496:18;483:32;538:18;530:6;527:30;524:50;;;570:1;567;560:12;524:50;593:67;652:7;643:6;632:9;628:22;593:67;:::i;:::-;583:77;;;174:492;;;;;:::o;853:561::-;966:6;974;982;990;1043:3;1031:9;1022:7;1018:23;1014:33;1011:53;;;1060:1;1057;1050:12;1011:53;1096:9;1083:23;1073:33;;1153:2;1142:9;1138:18;1125:32;1115:42;;1204:2;1193:9;1189:18;1176:32;1166:42;;1259:2;1248:9;1244:18;1231:32;1286:18;1278:6;1275:30;1272:50;;;1318:1;1315;1308:12;1272:50;1341:67;1400:7;1391:6;1380:9;1376:22;1341:67;:::i;:::-;1331:77;;;853:561;;;;;;;:::o;1672:127::-;1733:10;1728:3;1724:20;1721:1;1714:31;1764:4;1761:1;1754:15;1788:4;1785:1;1778:15;1804:168;1877:9;;;1908;;1925:15;;;1919:22;;1905:37;1895:71;;1946:18;;:::i;1977:128::-;2044:9;;;2065:11;;;2062:37;;;2079:18;;:::i;2110:286::-;2169:6;2222:2;2210:9;2201:7;2197:23;2193:32;2190:52;;;2238:1;2235;2228:12;2190:52;2264:23;;-1:-1:-1;;;;;2316:31:182;;2306:42;;2296:70;;2362:1;2359;2352:12;2401:118;2487:5;2480:13;2473:21;2466:5;2463:32;2453:60;;2509:1;2506;2499:12;2524:241;2580:6;2633:2;2621:9;2612:7;2608:23;2604:32;2601:52;;;2649:1;2646;2639:12;2601:52;2688:9;2675:23;2707:28;2729:5;2707:28;:::i;3248:125::-;3313:9;;;3334:10;;;3331:36;;;3347:18;;:::i;3657:184::-;3727:6;3780:2;3768:9;3759:7;3755:23;3751:32;3748:52;;;3796:1;3793;3786:12;3748:52;-1:-1:-1;3819:16:182;;3657:184;-1:-1:-1;3657:184:182:o;3846:127::-;3907:10;3902:3;3898:20;3895:1;3888:31;3938:4;3935:1;3928:15;3962:4;3959:1;3952:15;3978:112;4010:1;4036;4026:35;;4041:18;;:::i;:::-;-1:-1:-1;4075:9:182;;3978:112::o;4095:193::-;-1:-1:-1;;;;;4213:10:182;;;4225;;;4209:27;;4248:11;;;4245:37;;;4262:18;;:::i;4293:197::-;-1:-1:-1;;;;;4415:10:182;;;4427;;;4411:27;;4450:11;;;4447:37;;;4464:18;;:::i;4495:200::-;4561:9;;;4534:4;4589:9;;4617:10;;4629:12;;;4613:29;4652:12;;;4644:21;;4610:56;4607:82;;;4669:18;;:::i;5096:200::-;-1:-1:-1;;;;;5232:10:182;;;5220;;;5216:27;;5255:12;;;5252:38;;;5270:18;;:::i;5301:216::-;5365:9;;;5393:11;;;5340:3;5423:9;;5451:10;;5447:19;;5476:10;;5468:19;;5444:44;5441:70;;;5491:18;;:::i;6468:193::-;6507:1;6533;6523:35;;6538:18;;:::i;:::-;-1:-1:-1;;;6574:18:182;;-1:-1:-1;;6594:13:182;;6570:38;6567:64;;;6611:18;;:::i;:::-;-1:-1:-1;6645:10:182;;6468:193::o;6666:245::-;6764:2;6734:17;;;6753;;;;6730:41;-1:-1:-1;;;;;6786:44:182;;-1:-1:-1;;;;;;6832:49:182;;6783:99;6780:125;;;6885:18;;:::i;6916:213::-;6951:3;6999:5;6995:2;6984:21;-1:-1:-1;;;;;7029:39:182;7020:7;7017:52;7014:78;;7072:18;;:::i;:::-;7112:1;7108:15;;6916:213;-1:-1:-1;;6916:213:182:o;7266:136::-;7301:3;-1:-1:-1;;;7322:22:182;;7319:48;;7347:18;;:::i;:::-;-1:-1:-1;7387:1:182;7383:13;;7266:136::o;7407:360::-;7571:2;7556:18;;7604:1;7593:13;;7583:144;;7649:10;7644:3;7640:20;7637:1;7630:31;7684:4;7681:1;7674:15;7712:4;7709:1;7702:15;7583:144;7736:25;;;7407:360;:::o;7772:245::-;7839:6;7892:2;7880:9;7871:7;7867:23;7863:32;7860:52;;;7908:1;7905;7898:12;7860:52;7940:9;7934:16;7959:28;7981:5;7959:28;:::i;8230:412::-;8359:3;8397:6;8391:13;8422:1;8432:129;8446:6;8443:1;8440:13;8432:129;;;8544:4;8528:14;;;8524:25;;8518:32;8505:11;;;8498:53;8461:12;8432:129;;;-1:-1:-1;8616:1:182;8580:16;;8605:13;;;-1:-1:-1;8580:16:182;8230:412;-1:-1:-1;8230:412:182:o",
        "linkReferences": {},
        "immutableReferences": {
            "13293": [
                {
                    "start": 1481,
                    "length": 32
                },
                {
                    "start": 1578,
                    "length": 32
                }
            ],
            "13296": [
                {
                    "start": 2218,
                    "length": 32
                }
            ],
            "13299": [
                {
                    "start": 475,
                    "length": 32
                },
                {
                    "start": 1110,
                    "length": 32
                },
                {
                    "start": 2387,
                    "length": 32
                },
                {
                    "start": 12818,
                    "length": 32
                }
            ],
            "13302": [
                {
                    "start": 508,
                    "length": 32
                },
                {
                    "start": 3295,
                    "length": 32
                },
                {
                    "start": 3434,
                    "length": 32
                },
                {
                    "start": 7290,
                    "length": 32
                },
                {
                    "start": 10117,
                    "length": 32
                }
            ],
            "13305": [
                {
                    "start": 3483,
                    "length": 32
                },
                {
                    "start": 7387,
                    "length": 32
                }
            ],
            "13308": [
                {
                    "start": 2571,
                    "length": 32
                },
                {
                    "start": 3516,
                    "length": 32
                },
                {
                    "start": 5096,
                    "length": 32
                }
            ],
            "13311": [
                {
                    "start": 5140,
                    "length": 32
                },
                {
                    "start": 7455,
                    "length": 32
                }
            ],
            "13314": [
                {
                    "start": 4846,
                    "length": 32
                }
            ],
            "13317": [
                {
                    "start": 441,
                    "length": 32
                },
                {
                    "start": 3329,
                    "length": 32
                },
                {
                    "start": 3401,
                    "length": 32
                },
                {
                    "start": 7257,
                    "length": 32
                },
                {
                    "start": 10041,
                    "length": 32
                }
            ],
            "13320": [
                {
                    "start": 253,
                    "length": 32
                },
                {
                    "start": 328,
                    "length": 32
                },
                {
                    "start": 586,
                    "length": 32
                },
                {
                    "start": 5799,
                    "length": 32
                },
                {
                    "start": 5900,
                    "length": 32
                },
                {
                    "start": 7769,
                    "length": 32
                },
                {
                    "start": 9229,
                    "length": 32
                },
                {
                    "start": 9289,
                    "length": 32
                },
                {
                    "start": 9773,
                    "length": 32
                },
                {
                    "start": 10079,
                    "length": 32
                }
            ],
            "13323": [
                {
                    "start": 904,
                    "length": 32
                }
            ],
            "5478": [
                {
                    "start": 1526,
                    "length": 32
                },
                {
                    "start": 1645,
                    "length": 32
                },
                {
                    "start": 1785,
                    "length": 32
                },
                {
                    "start": 4399,
                    "length": 32
                }
            ]
        }
    },
    "methodIdentifiers": {
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"contract IERC4626\",\"name\":\"__vault\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"AddressInsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BelowMinimumContribution\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedInnerCall\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"enum IHyperdrive.InsufficientLiquidityReason\",\"name\":\"reason\",\"type\":\"uint8\"}],\"name\":\"InsufficientLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumSharePrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativePresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OutputLimit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PoolAlreadyInitialized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PoolIsPaused\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint112\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_baseAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minVaultSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondProceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"AddressInsufficientBalance(address)\":[{\"details\":\"The ETH balance of the account is not enough to perform the operation.\"}],\"FailedInnerCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"__vault\":\"The ERC4626 compatible vault.\",\"_config\":\"The configuration of the Hyperdrive pool.\"}},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_apr\":\"The target APR.\",\"_contribution\":\"The amount of base to supply.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"lpShares\":\"The initial number of LP shares created.\"}},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_baseAmount\":\"The amount of base to use when trading.\",\"_minOutput\":\"The minium number of bonds to receive.\",\"_minVaultSharePrice\":\"The minium share price at which to open the long.        This allows traders to protect themselves from opening a long in        a checkpoint where negative interest has accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"bondProceeds\":\"The amount of bonds the user received.\",\"maturityTime\":\"The maturity time of the bonds.\"}}},\"title\":\"ERC4626Target3\",\"version\":1},\"userdoc\":{\"errors\":{\"BelowMinimumContribution()\":[{\"notice\":\"Thrown when the initializer doesn't provide sufficient liquidity         to cover the minimum share reserves and the LP shares that are         burned on initialization.\"}],\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"InsufficientLiquidity(uint8)\":[{\"notice\":\"Thrown when the pool doesn't have sufficient liquidity to         complete the trade.\"}],\"InvalidShareReserves()\":[{\"notice\":\"Thrown when update liquidity brings the share reserves below         the minimum share reserves.\"}],\"InvalidTimestamp()\":[{\"notice\":\"Thrown when the timestamp used to construct an asset ID exceeds         the uint248 scale.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"MinimumSharePrice()\":[{\"notice\":\"Thrown when vault share price is smaller than the minimum share         price. This protects traders from unknowingly opening a long or         short after negative interest has accrued.\"}],\"MinimumTransactionAmount()\":[{\"notice\":\"Thrown when the input or output amount of a trade is smaller         than the minimum transaction amount. This protects traders and         LPs from losses of precision that can occur at small scales.\"}],\"NegativePresentValue()\":[{\"notice\":\"Thrown when the present value is negative. Whatever proceeded         a negative present value should be reverted.\"}],\"NotPayable()\":[{\"notice\":\"Thrown when ether is sent to an instance that doesn't accept         ether as a deposit asset.\"}],\"OutputLimit()\":[{\"notice\":\"Thrown when a slippage guard is violated.\"}],\"PoolAlreadyInitialized()\":[{\"notice\":\"Thrown when the pool is already initialized and a trader calls         `initialize`. This prevents the pool from being reinitialized         after it has been initialized.\"}],\"PoolIsPaused()\":[{\"notice\":\"Thrown when the pool is paused and a trader tries to add         liquidity, open a long, or open a short. Traders can still         close their existing positions while the pool is paused.\"}],\"UnsafeCastToInt128()\":[{\"notice\":\"Thrown when casting a value to a int128 that is outside of the         int128 scale.\"}],\"UnsafeCastToUint112()\":[{\"notice\":\"Thrown when casting a value to a uint112 that is outside of the         uint128 scale.\"}],\"UnsafeCastToUint128()\":[{\"notice\":\"Thrown when casting a value to a uint128 that is outside of the         uint128 scale.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Initializes the target3 contract.\"},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows the first LP to initialize the market with a target APR.\"},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a long position.\"}},\"notice\":\"ERC4626Hyperdrive's target3 logic contract. This contract contains         several stateful functions that couldn't fit into the Hyperdrive         contract.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/instances/erc4626/ERC4626Target3.sol\":\"ERC4626Target3\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/HyperdriveTarget3.sol\":{\"keccak256\":\"0x749c0fe26a04df4e52f4dc0372e9108a249d3c52d511f95e2001504552ed1d75\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c50e131b6b775d34f0c63e46e23af0ec877d1881f2f62e54fd7e839737fcbe45\",\"dweb:/ipfs/QmPT5r3JK6t44WH66HKGfmRZqTTXToTHWVq1QsxAhdGk3m\"]},\"contracts/src/instances/erc4626/ERC4626Base.sol\":{\"keccak256\":\"0xcd961bed2634599e8060353f5219cd4cebff4ce3f29c3131cf69543cb280ac18\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d36f480b1e18086ff23ffead15ebbb42eb6bba82ab8f0357e4abcd14850a2a79\",\"dweb:/ipfs/QmNehYBaGMciT2ZepWZ88yq8GftqdW437RRt6587Hcs1qs\"]},\"contracts/src/instances/erc4626/ERC4626Target3.sol\":{\"keccak256\":\"0x27a16fe03925b87ca1d93a22e80bc3107e08683aa2bda2f07df5bce0c0fa6e06\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://dc0451e71cc56b6ecad265db257c0e1cc8184703e25c99797cb392c7f301d27c\",\"dweb:/ipfs/QmRzKD5tDGKoBa7S7L6U9J4RqXERAGN8vTBvfe6wwHoE57\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0x7d99427dc97cc1b469d205de5ced0eb15c6e305d0a7ef73d45fe7ef47ce7231e\",\"license\":\"GPL-2.0-or-later\",\"urls\":[\"bzz-raw://c7726091d2f569ff79057a693324886e2a5558c586684460b51cd20612be59d3\",\"dweb:/ipfs/QmZv6BBe22fZRaC5iYiTuZMD2ZgUXvMBHjwZLikVSoXjDP\"]},\"contracts/src/interfaces/IERC4626Hyperdrive.sol\":{\"keccak256\":\"0xc7f5a5cbfc5ba21f72fc7699d616e2483d4589514a14b6e39f624d0f4d9453e7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a4d7b144f357e86bfd23c805bb670226aa0c87b078babcd4dd3ec8b8f0b3374f\",\"dweb:/ipfs/QmTYNfB4ABRtPjCVck2uq5wQA8PvxBS45mPkVevc82TTFa\"]},\"contracts/src/interfaces/IERC4626HyperdriveCore.sol\":{\"keccak256\":\"0x94cce9f221023ebf9d4ed4fbafac76d67aee4ee0aa7771c89fcd2d374dfb490a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5ed09d2369f7e9c057d20b0c069f6b9e5242d4c9cd85b3bd49ace51ad16fdba0\",\"dweb:/ipfs/QmNzy2ewTJePinzG4L4SAfxxBySPFJW5Shxb5w4ocBgn5F\"]},\"contracts/src/interfaces/IERC4626HyperdriveRead.sol\":{\"keccak256\":\"0x2039eef677ba37898e8e42dcb321d11d3c87f739122fd03726241252326dea33\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://31eacdd274ac0d6ff2969cb465e0fddb262d223f78f9001d7252bd7370449c73\",\"dweb:/ipfs/QmVNRFMvXk1r8h9pCdSsRhQr5rkj8XgGpNoLwhb6Q6Hzbk\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xbb41b77195a206fee42f1c801d1feeefcb84d1d33fcdb537ba2597a2eaf7bf94\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ad3474360d05cf4002ea0703ff36dba900dc1b17da8077f8bcaf159c0b0861eb\",\"dweb:/ipfs/QmYTehjAXpiuLErAWGfVw1LFn8g2oZ7YnjLNXcmU5ngPBf\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x2836b8e9e2b6e143d4601e0047dfd09232352038a2133670d2f40da5442ff4b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://64eec4fc70dd4fdf3ad835ef343d56bd4a7c48f2bb0e1f338d9f090e42848660\",\"dweb:/ipfs/Qmeg2aX8QZBggY1tChJQJbkhkbxWFRQPDsZRxUMsGfFg5m\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1841703b12d5b2ca7dedff94c7dd71a4ad0a0b47ca59ba9de98ea14929fb72e5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c192bfc8bee91341d7e7530d71df2fbaec69d7bf0017e7b318dea276b7f3e171\",\"dweb:/ipfs/QmRWCkdXJ7G2FDo4CpsNuRvDgYWzN9U3LXLzM3YKHs9M4y\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xf692b4673daac8627a185253b5fb99c843d9c5a2897be50599030fbd02c21a28\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ec28e35b2523d2f399c79ec5c8e29a4985a0e7a2d1d83c9a834d84dfc44130a2\",\"dweb:/ipfs/QmZLHmSUkDJsnU2FJ4FuaMfo2t6dPimmLaCDrfuxYF8nmD\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355\",\"dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xc28d1017afe010c20c2fbe9b78e0001eb8b7db16e0fe5038990692227be365ec\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8056e866c6da775c66cefc4e03d8856d75980d8c6eb98e954e1319b2478ad51c\",\"dweb:/ipfs/Qme9n2mBoeFUxf7Tzx4dD3iYt2kDsza6mqPXoUogPnS2hx\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x5485e3c9934c1e6596903966a19f1fd16d4ef28398e2652825540f981142b9d5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8c9625cfe2cd08ab2f1bc9e017482d6ab1ca740af5a5588ee23717a71bd435dc\",\"dweb:/ipfs/QmXBf4TUMsw8Th1rZRnPdpoVsgdXS82DJJq4UPAYjqMW6q\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x64568129b288bbc5ceda7a9f99afaa879353d6a3ccec737cce9c8827a52d3717\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://17f30a5d3b37e7e3aa45dba37efee31223a3d20e52ac25574df66706e69c15cc\",\"dweb:/ipfs/QmWTcWTuWZT7YyTE58QT5QsGfUBfyfx52kivRcAKJTvCv8\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x04d22b2ebf166f1ae6e9645eebeeb077e6eda42c782b685b8432e899b81c7582\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://47f974c18b069ab242498bf15451d1dd377ab0119d9a2f384a3bfc5ce60ff86e\",\"dweb:/ipfs/QmSKARBTcMuqku3Gs9YJfiCNhxZLarjNDty9tdqpYR6qXV\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x1b8bff5e5052adc67904952ec46d491ceb15811fd5110c3d30d371feb1b064bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://92a409bb02326f5b5890aba50d404fb7a3706e0d32187234445476852ef12ecc\",\"dweb:/ipfs/Qmck8L3UCeKDYsg4McMFdSi1SXQ1yurUMn7tc6sqCM5FMi\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xd169b91e1abe9c66e86ef97eeffc1f891a635865f73ca91fcd56c8ed938a6370\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8ece4e4575a34a652447fff0cd3686992d1f709257d54f8574d412e7400eb626\",\"dweb:/ipfs/QmcM6zBD94acnYkVGzFfZFVoG1nK7PoCW7ZnEGuacZPeed\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0xb93b227f7ab7e92c52a80c51cf6613500a2ff9e84ee44d17dcc4d97aabcdf058\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2cfa21ad93f76d4996db82e36b577907a54f58bb5cbe507c612da37b0efb4b11\",\"dweb:/ipfs/QmfSEiLwJdHhqreFjnoxbghHtiHMDPFGxE4zsPq5KmQFKw\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0x36a3a99a25e79a948e7fc0a14a37e665eb7a5b2f537ffb7ce2d4cf6f1a9d4982\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://22c6461d8e767dcb2bdfd9137eea7f47ecd53893011a53855d0d6d0df078b07f\",\"dweb:/ipfs/QmbVBZBiMNyV3asHb4NPXkfRFxBeRYHm2kMj82MLwnh75C\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d\",\"dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xc2e36474285afd5b98999d648305f077a05b0e159dd63ef5f44f29cd42eb68c2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fbf8aac982e8485dce3f8c7f85b9bbbd46b41d8d0d3deebe1fc927799de60c0b\",\"dweb:/ipfs/QmbUJsi5cqS4M4sVcJ8cDWvbMRSqYzfjRAp8gaP1v2dtst\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d\",\"dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a\",\"dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x8d9491ad62e48c7148389a72feca73a388076e3386d7ddc6788193be359e1266\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d340b65b76fc638d119d7d1d6f38fa044c34fc9297dc0c1627c9820218b2e244\",\"dweb:/ipfs/QmZo3nPVg3j2Ga8UXRZFQyTq7RuYuY6F2tYynnVUP4SbDY\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1\",\"dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6\",\"dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
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
                            "name": "lpShares",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_baseAmount",
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
                            "name": "maturityTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondProceeds",
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
                            "_contribution": "The amount of base to supply.",
                            "_options": "The options that configure how the operation is settled."
                        },
                        "returns": {
                            "lpShares": "The initial number of LP shares created."
                        }
                    },
                    "openLong(uint256,uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_baseAmount": "The amount of base to use when trading.",
                            "_minOutput": "The minium number of bonds to receive.",
                            "_minVaultSharePrice": "The minium share price at which to open the long.        This allows traders to protect themselves from opening a long in        a checkpoint where negative interest has accrued.",
                            "_options": "The options that configure how the trade is settled."
                        },
                        "returns": {
                            "bondProceeds": "The amount of bonds the user received.",
                            "maturityTime": "The maturity time of the bonds."
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
                "keccak256": "0x749c0fe26a04df4e52f4dc0372e9108a249d3c52d511f95e2001504552ed1d75",
                "urls": [
                    "bzz-raw://c50e131b6b775d34f0c63e46e23af0ec877d1881f2f62e54fd7e839737fcbe45",
                    "dweb:/ipfs/QmPT5r3JK6t44WH66HKGfmRZqTTXToTHWVq1QsxAhdGk3m"
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
        "absolutePath": "contracts/src/instances/erc4626/ERC4626Target3.sol",
        "id": 6067,
        "exportedSymbols": {
            "ERC4626Base": [
                5679
            ],
            "ERC4626Target3": [
                6066
            ],
            "HyperdriveTarget3": [
                3447
            ],
            "IERC4626": [
                7076
            ],
            "IHyperdrive": [
                7480
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:1092:28",
        "nodes": [
            {
                "id": 6035,
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
                "id": 6037,
                "nodeType": "ImportDirective",
                "src": "64:73:28",
                "nodes": [],
                "absolutePath": "contracts/src/external/HyperdriveTarget3.sol",
                "file": "../../external/HyperdriveTarget3.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6067,
                "sourceUnit": 3448,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6036,
                            "name": "HyperdriveTarget3",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3447,
                            "src": "73:17:28",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6039,
                "nodeType": "ImportDirective",
                "src": "138:57:28",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC4626.sol",
                "file": "../../interfaces/IERC4626.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6067,
                "sourceUnit": 7077,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6038,
                            "name": "IERC4626",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7076,
                            "src": "147:8:28",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6041,
                "nodeType": "ImportDirective",
                "src": "196:63:28",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6067,
                "sourceUnit": 7481,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6040,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7480,
                            "src": "205:11:28",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6043,
                "nodeType": "ImportDirective",
                "src": "260:48:28",
                "nodes": [],
                "absolutePath": "contracts/src/instances/erc4626/ERC4626Base.sol",
                "file": "./ERC4626Base.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6067,
                "sourceUnit": 5680,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6042,
                            "name": "ERC4626Base",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5679,
                            "src": "269:11:28",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6066,
                "nodeType": "ContractDefinition",
                "src": "755:375:28",
                "nodes": [
                    {
                        "id": 6065,
                        "nodeType": "FunctionDefinition",
                        "src": "987:141:28",
                        "nodes": [],
                        "body": {
                            "id": 6064,
                            "nodeType": "Block",
                            "src": "1126:2:28",
                            "nodes": [],
                            "statements": []
                        },
                        "documentation": {
                            "id": 6049,
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
                                        "id": 6058,
                                        "name": "_config",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 6052,
                                        "src": "1096:7:28",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    }
                                ],
                                "id": 6059,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 6057,
                                    "name": "HyperdriveTarget3",
                                    "nameLocations": [
                                        "1078:17:28"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 3447,
                                    "src": "1078:17:28"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1078:26:28"
                            },
                            {
                                "arguments": [
                                    {
                                        "id": 6061,
                                        "name": "__vault",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 6055,
                                        "src": "1117:7:28",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC4626_$7076",
                                            "typeString": "contract IERC4626"
                                        }
                                    }
                                ],
                                "id": 6062,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 6060,
                                    "name": "ERC4626Base",
                                    "nameLocations": [
                                        "1105:11:28"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 5679,
                                    "src": "1105:11:28"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1105:20:28"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 6056,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 6052,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "1038:7:28",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6065,
                                    "src": "1008:37:28",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 6051,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 6050,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "1008:11:28",
                                                "1020:10:28"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7280,
                                            "src": "1008:22:28"
                                        },
                                        "referencedDeclaration": 7280,
                                        "src": "1008:22:28",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$7280_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 6055,
                                    "mutability": "mutable",
                                    "name": "__vault",
                                    "nameLocation": "1064:7:28",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6065,
                                    "src": "1055:16:28",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC4626_$7076",
                                        "typeString": "contract IERC4626"
                                    },
                                    "typeName": {
                                        "id": 6054,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 6053,
                                            "name": "IERC4626",
                                            "nameLocations": [
                                                "1055:8:28"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7076,
                                            "src": "1055:8:28"
                                        },
                                        "referencedDeclaration": 7076,
                                        "src": "1055:8:28",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC4626_$7076",
                                            "typeString": "contract IERC4626"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "998:79:28"
                        },
                        "returnParameters": {
                            "id": 6063,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1126:0:28"
                        },
                        "scope": 6066,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 6045,
                            "name": "HyperdriveTarget3",
                            "nameLocations": [
                                "782:17:28"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 3447,
                            "src": "782:17:28"
                        },
                        "id": 6046,
                        "nodeType": "InheritanceSpecifier",
                        "src": "782:17:28"
                    },
                    {
                        "baseName": {
                            "id": 6047,
                            "name": "ERC4626Base",
                            "nameLocations": [
                                "801:11:28"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 5679,
                            "src": "801:11:28"
                        },
                        "id": 6048,
                        "nodeType": "InheritanceSpecifier",
                        "src": "801:11:28"
                    }
                ],
                "canonicalName": "ERC4626Target3",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 6044,
                    "nodeType": "StructuredDocumentation",
                    "src": "310:445:28",
                    "text": "@author DELV\n @title ERC4626Target3\n @notice ERC4626Hyperdrive's target3 logic contract. This contract contains\n         several stateful functions that couldn't fit into the Hyperdrive\n         contract.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    6066,
                    5679,
                    3447,
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
                "name": "ERC4626Target3",
                "nameLocation": "764:14:28",
                "scope": 6067,
                "usedErrors": [
                    7348,
                    7351,
                    7363,
                    7384,
                    7390,
                    7393,
                    7396,
                    7399,
                    7402,
                    7408,
                    7411,
                    7414,
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
    "id": 28
};
