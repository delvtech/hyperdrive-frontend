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
        readonly id: 57665;
        readonly exportedSymbols: {
            readonly IMulticall3: readonly [57664];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "32:2153:165";
        readonly nodes: readonly [{
            readonly id: 57503;
            readonly nodeType: "PragmaDirective";
            readonly src: "32:31:165";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.6", ".2", "<", "0.9", ".0"];
        }, {
            readonly id: 57504;
            readonly nodeType: "PragmaDirective";
            readonly src: "65:33:165";
            readonly nodes: readonly [];
            readonly literals: readonly ["experimental", "ABIEncoderV2"];
        }, {
            readonly id: 57664;
            readonly nodeType: "ContractDefinition";
            readonly src: "100:2084:165";
            readonly nodes: readonly [{
                readonly id: 57509;
                readonly nodeType: "StructDefinition";
                readonly src: "128:67:165";
                readonly nodes: readonly [];
                readonly canonicalName: "IMulticall3.Call";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 57506;
                    readonly mutability: "mutable";
                    readonly name: "target";
                    readonly nameLocation: "158:6:165";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 57509;
                    readonly src: "150:14:165";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 57505;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "150:7:165";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 57508;
                    readonly mutability: "mutable";
                    readonly name: "callData";
                    readonly nameLocation: "180:8:165";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 57509;
                    readonly src: "174:14:165";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes_storage_ptr";
                        readonly typeString: "bytes";
                    };
                    readonly typeName: {
                        readonly id: 57507;
                        readonly name: "bytes";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "174:5:165";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_storage_ptr";
                            readonly typeString: "bytes";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "Call";
                readonly nameLocation: "135:4:165";
                readonly scope: 57664;
                readonly visibility: "public";
            }, {
                readonly id: 57516;
                readonly nodeType: "StructDefinition";
                readonly src: "201:95:165";
                readonly nodes: readonly [];
                readonly canonicalName: "IMulticall3.Call3";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 57511;
                    readonly mutability: "mutable";
                    readonly name: "target";
                    readonly nameLocation: "232:6:165";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 57516;
                    readonly src: "224:14:165";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 57510;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "224:7:165";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 57513;
                    readonly mutability: "mutable";
                    readonly name: "allowFailure";
                    readonly nameLocation: "253:12:165";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 57516;
                    readonly src: "248:17:165";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                    readonly typeName: {
                        readonly id: 57512;
                        readonly name: "bool";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "248:4:165";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 57515;
                    readonly mutability: "mutable";
                    readonly name: "callData";
                    readonly nameLocation: "281:8:165";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 57516;
                    readonly src: "275:14:165";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes_storage_ptr";
                        readonly typeString: "bytes";
                    };
                    readonly typeName: {
                        readonly id: 57514;
                        readonly name: "bytes";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "275:5:165";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_storage_ptr";
                            readonly typeString: "bytes";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "Call3";
                readonly nameLocation: "208:5:165";
                readonly scope: 57664;
                readonly visibility: "public";
            }, {
                readonly id: 57525;
                readonly nodeType: "StructDefinition";
                readonly src: "302:123:165";
                readonly nodes: readonly [];
                readonly canonicalName: "IMulticall3.Call3Value";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 57518;
                    readonly mutability: "mutable";
                    readonly name: "target";
                    readonly nameLocation: "338:6:165";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 57525;
                    readonly src: "330:14:165";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 57517;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "330:7:165";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 57520;
                    readonly mutability: "mutable";
                    readonly name: "allowFailure";
                    readonly nameLocation: "359:12:165";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 57525;
                    readonly src: "354:17:165";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                    readonly typeName: {
                        readonly id: 57519;
                        readonly name: "bool";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "354:4:165";
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
                    readonly name: "value";
                    readonly nameLocation: "389:5:165";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 57525;
                    readonly src: "381:13:165";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 57521;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "381:7:165";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 57524;
                    readonly mutability: "mutable";
                    readonly name: "callData";
                    readonly nameLocation: "410:8:165";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 57525;
                    readonly src: "404:14:165";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes_storage_ptr";
                        readonly typeString: "bytes";
                    };
                    readonly typeName: {
                        readonly id: 57523;
                        readonly name: "bytes";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "404:5:165";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_storage_ptr";
                            readonly typeString: "bytes";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "Call3Value";
                readonly nameLocation: "309:10:165";
                readonly scope: 57664;
                readonly visibility: "public";
            }, {
                readonly id: 57530;
                readonly nodeType: "StructDefinition";
                readonly src: "431:69:165";
                readonly nodes: readonly [];
                readonly canonicalName: "IMulticall3.Result";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 57527;
                    readonly mutability: "mutable";
                    readonly name: "success";
                    readonly nameLocation: "460:7:165";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 57530;
                    readonly src: "455:12:165";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                    readonly typeName: {
                        readonly id: 57526;
                        readonly name: "bool";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "455:4:165";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 57529;
                    readonly mutability: "mutable";
                    readonly name: "returnData";
                    readonly nameLocation: "483:10:165";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 57530;
                    readonly src: "477:16:165";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes_storage_ptr";
                        readonly typeString: "bytes";
                    };
                    readonly typeName: {
                        readonly id: 57528;
                        readonly name: "bytes";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "477:5:165";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_storage_ptr";
                            readonly typeString: "bytes";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "Result";
                readonly nameLocation: "438:6:165";
                readonly scope: 57664;
                readonly visibility: "public";
            }, {
                readonly id: 57542;
                readonly nodeType: "FunctionDefinition";
                readonly src: "506:140:165";
                readonly nodes: readonly [];
                readonly functionSelector: "252dba42";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "aggregate";
                readonly nameLocation: "515:9:165";
                readonly parameters: {
                    readonly id: 57535;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57534;
                        readonly mutability: "mutable";
                        readonly name: "calls";
                        readonly nameLocation: "541:5:165";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57542;
                        readonly src: "525:21:165";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Call_$57509_calldata_ptr_$dyn_calldata_ptr";
                            readonly typeString: "struct IMulticall3.Call[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 57532;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 57531;
                                    readonly name: "Call";
                                    readonly nameLocations: readonly ["525:4:165"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 57509;
                                    readonly src: "525:4:165";
                                };
                                readonly referencedDeclaration: 57509;
                                readonly src: "525:4:165";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Call_$57509_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Call";
                                };
                            };
                            readonly id: 57533;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "525:6:165";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Call_$57509_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Call[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "524:23:165";
                };
                readonly returnParameters: {
                    readonly id: 57541;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57537;
                        readonly mutability: "mutable";
                        readonly name: "blockNumber";
                        readonly nameLocation: "606:11:165";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57542;
                        readonly src: "598:19:165";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 57536;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "598:7:165";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 57540;
                        readonly mutability: "mutable";
                        readonly name: "returnData";
                        readonly nameLocation: "634:10:165";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57542;
                        readonly src: "619:25:165";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "bytes[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 57538;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "619:5:165";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly id: 57539;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "619:7:165";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes_storage_$dyn_storage_ptr";
                                readonly typeString: "bytes[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "597:48:165";
                };
                readonly scope: 57664;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57553;
                readonly nodeType: "FunctionDefinition";
                readonly src: "652:98:165";
                readonly nodes: readonly [];
                readonly functionSelector: "82ad56cb";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "aggregate3";
                readonly nameLocation: "661:10:165";
                readonly parameters: {
                    readonly id: 57547;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57546;
                        readonly mutability: "mutable";
                        readonly name: "calls";
                        readonly nameLocation: "689:5:165";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57553;
                        readonly src: "672:22:165";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Call3_$57516_calldata_ptr_$dyn_calldata_ptr";
                            readonly typeString: "struct IMulticall3.Call3[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 57544;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 57543;
                                    readonly name: "Call3";
                                    readonly nameLocations: readonly ["672:5:165"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 57516;
                                    readonly src: "672:5:165";
                                };
                                readonly referencedDeclaration: 57516;
                                readonly src: "672:5:165";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Call3_$57516_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Call3";
                                };
                            };
                            readonly id: 57545;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "672:7:165";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Call3_$57516_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Call3[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "671:24:165";
                };
                readonly returnParameters: {
                    readonly id: 57552;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57551;
                        readonly mutability: "mutable";
                        readonly name: "returnData";
                        readonly nameLocation: "738:10:165";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57553;
                        readonly src: "722:26:165";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Result_$57530_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct IMulticall3.Result[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 57549;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 57548;
                                    readonly name: "Result";
                                    readonly nameLocations: readonly ["722:6:165"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 57530;
                                    readonly src: "722:6:165";
                                };
                                readonly referencedDeclaration: 57530;
                                readonly src: "722:6:165";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Result_$57530_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Result";
                                };
                            };
                            readonly id: 57550;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "722:8:165";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Result_$57530_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Result[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "721:28:165";
                };
                readonly scope: 57664;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57564;
                readonly nodeType: "FunctionDefinition";
                readonly src: "756:108:165";
                readonly nodes: readonly [];
                readonly functionSelector: "174dea71";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "aggregate3Value";
                readonly nameLocation: "765:15:165";
                readonly parameters: {
                    readonly id: 57558;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57557;
                        readonly mutability: "mutable";
                        readonly name: "calls";
                        readonly nameLocation: "803:5:165";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57564;
                        readonly src: "781:27:165";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Call3Value_$57525_calldata_ptr_$dyn_calldata_ptr";
                            readonly typeString: "struct IMulticall3.Call3Value[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 57555;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 57554;
                                    readonly name: "Call3Value";
                                    readonly nameLocations: readonly ["781:10:165"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 57525;
                                    readonly src: "781:10:165";
                                };
                                readonly referencedDeclaration: 57525;
                                readonly src: "781:10:165";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Call3Value_$57525_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Call3Value";
                                };
                            };
                            readonly id: 57556;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "781:12:165";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Call3Value_$57525_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Call3Value[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "780:29:165";
                };
                readonly returnParameters: {
                    readonly id: 57563;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57562;
                        readonly mutability: "mutable";
                        readonly name: "returnData";
                        readonly nameLocation: "852:10:165";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57564;
                        readonly src: "836:26:165";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Result_$57530_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct IMulticall3.Result[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 57560;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 57559;
                                    readonly name: "Result";
                                    readonly nameLocations: readonly ["836:6:165"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 57530;
                                    readonly src: "836:6:165";
                                };
                                readonly referencedDeclaration: 57530;
                                readonly src: "836:6:165";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Result_$57530_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Result";
                                };
                            };
                            readonly id: 57561;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "836:8:165";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Result_$57530_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Result[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "835:28:165";
                };
                readonly scope: 57664;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57579;
                readonly nodeType: "FunctionDefinition";
                readonly src: "870:168:165";
                readonly nodes: readonly [];
                readonly functionSelector: "c3077fa9";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "blockAndAggregate";
                readonly nameLocation: "879:17:165";
                readonly parameters: {
                    readonly id: 57569;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57568;
                        readonly mutability: "mutable";
                        readonly name: "calls";
                        readonly nameLocation: "913:5:165";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57579;
                        readonly src: "897:21:165";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Call_$57509_calldata_ptr_$dyn_calldata_ptr";
                            readonly typeString: "struct IMulticall3.Call[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 57566;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 57565;
                                    readonly name: "Call";
                                    readonly nameLocations: readonly ["897:4:165"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 57509;
                                    readonly src: "897:4:165";
                                };
                                readonly referencedDeclaration: 57509;
                                readonly src: "897:4:165";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Call_$57509_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Call";
                                };
                            };
                            readonly id: 57567;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "897:6:165";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Call_$57509_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Call[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "896:23:165";
                };
                readonly returnParameters: {
                    readonly id: 57578;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57571;
                        readonly mutability: "mutable";
                        readonly name: "blockNumber";
                        readonly nameLocation: "978:11:165";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57579;
                        readonly src: "970:19:165";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 57570;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "970:7:165";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 57573;
                        readonly mutability: "mutable";
                        readonly name: "blockHash";
                        readonly nameLocation: "999:9:165";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57579;
                        readonly src: "991:17:165";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 57572;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "991:7:165";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 57577;
                        readonly mutability: "mutable";
                        readonly name: "returnData";
                        readonly nameLocation: "1026:10:165";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57579;
                        readonly src: "1010:26:165";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Result_$57530_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct IMulticall3.Result[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 57575;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 57574;
                                    readonly name: "Result";
                                    readonly nameLocations: readonly ["1010:6:165"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 57530;
                                    readonly src: "1010:6:165";
                                };
                                readonly referencedDeclaration: 57530;
                                readonly src: "1010:6:165";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Result_$57530_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Result";
                                };
                            };
                            readonly id: 57576;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1010:8:165";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Result_$57530_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Result[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "969:68:165";
                };
                readonly scope: 57664;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57584;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1044:62:165";
                readonly nodes: readonly [];
                readonly functionSelector: "3e64a696";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getBasefee";
                readonly nameLocation: "1053:10:165";
                readonly parameters: {
                    readonly id: 57580;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1063:2:165";
                };
                readonly returnParameters: {
                    readonly id: 57583;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57582;
                        readonly mutability: "mutable";
                        readonly name: "basefee";
                        readonly nameLocation: "1097:7:165";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57584;
                        readonly src: "1089:15:165";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 57581;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1089:7:165";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1088:17:165";
                };
                readonly scope: 57664;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57591;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1112:85:165";
                readonly nodes: readonly [];
                readonly functionSelector: "ee82ac5e";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getBlockHash";
                readonly nameLocation: "1121:12:165";
                readonly parameters: {
                    readonly id: 57587;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57586;
                        readonly mutability: "mutable";
                        readonly name: "blockNumber";
                        readonly nameLocation: "1142:11:165";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57591;
                        readonly src: "1134:19:165";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 57585;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1134:7:165";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1133:21:165";
                };
                readonly returnParameters: {
                    readonly id: 57590;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57589;
                        readonly mutability: "mutable";
                        readonly name: "blockHash";
                        readonly nameLocation: "1186:9:165";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57591;
                        readonly src: "1178:17:165";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 57588;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1178:7:165";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1177:19:165";
                };
                readonly scope: 57664;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57596;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1203:70:165";
                readonly nodes: readonly [];
                readonly functionSelector: "42cbb15c";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getBlockNumber";
                readonly nameLocation: "1212:14:165";
                readonly parameters: {
                    readonly id: 57592;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1226:2:165";
                };
                readonly returnParameters: {
                    readonly id: 57595;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57594;
                        readonly mutability: "mutable";
                        readonly name: "blockNumber";
                        readonly nameLocation: "1260:11:165";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57596;
                        readonly src: "1252:19:165";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 57593;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1252:7:165";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1251:21:165";
                };
                readonly scope: 57664;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57601;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1279:62:165";
                readonly nodes: readonly [];
                readonly functionSelector: "3408e470";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getChainId";
                readonly nameLocation: "1288:10:165";
                readonly parameters: {
                    readonly id: 57597;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1298:2:165";
                };
                readonly returnParameters: {
                    readonly id: 57600;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57599;
                        readonly mutability: "mutable";
                        readonly name: "chainid";
                        readonly nameLocation: "1332:7:165";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57601;
                        readonly src: "1324:15:165";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 57598;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1324:7:165";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1323:17:165";
                };
                readonly scope: 57664;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57606;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1347:76:165";
                readonly nodes: readonly [];
                readonly functionSelector: "a8b0574e";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getCurrentBlockCoinbase";
                readonly nameLocation: "1356:23:165";
                readonly parameters: {
                    readonly id: 57602;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1379:2:165";
                };
                readonly returnParameters: {
                    readonly id: 57605;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57604;
                        readonly mutability: "mutable";
                        readonly name: "coinbase";
                        readonly nameLocation: "1413:8:165";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57606;
                        readonly src: "1405:16:165";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 57603;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1405:7:165";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1404:18:165";
                };
                readonly scope: 57664;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57611;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1429:80:165";
                readonly nodes: readonly [];
                readonly functionSelector: "72425d9d";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getCurrentBlockDifficulty";
                readonly nameLocation: "1438:25:165";
                readonly parameters: {
                    readonly id: 57607;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1463:2:165";
                };
                readonly returnParameters: {
                    readonly id: 57610;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57609;
                        readonly mutability: "mutable";
                        readonly name: "difficulty";
                        readonly nameLocation: "1497:10:165";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57611;
                        readonly src: "1489:18:165";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 57608;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1489:7:165";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1488:20:165";
                };
                readonly scope: 57664;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57616;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1515:76:165";
                readonly nodes: readonly [];
                readonly functionSelector: "86d516e8";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getCurrentBlockGasLimit";
                readonly nameLocation: "1524:23:165";
                readonly parameters: {
                    readonly id: 57612;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1547:2:165";
                };
                readonly returnParameters: {
                    readonly id: 57615;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57614;
                        readonly mutability: "mutable";
                        readonly name: "gaslimit";
                        readonly nameLocation: "1581:8:165";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57616;
                        readonly src: "1573:16:165";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 57613;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1573:7:165";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1572:18:165";
                };
                readonly scope: 57664;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57621;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1597:78:165";
                readonly nodes: readonly [];
                readonly functionSelector: "0f28c97d";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getCurrentBlockTimestamp";
                readonly nameLocation: "1606:24:165";
                readonly parameters: {
                    readonly id: 57617;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1630:2:165";
                };
                readonly returnParameters: {
                    readonly id: 57620;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57619;
                        readonly mutability: "mutable";
                        readonly name: "timestamp";
                        readonly nameLocation: "1664:9:165";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57621;
                        readonly src: "1656:17:165";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 57618;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1656:7:165";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1655:19:165";
                };
                readonly scope: 57664;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57628;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1681:77:165";
                readonly nodes: readonly [];
                readonly functionSelector: "4d2301cc";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getEthBalance";
                readonly nameLocation: "1690:13:165";
                readonly parameters: {
                    readonly id: 57624;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57623;
                        readonly mutability: "mutable";
                        readonly name: "addr";
                        readonly nameLocation: "1712:4:165";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57628;
                        readonly src: "1704:12:165";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 57622;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1704:7:165";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1703:14:165";
                };
                readonly returnParameters: {
                    readonly id: 57627;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57626;
                        readonly mutability: "mutable";
                        readonly name: "balance";
                        readonly nameLocation: "1749:7:165";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57628;
                        readonly src: "1741:15:165";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 57625;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1741:7:165";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1740:17:165";
                };
                readonly scope: 57664;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57633;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1764:70:165";
                readonly nodes: readonly [];
                readonly functionSelector: "27e86d6e";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getLastBlockHash";
                readonly nameLocation: "1773:16:165";
                readonly parameters: {
                    readonly id: 57629;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1789:2:165";
                };
                readonly returnParameters: {
                    readonly id: 57632;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57631;
                        readonly mutability: "mutable";
                        readonly name: "blockHash";
                        readonly nameLocation: "1823:9:165";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57633;
                        readonly src: "1815:17:165";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 57630;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1815:7:165";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1814:19:165";
                };
                readonly scope: 57664;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57646;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1840:144:165";
                readonly nodes: readonly [];
                readonly functionSelector: "bce38bd7";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "tryAggregate";
                readonly nameLocation: "1849:12:165";
                readonly parameters: {
                    readonly id: 57640;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57635;
                        readonly mutability: "mutable";
                        readonly name: "requireSuccess";
                        readonly nameLocation: "1867:14:165";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57646;
                        readonly src: "1862:19:165";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 57634;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1862:4:165";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 57639;
                        readonly mutability: "mutable";
                        readonly name: "calls";
                        readonly nameLocation: "1899:5:165";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57646;
                        readonly src: "1883:21:165";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Call_$57509_calldata_ptr_$dyn_calldata_ptr";
                            readonly typeString: "struct IMulticall3.Call[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 57637;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 57636;
                                    readonly name: "Call";
                                    readonly nameLocations: readonly ["1883:4:165"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 57509;
                                    readonly src: "1883:4:165";
                                };
                                readonly referencedDeclaration: 57509;
                                readonly src: "1883:4:165";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Call_$57509_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Call";
                                };
                            };
                            readonly id: 57638;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1883:6:165";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Call_$57509_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Call[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1861:44:165";
                };
                readonly returnParameters: {
                    readonly id: 57645;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57644;
                        readonly mutability: "mutable";
                        readonly name: "returnData";
                        readonly nameLocation: "1972:10:165";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57646;
                        readonly src: "1956:26:165";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Result_$57530_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct IMulticall3.Result[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 57642;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 57641;
                                    readonly name: "Result";
                                    readonly nameLocations: readonly ["1956:6:165"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 57530;
                                    readonly src: "1956:6:165";
                                };
                                readonly referencedDeclaration: 57530;
                                readonly src: "1956:6:165";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Result_$57530_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Result";
                                };
                            };
                            readonly id: 57643;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1956:8:165";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Result_$57530_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Result[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1955:28:165";
                };
                readonly scope: 57664;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57663;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1990:192:165";
                readonly nodes: readonly [];
                readonly functionSelector: "399542e9";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "tryBlockAndAggregate";
                readonly nameLocation: "1999:20:165";
                readonly parameters: {
                    readonly id: 57653;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57648;
                        readonly mutability: "mutable";
                        readonly name: "requireSuccess";
                        readonly nameLocation: "2025:14:165";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57663;
                        readonly src: "2020:19:165";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 57647;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2020:4:165";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 57652;
                        readonly mutability: "mutable";
                        readonly name: "calls";
                        readonly nameLocation: "2057:5:165";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57663;
                        readonly src: "2041:21:165";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Call_$57509_calldata_ptr_$dyn_calldata_ptr";
                            readonly typeString: "struct IMulticall3.Call[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 57650;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 57649;
                                    readonly name: "Call";
                                    readonly nameLocations: readonly ["2041:4:165"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 57509;
                                    readonly src: "2041:4:165";
                                };
                                readonly referencedDeclaration: 57509;
                                readonly src: "2041:4:165";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Call_$57509_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Call";
                                };
                            };
                            readonly id: 57651;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2041:6:165";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Call_$57509_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Call[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2019:44:165";
                };
                readonly returnParameters: {
                    readonly id: 57662;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57655;
                        readonly mutability: "mutable";
                        readonly name: "blockNumber";
                        readonly nameLocation: "2122:11:165";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57663;
                        readonly src: "2114:19:165";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 57654;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2114:7:165";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 57657;
                        readonly mutability: "mutable";
                        readonly name: "blockHash";
                        readonly nameLocation: "2143:9:165";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57663;
                        readonly src: "2135:17:165";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 57656;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2135:7:165";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 57661;
                        readonly mutability: "mutable";
                        readonly name: "returnData";
                        readonly nameLocation: "2170:10:165";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57663;
                        readonly src: "2154:26:165";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Result_$57530_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct IMulticall3.Result[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 57659;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 57658;
                                    readonly name: "Result";
                                    readonly nameLocations: readonly ["2154:6:165"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 57530;
                                    readonly src: "2154:6:165";
                                };
                                readonly referencedDeclaration: 57530;
                                readonly src: "2154:6:165";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Result_$57530_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Result";
                                };
                            };
                            readonly id: 57660;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2154:8:165";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Result_$57530_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Result[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2113:68:165";
                };
                readonly scope: 57664;
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
            readonly linearizedBaseContracts: readonly [57664];
            readonly name: "IMulticall3";
            readonly nameLocation: "110:11:165";
            readonly scope: 57665;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 165;
};
//# sourceMappingURL=IMulticall3.d.ts.map