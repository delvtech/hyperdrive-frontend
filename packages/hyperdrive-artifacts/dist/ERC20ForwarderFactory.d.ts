export declare const ERC20ForwarderFactory: {
    abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "InvalidForwarderAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ERC20LINK_HASH";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IMultiToken";
            readonly name: "__token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "__tokenId";
            readonly type: "uint256";
        }];
        readonly name: "create";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20Forwarder";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getDeployDetails";
        readonly outputs: readonly [{
            readonly internalType: "contract IMultiToken";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IMultiToken";
            readonly name: "__token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "__tokenId";
            readonly type: "uint256";
        }];
        readonly name: "getForwarder";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "ERC20LINK_HASH()": "d13053bb";
        readonly "create(address,uint256)": "0ecaea73";
        readonly "getDeployDetails()": "600eb4ba";
        readonly "getForwarder(address,uint256)": "0710fd58";
    };
};
//# sourceMappingURL=ERC20ForwarderFactory.d.ts.map