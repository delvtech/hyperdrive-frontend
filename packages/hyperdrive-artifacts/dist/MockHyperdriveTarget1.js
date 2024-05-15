export const MockHyperdriveTarget1 = {
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
    bytecode: '0x6102606040523480156200001257600080fd5b5060405162003f5338038062003f538339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613abf620004946000396000505060005050600050506000818160af0152818161032b0152612e1801526000818161132f015281816116da0152818161173d015281816129f801528181612a3401528181612c310152612df201526000818161068101528181610d0701528181610ec6015281816115990152612dcc01526000611ae7015260008181611c0d015281816121f7015261227001526000818161090401528181610e5501528181611be10152612244015260008181610d4a01526121bd0152600081816106a201528181610ce501528181610ee7015281816115770152612e3e01526000818161083c01528181610dd50152818161163601528181612092015261335c0152600081816105d8015281816106d40152818161075b015281816107bc01526107f4015260005050600081816118cf0152818161191801528181612495015281816124de015281816125b9015281816126650152818161275101526127fd0152613abf6000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806329b23fc11461003b578063ded0623114610060575b600080fd5b61004e61004936600461360a565b610073565b60405190815260200160405180910390f35b61004e61006e36600461360a565b61008c565b60006100818585858561009a565b90505b949350505050565b600061008185858585610316565b60006100a4610556565b6100ad82610580565b7f00000000000000000000000000000000000000000000000000000000000000008410156100ee5760405163211ddda360e11b815260040160405180910390fd5b60006100f86105b9565b90508542101561011b5761011561010d6105d1565b826004610607565b50610129565b61012786826004610607565b505b61013e610137600288610b9e565b3387610bd3565b6000806000806000806101528b888e610cac565b95509550955095509550955060008c90508c4210156102125782600b600082825461017d919061367f565b90915550610195905061018e6105d1565b4284610f45565b6101a28c88878785611083565b60006101ad8e6111fd565b90506101cb6101bb8e611247565b6101c59083613692565b82611275565b6101d489611328565b6101e0576101e0611388565b60006101eb8a6113a1565b90508061020b57604051638bdf918d60e01b815260040160405180910390fd5b5050610229565b61021c86896113ae565b9550610227886113a1565b505b6000610236878a8d61148f565b90508b8110156102595760405163c972651760e01b815260040160405180910390fd5b8c86858b8e610269600288610b9e565b61027660208301836136b2565b6001600160a01b0316337fcb02fec44af7356703a283b87ccec63f4ea688efc67fee9cdc1834a93260c7308a8a876102b46040890160208a016136e9565b6102c88a6102c28d8f61367f565b90611529565b6040805195865260208601949094529284019190915215156060830152608082015260a081018a905260c00160405180910390a450939c505050505050505050505050506100846001600055565b6000610320610556565b61032982610580565b7f000000000000000000000000000000000000000000000000000000000000000084101561036a5760405163211ddda360e11b815260040160405180910390fd5b60006103746105b9565b90508542101561038f5761038961010d6105d1565b5061039d565b61039b86826004610607565b505b6103ab610137600188610b9e565b6000806000806000806103bf8b888e61153e565b95509550955095509550955060008c90508c4210156104725782600b60008282546103ea919061367f565b909155506103fb905061018e6105d1565b6104088c888787856116c3565b6000610413826111fd565b905061042b6104218e611247565b6101c59083613706565b61043489611328565b61044057610440611388565b600061044b8a6113a1565b90508061046b57604051638bdf918d60e01b815260040160405180910390fd5b5050610489565b61047c86896113ae565b9550610487886113a1565b505b6000610496878a8d61148f565b90508b8110156104b95760405163c972651760e01b815260040160405180910390fd5b8c898c6104c7600186610b9e565b6104d460208301836136b2565b6001600160a01b0316337fc0e1704f2ff88686bdc2a73d31e0dc4e054eddbdc3564af7a148229cf857b8028888876105126040890160208a016136e9565b60408051948552602085019390935291830152151560608201526080810188905260a00160405180910390a450919a50505050505050505050506100846001600055565b60026000540361057957604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b600061058f60208301836136b2565b6001600160a01b0316036105b65760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006105cc670de0b6b3a76400006118b4565b905090565b60006105fd7f000000000000000000000000000000000000000000000000000000000000000042613744565b6105cc9042613758565b600083815260076020526040812060018101546001600160801b031615158061062f57504285115b1561064857600101546001600160801b03169050610b97565b60008060006106556105d1565b90508088036106cd578692506106c661066c6119af565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119d0565b9150610789565b60006106f97f00000000000000000000000000000000000000000000000000000000000000008a61367f565b90505b8181036107145787935061071161066c6119af565b92505b6000818152600760205260409020600101546001600160801b031693508315610756576000818152600760205260409020546001600160801b03169250610787565b6107807f00000000000000000000000000000000000000000000000000000000000000008261367f565b90506106fc565b505b610792836119e7565b6001850180546001600160801b0319166001600160801b03929092169190911790556107e86107e17f00000000000000000000000000000000000000000000000000000000000000008a613758565b8984610f45565b610826886108206108197f00000000000000000000000000000000000000000000000000000000000000008361367f565b4290611a11565b84610f45565b61082f87611a26565b50600090506007816108617f00000000000000000000000000000000000000000000000000000000000000008c613758565b815260208101919091526040016000908120600101546001600160801b0316915061088d60028b610b9e565b6000818152600e60205260408120549192508b8b83156109d357600192506000806108bc86898d866000611bca565b9150915080600b60008282546108d2919061367f565b909155506108ee9050866000846108e881611247565b88611083565b6108f8818361367f565b915061092886838a8e877f0000000000000000000000000000000000000000000000000000000000000000611c99565b915061093c6109378385611529565b611ce3565b6005805460029061095d9084906201000090046001600160701b031661376b565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061098a826119e7565b600580546010906109ac908490600160801b90046001600160801b031661378b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006109e0600184610b9e565b6000818152600e60205260409020549091508015610aef5760019450600080610a0d838b8f886001611bca565b9150915080600b6000828254610a23919061367f565b90915550610a3f905083600084610a3981611247565b8a6116c3565b610a498183613758565b9150610a586109378387611529565b60058054600290610a799084906201000090046001600160701b031661376b565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610aa6826119e7565b60058054601090610ac8908490600160801b90046001600160801b031661378b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610b2757610b1b610b0187611247565b610b0a83611247565b610b149190613692565b6000611275565b610b25838f611d0d565b505b6000610b3284611f07565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999b5050505050505050505050505b9392505050565b60006001600160f81b03821115610bc85760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115610c1657604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290610c59908490613758565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600080600080600080600080610cc189612065565b9050610d2b610cce6119af565b600154600160801b90046001600160801b03168d847f00000000000000000000000000000000000000000000000000000000000000008f7f00000000000000000000000000000000000000000000000000000000000000006120b6565b90995096509150610d3d61066c6119af565b9250610d738289610d6e867f0000000000000000000000000000000000000000000000000000000000000000612126565b612156565b15610d8057610d80611388565b8a8a60008080610d9285878a87612198565b9b5091945092509050610da58184613758565b610daf908861367f565b9650610dbb828461367f565b610dc5908c61367f565b9a505050505050506000600760007f00000000000000000000000000000000000000000000000000000000000000008b610dff9190613758565b815260208101919091526040016000908120600101546001600160801b03169150428a11610e475760008a8152600760205260409020600101546001600160801b0316610e49565b8a5b9050610e798c8884848f7f0000000000000000000000000000000000000000000000000000000000000000611c99565b9750610e858588613758565b9650670de0b6b3a7640000610f0b84610e9c6119af565b610ea6919061367f565b600154610ec4908d90600160801b90046001600160801b0316613758565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119d0565b1115610f1957610f19611388565b610f2988888588868660006122ac565b939b509199509097509095505050505093975093979195509350565b600083815260076020526040902054600160801b90046001600160801b0316808303610f715750505050565b6000848152600760205260408120546001600160801b031690819003610fcb57610f9a836119e7565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055611049565b61101c611017670de0b6b3a7640000610fe48886613758565b610fee91906137ab565b85670de0b6b3a7640000611002878a613758565b61100c91906137ab565b85929190600161234b565b6119e7565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b611052846119e7565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b03166110cc611017826110af670de0b6b3a7640000866137ab565b600454600160801b90046001600160801b031691908a600061234b565b600480546001600160801b03928316600160801b0292169190911790556110f2866119e7565b6110fc90826137c2565b600380546001600160801b03928316600160801b029216919091179055611122846119e7565b6001805460009061113d9084906001600160801b031661378b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061116a836123f5565b6003805460009061117f908490600f0b6137e2565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506111af856119e7565b600180546010906111d1908490600160801b90046001600160801b03166137c2565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000611225600e6000611211600286610b9e565b815260200190815260200160002054611247565b611237600e6000611211600187610b9e565b6112419190613692565b92915050565b60006001600160ff1b038211156112715760405163396ea70160e11b815260040160405180910390fd5b5090565b600061129e6112848483612431565b61128f846000612431565b6112999190613692565b6123f5565b9050600081600f0b13156112f357600280548291906000906112ca9084906001600160801b031661378b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b1215611323576113088161380f565b600280546000906112ca9084906001600160801b03166137c2565b505050565b60006113547f000000000000000000000000000000000000000000000000000000000000000083612447565b60025461136a91906001600160801b031661367f565b600154611380906001600160801b031684611529565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000611241826004611d0d565b60008060006113bc84611a26565b909250905060006113cd8686611529565b9050818311156113e5576113e286838561245c565b95505b828110156113f75780830392506113fc565b600092505b61140583611ce3565b600580546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b90910416808710156114585786900361145c565b5060005b611465816119e7565b600580546001600160801b03928316600160801b0292169190911790555085935050505092915050565b60008061149c8585611529565b90506114a78161247a565b9450846000036114bb576000915050610b97565b6114cb60408401602085016136e9565b156114fa576114f3856114e160208601866136b2565b6114ee6040870187613835565b612563565b9150611521565b61151d8561150b60208601866136b2565b6115186040870187613835565b6126fd565b8491505b509392505050565b6000610b978383670de0b6b3a764000061245c565b60008060008060008060008061155389612065565b90506115bd6115606119af565b600154600160801b90046001600160801b03168d847f00000000000000000000000000000000000000000000000000000000000000008f7f0000000000000000000000000000000000000000000000000000000000000000612893565b90995097509150600080806115d361066c6119af565b95508c6115e28f868984612198565b9a5091955090935091506115f68385613758565b6116009087613758565b955061160c828561367f565b611616908c613758565b9a50611622888c61367f565b995050505050506116ad86868386600760007f00000000000000000000000000000000000000000000000000000000000000008f6116609190613758565b81526020810191909152604001600020600101546001600160801b0316428e116116a45760008e8152600760205260409020600101546001600160801b03166116a6565b8e5b60016122ac565b9a9e939d50919b50909950929650945050505050565b6001546001600160801b03168381108061170557507f00000000000000000000000000000000000000000000000000000000000000006117038583613758565b105b1561171257611712611388565b6003549084900390600f0b6117278482613692565b90508361173386611247565b13801561176857507f000000000000000000000000000000000000000000000000000000000000000061176683836128e7565b105b1561177557611775611388565b600254600160801b90046001600160801b03166117b7611017826117a1670de0b6b3a7640000886137ab565b6004546001600160801b031691908c600061234b565b600480546001600160801b0319166001600160801b03929092169190911790556117e18882613758565b90506117ec816119e7565b600280546001600160801b03928316600160801b029216919091179055611812836119e7565b600180546001600160801b0319166001600160801b039290921691909117905561183b826123f5565b600380546001600160801b0319166001600160801b0392909216919091179055611864876119e7565b60018054601090611886908490600160801b90046001600160801b031661378b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161190357504761198e565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611967573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061198b919061387c565b90505b60125460000361199f576000610b97565b601254610b97908490839061245c565b6001546003546000916105cc916001600160801b0390911690600f0b6128e7565b6000610081826119e185888861245c565b9061290d565b60006001600160801b0382111561127157604051630f0af95160e11b815260040160405180910390fd5b6000818311611a205782610b97565b50919050565b6005546000908190611a49908490600160801b90046001600160801b0316611529565b6005546201000090046001600160701b03169250905081811115611bc5576000611a738383613758565b9050611a826110178286612982565b60058054601090611aa4908490600160801b90046001600160801b03166137c2565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611add858361299790919063ffffffff16565b90506000611b0b827f0000000000000000000000000000000000000000000000000000000000000000611529565b905080600b6000828254611b1f919061367f565b90915550611b2f90508183613758565b9150611b3a826119e7565b60018054600090611b559084906001600160801b031661378b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b82826129ac565b60038054600090611b97908490600f0b6137e2565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611bd78785612997565b91506000611c05837f0000000000000000000000000000000000000000000000000000000000000000611529565b9050611c31817f0000000000000000000000000000000000000000000000000000000000000000611529565b91508315611c5457611c438282613758565b611c4d9084613758565b9250611c6b565b611c5e8282613758565b611c68908461367f565b92505b86861015611c8e57611c7e83878961245c565b9250611c8b82878961245c565b91505b509550959350505050565b600080611cb184611cab8a888a61245c565b90612997565b9050611cbe88848661245c565b611cc8908261367f565b905086811115611cd85786810391505b509695505050505050565b60006001600160701b038211156112715760405163086b151760e11b815260040160405180910390fd5b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611d58916001600160801b031690613758565b905080600003611d6c576001915050611241565b6000611d77856129d6565b905080600003611d8c57600192505050611241565b600080611d9a838589612a72565b9150915080611db0576000945050505050611241565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611dec929190613913565b6040805180830381865af4158015611e08573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e2c9190613989565b91509150611e4a611e3c82611247565b611e45906139ad565b612bed565b925082611e605760009650505050505050611241565b611e69826119e7565b60068054600090611e849084906001600160801b031661378b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611eb1816119e7565b60068054601090611ed3908490600160801b90046001600160801b031661378b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611f3087612d83565b6040518263ffffffff1660e01b8152600401611f4c91906139c9565b6040805180830381865af4158015611f68573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f8c91906139d8565b9150915080611fa2575060009485945092505050565b6000808611611fb2576000611fbc565b611fbc8387611529565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691612027919061367f565b6120319190613758565b90508060000361204a5750600096879650945050505050565b60006120568383612997565b98600198509650505050505050565b6000806120706105d1565b905080831161208057600061208a565b61208a8184613758565b9150610b97827f0000000000000000000000000000000000000000000000000000000000000000612997565b600080806120d76120cf88670de0b6b3a7640000613758565b899087612ebd565b90508615612119576120e98888612447565b915061210a8a8a846121038a670de0b6b3a7640000613758565b8989612ee3565b9250612116838261367f565b90505b9750975097945050505050565b600061214461213d84670de0b6b3a7640000613758565b8390612447565b610b9790670de0b6b3a7640000613758565b60008061218d856121656119af565b61216f919061367f565b600154610ec4908790600160801b90046001600160801b0316613758565b909210949350505050565b60008080806121ef87866121e88b6121e26121bb8c670de0b6b3a7640000613758565b7f000000000000000000000000000000000000000000000000000000000000000090612447565b90612447565b9190612ebd565b935061221b847f0000000000000000000000000000000000000000000000000000000000000000611529565b9150600061223c61223489670de0b6b3a7640000613758565b8a9088612ebd565b9050612268817f0000000000000000000000000000000000000000000000000000000000000000612447565b9350612294847f0000000000000000000000000000000000000000000000000000000000000000611529565b61229e908461367f565b915050945094509450949050565b6000806000806000808888101561231b5786156122d1576122ce8d898b61245c565b9c505b6122dc8c898b61245c565b9b506122e78b611247565b6122f08d611247565b6122fa9190613692565b90506123078b898b61245c565b9a506123148a898b61245c565b995061233a565b6123248b611247565b61232d8d611247565b6123379190613692565b90505b9b9c9a9b999a975050505050505050565b60008260000361235c5750846123ec565b81156123af5761238d61236f848761367f565b6123798587611529565b612383888a611529565b611cab919061367f565b9050600061239b8588611a11565b9050808210156123a9578091505b506123ec565b8285036123be575060006123ec565b6123e96123cb8487613758565b6123d58587612447565b6123df888a611529565b611cab9190613758565b90505b95945050505050565b600060016001607f1b0319821280612413575060016001607f1b0382135b156112715760405163a5353be560e01b815260040160405180910390fd5b60008183136124405781610b97565b5090919050565b6000610b978383670de0b6b3a7640000612ebd565b600082600019048411830215820261247357600080fd5b5091020490565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016124c9575047612554565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561252d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612551919061387c565b90505b601254610b979084908361245c565b600060125485116125745784612578565b6012545b94506000612585866118b4565b905085601260008282546125999190613758565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161263f576040516001600160a01b038716908390600081818185875af1925050503d806000811461262f576040519150601f19603f3d011682016040523d82523d6000602084013e612634565b606091505b5050809150506126d5565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156126ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126d29190613a08565b90505b806126f3576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b601254841161270c5783612710565b6012545b9350600061271d856118b4565b905084601260008282546127319190613758565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016127d7576040516001600160a01b038616908390600081818185875af1925050503d80600081146127c7576040519150601f19603f3d011682016040523d82523d6000602084013e6127cc565b606091505b50508091505061286d565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015612846573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061286a9190613a08565b90505b8061288b576040516312171d8360e31b815260040160405180910390fd5b505050505050565b600080806128b46128ac88670de0b6b3a7640000613758565b89908761245c565b90508615612119576128c68888611529565b915061210a8a8a846128e08a670de0b6b3a7640000613758565b8989612f06565b6000806128f48484612f17565b90925090508061290657612906611388565b5092915050565b6000816000036129265750670de0b6b3a7640000611241565b8260000361293657506000611241565b600061294183611247565b9050600061295661295186611247565b612f56565b905081810261296d670de0b6b3a764000082613a25565b90506129788161317c565b9695505050505050565b6000610b9783670de0b6b3a764000084612ebd565b6000610b9783670de0b6b3a76400008461245c565b600060016001607f1b038211156112715760405163a5353be560e01b815260040160405180910390fd5b60025460009081906129f1906001600160801b031684612982565b9050612a1d7f00000000000000000000000000000000000000000000000000000000000000008261367f565b6001546001600160801b03161115611a20576001547f000000000000000000000000000000000000000000000000000000000000000090612a689083906001600160801b0316613758565b610b979190613758565b612a7a613557565b600080612a8684612d83565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612ac191906139c9565b6040805180830381865af4158015612add573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b0191906139d8565b9350905082612b16575060009150612be59050565b6000612b3d612b3884610160015185610140015161152990919063ffffffff16565b611247565b612b5d612b3885610120015186610100015161244790919063ffffffff16565b612b679190613692565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612ca4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612cc89190613a53565b935093509350935080612ce45750600098975050505050505050565b868414612d1557612cf4846119e7565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612d4657612d25836123f5565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612d7457612d56826119e7565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612d8b6135a9565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191612e839116613311565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612eb592900416613311565b905292915050565b6000826000190484118302158202612ed457600080fd5b50910281810615159190040190565b600080612ef4888888888888613387565b909250905080611cd857611cd8611388565b600080612ef4888888888888613468565b600080600083612f2686611247565b612f309190613692565b90506000811215612f48576000809250925050612f4f565b9150600190505b9250929050565b6000808213612f785760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612ffb9084901c611247565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361319757506000919050565b680755bf798b4a1bf1e582126131c0576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061297874029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611247565b600080670de0b6b3a76400006133256105d1565b61332f91906137ab565b905080831161333f576000613349565b6133498184613758565b9150610b97613380670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006137ab565b8390612997565b60008060006133998989888888613528565b9050868810156133b057600080925092505061345d565b96869003966133bf888761290d565b9750878110156133d657600080925092505061345d565b8781036133e4818688612ebd565b9050670de0b6b3a764000081106134185761341161340a670de0b6b3a764000089612982565b829061290d565b9050613430565b61342d61340a670de0b6b3a764000089612997565b90505b61343a8186612982565b9050898110156134525760008093509350505061345d565b899003925060019150505b965096945050505050565b600080600061347a8989888888613528565b905061348a866119e1898b61367f565b9750878110156134a157600080925092505061345d565b8781036134af818688612ebd565b9050670de0b6b3a764000081106134dc576134d561340a670de0b6b3a764000089612982565b90506134f4565b6134f161340a670de0b6b3a764000089612997565b90505b6134fe8186612982565b9050808a10156135165760008093509350505061345d565b90980398600198509650505050505050565b6000613534858561290d565b61354d613545866119e1868b612447565b859085612ebd565b6123e9919061367f565b60405180610120016040528061356b6135a9565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561362057600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561364c57600080fd5b85016060818803121561365e57600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561124157611241613669565b818103600083128015838313168383128216171561290657612906613669565b6000602082840312156136c457600080fd5b81356001600160a01b0381168114610b9757600080fd5b80151581146105b657600080fd5b6000602082840312156136fb57600080fd5b8135610b97816136db565b808201828112600083128015821682158216171561372657613726613669565b505092915050565b634e487b7160e01b600052601260045260246000fd5b6000826137535761375361372e565b500690565b8181038181111561124157611241613669565b6001600160701b0381811683821601908082111561290657612906613669565b6001600160801b0381811683821601908082111561290657612906613669565b808202811582820484141761124157611241613669565b6001600160801b0382811682821603908082111561290657612906613669565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561124157611241613669565b600081600f0b60016001607f1b0319810361382c5761382c613669565b60000392915050565b6000808335601e1984360301811261384c57600080fd5b83018035915067ffffffffffffffff82111561386757600080fd5b602001915036819003821315612f4f57600080fd5b60006020828403121561388e57600080fd5b5051919050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613927828551613895565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b6000806040838503121561399c57600080fd5b505080516020909101519092909150565b6000600160ff1b82016139c2576139c2613669565b5060000390565b61018081016112418284613895565b600080604083850312156139eb57600080fd5b8251915060208301516139fd816136db565b809150509250929050565b600060208284031215613a1a57600080fd5b8151610b97816136db565b600082613a3457613a3461372e565b600160ff1b821460001984141615613a4e57613a4e613669565b500590565b60008060008060808587031215613a6957600080fd5b845193506020850151925060408501519150606085015161365e816136db56fea26469706673582212206bcbbece994c7b7b770849e687d21aff88fb03dc29991551733af9d583c43e5164736f6c63430008140033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
    }
};
