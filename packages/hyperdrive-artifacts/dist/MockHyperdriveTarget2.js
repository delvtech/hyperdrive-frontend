export const MockHyperdriveTarget2 = {
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
            "inputs": [],
            "name": "TransferFailed",
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
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_bondAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_maxDeposit",
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
            "name": "openShort",
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
    bytecode: '0x6102606040523480156200001257600080fd5b5060405162004184380380620041848339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613cb7620004cd6000396000505060005050600050506000818161010001528181610311015261304e0152600081816113be01528181611ece01528181611f310152818161271a01528181612c3501528181612c7101528181612e6701526130280152600081816107ae01528181610d1401528181610e200152818161128f0152818161176a015281816117fd015261300201526000611aed015260008181611c13015281816125f90152818161290a0152612983015260008181610a3101528181610d730152818161133101528181611be70152612957015260008181610d52015281816125b501526128d60152600081816107cf01528181610cf201528181610e410152818161126d01526130740152600081816101dc015281816103a70152818161096901526136320152600081816107000152818161080101528181610888015281816108e901526109210152600050506000818161055f01528181611568015281816115b101528181611643015281816116c40152818161186b015281816118ec0152818161279b015281816127e401528181612a500152612a990152613cb76000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c366004613802565b61006d565b6040805192835260208301919091520160405180910390f35b610041610068366004613802565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102ca565b6000806100a4610533565b600554610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d561055d565b6100de836105c9565b6000806100eb8886610602565b909250905060006100fc83836106db565b90507f000000000000000000000000000000000000000000000000000000000000000081101561013f5760405163211ddda360e11b815260040160405180910390fd5b86821015610160576040516342af972b60e01b815260040160405180910390fd5b600061016a6106f9565b905061017881846004610734565b5060008060006101888787610ccb565b919a5091945090925090508b8810156101b45760405163c972651760e01b815260040160405180910390fd5b81600b60008282546101c69190613877565b909155506101d79050844283610e7e565b6102017f000000000000000000000000000000000000000000000000000000000000000085613877565b985061020f8389888c610fbc565b600061021c60018b611156565b90506102358161022f60208e018e61388a565b8b61118b565b8d8a8a898e85610248602083018361388a565b6001600160a01b03167f88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c86888661028560408801602089016138c1565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a350909b5050505050505050505050506100816001600055565b6000806102d5610533565b600554610100900460ff16156102fe576040516321081abf60e01b815260040160405180910390fd5b61030661055d565b61030f836105c9565b7f00000000000000000000000000000000000000000000000000000000000000008610156103505760405163211ddda360e11b815260040160405180910390fd5b600061035a611233565b90508481101561037d576040516342af972b60e01b815260040160405180910390fd5b60006103876106f9565b9050600061039e6103966106f9565b846004610734565b905060006103cc7f000000000000000000000000000000000000000000000000000000000000000084613877565b90506000806000806103df8e8988611246565b600b8054949850929650909450925083916000906103fe908490613877565b9091555061040f9050874283610e7e565b50600061041d84898d611369565b9050808d10156104405760405163c972651760e01b815260040160405180910390fd5b61044a818c610602565b508e905061045a81858b89611398565b6000610467600288611156565b90508c6104818261047b602084018461388a565b8561118b565b858b8684610492602086018661388a565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8d8a866104cf60408b0160208c016138c1565b6104e3896104dd8a8d6138de565b906106db565b6040805195865260208601949094529284019190915215156060830152608082015260a081018a905260c00160405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361055657604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee148015906105a957503415155b156105c757604051631574f9f360e01b815260040160405180910390fd5b565b60006105d8602083018361388a565b6001600160a01b0316036105ff5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000808061061660408501602086016138c1565b1561063b576106318561062c60408701876138f1565b61154c565b9093509050610657565b50346106538561064e60408701876138f1565b6117e0565b8492505b61065f611233565b915080156106d257604051600090339083908381818185875af1925050503d80600081146106a9576040519150601f19603f3d011682016040523d82523d6000602084013e6106ae565b606091505b50509050806106d0576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106f08383670de0b6b3a764000061198a565b90505b92915050565b60006107257f00000000000000000000000000000000000000000000000000000000000000004261394e565b61072f90426138de565b905090565b600083815260076020526040812060018101546001600160801b031615158061075c57504285115b1561077557600101546001600160801b03169050610cc4565b60008060006107826106f9565b90508088036107fa578692506107f36107996119a8565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119c9565b91506108b6565b60006108267f00000000000000000000000000000000000000000000000000000000000000008a613877565b90505b8181036108415787935061083e6107996119a8565b92505b6000818152600760205260409020600101546001600160801b031693508315610883576000818152600760205260409020546001600160801b031692506108b4565b6108ad7f000000000000000000000000000000000000000000000000000000000000000082613877565b9050610829565b505b6108bf836119e9565b6001850180546001600160801b0319166001600160801b039290921691909117905561091561090e7f00000000000000000000000000000000000000000000000000000000000000008a6138de565b8984610e7e565b6109538861094d6109467f000000000000000000000000000000000000000000000000000000000000000083613877565b4290611a17565b84610e7e565b61095c87611a2c565b506000905060078161098e7f00000000000000000000000000000000000000000000000000000000000000008c6138de565b815260208101919091526040016000908120600101546001600160801b031691506109ba60028b611156565b6000818152600e60205260408120549192508b8b8315610b0057600192506000806109e986898d866000611bd0565b9150915080600b60008282546109ff9190613877565b90915550610a1b905086600084610a1581611c9f565b88611cc9565b610a258183613877565b9150610a5586838a8e877f0000000000000000000000000000000000000000000000000000000000000000611e43565b9150610a69610a6483856106db565b611e8d565b60058054600290610a8a9084906201000090046001600160701b0316613962565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610ab7826119e9565b60058054601090610ad9908490600160801b90046001600160801b0316613982565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610b0d600184611156565b6000818152600e60205260409020549091508015610c1c5760019450600080610b3a838b8f886001611bd0565b9150915080600b6000828254610b509190613877565b90915550610b6c905083600084610b6681611c9f565b8a611eb7565b610b7681836138de565b9150610b85610a6483876106db565b60058054600290610ba69084906201000090046001600160701b0316613962565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610bd3826119e9565b60058054601090610bf5908490600160801b90046001600160801b0316613982565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610c5457610c48610c2e87611c9f565b610c3783611c9f565b610c4191906139a2565b60006120a8565b610c52838f61215b565b505b6000610c5f84612355565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999b5050505050505050505050505b9392505050565b600080600080610d38610cdc6119a8565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000006124b3565b9250610d456107996119a8565b9050610d9c8684610d97847f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006124df565b61254c565b15610da957610da961258e565b600080610db78884896125a7565b9092509050610dc682866138de565b9450610dd381848961198a565b9350610ddf84896138de565b9550670de0b6b3a7640000610e6587610df66119a8565b610e009190613877565b600154610e1e908990600160801b90046001600160801b03166138de565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119c9565b1115610e7357610e7361258e565b505092959194509250565b600083815260076020526040902054600160801b90046001600160801b0316808303610eaa5750505050565b6000848152600760205260408120546001600160801b031690819003610f0457610ed3836119e9565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055610f82565b610f55610f50670de0b6b3a7640000610f1d88866138de565b610f2791906139c2565b85670de0b6b3a7640000610f3b878a6138de565b610f4591906139c2565b859291906001612627565b6119e9565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b610f8b846119e9565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600254600160801b90046001600160801b0316610ffe610f5082610fe8670de0b6b3a7640000866139c2565b6004546001600160801b03169190886001612627565b600480546001600160801b0319166001600160801b0392909216919091179055611027856119e9565b600180546000906110429084906001600160801b0316613982565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061106f846119e9565b60018054601090611091908490600160801b90046001600160801b03166139d9565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110be846119e9565b6110c89082613982565b600280546001600160801b03808416600160801b029116179055905060006110ef836126cf565b905061110d816110fe87611c9f565b61110890846139f9565b6120a8565b61111684612713565b6111225761112261258e565b600061112d85612773565b90508061114d57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156111805760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b0386168452909152812080548392906111bd908490613877565b90915550506000838152600e6020526040812080548392906111e0908490613877565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600061072f670de0b6b3a7640000612780565b6000806000806112b36112576119a8565b600154600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f000000000000000000000000000000000000000000000000000000000000000061287b565b9250866112c0848861289c565b11156112ce576112ce61258e565b6000806112dc6107996119a8565b92506112f289670de0b6b3a7640000858b6128b1565b50919350909150611305905081836138de565b61130f90866138de565b945061135b886113558b611323858a6138de565b8b61132e8e826129bf565b8e7f00000000000000000000000000000000000000000000000000000000000000006129d5565b9061289c565b955092505093509350935093565b600061137b60408301602084016138c1565b15611387575082610cc4565b61139184846129fa565b9050610cc4565b6001546001600160801b0316838110156113b4576113b461258e565b60035490849003907f0000000000000000000000000000000000000000000000000000000000000000906113ec908390600f0b612a0f565b10156113fa576113fa61258e565b60035461144490610f5090600160801b90046001600160801b0316611427670de0b6b3a7640000866139c2565b600454600160801b90046001600160801b03169190896001612627565b600480546001600160801b03928316600160801b02921691909117905561146a816119e9565b600180546001600160801b0319166001600160801b0392909216919091179055611493856119e9565b600180546010906114b5908490600160801b90046001600160801b0316613982565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506114e2856119e9565b60038054601090611504908490600160801b90046001600160801b0316613982565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611533836126cf565b905061110d8161154288611c9f565b61110890846139a2565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161159c575047611627565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611600573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116249190613a21565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016116a25787341015611691576040516312171d8360e31b815260040160405180910390fd5b61169b88346138de565b905061173c565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611715573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117399190613a3a565b91505b8161175a576040516312171d8360e31b815260040160405180910390fd5b60125460000361179f5761178e887f00000000000000000000000000000000000000000000000000000000000000006129fa565b6012819055945092506117d8915050565b6012546000906117b1908a908661198a565b905080601260008282546117c59190613877565b909155509095509093506117d892505050565b935093915050565b60006117eb84612780565b905060125460000361182957611821817f00000000000000000000000000000000000000000000000000000000000000006129fa565b60125561184f565b600061183482612a35565b905080601260008282546118489190613877565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016118ca57823410156118b9576040516312171d8360e31b815260040160405180910390fd5b6118c383346138de565b9050611964565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af115801561193d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119619190613a3a565b91505b81611982576040516312171d8360e31b815260040160405180910390fd5b505050505050565b60008260001904841183021582026119a157600080fd5b5091020490565b60015460035460009161072f916001600160801b0390911690600f0b612a0f565b60006119e0826119da85888861198a565b90612b1e565b95945050505050565b60006001600160801b03821115611a1357604051630f0af95160e11b815260040160405180910390fd5b5090565b6000818311611a2657826106f0565b50919050565b6005546000908190611a4f908490600160801b90046001600160801b03166106db565b6005546201000090046001600160701b03169250905081811115611bcb576000611a7983836138de565b9050611a88610f508286612b89565b60058054601090611aaa908490600160801b90046001600160801b03166139d9565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611ae385836129fa90919063ffffffff16565b90506000611b11827f00000000000000000000000000000000000000000000000000000000000000006106db565b905080600b6000828254611b259190613877565b90915550611b35905081836138de565b9150611b40826119e9565b60018054600090611b5b9084906001600160801b0316613982565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b8882612b9e565b60038054600090611b9d908490600f0b613a57565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611bdd87856129fa565b91506000611c0b837f00000000000000000000000000000000000000000000000000000000000000006106db565b9050611c37817f00000000000000000000000000000000000000000000000000000000000000006106db565b91508315611c5a57611c4982826138de565b611c5390846138de565b9250611c71565b611c6482826138de565b611c6e9084613877565b92505b86861015611c9457611c8483878961198a565b9250611c9182878961198a565b91505b509550959350505050565b60006001600160ff1b03821115611a135760405163396ea70160e11b815260040160405180910390fd5b600354600160801b90046001600160801b0316611d12610f5082611cf5670de0b6b3a7640000866139c2565b600454600160801b90046001600160801b031691908a6000612627565b600480546001600160801b03928316600160801b029216919091179055611d38866119e9565b611d4290826139d9565b600380546001600160801b03928316600160801b029216919091179055611d68846119e9565b60018054600090611d839084906001600160801b0316613982565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611db083612bc8565b60038054600090611dc5908490600f0b613a57565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611df5856119e9565b60018054601090611e17908490600160801b90046001600160801b03166139d9565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611e5b84611e558a888a61198a565b906129fa565b9050611e6888848661198a565b611e729082613877565b905086811115611e825786810391505b509695505050505050565b60006001600160701b03821115611a135760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611ef957507f0000000000000000000000000000000000000000000000000000000000000000611ef785836138de565b105b15611f0657611f0661258e565b6003549084900390600f0b611f1b84826139a2565b905083611f2786611c9f565b138015611f5c57507f0000000000000000000000000000000000000000000000000000000000000000611f5a8383612a0f565b105b15611f6957611f6961258e565b600254600160801b90046001600160801b0316611fab610f5082611f95670de0b6b3a7640000886139c2565b6004546001600160801b031691908c6000612627565b600480546001600160801b0319166001600160801b0392909216919091179055611fd588826138de565b9050611fe0816119e9565b600280546001600160801b03928316600160801b029216919091179055612006836119e9565b600180546001600160801b0319166001600160801b039290921691909117905561202f82612bc8565b600380546001600160801b0319166001600160801b0392909216919091179055612058876119e9565b6001805460109061207a908490600160801b90046001600160801b0316613982565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006120d16120b78483612c04565b6120c2846000612c04565b6120cc91906139a2565b612bc8565b9050600081600f0b131561212657600280548291906000906120fd9084906001600160801b0316613982565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156121565761213b81613a84565b600280546000906120fd9084906001600160801b03166139d9565b505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909182916121a6916001600160801b0316906138de565b9050806000036121ba5760019150506106f3565b60006121c585612c13565b9050806000036121da576001925050506106f3565b6000806121e8838589612caf565b91509150806121fe5760009450505050506106f3565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b815260040161223a929190613b28565b6040805180830381865af4158015612256573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061227a9190613b9e565b9150915061229861228a82611c9f565b61229390613bc2565b612e23565b9250826122ae57600096505050505050506106f3565b6122b7826119e9565b600680546000906122d29084906001600160801b0316613982565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506122ff816119e9565b60068054601090612321908490600160801b90046001600160801b0316613982565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61237e87612fb9565b6040518263ffffffff1660e01b815260040161239a9190613bde565b6040805180830381865af41580156123b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123da9190613bed565b91509150806123f0575060009485945092505050565b600080861161240057600061240a565b61240a83876106db565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916124759190613877565b61247f91906138de565b9050806000036124985750600096879650945050505050565b60006124a483836129fa565b98600198509650505050505050565b60006124d48787876124cd88670de0b6b3a76400006138de565b87876130f3565b979650505050505050565b60006125446125206124f984670de0b6b3a76400006138de565b611355670de0b6b3a764000061250f818a612b89565b61251991906138de565b879061289c565b61253290670de0b6b3a7640000613877565b611e5584670de0b6b3a76400006138de565b949350505050565b6000806125838561255b6119a8565b6125659190613877565b600154610e1e908790600160801b90046001600160801b03166138de565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000806125f18561135585817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006125e7818c612b89565b61135591906138de565b915061261d827f00000000000000000000000000000000000000000000000000000000000000006106db565b9050935093915050565b6000826000036126385750846119e0565b811561268b5761266961264b8487613877565b61265585876106db565b61265f888a6106db565b611e559190613877565b905060006126778588611a17565b905080821015612685578091505b506119e0565b82850361269a575060006119e0565b6126c56126a784876138de565b6126b1858761289c565b6126bb888a6106db565b611e5591906138de565b9695505050505050565b60006126f7600e60006126e3600286611156565b815260200190815260200160002054611c9f565b612709600e60006126e3600187611156565b6106f391906139a2565b600061273f7f00000000000000000000000000000000000000000000000000000000000000008361289c565b60025461275591906001600160801b0316613877565b60015461276b906001600160801b0316846106db565b101592915050565b60006106f382600461215b565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016127cf57504761285a565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612833573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128579190613a21565b90505b60125460000361286b576000610cc4565b601254610cc4908490839061198a565b60006124d487878761289588670de0b6b3a76400006138de565b87876131a7565b60006106f08383670de0b6b3a76400006131ca565b600080808061290287866128fb8b6113556128d48c670de0b6b3a76400006138de565b7f00000000000000000000000000000000000000000000000000000000000000009061289c565b91906131ca565b935061292e847f00000000000000000000000000000000000000000000000000000000000000006106db565b9150600061294f61294789670de0b6b3a76400006138de565b8a90886131ca565b905061297b817f000000000000000000000000000000000000000000000000000000000000000061289c565b93506129a7847f00000000000000000000000000000000000000000000000000000000000000006106db565b6129b19084613877565b915050945094509450949050565b60008183116129ce57816106f0565b5090919050565b6000806129ed846129e78a888a6131ca565b90612b89565b9050611e688884866131ca565b60006106f083670de0b6b3a76400008461198a565b600080612a1c84846131f0565b909250905080612a2e57612a2e61258e565b5092915050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612a84575047612b0f565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612ae8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b0c9190613a21565b90505b601254610cc49084908361198a565b600081600003612b375750670de0b6b3a76400006106f3565b82600003612b47575060006106f3565b6000612b5283611c9f565b90506000612b67612b6286611c9f565b61322c565b9050818102612b7e670de0b6b3a764000082613c1d565b90506126c581613452565b60006106f083670de0b6b3a7640000846131ca565b600060016001607f1b03821115611a135760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612be6575060016001607f1b0382135b15611a135760405163a5353be560e01b815260040160405180910390fd5b60008183136129ce57816106f0565b6002546000908190612c2e906001600160801b031684612b89565b9050612c5a7f000000000000000000000000000000000000000000000000000000000000000082613877565b6001546001600160801b03161115611a26576001547f000000000000000000000000000000000000000000000000000000000000000090612ca59083906001600160801b03166138de565b610cc491906138de565b612cb761374f565b600080612cc384612fb9565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612cfe9190613bde565b6040805180830381865af4158015612d1a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d3e9190613bed565b9350905082612d535750600091506117d89050565b6000612d7a612d758461016001518561014001516106db90919063ffffffff16565b611c9f565b612d9a612d7585610120015186610100015161289c90919063ffffffff16565b612da491906139a2565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612eda573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612efe9190613c4b565b935093509350935080612f1a5750600098975050505050505050565b868414612f4b57612f2a846119e9565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612f7c57612f5b83612bc8565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612faa57612f8c826119e9565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612fc16137a1565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916130b991166135e7565b81526003546001600160801b03600160801b91829004811660208401526004546040909301926130eb929004166135e7565b905292915050565b600080613103888887878761365d565b905061311d856119da613116898c613877565b86906106db565b975061312a84898561198a565b97508781101561313c5761313c61258e565b878103670de0b6b3a764000081106131715761316a613163670de0b6b3a764000088612b89565b8290612b1e565b9050613189565b613186613163670de0b6b3a7640000886129fa565b90505b808810156131995761319961258e565b909603979650505050505050565b6000806131b888888888888861368c565b909250905080611e8257611e8261258e565b60008260001904841183021582026131e157600080fd5b50910281810615159190040190565b6000806000836131ff86611c9f565b61320991906139a2565b905060008112156132215760008092509250506106d4565b946001945092505050565b600080821361324e5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906132d19084901c611c9f565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361346d57506000919050565b680755bf798b4a1bf1e58212613496576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906126c574029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611c9f565b600080670de0b6b3a76400006135fb6106f9565b61360591906139c2565b905080831161361557600061361f565b61361f81846138de565b9150610cc4613656670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006139c2565b83906129fa565b60006136698585612b1e565b61368261367a866119da868b61289c565b8590856131ca565b6126c59190613877565b600080600061369e898988888861365d565b90506136ae866119da898b613877565b9750878110156136c5576000809250925050613744565b8781036136d38186886131ca565b9050670de0b6b3a76400008110613700576136f9613163670de0b6b3a764000089612b89565b9050613718565b613715613163670de0b6b3a7640000896129fa565b90505b6137228186612b89565b9050808a101561373a57600080935093505050613744565b8903925060019150505b965096945050505050565b6040518061012001604052806137636137a1565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561381857600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561384457600080fd5b85016060818803121561385657600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156106f3576106f3613861565b60006020828403121561389c57600080fd5b81356001600160a01b0381168114610cc457600080fd5b80151581146105ff57600080fd5b6000602082840312156138d357600080fd5b8135610cc4816138b3565b818103818111156106f3576106f3613861565b6000808335601e1984360301811261390857600080fd5b83018035915067ffffffffffffffff82111561392357600080fd5b6020019150368190038213156106d457600080fd5b634e487b7160e01b600052601260045260246000fd5b60008261395d5761395d613938565b500690565b6001600160701b03818116838216019080821115612a2e57612a2e613861565b6001600160801b03818116838216019080821115612a2e57612a2e613861565b8181036000831280158383131683831282161715612a2e57612a2e613861565b80820281158282048414176106f3576106f3613861565b6001600160801b03828116828216039080821115612a2e57612a2e613861565b8082018281126000831280158216821582161715613a1957613a19613861565b505092915050565b600060208284031215613a3357600080fd5b5051919050565b600060208284031215613a4c57600080fd5b8151610cc4816138b3565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156106f3576106f3613861565b600081600f0b60016001607f1b03198103613aa157613aa1613861565b60000392915050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613b3c828551613aaa565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613bb157600080fd5b505080516020909101519092909150565b6000600160ff1b8201613bd757613bd7613861565b5060000390565b61018081016106f38284613aaa565b60008060408385031215613c0057600080fd5b825191506020830151613c12816138b3565b809150509250929050565b600082613c2c57613c2c613938565b600160ff1b821460001984141615613c4657613c46613861565b500590565b60008060008060808587031215613c6157600080fd5b8451935060208501519250604085015191506060850151613856816138b356fea2646970667358221220b0616b5dd78cb0ec6a4de89eac362d6f2a229fd43550e43ce4551c8e9f10627f64736f6c63430008140033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
