export declare const IRestakeManager: {
    abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "calculateTVLs";
        readonly outputs: readonly [{
            readonly internalType: "uint256[][]";
            readonly name: "";
            readonly type: "uint256[][]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "depositETH";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ezETH";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renzoOracle";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
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