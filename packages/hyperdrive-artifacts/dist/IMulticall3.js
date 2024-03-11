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
        "id": 52550,
        "exportedSymbols": {
            "IMulticall3": [
                52549
            ]
        },
        "nodeType": "SourceUnit",
        "src": "32:2153:111",
        "nodes": [
            {
                "id": 52388,
                "nodeType": "PragmaDirective",
                "src": "32:31:111",
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
                "id": 52389,
                "nodeType": "PragmaDirective",
                "src": "65:33:111",
                "nodes": [],
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ]
            },
            {
                "id": 52549,
                "nodeType": "ContractDefinition",
                "src": "100:2084:111",
                "nodes": [
                    {
                        "id": 52394,
                        "nodeType": "StructDefinition",
                        "src": "128:67:111",
                        "nodes": [],
                        "canonicalName": "IMulticall3.Call",
                        "members": [
                            {
                                "constant": false,
                                "id": 52391,
                                "mutability": "mutable",
                                "name": "target",
                                "nameLocation": "158:6:111",
                                "nodeType": "VariableDeclaration",
                                "scope": 52394,
                                "src": "150:14:111",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 52390,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "150:7:111",
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
                                "id": 52393,
                                "mutability": "mutable",
                                "name": "callData",
                                "nameLocation": "180:8:111",
                                "nodeType": "VariableDeclaration",
                                "scope": 52394,
                                "src": "174:14:111",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_storage_ptr",
                                    "typeString": "bytes"
                                },
                                "typeName": {
                                    "id": 52392,
                                    "name": "bytes",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "174:5:111",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_storage_ptr",
                                        "typeString": "bytes"
                                    }
                                },
                                "visibility": "internal"
                            }
                        ],
                        "name": "Call",
                        "nameLocation": "135:4:111",
                        "scope": 52549,
                        "visibility": "public"
                    },
                    {
                        "id": 52401,
                        "nodeType": "StructDefinition",
                        "src": "201:95:111",
                        "nodes": [],
                        "canonicalName": "IMulticall3.Call3",
                        "members": [
                            {
                                "constant": false,
                                "id": 52396,
                                "mutability": "mutable",
                                "name": "target",
                                "nameLocation": "232:6:111",
                                "nodeType": "VariableDeclaration",
                                "scope": 52401,
                                "src": "224:14:111",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 52395,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "224:7:111",
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
                                "id": 52398,
                                "mutability": "mutable",
                                "name": "allowFailure",
                                "nameLocation": "253:12:111",
                                "nodeType": "VariableDeclaration",
                                "scope": 52401,
                                "src": "248:17:111",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                },
                                "typeName": {
                                    "id": 52397,
                                    "name": "bool",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "248:4:111",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 52400,
                                "mutability": "mutable",
                                "name": "callData",
                                "nameLocation": "281:8:111",
                                "nodeType": "VariableDeclaration",
                                "scope": 52401,
                                "src": "275:14:111",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_storage_ptr",
                                    "typeString": "bytes"
                                },
                                "typeName": {
                                    "id": 52399,
                                    "name": "bytes",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "275:5:111",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_storage_ptr",
                                        "typeString": "bytes"
                                    }
                                },
                                "visibility": "internal"
                            }
                        ],
                        "name": "Call3",
                        "nameLocation": "208:5:111",
                        "scope": 52549,
                        "visibility": "public"
                    },
                    {
                        "id": 52410,
                        "nodeType": "StructDefinition",
                        "src": "302:123:111",
                        "nodes": [],
                        "canonicalName": "IMulticall3.Call3Value",
                        "members": [
                            {
                                "constant": false,
                                "id": 52403,
                                "mutability": "mutable",
                                "name": "target",
                                "nameLocation": "338:6:111",
                                "nodeType": "VariableDeclaration",
                                "scope": 52410,
                                "src": "330:14:111",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 52402,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "330:7:111",
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
                                "id": 52405,
                                "mutability": "mutable",
                                "name": "allowFailure",
                                "nameLocation": "359:12:111",
                                "nodeType": "VariableDeclaration",
                                "scope": 52410,
                                "src": "354:17:111",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                },
                                "typeName": {
                                    "id": 52404,
                                    "name": "bool",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "354:4:111",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 52407,
                                "mutability": "mutable",
                                "name": "value",
                                "nameLocation": "389:5:111",
                                "nodeType": "VariableDeclaration",
                                "scope": 52410,
                                "src": "381:13:111",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 52406,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "381:7:111",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 52409,
                                "mutability": "mutable",
                                "name": "callData",
                                "nameLocation": "410:8:111",
                                "nodeType": "VariableDeclaration",
                                "scope": 52410,
                                "src": "404:14:111",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_storage_ptr",
                                    "typeString": "bytes"
                                },
                                "typeName": {
                                    "id": 52408,
                                    "name": "bytes",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "404:5:111",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_storage_ptr",
                                        "typeString": "bytes"
                                    }
                                },
                                "visibility": "internal"
                            }
                        ],
                        "name": "Call3Value",
                        "nameLocation": "309:10:111",
                        "scope": 52549,
                        "visibility": "public"
                    },
                    {
                        "id": 52415,
                        "nodeType": "StructDefinition",
                        "src": "431:69:111",
                        "nodes": [],
                        "canonicalName": "IMulticall3.Result",
                        "members": [
                            {
                                "constant": false,
                                "id": 52412,
                                "mutability": "mutable",
                                "name": "success",
                                "nameLocation": "460:7:111",
                                "nodeType": "VariableDeclaration",
                                "scope": 52415,
                                "src": "455:12:111",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                },
                                "typeName": {
                                    "id": 52411,
                                    "name": "bool",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "455:4:111",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 52414,
                                "mutability": "mutable",
                                "name": "returnData",
                                "nameLocation": "483:10:111",
                                "nodeType": "VariableDeclaration",
                                "scope": 52415,
                                "src": "477:16:111",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_storage_ptr",
                                    "typeString": "bytes"
                                },
                                "typeName": {
                                    "id": 52413,
                                    "name": "bytes",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "477:5:111",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_storage_ptr",
                                        "typeString": "bytes"
                                    }
                                },
                                "visibility": "internal"
                            }
                        ],
                        "name": "Result",
                        "nameLocation": "438:6:111",
                        "scope": 52549,
                        "visibility": "public"
                    },
                    {
                        "id": 52427,
                        "nodeType": "FunctionDefinition",
                        "src": "506:140:111",
                        "nodes": [],
                        "functionSelector": "252dba42",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "aggregate",
                        "nameLocation": "515:9:111",
                        "parameters": {
                            "id": 52420,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52419,
                                    "mutability": "mutable",
                                    "name": "calls",
                                    "nameLocation": "541:5:111",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52427,
                                    "src": "525:21:111",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Call_$52394_calldata_ptr_$dyn_calldata_ptr",
                                        "typeString": "struct IMulticall3.Call[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 52417,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 52416,
                                                "name": "Call",
                                                "nameLocations": [
                                                    "525:4:111"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 52394,
                                                "src": "525:4:111"
                                            },
                                            "referencedDeclaration": 52394,
                                            "src": "525:4:111",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Call_$52394_storage_ptr",
                                                "typeString": "struct IMulticall3.Call"
                                            }
                                        },
                                        "id": 52418,
                                        "nodeType": "ArrayTypeName",
                                        "src": "525:6:111",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Call_$52394_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Call[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "524:23:111"
                        },
                        "returnParameters": {
                            "id": 52426,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52422,
                                    "mutability": "mutable",
                                    "name": "blockNumber",
                                    "nameLocation": "606:11:111",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52427,
                                    "src": "598:19:111",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 52421,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "598:7:111",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 52425,
                                    "mutability": "mutable",
                                    "name": "returnData",
                                    "nameLocation": "634:10:111",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52427,
                                    "src": "619:25:111",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "bytes[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 52423,
                                            "name": "bytes",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "619:5:111",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_storage_ptr",
                                                "typeString": "bytes"
                                            }
                                        },
                                        "id": 52424,
                                        "nodeType": "ArrayTypeName",
                                        "src": "619:7:111",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                                            "typeString": "bytes[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "597:48:111"
                        },
                        "scope": 52549,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 52438,
                        "nodeType": "FunctionDefinition",
                        "src": "652:98:111",
                        "nodes": [],
                        "functionSelector": "82ad56cb",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "aggregate3",
                        "nameLocation": "661:10:111",
                        "parameters": {
                            "id": 52432,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52431,
                                    "mutability": "mutable",
                                    "name": "calls",
                                    "nameLocation": "689:5:111",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52438,
                                    "src": "672:22:111",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Call3_$52401_calldata_ptr_$dyn_calldata_ptr",
                                        "typeString": "struct IMulticall3.Call3[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 52429,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 52428,
                                                "name": "Call3",
                                                "nameLocations": [
                                                    "672:5:111"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 52401,
                                                "src": "672:5:111"
                                            },
                                            "referencedDeclaration": 52401,
                                            "src": "672:5:111",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Call3_$52401_storage_ptr",
                                                "typeString": "struct IMulticall3.Call3"
                                            }
                                        },
                                        "id": 52430,
                                        "nodeType": "ArrayTypeName",
                                        "src": "672:7:111",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Call3_$52401_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Call3[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "671:24:111"
                        },
                        "returnParameters": {
                            "id": 52437,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52436,
                                    "mutability": "mutable",
                                    "name": "returnData",
                                    "nameLocation": "738:10:111",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52438,
                                    "src": "722:26:111",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Result_$52415_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct IMulticall3.Result[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 52434,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 52433,
                                                "name": "Result",
                                                "nameLocations": [
                                                    "722:6:111"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 52415,
                                                "src": "722:6:111"
                                            },
                                            "referencedDeclaration": 52415,
                                            "src": "722:6:111",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Result_$52415_storage_ptr",
                                                "typeString": "struct IMulticall3.Result"
                                            }
                                        },
                                        "id": 52435,
                                        "nodeType": "ArrayTypeName",
                                        "src": "722:8:111",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Result_$52415_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Result[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "721:28:111"
                        },
                        "scope": 52549,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 52449,
                        "nodeType": "FunctionDefinition",
                        "src": "756:108:111",
                        "nodes": [],
                        "functionSelector": "174dea71",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "aggregate3Value",
                        "nameLocation": "765:15:111",
                        "parameters": {
                            "id": 52443,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52442,
                                    "mutability": "mutable",
                                    "name": "calls",
                                    "nameLocation": "803:5:111",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52449,
                                    "src": "781:27:111",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Call3Value_$52410_calldata_ptr_$dyn_calldata_ptr",
                                        "typeString": "struct IMulticall3.Call3Value[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 52440,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 52439,
                                                "name": "Call3Value",
                                                "nameLocations": [
                                                    "781:10:111"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 52410,
                                                "src": "781:10:111"
                                            },
                                            "referencedDeclaration": 52410,
                                            "src": "781:10:111",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Call3Value_$52410_storage_ptr",
                                                "typeString": "struct IMulticall3.Call3Value"
                                            }
                                        },
                                        "id": 52441,
                                        "nodeType": "ArrayTypeName",
                                        "src": "781:12:111",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Call3Value_$52410_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Call3Value[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "780:29:111"
                        },
                        "returnParameters": {
                            "id": 52448,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52447,
                                    "mutability": "mutable",
                                    "name": "returnData",
                                    "nameLocation": "852:10:111",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52449,
                                    "src": "836:26:111",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Result_$52415_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct IMulticall3.Result[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 52445,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 52444,
                                                "name": "Result",
                                                "nameLocations": [
                                                    "836:6:111"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 52415,
                                                "src": "836:6:111"
                                            },
                                            "referencedDeclaration": 52415,
                                            "src": "836:6:111",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Result_$52415_storage_ptr",
                                                "typeString": "struct IMulticall3.Result"
                                            }
                                        },
                                        "id": 52446,
                                        "nodeType": "ArrayTypeName",
                                        "src": "836:8:111",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Result_$52415_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Result[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "835:28:111"
                        },
                        "scope": 52549,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 52464,
                        "nodeType": "FunctionDefinition",
                        "src": "870:168:111",
                        "nodes": [],
                        "functionSelector": "c3077fa9",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "blockAndAggregate",
                        "nameLocation": "879:17:111",
                        "parameters": {
                            "id": 52454,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52453,
                                    "mutability": "mutable",
                                    "name": "calls",
                                    "nameLocation": "913:5:111",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52464,
                                    "src": "897:21:111",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Call_$52394_calldata_ptr_$dyn_calldata_ptr",
                                        "typeString": "struct IMulticall3.Call[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 52451,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 52450,
                                                "name": "Call",
                                                "nameLocations": [
                                                    "897:4:111"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 52394,
                                                "src": "897:4:111"
                                            },
                                            "referencedDeclaration": 52394,
                                            "src": "897:4:111",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Call_$52394_storage_ptr",
                                                "typeString": "struct IMulticall3.Call"
                                            }
                                        },
                                        "id": 52452,
                                        "nodeType": "ArrayTypeName",
                                        "src": "897:6:111",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Call_$52394_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Call[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "896:23:111"
                        },
                        "returnParameters": {
                            "id": 52463,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52456,
                                    "mutability": "mutable",
                                    "name": "blockNumber",
                                    "nameLocation": "978:11:111",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52464,
                                    "src": "970:19:111",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 52455,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "970:7:111",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 52458,
                                    "mutability": "mutable",
                                    "name": "blockHash",
                                    "nameLocation": "999:9:111",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52464,
                                    "src": "991:17:111",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 52457,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "991:7:111",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 52462,
                                    "mutability": "mutable",
                                    "name": "returnData",
                                    "nameLocation": "1026:10:111",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52464,
                                    "src": "1010:26:111",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Result_$52415_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct IMulticall3.Result[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 52460,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 52459,
                                                "name": "Result",
                                                "nameLocations": [
                                                    "1010:6:111"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 52415,
                                                "src": "1010:6:111"
                                            },
                                            "referencedDeclaration": 52415,
                                            "src": "1010:6:111",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Result_$52415_storage_ptr",
                                                "typeString": "struct IMulticall3.Result"
                                            }
                                        },
                                        "id": 52461,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1010:8:111",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Result_$52415_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Result[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "969:68:111"
                        },
                        "scope": 52549,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 52469,
                        "nodeType": "FunctionDefinition",
                        "src": "1044:62:111",
                        "nodes": [],
                        "functionSelector": "3e64a696",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBasefee",
                        "nameLocation": "1053:10:111",
                        "parameters": {
                            "id": 52465,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1063:2:111"
                        },
                        "returnParameters": {
                            "id": 52468,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52467,
                                    "mutability": "mutable",
                                    "name": "basefee",
                                    "nameLocation": "1097:7:111",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52469,
                                    "src": "1089:15:111",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 52466,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1089:7:111",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1088:17:111"
                        },
                        "scope": 52549,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 52476,
                        "nodeType": "FunctionDefinition",
                        "src": "1112:85:111",
                        "nodes": [],
                        "functionSelector": "ee82ac5e",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBlockHash",
                        "nameLocation": "1121:12:111",
                        "parameters": {
                            "id": 52472,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52471,
                                    "mutability": "mutable",
                                    "name": "blockNumber",
                                    "nameLocation": "1142:11:111",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52476,
                                    "src": "1134:19:111",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 52470,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1134:7:111",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1133:21:111"
                        },
                        "returnParameters": {
                            "id": 52475,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52474,
                                    "mutability": "mutable",
                                    "name": "blockHash",
                                    "nameLocation": "1186:9:111",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52476,
                                    "src": "1178:17:111",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 52473,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1178:7:111",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1177:19:111"
                        },
                        "scope": 52549,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 52481,
                        "nodeType": "FunctionDefinition",
                        "src": "1203:70:111",
                        "nodes": [],
                        "functionSelector": "42cbb15c",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBlockNumber",
                        "nameLocation": "1212:14:111",
                        "parameters": {
                            "id": 52477,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1226:2:111"
                        },
                        "returnParameters": {
                            "id": 52480,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52479,
                                    "mutability": "mutable",
                                    "name": "blockNumber",
                                    "nameLocation": "1260:11:111",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52481,
                                    "src": "1252:19:111",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 52478,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1252:7:111",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1251:21:111"
                        },
                        "scope": 52549,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 52486,
                        "nodeType": "FunctionDefinition",
                        "src": "1279:62:111",
                        "nodes": [],
                        "functionSelector": "3408e470",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getChainId",
                        "nameLocation": "1288:10:111",
                        "parameters": {
                            "id": 52482,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1298:2:111"
                        },
                        "returnParameters": {
                            "id": 52485,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52484,
                                    "mutability": "mutable",
                                    "name": "chainid",
                                    "nameLocation": "1332:7:111",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52486,
                                    "src": "1324:15:111",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 52483,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1324:7:111",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1323:17:111"
                        },
                        "scope": 52549,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 52491,
                        "nodeType": "FunctionDefinition",
                        "src": "1347:76:111",
                        "nodes": [],
                        "functionSelector": "a8b0574e",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCurrentBlockCoinbase",
                        "nameLocation": "1356:23:111",
                        "parameters": {
                            "id": 52487,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1379:2:111"
                        },
                        "returnParameters": {
                            "id": 52490,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52489,
                                    "mutability": "mutable",
                                    "name": "coinbase",
                                    "nameLocation": "1413:8:111",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52491,
                                    "src": "1405:16:111",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 52488,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1405:7:111",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1404:18:111"
                        },
                        "scope": 52549,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 52496,
                        "nodeType": "FunctionDefinition",
                        "src": "1429:80:111",
                        "nodes": [],
                        "functionSelector": "72425d9d",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCurrentBlockDifficulty",
                        "nameLocation": "1438:25:111",
                        "parameters": {
                            "id": 52492,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1463:2:111"
                        },
                        "returnParameters": {
                            "id": 52495,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52494,
                                    "mutability": "mutable",
                                    "name": "difficulty",
                                    "nameLocation": "1497:10:111",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52496,
                                    "src": "1489:18:111",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 52493,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1489:7:111",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1488:20:111"
                        },
                        "scope": 52549,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 52501,
                        "nodeType": "FunctionDefinition",
                        "src": "1515:76:111",
                        "nodes": [],
                        "functionSelector": "86d516e8",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCurrentBlockGasLimit",
                        "nameLocation": "1524:23:111",
                        "parameters": {
                            "id": 52497,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1547:2:111"
                        },
                        "returnParameters": {
                            "id": 52500,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52499,
                                    "mutability": "mutable",
                                    "name": "gaslimit",
                                    "nameLocation": "1581:8:111",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52501,
                                    "src": "1573:16:111",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 52498,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1573:7:111",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1572:18:111"
                        },
                        "scope": 52549,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 52506,
                        "nodeType": "FunctionDefinition",
                        "src": "1597:78:111",
                        "nodes": [],
                        "functionSelector": "0f28c97d",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCurrentBlockTimestamp",
                        "nameLocation": "1606:24:111",
                        "parameters": {
                            "id": 52502,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1630:2:111"
                        },
                        "returnParameters": {
                            "id": 52505,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52504,
                                    "mutability": "mutable",
                                    "name": "timestamp",
                                    "nameLocation": "1664:9:111",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52506,
                                    "src": "1656:17:111",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 52503,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1656:7:111",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1655:19:111"
                        },
                        "scope": 52549,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 52513,
                        "nodeType": "FunctionDefinition",
                        "src": "1681:77:111",
                        "nodes": [],
                        "functionSelector": "4d2301cc",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getEthBalance",
                        "nameLocation": "1690:13:111",
                        "parameters": {
                            "id": 52509,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52508,
                                    "mutability": "mutable",
                                    "name": "addr",
                                    "nameLocation": "1712:4:111",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52513,
                                    "src": "1704:12:111",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 52507,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1704:7:111",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1703:14:111"
                        },
                        "returnParameters": {
                            "id": 52512,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52511,
                                    "mutability": "mutable",
                                    "name": "balance",
                                    "nameLocation": "1749:7:111",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52513,
                                    "src": "1741:15:111",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 52510,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1741:7:111",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1740:17:111"
                        },
                        "scope": 52549,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 52518,
                        "nodeType": "FunctionDefinition",
                        "src": "1764:70:111",
                        "nodes": [],
                        "functionSelector": "27e86d6e",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getLastBlockHash",
                        "nameLocation": "1773:16:111",
                        "parameters": {
                            "id": 52514,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1789:2:111"
                        },
                        "returnParameters": {
                            "id": 52517,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52516,
                                    "mutability": "mutable",
                                    "name": "blockHash",
                                    "nameLocation": "1823:9:111",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52518,
                                    "src": "1815:17:111",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 52515,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1815:7:111",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1814:19:111"
                        },
                        "scope": 52549,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 52531,
                        "nodeType": "FunctionDefinition",
                        "src": "1840:144:111",
                        "nodes": [],
                        "functionSelector": "bce38bd7",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "tryAggregate",
                        "nameLocation": "1849:12:111",
                        "parameters": {
                            "id": 52525,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52520,
                                    "mutability": "mutable",
                                    "name": "requireSuccess",
                                    "nameLocation": "1867:14:111",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52531,
                                    "src": "1862:19:111",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 52519,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1862:4:111",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 52524,
                                    "mutability": "mutable",
                                    "name": "calls",
                                    "nameLocation": "1899:5:111",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52531,
                                    "src": "1883:21:111",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Call_$52394_calldata_ptr_$dyn_calldata_ptr",
                                        "typeString": "struct IMulticall3.Call[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 52522,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 52521,
                                                "name": "Call",
                                                "nameLocations": [
                                                    "1883:4:111"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 52394,
                                                "src": "1883:4:111"
                                            },
                                            "referencedDeclaration": 52394,
                                            "src": "1883:4:111",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Call_$52394_storage_ptr",
                                                "typeString": "struct IMulticall3.Call"
                                            }
                                        },
                                        "id": 52523,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1883:6:111",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Call_$52394_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Call[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1861:44:111"
                        },
                        "returnParameters": {
                            "id": 52530,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52529,
                                    "mutability": "mutable",
                                    "name": "returnData",
                                    "nameLocation": "1972:10:111",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52531,
                                    "src": "1956:26:111",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Result_$52415_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct IMulticall3.Result[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 52527,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 52526,
                                                "name": "Result",
                                                "nameLocations": [
                                                    "1956:6:111"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 52415,
                                                "src": "1956:6:111"
                                            },
                                            "referencedDeclaration": 52415,
                                            "src": "1956:6:111",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Result_$52415_storage_ptr",
                                                "typeString": "struct IMulticall3.Result"
                                            }
                                        },
                                        "id": 52528,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1956:8:111",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Result_$52415_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Result[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1955:28:111"
                        },
                        "scope": 52549,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 52548,
                        "nodeType": "FunctionDefinition",
                        "src": "1990:192:111",
                        "nodes": [],
                        "functionSelector": "399542e9",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "tryBlockAndAggregate",
                        "nameLocation": "1999:20:111",
                        "parameters": {
                            "id": 52538,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52533,
                                    "mutability": "mutable",
                                    "name": "requireSuccess",
                                    "nameLocation": "2025:14:111",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52548,
                                    "src": "2020:19:111",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 52532,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2020:4:111",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 52537,
                                    "mutability": "mutable",
                                    "name": "calls",
                                    "nameLocation": "2057:5:111",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52548,
                                    "src": "2041:21:111",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Call_$52394_calldata_ptr_$dyn_calldata_ptr",
                                        "typeString": "struct IMulticall3.Call[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 52535,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 52534,
                                                "name": "Call",
                                                "nameLocations": [
                                                    "2041:4:111"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 52394,
                                                "src": "2041:4:111"
                                            },
                                            "referencedDeclaration": 52394,
                                            "src": "2041:4:111",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Call_$52394_storage_ptr",
                                                "typeString": "struct IMulticall3.Call"
                                            }
                                        },
                                        "id": 52536,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2041:6:111",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Call_$52394_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Call[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2019:44:111"
                        },
                        "returnParameters": {
                            "id": 52547,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52540,
                                    "mutability": "mutable",
                                    "name": "blockNumber",
                                    "nameLocation": "2122:11:111",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52548,
                                    "src": "2114:19:111",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 52539,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2114:7:111",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 52542,
                                    "mutability": "mutable",
                                    "name": "blockHash",
                                    "nameLocation": "2143:9:111",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52548,
                                    "src": "2135:17:111",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 52541,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2135:7:111",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 52546,
                                    "mutability": "mutable",
                                    "name": "returnData",
                                    "nameLocation": "2170:10:111",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 52548,
                                    "src": "2154:26:111",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Result_$52415_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct IMulticall3.Result[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 52544,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 52543,
                                                "name": "Result",
                                                "nameLocations": [
                                                    "2154:6:111"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 52415,
                                                "src": "2154:6:111"
                                            },
                                            "referencedDeclaration": 52415,
                                            "src": "2154:6:111",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Result_$52415_storage_ptr",
                                                "typeString": "struct IMulticall3.Result"
                                            }
                                        },
                                        "id": 52545,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2154:8:111",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Result_$52415_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Result[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2113:68:111"
                        },
                        "scope": 52549,
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
                    52549
                ],
                "name": "IMulticall3",
                "nameLocation": "110:11:111",
                "scope": 52550,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 111
};
