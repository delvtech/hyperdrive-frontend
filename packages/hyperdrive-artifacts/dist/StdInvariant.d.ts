export declare const StdInvariant: {
    abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "excludeArtifacts";
        readonly outputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "excludedArtifacts_";
            readonly type: "string[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "excludeContracts";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "excludedContracts_";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "excludeSenders";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "excludedSenders_";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "targetArtifactSelectors";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "addr";
                readonly type: "address";
            }, {
                readonly internalType: "bytes4[]";
                readonly name: "selectors";
                readonly type: "bytes4[]";
            }];
            readonly internalType: "struct StdInvariant.FuzzSelector[]";
            readonly name: "targetedArtifactSelectors_";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "targetArtifacts";
        readonly outputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "targetedArtifacts_";
            readonly type: "string[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "targetContracts";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "targetedContracts_";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "targetSelectors";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "addr";
                readonly type: "address";
            }, {
                readonly internalType: "bytes4[]";
                readonly name: "selectors";
                readonly type: "bytes4[]";
            }];
            readonly internalType: "struct StdInvariant.FuzzSelector[]";
            readonly name: "targetedSelectors_";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "targetSenders";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "targetedSenders_";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "excludeArtifacts()": "b5508aa9";
        readonly "excludeContracts()": "e20c9f71";
        readonly "excludeSenders()": "1ed7831c";
        readonly "targetArtifactSelectors()": "66d9a9a0";
        readonly "targetArtifacts()": "85226c81";
        readonly "targetContracts()": "3f7286f4";
        readonly "targetSelectors()": "916a17c6";
        readonly "targetSenders()": "3e5e3c23";
    };
};
//# sourceMappingURL=StdInvariant.d.ts.map