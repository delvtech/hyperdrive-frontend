export declare const IPoolAddressesProvider: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "getACLAdmin";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getACLManager";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getAddress";
        readonly inputs: readonly [{
            readonly name: "id";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getMarketId";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getPool";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getPoolConfigurator";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getPoolDataProvider";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getPriceOracle";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getPriceOracleSentinel";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setACLAdmin";
        readonly inputs: readonly [{
            readonly name: "newAclAdmin";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setACLManager";
        readonly inputs: readonly [{
            readonly name: "newAclManager";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setAddress";
        readonly inputs: readonly [{
            readonly name: "id";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "newAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setAddressAsProxy";
        readonly inputs: readonly [{
            readonly name: "id";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "newImplementationAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setMarketId";
        readonly inputs: readonly [{
            readonly name: "newMarketId";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setPoolConfiguratorImpl";
        readonly inputs: readonly [{
            readonly name: "newPoolConfiguratorImpl";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setPoolDataProvider";
        readonly inputs: readonly [{
            readonly name: "newDataProvider";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setPoolImpl";
        readonly inputs: readonly [{
            readonly name: "newPoolImpl";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setPriceOracle";
        readonly inputs: readonly [{
            readonly name: "newPriceOracle";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setPriceOracleSentinel";
        readonly inputs: readonly [{
            readonly name: "newPriceOracleSentinel";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "ACLAdminUpdated";
        readonly inputs: readonly [{
            readonly name: "oldAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ACLManagerUpdated";
        readonly inputs: readonly [{
            readonly name: "oldAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "AddressSet";
        readonly inputs: readonly [{
            readonly name: "id";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "oldAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "AddressSetAsProxy";
        readonly inputs: readonly [{
            readonly name: "id";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "proxyAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "oldImplementationAddress";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "newImplementationAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "MarketIdSet";
        readonly inputs: readonly [{
            readonly name: "oldMarketId";
            readonly type: "string";
            readonly indexed: true;
            readonly internalType: "string";
        }, {
            readonly name: "newMarketId";
            readonly type: "string";
            readonly indexed: true;
            readonly internalType: "string";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "PoolConfiguratorUpdated";
        readonly inputs: readonly [{
            readonly name: "oldAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "PoolDataProviderUpdated";
        readonly inputs: readonly [{
            readonly name: "oldAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "PoolUpdated";
        readonly inputs: readonly [{
            readonly name: "oldAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "PriceOracleSentinelUpdated";
        readonly inputs: readonly [{
            readonly name: "oldAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "PriceOracleUpdated";
        readonly inputs: readonly [{
            readonly name: "oldAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ProxyCreated";
        readonly inputs: readonly [{
            readonly name: "id";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "proxyAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "implementationAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "getACLAdmin()": "0e67178c";
        readonly "getACLManager()": "707cd716";
        readonly "getAddress(bytes32)": "21f8a721";
        readonly "getMarketId()": "568ef470";
        readonly "getPool()": "026b1d5f";
        readonly "getPoolConfigurator()": "631adfca";
        readonly "getPoolDataProvider()": "e860accb";
        readonly "getPriceOracle()": "fca513a8";
        readonly "getPriceOracleSentinel()": "5eb88d3d";
        readonly "setACLAdmin(address)": "76d84ffc";
        readonly "setACLManager(address)": "ed301ca9";
        readonly "setAddress(bytes32,address)": "ca446dd9";
        readonly "setAddressAsProxy(bytes32,address)": "5dcc528c";
        readonly "setMarketId(string)": "f67b1847";
        readonly "setPoolConfiguratorImpl(address)": "e4ca28b7";
        readonly "setPoolDataProvider(address)": "e44e9ed1";
        readonly "setPoolImpl(address)": "a1564406";
        readonly "setPriceOracle(address)": "530e784f";
        readonly "setPriceOracleSentinel(address)": "74944cec";
    };
};
//# sourceMappingURL=IPoolAddressesProvider.d.ts.map