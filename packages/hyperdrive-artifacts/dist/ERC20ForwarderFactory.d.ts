export declare const ERC20ForwarderFactory: {
    abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "ERC20LINK_HASH";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "create";
        readonly inputs: readonly [{
            readonly name: "__token";
            readonly type: "address";
            readonly internalType: "contract IMultiToken";
        }, {
            readonly name: "__tokenId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IERC20Forwarder";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getDeployDetails";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IMultiToken";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getForwarder";
        readonly inputs: readonly [{
            readonly name: "__token";
            readonly type: "address";
            readonly internalType: "contract IMultiToken";
        }, {
            readonly name: "__tokenId";
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
        readonly name: "version";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "error";
        readonly name: "InvalidForwarderAddress";
        readonly inputs: readonly [];
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "ERC20LINK_HASH()": "d13053bb";
        readonly "create(address,uint256)": "0ecaea73";
        readonly "getDeployDetails()": "600eb4ba";
        readonly "getForwarder(address,uint256)": "0710fd58";
        readonly "kind()": "04baa00b";
        readonly "name()": "06fdde03";
        readonly "version()": "54fd4d50";
    };
};
//# sourceMappingURL=ERC20ForwarderFactory.d.ts.map