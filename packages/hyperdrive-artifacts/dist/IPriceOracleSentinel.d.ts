export declare const IPriceOracleSentinel: {
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
        readonly name: "getGracePeriod";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getSequencerOracle";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isBorrowAllowed";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isLiquidationAllowed";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setGracePeriod";
        readonly inputs: readonly [{
            readonly name: "newGracePeriod";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setSequencerOracle";
        readonly inputs: readonly [{
            readonly name: "newSequencerOracle";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "GracePeriodUpdated";
        readonly inputs: readonly [{
            readonly name: "newGracePeriod";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "SequencerOracleUpdated";
        readonly inputs: readonly [{
            readonly name: "newSequencerOracle";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "ADDRESSES_PROVIDER()": "0542975c";
        readonly "getGracePeriod()": "dbd18388";
        readonly "getSequencerOracle()": "12168dc2";
        readonly "isBorrowAllowed()": "49aa2e81";
        readonly "isLiquidationAllowed()": "7a5d20ea";
        readonly "setGracePeriod(uint256)": "f2f65960";
        readonly "setSequencerOracle(address)": "f0aef31c";
    };
};
//# sourceMappingURL=IPriceOracleSentinel.d.ts.map