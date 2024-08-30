export declare const ILiquidityPool: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "addEthAmountLockedForWithdrawal";
        readonly inputs: readonly [{
            readonly name: "_amount";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "amountForShare";
        readonly inputs: readonly [{
            readonly name: "_share";
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
        readonly name: "deposit";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "deposit";
        readonly inputs: readonly [{
            readonly name: "_referral";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "deposit";
        readonly inputs: readonly [{
            readonly name: "_user";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_referral";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "depositToRecipient";
        readonly inputs: readonly [{
            readonly name: "_recipient";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_referral";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "eETH";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IEETH";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getTotalEtherClaimOf";
        readonly inputs: readonly [{
            readonly name: "_user";
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
        readonly name: "getTotalPooledEther";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "numPendingDeposits";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "rebase";
        readonly inputs: readonly [{
            readonly name: "_accruedRewards";
            readonly type: "int128";
            readonly internalType: "int128";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "reduceEthAmountLockedForWithdrawal";
        readonly inputs: readonly [{
            readonly name: "_amount";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "sharesForAmount";
        readonly inputs: readonly [{
            readonly name: "_amount";
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
        readonly name: "sharesForWithdrawalAmount";
        readonly inputs: readonly [{
            readonly name: "_amount";
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
        readonly name: "totalValueInLp";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "totalValueOutOfLp";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }];
        readonly stateMutability: "view";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "addEthAmountLockedForWithdrawal(uint128)": "1665f66d";
        readonly "amountForShare(uint256)": "561bddf8";
        readonly "deposit()": "d0e30db0";
        readonly "deposit(address)": "f340fa01";
        readonly "deposit(address,address)": "f9609f08";
        readonly "depositToRecipient(address,uint256,address)": "b46a130e";
        readonly "eETH()": "0de371e2";
        readonly "getTotalEtherClaimOf(address)": "51199700";
        readonly "getTotalPooledEther()": "37cfdaca";
        readonly "numPendingDeposits()": "e4537934";
        readonly "rebase(int128)": "c00b2d61";
        readonly "reduceEthAmountLockedForWithdrawal(uint128)": "8a1b58b1";
        readonly "sharesForAmount(uint256)": "3a53acb0";
        readonly "sharesForWithdrawalAmount(uint256)": "917266fa";
        readonly "totalValueInLp()": "7c90fbf0";
        readonly "totalValueOutOfLp()": "456a23a6";
    };
};
//# sourceMappingURL=ILiquidityPool.d.ts.map