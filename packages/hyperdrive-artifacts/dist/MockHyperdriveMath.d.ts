export declare const MockHyperdriveMath: {
    readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ExpInvalidExponent";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InsufficientLiquidity";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "LnInvalidInput";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnsafeCastToInt256";
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
        readonly object: "0x608060405234801561001057600080fd5b506123b3806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063902b10991161008c578063a280a28211610066578063a280a28214610218578063dbab85121461022b578063e7acd3ad1461023e578063f87845f21461025157600080fd5b8063902b1099146101c457806394169d49146101d75780639e489b991461020557600080fd5b80635e6d9d36116100c85780635e6d9d36146101505780636ceebe1d146101635780637ef99f871461017657806382a4d306146101b157600080fd5b80632471caed146100ef5780632810a036146101155780633f77b61714610128575b600080fd5b6101026100fd36600461200a565b610264565b6040519081526020015b60405180910390f35b61010261012336600461203c565b61027d565b61013b61013636600461214c565b610298565b6040805192835260208301919091520161010c565b61010261015e366004612183565b6102b9565b610102610171366004612183565b6102d6565b6101896101843660046121c6565b6102e7565b604080519586526020860194909452928401919091526060830152608082015260a00161010c565b6101026101bf36600461203c565b61036b565b6101026101d2366004612183565b61037b565b6101ea6101e536600461222b565b61038c565b6040805193845260208401929092529082015260600161010c565b61010261021336600461214c565b6103bc565b61013b61022636600461214c565b6103d3565b610102610239366004612277565b6103e4565b61010261024c366004612183565b6103fb565b6101ea61025f36600461222b565b61040c565b60008061027386868686610424565b9695505050505050565b60008061028d8787878787610444565b979650505050505050565b6000806000806102a987878761047f565b909450925050505b935093915050565b6000806102ca888888888888610693565b98975050505050505050565b6000806102ca8888888888886106b4565b60008060008060006103216040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b6103308d8d8d8d8d8d8d6106d5565b608086018190526060860182905260408601839052602086018490529484905292985090965094509250905097509750975097509792505050565b60008061028d8787878787610774565b6000806102ca888888888888610805565b6000806000806000806103a48d8d8d8d8d8d8d61084f565b919750955093505050505b9750975097945050505050565b60006103c98484846108be565b90505b9392505050565b6000806000806102a9878787610a70565b6000806103f18484610cc0565b9150505b92915050565b6000806102ca888888888888610d57565b6000806000806000806103a48d8d8d8d8d8d8d610d76565b600061043b82610435858888610dca565b90610de8565b95945050505050565b60008061045387878786610424565b905061028d61046782866301e13380610e4e565b61047983670de0b6b3a76400006122af565b90610e74565b600080600061049686600001518760200151610e89565b905060006104b28288604001518960e001518a60a00151610424565b90506000806104c2898585610a70565b909250905060006104d68a8a858588610eaf565b91505080156104ed575090945092506102b1915050565b506104fa89838a86610fe7565b955061050889878686611087565b945060008061051a8b8b8a8a89610eaf565b915091508061058a5760405162461bcd60e51b815260206004820152603160248201527f496e697469616c20677565737320696e206063616c63756c6174654d61784c6f6044820152703733b01034b99034b739b7b63b32b73a1760791b60648201526084015b60405180910390fd5b60005b89811015610684578489106106005760405162461bcd60e51b815260206004820152603360248201527f52656163686564206162736f6c757465206d617820626f6e6420616d6f756e746044820152721034b7103033b2ba2fb6b0bc2fb637b733b01760691b6064820152608401610581565b600061060e8d8b8a8a6110da565b935090508261061d5750610684565b60006106298583610e74565b610633908c6122c2565b905060006106438f838c8c611087565b90506106528f8f84848d610eaf565b9096509450841561066857819b50809a50610670565b505050610684565b5050508061067d906122d5565b905061058d565b50505050505050935093915050565b600061028d8787876106ad88670de0b6b3a76400006122af565b8787611173565b600061028d8787876106ce88670de0b6b3a76400006122af565b8787611220565b600080600080600080888810156107445786156106fa576106f78d898b610dca565b9c505b6107058c898b610dca565b9b506107108b611243565b6107198d611243565b61072391906122ee565b90506107308b898b610dca565b9a5061073d8a898b610dca565b9950610763565b61074d8b611243565b6107568d611243565b61076091906122ee565b90505b9b9c9a9b999a975050505050505050565b600080610785846301e13380610e74565b905060006107938683611271565b6107a590670de0b6b3a76400006122c2565b9050670de0b6b3a764000081106107d9576107d26107cb670de0b6b3a764000086610e74565b8290610de8565b90506107f1565b6107ee6107cb670de0b6b3a764000086611286565b90505b6102ca816107ff898b611271565b90611271565b60008061081d846108178a888a610e4e565b90611286565b905061082a888486610e4e565b61083490826122c2565b9050868111156108445786810391505b509695505050505050565b6000808061087061086888670de0b6b3a76400006122af565b899087610dca565b905086156103af576108828888611271565b91506108a38a8a8461089c8a670de0b6b3a76400006122af565b8989611220565b92506108af83826122c2565b90509750975097945050505050565b6040805160608101825260008082526020820181905291810182905260006108ee86600001518760200151610e89565b9050600061090a8288604001518960e001518a60a00151610424565b90506000610918888461129b565b9050610927888285858b6113bb565b15801560408701529085526109415793506103cc92505050565b600061094e89848a6114b1565b905061095d898286868c6113bb565b1515604087018190529086526109cf5760405162461bcd60e51b815260206004820152603160248201527f496e697469616c20677565737320696e206063616c63756c6174654d617853686044820152701bdc9d18081a5cc81a5b9cdbdb1d995b9d607a1b6064820152608401610581565b60005b87811015610a63576109e68a838688611587565b15801560408901526020880191909152610a635760208601518651600091610a0e9190610e74565b610a1890846122c2565b905083811115610a285750610a63565b610a358b8288888e6113bb565b15801560408a0152908852610a4c57809250610a52565b50610a63565b50610a5c816122d5565b90506109d2565b5098975050505050505050565b600080600080610aa68688604001518960a00151670de0b6b3a7640000610a9791906122af565b8a60c001518b60e0015161160e565b9050610af6876101400151670de0b6b3a7640000610ac491906122af565b610af0670de0b6b3a7640000610ada818a611286565b610ae491906122af565b6101208b01519061163d565b9061163d565b9150610b26876101400151670de0b6b3a7640000610b1491906122af565b61081784670de0b6b3a76400006122c2565b60a0880151909250610b4f90610b489061047981670de0b6b3a76400006122af565b8390610de8565b9150610b6c8760e001518860c0015161128690919063ffffffff16565b610b7690836122c2565b9150610b828183610e74565b9150610bb1610b488860a00151670de0b6b3a7640000610ba291906122af565b670de0b6b3a764000090610e74565b9150506000610bcd8760e0015183610e7490919063ffffffff16565b9050600080610c1a896101400151670de0b6b3a7640000610bee91906122af565b6107ff670de0b6b3a7640000610c04818c610e74565b610c0e91906122af565b6101208d015190611271565b9050610c70846107ff610c428c60a00151670de0b6b3a764000061128690919063ffffffff16565b6104358d6101400151670de0b6b3a7640000610c5e91906122af565b61047987670de0b6b3a76400006122c2565b915050610c878860c0015188846107ff91906122af565b9450610c9985878a6101200151611652565b818960400151610ca991906122af565b610cb391906122af565b9350505050935093915050565b600080610cf1610ce2610cd486606461230e565b66a5bbed86c5a00090611271565b6748cd4072281e000090610e74565b9050610d05670de0b6b3a764000082610e74565b90506103f1816107ff610d30610d2b610d2689670de0b6b3a76400006122c2565b611243565b61167f565b610479610d2b610d458a8a6301e13380610dca565b610d2690670de0b6b3a76400006122c2565b600080610d69846104798a888a610dca565b905061082a888486610dca565b60008080610d97610d8f88670de0b6b3a76400006122af565b899087610e4e565b905086156103af57610da9888861163d565b91506108a38a8a84610dc38a670de0b6b3a76400006122af565b89896118ae565b6000826000190484118302158202610de157600080fd5b5091020490565b600081600003610e015750670de0b6b3a76400006103f5565b82600003610e11575060006103f5565b6000610e1c83611243565b90506000610e2c610d2b86611243565b9050818102610e43670de0b6b3a764000082612325565b9050610273816118bf565b6000826000190484118302158202610e6557600080fd5b50910281810615159190040190565b60006103cc83670de0b6b3a764000084610dca565b600080610e968484611a54565b909250905080610ea857610ea8611a93565b5092915050565b6000806000610eca86858a61012001518b6101600151611aac565b90506000610ee58960c0015183610e7490919063ffffffff16565b60c08a0151610ef5908990610e74565b8a51610f0191906122c2565b610f0b91906122af565b90506000868a60800151610f1f91906122c2565b90506000610f2d8a82611ac6565b610f3690612361565b90508a6101000151610f558c60c0015184610e7490919063ffffffff16565b610f5f91906122c2565b60c08c0151610f6f908390610e74565b610f7990856122c2565b10610fd1576101008b015160c08c0151610f94908490610e74565b60c08d0151610fa4908490610e74565b610fae90866122c2565b610fb891906122af565b610fc291906122af565b60019550955050505050610fdd565b60008095509550505050505b9550959350505050565b600080610ff686858586611adb565b9050600061103d670b1a2bc2ec5000006107ff6110338a60a00151670de0b6b3a764000061102491906122af565b670de0b6b3a764000090611286565b610435868b610e74565b90506000611053670de0b6b3a764000083611271565b61106f61106884670de0b6b3a76400006122af565b8790611271565b61107991906122c2565b90506102ca88878784611adb565b6000806110be8487604001516110aa8960c0015189610e7490919063ffffffff16565b8960a001518a60c001518b60e00151610693565b90506110d08584886101200151611652565b61027390826122af565b6000806110e986868686611bde565b9092509050806110fc576000915061116a565b61112661111184670de0b6b3a76400006122af565b6101208801516101608901516107ff91611271565b61113090836122c2565b9150611144670de0b6b3a7640000836122af565b9150611167670de0b6b3a76400008760c0015184610dca9092919063ffffffff16565b91505b94509492505050565b6000806111838888878787611d2e565b905061119d85610435611196898c6122c2565b8690611271565b97506111aa848985610dca565b9750878110156111bc576111bc611a93565b878103670de0b6b3a764000081106111ea576111e36107cb670de0b6b3a764000088611286565b9050611202565b6111ff6107cb670de0b6b3a764000088610e74565b90505b8088101561121257611212611a93565b909603979650505050505050565b600080611231888888888888611d53565b90925090508061084457610844611a93565b60006001600160ff1b0382111561126d5760405163396ea70160e11b815260040160405180910390fd5b5090565b60006103cc8383670de0b6b3a7640000610dca565b60006103cc83670de0b6b3a764000084610e4e565b6000806112b660008560200151611e1690919063ffffffff16565b8461010001516112c691906122c2565b905060006112fa8486604001518760a00151670de0b6b3a76400006112eb91906122af565b8860c001518960e0015161160e565b9050600061134b6113388760a00151670de0b6b3a764000061131c91906122af565b61043561132d878b60200151610e89565b60e08b01519061163d565b60e088015160c0890151610af091611286565b61135590836122af565b9050670de0b6b3a7640000811061138b576113846107cb8760a00151670de0b6b3a7640000610ba291906122af565b90506113ac565b6113a96107cb8760a00151670de0b6b3a764000061102491906122af565b90505b604086015161027390826122af565b6000806000806113f2878a604001518a8c60a00151670de0b6b3a76400006113e391906122af565b8d60c001518e60e00151611d53565b915091508061140957600080935093505050610fdd565b60006114438a60c001516114298b8a8e61012001518f6101600151611e2c565b6114398c8b8f6101200151611e43565b61047991906122af565b61144d90846122af565b8a5161145991906122af565b905060006114888b60c0015161147960008a611e1690919063ffffffff16565b8d6080015161047991906122af565b90508a61010001518161149b91906122c2565b8210610fd1576101008b0151610fb882846122af565b600080839050600061151c8661010001516114dd8860c001518960800151610e7490919063ffffffff16565b60c08901516114f190610479896000611e16565b89516114fd91906122c2565b61150791906122af565b61151191906122af565b60c088015190611271565b905061027361154b61153687670de0b6b3a76400006122af565b6101208901516101608a01516107ff91611271565b61156c61156088670de0b6b3a76400006122af565b6101208a015190611271565b61157690856122af565b61158091906122c2565b8290610e74565b6000806000611597878786611e5e565b905060006115e08860c001516104798a6101600151670de0b6b3a76400006115bf91906122af565b6107ff6115d48b670de0b6b3a76400006122af565b6101208e015190611271565b9050808210611600576115f381836122af565b600193509350505061116a565b60008093509350505061116a565b600061161a8585610de8565b61163361162b86610435868b611271565b859085610dca565b61027391906122c2565b60006103cc8383670de0b6b3a7640000610e4e565b60006103c9846107ff670de0b6b3a764000061166e8188610e74565b61167891906122af565b8590611271565b60008082136116a15760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061172d9084901c611243565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b600080611231888888888888611f33565b6000680248ce36a70cb26b3e1982136118da57506000919050565b680755bf798b4a1bf1e58212611903576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061027374029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611243565b600080600083611a6386611243565b611a6d91906122ee565b90506000811215611a85576000809250925050611a8c565b9150600190505b9250929050565b60405163bb55fd2760e01b815260040160405180910390fd5b600061043b611abc868686611652565b6107ff8487611271565b6000818313611ad557826103cc565b50919050565b600080611ae88582611ac6565b611af190612361565b90506000611b5e8760c00151671bc16d674ec80000896101000151611b278b60c001518c60800151610e7490919063ffffffff16565b60c08c0151611b37908890610e74565b8c51611b4391906122c2565b611b4d91906122af565b611b5791906122af565b9190610dca565b905061028d611b83670de0b6b3a7640000611b798189610e74565b61156091906122af565b670de0b6b3a7640000611bae611b9989836122af565b6101208c01516101608d01516107ff91611271565b611bc0670de0b6b3a764000089610e74565b611bca91906122c2565b611bd491906122af565b61158091906122af565b6000806000611bfa8760c0015187610e7490919063ffffffff16565b90506000611c16611c0b83886122c2565b60e08a015190611271565b90506000611c4a878a604001518b60a00151670de0b6b3a7640000611c3b91906122af565b8c60c001518d60e0015161160e565b9050611c66610ba28a60a0015184610de890919063ffffffff16565b94506000611c95611c848b60a0015185610de890919063ffffffff16565b60e08c015160c08d01519190610dca565b905080821015611caf57600080955095505050505061116a565b611ce5611068611cdb8c60a00151670de0b6b3a7640000611cd091906122af565b60a08e015190611286565b61043584866122af565b9550611d13670de0b6b3a7640000611cfd818a610e74565b611d0791906122af565b6101208c015190611271565b611d1d90876122af565b9a60019a5098505050505050505050565b6000611d3a8585610de8565b611633611d4b86610435868b61163d565b859085610e4e565b6000806000611d658989888888611d2e565b9050611d7586610435898b6122c2565b975087811015611d8c576000809250925050611e0b565b878103611d9a818688610e4e565b9050670de0b6b3a76400008110611dc757611dc06107cb670de0b6b3a764000089611286565b9050611ddf565b611ddc6107cb670de0b6b3a764000089610e74565b90505b611de98186611286565b9050808a1015611e0157600080935093505050611e0b565b8903925060019150505b965096945050505050565b6000818313611e2557816103cc565b5090919050565b600061043b611e3c868686611e43565b8390611271565b60006103c9846107ff61167886670de0b6b3a76400006122af565b600080611e828386604001518760a00151670de0b6b3a76400006112eb91906122af565b90506000611eaf610ba2611ea48860a00151888a6040015161043591906122c2565b60c08901519061163d565b90506000611f27611edc8860a00151670de0b6b3a7640000611ed191906122af565b60a08a015190611286565b610435611f0a8a60a00151670de0b6b3a7640000611efa91906122af565b8a8c6040015161043591906122c2565b611f1490876122af565b60c08b015160e08c01516107ff91610e74565b905061028d8282611271565b6000806000611f458989888888611d2e565b905086881015611f5c576000809250925050611e0b565b9686900396611f6b8887610de8565b975087811015611f82576000809250925050611e0b565b878103611f90818688610e4e565b9050670de0b6b3a76400008110611fbd57611fb66107cb670de0b6b3a764000089611286565b9050611fd5565b611fd26107cb670de0b6b3a764000089610e74565b90505b611fdf8186611286565b905089811015611ff757600080935093505050611e0b565b9890980398600198509650505050505050565b6000806000806080858703121561202057600080fd5b5050823594602084013594506040840135936060013592509050565b600080600080600060a0868803121561205457600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b604051610180810167ffffffffffffffff811182821017156120a957634e487b7160e01b600052604160045260246000fd5b60405290565b600061018082840312156120c257600080fd5b6120ca612077565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016080830135818301525092915050565b60008060006101c0848603121561216257600080fd5b61216c85856120af565b9561018085013595506101a0909401359392505050565b60008060008060008060c0878903121561219c57600080fd5b505084359660208601359650604086013595606081013595506080810135945060a0013592509050565b600080600080600080600060e0888a0312156121e157600080fd5b873596506020880135955060408801359450606088013593506080880135925060a0880135915060c0880135801515811461221b57600080fd5b8091505092959891949750929550565b600080600080600080600060e0888a03121561224657600080fd5b505085359760208701359750604087013596606081013596506080810135955060a0810135945060c0013592509050565b6000806040838503121561228a57600080fd5b50508035926020909101359150565b634e487b7160e01b600052601160045260246000fd5b818103818111156103f5576103f5612299565b808201808211156103f5576103f5612299565b6000600182016122e7576122e7612299565b5060010190565b8181036000831280158383131683831282161715610ea857610ea8612299565b80820281158282048414176103f5576103f5612299565b60008261234257634e487b7160e01b600052601260045260246000fd5b600160ff1b82146000198414161561235c5761235c612299565b500590565b6000600160ff1b820161237657612376612299565b506000039056fea2646970667358221220afdbfbfa079fb19dc9018eebbf7894ac1bd66b1267bb3369529f7aca65e1433c64736f6c63430008140033";
        readonly sourceMap: "208:8071:137:-:0;;;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063902b10991161008c578063a280a28211610066578063a280a28214610218578063dbab85121461022b578063e7acd3ad1461023e578063f87845f21461025157600080fd5b8063902b1099146101c457806394169d49146101d75780639e489b991461020557600080fd5b80635e6d9d36116100c85780635e6d9d36146101505780636ceebe1d146101635780637ef99f871461017657806382a4d306146101b157600080fd5b80632471caed146100ef5780632810a036146101155780633f77b61714610128575b600080fd5b6101026100fd36600461200a565b610264565b6040519081526020015b60405180910390f35b61010261012336600461203c565b61027d565b61013b61013636600461214c565b610298565b6040805192835260208301919091520161010c565b61010261015e366004612183565b6102b9565b610102610171366004612183565b6102d6565b6101896101843660046121c6565b6102e7565b604080519586526020860194909452928401919091526060830152608082015260a00161010c565b6101026101bf36600461203c565b61036b565b6101026101d2366004612183565b61037b565b6101ea6101e536600461222b565b61038c565b6040805193845260208401929092529082015260600161010c565b61010261021336600461214c565b6103bc565b61013b61022636600461214c565b6103d3565b610102610239366004612277565b6103e4565b61010261024c366004612183565b6103fb565b6101ea61025f36600461222b565b61040c565b60008061027386868686610424565b9695505050505050565b60008061028d8787878787610444565b979650505050505050565b6000806000806102a987878761047f565b909450925050505b935093915050565b6000806102ca888888888888610693565b98975050505050505050565b6000806102ca8888888888886106b4565b60008060008060006103216040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b6103308d8d8d8d8d8d8d6106d5565b608086018190526060860182905260408601839052602086018490529484905292985090965094509250905097509750975097509792505050565b60008061028d8787878787610774565b6000806102ca888888888888610805565b6000806000806000806103a48d8d8d8d8d8d8d61084f565b919750955093505050505b9750975097945050505050565b60006103c98484846108be565b90505b9392505050565b6000806000806102a9878787610a70565b6000806103f18484610cc0565b9150505b92915050565b6000806102ca888888888888610d57565b6000806000806000806103a48d8d8d8d8d8d8d610d76565b600061043b82610435858888610dca565b90610de8565b95945050505050565b60008061045387878786610424565b905061028d61046782866301e13380610e4e565b61047983670de0b6b3a76400006122af565b90610e74565b600080600061049686600001518760200151610e89565b905060006104b28288604001518960e001518a60a00151610424565b90506000806104c2898585610a70565b909250905060006104d68a8a858588610eaf565b91505080156104ed575090945092506102b1915050565b506104fa89838a86610fe7565b955061050889878686611087565b945060008061051a8b8b8a8a89610eaf565b915091508061058a5760405162461bcd60e51b815260206004820152603160248201527f496e697469616c20677565737320696e206063616c63756c6174654d61784c6f6044820152703733b01034b99034b739b7b63b32b73a1760791b60648201526084015b60405180910390fd5b60005b89811015610684578489106106005760405162461bcd60e51b815260206004820152603360248201527f52656163686564206162736f6c757465206d617820626f6e6420616d6f756e746044820152721034b7103033b2ba2fb6b0bc2fb637b733b01760691b6064820152608401610581565b600061060e8d8b8a8a6110da565b935090508261061d5750610684565b60006106298583610e74565b610633908c6122c2565b905060006106438f838c8c611087565b90506106528f8f84848d610eaf565b9096509450841561066857819b50809a50610670565b505050610684565b5050508061067d906122d5565b905061058d565b50505050505050935093915050565b600061028d8787876106ad88670de0b6b3a76400006122af565b8787611173565b600061028d8787876106ce88670de0b6b3a76400006122af565b8787611220565b600080600080600080888810156107445786156106fa576106f78d898b610dca565b9c505b6107058c898b610dca565b9b506107108b611243565b6107198d611243565b61072391906122ee565b90506107308b898b610dca565b9a5061073d8a898b610dca565b9950610763565b61074d8b611243565b6107568d611243565b61076091906122ee565b90505b9b9c9a9b999a975050505050505050565b600080610785846301e13380610e74565b905060006107938683611271565b6107a590670de0b6b3a76400006122c2565b9050670de0b6b3a764000081106107d9576107d26107cb670de0b6b3a764000086610e74565b8290610de8565b90506107f1565b6107ee6107cb670de0b6b3a764000086611286565b90505b6102ca816107ff898b611271565b90611271565b60008061081d846108178a888a610e4e565b90611286565b905061082a888486610e4e565b61083490826122c2565b9050868111156108445786810391505b509695505050505050565b6000808061087061086888670de0b6b3a76400006122af565b899087610dca565b905086156103af576108828888611271565b91506108a38a8a8461089c8a670de0b6b3a76400006122af565b8989611220565b92506108af83826122c2565b90509750975097945050505050565b6040805160608101825260008082526020820181905291810182905260006108ee86600001518760200151610e89565b9050600061090a8288604001518960e001518a60a00151610424565b90506000610918888461129b565b9050610927888285858b6113bb565b15801560408701529085526109415793506103cc92505050565b600061094e89848a6114b1565b905061095d898286868c6113bb565b1515604087018190529086526109cf5760405162461bcd60e51b815260206004820152603160248201527f496e697469616c20677565737320696e206063616c63756c6174654d617853686044820152701bdc9d18081a5cc81a5b9cdbdb1d995b9d607a1b6064820152608401610581565b60005b87811015610a63576109e68a838688611587565b15801560408901526020880191909152610a635760208601518651600091610a0e9190610e74565b610a1890846122c2565b905083811115610a285750610a63565b610a358b8288888e6113bb565b15801560408a0152908852610a4c57809250610a52565b50610a63565b50610a5c816122d5565b90506109d2565b5098975050505050505050565b600080600080610aa68688604001518960a00151670de0b6b3a7640000610a9791906122af565b8a60c001518b60e0015161160e565b9050610af6876101400151670de0b6b3a7640000610ac491906122af565b610af0670de0b6b3a7640000610ada818a611286565b610ae491906122af565b6101208b01519061163d565b9061163d565b9150610b26876101400151670de0b6b3a7640000610b1491906122af565b61081784670de0b6b3a76400006122c2565b60a0880151909250610b4f90610b489061047981670de0b6b3a76400006122af565b8390610de8565b9150610b6c8760e001518860c0015161128690919063ffffffff16565b610b7690836122c2565b9150610b828183610e74565b9150610bb1610b488860a00151670de0b6b3a7640000610ba291906122af565b670de0b6b3a764000090610e74565b9150506000610bcd8760e0015183610e7490919063ffffffff16565b9050600080610c1a896101400151670de0b6b3a7640000610bee91906122af565b6107ff670de0b6b3a7640000610c04818c610e74565b610c0e91906122af565b6101208d015190611271565b9050610c70846107ff610c428c60a00151670de0b6b3a764000061128690919063ffffffff16565b6104358d6101400151670de0b6b3a7640000610c5e91906122af565b61047987670de0b6b3a76400006122c2565b915050610c878860c0015188846107ff91906122af565b9450610c9985878a6101200151611652565b818960400151610ca991906122af565b610cb391906122af565b9350505050935093915050565b600080610cf1610ce2610cd486606461230e565b66a5bbed86c5a00090611271565b6748cd4072281e000090610e74565b9050610d05670de0b6b3a764000082610e74565b90506103f1816107ff610d30610d2b610d2689670de0b6b3a76400006122c2565b611243565b61167f565b610479610d2b610d458a8a6301e13380610dca565b610d2690670de0b6b3a76400006122c2565b600080610d69846104798a888a610dca565b905061082a888486610dca565b60008080610d97610d8f88670de0b6b3a76400006122af565b899087610e4e565b905086156103af57610da9888861163d565b91506108a38a8a84610dc38a670de0b6b3a76400006122af565b89896118ae565b6000826000190484118302158202610de157600080fd5b5091020490565b600081600003610e015750670de0b6b3a76400006103f5565b82600003610e11575060006103f5565b6000610e1c83611243565b90506000610e2c610d2b86611243565b9050818102610e43670de0b6b3a764000082612325565b9050610273816118bf565b6000826000190484118302158202610e6557600080fd5b50910281810615159190040190565b60006103cc83670de0b6b3a764000084610dca565b600080610e968484611a54565b909250905080610ea857610ea8611a93565b5092915050565b6000806000610eca86858a61012001518b6101600151611aac565b90506000610ee58960c0015183610e7490919063ffffffff16565b60c08a0151610ef5908990610e74565b8a51610f0191906122c2565b610f0b91906122af565b90506000868a60800151610f1f91906122c2565b90506000610f2d8a82611ac6565b610f3690612361565b90508a6101000151610f558c60c0015184610e7490919063ffffffff16565b610f5f91906122c2565b60c08c0151610f6f908390610e74565b610f7990856122c2565b10610fd1576101008b015160c08c0151610f94908490610e74565b60c08d0151610fa4908490610e74565b610fae90866122c2565b610fb891906122af565b610fc291906122af565b60019550955050505050610fdd565b60008095509550505050505b9550959350505050565b600080610ff686858586611adb565b9050600061103d670b1a2bc2ec5000006107ff6110338a60a00151670de0b6b3a764000061102491906122af565b670de0b6b3a764000090611286565b610435868b610e74565b90506000611053670de0b6b3a764000083611271565b61106f61106884670de0b6b3a76400006122af565b8790611271565b61107991906122c2565b90506102ca88878784611adb565b6000806110be8487604001516110aa8960c0015189610e7490919063ffffffff16565b8960a001518a60c001518b60e00151610693565b90506110d08584886101200151611652565b61027390826122af565b6000806110e986868686611bde565b9092509050806110fc576000915061116a565b61112661111184670de0b6b3a76400006122af565b6101208801516101608901516107ff91611271565b61113090836122c2565b9150611144670de0b6b3a7640000836122af565b9150611167670de0b6b3a76400008760c0015184610dca9092919063ffffffff16565b91505b94509492505050565b6000806111838888878787611d2e565b905061119d85610435611196898c6122c2565b8690611271565b97506111aa848985610dca565b9750878110156111bc576111bc611a93565b878103670de0b6b3a764000081106111ea576111e36107cb670de0b6b3a764000088611286565b9050611202565b6111ff6107cb670de0b6b3a764000088610e74565b90505b8088101561121257611212611a93565b909603979650505050505050565b600080611231888888888888611d53565b90925090508061084457610844611a93565b60006001600160ff1b0382111561126d5760405163396ea70160e11b815260040160405180910390fd5b5090565b60006103cc8383670de0b6b3a7640000610dca565b60006103cc83670de0b6b3a764000084610e4e565b6000806112b660008560200151611e1690919063ffffffff16565b8461010001516112c691906122c2565b905060006112fa8486604001518760a00151670de0b6b3a76400006112eb91906122af565b8860c001518960e0015161160e565b9050600061134b6113388760a00151670de0b6b3a764000061131c91906122af565b61043561132d878b60200151610e89565b60e08b01519061163d565b60e088015160c0890151610af091611286565b61135590836122af565b9050670de0b6b3a7640000811061138b576113846107cb8760a00151670de0b6b3a7640000610ba291906122af565b90506113ac565b6113a96107cb8760a00151670de0b6b3a764000061102491906122af565b90505b604086015161027390826122af565b6000806000806113f2878a604001518a8c60a00151670de0b6b3a76400006113e391906122af565b8d60c001518e60e00151611d53565b915091508061140957600080935093505050610fdd565b60006114438a60c001516114298b8a8e61012001518f6101600151611e2c565b6114398c8b8f6101200151611e43565b61047991906122af565b61144d90846122af565b8a5161145991906122af565b905060006114888b60c0015161147960008a611e1690919063ffffffff16565b8d6080015161047991906122af565b90508a61010001518161149b91906122c2565b8210610fd1576101008b0151610fb882846122af565b600080839050600061151c8661010001516114dd8860c001518960800151610e7490919063ffffffff16565b60c08901516114f190610479896000611e16565b89516114fd91906122c2565b61150791906122af565b61151191906122af565b60c088015190611271565b905061027361154b61153687670de0b6b3a76400006122af565b6101208901516101608a01516107ff91611271565b61156c61156088670de0b6b3a76400006122af565b6101208a015190611271565b61157690856122af565b61158091906122c2565b8290610e74565b6000806000611597878786611e5e565b905060006115e08860c001516104798a6101600151670de0b6b3a76400006115bf91906122af565b6107ff6115d48b670de0b6b3a76400006122af565b6101208e015190611271565b9050808210611600576115f381836122af565b600193509350505061116a565b60008093509350505061116a565b600061161a8585610de8565b61163361162b86610435868b611271565b859085610dca565b61027391906122c2565b60006103cc8383670de0b6b3a7640000610e4e565b60006103c9846107ff670de0b6b3a764000061166e8188610e74565b61167891906122af565b8590611271565b60008082136116a15760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061172d9084901c611243565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b600080611231888888888888611f33565b6000680248ce36a70cb26b3e1982136118da57506000919050565b680755bf798b4a1bf1e58212611903576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061027374029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611243565b600080600083611a6386611243565b611a6d91906122ee565b90506000811215611a85576000809250925050611a8c565b9150600190505b9250929050565b60405163bb55fd2760e01b815260040160405180910390fd5b600061043b611abc868686611652565b6107ff8487611271565b6000818313611ad557826103cc565b50919050565b600080611ae88582611ac6565b611af190612361565b90506000611b5e8760c00151671bc16d674ec80000896101000151611b278b60c001518c60800151610e7490919063ffffffff16565b60c08c0151611b37908890610e74565b8c51611b4391906122c2565b611b4d91906122af565b611b5791906122af565b9190610dca565b905061028d611b83670de0b6b3a7640000611b798189610e74565b61156091906122af565b670de0b6b3a7640000611bae611b9989836122af565b6101208c01516101608d01516107ff91611271565b611bc0670de0b6b3a764000089610e74565b611bca91906122c2565b611bd491906122af565b61158091906122af565b6000806000611bfa8760c0015187610e7490919063ffffffff16565b90506000611c16611c0b83886122c2565b60e08a015190611271565b90506000611c4a878a604001518b60a00151670de0b6b3a7640000611c3b91906122af565b8c60c001518d60e0015161160e565b9050611c66610ba28a60a0015184610de890919063ffffffff16565b94506000611c95611c848b60a0015185610de890919063ffffffff16565b60e08c015160c08d01519190610dca565b905080821015611caf57600080955095505050505061116a565b611ce5611068611cdb8c60a00151670de0b6b3a7640000611cd091906122af565b60a08e015190611286565b61043584866122af565b9550611d13670de0b6b3a7640000611cfd818a610e74565b611d0791906122af565b6101208c015190611271565b611d1d90876122af565b9a60019a5098505050505050505050565b6000611d3a8585610de8565b611633611d4b86610435868b61163d565b859085610e4e565b6000806000611d658989888888611d2e565b9050611d7586610435898b6122c2565b975087811015611d8c576000809250925050611e0b565b878103611d9a818688610e4e565b9050670de0b6b3a76400008110611dc757611dc06107cb670de0b6b3a764000089611286565b9050611ddf565b611ddc6107cb670de0b6b3a764000089610e74565b90505b611de98186611286565b9050808a1015611e0157600080935093505050611e0b565b8903925060019150505b965096945050505050565b6000818313611e2557816103cc565b5090919050565b600061043b611e3c868686611e43565b8390611271565b60006103c9846107ff61167886670de0b6b3a76400006122af565b600080611e828386604001518760a00151670de0b6b3a76400006112eb91906122af565b90506000611eaf610ba2611ea48860a00151888a6040015161043591906122c2565b60c08901519061163d565b90506000611f27611edc8860a00151670de0b6b3a7640000611ed191906122af565b60a08a015190611286565b610435611f0a8a60a00151670de0b6b3a7640000611efa91906122af565b8a8c6040015161043591906122c2565b611f1490876122af565b60c08b015160e08c01516107ff91610e74565b905061028d8282611271565b6000806000611f458989888888611d2e565b905086881015611f5c576000809250925050611e0b565b9686900396611f6b8887610de8565b975087811015611f82576000809250925050611e0b565b878103611f90818688610e4e565b9050670de0b6b3a76400008110611fbd57611fb66107cb670de0b6b3a764000089611286565b9050611fd5565b611fd26107cb670de0b6b3a764000089610e74565b90505b611fdf8186611286565b905089811015611ff757600080935093505050611e0b565b9890980398600198509650505050505050565b6000806000806080858703121561202057600080fd5b5050823594602084013594506040840135936060013592509050565b600080600080600060a0868803121561205457600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b604051610180810167ffffffffffffffff811182821017156120a957634e487b7160e01b600052604160045260246000fd5b60405290565b600061018082840312156120c257600080fd5b6120ca612077565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016080830135818301525092915050565b60008060006101c0848603121561216257600080fd5b61216c85856120af565b9561018085013595506101a0909401359392505050565b60008060008060008060c0878903121561219c57600080fd5b505084359660208601359650604086013595606081013595506080810135945060a0013592509050565b600080600080600080600060e0888a0312156121e157600080fd5b873596506020880135955060408801359450606088013593506080880135925060a0880135915060c0880135801515811461221b57600080fd5b8091505092959891949750929550565b600080600080600080600060e0888a03121561224657600080fd5b505085359760208701359750604087013596606081013596506080810135955060a0810135945060c0013592509050565b6000806040838503121561228a57600080fd5b50508035926020909101359150565b634e487b7160e01b600052601160045260246000fd5b818103818111156103f5576103f5612299565b808201808211156103f5576103f5612299565b6000600182016122e7576122e7612299565b5060010190565b8181036000831280158383131683831282161715610ea857610ea8612299565b80820281158282048414176103f5576103f5612299565b60008261234257634e487b7160e01b600052601260045260246000fd5b600160ff1b82146000198414161561235c5761235c612299565b500590565b6000600160ff1b820161237657612376612299565b506000039056fea2646970667358221220afdbfbfa079fb19dc9018eebbf7894ac1bd66b1267bb3369529f7aca65e1433c64736f6c63430008140033";
        readonly sourceMap: "208:8071:137:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6751:418;;;;;;:::i;:::-;;:::i;:::-;;;550:25:234;;;538:2;523:18;6751:418:137;;;;;;;;242:498;;;;;;:::i;:::-;;:::i;5504:409::-;;;;;;:::i;:::-;;:::i;:::-;;;;2994:25:234;;;3050:2;3035:18;;3028:34;;;;2967:18;5504:409:137;2820:248:234;1256:548:137;;;;;;:::i;:::-;;:::i;2567:550::-;;;;;;:::i;:::-;;:::i;4107:1113::-;;;;;;:::i;:::-;;:::i;:::-;;;;4548:25:234;;;4604:2;4589:18;;4582:34;;;;4632:18;;;4625:34;;;;4690:2;4675:18;;4668:34;4733:3;4718:19;;4711:35;4535:3;4520:19;4107:1113:137;4291:461:234;746:504:137;;;;;;:::i;:::-;;:::i;7175:546::-;;;;;;:::i;:::-;;:::i;1810:751::-;;;;;;:::i;:::-;;:::i;:::-;;;;5556:25:234;;;5612:2;5597:18;;5590:34;;;;5640:18;;;5633:34;5544:2;5529:18;1810:751:137;5354:319:234;6380:365:137;;;;;;:::i;:::-;;:::i;5919:455::-;;;;;;:::i;:::-;;:::i;5226:272::-;;;;;;:::i;:::-;;:::i;7727:550::-;;;;;;:::i;:::-;;:::i;3123:755::-;;;;;;:::i;:::-;;:::i;6751:418::-;6942:7;6961:14;6978:161;7025:14;7053:13;7080:23;7117:12;6978:33;:161::i;:::-;6961:178;6751:418;-1:-1:-1;;;;;;6751:418:137:o;242:498::-;475:7;494:14;511:199;556:23;593:13;620:23;657:17;688:12;511:31;:199::i;:::-;494:216;242:498;-1:-1:-1;;;;;;;242:498:137:o;5504:409::-;5682:7;5691;5711:15;5728;5747:124;5793:7;5814:19;5847:14;5747:32;:124::i;:::-;5710:161;;-1:-1:-1;5710:161:137;-1:-1:-1;;;5504:409:137;;;;;;;:::o;1256:548::-;1516:7;1535:14;1552:222;1598:23;1635:13;1662:9;1685:12;1711:16;1741:23;1552:32;:222::i;:::-;1535:239;1256:548;-1:-1:-1;;;;;;;;1256:548:137:o;2567:550::-;2828:7;2847:14;2864:223;2911:23;2948:13;2975:9;2998:12;3024:16;3054:23;2864:33;:223::i;4107:1113::-;4417:7;4426;4435;4444:6;4452:7;4471:43;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4471:43:137;4726:271;4787:14;4815:19;4848:16;4878:19;4911:20;4945:21;4980:7;4726:47;:271::i;:::-;4688:25;;;4524:473;;;4647:27;;;4524:473;;;4611:22;;;4524:473;;;4572:25;;;4524:473;;;;;;;;;-1:-1:-1;4524:473:137;;-1:-1:-1;4524:473:137;-1:-1:-1;4524:473:137;-1:-1:-1;4524:473:137;-1:-1:-1;4107:1113:137;;;;;;;;;;;;;:::o;746:504::-;982:7;1001:14;1018:202;1075:23;1112;1149:4;1167:17;1198:12;1018:43;:202::i;7175:546::-;7434:7;7453:14;7470:221;7523:11;7548:12;7574:20;7608:21;7643:16;7673:8;7470:39;:221::i;1810:751::-;2113:7;2122;2131;2151:15;2168;2185;2204:306;2268:23;2309:13;2340:9;2367:24;2409:12;2439:16;2473:23;2204:46;:306::i;:::-;2150:360;;-1:-1:-1;2150:360:137;-1:-1:-1;2150:360:137;-1:-1:-1;;;;1810:751:137;;;;;;;;;;;;:::o;6380:365::-;6559:7;6597:141;6648:7;6673:19;6710:14;6597:33;:141::i;:::-;6578:160;;6380:365;;;;;;:::o;5919:455::-;6106:7;6115;6135:15;6152;6171:161;6242:7;6267:23;6308:10;6171:53;:161::i;5226:272::-;5340:7;5359:14;5376:92;5425:3;5442:16;5376:35;:92::i;:::-;5359:109;-1:-1:-1;;5226:272:137;;;;;:::o;7727:550::-;7988:7;8007:14;8024:223;8079:11;8104:12;8130:20;8164:21;8199:16;8229:8;8024:41;:223::i;3123:755::-;3428:7;3437;3446;3466:15;3483;3500;3519:308;3584:23;3625:13;3656:10;3684:24;3726:12;3756:16;3790:23;3519:47;:308::i;3330:531:123:-;3530:17;3736:118;3841:12;3736:87;:23;3784;3809:13;3736:47;:87::i;:::-;:104;;:118::i;:::-;3724:130;3330:531;-1:-1:-1;;;;;3330:531:123:o;4497:945::-;4730:11;5059:17;5079:155;5111:23;5148:13;5175:23;5212:12;5079:18;:155::i;:::-;5059:175;-1:-1:-1;5263:172:123;5374:47;5059:175;5393:17;5412:8;5374:18;:47::i;:::-;5264:15;5270:9;193:4:122;5264:15:123;:::i;:::-;5263:25;;:172::i;10963:5032:231:-;11125:21;11148;11322:30;11355:153;11432:7;:21;;;11471:7;:23;;;11355:59;:153::i;:::-;11322:186;;11518:17;11538:190;11585:22;11621:7;:20;;;11655:7;:30;;;11699:7;:19;;;11538:33;:190::i;:::-;11518:210;;11738:29;11777;11925:130;11967:7;11992:22;12032:9;11925:24;:130::i;:::-;11830:225;;-1:-1:-1;11830:225:231;-1:-1:-1;12072:15:231;12091:207;12135:7;12160:19;11830:225;;12275:9;12091:26;:207::i;:::-;12069:229;;;12316:10;12312:102;;;-1:-1:-1;12354:21:231;;-1:-1:-1;12377:21:231;-1:-1:-1;12346:53:231;;-1:-1:-1;;12346:53:231;12312:102;11816:608;13319:143;13354:7;13375:21;13410:19;13443:9;13319:21;:143::i;:::-;13303:159;;13488:136;13521:7;13542:13;13569:22;13605:9;13488:19;:136::i;:::-;13472:152;;13635:17;13654:12;13670:167;13710:7;13731:19;13764:13;13791;13818:9;13670:26;:167::i;:::-;13634:203;;;;13855:7;13847:69;;;;-1:-1:-1;;;13847:69:231;;6785:2:234;13847:69:231;;;6767:21:234;6824:2;6804:18;;;6797:30;6863:34;6843:18;;;6836:62;-1:-1:-1;;;6914:18:234;;;6907:47;6971:19;;13847:69:231;;;;;;;;;13931:9;13926:2015;13950:14;13946:1;:18;13926:2015;;;14211:21;14195:13;:37;14170:147;;;;-1:-1:-1;;;14170:147:231;;7203:2:234;14170:147:231;;;7185:21:234;7242:2;7222:18;;;7215:30;7281:34;7261:18;;;7254:62;-1:-1:-1;;;7332:18:234;;;7325:49;7391:19;;14170:147:231;7001:415:234;14170:147:231;14880:18;14936:173;14990:7;15015:13;15046:22;15086:9;14936:36;:173::i;:::-;14912:197;-1:-1:-1;14912:197:231;-1:-1:-1;14912:197:231;15123:52;;15155:5;;;15123:52;15188:29;15252;:9;15270:10;15252:17;:29::i;:::-;15220:61;;:13;:61;:::i;:::-;15188:93;;15295:29;15327:164;15364:7;15389:21;15428:22;15468:9;15327:19;:164::i;:::-;15295:196;;15528:207;15572:7;15597:19;15634:21;15673;15712:9;15528:26;:207::i;:::-;15505:230;;-1:-1:-1;15505:230:231;-1:-1:-1;15749:182:231;;;;15796:21;15780:37;;15851:21;15835:37;;15749:182;;;15911:5;;;;;15749:182;13971:1970;;;13966:3;;;;:::i;:::-;;;13926:2015;;;;15951:37;;;;;;10963:5032;;;;;;:::o;19106:892:123:-;19369:7;19506:485;19573:23;19614:13;19645:12;19884:18;19890:12;193:4:122;19884:18:123;:::i;:::-;19920:16;19954:23;19506:49;:485::i;23799:866::-;24060:7;24176:482;24243:23;24284:13;24315:9;24551:18;24557:12;193:4:122;24551:18:123;:::i;:::-;24587:16;24621:23;24176:49;:482::i;29841:2953::-;30151:7;30160;30169;30178:6;30186:7;31120:27;31185:20;31161:21;:44;31157:1445;;;31490:7;31486:191;;;31534:128;:14;31581:21;31624:20;31534:25;:128::i;:::-;31517:145;;31486:191;31832:121;:19;31880:21;31919:20;31832:30;:121::i;:::-;31810:143;;32110:27;:16;:25;:27::i;:::-;32061:30;:19;:28;:30::i;:::-;:76;;;;:::i;:::-;32022:115;-1:-1:-1;32170:118:123;:16;32215:21;32254:20;32170:27;:118::i;:::-;32151:137;-1:-1:-1;32324:121:123;:19;32372:21;32411:20;32324:30;:121::i;:::-;32302:143;;31157:1445;;;32564:27;:16;:25;:27::i;:::-;32515:30;:19;:28;:30::i;:::-;:76;;;;:::i;:::-;32476:115;;31157:1445;32633:14;;32661:19;;32694:16;;29841:2953;-1:-1:-1;;;;;;;;29841:2953:123:o;8615:1272::-;8851:20;;9089:35;:17;9115:8;9089:25;:35::i;:::-;9077:47;-1:-1:-1;9264:13:123;9286:15;:4;9077:47;9286:12;:15::i;:::-;9280:21;;193:4:122;9280:21:123;:::i;:::-;9264:37;;193:4:122;9315:5:123;:12;9311:300;;9422:36;9432:25;193:4:122;9444:12:123;9432:11;:25::i;:::-;9422:5;;:9;:36::i;:::-;9414:44;;9311:300;;;9566:34;9576:23;193:4:122;9586:12:123;9576:9;:23::i;9566:34::-;9558:42;;9311:300;9779:101;9861:5;9779:56;:23;9811;9779:31;:56::i;:::-;:64;;:101::i;11376:1660::-;11635:21;;12098:115;12196:16;12098:78;:11;12132:21;12155:20;12098:33;:78::i;:::-;:97;;:115::i;:::-;12077:136;-1:-1:-1;12461:48:123;:11;12482:8;12492:16;12461:20;:48::i;:::-;12447:62;;;;:::i;:::-;;;12825:12;12812:10;:25;12808:191;;;12962:12;12949:10;:25;12933:41;;12808:191;13009:20;11376:1660;;;;;;;;:::o;20979:2126::-;21319:23;;;22019:104;22053:30;22059:24;193:4:122;22053:30:123;:::i;:::-;22019:9;;22097:16;22019:20;:104::i;:::-;22003:120;-1:-1:-1;22137:28:123;;22133:966;;22373:43;:9;22391:24;22373:17;:43::i;:::-;22356:60;-1:-1:-1;22555:487:123;22622:23;22663:13;22356:60;22935:18;22941:12;193:4:122;22935:18:123;:::i;:::-;22971:16;23005:23;22555:49;:487::i;:::-;22537:505;-1:-1:-1;23056:32:123;22537:505;23056:32;;:::i;:::-;;;20979:2126;;;;;;;;;;;:::o;37638:4492:231:-;-1:-1:-1;;;;;;;;37801:7:231;-1:-1:-1;;;;;;;;;;;;;;;38120:30:231;38153:153;38230:7;:21;;;38269:7;:23;;;38153:59;:153::i;:::-;38120:186;;38316:17;38336:190;38383:22;38419:7;:20;;;38453:7;:30;;;38497:7;:19;;;38336:33;:190::i;:::-;38316:210;;38536:29;38568:94;38609:7;38630:22;38568:27;:94::i;:::-;38536:126;;38714:185;38755:7;38776:21;38811:22;38847:9;38870:19;38714:27;:185::i;:::-;38672:227;;;38693:17;;;38672:227;;;;38909:76;;38953:21;-1:-1:-1;38946:28:231;;-1:-1:-1;;;38946:28:231;38909:76;39879:21;39903:109;39939:7;39960:9;39983:19;39903:22;:109::i;:::-;39879:133;;40064:177;40105:7;40126:13;40153:22;40189:9;40212:19;40064:27;:177::i;:::-;40022:219;;40043:17;;;40022:219;;;;;;40251:113;;;;-1:-1:-1;;;40251:113:231;;8098:2:234;40251:113:231;;;8080:21:234;8137:2;8117:18;;;8110:30;8176:34;8156:18;;;8149:62;-1:-1:-1;;;8227:18:234;;;8220:47;8284:19;;40251:113:231;7896:413:234;40251:113:231;40379:9;40374:1719;40398:14;40394:1;:18;40374:1719;;;40994:174;41049:7;41074:13;41105:9;41132:22;40994:37;:174::i;:::-;40904:264;;;40960:17;;;40904:264;40922:20;;;40904:264;;;;41224:5;41182:62;41348:20;;;;41321:18;;41257:29;;41321:48;;:18;:26;:48::i;:::-;41289:80;;:13;:80;:::i;:::-;41257:112;;41411:21;41387;:45;41383:89;;;41452:5;;;41383:89;41723:209;41768:7;41793:21;41832:22;41872:9;41899:19;41723:27;:209::i;:::-;41635:297;;;41689:17;;;41635:297;;;;41946:137;;42003:21;41987:37;;41946:137;;;42063:5;;;41946:137;-1:-1:-1;40414:3:231;;;:::i;:::-;;;40374:1719;;;-1:-1:-1;42110:13:231;37638:4492;-1:-1:-1;;;;;;;;37638:4492:231:o;16597:3723::-;16792:29;16823;18018:13;18055:10;18068:245;18106:23;18147:7;:20;;;18191:7;:19;;;193:4:122;18185:25:231;;;;:::i;:::-;18228:7;:23;;;18269:7;:30;;;18068:20;:245::i;:::-;18055:258;;18335:110;18416:7;:15;;;193:4:122;18410:21:231;;;;:::i;:::-;18335:51;193:4:122;18358:21:231;193:4:122;18368:10:231;18358:9;:21::i;:::-;:27;;;;:::i;:::-;18335:16;;;;;:22;:51::i;:::-;:57;;:110::i;:::-;18327:118;;18467:42;18493:7;:15;;;193:4:122;18487:21:231;;;;:::i;:::-;18468:11;18474:5;193:4:122;18468:11:231;:::i;18467:42::-;18594:19;;;;18459:50;;-1:-1:-1;18531:97:231;;18558:56;;18559:25;18594:19;193:4:122;18559:25:231;:::i;18558:56::-;18531:5;;:9;:97::i;:::-;18523:105;;18651:91;18698:7;:30;;;18651:7;:23;;;:29;;:91;;;;:::i;:::-;18642:100;;;;:::i;:::-;;-1:-1:-1;18764:17:231;:2;18642:100;18764:10;:17::i;:::-;18756:25;;18803:49;18813:38;18831:7;:19;;;193:4:122;18825:25:231;;;;:::i;:::-;193:4:122;;18813:11:231;:38::i;18803:49::-;18795:57;;18041:822;18872:27;18902:67;18929:7;:30;;;18902:5;:13;;:67;;;;:::i;:::-;18872:97;;19324:26;19374:21;19398:137;19519:7;:15;;;193:4:122;19513:21:231;;;;:::i;:::-;19398:89;193:4:122;19457:23:231;193:4:122;19469:10:231;19457:11;:23::i;:::-;:29;;;;:::i;:::-;19398:33;;;;;:58;:89::i;:137::-;19374:161;;19570:135;19699:5;19570:120;19659:30;19669:7;:19;;;193:4:122;19659:9:231;;:30;;;;:::i;:::-;19588:52;19624:7;:15;;;193:4:122;19618:21:231;;;;:::i;:::-;19589:19;19595:13;193:4:122;19589:19:231;:::i;19570:135::-;19549:156;;19360:356;19863:93;19932:7;:23;;;19886;19864:19;:45;;;;:::i;19863:93::-;19839:117;;20177:136;20216:21;20255:10;20283:7;:16;;;20177:21;:136::i;:::-;20143:18;20120:7;:20;;;:41;;;;:::i;:::-;20119:194;;;;:::i;:::-;20083:230;;16858:3462;;;16597:3723;;;;;;:::o;1405:1330:123:-;1521:7;;1684:90;1725:39;1753:10;:4;1760:3;1753:10;:::i;:::-;1733;;1725:27;:39::i;:::-;1692:10;;1684:27;:90::i;:::-;1662:112;-1:-1:-1;1798:24:123;193:4:122;1662:112:123;1798:11;:24::i;:::-;1784:38;-1:-1:-1;2463:265:123;1784:38;2481:212;2663:28;:23;2664:10;2670:4;193::122;2664:10:123;:::i;:::-;2663:21;:23::i;:::-;:26;:28::i;:::-;2510:118;:88;2517:44;:4;2533:17;2552:8;2517:15;:44::i;:::-;2511:50;;193:4:122;2511:50:123;:::i;14526:1674::-;14787:21;;15253:119;15355:16;15253:80;:11;15289:21;15312:20;15253:35;:80::i;:119::-;15232:140;-1:-1:-1;15623:50:123;:11;15646:8;15656:16;15623:22;:50::i;25623:2130::-;25965:23;;;26750:103;26783:30;26789:24;193:4:122;26783:30:123;:::i;:::-;26750:10;;26827:16;26750:19;:103::i;:::-;26735:118;-1:-1:-1;26867:28:123;;26863:884;;27029:42;:10;27046:24;27029:16;:42::i;:::-;27012:59;-1:-1:-1;27206:485:123;27271:23;27312:13;27012:59;27584:18;27590:12;193:4:122;27584:18:123;:::i;:::-;27620:16;27654:23;27206:47;:485::i;898:556:122:-;1014:9;1279:1;-1:-1:-1;;1262:19:122;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:122;;1411:27;;898:556::o;3811:844::-;3869:7;3935:1;3940;3935:6;3931:47;;-1:-1:-1;193:4:122;3957:10;;3931:47;4031:1;4036;4031:6;4027:45;;-1:-1:-1;4060:1:122;4053:8;;4027:45;4210:15;4228:12;:1;:10;:12::i;:::-;4210:30;;4402:10;4415:16;4418:12;:1;:10;:12::i;4415:16::-;4402:29;-1:-1:-1;4509:18:122;;;4546:19;193:4;4509:18;4546:19;:::i;:::-;;;4638:9;4642:4;4638:3;:9::i;2284:748::-;2398:9;2663:1;-1:-1:-1;;2646:19:122;2643:1;2640:26;2637:1;2633:34;2626:42;2613:11;2609:60;2582:146;;2712:1;2709;2702:12;2582:146;-1:-1:-1;2979:9:122;;2926:27;;;2923:34;;2975:27;;;2902:114;;2284:748::o;1884:164::-;1946:7;1973:21;1984:1;193:4;1992:1;1973:10;:21::i;6050:433:123:-;6185:30;6227:12;6285:103;6334:14;6362:16;6285:35;:103::i;:::-;6249:139;;-1:-1:-1;6249:139:123;-1:-1:-1;6249:139:123;6398:79;;6426:40;:38;:40::i;:::-;6217:266;6050:433;;;;:::o;27211:1307:231:-;27437:7;27446:4;27462:21;27486:152;27526:11;27551:10;27575:7;:16;;;27605:7;:23;;;27486:26;:152::i;:::-;27462:176;;27648:21;27767:46;27789:7;:23;;;27767:13;:21;;:46;;;;:::i;:::-;27728:23;;;;27708:44;;:11;;:19;:44::i;:::-;27672:21;;:80;;;;:::i;:::-;:141;;;;:::i;:::-;27648:165;;27823:16;27865:11;27842:7;:20;;;:34;;;;:::i;:::-;27823:53;-1:-1:-1;27886:26:231;27924;:19;27886:26;27924:23;:26::i;:::-;27923:27;;;:::i;:::-;27886:65;;28137:7;:28;;;28077:41;28094:7;:23;;;28077:8;:16;;:41;;;;:::i;:::-;:88;;;;:::i;:::-;28037:23;;;;28010:51;;:18;;:26;:51::i;:::-;27978:83;;:13;:83;:::i;:::-;:187;27961:551;;28389:28;;;;28342:23;;;;28325:41;;:8;;:16;:41::i;:::-;28278:23;;;;28251:51;;:18;;:26;:51::i;:::-;28215:87;;:13;:87;:::i;:::-;:151;;;;:::i;:::-;:202;;;;:::i;:::-;28435:4;28190:263;;;;;;;;;;27961:551;28492:1;28495:5;28484:17;;;;;;;;27211:1307;;;;;;;;;:::o;20970:1484::-;21173:7;21305:13;21321:136;21359:7;21380:19;21413:10;21437;21321:24;:136::i;:::-;21305:152;;21901:9;21913:134;22040:6;21913:105;21981:36;21997:7;:19;;;193:4:122;21991:25:231;;;;:::i;:::-;193:4:122;;21981:9:231;:36::i;:::-;21913:50;:5;21940:22;21913:26;:50::i;:134::-;21901:146;-1:-1:-1;22057:25:231;22127:14;193:4:122;21901:146:231;22127:11;:14::i;:::-;22085:27;22104:7;22110:1;193:4:122;22104:7:231;:::i;:::-;22085:10;;:18;:27::i;:::-;:56;;;;:::i;:::-;22057:84;;22281:143;22319:7;22340:19;22373:10;22397:17;22281:24;:143::i;31845:645::-;32040:7;32059:18;32080:285;32126:23;32163:7;:20;;;32197:44;32217:7;:23;;;32197:11;:19;;:44;;;;:::i;:::-;32255:7;:19;;;32288:7;:23;;;32325:7;:30;;;32080:32;:285::i;:::-;32059:306;;32419:64;32441:11;32454:10;32466:7;:16;;;32419:21;:64::i;:::-;32394:89;;:10;:89;:::i;29903:929::-;30115:18;30135:12;30338:146;30381:7;30402:11;30427:23;30464:10;30338:29;:146::i;:::-;30314:170;;-1:-1:-1;30314:170:231;-1:-1:-1;30314:170:231;30494:58;;30530:1;30522:19;;;;30494:58;30620:97;30691:16;30697:10;193:4:122;30691:16:231;:::i;:::-;30652;;;;30620:23;;;;:49;;:31;:49::i;:97::-;30606:111;;;;:::i;:::-;;-1:-1:-1;30727:17:231;193:4:122;30606:111:231;30727:17;:::i;:::-;;;30763:52;30785:4;30791:7;:23;;;30763:10;:21;;:52;;;;;:::i;:::-;30755:70;;29903:929;;;;;;;;:::o;2068:1548:126:-;2258:7;2415:9;2427:20;2431:2;2435:1;2438;2441;2444:2;2427:3;:20::i;:::-;2415:32;-1:-1:-1;2585:26:126;2609:1;2585:19;2596:7;2601:2;2596;:7;:::i;:::-;2585:2;;:10;:19::i;:26::-;2580:31;-1:-1:-1;2674:20:126;:1;2580:31;2691:2;2674:12;:20::i;:::-;2669:25;;2768:2;2764:1;:6;2760:77;;;2786:40;:38;:40::i;:::-;3046:6;;;193:4:122;3076:9:126;;3072:261;;3174:20;3181:12;193:4:122;3191:1:126;3181:9;:12::i;3174:20::-;3169:25;;3072:261;;;3300:22;3307:14;193:4:122;3319:1:126;3307:11;:14::i;3300:22::-;3295:27;;3072:261;3406:2;3402:1;:6;3398:77;;;3424:40;:38;:40::i;:::-;3593:6;;;;2068:1548;-1:-1:-1;;;;;;;2068:1548:126:o;9918:494::-;10108:14;10134:12;10176:141;10228:2;10244:1;10259:2;10275:1;10290;10305:2;10176:38;:141::i;:::-;10156:161;;-1:-1:-1;10156:161:126;-1:-1:-1;10156:161:126;10327:79;;10355:40;:38;:40::i;2004:200:125:-;2056:8;-1:-1:-1;;;;;2080:1:125;:29;2076:99;;;2132:32;;-1:-1:-1;;;2132:32:125;;;;;;;;;;;2076:99;-1:-1:-1;2195:1:125;2004:200::o;1610:118:122:-;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;3462:114::-;3522:7;3549:19;3558:1;193:4;3566:1;3549:8;:19::i;42555:2183:231:-;42701:7;42944:28;43026:30;43054:1;43026:7;:23;;;:27;;:30;;;;:::i;:::-;42975:7;:28;;;:82;;;;:::i;:::-;42944:113;;43461:10;43474:221;43508:23;43545:7;:20;;;43585:7;:19;;;193:4:122;43579:25:231;;;;:::i;:::-;43618:7;:23;;;43655:7;:30;;;43474:20;:221::i;:::-;43461:234;;43705:27;43752:452;43837:353;44170:7;:19;;;193:4:122;44164:25:231;;;;:::i;:::-;43837:301;43941:175;44017:20;44067:7;:23;;;43941:46;:175::i;:::-;43837:51;;;;;:78;:301::i;:353::-;43782:30;;;;43752:23;;;;:61;;:29;:61::i;:452::-;43735:469;;:2;:469;:::i;:::-;43705:499;;193:4:122;44218:19:231;:26;44214:458;;44354:93;44395:38;44413:7;:19;;;193:4:122;44407:25:231;;;;:::i;44354:93::-;44332:115;;44214:458;;;44570:91;44611:36;44627:7;:19;;;193:4:122;44621:25:231;;;;:::i;44570:91::-;44548:113;;44214:458;44711:20;;;;44689:42;;:19;:42;:::i;48824:1941::-;49064:7;49073:4;49326:19;49347:12;49363:321;49447:23;49488:7;:20;;;49526:12;49562:7;:19;;;193:4:122;49556:25:231;;;;:::i;:::-;49599:7;:23;;;49640:7;:30;;;49363:66;:321::i;:::-;49325:359;;;;49699:7;49694:56;;49730:1;49733:5;49722:17;;;;;;;;49694:56;49826:21;49917:416;50309:7;:23;;;50085:214;50138:12;50176:10;50212:7;:16;;;50254:7;:23;;;50085:27;:214::i;:::-;49918:144;49962:12;49996:10;50028:7;:16;;;49918:22;:144::i;:::-;:381;;;;:::i;49917:416::-;49887:446;;:11;:446;:::i;:::-;49850:21;;:484;;;;:::i;:::-;49826:508;;50344:16;50363:135;50461:7;:23;;;50407:26;50431:1;50407:19;:23;;:26;;;;:::i;:::-;50364:7;:20;;;:70;;;;:::i;50363:135::-;50344:154;;50540:7;:28;;;50529:8;:39;;;;:::i;:::-;50512:13;:56;50508:251;;50636:28;;;;50609:24;50625:8;50609:13;:24;:::i;46195:866::-;46359:7;46378:21;46402:10;46378:34;;46422:13;46438:320;46720:7;:28;;;46648:53;46677:7;:23;;;46648:7;:20;;;:28;;:53;;;;:::i;:::-;46588:23;;;;46523:106;;46531:26;:19;46555:1;46531:23;:26::i;46523:106::-;46483:21;;:146;;;;:::i;:::-;:218;;;;:::i;:::-;:265;;;;:::i;:::-;46438:23;;;;;:31;:320::i;:::-;46422:336;-1:-1:-1;46787:267:231;46919:121;47002:16;47008:10;193:4:122;47002:16:231;:::i;:::-;46951;;;;46919:23;;;;:49;;:31;:49::i;:121::-;46854:42;46879:16;46885:10;193:4:122;46879:16:231;:::i;:::-;46854;;;;;:24;:42::i;:::-;46818:78;;:13;:78;:::i;:::-;:222;;;;:::i;:::-;46787:5;;:13;:267::i;51649:699::-;51863:7;51872:4;51888:11;51902:127;51949:7;51970:12;51996:23;51902:33;:127::i;:::-;51888:141;;52039:11;52053:166;52195:7;:23;;;52053:120;52149:7;:23;;;193:4:122;52143:29:231;;;;:::i;:::-;52053:68;52104:16;52110:10;193:4:122;52104:16:231;:::i;:::-;52053:29;;;;;:50;:68::i;:166::-;52039:180;;52240:3;52233;:10;52229:113;;52267:9;52273:3;52267;:9;:::i;:::-;52278:4;52259:24;;;;;;;;52229:113;52322:1;52325:5;52314:17;;;;;;;;20391:352:126;20532:7;20728:8;:1;20734;20728:5;:8::i;:::-;20686:39;20699:21;20718:1;20699:14;:2;20710;20699:10;:14::i;:21::-;20686:1;;20722:2;20686:12;:39::i;:::-;:50;;;;:::i;3190:114:122:-;3250:7;3277:19;3286:1;3289;193:4;3277:8;:19::i;35831:330:231:-;35975:7;36055:99;36129:11;36055:48;193:4:122;36073:23:231;193:4:122;36085:10:231;36073:11;:23::i;:::-;:29;;;;:::i;:::-;36055:9;;:17;:48::i;8508:3846:122:-;8553:8;8606:1;8601;:6;8597:80;;8634:28;;-1:-1:-1;;;8634:28:122;;;;;;;;;;;8597:80;-1:-1:-1;9289:34:122;9286:41;-1:-1:-1;9283:1:122;9279:49;9386:9;;;9366:18;9363:33;9360:1;9356:41;9350:48;9448:9;;;9436:10;9433:25;9430:1;9426:33;9420:40;9506:9;;;9498:6;9495:21;9492:1;9488:29;9482:36;9562:9;;;9556:4;9553:19;9550:1;9546:27;;;9540:34;;;9617:9;;;9612:3;9609:18;9606:1;9602:26;9596:33;9672:9;;;9664:18;;;9661:1;9657:26;;;9651:33;;;9720:9;;;9712:18;;;9706:25;9902:3;:7;;;9872:2;9902:7;9888:22;;;;;-1:-1:-1;;9868:6:122;;;9928:30;;9929:17;;;9928:28;:30::i;:::-;10733:31;10729:35;;10784:5;;10191:2;10783:13;;;10800:32;10782:50;10852:5;;10851:13;;10868:33;10850:51;10921:5;;10920:13;;10937:33;10919:51;10990:5;;10989:13;;11006:33;10988:51;11059:5;;11058:13;;11075:32;11057:50;11127:5;;11126:13;;11143:30;11125:48;10130:31;10126:35;;10181:5;;10180:13;;10197:32;10179:50;10249:5;;10248:13;;10265:32;10247:50;10317:5;;10316:13;;-1:-1:-1;;10315:50:122;10385:5;;10384:13;;-1:-1:-1;;10383:50:122;10453:5;;10452:13;;;-1:-1:-1;;10451:50:122;10519:5;;;-1:-1:-1;;10519:46:122;11514:10;11904:43;11899:48;12027:71;:91;;;;12006:112;12191:72;12186:77;12334:3;12328:9;;;-1:-1:-1;;8508:3846:122:o;4153:490:126:-;4341:14;4367:12;4409:139;4459:2;4475:1;4490:2;4506:1;4521;4536:2;4409:36;:139::i;4907:3302:122:-;4953:8;-1:-1:-1;;5130:1:122;:26;5126:40;;-1:-1:-1;5165:1:122;;4907:3302;-1:-1:-1;4907:3302:122:o;5126:40::-;5365:21;5360:1;:26;5356:87;;5411:32;;-1:-1:-1;;;5411:32:122;;;;;;;;;;;5356:87;5716:7;5710:2;5705:7;;;5704:19;;-1:-1:-1;6052:8:122;6136:2;6076:29;6065:7;;;6064:41;-1:-1:-1;;;6064:51:122;6063:75;;6164:29;6160:33;;6156:37;;;;-1:-1:-1;;6835:35:122;;6890:5;;6470:2;6889:13;;;6906:32;6888:50;6958:5;;6957:13;;-1:-1:-1;;6956:51:122;7027:5;;7026:13;;7043:34;7025:52;7097:5;;7096:13;;-1:-1:-1;;7095:53:122;7168:5;;7167:13;;7184:35;7166:53;6476:32;6409:31;6405:35;;6460:5;;6459:13;;6458:50;;;6533:5;;;-1:-1:-1;;6533:40:122;6593:5;;6592:13;;;6609:35;6591:53;6662:5;;-1:-1:-1;;;6662:50:122;7584:10;;;;-1:-1:-1;6063:75:122;;-1:-1:-1;6458:50:122;;6662;8063:129;8094:49;8065:78;;8172:3;:7;;;8064:116;8063:127;:129::i;7132:398:123:-;7271:7;7280:4;7296:29;7368:16;7328:25;:14;:23;:25::i;:::-;:56;;;;:::i;:::-;7296:88;;7423:1;7398:22;:26;7394:74;;;7448:1;7451:5;7440:17;;;;;;;7394:74;7493:22;-1:-1:-1;7518:4:123;;-1:-1:-1;7132:398:123;;;;;;:::o;269:116:121:-;343:35;;-1:-1:-1;;;343:35:121;;;;;;;;;;;36742:361:231;36925:7;36963:133;37025:57;37047:11;37060:10;37072:9;37025:21;:57::i;:::-;36963:36;:16;36988:10;36963:24;:36::i;15541:101:122:-;15597:6;15626:1;15622;:5;:13;;15634:1;15622:13;;;-1:-1:-1;15630:1:122;15541:101;-1:-1:-1;15541:101:122:o;24388:947:231:-;24586:7;;24643:26;:19;24586:7;24643:23;:26::i;:::-;24642:27;;;:::i;:::-;24605:65;;24680:16;24699:288;24928:7;:23;;;24969:4;24870:7;:28;;;24802:53;24831:7;:23;;;24802:7;:20;;;:28;;:53;;;;:::i;:::-;24763:23;;;;24736:51;;:18;;:26;:51::i;:::-;24700:21;;:87;;;;:::i;:::-;:155;;;;:::i;:::-;:198;;;;:::i;:::-;24699:211;:288;:211;:288::i;:::-;24680:307;-1:-1:-1;25008:295:231;25238:55;193:4:122;25263:23:231;193:4:122;25275:10:231;25263:11;:23::i;:::-;:29;;;;:::i;25238:55::-;193:4:122;25084:113:231;25163:16;25169:10;193:4:122;25163:16:231;:::i;:::-;25116;;;;25084:23;;;;:49;;:31;:49::i;:113::-;25038:27;193:4:122;25050:14:231;25038:11;:27::i;:::-;:159;;;;:::i;:::-;:181;;;;:::i;:::-;:255;;;;:::i;33928:1494::-;34133:18;34153:4;34222:19;34244:44;34264:7;:23;;;34244:11;:19;;:44;;;;:::i;:::-;34222:66;-1:-1:-1;34298:13:231;34314:99;34366:37;34222:66;34366:23;:37;:::i;:::-;34314:30;;;;;:38;:99::i;:::-;34298:115;;34423:10;34436:221;34470:23;34507:7;:20;;;34547:7;:19;;;193:4:122;34541:25:231;;;;:::i;:::-;34580:7;:23;;;34617:7;:30;;;34436:20;:221::i;:::-;34423:234;;34680:43;34692:30;34702:7;:19;;;34692:5;:9;;:30;;;;:::i;34680:43::-;34667:56;;34911:11;34925:132;34973:30;34983:7;:19;;;34973:5;:9;;:30;;;;:::i;:::-;35017;;;;34925:23;;;;;:132;:34;:132::i;:::-;34911:146;;35076:3;35071:2;:8;35067:56;;;35103:1;35106:5;35095:17;;;;;;;;;;35067:56;35145:110;35177:68;35192:52;35224:7;:19;;;193:4:122;35218:25:231;;;;:::i;:::-;35192:19;;;;;:25;:52::i;:::-;35178:8;35183:3;35178:2;:8;:::i;35145:110::-;35132:123;-1:-1:-1;35324:55:231;193:4:122;35349:23:231;193:4:122;35361:10:231;35349:11;:23::i;:::-;:29;;;;:::i;:::-;35324:16;;;;;:24;:55::i;:::-;35310:69;;;;:::i;:::-;;35410:4;;-1:-1:-1;33928:1494:231;-1:-1:-1;;;;;;;;;33928:1494:231:o;19535:343:126:-;19674:7;19863:8;:1;19869;19863:5;:8::i;:::-;19825:35;19836:19;19853:1;19836:12;:2;19845;19836:8;:12::i;:19::-;19825:1;;19857:2;19825:10;:35::i;11086:1515::-;11280:7;11289:4;11443:9;11455:20;11459:2;11463:1;11466;11469;11472:2;11455:3;:20::i;:::-;11443:32;-1:-1:-1;11518:15:126;11531:1;11519:6;11523:2;11519:1;:6;:::i;11518:15::-;11514:19;;11615:1;11611;:5;11607:53;;;11640:1;11643:5;11632:17;;;;;;;11607:53;11864:5;;;11894:18;11864:5;11906:2;11910:1;11894:11;:18::i;:::-;11889:23;;193:4:122;11926:2:126;:9;11922:263;;12025:20;12032:12;193:4:122;12042:1:126;12032:9;:12::i;12025:20::-;12020:25;;11922:263;;;12152:22;12159:14;193:4:122;12171:1:126;12159:11;:14::i;12152:22::-;12147:27;;11922:263;12267:12;:2;12276;12267:8;:12::i;:::-;12262:17;;12404:2;12399;:7;12395:55;;;12430:1;12433:5;12422:17;;;;;;;;12395:55;12570:7;;;-1:-1:-1;12579:4:126;;-1:-1:-1;;11086:1515:126;;;;;;;;;;:::o;15815:101:122:-;15871:6;15900:1;15896;:5;:13;;15908:1;15896:13;;;-1:-1:-1;15904:1:122;;15815:101;-1:-1:-1;15815:101:122:o;54850:343:231:-;55034:7;55072:114;55114:58;55137:11;55150:10;55162:9;55114:22;:58::i;:::-;55072:16;;:24;:114::i;54296:234::-;54441:7;54467:56;54511:11;54467:35;54485:16;54491:10;193:4:122;54485:16:231;:::i;53015:1033::-;53197:7;53216:10;53229:221;53263:23;53300:7;:20;;;53340:7;:19;;;193:4:122;53334:25:231;;;;:::i;53229:221::-;53216:234;;53460:11;53474:158;53499:123;53546:62;53588:7;:19;;;53570:12;53547:7;:20;;;:35;;;;:::i;53546:62::-;53499:23;;;;;:29;:123::i;53474:158::-;53460:172;;53642:11;53656:352;53955:52;53987:7;:19;;;193:4:122;53981:25:231;;;;:::i;:::-;53955:19;;;;;:25;:52::i;:::-;53656:281;53809:114;53882:7;:19;;;193:4:122;53876:25:231;;;;:::i;:::-;53833:12;53810:7;:20;;;:35;;;;:::i;53809:114::-;53784:139;;:2;:139;:::i;:::-;53721:23;;;;53656:43;;;;:89;;:64;:89::i;:352::-;53642:366;-1:-1:-1;54025:16:231;:3;53642:366;54025:11;:16::i;5309:1765:126:-;5501:7;5510:4;5664:9;5676:20;5680:2;5684:1;5687;5690;5693:2;5676:3;:20::i;:::-;5664:32;;5819:2;5815:1;:6;5811:54;;;5845:1;5848:5;5837:17;;;;;;;5811:54;5927:7;;;;;5958:8;5927:7;5964:1;5958:5;:8::i;:::-;5954:12;;6088:1;6084;:5;6080:53;;;6113:1;6116:5;6105:17;;;;;;;6080:53;6337:5;;;6367:18;6337:5;6379:2;6383:1;6367:11;:18::i;:::-;6362:23;;193:4:122;6399:2:126;:9;6395:261;;6497:20;6504:12;193:4:122;6514:1:126;6504:9;:12::i;6497:20::-;6492:25;;6395:261;;;6623:22;6630:14;193:4:122;6642:1:126;6630:11;:14::i;6623:22::-;6618:27;;6395:261;6738:12;:2;6747;6738:8;:12::i;:::-;6733:17;;6875:2;6870;:7;6866:55;;;6901:1;6904:5;6893:17;;;;;;;;6866:55;7043:7;;;;;7052:4;;-1:-1:-1;5309:1765:126;-1:-1:-1;;;;;;;5309:1765:126:o;14:385:234:-;100:6;108;116;124;177:3;165:9;156:7;152:23;148:33;145:53;;;194:1;191;184:12;145:53;-1:-1:-1;;217:23:234;;;287:2;272:18;;259:32;;-1:-1:-1;338:2:234;323:18;;310:32;;389:2;374:18;361:32;;-1:-1:-1;14:385:234;-1:-1:-1;14:385:234:o;586:454::-;681:6;689;697;705;713;766:3;754:9;745:7;741:23;737:33;734:53;;;783:1;780;773:12;734:53;-1:-1:-1;;806:23:234;;;876:2;861:18;;848:32;;-1:-1:-1;927:2:234;912:18;;899:32;;978:2;963:18;;950:32;;-1:-1:-1;1029:3:234;1014:19;1001:33;;-1:-1:-1;586:454:234;-1:-1:-1;586:454:234:o;1045:347::-;1112:2;1106:9;1154:6;1142:19;;1191:18;1176:34;;1212:22;;;1173:62;1170:185;;;1277:10;1272:3;1268:20;1265:1;1258:31;1312:4;1309:1;1302:15;1340:4;1337:1;1330:15;1170:185;1371:2;1364:22;1045:347;:::o;1397:1032::-;1458:5;1506:6;1494:9;1489:3;1485:19;1481:32;1478:52;;;1526:1;1523;1516:12;1478:52;1548:17;;:::i;:::-;1539:26;;1601:9;1588:23;1581:5;1574:38;1672:2;1661:9;1657:18;1644:32;1639:2;1632:5;1628:14;1621:56;1737:2;1726:9;1722:18;1709:32;1704:2;1697:5;1693:14;1686:56;1802:2;1791:9;1787:18;1774:32;1769:2;1762:5;1758:14;1751:56;1868:3;1857:9;1853:19;1840:33;1834:3;1827:5;1823:15;1816:58;1935:3;1924:9;1920:19;1907:33;1901:3;1894:5;1890:15;1883:58;2002:3;1991:9;1987:19;1974:33;1968:3;1961:5;1957:15;1950:58;2069:3;2058:9;2054:19;2041:33;2035:3;2028:5;2024:15;2017:58;2094:3;2157:2;2146:9;2142:18;2129:32;2124:2;2117:5;2113:14;2106:56;;2181:3;2244:2;2233:9;2229:18;2216:32;2211:2;2204:5;2200:14;2193:56;;2268:3;2331:2;2320:9;2316:18;2303:32;2298:2;2291:5;2287:14;2280:56;;2355:3;2418:2;2407:9;2403:18;2390:32;2385:2;2378:5;2374:14;2367:56;;1397:1032;;;;:::o;2434:381::-;2544:6;2552;2560;2613:3;2601:9;2592:7;2588:23;2584:33;2581:53;;;2630:1;2627;2620:12;2581:53;2653:52;2697:7;2686:9;2653:52;:::i;:::-;2643:62;2752:3;2737:19;;2724:33;;-1:-1:-1;2804:3:234;2789:19;;;2776:33;;2434:381;-1:-1:-1;;;2434:381:234:o;3073:523::-;3177:6;3185;3193;3201;3209;3217;3270:3;3258:9;3249:7;3245:23;3241:33;3238:53;;;3287:1;3284;3277:12;3238:53;-1:-1:-1;;3310:23:234;;;3380:2;3365:18;;3352:32;;-1:-1:-1;3431:2:234;3416:18;;3403:32;;3482:2;3467:18;;3454:32;;-1:-1:-1;3533:3:234;3518:19;;3505:33;;-1:-1:-1;3585:3:234;3570:19;3557:33;;-1:-1:-1;3073:523:234;-1:-1:-1;3073:523:234:o;3601:685::-;3711:6;3719;3727;3735;3743;3751;3759;3812:3;3800:9;3791:7;3787:23;3783:33;3780:53;;;3829:1;3826;3819:12;3780:53;3865:9;3852:23;3842:33;;3922:2;3911:9;3907:18;3894:32;3884:42;;3973:2;3962:9;3958:18;3945:32;3935:42;;4024:2;4013:9;4009:18;3996:32;3986:42;;4075:3;4064:9;4060:19;4047:33;4037:43;;4127:3;4116:9;4112:19;4099:33;4089:43;;4182:3;4171:9;4167:19;4154:33;4230:5;4223:13;4216:21;4209:5;4206:32;4196:60;;4252:1;4249;4242:12;4196:60;4275:5;4265:15;;;3601:685;;;;;;;;;;:::o;4757:592::-;4870:6;4878;4886;4894;4902;4910;4918;4971:3;4959:9;4950:7;4946:23;4942:33;4939:53;;;4988:1;4985;4978:12;4939:53;-1:-1:-1;;5011:23:234;;;5081:2;5066:18;;5053:32;;-1:-1:-1;5132:2:234;5117:18;;5104:32;;5183:2;5168:18;;5155:32;;-1:-1:-1;5234:3:234;5219:19;;5206:33;;-1:-1:-1;5286:3:234;5271:19;;5258:33;;-1:-1:-1;5338:3:234;5323:19;5310:33;;-1:-1:-1;4757:592:234;-1:-1:-1;4757:592:234:o;6065:248::-;6133:6;6141;6194:2;6182:9;6173:7;6169:23;6165:32;6162:52;;;6210:1;6207;6200:12;6162:52;-1:-1:-1;;6233:23:234;;;6303:2;6288:18;;;6275:32;;-1:-1:-1;6065:248:234:o;6318:127::-;6379:10;6374:3;6370:20;6367:1;6360:31;6410:4;6407:1;6400:15;6434:4;6431:1;6424:15;6450:128;6517:9;;;6538:11;;;6535:37;;;6552:18;;:::i;7421:125::-;7486:9;;;7507:10;;;7504:36;;;7520:18;;:::i;7551:135::-;7590:3;7611:17;;;7608:43;;7631:18;;:::i;:::-;-1:-1:-1;7678:1:234;7667:13;;7551:135::o;7691:200::-;7757:9;;;7730:4;7785:9;;7813:10;;7825:12;;;7809:29;7848:12;;;7840:21;;7806:56;7803:82;;;7865:18;;:::i;8314:168::-;8387:9;;;8418;;8435:15;;;8429:22;;8415:37;8405:71;;8456:18;;:::i;8619:290::-;8658:1;8684;8674:132;;8728:10;8723:3;8719:20;8716:1;8709:31;8763:4;8760:1;8753:15;8791:4;8788:1;8781:15;8674:132;-1:-1:-1;;;8822:18:234;;-1:-1:-1;;8842:13:234;;8818:38;8815:64;;;8859:18;;:::i;:::-;-1:-1:-1;8893:10:234;;8619:290::o;8914:136::-;8949:3;-1:-1:-1;;;8970:22:234;;8967:48;;8995:18;;:::i;:::-;-1:-1:-1;9035:1:234;9031:13;;8914:136::o";
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
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InsufficientLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"curveFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flatFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLPFee\",\"type\":\"uint256\"}],\"internalType\":\"struct HyperdriveUtils.MaxTradeParams\",\"name\":\"_params\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"_effectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_spotPrice\",\"type\":\"uint256\"}],\"name\":\"calculateAbsoluteMaxLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_effectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amountIn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_normalizedTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_initialVaultSharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateCloseLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_effectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amountOut\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_normalizedTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_initialVaultSharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateCloseShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_effectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_timeStretch\",\"type\":\"uint256\"}],\"name\":\"calculateInitialBondReserves\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"curveFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flatFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLPFee\",\"type\":\"uint256\"}],\"internalType\":\"struct HyperdriveUtils.MaxTradeParams\",\"name\":\"_params\",\"type\":\"tuple\"},{\"internalType\":\"int256\",\"name\":\"_checkpointExposure\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"_maxIterations\",\"type\":\"uint256\"}],\"name\":\"calculateMaxLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"curveFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flatFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLPFee\",\"type\":\"uint256\"}],\"internalType\":\"struct HyperdriveUtils.MaxTradeParams\",\"name\":\"_params\",\"type\":\"tuple\"},{\"internalType\":\"int256\",\"name\":\"_checkpointExposure\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"_maxIterations\",\"type\":\"uint256\"}],\"name\":\"calculateMaxShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shareProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_shareReservesDelta\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_shareCurveDelta\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_totalGovernanceFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_openVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_closeVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"_isLong\",\"type\":\"bool\"}],\"name\":\"calculateNegativeInterestOnClose\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_effectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amountIn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_initialVaultSharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateOpenLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_effectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amountIn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_initialVaultSharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateOpenShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_shareAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_openVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_closeVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_flatFee\",\"type\":\"uint256\"}],\"name\":\"calculateShortProceedsDown\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_shareAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_openVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_closeVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_flatFee\",\"type\":\"uint256\"}],\"name\":\"calculateShortProceedsUp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_effectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_timeStretch\",\"type\":\"uint256\"}],\"name\":\"calculateSpotAPR\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_timeStretch\",\"type\":\"uint256\"}],\"name\":\"calculateSpotPrice\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"}],\"name\":\"calculateTimeStretch\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"InsufficientLiquidity()\":[{\"notice\":\"Thrown when the pool doesn't have sufficient liquidity to         complete the trade.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}]},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockHyperdriveMath.sol\":\"MockHyperdriveMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339\",\"dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19\",\"dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x015be7b5e24373828e26b4af217ecbf074c7f4dcab839703d97d7bc560aa40eb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3584c205f552b20d01dc902a687f346e10bde5f1a23f887f97e03b2fbff8e75c\",\"dweb:/ipfs/QmaVzjYr18cZueNaboBeyVb6CtgY2qMxtvNcn6nXzCgM2c\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d\",\"dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x391c141a11e995c912f55247d461c44bcd7d7c70de4c2d98ff9c81e89acd4424\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b4d80a70106debf9f2d4980e38572daeea11bfc398a1258e3b5dc344e9ce646a\",\"dweb:/ipfs/QmbdckkGQcuok6NDZPiUVAQhpG9HvigMwozFZRLe9YcL2n\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x78ca3ee7c212a513f45a44ef42d362c4ab3cc59e246191c57011b86232967189\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://610b23be1ed7decae671a7cc8ae76298b5d3b10bbea532d3c10623462f899786\",\"dweb:/ipfs/QmV6i6JaY8EKYHUAq6r5267eMbQtfA43F3YNSvvxktW6hE\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4\",\"dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x407ff362f1486784581f506ffd22cbcb74f638deed9e5c086d3639ea8e64025e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e0092121a10538a07f814b1fafdb2f8923ee35c4d0f18af595f65ce36849a797\",\"dweb:/ipfs/QmTVKGwXU2FyywANhcBnutWSu38QaaVqgG9eTYatfjGYGL\"]},\"contracts/test/MockHyperdriveMath.sol\":{\"keccak256\":\"0x3216937ae4cab12cc38a706996f3728676ca8f1b35911695b68bec932d942a07\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://036a8f8307a432f041163b2e091465a47f94ea1a30fc3bad8075209b1f33a4d3\",\"dweb:/ipfs/QmcZ7ArLLL9bnbh41M5xWn3mPVZezhfgwf77fnsgPGCEek\"]},\"test/utils/HyperdriveUtils.sol\":{\"keccak256\":\"0x764719deaf8b833fc87b8436d166030eaa05832bf3d5e259172f431778666e04\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://04c4bd84c0d60f9a7c68604cbe76d0cc88170bb569298749bc97d40b197f62f6\",\"dweb:/ipfs/QmQV6zkCCvLkbta2vDzjbMXKUzYDrAhcEyFA7QSRTVZJ1P\"]}},\"version\":1}";
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
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InsufficientLiquidity";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "LnInvalidInput";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "UnsafeCastToInt256";
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
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
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
                readonly keccak256: "0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5";
                readonly urls: readonly ["bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339", "dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f";
                readonly urls: readonly ["bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19", "dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784";
                readonly urls: readonly ["bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa", "dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveRead.sol": {
                readonly keccak256: "0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045";
                readonly urls: readonly ["bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86", "dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiToken.sol": {
                readonly keccak256: "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f";
                readonly urls: readonly ["bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7", "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenCore.sol": {
                readonly keccak256: "0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501";
                readonly urls: readonly ["bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae", "dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenEvents.sol": {
                readonly keccak256: "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb";
                readonly urls: readonly ["bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222", "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                readonly keccak256: "0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca";
                readonly urls: readonly ["bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3", "dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenRead.sol": {
                readonly keccak256: "0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0";
                readonly urls: readonly ["bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11", "dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/AssetId.sol": {
                readonly keccak256: "0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b";
                readonly urls: readonly ["bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131", "dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/Errors.sol": {
                readonly keccak256: "0x015be7b5e24373828e26b4af217ecbf074c7f4dcab839703d97d7bc560aa40eb";
                readonly urls: readonly ["bzz-raw://3584c205f552b20d01dc902a687f346e10bde5f1a23f887f97e03b2fbff8e75c", "dweb:/ipfs/QmaVzjYr18cZueNaboBeyVb6CtgY2qMxtvNcn6nXzCgM2c"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/FixedPointMath.sol": {
                readonly keccak256: "0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a";
                readonly urls: readonly ["bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d", "dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/HyperdriveMath.sol": {
                readonly keccak256: "0x391c141a11e995c912f55247d461c44bcd7d7c70de4c2d98ff9c81e89acd4424";
                readonly urls: readonly ["bzz-raw://b4d80a70106debf9f2d4980e38572daeea11bfc398a1258e3b5dc344e9ce646a", "dweb:/ipfs/QmbdckkGQcuok6NDZPiUVAQhpG9HvigMwozFZRLe9YcL2n"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/LPMath.sol": {
                readonly keccak256: "0x78ca3ee7c212a513f45a44ef42d362c4ab3cc59e246191c57011b86232967189";
                readonly urls: readonly ["bzz-raw://610b23be1ed7decae671a7cc8ae76298b5d3b10bbea532d3c10623462f899786", "dweb:/ipfs/QmV6i6JaY8EKYHUAq6r5267eMbQtfA43F3YNSvvxktW6hE"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/SafeCast.sol": {
                readonly keccak256: "0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c";
                readonly urls: readonly ["bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4", "dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/YieldSpaceMath.sol": {
                readonly keccak256: "0x407ff362f1486784581f506ffd22cbcb74f638deed9e5c086d3639ea8e64025e";
                readonly urls: readonly ["bzz-raw://e0092121a10538a07f814b1fafdb2f8923ee35c4d0f18af595f65ce36849a797", "dweb:/ipfs/QmTVKGwXU2FyywANhcBnutWSu38QaaVqgG9eTYatfjGYGL"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/test/MockHyperdriveMath.sol": {
                readonly keccak256: "0x3216937ae4cab12cc38a706996f3728676ca8f1b35911695b68bec932d942a07";
                readonly urls: readonly ["bzz-raw://036a8f8307a432f041163b2e091465a47f94ea1a30fc3bad8075209b1f33a4d3", "dweb:/ipfs/QmcZ7ArLLL9bnbh41M5xWn3mPVZezhfgwf77fnsgPGCEek"];
                readonly license: "Apache-2.0";
            };
            readonly "test/utils/HyperdriveUtils.sol": {
                readonly keccak256: "0x764719deaf8b833fc87b8436d166030eaa05832bf3d5e259172f431778666e04";
                readonly urls: readonly ["bzz-raw://04c4bd84c0d60f9a7c68604cbe76d0cc88170bb569298749bc97d40b197f62f6", "dweb:/ipfs/QmQV6zkCCvLkbta2vDzjbMXKUzYDrAhcEyFA7QSRTVZJ1P"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/test/MockHyperdriveMath.sol";
        readonly id: 26071;
        readonly exportedSymbols: {
            readonly HyperdriveMath: readonly [19567];
            readonly HyperdriveUtils: readonly [158674];
            readonly MockHyperdriveMath: readonly [26070];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:8241:137";
        readonly nodes: readonly [{
            readonly id: 25582;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:137";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 25584;
            readonly nodeType: "ImportDirective";
            readonly src: "64:76:137";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/HyperdriveMath.sol";
            readonly file: "contracts/src/libraries/HyperdriveMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 26071;
            readonly sourceUnit: 19568;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 25583;
                    readonly name: "HyperdriveMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 19567;
                    readonly src: "73:14:137";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 25586;
            readonly nodeType: "ImportDirective";
            readonly src: "141:65:137";
            readonly nodes: readonly [];
            readonly absolutePath: "test/utils/HyperdriveUtils.sol";
            readonly file: "test/utils/HyperdriveUtils.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 26071;
            readonly sourceUnit: 158675;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 25585;
                    readonly name: "HyperdriveUtils";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 158674;
                    readonly src: "150:15:137";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 26070;
            readonly nodeType: "ContractDefinition";
            readonly src: "208:8071:137";
            readonly nodes: readonly [{
                readonly id: 25615;
                readonly nodeType: "FunctionDefinition";
                readonly src: "242:498:137";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25614;
                    readonly nodeType: "Block";
                    readonly src: "484:256:137";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [25602];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 25602;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "502:6:137";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25614;
                            readonly src: "494:14:137";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 25601;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "494:7:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25611;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 25605;
                                readonly name: "_effectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25588;
                                readonly src: "556:23:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25606;
                                readonly name: "_bondReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25590;
                                readonly src: "593:13:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25607;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25592;
                                readonly src: "620:23:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25608;
                                readonly name: "_positionDuration";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25594;
                                readonly src: "657:17:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25609;
                                readonly name: "_timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25596;
                                readonly src: "688:12:137";
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
                                    readonly id: 25603;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19567;
                                    readonly src: "511:14:137";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$19567_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 25604;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "526:16:137";
                                readonly memberName: "calculateSpotAPR";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18978;
                                readonly src: "511:31:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 25610;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "511:199:137";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "494:216:137";
                    }, {
                        readonly expression: {
                            readonly id: 25612;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 25602;
                            readonly src: "727:6:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25600;
                        readonly id: 25613;
                        readonly nodeType: "Return";
                        readonly src: "720:13:137";
                    }];
                };
                readonly functionSelector: "2810a036";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateSpotAPR";
                readonly nameLocation: "251:16:137";
                readonly parameters: {
                    readonly id: 25597;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25588;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "285:23:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25615;
                        readonly src: "277:31:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25587;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "277:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25590;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "326:13:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25615;
                        readonly src: "318:21:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25589;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "318:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25592;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "357:23:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25615;
                        readonly src: "349:31:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25591;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "349:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25594;
                        readonly mutability: "mutable";
                        readonly name: "_positionDuration";
                        readonly nameLocation: "398:17:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25615;
                        readonly src: "390:25:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25593;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "390:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25596;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "433:12:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25615;
                        readonly src: "425:20:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25595;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "425:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "267:184:137";
                };
                readonly returnParameters: {
                    readonly id: 25600;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25599;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25615;
                        readonly src: "475:7:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25598;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "475:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "474:9:137";
                };
                readonly scope: 26070;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25644;
                readonly nodeType: "FunctionDefinition";
                readonly src: "746:504:137";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25643;
                    readonly nodeType: "Block";
                    readonly src: "991:259:137";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [25631];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 25631;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "1009:6:137";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25643;
                            readonly src: "1001:14:137";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 25630;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1001:7:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25640;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 25634;
                                readonly name: "_effectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25617;
                                readonly src: "1075:23:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25635;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25619;
                                readonly src: "1112:23:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25636;
                                readonly name: "_apr";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25621;
                                readonly src: "1149:4:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25637;
                                readonly name: "_positionDuration";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25623;
                                readonly src: "1167:17:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25638;
                                readonly name: "_timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25625;
                                readonly src: "1198:12:137";
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
                                    readonly id: 25632;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19567;
                                    readonly src: "1018:14:137";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$19567_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 25633;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1033:28:137";
                                readonly memberName: "calculateInitialBondReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 19114;
                                readonly src: "1018:43:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 25639;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1018:202:137";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "1001:219:137";
                    }, {
                        readonly expression: {
                            readonly id: 25641;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 25631;
                            readonly src: "1237:6:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25629;
                        readonly id: 25642;
                        readonly nodeType: "Return";
                        readonly src: "1230:13:137";
                    }];
                };
                readonly functionSelector: "82a4d306";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateInitialBondReserves";
                readonly nameLocation: "755:28:137";
                readonly parameters: {
                    readonly id: 25626;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25617;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "801:23:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25644;
                        readonly src: "793:31:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25616;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "793:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25619;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "842:23:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25644;
                        readonly src: "834:31:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25618;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "834:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25621;
                        readonly mutability: "mutable";
                        readonly name: "_apr";
                        readonly nameLocation: "883:4:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25644;
                        readonly src: "875:12:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25620;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "875:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25623;
                        readonly mutability: "mutable";
                        readonly name: "_positionDuration";
                        readonly nameLocation: "905:17:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25644;
                        readonly src: "897:25:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25622;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "897:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25625;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "940:12:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25644;
                        readonly src: "932:20:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25624;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "932:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "783:175:137";
                };
                readonly returnParameters: {
                    readonly id: 25629;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25628;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25644;
                        readonly src: "982:7:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25627;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "982:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "981:9:137";
                };
                readonly scope: 26070;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25676;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1256:548:137";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25675;
                    readonly nodeType: "Block";
                    readonly src: "1525:279:137";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [25662];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 25662;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "1543:6:137";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25675;
                            readonly src: "1535:14:137";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 25661;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1535:7:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25672;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 25665;
                                readonly name: "_effectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25646;
                                readonly src: "1598:23:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25666;
                                readonly name: "_bondReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25648;
                                readonly src: "1635:13:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25667;
                                readonly name: "_amountIn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25650;
                                readonly src: "1662:9:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25668;
                                readonly name: "_timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25652;
                                readonly src: "1685:12:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25669;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25654;
                                readonly src: "1711:16:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25670;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25656;
                                readonly src: "1741:23:137";
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
                                    readonly id: 25663;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19567;
                                    readonly src: "1552:14:137";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$19567_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 25664;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1567:17:137";
                                readonly memberName: "calculateOpenLong";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 19305;
                                readonly src: "1552:32:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 25671;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1552:222:137";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "1535:239:137";
                    }, {
                        readonly expression: {
                            readonly id: 25673;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 25662;
                            readonly src: "1791:6:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25660;
                        readonly id: 25674;
                        readonly nodeType: "Return";
                        readonly src: "1784:13:137";
                    }];
                };
                readonly functionSelector: "5e6d9d36";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateOpenLong";
                readonly nameLocation: "1265:17:137";
                readonly parameters: {
                    readonly id: 25657;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25646;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "1300:23:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25676;
                        readonly src: "1292:31:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25645;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1292:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25648;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "1341:13:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25676;
                        readonly src: "1333:21:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25647;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1333:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25650;
                        readonly mutability: "mutable";
                        readonly name: "_amountIn";
                        readonly nameLocation: "1372:9:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25676;
                        readonly src: "1364:17:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25649;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1364:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25652;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "1399:12:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25676;
                        readonly src: "1391:20:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25651;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1391:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25654;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "1429:16:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25676;
                        readonly src: "1421:24:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25653;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1421:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25656;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "1463:23:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25676;
                        readonly src: "1455:31:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25655;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1455:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1282:210:137";
                };
                readonly returnParameters: {
                    readonly id: 25660;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25659;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25676;
                        readonly src: "1516:7:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25658;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1516:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1515:9:137";
                };
                readonly scope: 26070;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25722;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1810:751:137";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25721;
                    readonly nodeType: "Block";
                    readonly src: "2140:421:137";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [25700, 25702, 25704];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 25700;
                            readonly mutability: "mutable";
                            readonly name: "result1";
                            readonly nameLocation: "2159:7:137";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25721;
                            readonly src: "2151:15:137";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 25699;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2151:7:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 25702;
                            readonly mutability: "mutable";
                            readonly name: "result2";
                            readonly nameLocation: "2176:7:137";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25721;
                            readonly src: "2168:15:137";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 25701;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2168:7:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 25704;
                            readonly mutability: "mutable";
                            readonly name: "result3";
                            readonly nameLocation: "2193:7:137";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25721;
                            readonly src: "2185:15:137";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 25703;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2185:7:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25715;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 25707;
                                readonly name: "_effectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25678;
                                readonly src: "2268:23:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25708;
                                readonly name: "_bondReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25680;
                                readonly src: "2309:13:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25709;
                                readonly name: "_amountIn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25682;
                                readonly src: "2340:9:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25710;
                                readonly name: "_normalizedTimeRemaining";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25684;
                                readonly src: "2367:24:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25711;
                                readonly name: "_timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25686;
                                readonly src: "2409:12:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25712;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25688;
                                readonly src: "2439:16:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25713;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25690;
                                readonly src: "2473:23:137";
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
                                    readonly id: 25705;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19567;
                                    readonly src: "2204:14:137";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$19567_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 25706;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2232:18:137";
                                readonly memberName: "calculateCloseLong";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 19370;
                                readonly src: "2204:46:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256,uint256,uint256)";
                                };
                            };
                            readonly id: 25714;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2204:306:137";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256,uint256)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2150:360:137";
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly id: 25716;
                                readonly name: "result1";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25700;
                                readonly src: "2528:7:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25717;
                                readonly name: "result2";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25702;
                                readonly src: "2537:7:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25718;
                                readonly name: "result3";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25704;
                                readonly src: "2546:7:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 25719;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "2527:27:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 25698;
                        readonly id: 25720;
                        readonly nodeType: "Return";
                        readonly src: "2520:34:137";
                    }];
                };
                readonly functionSelector: "94169d49";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateCloseLong";
                readonly nameLocation: "1819:18:137";
                readonly parameters: {
                    readonly id: 25691;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25678;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "1855:23:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25722;
                        readonly src: "1847:31:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25677;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1847:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25680;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "1896:13:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25722;
                        readonly src: "1888:21:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25679;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1888:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25682;
                        readonly mutability: "mutable";
                        readonly name: "_amountIn";
                        readonly nameLocation: "1927:9:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25722;
                        readonly src: "1919:17:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25681;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1919:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25684;
                        readonly mutability: "mutable";
                        readonly name: "_normalizedTimeRemaining";
                        readonly nameLocation: "1954:24:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25722;
                        readonly src: "1946:32:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25683;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1946:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25686;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "1996:12:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25722;
                        readonly src: "1988:20:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25685;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1988:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25688;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "2026:16:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25722;
                        readonly src: "2018:24:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25687;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2018:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25690;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "2060:23:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25722;
                        readonly src: "2052:31:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25689;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2052:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1837:252:137";
                };
                readonly returnParameters: {
                    readonly id: 25698;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25693;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25722;
                        readonly src: "2113:7:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25692;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2113:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25695;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25722;
                        readonly src: "2122:7:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25694;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2122:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25697;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25722;
                        readonly src: "2131:7:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25696;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2131:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2112:27:137";
                };
                readonly scope: 26070;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25754;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2567:550:137";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25753;
                    readonly nodeType: "Block";
                    readonly src: "2837:280:137";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [25740];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 25740;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "2855:6:137";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25753;
                            readonly src: "2847:14:137";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 25739;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2847:7:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25750;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 25743;
                                readonly name: "_effectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25724;
                                readonly src: "2911:23:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25744;
                                readonly name: "_bondReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25726;
                                readonly src: "2948:13:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25745;
                                readonly name: "_amountIn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25728;
                                readonly src: "2975:9:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25746;
                                readonly name: "_timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25730;
                                readonly src: "2998:12:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25747;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25732;
                                readonly src: "3024:16:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25748;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25734;
                                readonly src: "3054:23:137";
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
                                    readonly id: 25741;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19567;
                                    readonly src: "2864:14:137";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$19567_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 25742;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2879:18:137";
                                readonly memberName: "calculateOpenShort";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 19401;
                                readonly src: "2864:33:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 25749;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2864:223:137";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2847:240:137";
                    }, {
                        readonly expression: {
                            readonly id: 25751;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 25740;
                            readonly src: "3104:6:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25738;
                        readonly id: 25752;
                        readonly nodeType: "Return";
                        readonly src: "3097:13:137";
                    }];
                };
                readonly functionSelector: "6ceebe1d";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateOpenShort";
                readonly nameLocation: "2576:18:137";
                readonly parameters: {
                    readonly id: 25735;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25724;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "2612:23:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25754;
                        readonly src: "2604:31:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25723;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2604:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25726;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "2653:13:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25754;
                        readonly src: "2645:21:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25725;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2645:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25728;
                        readonly mutability: "mutable";
                        readonly name: "_amountIn";
                        readonly nameLocation: "2684:9:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25754;
                        readonly src: "2676:17:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25727;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2676:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25730;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "2711:12:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25754;
                        readonly src: "2703:20:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25729;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2703:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25732;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "2741:16:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25754;
                        readonly src: "2733:24:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25731;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2733:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25734;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "2775:23:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25754;
                        readonly src: "2767:31:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25733;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2767:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2594:210:137";
                };
                readonly returnParameters: {
                    readonly id: 25738;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25737;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25754;
                        readonly src: "2828:7:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25736;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2828:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2827:9:137";
                };
                readonly scope: 26070;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25800;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3123:755:137";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25799;
                    readonly nodeType: "Block";
                    readonly src: "3455:423:137";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [25778, 25780, 25782];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 25778;
                            readonly mutability: "mutable";
                            readonly name: "result1";
                            readonly nameLocation: "3474:7:137";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25799;
                            readonly src: "3466:15:137";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 25777;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3466:7:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 25780;
                            readonly mutability: "mutable";
                            readonly name: "result2";
                            readonly nameLocation: "3491:7:137";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25799;
                            readonly src: "3483:15:137";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 25779;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3483:7:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 25782;
                            readonly mutability: "mutable";
                            readonly name: "result3";
                            readonly nameLocation: "3508:7:137";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25799;
                            readonly src: "3500:15:137";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 25781;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3500:7:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25793;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 25785;
                                readonly name: "_effectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25756;
                                readonly src: "3584:23:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25786;
                                readonly name: "_bondReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25758;
                                readonly src: "3625:13:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25787;
                                readonly name: "_amountOut";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25760;
                                readonly src: "3656:10:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25788;
                                readonly name: "_normalizedTimeRemaining";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25762;
                                readonly src: "3684:24:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25789;
                                readonly name: "_timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25764;
                                readonly src: "3726:12:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25790;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25766;
                                readonly src: "3756:16:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25791;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25768;
                                readonly src: "3790:23:137";
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
                                    readonly id: 25783;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19567;
                                    readonly src: "3519:14:137";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$19567_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 25784;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3547:19:137";
                                readonly memberName: "calculateCloseShort";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 19466;
                                readonly src: "3519:47:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256,uint256,uint256)";
                                };
                            };
                            readonly id: 25792;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3519:308:137";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256,uint256)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3465:362:137";
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly id: 25794;
                                readonly name: "result1";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25778;
                                readonly src: "3845:7:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25795;
                                readonly name: "result2";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25780;
                                readonly src: "3854:7:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25796;
                                readonly name: "result3";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25782;
                                readonly src: "3863:7:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 25797;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "3844:27:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 25776;
                        readonly id: 25798;
                        readonly nodeType: "Return";
                        readonly src: "3837:34:137";
                    }];
                };
                readonly functionSelector: "f87845f2";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateCloseShort";
                readonly nameLocation: "3132:19:137";
                readonly parameters: {
                    readonly id: 25769;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25756;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "3169:23:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25800;
                        readonly src: "3161:31:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25755;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3161:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25758;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "3210:13:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25800;
                        readonly src: "3202:21:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25757;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3202:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25760;
                        readonly mutability: "mutable";
                        readonly name: "_amountOut";
                        readonly nameLocation: "3241:10:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25800;
                        readonly src: "3233:18:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25759;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3233:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25762;
                        readonly mutability: "mutable";
                        readonly name: "_normalizedTimeRemaining";
                        readonly nameLocation: "3269:24:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25800;
                        readonly src: "3261:32:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25761;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3261:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25764;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "3311:12:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25800;
                        readonly src: "3303:20:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25763;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3303:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25766;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "3341:16:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25800;
                        readonly src: "3333:24:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25765;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3333:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25768;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "3375:23:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25800;
                        readonly src: "3367:31:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25767;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3367:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3151:253:137";
                };
                readonly returnParameters: {
                    readonly id: 25776;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25771;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25800;
                        readonly src: "3428:7:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25770;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3428:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25773;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25800;
                        readonly src: "3437:7:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25772;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3437:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25775;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25800;
                        readonly src: "3446:7:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25774;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3446:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3427:27:137";
                };
                readonly scope: 26070;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25811;
                readonly nodeType: "StructDefinition";
                readonly src: "3884:217:137";
                readonly nodes: readonly [];
                readonly canonicalName: "MockHyperdriveMath.NegativeInterestOnCloseOutput";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 25802;
                    readonly mutability: "mutable";
                    readonly name: "shareProceeds";
                    readonly nameLocation: "3939:13:137";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 25811;
                    readonly src: "3931:21:137";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 25801;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3931:7:137";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 25804;
                    readonly mutability: "mutable";
                    readonly name: "shareReservesDelta";
                    readonly nameLocation: "3970:18:137";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 25811;
                    readonly src: "3962:26:137";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 25803;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3962:7:137";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 25806;
                    readonly mutability: "mutable";
                    readonly name: "shareCurveDelta";
                    readonly nameLocation: "4006:15:137";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 25811;
                    readonly src: "3998:23:137";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 25805;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3998:7:137";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 25808;
                    readonly mutability: "mutable";
                    readonly name: "shareAdjustmentDelta";
                    readonly nameLocation: "4038:20:137";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 25811;
                    readonly src: "4031:27:137";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_int256";
                        readonly typeString: "int256";
                    };
                    readonly typeName: {
                        readonly id: 25807;
                        readonly name: "int256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4031:6:137";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 25810;
                    readonly mutability: "mutable";
                    readonly name: "totalGovernanceFee";
                    readonly nameLocation: "4076:18:137";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 25811;
                    readonly src: "4068:26:137";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 25809;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4068:7:137";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "NegativeInterestOnCloseOutput";
                readonly nameLocation: "3891:29:137";
                readonly scope: 26070;
                readonly visibility: "public";
            }, {
                readonly id: 25879;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4107:1113:137";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25878;
                    readonly nodeType: "Block";
                    readonly src: "4461:759:137";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [25840];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 25840;
                            readonly mutability: "mutable";
                            readonly name: "output";
                            readonly nameLocation: "4508:6:137";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25878;
                            readonly src: "4471:43:137";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$25811_memory_ptr";
                                readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput";
                            };
                            readonly typeName: {
                                readonly id: 25839;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 25838;
                                    readonly name: "NegativeInterestOnCloseOutput";
                                    readonly nameLocations: readonly ["4471:29:137"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 25811;
                                    readonly src: "4471:29:137";
                                };
                                readonly referencedDeclaration: 25811;
                                readonly src: "4471:29:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$25811_storage_ptr";
                                    readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25841;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4471:43:137";
                    }, {
                        readonly expression: {
                            readonly id: 25864;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly components: readonly [{
                                    readonly expression: {
                                        readonly id: 25842;
                                        readonly name: "output";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25840;
                                        readonly src: "4538:6:137";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$25811_memory_ptr";
                                            readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory";
                                        };
                                    };
                                    readonly id: 25844;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: true;
                                    readonly memberLocation: "4545:13:137";
                                    readonly memberName: "shareProceeds";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 25802;
                                    readonly src: "4538:20:137";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 25845;
                                        readonly name: "output";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25840;
                                        readonly src: "4572:6:137";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$25811_memory_ptr";
                                            readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory";
                                        };
                                    };
                                    readonly id: 25846;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: true;
                                    readonly memberLocation: "4579:18:137";
                                    readonly memberName: "shareReservesDelta";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 25804;
                                    readonly src: "4572:25:137";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 25847;
                                        readonly name: "output";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25840;
                                        readonly src: "4611:6:137";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$25811_memory_ptr";
                                            readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory";
                                        };
                                    };
                                    readonly id: 25848;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: true;
                                    readonly memberLocation: "4618:15:137";
                                    readonly memberName: "shareCurveDelta";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 25806;
                                    readonly src: "4611:22:137";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 25849;
                                        readonly name: "output";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25840;
                                        readonly src: "4647:6:137";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$25811_memory_ptr";
                                            readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory";
                                        };
                                    };
                                    readonly id: 25850;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: true;
                                    readonly memberLocation: "4654:20:137";
                                    readonly memberName: "shareAdjustmentDelta";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 25808;
                                    readonly src: "4647:27:137";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 25851;
                                        readonly name: "output";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25840;
                                        readonly src: "4688:6:137";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$25811_memory_ptr";
                                            readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory";
                                        };
                                    };
                                    readonly id: 25852;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: true;
                                    readonly memberLocation: "4695:18:137";
                                    readonly memberName: "totalGovernanceFee";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 25810;
                                    readonly src: "4688:25:137";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 25853;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "TupleExpression";
                                readonly src: "4524:199:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$";
                                    readonly typeString: "tuple(uint256,uint256,uint256,int256,uint256)";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 25856;
                                    readonly name: "_shareProceeds";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25813;
                                    readonly src: "4787:14:137";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25857;
                                    readonly name: "_shareReservesDelta";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25815;
                                    readonly src: "4815:19:137";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25858;
                                    readonly name: "_shareCurveDelta";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25817;
                                    readonly src: "4848:16:137";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25859;
                                    readonly name: "_totalGovernanceFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25819;
                                    readonly src: "4878:19:137";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25860;
                                    readonly name: "_openVaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25821;
                                    readonly src: "4911:20:137";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25861;
                                    readonly name: "_closeVaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25823;
                                    readonly src: "4945:21:137";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25862;
                                    readonly name: "_isLong";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25825;
                                    readonly src: "4980:7:137";
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
                                        readonly id: 25854;
                                        readonly name: "HyperdriveMath";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19567;
                                        readonly src: "4726:14:137";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$19567_$";
                                            readonly typeString: "type(library HyperdriveMath)";
                                        };
                                    };
                                    readonly id: 25855;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4741:32:137";
                                    readonly memberName: "calculateNegativeInterestOnClose";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 19566;
                                    readonly src: "4726:47:137";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256,bool) pure returns (uint256,uint256,uint256,int256,uint256)";
                                    };
                                };
                                readonly id: 25863;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4726:271:137";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$";
                                    readonly typeString: "tuple(uint256,uint256,uint256,int256,uint256)";
                                };
                            };
                            readonly src: "4524:473:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 25865;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4524:473:137";
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly expression: {
                                    readonly id: 25866;
                                    readonly name: "output";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25840;
                                    readonly src: "5028:6:137";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$25811_memory_ptr";
                                        readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory";
                                    };
                                };
                                readonly id: 25867;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5035:13:137";
                                readonly memberName: "shareProceeds";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 25802;
                                readonly src: "5028:20:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 25868;
                                    readonly name: "output";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25840;
                                    readonly src: "5062:6:137";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$25811_memory_ptr";
                                        readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory";
                                    };
                                };
                                readonly id: 25869;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5069:18:137";
                                readonly memberName: "shareReservesDelta";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 25804;
                                readonly src: "5062:25:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 25870;
                                    readonly name: "output";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25840;
                                    readonly src: "5101:6:137";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$25811_memory_ptr";
                                        readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory";
                                    };
                                };
                                readonly id: 25871;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5108:15:137";
                                readonly memberName: "shareCurveDelta";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 25806;
                                readonly src: "5101:22:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 25872;
                                    readonly name: "output";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25840;
                                    readonly src: "5137:6:137";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$25811_memory_ptr";
                                        readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory";
                                    };
                                };
                                readonly id: 25873;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5144:20:137";
                                readonly memberName: "shareAdjustmentDelta";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 25808;
                                readonly src: "5137:27:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 25874;
                                    readonly name: "output";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25840;
                                    readonly src: "5178:6:137";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$25811_memory_ptr";
                                        readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory";
                                    };
                                };
                                readonly id: 25875;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5185:18:137";
                                readonly memberName: "totalGovernanceFee";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 25810;
                                readonly src: "5178:25:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 25876;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "5014:199:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256,uint256,int256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 25837;
                        readonly id: 25877;
                        readonly nodeType: "Return";
                        readonly src: "5007:206:137";
                    }];
                };
                readonly functionSelector: "7ef99f87";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateNegativeInterestOnClose";
                readonly nameLocation: "4116:32:137";
                readonly parameters: {
                    readonly id: 25826;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25813;
                        readonly mutability: "mutable";
                        readonly name: "_shareProceeds";
                        readonly nameLocation: "4166:14:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25879;
                        readonly src: "4158:22:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25812;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4158:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25815;
                        readonly mutability: "mutable";
                        readonly name: "_shareReservesDelta";
                        readonly nameLocation: "4198:19:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25879;
                        readonly src: "4190:27:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25814;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4190:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25817;
                        readonly mutability: "mutable";
                        readonly name: "_shareCurveDelta";
                        readonly nameLocation: "4235:16:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25879;
                        readonly src: "4227:24:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25816;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4227:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25819;
                        readonly mutability: "mutable";
                        readonly name: "_totalGovernanceFee";
                        readonly nameLocation: "4269:19:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25879;
                        readonly src: "4261:27:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25818;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4261:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25821;
                        readonly mutability: "mutable";
                        readonly name: "_openVaultSharePrice";
                        readonly nameLocation: "4306:20:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25879;
                        readonly src: "4298:28:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25820;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4298:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25823;
                        readonly mutability: "mutable";
                        readonly name: "_closeVaultSharePrice";
                        readonly nameLocation: "4344:21:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25879;
                        readonly src: "4336:29:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25822;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4336:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25825;
                        readonly mutability: "mutable";
                        readonly name: "_isLong";
                        readonly nameLocation: "4380:7:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25879;
                        readonly src: "4375:12:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 25824;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4375:4:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4148:245:137";
                };
                readonly returnParameters: {
                    readonly id: 25837;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25828;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25879;
                        readonly src: "4417:7:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25827;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4417:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25830;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25879;
                        readonly src: "4426:7:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25829;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4426:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25832;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25879;
                        readonly src: "4435:7:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25831;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4435:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25834;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25879;
                        readonly src: "4444:6:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 25833;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4444:6:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25836;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25879;
                        readonly src: "4452:7:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25835;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4452:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4416:44:137";
                };
                readonly scope: 26070;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25899;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5226:272:137";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25898;
                    readonly nodeType: "Block";
                    readonly src: "5349:149:137";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [25889];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 25889;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "5367:6:137";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25898;
                            readonly src: "5359:14:137";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 25888;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5359:7:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25895;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 25892;
                                readonly name: "apr";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25881;
                                readonly src: "5425:3:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25893;
                                readonly name: "positionDuration";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25883;
                                readonly src: "5442:16:137";
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
                                    readonly id: 25890;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19567;
                                    readonly src: "5376:14:137";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$19567_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 25891;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5391:20:137";
                                readonly memberName: "calculateTimeStretch";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18914;
                                readonly src: "5376:35:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 25894;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5376:92:137";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5359:109:137";
                    }, {
                        readonly expression: {
                            readonly id: 25896;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 25889;
                            readonly src: "5485:6:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25887;
                        readonly id: 25897;
                        readonly nodeType: "Return";
                        readonly src: "5478:13:137";
                    }];
                };
                readonly functionSelector: "dbab8512";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateTimeStretch";
                readonly nameLocation: "5235:20:137";
                readonly parameters: {
                    readonly id: 25884;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25881;
                        readonly mutability: "mutable";
                        readonly name: "apr";
                        readonly nameLocation: "5273:3:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25899;
                        readonly src: "5265:11:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25880;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5265:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25883;
                        readonly mutability: "mutable";
                        readonly name: "positionDuration";
                        readonly nameLocation: "5294:16:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25899;
                        readonly src: "5286:24:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25882;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5286:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5255:61:137";
                };
                readonly returnParameters: {
                    readonly id: 25887;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25886;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25899;
                        readonly src: "5340:7:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25885;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5340:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5339:9:137";
                };
                readonly scope: 26070;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25929;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5504:409:137";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25928;
                    readonly nodeType: "Block";
                    readonly src: "5700:213:137";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [25914, 25916];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 25914;
                            readonly mutability: "mutable";
                            readonly name: "result1";
                            readonly nameLocation: "5719:7:137";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25928;
                            readonly src: "5711:15:137";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 25913;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5711:7:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 25916;
                            readonly mutability: "mutable";
                            readonly name: "result2";
                            readonly nameLocation: "5736:7:137";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25928;
                            readonly src: "5728:15:137";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 25915;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5728:7:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25923;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 25919;
                                readonly name: "_params";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25902;
                                readonly src: "5793:7:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_MaxTradeParams_$156700_memory_ptr";
                                    readonly typeString: "struct HyperdriveUtils.MaxTradeParams memory";
                                };
                            }, {
                                readonly id: 25920;
                                readonly name: "_checkpointExposure";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25904;
                                readonly src: "5814:19:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }, {
                                readonly id: 25921;
                                readonly name: "_maxIterations";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25906;
                                readonly src: "5847:14:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_MaxTradeParams_$156700_memory_ptr";
                                    readonly typeString: "struct HyperdriveUtils.MaxTradeParams memory";
                                }, {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 25917;
                                    readonly name: "HyperdriveUtils";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 158674;
                                    readonly src: "5747:15:137";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveUtils_$158674_$";
                                        readonly typeString: "type(library HyperdriveUtils)";
                                    };
                                };
                                readonly id: 25918;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5763:16:137";
                                readonly memberName: "calculateMaxLong";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 156893;
                                readonly src: "5747:32:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_MaxTradeParams_$156700_memory_ptr_$_t_int256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "function (struct HyperdriveUtils.MaxTradeParams memory,int256,uint256) pure returns (uint256,uint256)";
                                };
                            };
                            readonly id: 25922;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5747:124:137";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5710:161:137";
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly id: 25924;
                                readonly name: "result1";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25914;
                                readonly src: "5889:7:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25925;
                                readonly name: "result2";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25916;
                                readonly src: "5898:7:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 25926;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "5888:18:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 25912;
                        readonly id: 25927;
                        readonly nodeType: "Return";
                        readonly src: "5881:25:137";
                    }];
                };
                readonly functionSelector: "3f77b617";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateMaxLong";
                readonly nameLocation: "5513:16:137";
                readonly parameters: {
                    readonly id: 25907;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25902;
                        readonly mutability: "mutable";
                        readonly name: "_params";
                        readonly nameLocation: "5577:7:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25929;
                        readonly src: "5539:45:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_MaxTradeParams_$156700_memory_ptr";
                            readonly typeString: "struct HyperdriveUtils.MaxTradeParams";
                        };
                        readonly typeName: {
                            readonly id: 25901;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25900;
                                readonly name: "HyperdriveUtils.MaxTradeParams";
                                readonly nameLocations: readonly ["5539:15:137", "5555:14:137"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 156700;
                                readonly src: "5539:30:137";
                            };
                            readonly referencedDeclaration: 156700;
                            readonly src: "5539:30:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_MaxTradeParams_$156700_storage_ptr";
                                readonly typeString: "struct HyperdriveUtils.MaxTradeParams";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25904;
                        readonly mutability: "mutable";
                        readonly name: "_checkpointExposure";
                        readonly nameLocation: "5601:19:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25929;
                        readonly src: "5594:26:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 25903;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5594:6:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25906;
                        readonly mutability: "mutable";
                        readonly name: "_maxIterations";
                        readonly nameLocation: "5638:14:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25929;
                        readonly src: "5630:22:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25905;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5630:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5529:129:137";
                };
                readonly returnParameters: {
                    readonly id: 25912;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25909;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25929;
                        readonly src: "5682:7:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25908;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5682:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25911;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25929;
                        readonly src: "5691:7:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25910;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5691:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5681:18:137";
                };
                readonly scope: 26070;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25959;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5919:455:137";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25958;
                    readonly nodeType: "Block";
                    readonly src: "6124:250:137";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [25944, 25946];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 25944;
                            readonly mutability: "mutable";
                            readonly name: "result1";
                            readonly nameLocation: "6143:7:137";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25958;
                            readonly src: "6135:15:137";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 25943;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6135:7:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 25946;
                            readonly mutability: "mutable";
                            readonly name: "result2";
                            readonly nameLocation: "6160:7:137";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25958;
                            readonly src: "6152:15:137";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 25945;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6152:7:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25953;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 25949;
                                readonly name: "_params";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25932;
                                readonly src: "6242:7:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_MaxTradeParams_$156700_memory_ptr";
                                    readonly typeString: "struct HyperdriveUtils.MaxTradeParams memory";
                                };
                            }, {
                                readonly id: 25950;
                                readonly name: "_effectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25934;
                                readonly src: "6267:23:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25951;
                                readonly name: "_spotPrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25936;
                                readonly src: "6308:10:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_MaxTradeParams_$156700_memory_ptr";
                                    readonly typeString: "struct HyperdriveUtils.MaxTradeParams memory";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 25947;
                                    readonly name: "HyperdriveUtils";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 158674;
                                    readonly src: "6171:15:137";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveUtils_$158674_$";
                                        readonly typeString: "type(library HyperdriveUtils)";
                                    };
                                };
                                readonly id: 25948;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6200:24:137";
                                readonly memberName: "calculateAbsoluteMaxLong";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 157087;
                                readonly src: "6171:53:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_MaxTradeParams_$156700_memory_ptr_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "function (struct HyperdriveUtils.MaxTradeParams memory,uint256,uint256) pure returns (uint256,uint256)";
                                };
                            };
                            readonly id: 25952;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6171:161:137";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6134:198:137";
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly id: 25954;
                                readonly name: "result1";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25944;
                                readonly src: "6350:7:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25955;
                                readonly name: "result2";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25946;
                                readonly src: "6359:7:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 25956;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "6349:18:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 25942;
                        readonly id: 25957;
                        readonly nodeType: "Return";
                        readonly src: "6342:25:137";
                    }];
                };
                readonly functionSelector: "a280a282";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateAbsoluteMaxLong";
                readonly nameLocation: "5928:24:137";
                readonly parameters: {
                    readonly id: 25937;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25932;
                        readonly mutability: "mutable";
                        readonly name: "_params";
                        readonly nameLocation: "6000:7:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25959;
                        readonly src: "5962:45:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_MaxTradeParams_$156700_memory_ptr";
                            readonly typeString: "struct HyperdriveUtils.MaxTradeParams";
                        };
                        readonly typeName: {
                            readonly id: 25931;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25930;
                                readonly name: "HyperdriveUtils.MaxTradeParams";
                                readonly nameLocations: readonly ["5962:15:137", "5978:14:137"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 156700;
                                readonly src: "5962:30:137";
                            };
                            readonly referencedDeclaration: 156700;
                            readonly src: "5962:30:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_MaxTradeParams_$156700_storage_ptr";
                                readonly typeString: "struct HyperdriveUtils.MaxTradeParams";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25934;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "6025:23:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25959;
                        readonly src: "6017:31:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25933;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6017:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25936;
                        readonly mutability: "mutable";
                        readonly name: "_spotPrice";
                        readonly nameLocation: "6066:10:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25959;
                        readonly src: "6058:18:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25935;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6058:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5952:130:137";
                };
                readonly returnParameters: {
                    readonly id: 25942;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25939;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25959;
                        readonly src: "6106:7:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25938;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6106:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25941;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25959;
                        readonly src: "6115:7:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25940;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6115:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6105:18:137";
                };
                readonly scope: 26070;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25979;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6380:365:137";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25978;
                    readonly nodeType: "Block";
                    readonly src: "6568:177:137";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 25973;
                                readonly name: "_params";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25962;
                                readonly src: "6648:7:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_MaxTradeParams_$156700_memory_ptr";
                                    readonly typeString: "struct HyperdriveUtils.MaxTradeParams memory";
                                };
                            }, {
                                readonly id: 25974;
                                readonly name: "_checkpointExposure";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25964;
                                readonly src: "6673:19:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }, {
                                readonly id: 25975;
                                readonly name: "_maxIterations";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25966;
                                readonly src: "6710:14:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_MaxTradeParams_$156700_memory_ptr";
                                    readonly typeString: "struct HyperdriveUtils.MaxTradeParams memory";
                                }, {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 25971;
                                    readonly name: "HyperdriveUtils";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 158674;
                                    readonly src: "6597:15:137";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveUtils_$158674_$";
                                        readonly typeString: "type(library HyperdriveUtils)";
                                    };
                                };
                                readonly id: 25972;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6613:17:137";
                                readonly memberName: "calculateMaxShort";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 157823;
                                readonly src: "6597:33:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_MaxTradeParams_$156700_memory_ptr_$_t_int256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (struct HyperdriveUtils.MaxTradeParams memory,int256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 25976;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6597:141:137";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25970;
                        readonly id: 25977;
                        readonly nodeType: "Return";
                        readonly src: "6578:160:137";
                    }];
                };
                readonly functionSelector: "9e489b99";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateMaxShort";
                readonly nameLocation: "6389:17:137";
                readonly parameters: {
                    readonly id: 25967;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25962;
                        readonly mutability: "mutable";
                        readonly name: "_params";
                        readonly nameLocation: "6454:7:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25979;
                        readonly src: "6416:45:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_MaxTradeParams_$156700_memory_ptr";
                            readonly typeString: "struct HyperdriveUtils.MaxTradeParams";
                        };
                        readonly typeName: {
                            readonly id: 25961;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25960;
                                readonly name: "HyperdriveUtils.MaxTradeParams";
                                readonly nameLocations: readonly ["6416:15:137", "6432:14:137"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 156700;
                                readonly src: "6416:30:137";
                            };
                            readonly referencedDeclaration: 156700;
                            readonly src: "6416:30:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_MaxTradeParams_$156700_storage_ptr";
                                readonly typeString: "struct HyperdriveUtils.MaxTradeParams";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25964;
                        readonly mutability: "mutable";
                        readonly name: "_checkpointExposure";
                        readonly nameLocation: "6478:19:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25979;
                        readonly src: "6471:26:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 25963;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6471:6:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25966;
                        readonly mutability: "mutable";
                        readonly name: "_maxIterations";
                        readonly nameLocation: "6515:14:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25979;
                        readonly src: "6507:22:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25965;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6507:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6406:129:137";
                };
                readonly returnParameters: {
                    readonly id: 25970;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25969;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25979;
                        readonly src: "6559:7:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25968;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6559:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6558:9:137";
                };
                readonly scope: 26070;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26005;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6751:418:137";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26004;
                    readonly nodeType: "Block";
                    readonly src: "6951:218:137";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [25993];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 25993;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "6969:6:137";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 26004;
                            readonly src: "6961:14:137";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 25992;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6961:7:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 26001;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 25996;
                                readonly name: "_shareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25981;
                                readonly src: "7025:14:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25997;
                                readonly name: "_bondReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25983;
                                readonly src: "7053:13:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25998;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25985;
                                readonly src: "7080:23:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25999;
                                readonly name: "_timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25987;
                                readonly src: "7117:12:137";
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
                                    readonly id: 25994;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19567;
                                    readonly src: "6978:14:137";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$19567_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 25995;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6993:18:137";
                                readonly memberName: "calculateSpotPrice";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18940;
                                readonly src: "6978:33:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 26000;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6978:161:137";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6961:178:137";
                    }, {
                        readonly expression: {
                            readonly id: 26002;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 25993;
                            readonly src: "7156:6:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25991;
                        readonly id: 26003;
                        readonly nodeType: "Return";
                        readonly src: "7149:13:137";
                    }];
                };
                readonly functionSelector: "2471caed";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateSpotPrice";
                readonly nameLocation: "6760:18:137";
                readonly parameters: {
                    readonly id: 25988;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25981;
                        readonly mutability: "mutable";
                        readonly name: "_shareReserves";
                        readonly nameLocation: "6796:14:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26005;
                        readonly src: "6788:22:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25980;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6788:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25983;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "6828:13:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26005;
                        readonly src: "6820:21:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25982;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6820:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25985;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "6859:23:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26005;
                        readonly src: "6851:31:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25984;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6851:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25987;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "6900:12:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26005;
                        readonly src: "6892:20:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25986;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6892:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6778:140:137";
                };
                readonly returnParameters: {
                    readonly id: 25991;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25990;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26005;
                        readonly src: "6942:7:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25989;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6942:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6941:9:137";
                };
                readonly scope: 26070;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26037;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7175:546:137";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26036;
                    readonly nodeType: "Block";
                    readonly src: "7443:278:137";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [26023];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 26023;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "7461:6:137";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 26036;
                            readonly src: "7453:14:137";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 26022;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "7453:7:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 26033;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 26026;
                                readonly name: "_bondAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26007;
                                readonly src: "7523:11:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 26027;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26009;
                                readonly src: "7548:12:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 26028;
                                readonly name: "_openVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26011;
                                readonly src: "7574:20:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 26029;
                                readonly name: "_closeVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26013;
                                readonly src: "7608:21:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 26030;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26015;
                                readonly src: "7643:16:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 26031;
                                readonly name: "_flatFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26017;
                                readonly src: "7673:8:137";
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
                                    readonly id: 26024;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19567;
                                    readonly src: "7470:14:137";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$19567_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 26025;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "7485:24:137";
                                readonly memberName: "calculateShortProceedsUp";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 19166;
                                readonly src: "7470:39:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 26032;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7470:221:137";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "7453:238:137";
                    }, {
                        readonly expression: {
                            readonly id: 26034;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 26023;
                            readonly src: "7708:6:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 26021;
                        readonly id: 26035;
                        readonly nodeType: "Return";
                        readonly src: "7701:13:137";
                    }];
                };
                readonly functionSelector: "902b1099";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateShortProceedsUp";
                readonly nameLocation: "7184:24:137";
                readonly parameters: {
                    readonly id: 26018;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26007;
                        readonly mutability: "mutable";
                        readonly name: "_bondAmount";
                        readonly nameLocation: "7226:11:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26037;
                        readonly src: "7218:19:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26006;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7218:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26009;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "7255:12:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26037;
                        readonly src: "7247:20:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26008;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7247:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26011;
                        readonly mutability: "mutable";
                        readonly name: "_openVaultSharePrice";
                        readonly nameLocation: "7285:20:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26037;
                        readonly src: "7277:28:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26010;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7277:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26013;
                        readonly mutability: "mutable";
                        readonly name: "_closeVaultSharePrice";
                        readonly nameLocation: "7323:21:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26037;
                        readonly src: "7315:29:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26012;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7315:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26015;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "7362:16:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26037;
                        readonly src: "7354:24:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26014;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7354:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26017;
                        readonly mutability: "mutable";
                        readonly name: "_flatFee";
                        readonly nameLocation: "7396:8:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26037;
                        readonly src: "7388:16:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26016;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7388:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7208:202:137";
                };
                readonly returnParameters: {
                    readonly id: 26021;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26020;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26037;
                        readonly src: "7434:7:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26019;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7434:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7433:9:137";
                };
                readonly scope: 26070;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26069;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7727:550:137";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26068;
                    readonly nodeType: "Block";
                    readonly src: "7997:280:137";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [26055];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 26055;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "8015:6:137";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 26068;
                            readonly src: "8007:14:137";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 26054;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "8007:7:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 26065;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 26058;
                                readonly name: "_bondAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26039;
                                readonly src: "8079:11:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 26059;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26041;
                                readonly src: "8104:12:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 26060;
                                readonly name: "_openVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26043;
                                readonly src: "8130:20:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 26061;
                                readonly name: "_closeVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26045;
                                readonly src: "8164:21:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 26062;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26047;
                                readonly src: "8199:16:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 26063;
                                readonly name: "_flatFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26049;
                                readonly src: "8229:8:137";
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
                                    readonly id: 26056;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19567;
                                    readonly src: "8024:14:137";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$19567_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 26057;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "8039:26:137";
                                readonly memberName: "calculateShortProceedsDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 19218;
                                readonly src: "8024:41:137";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 26064;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8024:223:137";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "8007:240:137";
                    }, {
                        readonly expression: {
                            readonly id: 26066;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 26055;
                            readonly src: "8264:6:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 26053;
                        readonly id: 26067;
                        readonly nodeType: "Return";
                        readonly src: "8257:13:137";
                    }];
                };
                readonly functionSelector: "e7acd3ad";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateShortProceedsDown";
                readonly nameLocation: "7736:26:137";
                readonly parameters: {
                    readonly id: 26050;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26039;
                        readonly mutability: "mutable";
                        readonly name: "_bondAmount";
                        readonly nameLocation: "7780:11:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26069;
                        readonly src: "7772:19:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26038;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7772:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26041;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "7809:12:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26069;
                        readonly src: "7801:20:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26040;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7801:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26043;
                        readonly mutability: "mutable";
                        readonly name: "_openVaultSharePrice";
                        readonly nameLocation: "7839:20:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26069;
                        readonly src: "7831:28:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26042;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7831:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26045;
                        readonly mutability: "mutable";
                        readonly name: "_closeVaultSharePrice";
                        readonly nameLocation: "7877:21:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26069;
                        readonly src: "7869:29:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26044;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7869:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26047;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "7916:16:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26069;
                        readonly src: "7908:24:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26046;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7908:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26049;
                        readonly mutability: "mutable";
                        readonly name: "_flatFee";
                        readonly nameLocation: "7950:8:137";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26069;
                        readonly src: "7942:16:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26048;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7942:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7762:202:137";
                };
                readonly returnParameters: {
                    readonly id: 26053;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26052;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26069;
                        readonly src: "7988:7:137";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26051;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7988:7:137";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7987:9:137";
                };
                readonly scope: 26070;
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
            readonly linearizedBaseContracts: readonly [26070];
            readonly name: "MockHyperdriveMath";
            readonly nameLocation: "217:18:137";
            readonly scope: 26071;
            readonly usedErrors: readonly [10219, 10228, 10258, 10314];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 137;
};
//# sourceMappingURL=MockHyperdriveMath.d.ts.map