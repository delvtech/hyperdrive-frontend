export declare const stdStorageSafe: {
    abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "who";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes4";
            readonly name: "fsig";
            readonly type: "bytes4";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "keysHash";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "slot";
            readonly type: "uint256";
        }];
        readonly name: "SlotFound";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "who";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "slot";
            readonly type: "uint256";
        }];
        readonly name: "WARNING_UninitedSlot";
        readonly type: "event";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {};
};
//# sourceMappingURL=stdStorageSafe.d.ts.map