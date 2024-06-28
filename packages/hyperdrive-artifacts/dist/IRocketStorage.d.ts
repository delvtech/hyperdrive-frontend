export declare const IRocketStorage: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "addUint";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "confirmGuardian";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "confirmWithdrawalAddress";
        readonly inputs: readonly [{
            readonly name: "_nodeAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "deleteAddress";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "deleteBool";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "deleteBytes";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "deleteBytes32";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "deleteInt";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "deleteString";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "deleteUint";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getAddress";
        readonly inputs: readonly [{
            readonly name: "_key";
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
        readonly name: "getBool";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getBytes";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getBytes32";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getDeployedStatus";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getGuardian";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getInt";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getNodePendingWithdrawalAddress";
        readonly inputs: readonly [{
            readonly name: "_nodeAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getNodeWithdrawalAddress";
        readonly inputs: readonly [{
            readonly name: "_nodeAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getString";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getUint";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setAddress";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_value";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setBool";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_value";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setBytes";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_value";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setBytes32";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_value";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setGuardian";
        readonly inputs: readonly [{
            readonly name: "_newAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setInt";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_value";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setString";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_value";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setUint";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setWithdrawalAddress";
        readonly inputs: readonly [{
            readonly name: "_nodeAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_newWithdrawalAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_confirm";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "subUint";
        readonly inputs: readonly [{
            readonly name: "_key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "addUint(bytes32,uint256)": "adb353dc";
        readonly "confirmGuardian()": "1e0ea61e";
        readonly "confirmWithdrawalAddress(address)": "bd439126";
        readonly "deleteAddress(bytes32)": "0e14a376";
        readonly "deleteBool(bytes32)": "2c62ff2d";
        readonly "deleteBytes(bytes32)": "616b59f6";
        readonly "deleteBytes32(bytes32)": "0b9adc57";
        readonly "deleteInt(bytes32)": "8c160095";
        readonly "deleteString(bytes32)": "f6bb3cc4";
        readonly "deleteUint(bytes32)": "e2b202bf";
        readonly "getAddress(bytes32)": "21f8a721";
        readonly "getBool(bytes32)": "7ae1cfca";
        readonly "getBytes(bytes32)": "c031a180";
        readonly "getBytes32(bytes32)": "a6ed563e";
        readonly "getDeployedStatus()": "1bed5241";
        readonly "getGuardian()": "a75b87d2";
        readonly "getInt(bytes32)": "dc97d962";
        readonly "getNodePendingWithdrawalAddress(address)": "fd412513";
        readonly "getNodeWithdrawalAddress(address)": "5b49ff62";
        readonly "getString(bytes32)": "986e791a";
        readonly "getUint(bytes32)": "bd02d0f5";
        readonly "setAddress(bytes32,address)": "ca446dd9";
        readonly "setBool(bytes32,bool)": "abfdcced";
        readonly "setBytes(bytes32,bytes)": "2e28d084";
        readonly "setBytes32(bytes32,bytes32)": "4e91db08";
        readonly "setGuardian(address)": "8a0dac4a";
        readonly "setInt(bytes32,int256)": "3e49bed0";
        readonly "setString(bytes32,string)": "6e899550";
        readonly "setUint(bytes32,uint256)": "e2a4853a";
        readonly "setWithdrawalAddress(address,address,bool)": "a543ccea";
        readonly "subUint(bytes32,uint256)": "ebb9d8c9";
    };
};
//# sourceMappingURL=IRocketStorage.d.ts.map