export declare const VmSafe: {
    abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }];
        readonly name: "accesses";
        readonly outputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "readSlots";
            readonly type: "bytes32[]";
        }, {
            readonly internalType: "bytes32[]";
            readonly name: "writeSlots";
            readonly type: "bytes32[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "privateKey";
            readonly type: "uint256";
        }];
        readonly name: "addr";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "keyAddr";
            readonly type: "address";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "condition";
            readonly type: "bool";
        }];
        readonly name: "assume";
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "char";
            readonly type: "string";
        }];
        readonly name: "breakpoint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "char";
            readonly type: "string";
        }, {
            readonly internalType: "bool";
            readonly name: "value";
            readonly type: "bool";
        }];
        readonly name: "breakpoint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "broadcast";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "signer";
            readonly type: "address";
        }];
        readonly name: "broadcast";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "privateKey";
            readonly type: "uint256";
        }];
        readonly name: "broadcast";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }];
        readonly name: "closeFile";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }, {
            readonly internalType: "bool";
            readonly name: "recursive";
            readonly type: "bool";
        }];
        readonly name: "createDir";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "mnemonic";
            readonly type: "string";
        }, {
            readonly internalType: "uint32";
            readonly name: "index";
            readonly type: "uint32";
        }];
        readonly name: "deriveKey";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "privateKey";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "mnemonic";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "derivationPath";
            readonly type: "string";
        }, {
            readonly internalType: "uint32";
            readonly name: "index";
            readonly type: "uint32";
        }];
        readonly name: "deriveKey";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "privateKey";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }];
        readonly name: "envAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "value";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "delim";
            readonly type: "string";
        }];
        readonly name: "envAddress";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "value";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }];
        readonly name: "envBool";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "value";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "delim";
            readonly type: "string";
        }];
        readonly name: "envBool";
        readonly outputs: readonly [{
            readonly internalType: "bool[]";
            readonly name: "value";
            readonly type: "bool[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }];
        readonly name: "envBytes";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "value";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "delim";
            readonly type: "string";
        }];
        readonly name: "envBytes";
        readonly outputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "value";
            readonly type: "bytes[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "delim";
            readonly type: "string";
        }];
        readonly name: "envBytes32";
        readonly outputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "value";
            readonly type: "bytes32[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }];
        readonly name: "envBytes32";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "value";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "delim";
            readonly type: "string";
        }];
        readonly name: "envInt";
        readonly outputs: readonly [{
            readonly internalType: "int256[]";
            readonly name: "value";
            readonly type: "int256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }];
        readonly name: "envInt";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "value";
            readonly type: "int256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "delim";
            readonly type: "string";
        }, {
            readonly internalType: "bytes32[]";
            readonly name: "defaultValue";
            readonly type: "bytes32[]";
        }];
        readonly name: "envOr";
        readonly outputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "value";
            readonly type: "bytes32[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "delim";
            readonly type: "string";
        }, {
            readonly internalType: "int256[]";
            readonly name: "defaultValue";
            readonly type: "int256[]";
        }];
        readonly name: "envOr";
        readonly outputs: readonly [{
            readonly internalType: "int256[]";
            readonly name: "value";
            readonly type: "int256[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "bool";
            readonly name: "defaultValue";
            readonly type: "bool";
        }];
        readonly name: "envOr";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "value";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "defaultValue";
            readonly type: "address";
        }];
        readonly name: "envOr";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "value";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "defaultValue";
            readonly type: "uint256";
        }];
        readonly name: "envOr";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "delim";
            readonly type: "string";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "defaultValue";
            readonly type: "bytes[]";
        }];
        readonly name: "envOr";
        readonly outputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "value";
            readonly type: "bytes[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "delim";
            readonly type: "string";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "defaultValue";
            readonly type: "uint256[]";
        }];
        readonly name: "envOr";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "value";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "delim";
            readonly type: "string";
        }, {
            readonly internalType: "string[]";
            readonly name: "defaultValue";
            readonly type: "string[]";
        }];
        readonly name: "envOr";
        readonly outputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "value";
            readonly type: "string[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "bytes";
            readonly name: "defaultValue";
            readonly type: "bytes";
        }];
        readonly name: "envOr";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "value";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "bytes32";
            readonly name: "defaultValue";
            readonly type: "bytes32";
        }];
        readonly name: "envOr";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "value";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "int256";
            readonly name: "defaultValue";
            readonly type: "int256";
        }];
        readonly name: "envOr";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "value";
            readonly type: "int256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "delim";
            readonly type: "string";
        }, {
            readonly internalType: "address[]";
            readonly name: "defaultValue";
            readonly type: "address[]";
        }];
        readonly name: "envOr";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "value";
            readonly type: "address[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "defaultValue";
            readonly type: "string";
        }];
        readonly name: "envOr";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "value";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "delim";
            readonly type: "string";
        }, {
            readonly internalType: "bool[]";
            readonly name: "defaultValue";
            readonly type: "bool[]";
        }];
        readonly name: "envOr";
        readonly outputs: readonly [{
            readonly internalType: "bool[]";
            readonly name: "value";
            readonly type: "bool[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "delim";
            readonly type: "string";
        }];
        readonly name: "envString";
        readonly outputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "value";
            readonly type: "string[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }];
        readonly name: "envString";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "value";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }];
        readonly name: "envUint";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "delim";
            readonly type: "string";
        }];
        readonly name: "envUint";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "value";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "commandInput";
            readonly type: "string[]";
        }];
        readonly name: "ffi";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "result";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }];
        readonly name: "fsMetadata";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bool";
                readonly name: "isDir";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isSymlink";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "length";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "readOnly";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "modified";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "accessed";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "created";
                readonly type: "uint256";
            }];
            readonly internalType: "struct VmSafe.FsMetadata";
            readonly name: "metadata";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "artifactPath";
            readonly type: "string";
        }];
        readonly name: "getCode";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "creationBytecode";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "artifactPath";
            readonly type: "string";
        }];
        readonly name: "getDeployedCode";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "runtimeBytecode";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "getLabel";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "currentLabel";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "getNonce";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "nonce";
            readonly type: "uint64";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getRecordedLogs";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32[]";
                readonly name: "topics";
                readonly type: "bytes32[]";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }, {
                readonly internalType: "address";
                readonly name: "emitter";
                readonly type: "address";
            }];
            readonly internalType: "struct VmSafe.Log[]";
            readonly name: "logs";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "string";
            readonly name: "newLabel";
            readonly type: "string";
        }];
        readonly name: "label";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "slot";
            readonly type: "bytes32";
        }];
        readonly name: "load";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "data";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "stringifiedValue";
            readonly type: "string";
        }];
        readonly name: "parseAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "parsedValue";
            readonly type: "address";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "stringifiedValue";
            readonly type: "string";
        }];
        readonly name: "parseBool";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "parsedValue";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "stringifiedValue";
            readonly type: "string";
        }];
        readonly name: "parseBytes";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "parsedValue";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "stringifiedValue";
            readonly type: "string";
        }];
        readonly name: "parseBytes32";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "parsedValue";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "stringifiedValue";
            readonly type: "string";
        }];
        readonly name: "parseInt";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "parsedValue";
            readonly type: "int256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly name: "parseJson";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "abiEncodedData";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "key";
            readonly type: "string";
        }];
        readonly name: "parseJson";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "abiEncodedData";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "parseJsonAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "parseJsonAddressArray";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "parseJsonBool";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "parseJsonBoolArray";
        readonly outputs: readonly [{
            readonly internalType: "bool[]";
            readonly name: "";
            readonly type: "bool[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "parseJsonBytes";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "parseJsonBytes32";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "parseJsonBytes32Array";
        readonly outputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "";
            readonly type: "bytes32[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "parseJsonBytesArray";
        readonly outputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "";
            readonly type: "bytes[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "parseJsonInt";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "";
            readonly type: "int256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "parseJsonIntArray";
        readonly outputs: readonly [{
            readonly internalType: "int256[]";
            readonly name: "";
            readonly type: "int256[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "key";
            readonly type: "string";
        }];
        readonly name: "parseJsonKeys";
        readonly outputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "keys";
            readonly type: "string[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "parseJsonString";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "parseJsonStringArray";
        readonly outputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "";
            readonly type: "string[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "parseJsonUint";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "parseJsonUintArray";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "stringifiedValue";
            readonly type: "string";
        }];
        readonly name: "parseUint";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "parsedValue";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pauseGasMetering";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "projectRoot";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }, {
            readonly internalType: "uint64";
            readonly name: "maxDepth";
            readonly type: "uint64";
        }];
        readonly name: "readDir";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "errorMessage";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "path";
                readonly type: "string";
            }, {
                readonly internalType: "uint64";
                readonly name: "depth";
                readonly type: "uint64";
            }, {
                readonly internalType: "bool";
                readonly name: "isDir";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isSymlink";
                readonly type: "bool";
            }];
            readonly internalType: "struct VmSafe.DirEntry[]";
            readonly name: "entries";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }, {
            readonly internalType: "uint64";
            readonly name: "maxDepth";
            readonly type: "uint64";
        }, {
            readonly internalType: "bool";
            readonly name: "followLinks";
            readonly type: "bool";
        }];
        readonly name: "readDir";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "errorMessage";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "path";
                readonly type: "string";
            }, {
                readonly internalType: "uint64";
                readonly name: "depth";
                readonly type: "uint64";
            }, {
                readonly internalType: "bool";
                readonly name: "isDir";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isSymlink";
                readonly type: "bool";
            }];
            readonly internalType: "struct VmSafe.DirEntry[]";
            readonly name: "entries";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }];
        readonly name: "readDir";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "errorMessage";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "path";
                readonly type: "string";
            }, {
                readonly internalType: "uint64";
                readonly name: "depth";
                readonly type: "uint64";
            }, {
                readonly internalType: "bool";
                readonly name: "isDir";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isSymlink";
                readonly type: "bool";
            }];
            readonly internalType: "struct VmSafe.DirEntry[]";
            readonly name: "entries";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }];
        readonly name: "readFile";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "data";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }];
        readonly name: "readFileBinary";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }];
        readonly name: "readLine";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "line";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "linkPath";
            readonly type: "string";
        }];
        readonly name: "readLink";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "targetPath";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "record";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "recordLogs";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "privateKey";
            readonly type: "uint256";
        }];
        readonly name: "rememberKey";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "keyAddr";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }, {
            readonly internalType: "bool";
            readonly name: "recursive";
            readonly type: "bool";
        }];
        readonly name: "removeDir";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }];
        readonly name: "removeFile";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "resumeGasMetering";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "rpcAlias";
            readonly type: "string";
        }];
        readonly name: "rpcUrl";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "rpcUrlStructs";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "key";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "url";
                readonly type: "string";
            }];
            readonly internalType: "struct VmSafe.Rpc[]";
            readonly name: "urls";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "rpcUrls";
        readonly outputs: readonly [{
            readonly internalType: "string[2][]";
            readonly name: "urls";
            readonly type: "string[2][]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "objectKey";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "valueKey";
            readonly type: "string";
        }, {
            readonly internalType: "address[]";
            readonly name: "values";
            readonly type: "address[]";
        }];
        readonly name: "serializeAddress";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "objectKey";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "valueKey";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "value";
            readonly type: "address";
        }];
        readonly name: "serializeAddress";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "objectKey";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "valueKey";
            readonly type: "string";
        }, {
            readonly internalType: "bool[]";
            readonly name: "values";
            readonly type: "bool[]";
        }];
        readonly name: "serializeBool";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "objectKey";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "valueKey";
            readonly type: "string";
        }, {
            readonly internalType: "bool";
            readonly name: "value";
            readonly type: "bool";
        }];
        readonly name: "serializeBool";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "objectKey";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "valueKey";
            readonly type: "string";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "values";
            readonly type: "bytes[]";
        }];
        readonly name: "serializeBytes";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "objectKey";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "valueKey";
            readonly type: "string";
        }, {
            readonly internalType: "bytes";
            readonly name: "value";
            readonly type: "bytes";
        }];
        readonly name: "serializeBytes";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "objectKey";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "valueKey";
            readonly type: "string";
        }, {
            readonly internalType: "bytes32[]";
            readonly name: "values";
            readonly type: "bytes32[]";
        }];
        readonly name: "serializeBytes32";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "objectKey";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "valueKey";
            readonly type: "string";
        }, {
            readonly internalType: "bytes32";
            readonly name: "value";
            readonly type: "bytes32";
        }];
        readonly name: "serializeBytes32";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "objectKey";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "valueKey";
            readonly type: "string";
        }, {
            readonly internalType: "int256";
            readonly name: "value";
            readonly type: "int256";
        }];
        readonly name: "serializeInt";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "objectKey";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "valueKey";
            readonly type: "string";
        }, {
            readonly internalType: "int256[]";
            readonly name: "values";
            readonly type: "int256[]";
        }];
        readonly name: "serializeInt";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "objectKey";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "valueKey";
            readonly type: "string";
        }, {
            readonly internalType: "string[]";
            readonly name: "values";
            readonly type: "string[]";
        }];
        readonly name: "serializeString";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "objectKey";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "valueKey";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "value";
            readonly type: "string";
        }];
        readonly name: "serializeString";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "objectKey";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "valueKey";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "serializeUint";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "objectKey";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "valueKey";
            readonly type: "string";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "values";
            readonly type: "uint256[]";
        }];
        readonly name: "serializeUint";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "value";
            readonly type: "string";
        }];
        readonly name: "setEnv";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "privateKey";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes32";
            readonly name: "digest";
            readonly type: "bytes32";
        }];
        readonly name: "sign";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "v";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes32";
            readonly name: "r";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "s";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "startBroadcast";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "signer";
            readonly type: "address";
        }];
        readonly name: "startBroadcast";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "privateKey";
            readonly type: "uint256";
        }];
        readonly name: "startBroadcast";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "stopBroadcast";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "value";
            readonly type: "address";
        }];
        readonly name: "toString";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "stringifiedValue";
            readonly type: "string";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "toString";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "stringifiedValue";
            readonly type: "string";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "value";
            readonly type: "bytes";
        }];
        readonly name: "toString";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "stringifiedValue";
            readonly type: "string";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "value";
            readonly type: "bool";
        }];
        readonly name: "toString";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "stringifiedValue";
            readonly type: "string";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "int256";
            readonly name: "value";
            readonly type: "int256";
        }];
        readonly name: "toString";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "stringifiedValue";
            readonly type: "string";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "value";
            readonly type: "bytes32";
        }];
        readonly name: "toString";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "stringifiedValue";
            readonly type: "string";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "data";
            readonly type: "string";
        }];
        readonly name: "writeFile";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "writeFileBinary";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "valueKey";
            readonly type: "string";
        }];
        readonly name: "writeJson";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }];
        readonly name: "writeJson";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "data";
            readonly type: "string";
        }];
        readonly name: "writeLine";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "accesses(address)": "65bc9481";
        readonly "addr(uint256)": "ffa18649";
        readonly "assume(bool)": "4c63e562";
        readonly "breakpoint(string)": "f0259e92";
        readonly "breakpoint(string,bool)": "f7d39a8d";
        readonly "broadcast()": "afc98040";
        readonly "broadcast(address)": "e6962cdb";
        readonly "broadcast(uint256)": "f67a965b";
        readonly "closeFile(string)": "48c3241f";
        readonly "createDir(string,bool)": "168b64d3";
        readonly "deriveKey(string,string,uint32)": "6bcb2c1b";
        readonly "deriveKey(string,uint32)": "6229498b";
        readonly "envAddress(string)": "350d56bf";
        readonly "envAddress(string,string)": "ad31b9fa";
        readonly "envBool(string)": "7ed1ec7d";
        readonly "envBool(string,string)": "aaaddeaf";
        readonly "envBytes(string)": "4d7baf06";
        readonly "envBytes(string,string)": "ddc2651b";
        readonly "envBytes32(string)": "97949042";
        readonly "envBytes32(string,string)": "5af231c1";
        readonly "envInt(string)": "892a0c61";
        readonly "envInt(string,string)": "42181150";
        readonly "envOr(string,address)": "561fe540";
        readonly "envOr(string,bool)": "4777f3cf";
        readonly "envOr(string,bytes)": "b3e47705";
        readonly "envOr(string,bytes32)": "b4a85892";
        readonly "envOr(string,int256)": "bbcb713e";
        readonly "envOr(string,string)": "d145736c";
        readonly "envOr(string,string,address[])": "c74e9deb";
        readonly "envOr(string,string,bool[])": "eb85e83b";
        readonly "envOr(string,string,bytes32[])": "2281f367";
        readonly "envOr(string,string,bytes[])": "64bc3e64";
        readonly "envOr(string,string,int256[])": "4700d74b";
        readonly "envOr(string,string,string[])": "859216bc";
        readonly "envOr(string,string,uint256[])": "74318528";
        readonly "envOr(string,uint256)": "5e97348f";
        readonly "envString(string)": "f877cb19";
        readonly "envString(string,string)": "14b02bc9";
        readonly "envUint(string)": "c1978d1f";
        readonly "envUint(string,string)": "f3dec099";
        readonly "ffi(string[])": "89160467";
        readonly "fsMetadata(string)": "af368a08";
        readonly "getCode(string)": "8d1cc925";
        readonly "getDeployedCode(string)": "3ebf73b4";
        readonly "getLabel(address)": "28a249b0";
        readonly "getNonce(address)": "2d0335ab";
        readonly "getRecordedLogs()": "191553a4";
        readonly "label(address,string)": "c657c718";
        readonly "load(address,bytes32)": "667f9d70";
        readonly "parseAddress(string)": "c6ce059d";
        readonly "parseBool(string)": "974ef924";
        readonly "parseBytes(string)": "8f5d232d";
        readonly "parseBytes32(string)": "087e6e81";
        readonly "parseInt(string)": "42346c5e";
        readonly "parseJson(string)": "6a82600a";
        readonly "parseJson(string,string)": "85940ef1";
        readonly "parseJsonAddress(string,string)": "1e19e657";
        readonly "parseJsonAddressArray(string,string)": "2fce7883";
        readonly "parseJsonBool(string,string)": "9f86dc91";
        readonly "parseJsonBoolArray(string,string)": "91f3b94f";
        readonly "parseJsonBytes(string,string)": "fd921be8";
        readonly "parseJsonBytes32(string,string)": "1777e59d";
        readonly "parseJsonBytes32Array(string,string)": "91c75bc3";
        readonly "parseJsonBytesArray(string,string)": "6631aa99";
        readonly "parseJsonInt(string,string)": "7b048ccd";
        readonly "parseJsonIntArray(string,string)": "9983c28a";
        readonly "parseJsonKeys(string,string)": "213e4198";
        readonly "parseJsonString(string,string)": "49c4fac8";
        readonly "parseJsonStringArray(string,string)": "498fdcf4";
        readonly "parseJsonUint(string,string)": "addde2b6";
        readonly "parseJsonUintArray(string,string)": "522074ab";
        readonly "parseUint(string)": "fa91454d";
        readonly "pauseGasMetering()": "d1a5b36f";
        readonly "projectRoot()": "d930a0e6";
        readonly "readDir(string)": "c4bc59e0";
        readonly "readDir(string,uint64)": "1497876c";
        readonly "readDir(string,uint64,bool)": "8102d70d";
        readonly "readFile(string)": "60f9bb11";
        readonly "readFileBinary(string)": "16ed7bc4";
        readonly "readLine(string)": "70f55728";
        readonly "readLink(string)": "9f5684a2";
        readonly "record()": "266cf109";
        readonly "recordLogs()": "41af2f52";
        readonly "rememberKey(uint256)": "22100064";
        readonly "removeDir(string,bool)": "45c62011";
        readonly "removeFile(string)": "f1afe04d";
        readonly "resumeGasMetering()": "2bcd50e0";
        readonly "rpcUrl(string)": "975a6ce9";
        readonly "rpcUrlStructs()": "9d2ad72a";
        readonly "rpcUrls()": "a85a8418";
        readonly "serializeAddress(string,string,address)": "972c6062";
        readonly "serializeAddress(string,string,address[])": "1e356e1a";
        readonly "serializeBool(string,string,bool)": "ac22e971";
        readonly "serializeBool(string,string,bool[])": "92925aa1";
        readonly "serializeBytes(string,string,bytes)": "f21d52c7";
        readonly "serializeBytes(string,string,bytes[])": "9884b232";
        readonly "serializeBytes32(string,string,bytes32)": "2d812b44";
        readonly "serializeBytes32(string,string,bytes32[])": "201e43e2";
        readonly "serializeInt(string,string,int256)": "3f33db60";
        readonly "serializeInt(string,string,int256[])": "7676e127";
        readonly "serializeString(string,string,string)": "88da6d35";
        readonly "serializeString(string,string,string[])": "561cd6f3";
        readonly "serializeUint(string,string,uint256)": "129e9002";
        readonly "serializeUint(string,string,uint256[])": "fee9a469";
        readonly "setEnv(string,string)": "3d5923ee";
        readonly "sign(uint256,bytes32)": "e341eaa4";
        readonly "startBroadcast()": "7fb5297f";
        readonly "startBroadcast(address)": "7fec2a8d";
        readonly "startBroadcast(uint256)": "ce817d47";
        readonly "stopBroadcast()": "76eadd36";
        readonly "toString(address)": "56ca623e";
        readonly "toString(bool)": "71dce7da";
        readonly "toString(bytes)": "71aad10d";
        readonly "toString(bytes32)": "b11a19e8";
        readonly "toString(int256)": "a322c40e";
        readonly "toString(uint256)": "6900a3ae";
        readonly "writeFile(string,string)": "897e0a97";
        readonly "writeFileBinary(string,bytes)": "1f21fc80";
        readonly "writeJson(string,string)": "e23cd19f";
        readonly "writeJson(string,string,string)": "35d6ad46";
        readonly "writeLine(string,string)": "619d897f";
    };
};
//# sourceMappingURL=VmSafe.d.ts.map