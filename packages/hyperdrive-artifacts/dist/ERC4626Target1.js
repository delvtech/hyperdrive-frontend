export const ERC4626Target1 = {
    abi: [
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
                            "internalType": "contract IERC20",
                            "name": "vaultSharesToken",
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
                            "name": "circuitBreakerDelta",
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
                            "internalType": "address",
                            "name": "sweepCollector",
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
            "inputs": [],
            "name": "InsufficientBalance",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InsufficientLiquidity",
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
            "name": "OutputLimit",
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
                    "name": "amount",
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
                    "internalType": "address",
                    "name": "destination",
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
                    "name": "amount",
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
                    "internalType": "address",
                    "name": "destination",
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
                    "name": "amount",
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
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "basePayment",
                    "type": "uint256"
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
                    "name": "amount",
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
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
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
                    "name": "checkpointVaultSharePrice",
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
                    "name": "newFeeCollector",
                    "type": "address"
                }
            ],
            "name": "FeeCollectorUpdated",
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
                    "name": "amount",
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
                    "name": "amount",
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
                    "name": "amount",
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
                    "indexed": true,
                    "internalType": "address",
                    "name": "destination",
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
                    "name": "amount",
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
                    "indexed": true,
                    "internalType": "address",
                    "name": "destination",
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
                    "name": "amount",
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
                    "name": "collector",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "target",
                    "type": "address"
                }
            ],
            "name": "Sweep",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newSweepCollector",
                    "type": "address"
                }
            ],
            "name": "SweepCollectorUpdated",
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
                    "name": "_maturityTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_bondAmount",
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
            "name": "closeLong",
            "outputs": [
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
                    "name": "_maturityTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_bondAmount",
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
            "name": "closeShort",
            "outputs": [
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
    bytecode: '0x6102606040523480156200001257600080fd5b5060405162003db938038062003db98339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613941620004786000396000505060005050600050506000818160af0152818161032b0152612ab901526000818161132f015281816116da0152818161173d01528181612699015281816126d5015281816128d20152612a9301526000818161068101528181610d0701528181610ec6015281816115990152612a6d01526000611a79015260008181611b9f01528181612189015261220201526000818161090401528181610e5501528181611b7301526121d6015260008181610d4a015261214f0152600081816106a201528181610ce501528181610ee7015281816115770152612adf01526000818161083c01528181610dd50152818161163601528181612024015261304f0152600081816105d8015281816106d40152818161075b015281816107bc01526107f40152600081816118cd015281816124250152818161248b01526125070152600050506139416000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806329b23fc11461003b578063ded0623114610060575b600080fd5b61004e61004936600461345d565b610073565b60405190815260200160405180910390f35b61004e61006e36600461345d565b61008c565b60006100818585858561009a565b90505b949350505050565b600061008185858585610316565b60006100a4610556565b6100ad82610580565b7f00000000000000000000000000000000000000000000000000000000000000008410156100ee5760405163211ddda360e11b815260040160405180910390fd5b60006100f86105b9565b90508542101561011b5761011561010d6105d1565b826004610607565b50610129565b61012786826004610607565b505b61013e610137600288610b9e565b3387610bd3565b6000806000806000806101528b888e610cac565b95509550955095509550955060008c90508c4210156102125782600b600082825461017d91906134d2565b90915550610195905061018e6105d1565b4284610f45565b6101a28c88878785611083565b60006101ad8e6111fd565b90506101cb6101bb8e611247565b6101c590836134e5565b82611275565b6101d489611328565b6101e0576101e0611388565b60006101eb8a6113a1565b90508061020b57604051638bdf918d60e01b815260040160405180910390fd5b5050610229565b61021c86896113ae565b9550610227886113a1565b505b6000610236878a8d61148f565b90508b8110156102595760405163c972651760e01b815260040160405180910390fd5b8c86858b8e610269600288610b9e565b6102766020830183613505565b6001600160a01b0316337fcb02fec44af7356703a283b87ccec63f4ea688efc67fee9cdc1834a93260c7308a8a876102b46040890160208a0161353c565b6102c88a6102c28d8f6134d2565b90611529565b6040805195865260208601949094529284019190915215156060830152608082015260a081018a905260c00160405180910390a450939c505050505050505050505050506100846001600055565b6000610320610556565b61032982610580565b7f000000000000000000000000000000000000000000000000000000000000000084101561036a5760405163211ddda360e11b815260040160405180910390fd5b60006103746105b9565b90508542101561038f5761038961010d6105d1565b5061039d565b61039b86826004610607565b505b6103ab610137600188610b9e565b6000806000806000806103bf8b888e61153e565b95509550955095509550955060008c90508c4210156104725782600b60008282546103ea91906134d2565b909155506103fb905061018e6105d1565b6104088c888787856116c3565b6000610413826111fd565b905061042b6104218e611247565b6101c59083613559565b61043489611328565b61044057610440611388565b600061044b8a6113a1565b90508061046b57604051638bdf918d60e01b815260040160405180910390fd5b5050610489565b61047c86896113ae565b9550610487886113a1565b505b6000610496878a8d61148f565b90508b8110156104b95760405163c972651760e01b815260040160405180910390fd5b8c898c6104c7600186610b9e565b6104d46020830183613505565b6001600160a01b0316337fc0e1704f2ff88686bdc2a73d31e0dc4e054eddbdc3564af7a148229cf857b8028888876105126040890160208a0161353c565b60408051948552602085019390935291830152151560608201526080810188905260a00160405180910390a450919a50505050505050505050506100846001600055565b60026000540361057957604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b600061058f6020830183613505565b6001600160a01b0316036105b65760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006105cc670de0b6b3a76400006118b4565b905090565b60006105fd7f000000000000000000000000000000000000000000000000000000000000000042613597565b6105cc90426135ab565b600083815260076020526040812060018101546001600160801b031615158061062f57504285115b1561064857600101546001600160801b03169050610b97565b60008060006106556105d1565b90508088036106cd578692506106c661066c611941565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611962565b9150610789565b60006106f97f00000000000000000000000000000000000000000000000000000000000000008a6134d2565b90505b8181036107145787935061071161066c611941565b92505b6000818152600760205260409020600101546001600160801b031693508315610756576000818152600760205260409020546001600160801b03169250610787565b6107807f0000000000000000000000000000000000000000000000000000000000000000826134d2565b90506106fc565b505b61079283611979565b6001850180546001600160801b0319166001600160801b03929092169190911790556107e86107e17f00000000000000000000000000000000000000000000000000000000000000008a6135ab565b8984610f45565b610826886108206108197f0000000000000000000000000000000000000000000000000000000000000000836134d2565b42906119a3565b84610f45565b61082f876119b8565b50600090506007816108617f00000000000000000000000000000000000000000000000000000000000000008c6135ab565b815260208101919091526040016000908120600101546001600160801b0316915061088d60028b610b9e565b6000818152600e60205260408120549192508b8b83156109d357600192506000806108bc86898d866000611b5c565b9150915080600b60008282546108d291906134d2565b909155506108ee9050866000846108e881611247565b88611083565b6108f881836134d2565b915061092886838a8e877f0000000000000000000000000000000000000000000000000000000000000000611c2b565b915061093c6109378385611529565b611c75565b6005805460029061095d9084906201000090046001600160701b03166135be565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061098a82611979565b600580546010906109ac908490600160801b90046001600160801b03166135de565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006109e0600184610b9e565b6000818152600e60205260409020549091508015610aef5760019450600080610a0d838b8f886001611b5c565b9150915080600b6000828254610a2391906134d2565b90915550610a3f905083600084610a3981611247565b8a6116c3565b610a4981836135ab565b9150610a586109378387611529565b60058054600290610a799084906201000090046001600160701b03166135be565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610aa682611979565b60058054601090610ac8908490600160801b90046001600160801b03166135de565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610b2757610b1b610b0187611247565b610b0a83611247565b610b1491906134e5565b6000611275565b610b25838f611c9f565b505b6000610b3284611e99565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999b5050505050505050505050505b9392505050565b60006001600160f81b03821115610bc85760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115610c1657604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290610c599084906135ab565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600080600080600080600080610cc189611ff7565b9050610d2b610cce611941565b600154600160801b90046001600160801b03168d847f00000000000000000000000000000000000000000000000000000000000000008f7f0000000000000000000000000000000000000000000000000000000000000000612048565b90995096509150610d3d61066c611941565b9250610d738289610d6e867f00000000000000000000000000000000000000000000000000000000000000006120b8565b6120e8565b15610d8057610d80611388565b8a8a60008080610d9285878a8761212a565b9b5091945092509050610da581846135ab565b610daf90886134d2565b9650610dbb82846134d2565b610dc5908c6134d2565b9a505050505050506000600760007f00000000000000000000000000000000000000000000000000000000000000008b610dff91906135ab565b815260208101919091526040016000908120600101546001600160801b03169150428a11610e475760008a8152600760205260409020600101546001600160801b0316610e49565b8a5b9050610e798c8884848f7f0000000000000000000000000000000000000000000000000000000000000000611c2b565b9750610e8585886135ab565b9650670de0b6b3a7640000610f0b84610e9c611941565b610ea691906134d2565b600154610ec4908d90600160801b90046001600160801b03166135ab565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611962565b1115610f1957610f19611388565b610f29888885888686600061223e565b939b509199509097509095505050505093975093979195509350565b600083815260076020526040902054600160801b90046001600160801b0316808303610f715750505050565b6000848152600760205260408120546001600160801b031690819003610fcb57610f9a83611979565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055611049565b61101c611017670de0b6b3a7640000610fe488866135ab565b610fee91906135fe565b85670de0b6b3a7640000611002878a6135ab565b61100c91906135fe565b8592919060016122dd565b611979565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b61105284611979565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b03166110cc611017826110af670de0b6b3a7640000866135fe565b600454600160801b90046001600160801b031691908a60006122dd565b600480546001600160801b03928316600160801b0292169190911790556110f286611979565b6110fc9082613615565b600380546001600160801b03928316600160801b02921691909117905561112284611979565b6001805460009061113d9084906001600160801b03166135de565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061116a83612387565b6003805460009061117f908490600f0b613635565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506111af85611979565b600180546010906111d1908490600160801b90046001600160801b0316613615565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000611225600e6000611211600286610b9e565b815260200190815260200160002054611247565b611237600e6000611211600187610b9e565b61124191906134e5565b92915050565b60006001600160ff1b038211156112715760405163396ea70160e11b815260040160405180910390fd5b5090565b600061129e61128484836123c3565b61128f8460006123c3565b61129991906134e5565b612387565b9050600081600f0b13156112f357600280548291906000906112ca9084906001600160801b03166135de565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156113235761130881613662565b600280546000906112ca9084906001600160801b0316613615565b505050565b60006113547f0000000000000000000000000000000000000000000000000000000000000000836123d9565b60025461136a91906001600160801b03166134d2565b600154611380906001600160801b031684611529565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000611241826004611c9f565b60008060006113bc846119b8565b909250905060006113cd8686611529565b9050818311156113e5576113e28683856123ee565b95505b828110156113f75780830392506113fc565b600092505b61140583611c75565b600580546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b90910416808710156114585786900361145c565b5060005b61146581611979565b600580546001600160801b03928316600160801b0292169190911790555085935050505092915050565b60008061149c8585611529565b90506114a78161240c565b9450846000036114bb576000915050610b97565b6114cb604084016020850161353c565b156114fa576114f3856114e16020860186613505565b6114ee6040870187613688565b61245c565b9150611521565b61151d8561150b6020860186613505565b6115186040870187613688565b6124fa565b8491505b509392505050565b6000610b978383670de0b6b3a76400006123ee565b60008060008060008060008061155389611ff7565b90506115bd611560611941565b600154600160801b90046001600160801b03168d847f00000000000000000000000000000000000000000000000000000000000000008f7f0000000000000000000000000000000000000000000000000000000000000000612534565b90995097509150600080806115d361066c611941565b95508c6115e28f86898461212a565b9a5091955090935091506115f683856135ab565b61160090876135ab565b955061160c82856134d2565b611616908c6135ab565b9a50611622888c6134d2565b995050505050506116ad86868386600760007f00000000000000000000000000000000000000000000000000000000000000008f61166091906135ab565b81526020810191909152604001600020600101546001600160801b0316428e116116a45760008e8152600760205260409020600101546001600160801b03166116a6565b8e5b600161223e565b9a9e939d50919b50909950929650945050505050565b6001546001600160801b03168381108061170557507f000000000000000000000000000000000000000000000000000000000000000061170385836135ab565b105b1561171257611712611388565b6003549084900390600f0b61172784826134e5565b90508361173386611247565b13801561176857507f00000000000000000000000000000000000000000000000000000000000000006117668383612588565b105b1561177557611775611388565b600254600160801b90046001600160801b03166117b7611017826117a1670de0b6b3a7640000886135fe565b6004546001600160801b031691908c60006122dd565b600480546001600160801b0319166001600160801b03929092169190911790556117e188826135ab565b90506117ec81611979565b600280546001600160801b03928316600160801b02921691909117905561181283611979565b600180546001600160801b0319166001600160801b039290921691909117905561183b82612387565b600380546001600160801b0319166001600160801b039290921691909117905561186487611979565b60018054601090611886908490600160801b90046001600160801b03166135de565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a906024015b602060405180830381865afa15801561191d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061124191906136cf565b6001546003546000916105cc916001600160801b0390911690600f0b612588565b6000610081826119738588886123ee565b906125ae565b60006001600160801b0382111561127157604051630f0af95160e11b815260040160405180910390fd5b60008183116119b25782610b97565b50919050565b60055460009081906119db908490600160801b90046001600160801b0316611529565b6005546201000090046001600160701b03169250905081811115611b57576000611a0583836135ab565b9050611a146110178286612623565b60058054601090611a36908490600160801b90046001600160801b0316613615565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611a6f858361263890919063ffffffff16565b90506000611a9d827f0000000000000000000000000000000000000000000000000000000000000000611529565b905080600b6000828254611ab191906134d2565b90915550611ac1905081836135ab565b9150611acc82611979565b60018054600090611ae79084906001600160801b03166135de565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b148261264d565b60038054600090611b29908490600f0b613635565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611b698785612638565b91506000611b97837f0000000000000000000000000000000000000000000000000000000000000000611529565b9050611bc3817f0000000000000000000000000000000000000000000000000000000000000000611529565b91508315611be657611bd582826135ab565b611bdf90846135ab565b9250611bfd565b611bf082826135ab565b611bfa90846134d2565b92505b86861015611c2057611c108387896123ee565b9250611c1d8287896123ee565b91505b509550959350505050565b600080611c4384611c3d8a888a6123ee565b90612638565b9050611c508884866123ee565b611c5a90826134d2565b905086811115611c6a5786810391505b509695505050505050565b60006001600160701b038211156112715760405163086b151760e11b815260040160405180910390fd5b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611cea916001600160801b0316906135ab565b905080600003611cfe576001915050611241565b6000611d0985612677565b905080600003611d1e57600192505050611241565b600080611d2c838589612713565b9150915080611d42576000945050505050611241565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611d7e929190613766565b6040805180830381865af4158015611d9a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611dbe91906137dc565b91509150611ddc611dce82611247565b611dd790613800565b61288e565b925082611df25760009650505050505050611241565b611dfb82611979565b60068054600090611e169084906001600160801b03166135de565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611e4381611979565b60068054601090611e65908490600160801b90046001600160801b03166135de565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611ec287612a24565b6040518263ffffffff1660e01b8152600401611ede919061381c565b6040805180830381865af4158015611efa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f1e919061382b565b9150915080611f34575060009485945092505050565b6000808611611f44576000611f4e565b611f4e8387611529565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611fb991906134d2565b611fc391906135ab565b905080600003611fdc5750600096879650945050505050565b6000611fe88383612638565b98600198509650505050505050565b6000806120026105d1565b905080831161201257600061201c565b61201c81846135ab565b9150610b97827f0000000000000000000000000000000000000000000000000000000000000000612638565b6000808061206961206188670de0b6b3a76400006135ab565b899087612b5e565b905086156120ab5761207b88886123d9565b915061209c8a8a846120958a670de0b6b3a76400006135ab565b8989612b84565b92506120a883826134d2565b90505b9750975097945050505050565b60006120d66120cf84670de0b6b3a76400006135ab565b83906123d9565b610b9790670de0b6b3a76400006135ab565b60008061211f856120f7611941565b61210191906134d2565b600154610ec4908790600160801b90046001600160801b03166135ab565b909210949350505050565b6000808080612181878661217a8b61217461214d8c670de0b6b3a76400006135ab565b7f0000000000000000000000000000000000000000000000000000000000000000906123d9565b906123d9565b9190612b5e565b93506121ad847f0000000000000000000000000000000000000000000000000000000000000000611529565b915060006121ce6121c689670de0b6b3a76400006135ab565b8a9088612b5e565b90506121fa817f00000000000000000000000000000000000000000000000000000000000000006123d9565b9350612226847f0000000000000000000000000000000000000000000000000000000000000000611529565b61223090846134d2565b915050945094509450949050565b600080600080600080888810156122ad578615612263576122608d898b6123ee565b9c505b61226e8c898b6123ee565b9b506122798b611247565b6122828d611247565b61228c91906134e5565b90506122998b898b6123ee565b9a506122a68a898b6123ee565b99506122cc565b6122b68b611247565b6122bf8d611247565b6122c991906134e5565b90505b9b9c9a9b999a975050505050505050565b6000826000036122ee57508461237e565b81156123415761231f61230184876134d2565b61230b8587611529565b612315888a611529565b611c3d91906134d2565b9050600061232d85886119a3565b90508082101561233b578091505b5061237e565b8285036123505750600061237e565b61237b61235d84876135ab565b61236785876123d9565b612371888a611529565b611c3d91906135ab565b90505b95945050505050565b600060016001607f1b03198212806123a5575060016001607f1b0382135b156112715760405163a5353be560e01b815260040160405180910390fd5b60008183136123d25781610b97565b5090919050565b6000610b978383670de0b6b3a7640000612b5e565b600082600019048411830215820261240557600080fd5b5091020490565b6040516363737ac960e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f59290602401611900565b604051635d043b2960e11b8152600481018590526001600160a01b0384811660248301523060448301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063ba087652906064016020604051808303816000875af11580156124d6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061008191906136cf565b61252e6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486612ba7565b50505050565b6000808061255561254d88670de0b6b3a76400006135ab565b8990876123ee565b905086156120ab576125678888611529565b915061209c8a8a846125818a670de0b6b3a76400006135ab565b8989612bf9565b6000806125958484612c0a565b9092509050806125a7576125a7611388565b5092915050565b6000816000036125c75750670de0b6b3a7640000611241565b826000036125d757506000611241565b60006125e283611247565b905060006125f76125f286611247565b612c49565b905081810261260e670de0b6b3a76400008261385b565b905061261981612e6f565b9695505050505050565b6000610b9783670de0b6b3a764000084612b5e565b6000610b9783670de0b6b3a7640000846123ee565b600060016001607f1b038211156112715760405163a5353be560e01b815260040160405180910390fd5b6002546000908190612692906001600160801b031684612623565b90506126be7f0000000000000000000000000000000000000000000000000000000000000000826134d2565b6001546001600160801b031611156119b2576001547f0000000000000000000000000000000000000000000000000000000000000000906127099083906001600160801b03166135ab565b610b9791906135ab565b61271b6133aa565b60008061272784612a24565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612762919061381c565b6040805180830381865af415801561277e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127a2919061382b565b93509050826127b75750600091506128869050565b60006127de6127d984610160015185610140015161152990919063ffffffff16565b611247565b6127fe6127d98561012001518661010001516123d990919063ffffffff16565b61280891906134e5565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612945573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129699190613889565b9350935093509350806129855750600098975050505050505050565b8684146129b65761299584611979565b600180546001600160801b0319166001600160801b03929092169190911790555b8583146129e7576129c683612387565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612a15576129f782611979565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612a2c6133fc565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191612b249116613004565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612b5692900416613004565b905292915050565b6000826000190484118302158202612b7557600080fd5b50910281810615159190040190565b600080612b9588888888888861307a565b909250905080611c6a57611c6a611388565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261132390849061315b565b600080612b958888888888886131c3565b600080600083612c1986611247565b612c2391906134e5565b90506000811215612c3b576000809250925050612c42565b9150600190505b9250929050565b6000808213612c6b5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612cee9084901c611247565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213612e8a57506000919050565b680755bf798b4a1bf1e58212612eb3576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061261974029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611247565b600080670de0b6b3a76400006130186105d1565b61302291906135fe565b905080831161303257600061303c565b61303c81846135ab565b9150610b97613073670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006135fe565b8390612638565b600080600061308c8989888888613283565b9050868810156130a3576000809250925050613150565b96869003966130b288876125ae565b9750878110156130c9576000809250925050613150565b8781036130d7818688612b5e565b9050670de0b6b3a7640000811061310b576131046130fd670de0b6b3a764000089612623565b82906125ae565b9050613123565b6131206130fd670de0b6b3a764000089612638565b90505b61312d8186612623565b90508981101561314557600080935093505050613150565b899003925060019150505b965096945050505050565b60006131706001600160a01b038416836132b2565b9050805160001415801561319557508080602001905181019061319391906138bf565b155b1561132357604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b60008060006131d58989888888613283565b90506131e586611973898b6134d2565b9750878110156131fc576000809250925050613150565b87810361320a818688612b5e565b9050670de0b6b3a76400008110613237576132306130fd670de0b6b3a764000089612623565b905061324f565b61324c6130fd670de0b6b3a764000089612638565b90505b6132598186612623565b9050808a101561327157600080935093505050613150565b90980398600198509650505050505050565b600061328f85856125ae565b6132a86132a086611973868b6123d9565b859085612b5e565b61237b91906134d2565b6060610b978383600084600080856001600160a01b031684866040516132d891906138dc565b60006040518083038185875af1925050503d8060008114613315576040519150601f19603f3d011682016040523d82523d6000602084013e61331a565b606091505b509150915061261986838360608261333a5761333582613381565b610b97565b815115801561335157506001600160a01b0384163b155b1561337a57604051639996b31560e01b81526001600160a01b03851660048201526024016131ba565b5080610b97565b8051156133915780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061012001604052806133be6133fc565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561347357600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561349f57600080fd5b8501606081880312156134b157600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b80820180821115611241576112416134bc565b81810360008312801583831316838312821617156125a7576125a76134bc565b60006020828403121561351757600080fd5b81356001600160a01b0381168114610b9757600080fd5b80151581146105b657600080fd5b60006020828403121561354e57600080fd5b8135610b978161352e565b8082018281126000831280158216821582161715613579576135796134bc565b505092915050565b634e487b7160e01b600052601260045260246000fd5b6000826135a6576135a6613581565b500690565b81810381811115611241576112416134bc565b6001600160701b038181168382160190808211156125a7576125a76134bc565b6001600160801b038181168382160190808211156125a7576125a76134bc565b8082028115828204841417611241576112416134bc565b6001600160801b038281168282160390808211156125a7576125a76134bc565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715611241576112416134bc565b600081600f0b60016001607f1b0319810361367f5761367f6134bc565b60000392915050565b6000808335601e1984360301811261369f57600080fd5b83018035915067ffffffffffffffff8211156136ba57600080fd5b602001915036819003821315612c4257600080fd5b6000602082840312156136e157600080fd5b5051919050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a08201905061377a8285516136e8565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b600080604083850312156137ef57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613815576138156134bc565b5060000390565b610180810161124182846136e8565b6000806040838503121561383e57600080fd5b8251915060208301516138508161352e565b809150509250929050565b60008261386a5761386a613581565b600160ff1b821460001984141615613884576138846134bc565b500590565b6000806000806080858703121561389f57600080fd5b84519350602085015192506040850151915060608501516134b18161352e565b6000602082840312156138d157600080fd5b8151610b978161352e565b6000825160005b818110156138fd57602081860181015185830152016138e3565b50600092019182525091905056fea26469706673582212208ce8cc04c9c59bae037b9ec917e27745f07e191d48dc3dcfd16f859926d52b4064736f6c63430008140033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
    }
};
