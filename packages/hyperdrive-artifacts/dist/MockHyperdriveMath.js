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
    bytecode: '0x608060405234801561001057600080fd5b506123b3806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063902b10991161008c578063a280a28211610066578063a280a28214610218578063dbab85121461022b578063e7acd3ad1461023e578063f87845f21461025157600080fd5b8063902b1099146101c457806394169d49146101d75780639e489b991461020557600080fd5b80635e6d9d36116100c85780635e6d9d36146101505780636ceebe1d146101635780637ef99f871461017657806382a4d306146101b157600080fd5b80632471caed146100ef5780632810a036146101155780633f77b61714610128575b600080fd5b6101026100fd36600461200a565b610264565b6040519081526020015b60405180910390f35b61010261012336600461203c565b61027d565b61013b61013636600461214c565b610298565b6040805192835260208301919091520161010c565b61010261015e366004612183565b6102b9565b610102610171366004612183565b6102d6565b6101896101843660046121c6565b6102e7565b604080519586526020860194909452928401919091526060830152608082015260a00161010c565b6101026101bf36600461203c565b61036b565b6101026101d2366004612183565b61037b565b6101ea6101e536600461222b565b61038c565b6040805193845260208401929092529082015260600161010c565b61010261021336600461214c565b6103bc565b61013b61022636600461214c565b6103d3565b610102610239366004612277565b6103e4565b61010261024c366004612183565b6103fb565b6101ea61025f36600461222b565b61040c565b60008061027386868686610424565b9695505050505050565b60008061028d8787878787610444565b979650505050505050565b6000806000806102a987878761047f565b909450925050505b935093915050565b6000806102ca888888888888610693565b98975050505050505050565b6000806102ca8888888888886106b4565b60008060008060006103216040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b6103308d8d8d8d8d8d8d6106d5565b608086018190526060860182905260408601839052602086018490529484905292985090965094509250905097509750975097509792505050565b60008061028d8787878787610774565b6000806102ca888888888888610805565b6000806000806000806103a48d8d8d8d8d8d8d61084f565b919750955093505050505b9750975097945050505050565b60006103c98484846108be565b90505b9392505050565b6000806000806102a9878787610a70565b6000806103f18484610cc0565b9150505b92915050565b6000806102ca888888888888610d57565b6000806000806000806103a48d8d8d8d8d8d8d610d76565b600061043b82610435858888610dca565b90610de8565b95945050505050565b60008061045387878786610424565b905061028d61046782866301e13380610e4e565b61047983670de0b6b3a76400006122af565b90610e74565b600080600061049686600001518760200151610e89565b905060006104b28288604001518960e001518a60a00151610424565b90506000806104c2898585610a70565b909250905060006104d68a8a858588610eaf565b91505080156104ed575090945092506102b1915050565b506104fa89838a86610fe7565b955061050889878686611087565b945060008061051a8b8b8a8a89610eaf565b915091508061058a5760405162461bcd60e51b815260206004820152603160248201527f496e697469616c20677565737320696e206063616c63756c6174654d61784c6f6044820152703733b01034b99034b739b7b63b32b73a1760791b60648201526084015b60405180910390fd5b60005b89811015610684578489106106005760405162461bcd60e51b815260206004820152603360248201527f52656163686564206162736f6c757465206d617820626f6e6420616d6f756e746044820152721034b7103033b2ba2fb6b0bc2fb637b733b01760691b6064820152608401610581565b600061060e8d8b8a8a6110da565b935090508261061d5750610684565b60006106298583610e74565b610633908c6122c2565b905060006106438f838c8c611087565b90506106528f8f84848d610eaf565b9096509450841561066857819b50809a50610670565b505050610684565b5050508061067d906122d5565b905061058d565b50505050505050935093915050565b600061028d8787876106ad88670de0b6b3a76400006122af565b8787611173565b600061028d8787876106ce88670de0b6b3a76400006122af565b8787611220565b600080600080600080888810156107445786156106fa576106f78d898b610dca565b9c505b6107058c898b610dca565b9b506107108b611243565b6107198d611243565b61072391906122ee565b90506107308b898b610dca565b9a5061073d8a898b610dca565b9950610763565b61074d8b611243565b6107568d611243565b61076091906122ee565b90505b9b9c9a9b999a975050505050505050565b600080610785846301e13380610e74565b905060006107938683611271565b6107a590670de0b6b3a76400006122c2565b9050670de0b6b3a764000081106107d9576107d26107cb670de0b6b3a764000086610e74565b8290610de8565b90506107f1565b6107ee6107cb670de0b6b3a764000086611286565b90505b6102ca816107ff898b611271565b90611271565b60008061081d846108178a888a610e4e565b90611286565b905061082a888486610e4e565b61083490826122c2565b9050868111156108445786810391505b509695505050505050565b6000808061087061086888670de0b6b3a76400006122af565b899087610dca565b905086156103af576108828888611271565b91506108a38a8a8461089c8a670de0b6b3a76400006122af565b8989611220565b92506108af83826122c2565b90509750975097945050505050565b6040805160608101825260008082526020820181905291810182905260006108ee86600001518760200151610e89565b9050600061090a8288604001518960e001518a60a00151610424565b90506000610918888461129b565b9050610927888285858b6113bb565b15801560408701529085526109415793506103cc92505050565b600061094e89848a6114b1565b905061095d898286868c6113bb565b1515604087018190529086526109cf5760405162461bcd60e51b815260206004820152603160248201527f496e697469616c20677565737320696e206063616c63756c6174654d617853686044820152701bdc9d18081a5cc81a5b9cdbdb1d995b9d607a1b6064820152608401610581565b60005b87811015610a63576109e68a838688611587565b15801560408901526020880191909152610a635760208601518651600091610a0e9190610e74565b610a1890846122c2565b905083811115610a285750610a63565b610a358b8288888e6113bb565b15801560408a0152908852610a4c57809250610a52565b50610a63565b50610a5c816122d5565b90506109d2565b5098975050505050505050565b600080600080610aa68688604001518960a00151670de0b6b3a7640000610a9791906122af565b8a60c001518b60e0015161160e565b9050610af6876101400151670de0b6b3a7640000610ac491906122af565b610af0670de0b6b3a7640000610ada818a611286565b610ae491906122af565b6101208b01519061163d565b9061163d565b9150610b26876101400151670de0b6b3a7640000610b1491906122af565b61081784670de0b6b3a76400006122c2565b60a0880151909250610b4f90610b489061047981670de0b6b3a76400006122af565b8390610de8565b9150610b6c8760e001518860c0015161128690919063ffffffff16565b610b7690836122c2565b9150610b828183610e74565b9150610bb1610b488860a00151670de0b6b3a7640000610ba291906122af565b670de0b6b3a764000090610e74565b9150506000610bcd8760e0015183610e7490919063ffffffff16565b9050600080610c1a896101400151670de0b6b3a7640000610bee91906122af565b6107ff670de0b6b3a7640000610c04818c610e74565b610c0e91906122af565b6101208d015190611271565b9050610c70846107ff610c428c60a00151670de0b6b3a764000061128690919063ffffffff16565b6104358d6101400151670de0b6b3a7640000610c5e91906122af565b61047987670de0b6b3a76400006122c2565b915050610c878860c0015188846107ff91906122af565b9450610c9985878a6101200151611652565b818960400151610ca991906122af565b610cb391906122af565b9350505050935093915050565b600080610cf1610ce2610cd486606461230e565b66a5bbed86c5a00090611271565b6748cd4072281e000090610e74565b9050610d05670de0b6b3a764000082610e74565b90506103f1816107ff610d30610d2b610d2689670de0b6b3a76400006122c2565b611243565b61167f565b610479610d2b610d458a8a6301e13380610dca565b610d2690670de0b6b3a76400006122c2565b600080610d69846104798a888a610dca565b905061082a888486610dca565b60008080610d97610d8f88670de0b6b3a76400006122af565b899087610e4e565b905086156103af57610da9888861163d565b91506108a38a8a84610dc38a670de0b6b3a76400006122af565b89896118ae565b6000826000190484118302158202610de157600080fd5b5091020490565b600081600003610e015750670de0b6b3a76400006103f5565b82600003610e11575060006103f5565b6000610e1c83611243565b90506000610e2c610d2b86611243565b9050818102610e43670de0b6b3a764000082612325565b9050610273816118bf565b6000826000190484118302158202610e6557600080fd5b50910281810615159190040190565b60006103cc83670de0b6b3a764000084610dca565b600080610e968484611a54565b909250905080610ea857610ea8611a93565b5092915050565b6000806000610eca86858a61012001518b6101600151611aac565b90506000610ee58960c0015183610e7490919063ffffffff16565b60c08a0151610ef5908990610e74565b8a51610f0191906122c2565b610f0b91906122af565b90506000868a60800151610f1f91906122c2565b90506000610f2d8a82611ac6565b610f3690612361565b90508a6101000151610f558c60c0015184610e7490919063ffffffff16565b610f5f91906122c2565b60c08c0151610f6f908390610e74565b610f7990856122c2565b10610fd1576101008b015160c08c0151610f94908490610e74565b60c08d0151610fa4908490610e74565b610fae90866122c2565b610fb891906122af565b610fc291906122af565b60019550955050505050610fdd565b60008095509550505050505b9550959350505050565b600080610ff686858586611adb565b9050600061103d670b1a2bc2ec5000006107ff6110338a60a00151670de0b6b3a764000061102491906122af565b670de0b6b3a764000090611286565b610435868b610e74565b90506000611053670de0b6b3a764000083611271565b61106f61106884670de0b6b3a76400006122af565b8790611271565b61107991906122c2565b90506102ca88878784611adb565b6000806110be8487604001516110aa8960c0015189610e7490919063ffffffff16565b8960a001518a60c001518b60e00151610693565b90506110d08584886101200151611652565b61027390826122af565b6000806110e986868686611bde565b9092509050806110fc576000915061116a565b61112661111184670de0b6b3a76400006122af565b6101208801516101608901516107ff91611271565b61113090836122c2565b9150611144670de0b6b3a7640000836122af565b9150611167670de0b6b3a76400008760c0015184610dca9092919063ffffffff16565b91505b94509492505050565b6000806111838888878787611d2e565b905061119d85610435611196898c6122c2565b8690611271565b97506111aa848985610dca565b9750878110156111bc576111bc611a93565b878103670de0b6b3a764000081106111ea576111e36107cb670de0b6b3a764000088611286565b9050611202565b6111ff6107cb670de0b6b3a764000088610e74565b90505b8088101561121257611212611a93565b909603979650505050505050565b600080611231888888888888611d53565b90925090508061084457610844611a93565b60006001600160ff1b0382111561126d5760405163396ea70160e11b815260040160405180910390fd5b5090565b60006103cc8383670de0b6b3a7640000610dca565b60006103cc83670de0b6b3a764000084610e4e565b6000806112b660008560200151611e1690919063ffffffff16565b8461010001516112c691906122c2565b905060006112fa8486604001518760a00151670de0b6b3a76400006112eb91906122af565b8860c001518960e0015161160e565b9050600061134b6113388760a00151670de0b6b3a764000061131c91906122af565b61043561132d878b60200151610e89565b60e08b01519061163d565b60e088015160c0890151610af091611286565b61135590836122af565b9050670de0b6b3a7640000811061138b576113846107cb8760a00151670de0b6b3a7640000610ba291906122af565b90506113ac565b6113a96107cb8760a00151670de0b6b3a764000061102491906122af565b90505b604086015161027390826122af565b6000806000806113f2878a604001518a8c60a00151670de0b6b3a76400006113e391906122af565b8d60c001518e60e00151611d53565b915091508061140957600080935093505050610fdd565b60006114438a60c001516114298b8a8e61012001518f6101600151611e2c565b6114398c8b8f6101200151611e43565b61047991906122af565b61144d90846122af565b8a5161145991906122af565b905060006114888b60c0015161147960008a611e1690919063ffffffff16565b8d6080015161047991906122af565b90508a61010001518161149b91906122c2565b8210610fd1576101008b0151610fb882846122af565b600080839050600061151c8661010001516114dd8860c001518960800151610e7490919063ffffffff16565b60c08901516114f190610479896000611e16565b89516114fd91906122c2565b61150791906122af565b61151191906122af565b60c088015190611271565b905061027361154b61153687670de0b6b3a76400006122af565b6101208901516101608a01516107ff91611271565b61156c61156088670de0b6b3a76400006122af565b6101208a015190611271565b61157690856122af565b61158091906122c2565b8290610e74565b6000806000611597878786611e5e565b905060006115e08860c001516104798a6101600151670de0b6b3a76400006115bf91906122af565b6107ff6115d48b670de0b6b3a76400006122af565b6101208e015190611271565b9050808210611600576115f381836122af565b600193509350505061116a565b60008093509350505061116a565b600061161a8585610de8565b61163361162b86610435868b611271565b859085610dca565b61027391906122c2565b60006103cc8383670de0b6b3a7640000610e4e565b60006103c9846107ff670de0b6b3a764000061166e8188610e74565b61167891906122af565b8590611271565b60008082136116a15760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061172d9084901c611243565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b600080611231888888888888611f33565b6000680248ce36a70cb26b3e1982136118da57506000919050565b680755bf798b4a1bf1e58212611903576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061027374029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611243565b600080600083611a6386611243565b611a6d91906122ee565b90506000811215611a85576000809250925050611a8c565b9150600190505b9250929050565b60405163bb55fd2760e01b815260040160405180910390fd5b600061043b611abc868686611652565b6107ff8487611271565b6000818313611ad557826103cc565b50919050565b600080611ae88582611ac6565b611af190612361565b90506000611b5e8760c00151671bc16d674ec80000896101000151611b278b60c001518c60800151610e7490919063ffffffff16565b60c08c0151611b37908890610e74565b8c51611b4391906122c2565b611b4d91906122af565b611b5791906122af565b9190610dca565b905061028d611b83670de0b6b3a7640000611b798189610e74565b61156091906122af565b670de0b6b3a7640000611bae611b9989836122af565b6101208c01516101608d01516107ff91611271565b611bc0670de0b6b3a764000089610e74565b611bca91906122c2565b611bd491906122af565b61158091906122af565b6000806000611bfa8760c0015187610e7490919063ffffffff16565b90506000611c16611c0b83886122c2565b60e08a015190611271565b90506000611c4a878a604001518b60a00151670de0b6b3a7640000611c3b91906122af565b8c60c001518d60e0015161160e565b9050611c66610ba28a60a0015184610de890919063ffffffff16565b94506000611c95611c848b60a0015185610de890919063ffffffff16565b60e08c015160c08d01519190610dca565b905080821015611caf57600080955095505050505061116a565b611ce5611068611cdb8c60a00151670de0b6b3a7640000611cd091906122af565b60a08e015190611286565b61043584866122af565b9550611d13670de0b6b3a7640000611cfd818a610e74565b611d0791906122af565b6101208c015190611271565b611d1d90876122af565b9a60019a5098505050505050505050565b6000611d3a8585610de8565b611633611d4b86610435868b61163d565b859085610e4e565b6000806000611d658989888888611d2e565b9050611d7586610435898b6122c2565b975087811015611d8c576000809250925050611e0b565b878103611d9a818688610e4e565b9050670de0b6b3a76400008110611dc757611dc06107cb670de0b6b3a764000089611286565b9050611ddf565b611ddc6107cb670de0b6b3a764000089610e74565b90505b611de98186611286565b9050808a1015611e0157600080935093505050611e0b565b8903925060019150505b965096945050505050565b6000818313611e2557816103cc565b5090919050565b600061043b611e3c868686611e43565b8390611271565b60006103c9846107ff61167886670de0b6b3a76400006122af565b600080611e828386604001518760a00151670de0b6b3a76400006112eb91906122af565b90506000611eaf610ba2611ea48860a00151888a6040015161043591906122c2565b60c08901519061163d565b90506000611f27611edc8860a00151670de0b6b3a7640000611ed191906122af565b60a08a015190611286565b610435611f0a8a60a00151670de0b6b3a7640000611efa91906122af565b8a8c6040015161043591906122c2565b611f1490876122af565b60c08b015160e08c01516107ff91610e74565b905061028d8282611271565b6000806000611f458989888888611d2e565b905086881015611f5c576000809250925050611e0b565b9686900396611f6b8887610de8565b975087811015611f82576000809250925050611e0b565b878103611f90818688610e4e565b9050670de0b6b3a76400008110611fbd57611fb66107cb670de0b6b3a764000089611286565b9050611fd5565b611fd26107cb670de0b6b3a764000089610e74565b90505b611fdf8186611286565b905089811015611ff757600080935093505050611e0b565b9890980398600198509650505050505050565b6000806000806080858703121561202057600080fd5b5050823594602084013594506040840135936060013592509050565b600080600080600060a0868803121561205457600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b604051610180810167ffffffffffffffff811182821017156120a957634e487b7160e01b600052604160045260246000fd5b60405290565b600061018082840312156120c257600080fd5b6120ca612077565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016080830135818301525092915050565b60008060006101c0848603121561216257600080fd5b61216c85856120af565b9561018085013595506101a0909401359392505050565b60008060008060008060c0878903121561219c57600080fd5b505084359660208601359650604086013595606081013595506080810135945060a0013592509050565b600080600080600080600060e0888a0312156121e157600080fd5b873596506020880135955060408801359450606088013593506080880135925060a0880135915060c0880135801515811461221b57600080fd5b8091505092959891949750929550565b600080600080600080600060e0888a03121561224657600080fd5b505085359760208701359750604087013596606081013596506080810135955060a0810135945060c0013592509050565b6000806040838503121561228a57600080fd5b50508035926020909101359150565b634e487b7160e01b600052601160045260246000fd5b818103818111156103f5576103f5612299565b808201808211156103f5576103f5612299565b6000600182016122e7576122e7612299565b5060010190565b8181036000831280158383131683831282161715610ea857610ea8612299565b80820281158282048414176103f5576103f5612299565b60008261234257634e487b7160e01b600052601260045260246000fd5b600160ff1b82146000198414161561235c5761235c612299565b500590565b6000600160ff1b820161237657612376612299565b506000039056fea2646970667358221220afdbfbfa079fb19dc9018eebbf7894ac1bd66b1267bb3369529f7aca65e1433c64736f6c63430008140033',
    methodIdentifiers: {
        "calculateAbsoluteMaxLong((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256)": "a280a282",
        "calculateCloseLong(uint256,uint256,uint256,uint256,uint256,uint256,uint256)": "94169d49",
        "calculateCloseShort(uint256,uint256,uint256,uint256,uint256,uint256,uint256)": "f87845f2",
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
