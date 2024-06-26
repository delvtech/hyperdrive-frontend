export declare const IHyperdriveRegistry: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "getFactoriesInRange";
        readonly inputs: readonly [{
            readonly name: "_startIndex";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_endIndex";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getFactoryAtIndex";
        readonly inputs: readonly [{
            readonly name: "_index";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getFactoryInfo";
        readonly inputs: readonly [{
            readonly name: "_factory";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdriveRegistry.FactoryInfo";
            readonly components: readonly [{
                readonly name: "data";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getFactoryInfoWithMetadata";
        readonly inputs: readonly [{
            readonly name: "_factory";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdriveRegistry.FactoryInfoWithMetadata";
            readonly components: readonly [{
                readonly name: "data";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "name";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "kind";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "version";
                readonly type: "string";
                readonly internalType: "string";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getFactoryInfos";
        readonly inputs: readonly [{
            readonly name: "__factories";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple[]";
            readonly internalType: "struct IHyperdriveRegistry.FactoryInfo[]";
            readonly components: readonly [{
                readonly name: "data";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getFactoryInfosWithMetadata";
        readonly inputs: readonly [{
            readonly name: "__factories";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple[]";
            readonly internalType: "struct IHyperdriveRegistry.FactoryInfoWithMetadata[]";
            readonly components: readonly [{
                readonly name: "data";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "name";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "kind";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "version";
                readonly type: "string";
                readonly internalType: "string";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getInstanceAtIndex";
        readonly inputs: readonly [{
            readonly name: "_index";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getInstanceInfo";
        readonly inputs: readonly [{
            readonly name: "_instance";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdriveRegistry.InstanceInfo";
            readonly components: readonly [{
                readonly name: "data";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "factory";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getInstanceInfoWithMetadata";
        readonly inputs: readonly [{
            readonly name: "_instance";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdriveRegistry.InstanceInfoWithMetadata";
            readonly components: readonly [{
                readonly name: "data";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "factory";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "name";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "kind";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "version";
                readonly type: "string";
                readonly internalType: "string";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getInstanceInfos";
        readonly inputs: readonly [{
            readonly name: "__instances";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple[]";
            readonly internalType: "struct IHyperdriveRegistry.InstanceInfo[]";
            readonly components: readonly [{
                readonly name: "data";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "factory";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getInstanceInfosWithMetadata";
        readonly inputs: readonly [{
            readonly name: "__instances";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple[]";
            readonly internalType: "struct IHyperdriveRegistry.InstanceInfoWithMetadata[]";
            readonly components: readonly [{
                readonly name: "data";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "factory";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "name";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "kind";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "version";
                readonly type: "string";
                readonly internalType: "string";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getInstancesInRange";
        readonly inputs: readonly [{
            readonly name: "_startIndex";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_endIndex";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getNumberOfFactories";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getNumberOfInstances";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "kind";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "name";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "version";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "getFactoriesInRange(uint256,uint256)": "716ba5f6";
        readonly "getFactoryAtIndex(uint256)": "a587bbe1";
        readonly "getFactoryInfo(address)": "9b724ad4";
        readonly "getFactoryInfoWithMetadata(address)": "f32c9e34";
        readonly "getFactoryInfos(address[])": "ea350321";
        readonly "getFactoryInfosWithMetadata(address[])": "b73e3fab";
        readonly "getInstanceAtIndex(uint256)": "daac24da";
        readonly "getInstanceInfo(address)": "18bb3b54";
        readonly "getInstanceInfoWithMetadata(address)": "2ad19de8";
        readonly "getInstanceInfos(address[])": "4db6c0e0";
        readonly "getInstanceInfosWithMetadata(address[])": "d2f72d52";
        readonly "getInstancesInRange(uint256,uint256)": "bc30e7a1";
        readonly "getNumberOfFactories()": "f59d00b9";
        readonly "getNumberOfInstances()": "6e95d67c";
        readonly "kind()": "04baa00b";
        readonly "name()": "06fdde03";
        readonly "version()": "54fd4d50";
    };
};
//# sourceMappingURL=IHyperdriveRegistry.d.ts.map