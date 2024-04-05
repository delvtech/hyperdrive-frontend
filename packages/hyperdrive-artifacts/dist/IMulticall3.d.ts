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
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"aggregate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"internalType\":\"bytes[]\",\"name\":\"returnData\",\"type\":\"bytes[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"allowFailure\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call3[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"aggregate3\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"allowFailure\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call3Value[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"aggregate3Value\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"blockAndAggregate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBasefee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"basefee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"name\":\"getBlockHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBlockNumber\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getChainId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"chainid\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockCoinbase\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"coinbase\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockDifficulty\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"difficulty\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockGasLimit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"gaslimit\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockTimestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"timestamp\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"getEthBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getLastBlockHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"requireSuccess\",\"type\":\"bool\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"tryAggregate\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"requireSuccess\",\"type\":\"bool\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"tryBlockAndAggregate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/interfaces/IMulticall3.sol\":\"IMulticall3\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/interfaces/IMulticall3.sol\":{\"keccak256\":\"0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0\",\"dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2\"]}},\"version\":1}";
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
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
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
        readonly id: 57057;
        readonly exportedSymbols: {
            readonly IMulticall3: readonly [57056];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "32:2153:159";
        readonly nodes: readonly [{
            readonly id: 56895;
            readonly nodeType: "PragmaDirective";
            readonly src: "32:31:159";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.6", ".2", "<", "0.9", ".0"];
        }, {
            readonly id: 56896;
            readonly nodeType: "PragmaDirective";
            readonly src: "65:33:159";
            readonly nodes: readonly [];
            readonly literals: readonly ["experimental", "ABIEncoderV2"];
        }, {
            readonly id: 57056;
            readonly nodeType: "ContractDefinition";
            readonly src: "100:2084:159";
            readonly nodes: readonly [{
                readonly id: 56901;
                readonly nodeType: "StructDefinition";
                readonly src: "128:67:159";
                readonly nodes: readonly [];
                readonly canonicalName: "IMulticall3.Call";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 56898;
                    readonly mutability: "mutable";
                    readonly name: "target";
                    readonly nameLocation: "158:6:159";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 56901;
                    readonly src: "150:14:159";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 56897;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "150:7:159";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 56900;
                    readonly mutability: "mutable";
                    readonly name: "callData";
                    readonly nameLocation: "180:8:159";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 56901;
                    readonly src: "174:14:159";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes_storage_ptr";
                        readonly typeString: "bytes";
                    };
                    readonly typeName: {
                        readonly id: 56899;
                        readonly name: "bytes";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "174:5:159";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_storage_ptr";
                            readonly typeString: "bytes";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "Call";
                readonly nameLocation: "135:4:159";
                readonly scope: 57056;
                readonly visibility: "public";
            }, {
                readonly id: 56908;
                readonly nodeType: "StructDefinition";
                readonly src: "201:95:159";
                readonly nodes: readonly [];
                readonly canonicalName: "IMulticall3.Call3";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 56903;
                    readonly mutability: "mutable";
                    readonly name: "target";
                    readonly nameLocation: "232:6:159";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 56908;
                    readonly src: "224:14:159";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 56902;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "224:7:159";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 56905;
                    readonly mutability: "mutable";
                    readonly name: "allowFailure";
                    readonly nameLocation: "253:12:159";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 56908;
                    readonly src: "248:17:159";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                    readonly typeName: {
                        readonly id: 56904;
                        readonly name: "bool";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "248:4:159";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 56907;
                    readonly mutability: "mutable";
                    readonly name: "callData";
                    readonly nameLocation: "281:8:159";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 56908;
                    readonly src: "275:14:159";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes_storage_ptr";
                        readonly typeString: "bytes";
                    };
                    readonly typeName: {
                        readonly id: 56906;
                        readonly name: "bytes";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "275:5:159";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_storage_ptr";
                            readonly typeString: "bytes";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "Call3";
                readonly nameLocation: "208:5:159";
                readonly scope: 57056;
                readonly visibility: "public";
            }, {
                readonly id: 56917;
                readonly nodeType: "StructDefinition";
                readonly src: "302:123:159";
                readonly nodes: readonly [];
                readonly canonicalName: "IMulticall3.Call3Value";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 56910;
                    readonly mutability: "mutable";
                    readonly name: "target";
                    readonly nameLocation: "338:6:159";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 56917;
                    readonly src: "330:14:159";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 56909;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "330:7:159";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 56912;
                    readonly mutability: "mutable";
                    readonly name: "allowFailure";
                    readonly nameLocation: "359:12:159";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 56917;
                    readonly src: "354:17:159";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                    readonly typeName: {
                        readonly id: 56911;
                        readonly name: "bool";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "354:4:159";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 56914;
                    readonly mutability: "mutable";
                    readonly name: "value";
                    readonly nameLocation: "389:5:159";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 56917;
                    readonly src: "381:13:159";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 56913;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "381:7:159";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 56916;
                    readonly mutability: "mutable";
                    readonly name: "callData";
                    readonly nameLocation: "410:8:159";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 56917;
                    readonly src: "404:14:159";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes_storage_ptr";
                        readonly typeString: "bytes";
                    };
                    readonly typeName: {
                        readonly id: 56915;
                        readonly name: "bytes";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "404:5:159";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_storage_ptr";
                            readonly typeString: "bytes";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "Call3Value";
                readonly nameLocation: "309:10:159";
                readonly scope: 57056;
                readonly visibility: "public";
            }, {
                readonly id: 56922;
                readonly nodeType: "StructDefinition";
                readonly src: "431:69:159";
                readonly nodes: readonly [];
                readonly canonicalName: "IMulticall3.Result";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 56919;
                    readonly mutability: "mutable";
                    readonly name: "success";
                    readonly nameLocation: "460:7:159";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 56922;
                    readonly src: "455:12:159";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                    readonly typeName: {
                        readonly id: 56918;
                        readonly name: "bool";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "455:4:159";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 56921;
                    readonly mutability: "mutable";
                    readonly name: "returnData";
                    readonly nameLocation: "483:10:159";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 56922;
                    readonly src: "477:16:159";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes_storage_ptr";
                        readonly typeString: "bytes";
                    };
                    readonly typeName: {
                        readonly id: 56920;
                        readonly name: "bytes";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "477:5:159";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_storage_ptr";
                            readonly typeString: "bytes";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "Result";
                readonly nameLocation: "438:6:159";
                readonly scope: 57056;
                readonly visibility: "public";
            }, {
                readonly id: 56934;
                readonly nodeType: "FunctionDefinition";
                readonly src: "506:140:159";
                readonly nodes: readonly [];
                readonly functionSelector: "252dba42";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "aggregate";
                readonly nameLocation: "515:9:159";
                readonly parameters: {
                    readonly id: 56927;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 56926;
                        readonly mutability: "mutable";
                        readonly name: "calls";
                        readonly nameLocation: "541:5:159";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 56934;
                        readonly src: "525:21:159";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Call_$56901_calldata_ptr_$dyn_calldata_ptr";
                            readonly typeString: "struct IMulticall3.Call[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 56924;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 56923;
                                    readonly name: "Call";
                                    readonly nameLocations: readonly ["525:4:159"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 56901;
                                    readonly src: "525:4:159";
                                };
                                readonly referencedDeclaration: 56901;
                                readonly src: "525:4:159";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Call_$56901_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Call";
                                };
                            };
                            readonly id: 56925;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "525:6:159";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Call_$56901_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Call[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "524:23:159";
                };
                readonly returnParameters: {
                    readonly id: 56933;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 56929;
                        readonly mutability: "mutable";
                        readonly name: "blockNumber";
                        readonly nameLocation: "606:11:159";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 56934;
                        readonly src: "598:19:159";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 56928;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "598:7:159";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 56932;
                        readonly mutability: "mutable";
                        readonly name: "returnData";
                        readonly nameLocation: "634:10:159";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 56934;
                        readonly src: "619:25:159";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "bytes[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 56930;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "619:5:159";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly id: 56931;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "619:7:159";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes_storage_$dyn_storage_ptr";
                                readonly typeString: "bytes[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "597:48:159";
                };
                readonly scope: 57056;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 56945;
                readonly nodeType: "FunctionDefinition";
                readonly src: "652:98:159";
                readonly nodes: readonly [];
                readonly functionSelector: "82ad56cb";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "aggregate3";
                readonly nameLocation: "661:10:159";
                readonly parameters: {
                    readonly id: 56939;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 56938;
                        readonly mutability: "mutable";
                        readonly name: "calls";
                        readonly nameLocation: "689:5:159";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 56945;
                        readonly src: "672:22:159";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Call3_$56908_calldata_ptr_$dyn_calldata_ptr";
                            readonly typeString: "struct IMulticall3.Call3[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 56936;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 56935;
                                    readonly name: "Call3";
                                    readonly nameLocations: readonly ["672:5:159"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 56908;
                                    readonly src: "672:5:159";
                                };
                                readonly referencedDeclaration: 56908;
                                readonly src: "672:5:159";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Call3_$56908_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Call3";
                                };
                            };
                            readonly id: 56937;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "672:7:159";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Call3_$56908_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Call3[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "671:24:159";
                };
                readonly returnParameters: {
                    readonly id: 56944;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 56943;
                        readonly mutability: "mutable";
                        readonly name: "returnData";
                        readonly nameLocation: "738:10:159";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 56945;
                        readonly src: "722:26:159";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Result_$56922_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct IMulticall3.Result[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 56941;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 56940;
                                    readonly name: "Result";
                                    readonly nameLocations: readonly ["722:6:159"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 56922;
                                    readonly src: "722:6:159";
                                };
                                readonly referencedDeclaration: 56922;
                                readonly src: "722:6:159";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Result_$56922_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Result";
                                };
                            };
                            readonly id: 56942;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "722:8:159";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Result_$56922_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Result[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "721:28:159";
                };
                readonly scope: 57056;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 56956;
                readonly nodeType: "FunctionDefinition";
                readonly src: "756:108:159";
                readonly nodes: readonly [];
                readonly functionSelector: "174dea71";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "aggregate3Value";
                readonly nameLocation: "765:15:159";
                readonly parameters: {
                    readonly id: 56950;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 56949;
                        readonly mutability: "mutable";
                        readonly name: "calls";
                        readonly nameLocation: "803:5:159";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 56956;
                        readonly src: "781:27:159";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Call3Value_$56917_calldata_ptr_$dyn_calldata_ptr";
                            readonly typeString: "struct IMulticall3.Call3Value[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 56947;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 56946;
                                    readonly name: "Call3Value";
                                    readonly nameLocations: readonly ["781:10:159"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 56917;
                                    readonly src: "781:10:159";
                                };
                                readonly referencedDeclaration: 56917;
                                readonly src: "781:10:159";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Call3Value_$56917_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Call3Value";
                                };
                            };
                            readonly id: 56948;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "781:12:159";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Call3Value_$56917_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Call3Value[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "780:29:159";
                };
                readonly returnParameters: {
                    readonly id: 56955;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 56954;
                        readonly mutability: "mutable";
                        readonly name: "returnData";
                        readonly nameLocation: "852:10:159";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 56956;
                        readonly src: "836:26:159";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Result_$56922_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct IMulticall3.Result[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 56952;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 56951;
                                    readonly name: "Result";
                                    readonly nameLocations: readonly ["836:6:159"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 56922;
                                    readonly src: "836:6:159";
                                };
                                readonly referencedDeclaration: 56922;
                                readonly src: "836:6:159";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Result_$56922_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Result";
                                };
                            };
                            readonly id: 56953;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "836:8:159";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Result_$56922_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Result[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "835:28:159";
                };
                readonly scope: 57056;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 56971;
                readonly nodeType: "FunctionDefinition";
                readonly src: "870:168:159";
                readonly nodes: readonly [];
                readonly functionSelector: "c3077fa9";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "blockAndAggregate";
                readonly nameLocation: "879:17:159";
                readonly parameters: {
                    readonly id: 56961;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 56960;
                        readonly mutability: "mutable";
                        readonly name: "calls";
                        readonly nameLocation: "913:5:159";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 56971;
                        readonly src: "897:21:159";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Call_$56901_calldata_ptr_$dyn_calldata_ptr";
                            readonly typeString: "struct IMulticall3.Call[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 56958;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 56957;
                                    readonly name: "Call";
                                    readonly nameLocations: readonly ["897:4:159"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 56901;
                                    readonly src: "897:4:159";
                                };
                                readonly referencedDeclaration: 56901;
                                readonly src: "897:4:159";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Call_$56901_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Call";
                                };
                            };
                            readonly id: 56959;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "897:6:159";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Call_$56901_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Call[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "896:23:159";
                };
                readonly returnParameters: {
                    readonly id: 56970;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 56963;
                        readonly mutability: "mutable";
                        readonly name: "blockNumber";
                        readonly nameLocation: "978:11:159";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 56971;
                        readonly src: "970:19:159";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 56962;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "970:7:159";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 56965;
                        readonly mutability: "mutable";
                        readonly name: "blockHash";
                        readonly nameLocation: "999:9:159";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 56971;
                        readonly src: "991:17:159";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 56964;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "991:7:159";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 56969;
                        readonly mutability: "mutable";
                        readonly name: "returnData";
                        readonly nameLocation: "1026:10:159";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 56971;
                        readonly src: "1010:26:159";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Result_$56922_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct IMulticall3.Result[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 56967;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 56966;
                                    readonly name: "Result";
                                    readonly nameLocations: readonly ["1010:6:159"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 56922;
                                    readonly src: "1010:6:159";
                                };
                                readonly referencedDeclaration: 56922;
                                readonly src: "1010:6:159";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Result_$56922_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Result";
                                };
                            };
                            readonly id: 56968;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1010:8:159";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Result_$56922_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Result[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "969:68:159";
                };
                readonly scope: 57056;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 56976;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1044:62:159";
                readonly nodes: readonly [];
                readonly functionSelector: "3e64a696";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getBasefee";
                readonly nameLocation: "1053:10:159";
                readonly parameters: {
                    readonly id: 56972;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1063:2:159";
                };
                readonly returnParameters: {
                    readonly id: 56975;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 56974;
                        readonly mutability: "mutable";
                        readonly name: "basefee";
                        readonly nameLocation: "1097:7:159";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 56976;
                        readonly src: "1089:15:159";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 56973;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1089:7:159";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1088:17:159";
                };
                readonly scope: 57056;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 56983;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1112:85:159";
                readonly nodes: readonly [];
                readonly functionSelector: "ee82ac5e";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getBlockHash";
                readonly nameLocation: "1121:12:159";
                readonly parameters: {
                    readonly id: 56979;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 56978;
                        readonly mutability: "mutable";
                        readonly name: "blockNumber";
                        readonly nameLocation: "1142:11:159";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 56983;
                        readonly src: "1134:19:159";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 56977;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1134:7:159";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1133:21:159";
                };
                readonly returnParameters: {
                    readonly id: 56982;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 56981;
                        readonly mutability: "mutable";
                        readonly name: "blockHash";
                        readonly nameLocation: "1186:9:159";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 56983;
                        readonly src: "1178:17:159";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 56980;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1178:7:159";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1177:19:159";
                };
                readonly scope: 57056;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 56988;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1203:70:159";
                readonly nodes: readonly [];
                readonly functionSelector: "42cbb15c";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getBlockNumber";
                readonly nameLocation: "1212:14:159";
                readonly parameters: {
                    readonly id: 56984;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1226:2:159";
                };
                readonly returnParameters: {
                    readonly id: 56987;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 56986;
                        readonly mutability: "mutable";
                        readonly name: "blockNumber";
                        readonly nameLocation: "1260:11:159";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 56988;
                        readonly src: "1252:19:159";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 56985;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1252:7:159";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1251:21:159";
                };
                readonly scope: 57056;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 56993;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1279:62:159";
                readonly nodes: readonly [];
                readonly functionSelector: "3408e470";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getChainId";
                readonly nameLocation: "1288:10:159";
                readonly parameters: {
                    readonly id: 56989;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1298:2:159";
                };
                readonly returnParameters: {
                    readonly id: 56992;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 56991;
                        readonly mutability: "mutable";
                        readonly name: "chainid";
                        readonly nameLocation: "1332:7:159";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 56993;
                        readonly src: "1324:15:159";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 56990;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1324:7:159";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1323:17:159";
                };
                readonly scope: 57056;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 56998;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1347:76:159";
                readonly nodes: readonly [];
                readonly functionSelector: "a8b0574e";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getCurrentBlockCoinbase";
                readonly nameLocation: "1356:23:159";
                readonly parameters: {
                    readonly id: 56994;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1379:2:159";
                };
                readonly returnParameters: {
                    readonly id: 56997;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 56996;
                        readonly mutability: "mutable";
                        readonly name: "coinbase";
                        readonly nameLocation: "1413:8:159";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 56998;
                        readonly src: "1405:16:159";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 56995;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1405:7:159";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1404:18:159";
                };
                readonly scope: 57056;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57003;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1429:80:159";
                readonly nodes: readonly [];
                readonly functionSelector: "72425d9d";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getCurrentBlockDifficulty";
                readonly nameLocation: "1438:25:159";
                readonly parameters: {
                    readonly id: 56999;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1463:2:159";
                };
                readonly returnParameters: {
                    readonly id: 57002;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57001;
                        readonly mutability: "mutable";
                        readonly name: "difficulty";
                        readonly nameLocation: "1497:10:159";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57003;
                        readonly src: "1489:18:159";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 57000;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1489:7:159";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1488:20:159";
                };
                readonly scope: 57056;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57008;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1515:76:159";
                readonly nodes: readonly [];
                readonly functionSelector: "86d516e8";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getCurrentBlockGasLimit";
                readonly nameLocation: "1524:23:159";
                readonly parameters: {
                    readonly id: 57004;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1547:2:159";
                };
                readonly returnParameters: {
                    readonly id: 57007;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57006;
                        readonly mutability: "mutable";
                        readonly name: "gaslimit";
                        readonly nameLocation: "1581:8:159";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57008;
                        readonly src: "1573:16:159";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 57005;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1573:7:159";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1572:18:159";
                };
                readonly scope: 57056;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57013;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1597:78:159";
                readonly nodes: readonly [];
                readonly functionSelector: "0f28c97d";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getCurrentBlockTimestamp";
                readonly nameLocation: "1606:24:159";
                readonly parameters: {
                    readonly id: 57009;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1630:2:159";
                };
                readonly returnParameters: {
                    readonly id: 57012;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57011;
                        readonly mutability: "mutable";
                        readonly name: "timestamp";
                        readonly nameLocation: "1664:9:159";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57013;
                        readonly src: "1656:17:159";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 57010;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1656:7:159";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1655:19:159";
                };
                readonly scope: 57056;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57020;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1681:77:159";
                readonly nodes: readonly [];
                readonly functionSelector: "4d2301cc";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getEthBalance";
                readonly nameLocation: "1690:13:159";
                readonly parameters: {
                    readonly id: 57016;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57015;
                        readonly mutability: "mutable";
                        readonly name: "addr";
                        readonly nameLocation: "1712:4:159";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57020;
                        readonly src: "1704:12:159";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 57014;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1704:7:159";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1703:14:159";
                };
                readonly returnParameters: {
                    readonly id: 57019;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57018;
                        readonly mutability: "mutable";
                        readonly name: "balance";
                        readonly nameLocation: "1749:7:159";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57020;
                        readonly src: "1741:15:159";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 57017;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1741:7:159";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1740:17:159";
                };
                readonly scope: 57056;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57025;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1764:70:159";
                readonly nodes: readonly [];
                readonly functionSelector: "27e86d6e";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getLastBlockHash";
                readonly nameLocation: "1773:16:159";
                readonly parameters: {
                    readonly id: 57021;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1789:2:159";
                };
                readonly returnParameters: {
                    readonly id: 57024;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57023;
                        readonly mutability: "mutable";
                        readonly name: "blockHash";
                        readonly nameLocation: "1823:9:159";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57025;
                        readonly src: "1815:17:159";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 57022;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1815:7:159";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1814:19:159";
                };
                readonly scope: 57056;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57038;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1840:144:159";
                readonly nodes: readonly [];
                readonly functionSelector: "bce38bd7";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "tryAggregate";
                readonly nameLocation: "1849:12:159";
                readonly parameters: {
                    readonly id: 57032;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57027;
                        readonly mutability: "mutable";
                        readonly name: "requireSuccess";
                        readonly nameLocation: "1867:14:159";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57038;
                        readonly src: "1862:19:159";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 57026;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1862:4:159";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 57031;
                        readonly mutability: "mutable";
                        readonly name: "calls";
                        readonly nameLocation: "1899:5:159";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57038;
                        readonly src: "1883:21:159";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Call_$56901_calldata_ptr_$dyn_calldata_ptr";
                            readonly typeString: "struct IMulticall3.Call[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 57029;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 57028;
                                    readonly name: "Call";
                                    readonly nameLocations: readonly ["1883:4:159"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 56901;
                                    readonly src: "1883:4:159";
                                };
                                readonly referencedDeclaration: 56901;
                                readonly src: "1883:4:159";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Call_$56901_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Call";
                                };
                            };
                            readonly id: 57030;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1883:6:159";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Call_$56901_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Call[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1861:44:159";
                };
                readonly returnParameters: {
                    readonly id: 57037;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57036;
                        readonly mutability: "mutable";
                        readonly name: "returnData";
                        readonly nameLocation: "1972:10:159";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57038;
                        readonly src: "1956:26:159";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Result_$56922_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct IMulticall3.Result[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 57034;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 57033;
                                    readonly name: "Result";
                                    readonly nameLocations: readonly ["1956:6:159"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 56922;
                                    readonly src: "1956:6:159";
                                };
                                readonly referencedDeclaration: 56922;
                                readonly src: "1956:6:159";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Result_$56922_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Result";
                                };
                            };
                            readonly id: 57035;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1956:8:159";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Result_$56922_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Result[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1955:28:159";
                };
                readonly scope: 57056;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 57055;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1990:192:159";
                readonly nodes: readonly [];
                readonly functionSelector: "399542e9";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "tryBlockAndAggregate";
                readonly nameLocation: "1999:20:159";
                readonly parameters: {
                    readonly id: 57045;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57040;
                        readonly mutability: "mutable";
                        readonly name: "requireSuccess";
                        readonly nameLocation: "2025:14:159";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57055;
                        readonly src: "2020:19:159";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 57039;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2020:4:159";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 57044;
                        readonly mutability: "mutable";
                        readonly name: "calls";
                        readonly nameLocation: "2057:5:159";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57055;
                        readonly src: "2041:21:159";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Call_$56901_calldata_ptr_$dyn_calldata_ptr";
                            readonly typeString: "struct IMulticall3.Call[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 57042;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 57041;
                                    readonly name: "Call";
                                    readonly nameLocations: readonly ["2041:4:159"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 56901;
                                    readonly src: "2041:4:159";
                                };
                                readonly referencedDeclaration: 56901;
                                readonly src: "2041:4:159";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Call_$56901_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Call";
                                };
                            };
                            readonly id: 57043;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2041:6:159";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Call_$56901_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Call[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2019:44:159";
                };
                readonly returnParameters: {
                    readonly id: 57054;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 57047;
                        readonly mutability: "mutable";
                        readonly name: "blockNumber";
                        readonly nameLocation: "2122:11:159";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57055;
                        readonly src: "2114:19:159";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 57046;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2114:7:159";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 57049;
                        readonly mutability: "mutable";
                        readonly name: "blockHash";
                        readonly nameLocation: "2143:9:159";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57055;
                        readonly src: "2135:17:159";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 57048;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2135:7:159";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 57053;
                        readonly mutability: "mutable";
                        readonly name: "returnData";
                        readonly nameLocation: "2170:10:159";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 57055;
                        readonly src: "2154:26:159";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Result_$56922_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct IMulticall3.Result[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 57051;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 57050;
                                    readonly name: "Result";
                                    readonly nameLocations: readonly ["2154:6:159"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 56922;
                                    readonly src: "2154:6:159";
                                };
                                readonly referencedDeclaration: 56922;
                                readonly src: "2154:6:159";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Result_$56922_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Result";
                                };
                            };
                            readonly id: 57052;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2154:8:159";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Result_$56922_storage_$dyn_storage_ptr";
                                readonly typeString: "struct IMulticall3.Result[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2113:68:159";
                };
                readonly scope: 57056;
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
            readonly linearizedBaseContracts: readonly [57056];
            readonly name: "IMulticall3";
            readonly nameLocation: "110:11:159";
            readonly scope: 57057;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 159;
};
//# sourceMappingURL=IMulticall3.d.ts.map