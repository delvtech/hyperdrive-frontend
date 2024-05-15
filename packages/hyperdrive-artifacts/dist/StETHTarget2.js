export const StETHTarget2 = {
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
    bytecode: '0x6102606040523480156200001257600080fd5b5060405162003c7138038062003c718339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516137eb620004866000396000505060005050600050506000818160f8015281816103010152612b9f01526000818161134201528181611b7701528181611bda015281816123c301528181612786015281816127c2015281816129b80152612b7901526000818161073201528181610c9801528181610da4015281816112130152612b53015260006117960152600081816118bc015281816122a20152818161254401526125bd0152600081816109b501528181610cf7015281816112b5015281816118900152612591015260008181610cd60152818161225e015261251001526000818161075301528181610c7601528181610dc5015281816111f10152612bc50152600081816101d401528181610397015281816108ed0152613183015260008181610684015281816107850152818161080c0152818161086d01526108a501526000818161151c015281816115b801526124420152600050506137eb6000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c366004613353565b61006d565b6040805192835260208301919091520160405180910390f35b610041610068366004613353565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102c2565b6000806100a4610523565b600554610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d68361054d565b6000806100e38886610586565b909250905060006100f4838361065f565b90507f00000000000000000000000000000000000000000000000000000000000000008110156101375760405163211ddda360e11b815260040160405180910390fd5b86821015610158576040516342af972b60e01b815260040160405180910390fd5b600061016261067d565b9050610170818460046106b8565b5060008060006101808787610c4f565b919a5091945090925090508b8810156101ac5760405163c972651760e01b815260040160405180910390fd5b81600b60008282546101be91906133c8565b909155506101cf9050844283610e02565b6101f97f0000000000000000000000000000000000000000000000000000000000000000856133c8565b98506102078389888c610f40565b600061021460018b6110da565b905061022d8161022760208e018e6133db565b8b61110f565b8d8a8a898e8561024060208301836133db565b6001600160a01b03167f88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c86888661027d6040880160208901613412565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a350909b5050505050505050505050506100816001600055565b6000806102cd610523565b600554610100900460ff16156102f6576040516321081abf60e01b815260040160405180910390fd5b6102ff8361054d565b7f00000000000000000000000000000000000000000000000000000000000000008610156103405760405163211ddda360e11b815260040160405180910390fd5b600061034a6111b7565b90508481101561036d576040516342af972b60e01b815260040160405180910390fd5b600061037761067d565b9050600061038e61038661067d565b8460046106b8565b905060006103bc7f0000000000000000000000000000000000000000000000000000000000000000846133c8565b90506000806000806103cf8e89886111ca565b600b8054949850929650909450925083916000906103ee9084906133c8565b909155506103ff9050874283610e02565b50600061040d84898d6112ed565b9050808d10156104305760405163c972651760e01b815260040160405180910390fd5b61043a818c610586565b508e905061044a81858b8961131c565b60006104576002886110da565b90508c6104718261046b60208401846133db565b8561110f565b858b868461048260208601866133db565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8d8a866104bf60408b0160208c01613412565b6104d3896104cd8a8d61342f565b9061065f565b6040805195865260208601949094529284019190915215156060830152608082015260a081018a905260c00160405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361054657604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b600061055c60208301836133db565b6001600160a01b0316036105835760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000808061059a6040850160208601613412565b156105bf576105b5856105b06040870187613442565b6114d0565b90935090506105db565b50346105d7856105d26040870187613442565b611596565b8492505b6105e36111b7565b9150801561065657604051600090339083908381818185875af1925050503d806000811461062d576040519150601f19603f3d011682016040523d82523d6000602084013e610632565b606091505b5050905080610654576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106748383670de0b6b3a7640000611633565b90505b92915050565b60006106a97f00000000000000000000000000000000000000000000000000000000000000004261349f565b6106b3904261342f565b905090565b600083815260076020526040812060018101546001600160801b03161515806106e057504285115b156106f957600101546001600160801b03169050610c48565b600080600061070661067d565b905080880361077e5786925061077761071d611651565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611672565b915061083a565b60006107aa7f00000000000000000000000000000000000000000000000000000000000000008a6133c8565b90505b8181036107c5578793506107c261071d611651565b92505b6000818152600760205260409020600101546001600160801b031693508315610807576000818152600760205260409020546001600160801b03169250610838565b6108317f0000000000000000000000000000000000000000000000000000000000000000826133c8565b90506107ad565b505b61084383611692565b6001850180546001600160801b0319166001600160801b03929092169190911790556108996108927f00000000000000000000000000000000000000000000000000000000000000008a61342f565b8984610e02565b6108d7886108d16108ca7f0000000000000000000000000000000000000000000000000000000000000000836133c8565b42906116c0565b84610e02565b6108e0876116d5565b50600090506007816109127f00000000000000000000000000000000000000000000000000000000000000008c61342f565b815260208101919091526040016000908120600101546001600160801b0316915061093e60028b6110da565b6000818152600e60205260408120549192508b8b8315610a84576001925060008061096d86898d866000611879565b9150915080600b600082825461098391906133c8565b9091555061099f90508660008461099981611948565b88611972565b6109a981836133c8565b91506109d986838a8e877f0000000000000000000000000000000000000000000000000000000000000000611aec565b91506109ed6109e8838561065f565b611b36565b60058054600290610a0e9084906201000090046001600160701b03166134b3565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a3b82611692565b60058054601090610a5d908490600160801b90046001600160801b03166134d3565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610a916001846110da565b6000818152600e60205260409020549091508015610ba05760019450600080610abe838b8f886001611879565b9150915080600b6000828254610ad491906133c8565b90915550610af0905083600084610aea81611948565b8a611b60565b610afa818361342f565b9150610b096109e8838761065f565b60058054600290610b2a9084906201000090046001600160701b03166134b3565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b5782611692565b60058054601090610b79908490600160801b90046001600160801b03166134d3565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610bd857610bcc610bb287611948565b610bbb83611948565b610bc591906134f3565b6000611d51565b610bd6838f611e04565b505b6000610be384611ffe565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999b5050505050505050505050505b9392505050565b600080600080610cbc610c60611651565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f000000000000000000000000000000000000000000000000000000000000000061215c565b9250610cc961071d611651565b9050610d208684610d1b847f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612188565b6121f5565b15610d2d57610d2d612237565b600080610d3b888489612250565b9092509050610d4a828661342f565b9450610d57818489611633565b9350610d63848961342f565b9550670de0b6b3a7640000610de987610d7a611651565b610d8491906133c8565b600154610da2908990600160801b90046001600160801b031661342f565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611672565b1115610df757610df7612237565b505092959194509250565b600083815260076020526040902054600160801b90046001600160801b0316808303610e2e5750505050565b6000848152600760205260408120546001600160801b031690819003610e8857610e5783611692565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055610f06565b610ed9610ed4670de0b6b3a7640000610ea1888661342f565b610eab9190613513565b85670de0b6b3a7640000610ebf878a61342f565b610ec99190613513565b8592919060016122d0565b611692565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b610f0f84611692565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600254600160801b90046001600160801b0316610f82610ed482610f6c670de0b6b3a764000086613513565b6004546001600160801b031691908860016122d0565b600480546001600160801b0319166001600160801b0392909216919091179055610fab85611692565b60018054600090610fc69084906001600160801b03166134d3565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610ff384611692565b60018054601090611015908490600160801b90046001600160801b031661352a565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061104284611692565b61104c90826134d3565b600280546001600160801b03808416600160801b0291161790559050600061107383612378565b90506110918161108287611948565b61108c908461354a565b611d51565b61109a846123bc565b6110a6576110a6612237565b60006110b18561241c565b9050806110d157604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156111045760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b0386168452909152812080548392906111419084906133c8565b90915550506000838152600e6020526040812080548392906111649084906133c8565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006106b3670de0b6b3a7640000612429565b6000806000806112376111db611651565b600154600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f00000000000000000000000000000000000000000000000000000000000000006124b5565b92508661124484886124d6565b111561125257611252612237565b60008061126061071d611651565b925061127689670de0b6b3a7640000858b6124eb565b509193509091506112899050818361342f565b611293908661342f565b94506112df886112d98b6112a7858a61342f565b8b6112b28e826125f9565b8e7f000000000000000000000000000000000000000000000000000000000000000061260f565b906124d6565b955092505093509350935093565b60006112ff6040830160208401613412565b1561130b575082610c48565b6113158484612634565b9050610c48565b6001546001600160801b03168381101561133857611338612237565b60035490849003907f000000000000000000000000000000000000000000000000000000000000000090611370908390600f0b612649565b101561137e5761137e612237565b6003546113c890610ed490600160801b90046001600160801b03166113ab670de0b6b3a764000086613513565b600454600160801b90046001600160801b031691908960016122d0565b600480546001600160801b03928316600160801b0292169190911790556113ee81611692565b600180546001600160801b0319166001600160801b039290921691909117905561141785611692565b60018054601090611439908490600160801b90046001600160801b03166134d3565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061146685611692565b60038054601090611488908490600160801b90046001600160801b03166134d3565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006114b783612378565b9050611091816114c688611948565b61108c90846134f3565b600080843410156114f4576040516312171d8360e31b815260040160405180910390fd5b5060085460405163a1903eab60e01b81526001600160a01b03918216600482015234869003917f0000000000000000000000000000000000000000000000000000000000000000169063a1903eab90879060240160206040518083038185885af1158015611566573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061158b9190613572565b91505b935093915050565b604051636d78045960e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636d780459906064016020604051808303816000875af1158015611609573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061162d9190613572565b50505050565b600082600019048411830215820261164a57600080fd5b5091020490565b6001546003546000916106b3916001600160801b0390911690600f0b612649565b600061168982611683858888611633565b9061266f565b95945050505050565b60006001600160801b038211156116bc57604051630f0af95160e11b815260040160405180910390fd5b5090565b60008183116116cf5782610674565b50919050565b60055460009081906116f8908490600160801b90046001600160801b031661065f565b6005546201000090046001600160701b03169250905081811115611874576000611722838361342f565b9050611731610ed482866126da565b60058054601090611753908490600160801b90046001600160801b031661352a565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061178c858361263490919063ffffffff16565b905060006117ba827f000000000000000000000000000000000000000000000000000000000000000061065f565b905080600b60008282546117ce91906133c8565b909155506117de9050818361342f565b91506117e982611692565b600180546000906118049084906001600160801b03166134d3565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611831826126ef565b60038054600090611846908490600f0b61358b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806118868785612634565b915060006118b4837f000000000000000000000000000000000000000000000000000000000000000061065f565b90506118e0817f000000000000000000000000000000000000000000000000000000000000000061065f565b91508315611903576118f2828261342f565b6118fc908461342f565b925061191a565b61190d828261342f565b61191790846133c8565b92505b8686101561193d5761192d838789611633565b925061193a828789611633565b91505b509550959350505050565b60006001600160ff1b038211156116bc5760405163396ea70160e11b815260040160405180910390fd5b600354600160801b90046001600160801b03166119bb610ed48261199e670de0b6b3a764000086613513565b600454600160801b90046001600160801b031691908a60006122d0565b600480546001600160801b03928316600160801b0292169190911790556119e186611692565b6119eb908261352a565b600380546001600160801b03928316600160801b029216919091179055611a1184611692565b60018054600090611a2c9084906001600160801b03166134d3565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611a5983612719565b60038054600090611a6e908490600f0b61358b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611a9e85611692565b60018054601090611ac0908490600160801b90046001600160801b031661352a565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611b0484611afe8a888a611633565b90612634565b9050611b11888486611633565b611b1b90826133c8565b905086811115611b2b5786810391505b509695505050505050565b60006001600160701b038211156116bc5760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611ba257507f0000000000000000000000000000000000000000000000000000000000000000611ba0858361342f565b105b15611baf57611baf612237565b6003549084900390600f0b611bc484826134f3565b905083611bd086611948565b138015611c0557507f0000000000000000000000000000000000000000000000000000000000000000611c038383612649565b105b15611c1257611c12612237565b600254600160801b90046001600160801b0316611c54610ed482611c3e670de0b6b3a764000088613513565b6004546001600160801b031691908c60006122d0565b600480546001600160801b0319166001600160801b0392909216919091179055611c7e888261342f565b9050611c8981611692565b600280546001600160801b03928316600160801b029216919091179055611caf83611692565b600180546001600160801b0319166001600160801b0392909216919091179055611cd882612719565b600380546001600160801b0319166001600160801b0392909216919091179055611d0187611692565b60018054601090611d23908490600160801b90046001600160801b03166134d3565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611d7a611d608483612755565b611d6b846000612755565b611d7591906134f3565b612719565b9050600081600f0b1315611dcf5760028054829190600090611da69084906001600160801b03166134d3565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b1215611dff57611de4816135b8565b60028054600090611da69084906001600160801b031661352a565b505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611e4f916001600160801b03169061342f565b905080600003611e63576001915050610677565b6000611e6e85612764565b905080600003611e8357600192505050610677565b600080611e91838589612800565b9150915080611ea7576000945050505050610677565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611ee392919061365c565b6040805180830381865af4158015611eff573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f2391906136d2565b91509150611f41611f3382611948565b611f3c906136f6565b612974565b925082611f575760009650505050505050610677565b611f6082611692565b60068054600090611f7b9084906001600160801b03166134d3565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611fa881611692565b60068054601090611fca908490600160801b90046001600160801b03166134d3565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61202787612b0a565b6040518263ffffffff1660e01b81526004016120439190613712565b6040805180830381865af415801561205f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120839190613721565b9150915080612099575060009485945092505050565b60008086116120a95760006120b3565b6120b3838761065f565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b039092169161211e91906133c8565b612128919061342f565b9050806000036121415750600096879650945050505050565b600061214d8383612634565b98600198509650505050505050565b600061217d87878761217688670de0b6b3a764000061342f565b8787612c44565b979650505050505050565b60006121ed6121c96121a284670de0b6b3a764000061342f565b6112d9670de0b6b3a76400006121b8818a6126da565b6121c2919061342f565b87906124d6565b6121db90670de0b6b3a76400006133c8565b611afe84670de0b6b3a764000061342f565b949350505050565b60008061222c85612204611651565b61220e91906133c8565b600154610da2908790600160801b90046001600160801b031661342f565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b60008061229a856112d985817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612290818c6126da565b6112d9919061342f565b91506122c6827f000000000000000000000000000000000000000000000000000000000000000061065f565b9050935093915050565b6000826000036122e1575084611689565b8115612334576123126122f484876133c8565b6122fe858761065f565b612308888a61065f565b611afe91906133c8565b9050600061232085886116c0565b90508082101561232e578091505b50611689565b82850361234357506000611689565b61236e612350848761342f565b61235a85876124d6565b612364888a61065f565b611afe919061342f565b9695505050505050565b60006123a0600e600061238c6002866110da565b815260200190815260200160002054611948565b6123b2600e600061238c6001876110da565b61067791906134f3565b60006123e87f0000000000000000000000000000000000000000000000000000000000000000836124d6565b6002546123fe91906001600160801b03166133c8565b600154612414906001600160801b03168461065f565b101592915050565b6000610677826004611e04565b604051630f451f7160e31b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637a28fb8890602401602060405180830381865afa158015612491573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106779190613572565b600061217d8787876124cf88670de0b6b3a764000061342f565b8787612cf8565b60006106748383670de0b6b3a7640000612d1b565b600080808061253c87866125358b6112d961250e8c670de0b6b3a764000061342f565b7f0000000000000000000000000000000000000000000000000000000000000000906124d6565b9190612d1b565b9350612568847f000000000000000000000000000000000000000000000000000000000000000061065f565b9150600061258961258189670de0b6b3a764000061342f565b8a9088612d1b565b90506125b5817f00000000000000000000000000000000000000000000000000000000000000006124d6565b93506125e1847f000000000000000000000000000000000000000000000000000000000000000061065f565b6125eb90846133c8565b915050945094509450949050565b60008183116126085781610674565b5090919050565b600080612627846126218a888a612d1b565b906126da565b9050611b11888486612d1b565b600061067483670de0b6b3a764000084611633565b6000806126568484612d41565b90925090508061266857612668612237565b5092915050565b6000816000036126885750670de0b6b3a7640000610677565b8260000361269857506000610677565b60006126a383611948565b905060006126b86126b386611948565b612d7d565b90508181026126cf670de0b6b3a764000082613751565b905061236e81612fa3565b600061067483670de0b6b3a764000084612d1b565b600060016001607f1b038211156116bc5760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612737575060016001607f1b0382135b156116bc5760405163a5353be560e01b815260040160405180910390fd5b60008183136126085781610674565b600254600090819061277f906001600160801b0316846126da565b90506127ab7f0000000000000000000000000000000000000000000000000000000000000000826133c8565b6001546001600160801b031611156116cf576001547f0000000000000000000000000000000000000000000000000000000000000000906127f69083906001600160801b031661342f565b610c48919061342f565b6128086132a0565b60008061281484612b0a565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b815260040161284f9190613712565b6040805180830381865af415801561286b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061288f9190613721565b93509050826128a457506000915061158e9050565b60006128cb6128c684610160015185610140015161065f90919063ffffffff16565b611948565b6128eb6128c68561012001518661010001516124d690919063ffffffff16565b6128f591906134f3565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612a2b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a4f919061377f565b935093509350935080612a6b5750600098975050505050505050565b868414612a9c57612a7b84611692565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612acd57612aac83612719565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612afb57612add82611692565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612b126132f2565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191612c0a9116613138565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612c3c92900416613138565b905292915050565b600080612c5488888787876131ae565b9050612c6e85611683612c67898c6133c8565b869061065f565b9750612c7b848985611633565b975087811015612c8d57612c8d612237565b878103670de0b6b3a76400008110612cc257612cbb612cb4670de0b6b3a7640000886126da565b829061266f565b9050612cda565b612cd7612cb4670de0b6b3a764000088612634565b90505b80881015612cea57612cea612237565b909603979650505050505050565b600080612d098888888888886131dd565b909250905080611b2b57611b2b612237565b6000826000190484118302158202612d3257600080fd5b50910281810615159190040190565b600080600083612d5086611948565b612d5a91906134f3565b90506000811215612d72576000809250925050610658565b946001945092505050565b6000808213612d9f5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612e229084901c611948565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213612fbe57506000919050565b680755bf798b4a1bf1e58212612fe7576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061236e74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611948565b600080670de0b6b3a764000061314c61067d565b6131569190613513565b9050808311613166576000613170565b613170818461342f565b9150610c486131a7670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613513565b8390612634565b60006131ba858561266f565b6131d36131cb86611683868b6124d6565b859085612d1b565b61236e91906133c8565b60008060006131ef89898888886131ae565b90506131ff86611683898b6133c8565b975087811015613216576000809250925050613295565b878103613224818688612d1b565b9050670de0b6b3a764000081106132515761324a612cb4670de0b6b3a7640000896126da565b9050613269565b613266612cb4670de0b6b3a764000089612634565b90505b61327381866126da565b9050808a101561328b57600080935093505050613295565b8903925060019150505b965096945050505050565b6040518061012001604052806132b46132f2565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561336957600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561339557600080fd5b8501606081880312156133a757600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b80820180821115610677576106776133b2565b6000602082840312156133ed57600080fd5b81356001600160a01b0381168114610c4857600080fd5b801515811461058357600080fd5b60006020828403121561342457600080fd5b8135610c4881613404565b81810381811115610677576106776133b2565b6000808335601e1984360301811261345957600080fd5b83018035915067ffffffffffffffff82111561347457600080fd5b60200191503681900382131561065857600080fd5b634e487b7160e01b600052601260045260246000fd5b6000826134ae576134ae613489565b500690565b6001600160701b03818116838216019080821115612668576126686133b2565b6001600160801b03818116838216019080821115612668576126686133b2565b8181036000831280158383131683831282161715612668576126686133b2565b8082028115828204841417610677576106776133b2565b6001600160801b03828116828216039080821115612668576126686133b2565b808201828112600083128015821682158216171561356a5761356a6133b2565b505092915050565b60006020828403121561358457600080fd5b5051919050565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610677576106776133b2565b600081600f0b60016001607f1b031981036135d5576135d56133b2565b60000392915050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a0820190506136708285516135de565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b600080604083850312156136e557600080fd5b505080516020909101519092909150565b6000600160ff1b820161370b5761370b6133b2565b5060000390565b610180810161067782846135de565b6000806040838503121561373457600080fd5b82519150602083015161374681613404565b809150509250929050565b60008261376057613760613489565b600160ff1b82146000198414161561377a5761377a6133b2565b500590565b6000806000806080858703121561379557600080fd5b84519350602085015192506040850151915060608501516133a78161340456fea26469706673582212202491b07340d18ef850a467d5c5ac1cb75af5af99d396532b2ea678d81f87a29d64736f6c63430008140033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
