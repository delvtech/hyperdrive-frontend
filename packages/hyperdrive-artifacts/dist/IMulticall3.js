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
        "id": 57487,
        "exportedSymbols": {
            "IMulticall3": [
                57486
            ]
        },
        "nodeType": "SourceUnit",
        "src": "32:2153:161",
        "nodes": [
            {
                "id": 57325,
                "nodeType": "PragmaDirective",
                "src": "32:31:161",
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
                "id": 57326,
                "nodeType": "PragmaDirective",
                "src": "65:33:161",
                "nodes": [],
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ]
            },
            {
                "id": 57486,
                "nodeType": "ContractDefinition",
                "src": "100:2084:161",
                "nodes": [
                    {
                        "id": 57331,
                        "nodeType": "StructDefinition",
                        "src": "128:67:161",
                        "nodes": [],
                        "canonicalName": "IMulticall3.Call",
                        "members": [
                            {
                                "constant": false,
                                "id": 57328,
                                "mutability": "mutable",
                                "name": "target",
                                "nameLocation": "158:6:161",
                                "nodeType": "VariableDeclaration",
                                "scope": 57331,
                                "src": "150:14:161",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 57327,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "150:7:161",
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
                                "id": 57330,
                                "mutability": "mutable",
                                "name": "callData",
                                "nameLocation": "180:8:161",
                                "nodeType": "VariableDeclaration",
                                "scope": 57331,
                                "src": "174:14:161",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_storage_ptr",
                                    "typeString": "bytes"
                                },
                                "typeName": {
                                    "id": 57329,
                                    "name": "bytes",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "174:5:161",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_storage_ptr",
                                        "typeString": "bytes"
                                    }
                                },
                                "visibility": "internal"
                            }
                        ],
                        "name": "Call",
                        "nameLocation": "135:4:161",
                        "scope": 57486,
                        "visibility": "public"
                    },
                    {
                        "id": 57338,
                        "nodeType": "StructDefinition",
                        "src": "201:95:161",
                        "nodes": [],
                        "canonicalName": "IMulticall3.Call3",
                        "members": [
                            {
                                "constant": false,
                                "id": 57333,
                                "mutability": "mutable",
                                "name": "target",
                                "nameLocation": "232:6:161",
                                "nodeType": "VariableDeclaration",
                                "scope": 57338,
                                "src": "224:14:161",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 57332,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "224:7:161",
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
                                "id": 57335,
                                "mutability": "mutable",
                                "name": "allowFailure",
                                "nameLocation": "253:12:161",
                                "nodeType": "VariableDeclaration",
                                "scope": 57338,
                                "src": "248:17:161",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                },
                                "typeName": {
                                    "id": 57334,
                                    "name": "bool",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "248:4:161",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 57337,
                                "mutability": "mutable",
                                "name": "callData",
                                "nameLocation": "281:8:161",
                                "nodeType": "VariableDeclaration",
                                "scope": 57338,
                                "src": "275:14:161",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_storage_ptr",
                                    "typeString": "bytes"
                                },
                                "typeName": {
                                    "id": 57336,
                                    "name": "bytes",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "275:5:161",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_storage_ptr",
                                        "typeString": "bytes"
                                    }
                                },
                                "visibility": "internal"
                            }
                        ],
                        "name": "Call3",
                        "nameLocation": "208:5:161",
                        "scope": 57486,
                        "visibility": "public"
                    },
                    {
                        "id": 57347,
                        "nodeType": "StructDefinition",
                        "src": "302:123:161",
                        "nodes": [],
                        "canonicalName": "IMulticall3.Call3Value",
                        "members": [
                            {
                                "constant": false,
                                "id": 57340,
                                "mutability": "mutable",
                                "name": "target",
                                "nameLocation": "338:6:161",
                                "nodeType": "VariableDeclaration",
                                "scope": 57347,
                                "src": "330:14:161",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 57339,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "330:7:161",
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
                                "id": 57342,
                                "mutability": "mutable",
                                "name": "allowFailure",
                                "nameLocation": "359:12:161",
                                "nodeType": "VariableDeclaration",
                                "scope": 57347,
                                "src": "354:17:161",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                },
                                "typeName": {
                                    "id": 57341,
                                    "name": "bool",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "354:4:161",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 57344,
                                "mutability": "mutable",
                                "name": "value",
                                "nameLocation": "389:5:161",
                                "nodeType": "VariableDeclaration",
                                "scope": 57347,
                                "src": "381:13:161",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 57343,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "381:7:161",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 57346,
                                "mutability": "mutable",
                                "name": "callData",
                                "nameLocation": "410:8:161",
                                "nodeType": "VariableDeclaration",
                                "scope": 57347,
                                "src": "404:14:161",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_storage_ptr",
                                    "typeString": "bytes"
                                },
                                "typeName": {
                                    "id": 57345,
                                    "name": "bytes",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "404:5:161",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_storage_ptr",
                                        "typeString": "bytes"
                                    }
                                },
                                "visibility": "internal"
                            }
                        ],
                        "name": "Call3Value",
                        "nameLocation": "309:10:161",
                        "scope": 57486,
                        "visibility": "public"
                    },
                    {
                        "id": 57352,
                        "nodeType": "StructDefinition",
                        "src": "431:69:161",
                        "nodes": [],
                        "canonicalName": "IMulticall3.Result",
                        "members": [
                            {
                                "constant": false,
                                "id": 57349,
                                "mutability": "mutable",
                                "name": "success",
                                "nameLocation": "460:7:161",
                                "nodeType": "VariableDeclaration",
                                "scope": 57352,
                                "src": "455:12:161",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                },
                                "typeName": {
                                    "id": 57348,
                                    "name": "bool",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "455:4:161",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 57351,
                                "mutability": "mutable",
                                "name": "returnData",
                                "nameLocation": "483:10:161",
                                "nodeType": "VariableDeclaration",
                                "scope": 57352,
                                "src": "477:16:161",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_storage_ptr",
                                    "typeString": "bytes"
                                },
                                "typeName": {
                                    "id": 57350,
                                    "name": "bytes",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "477:5:161",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_storage_ptr",
                                        "typeString": "bytes"
                                    }
                                },
                                "visibility": "internal"
                            }
                        ],
                        "name": "Result",
                        "nameLocation": "438:6:161",
                        "scope": 57486,
                        "visibility": "public"
                    },
                    {
                        "id": 57364,
                        "nodeType": "FunctionDefinition",
                        "src": "506:140:161",
                        "nodes": [],
                        "functionSelector": "252dba42",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "aggregate",
                        "nameLocation": "515:9:161",
                        "parameters": {
                            "id": 57357,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57356,
                                    "mutability": "mutable",
                                    "name": "calls",
                                    "nameLocation": "541:5:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57364,
                                    "src": "525:21:161",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Call_$57331_calldata_ptr_$dyn_calldata_ptr",
                                        "typeString": "struct IMulticall3.Call[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 57354,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 57353,
                                                "name": "Call",
                                                "nameLocations": [
                                                    "525:4:161"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 57331,
                                                "src": "525:4:161"
                                            },
                                            "referencedDeclaration": 57331,
                                            "src": "525:4:161",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Call_$57331_storage_ptr",
                                                "typeString": "struct IMulticall3.Call"
                                            }
                                        },
                                        "id": 57355,
                                        "nodeType": "ArrayTypeName",
                                        "src": "525:6:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Call_$57331_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Call[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "524:23:161"
                        },
                        "returnParameters": {
                            "id": 57363,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57359,
                                    "mutability": "mutable",
                                    "name": "blockNumber",
                                    "nameLocation": "606:11:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57364,
                                    "src": "598:19:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 57358,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "598:7:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 57362,
                                    "mutability": "mutable",
                                    "name": "returnData",
                                    "nameLocation": "634:10:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57364,
                                    "src": "619:25:161",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "bytes[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 57360,
                                            "name": "bytes",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "619:5:161",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_storage_ptr",
                                                "typeString": "bytes"
                                            }
                                        },
                                        "id": 57361,
                                        "nodeType": "ArrayTypeName",
                                        "src": "619:7:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                                            "typeString": "bytes[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "597:48:161"
                        },
                        "scope": 57486,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57375,
                        "nodeType": "FunctionDefinition",
                        "src": "652:98:161",
                        "nodes": [],
                        "functionSelector": "82ad56cb",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "aggregate3",
                        "nameLocation": "661:10:161",
                        "parameters": {
                            "id": 57369,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57368,
                                    "mutability": "mutable",
                                    "name": "calls",
                                    "nameLocation": "689:5:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57375,
                                    "src": "672:22:161",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Call3_$57338_calldata_ptr_$dyn_calldata_ptr",
                                        "typeString": "struct IMulticall3.Call3[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 57366,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 57365,
                                                "name": "Call3",
                                                "nameLocations": [
                                                    "672:5:161"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 57338,
                                                "src": "672:5:161"
                                            },
                                            "referencedDeclaration": 57338,
                                            "src": "672:5:161",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Call3_$57338_storage_ptr",
                                                "typeString": "struct IMulticall3.Call3"
                                            }
                                        },
                                        "id": 57367,
                                        "nodeType": "ArrayTypeName",
                                        "src": "672:7:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Call3_$57338_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Call3[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "671:24:161"
                        },
                        "returnParameters": {
                            "id": 57374,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57373,
                                    "mutability": "mutable",
                                    "name": "returnData",
                                    "nameLocation": "738:10:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57375,
                                    "src": "722:26:161",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Result_$57352_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct IMulticall3.Result[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 57371,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 57370,
                                                "name": "Result",
                                                "nameLocations": [
                                                    "722:6:161"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 57352,
                                                "src": "722:6:161"
                                            },
                                            "referencedDeclaration": 57352,
                                            "src": "722:6:161",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Result_$57352_storage_ptr",
                                                "typeString": "struct IMulticall3.Result"
                                            }
                                        },
                                        "id": 57372,
                                        "nodeType": "ArrayTypeName",
                                        "src": "722:8:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Result_$57352_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Result[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "721:28:161"
                        },
                        "scope": 57486,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57386,
                        "nodeType": "FunctionDefinition",
                        "src": "756:108:161",
                        "nodes": [],
                        "functionSelector": "174dea71",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "aggregate3Value",
                        "nameLocation": "765:15:161",
                        "parameters": {
                            "id": 57380,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57379,
                                    "mutability": "mutable",
                                    "name": "calls",
                                    "nameLocation": "803:5:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57386,
                                    "src": "781:27:161",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Call3Value_$57347_calldata_ptr_$dyn_calldata_ptr",
                                        "typeString": "struct IMulticall3.Call3Value[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 57377,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 57376,
                                                "name": "Call3Value",
                                                "nameLocations": [
                                                    "781:10:161"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 57347,
                                                "src": "781:10:161"
                                            },
                                            "referencedDeclaration": 57347,
                                            "src": "781:10:161",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Call3Value_$57347_storage_ptr",
                                                "typeString": "struct IMulticall3.Call3Value"
                                            }
                                        },
                                        "id": 57378,
                                        "nodeType": "ArrayTypeName",
                                        "src": "781:12:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Call3Value_$57347_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Call3Value[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "780:29:161"
                        },
                        "returnParameters": {
                            "id": 57385,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57384,
                                    "mutability": "mutable",
                                    "name": "returnData",
                                    "nameLocation": "852:10:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57386,
                                    "src": "836:26:161",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Result_$57352_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct IMulticall3.Result[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 57382,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 57381,
                                                "name": "Result",
                                                "nameLocations": [
                                                    "836:6:161"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 57352,
                                                "src": "836:6:161"
                                            },
                                            "referencedDeclaration": 57352,
                                            "src": "836:6:161",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Result_$57352_storage_ptr",
                                                "typeString": "struct IMulticall3.Result"
                                            }
                                        },
                                        "id": 57383,
                                        "nodeType": "ArrayTypeName",
                                        "src": "836:8:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Result_$57352_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Result[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "835:28:161"
                        },
                        "scope": 57486,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57401,
                        "nodeType": "FunctionDefinition",
                        "src": "870:168:161",
                        "nodes": [],
                        "functionSelector": "c3077fa9",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "blockAndAggregate",
                        "nameLocation": "879:17:161",
                        "parameters": {
                            "id": 57391,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57390,
                                    "mutability": "mutable",
                                    "name": "calls",
                                    "nameLocation": "913:5:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57401,
                                    "src": "897:21:161",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Call_$57331_calldata_ptr_$dyn_calldata_ptr",
                                        "typeString": "struct IMulticall3.Call[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 57388,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 57387,
                                                "name": "Call",
                                                "nameLocations": [
                                                    "897:4:161"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 57331,
                                                "src": "897:4:161"
                                            },
                                            "referencedDeclaration": 57331,
                                            "src": "897:4:161",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Call_$57331_storage_ptr",
                                                "typeString": "struct IMulticall3.Call"
                                            }
                                        },
                                        "id": 57389,
                                        "nodeType": "ArrayTypeName",
                                        "src": "897:6:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Call_$57331_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Call[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "896:23:161"
                        },
                        "returnParameters": {
                            "id": 57400,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57393,
                                    "mutability": "mutable",
                                    "name": "blockNumber",
                                    "nameLocation": "978:11:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57401,
                                    "src": "970:19:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 57392,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "970:7:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 57395,
                                    "mutability": "mutable",
                                    "name": "blockHash",
                                    "nameLocation": "999:9:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57401,
                                    "src": "991:17:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 57394,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "991:7:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 57399,
                                    "mutability": "mutable",
                                    "name": "returnData",
                                    "nameLocation": "1026:10:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57401,
                                    "src": "1010:26:161",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Result_$57352_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct IMulticall3.Result[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 57397,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 57396,
                                                "name": "Result",
                                                "nameLocations": [
                                                    "1010:6:161"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 57352,
                                                "src": "1010:6:161"
                                            },
                                            "referencedDeclaration": 57352,
                                            "src": "1010:6:161",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Result_$57352_storage_ptr",
                                                "typeString": "struct IMulticall3.Result"
                                            }
                                        },
                                        "id": 57398,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1010:8:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Result_$57352_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Result[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "969:68:161"
                        },
                        "scope": 57486,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57406,
                        "nodeType": "FunctionDefinition",
                        "src": "1044:62:161",
                        "nodes": [],
                        "functionSelector": "3e64a696",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBasefee",
                        "nameLocation": "1053:10:161",
                        "parameters": {
                            "id": 57402,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1063:2:161"
                        },
                        "returnParameters": {
                            "id": 57405,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57404,
                                    "mutability": "mutable",
                                    "name": "basefee",
                                    "nameLocation": "1097:7:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57406,
                                    "src": "1089:15:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 57403,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1089:7:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1088:17:161"
                        },
                        "scope": 57486,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57413,
                        "nodeType": "FunctionDefinition",
                        "src": "1112:85:161",
                        "nodes": [],
                        "functionSelector": "ee82ac5e",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBlockHash",
                        "nameLocation": "1121:12:161",
                        "parameters": {
                            "id": 57409,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57408,
                                    "mutability": "mutable",
                                    "name": "blockNumber",
                                    "nameLocation": "1142:11:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57413,
                                    "src": "1134:19:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 57407,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1134:7:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1133:21:161"
                        },
                        "returnParameters": {
                            "id": 57412,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57411,
                                    "mutability": "mutable",
                                    "name": "blockHash",
                                    "nameLocation": "1186:9:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57413,
                                    "src": "1178:17:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 57410,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1178:7:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1177:19:161"
                        },
                        "scope": 57486,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57418,
                        "nodeType": "FunctionDefinition",
                        "src": "1203:70:161",
                        "nodes": [],
                        "functionSelector": "42cbb15c",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBlockNumber",
                        "nameLocation": "1212:14:161",
                        "parameters": {
                            "id": 57414,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1226:2:161"
                        },
                        "returnParameters": {
                            "id": 57417,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57416,
                                    "mutability": "mutable",
                                    "name": "blockNumber",
                                    "nameLocation": "1260:11:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57418,
                                    "src": "1252:19:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 57415,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1252:7:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1251:21:161"
                        },
                        "scope": 57486,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57423,
                        "nodeType": "FunctionDefinition",
                        "src": "1279:62:161",
                        "nodes": [],
                        "functionSelector": "3408e470",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getChainId",
                        "nameLocation": "1288:10:161",
                        "parameters": {
                            "id": 57419,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1298:2:161"
                        },
                        "returnParameters": {
                            "id": 57422,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57421,
                                    "mutability": "mutable",
                                    "name": "chainid",
                                    "nameLocation": "1332:7:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57423,
                                    "src": "1324:15:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 57420,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1324:7:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1323:17:161"
                        },
                        "scope": 57486,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57428,
                        "nodeType": "FunctionDefinition",
                        "src": "1347:76:161",
                        "nodes": [],
                        "functionSelector": "a8b0574e",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCurrentBlockCoinbase",
                        "nameLocation": "1356:23:161",
                        "parameters": {
                            "id": 57424,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1379:2:161"
                        },
                        "returnParameters": {
                            "id": 57427,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57426,
                                    "mutability": "mutable",
                                    "name": "coinbase",
                                    "nameLocation": "1413:8:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57428,
                                    "src": "1405:16:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 57425,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1405:7:161",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1404:18:161"
                        },
                        "scope": 57486,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57433,
                        "nodeType": "FunctionDefinition",
                        "src": "1429:80:161",
                        "nodes": [],
                        "functionSelector": "72425d9d",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCurrentBlockDifficulty",
                        "nameLocation": "1438:25:161",
                        "parameters": {
                            "id": 57429,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1463:2:161"
                        },
                        "returnParameters": {
                            "id": 57432,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57431,
                                    "mutability": "mutable",
                                    "name": "difficulty",
                                    "nameLocation": "1497:10:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57433,
                                    "src": "1489:18:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 57430,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1489:7:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1488:20:161"
                        },
                        "scope": 57486,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57438,
                        "nodeType": "FunctionDefinition",
                        "src": "1515:76:161",
                        "nodes": [],
                        "functionSelector": "86d516e8",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCurrentBlockGasLimit",
                        "nameLocation": "1524:23:161",
                        "parameters": {
                            "id": 57434,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1547:2:161"
                        },
                        "returnParameters": {
                            "id": 57437,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57436,
                                    "mutability": "mutable",
                                    "name": "gaslimit",
                                    "nameLocation": "1581:8:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57438,
                                    "src": "1573:16:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 57435,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1573:7:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1572:18:161"
                        },
                        "scope": 57486,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57443,
                        "nodeType": "FunctionDefinition",
                        "src": "1597:78:161",
                        "nodes": [],
                        "functionSelector": "0f28c97d",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCurrentBlockTimestamp",
                        "nameLocation": "1606:24:161",
                        "parameters": {
                            "id": 57439,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1630:2:161"
                        },
                        "returnParameters": {
                            "id": 57442,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57441,
                                    "mutability": "mutable",
                                    "name": "timestamp",
                                    "nameLocation": "1664:9:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57443,
                                    "src": "1656:17:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 57440,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1656:7:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1655:19:161"
                        },
                        "scope": 57486,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57450,
                        "nodeType": "FunctionDefinition",
                        "src": "1681:77:161",
                        "nodes": [],
                        "functionSelector": "4d2301cc",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getEthBalance",
                        "nameLocation": "1690:13:161",
                        "parameters": {
                            "id": 57446,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57445,
                                    "mutability": "mutable",
                                    "name": "addr",
                                    "nameLocation": "1712:4:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57450,
                                    "src": "1704:12:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 57444,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1704:7:161",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1703:14:161"
                        },
                        "returnParameters": {
                            "id": 57449,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57448,
                                    "mutability": "mutable",
                                    "name": "balance",
                                    "nameLocation": "1749:7:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57450,
                                    "src": "1741:15:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 57447,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1741:7:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1740:17:161"
                        },
                        "scope": 57486,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57455,
                        "nodeType": "FunctionDefinition",
                        "src": "1764:70:161",
                        "nodes": [],
                        "functionSelector": "27e86d6e",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getLastBlockHash",
                        "nameLocation": "1773:16:161",
                        "parameters": {
                            "id": 57451,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1789:2:161"
                        },
                        "returnParameters": {
                            "id": 57454,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57453,
                                    "mutability": "mutable",
                                    "name": "blockHash",
                                    "nameLocation": "1823:9:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57455,
                                    "src": "1815:17:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 57452,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1815:7:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1814:19:161"
                        },
                        "scope": 57486,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57468,
                        "nodeType": "FunctionDefinition",
                        "src": "1840:144:161",
                        "nodes": [],
                        "functionSelector": "bce38bd7",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "tryAggregate",
                        "nameLocation": "1849:12:161",
                        "parameters": {
                            "id": 57462,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57457,
                                    "mutability": "mutable",
                                    "name": "requireSuccess",
                                    "nameLocation": "1867:14:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57468,
                                    "src": "1862:19:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 57456,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1862:4:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 57461,
                                    "mutability": "mutable",
                                    "name": "calls",
                                    "nameLocation": "1899:5:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57468,
                                    "src": "1883:21:161",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Call_$57331_calldata_ptr_$dyn_calldata_ptr",
                                        "typeString": "struct IMulticall3.Call[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 57459,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 57458,
                                                "name": "Call",
                                                "nameLocations": [
                                                    "1883:4:161"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 57331,
                                                "src": "1883:4:161"
                                            },
                                            "referencedDeclaration": 57331,
                                            "src": "1883:4:161",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Call_$57331_storage_ptr",
                                                "typeString": "struct IMulticall3.Call"
                                            }
                                        },
                                        "id": 57460,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1883:6:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Call_$57331_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Call[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1861:44:161"
                        },
                        "returnParameters": {
                            "id": 57467,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57466,
                                    "mutability": "mutable",
                                    "name": "returnData",
                                    "nameLocation": "1972:10:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57468,
                                    "src": "1956:26:161",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Result_$57352_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct IMulticall3.Result[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 57464,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 57463,
                                                "name": "Result",
                                                "nameLocations": [
                                                    "1956:6:161"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 57352,
                                                "src": "1956:6:161"
                                            },
                                            "referencedDeclaration": 57352,
                                            "src": "1956:6:161",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Result_$57352_storage_ptr",
                                                "typeString": "struct IMulticall3.Result"
                                            }
                                        },
                                        "id": 57465,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1956:8:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Result_$57352_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Result[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1955:28:161"
                        },
                        "scope": 57486,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 57485,
                        "nodeType": "FunctionDefinition",
                        "src": "1990:192:161",
                        "nodes": [],
                        "functionSelector": "399542e9",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "tryBlockAndAggregate",
                        "nameLocation": "1999:20:161",
                        "parameters": {
                            "id": 57475,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57470,
                                    "mutability": "mutable",
                                    "name": "requireSuccess",
                                    "nameLocation": "2025:14:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57485,
                                    "src": "2020:19:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 57469,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2020:4:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 57474,
                                    "mutability": "mutable",
                                    "name": "calls",
                                    "nameLocation": "2057:5:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57485,
                                    "src": "2041:21:161",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Call_$57331_calldata_ptr_$dyn_calldata_ptr",
                                        "typeString": "struct IMulticall3.Call[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 57472,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 57471,
                                                "name": "Call",
                                                "nameLocations": [
                                                    "2041:4:161"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 57331,
                                                "src": "2041:4:161"
                                            },
                                            "referencedDeclaration": 57331,
                                            "src": "2041:4:161",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Call_$57331_storage_ptr",
                                                "typeString": "struct IMulticall3.Call"
                                            }
                                        },
                                        "id": 57473,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2041:6:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Call_$57331_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Call[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2019:44:161"
                        },
                        "returnParameters": {
                            "id": 57484,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 57477,
                                    "mutability": "mutable",
                                    "name": "blockNumber",
                                    "nameLocation": "2122:11:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57485,
                                    "src": "2114:19:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 57476,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2114:7:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 57479,
                                    "mutability": "mutable",
                                    "name": "blockHash",
                                    "nameLocation": "2143:9:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57485,
                                    "src": "2135:17:161",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 57478,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2135:7:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 57483,
                                    "mutability": "mutable",
                                    "name": "returnData",
                                    "nameLocation": "2170:10:161",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 57485,
                                    "src": "2154:26:161",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Result_$57352_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct IMulticall3.Result[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 57481,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 57480,
                                                "name": "Result",
                                                "nameLocations": [
                                                    "2154:6:161"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 57352,
                                                "src": "2154:6:161"
                                            },
                                            "referencedDeclaration": 57352,
                                            "src": "2154:6:161",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Result_$57352_storage_ptr",
                                                "typeString": "struct IMulticall3.Result"
                                            }
                                        },
                                        "id": 57482,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2154:8:161",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Result_$57352_storage_$dyn_storage_ptr",
                                            "typeString": "struct IMulticall3.Result[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2113:68:161"
                        },
                        "scope": 57486,
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
                    57486
                ],
                "name": "IMulticall3",
                "nameLocation": "110:11:161",
                "scope": 57487,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 161
};
