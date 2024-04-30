export const MockHyperdriveMath = {
    abi: [
        {
            "type": "function",
            "name": "calculateAbsoluteMaxLong",
            "inputs": [
                {
                    "name": "_params",
                    "type": "tuple",
                    "internalType": "struct HyperdriveUtils.MaxTradeParams",
                    "components": [
                        {
                            "name": "shareReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "shareAdjustment",
                            "type": "int256",
                            "internalType": "int256"
                        },
                        {
                            "name": "bondReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "longsOutstanding",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "longExposure",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "timeStretch",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "vaultSharePrice",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "initialVaultSharePrice",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "minimumShareReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "curveFee",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "flatFee",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "governanceLPFee",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "_effectiveShareReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_spotPrice",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateCloseLong",
            "inputs": [
                {
                    "name": "_effectiveShareReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_bondReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_amountIn",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_normalizedTimeRemaining",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_timeStretch",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_vaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_initialVaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateCloseShort",
            "inputs": [
                {
                    "name": "_effectiveShareReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_bondReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_amountOut",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_normalizedTimeRemaining",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_timeStretch",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_vaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_initialVaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateEffectiveShareReserves",
            "inputs": [
                {
                    "name": "_shareReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_shareAdjustment",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateInitialBondReserves",
            "inputs": [
                {
                    "name": "_effectiveShareReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_initialVaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_apr",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_positionDuration",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_timeStretch",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateMaxLong",
            "inputs": [
                {
                    "name": "_params",
                    "type": "tuple",
                    "internalType": "struct HyperdriveUtils.MaxTradeParams",
                    "components": [
                        {
                            "name": "shareReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "shareAdjustment",
                            "type": "int256",
                            "internalType": "int256"
                        },
                        {
                            "name": "bondReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "longsOutstanding",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "longExposure",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "timeStretch",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "vaultSharePrice",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "initialVaultSharePrice",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "minimumShareReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "curveFee",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "flatFee",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "governanceLPFee",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "_checkpointExposure",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "_maxIterations",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateMaxShort",
            "inputs": [
                {
                    "name": "_params",
                    "type": "tuple",
                    "internalType": "struct HyperdriveUtils.MaxTradeParams",
                    "components": [
                        {
                            "name": "shareReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "shareAdjustment",
                            "type": "int256",
                            "internalType": "int256"
                        },
                        {
                            "name": "bondReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "longsOutstanding",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "longExposure",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "timeStretch",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "vaultSharePrice",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "initialVaultSharePrice",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "minimumShareReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "curveFee",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "flatFee",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "governanceLPFee",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "_checkpointExposure",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "_maxIterations",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateNegativeInterestOnClose",
            "inputs": [
                {
                    "name": "_shareProceeds",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_shareReservesDelta",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_shareCurveDelta",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_totalGovernanceFee",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_openVaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_closeVaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_isLong",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateOpenLong",
            "inputs": [
                {
                    "name": "_effectiveShareReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_bondReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_amountIn",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_timeStretch",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_vaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_initialVaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateOpenShort",
            "inputs": [
                {
                    "name": "_effectiveShareReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_bondReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_amountIn",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_timeStretch",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_vaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_initialVaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateShortProceedsDown",
            "inputs": [
                {
                    "name": "_bondAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_shareAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_openVaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_closeVaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_vaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_flatFee",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateShortProceedsUp",
            "inputs": [
                {
                    "name": "_bondAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_shareAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_openVaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_closeVaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_vaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_flatFee",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateSpotAPR",
            "inputs": [
                {
                    "name": "_effectiveShareReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_bondReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_initialVaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_positionDuration",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_timeStretch",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateSpotPrice",
            "inputs": [
                {
                    "name": "_shareReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_bondReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_initialVaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_timeStretch",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateTimeStretch",
            "inputs": [
                {
                    "name": "apr",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "positionDuration",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "error",
            "name": "ExpInvalidExponent",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InsufficientLiquidity",
            "inputs": []
        },
        {
            "type": "error",
            "name": "LnInvalidInput",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsafeCastToInt256",
            "inputs": []
        }
    ],
    bytecode: '0x608060405234801561001057600080fd5b506123de806100206000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063902b109911610097578063bc1e106511610066578063bc1e106514610236578063dbab851214610249578063e7acd3ad1461025c578063f87845f21461026f57600080fd5b8063902b1099146101cf57806394169d49146101e25780639e489b9914610210578063a280a2821461022357600080fd5b80635e6d9d36116100d35780635e6d9d361461015b5780636ceebe1d1461016e5780637ef99f871461018157806382a4d306146101bc57600080fd5b80632471caed146100fa5780632810a036146101205780633f77b61714610133575b600080fd5b61010d610108366004612035565b610282565b6040519081526020015b60405180910390f35b61010d61012e366004612067565b61029b565b610146610141366004612177565b6102b6565b60408051928352602083019190915201610117565b61010d6101693660046121ae565b6102d7565b61010d61017c3660046121ae565b6102f4565b61019461018f3660046121f1565b610305565b604080519586526020860194909452928401919091526060830152608082015260a001610117565b61010d6101ca366004612067565b610389565b61010d6101dd3660046121ae565b610399565b6101f56101f0366004612256565b6103aa565b60408051938452602084019290925290820152606001610117565b61010d61021e366004612177565b6103da565b610146610231366004612177565b6103f1565b61010d6102443660046122a2565b610402565b61010d6102573660046122a2565b610419565b61010d61026a3660046121ae565b610426565b6101f561027d366004612256565b610437565b6000806102918686868661044f565b9695505050505050565b6000806102ab878787878761046f565b979650505050505050565b6000806000806102c78787876104aa565b909450925050505b935093915050565b6000806102e88888888888886106be565b98975050505050505050565b6000806102e88888888888886106df565b600080600080600061033f6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b61034e8d8d8d8d8d8d8d610700565b608086018190526060860182905260408601839052602086018490529484905292985090965094509250905097509750975097509792505050565b6000806102ab878787878761079f565b6000806102e8888888888888610830565b6000806000806000806103c28d8d8d8d8d8d8d61087a565b919750955093505050505b9750975097945050505050565b60006103e78484846108e9565b90505b9392505050565b6000806000806102c7878787610a9b565b60008061040f8484610ceb565b9150505b92915050565b60008061040f8484610d11565b6000806102e8888888888888610da8565b6000806000806000806103c28d8d8d8d8d8d8d610dc7565b600061046682610460858888610e1b565b90610e39565b95945050505050565b60008061047e8787878661044f565b90506102ab61049282866301e13380610e9f565b6104a483670de0b6b3a76400006122da565b90610ec5565b60008060006104c186600001518760200151610ceb565b905060006104dd8288604001518960e001518a60a0015161044f565b90506000806104ed898585610a9b565b909250905060006105018a8a858588610eda565b9150508015610518575090945092506102cf915050565b5061052589838a86611012565b9550610533898786866110b2565b94506000806105458b8b8a8a89610eda565b91509150806105b55760405162461bcd60e51b815260206004820152603160248201527f496e697469616c20677565737320696e206063616c63756c6174654d61784c6f6044820152703733b01034b99034b739b7b63b32b73a1760791b60648201526084015b60405180910390fd5b60005b898110156106af5784891061062b5760405162461bcd60e51b815260206004820152603360248201527f52656163686564206162736f6c757465206d617820626f6e6420616d6f756e746044820152721034b7103033b2ba2fb6b0bc2fb637b733b01760691b60648201526084016105ac565b60006106398d8b8a8a611105565b935090508261064857506106af565b60006106548583610ec5565b61065e908c6122ed565b9050600061066e8f838c8c6110b2565b905061067d8f8f84848d610eda565b9096509450841561069357819b50809a5061069b565b5050506106af565b505050806106a890612300565b90506105b8565b50505050505050935093915050565b60006102ab8787876106d888670de0b6b3a76400006122da565b878761119e565b60006102ab8787876106f988670de0b6b3a76400006122da565b878761124b565b6000806000806000808888101561076f578615610725576107228d898b610e1b565b9c505b6107308c898b610e1b565b9b5061073b8b61126e565b6107448d61126e565b61074e9190612319565b905061075b8b898b610e1b565b9a506107688a898b610e1b565b995061078e565b6107788b61126e565b6107818d61126e565b61078b9190612319565b90505b9b9c9a9b999a975050505050505050565b6000806107b0846301e13380610ec5565b905060006107be868361129c565b6107d090670de0b6b3a76400006122ed565b9050670de0b6b3a76400008110610804576107fd6107f6670de0b6b3a764000086610ec5565b8290610e39565b905061081c565b6108196107f6670de0b6b3a7640000866112b1565b90505b6102e88161082a898b61129c565b9061129c565b600080610848846108428a888a610e9f565b906112b1565b9050610855888486610e9f565b61085f90826122ed565b90508681111561086f5786810391505b509695505050505050565b6000808061089b61089388670de0b6b3a76400006122da565b899087610e1b565b905086156103cd576108ad888861129c565b91506108ce8a8a846108c78a670de0b6b3a76400006122da565b898961124b565b92506108da83826122ed565b90509750975097945050505050565b60408051606081018252600080825260208201819052918101829052600061091986600001518760200151610ceb565b905060006109358288604001518960e001518a60a0015161044f565b9050600061094388846112c6565b9050610952888285858b6113e6565b158015604087015290855261096c5793506103ea92505050565b600061097989848a6114dc565b9050610988898286868c6113e6565b1515604087018190529086526109fa5760405162461bcd60e51b815260206004820152603160248201527f496e697469616c20677565737320696e206063616c63756c6174654d617853686044820152701bdc9d18081a5cc81a5b9cdbdb1d995b9d607a1b60648201526084016105ac565b60005b87811015610a8e57610a118a8386886115b2565b15801560408901526020880191909152610a8e5760208601518651600091610a399190610ec5565b610a4390846122ed565b905083811115610a535750610a8e565b610a608b8288888e6113e6565b15801560408a0152908852610a7757809250610a7d565b50610a8e565b50610a8781612300565b90506109fd565b5098975050505050505050565b600080600080610ad18688604001518960a00151670de0b6b3a7640000610ac291906122da565b8a60c001518b60e00151611639565b9050610b21876101400151670de0b6b3a7640000610aef91906122da565b610b1b670de0b6b3a7640000610b05818a6112b1565b610b0f91906122da565b6101208b015190611668565b90611668565b9150610b51876101400151670de0b6b3a7640000610b3f91906122da565b61084284670de0b6b3a76400006122ed565b60a0880151909250610b7a90610b73906104a481670de0b6b3a76400006122da565b8390610e39565b9150610b978760e001518860c001516112b190919063ffffffff16565b610ba190836122ed565b9150610bad8183610ec5565b9150610bdc610b738860a00151670de0b6b3a7640000610bcd91906122da565b670de0b6b3a764000090610ec5565b9150506000610bf88760e0015183610ec590919063ffffffff16565b9050600080610c45896101400151670de0b6b3a7640000610c1991906122da565b61082a670de0b6b3a7640000610c2f818c610ec5565b610c3991906122da565b6101208d01519061129c565b9050610c9b8461082a610c6d8c60a00151670de0b6b3a76400006112b190919063ffffffff16565b6104608d6101400151670de0b6b3a7640000610c8991906122da565b6104a487670de0b6b3a76400006122ed565b915050610cb28860c00151888461082a91906122da565b9450610cc485878a610120015161167d565b818960400151610cd491906122da565b610cde91906122da565b9350505050935093915050565b600080610cf884846116aa565b909250905080610d0a57610d0a6116e9565b5092915050565b600080610d42610d33610d25866064612339565b66a5bbed86c5a0009061129c565b6748cd4072281e000090610ec5565b9050610d56670de0b6b3a764000082610ec5565b905061040f8161082a610d81610d7c610d7789670de0b6b3a76400006122ed565b61126e565b611702565b6104a4610d7c610d968a8a6301e13380610e1b565b610d7790670de0b6b3a76400006122ed565b600080610dba846104a48a888a610e1b565b9050610855888486610e1b565b60008080610de8610de088670de0b6b3a76400006122da565b899087610e9f565b905086156103cd57610dfa8888611668565b91506108ce8a8a84610e148a670de0b6b3a76400006122da565b8989611931565b6000826000190484118302158202610e3257600080fd5b5091020490565b600081600003610e525750670de0b6b3a7640000610413565b82600003610e6257506000610413565b6000610e6d8361126e565b90506000610e7d610d7c8661126e565b9050818102610e94670de0b6b3a764000082612350565b905061029181611942565b6000826000190484118302158202610eb657600080fd5b50910281810615159190040190565b60006103ea83670de0b6b3a764000084610e1b565b6000806000610ef586858a61012001518b6101600151611ad7565b90506000610f108960c0015183610ec590919063ffffffff16565b60c08a0151610f20908990610ec5565b8a51610f2c91906122ed565b610f3691906122da565b90506000868a60800151610f4a91906122ed565b90506000610f588a82611af1565b610f619061238c565b90508a6101000151610f808c60c0015184610ec590919063ffffffff16565b610f8a91906122ed565b60c08c0151610f9a908390610ec5565b610fa490856122ed565b10610ffc576101008b015160c08c0151610fbf908490610ec5565b60c08d0151610fcf908490610ec5565b610fd990866122ed565b610fe391906122da565b610fed91906122da565b60019550955050505050611008565b60008095509550505050505b9550959350505050565b60008061102186858586611b06565b90506000611068670b1a2bc2ec50000061082a61105e8a60a00151670de0b6b3a764000061104f91906122da565b670de0b6b3a7640000906112b1565b610460868b610ec5565b9050600061107e670de0b6b3a76400008361129c565b61109a61109384670de0b6b3a76400006122da565b879061129c565b6110a491906122ed565b90506102e888878784611b06565b6000806110e98487604001516110d58960c0015189610ec590919063ffffffff16565b8960a001518a60c001518b60e001516106be565b90506110fb858488610120015161167d565b61029190826122da565b60008061111486868686611c09565b9092509050806111275760009150611195565b61115161113c84670de0b6b3a76400006122da565b61012088015161016089015161082a9161129c565b61115b90836122ed565b915061116f670de0b6b3a7640000836122da565b9150611192670de0b6b3a76400008760c0015184610e1b9092919063ffffffff16565b91505b94509492505050565b6000806111ae8888878787611d59565b90506111c8856104606111c1898c6122ed565b869061129c565b97506111d5848985610e1b565b9750878110156111e7576111e76116e9565b878103670de0b6b3a764000081106112155761120e6107f6670de0b6b3a7640000886112b1565b905061122d565b61122a6107f6670de0b6b3a764000088610ec5565b90505b8088101561123d5761123d6116e9565b909603979650505050505050565b60008061125c888888888888611d7e565b90925090508061086f5761086f6116e9565b60006001600160ff1b038211156112985760405163396ea70160e11b815260040160405180910390fd5b5090565b60006103ea8383670de0b6b3a7640000610e1b565b60006103ea83670de0b6b3a764000084610e9f565b6000806112e160008560200151611e4190919063ffffffff16565b8461010001516112f191906122ed565b905060006113258486604001518760a00151670de0b6b3a764000061131691906122da565b8860c001518960e00151611639565b905060006113766113638760a00151670de0b6b3a764000061134791906122da565b610460611358878b60200151610ceb565b60e08b015190611668565b60e088015160c0890151610b1b916112b1565b61138090836122da565b9050670de0b6b3a764000081106113b6576113af6107f68760a00151670de0b6b3a7640000610bcd91906122da565b90506113d7565b6113d46107f68760a00151670de0b6b3a764000061104f91906122da565b90505b604086015161029190826122da565b60008060008061141d878a604001518a8c60a00151670de0b6b3a764000061140e91906122da565b8d60c001518e60e00151611d7e565b915091508061143457600080935093505050611008565b600061146e8a60c001516114548b8a8e61012001518f6101600151611e57565b6114648c8b8f6101200151611e6e565b6104a491906122da565b61147890846122da565b8a5161148491906122da565b905060006114b38b60c001516114a460008a611e4190919063ffffffff16565b8d608001516104a491906122da565b90508a6101000151816114c691906122ed565b8210610ffc576101008b0151610fe382846122da565b60008083905060006115478661010001516115088860c001518960800151610ec590919063ffffffff16565b60c089015161151c906104a4896000611e41565b895161152891906122ed565b61153291906122da565b61153c91906122da565b60c08801519061129c565b905061029161157661156187670de0b6b3a76400006122da565b6101208901516101608a015161082a9161129c565b61159761158b88670de0b6b3a76400006122da565b6101208a01519061129c565b6115a190856122da565b6115ab91906122ed565b8290610ec5565b60008060006115c2878786611e89565b9050600061160b8860c001516104a48a6101600151670de0b6b3a76400006115ea91906122da565b61082a6115ff8b670de0b6b3a76400006122da565b6101208e01519061129c565b905080821061162b5761161e81836122da565b6001935093505050611195565b600080935093505050611195565b60006116458585610e39565b61165e61165686610460868b61129c565b859085610e1b565b61029191906122ed565b60006103ea8383670de0b6b3a7640000610e9f565b60006103e78461082a670de0b6b3a76400006116998188610ec5565b6116a391906122da565b859061129c565b6000806000836116b98661126e565b6116c39190612319565b905060008112156116db5760008092509250506116e2565b9150600190505b9250929050565b60405163bb55fd2760e01b815260040160405180910390fd5b60008082136117245760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906117b09084901c61126e565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b60008061125c888888888888611f5e565b6000680248ce36a70cb26b3e19821361195d57506000919050565b680755bf798b4a1bf1e58212611986576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061029174029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61126e565b6000610466611ae786868661167d565b61082a848761129c565b6000818313611b0057826103ea565b50919050565b600080611b138582611af1565b611b1c9061238c565b90506000611b898760c00151671bc16d674ec80000896101000151611b528b60c001518c60800151610ec590919063ffffffff16565b60c08c0151611b62908890610ec5565b8c51611b6e91906122ed565b611b7891906122da565b611b8291906122da565b9190610e1b565b90506102ab611bae670de0b6b3a7640000611ba48189610ec5565b61158b91906122da565b670de0b6b3a7640000611bd9611bc489836122da565b6101208c01516101608d015161082a9161129c565b611beb670de0b6b3a764000089610ec5565b611bf591906122ed565b611bff91906122da565b6115ab91906122da565b6000806000611c258760c0015187610ec590919063ffffffff16565b90506000611c41611c3683886122ed565b60e08a01519061129c565b90506000611c75878a604001518b60a00151670de0b6b3a7640000611c6691906122da565b8c60c001518d60e00151611639565b9050611c91610bcd8a60a0015184610e3990919063ffffffff16565b94506000611cc0611caf8b60a0015185610e3990919063ffffffff16565b60e08c015160c08d01519190610e1b565b905080821015611cda576000809550955050505050611195565b611d10611093611d068c60a00151670de0b6b3a7640000611cfb91906122da565b60a08e0151906112b1565b61046084866122da565b9550611d3e670de0b6b3a7640000611d28818a610ec5565b611d3291906122da565b6101208c01519061129c565b611d4890876122da565b9a60019a5098505050505050505050565b6000611d658585610e39565b61165e611d7686610460868b611668565b859085610e9f565b6000806000611d908989888888611d59565b9050611da086610460898b6122ed565b975087811015611db7576000809250925050611e36565b878103611dc5818688610e9f565b9050670de0b6b3a76400008110611df257611deb6107f6670de0b6b3a7640000896112b1565b9050611e0a565b611e076107f6670de0b6b3a764000089610ec5565b90505b611e1481866112b1565b9050808a1015611e2c57600080935093505050611e36565b8903925060019150505b965096945050505050565b6000818313611e5057816103ea565b5090919050565b6000610466611e67868686611e6e565b839061129c565b60006103e78461082a6116a386670de0b6b3a76400006122da565b600080611ead8386604001518760a00151670de0b6b3a764000061131691906122da565b90506000611eda610bcd611ecf8860a00151888a6040015161046091906122ed565b60c089015190611668565b90506000611f52611f078860a00151670de0b6b3a7640000611efc91906122da565b60a08a0151906112b1565b610460611f358a60a00151670de0b6b3a7640000611f2591906122da565b8a8c6040015161046091906122ed565b611f3f90876122da565b60c08b015160e08c015161082a91610ec5565b90506102ab828261129c565b6000806000611f708989888888611d59565b905086881015611f87576000809250925050611e36565b9686900396611f968887610e39565b975087811015611fad576000809250925050611e36565b878103611fbb818688610e9f565b9050670de0b6b3a76400008110611fe857611fe16107f6670de0b6b3a7640000896112b1565b9050612000565b611ffd6107f6670de0b6b3a764000089610ec5565b90505b61200a81866112b1565b90508981101561202257600080935093505050611e36565b9890980398600198509650505050505050565b6000806000806080858703121561204b57600080fd5b5050823594602084013594506040840135936060013592509050565b600080600080600060a0868803121561207f57600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b604051610180810167ffffffffffffffff811182821017156120d457634e487b7160e01b600052604160045260246000fd5b60405290565b600061018082840312156120ed57600080fd5b6120f56120a2565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016080830135818301525092915050565b60008060006101c0848603121561218d57600080fd5b61219785856120da565b9561018085013595506101a0909401359392505050565b60008060008060008060c087890312156121c757600080fd5b505084359660208601359650604086013595606081013595506080810135945060a0013592509050565b600080600080600080600060e0888a03121561220c57600080fd5b873596506020880135955060408801359450606088013593506080880135925060a0880135915060c0880135801515811461224657600080fd5b8091505092959891949750929550565b600080600080600080600060e0888a03121561227157600080fd5b505085359760208701359750604087013596606081013596506080810135955060a0810135945060c0013592509050565b600080604083850312156122b557600080fd5b50508035926020909101359150565b634e487b7160e01b600052601160045260246000fd5b81810381811115610413576104136122c4565b80820180821115610413576104136122c4565b600060018201612312576123126122c4565b5060010190565b8181036000831280158383131683831282161715610d0a57610d0a6122c4565b8082028115828204841417610413576104136122c4565b60008261236d57634e487b7160e01b600052601260045260246000fd5b600160ff1b821460001984141615612387576123876122c4565b500590565b6000600160ff1b82016123a1576123a16122c4565b506000039056fea2646970667358221220ca17ea443e12fa4d2f4f18ee1ab49d85651ff84e928fb81f0a34339e20b5c9d564736f6c63430008140033',
    methodIdentifiers: {
        "calculateAbsoluteMaxLong((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256)": "a280a282",
        "calculateCloseLong(uint256,uint256,uint256,uint256,uint256,uint256,uint256)": "94169d49",
        "calculateCloseShort(uint256,uint256,uint256,uint256,uint256,uint256,uint256)": "f87845f2",
        "calculateEffectiveShareReserves(uint256,int256)": "bc1e1065",
        "calculateInitialBondReserves(uint256,uint256,uint256,uint256,uint256)": "82a4d306",
        "calculateMaxLong((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),int256,uint256)": "3f77b617",
        "calculateMaxShort((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),int256,uint256)": "9e489b99",
        "calculateNegativeInterestOnClose(uint256,uint256,uint256,uint256,uint256,uint256,bool)": "7ef99f87",
        "calculateOpenLong(uint256,uint256,uint256,uint256,uint256,uint256)": "5e6d9d36",
        "calculateOpenShort(uint256,uint256,uint256,uint256,uint256,uint256)": "6ceebe1d",
        "calculateShortProceedsDown(uint256,uint256,uint256,uint256,uint256,uint256)": "e7acd3ad",
        "calculateShortProceedsUp(uint256,uint256,uint256,uint256,uint256,uint256)": "902b1099",
        "calculateSpotAPR(uint256,uint256,uint256,uint256,uint256)": "2810a036",
        "calculateSpotPrice(uint256,uint256,uint256,uint256)": "2471caed",
        "calculateTimeStretch(uint256,uint256)": "dbab8512"
    }
};
