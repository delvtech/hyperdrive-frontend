export declare const IMulticall3: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "aggregate";
        readonly inputs: readonly [{
            readonly name: "calls";
            readonly type: "tuple[]";
            readonly internalType: "struct IMulticall3.Call[]";
            readonly components: readonly [{
                readonly name: "target";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "blockNumber";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "returnData";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "aggregate3";
        readonly inputs: readonly [{
            readonly name: "calls";
            readonly type: "tuple[]";
            readonly internalType: "struct IMulticall3.Call3[]";
            readonly components: readonly [{
                readonly name: "target";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "allowFailure";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "returnData";
            readonly type: "tuple[]";
            readonly internalType: "struct IMulticall3.Result[]";
            readonly components: readonly [{
                readonly name: "success";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "returnData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "aggregate3Value";
        readonly inputs: readonly [{
            readonly name: "calls";
            readonly type: "tuple[]";
            readonly internalType: "struct IMulticall3.Call3Value[]";
            readonly components: readonly [{
                readonly name: "target";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "allowFailure";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "value";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "returnData";
            readonly type: "tuple[]";
            readonly internalType: "struct IMulticall3.Result[]";
            readonly components: readonly [{
                readonly name: "success";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "returnData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "blockAndAggregate";
        readonly inputs: readonly [{
            readonly name: "calls";
            readonly type: "tuple[]";
            readonly internalType: "struct IMulticall3.Call[]";
            readonly components: readonly [{
                readonly name: "target";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "blockNumber";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "blockHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "returnData";
            readonly type: "tuple[]";
            readonly internalType: "struct IMulticall3.Result[]";
            readonly components: readonly [{
                readonly name: "success";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "returnData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "getBasefee";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "basefee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getBlockHash";
        readonly inputs: readonly [{
            readonly name: "blockNumber";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "blockHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getBlockNumber";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "blockNumber";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getChainId";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "chainid";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getCurrentBlockCoinbase";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "coinbase";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getCurrentBlockDifficulty";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "difficulty";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getCurrentBlockGasLimit";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "gaslimit";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getCurrentBlockTimestamp";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getEthBalance";
        readonly inputs: readonly [{
            readonly name: "addr";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getLastBlockHash";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "blockHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "tryAggregate";
        readonly inputs: readonly [{
            readonly name: "requireSuccess";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "calls";
            readonly type: "tuple[]";
            readonly internalType: "struct IMulticall3.Call[]";
            readonly components: readonly [{
                readonly name: "target";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "returnData";
            readonly type: "tuple[]";
            readonly internalType: "struct IMulticall3.Result[]";
            readonly components: readonly [{
                readonly name: "success";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "returnData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "tryBlockAndAggregate";
        readonly inputs: readonly [{
            readonly name: "requireSuccess";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "calls";
            readonly type: "tuple[]";
            readonly internalType: "struct IMulticall3.Call[]";
            readonly components: readonly [{
                readonly name: "target";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "blockNumber";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "blockHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "returnData";
            readonly type: "tuple[]";
            readonly internalType: "struct IMulticall3.Result[]";
            readonly components: readonly [{
                readonly name: "success";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "returnData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly stateMutability: "payable";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "aggregate((address,bytes)[])": "252dba42";
        readonly "aggregate3((address,bool,bytes)[])": "82ad56cb";
        readonly "aggregate3Value((address,bool,uint256,bytes)[])": "174dea71";
        readonly "blockAndAggregate((address,bytes)[])": "c3077fa9";
        readonly "getBasefee()": "3e64a696";
        readonly "getBlockHash(uint256)": "ee82ac5e";
        readonly "getBlockNumber()": "42cbb15c";
        readonly "getChainId()": "3408e470";
        readonly "getCurrentBlockCoinbase()": "a8b0574e";
        readonly "getCurrentBlockDifficulty()": "72425d9d";
        readonly "getCurrentBlockGasLimit()": "86d516e8";
        readonly "getCurrentBlockTimestamp()": "0f28c97d";
        readonly "getEthBalance(address)": "4d2301cc";
        readonly "getLastBlockHash()": "27e86d6e";
        readonly "tryAggregate(bool,(address,bytes)[])": "bce38bd7";
        readonly "tryBlockAndAggregate(bool,(address,bytes)[])": "399542e9";
    };
};
//# sourceMappingURL=IMulticall3.d.ts.map