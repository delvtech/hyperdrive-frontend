export declare const IRestakeManager: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "calculateTVLs";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256[][]";
            readonly internalType: "uint256[][]";
        }, {
            readonly name: "";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "depositETH";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "ezETH";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "renzoOracle";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "calculateTVLs()": "ff9969cd";
        readonly "depositETH()": "f6326fb3";
        readonly "ezETH()": "13a73c78";
        readonly "renzoOracle()": "892866a4";
    };
};
//# sourceMappingURL=IRestakeManager.d.ts.map