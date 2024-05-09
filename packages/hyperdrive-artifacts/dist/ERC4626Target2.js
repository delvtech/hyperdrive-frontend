export const ERC4626Target2 = {
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
    bytecode: '0x6102606040523480156200001257600080fd5b506040516200407c3803806200407c8339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613be46200049860003960005050600050506000505060008181610100015281816103250152612d490152600081816113e101528181611c2901528181611c8c01528181612470015281816129300152818161296c01528181612b620152612d2301526000818161078101528181610ce701528181610df3015281816112b90152612cfd0152600061184801526000818161196e0152818161234f01528181612606015261267f015260008181610a0401528181610d460152818161135b015281816119420152612653015260008181610d250152818161230b01526125d20152600081816107a201528181610cc501528181610e14015281816112970152612d6f0152600081816101dc015281816103bb0152818161093c01526134380152600081816106d3015281816107d40152818161085b015281816108bc01526108f40152600081816115ac01528181611626015281816116b8015261250401526000818161157f01526115e00152613be46000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c366004613700565b61006d565b6040805192835260208301919091520160405180910390f35b610041610068366004613700565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102de565b6000806100a4610551565b600554610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d561057b565b6100de8361059c565b6000806100eb88866105d5565b909250905060006100fc83836106ae565b90507f000000000000000000000000000000000000000000000000000000000000000081101561013f5760405163211ddda360e11b815260040160405180910390fd5b86821015610160576040516342af972b60e01b815260040160405180910390fd5b600061016a6106cc565b905061017881846004610707565b5060008060006101888787610c9e565b919a5091945090925090508b8810156101b45760405163c972651760e01b815260040160405180910390fd5b81600b60008282546101c69190613775565b909155506101d79050844283610e51565b6102017f000000000000000000000000000000000000000000000000000000000000000085613775565b985061020f8389888c610f8f565b600061021c60018b611129565b90506102358161022f60208e018e613788565b8b61115e565b8d8a8a898e856102486020830183613788565b6001600160a01b03167f88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c8661027e898787611206565b6102898a8888611235565b61029960408801602089016137bf565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a350909b5050505050505050505050506100816001600055565b6000806102e9610551565b600554610100900460ff1615610312576040516321081abf60e01b815260040160405180910390fd5b61031a61057b565b6103238361059c565b7f00000000000000000000000000000000000000000000000000000000000000008610156103645760405163211ddda360e11b815260040160405180910390fd5b600061036e61125d565b905084811015610391576040516342af972b60e01b815260040160405180910390fd5b600061039b6106cc565b905060006103b26103aa6106cc565b846004610707565b905060006103e07f000000000000000000000000000000000000000000000000000000000000000084613775565b90506000806000806103f38e8988611270565b600b805494985092965090945092508391600090610412908490613775565b909155506104239050874283610e51565b50600061043184898d611393565b9050808d10156104545760405163c972651760e01b815260040160405180910390fd5b61045e818c6105d5565b508e905061046e81858b896113bb565b600061047b600288611129565b90508c6104958261048f6020840184613788565b8561115e565b858b86846104a66020860186613788565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8d8d6104dd8c888b611235565b6104ed60408b0160208c016137bf565b610501896104fb8a8d6137dc565b906106ae565b6040805195865260208601949094529284019190915215156060830152608082015260a081018a905260c00160405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361057457604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561059a57604051631574f9f360e01b815260040160405180910390fd5b565b60006105ab6020830183613788565b6001600160a01b0316036105d25760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600080806105e960408501602086016137bf565b1561060e57610604856105ff60408701876137ef565b61156f565b909350905061062a565b50346106268561062160408701876137ef565b6116ab565b8492505b61063261125d565b915080156106a557604051600090339083908381818185875af1925050503d806000811461067c576040519150601f19603f3d011682016040523d82523d6000602084013e610681565b606091505b50509050806106a3576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106c38383670de0b6b3a76400006116e5565b90505b92915050565b60006106f87f00000000000000000000000000000000000000000000000000000000000000004261384c565b61070290426137dc565b905090565b600083815260076020526040812060018101546001600160801b031615158061072f57504285115b1561074857600101546001600160801b03169050610c97565b60008060006107556106cc565b90508088036107cd578692506107c661076c611703565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611724565b9150610889565b60006107f97f00000000000000000000000000000000000000000000000000000000000000008a613775565b90505b8181036108145787935061081161076c611703565b92505b6000818152600760205260409020600101546001600160801b031693508315610856576000818152600760205260409020546001600160801b03169250610887565b6108807f000000000000000000000000000000000000000000000000000000000000000082613775565b90506107fc565b505b61089283611744565b6001850180546001600160801b0319166001600160801b03929092169190911790556108e86108e17f00000000000000000000000000000000000000000000000000000000000000008a6137dc565b8984610e51565b610926886109206109197f000000000000000000000000000000000000000000000000000000000000000083613775565b4290611772565b84610e51565b61092f87611787565b50600090506007816109617f00000000000000000000000000000000000000000000000000000000000000008c6137dc565b815260208101919091526040016000908120600101546001600160801b0316915061098d60028b611129565b6000818152600e60205260408120549192508b8b8315610ad357600192506000806109bc86898d86600061192b565b9150915080600b60008282546109d29190613775565b909155506109ee9050866000846109e8816119fa565b88611a24565b6109f88183613775565b9150610a2886838a8e877f0000000000000000000000000000000000000000000000000000000000000000611b9e565b9150610a3c610a3783856106ae565b611be8565b60058054600290610a5d9084906201000090046001600160701b0316613860565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a8a82611744565b60058054601090610aac908490600160801b90046001600160801b0316613880565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610ae0600184611129565b6000818152600e60205260409020549091508015610bef5760019450600080610b0d838b8f88600161192b565b9150915080600b6000828254610b239190613775565b90915550610b3f905083600084610b39816119fa565b8a611c12565b610b4981836137dc565b9150610b58610a3783876106ae565b60058054600290610b799084906201000090046001600160701b0316613860565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610ba682611744565b60058054601090610bc8908490600160801b90046001600160801b0316613880565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610c2757610c1b610c01876119fa565b610c0a836119fa565b610c1491906138a0565b6000611e03565b610c25838f611eb1565b505b6000610c32846120ab565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999b5050505050505050505050505b9392505050565b600080600080610d0b610caf611703565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000612209565b9250610d1861076c611703565b9050610d6f8684610d6a847f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612235565b6122a2565b15610d7c57610d7c6122e4565b600080610d8a8884896122fd565b9092509050610d9982866137dc565b9450610da68184896116e5565b9350610db284896137dc565b9550670de0b6b3a7640000610e3887610dc9611703565b610dd39190613775565b600154610df1908990600160801b90046001600160801b03166137dc565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611724565b1115610e4657610e466122e4565b505092959194509250565b600083815260076020526040902054600160801b90046001600160801b0316808303610e7d5750505050565b6000848152600760205260408120546001600160801b031690819003610ed757610ea683611744565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055610f55565b610f28610f23670de0b6b3a7640000610ef088866137dc565b610efa91906138c0565b85670de0b6b3a7640000610f0e878a6137dc565b610f1891906138c0565b85929190600161237d565b611744565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b610f5e84611744565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600254600160801b90046001600160801b0316610fd1610f2382610fbb670de0b6b3a7640000866138c0565b6004546001600160801b0316919088600161237d565b600480546001600160801b0319166001600160801b0392909216919091179055610ffa85611744565b600180546000906110159084906001600160801b0316613880565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061104284611744565b60018054601090611064908490600160801b90046001600160801b03166138d7565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061109184611744565b61109b9082613880565b600280546001600160801b03808416600160801b029116179055905060006110c283612425565b90506110e0816110d1876119fa565b6110db90846138f7565b611e03565b6110e984612469565b6110f5576110f56122e4565b6000611100856124c9565b90508061112057604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156111535760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290611190908490613775565b90915550506000838152600e6020526040812080548392906111b3908490613775565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600061121860408301602084016137bf565b15611224575082610c97565b61122e84846106ae565b9050610c97565b600061124760408301602084016137bf565b156112565761122e84846124d6565b5082610c97565b6000610702670de0b6b3a76400006124eb565b6000806000806112dd611281611703565b600154600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f0000000000000000000000000000000000000000000000000000000000000000612577565b9250866112ea8488612598565b11156112f8576112f86122e4565b60008061130661076c611703565b925061131c89670de0b6b3a7640000858b6125ad565b5091935090915061132f905081836137dc565b61133990866137dc565b94506113858861137f8b61134d858a6137dc565b8b6113588e826126bb565b8e7f00000000000000000000000000000000000000000000000000000000000000006126d1565b90612598565b955092505093509350935093565b60006113a560408301602084016137bf565b156113b1575082610c97565b61122e84846124d6565b6001546001600160801b0316838110156113d7576113d76122e4565b60035490849003907f00000000000000000000000000000000000000000000000000000000000000009061140f908390600f0b6126f6565b101561141d5761141d6122e4565b60035461146790610f2390600160801b90046001600160801b031661144a670de0b6b3a7640000866138c0565b600454600160801b90046001600160801b0316919089600161237d565b600480546001600160801b03928316600160801b02921691909117905561148d81611744565b600180546001600160801b0319166001600160801b03929092169190911790556114b685611744565b600180546010906114d8908490600160801b90046001600160801b0316613880565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061150585611744565b60038054601090611527908490600160801b90046001600160801b0316613880565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061155683612425565b90506110e081611565886119fa565b6110db90846138a0565b6000806115a76001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633308861271c565b6116077f00000000000000000000000000000000000000000000000000000000000000006115d6876001613775565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190612789565b604051636e553f6560e01b8152600481018690523060248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015611677573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061169b919061391f565b925060009150505b935093915050565b6116e06001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633308661271c565b505050565b60008260001904841183021582026116fc57600080fd5b5091020490565b600154600354600091610702916001600160801b0390911690600f0b6126f6565b600061173b826117358588886116e5565b90612819565b95945050505050565b60006001600160801b0382111561176e57604051630f0af95160e11b815260040160405180910390fd5b5090565b600081831161178157826106c3565b50919050565b60055460009081906117aa908490600160801b90046001600160801b03166106ae565b6005546201000090046001600160701b031692509050818111156119265760006117d483836137dc565b90506117e3610f238286612884565b60058054601090611805908490600160801b90046001600160801b03166138d7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061183e85836124d690919063ffffffff16565b9050600061186c827f00000000000000000000000000000000000000000000000000000000000000006106ae565b905080600b60008282546118809190613775565b90915550611890905081836137dc565b915061189b82611744565b600180546000906118b69084906001600160801b0316613880565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506118e382612899565b600380546000906118f8908490600f0b613938565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60008061193887856124d6565b91506000611966837f00000000000000000000000000000000000000000000000000000000000000006106ae565b9050611992817f00000000000000000000000000000000000000000000000000000000000000006106ae565b915083156119b5576119a482826137dc565b6119ae90846137dc565b92506119cc565b6119bf82826137dc565b6119c99084613775565b92505b868610156119ef576119df8387896116e5565b92506119ec8287896116e5565b91505b509550959350505050565b60006001600160ff1b0382111561176e5760405163396ea70160e11b815260040160405180910390fd5b600354600160801b90046001600160801b0316611a6d610f2382611a50670de0b6b3a7640000866138c0565b600454600160801b90046001600160801b031691908a600061237d565b600480546001600160801b03928316600160801b029216919091179055611a9386611744565b611a9d90826138d7565b600380546001600160801b03928316600160801b029216919091179055611ac384611744565b60018054600090611ade9084906001600160801b0316613880565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b0b836128c3565b60038054600090611b20908490600f0b613938565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611b5085611744565b60018054601090611b72908490600160801b90046001600160801b03166138d7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611bb684611bb08a888a6116e5565b906124d6565b9050611bc38884866116e5565b611bcd9082613775565b905086811115611bdd5786810391505b509695505050505050565b60006001600160701b0382111561176e5760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611c5457507f0000000000000000000000000000000000000000000000000000000000000000611c5285836137dc565b105b15611c6157611c616122e4565b6003549084900390600f0b611c7684826138a0565b905083611c82866119fa565b138015611cb757507f0000000000000000000000000000000000000000000000000000000000000000611cb583836126f6565b105b15611cc457611cc46122e4565b600254600160801b90046001600160801b0316611d06610f2382611cf0670de0b6b3a7640000886138c0565b6004546001600160801b031691908c600061237d565b600480546001600160801b0319166001600160801b0392909216919091179055611d3088826137dc565b9050611d3b81611744565b600280546001600160801b03928316600160801b029216919091179055611d6183611744565b600180546001600160801b0319166001600160801b0392909216919091179055611d8a826128c3565b600380546001600160801b0319166001600160801b0392909216919091179055611db387611744565b60018054601090611dd5908490600160801b90046001600160801b0316613880565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611e2c611e1284836128ff565b611e1d8460006128ff565b611e2791906138a0565b6128c3565b9050600081600f0b1315611e815760028054829190600090611e589084906001600160801b0316613880565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156116e057611e9681613965565b60028054600090611e589084906001600160801b03166138d7565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611efc916001600160801b0316906137dc565b905080600003611f105760019150506106c6565b6000611f1b8561290e565b905080600003611f30576001925050506106c6565b600080611f3e8385896129aa565b9150915080611f545760009450505050506106c6565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611f90929190613a09565b6040805180830381865af4158015611fac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fd09190613a7f565b91509150611fee611fe0826119fa565b611fe990613aa3565b612b1e565b92508261200457600096505050505050506106c6565b61200d82611744565b600680546000906120289084906001600160801b0316613880565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061205581611744565b60068054601090612077908490600160801b90046001600160801b0316613880565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6120d487612cb4565b6040518263ffffffff1660e01b81526004016120f09190613abf565b6040805180830381865af415801561210c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121309190613ace565b9150915080612146575060009485945092505050565b6000808611612156576000612160565b61216083876106ae565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916121cb9190613775565b6121d591906137dc565b9050806000036121ee5750600096879650945050505050565b60006121fa83836124d6565b98600198509650505050505050565b600061222a87878761222388670de0b6b3a76400006137dc565b8787612dee565b979650505050505050565b600061229a61227661224f84670de0b6b3a76400006137dc565b61137f670de0b6b3a7640000612265818a612884565b61226f91906137dc565b8790612598565b61228890670de0b6b3a7640000613775565b611bb084670de0b6b3a76400006137dc565b949350505050565b6000806122d9856122b1611703565b6122bb9190613775565b600154610df1908790600160801b90046001600160801b03166137dc565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000806123478561137f85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061233d818c612884565b61137f91906137dc565b9150612373827f00000000000000000000000000000000000000000000000000000000000000006106ae565b9050935093915050565b60008260000361238e57508461173b565b81156123e1576123bf6123a18487613775565b6123ab85876106ae565b6123b5888a6106ae565b611bb09190613775565b905060006123cd8588611772565b9050808210156123db578091505b5061173b565b8285036123f05750600061173b565b61241b6123fd84876137dc565b6124078587612598565b612411888a6106ae565b611bb091906137dc565b9695505050505050565b600061244d600e6000612439600286611129565b8152602001908152602001600020546119fa565b61245f600e6000612439600187611129565b6106c691906138a0565b60006124957f000000000000000000000000000000000000000000000000000000000000000083612598565b6002546124ab91906001600160801b0316613775565b6001546124c1906001600160801b0316846106ae565b101592915050565b60006106c6826004611eb1565b60006106c383670de0b6b3a7640000846116e5565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015612553573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c6919061391f565b600061222a87878761259188670de0b6b3a76400006137dc565b8787612ea2565b60006106c38383670de0b6b3a7640000612ec5565b60008080806125fe87866125f78b61137f6125d08c670de0b6b3a76400006137dc565b7f000000000000000000000000000000000000000000000000000000000000000090612598565b9190612ec5565b935061262a847f00000000000000000000000000000000000000000000000000000000000000006106ae565b9150600061264b61264389670de0b6b3a76400006137dc565b8a9088612ec5565b9050612677817f0000000000000000000000000000000000000000000000000000000000000000612598565b93506126a3847f00000000000000000000000000000000000000000000000000000000000000006106ae565b6126ad9084613775565b915050945094509450949050565b60008183116126ca57816106c3565b5090919050565b6000806126e9846126e38a888a612ec5565b90612884565b9050611bc3888486612ec5565b6000806127038484612eeb565b909250905080612715576127156122e4565b5092915050565b6040516001600160a01b0384811660248301528381166044830152606482018390526127839186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050612f27565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526127da8482612f8f565b612783576040516001600160a01b0384811660248301526000604483015261280f91869182169063095ea7b390606401612751565b6127838482612f27565b6000816000036128325750670de0b6b3a76400006106c6565b82600003612842575060006106c6565b600061284d836119fa565b9050600061286261285d866119fa565b613032565b9050818102612879670de0b6b3a764000082613afe565b905061241b81613258565b60006106c383670de0b6b3a764000084612ec5565b600060016001607f1b0382111561176e5760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03198212806128e1575060016001607f1b0382135b1561176e5760405163a5353be560e01b815260040160405180910390fd5b60008183136126ca57816106c3565b6002546000908190612929906001600160801b031684612884565b90506129557f000000000000000000000000000000000000000000000000000000000000000082613775565b6001546001600160801b03161115611781576001547f0000000000000000000000000000000000000000000000000000000000000000906129a09083906001600160801b03166137dc565b610c9791906137dc565b6129b261364d565b6000806129be84612cb4565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016129f99190613abf565b6040805180830381865af4158015612a15573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a399190613ace565b9350905082612a4e5750600091506116a39050565b6000612a75612a708461016001518561014001516106ae90919063ffffffff16565b6119fa565b612a95612a7085610120015186610100015161259890919063ffffffff16565b612a9f91906138a0565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612bd5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612bf99190613b2c565b935093509350935080612c155750600098975050505050505050565b868414612c4657612c2584611744565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612c7757612c56836128c3565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612ca557612c8782611744565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612cbc61369f565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191612db491166133ed565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612de6929004166133ed565b905292915050565b600080612dfe8888878787613463565b9050612e1885611735612e11898c613775565b86906106ae565b9750612e258489856116e5565b975087811015612e3757612e376122e4565b878103670de0b6b3a76400008110612e6c57612e65612e5e670de0b6b3a764000088612884565b8290612819565b9050612e84565b612e81612e5e670de0b6b3a7640000886124d6565b90505b80881015612e9457612e946122e4565b909603979650505050505050565b600080612eb3888888888888613492565b909250905080611bdd57611bdd6122e4565b6000826000190484118302158202612edc57600080fd5b50910281810615159190040190565b600080600083612efa866119fa565b612f0491906138a0565b90506000811215612f1c5760008092509250506106a7565b946001945092505050565b6000612f3c6001600160a01b03841683613555565b90508051600014158015612f61575080806020019051810190612f5f9190613b62565b155b156116e057604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000806000846001600160a01b031684604051612fac9190613b7f565b6000604051808303816000865af19150503d8060008114612fe9576040519150601f19603f3d011682016040523d82523d6000602084013e612fee565b606091505b50915091508180156130185750805115806130185750808060200190518101906130189190613b62565b801561173b5750505050506001600160a01b03163b151590565b60008082136130545760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906130d79084901c6119fa565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361327357506000919050565b680755bf798b4a1bf1e5821261329c576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061241b74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6119fa565b600080670de0b6b3a76400006134016106cc565b61340b91906138c0565b905080831161341b576000613425565b61342581846137dc565b9150610c9761345c670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006138c0565b83906124d6565b600061346f8585612819565b61348861348086611735868b612598565b859085612ec5565b61241b9190613775565b60008060006134a48989888888613463565b90506134b486611735898b613775565b9750878110156134cb57600080925092505061354a565b8781036134d9818688612ec5565b9050670de0b6b3a76400008110613506576134ff612e5e670de0b6b3a764000089612884565b905061351e565b61351b612e5e670de0b6b3a7640000896124d6565b90505b6135288186612884565b9050808a10156135405760008093509350505061354a565b8903925060019150505b965096945050505050565b60606106c38383600084600080856001600160a01b0316848660405161357b9190613b7f565b60006040518083038185875af1925050503d80600081146135b8576040519150601f19603f3d011682016040523d82523d6000602084013e6135bd565b606091505b509150915061241b8683836060826135dd576135d882613624565b610c97565b81511580156135f457506001600160a01b0384163b155b1561361d57604051639996b31560e01b81526001600160a01b0385166004820152602401612f86565b5080610c97565b8051156136345780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610120016040528061366161369f565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561371657600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561374257600080fd5b85016060818803121561375457600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156106c6576106c661375f565b60006020828403121561379a57600080fd5b81356001600160a01b0381168114610c9757600080fd5b80151581146105d257600080fd5b6000602082840312156137d157600080fd5b8135610c97816137b1565b818103818111156106c6576106c661375f565b6000808335601e1984360301811261380657600080fd5b83018035915067ffffffffffffffff82111561382157600080fd5b6020019150368190038213156106a757600080fd5b634e487b7160e01b600052601260045260246000fd5b60008261385b5761385b613836565b500690565b6001600160701b038181168382160190808211156127155761271561375f565b6001600160801b038181168382160190808211156127155761271561375f565b81810360008312801583831316838312821617156127155761271561375f565b80820281158282048414176106c6576106c661375f565b6001600160801b038281168282160390808211156127155761271561375f565b80820182811260008312801582168215821617156139175761391761375f565b505092915050565b60006020828403121561393157600080fd5b5051919050565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156106c6576106c661375f565b600081600f0b60016001607f1b031981036139825761398261375f565b60000392915050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613a1d82855161398b565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613a9257600080fd5b505080516020909101519092909150565b6000600160ff1b8201613ab857613ab861375f565b5060000390565b61018081016106c6828461398b565b60008060408385031215613ae157600080fd5b825191506020830151613af3816137b1565b809150509250929050565b600082613b0d57613b0d613836565b600160ff1b821460001984141615613b2757613b2761375f565b500590565b60008060008060808587031215613b4257600080fd5b8451935060208501519250604085015191506060850151613754816137b1565b600060208284031215613b7457600080fd5b8151610c97816137b1565b6000825160005b81811015613ba05760208186018101518583015201613b86565b50600092019182525091905056fea2646970667358221220917a0049982d99ec67a5ca5629193bc24bce739b1f0af0c41a0bb66d6112302964736f6c63430008140033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
