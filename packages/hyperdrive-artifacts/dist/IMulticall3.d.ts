export declare const IMulticall3: {
    readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "target";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IMulticall3.Call[]";
            readonly name: "calls";
            readonly type: "tuple[]";
        }];
        readonly name: "aggregate";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "blockNumber";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "returnData";
            readonly type: "bytes[]";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "target";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "allowFailure";
                readonly type: "bool";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IMulticall3.Call3[]";
            readonly name: "calls";
            readonly type: "tuple[]";
        }];
        readonly name: "aggregate3";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bool";
                readonly name: "success";
                readonly type: "bool";
            }, {
                readonly internalType: "bytes";
                readonly name: "returnData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IMulticall3.Result[]";
            readonly name: "returnData";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "target";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "allowFailure";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IMulticall3.Call3Value[]";
            readonly name: "calls";
            readonly type: "tuple[]";
        }];
        readonly name: "aggregate3Value";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bool";
                readonly name: "success";
                readonly type: "bool";
            }, {
                readonly internalType: "bytes";
                readonly name: "returnData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IMulticall3.Result[]";
            readonly name: "returnData";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "target";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IMulticall3.Call[]";
            readonly name: "calls";
            readonly type: "tuple[]";
        }];
        readonly name: "blockAndAggregate";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "blockNumber";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes32";
            readonly name: "blockHash";
            readonly type: "bytes32";
        }, {
            readonly components: readonly [{
                readonly internalType: "bool";
                readonly name: "success";
                readonly type: "bool";
            }, {
                readonly internalType: "bytes";
                readonly name: "returnData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IMulticall3.Result[]";
            readonly name: "returnData";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getBasefee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "basefee";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "blockNumber";
            readonly type: "uint256";
        }];
        readonly name: "getBlockHash";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "blockHash";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getBlockNumber";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "blockNumber";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getChainId";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "chainid";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getCurrentBlockCoinbase";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "coinbase";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getCurrentBlockDifficulty";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "difficulty";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getCurrentBlockGasLimit";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "gaslimit";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getCurrentBlockTimestamp";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "addr";
            readonly type: "address";
        }];
        readonly name: "getEthBalance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getLastBlockHash";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "blockHash";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "requireSuccess";
            readonly type: "bool";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "target";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IMulticall3.Call[]";
            readonly name: "calls";
            readonly type: "tuple[]";
        }];
        readonly name: "tryAggregate";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bool";
                readonly name: "success";
                readonly type: "bool";
            }, {
                readonly internalType: "bytes";
                readonly name: "returnData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IMulticall3.Result[]";
            readonly name: "returnData";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "requireSuccess";
            readonly type: "bool";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "target";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IMulticall3.Call[]";
            readonly name: "calls";
            readonly type: "tuple[]";
        }];
        readonly name: "tryBlockAndAggregate";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "blockNumber";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes32";
            readonly name: "blockHash";
            readonly type: "bytes32";
        }, {
            readonly components: readonly [{
                readonly internalType: "bool";
                readonly name: "success";
                readonly type: "bool";
            }, {
                readonly internalType: "bytes";
                readonly name: "returnData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IMulticall3.Result[]";
            readonly name: "returnData";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    readonly bytecode: {
        readonly object: "0x";
        readonly sourceMap: "";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x";
        readonly sourceMap: "";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {
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
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"aggregate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"internalType\":\"bytes[]\",\"name\":\"returnData\",\"type\":\"bytes[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"allowFailure\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call3[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"aggregate3\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"allowFailure\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call3Value[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"aggregate3Value\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"blockAndAggregate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBasefee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"basefee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"name\":\"getBlockHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBlockNumber\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getChainId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"chainid\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockCoinbase\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"coinbase\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockDifficulty\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"difficulty\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockGasLimit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"gaslimit\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockTimestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"timestamp\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"getEthBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getLastBlockHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"requireSuccess\",\"type\":\"bool\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"tryAggregate\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"requireSuccess\",\"type\":\"bool\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"tryBlockAndAggregate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/interfaces/IMulticall3.sol\":\"IMulticall3\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/interfaces/IMulticall3.sol\":{\"keccak256\":\"0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0\",\"dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "struct IMulticall3.Call[]";
                    readonly name: "calls";
                    readonly type: "tuple[]";
                    readonly components: readonly [{
                        readonly internalType: "address";
                        readonly name: "target";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "callData";
                        readonly type: "bytes";
                    }];
                }];
                readonly stateMutability: "payable";
                readonly type: "function";
                readonly name: "aggregate";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "blockNumber";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes[]";
                    readonly name: "returnData";
                    readonly type: "bytes[]";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "struct IMulticall3.Call3[]";
                    readonly name: "calls";
                    readonly type: "tuple[]";
                    readonly components: readonly [{
                        readonly internalType: "address";
                        readonly name: "target";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "allowFailure";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "callData";
                        readonly type: "bytes";
                    }];
                }];
                readonly stateMutability: "payable";
                readonly type: "function";
                readonly name: "aggregate3";
                readonly outputs: readonly [{
                    readonly internalType: "struct IMulticall3.Result[]";
                    readonly name: "returnData";
                    readonly type: "tuple[]";
                    readonly components: readonly [{
                        readonly internalType: "bool";
                        readonly name: "success";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "returnData";
                        readonly type: "bytes";
                    }];
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "struct IMulticall3.Call3Value[]";
                    readonly name: "calls";
                    readonly type: "tuple[]";
                    readonly components: readonly [{
                        readonly internalType: "address";
                        readonly name: "target";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "allowFailure";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "value";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "callData";
                        readonly type: "bytes";
                    }];
                }];
                readonly stateMutability: "payable";
                readonly type: "function";
                readonly name: "aggregate3Value";
                readonly outputs: readonly [{
                    readonly internalType: "struct IMulticall3.Result[]";
                    readonly name: "returnData";
                    readonly type: "tuple[]";
                    readonly components: readonly [{
                        readonly internalType: "bool";
                        readonly name: "success";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "returnData";
                        readonly type: "bytes";
                    }];
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "struct IMulticall3.Call[]";
                    readonly name: "calls";
                    readonly type: "tuple[]";
                    readonly components: readonly [{
                        readonly internalType: "address";
                        readonly name: "target";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "callData";
                        readonly type: "bytes";
                    }];
                }];
                readonly stateMutability: "payable";
                readonly type: "function";
                readonly name: "blockAndAggregate";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "blockNumber";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "blockHash";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "struct IMulticall3.Result[]";
                    readonly name: "returnData";
                    readonly type: "tuple[]";
                    readonly components: readonly [{
                        readonly internalType: "bool";
                        readonly name: "success";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "returnData";
                        readonly type: "bytes";
                    }];
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getBasefee";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "basefee";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "blockNumber";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getBlockHash";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "blockHash";
                    readonly type: "bytes32";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getBlockNumber";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "blockNumber";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getChainId";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "chainid";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getCurrentBlockCoinbase";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "coinbase";
                    readonly type: "address";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getCurrentBlockDifficulty";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "difficulty";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getCurrentBlockGasLimit";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "gaslimit";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getCurrentBlockTimestamp";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "timestamp";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "addr";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getEthBalance";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getLastBlockHash";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "blockHash";
                    readonly type: "bytes32";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "requireSuccess";
                    readonly type: "bool";
                }, {
                    readonly internalType: "struct IMulticall3.Call[]";
                    readonly name: "calls";
                    readonly type: "tuple[]";
                    readonly components: readonly [{
                        readonly internalType: "address";
                        readonly name: "target";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "callData";
                        readonly type: "bytes";
                    }];
                }];
                readonly stateMutability: "payable";
                readonly type: "function";
                readonly name: "tryAggregate";
                readonly outputs: readonly [{
                    readonly internalType: "struct IMulticall3.Result[]";
                    readonly name: "returnData";
                    readonly type: "tuple[]";
                    readonly components: readonly [{
                        readonly internalType: "bool";
                        readonly name: "success";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "returnData";
                        readonly type: "bytes";
                    }];
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "requireSuccess";
                    readonly type: "bool";
                }, {
                    readonly internalType: "struct IMulticall3.Call[]";
                    readonly name: "calls";
                    readonly type: "tuple[]";
                    readonly components: readonly [{
                        readonly internalType: "address";
                        readonly name: "target";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "callData";
                        readonly type: "bytes";
                    }];
                }];
                readonly stateMutability: "payable";
                readonly type: "function";
                readonly name: "tryBlockAndAggregate";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "blockNumber";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "blockHash";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "struct IMulticall3.Result[]";
                    readonly name: "returnData";
                    readonly type: "tuple[]";
                    readonly components: readonly [{
                        readonly internalType: "bool";
                        readonly name: "success";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "returnData";
                        readonly type: "bytes";
                    }];
                }];
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {};
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {};
                readonly version: 1;
            };
        };
        readonly settings: {
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "aave-v3-core/=lib/aave-v3-core/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
            readonly optimizer: {
                readonly enabled: true;
                readonly runs: 200;
            };
            readonly metadata: {
                readonly bytecodeHash: "ipfs";
            };
            readonly compilationTarget: {
                readonly "lib/forge-std/src/interfaces/IMulticall3.sol": "IMulticall3";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "lib/forge-std/src/interfaces/IMulticall3.sol": {
                readonly keccak256: "0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a";
                readonly urls: readonly ["bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0", "dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2"];
                readonly license: "MIT";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "lib/forge-std/src/interfaces/IMulticall3.sol";
        readonly id: 52550;
        readonly exportedSymbols: {
            readonly IMulticall3: readonly [52549];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "32:2153:111";
        readonly nodes: readonly [{
            readonly id: 52388;
            readonly nodeType: "PragmaDirective";
            readonly src: "32:31:111";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.6", ".2", "<", "0.9", ".0"];
        }, {
            readonly id: 52389;
            readonly nodeType: "PragmaDirective";
            readonly src: "65:33:111";
            readonly nodes: readonly [];
            readonly literals: readonly ["experimental", "ABIEncoderV2"];
        }, {
            readonly id: 52549;
            readonly nodeType: "ContractDefinition";
            readonly src: "100:2084:111";
            readonly nodes: readonly [{
                readonly id: 52394;
                readonly nodeType: "StructDefinition";
                readonly src: "128:67:111";
                readonly nodes: readonly [];
                readonly canonicalName: "IMulticall3.Call";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 52391;
                    readonly mutability: "mutable";
                    readonly name: "target";
                    readonly nameLocation: "158:6:111";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 52394;
                    readonly src: "150:14:111";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 52390;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "150:7:111";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 52393;
                    readonly mutability: "mutable";
                    readonly name: "callData";
                    readonly nameLocation: "180:8:111";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 52394;
                    readonly src: "174:14:111";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes_storage_ptr";
                        readonly typeString: "bytes";
                    };
                    readonly typeName: {
                        readonly id: 52392;
                        readonly name: "bytes";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "174:5:111";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_storage_ptr";
                            readonly typeString: "bytes";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "Call";
                readonly nameLocation: "135:4:111";
                readonly scope: 52549;
                readonly visibility: "public";
            }, {
                readonly id: 52401;
                readonly nodeType: "StructDefinition";
                readonly src: "201:95:111";
                readonly nodes: readonly [];
                readonly canonicalName: "IMulticall3.Call3";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 52396;
                    readonly mutability: "mutable";
                    readonly name: "target";
                    readonly nameLocation: "232:6:111";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 52401;
                    readonly src: "224:14:111";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 52395;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "224:7:111";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 52398;
                    readonly mutability: "mutable";
                    readonly name: "allowFailure";
                    readonly nameLocation: "253:12:111";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 52401;
                    readonly src: "248:17:111";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                    readonly typeName: {
                        readonly id: 52397;
                        readonly name: "bool";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "248:4:111";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 52400;
                    readonly mutability: "mutable";
                    readonly name: "callData";
                    readonly nameLocation: "281:8:111";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 52401;
                    readonly src: "275:14:111";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes_storage_ptr";
                        readonly typeString: "bytes";
                    };
                    readonly typeName: {
                        readonly id: 52399;
                        readonly name: "bytes";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "275:5:111";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_storage_ptr";
                            readonly typeString: "bytes";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "Call3";
                readonly nameLocation: "208:5:111";
                readonly scope: 52549;
                readonly visibility: "public";
            }, {
                readonly id: 52410;
                readonly nodeType: "StructDefinition";
                readonly src: "302:123:111";
                readonly nodes: readonly [];
                readonly canonicalName: "IMulticall3.Call3Value";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 52403;
                    readonly mutability: "mutable";
                    readonly name: "target";
                    readonly nameLocation: "338:6:111";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 52410;
                    readonly src: "330:14:111";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 52402;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "330:7:111";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 52405;
                    readonly mutability: "mutable";
                    readonly name: "allowFailure";
                    readonly nameLocation: "359:12:111";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 52410;
                    readonly src: "354:17:111";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                    readonly typeName: {
                        readonly id: 52404;
                        readonly name: "bool";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "354:4:111";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 52407;
                    readonly mutability: "mutable";
                    readonly name: "value";
                    readonly nameLocation: "389:5:111";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 52410;
                    readonly src: "381:13:111";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 52406;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "381:7:111";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 52409;
                    readonly mutability: "mutable";
                    readonly name: "callData";
                    readonly nameLocation: "410:8:111";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 52410;
                    readonly src: "404:14:111";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes_storage_ptr";
                        readonly typeString: "bytes";
                    };
                    readonly typeName: {
                        readonly id: 52408;
                        readonly name: "bytes";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "404:5:111";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_storage_ptr";
                            readonly typeString: "bytes";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "Call3Value";
                readonly nameLocation: "309:10:111";
                readonly scope: 52549;
                readonly visibility: "public";
            }, {
                readonly id: 52415;
                readonly nodeType: "StructDefinition";
                readonly src: "431:69:111";
                readonly nodes: readonly [];
                readonly canonicalName: "IMulticall3.Result";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 52412;
                    readonly mutability: "mutable";
                    readonly name: "success";
                    readonly nameLocation: "460:7:111";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 52415;
                    readonly src: "455:12:111";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                    readonly typeName: {
                        readonly id: 52411;
                        readonly name: "bool";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "455:4:111";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 52414;
                    readonly mutability: "mutable";
                    readonly name: "returnData";
                    readonly nameLocation: "483:10:111";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 52415;
                    readonly src: "477:16:111";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes_storage_ptr";
                        readonly typeString: "bytes";
                    };
                    readonly typeName: {
                        readonly id: 52413;
                        readonly name: "bytes";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "477:5:111";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_storage_ptr";
                            readonly typeString: "bytes";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "Result";
                readonly nameLocation: "438:6:111";
                readonly scope: 52549;
                readonly visibility: "public";
            }, {
                readonly id: 52427;
                readonly nodeType: "FunctionDefinition";
                readonly src: "506:140:111";
                readonly nodes: readonly [];
                readonly functionSelector: "252dba42";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "aggregate";
                readonly nameLocation: "515:9:111";
                readonly parameters: {
                    readonly id: 52420;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 52419;
                        readonly mutability: "mutable";
                        readonly name: "calls";
                        readonly nameLocation: "541:5:111";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 52427;
                        readonly src: "525:21:111";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Call_$52394_calldata_ptr_$dyn_calldata_ptr";
                            readonly typeString: "struct IMulticall3.Call[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 52417;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 52416;
                                    readonly name: "Call";
                                    readonly nameLocations: readonly ["525:4:111"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 52394;
                                    readonly src: "525:4:111";
                                };
                                readonly referencedDeclaration: 52394;
                                readonly src: "525:4:111";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Call_$52394_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Call";
                                };
                            };
                            readonly id: 52418;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "525:6:111";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Call_$52394_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Call[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "524:23:111";
                };
                readonly returnParameters: {
                    readonly id: 52426;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 52422;
                        readonly mutability: "mutable";
                        readonly name: "blockNumber";
                        readonly nameLocation: "606:11:111";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 52427;
                        readonly src: "598:19:111";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 52421;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "598:7:111";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 52425;
                        readonly mutability: "mutable";
                        readonly name: "returnData";
                        readonly nameLocation: "634:10:111";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 52427;
                        readonly src: "619:25:111";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "bytes[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 52423;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "619:5:111";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly id: 52424;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "619:7:111";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes_storage_$dyn_storage_ptr";
                                readonly typeString: "bytes[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "597:48:111";
                };
                readonly scope: 52549;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 52438;
                readonly nodeType: "FunctionDefinition";
                readonly src: "652:98:111";
                readonly nodes: readonly [];
                readonly functionSelector: "82ad56cb";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "aggregate3";
                readonly nameLocation: "661:10:111";
                readonly parameters: {
                    readonly id: 52432;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 52431;
                        readonly mutability: "mutable";
                        readonly name: "calls";
                        readonly nameLocation: "689:5:111";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 52438;
                        readonly src: "672:22:111";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Call3_$52401_calldata_ptr_$dyn_calldata_ptr";
                            readonly typeString: "struct IMulticall3.Call3[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 52429;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 52428;
                                    readonly name: "Call3";
                                    readonly nameLocations: readonly ["672:5:111"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 52401;
                                    readonly src: "672:5:111";
                                };
                                readonly referencedDeclaration: 52401;
                                readonly src: "672:5:111";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Call3_$52401_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Call3";
                                };
                            };
                            readonly id: 52430;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "672:7:111";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Call3_$52401_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Call3[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "671:24:111";
                };
                readonly returnParameters: {
                    readonly id: 52437;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 52436;
                        readonly mutability: "mutable";
                        readonly name: "returnData";
                        readonly nameLocation: "738:10:111";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 52438;
                        readonly src: "722:26:111";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Result_$52415_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct IMulticall3.Result[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 52434;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 52433;
                                    readonly name: "Result";
                                    readonly nameLocations: readonly ["722:6:111"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 52415;
                                    readonly src: "722:6:111";
                                };
                                readonly referencedDeclaration: 52415;
                                readonly src: "722:6:111";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Result_$52415_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Result";
                                };
                            };
                            readonly id: 52435;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "722:8:111";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Result_$52415_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Result[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "721:28:111";
                };
                readonly scope: 52549;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 52449;
                readonly nodeType: "FunctionDefinition";
                readonly src: "756:108:111";
                readonly nodes: readonly [];
                readonly functionSelector: "174dea71";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "aggregate3Value";
                readonly nameLocation: "765:15:111";
                readonly parameters: {
                    readonly id: 52443;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 52442;
                        readonly mutability: "mutable";
                        readonly name: "calls";
                        readonly nameLocation: "803:5:111";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 52449;
                        readonly src: "781:27:111";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Call3Value_$52410_calldata_ptr_$dyn_calldata_ptr";
                            readonly typeString: "struct IMulticall3.Call3Value[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 52440;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 52439;
                                    readonly name: "Call3Value";
                                    readonly nameLocations: readonly ["781:10:111"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 52410;
                                    readonly src: "781:10:111";
                                };
                                readonly referencedDeclaration: 52410;
                                readonly src: "781:10:111";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Call3Value_$52410_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Call3Value";
                                };
                            };
                            readonly id: 52441;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "781:12:111";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Call3Value_$52410_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Call3Value[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "780:29:111";
                };
                readonly returnParameters: {
                    readonly id: 52448;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 52447;
                        readonly mutability: "mutable";
                        readonly name: "returnData";
                        readonly nameLocation: "852:10:111";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 52449;
                        readonly src: "836:26:111";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Result_$52415_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct IMulticall3.Result[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 52445;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 52444;
                                    readonly name: "Result";
                                    readonly nameLocations: readonly ["836:6:111"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 52415;
                                    readonly src: "836:6:111";
                                };
                                readonly referencedDeclaration: 52415;
                                readonly src: "836:6:111";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Result_$52415_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Result";
                                };
                            };
                            readonly id: 52446;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "836:8:111";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Result_$52415_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Result[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "835:28:111";
                };
                readonly scope: 52549;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 52464;
                readonly nodeType: "FunctionDefinition";
                readonly src: "870:168:111";
                readonly nodes: readonly [];
                readonly functionSelector: "c3077fa9";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "blockAndAggregate";
                readonly nameLocation: "879:17:111";
                readonly parameters: {
                    readonly id: 52454;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 52453;
                        readonly mutability: "mutable";
                        readonly name: "calls";
                        readonly nameLocation: "913:5:111";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 52464;
                        readonly src: "897:21:111";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Call_$52394_calldata_ptr_$dyn_calldata_ptr";
                            readonly typeString: "struct IMulticall3.Call[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 52451;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 52450;
                                    readonly name: "Call";
                                    readonly nameLocations: readonly ["897:4:111"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 52394;
                                    readonly src: "897:4:111";
                                };
                                readonly referencedDeclaration: 52394;
                                readonly src: "897:4:111";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Call_$52394_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Call";
                                };
                            };
                            readonly id: 52452;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "897:6:111";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Call_$52394_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Call[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "896:23:111";
                };
                readonly returnParameters: {
                    readonly id: 52463;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 52456;
                        readonly mutability: "mutable";
                        readonly name: "blockNumber";
                        readonly nameLocation: "978:11:111";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 52464;
                        readonly src: "970:19:111";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 52455;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "970:7:111";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 52458;
                        readonly mutability: "mutable";
                        readonly name: "blockHash";
                        readonly nameLocation: "999:9:111";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 52464;
                        readonly src: "991:17:111";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 52457;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "991:7:111";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 52462;
                        readonly mutability: "mutable";
                        readonly name: "returnData";
                        readonly nameLocation: "1026:10:111";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 52464;
                        readonly src: "1010:26:111";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Result_$52415_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct IMulticall3.Result[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 52460;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 52459;
                                    readonly name: "Result";
                                    readonly nameLocations: readonly ["1010:6:111"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 52415;
                                    readonly src: "1010:6:111";
                                };
                                readonly referencedDeclaration: 52415;
                                readonly src: "1010:6:111";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Result_$52415_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Result";
                                };
                            };
                            readonly id: 52461;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1010:8:111";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Result_$52415_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Result[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "969:68:111";
                };
                readonly scope: 52549;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 52469;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1044:62:111";
                readonly nodes: readonly [];
                readonly functionSelector: "3e64a696";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getBasefee";
                readonly nameLocation: "1053:10:111";
                readonly parameters: {
                    readonly id: 52465;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1063:2:111";
                };
                readonly returnParameters: {
                    readonly id: 52468;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 52467;
                        readonly mutability: "mutable";
                        readonly name: "basefee";
                        readonly nameLocation: "1097:7:111";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 52469;
                        readonly src: "1089:15:111";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 52466;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1089:7:111";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1088:17:111";
                };
                readonly scope: 52549;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 52476;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1112:85:111";
                readonly nodes: readonly [];
                readonly functionSelector: "ee82ac5e";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getBlockHash";
                readonly nameLocation: "1121:12:111";
                readonly parameters: {
                    readonly id: 52472;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 52471;
                        readonly mutability: "mutable";
                        readonly name: "blockNumber";
                        readonly nameLocation: "1142:11:111";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 52476;
                        readonly src: "1134:19:111";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 52470;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1134:7:111";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1133:21:111";
                };
                readonly returnParameters: {
                    readonly id: 52475;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 52474;
                        readonly mutability: "mutable";
                        readonly name: "blockHash";
                        readonly nameLocation: "1186:9:111";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 52476;
                        readonly src: "1178:17:111";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 52473;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1178:7:111";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1177:19:111";
                };
                readonly scope: 52549;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 52481;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1203:70:111";
                readonly nodes: readonly [];
                readonly functionSelector: "42cbb15c";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getBlockNumber";
                readonly nameLocation: "1212:14:111";
                readonly parameters: {
                    readonly id: 52477;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1226:2:111";
                };
                readonly returnParameters: {
                    readonly id: 52480;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 52479;
                        readonly mutability: "mutable";
                        readonly name: "blockNumber";
                        readonly nameLocation: "1260:11:111";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 52481;
                        readonly src: "1252:19:111";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 52478;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1252:7:111";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1251:21:111";
                };
                readonly scope: 52549;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 52486;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1279:62:111";
                readonly nodes: readonly [];
                readonly functionSelector: "3408e470";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getChainId";
                readonly nameLocation: "1288:10:111";
                readonly parameters: {
                    readonly id: 52482;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1298:2:111";
                };
                readonly returnParameters: {
                    readonly id: 52485;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 52484;
                        readonly mutability: "mutable";
                        readonly name: "chainid";
                        readonly nameLocation: "1332:7:111";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 52486;
                        readonly src: "1324:15:111";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 52483;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1324:7:111";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1323:17:111";
                };
                readonly scope: 52549;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 52491;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1347:76:111";
                readonly nodes: readonly [];
                readonly functionSelector: "a8b0574e";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getCurrentBlockCoinbase";
                readonly nameLocation: "1356:23:111";
                readonly parameters: {
                    readonly id: 52487;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1379:2:111";
                };
                readonly returnParameters: {
                    readonly id: 52490;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 52489;
                        readonly mutability: "mutable";
                        readonly name: "coinbase";
                        readonly nameLocation: "1413:8:111";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 52491;
                        readonly src: "1405:16:111";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 52488;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1405:7:111";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1404:18:111";
                };
                readonly scope: 52549;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 52496;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1429:80:111";
                readonly nodes: readonly [];
                readonly functionSelector: "72425d9d";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getCurrentBlockDifficulty";
                readonly nameLocation: "1438:25:111";
                readonly parameters: {
                    readonly id: 52492;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1463:2:111";
                };
                readonly returnParameters: {
                    readonly id: 52495;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 52494;
                        readonly mutability: "mutable";
                        readonly name: "difficulty";
                        readonly nameLocation: "1497:10:111";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 52496;
                        readonly src: "1489:18:111";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 52493;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1489:7:111";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1488:20:111";
                };
                readonly scope: 52549;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 52501;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1515:76:111";
                readonly nodes: readonly [];
                readonly functionSelector: "86d516e8";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getCurrentBlockGasLimit";
                readonly nameLocation: "1524:23:111";
                readonly parameters: {
                    readonly id: 52497;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1547:2:111";
                };
                readonly returnParameters: {
                    readonly id: 52500;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 52499;
                        readonly mutability: "mutable";
                        readonly name: "gaslimit";
                        readonly nameLocation: "1581:8:111";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 52501;
                        readonly src: "1573:16:111";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 52498;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1573:7:111";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1572:18:111";
                };
                readonly scope: 52549;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 52506;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1597:78:111";
                readonly nodes: readonly [];
                readonly functionSelector: "0f28c97d";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getCurrentBlockTimestamp";
                readonly nameLocation: "1606:24:111";
                readonly parameters: {
                    readonly id: 52502;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1630:2:111";
                };
                readonly returnParameters: {
                    readonly id: 52505;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 52504;
                        readonly mutability: "mutable";
                        readonly name: "timestamp";
                        readonly nameLocation: "1664:9:111";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 52506;
                        readonly src: "1656:17:111";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 52503;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1656:7:111";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1655:19:111";
                };
                readonly scope: 52549;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 52513;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1681:77:111";
                readonly nodes: readonly [];
                readonly functionSelector: "4d2301cc";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getEthBalance";
                readonly nameLocation: "1690:13:111";
                readonly parameters: {
                    readonly id: 52509;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 52508;
                        readonly mutability: "mutable";
                        readonly name: "addr";
                        readonly nameLocation: "1712:4:111";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 52513;
                        readonly src: "1704:12:111";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 52507;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1704:7:111";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1703:14:111";
                };
                readonly returnParameters: {
                    readonly id: 52512;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 52511;
                        readonly mutability: "mutable";
                        readonly name: "balance";
                        readonly nameLocation: "1749:7:111";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 52513;
                        readonly src: "1741:15:111";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 52510;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1741:7:111";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1740:17:111";
                };
                readonly scope: 52549;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 52518;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1764:70:111";
                readonly nodes: readonly [];
                readonly functionSelector: "27e86d6e";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getLastBlockHash";
                readonly nameLocation: "1773:16:111";
                readonly parameters: {
                    readonly id: 52514;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1789:2:111";
                };
                readonly returnParameters: {
                    readonly id: 52517;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 52516;
                        readonly mutability: "mutable";
                        readonly name: "blockHash";
                        readonly nameLocation: "1823:9:111";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 52518;
                        readonly src: "1815:17:111";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 52515;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1815:7:111";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1814:19:111";
                };
                readonly scope: 52549;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 52531;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1840:144:111";
                readonly nodes: readonly [];
                readonly functionSelector: "bce38bd7";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "tryAggregate";
                readonly nameLocation: "1849:12:111";
                readonly parameters: {
                    readonly id: 52525;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 52520;
                        readonly mutability: "mutable";
                        readonly name: "requireSuccess";
                        readonly nameLocation: "1867:14:111";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 52531;
                        readonly src: "1862:19:111";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 52519;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1862:4:111";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 52524;
                        readonly mutability: "mutable";
                        readonly name: "calls";
                        readonly nameLocation: "1899:5:111";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 52531;
                        readonly src: "1883:21:111";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Call_$52394_calldata_ptr_$dyn_calldata_ptr";
                            readonly typeString: "struct IMulticall3.Call[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 52522;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 52521;
                                    readonly name: "Call";
                                    readonly nameLocations: readonly ["1883:4:111"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 52394;
                                    readonly src: "1883:4:111";
                                };
                                readonly referencedDeclaration: 52394;
                                readonly src: "1883:4:111";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Call_$52394_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Call";
                                };
                            };
                            readonly id: 52523;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1883:6:111";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Call_$52394_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Call[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1861:44:111";
                };
                readonly returnParameters: {
                    readonly id: 52530;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 52529;
                        readonly mutability: "mutable";
                        readonly name: "returnData";
                        readonly nameLocation: "1972:10:111";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 52531;
                        readonly src: "1956:26:111";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Result_$52415_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct IMulticall3.Result[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 52527;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 52526;
                                    readonly name: "Result";
                                    readonly nameLocations: readonly ["1956:6:111"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 52415;
                                    readonly src: "1956:6:111";
                                };
                                readonly referencedDeclaration: 52415;
                                readonly src: "1956:6:111";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Result_$52415_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Result";
                                };
                            };
                            readonly id: 52528;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1956:8:111";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Result_$52415_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Result[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1955:28:111";
                };
                readonly scope: 52549;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 52548;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1990:192:111";
                readonly nodes: readonly [];
                readonly functionSelector: "399542e9";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "tryBlockAndAggregate";
                readonly nameLocation: "1999:20:111";
                readonly parameters: {
                    readonly id: 52538;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 52533;
                        readonly mutability: "mutable";
                        readonly name: "requireSuccess";
                        readonly nameLocation: "2025:14:111";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 52548;
                        readonly src: "2020:19:111";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 52532;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2020:4:111";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 52537;
                        readonly mutability: "mutable";
                        readonly name: "calls";
                        readonly nameLocation: "2057:5:111";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 52548;
                        readonly src: "2041:21:111";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Call_$52394_calldata_ptr_$dyn_calldata_ptr";
                            readonly typeString: "struct IMulticall3.Call[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 52535;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 52534;
                                    readonly name: "Call";
                                    readonly nameLocations: readonly ["2041:4:111"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 52394;
                                    readonly src: "2041:4:111";
                                };
                                readonly referencedDeclaration: 52394;
                                readonly src: "2041:4:111";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Call_$52394_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Call";
                                };
                            };
                            readonly id: 52536;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2041:6:111";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Call_$52394_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Call[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2019:44:111";
                };
                readonly returnParameters: {
                    readonly id: 52547;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 52540;
                        readonly mutability: "mutable";
                        readonly name: "blockNumber";
                        readonly nameLocation: "2122:11:111";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 52548;
                        readonly src: "2114:19:111";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 52539;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2114:7:111";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 52542;
                        readonly mutability: "mutable";
                        readonly name: "blockHash";
                        readonly nameLocation: "2143:9:111";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 52548;
                        readonly src: "2135:17:111";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 52541;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2135:7:111";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 52546;
                        readonly mutability: "mutable";
                        readonly name: "returnData";
                        readonly nameLocation: "2170:10:111";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 52548;
                        readonly src: "2154:26:111";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Result_$52415_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct IMulticall3.Result[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 52544;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 52543;
                                    readonly name: "Result";
                                    readonly nameLocations: readonly ["2154:6:111"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 52415;
                                    readonly src: "2154:6:111";
                                };
                                readonly referencedDeclaration: 52415;
                                readonly src: "2154:6:111";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Result_$52415_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Result";
                                };
                            };
                            readonly id: 52545;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2154:8:111";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Result_$52415_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Result[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2113:68:111";
                };
                readonly scope: 52549;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "IMulticall3";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [52549];
            readonly name: "IMulticall3";
            readonly nameLocation: "110:11:111";
            readonly scope: 52550;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 111;
};
//# sourceMappingURL=IMulticall3.d.ts.map