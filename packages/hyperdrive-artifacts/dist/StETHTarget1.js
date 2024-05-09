export const StETHTarget1 = {
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
    bytecode: '0x6102606040523480156200001257600080fd5b5060405162003c1038038062003c108339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161379f620004716000396000505060005050600050506000818160af0152818161033f0152612b1501526000818161135701528181611759015281816117bc015281816126f5015281816127310152818161292e0152612aef0152600081816106a901528181610d2f01528181610eee015281816116180152612ac901526000611af8015260008181611c1e01528181612208015261228101526000818161092c01528181610e7d01528181611bf20152612255015260008181610d7201526121ce0152600081816106ca01528181610d0d01528181610f0f015281816115f60152612b3b01526000818161086401528181610dfd015281816116b5015281816120a30152613059015260008181610600015281816106fc01528181610783015281816107e4015261081c01526000818161194c015281816124a4015261251c01526000505061379f6000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806329b23fc11461003b578063ded0623114610060575b600080fd5b61004e610049366004613307565b610073565b60405190815260200160405180910390f35b61004e61006e366004613307565b61008c565b60006100818585858561009a565b90505b949350505050565b60006100818585858561032a565b60006100a461057e565b6100ad826105a8565b7f00000000000000000000000000000000000000000000000000000000000000008410156100ee5760405163211ddda360e11b815260040160405180910390fd5b60006100f86105e1565b90508542101561011b5761011561010d6105f9565b82600461062f565b50610129565b6101278682600461062f565b505b61013e610137600288610bc6565b3387610bfb565b6000806000806000806101528b888e610cd4565b95509550955095509550955060008c90508c4210156102125782600b600082825461017d919061337c565b90915550610195905061018e6105f9565b4284610f6d565b6101a28c888787856110ab565b60006101ad8e611225565b90506101cb6101bb8e61126f565b6101c5908361338f565b8261129d565b6101d489611350565b6101e0576101e06113b0565b60006101eb8a6113c9565b90508061020b57604051638bdf918d60e01b815260040160405180910390fd5b5050610229565b61021c86896113d6565b9550610227886113c9565b505b6000610236878a8d6114b7565b90508b8110156102595760405163c972651760e01b815260040160405180910390fd5b8c86858b8e610269600288610bc6565b61027660208301836133af565b6001600160a01b0316337fcb02fec44af7356703a283b87ccec63f4ea688efc67fee9cdc1834a93260c7308a6102ad8b8888611551565b6102b88c8989611580565b6102c86040890160208a016133e6565b6102dc8a6102d68d8f61337c565b906115a8565b6040805195865260208601949094529284019190915215156060830152608082015260a081018a905260c00160405180910390a450939c505050505050505050505050506100846001600055565b600061033461057e565b61033d826105a8565b7f000000000000000000000000000000000000000000000000000000000000000084101561037e5760405163211ddda360e11b815260040160405180910390fd5b60006103886105e1565b9050854210156103a35761039d61010d6105f9565b506103b1565b6103af8682600461062f565b505b6103bf610137600188610bc6565b6000806000806000806103d38b888e6115bd565b95509550955095509550955060008c90508c4210156104865782600b60008282546103fe919061337c565b9091555061040f905061018e6105f9565b61041c8c88878785611742565b600061042782611225565b905061043f6104358e61126f565b6101c59083613403565b61044889611350565b610454576104546113b0565b600061045f8a6113c9565b90508061047f57604051638bdf918d60e01b815260040160405180910390fd5b505061049d565b61049086896113d6565b955061049b886113c9565b505b60006104aa878a8d6114b7565b90508b8110156104cd5760405163c972651760e01b815260040160405180910390fd5b8c898c6104db600186610bc6565b6104e860208301836133af565b6001600160a01b0316337fc0e1704f2ff88686bdc2a73d31e0dc4e054eddbdc3564af7a148229cf857b8028861051f898888611551565b61052a8a8989611580565b61053a6040890160208a016133e6565b60408051948552602085019390935291830152151560608201526080810188905260a00160405180910390a450919a50505050505050505050506100846001600055565b6002600054036105a157604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006105b760208301836133af565b6001600160a01b0316036105de5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006105f4670de0b6b3a7640000611933565b905090565b60006106257f000000000000000000000000000000000000000000000000000000000000000042613441565b6105f49042613455565b600083815260076020526040812060018101546001600160801b031615158061065757504285115b1561067057600101546001600160801b03169050610bbf565b600080600061067d6105f9565b90508088036106f5578692506106ee6106946119c0565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119e1565b91506107b1565b60006107217f00000000000000000000000000000000000000000000000000000000000000008a61337c565b90505b81810361073c578793506107396106946119c0565b92505b6000818152600760205260409020600101546001600160801b03169350831561077e576000818152600760205260409020546001600160801b031692506107af565b6107a87f00000000000000000000000000000000000000000000000000000000000000008261337c565b9050610724565b505b6107ba836119f8565b6001850180546001600160801b0319166001600160801b03929092169190911790556108106108097f00000000000000000000000000000000000000000000000000000000000000008a613455565b8984610f6d565b61084e886108486108417f00000000000000000000000000000000000000000000000000000000000000008361337c565b4290611a22565b84610f6d565b61085787611a37565b50600090506007816108897f00000000000000000000000000000000000000000000000000000000000000008c613455565b815260208101919091526040016000908120600101546001600160801b031691506108b560028b610bc6565b6000818152600e60205260408120549192508b8b83156109fb57600192506000806108e486898d866000611bdb565b9150915080600b60008282546108fa919061337c565b909155506109169050866000846109108161126f565b886110ab565b610920818361337c565b915061095086838a8e877f0000000000000000000000000000000000000000000000000000000000000000611caa565b915061096461095f83856115a8565b611cf4565b600580546002906109859084906201000090046001600160701b0316613468565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506109b2826119f8565b600580546010906109d4908490600160801b90046001600160801b0316613488565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610a08600184610bc6565b6000818152600e60205260409020549091508015610b175760019450600080610a35838b8f886001611bdb565b9150915080600b6000828254610a4b919061337c565b90915550610a67905083600084610a618161126f565b8a611742565b610a718183613455565b9150610a8061095f83876115a8565b60058054600290610aa19084906201000090046001600160701b0316613468565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610ace826119f8565b60058054601090610af0908490600160801b90046001600160801b0316613488565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610b4f57610b43610b298761126f565b610b328361126f565b610b3c919061338f565b600061129d565b610b4d838f611d1e565b505b6000610b5a84611f18565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999b5050505050505050505050505b9392505050565b60006001600160f81b03821115610bf05760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115610c3e57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290610c81908490613455565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600080600080600080600080610ce989612076565b9050610d53610cf66119c0565b600154600160801b90046001600160801b03168d847f00000000000000000000000000000000000000000000000000000000000000008f7f00000000000000000000000000000000000000000000000000000000000000006120c7565b90995096509150610d656106946119c0565b9250610d9b8289610d96867f0000000000000000000000000000000000000000000000000000000000000000612137565b612167565b15610da857610da86113b0565b8a8a60008080610dba85878a876121a9565b9b5091945092509050610dcd8184613455565b610dd7908861337c565b9650610de3828461337c565b610ded908c61337c565b9a505050505050506000600760007f00000000000000000000000000000000000000000000000000000000000000008b610e279190613455565b815260208101919091526040016000908120600101546001600160801b03169150428a11610e6f5760008a8152600760205260409020600101546001600160801b0316610e71565b8a5b9050610ea18c8884848f7f0000000000000000000000000000000000000000000000000000000000000000611caa565b9750610ead8588613455565b9650670de0b6b3a7640000610f3384610ec46119c0565b610ece919061337c565b600154610eec908d90600160801b90046001600160801b0316613455565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119e1565b1115610f4157610f416113b0565b610f5188888588868660006122bd565b939b509199509097509095505050505093975093979195509350565b600083815260076020526040902054600160801b90046001600160801b0316808303610f995750505050565b6000848152600760205260408120546001600160801b031690819003610ff357610fc2836119f8565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055611071565b61104461103f670de0b6b3a764000061100c8886613455565b61101691906134a8565b85670de0b6b3a764000061102a878a613455565b61103491906134a8565b85929190600161235c565b6119f8565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b61107a846119f8565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b03166110f461103f826110d7670de0b6b3a7640000866134a8565b600454600160801b90046001600160801b031691908a600061235c565b600480546001600160801b03928316600160801b02921691909117905561111a866119f8565b61112490826134bf565b600380546001600160801b03928316600160801b02921691909117905561114a846119f8565b600180546000906111659084906001600160801b0316613488565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061119283612406565b600380546000906111a7908490600f0b6134df565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506111d7856119f8565b600180546010906111f9908490600160801b90046001600160801b03166134bf565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600061124d600e6000611239600286610bc6565b81526020019081526020016000205461126f565b61125f600e6000611239600187610bc6565b611269919061338f565b92915050565b60006001600160ff1b038211156112995760405163396ea70160e11b815260040160405180910390fd5b5090565b60006112c66112ac8483612442565b6112b7846000612442565b6112c1919061338f565b612406565b9050600081600f0b131561131b57600280548291906000906112f29084906001600160801b0316613488565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561134b576113308161350c565b600280546000906112f29084906001600160801b03166134bf565b505050565b600061137c7f000000000000000000000000000000000000000000000000000000000000000083612458565b60025461139291906001600160801b031661337c565b6001546113a8906001600160801b0316846115a8565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000611269826004611d1e565b60008060006113e484611a37565b909250905060006113f586866115a8565b90508183111561140d5761140a86838561246d565b95505b8281101561141f578083039250611424565b600092505b61142d83611cf4565b600580546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b909104168087101561148057869003611484565b5060005b61148d816119f8565b600580546001600160801b03928316600160801b0292169190911790555085935050505092915050565b6000806114c485856115a8565b90506114cf8161248b565b9450846000036114e3576000915050610bbf565b6114f360408401602085016133e6565b156115225761151b8561150960208601866133af565b6115166040870187613532565b6124db565b9150611549565b6115458561153360208601866133af565b6115406040870187613532565b6124f6565b8491505b509392505050565b600061156360408301602084016133e6565b1561156f575082610bbf565b61157984846115a8565b9050610bbf565b600061159260408301602084016133e6565b156115a1576115798484612590565b5082610bbf565b6000610bbf8383670de0b6b3a764000061246d565b6000806000806000806000806115d289612076565b905061163c6115df6119c0565b600154600160801b90046001600160801b03168d847f00000000000000000000000000000000000000000000000000000000000000008f7f00000000000000000000000000000000000000000000000000000000000000006125a5565b90995097509150600080806116526106946119c0565b95508c6116618f8689846121a9565b9a5091955090935091506116758385613455565b61167f9087613455565b955061168b828561337c565b611695908c613455565b9a506116a1888c61337c565b9950505050505061172c86868386600760007f00000000000000000000000000000000000000000000000000000000000000008f6116df9190613455565b81526020810191909152604001600020600101546001600160801b0316428e116117235760008e8152600760205260409020600101546001600160801b0316611725565b8e5b60016122bd565b9a9e939d50919b50909950929650945050505050565b6001546001600160801b03168381108061178457507f00000000000000000000000000000000000000000000000000000000000000006117828583613455565b105b15611791576117916113b0565b6003549084900390600f0b6117a6848261338f565b9050836117b28661126f565b1380156117e757507f00000000000000000000000000000000000000000000000000000000000000006117e583836125f9565b105b156117f4576117f46113b0565b600254600160801b90046001600160801b031661183661103f82611820670de0b6b3a7640000886134a8565b6004546001600160801b031691908c600061235c565b600480546001600160801b0319166001600160801b03929092169190911790556118608882613455565b905061186b816119f8565b600280546001600160801b03928316600160801b029216919091179055611891836119f8565b600180546001600160801b0319166001600160801b03929092169190911790556118ba82612406565b600380546001600160801b0319166001600160801b03929092169190911790556118e3876119f8565b60018054601090611905908490600160801b90046001600160801b0316613488565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b604051630f451f7160e31b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637a28fb88906024015b602060405180830381865afa15801561199c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112699190613579565b6001546003546000916105f4916001600160801b0390911690600f0b6125f9565b6000610081826119f285888861246d565b9061261f565b60006001600160801b0382111561129957604051630f0af95160e11b815260040160405180910390fd5b6000818311611a315782610bbf565b50919050565b6005546000908190611a5a908490600160801b90046001600160801b03166115a8565b6005546201000090046001600160701b03169250905081811115611bd6576000611a848383613455565b9050611a9361103f8286612694565b60058054601090611ab5908490600160801b90046001600160801b03166134bf565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611aee858361259090919063ffffffff16565b90506000611b1c827f00000000000000000000000000000000000000000000000000000000000000006115a8565b905080600b6000828254611b30919061337c565b90915550611b4090508183613455565b9150611b4b826119f8565b60018054600090611b669084906001600160801b0316613488565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b93826126a9565b60038054600090611ba8908490600f0b6134df565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611be88785612590565b91506000611c16837f00000000000000000000000000000000000000000000000000000000000000006115a8565b9050611c42817f00000000000000000000000000000000000000000000000000000000000000006115a8565b91508315611c6557611c548282613455565b611c5e9084613455565b9250611c7c565b611c6f8282613455565b611c79908461337c565b92505b86861015611c9f57611c8f83878961246d565b9250611c9c82878961246d565b91505b509550959350505050565b600080611cc284611cbc8a888a61246d565b90612590565b9050611ccf88848661246d565b611cd9908261337c565b905086811115611ce95786810391505b509695505050505050565b60006001600160701b038211156112995760405163086b151760e11b815260040160405180910390fd5b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611d69916001600160801b031690613455565b905080600003611d7d576001915050611269565b6000611d88856126d3565b905080600003611d9d57600192505050611269565b600080611dab83858961276f565b9150915080611dc1576000945050505050611269565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611dfd929190613610565b6040805180830381865af4158015611e19573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e3d9190613686565b91509150611e5b611e4d8261126f565b611e56906136aa565b6128ea565b925082611e715760009650505050505050611269565b611e7a826119f8565b60068054600090611e959084906001600160801b0316613488565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ec2816119f8565b60068054601090611ee4908490600160801b90046001600160801b0316613488565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611f4187612a80565b6040518263ffffffff1660e01b8152600401611f5d91906136c6565b6040805180830381865af4158015611f79573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f9d91906136d5565b9150915080611fb3575060009485945092505050565b6000808611611fc3576000611fcd565b611fcd83876115a8565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691612038919061337c565b6120429190613455565b90508060000361205b5750600096879650945050505050565b60006120678383612590565b98600198509650505050505050565b6000806120816105f9565b905080831161209157600061209b565b61209b8184613455565b9150610bbf827f0000000000000000000000000000000000000000000000000000000000000000612590565b600080806120e86120e088670de0b6b3a7640000613455565b899087612bba565b9050861561212a576120fa8888612458565b915061211b8a8a846121148a670de0b6b3a7640000613455565b8989612be0565b9250612127838261337c565b90505b9750975097945050505050565b600061215561214e84670de0b6b3a7640000613455565b8390612458565b610bbf90670de0b6b3a7640000613455565b60008061219e856121766119c0565b612180919061337c565b600154610eec908790600160801b90046001600160801b0316613455565b909210949350505050565b600080808061220087866121f98b6121f36121cc8c670de0b6b3a7640000613455565b7f000000000000000000000000000000000000000000000000000000000000000090612458565b90612458565b9190612bba565b935061222c847f00000000000000000000000000000000000000000000000000000000000000006115a8565b9150600061224d61224589670de0b6b3a7640000613455565b8a9088612bba565b9050612279817f0000000000000000000000000000000000000000000000000000000000000000612458565b93506122a5847f00000000000000000000000000000000000000000000000000000000000000006115a8565b6122af908461337c565b915050945094509450949050565b6000806000806000808888101561232c5786156122e2576122df8d898b61246d565b9c505b6122ed8c898b61246d565b9b506122f88b61126f565b6123018d61126f565b61230b919061338f565b90506123188b898b61246d565b9a506123258a898b61246d565b995061234b565b6123358b61126f565b61233e8d61126f565b612348919061338f565b90505b9b9c9a9b999a975050505050505050565b60008260000361236d5750846123fd565b81156123c05761239e612380848761337c565b61238a85876115a8565b612394888a6115a8565b611cbc919061337c565b905060006123ac8588611a22565b9050808210156123ba578091505b506123fd565b8285036123cf575060006123fd565b6123fa6123dc8487613455565b6123e68587612458565b6123f0888a6115a8565b611cbc9190613455565b90505b95945050505050565b600060016001607f1b0319821280612424575060016001607f1b0382135b156112995760405163a5353be560e01b815260040160405180910390fd5b60008183136124515781610bbf565b5090919050565b6000610bbf8383670de0b6b3a7640000612bba565b600082600019048411830215820261248457600080fd5b5091020490565b604051631920845160e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063192084519060240161197f565b600060405163350b944160e11b815260040160405180910390fd5b604051638fcb4e5b60e01b81526001600160a01b038481166004830152602482018690527f00000000000000000000000000000000000000000000000000000000000000001690638fcb4e5b906044016020604051808303816000875af1158015612565573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125899190613579565b5050505050565b6000610bbf83670de0b6b3a76400008461246d565b600080806125c66125be88670de0b6b3a7640000613455565b89908761246d565b9050861561212a576125d888886115a8565b915061211b8a8a846125f28a670de0b6b3a7640000613455565b8989612c03565b6000806126068484612c14565b909250905080612618576126186113b0565b5092915050565b6000816000036126385750670de0b6b3a7640000611269565b8260000361264857506000611269565b60006126538361126f565b905060006126686126638661126f565b612c53565b905081810261267f670de0b6b3a764000082613705565b905061268a81612e79565b9695505050505050565b6000610bbf83670de0b6b3a764000084612bba565b600060016001607f1b038211156112995760405163a5353be560e01b815260040160405180910390fd5b60025460009081906126ee906001600160801b031684612694565b905061271a7f00000000000000000000000000000000000000000000000000000000000000008261337c565b6001546001600160801b03161115611a31576001547f0000000000000000000000000000000000000000000000000000000000000000906127659083906001600160801b0316613455565b610bbf9190613455565b612777613254565b60008061278384612a80565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016127be91906136c6565b6040805180830381865af41580156127da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127fe91906136d5565b93509050826128135750600091506128e29050565b600061283a6128358461016001518561014001516115a890919063ffffffff16565b61126f565b61285a61283585610120015186610100015161245890919063ffffffff16565b612864919061338f565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af41580156129a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129c59190613733565b9350935093509350806129e15750600098975050505050505050565b868414612a12576129f1846119f8565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612a4357612a2283612406565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612a7157612a53826119f8565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612a886132a6565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191612b80911661300e565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612bb29290041661300e565b905292915050565b6000826000190484118302158202612bd157600080fd5b50910281810615159190040190565b600080612bf1888888888888613084565b909250905080611ce957611ce96113b0565b600080612bf1888888888888613165565b600080600083612c238661126f565b612c2d919061338f565b90506000811215612c45576000809250925050612c4c565b9150600190505b9250929050565b6000808213612c755760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612cf89084901c61126f565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213612e9457506000919050565b680755bf798b4a1bf1e58212612ebd576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061268a74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61126f565b600080670de0b6b3a76400006130226105f9565b61302c91906134a8565b905080831161303c576000613046565b6130468184613455565b9150610bbf61307d670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006134a8565b8390612590565b60008060006130968989888888613225565b9050868810156130ad57600080925092505061315a565b96869003966130bc888761261f565b9750878110156130d357600080925092505061315a565b8781036130e1818688612bba565b9050670de0b6b3a764000081106131155761310e613107670de0b6b3a764000089612694565b829061261f565b905061312d565b61312a613107670de0b6b3a764000089612590565b90505b6131378186612694565b90508981101561314f5760008093509350505061315a565b899003925060019150505b965096945050505050565b60008060006131778989888888613225565b9050613187866119f2898b61337c565b97508781101561319e57600080925092505061315a565b8781036131ac818688612bba565b9050670de0b6b3a764000081106131d9576131d2613107670de0b6b3a764000089612694565b90506131f1565b6131ee613107670de0b6b3a764000089612590565b90505b6131fb8186612694565b9050808a10156132135760008093509350505061315a565b90980398600198509650505050505050565b6000613231858561261f565b61324a613242866119f2868b612458565b859085612bba565b6123fa919061337c565b6040518061012001604052806132686132a6565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561331d57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561334957600080fd5b85016060818803121561335b57600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561126957611269613366565b818103600083128015838313168383128216171561261857612618613366565b6000602082840312156133c157600080fd5b81356001600160a01b0381168114610bbf57600080fd5b80151581146105de57600080fd5b6000602082840312156133f857600080fd5b8135610bbf816133d8565b808201828112600083128015821682158216171561342357613423613366565b505092915050565b634e487b7160e01b600052601260045260246000fd5b6000826134505761345061342b565b500690565b8181038181111561126957611269613366565b6001600160701b0381811683821601908082111561261857612618613366565b6001600160801b0381811683821601908082111561261857612618613366565b808202811582820484141761126957611269613366565b6001600160801b0382811682821603908082111561261857612618613366565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561126957611269613366565b600081600f0b60016001607f1b0319810361352957613529613366565b60000392915050565b6000808335601e1984360301811261354957600080fd5b83018035915067ffffffffffffffff82111561356457600080fd5b602001915036819003821315612c4c57600080fd5b60006020828403121561358b57600080fd5b5051919050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613624828551613592565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b6000806040838503121561369957600080fd5b505080516020909101519092909150565b6000600160ff1b82016136bf576136bf613366565b5060000390565b61018081016112698284613592565b600080604083850312156136e857600080fd5b8251915060208301516136fa816133d8565b809150509250929050565b6000826137145761371461342b565b600160ff1b82146000198414161561372e5761372e613366565b500590565b6000806000806080858703121561374957600080fd5b845193506020850151925060408501519150606085015161335b816133d856fea2646970667358221220c24c0b6116999559b66d0bc7097b5a084cb438fe88b309daf9d7ad85732782a464736f6c63430008140033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
    }
};
