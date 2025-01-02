export declare const IFlashLoanReceiver: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "ADDRESSES_PROVIDER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IPoolAddressesProvider";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "POOL";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IPool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "executeOperation";
        readonly inputs: readonly [{
            readonly name: "assets";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "amounts";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "premiums";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "initiator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "params";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "ADDRESSES_PROVIDER()": "0542975c";
        readonly "POOL()": "7535d246";
        readonly "executeOperation(address[],uint256[],uint256[],address,bytes)": "920f5c84";
    };
};
//# sourceMappingURL=IFlashLoanReceiver.d.ts.map