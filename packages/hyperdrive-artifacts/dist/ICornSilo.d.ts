export declare const ICornSilo: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "addApprovedToken";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "bridgeAllTokens";
        readonly inputs: readonly [{
            readonly name: "recipient";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "cost";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "maxGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "gasPriceBid";
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
        readonly name: "bridgeToken";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "recipient";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "maxGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "gasPriceBid";
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
        readonly name: "deposit";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "depositFor";
        readonly inputs: readonly [{
            readonly name: "recipient";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "enableBridge";
        readonly inputs: readonly [{
            readonly name: "gatewayRouter";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "erc20Inbox";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "swapFacilityVault";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "from18DecimalsToAssetDecimals";
        readonly inputs: readonly [{
            readonly name: "amountIn18Decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "fromAssetDecimalsTo18Decimals";
        readonly inputs: readonly [{
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getApprovedTokens";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getGatewayRouter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "gatewayRouter";
            readonly type: "address";
            readonly internalType: "contract IGatewayRouter";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "mintAndDepositBitcorn";
        readonly inputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "mintAndDepositBitcornFor";
        readonly inputs: readonly [{
            readonly name: "recipient";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "pause";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "redeemAll";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "approvedTokens";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "depositedAssets";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "bitcornShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "minterAssetReturned";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "redeemBitcorn";
        readonly inputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "redeemToken";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "sharesOf";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "token";
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
        readonly name: "totalShares";
        readonly inputs: readonly [{
            readonly name: "token";
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
        readonly name: "unpause";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "BridgeEnabled";
        readonly inputs: readonly [{
            readonly name: "gatewayRouter";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "swapFacilityVault";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "TokenBridged";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "user";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "recipient";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "maxGas";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "gasPriceBid";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "TokenDeposited";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "token";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "assets";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "shares";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "TokenWithdrawn";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "token";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "assets";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "shares";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "BelowOneSatoshiOfShares";
        readonly inputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "oneSatoshiOfBitcornShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "BitcornMinterAssetMustNotBeApprovedToken";
        readonly inputs: readonly [{
            readonly name: "bitcornMinterAsset";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "BitcornMustNotBeApprovedToken";
        readonly inputs: readonly [{
            readonly name: "bitcorn";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "BridgeIsEnabled";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "BridgeIsNotSet";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "BridgeNotEnabled";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientBitcornSharesToBridge";
        readonly inputs: readonly [{
            readonly name: "cachedShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "requiredShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InsufficientShares";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "cachedShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "SharesNotMultipleOfOneSatoshi";
        readonly inputs: readonly [{
            readonly name: "bitcornShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "oneSatoshiOfBitcornShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "TokenAlreadyApproved";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "TokenNotApproved";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "WithdrawalFeeAboveMax";
        readonly inputs: readonly [{
            readonly name: "fee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "ZeroDeposit";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "ZeroShares";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "ZeroSharesForAnyToken";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "ZeroWithdraw";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "addApprovedToken(address)": "cd10534b";
        readonly "bridgeAllTokens(address,uint256,uint256,uint256,bytes)": "3d169812";
        readonly "bridgeToken(address,address,uint256,uint256,bytes)": "b9d64e9f";
        readonly "deposit(address,uint256)": "47e7ef24";
        readonly "depositFor(address,address,uint256)": "b3db428b";
        readonly "enableBridge(address,address,address)": "15ec1f6f";
        readonly "from18DecimalsToAssetDecimals(uint256)": "789680f4";
        readonly "fromAssetDecimalsTo18Decimals(uint256)": "101ab12c";
        readonly "getApprovedTokens()": "6afc0c5f";
        readonly "getGatewayRouter()": "87f0cf2e";
        readonly "mintAndDepositBitcorn(uint256)": "ce75d53e";
        readonly "mintAndDepositBitcornFor(address,uint256)": "55ae9046";
        readonly "pause()": "8456cb59";
        readonly "redeemAll()": "2f4350c2";
        readonly "redeemBitcorn(uint256)": "bdafe351";
        readonly "redeemToken(address,uint256)": "830cbbbd";
        readonly "sharesOf(address,address)": "0a7292f5";
        readonly "totalShares(address)": "bf6b874e";
        readonly "unpause()": "3f4ba83a";
    };
};
//# sourceMappingURL=ICornSilo.d.ts.map