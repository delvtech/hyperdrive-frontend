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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"aggregate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"internalType\":\"bytes[]\",\"name\":\"returnData\",\"type\":\"bytes[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"allowFailure\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call3[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"aggregate3\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"allowFailure\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call3Value[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"aggregate3Value\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"blockAndAggregate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBasefee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"basefee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"name\":\"getBlockHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBlockNumber\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getChainId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"chainid\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockCoinbase\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"coinbase\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockDifficulty\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"difficulty\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockGasLimit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"gaslimit\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockTimestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"timestamp\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"getEthBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getLastBlockHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"requireSuccess\",\"type\":\"bool\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"tryAggregate\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"requireSuccess\",\"type\":\"bool\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"tryBlockAndAggregate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/interfaces/IMulticall3.sol\":\"IMulticall3\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/interfaces/IMulticall3.sol\":{\"keccak256\":\"0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0\",\"dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2\"]}},\"version\":1}",
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
        "id": 57166,
        "exportedSymbols": {
            "IMulticall3": [
                57165
            ]
        },
        "nodeType": "SourceUnit",
        "src": "32:2153:159",
        "nodes": [
            {
                "id": 57004,
                "nodeType": "PragmaDirective",
                "src": "32:31:159",
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
                "id": 57005,
                "nodeType": "PragmaDirective",
                "src": "65:33:159",
                "nodes": [],
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ]
            },
            {
                "id": 57165,
                "nodeType": "ContractDefinition",
                "src": "100:2084:159",
                "nodes": [
                    {
                        "id": 57010,
                        "nodeType": "StructDefinition",
                        "src": "128:67:159",
                        "nodes": [],
                        "canonicalName": "IMulticall3.Call",
                        "members": [
                            {
                                "constant": false,
                                "id": 57007,
                                "mutability": "mutable",
                                "name": "target",
                                "nameLocation": "158:6:159",
                                "nodeType": "VariableDeclaration",
                                "scope": 57010,
                                "src": "150:14:159",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 57006,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "150:7:159",
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
                                "id": 57009,
                                "mutability": "mutable",
                                "name": "callData",
                                "nameLocation": "180:8:159",
                                "nodeType": "VariableDeclaration",
                                "scope": 57010,
                                "src": "174:14:159",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_storage_ptr",
                                    "typeString": "bytes"
                                },
                                "typeName": {
                                    "id": 57008,
                                    "name": "bytes",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "174:5:159",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_storage_ptr",
                                        "typeString": "bytes"
                                    }
                                },
                                "visibility": "internal"
                            }
                        ],
                        "name": "Call",
                        "nameLocation": "135:4:159",
                        "scope": 57165,
                        "visibility": "public"
                    },
                    {
                        "id": 57017,
                        "nodeType": "StructDefinition",
                        "src": "201:95:159",
                        "nodes": [],
                        "canonicalName": "IMulticall3.Call3",
                        "members": [
                            {
                                "constant": false,
                                "id": 57012,
                                "mutability": "mutable",
                                "name": "target",
                                "nameLocation": "232:6:159",
                                "nodeType": "VariableDeclaration",
                                "scope": 57017,
                                "src": "224:14:159",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 57011,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "224:7:159",
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
                                "id": 57014,
                                "mutability": "mutable",
                                "name": "allowFailure",
                                "nameLocation": "253:12:159",
                                "nodeType": "VariableDeclaration",
                                "scope": 57017,
                                "src": "248:17:159",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                },
                                "typeName": {
                                    "id": 57013,
                                    "name": "bool",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "248:4:159",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 57016,
                                "mutability": "mutable",
                                "name": "callData",
                                "nameLocation": "281:8:159",
                                "nodeType": "VariableDeclaration",
                                "scope": 57017,
                                "src": "275:14:159",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_storage_ptr",
                                    "typeString": "bytes"
                                },
                                "typeName": {
                                    "id": 57015,
                                    "name": "bytes",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "275:5:159",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_storage_ptr",
                                        "typeString": "bytes"
                                    }
                                },
                                "visibility": "internal"
                            }
                        ],
                        "name": "Call3",
                        "nameLocation": "208:5:159",
                        "scope": 57165,
                        "visibility": "public"
                    },
                    {
                        "id": 57026,
                        "nodeType": "StructDefinition",
                        "src": "302:123:159",
                        "nodes": [],
                        "canonicalName": "IMulticall3.Call3Value",
                        "members": [
                            {
                                "constant": false,
                                "id": 57019,
                                "mutability": "mutable",
                                "name": "target",
                                "nameLocation": "338:6:159",
                                "nodeType": "VariableDeclaration",
                                "scope": 57026,
                                "src": "330:14:159",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 57018,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "330:7:159",
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
                                "id": 57021,
                                "mutability": "mutable",
                                "name": "allowFailure",
                                "nameLocation": "359:12:159",
                                "nodeType": "VariableDeclaration",
                                "scope": 57026,
                                "src": "354:17:159",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                },
                                "typeName": {
                                    "id": 57020,
                                    "name": "bool",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "354:4:159",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 57023,
                                "mutability": "mutable",
                                "name": "value",
                                "nameLocation": "389:5:159",
                                "nodeType": "VariableDeclaration",
                                "scope": 57026,
                                "src": "381:13:159",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 57022,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "381:7:159",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 57025,
                                "mutability": "mutable",
                                "name": "callData",
                                "nameLocation": "410:8:159",
                                "nodeType": "VariableDeclaration",
                                "scope": 57026,
                                "src": "404:14:159",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_storage_ptr",
                                    "typeString": "bytes"
                                },
                                "typeName": {
                                    "id": 57024,
                                    "name": "bytes",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "404:5:159",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_storage_ptr",
                                        "typeString": "bytes"
                                    }
                                },
                                "visibility": "internal"
                            }
                        ],
                        "name": "Call3Value",
                        "nameLocation": "309:10:159",
                        "scope": 57165,
                        "visibility": "public"
                    },
                    {
                        "id": 57031,
                        "nodeType": "StructDefinition",
                        "src": "431:69:159",
                        "nodes": [],
                        "canonicalName": "IMulticall3.Result",
                        "members": [
                            {
                                "constant": false,
                                "id": 57028,
                                "mutability": "mutable",
                                "name": "success",
                                "nameLocation": "460:7:159",
                                "nodeType": "VariableDeclaration",
                                "scope": 57031,
                                "src": "455:12:159",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                },
                                "typeName": {
                                    "id": 57027,
                                    "name": "bool",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "455:4:159",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 57030,
                                "mutability": "mutable",
                                "name": "returnData",
                                "nameLocation": "483:10:159",
                                "nodeType": "VariableDeclaration",
                                "scope": 57031,
                                "src": "477:16:159",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_storage_ptr",
                                    "typeString": "bytes"
                                },
                                "typeName": {
                                    "id": 57029,
                                    "name": "bytes",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "477:5:159",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_storage_ptr",
                                        "typeString": "bytes"
                                    }
                                },
                                "visibility": "internal"
                            }
                        ],
                        "name": "Result",
                        "nameLocation": "438:6:159",
                        "scope": 57165,
                        "visibility": "public"
                    },
                    {
                        "id": 57043,
                        "nodeType": "FunctionDefinition",
                        "src": "506:140:159",
                        "nodes": [],
                        "functionSelector": "252dba42",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "aggregate",
                        "nameLocation": "515:9:159",
                        "parameters": {
                            "id": 57036,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57035,
                                    "mutability": "mutable",
                                    "name": "calls",
                                    "nameLocation": "541:5:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57043,
                                    "src": "525:21:159",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Call_$57010_calldata_ptr_$dyn_calldata_ptr",
                                        "typeString": "struct IMulticall3.Call[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 57033,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 57032,
                                                "name": "Call",
                                                "nameLocations": [
                                                    "525:4:159"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 57010,
                                                "src": "525:4:159"
                                            },
                                            "referencedDeclaration": 57010,
                                            "src": "525:4:159",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Call_$57010_storage_ptr",
                                                "typeString": "struct IMulticall3.Call"
                                            }
                                        },
                                        "id": 57034,
                                        "nodeType": "ArrayTypeName",
                                        "src": "525:6:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Call_$57010_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Call[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "524:23:159"
                        },
                        "returnParameters": {
                            "id": 57042,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57038,
                                    "mutability": "mutable",
                                    "name": "blockNumber",
                                    "nameLocation": "606:11:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57043,
                                    "src": "598:19:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 57037,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "598:7:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 57041,
                                    "mutability": "mutable",
                                    "name": "returnData",
                                    "nameLocation": "634:10:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57043,
                                    "src": "619:25:159",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "bytes[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 57039,
                                            "name": "bytes",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "619:5:159",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_storage_ptr",
                                                "typeString": "bytes"
                                            }
                                        },
                                        "id": 57040,
                                        "nodeType": "ArrayTypeName",
                                        "src": "619:7:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                                            "typeString": "bytes[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "597:48:159"
                        },
                        "scope": 57165,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57054,
                        "nodeType": "FunctionDefinition",
                        "src": "652:98:159",
                        "nodes": [],
                        "functionSelector": "82ad56cb",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "aggregate3",
                        "nameLocation": "661:10:159",
                        "parameters": {
                            "id": 57048,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57047,
                                    "mutability": "mutable",
                                    "name": "calls",
                                    "nameLocation": "689:5:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57054,
                                    "src": "672:22:159",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Call3_$57017_calldata_ptr_$dyn_calldata_ptr",
                                        "typeString": "struct IMulticall3.Call3[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 57045,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 57044,
                                                "name": "Call3",
                                                "nameLocations": [
                                                    "672:5:159"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 57017,
                                                "src": "672:5:159"
                                            },
                                            "referencedDeclaration": 57017,
                                            "src": "672:5:159",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Call3_$57017_storage_ptr",
                                                "typeString": "struct IMulticall3.Call3"
                                            }
                                        },
                                        "id": 57046,
                                        "nodeType": "ArrayTypeName",
                                        "src": "672:7:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Call3_$57017_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Call3[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "671:24:159"
                        },
                        "returnParameters": {
                            "id": 57053,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57052,
                                    "mutability": "mutable",
                                    "name": "returnData",
                                    "nameLocation": "738:10:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57054,
                                    "src": "722:26:159",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Result_$57031_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct IMulticall3.Result[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 57050,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 57049,
                                                "name": "Result",
                                                "nameLocations": [
                                                    "722:6:159"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 57031,
                                                "src": "722:6:159"
                                            },
                                            "referencedDeclaration": 57031,
                                            "src": "722:6:159",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Result_$57031_storage_ptr",
                                                "typeString": "struct IMulticall3.Result"
                                            }
                                        },
                                        "id": 57051,
                                        "nodeType": "ArrayTypeName",
                                        "src": "722:8:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Result_$57031_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Result[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "721:28:159"
                        },
                        "scope": 57165,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57065,
                        "nodeType": "FunctionDefinition",
                        "src": "756:108:159",
                        "nodes": [],
                        "functionSelector": "174dea71",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "aggregate3Value",
                        "nameLocation": "765:15:159",
                        "parameters": {
                            "id": 57059,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57058,
                                    "mutability": "mutable",
                                    "name": "calls",
                                    "nameLocation": "803:5:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57065,
                                    "src": "781:27:159",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Call3Value_$57026_calldata_ptr_$dyn_calldata_ptr",
                                        "typeString": "struct IMulticall3.Call3Value[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 57056,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 57055,
                                                "name": "Call3Value",
                                                "nameLocations": [
                                                    "781:10:159"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 57026,
                                                "src": "781:10:159"
                                            },
                                            "referencedDeclaration": 57026,
                                            "src": "781:10:159",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Call3Value_$57026_storage_ptr",
                                                "typeString": "struct IMulticall3.Call3Value"
                                            }
                                        },
                                        "id": 57057,
                                        "nodeType": "ArrayTypeName",
                                        "src": "781:12:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Call3Value_$57026_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Call3Value[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "780:29:159"
                        },
                        "returnParameters": {
                            "id": 57064,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57063,
                                    "mutability": "mutable",
                                    "name": "returnData",
                                    "nameLocation": "852:10:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57065,
                                    "src": "836:26:159",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Result_$57031_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct IMulticall3.Result[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 57061,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 57060,
                                                "name": "Result",
                                                "nameLocations": [
                                                    "836:6:159"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 57031,
                                                "src": "836:6:159"
                                            },
                                            "referencedDeclaration": 57031,
                                            "src": "836:6:159",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Result_$57031_storage_ptr",
                                                "typeString": "struct IMulticall3.Result"
                                            }
                                        },
                                        "id": 57062,
                                        "nodeType": "ArrayTypeName",
                                        "src": "836:8:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Result_$57031_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Result[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "835:28:159"
                        },
                        "scope": 57165,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57080,
                        "nodeType": "FunctionDefinition",
                        "src": "870:168:159",
                        "nodes": [],
                        "functionSelector": "c3077fa9",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "blockAndAggregate",
                        "nameLocation": "879:17:159",
                        "parameters": {
                            "id": 57070,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57069,
                                    "mutability": "mutable",
                                    "name": "calls",
                                    "nameLocation": "913:5:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57080,
                                    "src": "897:21:159",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Call_$57010_calldata_ptr_$dyn_calldata_ptr",
                                        "typeString": "struct IMulticall3.Call[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 57067,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 57066,
                                                "name": "Call",
                                                "nameLocations": [
                                                    "897:4:159"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 57010,
                                                "src": "897:4:159"
                                            },
                                            "referencedDeclaration": 57010,
                                            "src": "897:4:159",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Call_$57010_storage_ptr",
                                                "typeString": "struct IMulticall3.Call"
                                            }
                                        },
                                        "id": 57068,
                                        "nodeType": "ArrayTypeName",
                                        "src": "897:6:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Call_$57010_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Call[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "896:23:159"
                        },
                        "returnParameters": {
                            "id": 57079,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57072,
                                    "mutability": "mutable",
                                    "name": "blockNumber",
                                    "nameLocation": "978:11:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57080,
                                    "src": "970:19:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 57071,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "970:7:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 57074,
                                    "mutability": "mutable",
                                    "name": "blockHash",
                                    "nameLocation": "999:9:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57080,
                                    "src": "991:17:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 57073,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "991:7:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 57078,
                                    "mutability": "mutable",
                                    "name": "returnData",
                                    "nameLocation": "1026:10:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57080,
                                    "src": "1010:26:159",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Result_$57031_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct IMulticall3.Result[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 57076,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 57075,
                                                "name": "Result",
                                                "nameLocations": [
                                                    "1010:6:159"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 57031,
                                                "src": "1010:6:159"
                                            },
                                            "referencedDeclaration": 57031,
                                            "src": "1010:6:159",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Result_$57031_storage_ptr",
                                                "typeString": "struct IMulticall3.Result"
                                            }
                                        },
                                        "id": 57077,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1010:8:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Result_$57031_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Result[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "969:68:159"
                        },
                        "scope": 57165,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57085,
                        "nodeType": "FunctionDefinition",
                        "src": "1044:62:159",
                        "nodes": [],
                        "functionSelector": "3e64a696",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBasefee",
                        "nameLocation": "1053:10:159",
                        "parameters": {
                            "id": 57081,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1063:2:159"
                        },
                        "returnParameters": {
                            "id": 57084,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57083,
                                    "mutability": "mutable",
                                    "name": "basefee",
                                    "nameLocation": "1097:7:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57085,
                                    "src": "1089:15:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 57082,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1089:7:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1088:17:159"
                        },
                        "scope": 57165,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57092,
                        "nodeType": "FunctionDefinition",
                        "src": "1112:85:159",
                        "nodes": [],
                        "functionSelector": "ee82ac5e",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBlockHash",
                        "nameLocation": "1121:12:159",
                        "parameters": {
                            "id": 57088,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57087,
                                    "mutability": "mutable",
                                    "name": "blockNumber",
                                    "nameLocation": "1142:11:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57092,
                                    "src": "1134:19:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 57086,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1134:7:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1133:21:159"
                        },
                        "returnParameters": {
                            "id": 57091,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57090,
                                    "mutability": "mutable",
                                    "name": "blockHash",
                                    "nameLocation": "1186:9:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57092,
                                    "src": "1178:17:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 57089,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1178:7:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1177:19:159"
                        },
                        "scope": 57165,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57097,
                        "nodeType": "FunctionDefinition",
                        "src": "1203:70:159",
                        "nodes": [],
                        "functionSelector": "42cbb15c",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBlockNumber",
                        "nameLocation": "1212:14:159",
                        "parameters": {
                            "id": 57093,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1226:2:159"
                        },
                        "returnParameters": {
                            "id": 57096,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57095,
                                    "mutability": "mutable",
                                    "name": "blockNumber",
                                    "nameLocation": "1260:11:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57097,
                                    "src": "1252:19:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 57094,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1252:7:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1251:21:159"
                        },
                        "scope": 57165,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57102,
                        "nodeType": "FunctionDefinition",
                        "src": "1279:62:159",
                        "nodes": [],
                        "functionSelector": "3408e470",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getChainId",
                        "nameLocation": "1288:10:159",
                        "parameters": {
                            "id": 57098,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1298:2:159"
                        },
                        "returnParameters": {
                            "id": 57101,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57100,
                                    "mutability": "mutable",
                                    "name": "chainid",
                                    "nameLocation": "1332:7:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57102,
                                    "src": "1324:15:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 57099,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1324:7:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1323:17:159"
                        },
                        "scope": 57165,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57107,
                        "nodeType": "FunctionDefinition",
                        "src": "1347:76:159",
                        "nodes": [],
                        "functionSelector": "a8b0574e",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCurrentBlockCoinbase",
                        "nameLocation": "1356:23:159",
                        "parameters": {
                            "id": 57103,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1379:2:159"
                        },
                        "returnParameters": {
                            "id": 57106,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57105,
                                    "mutability": "mutable",
                                    "name": "coinbase",
                                    "nameLocation": "1413:8:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57107,
                                    "src": "1405:16:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 57104,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1405:7:159",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1404:18:159"
                        },
                        "scope": 57165,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57112,
                        "nodeType": "FunctionDefinition",
                        "src": "1429:80:159",
                        "nodes": [],
                        "functionSelector": "72425d9d",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCurrentBlockDifficulty",
                        "nameLocation": "1438:25:159",
                        "parameters": {
                            "id": 57108,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1463:2:159"
                        },
                        "returnParameters": {
                            "id": 57111,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57110,
                                    "mutability": "mutable",
                                    "name": "difficulty",
                                    "nameLocation": "1497:10:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57112,
                                    "src": "1489:18:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 57109,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1489:7:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1488:20:159"
                        },
                        "scope": 57165,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57117,
                        "nodeType": "FunctionDefinition",
                        "src": "1515:76:159",
                        "nodes": [],
                        "functionSelector": "86d516e8",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCurrentBlockGasLimit",
                        "nameLocation": "1524:23:159",
                        "parameters": {
                            "id": 57113,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1547:2:159"
                        },
                        "returnParameters": {
                            "id": 57116,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57115,
                                    "mutability": "mutable",
                                    "name": "gaslimit",
                                    "nameLocation": "1581:8:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57117,
                                    "src": "1573:16:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 57114,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1573:7:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1572:18:159"
                        },
                        "scope": 57165,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57122,
                        "nodeType": "FunctionDefinition",
                        "src": "1597:78:159",
                        "nodes": [],
                        "functionSelector": "0f28c97d",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCurrentBlockTimestamp",
                        "nameLocation": "1606:24:159",
                        "parameters": {
                            "id": 57118,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1630:2:159"
                        },
                        "returnParameters": {
                            "id": 57121,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57120,
                                    "mutability": "mutable",
                                    "name": "timestamp",
                                    "nameLocation": "1664:9:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57122,
                                    "src": "1656:17:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 57119,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1656:7:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1655:19:159"
                        },
                        "scope": 57165,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57129,
                        "nodeType": "FunctionDefinition",
                        "src": "1681:77:159",
                        "nodes": [],
                        "functionSelector": "4d2301cc",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getEthBalance",
                        "nameLocation": "1690:13:159",
                        "parameters": {
                            "id": 57125,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57124,
                                    "mutability": "mutable",
                                    "name": "addr",
                                    "nameLocation": "1712:4:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57129,
                                    "src": "1704:12:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 57123,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1704:7:159",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1703:14:159"
                        },
                        "returnParameters": {
                            "id": 57128,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57127,
                                    "mutability": "mutable",
                                    "name": "balance",
                                    "nameLocation": "1749:7:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57129,
                                    "src": "1741:15:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 57126,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1741:7:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1740:17:159"
                        },
                        "scope": 57165,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57134,
                        "nodeType": "FunctionDefinition",
                        "src": "1764:70:159",
                        "nodes": [],
                        "functionSelector": "27e86d6e",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getLastBlockHash",
                        "nameLocation": "1773:16:159",
                        "parameters": {
                            "id": 57130,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1789:2:159"
                        },
                        "returnParameters": {
                            "id": 57133,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57132,
                                    "mutability": "mutable",
                                    "name": "blockHash",
                                    "nameLocation": "1823:9:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57134,
                                    "src": "1815:17:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 57131,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1815:7:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1814:19:159"
                        },
                        "scope": 57165,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57147,
                        "nodeType": "FunctionDefinition",
                        "src": "1840:144:159",
                        "nodes": [],
                        "functionSelector": "bce38bd7",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "tryAggregate",
                        "nameLocation": "1849:12:159",
                        "parameters": {
                            "id": 57141,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57136,
                                    "mutability": "mutable",
                                    "name": "requireSuccess",
                                    "nameLocation": "1867:14:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57147,
                                    "src": "1862:19:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 57135,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1862:4:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 57140,
                                    "mutability": "mutable",
                                    "name": "calls",
                                    "nameLocation": "1899:5:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57147,
                                    "src": "1883:21:159",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Call_$57010_calldata_ptr_$dyn_calldata_ptr",
                                        "typeString": "struct IMulticall3.Call[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 57138,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 57137,
                                                "name": "Call",
                                                "nameLocations": [
                                                    "1883:4:159"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 57010,
                                                "src": "1883:4:159"
                                            },
                                            "referencedDeclaration": 57010,
                                            "src": "1883:4:159",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Call_$57010_storage_ptr",
                                                "typeString": "struct IMulticall3.Call"
                                            }
                                        },
                                        "id": 57139,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1883:6:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Call_$57010_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Call[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1861:44:159"
                        },
                        "returnParameters": {
                            "id": 57146,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57145,
                                    "mutability": "mutable",
                                    "name": "returnData",
                                    "nameLocation": "1972:10:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57147,
                                    "src": "1956:26:159",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Result_$57031_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct IMulticall3.Result[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 57143,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 57142,
                                                "name": "Result",
                                                "nameLocations": [
                                                    "1956:6:159"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 57031,
                                                "src": "1956:6:159"
                                            },
                                            "referencedDeclaration": 57031,
                                            "src": "1956:6:159",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Result_$57031_storage_ptr",
                                                "typeString": "struct IMulticall3.Result"
                                            }
                                        },
                                        "id": 57144,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1956:8:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Result_$57031_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Result[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1955:28:159"
                        },
                        "scope": 57165,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57164,
                        "nodeType": "FunctionDefinition",
                        "src": "1990:192:159",
                        "nodes": [],
                        "functionSelector": "399542e9",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "tryBlockAndAggregate",
                        "nameLocation": "1999:20:159",
                        "parameters": {
                            "id": 57154,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57149,
                                    "mutability": "mutable",
                                    "name": "requireSuccess",
                                    "nameLocation": "2025:14:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57164,
                                    "src": "2020:19:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 57148,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2020:4:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 57153,
                                    "mutability": "mutable",
                                    "name": "calls",
                                    "nameLocation": "2057:5:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57164,
                                    "src": "2041:21:159",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Call_$57010_calldata_ptr_$dyn_calldata_ptr",
                                        "typeString": "struct IMulticall3.Call[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 57151,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 57150,
                                                "name": "Call",
                                                "nameLocations": [
                                                    "2041:4:159"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 57010,
                                                "src": "2041:4:159"
                                            },
                                            "referencedDeclaration": 57010,
                                            "src": "2041:4:159",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Call_$57010_storage_ptr",
                                                "typeString": "struct IMulticall3.Call"
                                            }
                                        },
                                        "id": 57152,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2041:6:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Call_$57010_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Call[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2019:44:159"
                        },
                        "returnParameters": {
                            "id": 57163,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57156,
                                    "mutability": "mutable",
                                    "name": "blockNumber",
                                    "nameLocation": "2122:11:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57164,
                                    "src": "2114:19:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 57155,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2114:7:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 57158,
                                    "mutability": "mutable",
                                    "name": "blockHash",
                                    "nameLocation": "2143:9:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57164,
                                    "src": "2135:17:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 57157,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2135:7:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 57162,
                                    "mutability": "mutable",
                                    "name": "returnData",
                                    "nameLocation": "2170:10:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57164,
                                    "src": "2154:26:159",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Result_$57031_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct IMulticall3.Result[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 57160,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 57159,
                                                "name": "Result",
                                                "nameLocations": [
                                                    "2154:6:159"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 57031,
                                                "src": "2154:6:159"
                                            },
                                            "referencedDeclaration": 57031,
                                            "src": "2154:6:159",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Result_$57031_storage_ptr",
                                                "typeString": "struct IMulticall3.Result"
                                            }
                                        },
                                        "id": 57161,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2154:8:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Result_$57031_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Result[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2113:68:159"
                        },
                        "scope": 57165,
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
                    57165
                ],
                "name": "IMulticall3",
                "nameLocation": "110:11:159",
                "scope": 57166,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 159
};
