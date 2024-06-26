export declare const stdStorageSafe: {
    abi: readonly [{
        readonly type: "event";
        readonly name: "SlotFound";
        readonly inputs: readonly [{
            readonly name: "who";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fsig";
            readonly type: "bytes4";
            readonly indexed: false;
            readonly internalType: "bytes4";
        }, {
            readonly name: "keysHash";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "slot";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "WARNING_UninitedSlot";
        readonly inputs: readonly [{
            readonly name: "who";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "slot";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {};
};
//# sourceMappingURL=stdStorageSafe.d.ts.map