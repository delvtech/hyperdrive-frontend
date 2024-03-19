export declare const IMulticall3: {
    readonly abi: readonly [{
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
        readonly id: 57535;
        readonly exportedSymbols: {
            readonly IMulticall3: readonly [57534];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "32:2153:161";
        readonly nodes: readonly [{
            readonly id: 57373;
            readonly nodeType: "PragmaDirective";
            readonly src: "32:31:161";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.6", ".2", "<", "0.9", ".0"];
        }, {
            readonly id: 57374;
            readonly nodeType: "PragmaDirective";
            readonly src: "65:33:161";
            readonly nodes: readonly [];
            readonly literals: readonly ["experimental", "ABIEncoderV2"];
        }, {
            readonly id: 57534;
            readonly nodeType: "ContractDefinition";
            readonly src: "100:2084:161";
            readonly nodes: readonly [{
                readonly id: 57379;
                readonly nodeType: "StructDefinition";
                readonly src: "128:67:161";
                readonly nodes: readonly [];
                readonly canonicalName: "IMulticall3.Call";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 57376;
                    readonly mutability: "mutable";
                    readonly name: "target";
                    readonly nameLocation: "158:6:161";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 57379;
                    readonly src: "150:14:161";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 57375;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "150:7:161";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 57378;
                    readonly mutability: "mutable";
                    readonly name: "callData";
                    readonly nameLocation: "180:8:161";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 57379;
                    readonly src: "174:14:161";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes_storage_ptr";
                        readonly typeString: "bytes";
                    };
                    readonly typeName: {
                        readonly id: 57377;
                        readonly name: "bytes";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "174:5:161";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_storage_ptr";
                            readonly typeString: "bytes";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "Call";
                readonly nameLocation: "135:4:161";
                readonly scope: 57534;
                readonly visibility: "public";
            }, {
                readonly id: 57386;
                readonly nodeType: "StructDefinition";
                readonly src: "201:95:161";
                readonly nodes: readonly [];
                readonly canonicalName: "IMulticall3.Call3";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 57381;
                    readonly mutability: "mutable";
                    readonly name: "target";
                    readonly nameLocation: "232:6:161";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 57386;
                    readonly src: "224:14:161";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 57380;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "224:7:161";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 57383;
                    readonly mutability: "mutable";
                    readonly name: "allowFailure";
                    readonly nameLocation: "253:12:161";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 57386;
                    readonly src: "248:17:161";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                    readonly typeName: {
                        readonly id: 57382;
                        readonly name: "bool";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "248:4:161";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 57385;
                    readonly mutability: "mutable";
                    readonly name: "callData";
                    readonly nameLocation: "281:8:161";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 57386;
                    readonly src: "275:14:161";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes_storage_ptr";
                        readonly typeString: "bytes";
                    };
                    readonly typeName: {
                        readonly id: 57384;
                        readonly name: "bytes";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "275:5:161";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_storage_ptr";
                            readonly typeString: "bytes";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "Call3";
                readonly nameLocation: "208:5:161";
                readonly scope: 57534;
                readonly visibility: "public";
            }, {
                readonly id: 57395;
                readonly nodeType: "StructDefinition";
                readonly src: "302:123:161";
                readonly nodes: readonly [];
                readonly canonicalName: "IMulticall3.Call3Value";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 57388;
                    readonly mutability: "mutable";
                    readonly name: "target";
                    readonly nameLocation: "338:6:161";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 57395;
                    readonly src: "330:14:161";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 57387;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "330:7:161";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 57390;
                    readonly mutability: "mutable";
                    readonly name: "allowFailure";
                    readonly nameLocation: "359:12:161";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 57395;
                    readonly src: "354:17:161";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                    readonly typeName: {
                        readonly id: 57389;
                        readonly name: "bool";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "354:4:161";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 57392;
                    readonly mutability: "mutable";
                    readonly name: "value";
                    readonly nameLocation: "389:5:161";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 57395;
                    readonly src: "381:13:161";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 57391;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "381:7:161";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 57394;
                    readonly mutability: "mutable";
                    readonly name: "callData";
                    readonly nameLocation: "410:8:161";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 57395;
                    readonly src: "404:14:161";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes_storage_ptr";
                        readonly typeString: "bytes";
                    };
                    readonly typeName: {
                        readonly id: 57393;
                        readonly name: "bytes";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "404:5:161";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_storage_ptr";
                            readonly typeString: "bytes";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "Call3Value";
                readonly nameLocation: "309:10:161";
                readonly scope: 57534;
                readonly visibility: "public";
            }, {
                readonly id: 57400;
                readonly nodeType: "StructDefinition";
                readonly src: "431:69:161";
                readonly nodes: readonly [];
                readonly canonicalName: "IMulticall3.Result";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 57397;
                    readonly mutability: "mutable";
                    readonly name: "success";
                    readonly nameLocation: "460:7:161";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 57400;
                    readonly src: "455:12:161";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                    readonly typeName: {
                        readonly id: 57396;
                        readonly name: "bool";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "455:4:161";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 57399;
                    readonly mutability: "mutable";
                    readonly name: "returnData";
                    readonly nameLocation: "483:10:161";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 57400;
                    readonly src: "477:16:161";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes_storage_ptr";
                        readonly typeString: "bytes";
                    };
                    readonly typeName: {
                        readonly id: 57398;
                        readonly name: "bytes";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "477:5:161";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_storage_ptr";
                            readonly typeString: "bytes";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "Result";
                readonly nameLocation: "438:6:161";
                readonly scope: 57534;
                readonly visibility: "public";
            }, {
                readonly id: 57412;
                readonly nodeType: "FunctionDefinition";
                readonly src: "506:140:161";
                readonly nodes: readonly [];
                readonly functionSelector: "252dba42";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "aggregate";
                readonly nameLocation: "515:9:161";
                readonly parameters: {
                    readonly id: 57405;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57404;
                        readonly mutability: "mutable";
                        readonly name: "calls";
                        readonly nameLocation: "541:5:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57412;
                        readonly src: "525:21:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Call_$57379_calldata_ptr_$dyn_calldata_ptr";
                            readonly typeString: "struct IMulticall3.Call[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 57402;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 57401;
                                    readonly name: "Call";
                                    readonly nameLocations: readonly ["525:4:161"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 57379;
                                    readonly src: "525:4:161";
                                };
                                readonly referencedDeclaration: 57379;
                                readonly src: "525:4:161";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Call_$57379_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Call";
                                };
                            };
                            readonly id: 57403;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "525:6:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Call_$57379_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Call[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "524:23:161";
                };
                readonly returnParameters: {
                    readonly id: 57411;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57407;
                        readonly mutability: "mutable";
                        readonly name: "blockNumber";
                        readonly nameLocation: "606:11:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57412;
                        readonly src: "598:19:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 57406;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "598:7:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 57410;
                        readonly mutability: "mutable";
                        readonly name: "returnData";
                        readonly nameLocation: "634:10:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57412;
                        readonly src: "619:25:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "bytes[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 57408;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "619:5:161";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly id: 57409;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "619:7:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes_storage_$dyn_storage_ptr";
                                readonly typeString: "bytes[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "597:48:161";
                };
                readonly scope: 57534;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57423;
                readonly nodeType: "FunctionDefinition";
                readonly src: "652:98:161";
                readonly nodes: readonly [];
                readonly functionSelector: "82ad56cb";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "aggregate3";
                readonly nameLocation: "661:10:161";
                readonly parameters: {
                    readonly id: 57417;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57416;
                        readonly mutability: "mutable";
                        readonly name: "calls";
                        readonly nameLocation: "689:5:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57423;
                        readonly src: "672:22:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Call3_$57386_calldata_ptr_$dyn_calldata_ptr";
                            readonly typeString: "struct IMulticall3.Call3[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 57414;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 57413;
                                    readonly name: "Call3";
                                    readonly nameLocations: readonly ["672:5:161"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 57386;
                                    readonly src: "672:5:161";
                                };
                                readonly referencedDeclaration: 57386;
                                readonly src: "672:5:161";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Call3_$57386_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Call3";
                                };
                            };
                            readonly id: 57415;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "672:7:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Call3_$57386_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Call3[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "671:24:161";
                };
                readonly returnParameters: {
                    readonly id: 57422;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57421;
                        readonly mutability: "mutable";
                        readonly name: "returnData";
                        readonly nameLocation: "738:10:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57423;
                        readonly src: "722:26:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Result_$57400_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct IMulticall3.Result[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 57419;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 57418;
                                    readonly name: "Result";
                                    readonly nameLocations: readonly ["722:6:161"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 57400;
                                    readonly src: "722:6:161";
                                };
                                readonly referencedDeclaration: 57400;
                                readonly src: "722:6:161";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Result_$57400_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Result";
                                };
                            };
                            readonly id: 57420;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "722:8:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Result_$57400_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Result[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "721:28:161";
                };
                readonly scope: 57534;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57434;
                readonly nodeType: "FunctionDefinition";
                readonly src: "756:108:161";
                readonly nodes: readonly [];
                readonly functionSelector: "174dea71";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "aggregate3Value";
                readonly nameLocation: "765:15:161";
                readonly parameters: {
                    readonly id: 57428;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57427;
                        readonly mutability: "mutable";
                        readonly name: "calls";
                        readonly nameLocation: "803:5:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57434;
                        readonly src: "781:27:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Call3Value_$57395_calldata_ptr_$dyn_calldata_ptr";
                            readonly typeString: "struct IMulticall3.Call3Value[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 57425;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 57424;
                                    readonly name: "Call3Value";
                                    readonly nameLocations: readonly ["781:10:161"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 57395;
                                    readonly src: "781:10:161";
                                };
                                readonly referencedDeclaration: 57395;
                                readonly src: "781:10:161";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Call3Value_$57395_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Call3Value";
                                };
                            };
                            readonly id: 57426;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "781:12:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Call3Value_$57395_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Call3Value[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "780:29:161";
                };
                readonly returnParameters: {
                    readonly id: 57433;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57432;
                        readonly mutability: "mutable";
                        readonly name: "returnData";
                        readonly nameLocation: "852:10:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57434;
                        readonly src: "836:26:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Result_$57400_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct IMulticall3.Result[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 57430;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 57429;
                                    readonly name: "Result";
                                    readonly nameLocations: readonly ["836:6:161"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 57400;
                                    readonly src: "836:6:161";
                                };
                                readonly referencedDeclaration: 57400;
                                readonly src: "836:6:161";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Result_$57400_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Result";
                                };
                            };
                            readonly id: 57431;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "836:8:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Result_$57400_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Result[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "835:28:161";
                };
                readonly scope: 57534;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57449;
                readonly nodeType: "FunctionDefinition";
                readonly src: "870:168:161";
                readonly nodes: readonly [];
                readonly functionSelector: "c3077fa9";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "blockAndAggregate";
                readonly nameLocation: "879:17:161";
                readonly parameters: {
                    readonly id: 57439;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57438;
                        readonly mutability: "mutable";
                        readonly name: "calls";
                        readonly nameLocation: "913:5:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57449;
                        readonly src: "897:21:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Call_$57379_calldata_ptr_$dyn_calldata_ptr";
                            readonly typeString: "struct IMulticall3.Call[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 57436;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 57435;
                                    readonly name: "Call";
                                    readonly nameLocations: readonly ["897:4:161"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 57379;
                                    readonly src: "897:4:161";
                                };
                                readonly referencedDeclaration: 57379;
                                readonly src: "897:4:161";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Call_$57379_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Call";
                                };
                            };
                            readonly id: 57437;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "897:6:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Call_$57379_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Call[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "896:23:161";
                };
                readonly returnParameters: {
                    readonly id: 57448;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57441;
                        readonly mutability: "mutable";
                        readonly name: "blockNumber";
                        readonly nameLocation: "978:11:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57449;
                        readonly src: "970:19:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 57440;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "970:7:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 57443;
                        readonly mutability: "mutable";
                        readonly name: "blockHash";
                        readonly nameLocation: "999:9:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57449;
                        readonly src: "991:17:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 57442;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "991:7:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 57447;
                        readonly mutability: "mutable";
                        readonly name: "returnData";
                        readonly nameLocation: "1026:10:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57449;
                        readonly src: "1010:26:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Result_$57400_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct IMulticall3.Result[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 57445;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 57444;
                                    readonly name: "Result";
                                    readonly nameLocations: readonly ["1010:6:161"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 57400;
                                    readonly src: "1010:6:161";
                                };
                                readonly referencedDeclaration: 57400;
                                readonly src: "1010:6:161";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Result_$57400_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Result";
                                };
                            };
                            readonly id: 57446;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1010:8:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Result_$57400_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Result[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "969:68:161";
                };
                readonly scope: 57534;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57454;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1044:62:161";
                readonly nodes: readonly [];
                readonly functionSelector: "3e64a696";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getBasefee";
                readonly nameLocation: "1053:10:161";
                readonly parameters: {
                    readonly id: 57450;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1063:2:161";
                };
                readonly returnParameters: {
                    readonly id: 57453;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57452;
                        readonly mutability: "mutable";
                        readonly name: "basefee";
                        readonly nameLocation: "1097:7:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57454;
                        readonly src: "1089:15:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 57451;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1089:7:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1088:17:161";
                };
                readonly scope: 57534;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57461;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1112:85:161";
                readonly nodes: readonly [];
                readonly functionSelector: "ee82ac5e";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getBlockHash";
                readonly nameLocation: "1121:12:161";
                readonly parameters: {
                    readonly id: 57457;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57456;
                        readonly mutability: "mutable";
                        readonly name: "blockNumber";
                        readonly nameLocation: "1142:11:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57461;
                        readonly src: "1134:19:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 57455;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1134:7:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1133:21:161";
                };
                readonly returnParameters: {
                    readonly id: 57460;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57459;
                        readonly mutability: "mutable";
                        readonly name: "blockHash";
                        readonly nameLocation: "1186:9:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57461;
                        readonly src: "1178:17:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 57458;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1178:7:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1177:19:161";
                };
                readonly scope: 57534;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57466;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1203:70:161";
                readonly nodes: readonly [];
                readonly functionSelector: "42cbb15c";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getBlockNumber";
                readonly nameLocation: "1212:14:161";
                readonly parameters: {
                    readonly id: 57462;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1226:2:161";
                };
                readonly returnParameters: {
                    readonly id: 57465;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57464;
                        readonly mutability: "mutable";
                        readonly name: "blockNumber";
                        readonly nameLocation: "1260:11:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57466;
                        readonly src: "1252:19:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 57463;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1252:7:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1251:21:161";
                };
                readonly scope: 57534;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57471;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1279:62:161";
                readonly nodes: readonly [];
                readonly functionSelector: "3408e470";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getChainId";
                readonly nameLocation: "1288:10:161";
                readonly parameters: {
                    readonly id: 57467;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1298:2:161";
                };
                readonly returnParameters: {
                    readonly id: 57470;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57469;
                        readonly mutability: "mutable";
                        readonly name: "chainid";
                        readonly nameLocation: "1332:7:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57471;
                        readonly src: "1324:15:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 57468;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1324:7:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1323:17:161";
                };
                readonly scope: 57534;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57476;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1347:76:161";
                readonly nodes: readonly [];
                readonly functionSelector: "a8b0574e";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getCurrentBlockCoinbase";
                readonly nameLocation: "1356:23:161";
                readonly parameters: {
                    readonly id: 57472;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1379:2:161";
                };
                readonly returnParameters: {
                    readonly id: 57475;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57474;
                        readonly mutability: "mutable";
                        readonly name: "coinbase";
                        readonly nameLocation: "1413:8:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57476;
                        readonly src: "1405:16:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 57473;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1405:7:161";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1404:18:161";
                };
                readonly scope: 57534;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57481;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1429:80:161";
                readonly nodes: readonly [];
                readonly functionSelector: "72425d9d";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getCurrentBlockDifficulty";
                readonly nameLocation: "1438:25:161";
                readonly parameters: {
                    readonly id: 57477;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1463:2:161";
                };
                readonly returnParameters: {
                    readonly id: 57480;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57479;
                        readonly mutability: "mutable";
                        readonly name: "difficulty";
                        readonly nameLocation: "1497:10:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57481;
                        readonly src: "1489:18:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 57478;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1489:7:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1488:20:161";
                };
                readonly scope: 57534;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57486;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1515:76:161";
                readonly nodes: readonly [];
                readonly functionSelector: "86d516e8";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getCurrentBlockGasLimit";
                readonly nameLocation: "1524:23:161";
                readonly parameters: {
                    readonly id: 57482;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1547:2:161";
                };
                readonly returnParameters: {
                    readonly id: 57485;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57484;
                        readonly mutability: "mutable";
                        readonly name: "gaslimit";
                        readonly nameLocation: "1581:8:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57486;
                        readonly src: "1573:16:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 57483;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1573:7:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1572:18:161";
                };
                readonly scope: 57534;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57491;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1597:78:161";
                readonly nodes: readonly [];
                readonly functionSelector: "0f28c97d";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getCurrentBlockTimestamp";
                readonly nameLocation: "1606:24:161";
                readonly parameters: {
                    readonly id: 57487;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1630:2:161";
                };
                readonly returnParameters: {
                    readonly id: 57490;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57489;
                        readonly mutability: "mutable";
                        readonly name: "timestamp";
                        readonly nameLocation: "1664:9:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57491;
                        readonly src: "1656:17:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 57488;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1656:7:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1655:19:161";
                };
                readonly scope: 57534;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57498;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1681:77:161";
                readonly nodes: readonly [];
                readonly functionSelector: "4d2301cc";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getEthBalance";
                readonly nameLocation: "1690:13:161";
                readonly parameters: {
                    readonly id: 57494;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57493;
                        readonly mutability: "mutable";
                        readonly name: "addr";
                        readonly nameLocation: "1712:4:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57498;
                        readonly src: "1704:12:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 57492;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1704:7:161";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1703:14:161";
                };
                readonly returnParameters: {
                    readonly id: 57497;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57496;
                        readonly mutability: "mutable";
                        readonly name: "balance";
                        readonly nameLocation: "1749:7:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57498;
                        readonly src: "1741:15:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 57495;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1741:7:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1740:17:161";
                };
                readonly scope: 57534;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57503;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1764:70:161";
                readonly nodes: readonly [];
                readonly functionSelector: "27e86d6e";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getLastBlockHash";
                readonly nameLocation: "1773:16:161";
                readonly parameters: {
                    readonly id: 57499;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1789:2:161";
                };
                readonly returnParameters: {
                    readonly id: 57502;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57501;
                        readonly mutability: "mutable";
                        readonly name: "blockHash";
                        readonly nameLocation: "1823:9:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57503;
                        readonly src: "1815:17:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 57500;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1815:7:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1814:19:161";
                };
                readonly scope: 57534;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57516;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1840:144:161";
                readonly nodes: readonly [];
                readonly functionSelector: "bce38bd7";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "tryAggregate";
                readonly nameLocation: "1849:12:161";
                readonly parameters: {
                    readonly id: 57510;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57505;
                        readonly mutability: "mutable";
                        readonly name: "requireSuccess";
                        readonly nameLocation: "1867:14:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57516;
                        readonly src: "1862:19:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 57504;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1862:4:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 57509;
                        readonly mutability: "mutable";
                        readonly name: "calls";
                        readonly nameLocation: "1899:5:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57516;
                        readonly src: "1883:21:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Call_$57379_calldata_ptr_$dyn_calldata_ptr";
                            readonly typeString: "struct IMulticall3.Call[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 57507;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 57506;
                                    readonly name: "Call";
                                    readonly nameLocations: readonly ["1883:4:161"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 57379;
                                    readonly src: "1883:4:161";
                                };
                                readonly referencedDeclaration: 57379;
                                readonly src: "1883:4:161";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Call_$57379_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Call";
                                };
                            };
                            readonly id: 57508;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1883:6:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Call_$57379_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Call[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1861:44:161";
                };
                readonly returnParameters: {
                    readonly id: 57515;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57514;
                        readonly mutability: "mutable";
                        readonly name: "returnData";
                        readonly nameLocation: "1972:10:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57516;
                        readonly src: "1956:26:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Result_$57400_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct IMulticall3.Result[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 57512;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 57511;
                                    readonly name: "Result";
                                    readonly nameLocations: readonly ["1956:6:161"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 57400;
                                    readonly src: "1956:6:161";
                                };
                                readonly referencedDeclaration: 57400;
                                readonly src: "1956:6:161";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Result_$57400_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Result";
                                };
                            };
                            readonly id: 57513;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1956:8:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Result_$57400_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Result[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1955:28:161";
                };
                readonly scope: 57534;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57533;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1990:192:161";
                readonly nodes: readonly [];
                readonly functionSelector: "399542e9";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "tryBlockAndAggregate";
                readonly nameLocation: "1999:20:161";
                readonly parameters: {
                    readonly id: 57523;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57518;
                        readonly mutability: "mutable";
                        readonly name: "requireSuccess";
                        readonly nameLocation: "2025:14:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57533;
                        readonly src: "2020:19:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 57517;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2020:4:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 57522;
                        readonly mutability: "mutable";
                        readonly name: "calls";
                        readonly nameLocation: "2057:5:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57533;
                        readonly src: "2041:21:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Call_$57379_calldata_ptr_$dyn_calldata_ptr";
                            readonly typeString: "struct IMulticall3.Call[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 57520;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 57519;
                                    readonly name: "Call";
                                    readonly nameLocations: readonly ["2041:4:161"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 57379;
                                    readonly src: "2041:4:161";
                                };
                                readonly referencedDeclaration: 57379;
                                readonly src: "2041:4:161";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Call_$57379_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Call";
                                };
                            };
                            readonly id: 57521;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2041:6:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Call_$57379_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Call[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2019:44:161";
                };
                readonly returnParameters: {
                    readonly id: 57532;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57525;
                        readonly mutability: "mutable";
                        readonly name: "blockNumber";
                        readonly nameLocation: "2122:11:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57533;
                        readonly src: "2114:19:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 57524;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2114:7:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 57527;
                        readonly mutability: "mutable";
                        readonly name: "blockHash";
                        readonly nameLocation: "2143:9:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57533;
                        readonly src: "2135:17:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 57526;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2135:7:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 57531;
                        readonly mutability: "mutable";
                        readonly name: "returnData";
                        readonly nameLocation: "2170:10:161";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57533;
                        readonly src: "2154:26:161";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Result_$57400_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct IMulticall3.Result[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 57529;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 57528;
                                    readonly name: "Result";
                                    readonly nameLocations: readonly ["2154:6:161"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 57400;
                                    readonly src: "2154:6:161";
                                };
                                readonly referencedDeclaration: 57400;
                                readonly src: "2154:6:161";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Result_$57400_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Result";
                                };
                            };
                            readonly id: 57530;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2154:8:161";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Result_$57400_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Result[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2113:68:161";
                };
                readonly scope: 57534;
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
            readonly linearizedBaseContracts: readonly [57534];
            readonly name: "IMulticall3";
            readonly nameLocation: "110:11:161";
            readonly scope: 57535;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 161;
};
//# sourceMappingURL=IMulticall3.d.ts.map