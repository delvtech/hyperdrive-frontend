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
        "id": 57057,
        "exportedSymbols": {
            "IMulticall3": [
                57056
            ]
        },
        "nodeType": "SourceUnit",
        "src": "32:2153:159",
        "nodes": [
            {
                "id": 56895,
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
                "id": 56896,
                "nodeType": "PragmaDirective",
                "src": "65:33:159",
                "nodes": [],
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ]
            },
            {
                "id": 57056,
                "nodeType": "ContractDefinition",
                "src": "100:2084:159",
                "nodes": [
                    {
                        "id": 56901,
                        "nodeType": "StructDefinition",
                        "src": "128:67:159",
                        "nodes": [],
                        "canonicalName": "IMulticall3.Call",
                        "members": [
                            {
                                "constant": false,
                                "id": 56898,
                                "mutability": "mutable",
                                "name": "target",
                                "nameLocation": "158:6:159",
                                "nodeType": "VariableDeclaration",
                                "scope": 56901,
                                "src": "150:14:159",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 56897,
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
                                "id": 56900,
                                "mutability": "mutable",
                                "name": "callData",
                                "nameLocation": "180:8:159",
                                "nodeType": "VariableDeclaration",
                                "scope": 56901,
                                "src": "174:14:159",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_storage_ptr",
                                    "typeString": "bytes"
                                },
                                "typeName": {
                                    "id": 56899,
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
                        "scope": 57056,
                        "visibility": "public"
                    },
                    {
                        "id": 56908,
                        "nodeType": "StructDefinition",
                        "src": "201:95:159",
                        "nodes": [],
                        "canonicalName": "IMulticall3.Call3",
                        "members": [
                            {
                                "constant": false,
                                "id": 56903,
                                "mutability": "mutable",
                                "name": "target",
                                "nameLocation": "232:6:159",
                                "nodeType": "VariableDeclaration",
                                "scope": 56908,
                                "src": "224:14:159",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 56902,
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
                                "id": 56905,
                                "mutability": "mutable",
                                "name": "allowFailure",
                                "nameLocation": "253:12:159",
                                "nodeType": "VariableDeclaration",
                                "scope": 56908,
                                "src": "248:17:159",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                },
                                "typeName": {
                                    "id": 56904,
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
                                "id": 56907,
                                "mutability": "mutable",
                                "name": "callData",
                                "nameLocation": "281:8:159",
                                "nodeType": "VariableDeclaration",
                                "scope": 56908,
                                "src": "275:14:159",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_storage_ptr",
                                    "typeString": "bytes"
                                },
                                "typeName": {
                                    "id": 56906,
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
                        "scope": 57056,
                        "visibility": "public"
                    },
                    {
                        "id": 56917,
                        "nodeType": "StructDefinition",
                        "src": "302:123:159",
                        "nodes": [],
                        "canonicalName": "IMulticall3.Call3Value",
                        "members": [
                            {
                                "constant": false,
                                "id": 56910,
                                "mutability": "mutable",
                                "name": "target",
                                "nameLocation": "338:6:159",
                                "nodeType": "VariableDeclaration",
                                "scope": 56917,
                                "src": "330:14:159",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 56909,
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
                                "id": 56912,
                                "mutability": "mutable",
                                "name": "allowFailure",
                                "nameLocation": "359:12:159",
                                "nodeType": "VariableDeclaration",
                                "scope": 56917,
                                "src": "354:17:159",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                },
                                "typeName": {
                                    "id": 56911,
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
                                "id": 56914,
                                "mutability": "mutable",
                                "name": "value",
                                "nameLocation": "389:5:159",
                                "nodeType": "VariableDeclaration",
                                "scope": 56917,
                                "src": "381:13:159",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 56913,
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
                                "id": 56916,
                                "mutability": "mutable",
                                "name": "callData",
                                "nameLocation": "410:8:159",
                                "nodeType": "VariableDeclaration",
                                "scope": 56917,
                                "src": "404:14:159",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_storage_ptr",
                                    "typeString": "bytes"
                                },
                                "typeName": {
                                    "id": 56915,
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
                        "scope": 57056,
                        "visibility": "public"
                    },
                    {
                        "id": 56922,
                        "nodeType": "StructDefinition",
                        "src": "431:69:159",
                        "nodes": [],
                        "canonicalName": "IMulticall3.Result",
                        "members": [
                            {
                                "constant": false,
                                "id": 56919,
                                "mutability": "mutable",
                                "name": "success",
                                "nameLocation": "460:7:159",
                                "nodeType": "VariableDeclaration",
                                "scope": 56922,
                                "src": "455:12:159",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                },
                                "typeName": {
                                    "id": 56918,
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
                                "id": 56921,
                                "mutability": "mutable",
                                "name": "returnData",
                                "nameLocation": "483:10:159",
                                "nodeType": "VariableDeclaration",
                                "scope": 56922,
                                "src": "477:16:159",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_storage_ptr",
                                    "typeString": "bytes"
                                },
                                "typeName": {
                                    "id": 56920,
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
                        "scope": 57056,
                        "visibility": "public"
                    },
                    {
                        "id": 56934,
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
                            "id": 56927,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 56926,
                                    "mutability": "mutable",
                                    "name": "calls",
                                    "nameLocation": "541:5:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 56934,
                                    "src": "525:21:159",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Call_$56901_calldata_ptr_$dyn_calldata_ptr",
                                        "typeString": "struct IMulticall3.Call[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 56924,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 56923,
                                                "name": "Call",
                                                "nameLocations": [
                                                    "525:4:159"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 56901,
                                                "src": "525:4:159"
                                            },
                                            "referencedDeclaration": 56901,
                                            "src": "525:4:159",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Call_$56901_storage_ptr",
                                                "typeString": "struct IMulticall3.Call"
                                            }
                                        },
                                        "id": 56925,
                                        "nodeType": "ArrayTypeName",
                                        "src": "525:6:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Call_$56901_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Call[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "524:23:159"
                        },
                        "returnParameters": {
                            "id": 56933,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 56929,
                                    "mutability": "mutable",
                                    "name": "blockNumber",
                                    "nameLocation": "606:11:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 56934,
                                    "src": "598:19:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 56928,
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
                                    "id": 56932,
                                    "mutability": "mutable",
                                    "name": "returnData",
                                    "nameLocation": "634:10:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 56934,
                                    "src": "619:25:159",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "bytes[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 56930,
                                            "name": "bytes",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "619:5:159",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_storage_ptr",
                                                "typeString": "bytes"
                                            }
                                        },
                                        "id": 56931,
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
                        "scope": 57056,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 56945,
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
                            "id": 56939,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 56938,
                                    "mutability": "mutable",
                                    "name": "calls",
                                    "nameLocation": "689:5:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 56945,
                                    "src": "672:22:159",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Call3_$56908_calldata_ptr_$dyn_calldata_ptr",
                                        "typeString": "struct IMulticall3.Call3[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 56936,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 56935,
                                                "name": "Call3",
                                                "nameLocations": [
                                                    "672:5:159"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 56908,
                                                "src": "672:5:159"
                                            },
                                            "referencedDeclaration": 56908,
                                            "src": "672:5:159",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Call3_$56908_storage_ptr",
                                                "typeString": "struct IMulticall3.Call3"
                                            }
                                        },
                                        "id": 56937,
                                        "nodeType": "ArrayTypeName",
                                        "src": "672:7:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Call3_$56908_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Call3[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "671:24:159"
                        },
                        "returnParameters": {
                            "id": 56944,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 56943,
                                    "mutability": "mutable",
                                    "name": "returnData",
                                    "nameLocation": "738:10:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 56945,
                                    "src": "722:26:159",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Result_$56922_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct IMulticall3.Result[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 56941,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 56940,
                                                "name": "Result",
                                                "nameLocations": [
                                                    "722:6:159"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 56922,
                                                "src": "722:6:159"
                                            },
                                            "referencedDeclaration": 56922,
                                            "src": "722:6:159",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Result_$56922_storage_ptr",
                                                "typeString": "struct IMulticall3.Result"
                                            }
                                        },
                                        "id": 56942,
                                        "nodeType": "ArrayTypeName",
                                        "src": "722:8:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Result_$56922_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Result[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "721:28:159"
                        },
                        "scope": 57056,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 56956,
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
                            "id": 56950,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 56949,
                                    "mutability": "mutable",
                                    "name": "calls",
                                    "nameLocation": "803:5:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 56956,
                                    "src": "781:27:159",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Call3Value_$56917_calldata_ptr_$dyn_calldata_ptr",
                                        "typeString": "struct IMulticall3.Call3Value[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 56947,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 56946,
                                                "name": "Call3Value",
                                                "nameLocations": [
                                                    "781:10:159"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 56917,
                                                "src": "781:10:159"
                                            },
                                            "referencedDeclaration": 56917,
                                            "src": "781:10:159",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Call3Value_$56917_storage_ptr",
                                                "typeString": "struct IMulticall3.Call3Value"
                                            }
                                        },
                                        "id": 56948,
                                        "nodeType": "ArrayTypeName",
                                        "src": "781:12:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Call3Value_$56917_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Call3Value[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "780:29:159"
                        },
                        "returnParameters": {
                            "id": 56955,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 56954,
                                    "mutability": "mutable",
                                    "name": "returnData",
                                    "nameLocation": "852:10:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 56956,
                                    "src": "836:26:159",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Result_$56922_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct IMulticall3.Result[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 56952,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 56951,
                                                "name": "Result",
                                                "nameLocations": [
                                                    "836:6:159"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 56922,
                                                "src": "836:6:159"
                                            },
                                            "referencedDeclaration": 56922,
                                            "src": "836:6:159",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Result_$56922_storage_ptr",
                                                "typeString": "struct IMulticall3.Result"
                                            }
                                        },
                                        "id": 56953,
                                        "nodeType": "ArrayTypeName",
                                        "src": "836:8:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Result_$56922_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Result[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "835:28:159"
                        },
                        "scope": 57056,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 56971,
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
                            "id": 56961,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 56960,
                                    "mutability": "mutable",
                                    "name": "calls",
                                    "nameLocation": "913:5:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 56971,
                                    "src": "897:21:159",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Call_$56901_calldata_ptr_$dyn_calldata_ptr",
                                        "typeString": "struct IMulticall3.Call[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 56958,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 56957,
                                                "name": "Call",
                                                "nameLocations": [
                                                    "897:4:159"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 56901,
                                                "src": "897:4:159"
                                            },
                                            "referencedDeclaration": 56901,
                                            "src": "897:4:159",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Call_$56901_storage_ptr",
                                                "typeString": "struct IMulticall3.Call"
                                            }
                                        },
                                        "id": 56959,
                                        "nodeType": "ArrayTypeName",
                                        "src": "897:6:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Call_$56901_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Call[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "896:23:159"
                        },
                        "returnParameters": {
                            "id": 56970,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 56963,
                                    "mutability": "mutable",
                                    "name": "blockNumber",
                                    "nameLocation": "978:11:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 56971,
                                    "src": "970:19:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 56962,
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
                                    "id": 56965,
                                    "mutability": "mutable",
                                    "name": "blockHash",
                                    "nameLocation": "999:9:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 56971,
                                    "src": "991:17:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 56964,
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
                                    "id": 56969,
                                    "mutability": "mutable",
                                    "name": "returnData",
                                    "nameLocation": "1026:10:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 56971,
                                    "src": "1010:26:159",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Result_$56922_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct IMulticall3.Result[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 56967,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 56966,
                                                "name": "Result",
                                                "nameLocations": [
                                                    "1010:6:159"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 56922,
                                                "src": "1010:6:159"
                                            },
                                            "referencedDeclaration": 56922,
                                            "src": "1010:6:159",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Result_$56922_storage_ptr",
                                                "typeString": "struct IMulticall3.Result"
                                            }
                                        },
                                        "id": 56968,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1010:8:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Result_$56922_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Result[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "969:68:159"
                        },
                        "scope": 57056,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 56976,
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
                            "id": 56972,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1063:2:159"
                        },
                        "returnParameters": {
                            "id": 56975,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 56974,
                                    "mutability": "mutable",
                                    "name": "basefee",
                                    "nameLocation": "1097:7:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 56976,
                                    "src": "1089:15:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 56973,
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
                        "scope": 57056,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 56983,
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
                            "id": 56979,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 56978,
                                    "mutability": "mutable",
                                    "name": "blockNumber",
                                    "nameLocation": "1142:11:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 56983,
                                    "src": "1134:19:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 56977,
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
                            "id": 56982,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 56981,
                                    "mutability": "mutable",
                                    "name": "blockHash",
                                    "nameLocation": "1186:9:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 56983,
                                    "src": "1178:17:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 56980,
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
                        "scope": 57056,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 56988,
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
                            "id": 56984,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1226:2:159"
                        },
                        "returnParameters": {
                            "id": 56987,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 56986,
                                    "mutability": "mutable",
                                    "name": "blockNumber",
                                    "nameLocation": "1260:11:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 56988,
                                    "src": "1252:19:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 56985,
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
                        "scope": 57056,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 56993,
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
                            "id": 56989,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1298:2:159"
                        },
                        "returnParameters": {
                            "id": 56992,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 56991,
                                    "mutability": "mutable",
                                    "name": "chainid",
                                    "nameLocation": "1332:7:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 56993,
                                    "src": "1324:15:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 56990,
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
                        "scope": 57056,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 56998,
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
                            "id": 56994,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1379:2:159"
                        },
                        "returnParameters": {
                            "id": 56997,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 56996,
                                    "mutability": "mutable",
                                    "name": "coinbase",
                                    "nameLocation": "1413:8:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 56998,
                                    "src": "1405:16:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 56995,
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
                        "scope": 57056,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57003,
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
                            "id": 56999,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1463:2:159"
                        },
                        "returnParameters": {
                            "id": 57002,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57001,
                                    "mutability": "mutable",
                                    "name": "difficulty",
                                    "nameLocation": "1497:10:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57003,
                                    "src": "1489:18:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 57000,
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
                        "scope": 57056,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57008,
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
                            "id": 57004,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1547:2:159"
                        },
                        "returnParameters": {
                            "id": 57007,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57006,
                                    "mutability": "mutable",
                                    "name": "gaslimit",
                                    "nameLocation": "1581:8:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57008,
                                    "src": "1573:16:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 57005,
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
                        "scope": 57056,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57013,
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
                            "id": 57009,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1630:2:159"
                        },
                        "returnParameters": {
                            "id": 57012,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57011,
                                    "mutability": "mutable",
                                    "name": "timestamp",
                                    "nameLocation": "1664:9:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57013,
                                    "src": "1656:17:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 57010,
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
                        "scope": 57056,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57020,
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
                            "id": 57016,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57015,
                                    "mutability": "mutable",
                                    "name": "addr",
                                    "nameLocation": "1712:4:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57020,
                                    "src": "1704:12:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 57014,
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
                            "id": 57019,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57018,
                                    "mutability": "mutable",
                                    "name": "balance",
                                    "nameLocation": "1749:7:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57020,
                                    "src": "1741:15:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 57017,
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
                        "scope": 57056,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57025,
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
                            "id": 57021,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1789:2:159"
                        },
                        "returnParameters": {
                            "id": 57024,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57023,
                                    "mutability": "mutable",
                                    "name": "blockHash",
                                    "nameLocation": "1823:9:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57025,
                                    "src": "1815:17:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 57022,
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
                        "scope": 57056,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57038,
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
                            "id": 57032,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57027,
                                    "mutability": "mutable",
                                    "name": "requireSuccess",
                                    "nameLocation": "1867:14:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57038,
                                    "src": "1862:19:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 57026,
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
                                    "id": 57031,
                                    "mutability": "mutable",
                                    "name": "calls",
                                    "nameLocation": "1899:5:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57038,
                                    "src": "1883:21:159",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Call_$56901_calldata_ptr_$dyn_calldata_ptr",
                                        "typeString": "struct IMulticall3.Call[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 57029,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 57028,
                                                "name": "Call",
                                                "nameLocations": [
                                                    "1883:4:159"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 56901,
                                                "src": "1883:4:159"
                                            },
                                            "referencedDeclaration": 56901,
                                            "src": "1883:4:159",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Call_$56901_storage_ptr",
                                                "typeString": "struct IMulticall3.Call"
                                            }
                                        },
                                        "id": 57030,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1883:6:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Call_$56901_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Call[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1861:44:159"
                        },
                        "returnParameters": {
                            "id": 57037,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57036,
                                    "mutability": "mutable",
                                    "name": "returnData",
                                    "nameLocation": "1972:10:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57038,
                                    "src": "1956:26:159",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Result_$56922_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct IMulticall3.Result[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 57034,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 57033,
                                                "name": "Result",
                                                "nameLocations": [
                                                    "1956:6:159"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 56922,
                                                "src": "1956:6:159"
                                            },
                                            "referencedDeclaration": 56922,
                                            "src": "1956:6:159",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Result_$56922_storage_ptr",
                                                "typeString": "struct IMulticall3.Result"
                                            }
                                        },
                                        "id": 57035,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1956:8:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Result_$56922_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Result[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1955:28:159"
                        },
                        "scope": 57056,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57055,
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
                            "id": 57045,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57040,
                                    "mutability": "mutable",
                                    "name": "requireSuccess",
                                    "nameLocation": "2025:14:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57055,
                                    "src": "2020:19:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 57039,
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
                                    "id": 57044,
                                    "mutability": "mutable",
                                    "name": "calls",
                                    "nameLocation": "2057:5:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57055,
                                    "src": "2041:21:159",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Call_$56901_calldata_ptr_$dyn_calldata_ptr",
                                        "typeString": "struct IMulticall3.Call[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 57042,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 57041,
                                                "name": "Call",
                                                "nameLocations": [
                                                    "2041:4:159"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 56901,
                                                "src": "2041:4:159"
                                            },
                                            "referencedDeclaration": 56901,
                                            "src": "2041:4:159",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Call_$56901_storage_ptr",
                                                "typeString": "struct IMulticall3.Call"
                                            }
                                        },
                                        "id": 57043,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2041:6:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Call_$56901_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Call[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2019:44:159"
                        },
                        "returnParameters": {
                            "id": 57054,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57047,
                                    "mutability": "mutable",
                                    "name": "blockNumber",
                                    "nameLocation": "2122:11:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57055,
                                    "src": "2114:19:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 57046,
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
                                    "id": 57049,
                                    "mutability": "mutable",
                                    "name": "blockHash",
                                    "nameLocation": "2143:9:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57055,
                                    "src": "2135:17:159",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 57048,
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
                                    "id": 57053,
                                    "mutability": "mutable",
                                    "name": "returnData",
                                    "nameLocation": "2170:10:159",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57055,
                                    "src": "2154:26:159",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Result_$56922_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct IMulticall3.Result[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 57051,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 57050,
                                                "name": "Result",
                                                "nameLocations": [
                                                    "2154:6:159"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 56922,
                                                "src": "2154:6:159"
                                            },
                                            "referencedDeclaration": 56922,
                                            "src": "2154:6:159",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Result_$56922_storage_ptr",
                                                "typeString": "struct IMulticall3.Result"
                                            }
                                        },
                                        "id": 57052,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2154:8:159",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Result_$56922_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Result[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2113:68:159"
                        },
                        "scope": 57056,
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
                    57056
                ],
                "name": "IMulticall3",
                "nameLocation": "110:11:159",
                "scope": 57057,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 159
};
