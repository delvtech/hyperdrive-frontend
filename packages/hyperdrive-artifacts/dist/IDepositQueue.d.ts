export declare const IDepositQueue: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "depositETHFromProtocol";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "totalEarned";
        readonly inputs: readonly [{
            readonly name: "tokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "depositETHFromProtocol()": "d123ccd5";
        readonly "totalEarned(address)": "649aca4a";
    };
};
//# sourceMappingURL=IDepositQueue.d.ts.map