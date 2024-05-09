export declare const IDepositQueue: {
    abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "depositETHFromProtocol";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "tokenAddress";
            readonly type: "address";
        }];
        readonly name: "totalEarned";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "depositETHFromProtocol()": "d123ccd5";
        readonly "totalEarned(address)": "649aca4a";
    };
};
//# sourceMappingURL=IDepositQueue.d.ts.map