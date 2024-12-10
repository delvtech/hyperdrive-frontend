export declare const HyperdriveRegistry: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "admin";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
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
            readonly name: "factories";
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
            readonly name: "info";
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
            readonly name: "info";
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
            readonly name: "info";
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
            readonly name: "info";
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
            readonly name: "info";
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
            readonly name: "info";
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
            readonly name: "info";
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
            readonly name: "info";
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
            readonly name: "instances";
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
        readonly name: "initialize";
        readonly inputs: readonly [{
            readonly name: "_name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "_admin";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "isInitialized";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
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
        readonly stateMutability: "view";
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
        readonly name: "setFactoryInfo";
        readonly inputs: readonly [{
            readonly name: "__factories";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "_data";
            readonly type: "uint128[]";
            readonly internalType: "uint128[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setInstanceInfo";
        readonly inputs: readonly [{
            readonly name: "__instances";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "_data";
            readonly type: "uint128[]";
            readonly internalType: "uint128[]";
        }, {
            readonly name: "__factories";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateAdmin";
        readonly inputs: readonly [{
            readonly name: "_admin";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateName";
        readonly inputs: readonly [{
            readonly name: "_name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "version";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
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
    }, {
        readonly type: "error";
        readonly name: "EndIndexTooLarge";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InputLengthMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidFactory";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidIndexes";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "RegistryAlreadyInitialized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "Unauthorized";
        readonly inputs: readonly [];
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "admin()": "f851a440";
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
        readonly "initialize(string,address)": "7ab4339d";
        readonly "isInitialized()": "392e53cd";
        readonly "kind()": "04baa00b";
        readonly "name()": "06fdde03";
        readonly "setFactoryInfo(address[],uint128[])": "e967e388";
        readonly "setInstanceInfo(address[],uint128[],address[])": "1ff30ad2";
        readonly "updateAdmin(address)": "e2f273bd";
        readonly "updateName(string)": "84da92a7";
        readonly "version()": "54fd4d50";
    };
};
//# sourceMappingURL=HyperdriveRegistry.d.ts.map