export declare const Vm: {
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
        readonly inputs: readonly [];
        readonly name: "activeFork";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "forkId";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
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
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "allowCheatcodes";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
            readonly internalType: "uint256";
            readonly name: "newChainId";
            readonly type: "uint256";
        }];
        readonly name: "chainId";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "clearMockedCalls";
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
            readonly internalType: "address";
            readonly name: "newCoinbase";
            readonly type: "address";
        }];
        readonly name: "coinbase";
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
            readonly name: "urlOrAlias";
            readonly type: "string";
        }];
        readonly name: "createFork";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "forkId";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "urlOrAlias";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "blockNumber";
            readonly type: "uint256";
        }];
        readonly name: "createFork";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "forkId";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "urlOrAlias";
            readonly type: "string";
        }, {
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }];
        readonly name: "createFork";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "forkId";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "urlOrAlias";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "blockNumber";
            readonly type: "uint256";
        }];
        readonly name: "createSelectFork";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "forkId";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "urlOrAlias";
            readonly type: "string";
        }, {
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }];
        readonly name: "createSelectFork";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "forkId";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "urlOrAlias";
            readonly type: "string";
        }];
        readonly name: "createSelectFork";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "forkId";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "newBalance";
            readonly type: "uint256";
        }];
        readonly name: "deal";
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
            readonly internalType: "uint256";
            readonly name: "newDifficulty";
            readonly type: "uint256";
        }];
        readonly name: "difficulty";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "newRuntimeBytecode";
            readonly type: "bytes";
        }];
        readonly name: "etch";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "callee";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "msgValue";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint64";
            readonly name: "gas";
            readonly type: "uint64";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "expectCall";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "callee";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "msgValue";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint64";
            readonly name: "gas";
            readonly type: "uint64";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint64";
            readonly name: "count";
            readonly type: "uint64";
        }];
        readonly name: "expectCall";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "callee";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "msgValue";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint64";
            readonly name: "count";
            readonly type: "uint64";
        }];
        readonly name: "expectCall";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "callee";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "expectCall";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "callee";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint64";
            readonly name: "count";
            readonly type: "uint64";
        }];
        readonly name: "expectCall";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "callee";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "msgValue";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "expectCall";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "callee";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "msgValue";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint64";
            readonly name: "minGas";
            readonly type: "uint64";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "expectCallMinGas";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "callee";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "msgValue";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint64";
            readonly name: "minGas";
            readonly type: "uint64";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint64";
            readonly name: "count";
            readonly type: "uint64";
        }];
        readonly name: "expectCallMinGas";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "expectEmit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "checkTopic1";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "checkTopic2";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "checkTopic3";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "checkData";
            readonly type: "bool";
        }];
        readonly name: "expectEmit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "checkTopic1";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "checkTopic2";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "checkTopic3";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "checkData";
            readonly type: "bool";
        }, {
            readonly internalType: "address";
            readonly name: "emitter";
            readonly type: "address";
        }];
        readonly name: "expectEmit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "emitter";
            readonly type: "address";
        }];
        readonly name: "expectEmit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "revertData";
            readonly type: "bytes4";
        }];
        readonly name: "expectRevert";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "revertData";
            readonly type: "bytes";
        }];
        readonly name: "expectRevert";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "expectRevert";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "min";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "max";
            readonly type: "uint64";
        }];
        readonly name: "expectSafeMemory";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "min";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "max";
            readonly type: "uint64";
        }];
        readonly name: "expectSafeMemoryCall";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "newBasefee";
            readonly type: "uint256";
        }];
        readonly name: "fee";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        }];
        readonly name: "isPersistent";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "persistent";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
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
            readonly internalType: "address[]";
            readonly name: "accounts";
            readonly type: "address[]";
        }];
        readonly name: "makePersistent";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account0";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account1";
            readonly type: "address";
        }];
        readonly name: "makePersistent";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "makePersistent";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account0";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account1";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account2";
            readonly type: "address";
        }];
        readonly name: "makePersistent";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "callee";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "msgValue";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "returnData";
            readonly type: "bytes";
        }];
        readonly name: "mockCall";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "callee";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "returnData";
            readonly type: "bytes";
        }];
        readonly name: "mockCall";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "callee";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "msgValue";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "revertData";
            readonly type: "bytes";
        }];
        readonly name: "mockCallRevert";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "callee";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "revertData";
            readonly type: "bytes";
        }];
        readonly name: "mockCallRevert";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "msgSender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "txOrigin";
            readonly type: "address";
        }];
        readonly name: "prank";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "msgSender";
            readonly type: "address";
        }];
        readonly name: "prank";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "newPrevrandao";
            readonly type: "bytes32";
        }];
        readonly name: "prevrandao";
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
        readonly inputs: readonly [];
        readonly name: "readCallers";
        readonly outputs: readonly [{
            readonly internalType: "enum VmSafe.CallerMode";
            readonly name: "callerMode";
            readonly type: "uint8";
        }, {
            readonly internalType: "address";
            readonly name: "msgSender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "txOrigin";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "resetNonce";
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
            readonly internalType: "uint256";
            readonly name: "snapshotId";
            readonly type: "uint256";
        }];
        readonly name: "revertTo";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "success";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "accounts";
            readonly type: "address[]";
        }];
        readonly name: "revokePersistent";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "revokePersistent";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "newHeight";
            readonly type: "uint256";
        }];
        readonly name: "roll";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }];
        readonly name: "rollFork";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "forkId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "blockNumber";
            readonly type: "uint256";
        }];
        readonly name: "rollFork";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "blockNumber";
            readonly type: "uint256";
        }];
        readonly name: "rollFork";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "forkId";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }];
        readonly name: "rollFork";
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
            readonly internalType: "uint256";
            readonly name: "forkId";
            readonly type: "uint256";
        }];
        readonly name: "selectFork";
        readonly outputs: readonly [];
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
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "newNonce";
            readonly type: "uint64";
        }];
        readonly name: "setNonce";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "newNonce";
            readonly type: "uint64";
        }];
        readonly name: "setNonceUnsafe";
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
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "skipTest";
            readonly type: "bool";
        }];
        readonly name: "skip";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "snapshot";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "snapshotId";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "msgSender";
            readonly type: "address";
        }];
        readonly name: "startPrank";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "msgSender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "txOrigin";
            readonly type: "address";
        }];
        readonly name: "startPrank";
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
        readonly inputs: readonly [];
        readonly name: "stopPrank";
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
        }, {
            readonly internalType: "bytes32";
            readonly name: "value";
            readonly type: "bytes32";
        }];
        readonly name: "store";
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
            readonly internalType: "uint256";
            readonly name: "forkId";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }];
        readonly name: "transact";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }];
        readonly name: "transact";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "newGasPrice";
            readonly type: "uint256";
        }];
        readonly name: "txGasPrice";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "newTimestamp";
            readonly type: "uint256";
        }];
        readonly name: "warp";
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
        readonly "activeFork()": "2f103f22";
        readonly "addr(uint256)": "ffa18649";
        readonly "allowCheatcodes(address)": "ea060291";
        readonly "assume(bool)": "4c63e562";
        readonly "breakpoint(string)": "f0259e92";
        readonly "breakpoint(string,bool)": "f7d39a8d";
        readonly "broadcast()": "afc98040";
        readonly "broadcast(address)": "e6962cdb";
        readonly "broadcast(uint256)": "f67a965b";
        readonly "chainId(uint256)": "4049ddd2";
        readonly "clearMockedCalls()": "3fdf4e15";
        readonly "closeFile(string)": "48c3241f";
        readonly "coinbase(address)": "ff483c54";
        readonly "createDir(string,bool)": "168b64d3";
        readonly "createFork(string)": "31ba3498";
        readonly "createFork(string,bytes32)": "7ca29682";
        readonly "createFork(string,uint256)": "6ba3ba2b";
        readonly "createSelectFork(string)": "98680034";
        readonly "createSelectFork(string,bytes32)": "84d52b7a";
        readonly "createSelectFork(string,uint256)": "71ee464d";
        readonly "deal(address,uint256)": "c88a5e6d";
        readonly "deriveKey(string,string,uint32)": "6bcb2c1b";
        readonly "deriveKey(string,uint32)": "6229498b";
        readonly "difficulty(uint256)": "46cc92d9";
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
        readonly "etch(address,bytes)": "b4d6c782";
        readonly "expectCall(address,bytes)": "bd6af434";
        readonly "expectCall(address,bytes,uint64)": "c1adbbff";
        readonly "expectCall(address,uint256,bytes)": "f30c7ba3";
        readonly "expectCall(address,uint256,bytes,uint64)": "a2b1a1ae";
        readonly "expectCall(address,uint256,uint64,bytes)": "23361207";
        readonly "expectCall(address,uint256,uint64,bytes,uint64)": "65b7b7cc";
        readonly "expectCallMinGas(address,uint256,uint64,bytes)": "08e4e116";
        readonly "expectCallMinGas(address,uint256,uint64,bytes,uint64)": "e13a1834";
        readonly "expectEmit()": "440ed10d";
        readonly "expectEmit(address)": "86b9620d";
        readonly "expectEmit(bool,bool,bool,bool)": "491cc7c2";
        readonly "expectEmit(bool,bool,bool,bool,address)": "81bad6f3";
        readonly "expectRevert()": "f4844814";
        readonly "expectRevert(bytes)": "f28dceb3";
        readonly "expectRevert(bytes4)": "c31eb0e0";
        readonly "expectSafeMemory(uint64,uint64)": "6d016688";
        readonly "expectSafeMemoryCall(uint64,uint64)": "05838bf4";
        readonly "fee(uint256)": "39b37ab0";
        readonly "ffi(string[])": "89160467";
        readonly "fsMetadata(string)": "af368a08";
        readonly "getCode(string)": "8d1cc925";
        readonly "getDeployedCode(string)": "3ebf73b4";
        readonly "getLabel(address)": "28a249b0";
        readonly "getNonce(address)": "2d0335ab";
        readonly "getRecordedLogs()": "191553a4";
        readonly "isPersistent(address)": "d92d8efd";
        readonly "label(address,string)": "c657c718";
        readonly "load(address,bytes32)": "667f9d70";
        readonly "makePersistent(address)": "57e22dde";
        readonly "makePersistent(address,address)": "4074e0a8";
        readonly "makePersistent(address,address,address)": "efb77a75";
        readonly "makePersistent(address[])": "1d9e269e";
        readonly "mockCall(address,bytes,bytes)": "b96213e4";
        readonly "mockCall(address,uint256,bytes,bytes)": "81409b91";
        readonly "mockCallRevert(address,bytes,bytes)": "dbaad147";
        readonly "mockCallRevert(address,uint256,bytes,bytes)": "d23cd037";
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
        readonly "prank(address)": "ca669fa7";
        readonly "prank(address,address)": "47e50cce";
        readonly "prevrandao(bytes32)": "3b925549";
        readonly "projectRoot()": "d930a0e6";
        readonly "readCallers()": "4ad0bac9";
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
        readonly "resetNonce(address)": "1c72346d";
        readonly "resumeGasMetering()": "2bcd50e0";
        readonly "revertTo(uint256)": "44d7f0a4";
        readonly "revokePersistent(address)": "997a0222";
        readonly "revokePersistent(address[])": "3ce969e6";
        readonly "roll(uint256)": "1f7b4f30";
        readonly "rollFork(bytes32)": "0f29772b";
        readonly "rollFork(uint256)": "d9bbf3a1";
        readonly "rollFork(uint256,bytes32)": "f2830f7b";
        readonly "rollFork(uint256,uint256)": "d74c83a4";
        readonly "rpcUrl(string)": "975a6ce9";
        readonly "rpcUrlStructs()": "9d2ad72a";
        readonly "rpcUrls()": "a85a8418";
        readonly "selectFork(uint256)": "9ebf6827";
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
        readonly "setNonce(address,uint64)": "f8e18b57";
        readonly "setNonceUnsafe(address,uint64)": "9b67b21c";
        readonly "sign(uint256,bytes32)": "e341eaa4";
        readonly "skip(bool)": "dd82d13e";
        readonly "snapshot()": "9711715a";
        readonly "startBroadcast()": "7fb5297f";
        readonly "startBroadcast(address)": "7fec2a8d";
        readonly "startBroadcast(uint256)": "ce817d47";
        readonly "startPrank(address)": "06447d56";
        readonly "startPrank(address,address)": "45b56078";
        readonly "stopBroadcast()": "76eadd36";
        readonly "stopPrank()": "90c5013b";
        readonly "store(address,bytes32,bytes32)": "70ca10bb";
        readonly "toString(address)": "56ca623e";
        readonly "toString(bool)": "71dce7da";
        readonly "toString(bytes)": "71aad10d";
        readonly "toString(bytes32)": "b11a19e8";
        readonly "toString(int256)": "a322c40e";
        readonly "toString(uint256)": "6900a3ae";
        readonly "transact(bytes32)": "be646da1";
        readonly "transact(uint256,bytes32)": "4d8abc4b";
        readonly "txGasPrice(uint256)": "48f50c0f";
        readonly "warp(uint256)": "e5d6bf02";
        readonly "writeFile(string,string)": "897e0a97";
        readonly "writeFileBinary(string,bytes)": "1f21fc80";
        readonly "writeJson(string,string)": "e23cd19f";
        readonly "writeJson(string,string,string)": "35d6ad46";
        readonly "writeLine(string,string)": "619d897f";
    };
};
//# sourceMappingURL=Vm.d.ts.map