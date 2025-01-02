export declare const IHyperdriveGovernedRegistryEvents: {
    abi: readonly [{
        readonly type: "event";
        readonly name: "AdminUpdated";
        readonly inputs: readonly [{
            readonly name: "admin";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "FactoryInfoUpdated";
        readonly inputs: readonly [{
            readonly name: "factory";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "data";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Initialized";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly indexed: true;
            readonly internalType: "string";
        }, {
            readonly name: "admin";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "InstanceInfoUpdated";
        readonly inputs: readonly [{
            readonly name: "instance";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "data";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "factory";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "NameUpdated";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly indexed: true;
            readonly internalType: "string";
        }];
        readonly anonymous: false;
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {};
};
//# sourceMappingURL=IHyperdriveGovernedRegistryEvents.d.ts.map