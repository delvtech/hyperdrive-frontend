export declare const IMorphoStaticTyping: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "DOMAIN_SEPARATOR";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "accrueInterest";
        readonly inputs: readonly [{
            readonly name: "marketParams";
            readonly type: "tuple";
            readonly internalType: "struct MarketParams";
            readonly components: readonly [{
                readonly name: "loanToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "collateralToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "oracle";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "irm";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "lltv";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "borrow";
        readonly inputs: readonly [{
            readonly name: "marketParams";
            readonly type: "tuple";
            readonly internalType: "struct MarketParams";
            readonly components: readonly [{
                readonly name: "loanToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "collateralToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "oracle";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "irm";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "lltv";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "onBehalf";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "assetsBorrowed";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "sharesBorrowed";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "createMarket";
        readonly inputs: readonly [{
            readonly name: "marketParams";
            readonly type: "tuple";
            readonly internalType: "struct MarketParams";
            readonly components: readonly [{
                readonly name: "loanToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "collateralToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "oracle";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "irm";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "lltv";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "enableIrm";
        readonly inputs: readonly [{
            readonly name: "irm";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "enableLltv";
        readonly inputs: readonly [{
            readonly name: "lltv";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "extSloads";
        readonly inputs: readonly [{
            readonly name: "slots";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "feeRecipient";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "flashLoan";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "idToMarketParams";
        readonly inputs: readonly [{
            readonly name: "id";
            readonly type: "bytes32";
            readonly internalType: "Id";
        }];
        readonly outputs: readonly [{
            readonly name: "loanToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "collateralToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "oracle";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "irm";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "lltv";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isAuthorized";
        readonly inputs: readonly [{
            readonly name: "authorizer";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "authorized";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isIrmEnabled";
        readonly inputs: readonly [{
            readonly name: "irm";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isLltvEnabled";
        readonly inputs: readonly [{
            readonly name: "lltv";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "liquidate";
        readonly inputs: readonly [{
            readonly name: "marketParams";
            readonly type: "tuple";
            readonly internalType: "struct MarketParams";
            readonly components: readonly [{
                readonly name: "loanToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "collateralToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "oracle";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "irm";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "lltv";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "borrower";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "seizedAssets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "repaidShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "market";
        readonly inputs: readonly [{
            readonly name: "id";
            readonly type: "bytes32";
            readonly internalType: "Id";
        }];
        readonly outputs: readonly [{
            readonly name: "totalSupplyAssets";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "totalSupplyShares";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "totalBorrowAssets";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "totalBorrowShares";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "lastUpdate";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "fee";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "nonce";
        readonly inputs: readonly [{
            readonly name: "authorizer";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "position";
        readonly inputs: readonly [{
            readonly name: "id";
            readonly type: "bytes32";
            readonly internalType: "Id";
        }, {
            readonly name: "user";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "supplyShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "borrowShares";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "collateral";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "repay";
        readonly inputs: readonly [{
            readonly name: "marketParams";
            readonly type: "tuple";
            readonly internalType: "struct MarketParams";
            readonly components: readonly [{
                readonly name: "loanToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "collateralToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "oracle";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "irm";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "lltv";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "onBehalf";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "assetsRepaid";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "sharesRepaid";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setAuthorization";
        readonly inputs: readonly [{
            readonly name: "authorized";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "newIsAuthorized";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setAuthorizationWithSig";
        readonly inputs: readonly [{
            readonly name: "authorization";
            readonly type: "tuple";
            readonly internalType: "struct Authorization";
            readonly components: readonly [{
                readonly name: "authorizer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "authorized";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "isAuthorized";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "signature";
            readonly type: "tuple";
            readonly internalType: "struct Signature";
            readonly components: readonly [{
                readonly name: "v";
                readonly type: "uint8";
                readonly internalType: "uint8";
            }, {
                readonly name: "r";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "s";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setFee";
        readonly inputs: readonly [{
            readonly name: "marketParams";
            readonly type: "tuple";
            readonly internalType: "struct MarketParams";
            readonly components: readonly [{
                readonly name: "loanToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "collateralToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "oracle";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "irm";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "lltv";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "newFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setFeeRecipient";
        readonly inputs: readonly [{
            readonly name: "newFeeRecipient";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setOwner";
        readonly inputs: readonly [{
            readonly name: "newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "supply";
        readonly inputs: readonly [{
            readonly name: "marketParams";
            readonly type: "tuple";
            readonly internalType: "struct MarketParams";
            readonly components: readonly [{
                readonly name: "loanToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "collateralToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "oracle";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "irm";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "lltv";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "onBehalf";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "assetsSupplied";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "sharesSupplied";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "supplyCollateral";
        readonly inputs: readonly [{
            readonly name: "marketParams";
            readonly type: "tuple";
            readonly internalType: "struct MarketParams";
            readonly components: readonly [{
                readonly name: "loanToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "collateralToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "oracle";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "irm";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "lltv";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "onBehalf";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "withdraw";
        readonly inputs: readonly [{
            readonly name: "marketParams";
            readonly type: "tuple";
            readonly internalType: "struct MarketParams";
            readonly components: readonly [{
                readonly name: "loanToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "collateralToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "oracle";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "irm";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "lltv";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "onBehalf";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "assetsWithdrawn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "sharesWithdrawn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "withdrawCollateral";
        readonly inputs: readonly [{
            readonly name: "marketParams";
            readonly type: "tuple";
            readonly internalType: "struct MarketParams";
            readonly components: readonly [{
                readonly name: "loanToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "collateralToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "oracle";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "irm";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "lltv";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "onBehalf";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "DOMAIN_SEPARATOR()": "3644e515";
        readonly "accrueInterest((address,address,address,address,uint256))": "151c1ade";
        readonly "borrow((address,address,address,address,uint256),uint256,uint256,address,address)": "50d8cd4b";
        readonly "createMarket((address,address,address,address,uint256))": "8c1358a2";
        readonly "enableIrm(address)": "5a64f51e";
        readonly "enableLltv(uint256)": "4d98a93b";
        readonly "extSloads(bytes32[])": "7784c685";
        readonly "feeRecipient()": "46904840";
        readonly "flashLoan(address,uint256,bytes)": "e0232b42";
        readonly "idToMarketParams(bytes32)": "2c3c9157";
        readonly "isAuthorized(address,address)": "65e4ad9e";
        readonly "isIrmEnabled(address)": "f2b863ce";
        readonly "isLltvEnabled(uint256)": "b485f3b8";
        readonly "liquidate((address,address,address,address,uint256),address,uint256,uint256,bytes)": "d8eabcb8";
        readonly "market(bytes32)": "5c60e39a";
        readonly "nonce(address)": "70ae92d2";
        readonly "owner()": "8da5cb5b";
        readonly "position(bytes32,address)": "93c52062";
        readonly "repay((address,address,address,address,uint256),uint256,uint256,address,bytes)": "20b76e81";
        readonly "setAuthorization(address,bool)": "eecea000";
        readonly "setAuthorizationWithSig((address,address,bool,uint256,uint256),(uint8,bytes32,bytes32))": "8069218f";
        readonly "setFee((address,address,address,address,uint256),uint256)": "2b4f013c";
        readonly "setFeeRecipient(address)": "e74b981b";
        readonly "setOwner(address)": "13af4035";
        readonly "supply((address,address,address,address,uint256),uint256,uint256,address,bytes)": "a99aad89";
        readonly "supplyCollateral((address,address,address,address,uint256),uint256,address,bytes)": "238d6579";
        readonly "withdraw((address,address,address,address,uint256),uint256,uint256,address,address)": "5c2bea49";
        readonly "withdrawCollateral((address,address,address,address,uint256),uint256,address,address)": "8720316d";
    };
};
//# sourceMappingURL=IMorphoStaticTyping.d.ts.map