export declare const MockHyperdriveMath: {
    readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ExpInvalidExponent";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "enum IHyperdrive.InsufficientLiquidityReason";
            readonly name: "reason";
            readonly type: "uint8";
        }];
        readonly name: "InsufficientLiquidity";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "LnInvalidInput";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "shareReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "int256";
                readonly name: "shareAdjustment";
                readonly type: "int256";
            }, {
                readonly internalType: "uint256";
                readonly name: "bondReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "longsOutstanding";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "longExposure";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "timeStretch";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "vaultSharePrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "initialVaultSharePrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minimumShareReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "curveFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "flatFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "governanceLPFee";
                readonly type: "uint256";
            }];
            readonly internalType: "struct HyperdriveUtils.MaxTradeParams";
            readonly name: "_params";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "_effectiveShareReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_spotPrice";
            readonly type: "uint256";
        }];
        readonly name: "calculateAbsoluteMaxLong";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_effectiveShareReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_bondReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_normalizedTimeRemaining";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_timeStretch";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_vaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_initialVaultSharePrice";
            readonly type: "uint256";
        }];
        readonly name: "calculateCloseLong";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_effectiveShareReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_bondReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountOut";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_normalizedTimeRemaining";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_timeStretch";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_vaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_initialVaultSharePrice";
            readonly type: "uint256";
        }];
        readonly name: "calculateCloseShort";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_effectiveShareReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_initialVaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_apr";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_positionDuration";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_timeStretch";
            readonly type: "uint256";
        }];
        readonly name: "calculateInitialBondReserves";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "shareReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "int256";
                readonly name: "shareAdjustment";
                readonly type: "int256";
            }, {
                readonly internalType: "uint256";
                readonly name: "bondReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "longsOutstanding";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "longExposure";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "timeStretch";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "vaultSharePrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "initialVaultSharePrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minimumShareReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "curveFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "flatFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "governanceLPFee";
                readonly type: "uint256";
            }];
            readonly internalType: "struct HyperdriveUtils.MaxTradeParams";
            readonly name: "_params";
            readonly type: "tuple";
        }, {
            readonly internalType: "int256";
            readonly name: "_checkpointExposure";
            readonly type: "int256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_maxIterations";
            readonly type: "uint256";
        }];
        readonly name: "calculateMaxLong";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "shareReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "int256";
                readonly name: "shareAdjustment";
                readonly type: "int256";
            }, {
                readonly internalType: "uint256";
                readonly name: "bondReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "longsOutstanding";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "longExposure";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "timeStretch";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "vaultSharePrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "initialVaultSharePrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minimumShareReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "curveFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "flatFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "governanceLPFee";
                readonly type: "uint256";
            }];
            readonly internalType: "struct HyperdriveUtils.MaxTradeParams";
            readonly name: "_params";
            readonly type: "tuple";
        }, {
            readonly internalType: "int256";
            readonly name: "_checkpointExposure";
            readonly type: "int256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_maxIterations";
            readonly type: "uint256";
        }];
        readonly name: "calculateMaxShort";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_shareProceeds";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_shareReservesDelta";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_shareCurveDelta";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_totalGovernanceFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_openVaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_closeVaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "_isLong";
            readonly type: "bool";
        }];
        readonly name: "calculateNegativeInterestOnClose";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "int256";
            readonly name: "";
            readonly type: "int256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_effectiveShareReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_bondReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_timeStretch";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_vaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_initialVaultSharePrice";
            readonly type: "uint256";
        }];
        readonly name: "calculateOpenLong";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_effectiveShareReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_bondReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_timeStretch";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_vaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_initialVaultSharePrice";
            readonly type: "uint256";
        }];
        readonly name: "calculateOpenShort";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_bondAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_shareAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_openVaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_closeVaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_vaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_flatFee";
            readonly type: "uint256";
        }];
        readonly name: "calculateShortProceedsDown";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_bondAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_shareAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_openVaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_closeVaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_vaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_flatFee";
            readonly type: "uint256";
        }];
        readonly name: "calculateShortProceedsUp";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_effectiveShareReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_bondReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_initialVaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_positionDuration";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_timeStretch";
            readonly type: "uint256";
        }];
        readonly name: "calculateSpotAPR";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_shareReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_bondReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_initialVaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_timeStretch";
            readonly type: "uint256";
        }];
        readonly name: "calculateSpotPrice";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "apr";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "positionDuration";
            readonly type: "uint256";
        }];
        readonly name: "calculateTimeStretch";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    readonly bytecode: {
        readonly object: "0x608060405234801561001057600080fd5b5061234f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063902b10991161008c578063a280a28211610066578063a280a28214610218578063dbab85121461022b578063e7acd3ad1461023e578063f87845f21461025157600080fd5b8063902b1099146101c457806394169d49146101d75780639e489b991461020557600080fd5b80635e6d9d36116100c85780635e6d9d36146101505780636ceebe1d146101635780637ef99f871461017657806382a4d306146101b157600080fd5b80632471caed146100ef5780632810a036146101155780633f77b61714610128575b600080fd5b6101026100fd366004611f77565b610264565b6040519081526020015b60405180910390f35b610102610123366004611fa9565b61027d565b61013b6101363660046120b9565b610298565b6040805192835260208301919091520161010c565b61010261015e3660046120f0565b6102b9565b6101026101713660046120f0565b6102d6565b610189610184366004612133565b6102e7565b604080519586526020860194909452928401919091526060830152608082015260a00161010c565b6101026101bf366004611fa9565b61036b565b6101026101d23660046120f0565b61037b565b6101ea6101e5366004612198565b61038c565b6040805193845260208401929092529082015260600161010c565b6101026102133660046120b9565b6103bc565b61013b6102263660046120b9565b6103d3565b6101026102393660046121e4565b6103e4565b61010261024c3660046120f0565b6103fb565b6101ea61025f366004612198565b61040c565b60008061027386868686610424565b9695505050505050565b60008061028d8787878787610444565b979650505050505050565b6000806000806102a987878761047f565b909450925050505b935093915050565b6000806102ca888888888888610693565b98975050505050505050565b6000806102ca8888888888886106b4565b60008060008060006103216040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b6103308d8d8d8d8d8d8d6106d5565b608086018190526060860182905260408601839052602086018490529484905292985090965094509250905097509750975097509792505050565b60008061028d8787878787610750565b6000806102ca8888888888886107e1565b6000806000806000806103a48d8d8d8d8d8d8d61082f565b919750955093505050505b9750975097945050505050565b60006103c984848461089e565b90505b9392505050565b6000806000806102a9878787610a50565b6000806103f18484610ca0565b9150505b92915050565b6000806102ca888888888888610d68565b6000806000806000806103a48d8d8d8d8d8d8d610d87565b600061043b82610435858888610ddb565b90610df9565b95945050505050565b60008061045387878786610424565b905061028d61046782866301e13380610e50565b61047983670de0b6b3a764000061221c565b90610e76565b600080600061049686600001518760200151610e8b565b905060006104b28288604001518960e001518a60a00151610424565b90506000806104c2898585610a50565b909250905060006104d68a8a858588610ea8565b91505080156104ed575090945092506102b1915050565b506104fa89838a86610fe0565b955061050889878686611080565b945060008061051a8b8b8a8a89610ea8565b915091508061058a5760405162461bcd60e51b815260206004820152603160248201527f496e697469616c20677565737320696e206063616c63756c6174654d61784c6f6044820152703733b01034b99034b739b7b63b32b73a1760791b60648201526084015b60405180910390fd5b60005b89811015610684578489106106005760405162461bcd60e51b815260206004820152603360248201527f52656163686564206162736f6c757465206d617820626f6e6420616d6f756e746044820152721034b7103033b2ba2fb6b0bc2fb637b733b01760691b6064820152608401610581565b600061060e8d8b8a8a6110d3565b935090508261061d5750610684565b60006106298583610e76565b610633908c61222f565b905060006106438f838c8c611080565b90506106528f8f84848d610ea8565b9096509450841561066857819b50809a50610670565b505050610684565b5050508061067d90612242565b905061058d565b50505050505050935093915050565b600061028d8787876106ad88670de0b6b3a764000061221c565b878761116c565b600061028d8787876106ce88670de0b6b3a764000061221c565b8787611231565b600080600080600080888810156107325786156106fa576106f78d898b610ddb565b9c505b6107058c898b610ddb565b9b506107118b8d61225b565b905061071e8b898b610ddb565b9a5061072b8a898b610ddb565b995061073f565b61073c8b8d61225b565b90505b9b9c9a9b999a975050505050505050565b600080610761846301e13380610e76565b9050600061076f8683611256565b61078190670de0b6b3a764000061222f565b9050670de0b6b3a764000081106107b5576107ae6107a7670de0b6b3a764000086610e76565b8290610df9565b90506107cd565b6107ca6107a7670de0b6b3a76400008661126b565b90505b6102ca816107db898b611256565b90611256565b6000806107f9846107f38a888a610e50565b9061126b565b9050610806888486610e50565b610810908261222f565b905086811115610824576102ca878261221c565b509695505050505050565b6000808061085061084888670de0b6b3a764000061221c565b899087610ddb565b905086156103af576108628888611256565b91506108838a8a8461087c8a670de0b6b3a764000061221c565b8989611231565b925061088f838261222f565b90509750975097945050505050565b6040805160608101825260008082526020820181905291810182905260006108ce86600001518760200151610e8b565b905060006108ea8288604001518960e001518a60a00151610424565b905060006108f88884611280565b9050610907888285858b6113a0565b15801560408701529085526109215793506103cc92505050565b600061092e89848a611496565b905061093d898286868c6113a0565b1515604087018190529086526109af5760405162461bcd60e51b815260206004820152603160248201527f496e697469616c20677565737320696e206063616c63756c6174654d617853686044820152701bdc9d18081a5cc81a5b9cdbdb1d995b9d607a1b6064820152608401610581565b60005b87811015610a43576109c68a83868861156c565b15801560408901526020880191909152610a4357602086015186516000916109ee9190610e76565b6109f8908461222f565b905083811115610a085750610a43565b610a158b8288888e6113a0565b15801560408a0152908852610a2c57809250610a32565b50610a43565b50610a3c81612242565b90506109b2565b5098975050505050505050565b600080600080610a868688604001518960a00151670de0b6b3a7640000610a77919061221c565b8a60c001518b60e001516115f3565b9050610ad6876101400151670de0b6b3a7640000610aa4919061221c565b610ad0670de0b6b3a7640000610aba818a61126b565b610ac4919061221c565b6101208b015190611622565b90611622565b9150610b06876101400151670de0b6b3a7640000610af4919061221c565b6107f384670de0b6b3a764000061222f565b60a0880151909250610b2f90610b289061047981670de0b6b3a764000061221c565b8390610df9565b9150610b4c8760e001518860c0015161126b90919063ffffffff16565b610b56908361222f565b9150610b628183610e76565b9150610b91610b288860a00151670de0b6b3a7640000610b82919061221c565b670de0b6b3a764000090610e76565b9150506000610bad8760e0015183610e7690919063ffffffff16565b9050600080610bfa896101400151670de0b6b3a7640000610bce919061221c565b6107db670de0b6b3a7640000610be4818c610e76565b610bee919061221c565b6101208d015190611256565b9050610c50846107db610c228c60a00151670de0b6b3a764000061126b90919063ffffffff16565b6104358d6101400151670de0b6b3a7640000610c3e919061221c565b61047987670de0b6b3a764000061222f565b915050610c678860c0015188846107db919061221c565b9450610c7985878a6101200151611637565b818960400151610c89919061221c565b610c93919061221c565b9350505050935093915050565b600080610cd1610cc2610cb4866064612282565b66a5bbed86c5a00090611256565b6748cd4072281e000090610e76565b9050610ce5670de0b6b3a764000082610e76565b9050826301e1338003610cf95790506103f5565b6000610d1f610d0d86866301e13380610ddb565b610b8290670de0b6b3a764000061222f565b90506000610d3f610b82670de0b6b3a764000080896301e1338088610750565b9050610273610d4d82611664565b610d5690612299565b610d5f84611664565b61047990612299565b600080610d7a846104798a888a610ddb565b9050610806888486610ddb565b60008080610da8610da088670de0b6b3a764000061221c565b899087610e50565b905086156103af57610dba8888611622565b91506108838a8a84610dd48a670de0b6b3a764000061221c565b8989611880565b6000826000190484118302158202610df257600080fd5b5091020490565b600081600003610e125750670de0b6b3a76400006103f5565b82600003610e22575060006103f5565b816000610e2e85611664565b9050818102610e45670de0b6b3a7640000826122b5565b90506102738161194b565b6000826000190484118302158202610e6757600080fd5b50910281810615159190040190565b60006103cc83670de0b6b3a764000084610ddb565b600080610e98838561225b565b905060008112156103cc57600080fd5b6000806000610ec386858a61012001518b6101600151611ad6565b90506000610ede8960c0015183610e7690919063ffffffff16565b60c08a0151610eee908990610e76565b8a51610efa919061222f565b610f04919061221c565b90506000868a60800151610f18919061222f565b90506000610f268a82611af0565b610f2f90612299565b90508a6101000151610f4e8c60c0015184610e7690919063ffffffff16565b610f58919061222f565b60c08c0151610f68908390610e76565b610f72908561222f565b10610fca576101008b015160c08c0151610f8d908490610e76565b60c08d0151610f9d908490610e76565b610fa7908661222f565b610fb1919061221c565b610fbb919061221c565b60019550955050505050610fd6565b60008095509550505050505b9550959350505050565b600080610fef86858586611b05565b90506000611036670b1a2bc2ec5000006107db61102c8a60a00151670de0b6b3a764000061101d919061221c565b670de0b6b3a76400009061126b565b610435868b610e76565b9050600061104c670de0b6b3a764000083611256565b61106861106184670de0b6b3a764000061221c565b8790611256565b611072919061222f565b90506102ca88878784611b05565b6000806110b78487604001516110a38960c0015189610e7690919063ffffffff16565b8960a001518a60c001518b60e00151610693565b90506110c98584886101200151611637565b610273908261221c565b6000806110e286868686611c08565b9092509050806110f55760009150611163565b61111f61110a84670de0b6b3a764000061221c565b6101208801516101608901516107db91611256565b611129908361222f565b915061113d670de0b6b3a76400008361221c565b9150611160670de0b6b3a76400008760c0015184610ddb9092919063ffffffff16565b91505b94509492505050565b60008061117c8888878787611d58565b90506111968561043561118f898c61222f565b8690611256565b97506111a3848985610ddb565b9750878110156111b7576111b76000611d7d565b60006111c3898361221c565b9050670de0b6b3a764000081106111f0576111e96107a7670de0b6b3a76400008861126b565b9050611208565b6112056107a7670de0b6b3a764000088610e76565b90505b8088101561121a5761121a6000611d7d565b611224818961221c565b9998505050505050505050565b600080611242888888888888611d98565b909250905080610824576108246000611d7d565b60006103cc8383670de0b6b3a7640000610ddb565b60006103cc83670de0b6b3a764000084610e50565b60008061129b60008560200151611e5a90919063ffffffff16565b8461010001516112ab919061222f565b905060006112df8486604001518760a00151670de0b6b3a76400006112d0919061221c565b8860c001518960e001516115f3565b9050600061133061131d8760a00151670de0b6b3a7640000611301919061221c565b610435611312878b60200151610e8b565b60e08b015190611622565b60e088015160c0890151610ad09161126b565b61133a908361221c565b9050670de0b6b3a76400008110611370576113696107a78760a00151670de0b6b3a7640000610b82919061221c565b9050611391565b61138e6107a78760a00151670de0b6b3a764000061101d919061221c565b90505b6040860151610273908261221c565b6000806000806113d7878a604001518a8c60a00151670de0b6b3a76400006113c8919061221c565b8d60c001518e60e00151611d98565b91509150806113ee57600080935093505050610fd6565b60006114288a60c0015161140e8b8a8e61012001518f6101600151611e70565b61141e8c8b8f6101200151611e87565b610479919061221c565b611432908461221c565b8a5161143e919061221c565b9050600061146d8b60c0015161145e60008a611e5a90919063ffffffff16565b8d60800151610479919061221c565b90508a610100015181611480919061222f565b8210610fca576101008b0151610fb1828461221c565b60008083905060006115018661010001516114c28860c001518960800151610e7690919063ffffffff16565b60c08901516114d690610479896000611e5a565b89516114e2919061222f565b6114ec919061221c565b6114f6919061221c565b60c088015190611256565b905061027361153061151b87670de0b6b3a764000061221c565b6101208901516101608a01516107db91611256565b61155161154588670de0b6b3a764000061221c565b6101208a015190611256565b61155b908561221c565b611565919061222f565b8290610e76565b600080600061157c878786611ea2565b905060006115c58860c001516104798a6101600151670de0b6b3a76400006115a4919061221c565b6107db6115b98b670de0b6b3a764000061221c565b6101208e015190611256565b90508082106115e5576115d8818361221c565b6001935093505050611163565b600080935093505050611163565b60006115ff8585610df9565b61161861161086610435868b611256565b859085610ddb565b610273919061222f565b60006103cc8383670de0b6b3a7640000610e50565b60006103c9846107db670de0b6b3a76400006116538188610e76565b61165d919061221c565b8590611256565b60008082136116865760405163e61b497560e01b815260040160405180910390fd5b5060606fffffffffffffffffffffffffffffffff821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000806118908888878787611d58565b9050858710156118a4576118a46000611d7d565b6118b285610435888a61221c565b9650868110156118c6576118c66000611d7d565b60006118de84866118d78b8661221c565b9190610e50565b9050670de0b6b3a7640000811061190b576119046107a7670de0b6b3a76400008861126b565b9050611923565b6119206107a7670de0b6b3a764000088610e76565b90505b61192d818561126b565b905088811015611941576119416000611d7d565b611224898261221c565b6000680248ce36a70cb26b3e19821361196657506000919050565b680755bf798b4a1bf1e5821261198f576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b600061043b611ae6868686611637565b6107db8487611256565b6000818313611aff57826103cc565b50919050565b600080611b128582611af0565b611b1b90612299565b90506000611b888760c00151671bc16d674ec80000896101000151611b518b60c001518c60800151610e7690919063ffffffff16565b60c08c0151611b61908890610e76565b8c51611b6d919061222f565b611b77919061221c565b611b81919061221c565b9190610ddb565b905061028d611bad670de0b6b3a7640000611ba38189610e76565b611545919061221c565b670de0b6b3a7640000611bd8611bc3898361221c565b6101208c01516101608d01516107db91611256565b611bea670de0b6b3a764000089610e76565b611bf4919061222f565b611bfe919061221c565b611565919061221c565b6000806000611c248760c0015187610e7690919063ffffffff16565b90506000611c40611c35838861222f565b60e08a015190611256565b90506000611c74878a604001518b60a00151670de0b6b3a7640000611c65919061221c565b8c60c001518d60e001516115f3565b9050611c90610b828a60a0015184610df990919063ffffffff16565b94506000611cbf611cae8b60a0015185610df990919063ffffffff16565b60e08c015160c08d01519190610ddb565b905080821015611cd9576000809550955050505050611163565b611d0f611061611d058c60a00151670de0b6b3a7640000611cfa919061221c565b60a08e01519061126b565b610435848661221c565b9550611d3d670de0b6b3a7640000611d27818a610e76565b611d31919061221c565b6101208c015190611256565b611d47908761221c565b9a60019a5098505050505050505050565b6000611d648585610df9565b611618611d7586610435868b611622565b859085610e50565b80604051633c06d78b60e11b815260040161058191906122f1565b6000806000611daa8989888888611d58565b9050611dba86610435898b61222f565b975087811015611dd1576000809250925050611e4f565b6000611de285876118d78c8661221c565b9050670de0b6b3a76400008110611e0f57611e086107a7670de0b6b3a76400008961126b565b9050611e27565b611e246107a7670de0b6b3a764000089610e76565b90505b611e31818661126b565b9050808a1115611e4857611e45818b61221c565b93505b6001925050505b965096945050505050565b6000818313611e6957816103cc565b5090919050565b600061043b611e80868686611e87565b8390611256565b60006103c9846107db61165d86670de0b6b3a764000061221c565b600080611ec68386604001518760a00151670de0b6b3a76400006112d0919061221c565b90506000611ef3610b82611ee88860a00151888a60400151610435919061222f565b60c089015190611622565b90506000611f6b611f208860a00151670de0b6b3a7640000611f15919061221c565b60a08a01519061126b565b610435611f4e8a60a00151670de0b6b3a7640000611f3e919061221c565b8a8c60400151610435919061222f565b611f58908761221c565b60c08b015160e08c01516107db91610e76565b905061028d8282611256565b60008060008060808587031215611f8d57600080fd5b5050823594602084013594506040840135936060013592509050565b600080600080600060a08688031215611fc157600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b604051610180810167ffffffffffffffff8111828210171561201657634e487b7160e01b600052604160045260246000fd5b60405290565b6000610180828403121561202f57600080fd5b612037611fe4565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016080830135818301525092915050565b60008060006101c084860312156120cf57600080fd5b6120d9858561201c565b9561018085013595506101a0909401359392505050565b60008060008060008060c0878903121561210957600080fd5b505084359660208601359650604086013595606081013595506080810135945060a0013592509050565b600080600080600080600060e0888a03121561214e57600080fd5b873596506020880135955060408801359450606088013593506080880135925060a0880135915060c0880135801515811461218857600080fd5b8091505092959891949750929550565b600080600080600080600060e0888a0312156121b357600080fd5b505085359760208701359750604087013596606081013596506080810135955060a0810135945060c0013592509050565b600080604083850312156121f757600080fd5b50508035926020909101359150565b634e487b7160e01b600052601160045260246000fd5b818103818111156103f5576103f5612206565b808201808211156103f5576103f5612206565b60006001820161225457612254612206565b5060010190565b818103600083128015838313168383128216171561227b5761227b612206565b5092915050565b80820281158282048414176103f5576103f5612206565b6000600160ff1b82016122ae576122ae612206565b5060000390565b6000826122d257634e487b7160e01b600052601260045260246000fd5b600160ff1b8214600019841416156122ec576122ec612206565b500590565b602081016004831061231357634e487b7160e01b600052602160045260246000fd5b9190529056fea2646970667358221220af47e26b0760d71b11115429b1eba4bf1ad736997c9ec8b808dd7da9d470975564736f6c63430008140033";
        readonly sourceMap: "208:8071:88:-:0;;;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063902b10991161008c578063a280a28211610066578063a280a28214610218578063dbab85121461022b578063e7acd3ad1461023e578063f87845f21461025157600080fd5b8063902b1099146101c457806394169d49146101d75780639e489b991461020557600080fd5b80635e6d9d36116100c85780635e6d9d36146101505780636ceebe1d146101635780637ef99f871461017657806382a4d306146101b157600080fd5b80632471caed146100ef5780632810a036146101155780633f77b61714610128575b600080fd5b6101026100fd366004611f77565b610264565b6040519081526020015b60405180910390f35b610102610123366004611fa9565b61027d565b61013b6101363660046120b9565b610298565b6040805192835260208301919091520161010c565b61010261015e3660046120f0565b6102b9565b6101026101713660046120f0565b6102d6565b610189610184366004612133565b6102e7565b604080519586526020860194909452928401919091526060830152608082015260a00161010c565b6101026101bf366004611fa9565b61036b565b6101026101d23660046120f0565b61037b565b6101ea6101e5366004612198565b61038c565b6040805193845260208401929092529082015260600161010c565b6101026102133660046120b9565b6103bc565b61013b6102263660046120b9565b6103d3565b6101026102393660046121e4565b6103e4565b61010261024c3660046120f0565b6103fb565b6101ea61025f366004612198565b61040c565b60008061027386868686610424565b9695505050505050565b60008061028d8787878787610444565b979650505050505050565b6000806000806102a987878761047f565b909450925050505b935093915050565b6000806102ca888888888888610693565b98975050505050505050565b6000806102ca8888888888886106b4565b60008060008060006103216040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b6103308d8d8d8d8d8d8d6106d5565b608086018190526060860182905260408601839052602086018490529484905292985090965094509250905097509750975097509792505050565b60008061028d8787878787610750565b6000806102ca8888888888886107e1565b6000806000806000806103a48d8d8d8d8d8d8d61082f565b919750955093505050505b9750975097945050505050565b60006103c984848461089e565b90505b9392505050565b6000806000806102a9878787610a50565b6000806103f18484610ca0565b9150505b92915050565b6000806102ca888888888888610d68565b6000806000806000806103a48d8d8d8d8d8d8d610d87565b600061043b82610435858888610ddb565b90610df9565b95945050505050565b60008061045387878786610424565b905061028d61046782866301e13380610e50565b61047983670de0b6b3a764000061221c565b90610e76565b600080600061049686600001518760200151610e8b565b905060006104b28288604001518960e001518a60a00151610424565b90506000806104c2898585610a50565b909250905060006104d68a8a858588610ea8565b91505080156104ed575090945092506102b1915050565b506104fa89838a86610fe0565b955061050889878686611080565b945060008061051a8b8b8a8a89610ea8565b915091508061058a5760405162461bcd60e51b815260206004820152603160248201527f496e697469616c20677565737320696e206063616c63756c6174654d61784c6f6044820152703733b01034b99034b739b7b63b32b73a1760791b60648201526084015b60405180910390fd5b60005b89811015610684578489106106005760405162461bcd60e51b815260206004820152603360248201527f52656163686564206162736f6c757465206d617820626f6e6420616d6f756e746044820152721034b7103033b2ba2fb6b0bc2fb637b733b01760691b6064820152608401610581565b600061060e8d8b8a8a6110d3565b935090508261061d5750610684565b60006106298583610e76565b610633908c61222f565b905060006106438f838c8c611080565b90506106528f8f84848d610ea8565b9096509450841561066857819b50809a50610670565b505050610684565b5050508061067d90612242565b905061058d565b50505050505050935093915050565b600061028d8787876106ad88670de0b6b3a764000061221c565b878761116c565b600061028d8787876106ce88670de0b6b3a764000061221c565b8787611231565b600080600080600080888810156107325786156106fa576106f78d898b610ddb565b9c505b6107058c898b610ddb565b9b506107118b8d61225b565b905061071e8b898b610ddb565b9a5061072b8a898b610ddb565b995061073f565b61073c8b8d61225b565b90505b9b9c9a9b999a975050505050505050565b600080610761846301e13380610e76565b9050600061076f8683611256565b61078190670de0b6b3a764000061222f565b9050670de0b6b3a764000081106107b5576107ae6107a7670de0b6b3a764000086610e76565b8290610df9565b90506107cd565b6107ca6107a7670de0b6b3a76400008661126b565b90505b6102ca816107db898b611256565b90611256565b6000806107f9846107f38a888a610e50565b9061126b565b9050610806888486610e50565b610810908261222f565b905086811115610824576102ca878261221c565b509695505050505050565b6000808061085061084888670de0b6b3a764000061221c565b899087610ddb565b905086156103af576108628888611256565b91506108838a8a8461087c8a670de0b6b3a764000061221c565b8989611231565b925061088f838261222f565b90509750975097945050505050565b6040805160608101825260008082526020820181905291810182905260006108ce86600001518760200151610e8b565b905060006108ea8288604001518960e001518a60a00151610424565b905060006108f88884611280565b9050610907888285858b6113a0565b15801560408701529085526109215793506103cc92505050565b600061092e89848a611496565b905061093d898286868c6113a0565b1515604087018190529086526109af5760405162461bcd60e51b815260206004820152603160248201527f496e697469616c20677565737320696e206063616c63756c6174654d617853686044820152701bdc9d18081a5cc81a5b9cdbdb1d995b9d607a1b6064820152608401610581565b60005b87811015610a43576109c68a83868861156c565b15801560408901526020880191909152610a4357602086015186516000916109ee9190610e76565b6109f8908461222f565b905083811115610a085750610a43565b610a158b8288888e6113a0565b15801560408a0152908852610a2c57809250610a32565b50610a43565b50610a3c81612242565b90506109b2565b5098975050505050505050565b600080600080610a868688604001518960a00151670de0b6b3a7640000610a77919061221c565b8a60c001518b60e001516115f3565b9050610ad6876101400151670de0b6b3a7640000610aa4919061221c565b610ad0670de0b6b3a7640000610aba818a61126b565b610ac4919061221c565b6101208b015190611622565b90611622565b9150610b06876101400151670de0b6b3a7640000610af4919061221c565b6107f384670de0b6b3a764000061222f565b60a0880151909250610b2f90610b289061047981670de0b6b3a764000061221c565b8390610df9565b9150610b4c8760e001518860c0015161126b90919063ffffffff16565b610b56908361222f565b9150610b628183610e76565b9150610b91610b288860a00151670de0b6b3a7640000610b82919061221c565b670de0b6b3a764000090610e76565b9150506000610bad8760e0015183610e7690919063ffffffff16565b9050600080610bfa896101400151670de0b6b3a7640000610bce919061221c565b6107db670de0b6b3a7640000610be4818c610e76565b610bee919061221c565b6101208d015190611256565b9050610c50846107db610c228c60a00151670de0b6b3a764000061126b90919063ffffffff16565b6104358d6101400151670de0b6b3a7640000610c3e919061221c565b61047987670de0b6b3a764000061222f565b915050610c678860c0015188846107db919061221c565b9450610c7985878a6101200151611637565b818960400151610c89919061221c565b610c93919061221c565b9350505050935093915050565b600080610cd1610cc2610cb4866064612282565b66a5bbed86c5a00090611256565b6748cd4072281e000090610e76565b9050610ce5670de0b6b3a764000082610e76565b9050826301e1338003610cf95790506103f5565b6000610d1f610d0d86866301e13380610ddb565b610b8290670de0b6b3a764000061222f565b90506000610d3f610b82670de0b6b3a764000080896301e1338088610750565b9050610273610d4d82611664565b610d5690612299565b610d5f84611664565b61047990612299565b600080610d7a846104798a888a610ddb565b9050610806888486610ddb565b60008080610da8610da088670de0b6b3a764000061221c565b899087610e50565b905086156103af57610dba8888611622565b91506108838a8a84610dd48a670de0b6b3a764000061221c565b8989611880565b6000826000190484118302158202610df257600080fd5b5091020490565b600081600003610e125750670de0b6b3a76400006103f5565b82600003610e22575060006103f5565b816000610e2e85611664565b9050818102610e45670de0b6b3a7640000826122b5565b90506102738161194b565b6000826000190484118302158202610e6757600080fd5b50910281810615159190040190565b60006103cc83670de0b6b3a764000084610ddb565b600080610e98838561225b565b905060008112156103cc57600080fd5b6000806000610ec386858a61012001518b6101600151611ad6565b90506000610ede8960c0015183610e7690919063ffffffff16565b60c08a0151610eee908990610e76565b8a51610efa919061222f565b610f04919061221c565b90506000868a60800151610f18919061222f565b90506000610f268a82611af0565b610f2f90612299565b90508a6101000151610f4e8c60c0015184610e7690919063ffffffff16565b610f58919061222f565b60c08c0151610f68908390610e76565b610f72908561222f565b10610fca576101008b015160c08c0151610f8d908490610e76565b60c08d0151610f9d908490610e76565b610fa7908661222f565b610fb1919061221c565b610fbb919061221c565b60019550955050505050610fd6565b60008095509550505050505b9550959350505050565b600080610fef86858586611b05565b90506000611036670b1a2bc2ec5000006107db61102c8a60a00151670de0b6b3a764000061101d919061221c565b670de0b6b3a76400009061126b565b610435868b610e76565b9050600061104c670de0b6b3a764000083611256565b61106861106184670de0b6b3a764000061221c565b8790611256565b611072919061222f565b90506102ca88878784611b05565b6000806110b78487604001516110a38960c0015189610e7690919063ffffffff16565b8960a001518a60c001518b60e00151610693565b90506110c98584886101200151611637565b610273908261221c565b6000806110e286868686611c08565b9092509050806110f55760009150611163565b61111f61110a84670de0b6b3a764000061221c565b6101208801516101608901516107db91611256565b611129908361222f565b915061113d670de0b6b3a76400008361221c565b9150611160670de0b6b3a76400008760c0015184610ddb9092919063ffffffff16565b91505b94509492505050565b60008061117c8888878787611d58565b90506111968561043561118f898c61222f565b8690611256565b97506111a3848985610ddb565b9750878110156111b7576111b76000611d7d565b60006111c3898361221c565b9050670de0b6b3a764000081106111f0576111e96107a7670de0b6b3a76400008861126b565b9050611208565b6112056107a7670de0b6b3a764000088610e76565b90505b8088101561121a5761121a6000611d7d565b611224818961221c565b9998505050505050505050565b600080611242888888888888611d98565b909250905080610824576108246000611d7d565b60006103cc8383670de0b6b3a7640000610ddb565b60006103cc83670de0b6b3a764000084610e50565b60008061129b60008560200151611e5a90919063ffffffff16565b8461010001516112ab919061222f565b905060006112df8486604001518760a00151670de0b6b3a76400006112d0919061221c565b8860c001518960e001516115f3565b9050600061133061131d8760a00151670de0b6b3a7640000611301919061221c565b610435611312878b60200151610e8b565b60e08b015190611622565b60e088015160c0890151610ad09161126b565b61133a908361221c565b9050670de0b6b3a76400008110611370576113696107a78760a00151670de0b6b3a7640000610b82919061221c565b9050611391565b61138e6107a78760a00151670de0b6b3a764000061101d919061221c565b90505b6040860151610273908261221c565b6000806000806113d7878a604001518a8c60a00151670de0b6b3a76400006113c8919061221c565b8d60c001518e60e00151611d98565b91509150806113ee57600080935093505050610fd6565b60006114288a60c0015161140e8b8a8e61012001518f6101600151611e70565b61141e8c8b8f6101200151611e87565b610479919061221c565b611432908461221c565b8a5161143e919061221c565b9050600061146d8b60c0015161145e60008a611e5a90919063ffffffff16565b8d60800151610479919061221c565b90508a610100015181611480919061222f565b8210610fca576101008b0151610fb1828461221c565b60008083905060006115018661010001516114c28860c001518960800151610e7690919063ffffffff16565b60c08901516114d690610479896000611e5a565b89516114e2919061222f565b6114ec919061221c565b6114f6919061221c565b60c088015190611256565b905061027361153061151b87670de0b6b3a764000061221c565b6101208901516101608a01516107db91611256565b61155161154588670de0b6b3a764000061221c565b6101208a015190611256565b61155b908561221c565b611565919061222f565b8290610e76565b600080600061157c878786611ea2565b905060006115c58860c001516104798a6101600151670de0b6b3a76400006115a4919061221c565b6107db6115b98b670de0b6b3a764000061221c565b6101208e015190611256565b90508082106115e5576115d8818361221c565b6001935093505050611163565b600080935093505050611163565b60006115ff8585610df9565b61161861161086610435868b611256565b859085610ddb565b610273919061222f565b60006103cc8383670de0b6b3a7640000610e50565b60006103c9846107db670de0b6b3a76400006116538188610e76565b61165d919061221c565b8590611256565b60008082136116865760405163e61b497560e01b815260040160405180910390fd5b5060606fffffffffffffffffffffffffffffffff821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000806118908888878787611d58565b9050858710156118a4576118a46000611d7d565b6118b285610435888a61221c565b9650868110156118c6576118c66000611d7d565b60006118de84866118d78b8661221c565b9190610e50565b9050670de0b6b3a7640000811061190b576119046107a7670de0b6b3a76400008861126b565b9050611923565b6119206107a7670de0b6b3a764000088610e76565b90505b61192d818561126b565b905088811015611941576119416000611d7d565b611224898261221c565b6000680248ce36a70cb26b3e19821361196657506000919050565b680755bf798b4a1bf1e5821261198f576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b600061043b611ae6868686611637565b6107db8487611256565b6000818313611aff57826103cc565b50919050565b600080611b128582611af0565b611b1b90612299565b90506000611b888760c00151671bc16d674ec80000896101000151611b518b60c001518c60800151610e7690919063ffffffff16565b60c08c0151611b61908890610e76565b8c51611b6d919061222f565b611b77919061221c565b611b81919061221c565b9190610ddb565b905061028d611bad670de0b6b3a7640000611ba38189610e76565b611545919061221c565b670de0b6b3a7640000611bd8611bc3898361221c565b6101208c01516101608d01516107db91611256565b611bea670de0b6b3a764000089610e76565b611bf4919061222f565b611bfe919061221c565b611565919061221c565b6000806000611c248760c0015187610e7690919063ffffffff16565b90506000611c40611c35838861222f565b60e08a015190611256565b90506000611c74878a604001518b60a00151670de0b6b3a7640000611c65919061221c565b8c60c001518d60e001516115f3565b9050611c90610b828a60a0015184610df990919063ffffffff16565b94506000611cbf611cae8b60a0015185610df990919063ffffffff16565b60e08c015160c08d01519190610ddb565b905080821015611cd9576000809550955050505050611163565b611d0f611061611d058c60a00151670de0b6b3a7640000611cfa919061221c565b60a08e01519061126b565b610435848661221c565b9550611d3d670de0b6b3a7640000611d27818a610e76565b611d31919061221c565b6101208c015190611256565b611d47908761221c565b9a60019a5098505050505050505050565b6000611d648585610df9565b611618611d7586610435868b611622565b859085610e50565b80604051633c06d78b60e11b815260040161058191906122f1565b6000806000611daa8989888888611d58565b9050611dba86610435898b61222f565b975087811015611dd1576000809250925050611e4f565b6000611de285876118d78c8661221c565b9050670de0b6b3a76400008110611e0f57611e086107a7670de0b6b3a76400008961126b565b9050611e27565b611e246107a7670de0b6b3a764000089610e76565b90505b611e31818661126b565b9050808a1115611e4857611e45818b61221c565b93505b6001925050505b965096945050505050565b6000818313611e6957816103cc565b5090919050565b600061043b611e80868686611e87565b8390611256565b60006103c9846107db61165d86670de0b6b3a764000061221c565b600080611ec68386604001518760a00151670de0b6b3a76400006112d0919061221c565b90506000611ef3610b82611ee88860a00151888a60400151610435919061222f565b60c089015190611622565b90506000611f6b611f208860a00151670de0b6b3a7640000611f15919061221c565b60a08a01519061126b565b610435611f4e8a60a00151670de0b6b3a7640000611f3e919061221c565b8a8c60400151610435919061222f565b611f58908761221c565b60c08b015160e08c01516107db91610e76565b905061028d8282611256565b60008060008060808587031215611f8d57600080fd5b5050823594602084013594506040840135936060013592509050565b600080600080600060a08688031215611fc157600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b604051610180810167ffffffffffffffff8111828210171561201657634e487b7160e01b600052604160045260246000fd5b60405290565b6000610180828403121561202f57600080fd5b612037611fe4565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016080830135818301525092915050565b60008060006101c084860312156120cf57600080fd5b6120d9858561201c565b9561018085013595506101a0909401359392505050565b60008060008060008060c0878903121561210957600080fd5b505084359660208601359650604086013595606081013595506080810135945060a0013592509050565b600080600080600080600060e0888a03121561214e57600080fd5b873596506020880135955060408801359450606088013593506080880135925060a0880135915060c0880135801515811461218857600080fd5b8091505092959891949750929550565b600080600080600080600060e0888a0312156121b357600080fd5b505085359760208701359750604087013596606081013596506080810135955060a0810135945060c0013592509050565b600080604083850312156121f757600080fd5b50508035926020909101359150565b634e487b7160e01b600052601160045260246000fd5b818103818111156103f5576103f5612206565b808201808211156103f5576103f5612206565b60006001820161225457612254612206565b5060010190565b818103600083128015838313168383128216171561227b5761227b612206565b5092915050565b80820281158282048414176103f5576103f5612206565b6000600160ff1b82016122ae576122ae612206565b5060000390565b6000826122d257634e487b7160e01b600052601260045260246000fd5b600160ff1b8214600019841416156122ec576122ec612206565b500590565b602081016004831061231357634e487b7160e01b600052602160045260246000fd5b9190529056fea2646970667358221220af47e26b0760d71b11115429b1eba4bf1ad736997c9ec8b808dd7da9d470975564736f6c63430008140033";
        readonly sourceMap: "208:8071:88:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6751:418;;;;;;:::i;:::-;;:::i;:::-;;;550:25:182;;;538:2;523:18;6751:418:88;;;;;;;;242:498;;;;;;:::i;:::-;;:::i;5504:409::-;;;;;;:::i;:::-;;:::i;:::-;;;;2994:25:182;;;3050:2;3035:18;;3028:34;;;;2967:18;5504:409:88;2820:248:182;1256:548:88;;;;;;:::i;:::-;;:::i;2567:550::-;;;;;;:::i;:::-;;:::i;4107:1113::-;;;;;;:::i;:::-;;:::i;:::-;;;;4548:25:182;;;4604:2;4589:18;;4582:34;;;;4632:18;;;4625:34;;;;4690:2;4675:18;;4668:34;4733:3;4718:19;;4711:35;4535:3;4520:19;4107:1113:88;4291:461:182;746:504:88;;;;;;:::i;:::-;;:::i;7175:546::-;;;;;;:::i;:::-;;:::i;1810:751::-;;;;;;:::i;:::-;;:::i;:::-;;;;5556:25:182;;;5612:2;5597:18;;5590:34;;;;5640:18;;;5633:34;5544:2;5529:18;1810:751:88;5354:319:182;6380:365:88;;;;;;:::i;:::-;;:::i;5919:455::-;;;;;;:::i;:::-;;:::i;5226:272::-;;;;;;:::i;:::-;;:::i;7727:550::-;;;;;;:::i;:::-;;:::i;3123:755::-;;;;;;:::i;:::-;;:::i;6751:418::-;6942:7;6961:14;6978:161;7025:14;7053:13;7080:23;7117:12;6978:33;:161::i;:::-;6961:178;6751:418;-1:-1:-1;;;;;;6751:418:88:o;242:498::-;475:7;494:14;511:199;556:23;593:13;620:23;657:17;688:12;511:31;:199::i;:::-;494:216;242:498;-1:-1:-1;;;;;;;242:498:88:o;5504:409::-;5682:7;5691;5711:15;5728;5747:124;5793:7;5814:19;5847:14;5747:32;:124::i;:::-;5710:161;;-1:-1:-1;5710:161:88;-1:-1:-1;;;5504:409:88;;;;;;;:::o;1256:548::-;1516:7;1535:14;1552:222;1598:23;1635:13;1662:9;1685:12;1711:16;1741:23;1552:32;:222::i;:::-;1535:239;1256:548;-1:-1:-1;;;;;;;;1256:548:88:o;2567:550::-;2828:7;2847:14;2864:223;2911:23;2948:13;2975:9;2998:12;3024:16;3054:23;2864:33;:223::i;4107:1113::-;4417:7;4426;4435;4444:6;4452:7;4471:43;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4471:43:88;4726:271;4787:14;4815:19;4848:16;4878:19;4911:20;4945:21;4980:7;4726:47;:271::i;:::-;4688:25;;;4524:473;;;4647:27;;;4524:473;;;4611:22;;;4524:473;;;4572:25;;;4524:473;;;;;;;;;-1:-1:-1;4524:473:88;;-1:-1:-1;4524:473:88;-1:-1:-1;4524:473:88;-1:-1:-1;4524:473:88;-1:-1:-1;4107:1113:88;;;;;;;;;;;;;:::o;746:504::-;982:7;1001:14;1018:202;1075:23;1112;1149:4;1167:17;1198:12;1018:43;:202::i;7175:546::-;7434:7;7453:14;7470:221;7523:11;7548:12;7574:20;7608:21;7643:16;7673:8;7470:39;:221::i;1810:751::-;2113:7;2122;2131;2151:15;2168;2185;2204:306;2268:23;2309:13;2340:9;2367:24;2409:12;2439:16;2473:23;2204:46;:306::i;:::-;2150:360;;-1:-1:-1;2150:360:88;-1:-1:-1;2150:360:88;-1:-1:-1;;;;1810:751:88;;;;;;;;;;;;:::o;6380:365::-;6559:7;6597:141;6648:7;6673:19;6710:14;6597:33;:141::i;:::-;6578:160;;6380:365;;;;;;:::o;5919:455::-;6106:7;6115;6135:15;6152;6171:161;6242:7;6267:23;6308:10;6171:53;:161::i;5226:272::-;5340:7;5359:14;5376:92;5425:3;5442:16;5376:35;:92::i;:::-;5359:109;-1:-1:-1;;5226:272:88;;;;;:::o;7727:550::-;7988:7;8007:14;8024:223;8079:11;8104:12;8130:20;8164:21;8199:16;8229:8;8024:41;:223::i;3123:755::-;3428:7;3437;3446;3466:15;3483;3500;3519:308;3584:23;3625:13;3656:10;3684:24;3726:12;3756:16;3790:23;3519:47;:308::i;3774:531:74:-;3974:17;4180:118;4285:12;4180:87;:23;4228;4253:13;4180:47;:87::i;:::-;:104;;:118::i;:::-;4168:130;3774:531;-1:-1:-1;;;;;3774:531:74:o;4941:945::-;5174:11;5503:17;5523:155;5555:23;5592:13;5619:23;5656:12;5523:18;:155::i;:::-;5503:175;-1:-1:-1;5707:172:74;5818:47;5503:175;5837:17;5856:8;5818:18;:47::i;:::-;5708:15;5714:9;150:4:73;5708:15:74;:::i;:::-;5707:25;;:172::i;10963:5032:180:-;11125:21;11148;11322:30;11355:153;11432:7;:21;;;11471:7;:23;;;11355:59;:153::i;:::-;11322:186;;11518:17;11538:190;11585:22;11621:7;:20;;;11655:7;:30;;;11699:7;:19;;;11538:33;:190::i;:::-;11518:210;;11738:29;11777;11925:130;11967:7;11992:22;12032:9;11925:24;:130::i;:::-;11830:225;;-1:-1:-1;11830:225:180;-1:-1:-1;12072:15:180;12091:207;12135:7;12160:19;11830:225;;12275:9;12091:26;:207::i;:::-;12069:229;;;12316:10;12312:102;;;-1:-1:-1;12354:21:180;;-1:-1:-1;12377:21:180;-1:-1:-1;12346:53:180;;-1:-1:-1;;12346:53:180;12312:102;11816:608;13319:143;13354:7;13375:21;13410:19;13443:9;13319:21;:143::i;:::-;13303:159;;13488:136;13521:7;13542:13;13569:22;13605:9;13488:19;:136::i;:::-;13472:152;;13635:17;13654:12;13670:167;13710:7;13731:19;13764:13;13791;13818:9;13670:26;:167::i;:::-;13634:203;;;;13855:7;13847:69;;;;-1:-1:-1;;;13847:69:180;;6785:2:182;13847:69:180;;;6767:21:182;6824:2;6804:18;;;6797:30;6863:34;6843:18;;;6836:62;-1:-1:-1;;;6914:18:182;;;6907:47;6971:19;;13847:69:180;;;;;;;;;13931:9;13926:2015;13950:14;13946:1;:18;13926:2015;;;14211:21;14195:13;:37;14170:147;;;;-1:-1:-1;;;14170:147:180;;7203:2:182;14170:147:180;;;7185:21:182;7242:2;7222:18;;;7215:30;7281:34;7261:18;;;7254:62;-1:-1:-1;;;7332:18:182;;;7325:49;7391:19;;14170:147:180;7001:415:182;14170:147:180;14880:18;14936:173;14990:7;15015:13;15046:22;15086:9;14936:36;:173::i;:::-;14912:197;-1:-1:-1;14912:197:180;-1:-1:-1;14912:197:180;15123:52;;15155:5;;;15123:52;15188:29;15252;:9;15270:10;15252:17;:29::i;:::-;15220:61;;:13;:61;:::i;:::-;15188:93;;15295:29;15327:164;15364:7;15389:21;15428:22;15468:9;15327:19;:164::i;:::-;15295:196;;15528:207;15572:7;15597:19;15634:21;15673;15712:9;15528:26;:207::i;:::-;15505:230;;-1:-1:-1;15505:230:180;-1:-1:-1;15749:182:180;;;;15796:21;15780:37;;15851:21;15835:37;;15749:182;;;15911:5;;;;;15749:182;13971:1970;;;13966:3;;;;:::i;:::-;;;13926:2015;;;;15951:37;;;;;;10963:5032;;;;;;:::o;18303:892:74:-;18566:7;18703:485;18770:23;18811:13;18842:12;19081:18;19087:12;150:4:73;19081:18:74;:::i;:::-;19117:16;19151:23;18703:49;:485::i;22996:866::-;23257:7;23373:482;23440:23;23481:13;23512:9;23748:18;23754:12;150:4:73;23748:18:74;:::i;:::-;23784:16;23818:23;23373:49;:482::i;29038:2941::-;29348:7;29357;29366;29375:6;29383:7;30317:27;30382:20;30358:21;:44;30354:1433;;;30687:7;30683:191;;;30731:128;:14;30778:21;30821:20;30731:25;:128::i;:::-;30714:145;;30683:191;31029:121;:19;31077:21;31116:20;31029:30;:121::i;:::-;31007:143;-1:-1:-1;31258:70:74;31311:16;31007:143;31258:70;:::i;:::-;31219:109;-1:-1:-1;31361:118:74;:16;31406:21;31445:20;31361:27;:118::i;:::-;31342:137;-1:-1:-1;31515:121:74;:19;31563:21;31602:20;31515:30;:121::i;:::-;31493:143;;30354:1433;;;31706:70;31759:16;31713:19;31706:70;:::i;:::-;31667:109;;30354:1433;31818:14;;31846:19;;31879:16;;29038:2941;-1:-1:-1;;;;;;;;29038:2941:74:o;7896:1272::-;8132:20;;8370:35;:17;8396:8;8370:25;:35::i;:::-;8358:47;-1:-1:-1;8545:13:74;8567:15;:4;8358:47;8567:12;:15::i;:::-;8561:21;;150:4:73;8561:21:74;:::i;:::-;8545:37;;150:4:73;8596:5:74;:12;8592:300;;8703:36;8713:25;150:4:73;8725:12:74;8713:11;:25::i;:::-;8703:5;;:9;:36::i;:::-;8695:44;;8592:300;;;8847:34;8857:23;150:4:73;8867:12:74;8857:9;:23::i;8847:34::-;8839:42;;8592:300;9060:101;9142:5;9060:56;:23;9092;9060:31;:56::i;:::-;:64;;:101::i;10657:1618::-;10916:21;;11379:115;11477:16;11379:78;:11;11413:21;11436:20;11379:33;:78::i;:::-;:97;;:115::i;:::-;11358:136;-1:-1:-1;11742:48:74;:11;11763:8;11773:16;11742:20;:48::i;:::-;11728:62;;;;:::i;:::-;;;12106:12;12093:10;:25;12089:149;;;12202:25;12215:12;12202:10;:25;:::i;12089:149::-;12248:20;10657:1618;;;;;;;;:::o;20176:2126::-;20516:23;;;21216:104;21250:30;21256:24;150:4:73;21250:30:74;:::i;:::-;21216:9;;21294:16;21216:20;:104::i;:::-;21200:120;-1:-1:-1;21334:28:74;;21330:966;;21570:43;:9;21588:24;21570:17;:43::i;:::-;21553:60;-1:-1:-1;21752:487:74;21819:23;21860:13;21553:60;22132:18;22138:12;150:4:73;22132:18:74;:::i;:::-;22168:16;22202:23;21752:49;:487::i;:::-;21734:505;-1:-1:-1;22253:32:74;21734:505;22253:32;;:::i;:::-;;;20176:2126;;;;;;;;;;;:::o;37638:4492:180:-;-1:-1:-1;;;;;;;;37801:7:180;-1:-1:-1;;;;;;;;;;;;;;;38120:30:180;38153:153;38230:7;:21;;;38269:7;:23;;;38153:59;:153::i;:::-;38120:186;;38316:17;38336:190;38383:22;38419:7;:20;;;38453:7;:30;;;38497:7;:19;;;38336:33;:190::i;:::-;38316:210;;38536:29;38568:94;38609:7;38630:22;38568:27;:94::i;:::-;38536:126;;38714:185;38755:7;38776:21;38811:22;38847:9;38870:19;38714:27;:185::i;:::-;38672:227;;;38693:17;;;38672:227;;;;38909:76;;38953:21;-1:-1:-1;38946:28:180;;-1:-1:-1;;;38946:28:180;38909:76;39879:21;39903:109;39939:7;39960:9;39983:19;39903:22;:109::i;:::-;39879:133;;40064:177;40105:7;40126:13;40153:22;40189:9;40212:19;40064:27;:177::i;:::-;40022:219;;40043:17;;;40022:219;;;;;;40251:113;;;;-1:-1:-1;;;40251:113:180;;8098:2:182;40251:113:180;;;8080:21:182;8137:2;8117:18;;;8110:30;8176:34;8156:18;;;8149:62;-1:-1:-1;;;8227:18:182;;;8220:47;8284:19;;40251:113:180;7896:413:182;40251:113:180;40379:9;40374:1719;40398:14;40394:1;:18;40374:1719;;;40994:174;41049:7;41074:13;41105:9;41132:22;40994:37;:174::i;:::-;40904:264;;;40960:17;;;40904:264;40922:20;;;40904:264;;;;41224:5;41182:62;41348:20;;;;41321:18;;41257:29;;41321:48;;:18;:26;:48::i;:::-;41289:80;;:13;:80;:::i;:::-;41257:112;;41411:21;41387;:45;41383:89;;;41452:5;;;41383:89;41723:209;41768:7;41793:21;41832:22;41872:9;41899:19;41723:27;:209::i;:::-;41635:297;;;41689:17;;;41635:297;;;;41946:137;;42003:21;41987:37;;41946:137;;;42063:5;;;41946:137;-1:-1:-1;40414:3:180;;;:::i;:::-;;;40374:1719;;;-1:-1:-1;42110:13:180;37638:4492;-1:-1:-1;;;;;;;;37638:4492:180:o;16597:3723::-;16792:29;16823;18018:13;18055:10;18068:245;18106:23;18147:7;:20;;;18191:7;:19;;;150:4:73;18185:25:180;;;;:::i;:::-;18228:7;:23;;;18269:7;:30;;;18068:20;:245::i;:::-;18055:258;;18335:110;18416:7;:15;;;150:4:73;18410:21:180;;;;:::i;:::-;18335:51;150:4:73;18358:21:180;150:4:73;18368:10:180;18358:9;:21::i;:::-;:27;;;;:::i;:::-;18335:16;;;;;:22;:51::i;:::-;:57;;:110::i;:::-;18327:118;;18467:42;18493:7;:15;;;150:4:73;18487:21:180;;;;:::i;:::-;18468:11;18474:5;150:4:73;18468:11:180;:::i;18467:42::-;18594:19;;;;18459:50;;-1:-1:-1;18531:97:180;;18558:56;;18559:25;18594:19;150:4:73;18559:25:180;:::i;18558:56::-;18531:5;;:9;:97::i;:::-;18523:105;;18651:91;18698:7;:30;;;18651:7;:23;;;:29;;:91;;;;:::i;:::-;18642:100;;;;:::i;:::-;;-1:-1:-1;18764:17:180;:2;18642:100;18764:10;:17::i;:::-;18756:25;;18803:49;18813:38;18831:7;:19;;;150:4:73;18825:25:180;;;;:::i;:::-;150:4:73;;18813:11:180;:38::i;18803:49::-;18795:57;;18041:822;18872:27;18902:67;18929:7;:30;;;18902:5;:13;;:67;;;;:::i;:::-;18872:97;;19324:26;19374:21;19398:137;19519:7;:15;;;150:4:73;19513:21:180;;;;:::i;:::-;19398:89;150:4:73;19457:23:180;150:4:73;19469:10:180;19457:11;:23::i;:::-;:29;;;;:::i;:::-;19398:33;;;;;:58;:89::i;:137::-;19374:161;;19570:135;19699:5;19570:120;19659:30;19669:7;:19;;;150:4:73;19659:9:180;;:30;;;;:::i;:::-;19588:52;19624:7;:15;;;150:4:73;19618:21:180;;;;:::i;:::-;19589:19;19595:13;150:4:73;19589:19:180;:::i;19570:135::-;19549:156;;19360:356;19863:93;19932:7;:23;;;19886;19864:19;:45;;;;:::i;19863:93::-;19839:117;;20177:136;20216:21;20255:10;20283:7;:16;;;20177:21;:136::i;:::-;20143:18;20120:7;:20;;;:41;;;;:::i;:::-;20119:194;;;;:::i;:::-;20083:230;;16858:3462;;;16597:3723;;;;;;:::o;1366:1813:74:-;1482:7;;1645:90;1686:39;1714:10;:4;1721:3;1714:10;:::i;:::-;1694;;1686:27;:39::i;:::-;1653:10;;1645:27;:90::i;:::-;1623:112;-1:-1:-1;1759:24:74;150:4:73;1623:112:74;1759:11;:24::i;:::-;1745:38;;1874:17;1895:8;1874:29;1870:78;;1926:11;-1:-1:-1;1919:18:74;;1870:78;2766:23;2792:85;2823:44;:4;2839:17;2858:8;2823:15;:44::i;:::-;2817:50;;150:4:73;2817:50:74;:::i;2792:85::-;2766:111;;2887:29;2919:102;2944:67;150:4:73;;2983::74;2989:8;2999:11;2944:28;:67::i;2919:102::-;2887:134;;3050:122;3123:34;3130:21;3123:32;:34::i;:::-;3122:35;;;:::i;:::-;3059:28;3066:15;3059:26;:28::i;:::-;3058:29;;;:::i;13765:1632::-;14026:21;;14492:119;14594:16;14492:80;:11;14528:21;14551:20;14492:35;:80::i;:119::-;14471:140;-1:-1:-1;14862:50:74;:11;14885:8;14895:16;14862:22;:50::i;24820:2130::-;25162:23;;;25947:103;25980:30;25986:24;150:4:73;25980:30:74;:::i;:::-;25947:10;;26024:16;25947:19;:103::i;:::-;25932:118;-1:-1:-1;26064:28:74;;26060:884;;26226:42;:10;26243:24;26226:16;:42::i;:::-;26209:59;-1:-1:-1;26403:485:74;26468:23;26509:13;26209:59;26781:18;26787:12;150:4:73;26781:18:74;:::i;:::-;26817:16;26851:23;26403:47;:485::i;823:556:73:-;939:9;1204:1;-1:-1:-1;;1187:19:73;1184:1;1181:26;1178:1;1174:34;1167:42;1154:11;1150:60;1123:146;;1253:1;1250;1243:12;1123:146;-1:-1:-1;1340:9:73;;1336:27;;823:556::o;3740:838::-;3798:7;3864:1;3869;3864:6;3860:47;;-1:-1:-1;150:4:73;3886:10;;3860:47;3960:1;3965;3960:6;3956:45;;-1:-1:-1;3989:1:73;3982:8;;3956:45;4164:1;4139:15;4341:13;4351:1;4341:2;:13::i;:::-;4328:26;-1:-1:-1;4432:18:73;;;4469:19;150:4;4432:18;4469:19;:::i;:::-;;;4561:9;4565:4;4561:3;:9::i;2211:748::-;2325:9;2590:1;-1:-1:-1;;2573:19:73;2570:1;2567:26;2564:1;2560:34;2553:42;2540:11;2536:60;2509:146;;2639:1;2636;2629:12;2509:146;-1:-1:-1;2906:9:73;;2853:27;;;2850:34;;2902:27;;;2829:114;;2211:748::o;1810:165::-;1872:7;1899:22;1910:1;1913:4;1919:1;1899:10;:22::i;6471:340:74:-;6606:7;;6657:53;6694:16;6664:14;6657:53;:::i;:::-;6625:85;;6754:1;6728:22;:27;;6720:36;;;;;27211:1307:180;27437:7;27446:4;27462:21;27486:152;27526:11;27551:10;27575:7;:16;;;27605:7;:23;;;27486:26;:152::i;:::-;27462:176;;27648:21;27767:46;27789:7;:23;;;27767:13;:21;;:46;;;;:::i;:::-;27728:23;;;;27708:44;;:11;;:19;:44::i;:::-;27672:21;;:80;;;;:::i;:::-;:141;;;;:::i;:::-;27648:165;;27823:16;27865:11;27842:7;:20;;;:34;;;;:::i;:::-;27823:53;-1:-1:-1;27886:26:180;27924;:19;27886:26;27924:23;:26::i;:::-;27923:27;;;:::i;:::-;27886:65;;28137:7;:28;;;28077:41;28094:7;:23;;;28077:8;:16;;:41;;;;:::i;:::-;:88;;;;:::i;:::-;28037:23;;;;28010:51;;:18;;:26;:51::i;:::-;27978:83;;:13;:83;:::i;:::-;:187;27961:551;;28389:28;;;;28342:23;;;;28325:41;;:8;;:16;:41::i;:::-;28278:23;;;;28251:51;;:18;;:26;:51::i;:::-;28215:87;;:13;:87;:::i;:::-;:151;;;;:::i;:::-;:202;;;;:::i;:::-;28435:4;28190:263;;;;;;;;;;27961:551;28492:1;28495:5;28484:17;;;;;;;;27211:1307;;;;;;;;;:::o;20970:1484::-;21173:7;21305:13;21321:136;21359:7;21380:19;21413:10;21437;21321:24;:136::i;:::-;21305:152;;21901:9;21913:134;22040:6;21913:105;21981:36;21997:7;:19;;;150:4:73;21991:25:180;;;;:::i;:::-;150:4:73;;21981:9:180;:36::i;:::-;21913:50;:5;21940:22;21913:26;:50::i;:134::-;21901:146;-1:-1:-1;22057:25:180;22127:14;150:4:73;21901:146:180;22127:11;:14::i;:::-;22085:27;22104:7;22110:1;150:4:73;22104:7:180;:::i;:::-;22085:10;;:18;:27::i;:::-;:56;;;;:::i;:::-;22057:84;;22281:143;22319:7;22340:19;22373:10;22397:17;22281:24;:143::i;31845:645::-;32040:7;32059:18;32080:285;32126:23;32163:7;:20;;;32197:44;32217:7;:23;;;32197:11;:19;;:44;;;;:::i;:::-;32255:7;:19;;;32288:7;:23;;;32325:7;:30;;;32080:32;:285::i;:::-;32059:306;;32419:64;32441:11;32454:10;32466:7;:16;;;32419:21;:64::i;:::-;32394:89;;:10;:89;:::i;29903:929::-;30115:18;30135:12;30338:146;30381:7;30402:11;30427:23;30464:10;30338:29;:146::i;:::-;30314:170;;-1:-1:-1;30314:170:180;-1:-1:-1;30314:170:180;30494:58;;30530:1;30522:19;;;;30494:58;30620:97;30691:16;30697:10;150:4:73;30691:16:180;:::i;:::-;30652;;;;30620:23;;;;:49;;:31;:49::i;:97::-;30606:111;;;;:::i;:::-;;-1:-1:-1;30727:17:180;150:4:73;30606:111:180;30727:17;:::i;:::-;;;30763:52;30785:4;30791:7;:23;;;30763:10;:21;;:52;;;;;:::i;:::-;30755:70;;29903:929;;;;;;;;:::o;2068:1646:77:-;2258:7;2415:9;2427:20;2431:2;2435:1;2438;2441;2444:2;2427:3;:20::i;:::-;2415:32;-1:-1:-1;2585:26:77;2609:1;2585:19;2596:7;2601:2;2596;:7;:::i;:::-;2585:2;;:10;:19::i;:26::-;2580:31;-1:-1:-1;2674:20:77;:1;2580:31;2691:2;2674:12;:20::i;:::-;2669:25;;2768:2;2764:1;:6;2760:166;;;2786:129;2842:59;2786:38;:129::i;:::-;3086:10;3099:6;3103:2;3099:1;:6;:::i;:::-;3086:19;;150:4:73;3119:2:77;:9;3115:261;;3217:20;3224:12;150:4:73;3234:1:77;3224:9;:12::i;3217:20::-;3212:25;;3115:261;;;3343:22;3350:14;150:4:73;3362:1:77;3350:11;:14::i;3343:22::-;3338:27;;3115:261;3449:2;3445:1;:6;3441:166;;;3467:129;3523:59;3467:38;:129::i;:::-;3701:6;3705:2;3701:1;:6;:::i;:::-;3694:13;2068:1646;-1:-1:-1;;;;;;;;;2068:1646:77:o;9013:583::-;9203:14;9229:12;9271:141;9323:2;9339:1;9354:2;9370:1;9385;9400:2;9271:38;:141::i;:::-;9251:161;;-1:-1:-1;9251:161:77;-1:-1:-1;9251:161:77;9422:168;;9450:129;9506:59;9450:38;:129::i;1535:119:73:-;1597:7;1624:22;1635:1;1638;1641:4;1624:10;:22::i;3390:115::-;3450:7;3477:20;3486:1;3489:4;3495:1;3477:8;:20::i;42555:2183:180:-;42701:7;42944:28;43026:30;43054:1;43026:7;:23;;;:27;;:30;;;;:::i;:::-;42975:7;:28;;;:82;;;;:::i;:::-;42944:113;;43461:10;43474:221;43508:23;43545:7;:20;;;43585:7;:19;;;150:4:73;43579:25:180;;;;:::i;:::-;43618:7;:23;;;43655:7;:30;;;43474:20;:221::i;:::-;43461:234;;43705:27;43752:452;43837:353;44170:7;:19;;;150:4:73;44164:25:180;;;;:::i;:::-;43837:301;43941:175;44017:20;44067:7;:23;;;43941:46;:175::i;:::-;43837:51;;;;;:78;:301::i;:353::-;43782:30;;;;43752:23;;;;:61;;:29;:61::i;:452::-;43735:469;;:2;:469;:::i;:::-;43705:499;;150:4:73;44218:19:180;:26;44214:458;;44354:93;44395:38;44413:7;:19;;;150:4:73;44407:25:180;;;;:::i;44354:93::-;44332:115;;44214:458;;;44570:91;44611:36;44627:7;:19;;;150:4:73;44621:25:180;;;;:::i;44570:91::-;44548:113;;44214:458;44711:20;;;;44689:42;;:19;:42;:::i;48824:1941::-;49064:7;49073:4;49326:19;49347:12;49363:321;49447:23;49488:7;:20;;;49526:12;49562:7;:19;;;150:4:73;49556:25:180;;;;:::i;:::-;49599:7;:23;;;49640:7;:30;;;49363:66;:321::i;:::-;49325:359;;;;49699:7;49694:56;;49730:1;49733:5;49722:17;;;;;;;;49694:56;49826:21;49917:416;50309:7;:23;;;50085:214;50138:12;50176:10;50212:7;:16;;;50254:7;:23;;;50085:27;:214::i;:::-;49918:144;49962:12;49996:10;50028:7;:16;;;49918:22;:144::i;:::-;:381;;;;:::i;49917:416::-;49887:446;;:11;:446;:::i;:::-;49850:21;;:484;;;;:::i;:::-;49826:508;;50344:16;50363:135;50461:7;:23;;;50407:26;50431:1;50407:19;:23;;:26;;;;:::i;:::-;50364:7;:20;;;:70;;;;:::i;50363:135::-;50344:154;;50540:7;:28;;;50529:8;:39;;;;:::i;:::-;50512:13;:56;50508:251;;50636:28;;;;50609:24;50625:8;50609:13;:24;:::i;46195:866::-;46359:7;46378:21;46402:10;46378:34;;46422:13;46438:320;46720:7;:28;;;46648:53;46677:7;:23;;;46648:7;:20;;;:28;;:53;;;;:::i;:::-;46588:23;;;;46523:106;;46531:26;:19;46555:1;46531:23;:26::i;46523:106::-;46483:21;;:146;;;;:::i;:::-;:218;;;;:::i;:::-;:265;;;;:::i;:::-;46438:23;;;;;:31;:320::i;:::-;46422:336;-1:-1:-1;46787:267:180;46919:121;47002:16;47008:10;150:4:73;47002:16:180;:::i;:::-;46951;;;;46919:23;;;;:49;;:31;:49::i;:121::-;46854:42;46879:16;46885:10;150:4:73;46879:16:180;:::i;:::-;46854;;;;;:24;:42::i;:::-;46818:78;;:13;:78;:::i;:::-;:222;;;;:::i;:::-;46787:5;;:13;:267::i;51649:699::-;51863:7;51872:4;51888:11;51902:127;51949:7;51970:12;51996:23;51902:33;:127::i;:::-;51888:141;;52039:11;52053:166;52195:7;:23;;;52053:120;52149:7;:23;;;150:4:73;52143:29:180;;;;:::i;:::-;52053:68;52104:16;52110:10;150:4:73;52104:16:180;:::i;:::-;52053:29;;;;;:50;:68::i;:166::-;52039:180;;52240:3;52233;:10;52229:113;;52267:9;52273:3;52267;:9;:::i;:::-;52278:4;52259:24;;;;;;;;52229:113;52322:1;52325:5;52314:17;;;;;;;;18399:352:77;18540:7;18736:8;:1;18742;18736:5;:8::i;:::-;18694:39;18707:21;18726:1;18707:14;:2;18718;18707:10;:14::i;:21::-;18694:1;;18730:2;18694:12;:39::i;:::-;:50;;;;:::i;3117:115:73:-;3177:7;3204:20;3213:1;3216;3219:4;3204:8;:20::i;35831:330:180:-;35975:7;36055:99;36129:11;36055:48;150:4:73;36073:23:180;150:4:73;36085:10:180;36073:11;:23::i;:::-;:29;;;;:::i;:::-;36055:9;;:17;:48::i;8345:3611:73:-;8390:8;8443:1;8438;:6;8434:80;;8471:28;;-1:-1:-1;;;8471:28:73;;;;;;;;;;;8434:80;-1:-1:-1;9479:2:73;8896:34;-1:-1:-1;;8890:1:73;8886:49;8993:9;;;8973:18;8970:33;8967:1;8963:41;8957:48;9055:9;;;9043:10;9040:25;9037:1;9033:33;9027:40;9113:9;;;9105:6;9102:21;9099:1;9095:29;9089:36;9169:9;;;9163:4;9160:19;9157:1;9153:27;;;9147:34;;;9224:9;;;9219:3;9216:18;9213:1;9209:26;9203:33;9279:9;;;9271:18;;;9268:1;9264:26;;;9258:33;;;9327:9;;;9319:18;;;9313:25;9509:3;:7;;;;;9495:22;;;;9542:17;;;10335:31;10331:35;;10386:5;;10385:13;;10402:32;10384:50;10454:5;;10453:13;;10470:33;10452:51;10523:5;;10522:13;;10539:33;10521:51;10592:5;;10591:13;;10608:33;10590:51;10661:5;;10660:13;;10677:32;10659:50;10729:5;;10728:13;;10745:30;10727:48;9732:31;9728:35;;9783:5;;9782:13;;9799:32;9781:50;9851:5;;9850:13;;9867:32;9849:50;9919:5;;9918:13;;-1:-1:-1;;9917:50:73;9987:5;;9986:13;;-1:-1:-1;;9985:50:73;10055:5;;10054:13;;;-1:-1:-1;;10053:50:73;10121:5;-1:-1:-1;;10121:46:73;11116:10;11506:43;11501:48;-1:-1:-1;;9475:6:73;;;;11629:71;:91;11608:112;11793:72;11788:77;11936:3;11930:9;;8345:3611::o;4244:1797:77:-;4432:7;4589:9;4601:20;4605:2;4609:1;4612;4615;4618:2;4601:3;:20::i;:::-;4589:32;;4695:2;4691:1;:6;4687:166;;;4713:129;4769:59;4713:38;:129::i;:::-;4895:15;4908:1;4896:6;4900:2;4896:1;:6;:::i;4895:15::-;4891:19;;4983:1;4979;:5;4975:165;;;5000:129;5056:59;5000:38;:129::i;:::-;5295:10;5308:23;5325:2;5329:1;5309:5;5313:1;5309;:5;:::i;:::-;5308:16;:23;:16;:23::i;:::-;5295:36;;150:4:73;5345:2:77;:9;5341:261;;5443:20;5450:12;150:4:73;5460:1:77;5450:9;:12::i;5443:20::-;5438:25;;5341:261;;;5569:22;5576:14;150:4:73;5588:1:77;5576:11;:14::i;5569:22::-;5564:27;;5341:261;5684:12;:2;5693;5684:8;:12::i;:::-;5679:17;;5772:2;5767;:7;5763:167;;;5790:129;5846:59;5790:38;:129::i;:::-;6027:7;6032:2;6027;:7;:::i;4830:3335:73:-;4876:8;-1:-1:-1;;5053:1:73;:26;5049:40;;-1:-1:-1;5088:1:73;;4830:3335;-1:-1:-1;4830:3335:73:o;5049:40::-;5288:21;5283:1;:26;5279:87;;5334:32;;-1:-1:-1;;;5334:32:73;;;;;;;;;;;5279:87;5639:7;5633:2;5628:7;;;5627:19;;-1:-1:-1;5975:8:73;6059:2;5999:29;5988:7;;;5987:41;-1:-1:-1;;;5987:51:73;5986:75;;6087:29;6083:33;;6079:37;;;-1:-1:-1;;6758:35:73;;6813:5;;6393:2;6812:13;;;6829:32;6811:50;6881:5;;6880:13;;-1:-1:-1;;6879:51:73;6950:5;;6949:13;;6966:34;6948:52;7020:5;;7019:13;;-1:-1:-1;;7018:53:73;7091:5;;7090:13;;7107:35;7089:53;6399:32;6332:31;6328:35;;6383:5;;6382:13;;6381:50;;;6456:5;;;-1:-1:-1;;6456:40:73;6516:5;6515:13;;;6532:35;6514:53;6585:5;;;-1:-1:-1;;;6585:50:73;7507:10;8044:49;8011:82;8126:3;:7;;;;8010:124;;;;;;-1:-1:-1;;4830:3335:73:o;36742:361:180:-;36925:7;36963:133;37025:57;37047:11;37060:10;37072:9;37025:21;:57::i;:::-;36963:36;:16;36988:10;36963:24;:36::i;15143:101:73:-;15199:6;15228:1;15224;:5;:13;;15236:1;15224:13;;;-1:-1:-1;15232:1:73;15143:101;-1:-1:-1;15143:101:73:o;24388:947:180:-;24586:7;;24643:26;:19;24586:7;24643:23;:26::i;:::-;24642:27;;;:::i;:::-;24605:65;;24680:16;24699:288;24928:7;:23;;;24969:4;24870:7;:28;;;24802:53;24831:7;:23;;;24802:7;:20;;;:28;;:53;;;;:::i;:::-;24763:23;;;;24736:51;;:18;;:26;:51::i;:::-;24700:21;;:87;;;;:::i;:::-;:155;;;;:::i;:::-;:198;;;;:::i;:::-;24699:211;:288;:211;:288::i;:::-;24680:307;-1:-1:-1;25008:295:180;25238:55;150:4:73;25263:23:180;150:4:73;25275:10:180;25263:11;:23::i;:::-;:29;;;;:::i;25238:55::-;150:4:73;25084:113:180;25163:16;25169:10;150:4:73;25163:16:180;:::i;:::-;25116;;;;25084:23;;;;:49;;:31;:49::i;:113::-;25038:27;150:4:73;25050:14:180;25038:11;:27::i;:::-;:159;;;;:::i;:::-;:181;;;;:::i;:::-;:255;;;;:::i;33928:1494::-;34133:18;34153:4;34222:19;34244:44;34264:7;:23;;;34244:11;:19;;:44;;;;:::i;:::-;34222:66;-1:-1:-1;34298:13:180;34314:99;34366:37;34222:66;34366:23;:37;:::i;:::-;34314:30;;;;;:38;:99::i;:::-;34298:115;;34423:10;34436:221;34470:23;34507:7;:20;;;34547:7;:19;;;150:4:73;34541:25:180;;;;:::i;:::-;34580:7;:23;;;34617:7;:30;;;34436:20;:221::i;:::-;34423:234;;34680:43;34692:30;34702:7;:19;;;34692:5;:9;;:30;;;;:::i;34680:43::-;34667:56;;34911:11;34925:132;34973:30;34983:7;:19;;;34973:5;:9;;:30;;;;:::i;:::-;35017;;;;34925:23;;;;;:132;:34;:132::i;:::-;34911:146;;35076:3;35071:2;:8;35067:56;;;35103:1;35106:5;35095:17;;;;;;;;;;35067:56;35145:110;35177:68;35192:52;35224:7;:19;;;150:4:73;35218:25:180;;;;:::i;:::-;35192:19;;;;;:25;:52::i;:::-;35178:8;35183:3;35178:2;:8;:::i;35145:110::-;35132:123;-1:-1:-1;35324:55:180;150:4:73;35349:23:180;150:4:73;35361:10:180;35349:11;:23::i;:::-;:29;;;;:::i;:::-;35324:16;;;;;:24;:55::i;:::-;35310:69;;;;:::i;:::-;;35410:4;;-1:-1:-1;33928:1494:180;-1:-1:-1;;;;;;;;;33928:1494:180:o;17543:343:77:-;17682:7;17871:8;:1;17877;17871:5;:8::i;:::-;17833:35;17844:19;17861:1;17844:12;:2;17853;17844:8;:12::i;:19::-;17833:1;;17865:2;17833:10;:35::i;317:182:72:-;485:6;451:41;;-1:-1:-1;;;451:41:72;;;;;;;;:::i;10285:1320:77:-;10479:14;10495:12;10657:9;10669:20;10673:2;10677:1;10680;10683;10686:2;10669:3;:20::i;:::-;10657:32;-1:-1:-1;10732:15:77;10745:1;10733:6;10737:2;10733:1;:6;:::i;10732:15::-;10728:19;;10829:1;10825;:5;10821:53;;;10854:1;10857:5;10846:17;;;;;;;10821:53;11029:10;11042:23;11059:2;11063:1;11043:5;11047:1;11043;:5;:::i;11042:23::-;11029:36;;150:4:73;11079:2:77;:9;11075:263;;11178:20;11185:12;150:4:73;11195:1:77;11185:9;:12::i;11178:20::-;11173:25;;11075:263;;;11305:22;11312:14;150:4:73;11324:1:77;11312:11;:14::i;11305:22::-;11300:27;;11075:263;11420:12;:2;11429;11420:8;:12::i;:::-;11415:17;;11530:2;11525;:7;11521:54;;;11557:7;11562:2;11557;:7;:::i;:::-;11548:16;;11521:54;11594:4;11584:14;;10509:1096;;10285:1320;;;;;;;;;;:::o;15417:101:73:-;15473:6;15502:1;15498;:5;:13;;15510:1;15498:13;;;-1:-1:-1;15506:1:73;;15417:101;-1:-1:-1;15417:101:73:o;54850:343:180:-;55034:7;55072:114;55114:58;55137:11;55150:10;55162:9;55114:22;:58::i;:::-;55072:16;;:24;:114::i;54296:234::-;54441:7;54467:56;54511:11;54467:35;54485:16;54491:10;150:4:73;54485:16:180;:::i;53015:1033::-;53197:7;53216:10;53229:221;53263:23;53300:7;:20;;;53340:7;:19;;;150:4:73;53334:25:180;;;;:::i;53229:221::-;53216:234;;53460:11;53474:158;53499:123;53546:62;53588:7;:19;;;53570:12;53547:7;:20;;;:35;;;;:::i;53546:62::-;53499:23;;;;;:29;:123::i;53474:158::-;53460:172;;53642:11;53656:352;53955:52;53987:7;:19;;;150:4:73;53981:25:180;;;;:::i;:::-;53955:19;;;;;:25;:52::i;:::-;53656:281;53809:114;53882:7;:19;;;150:4:73;53876:25:180;;;;:::i;:::-;53833:12;53810:7;:20;;;:35;;;;:::i;53809:114::-;53784:139;;:2;:139;:::i;:::-;53721:23;;;;53656:43;;;;:89;;:64;:89::i;:352::-;53642:366;-1:-1:-1;54025:16:180;:3;53642:366;54025:11;:16::i;14:385:182:-;100:6;108;116;124;177:3;165:9;156:7;152:23;148:33;145:53;;;194:1;191;184:12;145:53;-1:-1:-1;;217:23:182;;;287:2;272:18;;259:32;;-1:-1:-1;338:2:182;323:18;;310:32;;389:2;374:18;361:32;;-1:-1:-1;14:385:182;-1:-1:-1;14:385:182:o;586:454::-;681:6;689;697;705;713;766:3;754:9;745:7;741:23;737:33;734:53;;;783:1;780;773:12;734:53;-1:-1:-1;;806:23:182;;;876:2;861:18;;848:32;;-1:-1:-1;927:2:182;912:18;;899:32;;978:2;963:18;;950:32;;-1:-1:-1;1029:3:182;1014:19;1001:33;;-1:-1:-1;586:454:182;-1:-1:-1;586:454:182:o;1045:347::-;1112:2;1106:9;1154:6;1142:19;;1191:18;1176:34;;1212:22;;;1173:62;1170:185;;;1277:10;1272:3;1268:20;1265:1;1258:31;1312:4;1309:1;1302:15;1340:4;1337:1;1330:15;1170:185;1371:2;1364:22;1045:347;:::o;1397:1032::-;1458:5;1506:6;1494:9;1489:3;1485:19;1481:32;1478:52;;;1526:1;1523;1516:12;1478:52;1548:17;;:::i;:::-;1539:26;;1601:9;1588:23;1581:5;1574:38;1672:2;1661:9;1657:18;1644:32;1639:2;1632:5;1628:14;1621:56;1737:2;1726:9;1722:18;1709:32;1704:2;1697:5;1693:14;1686:56;1802:2;1791:9;1787:18;1774:32;1769:2;1762:5;1758:14;1751:56;1868:3;1857:9;1853:19;1840:33;1834:3;1827:5;1823:15;1816:58;1935:3;1924:9;1920:19;1907:33;1901:3;1894:5;1890:15;1883:58;2002:3;1991:9;1987:19;1974:33;1968:3;1961:5;1957:15;1950:58;2069:3;2058:9;2054:19;2041:33;2035:3;2028:5;2024:15;2017:58;2094:3;2157:2;2146:9;2142:18;2129:32;2124:2;2117:5;2113:14;2106:56;;2181:3;2244:2;2233:9;2229:18;2216:32;2211:2;2204:5;2200:14;2193:56;;2268:3;2331:2;2320:9;2316:18;2303:32;2298:2;2291:5;2287:14;2280:56;;2355:3;2418:2;2407:9;2403:18;2390:32;2385:2;2378:5;2374:14;2367:56;;1397:1032;;;;:::o;2434:381::-;2544:6;2552;2560;2613:3;2601:9;2592:7;2588:23;2584:33;2581:53;;;2630:1;2627;2620:12;2581:53;2653:52;2697:7;2686:9;2653:52;:::i;:::-;2643:62;2752:3;2737:19;;2724:33;;-1:-1:-1;2804:3:182;2789:19;;;2776:33;;2434:381;-1:-1:-1;;;2434:381:182:o;3073:523::-;3177:6;3185;3193;3201;3209;3217;3270:3;3258:9;3249:7;3245:23;3241:33;3238:53;;;3287:1;3284;3277:12;3238:53;-1:-1:-1;;3310:23:182;;;3380:2;3365:18;;3352:32;;-1:-1:-1;3431:2:182;3416:18;;3403:32;;3482:2;3467:18;;3454:32;;-1:-1:-1;3533:3:182;3518:19;;3505:33;;-1:-1:-1;3585:3:182;3570:19;3557:33;;-1:-1:-1;3073:523:182;-1:-1:-1;3073:523:182:o;3601:685::-;3711:6;3719;3727;3735;3743;3751;3759;3812:3;3800:9;3791:7;3787:23;3783:33;3780:53;;;3829:1;3826;3819:12;3780:53;3865:9;3852:23;3842:33;;3922:2;3911:9;3907:18;3894:32;3884:42;;3973:2;3962:9;3958:18;3945:32;3935:42;;4024:2;4013:9;4009:18;3996:32;3986:42;;4075:3;4064:9;4060:19;4047:33;4037:43;;4127:3;4116:9;4112:19;4099:33;4089:43;;4182:3;4171:9;4167:19;4154:33;4230:5;4223:13;4216:21;4209:5;4206:32;4196:60;;4252:1;4249;4242:12;4196:60;4275:5;4265:15;;;3601:685;;;;;;;;;;:::o;4757:592::-;4870:6;4878;4886;4894;4902;4910;4918;4971:3;4959:9;4950:7;4946:23;4942:33;4939:53;;;4988:1;4985;4978:12;4939:53;-1:-1:-1;;5011:23:182;;;5081:2;5066:18;;5053:32;;-1:-1:-1;5132:2:182;5117:18;;5104:32;;5183:2;5168:18;;5155:32;;-1:-1:-1;5234:3:182;5219:19;;5206:33;;-1:-1:-1;5286:3:182;5271:19;;5258:33;;-1:-1:-1;5338:3:182;5323:19;5310:33;;-1:-1:-1;4757:592:182;-1:-1:-1;4757:592:182:o;6065:248::-;6133:6;6141;6194:2;6182:9;6173:7;6169:23;6165:32;6162:52;;;6210:1;6207;6200:12;6162:52;-1:-1:-1;;6233:23:182;;;6303:2;6288:18;;;6275:32;;-1:-1:-1;6065:248:182:o;6318:127::-;6379:10;6374:3;6370:20;6367:1;6360:31;6410:4;6407:1;6400:15;6434:4;6431:1;6424:15;6450:128;6517:9;;;6538:11;;;6535:37;;;6552:18;;:::i;7421:125::-;7486:9;;;7507:10;;;7504:36;;;7520:18;;:::i;7551:135::-;7590:3;7611:17;;;7608:43;;7631:18;;:::i;:::-;-1:-1:-1;7678:1:182;7667:13;;7551:135::o;7691:200::-;7757:9;;;7730:4;7785:9;;7813:10;;7825:12;;;7809:29;7848:12;;;7840:21;;7806:56;7803:82;;;7865:18;;:::i;:::-;7803:82;7691:200;;;;:::o;8314:168::-;8387:9;;;8418;;8435:15;;;8429:22;;8415:37;8405:71;;8456:18;;:::i;8487:136::-;8522:3;-1:-1:-1;;;8543:22:182;;8540:48;;8568:18;;:::i;:::-;-1:-1:-1;8608:1:182;8604:13;;8487:136::o;8760:290::-;8799:1;8825;8815:132;;8869:10;8864:3;8860:20;8857:1;8850:31;8904:4;8901:1;8894:15;8932:4;8929:1;8922:15;8815:132;-1:-1:-1;;;8963:18:182;;-1:-1:-1;;8983:13:182;;8959:38;8956:64;;;9000:18;;:::i;:::-;-1:-1:-1;9034:10:182;;8760:290::o;9055:360::-;9219:2;9204:18;;9252:1;9241:13;;9231:144;;9297:10;9292:3;9288:20;9285:1;9278:31;9332:4;9329:1;9322:15;9360:4;9357:1;9350:15;9231:144;9384:25;;;9055:360;:::o";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {
        readonly "calculateAbsoluteMaxLong((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256)": "a280a282";
        readonly "calculateCloseLong(uint256,uint256,uint256,uint256,uint256,uint256,uint256)": "94169d49";
        readonly "calculateCloseShort(uint256,uint256,uint256,uint256,uint256,uint256,uint256)": "f87845f2";
        readonly "calculateInitialBondReserves(uint256,uint256,uint256,uint256,uint256)": "82a4d306";
        readonly "calculateMaxLong((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),int256,uint256)": "3f77b617";
        readonly "calculateMaxShort((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),int256,uint256)": "9e489b99";
        readonly "calculateNegativeInterestOnClose(uint256,uint256,uint256,uint256,uint256,uint256,bool)": "7ef99f87";
        readonly "calculateOpenLong(uint256,uint256,uint256,uint256,uint256,uint256)": "5e6d9d36";
        readonly "calculateOpenShort(uint256,uint256,uint256,uint256,uint256,uint256)": "6ceebe1d";
        readonly "calculateShortProceedsDown(uint256,uint256,uint256,uint256,uint256,uint256)": "e7acd3ad";
        readonly "calculateShortProceedsUp(uint256,uint256,uint256,uint256,uint256,uint256)": "902b1099";
        readonly "calculateSpotAPR(uint256,uint256,uint256,uint256,uint256)": "2810a036";
        readonly "calculateSpotPrice(uint256,uint256,uint256,uint256)": "2471caed";
        readonly "calculateTimeStretch(uint256,uint256)": "dbab8512";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"enum IHyperdrive.InsufficientLiquidityReason\",\"name\":\"reason\",\"type\":\"uint8\"}],\"name\":\"InsufficientLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"curveFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flatFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLPFee\",\"type\":\"uint256\"}],\"internalType\":\"struct HyperdriveUtils.MaxTradeParams\",\"name\":\"_params\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"_effectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_spotPrice\",\"type\":\"uint256\"}],\"name\":\"calculateAbsoluteMaxLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_effectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amountIn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_normalizedTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_initialVaultSharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateCloseLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_effectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amountOut\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_normalizedTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_initialVaultSharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateCloseShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_effectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_timeStretch\",\"type\":\"uint256\"}],\"name\":\"calculateInitialBondReserves\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"curveFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flatFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLPFee\",\"type\":\"uint256\"}],\"internalType\":\"struct HyperdriveUtils.MaxTradeParams\",\"name\":\"_params\",\"type\":\"tuple\"},{\"internalType\":\"int256\",\"name\":\"_checkpointExposure\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"_maxIterations\",\"type\":\"uint256\"}],\"name\":\"calculateMaxLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"curveFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flatFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLPFee\",\"type\":\"uint256\"}],\"internalType\":\"struct HyperdriveUtils.MaxTradeParams\",\"name\":\"_params\",\"type\":\"tuple\"},{\"internalType\":\"int256\",\"name\":\"_checkpointExposure\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"_maxIterations\",\"type\":\"uint256\"}],\"name\":\"calculateMaxShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shareProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_shareReservesDelta\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_shareCurveDelta\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_totalGovernanceFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_openVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_closeVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"_isLong\",\"type\":\"bool\"}],\"name\":\"calculateNegativeInterestOnClose\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_effectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amountIn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_initialVaultSharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateOpenLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_effectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amountIn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_initialVaultSharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateOpenShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_shareAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_openVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_closeVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_flatFee\",\"type\":\"uint256\"}],\"name\":\"calculateShortProceedsDown\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_shareAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_openVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_closeVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_flatFee\",\"type\":\"uint256\"}],\"name\":\"calculateShortProceedsUp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_effectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_timeStretch\",\"type\":\"uint256\"}],\"name\":\"calculateSpotAPR\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_timeStretch\",\"type\":\"uint256\"}],\"name\":\"calculateSpotPrice\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"}],\"name\":\"calculateTimeStretch\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"InsufficientLiquidity(uint8)\":[{\"notice\":\"Thrown when the pool doesn't have sufficient liquidity to         complete the trade.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}]},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockHyperdriveMath.sol\":\"MockHyperdriveMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xbb41b77195a206fee42f1c801d1feeefcb84d1d33fcdb537ba2597a2eaf7bf94\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ad3474360d05cf4002ea0703ff36dba900dc1b17da8077f8bcaf159c0b0861eb\",\"dweb:/ipfs/QmYTehjAXpiuLErAWGfVw1LFn8g2oZ7YnjLNXcmU5ngPBf\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x2836b8e9e2b6e143d4601e0047dfd09232352038a2133670d2f40da5442ff4b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://64eec4fc70dd4fdf3ad835ef343d56bd4a7c48f2bb0e1f338d9f090e42848660\",\"dweb:/ipfs/Qmeg2aX8QZBggY1tChJQJbkhkbxWFRQPDsZRxUMsGfFg5m\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1841703b12d5b2ca7dedff94c7dd71a4ad0a0b47ca59ba9de98ea14929fb72e5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c192bfc8bee91341d7e7530d71df2fbaec69d7bf0017e7b318dea276b7f3e171\",\"dweb:/ipfs/QmRWCkdXJ7G2FDo4CpsNuRvDgYWzN9U3LXLzM3YKHs9M4y\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xf692b4673daac8627a185253b5fb99c843d9c5a2897be50599030fbd02c21a28\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ec28e35b2523d2f399c79ec5c8e29a4985a0e7a2d1d83c9a834d84dfc44130a2\",\"dweb:/ipfs/QmZLHmSUkDJsnU2FJ4FuaMfo2t6dPimmLaCDrfuxYF8nmD\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355\",\"dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xc28d1017afe010c20c2fbe9b78e0001eb8b7db16e0fe5038990692227be365ec\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8056e866c6da775c66cefc4e03d8856d75980d8c6eb98e954e1319b2478ad51c\",\"dweb:/ipfs/Qme9n2mBoeFUxf7Tzx4dD3iYt2kDsza6mqPXoUogPnS2hx\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xc2e36474285afd5b98999d648305f077a05b0e159dd63ef5f44f29cd42eb68c2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fbf8aac982e8485dce3f8c7f85b9bbbd46b41d8d0d3deebe1fc927799de60c0b\",\"dweb:/ipfs/QmbUJsi5cqS4M4sVcJ8cDWvbMRSqYzfjRAp8gaP1v2dtst\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d\",\"dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a\",\"dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x8d9491ad62e48c7148389a72feca73a388076e3386d7ddc6788193be359e1266\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d340b65b76fc638d119d7d1d6f38fa044c34fc9297dc0c1627c9820218b2e244\",\"dweb:/ipfs/QmZo3nPVg3j2Ga8UXRZFQyTq7RuYuY6F2tYynnVUP4SbDY\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1\",\"dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6\",\"dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk\"]},\"contracts/test/MockHyperdriveMath.sol\":{\"keccak256\":\"0x3216937ae4cab12cc38a706996f3728676ca8f1b35911695b68bec932d942a07\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://036a8f8307a432f041163b2e091465a47f94ea1a30fc3bad8075209b1f33a4d3\",\"dweb:/ipfs/QmcZ7ArLLL9bnbh41M5xWn3mPVZezhfgwf77fnsgPGCEek\"]},\"test/utils/HyperdriveUtils.sol\":{\"keccak256\":\"0x8984493923a9412c6cca272d1b425aa36aa03744c9f0ca2be204f7f0b71c1526\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ce3273e691814ffda079752f1b15bcf64a0ae911fe8a58903d34ce6210ba053b\",\"dweb:/ipfs/QmRAXXNPy9vyG9duP9ET9WrDfrmq3fds7mxfGdsSYZ1tVv\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "ExpInvalidExponent";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "enum IHyperdrive.InsufficientLiquidityReason";
                    readonly name: "reason";
                    readonly type: "uint8";
                }];
                readonly type: "error";
                readonly name: "InsufficientLiquidity";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "LnInvalidInput";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "struct HyperdriveUtils.MaxTradeParams";
                    readonly name: "_params";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "uint256";
                        readonly name: "shareReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "int256";
                        readonly name: "shareAdjustment";
                        readonly type: "int256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "bondReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "longsOutstanding";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "longExposure";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "timeStretch";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "vaultSharePrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "initialVaultSharePrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "minimumShareReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "curveFee";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "flatFee";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "governanceLPFee";
                        readonly type: "uint256";
                    }];
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_effectiveShareReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_spotPrice";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateAbsoluteMaxLong";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_effectiveShareReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_bondReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_amountIn";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_normalizedTimeRemaining";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_timeStretch";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_vaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_initialVaultSharePrice";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateCloseLong";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_effectiveShareReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_bondReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_amountOut";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_normalizedTimeRemaining";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_timeStretch";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_vaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_initialVaultSharePrice";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateCloseShort";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_effectiveShareReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_initialVaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_apr";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_positionDuration";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_timeStretch";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateInitialBondReserves";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "struct HyperdriveUtils.MaxTradeParams";
                    readonly name: "_params";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "uint256";
                        readonly name: "shareReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "int256";
                        readonly name: "shareAdjustment";
                        readonly type: "int256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "bondReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "longsOutstanding";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "longExposure";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "timeStretch";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "vaultSharePrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "initialVaultSharePrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "minimumShareReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "curveFee";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "flatFee";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "governanceLPFee";
                        readonly type: "uint256";
                    }];
                }, {
                    readonly internalType: "int256";
                    readonly name: "_checkpointExposure";
                    readonly type: "int256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_maxIterations";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateMaxLong";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "struct HyperdriveUtils.MaxTradeParams";
                    readonly name: "_params";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "uint256";
                        readonly name: "shareReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "int256";
                        readonly name: "shareAdjustment";
                        readonly type: "int256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "bondReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "longsOutstanding";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "longExposure";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "timeStretch";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "vaultSharePrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "initialVaultSharePrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "minimumShareReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "curveFee";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "flatFee";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "governanceLPFee";
                        readonly type: "uint256";
                    }];
                }, {
                    readonly internalType: "int256";
                    readonly name: "_checkpointExposure";
                    readonly type: "int256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_maxIterations";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateMaxShort";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_shareProceeds";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_shareReservesDelta";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_shareCurveDelta";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_totalGovernanceFee";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_openVaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_closeVaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_isLong";
                    readonly type: "bool";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateNegativeInterestOnClose";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "int256";
                    readonly name: "";
                    readonly type: "int256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_effectiveShareReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_bondReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_amountIn";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_timeStretch";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_vaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_initialVaultSharePrice";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateOpenLong";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_effectiveShareReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_bondReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_amountIn";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_timeStretch";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_vaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_initialVaultSharePrice";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateOpenShort";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_bondAmount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_shareAmount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_openVaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_closeVaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_vaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_flatFee";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateShortProceedsDown";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_bondAmount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_shareAmount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_openVaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_closeVaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_vaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_flatFee";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateShortProceedsUp";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_effectiveShareReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_bondReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_initialVaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_positionDuration";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_timeStretch";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateSpotAPR";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_shareReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_bondReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_initialVaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_timeStretch";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateSpotPrice";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "apr";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "positionDuration";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateTimeStretch";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {};
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {};
                readonly version: 1;
            };
        };
        readonly settings: {
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "aave-v3-core/=lib/aave-v3-core/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
            readonly optimizer: {
                readonly enabled: true;
                readonly runs: 200;
            };
            readonly metadata: {
                readonly bytecodeHash: "ipfs";
            };
            readonly compilationTarget: {
                readonly "contracts/test/MockHyperdriveMath.sol": "MockHyperdriveMath";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9";
                readonly urls: readonly ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdrive.sol": {
                readonly keccak256: "0xbb41b77195a206fee42f1c801d1feeefcb84d1d33fcdb537ba2597a2eaf7bf94";
                readonly urls: readonly ["bzz-raw://ad3474360d05cf4002ea0703ff36dba900dc1b17da8077f8bcaf159c0b0861eb", "dweb:/ipfs/QmYTehjAXpiuLErAWGfVw1LFn8g2oZ7YnjLNXcmU5ngPBf"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0x2836b8e9e2b6e143d4601e0047dfd09232352038a2133670d2f40da5442ff4b3";
                readonly urls: readonly ["bzz-raw://64eec4fc70dd4fdf3ad835ef343d56bd4a7c48f2bb0e1f338d9f090e42848660", "dweb:/ipfs/Qmeg2aX8QZBggY1tChJQJbkhkbxWFRQPDsZRxUMsGfFg5m"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x1841703b12d5b2ca7dedff94c7dd71a4ad0a0b47ca59ba9de98ea14929fb72e5";
                readonly urls: readonly ["bzz-raw://c192bfc8bee91341d7e7530d71df2fbaec69d7bf0017e7b318dea276b7f3e171", "dweb:/ipfs/QmRWCkdXJ7G2FDo4CpsNuRvDgYWzN9U3LXLzM3YKHs9M4y"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveRead.sol": {
                readonly keccak256: "0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55";
                readonly urls: readonly ["bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf", "dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiToken.sol": {
                readonly keccak256: "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f";
                readonly urls: readonly ["bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7", "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenCore.sol": {
                readonly keccak256: "0xf692b4673daac8627a185253b5fb99c843d9c5a2897be50599030fbd02c21a28";
                readonly urls: readonly ["bzz-raw://ec28e35b2523d2f399c79ec5c8e29a4985a0e7a2d1d83c9a834d84dfc44130a2", "dweb:/ipfs/QmZLHmSUkDJsnU2FJ4FuaMfo2t6dPimmLaCDrfuxYF8nmD"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenEvents.sol": {
                readonly keccak256: "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb";
                readonly urls: readonly ["bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222", "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                readonly keccak256: "0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862";
                readonly urls: readonly ["bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355", "dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenRead.sol": {
                readonly keccak256: "0xc28d1017afe010c20c2fbe9b78e0001eb8b7db16e0fe5038990692227be365ec";
                readonly urls: readonly ["bzz-raw://8056e866c6da775c66cefc4e03d8856d75980d8c6eb98e954e1319b2478ad51c", "dweb:/ipfs/Qme9n2mBoeFUxf7Tzx4dD3iYt2kDsza6mqPXoUogPnS2hx"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/AssetId.sol": {
                readonly keccak256: "0xc2e36474285afd5b98999d648305f077a05b0e159dd63ef5f44f29cd42eb68c2";
                readonly urls: readonly ["bzz-raw://fbf8aac982e8485dce3f8c7f85b9bbbd46b41d8d0d3deebe1fc927799de60c0b", "dweb:/ipfs/QmbUJsi5cqS4M4sVcJ8cDWvbMRSqYzfjRAp8gaP1v2dtst"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/Errors.sol": {
                readonly keccak256: "0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0";
                readonly urls: readonly ["bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88", "dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/FixedPointMath.sol": {
                readonly keccak256: "0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf";
                readonly urls: readonly ["bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d", "dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/HyperdriveMath.sol": {
                readonly keccak256: "0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744";
                readonly urls: readonly ["bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a", "dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/LPMath.sol": {
                readonly keccak256: "0x8d9491ad62e48c7148389a72feca73a388076e3386d7ddc6788193be359e1266";
                readonly urls: readonly ["bzz-raw://d340b65b76fc638d119d7d1d6f38fa044c34fc9297dc0c1627c9820218b2e244", "dweb:/ipfs/QmZo3nPVg3j2Ga8UXRZFQyTq7RuYuY6F2tYynnVUP4SbDY"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/SafeCast.sol": {
                readonly keccak256: "0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b";
                readonly urls: readonly ["bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1", "dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/YieldSpaceMath.sol": {
                readonly keccak256: "0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346";
                readonly urls: readonly ["bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6", "dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/test/MockHyperdriveMath.sol": {
                readonly keccak256: "0x3216937ae4cab12cc38a706996f3728676ca8f1b35911695b68bec932d942a07";
                readonly urls: readonly ["bzz-raw://036a8f8307a432f041163b2e091465a47f94ea1a30fc3bad8075209b1f33a4d3", "dweb:/ipfs/QmcZ7ArLLL9bnbh41M5xWn3mPVZezhfgwf77fnsgPGCEek"];
                readonly license: "Apache-2.0";
            };
            readonly "test/utils/HyperdriveUtils.sol": {
                readonly keccak256: "0x8984493923a9412c6cca272d1b425aa36aa03744c9f0ca2be204f7f0b71c1526";
                readonly urls: readonly ["bzz-raw://ce3273e691814ffda079752f1b15bcf64a0ae911fe8a58903d34ce6210ba053b", "dweb:/ipfs/QmRAXXNPy9vyG9duP9ET9WrDfrmq3fds7mxfGdsSYZ1tVv"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/test/MockHyperdriveMath.sol";
        readonly id: 21818;
        readonly exportedSymbols: {
            readonly HyperdriveMath: readonly [15315];
            readonly HyperdriveUtils: readonly [144357];
            readonly MockHyperdriveMath: readonly [21817];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:8241:88";
        readonly nodes: readonly [{
            readonly id: 21329;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:88";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 21331;
            readonly nodeType: "ImportDirective";
            readonly src: "64:76:88";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/HyperdriveMath.sol";
            readonly file: "contracts/src/libraries/HyperdriveMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 21818;
            readonly sourceUnit: 15316;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 21330;
                    readonly name: "HyperdriveMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 15315;
                    readonly src: "73:14:88";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 21333;
            readonly nodeType: "ImportDirective";
            readonly src: "141:65:88";
            readonly nodes: readonly [];
            readonly absolutePath: "test/utils/HyperdriveUtils.sol";
            readonly file: "test/utils/HyperdriveUtils.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 21818;
            readonly sourceUnit: 144358;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 21332;
                    readonly name: "HyperdriveUtils";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 144357;
                    readonly src: "150:15:88";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 21817;
            readonly nodeType: "ContractDefinition";
            readonly src: "208:8071:88";
            readonly nodes: readonly [{
                readonly id: 21362;
                readonly nodeType: "FunctionDefinition";
                readonly src: "242:498:88";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21361;
                    readonly nodeType: "Block";
                    readonly src: "484:256:88";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [21349];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 21349;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "502:6:88";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21361;
                            readonly src: "494:14:88";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21348;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "494:7:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 21358;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 21352;
                                readonly name: "_effectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21335;
                                readonly src: "556:23:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21353;
                                readonly name: "_bondReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21337;
                                readonly src: "593:13:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21354;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21339;
                                readonly src: "620:23:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21355;
                                readonly name: "_positionDuration";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21341;
                                readonly src: "657:17:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21356;
                                readonly name: "_timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21343;
                                readonly src: "688:12:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 21350;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15315;
                                    readonly src: "511:14:88";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$15315_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 21351;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "526:16:88";
                                readonly memberName: "calculateSpotAPR";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 14762;
                                readonly src: "511:31:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 21357;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "511:199:88";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "494:216:88";
                    }, {
                        readonly expression: {
                            readonly id: 21359;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 21349;
                            readonly src: "727:6:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 21347;
                        readonly id: 21360;
                        readonly nodeType: "Return";
                        readonly src: "720:13:88";
                    }];
                };
                readonly functionSelector: "2810a036";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateSpotAPR";
                readonly nameLocation: "251:16:88";
                readonly parameters: {
                    readonly id: 21344;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21335;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "285:23:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21362;
                        readonly src: "277:31:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21334;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "277:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21337;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "326:13:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21362;
                        readonly src: "318:21:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21336;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "318:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21339;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "357:23:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21362;
                        readonly src: "349:31:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21338;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "349:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21341;
                        readonly mutability: "mutable";
                        readonly name: "_positionDuration";
                        readonly nameLocation: "398:17:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21362;
                        readonly src: "390:25:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21340;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "390:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21343;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "433:12:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21362;
                        readonly src: "425:20:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21342;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "425:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "267:184:88";
                };
                readonly returnParameters: {
                    readonly id: 21347;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21346;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21362;
                        readonly src: "475:7:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21345;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "475:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "474:9:88";
                };
                readonly scope: 21817;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21391;
                readonly nodeType: "FunctionDefinition";
                readonly src: "746:504:88";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21390;
                    readonly nodeType: "Block";
                    readonly src: "991:259:88";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [21378];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 21378;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "1009:6:88";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21390;
                            readonly src: "1001:14:88";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21377;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1001:7:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 21387;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 21381;
                                readonly name: "_effectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21364;
                                readonly src: "1075:23:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21382;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21366;
                                readonly src: "1112:23:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21383;
                                readonly name: "_apr";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21368;
                                readonly src: "1149:4:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21384;
                                readonly name: "_positionDuration";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21370;
                                readonly src: "1167:17:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21385;
                                readonly name: "_timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21372;
                                readonly src: "1198:12:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 21379;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15315;
                                    readonly src: "1018:14:88";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$15315_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 21380;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1033:28:88";
                                readonly memberName: "calculateInitialBondReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 14860;
                                readonly src: "1018:43:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 21386;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1018:202:88";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "1001:219:88";
                    }, {
                        readonly expression: {
                            readonly id: 21388;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 21378;
                            readonly src: "1237:6:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 21376;
                        readonly id: 21389;
                        readonly nodeType: "Return";
                        readonly src: "1230:13:88";
                    }];
                };
                readonly functionSelector: "82a4d306";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateInitialBondReserves";
                readonly nameLocation: "755:28:88";
                readonly parameters: {
                    readonly id: 21373;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21364;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "801:23:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21391;
                        readonly src: "793:31:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21363;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "793:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21366;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "842:23:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21391;
                        readonly src: "834:31:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21365;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "834:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21368;
                        readonly mutability: "mutable";
                        readonly name: "_apr";
                        readonly nameLocation: "883:4:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21391;
                        readonly src: "875:12:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21367;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "875:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21370;
                        readonly mutability: "mutable";
                        readonly name: "_positionDuration";
                        readonly nameLocation: "905:17:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21391;
                        readonly src: "897:25:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21369;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "897:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21372;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "940:12:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21391;
                        readonly src: "932:20:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21371;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "932:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "783:175:88";
                };
                readonly returnParameters: {
                    readonly id: 21376;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21375;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21391;
                        readonly src: "982:7:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21374;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "982:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "981:9:88";
                };
                readonly scope: 21817;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21423;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1256:548:88";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21422;
                    readonly nodeType: "Block";
                    readonly src: "1525:279:88";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [21409];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 21409;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "1543:6:88";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21422;
                            readonly src: "1535:14:88";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21408;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1535:7:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 21419;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 21412;
                                readonly name: "_effectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21393;
                                readonly src: "1598:23:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21413;
                                readonly name: "_bondReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21395;
                                readonly src: "1635:13:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21414;
                                readonly name: "_amountIn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21397;
                                readonly src: "1662:9:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21415;
                                readonly name: "_timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21399;
                                readonly src: "1685:12:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21416;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21401;
                                readonly src: "1711:16:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21417;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21403;
                                readonly src: "1741:23:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 21410;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15315;
                                    readonly src: "1552:14:88";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$15315_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 21411;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1567:17:88";
                                readonly memberName: "calculateOpenLong";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 15049;
                                readonly src: "1552:32:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 21418;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1552:222:88";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "1535:239:88";
                    }, {
                        readonly expression: {
                            readonly id: 21420;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 21409;
                            readonly src: "1791:6:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 21407;
                        readonly id: 21421;
                        readonly nodeType: "Return";
                        readonly src: "1784:13:88";
                    }];
                };
                readonly functionSelector: "5e6d9d36";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateOpenLong";
                readonly nameLocation: "1265:17:88";
                readonly parameters: {
                    readonly id: 21404;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21393;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "1300:23:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21423;
                        readonly src: "1292:31:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21392;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1292:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21395;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "1341:13:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21423;
                        readonly src: "1333:21:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21394;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1333:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21397;
                        readonly mutability: "mutable";
                        readonly name: "_amountIn";
                        readonly nameLocation: "1372:9:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21423;
                        readonly src: "1364:17:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21396;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1364:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21399;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "1399:12:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21423;
                        readonly src: "1391:20:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21398;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1391:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21401;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "1429:16:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21423;
                        readonly src: "1421:24:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21400;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1421:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21403;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "1463:23:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21423;
                        readonly src: "1455:31:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21402;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1455:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1282:210:88";
                };
                readonly returnParameters: {
                    readonly id: 21407;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21406;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21423;
                        readonly src: "1516:7:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21405;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1516:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1515:9:88";
                };
                readonly scope: 21817;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21469;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1810:751:88";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21468;
                    readonly nodeType: "Block";
                    readonly src: "2140:421:88";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [21447, 21449, 21451];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 21447;
                            readonly mutability: "mutable";
                            readonly name: "result1";
                            readonly nameLocation: "2159:7:88";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21468;
                            readonly src: "2151:15:88";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21446;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2151:7:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 21449;
                            readonly mutability: "mutable";
                            readonly name: "result2";
                            readonly nameLocation: "2176:7:88";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21468;
                            readonly src: "2168:15:88";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21448;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2168:7:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 21451;
                            readonly mutability: "mutable";
                            readonly name: "result3";
                            readonly nameLocation: "2193:7:88";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21468;
                            readonly src: "2185:15:88";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21450;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2185:7:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 21462;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 21454;
                                readonly name: "_effectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21425;
                                readonly src: "2268:23:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21455;
                                readonly name: "_bondReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21427;
                                readonly src: "2309:13:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21456;
                                readonly name: "_amountIn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21429;
                                readonly src: "2340:9:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21457;
                                readonly name: "_normalizedTimeRemaining";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21431;
                                readonly src: "2367:24:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21458;
                                readonly name: "_timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21433;
                                readonly src: "2409:12:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21459;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21435;
                                readonly src: "2439:16:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21460;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21437;
                                readonly src: "2473:23:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 21452;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15315;
                                    readonly src: "2204:14:88";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$15315_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 21453;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2232:18:88";
                                readonly memberName: "calculateCloseLong";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 15114;
                                readonly src: "2204:46:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256,uint256,uint256)";
                                };
                            };
                            readonly id: 21461;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2204:306:88";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256,uint256)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2150:360:88";
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly id: 21463;
                                readonly name: "result1";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21447;
                                readonly src: "2528:7:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21464;
                                readonly name: "result2";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21449;
                                readonly src: "2537:7:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21465;
                                readonly name: "result3";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21451;
                                readonly src: "2546:7:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 21466;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "2527:27:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 21445;
                        readonly id: 21467;
                        readonly nodeType: "Return";
                        readonly src: "2520:34:88";
                    }];
                };
                readonly functionSelector: "94169d49";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateCloseLong";
                readonly nameLocation: "1819:18:88";
                readonly parameters: {
                    readonly id: 21438;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21425;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "1855:23:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21469;
                        readonly src: "1847:31:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21424;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1847:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21427;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "1896:13:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21469;
                        readonly src: "1888:21:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21426;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1888:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21429;
                        readonly mutability: "mutable";
                        readonly name: "_amountIn";
                        readonly nameLocation: "1927:9:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21469;
                        readonly src: "1919:17:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21428;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1919:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21431;
                        readonly mutability: "mutable";
                        readonly name: "_normalizedTimeRemaining";
                        readonly nameLocation: "1954:24:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21469;
                        readonly src: "1946:32:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21430;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1946:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21433;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "1996:12:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21469;
                        readonly src: "1988:20:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21432;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1988:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21435;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "2026:16:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21469;
                        readonly src: "2018:24:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21434;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2018:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21437;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "2060:23:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21469;
                        readonly src: "2052:31:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21436;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2052:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1837:252:88";
                };
                readonly returnParameters: {
                    readonly id: 21445;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21440;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21469;
                        readonly src: "2113:7:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21439;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2113:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21442;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21469;
                        readonly src: "2122:7:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21441;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2122:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21444;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21469;
                        readonly src: "2131:7:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21443;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2131:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2112:27:88";
                };
                readonly scope: 21817;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21501;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2567:550:88";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21500;
                    readonly nodeType: "Block";
                    readonly src: "2837:280:88";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [21487];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 21487;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "2855:6:88";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21500;
                            readonly src: "2847:14:88";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21486;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2847:7:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 21497;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 21490;
                                readonly name: "_effectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21471;
                                readonly src: "2911:23:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21491;
                                readonly name: "_bondReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21473;
                                readonly src: "2948:13:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21492;
                                readonly name: "_amountIn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21475;
                                readonly src: "2975:9:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21493;
                                readonly name: "_timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21477;
                                readonly src: "2998:12:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21494;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21479;
                                readonly src: "3024:16:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21495;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21481;
                                readonly src: "3054:23:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 21488;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15315;
                                    readonly src: "2864:14:88";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$15315_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 21489;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2879:18:88";
                                readonly memberName: "calculateOpenShort";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 15145;
                                readonly src: "2864:33:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 21496;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2864:223:88";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2847:240:88";
                    }, {
                        readonly expression: {
                            readonly id: 21498;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 21487;
                            readonly src: "3104:6:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 21485;
                        readonly id: 21499;
                        readonly nodeType: "Return";
                        readonly src: "3097:13:88";
                    }];
                };
                readonly functionSelector: "6ceebe1d";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateOpenShort";
                readonly nameLocation: "2576:18:88";
                readonly parameters: {
                    readonly id: 21482;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21471;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "2612:23:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21501;
                        readonly src: "2604:31:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21470;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2604:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21473;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "2653:13:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21501;
                        readonly src: "2645:21:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21472;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2645:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21475;
                        readonly mutability: "mutable";
                        readonly name: "_amountIn";
                        readonly nameLocation: "2684:9:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21501;
                        readonly src: "2676:17:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21474;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2676:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21477;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "2711:12:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21501;
                        readonly src: "2703:20:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21476;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2703:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21479;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "2741:16:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21501;
                        readonly src: "2733:24:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21478;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2733:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21481;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "2775:23:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21501;
                        readonly src: "2767:31:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21480;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2767:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2594:210:88";
                };
                readonly returnParameters: {
                    readonly id: 21485;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21484;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21501;
                        readonly src: "2828:7:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21483;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2828:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2827:9:88";
                };
                readonly scope: 21817;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21547;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3123:755:88";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21546;
                    readonly nodeType: "Block";
                    readonly src: "3455:423:88";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [21525, 21527, 21529];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 21525;
                            readonly mutability: "mutable";
                            readonly name: "result1";
                            readonly nameLocation: "3474:7:88";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21546;
                            readonly src: "3466:15:88";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21524;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3466:7:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 21527;
                            readonly mutability: "mutable";
                            readonly name: "result2";
                            readonly nameLocation: "3491:7:88";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21546;
                            readonly src: "3483:15:88";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21526;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3483:7:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 21529;
                            readonly mutability: "mutable";
                            readonly name: "result3";
                            readonly nameLocation: "3508:7:88";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21546;
                            readonly src: "3500:15:88";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21528;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3500:7:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 21540;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 21532;
                                readonly name: "_effectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21503;
                                readonly src: "3584:23:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21533;
                                readonly name: "_bondReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21505;
                                readonly src: "3625:13:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21534;
                                readonly name: "_amountOut";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21507;
                                readonly src: "3656:10:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21535;
                                readonly name: "_normalizedTimeRemaining";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21509;
                                readonly src: "3684:24:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21536;
                                readonly name: "_timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21511;
                                readonly src: "3726:12:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21537;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21513;
                                readonly src: "3756:16:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21538;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21515;
                                readonly src: "3790:23:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 21530;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15315;
                                    readonly src: "3519:14:88";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$15315_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 21531;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3547:19:88";
                                readonly memberName: "calculateCloseShort";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 15210;
                                readonly src: "3519:47:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256,uint256,uint256)";
                                };
                            };
                            readonly id: 21539;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3519:308:88";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256,uint256)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3465:362:88";
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly id: 21541;
                                readonly name: "result1";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21525;
                                readonly src: "3845:7:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21542;
                                readonly name: "result2";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21527;
                                readonly src: "3854:7:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21543;
                                readonly name: "result3";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21529;
                                readonly src: "3863:7:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 21544;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "3844:27:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 21523;
                        readonly id: 21545;
                        readonly nodeType: "Return";
                        readonly src: "3837:34:88";
                    }];
                };
                readonly functionSelector: "f87845f2";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateCloseShort";
                readonly nameLocation: "3132:19:88";
                readonly parameters: {
                    readonly id: 21516;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21503;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "3169:23:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21547;
                        readonly src: "3161:31:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21502;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3161:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21505;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "3210:13:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21547;
                        readonly src: "3202:21:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21504;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3202:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21507;
                        readonly mutability: "mutable";
                        readonly name: "_amountOut";
                        readonly nameLocation: "3241:10:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21547;
                        readonly src: "3233:18:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21506;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3233:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21509;
                        readonly mutability: "mutable";
                        readonly name: "_normalizedTimeRemaining";
                        readonly nameLocation: "3269:24:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21547;
                        readonly src: "3261:32:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21508;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3261:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21511;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "3311:12:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21547;
                        readonly src: "3303:20:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21510;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3303:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21513;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "3341:16:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21547;
                        readonly src: "3333:24:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21512;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3333:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21515;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "3375:23:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21547;
                        readonly src: "3367:31:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21514;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3367:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3151:253:88";
                };
                readonly returnParameters: {
                    readonly id: 21523;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21518;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21547;
                        readonly src: "3428:7:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21517;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3428:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21520;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21547;
                        readonly src: "3437:7:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21519;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3437:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21522;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21547;
                        readonly src: "3446:7:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21521;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3446:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3427:27:88";
                };
                readonly scope: 21817;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21558;
                readonly nodeType: "StructDefinition";
                readonly src: "3884:217:88";
                readonly nodes: readonly [];
                readonly canonicalName: "MockHyperdriveMath.NegativeInterestOnCloseOutput";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 21549;
                    readonly mutability: "mutable";
                    readonly name: "shareProceeds";
                    readonly nameLocation: "3939:13:88";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 21558;
                    readonly src: "3931:21:88";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 21548;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3931:7:88";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 21551;
                    readonly mutability: "mutable";
                    readonly name: "shareReservesDelta";
                    readonly nameLocation: "3970:18:88";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 21558;
                    readonly src: "3962:26:88";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 21550;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3962:7:88";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 21553;
                    readonly mutability: "mutable";
                    readonly name: "shareCurveDelta";
                    readonly nameLocation: "4006:15:88";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 21558;
                    readonly src: "3998:23:88";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 21552;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3998:7:88";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 21555;
                    readonly mutability: "mutable";
                    readonly name: "shareAdjustmentDelta";
                    readonly nameLocation: "4038:20:88";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 21558;
                    readonly src: "4031:27:88";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_int256";
                        readonly typeString: "int256";
                    };
                    readonly typeName: {
                        readonly id: 21554;
                        readonly name: "int256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4031:6:88";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 21557;
                    readonly mutability: "mutable";
                    readonly name: "totalGovernanceFee";
                    readonly nameLocation: "4076:18:88";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 21558;
                    readonly src: "4068:26:88";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 21556;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4068:7:88";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "NegativeInterestOnCloseOutput";
                readonly nameLocation: "3891:29:88";
                readonly scope: 21817;
                readonly visibility: "public";
            }, {
                readonly id: 21626;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4107:1113:88";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21625;
                    readonly nodeType: "Block";
                    readonly src: "4461:759:88";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [21587];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 21587;
                            readonly mutability: "mutable";
                            readonly name: "output";
                            readonly nameLocation: "4508:6:88";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21625;
                            readonly src: "4471:43:88";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$21558_memory_ptr";
                                readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput";
                            };
                            readonly typeName: {
                                readonly id: 21586;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 21585;
                                    readonly name: "NegativeInterestOnCloseOutput";
                                    readonly nameLocations: readonly ["4471:29:88"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 21558;
                                    readonly src: "4471:29:88";
                                };
                                readonly referencedDeclaration: 21558;
                                readonly src: "4471:29:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$21558_storage_ptr";
                                    readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 21588;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4471:43:88";
                    }, {
                        readonly expression: {
                            readonly id: 21611;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly components: readonly [{
                                    readonly expression: {
                                        readonly id: 21589;
                                        readonly name: "output";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 21587;
                                        readonly src: "4538:6:88";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$21558_memory_ptr";
                                            readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory";
                                        };
                                    };
                                    readonly id: 21591;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: true;
                                    readonly memberLocation: "4545:13:88";
                                    readonly memberName: "shareProceeds";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21549;
                                    readonly src: "4538:20:88";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 21592;
                                        readonly name: "output";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 21587;
                                        readonly src: "4572:6:88";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$21558_memory_ptr";
                                            readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory";
                                        };
                                    };
                                    readonly id: 21593;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: true;
                                    readonly memberLocation: "4579:18:88";
                                    readonly memberName: "shareReservesDelta";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21551;
                                    readonly src: "4572:25:88";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 21594;
                                        readonly name: "output";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 21587;
                                        readonly src: "4611:6:88";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$21558_memory_ptr";
                                            readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory";
                                        };
                                    };
                                    readonly id: 21595;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: true;
                                    readonly memberLocation: "4618:15:88";
                                    readonly memberName: "shareCurveDelta";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21553;
                                    readonly src: "4611:22:88";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 21596;
                                        readonly name: "output";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 21587;
                                        readonly src: "4647:6:88";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$21558_memory_ptr";
                                            readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory";
                                        };
                                    };
                                    readonly id: 21597;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: true;
                                    readonly memberLocation: "4654:20:88";
                                    readonly memberName: "shareAdjustmentDelta";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21555;
                                    readonly src: "4647:27:88";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 21598;
                                        readonly name: "output";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 21587;
                                        readonly src: "4688:6:88";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$21558_memory_ptr";
                                            readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory";
                                        };
                                    };
                                    readonly id: 21599;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: true;
                                    readonly memberLocation: "4695:18:88";
                                    readonly memberName: "totalGovernanceFee";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21557;
                                    readonly src: "4688:25:88";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 21600;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "TupleExpression";
                                readonly src: "4524:199:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$";
                                    readonly typeString: "tuple(uint256,uint256,uint256,int256,uint256)";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 21603;
                                    readonly name: "_shareProceeds";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21560;
                                    readonly src: "4787:14:88";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 21604;
                                    readonly name: "_shareReservesDelta";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21562;
                                    readonly src: "4815:19:88";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 21605;
                                    readonly name: "_shareCurveDelta";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21564;
                                    readonly src: "4848:16:88";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 21606;
                                    readonly name: "_totalGovernanceFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21566;
                                    readonly src: "4878:19:88";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 21607;
                                    readonly name: "_openVaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21568;
                                    readonly src: "4911:20:88";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 21608;
                                    readonly name: "_closeVaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21570;
                                    readonly src: "4945:21:88";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 21609;
                                    readonly name: "_isLong";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21572;
                                    readonly src: "4980:7:88";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    }];
                                    readonly expression: {
                                        readonly id: 21601;
                                        readonly name: "HyperdriveMath";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15315;
                                        readonly src: "4726:14:88";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$15315_$";
                                            readonly typeString: "type(library HyperdriveMath)";
                                        };
                                    };
                                    readonly id: 21602;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4741:32:88";
                                    readonly memberName: "calculateNegativeInterestOnClose";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 15314;
                                    readonly src: "4726:47:88";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256,bool) pure returns (uint256,uint256,uint256,int256,uint256)";
                                    };
                                };
                                readonly id: 21610;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4726:271:88";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$";
                                    readonly typeString: "tuple(uint256,uint256,uint256,int256,uint256)";
                                };
                            };
                            readonly src: "4524:473:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 21612;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4524:473:88";
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly expression: {
                                    readonly id: 21613;
                                    readonly name: "output";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21587;
                                    readonly src: "5028:6:88";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$21558_memory_ptr";
                                        readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory";
                                    };
                                };
                                readonly id: 21614;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5035:13:88";
                                readonly memberName: "shareProceeds";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 21549;
                                readonly src: "5028:20:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 21615;
                                    readonly name: "output";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21587;
                                    readonly src: "5062:6:88";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$21558_memory_ptr";
                                        readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory";
                                    };
                                };
                                readonly id: 21616;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5069:18:88";
                                readonly memberName: "shareReservesDelta";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 21551;
                                readonly src: "5062:25:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 21617;
                                    readonly name: "output";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21587;
                                    readonly src: "5101:6:88";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$21558_memory_ptr";
                                        readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory";
                                    };
                                };
                                readonly id: 21618;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5108:15:88";
                                readonly memberName: "shareCurveDelta";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 21553;
                                readonly src: "5101:22:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 21619;
                                    readonly name: "output";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21587;
                                    readonly src: "5137:6:88";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$21558_memory_ptr";
                                        readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory";
                                    };
                                };
                                readonly id: 21620;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5144:20:88";
                                readonly memberName: "shareAdjustmentDelta";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 21555;
                                readonly src: "5137:27:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 21621;
                                    readonly name: "output";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21587;
                                    readonly src: "5178:6:88";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$21558_memory_ptr";
                                        readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory";
                                    };
                                };
                                readonly id: 21622;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5185:18:88";
                                readonly memberName: "totalGovernanceFee";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 21557;
                                readonly src: "5178:25:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 21623;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "5014:199:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256,uint256,int256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 21584;
                        readonly id: 21624;
                        readonly nodeType: "Return";
                        readonly src: "5007:206:88";
                    }];
                };
                readonly functionSelector: "7ef99f87";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateNegativeInterestOnClose";
                readonly nameLocation: "4116:32:88";
                readonly parameters: {
                    readonly id: 21573;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21560;
                        readonly mutability: "mutable";
                        readonly name: "_shareProceeds";
                        readonly nameLocation: "4166:14:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21626;
                        readonly src: "4158:22:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21559;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4158:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21562;
                        readonly mutability: "mutable";
                        readonly name: "_shareReservesDelta";
                        readonly nameLocation: "4198:19:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21626;
                        readonly src: "4190:27:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21561;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4190:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21564;
                        readonly mutability: "mutable";
                        readonly name: "_shareCurveDelta";
                        readonly nameLocation: "4235:16:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21626;
                        readonly src: "4227:24:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21563;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4227:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21566;
                        readonly mutability: "mutable";
                        readonly name: "_totalGovernanceFee";
                        readonly nameLocation: "4269:19:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21626;
                        readonly src: "4261:27:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21565;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4261:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21568;
                        readonly mutability: "mutable";
                        readonly name: "_openVaultSharePrice";
                        readonly nameLocation: "4306:20:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21626;
                        readonly src: "4298:28:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21567;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4298:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21570;
                        readonly mutability: "mutable";
                        readonly name: "_closeVaultSharePrice";
                        readonly nameLocation: "4344:21:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21626;
                        readonly src: "4336:29:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21569;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4336:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21572;
                        readonly mutability: "mutable";
                        readonly name: "_isLong";
                        readonly nameLocation: "4380:7:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21626;
                        readonly src: "4375:12:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 21571;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4375:4:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4148:245:88";
                };
                readonly returnParameters: {
                    readonly id: 21584;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21575;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21626;
                        readonly src: "4417:7:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21574;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4417:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21577;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21626;
                        readonly src: "4426:7:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21576;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4426:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21579;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21626;
                        readonly src: "4435:7:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21578;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4435:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21581;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21626;
                        readonly src: "4444:6:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 21580;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4444:6:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21583;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21626;
                        readonly src: "4452:7:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21582;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4452:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4416:44:88";
                };
                readonly scope: 21817;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21646;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5226:272:88";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21645;
                    readonly nodeType: "Block";
                    readonly src: "5349:149:88";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [21636];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 21636;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "5367:6:88";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21645;
                            readonly src: "5359:14:88";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21635;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5359:7:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 21642;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 21639;
                                readonly name: "apr";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21628;
                                readonly src: "5425:3:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21640;
                                readonly name: "positionDuration";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21630;
                                readonly src: "5442:16:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 21637;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15315;
                                    readonly src: "5376:14:88";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$15315_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 21638;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5391:20:88";
                                readonly memberName: "calculateTimeStretch";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 14698;
                                readonly src: "5376:35:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 21641;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5376:92:88";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5359:109:88";
                    }, {
                        readonly expression: {
                            readonly id: 21643;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 21636;
                            readonly src: "5485:6:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 21634;
                        readonly id: 21644;
                        readonly nodeType: "Return";
                        readonly src: "5478:13:88";
                    }];
                };
                readonly functionSelector: "dbab8512";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateTimeStretch";
                readonly nameLocation: "5235:20:88";
                readonly parameters: {
                    readonly id: 21631;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21628;
                        readonly mutability: "mutable";
                        readonly name: "apr";
                        readonly nameLocation: "5273:3:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21646;
                        readonly src: "5265:11:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21627;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5265:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21630;
                        readonly mutability: "mutable";
                        readonly name: "positionDuration";
                        readonly nameLocation: "5294:16:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21646;
                        readonly src: "5286:24:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21629;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5286:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5255:61:88";
                };
                readonly returnParameters: {
                    readonly id: 21634;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21633;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21646;
                        readonly src: "5340:7:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21632;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5340:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5339:9:88";
                };
                readonly scope: 21817;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21676;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5504:409:88";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21675;
                    readonly nodeType: "Block";
                    readonly src: "5700:213:88";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [21661, 21663];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 21661;
                            readonly mutability: "mutable";
                            readonly name: "result1";
                            readonly nameLocation: "5719:7:88";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21675;
                            readonly src: "5711:15:88";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21660;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5711:7:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 21663;
                            readonly mutability: "mutable";
                            readonly name: "result2";
                            readonly nameLocation: "5736:7:88";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21675;
                            readonly src: "5728:15:88";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21662;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5728:7:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 21670;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 21666;
                                readonly name: "_params";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21649;
                                readonly src: "5793:7:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_MaxTradeParams_$142385_memory_ptr";
                                    readonly typeString: "struct HyperdriveUtils.MaxTradeParams memory";
                                };
                            }, {
                                readonly id: 21667;
                                readonly name: "_checkpointExposure";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21651;
                                readonly src: "5814:19:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }, {
                                readonly id: 21668;
                                readonly name: "_maxIterations";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21653;
                                readonly src: "5847:14:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_MaxTradeParams_$142385_memory_ptr";
                                    readonly typeString: "struct HyperdriveUtils.MaxTradeParams memory";
                                }, {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 21664;
                                    readonly name: "HyperdriveUtils";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 144357;
                                    readonly src: "5747:15:88";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveUtils_$144357_$";
                                        readonly typeString: "type(library HyperdriveUtils)";
                                    };
                                };
                                readonly id: 21665;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5763:16:88";
                                readonly memberName: "calculateMaxLong";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 142578;
                                readonly src: "5747:32:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_MaxTradeParams_$142385_memory_ptr_$_t_int256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "function (struct HyperdriveUtils.MaxTradeParams memory,int256,uint256) pure returns (uint256,uint256)";
                                };
                            };
                            readonly id: 21669;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5747:124:88";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5710:161:88";
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly id: 21671;
                                readonly name: "result1";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21661;
                                readonly src: "5889:7:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21672;
                                readonly name: "result2";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21663;
                                readonly src: "5898:7:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 21673;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "5888:18:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 21659;
                        readonly id: 21674;
                        readonly nodeType: "Return";
                        readonly src: "5881:25:88";
                    }];
                };
                readonly functionSelector: "3f77b617";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateMaxLong";
                readonly nameLocation: "5513:16:88";
                readonly parameters: {
                    readonly id: 21654;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21649;
                        readonly mutability: "mutable";
                        readonly name: "_params";
                        readonly nameLocation: "5577:7:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21676;
                        readonly src: "5539:45:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_MaxTradeParams_$142385_memory_ptr";
                            readonly typeString: "struct HyperdriveUtils.MaxTradeParams";
                        };
                        readonly typeName: {
                            readonly id: 21648;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 21647;
                                readonly name: "HyperdriveUtils.MaxTradeParams";
                                readonly nameLocations: readonly ["5539:15:88", "5555:14:88"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 142385;
                                readonly src: "5539:30:88";
                            };
                            readonly referencedDeclaration: 142385;
                            readonly src: "5539:30:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_MaxTradeParams_$142385_storage_ptr";
                                readonly typeString: "struct HyperdriveUtils.MaxTradeParams";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21651;
                        readonly mutability: "mutable";
                        readonly name: "_checkpointExposure";
                        readonly nameLocation: "5601:19:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21676;
                        readonly src: "5594:26:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 21650;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5594:6:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21653;
                        readonly mutability: "mutable";
                        readonly name: "_maxIterations";
                        readonly nameLocation: "5638:14:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21676;
                        readonly src: "5630:22:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21652;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5630:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5529:129:88";
                };
                readonly returnParameters: {
                    readonly id: 21659;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21656;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21676;
                        readonly src: "5682:7:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21655;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5682:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21658;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21676;
                        readonly src: "5691:7:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21657;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5691:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5681:18:88";
                };
                readonly scope: 21817;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21706;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5919:455:88";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21705;
                    readonly nodeType: "Block";
                    readonly src: "6124:250:88";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [21691, 21693];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 21691;
                            readonly mutability: "mutable";
                            readonly name: "result1";
                            readonly nameLocation: "6143:7:88";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21705;
                            readonly src: "6135:15:88";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21690;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6135:7:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 21693;
                            readonly mutability: "mutable";
                            readonly name: "result2";
                            readonly nameLocation: "6160:7:88";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21705;
                            readonly src: "6152:15:88";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21692;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6152:7:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 21700;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 21696;
                                readonly name: "_params";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21679;
                                readonly src: "6242:7:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_MaxTradeParams_$142385_memory_ptr";
                                    readonly typeString: "struct HyperdriveUtils.MaxTradeParams memory";
                                };
                            }, {
                                readonly id: 21697;
                                readonly name: "_effectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21681;
                                readonly src: "6267:23:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21698;
                                readonly name: "_spotPrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21683;
                                readonly src: "6308:10:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_MaxTradeParams_$142385_memory_ptr";
                                    readonly typeString: "struct HyperdriveUtils.MaxTradeParams memory";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 21694;
                                    readonly name: "HyperdriveUtils";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 144357;
                                    readonly src: "6171:15:88";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveUtils_$144357_$";
                                        readonly typeString: "type(library HyperdriveUtils)";
                                    };
                                };
                                readonly id: 21695;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6200:24:88";
                                readonly memberName: "calculateAbsoluteMaxLong";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 142772;
                                readonly src: "6171:53:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_MaxTradeParams_$142385_memory_ptr_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "function (struct HyperdriveUtils.MaxTradeParams memory,uint256,uint256) pure returns (uint256,uint256)";
                                };
                            };
                            readonly id: 21699;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6171:161:88";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6134:198:88";
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly id: 21701;
                                readonly name: "result1";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21691;
                                readonly src: "6350:7:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21702;
                                readonly name: "result2";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21693;
                                readonly src: "6359:7:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 21703;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "6349:18:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 21689;
                        readonly id: 21704;
                        readonly nodeType: "Return";
                        readonly src: "6342:25:88";
                    }];
                };
                readonly functionSelector: "a280a282";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateAbsoluteMaxLong";
                readonly nameLocation: "5928:24:88";
                readonly parameters: {
                    readonly id: 21684;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21679;
                        readonly mutability: "mutable";
                        readonly name: "_params";
                        readonly nameLocation: "6000:7:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21706;
                        readonly src: "5962:45:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_MaxTradeParams_$142385_memory_ptr";
                            readonly typeString: "struct HyperdriveUtils.MaxTradeParams";
                        };
                        readonly typeName: {
                            readonly id: 21678;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 21677;
                                readonly name: "HyperdriveUtils.MaxTradeParams";
                                readonly nameLocations: readonly ["5962:15:88", "5978:14:88"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 142385;
                                readonly src: "5962:30:88";
                            };
                            readonly referencedDeclaration: 142385;
                            readonly src: "5962:30:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_MaxTradeParams_$142385_storage_ptr";
                                readonly typeString: "struct HyperdriveUtils.MaxTradeParams";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21681;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "6025:23:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21706;
                        readonly src: "6017:31:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21680;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6017:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21683;
                        readonly mutability: "mutable";
                        readonly name: "_spotPrice";
                        readonly nameLocation: "6066:10:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21706;
                        readonly src: "6058:18:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21682;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6058:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5952:130:88";
                };
                readonly returnParameters: {
                    readonly id: 21689;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21686;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21706;
                        readonly src: "6106:7:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21685;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6106:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21688;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21706;
                        readonly src: "6115:7:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21687;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6115:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6105:18:88";
                };
                readonly scope: 21817;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21726;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6380:365:88";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21725;
                    readonly nodeType: "Block";
                    readonly src: "6568:177:88";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 21720;
                                readonly name: "_params";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21709;
                                readonly src: "6648:7:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_MaxTradeParams_$142385_memory_ptr";
                                    readonly typeString: "struct HyperdriveUtils.MaxTradeParams memory";
                                };
                            }, {
                                readonly id: 21721;
                                readonly name: "_checkpointExposure";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21711;
                                readonly src: "6673:19:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }, {
                                readonly id: 21722;
                                readonly name: "_maxIterations";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21713;
                                readonly src: "6710:14:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_MaxTradeParams_$142385_memory_ptr";
                                    readonly typeString: "struct HyperdriveUtils.MaxTradeParams memory";
                                }, {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 21718;
                                    readonly name: "HyperdriveUtils";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 144357;
                                    readonly src: "6597:15:88";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveUtils_$144357_$";
                                        readonly typeString: "type(library HyperdriveUtils)";
                                    };
                                };
                                readonly id: 21719;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6613:17:88";
                                readonly memberName: "calculateMaxShort";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 143508;
                                readonly src: "6597:33:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_MaxTradeParams_$142385_memory_ptr_$_t_int256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (struct HyperdriveUtils.MaxTradeParams memory,int256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 21723;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6597:141:88";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 21717;
                        readonly id: 21724;
                        readonly nodeType: "Return";
                        readonly src: "6578:160:88";
                    }];
                };
                readonly functionSelector: "9e489b99";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateMaxShort";
                readonly nameLocation: "6389:17:88";
                readonly parameters: {
                    readonly id: 21714;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21709;
                        readonly mutability: "mutable";
                        readonly name: "_params";
                        readonly nameLocation: "6454:7:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21726;
                        readonly src: "6416:45:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_MaxTradeParams_$142385_memory_ptr";
                            readonly typeString: "struct HyperdriveUtils.MaxTradeParams";
                        };
                        readonly typeName: {
                            readonly id: 21708;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 21707;
                                readonly name: "HyperdriveUtils.MaxTradeParams";
                                readonly nameLocations: readonly ["6416:15:88", "6432:14:88"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 142385;
                                readonly src: "6416:30:88";
                            };
                            readonly referencedDeclaration: 142385;
                            readonly src: "6416:30:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_MaxTradeParams_$142385_storage_ptr";
                                readonly typeString: "struct HyperdriveUtils.MaxTradeParams";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21711;
                        readonly mutability: "mutable";
                        readonly name: "_checkpointExposure";
                        readonly nameLocation: "6478:19:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21726;
                        readonly src: "6471:26:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 21710;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6471:6:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21713;
                        readonly mutability: "mutable";
                        readonly name: "_maxIterations";
                        readonly nameLocation: "6515:14:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21726;
                        readonly src: "6507:22:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21712;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6507:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6406:129:88";
                };
                readonly returnParameters: {
                    readonly id: 21717;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21716;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21726;
                        readonly src: "6559:7:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21715;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6559:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6558:9:88";
                };
                readonly scope: 21817;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21752;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6751:418:88";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21751;
                    readonly nodeType: "Block";
                    readonly src: "6951:218:88";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [21740];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 21740;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "6969:6:88";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21751;
                            readonly src: "6961:14:88";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21739;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6961:7:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 21748;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 21743;
                                readonly name: "_shareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21728;
                                readonly src: "7025:14:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21744;
                                readonly name: "_bondReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21730;
                                readonly src: "7053:13:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21745;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21732;
                                readonly src: "7080:23:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21746;
                                readonly name: "_timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21734;
                                readonly src: "7117:12:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 21741;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15315;
                                    readonly src: "6978:14:88";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$15315_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 21742;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6993:18:88";
                                readonly memberName: "calculateSpotPrice";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 14724;
                                readonly src: "6978:33:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 21747;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6978:161:88";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6961:178:88";
                    }, {
                        readonly expression: {
                            readonly id: 21749;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 21740;
                            readonly src: "7156:6:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 21738;
                        readonly id: 21750;
                        readonly nodeType: "Return";
                        readonly src: "7149:13:88";
                    }];
                };
                readonly functionSelector: "2471caed";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateSpotPrice";
                readonly nameLocation: "6760:18:88";
                readonly parameters: {
                    readonly id: 21735;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21728;
                        readonly mutability: "mutable";
                        readonly name: "_shareReserves";
                        readonly nameLocation: "6796:14:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21752;
                        readonly src: "6788:22:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21727;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6788:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21730;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "6828:13:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21752;
                        readonly src: "6820:21:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21729;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6820:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21732;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "6859:23:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21752;
                        readonly src: "6851:31:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21731;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6851:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21734;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "6900:12:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21752;
                        readonly src: "6892:20:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21733;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6892:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6778:140:88";
                };
                readonly returnParameters: {
                    readonly id: 21738;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21737;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21752;
                        readonly src: "6942:7:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21736;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6942:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6941:9:88";
                };
                readonly scope: 21817;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21784;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7175:546:88";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21783;
                    readonly nodeType: "Block";
                    readonly src: "7443:278:88";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [21770];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 21770;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "7461:6:88";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21783;
                            readonly src: "7453:14:88";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21769;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "7453:7:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 21780;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 21773;
                                readonly name: "_bondAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21754;
                                readonly src: "7523:11:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21774;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21756;
                                readonly src: "7548:12:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21775;
                                readonly name: "_openVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21758;
                                readonly src: "7574:20:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21776;
                                readonly name: "_closeVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21760;
                                readonly src: "7608:21:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21777;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21762;
                                readonly src: "7643:16:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21778;
                                readonly name: "_flatFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21764;
                                readonly src: "7673:8:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 21771;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15315;
                                    readonly src: "7470:14:88";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$15315_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 21772;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "7485:24:88";
                                readonly memberName: "calculateShortProceedsUp";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 14911;
                                readonly src: "7470:39:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 21779;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7470:221:88";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "7453:238:88";
                    }, {
                        readonly expression: {
                            readonly id: 21781;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 21770;
                            readonly src: "7708:6:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 21768;
                        readonly id: 21782;
                        readonly nodeType: "Return";
                        readonly src: "7701:13:88";
                    }];
                };
                readonly functionSelector: "902b1099";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateShortProceedsUp";
                readonly nameLocation: "7184:24:88";
                readonly parameters: {
                    readonly id: 21765;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21754;
                        readonly mutability: "mutable";
                        readonly name: "_bondAmount";
                        readonly nameLocation: "7226:11:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21784;
                        readonly src: "7218:19:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21753;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7218:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21756;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "7255:12:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21784;
                        readonly src: "7247:20:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21755;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7247:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21758;
                        readonly mutability: "mutable";
                        readonly name: "_openVaultSharePrice";
                        readonly nameLocation: "7285:20:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21784;
                        readonly src: "7277:28:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21757;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7277:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21760;
                        readonly mutability: "mutable";
                        readonly name: "_closeVaultSharePrice";
                        readonly nameLocation: "7323:21:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21784;
                        readonly src: "7315:29:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21759;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7315:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21762;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "7362:16:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21784;
                        readonly src: "7354:24:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21761;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7354:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21764;
                        readonly mutability: "mutable";
                        readonly name: "_flatFee";
                        readonly nameLocation: "7396:8:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21784;
                        readonly src: "7388:16:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21763;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7388:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7208:202:88";
                };
                readonly returnParameters: {
                    readonly id: 21768;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21767;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21784;
                        readonly src: "7434:7:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21766;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7434:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7433:9:88";
                };
                readonly scope: 21817;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21816;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7727:550:88";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21815;
                    readonly nodeType: "Block";
                    readonly src: "7997:280:88";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [21802];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 21802;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "8015:6:88";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21815;
                            readonly src: "8007:14:88";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21801;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "8007:7:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 21812;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 21805;
                                readonly name: "_bondAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21786;
                                readonly src: "8079:11:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21806;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21788;
                                readonly src: "8104:12:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21807;
                                readonly name: "_openVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21790;
                                readonly src: "8130:20:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21808;
                                readonly name: "_closeVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21792;
                                readonly src: "8164:21:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21809;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21794;
                                readonly src: "8199:16:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21810;
                                readonly name: "_flatFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21796;
                                readonly src: "8229:8:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 21803;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15315;
                                    readonly src: "8024:14:88";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$15315_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 21804;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "8039:26:88";
                                readonly memberName: "calculateShortProceedsDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 14962;
                                readonly src: "8024:41:88";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 21811;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8024:223:88";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "8007:240:88";
                    }, {
                        readonly expression: {
                            readonly id: 21813;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 21802;
                            readonly src: "8264:6:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 21800;
                        readonly id: 21814;
                        readonly nodeType: "Return";
                        readonly src: "8257:13:88";
                    }];
                };
                readonly functionSelector: "e7acd3ad";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateShortProceedsDown";
                readonly nameLocation: "7736:26:88";
                readonly parameters: {
                    readonly id: 21797;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21786;
                        readonly mutability: "mutable";
                        readonly name: "_bondAmount";
                        readonly nameLocation: "7780:11:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21816;
                        readonly src: "7772:19:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21785;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7772:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21788;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "7809:12:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21816;
                        readonly src: "7801:20:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21787;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7801:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21790;
                        readonly mutability: "mutable";
                        readonly name: "_openVaultSharePrice";
                        readonly nameLocation: "7839:20:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21816;
                        readonly src: "7831:28:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21789;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7831:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21792;
                        readonly mutability: "mutable";
                        readonly name: "_closeVaultSharePrice";
                        readonly nameLocation: "7877:21:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21816;
                        readonly src: "7869:29:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21791;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7869:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21794;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "7916:16:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21816;
                        readonly src: "7908:24:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21793;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7908:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21796;
                        readonly mutability: "mutable";
                        readonly name: "_flatFee";
                        readonly nameLocation: "7950:8:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21816;
                        readonly src: "7942:16:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21795;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7942:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7762:202:88";
                };
                readonly returnParameters: {
                    readonly id: 21800;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21799;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21816;
                        readonly src: "7988:7:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21798;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7988:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7987:9:88";
                };
                readonly scope: 21817;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "MockHyperdriveMath";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [21817];
            readonly name: "MockHyperdriveMath";
            readonly nameLocation: "217:18:88";
            readonly scope: 21818;
            readonly usedErrors: readonly [7351, 7363, 7393];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 88;
};
//# sourceMappingURL=MockHyperdriveMath.d.ts.map