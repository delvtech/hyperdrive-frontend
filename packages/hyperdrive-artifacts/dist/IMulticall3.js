export const IMulticall3 = {
    "abi": [
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "target",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes",
                            "name": "callData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IMulticall3.Call[]",
                    "name": "calls",
                    "type": "tuple[]"
                }
            ],
            "name": "aggregate",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "blockNumber",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes[]",
                    "name": "returnData",
                    "type": "bytes[]"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "target",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "allowFailure",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "callData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IMulticall3.Call3[]",
                    "name": "calls",
                    "type": "tuple[]"
                }
            ],
            "name": "aggregate3",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "bool",
                            "name": "success",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "returnData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IMulticall3.Result[]",
                    "name": "returnData",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "target",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "allowFailure",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bytes",
                            "name": "callData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IMulticall3.Call3Value[]",
                    "name": "calls",
                    "type": "tuple[]"
                }
            ],
            "name": "aggregate3Value",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "bool",
                            "name": "success",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "returnData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IMulticall3.Result[]",
                    "name": "returnData",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "target",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes",
                            "name": "callData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IMulticall3.Call[]",
                    "name": "calls",
                    "type": "tuple[]"
                }
            ],
            "name": "blockAndAggregate",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "blockNumber",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes32",
                    "name": "blockHash",
                    "type": "bytes32"
                },
                {
                    "components": [
                        {
                            "internalType": "bool",
                            "name": "success",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "returnData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IMulticall3.Result[]",
                    "name": "returnData",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getBasefee",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "basefee",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "blockNumber",
                    "type": "uint256"
                }
            ],
            "name": "getBlockHash",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "blockHash",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getBlockNumber",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "blockNumber",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getChainId",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "chainid",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getCurrentBlockCoinbase",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "coinbase",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getCurrentBlockDifficulty",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "difficulty",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getCurrentBlockGasLimit",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "gaslimit",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getCurrentBlockTimestamp",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                }
            ],
            "name": "getEthBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "balance",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getLastBlockHash",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "blockHash",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bool",
                    "name": "requireSuccess",
                    "type": "bool"
                },
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "target",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes",
                            "name": "callData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IMulticall3.Call[]",
                    "name": "calls",
                    "type": "tuple[]"
                }
            ],
            "name": "tryAggregate",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "bool",
                            "name": "success",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "returnData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IMulticall3.Result[]",
                    "name": "returnData",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bool",
                    "name": "requireSuccess",
                    "type": "bool"
                },
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "target",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes",
                            "name": "callData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IMulticall3.Call[]",
                    "name": "calls",
                    "type": "tuple[]"
                }
            ],
            "name": "tryBlockAndAggregate",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "blockNumber",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes32",
                    "name": "blockHash",
                    "type": "bytes32"
                },
                {
                    "components": [
                        {
                            "internalType": "bool",
                            "name": "success",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "returnData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IMulticall3.Result[]",
                    "name": "returnData",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        }
    ],
    "bytecode": {
        "object": "0x",
        "sourceMap": "",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x",
        "sourceMap": "",
        "linkReferences": {}
    },
    "methodIdentifiers": {
        "aggregate((address,bytes)[])": "252dba42",
        "aggregate3((address,bool,bytes)[])": "82ad56cb",
        "aggregate3Value((address,bool,uint256,bytes)[])": "174dea71",
        "blockAndAggregate((address,bytes)[])": "c3077fa9",
        "getBasefee()": "3e64a696",
        "getBlockHash(uint256)": "ee82ac5e",
        "getBlockNumber()": "42cbb15c",
        "getChainId()": "3408e470",
        "getCurrentBlockCoinbase()": "a8b0574e",
        "getCurrentBlockDifficulty()": "72425d9d",
        "getCurrentBlockGasLimit()": "86d516e8",
        "getCurrentBlockTimestamp()": "0f28c97d",
        "getEthBalance(address)": "4d2301cc",
        "getLastBlockHash()": "27e86d6e",
        "tryAggregate(bool,(address,bytes)[])": "bce38bd7",
        "tryBlockAndAggregate(bool,(address,bytes)[])": "399542e9"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"aggregate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"internalType\":\"bytes[]\",\"name\":\"returnData\",\"type\":\"bytes[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"allowFailure\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call3[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"aggregate3\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"allowFailure\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call3Value[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"aggregate3Value\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"blockAndAggregate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBasefee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"basefee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"name\":\"getBlockHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBlockNumber\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getChainId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"chainid\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockCoinbase\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"coinbase\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockDifficulty\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"difficulty\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockGasLimit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"gaslimit\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockTimestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"timestamp\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"getEthBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getLastBlockHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"requireSuccess\",\"type\":\"bool\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"tryAggregate\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"requireSuccess\",\"type\":\"bool\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"tryBlockAndAggregate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/interfaces/IMulticall3.sol\":\"IMulticall3\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/interfaces/IMulticall3.sol\":{\"keccak256\":\"0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0\",\"dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [
                        {
                            "internalType": "struct IMulticall3.Call[]",
                            "name": "calls",
                            "type": "tuple[]",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "target",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "callData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "payable",
                    "type": "function",
                    "name": "aggregate",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "blockNumber",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bytes[]",
                            "name": "returnData",
                            "type": "bytes[]"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "struct IMulticall3.Call3[]",
                            "name": "calls",
                            "type": "tuple[]",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "target",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "allowFailure",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "callData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "payable",
                    "type": "function",
                    "name": "aggregate3",
                    "outputs": [
                        {
                            "internalType": "struct IMulticall3.Result[]",
                            "name": "returnData",
                            "type": "tuple[]",
                            "components": [
                                {
                                    "internalType": "bool",
                                    "name": "success",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "returnData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "struct IMulticall3.Call3Value[]",
                            "name": "calls",
                            "type": "tuple[]",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "target",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "allowFailure",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "value",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "callData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "payable",
                    "type": "function",
                    "name": "aggregate3Value",
                    "outputs": [
                        {
                            "internalType": "struct IMulticall3.Result[]",
                            "name": "returnData",
                            "type": "tuple[]",
                            "components": [
                                {
                                    "internalType": "bool",
                                    "name": "success",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "returnData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "struct IMulticall3.Call[]",
                            "name": "calls",
                            "type": "tuple[]",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "target",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "callData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "payable",
                    "type": "function",
                    "name": "blockAndAggregate",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "blockNumber",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "blockHash",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "struct IMulticall3.Result[]",
                            "name": "returnData",
                            "type": "tuple[]",
                            "components": [
                                {
                                    "internalType": "bool",
                                    "name": "success",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "returnData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getBasefee",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "basefee",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "blockNumber",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getBlockHash",
                    "outputs": [
                        {
                            "internalType": "bytes32",
                            "name": "blockHash",
                            "type": "bytes32"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getBlockNumber",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "blockNumber",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getChainId",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "chainid",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getCurrentBlockCoinbase",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "coinbase",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getCurrentBlockDifficulty",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "difficulty",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getCurrentBlockGasLimit",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "gaslimit",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getCurrentBlockTimestamp",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "timestamp",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "addr",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getEthBalance",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "balance",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getLastBlockHash",
                    "outputs": [
                        {
                            "internalType": "bytes32",
                            "name": "blockHash",
                            "type": "bytes32"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "bool",
                            "name": "requireSuccess",
                            "type": "bool"
                        },
                        {
                            "internalType": "struct IMulticall3.Call[]",
                            "name": "calls",
                            "type": "tuple[]",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "target",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "callData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "payable",
                    "type": "function",
                    "name": "tryAggregate",
                    "outputs": [
                        {
                            "internalType": "struct IMulticall3.Result[]",
                            "name": "returnData",
                            "type": "tuple[]",
                            "components": [
                                {
                                    "internalType": "bool",
                                    "name": "success",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "returnData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "bool",
                            "name": "requireSuccess",
                            "type": "bool"
                        },
                        {
                            "internalType": "struct IMulticall3.Call[]",
                            "name": "calls",
                            "type": "tuple[]",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "target",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "callData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "payable",
                    "type": "function",
                    "name": "tryBlockAndAggregate",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "blockNumber",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "blockHash",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "struct IMulticall3.Result[]",
                            "name": "returnData",
                            "type": "tuple[]",
                            "components": [
                                {
                                    "internalType": "bool",
                                    "name": "success",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "returnData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ]
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {},
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {},
                "version": 1
            }
        },
        "settings": {
            "remappings": [
                "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
                "aave-v3-core/=lib/aave-v3-core/",
                "ds-test/=lib/forge-std/lib/ds-test/src/",
                "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
                "forge-std/=lib/forge-std/src/",
                "openzeppelin-contracts/=lib/openzeppelin-contracts/",
                "openzeppelin/=lib/openzeppelin-contracts/contracts/",
                "solmate/=lib/solmate/src/"
            ],
            "optimizer": {
                "enabled": true,
                "runs": 200
            },
            "metadata": {
                "bytecodeHash": "ipfs"
            },
            "compilationTarget": {
                "lib/forge-std/src/interfaces/IMulticall3.sol": "IMulticall3"
            },
            "libraries": {}
        },
        "sources": {
            "lib/forge-std/src/interfaces/IMulticall3.sol": {
                "keccak256": "0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a",
                "urls": [
                    "bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0",
                    "dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2"
                ],
                "license": "MIT"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "lib/forge-std/src/interfaces/IMulticall3.sol",
        "id": 52850,
        "exportedSymbols": {
            "IMulticall3": [
                52849
            ]
        },
        "nodeType": "SourceUnit",
        "src": "32:2153:110",
        "nodes": [
            {
                "id": 52688,
                "nodeType": "PragmaDirective",
                "src": "32:31:110",
                "nodes": [],
                "literals": [
                    "solidity",
                    ">=",
                    "0.6",
                    ".2",
                    "<",
                    "0.9",
                    ".0"
                ]
            },
            {
                "id": 52689,
                "nodeType": "PragmaDirective",
                "src": "65:33:110",
                "nodes": [],
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ]
            },
            {
                "id": 52849,
                "nodeType": "ContractDefinition",
                "src": "100:2084:110",
                "nodes": [
                    {
                        "id": 52694,
                        "nodeType": "StructDefinition",
                        "src": "128:67:110",
                        "nodes": [],
                        "canonicalName": "IMulticall3.Call",
                        "members": [
                            {
                                "constant": false,
                                "id": 52691,
                                "mutability": "mutable",
                                "name": "target",
                                "nameLocation": "158:6:110",
                                "nodeType": "VariableDeclaration",
                                "scope": 52694,
                                "src": "150:14:110",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 52690,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "150:7:110",
                                    "stateMutability": "nonpayable",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 52693,
                                "mutability": "mutable",
                                "name": "callData",
                                "nameLocation": "180:8:110",
                                "nodeType": "VariableDeclaration",
                                "scope": 52694,
                                "src": "174:14:110",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_storage_ptr",
                                    "typeString": "bytes"
                                },
                                "typeName": {
                                    "id": 52692,
                                    "name": "bytes",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "174:5:110",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_storage_ptr",
                                        "typeString": "bytes"
                                    }
                                },
                                "visibility": "internal"
                            }
                        ],
                        "name": "Call",
                        "nameLocation": "135:4:110",
                        "scope": 52849,
                        "visibility": "public"
                    },
                    {
                        "id": 52701,
                        "nodeType": "StructDefinition",
                        "src": "201:95:110",
                        "nodes": [],
                        "canonicalName": "IMulticall3.Call3",
                        "members": [
                            {
                                "constant": false,
                                "id": 52696,
                                "mutability": "mutable",
                                "name": "target",
                                "nameLocation": "232:6:110",
                                "nodeType": "VariableDeclaration",
                                "scope": 52701,
                                "src": "224:14:110",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 52695,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "224:7:110",
                                    "stateMutability": "nonpayable",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 52698,
                                "mutability": "mutable",
                                "name": "allowFailure",
                                "nameLocation": "253:12:110",
                                "nodeType": "VariableDeclaration",
                                "scope": 52701,
                                "src": "248:17:110",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                },
                                "typeName": {
                                    "id": 52697,
                                    "name": "bool",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "248:4:110",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 52700,
                                "mutability": "mutable",
                                "name": "callData",
                                "nameLocation": "281:8:110",
                                "nodeType": "VariableDeclaration",
                                "scope": 52701,
                                "src": "275:14:110",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_storage_ptr",
                                    "typeString": "bytes"
                                },
                                "typeName": {
                                    "id": 52699,
                                    "name": "bytes",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "275:5:110",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_storage_ptr",
                                        "typeString": "bytes"
                                    }
                                },
                                "visibility": "internal"
                            }
                        ],
                        "name": "Call3",
                        "nameLocation": "208:5:110",
                        "scope": 52849,
                        "visibility": "public"
                    },
                    {
                        "id": 52710,
                        "nodeType": "StructDefinition",
                        "src": "302:123:110",
                        "nodes": [],
                        "canonicalName": "IMulticall3.Call3Value",
                        "members": [
                            {
                                "constant": false,
                                "id": 52703,
                                "mutability": "mutable",
                                "name": "target",
                                "nameLocation": "338:6:110",
                                "nodeType": "VariableDeclaration",
                                "scope": 52710,
                                "src": "330:14:110",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 52702,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "330:7:110",
                                    "stateMutability": "nonpayable",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 52705,
                                "mutability": "mutable",
                                "name": "allowFailure",
                                "nameLocation": "359:12:110",
                                "nodeType": "VariableDeclaration",
                                "scope": 52710,
                                "src": "354:17:110",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                },
                                "typeName": {
                                    "id": 52704,
                                    "name": "bool",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "354:4:110",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 52707,
                                "mutability": "mutable",
                                "name": "value",
                                "nameLocation": "389:5:110",
                                "nodeType": "VariableDeclaration",
                                "scope": 52710,
                                "src": "381:13:110",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 52706,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "381:7:110",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 52709,
                                "mutability": "mutable",
                                "name": "callData",
                                "nameLocation": "410:8:110",
                                "nodeType": "VariableDeclaration",
                                "scope": 52710,
                                "src": "404:14:110",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_storage_ptr",
                                    "typeString": "bytes"
                                },
                                "typeName": {
                                    "id": 52708,
                                    "name": "bytes",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "404:5:110",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_storage_ptr",
                                        "typeString": "bytes"
                                    }
                                },
                                "visibility": "internal"
                            }
                        ],
                        "name": "Call3Value",
                        "nameLocation": "309:10:110",
                        "scope": 52849,
                        "visibility": "public"
                    },
                    {
                        "id": 52715,
                        "nodeType": "StructDefinition",
                        "src": "431:69:110",
                        "nodes": [],
                        "canonicalName": "IMulticall3.Result",
                        "members": [
                            {
                                "constant": false,
                                "id": 52712,
                                "mutability": "mutable",
                                "name": "success",
                                "nameLocation": "460:7:110",
                                "nodeType": "VariableDeclaration",
                                "scope": 52715,
                                "src": "455:12:110",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                },
                                "typeName": {
                                    "id": 52711,
                                    "name": "bool",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "455:4:110",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 52714,
                                "mutability": "mutable",
                                "name": "returnData",
                                "nameLocation": "483:10:110",
                                "nodeType": "VariableDeclaration",
                                "scope": 52715,
                                "src": "477:16:110",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_storage_ptr",
                                    "typeString": "bytes"
                                },
                                "typeName": {
                                    "id": 52713,
                                    "name": "bytes",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "477:5:110",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_storage_ptr",
                                        "typeString": "bytes"
                                    }
                                },
                                "visibility": "internal"
                            }
                        ],
                        "name": "Result",
                        "nameLocation": "438:6:110",
                        "scope": 52849,
                        "visibility": "public"
                    },
                    {
                        "id": 52727,
                        "nodeType": "FunctionDefinition",
                        "src": "506:140:110",
                        "nodes": [],
                        "functionSelector": "252dba42",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "aggregate",
                        "nameLocation": "515:9:110",
                        "parameters": {
                            "id": 52720,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52719,
                                    "mutability": "mutable",
                                    "name": "calls",
                                    "nameLocation": "541:5:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52727,
                                    "src": "525:21:110",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Call_$52694_calldata_ptr_$dyn_calldata_ptr",
                                        "typeString": "struct IMulticall3.Call[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 52717,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 52716,
                                                "name": "Call",
                                                "nameLocations": [
                                                    "525:4:110"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 52694,
                                                "src": "525:4:110"
                                            },
                                            "referencedDeclaration": 52694,
                                            "src": "525:4:110",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Call_$52694_storage_ptr",
                                                "typeString": "struct IMulticall3.Call"
                                            }
                                        },
                                        "id": 52718,
                                        "nodeType": "ArrayTypeName",
                                        "src": "525:6:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Call_$52694_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Call[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "524:23:110"
                        },
                        "returnParameters": {
                            "id": 52726,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52722,
                                    "mutability": "mutable",
                                    "name": "blockNumber",
                                    "nameLocation": "606:11:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52727,
                                    "src": "598:19:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 52721,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "598:7:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 52725,
                                    "mutability": "mutable",
                                    "name": "returnData",
                                    "nameLocation": "634:10:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52727,
                                    "src": "619:25:110",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "bytes[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 52723,
                                            "name": "bytes",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "619:5:110",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_storage_ptr",
                                                "typeString": "bytes"
                                            }
                                        },
                                        "id": 52724,
                                        "nodeType": "ArrayTypeName",
                                        "src": "619:7:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                                            "typeString": "bytes[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "597:48:110"
                        },
                        "scope": 52849,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 52738,
                        "nodeType": "FunctionDefinition",
                        "src": "652:98:110",
                        "nodes": [],
                        "functionSelector": "82ad56cb",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "aggregate3",
                        "nameLocation": "661:10:110",
                        "parameters": {
                            "id": 52732,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52731,
                                    "mutability": "mutable",
                                    "name": "calls",
                                    "nameLocation": "689:5:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52738,
                                    "src": "672:22:110",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Call3_$52701_calldata_ptr_$dyn_calldata_ptr",
                                        "typeString": "struct IMulticall3.Call3[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 52729,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 52728,
                                                "name": "Call3",
                                                "nameLocations": [
                                                    "672:5:110"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 52701,
                                                "src": "672:5:110"
                                            },
                                            "referencedDeclaration": 52701,
                                            "src": "672:5:110",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Call3_$52701_storage_ptr",
                                                "typeString": "struct IMulticall3.Call3"
                                            }
                                        },
                                        "id": 52730,
                                        "nodeType": "ArrayTypeName",
                                        "src": "672:7:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Call3_$52701_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Call3[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "671:24:110"
                        },
                        "returnParameters": {
                            "id": 52737,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52736,
                                    "mutability": "mutable",
                                    "name": "returnData",
                                    "nameLocation": "738:10:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52738,
                                    "src": "722:26:110",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Result_$52715_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct IMulticall3.Result[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 52734,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 52733,
                                                "name": "Result",
                                                "nameLocations": [
                                                    "722:6:110"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 52715,
                                                "src": "722:6:110"
                                            },
                                            "referencedDeclaration": 52715,
                                            "src": "722:6:110",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Result_$52715_storage_ptr",
                                                "typeString": "struct IMulticall3.Result"
                                            }
                                        },
                                        "id": 52735,
                                        "nodeType": "ArrayTypeName",
                                        "src": "722:8:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Result_$52715_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Result[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "721:28:110"
                        },
                        "scope": 52849,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 52749,
                        "nodeType": "FunctionDefinition",
                        "src": "756:108:110",
                        "nodes": [],
                        "functionSelector": "174dea71",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "aggregate3Value",
                        "nameLocation": "765:15:110",
                        "parameters": {
                            "id": 52743,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52742,
                                    "mutability": "mutable",
                                    "name": "calls",
                                    "nameLocation": "803:5:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52749,
                                    "src": "781:27:110",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Call3Value_$52710_calldata_ptr_$dyn_calldata_ptr",
                                        "typeString": "struct IMulticall3.Call3Value[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 52740,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 52739,
                                                "name": "Call3Value",
                                                "nameLocations": [
                                                    "781:10:110"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 52710,
                                                "src": "781:10:110"
                                            },
                                            "referencedDeclaration": 52710,
                                            "src": "781:10:110",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Call3Value_$52710_storage_ptr",
                                                "typeString": "struct IMulticall3.Call3Value"
                                            }
                                        },
                                        "id": 52741,
                                        "nodeType": "ArrayTypeName",
                                        "src": "781:12:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Call3Value_$52710_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Call3Value[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "780:29:110"
                        },
                        "returnParameters": {
                            "id": 52748,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52747,
                                    "mutability": "mutable",
                                    "name": "returnData",
                                    "nameLocation": "852:10:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52749,
                                    "src": "836:26:110",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Result_$52715_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct IMulticall3.Result[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 52745,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 52744,
                                                "name": "Result",
                                                "nameLocations": [
                                                    "836:6:110"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 52715,
                                                "src": "836:6:110"
                                            },
                                            "referencedDeclaration": 52715,
                                            "src": "836:6:110",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Result_$52715_storage_ptr",
                                                "typeString": "struct IMulticall3.Result"
                                            }
                                        },
                                        "id": 52746,
                                        "nodeType": "ArrayTypeName",
                                        "src": "836:8:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Result_$52715_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Result[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "835:28:110"
                        },
                        "scope": 52849,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 52764,
                        "nodeType": "FunctionDefinition",
                        "src": "870:168:110",
                        "nodes": [],
                        "functionSelector": "c3077fa9",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "blockAndAggregate",
                        "nameLocation": "879:17:110",
                        "parameters": {
                            "id": 52754,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52753,
                                    "mutability": "mutable",
                                    "name": "calls",
                                    "nameLocation": "913:5:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52764,
                                    "src": "897:21:110",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Call_$52694_calldata_ptr_$dyn_calldata_ptr",
                                        "typeString": "struct IMulticall3.Call[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 52751,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 52750,
                                                "name": "Call",
                                                "nameLocations": [
                                                    "897:4:110"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 52694,
                                                "src": "897:4:110"
                                            },
                                            "referencedDeclaration": 52694,
                                            "src": "897:4:110",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Call_$52694_storage_ptr",
                                                "typeString": "struct IMulticall3.Call"
                                            }
                                        },
                                        "id": 52752,
                                        "nodeType": "ArrayTypeName",
                                        "src": "897:6:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Call_$52694_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Call[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "896:23:110"
                        },
                        "returnParameters": {
                            "id": 52763,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52756,
                                    "mutability": "mutable",
                                    "name": "blockNumber",
                                    "nameLocation": "978:11:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52764,
                                    "src": "970:19:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 52755,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "970:7:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 52758,
                                    "mutability": "mutable",
                                    "name": "blockHash",
                                    "nameLocation": "999:9:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52764,
                                    "src": "991:17:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 52757,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "991:7:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 52762,
                                    "mutability": "mutable",
                                    "name": "returnData",
                                    "nameLocation": "1026:10:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52764,
                                    "src": "1010:26:110",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Result_$52715_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct IMulticall3.Result[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 52760,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 52759,
                                                "name": "Result",
                                                "nameLocations": [
                                                    "1010:6:110"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 52715,
                                                "src": "1010:6:110"
                                            },
                                            "referencedDeclaration": 52715,
                                            "src": "1010:6:110",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Result_$52715_storage_ptr",
                                                "typeString": "struct IMulticall3.Result"
                                            }
                                        },
                                        "id": 52761,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1010:8:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Result_$52715_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Result[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "969:68:110"
                        },
                        "scope": 52849,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 52769,
                        "nodeType": "FunctionDefinition",
                        "src": "1044:62:110",
                        "nodes": [],
                        "functionSelector": "3e64a696",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBasefee",
                        "nameLocation": "1053:10:110",
                        "parameters": {
                            "id": 52765,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1063:2:110"
                        },
                        "returnParameters": {
                            "id": 52768,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52767,
                                    "mutability": "mutable",
                                    "name": "basefee",
                                    "nameLocation": "1097:7:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52769,
                                    "src": "1089:15:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 52766,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1089:7:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1088:17:110"
                        },
                        "scope": 52849,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 52776,
                        "nodeType": "FunctionDefinition",
                        "src": "1112:85:110",
                        "nodes": [],
                        "functionSelector": "ee82ac5e",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBlockHash",
                        "nameLocation": "1121:12:110",
                        "parameters": {
                            "id": 52772,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52771,
                                    "mutability": "mutable",
                                    "name": "blockNumber",
                                    "nameLocation": "1142:11:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52776,
                                    "src": "1134:19:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 52770,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1134:7:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1133:21:110"
                        },
                        "returnParameters": {
                            "id": 52775,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52774,
                                    "mutability": "mutable",
                                    "name": "blockHash",
                                    "nameLocation": "1186:9:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52776,
                                    "src": "1178:17:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 52773,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1178:7:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1177:19:110"
                        },
                        "scope": 52849,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 52781,
                        "nodeType": "FunctionDefinition",
                        "src": "1203:70:110",
                        "nodes": [],
                        "functionSelector": "42cbb15c",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBlockNumber",
                        "nameLocation": "1212:14:110",
                        "parameters": {
                            "id": 52777,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1226:2:110"
                        },
                        "returnParameters": {
                            "id": 52780,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52779,
                                    "mutability": "mutable",
                                    "name": "blockNumber",
                                    "nameLocation": "1260:11:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52781,
                                    "src": "1252:19:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 52778,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1252:7:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1251:21:110"
                        },
                        "scope": 52849,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 52786,
                        "nodeType": "FunctionDefinition",
                        "src": "1279:62:110",
                        "nodes": [],
                        "functionSelector": "3408e470",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getChainId",
                        "nameLocation": "1288:10:110",
                        "parameters": {
                            "id": 52782,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1298:2:110"
                        },
                        "returnParameters": {
                            "id": 52785,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52784,
                                    "mutability": "mutable",
                                    "name": "chainid",
                                    "nameLocation": "1332:7:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52786,
                                    "src": "1324:15:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 52783,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1324:7:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1323:17:110"
                        },
                        "scope": 52849,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 52791,
                        "nodeType": "FunctionDefinition",
                        "src": "1347:76:110",
                        "nodes": [],
                        "functionSelector": "a8b0574e",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCurrentBlockCoinbase",
                        "nameLocation": "1356:23:110",
                        "parameters": {
                            "id": 52787,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1379:2:110"
                        },
                        "returnParameters": {
                            "id": 52790,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52789,
                                    "mutability": "mutable",
                                    "name": "coinbase",
                                    "nameLocation": "1413:8:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52791,
                                    "src": "1405:16:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 52788,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1405:7:110",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1404:18:110"
                        },
                        "scope": 52849,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 52796,
                        "nodeType": "FunctionDefinition",
                        "src": "1429:80:110",
                        "nodes": [],
                        "functionSelector": "72425d9d",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCurrentBlockDifficulty",
                        "nameLocation": "1438:25:110",
                        "parameters": {
                            "id": 52792,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1463:2:110"
                        },
                        "returnParameters": {
                            "id": 52795,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52794,
                                    "mutability": "mutable",
                                    "name": "difficulty",
                                    "nameLocation": "1497:10:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52796,
                                    "src": "1489:18:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 52793,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1489:7:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1488:20:110"
                        },
                        "scope": 52849,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 52801,
                        "nodeType": "FunctionDefinition",
                        "src": "1515:76:110",
                        "nodes": [],
                        "functionSelector": "86d516e8",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCurrentBlockGasLimit",
                        "nameLocation": "1524:23:110",
                        "parameters": {
                            "id": 52797,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1547:2:110"
                        },
                        "returnParameters": {
                            "id": 52800,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52799,
                                    "mutability": "mutable",
                                    "name": "gaslimit",
                                    "nameLocation": "1581:8:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52801,
                                    "src": "1573:16:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 52798,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1573:7:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1572:18:110"
                        },
                        "scope": 52849,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 52806,
                        "nodeType": "FunctionDefinition",
                        "src": "1597:78:110",
                        "nodes": [],
                        "functionSelector": "0f28c97d",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCurrentBlockTimestamp",
                        "nameLocation": "1606:24:110",
                        "parameters": {
                            "id": 52802,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1630:2:110"
                        },
                        "returnParameters": {
                            "id": 52805,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52804,
                                    "mutability": "mutable",
                                    "name": "timestamp",
                                    "nameLocation": "1664:9:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52806,
                                    "src": "1656:17:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 52803,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1656:7:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1655:19:110"
                        },
                        "scope": 52849,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 52813,
                        "nodeType": "FunctionDefinition",
                        "src": "1681:77:110",
                        "nodes": [],
                        "functionSelector": "4d2301cc",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getEthBalance",
                        "nameLocation": "1690:13:110",
                        "parameters": {
                            "id": 52809,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52808,
                                    "mutability": "mutable",
                                    "name": "addr",
                                    "nameLocation": "1712:4:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52813,
                                    "src": "1704:12:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 52807,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1704:7:110",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1703:14:110"
                        },
                        "returnParameters": {
                            "id": 52812,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52811,
                                    "mutability": "mutable",
                                    "name": "balance",
                                    "nameLocation": "1749:7:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52813,
                                    "src": "1741:15:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 52810,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1741:7:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1740:17:110"
                        },
                        "scope": 52849,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 52818,
                        "nodeType": "FunctionDefinition",
                        "src": "1764:70:110",
                        "nodes": [],
                        "functionSelector": "27e86d6e",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getLastBlockHash",
                        "nameLocation": "1773:16:110",
                        "parameters": {
                            "id": 52814,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1789:2:110"
                        },
                        "returnParameters": {
                            "id": 52817,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52816,
                                    "mutability": "mutable",
                                    "name": "blockHash",
                                    "nameLocation": "1823:9:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52818,
                                    "src": "1815:17:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 52815,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1815:7:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1814:19:110"
                        },
                        "scope": 52849,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 52831,
                        "nodeType": "FunctionDefinition",
                        "src": "1840:144:110",
                        "nodes": [],
                        "functionSelector": "bce38bd7",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "tryAggregate",
                        "nameLocation": "1849:12:110",
                        "parameters": {
                            "id": 52825,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52820,
                                    "mutability": "mutable",
                                    "name": "requireSuccess",
                                    "nameLocation": "1867:14:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52831,
                                    "src": "1862:19:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 52819,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1862:4:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 52824,
                                    "mutability": "mutable",
                                    "name": "calls",
                                    "nameLocation": "1899:5:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52831,
                                    "src": "1883:21:110",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Call_$52694_calldata_ptr_$dyn_calldata_ptr",
                                        "typeString": "struct IMulticall3.Call[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 52822,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 52821,
                                                "name": "Call",
                                                "nameLocations": [
                                                    "1883:4:110"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 52694,
                                                "src": "1883:4:110"
                                            },
                                            "referencedDeclaration": 52694,
                                            "src": "1883:4:110",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Call_$52694_storage_ptr",
                                                "typeString": "struct IMulticall3.Call"
                                            }
                                        },
                                        "id": 52823,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1883:6:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Call_$52694_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Call[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1861:44:110"
                        },
                        "returnParameters": {
                            "id": 52830,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52829,
                                    "mutability": "mutable",
                                    "name": "returnData",
                                    "nameLocation": "1972:10:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52831,
                                    "src": "1956:26:110",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Result_$52715_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct IMulticall3.Result[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 52827,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 52826,
                                                "name": "Result",
                                                "nameLocations": [
                                                    "1956:6:110"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 52715,
                                                "src": "1956:6:110"
                                            },
                                            "referencedDeclaration": 52715,
                                            "src": "1956:6:110",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Result_$52715_storage_ptr",
                                                "typeString": "struct IMulticall3.Result"
                                            }
                                        },
                                        "id": 52828,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1956:8:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Result_$52715_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Result[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1955:28:110"
                        },
                        "scope": 52849,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 52848,
                        "nodeType": "FunctionDefinition",
                        "src": "1990:192:110",
                        "nodes": [],
                        "functionSelector": "399542e9",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "tryBlockAndAggregate",
                        "nameLocation": "1999:20:110",
                        "parameters": {
                            "id": 52838,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52833,
                                    "mutability": "mutable",
                                    "name": "requireSuccess",
                                    "nameLocation": "2025:14:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52848,
                                    "src": "2020:19:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 52832,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2020:4:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 52837,
                                    "mutability": "mutable",
                                    "name": "calls",
                                    "nameLocation": "2057:5:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52848,
                                    "src": "2041:21:110",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Call_$52694_calldata_ptr_$dyn_calldata_ptr",
                                        "typeString": "struct IMulticall3.Call[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 52835,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 52834,
                                                "name": "Call",
                                                "nameLocations": [
                                                    "2041:4:110"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 52694,
                                                "src": "2041:4:110"
                                            },
                                            "referencedDeclaration": 52694,
                                            "src": "2041:4:110",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Call_$52694_storage_ptr",
                                                "typeString": "struct IMulticall3.Call"
                                            }
                                        },
                                        "id": 52836,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2041:6:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Call_$52694_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Call[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2019:44:110"
                        },
                        "returnParameters": {
                            "id": 52847,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52840,
                                    "mutability": "mutable",
                                    "name": "blockNumber",
                                    "nameLocation": "2122:11:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52848,
                                    "src": "2114:19:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 52839,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2114:7:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 52842,
                                    "mutability": "mutable",
                                    "name": "blockHash",
                                    "nameLocation": "2143:9:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52848,
                                    "src": "2135:17:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 52841,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2135:7:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 52846,
                                    "mutability": "mutable",
                                    "name": "returnData",
                                    "nameLocation": "2170:10:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52848,
                                    "src": "2154:26:110",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Result_$52715_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct IMulticall3.Result[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 52844,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 52843,
                                                "name": "Result",
                                                "nameLocations": [
                                                    "2154:6:110"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 52715,
                                                "src": "2154:6:110"
                                            },
                                            "referencedDeclaration": 52715,
                                            "src": "2154:6:110",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Result_$52715_storage_ptr",
                                                "typeString": "struct IMulticall3.Result"
                                            }
                                        },
                                        "id": 52845,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2154:8:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Result_$52715_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Result[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2113:68:110"
                        },
                        "scope": 52849,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "IMulticall3",
                "contractDependencies": [],
                "contractKind": "interface",
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    52849
                ],
                "name": "IMulticall3",
                "nameLocation": "110:11:110",
                "scope": 52850,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 110
};
