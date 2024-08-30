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
    bytecode: '0x608060405234801561001057600080fd5b50612385806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806394169d491161008c578063bc1e106511610066578063bc1e106514610218578063dbab85121461022b578063e7acd3ad1461023e578063f87845f21461025157600080fd5b806394169d49146101c45780639e489b99146101f2578063a280a2821461020557600080fd5b80635e6d9d36116100c85780635e6d9d36146101505780636ceebe1d146101635780637ef99f8714610176578063902b1099146101b157600080fd5b80632471caed146100ef5780632810a036146101155780633f77b61714610128575b600080fd5b6101026100fd366004611ff5565b610264565b6040519081526020015b60405180910390f35b610102610123366004612027565b61027d565b61013b610136366004612137565b610298565b6040805192835260208301919091520161010c565b61010261015e36600461216e565b6102b9565b61010261017136600461216e565b6102d6565b6101896101843660046121b1565b6102e7565b604080519586526020860194909452928401919091526060830152608082015260a00161010c565b6101026101bf36600461216e565b61036b565b6101d76101d2366004612216565b61037c565b6040805193845260208401929092529082015260600161010c565b610102610200366004612137565b6103ac565b61013b610213366004612137565b6103c3565b610102610226366004612262565b6103d4565b610102610239366004612262565b6103eb565b61010261024c36600461216e565b6103f8565b6101d761025f366004612216565b610409565b60008061027386868686610421565b9695505050505050565b60008061028d8787878787610441565b979650505050505050565b6000806000806102a987878761045c565b909450925050505b935093915050565b6000806102ca88888888888861066a565b98975050505050505050565b6000806102ca88888888888861068b565b60008060008060006103216040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b6103308d8d8d8d8d8d8d6106ac565b608086018190526060860182905260408601839052602086018490529484905292985090965094509250905097509750975097509792505050565b6000806102ca88888888888861074b565b6000806000806000806103948d8d8d8d8d8d8d610795565b919750955093505050505b9750975097945050505050565b60006103b9848484610804565b90505b9392505050565b6000806000806102a98787876109ae565b6000806103e18484610c0a565b9150505b92915050565b6000806103e18484610c30565b6000806102ca888888888888610cc7565b6000806000806000806103948d8d8d8d8d8d8d610ce6565b600061043882610432858888610d3a565b90610d58565b95945050505050565b60008061045087878786610421565b905061028d8185610dbe565b600080600061047386600001518760200151610c0a565b9050600061048f8288604001518960e001518a60a00151610421565b905060008061049f8985856109ae565b909250905060006104b38a8a858588610de4565b91505080156104ca575090945092506102b1915050565b506104d789838a86610f1c565b95506104e589878686610fbc565b94506000806104f78b8b8a8a89610de4565b91509150806105675760405162461bcd60e51b815260206004820152603160248201527f496e697469616c20677565737320696e206063616c63756c6174654d61784c6f6044820152703733b01034b99034b739b7b63b32b73a1760791b60648201526084015b60405180910390fd5b60005b8981101561065b578489106105dd5760405162461bcd60e51b815260206004820152603360248201527f52656163686564206162736f6c757465206d617820626f6e6420616d6f756e746044820152721034b7103033b2ba2fb6b0bc2fb637b733b01760691b606482015260840161055e565b60006105eb8d8b8a8a61100f565b93509050826105fa575061065b565b600061060685836110a8565b610610908c61229a565b905060006106208f838c8c610fbc565b905061062f8f8f84848d610de4565b9096509450841561064557819b50809a5061064d565b50505061065b565b50505080600101905061056a565b50505050505050935093915050565b600061028d87878761068488670de0b6b3a76400006122ad565b87876110bd565b600061028d8787876106a588670de0b6b3a76400006122ad565b87876110e0565b6000806000806000808888101561071b5786156106d1576106ce8d898b610d3a565b9c505b6106dc8c898b610d3a565b9b506106e78b6110f1565b6106f08d6110f1565b6106fa91906122c0565b90506107078b898b610d3a565b9a506107148a898b610d3a565b995061073a565b6107248b6110f1565b61072d8d6110f1565b61073791906122c0565b90505b9b9c9a9b999a975050505050505050565b6000806107638461075d8a888a61111f565b90611145565b905061077088848661111f565b61077a908261229a565b90508681111561078a5786810391505b509695505050505050565b600080806107b66107ae88670de0b6b3a76400006122ad565b899087610d3a565b9050861561039f576107c8888861115a565b91506107e98a8a846107e28a670de0b6b3a76400006122ad565b89896110e0565b92506107f5838261229a565b90509750975097945050505050565b60408051606081018252600080825260208201819052918101829052600061083486600001518760200151610c0a565b905060006108508288604001518960e001518a60a00151610421565b9050600061085e888461116f565b905061086d888285858b611294565b15801560408701529085526108875793506103bc92505050565b600061089489848a6113f4565b90506108a3898286868c611294565b1515604087018190529086526109155760405162461bcd60e51b815260206004820152603160248201527f496e697469616c20677565737320696e206063616c63756c6174654d617853686044820152701bdc9d18081a5cc81a5b9cdbdb1d995b9d607a1b606482015260840161055e565b60005b878110156109a15761092c8a8386886114ca565b158015604089015260208801919091526109a1576020860151865160009161095491906110a8565b61095e908461229a565b90508381111561096e57506109a1565b61097b8b8288888e611294565b15801560408a015290885261099257809250610998565b506109a1565b50600101610918565b5098975050505050505050565b6000806000806109e48688604001518960a00151670de0b6b3a76400006109d591906122ad565b8a60c001518b60e00151611551565b9050610a34876101400151670de0b6b3a7640000610a0291906122ad565b610a2e670de0b6b3a7640000610a18818a611145565b610a2291906122ad565b6101208b015190611580565b90611580565b9150610a64876101400151670de0b6b3a7640000610a5291906122ad565b61075d84670de0b6b3a764000061229a565b60a0880151909250610a9390610a8c90610a8681670de0b6b3a76400006122ad565b906110a8565b8390610d58565b9150610ab08760e001518860c0015161114590919063ffffffff16565b610aba908361229a565b9150610ac681836110a8565b9150610af5610a8c8860a00151670de0b6b3a7640000610ae691906122ad565b670de0b6b3a7640000906110a8565b9150506000610b118760e00151836110a890919063ffffffff16565b9050600080610b64896101400151670de0b6b3a7640000610b3291906122ad565b610b5e670de0b6b3a7640000610b48818c6110a8565b610b5291906122ad565b6101208d01519061115a565b9061115a565b9050610bba84610b5e610b8c8c60a00151670de0b6b3a764000061114590919063ffffffff16565b6104328d6101400151670de0b6b3a7640000610ba891906122ad565b610a8687670de0b6b3a764000061229a565b915050610bd18860c001518884610b5e91906122ad565b9450610be385878a6101200151611595565b818960400151610bf391906122ad565b610bfd91906122ad565b9350505050935093915050565b600080610c1784846115c2565b909250905080610c2957610c29611601565b5092915050565b600080610c61610c52610c448660646122e0565b66a5bbed86c5a0009061115a565b6748cd4072281e0000906110a8565b9050610c75670de0b6b3a7640000826110a8565b90506103e181610b5e610ca0610c9b610c9689670de0b6b3a764000061229a565b6110f1565b61161a565b610a86610c9b610cb58a8a6301e13380610d3a565b610c9690670de0b6b3a764000061229a565b600080610cd984610a868a888a610d3a565b9050610770888486610d3a565b60008080610d07610cff88670de0b6b3a76400006122ad565b89908761111f565b9050861561039f57610d198888611580565b91506107e98a8a84610d338a670de0b6b3a76400006122ad565b8989611849565b6000826000190484118302158202610d5157600080fd5b5091020490565b600081600003610d715750670de0b6b3a76400006103e5565b82600003610d81575060006103e5565b6000610d8c836110f1565b90506000610d9c610c9b866110f1565b9050818102610db3670de0b6b3a7640000826122f7565b90506102738161185a565b60006103bc610dd284846301e1338061111f565b610a8685670de0b6b3a76400006122ad565b6000806000610dff86858a61012001518b61016001516119ef565b90506000610e1a8960c00151836110a890919063ffffffff16565b60c08a0151610e2a9089906110a8565b8a51610e36919061229a565b610e4091906122ad565b90506000868a60800151610e54919061229a565b90506000610e628a82611a04565b610e6b90612333565b90508a6101000151610e8a8c60c00151846110a890919063ffffffff16565b610e94919061229a565b60c08c0151610ea49083906110a8565b610eae908561229a565b10610f06576101008b015160c08c0151610ec99084906110a8565b60c08d0151610ed99084906110a8565b610ee3908661229a565b610eed91906122ad565b610ef791906122ad565b60019550955050505050610f12565b60008095509550505050505b9550959350505050565b600080610f2b86858586611a19565b90506000610f72670b1a2bc2ec500000610b5e610f688a60a00151670de0b6b3a7640000610f5991906122ad565b670de0b6b3a764000090611145565b610432868b6110a8565b90506000610f88670de0b6b3a76400008361115a565b610fa4610f9d84670de0b6b3a76400006122ad565b879061115a565b610fae919061229a565b90506102ca88878784611a19565b600080610ff3848760400151610fdf8960c00151896110a890919063ffffffff16565b8960a001518a60c001518b60e0015161066a565b90506110058584886101200151611595565b61027390826122ad565b60008061101e86868686611b1c565b909250905080611031576000915061109f565b61105b61104684670de0b6b3a76400006122ad565b610120880151610160890151610b5e9161115a565b611065908361229a565b9150611079670de0b6b3a7640000836122ad565b915061109c670de0b6b3a76400008760c0015184610d3a9092919063ffffffff16565b91505b94509492505050565b60006103bc83670de0b6b3a764000084610d3a565b6000806110ce888888888888611c6c565b90925090508061078a5761078a611601565b6000806110ce888888888888611d26565b60006001600160ff1b0382111561111b5760405163396ea70160e11b815260040160405180910390fd5b5090565b600082600019048411830215820261113657600080fd5b50910281810615159190040190565b60006103bc83670de0b6b3a76400008461111f565b60006103bc8383670de0b6b3a7640000610d3a565b60008061118a60008560200151611de690919063ffffffff16565b84610100015161119a919061229a565b905060006111ce8486604001518760a00151670de0b6b3a76400006111bf91906122ad565b8860c001518960e00151611551565b9050600061121d61120c8760a00151670de0b6b3a76400006111f091906122ad565b610432611201878b60200151610c0a565b60e08b015190611580565b60e088015160c0890151919061111f565b61122790836122ad565b9050670de0b6b3a764000081106112645761125d6112568760a00151670de0b6b3a7640000610ae691906122ad565b8290610d58565b9050611285565b6112826112568760a00151670de0b6b3a7640000610f5991906122ad565b90505b604086015161027390826122ad565b6000806000806112cb878a604001518a8c60a00151670de0b6b3a76400006112bc91906122ad565b8d60c001518e60e00151611d26565b91509150806112e257600080935093505050610f12565b600061131c8a60c001516113028b8a8e61012001518f6101600151611dfc565b6113128c8b8f6101200151611e09565b61075d91906122ad565b9050808310156113355760008094509450505050610f12565b600061134182856122ad565b9050808b60000151101561135f576000809550955050505050610f12565b8a5160009061136f9083906122ad565b9050600061139e8d60c0015161138f60008c611de690919063ffffffff16565b8f60800151610a8691906122ad565b90508c6101000151816113b1919061229a565b82106113e2576101008d01516113c782846122ad565b6113d191906122ad565b600197509750505050505050610f12565b60008097509750505050505050610f12565b600080839050600061145f8661010001516114208860c0015189608001516110a890919063ffffffff16565b60c089015161143490610a86896000611de6565b8951611440919061229a565b61144a91906122ad565b61145491906122ad565b60c08801519061115a565b905061027361148e61147987670de0b6b3a76400006122ad565b6101208901516101608a0151610b5e9161115a565b6114af6114a388670de0b6b3a76400006122ad565b6101208a01519061115a565b6114b990856122ad565b6114c3919061229a565b82906110a8565b60008060006114da878786611e24565b905060006115238860c00151610a868a6101600151670de0b6b3a764000061150291906122ad565b610b5e6115178b670de0b6b3a76400006122ad565b6101208e01519061115a565b90508082106115435761153681836122ad565b600193509350505061109f565b60008093509350505061109f565b600061155d8585610d58565b61157661156e86610432868b61115a565b859085610d3a565b610273919061229a565b60006103bc8383670de0b6b3a764000061111f565b60006103b984610a2e670de0b6b3a76400006115b18188611145565b6115bb91906122ad565b8590611580565b6000806000836115d1866110f1565b6115db91906122c0565b905060008112156115f35760008092509250506115fa565b9150600190505b9250929050565b60405163bb55fd2760e01b815260040160405180910390fd5b600080821361163c5760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906116c89084901c6110f1565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000806110ce888888888888611ef9565b6000680248ce36a70cb26b3e19821361187557506000919050565b680755bf798b4a1bf1e5821261189e576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061027374029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6110f1565b600061043884610b5e84610b5e898989611595565b6000818313611a1357826103bc565b50919050565b600080611a268582611a04565b611a2f90612333565b90506000611a9c8760c00151671bc16d674ec80000896101000151611a658b60c001518c608001516110a890919063ffffffff16565b60c08c0151611a759088906110a8565b8c51611a81919061229a565b611a8b91906122ad565b611a9591906122ad565b9190610d3a565b905061028d611ac1670de0b6b3a7640000611ab781896110a8565b6114a391906122ad565b670de0b6b3a7640000611aec611ad789836122ad565b6101208c01516101608d0151610b5e9161115a565b611afe670de0b6b3a7640000896110a8565b611b08919061229a565b611b1291906122ad565b6114c391906122ad565b6000806000611b388760c00151876110a890919063ffffffff16565b90506000611b54611b49838861229a565b60e08a01519061115a565b90506000611b88878a604001518b60a00151670de0b6b3a7640000611b7991906122ad565b8c60c001518d60e00151611551565b9050611ba4610ae68a60a0015184610d5890919063ffffffff16565b94506000611bd3611bc28b60a0015185610d5890919063ffffffff16565b60e08c015160c08d01519190610d3a565b905080821015611bed57600080955095505050505061109f565b611c23610f9d611c198c60a00151670de0b6b3a7640000611c0e91906122ad565b60a08e015190611145565b61043284866122ad565b9550611c51670de0b6b3a7640000611c3b818a6110a8565b611c4591906122ad565b6101208c01519061115a565b611c5b90876122ad565b9a60019a5098505050505050505050565b6000806000611c7e8989888888611fd0565b9050611c9186610432610f9d8a8d61229a565b9850611c9e858a86610d3a565b985088811015611cb5576000809250925050611d1b565b888103670de0b6b3a76400008110611ce357611cdc611256670de0b6b3a764000089611145565b9050611cfb565b611cf8611256670de0b6b3a7640000896110a8565b90505b80891015611d1157600080935093505050611d1b565b8803925060019150505b965096945050505050565b6000806000611d388989888888611fd0565b9050611d4886610432898b61229a565b975087811015611d5f576000809250925050611d1b565b878103611d6d81868861111f565b9050670de0b6b3a76400008110611d9a57611d93611256670de0b6b3a764000089611145565b9050611db2565b611daf611256670de0b6b3a7640000896110a8565b90505b611dbc8186611145565b9050808a1015611dd457600080935093505050611d1b565b90980398600198509650505050505050565b6000818313611df557816103bc565b5090919050565b600061043882610b5e8787875b60006103b984610a2e6115bb86670de0b6b3a76400006122ad565b600080611e488386604001518760a00151670de0b6b3a76400006111bf91906122ad565b90506000611e75610ae6611e6a8860a00151888a60400151610432919061229a565b60c089015190611580565b90506000611eed611ea28860a00151670de0b6b3a7640000611e9791906122ad565b60a08a015190611145565b610432611ed08a60a00151670de0b6b3a7640000611ec091906122ad565b8a8c60400151610432919061229a565b611eda90876122ad565b60c08b015160e08c0151610b5e916110a8565b905061028d828261115a565b6000806000611f0b8989888888611fd0565b905086881015611f22576000809250925050611d1b565b9686900396611f318887610d58565b975087811015611f48576000809250925050611d1b565b878103611f5681868861111f565b9050670de0b6b3a76400008110611f8357611f7c611256670de0b6b3a764000089611145565b9050611f9b565b611f98611256670de0b6b3a7640000896110a8565b90505b611fa58186611145565b905089811015611fbd57600080935093505050611d1b565b9890980398600198509650505050505050565b6000611fdc8585610d58565b611576611fed86610432868b611580565b85908561111f565b6000806000806080858703121561200b57600080fd5b5050823594602084013594506040840135936060013592509050565b600080600080600060a0868803121561203f57600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b604051610180810167ffffffffffffffff8111828210171561209457634e487b7160e01b600052604160045260246000fd5b60405290565b600061018082840312156120ad57600080fd5b6120b5612062565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016080830135818301525092915050565b60008060006101c0848603121561214d57600080fd5b612157858561209a565b9561018085013595506101a0909401359392505050565b60008060008060008060c0878903121561218757600080fd5b505084359660208601359650604086013595606081013595506080810135945060a0013592509050565b600080600080600080600060e0888a0312156121cc57600080fd5b873596506020880135955060408801359450606088013593506080880135925060a0880135915060c0880135801515811461220657600080fd5b8091505092959891949750929550565b600080600080600080600060e0888a03121561223157600080fd5b505085359760208701359750604087013596606081013596506080810135955060a0810135945060c0013592509050565b6000806040838503121561227557600080fd5b50508035926020909101359150565b634e487b7160e01b600052601160045260246000fd5b808201808211156103e5576103e5612284565b818103818111156103e5576103e5612284565b8181036000831280158383131683831282161715610c2957610c29612284565b80820281158282048414176103e5576103e5612284565b60008261231457634e487b7160e01b600052601260045260246000fd5b600160ff1b82146000198414161561232e5761232e612284565b500590565b6000600160ff1b820161234857612348612284565b506000039056fea2646970667358221220f3a52e7faa222da655154afc8b6a69def73573a0399de54948edb40b48d78e5264736f6c63430008160033',
    methodIdentifiers: {
        "calculateAbsoluteMaxLong((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256)": "a280a282",
        "calculateCloseLong(uint256,uint256,uint256,uint256,uint256,uint256,uint256)": "94169d49",
        "calculateCloseShort(uint256,uint256,uint256,uint256,uint256,uint256,uint256)": "f87845f2",
        "calculateEffectiveShareReserves(uint256,int256)": "bc1e1065",
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
