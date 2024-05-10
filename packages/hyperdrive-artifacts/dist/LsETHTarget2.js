export const LsETHTarget2 = {
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
    bytecode: '0x6102606040523480156200001257600080fd5b5060405162003e0b38038062003e0b8339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161398b6200048060003960005050600050506000505060008181610100015281816103250152612b930152600081816113e101528181611b0901528181611b6c0152818161235001528181612773015281816127af015281816129ac0152612b6d01526000818161078101528181610ce701528181610df3015281816112b90152612b470152600061172801526000818161184e0152818161222f015281816124e6015261255f015260008181610a0401528181610d460152818161135b015281816118220152612533015260008181610d25015281816121eb01526124b20152600081816107a201528181610cc501528181610e14015281816112970152612bb90152600081816101dc015281816103bb0152818161093c01526131df0152600081816106d3015281816107d40152818161085b015281816108bc01526108f401526000818161159801526123e401526000505061398b6000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c3660046134a7565b61006d565b6040805192835260208301919091520160405180910390f35b6100416100683660046134a7565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102de565b6000806100a4610551565b600554610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d561057b565b6100de8361059c565b6000806100eb88866105d5565b909250905060006100fc83836106ae565b90507f000000000000000000000000000000000000000000000000000000000000000081101561013f5760405163211ddda360e11b815260040160405180910390fd5b86821015610160576040516342af972b60e01b815260040160405180910390fd5b600061016a6106cc565b905061017881846004610707565b5060008060006101888787610c9e565b919a5091945090925090508b8810156101b45760405163c972651760e01b815260040160405180910390fd5b81600b60008282546101c6919061351c565b909155506101d79050844283610e51565b6102017f00000000000000000000000000000000000000000000000000000000000000008561351c565b985061020f8389888c610f8f565b600061021c60018b611129565b90506102358161022f60208e018e61352f565b8b61115e565b8d8a8a898e85610248602083018361352f565b6001600160a01b03167f88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c8661027e898787611206565b6102898a8888611235565b6102996040880160208901613566565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a350909b5050505050505050505050506100816001600055565b6000806102e9610551565b600554610100900460ff1615610312576040516321081abf60e01b815260040160405180910390fd5b61031a61057b565b6103238361059c565b7f00000000000000000000000000000000000000000000000000000000000000008610156103645760405163211ddda360e11b815260040160405180910390fd5b600061036e61125d565b905084811015610391576040516342af972b60e01b815260040160405180910390fd5b600061039b6106cc565b905060006103b26103aa6106cc565b846004610707565b905060006103e07f00000000000000000000000000000000000000000000000000000000000000008461351c565b90506000806000806103f38e8988611270565b600b80549498509296509094509250839160009061041290849061351c565b909155506104239050874283610e51565b50600061043184898d611393565b9050808d10156104545760405163c972651760e01b815260040160405180910390fd5b61045e818c6105d5565b508e905061046e81858b896113bb565b600061047b600288611129565b90508c6104958261048f602084018461352f565b8561115e565b858b86846104a6602086018661352f565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8d8d6104dd8c888b611235565b6104ed60408b0160208c01613566565b610501896104fb8a8d613583565b906106ae565b6040805195865260208601949094529284019190915215156060830152608082015260a081018a905260c00160405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361057457604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561059a57604051631574f9f360e01b815260040160405180910390fd5b565b60006105ab602083018361352f565b6001600160a01b0316036105d25760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600080806105e96040850160208601613566565b1561060e57610604856105ff6040870187613596565b61156f565b909350905061062a565b5034610626856106216040870187613596565b61158b565b8492505b61063261125d565b915080156106a557604051600090339083908381818185875af1925050503d806000811461067c576040519150601f19603f3d011682016040523d82523d6000602084013e610681565b606091505b50509050806106a3576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106c38383670de0b6b3a76400006115c5565b90505b92915050565b60006106f87f0000000000000000000000000000000000000000000000000000000000000000426135f3565b6107029042613583565b905090565b600083815260076020526040812060018101546001600160801b031615158061072f57504285115b1561074857600101546001600160801b03169050610c97565b60008060006107556106cc565b90508088036107cd578692506107c661076c6115e3565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611604565b9150610889565b60006107f97f00000000000000000000000000000000000000000000000000000000000000008a61351c565b90505b8181036108145787935061081161076c6115e3565b92505b6000818152600760205260409020600101546001600160801b031693508315610856576000818152600760205260409020546001600160801b03169250610887565b6108807f00000000000000000000000000000000000000000000000000000000000000008261351c565b90506107fc565b505b61089283611624565b6001850180546001600160801b0319166001600160801b03929092169190911790556108e86108e17f00000000000000000000000000000000000000000000000000000000000000008a613583565b8984610e51565b610926886109206109197f00000000000000000000000000000000000000000000000000000000000000008361351c565b4290611652565b84610e51565b61092f87611667565b50600090506007816109617f00000000000000000000000000000000000000000000000000000000000000008c613583565b815260208101919091526040016000908120600101546001600160801b0316915061098d60028b611129565b6000818152600e60205260408120549192508b8b8315610ad357600192506000806109bc86898d86600061180b565b9150915080600b60008282546109d2919061351c565b909155506109ee9050866000846109e8816118da565b88611904565b6109f8818361351c565b9150610a2886838a8e877f0000000000000000000000000000000000000000000000000000000000000000611a7e565b9150610a3c610a3783856106ae565b611ac8565b60058054600290610a5d9084906201000090046001600160701b0316613607565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a8a82611624565b60058054601090610aac908490600160801b90046001600160801b0316613627565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610ae0600184611129565b6000818152600e60205260409020549091508015610bef5760019450600080610b0d838b8f88600161180b565b9150915080600b6000828254610b23919061351c565b90915550610b3f905083600084610b39816118da565b8a611af2565b610b498183613583565b9150610b58610a3783876106ae565b60058054600290610b799084906201000090046001600160701b0316613607565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610ba682611624565b60058054601090610bc8908490600160801b90046001600160801b0316613627565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610c2757610c1b610c01876118da565b610c0a836118da565b610c149190613647565b6000611ce3565b610c25838f611d91565b505b6000610c3284611f8b565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999b5050505050505050505050505b9392505050565b600080600080610d0b610caf6115e3565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000006120e9565b9250610d1861076c6115e3565b9050610d6f8684610d6a847f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612115565b612182565b15610d7c57610d7c6121c4565b600080610d8a8884896121dd565b9092509050610d998286613583565b9450610da68184896115c5565b9350610db28489613583565b9550670de0b6b3a7640000610e3887610dc96115e3565b610dd3919061351c565b600154610df1908990600160801b90046001600160801b0316613583565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611604565b1115610e4657610e466121c4565b505092959194509250565b600083815260076020526040902054600160801b90046001600160801b0316808303610e7d5750505050565b6000848152600760205260408120546001600160801b031690819003610ed757610ea683611624565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055610f55565b610f28610f23670de0b6b3a7640000610ef08886613583565b610efa9190613667565b85670de0b6b3a7640000610f0e878a613583565b610f189190613667565b85929190600161225d565b611624565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b610f5e84611624565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600254600160801b90046001600160801b0316610fd1610f2382610fbb670de0b6b3a764000086613667565b6004546001600160801b0316919088600161225d565b600480546001600160801b0319166001600160801b0392909216919091179055610ffa85611624565b600180546000906110159084906001600160801b0316613627565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061104284611624565b60018054601090611064908490600160801b90046001600160801b031661367e565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061109184611624565b61109b9082613627565b600280546001600160801b03808416600160801b029116179055905060006110c283612305565b90506110e0816110d1876118da565b6110db908461369e565b611ce3565b6110e984612349565b6110f5576110f56121c4565b6000611100856123a9565b90508061112057604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156111535760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b03861684529091528120805483929061119090849061351c565b90915550506000838152600e6020526040812080548392906111b390849061351c565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006112186040830160208401613566565b15611224575082610c97565b61122e84846106ae565b9050610c97565b60006112476040830160208401613566565b156112565761122e84846123b6565b5082610c97565b6000610702670de0b6b3a76400006123cb565b6000806000806112dd6112816115e3565b600154600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f0000000000000000000000000000000000000000000000000000000000000000612457565b9250866112ea8488612478565b11156112f8576112f86121c4565b60008061130661076c6115e3565b925061131c89670de0b6b3a7640000858b61248d565b5091935090915061132f90508183613583565b6113399086613583565b94506113858861137f8b61134d858a613583565b8b6113588e8261259b565b8e7f00000000000000000000000000000000000000000000000000000000000000006125b1565b90612478565b955092505093509350935093565b60006113a56040830160208401613566565b156113b1575082610c97565b61122e84846123b6565b6001546001600160801b0316838110156113d7576113d76121c4565b60035490849003907f00000000000000000000000000000000000000000000000000000000000000009061140f908390600f0b6125d6565b101561141d5761141d6121c4565b60035461146790610f2390600160801b90046001600160801b031661144a670de0b6b3a764000086613667565b600454600160801b90046001600160801b0316919089600161225d565b600480546001600160801b03928316600160801b02921691909117905561148d81611624565b600180546001600160801b0319166001600160801b03929092169190911790556114b685611624565b600180546010906114d8908490600160801b90046001600160801b0316613627565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061150585611624565b60038054601090611527908490600160801b90046001600160801b0316613627565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061155683612305565b90506110e081611565886118da565b6110db9084613647565b60008060405163350b944160e11b815260040160405180910390fd5b6115c06001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330866125fc565b505050565b60008260001904841183021582026115dc57600080fd5b5091020490565b600154600354600091610702916001600160801b0390911690600f0b6125d6565b600061161b826116158588886115c5565b9061265c565b95945050505050565b60006001600160801b0382111561164e57604051630f0af95160e11b815260040160405180910390fd5b5090565b600081831161166157826106c3565b50919050565b600554600090819061168a908490600160801b90046001600160801b03166106ae565b6005546201000090046001600160701b031692509050818111156118065760006116b48383613583565b90506116c3610f2382866126c7565b600580546010906116e5908490600160801b90046001600160801b031661367e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061171e85836123b690919063ffffffff16565b9050600061174c827f00000000000000000000000000000000000000000000000000000000000000006106ae565b905080600b6000828254611760919061351c565b9091555061177090508183613583565b915061177b82611624565b600180546000906117969084906001600160801b0316613627565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506117c3826126dc565b600380546000906117d8908490600f0b6136c6565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60008061181887856123b6565b91506000611846837f00000000000000000000000000000000000000000000000000000000000000006106ae565b9050611872817f00000000000000000000000000000000000000000000000000000000000000006106ae565b91508315611895576118848282613583565b61188e9084613583565b92506118ac565b61189f8282613583565b6118a9908461351c565b92505b868610156118cf576118bf8387896115c5565b92506118cc8287896115c5565b91505b509550959350505050565b60006001600160ff1b0382111561164e5760405163396ea70160e11b815260040160405180910390fd5b600354600160801b90046001600160801b031661194d610f2382611930670de0b6b3a764000086613667565b600454600160801b90046001600160801b031691908a600061225d565b600480546001600160801b03928316600160801b02921691909117905561197386611624565b61197d908261367e565b600380546001600160801b03928316600160801b0292169190911790556119a384611624565b600180546000906119be9084906001600160801b0316613627565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506119eb83612706565b60038054600090611a00908490600f0b6136c6565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611a3085611624565b60018054601090611a52908490600160801b90046001600160801b031661367e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611a9684611a908a888a6115c5565b906123b6565b9050611aa38884866115c5565b611aad908261351c565b905086811115611abd5786810391505b509695505050505050565b60006001600160701b0382111561164e5760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611b3457507f0000000000000000000000000000000000000000000000000000000000000000611b328583613583565b105b15611b4157611b416121c4565b6003549084900390600f0b611b568482613647565b905083611b62866118da565b138015611b9757507f0000000000000000000000000000000000000000000000000000000000000000611b9583836125d6565b105b15611ba457611ba46121c4565b600254600160801b90046001600160801b0316611be6610f2382611bd0670de0b6b3a764000088613667565b6004546001600160801b031691908c600061225d565b600480546001600160801b0319166001600160801b0392909216919091179055611c108882613583565b9050611c1b81611624565b600280546001600160801b03928316600160801b029216919091179055611c4183611624565b600180546001600160801b0319166001600160801b0392909216919091179055611c6a82612706565b600380546001600160801b0319166001600160801b0392909216919091179055611c9387611624565b60018054601090611cb5908490600160801b90046001600160801b0316613627565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611d0c611cf28483612742565b611cfd846000612742565b611d079190613647565b612706565b9050600081600f0b1315611d615760028054829190600090611d389084906001600160801b0316613627565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156115c057611d76816136f3565b60028054600090611d389084906001600160801b031661367e565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611ddc916001600160801b031690613583565b905080600003611df05760019150506106c6565b6000611dfb85612751565b905080600003611e10576001925050506106c6565b600080611e1e8385896127ed565b9150915080611e345760009450505050506106c6565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611e70929190613797565b6040805180830381865af4158015611e8c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611eb0919061380d565b91509150611ece611ec0826118da565b611ec990613831565b612968565b925082611ee457600096505050505050506106c6565b611eed82611624565b60068054600090611f089084906001600160801b0316613627565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611f3581611624565b60068054601090611f57908490600160801b90046001600160801b0316613627565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611fb487612afe565b6040518263ffffffff1660e01b8152600401611fd0919061384d565b6040805180830381865af4158015611fec573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612010919061385c565b9150915080612026575060009485945092505050565b6000808611612036576000612040565b61204083876106ae565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916120ab919061351c565b6120b59190613583565b9050806000036120ce5750600096879650945050505050565b60006120da83836123b6565b98600198509650505050505050565b600061210a87878761210388670de0b6b3a7640000613583565b8787612c38565b979650505050505050565b600061217a61215661212f84670de0b6b3a7640000613583565b61137f670de0b6b3a7640000612145818a6126c7565b61214f9190613583565b8790612478565b61216890670de0b6b3a764000061351c565b611a9084670de0b6b3a7640000613583565b949350505050565b6000806121b9856121916115e3565b61219b919061351c565b600154610df1908790600160801b90046001600160801b0316613583565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000806122278561137f85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061221d818c6126c7565b61137f9190613583565b9150612253827f00000000000000000000000000000000000000000000000000000000000000006106ae565b9050935093915050565b60008260000361226e57508461161b565b81156122c15761229f612281848761351c565b61228b85876106ae565b612295888a6106ae565b611a90919061351c565b905060006122ad8588611652565b9050808210156122bb578091505b5061161b565b8285036122d05750600061161b565b6122fb6122dd8487613583565b6122e78587612478565b6122f1888a6106ae565b611a909190613583565b9695505050505050565b600061232d600e6000612319600286611129565b8152602001908152602001600020546118da565b61233f600e6000612319600187611129565b6106c69190613647565b60006123757f000000000000000000000000000000000000000000000000000000000000000083612478565b60025461238b91906001600160801b031661351c565b6001546123a1906001600160801b0316846106ae565b101592915050565b60006106c6826004611d91565b60006106c383670de0b6b3a7640000846115c5565b604051637bce1f8160e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063f79c3f0290602401602060405180830381865afa158015612433573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c6919061388c565b600061210a87878761247188670de0b6b3a7640000613583565b8787612cec565b60006106c38383670de0b6b3a7640000612d0f565b60008080806124de87866124d78b61137f6124b08c670de0b6b3a7640000613583565b7f000000000000000000000000000000000000000000000000000000000000000090612478565b9190612d0f565b935061250a847f00000000000000000000000000000000000000000000000000000000000000006106ae565b9150600061252b61252389670de0b6b3a7640000613583565b8a9088612d0f565b9050612557817f0000000000000000000000000000000000000000000000000000000000000000612478565b9350612583847f00000000000000000000000000000000000000000000000000000000000000006106ae565b61258d908461351c565b915050945094509450949050565b60008183116125aa57816106c3565b5090919050565b6000806125c9846125c38a888a612d0f565b906126c7565b9050611aa3888486612d0f565b6000806125e38484612d35565b9092509050806125f5576125f56121c4565b5092915050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052612656908590612d71565b50505050565b6000816000036126755750670de0b6b3a76400006106c6565b82600003612685575060006106c6565b6000612690836118da565b905060006126a56126a0866118da565b612dd9565b90508181026126bc670de0b6b3a7640000826138a5565b90506122fb81612fff565b60006106c383670de0b6b3a764000084612d0f565b600060016001607f1b0382111561164e5760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612724575060016001607f1b0382135b1561164e5760405163a5353be560e01b815260040160405180910390fd5b60008183136125aa57816106c3565b600254600090819061276c906001600160801b0316846126c7565b90506127987f00000000000000000000000000000000000000000000000000000000000000008261351c565b6001546001600160801b03161115611661576001547f0000000000000000000000000000000000000000000000000000000000000000906127e39083906001600160801b0316613583565b610c979190613583565b6127f56133f4565b60008061280184612afe565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b815260040161283c919061384d565b6040805180830381865af4158015612858573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061287c919061385c565b93509050826128915750600091506129609050565b60006128b86128b38461016001518561014001516106ae90919063ffffffff16565b6118da565b6128d86128b385610120015186610100015161247890919063ffffffff16565b6128e29190613647565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612a1f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a4391906138d3565b935093509350935080612a5f5750600098975050505050505050565b868414612a9057612a6f84611624565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612ac157612aa083612706565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612aef57612ad182611624565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612b06613446565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191612bfe9116613194565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612c3092900416613194565b905292915050565b600080612c48888887878761320a565b9050612c6285611615612c5b898c61351c565b86906106ae565b9750612c6f8489856115c5565b975087811015612c8157612c816121c4565b878103670de0b6b3a76400008110612cb657612caf612ca8670de0b6b3a7640000886126c7565b829061265c565b9050612cce565b612ccb612ca8670de0b6b3a7640000886123b6565b90505b80881015612cde57612cde6121c4565b909603979650505050505050565b600080612cfd888888888888613239565b909250905080611abd57611abd6121c4565b6000826000190484118302158202612d2657600080fd5b50910281810615159190040190565b600080600083612d44866118da565b612d4e9190613647565b90506000811215612d665760008092509250506106a7565b946001945092505050565b6000612d866001600160a01b038416836132fc565b90508051600014158015612dab575080806020019051810190612da99190613909565b155b156115c057604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000808213612dfb5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612e7e9084901c6118da565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361301a57506000919050565b680755bf798b4a1bf1e58212613043576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906122fb74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6118da565b600080670de0b6b3a76400006131a86106cc565b6131b29190613667565b90508083116131c25760006131cc565b6131cc8184613583565b9150610c97613203670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613667565b83906123b6565b6000613216858561265c565b61322f61322786611615868b612478565b859085612d0f565b6122fb919061351c565b600080600061324b898988888861320a565b905061325b86611615898b61351c565b9750878110156132725760008092509250506132f1565b878103613280818688612d0f565b9050670de0b6b3a764000081106132ad576132a6612ca8670de0b6b3a7640000896126c7565b90506132c5565b6132c2612ca8670de0b6b3a7640000896123b6565b90505b6132cf81866126c7565b9050808a10156132e7576000809350935050506132f1565b8903925060019150505b965096945050505050565b60606106c38383600084600080856001600160a01b031684866040516133229190613926565b60006040518083038185875af1925050503d806000811461335f576040519150601f19603f3d011682016040523d82523d6000602084013e613364565b606091505b50915091506122fb8683836060826133845761337f826133cb565b610c97565b815115801561339b57506001600160a01b0384163b155b156133c457604051639996b31560e01b81526001600160a01b0385166004820152602401612dd0565b5080610c97565b8051156133db5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101200160405280613408613446565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600080608085870312156134bd57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156134e957600080fd5b8501606081880312156134fb57600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156106c6576106c6613506565b60006020828403121561354157600080fd5b81356001600160a01b0381168114610c9757600080fd5b80151581146105d257600080fd5b60006020828403121561357857600080fd5b8135610c9781613558565b818103818111156106c6576106c6613506565b6000808335601e198436030181126135ad57600080fd5b83018035915067ffffffffffffffff8211156135c857600080fd5b6020019150368190038213156106a757600080fd5b634e487b7160e01b600052601260045260246000fd5b600082613602576136026135dd565b500690565b6001600160701b038181168382160190808211156125f5576125f5613506565b6001600160801b038181168382160190808211156125f5576125f5613506565b81810360008312801583831316838312821617156125f5576125f5613506565b80820281158282048414176106c6576106c6613506565b6001600160801b038281168282160390808211156125f5576125f5613506565b80820182811260008312801582168215821617156136be576136be613506565b505092915050565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156106c6576106c6613506565b600081600f0b60016001607f1b0319810361371057613710613506565b60000392915050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a0820190506137ab828551613719565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b6000806040838503121561382057600080fd5b505080516020909101519092909150565b6000600160ff1b820161384657613846613506565b5060000390565b61018081016106c68284613719565b6000806040838503121561386f57600080fd5b82519150602083015161388181613558565b809150509250929050565b60006020828403121561389e57600080fd5b5051919050565b6000826138b4576138b46135dd565b600160ff1b8214600019841416156138ce576138ce613506565b500590565b600080600080608085870312156138e957600080fd5b84519350602085015192506040850151915060608501516134fb81613558565b60006020828403121561391b57600080fd5b8151610c9781613558565b6000825160005b81811015613947576020818601810151858301520161392d565b50600092019182525091905056fea2646970667358221220ab2b01a00899405df292fa42787331c90d7889253e98335c6d144a50c0bd72d864736f6c63430008140033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
