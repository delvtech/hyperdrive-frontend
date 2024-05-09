export declare const IRocketNetworkBalances: {
    abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_block";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_totalEth";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_stakingEth";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_rethSupply";
            readonly type: "uint256";
        }];
        readonly name: "executeUpdateBalances";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getBalancesBlock";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getETHUtilizationRate";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getLatestReportableBlock";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getStakingETHBalance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getTotalETHBalance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getTotalRETHSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_block";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_total";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_staking";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_rethSupply";
            readonly type: "uint256";
        }];
        readonly name: "submitBalances";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "executeUpdateBalances(uint256,uint256,uint256,uint256)": "56ff3625";
        readonly "getBalancesBlock()": "9100c13d";
        readonly "getETHUtilizationRate()": "9dba66af";
        readonly "getLatestReportableBlock()": "a9bb16ed";
        readonly "getStakingETHBalance()": "f1eda634";
        readonly "getTotalETHBalance()": "964d042c";
        readonly "getTotalRETHSupply()": "c4c8d0ad";
        readonly "submitBalances(uint256,uint256,uint256,uint256)": "32db5470";
    };
};
//# sourceMappingURL=IRocketNetworkBalances.d.ts.map