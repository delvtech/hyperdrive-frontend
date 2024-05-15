export const LsETHTarget1 = {
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
            "inputs": [],
            "name": "UnsupportedToken",
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
    bytecode: '0x6102606040523480156200001257600080fd5b5060405162003d2f38038062003d2f8339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516138be620004716000396000505060005050600050506000818160af0152818161032b0152612a3601526000818161132f015281816116da0152818161173d01528181612616015281816126520152818161284f0152612a1001526000818161068101528181610d0701528181610ec60152818161159901526129ea01526000611a79015260008181611b9f01528181612189015261220201526000818161090401528181610e5501528181611b7301526121d6015260008181610d4a015261214f0152600081816106a201528181610ce501528181610ee7015281816115770152612a5c01526000818161083c01528181610dd501528181611636015281816120240152612fcc0152600081816105d8015281816106d40152818161075b015281816107bc01526107f40152600081816118cd0152818161242501526124840152600050506138be6000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806329b23fc11461003b578063ded0623114610060575b600080fd5b61004e6100493660046133da565b610073565b60405190815260200160405180910390f35b61004e61006e3660046133da565b61008c565b60006100818585858561009a565b90505b949350505050565b600061008185858585610316565b60006100a4610556565b6100ad82610580565b7f00000000000000000000000000000000000000000000000000000000000000008410156100ee5760405163211ddda360e11b815260040160405180910390fd5b60006100f86105b9565b90508542101561011b5761011561010d6105d1565b826004610607565b50610129565b61012786826004610607565b505b61013e610137600288610b9e565b3387610bd3565b6000806000806000806101528b888e610cac565b95509550955095509550955060008c90508c4210156102125782600b600082825461017d919061344f565b90915550610195905061018e6105d1565b4284610f45565b6101a28c88878785611083565b60006101ad8e6111fd565b90506101cb6101bb8e611247565b6101c59083613462565b82611275565b6101d489611328565b6101e0576101e0611388565b60006101eb8a6113a1565b90508061020b57604051638bdf918d60e01b815260040160405180910390fd5b5050610229565b61021c86896113ae565b9550610227886113a1565b505b6000610236878a8d61148f565b90508b8110156102595760405163c972651760e01b815260040160405180910390fd5b8c86858b8e610269600288610b9e565b6102766020830183613482565b6001600160a01b0316337fcb02fec44af7356703a283b87ccec63f4ea688efc67fee9cdc1834a93260c7308a8a876102b46040890160208a016134b9565b6102c88a6102c28d8f61344f565b90611529565b6040805195865260208601949094529284019190915215156060830152608082015260a081018a905260c00160405180910390a450939c505050505050505050505050506100846001600055565b6000610320610556565b61032982610580565b7f000000000000000000000000000000000000000000000000000000000000000084101561036a5760405163211ddda360e11b815260040160405180910390fd5b60006103746105b9565b90508542101561038f5761038961010d6105d1565b5061039d565b61039b86826004610607565b505b6103ab610137600188610b9e565b6000806000806000806103bf8b888e61153e565b95509550955095509550955060008c90508c4210156104725782600b60008282546103ea919061344f565b909155506103fb905061018e6105d1565b6104088c888787856116c3565b6000610413826111fd565b905061042b6104218e611247565b6101c590836134d6565b61043489611328565b61044057610440611388565b600061044b8a6113a1565b90508061046b57604051638bdf918d60e01b815260040160405180910390fd5b5050610489565b61047c86896113ae565b9550610487886113a1565b505b6000610496878a8d61148f565b90508b8110156104b95760405163c972651760e01b815260040160405180910390fd5b8c898c6104c7600186610b9e565b6104d46020830183613482565b6001600160a01b0316337fc0e1704f2ff88686bdc2a73d31e0dc4e054eddbdc3564af7a148229cf857b8028888876105126040890160208a016134b9565b60408051948552602085019390935291830152151560608201526080810188905260a00160405180910390a450919a50505050505050505050506100846001600055565b60026000540361057957604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b600061058f6020830183613482565b6001600160a01b0316036105b65760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006105cc670de0b6b3a76400006118b4565b905090565b60006105fd7f000000000000000000000000000000000000000000000000000000000000000042613514565b6105cc9042613528565b600083815260076020526040812060018101546001600160801b031615158061062f57504285115b1561064857600101546001600160801b03169050610b97565b60008060006106556105d1565b90508088036106cd578692506106c661066c611941565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611962565b9150610789565b60006106f97f00000000000000000000000000000000000000000000000000000000000000008a61344f565b90505b8181036107145787935061071161066c611941565b92505b6000818152600760205260409020600101546001600160801b031693508315610756576000818152600760205260409020546001600160801b03169250610787565b6107807f00000000000000000000000000000000000000000000000000000000000000008261344f565b90506106fc565b505b61079283611979565b6001850180546001600160801b0319166001600160801b03929092169190911790556107e86107e17f00000000000000000000000000000000000000000000000000000000000000008a613528565b8984610f45565b610826886108206108197f00000000000000000000000000000000000000000000000000000000000000008361344f565b42906119a3565b84610f45565b61082f876119b8565b50600090506007816108617f00000000000000000000000000000000000000000000000000000000000000008c613528565b815260208101919091526040016000908120600101546001600160801b0316915061088d60028b610b9e565b6000818152600e60205260408120549192508b8b83156109d357600192506000806108bc86898d866000611b5c565b9150915080600b60008282546108d2919061344f565b909155506108ee9050866000846108e881611247565b88611083565b6108f8818361344f565b915061092886838a8e877f0000000000000000000000000000000000000000000000000000000000000000611c2b565b915061093c6109378385611529565b611c75565b6005805460029061095d9084906201000090046001600160701b031661353b565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061098a82611979565b600580546010906109ac908490600160801b90046001600160801b031661355b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006109e0600184610b9e565b6000818152600e60205260409020549091508015610aef5760019450600080610a0d838b8f886001611b5c565b9150915080600b6000828254610a23919061344f565b90915550610a3f905083600084610a3981611247565b8a6116c3565b610a498183613528565b9150610a586109378387611529565b60058054600290610a799084906201000090046001600160701b031661353b565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610aa682611979565b60058054601090610ac8908490600160801b90046001600160801b031661355b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610b2757610b1b610b0187611247565b610b0a83611247565b610b149190613462565b6000611275565b610b25838f611c9f565b505b6000610b3284611e99565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999b5050505050505050505050505b9392505050565b60006001600160f81b03821115610bc85760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115610c1657604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290610c59908490613528565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600080600080600080600080610cc189611ff7565b9050610d2b610cce611941565b600154600160801b90046001600160801b03168d847f00000000000000000000000000000000000000000000000000000000000000008f7f0000000000000000000000000000000000000000000000000000000000000000612048565b90995096509150610d3d61066c611941565b9250610d738289610d6e867f00000000000000000000000000000000000000000000000000000000000000006120b8565b6120e8565b15610d8057610d80611388565b8a8a60008080610d9285878a8761212a565b9b5091945092509050610da58184613528565b610daf908861344f565b9650610dbb828461344f565b610dc5908c61344f565b9a505050505050506000600760007f00000000000000000000000000000000000000000000000000000000000000008b610dff9190613528565b815260208101919091526040016000908120600101546001600160801b03169150428a11610e475760008a8152600760205260409020600101546001600160801b0316610e49565b8a5b9050610e798c8884848f7f0000000000000000000000000000000000000000000000000000000000000000611c2b565b9750610e858588613528565b9650670de0b6b3a7640000610f0b84610e9c611941565b610ea6919061344f565b600154610ec4908d90600160801b90046001600160801b0316613528565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611962565b1115610f1957610f19611388565b610f29888885888686600061223e565b939b509199509097509095505050505093975093979195509350565b600083815260076020526040902054600160801b90046001600160801b0316808303610f715750505050565b6000848152600760205260408120546001600160801b031690819003610fcb57610f9a83611979565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055611049565b61101c611017670de0b6b3a7640000610fe48886613528565b610fee919061357b565b85670de0b6b3a7640000611002878a613528565b61100c919061357b565b8592919060016122dd565b611979565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b61105284611979565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b03166110cc611017826110af670de0b6b3a76400008661357b565b600454600160801b90046001600160801b031691908a60006122dd565b600480546001600160801b03928316600160801b0292169190911790556110f286611979565b6110fc9082613592565b600380546001600160801b03928316600160801b02921691909117905561112284611979565b6001805460009061113d9084906001600160801b031661355b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061116a83612387565b6003805460009061117f908490600f0b6135b2565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506111af85611979565b600180546010906111d1908490600160801b90046001600160801b0316613592565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000611225600e6000611211600286610b9e565b815260200190815260200160002054611247565b611237600e6000611211600187610b9e565b6112419190613462565b92915050565b60006001600160ff1b038211156112715760405163396ea70160e11b815260040160405180910390fd5b5090565b600061129e61128484836123c3565b61128f8460006123c3565b6112999190613462565b612387565b9050600081600f0b13156112f357600280548291906000906112ca9084906001600160801b031661355b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561132357611308816135df565b600280546000906112ca9084906001600160801b0316613592565b505050565b60006113547f0000000000000000000000000000000000000000000000000000000000000000836123d9565b60025461136a91906001600160801b031661344f565b600154611380906001600160801b031684611529565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000611241826004611c9f565b60008060006113bc846119b8565b909250905060006113cd8686611529565b9050818311156113e5576113e28683856123ee565b95505b828110156113f75780830392506113fc565b600092505b61140583611c75565b600580546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b90910416808710156114585786900361145c565b5060005b61146581611979565b600580546001600160801b03928316600160801b0292169190911790555085935050505092915050565b60008061149c8585611529565b90506114a78161240c565b9450846000036114bb576000915050610b97565b6114cb60408401602085016134b9565b156114fa576114f3856114e16020860186613482565b6114ee6040870187613605565b61245c565b9150611521565b61151d8561150b6020860186613482565b6115186040870187613605565b612477565b8491505b509392505050565b6000610b978383670de0b6b3a76400006123ee565b60008060008060008060008061155389611ff7565b90506115bd611560611941565b600154600160801b90046001600160801b03168d847f00000000000000000000000000000000000000000000000000000000000000008f7f00000000000000000000000000000000000000000000000000000000000000006124b1565b90995097509150600080806115d361066c611941565b95508c6115e28f86898461212a565b9a5091955090935091506115f68385613528565b6116009087613528565b955061160c828561344f565b611616908c613528565b9a50611622888c61344f565b995050505050506116ad86868386600760007f00000000000000000000000000000000000000000000000000000000000000008f6116609190613528565b81526020810191909152604001600020600101546001600160801b0316428e116116a45760008e8152600760205260409020600101546001600160801b03166116a6565b8e5b600161223e565b9a9e939d50919b50909950929650945050505050565b6001546001600160801b03168381108061170557507f00000000000000000000000000000000000000000000000000000000000000006117038583613528565b105b1561171257611712611388565b6003549084900390600f0b6117278482613462565b90508361173386611247565b13801561176857507f00000000000000000000000000000000000000000000000000000000000000006117668383612505565b105b1561177557611775611388565b600254600160801b90046001600160801b03166117b7611017826117a1670de0b6b3a76400008861357b565b6004546001600160801b031691908c60006122dd565b600480546001600160801b0319166001600160801b03929092169190911790556117e18882613528565b90506117ec81611979565b600280546001600160801b03928316600160801b02921691909117905561181283611979565b600180546001600160801b0319166001600160801b039290921691909117905561183b82612387565b600380546001600160801b0319166001600160801b039290921691909117905561186487611979565b60018054601090611886908490600160801b90046001600160801b031661355b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b604051637bce1f8160e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063f79c3f02906024015b602060405180830381865afa15801561191d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611241919061364c565b6001546003546000916105cc916001600160801b0390911690600f0b612505565b6000610081826119738588886123ee565b9061252b565b60006001600160801b0382111561127157604051630f0af95160e11b815260040160405180910390fd5b60008183116119b25782610b97565b50919050565b60055460009081906119db908490600160801b90046001600160801b0316611529565b6005546201000090046001600160701b03169250905081811115611b57576000611a058383613528565b9050611a1461101782866125a0565b60058054601090611a36908490600160801b90046001600160801b0316613592565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611a6f85836125b590919063ffffffff16565b90506000611a9d827f0000000000000000000000000000000000000000000000000000000000000000611529565b905080600b6000828254611ab1919061344f565b90915550611ac190508183613528565b9150611acc82611979565b60018054600090611ae79084906001600160801b031661355b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b14826125ca565b60038054600090611b29908490600f0b6135b2565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611b6987856125b5565b91506000611b97837f0000000000000000000000000000000000000000000000000000000000000000611529565b9050611bc3817f0000000000000000000000000000000000000000000000000000000000000000611529565b91508315611be657611bd58282613528565b611bdf9084613528565b9250611bfd565b611bf08282613528565b611bfa908461344f565b92505b86861015611c2057611c108387896123ee565b9250611c1d8287896123ee565b91505b509550959350505050565b600080611c4384611c3d8a888a6123ee565b906125b5565b9050611c508884866123ee565b611c5a908261344f565b905086811115611c6a5786810391505b509695505050505050565b60006001600160701b038211156112715760405163086b151760e11b815260040160405180910390fd5b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611cea916001600160801b031690613528565b905080600003611cfe576001915050611241565b6000611d09856125f4565b905080600003611d1e57600192505050611241565b600080611d2c838589612690565b9150915080611d42576000945050505050611241565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611d7e9291906136e3565b6040805180830381865af4158015611d9a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611dbe9190613759565b91509150611ddc611dce82611247565b611dd79061377d565b61280b565b925082611df25760009650505050505050611241565b611dfb82611979565b60068054600090611e169084906001600160801b031661355b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611e4381611979565b60068054601090611e65908490600160801b90046001600160801b031661355b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611ec2876129a1565b6040518263ffffffff1660e01b8152600401611ede9190613799565b6040805180830381865af4158015611efa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f1e91906137a8565b9150915080611f34575060009485945092505050565b6000808611611f44576000611f4e565b611f4e8387611529565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611fb9919061344f565b611fc39190613528565b905080600003611fdc5750600096879650945050505050565b6000611fe883836125b5565b98600198509650505050505050565b6000806120026105d1565b905080831161201257600061201c565b61201c8184613528565b9150610b97827f00000000000000000000000000000000000000000000000000000000000000006125b5565b6000808061206961206188670de0b6b3a7640000613528565b899087612adb565b905086156120ab5761207b88886123d9565b915061209c8a8a846120958a670de0b6b3a7640000613528565b8989612b01565b92506120a8838261344f565b90505b9750975097945050505050565b60006120d66120cf84670de0b6b3a7640000613528565b83906123d9565b610b9790670de0b6b3a7640000613528565b60008061211f856120f7611941565b612101919061344f565b600154610ec4908790600160801b90046001600160801b0316613528565b909210949350505050565b6000808080612181878661217a8b61217461214d8c670de0b6b3a7640000613528565b7f0000000000000000000000000000000000000000000000000000000000000000906123d9565b906123d9565b9190612adb565b93506121ad847f0000000000000000000000000000000000000000000000000000000000000000611529565b915060006121ce6121c689670de0b6b3a7640000613528565b8a9088612adb565b90506121fa817f00000000000000000000000000000000000000000000000000000000000000006123d9565b9350612226847f0000000000000000000000000000000000000000000000000000000000000000611529565b612230908461344f565b915050945094509450949050565b600080600080600080888810156122ad578615612263576122608d898b6123ee565b9c505b61226e8c898b6123ee565b9b506122798b611247565b6122828d611247565b61228c9190613462565b90506122998b898b6123ee565b9a506122a68a898b6123ee565b99506122cc565b6122b68b611247565b6122bf8d611247565b6122c99190613462565b90505b9b9c9a9b999a975050505050505050565b6000826000036122ee57508461237e565b81156123415761231f612301848761344f565b61230b8587611529565b612315888a611529565b611c3d919061344f565b9050600061232d85886119a3565b90508082101561233b578091505b5061237e565b8285036123505750600061237e565b61237b61235d8487613528565b61236785876123d9565b612371888a611529565b611c3d9190613528565b90505b95945050505050565b600060016001607f1b03198212806123a5575060016001607f1b0382135b156112715760405163a5353be560e01b815260040160405180910390fd5b60008183136123d25781610b97565b5090919050565b6000610b978383670de0b6b3a7640000612adb565b600082600019048411830215820261240557600080fd5b5091020490565b604051631e66865560e21b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063799a195490602401611900565b600060405163350b944160e11b815260040160405180910390fd5b6124ab6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486612b24565b50505050565b600080806124d26124ca88670de0b6b3a7640000613528565b8990876123ee565b905086156120ab576124e48888611529565b915061209c8a8a846124fe8a670de0b6b3a7640000613528565b8989612b76565b6000806125128484612b87565b90925090508061252457612524611388565b5092915050565b6000816000036125445750670de0b6b3a7640000611241565b8260000361255457506000611241565b600061255f83611247565b9050600061257461256f86611247565b612bc6565b905081810261258b670de0b6b3a7640000826137d8565b905061259681612dec565b9695505050505050565b6000610b9783670de0b6b3a764000084612adb565b6000610b9783670de0b6b3a7640000846123ee565b600060016001607f1b038211156112715760405163a5353be560e01b815260040160405180910390fd5b600254600090819061260f906001600160801b0316846125a0565b905061263b7f00000000000000000000000000000000000000000000000000000000000000008261344f565b6001546001600160801b031611156119b2576001547f0000000000000000000000000000000000000000000000000000000000000000906126869083906001600160801b0316613528565b610b979190613528565b612698613327565b6000806126a4846129a1565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016126df9190613799565b6040805180830381865af41580156126fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061271f91906137a8565b93509050826127345750600091506128039050565b600061275b61275684610160015185610140015161152990919063ffffffff16565b611247565b61277b6127568561012001518661010001516123d990919063ffffffff16565b6127859190613462565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af41580156128c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128e69190613806565b9350935093509350806129025750600098975050505050505050565b8684146129335761291284611979565b600180546001600160801b0319166001600160801b03929092169190911790555b8583146129645761294383612387565b600380546001600160801b0319166001600160801b03929092169190911790555b8482146129925761297482611979565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b6129a9613379565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191612aa19116612f81565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612ad392900416612f81565b905292915050565b6000826000190484118302158202612af257600080fd5b50910281810615159190040190565b600080612b12888888888888612ff7565b909250905080611c6a57611c6a611388565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526113239084906130d8565b600080612b12888888888888613140565b600080600083612b9686611247565b612ba09190613462565b90506000811215612bb8576000809250925050612bbf565b9150600190505b9250929050565b6000808213612be85760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612c6b9084901c611247565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213612e0757506000919050565b680755bf798b4a1bf1e58212612e30576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061259674029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611247565b600080670de0b6b3a7640000612f956105d1565b612f9f919061357b565b9050808311612faf576000612fb9565b612fb98184613528565b9150610b97612ff0670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061357b565b83906125b5565b60008060006130098989888888613200565b9050868810156130205760008092509250506130cd565b968690039661302f888761252b565b9750878110156130465760008092509250506130cd565b878103613054818688612adb565b9050670de0b6b3a764000081106130885761308161307a670de0b6b3a7640000896125a0565b829061252b565b90506130a0565b61309d61307a670de0b6b3a7640000896125b5565b90505b6130aa81866125a0565b9050898110156130c2576000809350935050506130cd565b899003925060019150505b965096945050505050565b60006130ed6001600160a01b0384168361322f565b90508051600014158015613112575080806020019051810190613110919061383c565b155b1561132357604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b60008060006131528989888888613200565b905061316286611973898b61344f565b9750878110156131795760008092509250506130cd565b878103613187818688612adb565b9050670de0b6b3a764000081106131b4576131ad61307a670de0b6b3a7640000896125a0565b90506131cc565b6131c961307a670de0b6b3a7640000896125b5565b90505b6131d681866125a0565b9050808a10156131ee576000809350935050506130cd565b90980398600198509650505050505050565b600061320c858561252b565b61322561321d86611973868b6123d9565b859085612adb565b61237b919061344f565b6060610b978383600084600080856001600160a01b031684866040516132559190613859565b60006040518083038185875af1925050503d8060008114613292576040519150601f19603f3d011682016040523d82523d6000602084013e613297565b606091505b50915091506125968683836060826132b7576132b2826132fe565b610b97565b81511580156132ce57506001600160a01b0384163b155b156132f757604051639996b31560e01b81526001600160a01b0385166004820152602401613137565b5080610b97565b80511561330e5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610120016040528061333b613379565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600080608085870312156133f057600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561341c57600080fd5b85016060818803121561342e57600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561124157611241613439565b818103600083128015838313168383128216171561252457612524613439565b60006020828403121561349457600080fd5b81356001600160a01b0381168114610b9757600080fd5b80151581146105b657600080fd5b6000602082840312156134cb57600080fd5b8135610b97816134ab565b80820182811260008312801582168215821617156134f6576134f6613439565b505092915050565b634e487b7160e01b600052601260045260246000fd5b600082613523576135236134fe565b500690565b8181038181111561124157611241613439565b6001600160701b0381811683821601908082111561252457612524613439565b6001600160801b0381811683821601908082111561252457612524613439565b808202811582820484141761124157611241613439565b6001600160801b0382811682821603908082111561252457612524613439565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561124157611241613439565b600081600f0b60016001607f1b031981036135fc576135fc613439565b60000392915050565b6000808335601e1984360301811261361c57600080fd5b83018035915067ffffffffffffffff82111561363757600080fd5b602001915036819003821315612bbf57600080fd5b60006020828403121561365e57600080fd5b5051919050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a0820190506136f7828551613665565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b6000806040838503121561376c57600080fd5b505080516020909101519092909150565b6000600160ff1b820161379257613792613439565b5060000390565b61018081016112418284613665565b600080604083850312156137bb57600080fd5b8251915060208301516137cd816134ab565b809150509250929050565b6000826137e7576137e76134fe565b600160ff1b82146000198414161561380157613801613439565b500590565b6000806000806080858703121561381c57600080fd5b845193506020850151925060408501519150606085015161342e816134ab565b60006020828403121561384e57600080fd5b8151610b97816134ab565b6000825160005b8181101561387a5760208186018101518583015201613860565b50600092019182525091905056fea26469706673582212205769d41bfc750593f7b73d68079d4de1c9139da94485a81dfaa9e77dd1b28efe64736f6c63430008140033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
    }
};
