export const IMulticall3 = 
{
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"aggregate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"internalType\":\"bytes[]\",\"name\":\"returnData\",\"type\":\"bytes[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"allowFailure\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call3[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"aggregate3\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"allowFailure\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call3Value[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"aggregate3Value\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"blockAndAggregate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBasefee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"basefee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"name\":\"getBlockHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBlockNumber\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getChainId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"chainid\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockCoinbase\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"coinbase\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockDifficulty\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"difficulty\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockGasLimit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"gaslimit\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockTimestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"timestamp\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"getEthBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getLastBlockHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"requireSuccess\",\"type\":\"bool\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"tryAggregate\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"requireSuccess\",\"type\":\"bool\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"tryBlockAndAggregate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/interfaces/IMulticall3.sol\":\"IMulticall3\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"lib/forge-std/src/interfaces/IMulticall3.sol\":{\"keccak256\":\"0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0\",\"dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
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
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "forge-std/=lib/forge-std/src/",
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/"
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
    "id": 49230,
    "exportedSymbols": {
      "IMulticall3": [
        49229
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:2153:90",
    "nodes": [
      {
        "id": 49068,
        "nodeType": "PragmaDirective",
        "src": "32:31:90",
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
        "id": 49069,
        "nodeType": "PragmaDirective",
        "src": "65:33:90",
        "nodes": [],
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ]
      },
      {
        "id": 49229,
        "nodeType": "ContractDefinition",
        "src": "100:2084:90",
        "nodes": [
          {
            "id": 49074,
            "nodeType": "StructDefinition",
            "src": "128:67:90",
            "nodes": [],
            "canonicalName": "IMulticall3.Call",
            "members": [
              {
                "constant": false,
                "id": 49071,
                "mutability": "mutable",
                "name": "target",
                "nameLocation": "158:6:90",
                "nodeType": "VariableDeclaration",
                "scope": 49074,
                "src": "150:14:90",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 49070,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "150:7:90",
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
                "id": 49073,
                "mutability": "mutable",
                "name": "callData",
                "nameLocation": "180:8:90",
                "nodeType": "VariableDeclaration",
                "scope": 49074,
                "src": "174:14:90",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 49072,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "174:5:90",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Call",
            "nameLocation": "135:4:90",
            "scope": 49229,
            "visibility": "public"
          },
          {
            "id": 49081,
            "nodeType": "StructDefinition",
            "src": "201:95:90",
            "nodes": [],
            "canonicalName": "IMulticall3.Call3",
            "members": [
              {
                "constant": false,
                "id": 49076,
                "mutability": "mutable",
                "name": "target",
                "nameLocation": "232:6:90",
                "nodeType": "VariableDeclaration",
                "scope": 49081,
                "src": "224:14:90",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 49075,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "224:7:90",
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
                "id": 49078,
                "mutability": "mutable",
                "name": "allowFailure",
                "nameLocation": "253:12:90",
                "nodeType": "VariableDeclaration",
                "scope": 49081,
                "src": "248:17:90",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 49077,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "248:4:90",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 49080,
                "mutability": "mutable",
                "name": "callData",
                "nameLocation": "281:8:90",
                "nodeType": "VariableDeclaration",
                "scope": 49081,
                "src": "275:14:90",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 49079,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "275:5:90",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Call3",
            "nameLocation": "208:5:90",
            "scope": 49229,
            "visibility": "public"
          },
          {
            "id": 49090,
            "nodeType": "StructDefinition",
            "src": "302:123:90",
            "nodes": [],
            "canonicalName": "IMulticall3.Call3Value",
            "members": [
              {
                "constant": false,
                "id": 49083,
                "mutability": "mutable",
                "name": "target",
                "nameLocation": "338:6:90",
                "nodeType": "VariableDeclaration",
                "scope": 49090,
                "src": "330:14:90",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 49082,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "330:7:90",
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
                "id": 49085,
                "mutability": "mutable",
                "name": "allowFailure",
                "nameLocation": "359:12:90",
                "nodeType": "VariableDeclaration",
                "scope": 49090,
                "src": "354:17:90",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 49084,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "354:4:90",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 49087,
                "mutability": "mutable",
                "name": "value",
                "nameLocation": "389:5:90",
                "nodeType": "VariableDeclaration",
                "scope": 49090,
                "src": "381:13:90",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 49086,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "381:7:90",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 49089,
                "mutability": "mutable",
                "name": "callData",
                "nameLocation": "410:8:90",
                "nodeType": "VariableDeclaration",
                "scope": 49090,
                "src": "404:14:90",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 49088,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "404:5:90",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Call3Value",
            "nameLocation": "309:10:90",
            "scope": 49229,
            "visibility": "public"
          },
          {
            "id": 49095,
            "nodeType": "StructDefinition",
            "src": "431:69:90",
            "nodes": [],
            "canonicalName": "IMulticall3.Result",
            "members": [
              {
                "constant": false,
                "id": 49092,
                "mutability": "mutable",
                "name": "success",
                "nameLocation": "460:7:90",
                "nodeType": "VariableDeclaration",
                "scope": 49095,
                "src": "455:12:90",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 49091,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "455:4:90",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 49094,
                "mutability": "mutable",
                "name": "returnData",
                "nameLocation": "483:10:90",
                "nodeType": "VariableDeclaration",
                "scope": 49095,
                "src": "477:16:90",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 49093,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "477:5:90",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Result",
            "nameLocation": "438:6:90",
            "scope": 49229,
            "visibility": "public"
          },
          {
            "id": 49107,
            "nodeType": "FunctionDefinition",
            "src": "506:140:90",
            "nodes": [],
            "functionSelector": "252dba42",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "aggregate",
            "nameLocation": "515:9:90",
            "parameters": {
              "id": 49100,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49099,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "541:5:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 49107,
                  "src": "525:21:90",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call_$49074_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 49097,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 49096,
                        "name": "Call",
                        "nameLocations": [
                          "525:4:90"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 49074,
                        "src": "525:4:90"
                      },
                      "referencedDeclaration": 49074,
                      "src": "525:4:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call_$49074_storage_ptr",
                        "typeString": "struct IMulticall3.Call"
                      }
                    },
                    "id": 49098,
                    "nodeType": "ArrayTypeName",
                    "src": "525:6:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call_$49074_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "524:23:90"
            },
            "returnParameters": {
              "id": 49106,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49102,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "606:11:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 49107,
                  "src": "598:19:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49101,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "598:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 49105,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "634:10:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 49107,
                  "src": "619:25:90",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 49103,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "619:5:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 49104,
                    "nodeType": "ArrayTypeName",
                    "src": "619:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "597:48:90"
            },
            "scope": 49229,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 49118,
            "nodeType": "FunctionDefinition",
            "src": "652:98:90",
            "nodes": [],
            "functionSelector": "82ad56cb",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "aggregate3",
            "nameLocation": "661:10:90",
            "parameters": {
              "id": 49112,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49111,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "689:5:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 49118,
                  "src": "672:22:90",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call3_$49081_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call3[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 49109,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 49108,
                        "name": "Call3",
                        "nameLocations": [
                          "672:5:90"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 49081,
                        "src": "672:5:90"
                      },
                      "referencedDeclaration": 49081,
                      "src": "672:5:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call3_$49081_storage_ptr",
                        "typeString": "struct IMulticall3.Call3"
                      }
                    },
                    "id": 49110,
                    "nodeType": "ArrayTypeName",
                    "src": "672:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call3_$49081_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call3[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "671:24:90"
            },
            "returnParameters": {
              "id": 49117,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49116,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "738:10:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 49118,
                  "src": "722:26:90",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$49095_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 49114,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 49113,
                        "name": "Result",
                        "nameLocations": [
                          "722:6:90"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 49095,
                        "src": "722:6:90"
                      },
                      "referencedDeclaration": 49095,
                      "src": "722:6:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$49095_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 49115,
                    "nodeType": "ArrayTypeName",
                    "src": "722:8:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$49095_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "721:28:90"
            },
            "scope": 49229,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 49129,
            "nodeType": "FunctionDefinition",
            "src": "756:108:90",
            "nodes": [],
            "functionSelector": "174dea71",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "aggregate3Value",
            "nameLocation": "765:15:90",
            "parameters": {
              "id": 49123,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49122,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "803:5:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 49129,
                  "src": "781:27:90",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call3Value_$49090_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call3Value[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 49120,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 49119,
                        "name": "Call3Value",
                        "nameLocations": [
                          "781:10:90"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 49090,
                        "src": "781:10:90"
                      },
                      "referencedDeclaration": 49090,
                      "src": "781:10:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call3Value_$49090_storage_ptr",
                        "typeString": "struct IMulticall3.Call3Value"
                      }
                    },
                    "id": 49121,
                    "nodeType": "ArrayTypeName",
                    "src": "781:12:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call3Value_$49090_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call3Value[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "780:29:90"
            },
            "returnParameters": {
              "id": 49128,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49127,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "852:10:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 49129,
                  "src": "836:26:90",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$49095_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 49125,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 49124,
                        "name": "Result",
                        "nameLocations": [
                          "836:6:90"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 49095,
                        "src": "836:6:90"
                      },
                      "referencedDeclaration": 49095,
                      "src": "836:6:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$49095_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 49126,
                    "nodeType": "ArrayTypeName",
                    "src": "836:8:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$49095_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "835:28:90"
            },
            "scope": 49229,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 49144,
            "nodeType": "FunctionDefinition",
            "src": "870:168:90",
            "nodes": [],
            "functionSelector": "c3077fa9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "blockAndAggregate",
            "nameLocation": "879:17:90",
            "parameters": {
              "id": 49134,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49133,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "913:5:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 49144,
                  "src": "897:21:90",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call_$49074_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 49131,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 49130,
                        "name": "Call",
                        "nameLocations": [
                          "897:4:90"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 49074,
                        "src": "897:4:90"
                      },
                      "referencedDeclaration": 49074,
                      "src": "897:4:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call_$49074_storage_ptr",
                        "typeString": "struct IMulticall3.Call"
                      }
                    },
                    "id": 49132,
                    "nodeType": "ArrayTypeName",
                    "src": "897:6:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call_$49074_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "896:23:90"
            },
            "returnParameters": {
              "id": 49143,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49136,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "978:11:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 49144,
                  "src": "970:19:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49135,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "970:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 49138,
                  "mutability": "mutable",
                  "name": "blockHash",
                  "nameLocation": "999:9:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 49144,
                  "src": "991:17:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 49137,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "991:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 49142,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "1026:10:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 49144,
                  "src": "1010:26:90",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$49095_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 49140,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 49139,
                        "name": "Result",
                        "nameLocations": [
                          "1010:6:90"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 49095,
                        "src": "1010:6:90"
                      },
                      "referencedDeclaration": 49095,
                      "src": "1010:6:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$49095_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 49141,
                    "nodeType": "ArrayTypeName",
                    "src": "1010:8:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$49095_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "969:68:90"
            },
            "scope": 49229,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 49149,
            "nodeType": "FunctionDefinition",
            "src": "1044:62:90",
            "nodes": [],
            "functionSelector": "3e64a696",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getBasefee",
            "nameLocation": "1053:10:90",
            "parameters": {
              "id": 49145,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1063:2:90"
            },
            "returnParameters": {
              "id": 49148,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49147,
                  "mutability": "mutable",
                  "name": "basefee",
                  "nameLocation": "1097:7:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 49149,
                  "src": "1089:15:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49146,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1089:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1088:17:90"
            },
            "scope": 49229,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 49156,
            "nodeType": "FunctionDefinition",
            "src": "1112:85:90",
            "nodes": [],
            "functionSelector": "ee82ac5e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getBlockHash",
            "nameLocation": "1121:12:90",
            "parameters": {
              "id": 49152,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49151,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "1142:11:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 49156,
                  "src": "1134:19:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49150,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1134:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1133:21:90"
            },
            "returnParameters": {
              "id": 49155,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49154,
                  "mutability": "mutable",
                  "name": "blockHash",
                  "nameLocation": "1186:9:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 49156,
                  "src": "1178:17:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 49153,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1178:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1177:19:90"
            },
            "scope": 49229,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 49161,
            "nodeType": "FunctionDefinition",
            "src": "1203:70:90",
            "nodes": [],
            "functionSelector": "42cbb15c",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getBlockNumber",
            "nameLocation": "1212:14:90",
            "parameters": {
              "id": 49157,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1226:2:90"
            },
            "returnParameters": {
              "id": 49160,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49159,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "1260:11:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 49161,
                  "src": "1252:19:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49158,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1252:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1251:21:90"
            },
            "scope": 49229,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 49166,
            "nodeType": "FunctionDefinition",
            "src": "1279:62:90",
            "nodes": [],
            "functionSelector": "3408e470",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getChainId",
            "nameLocation": "1288:10:90",
            "parameters": {
              "id": 49162,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1298:2:90"
            },
            "returnParameters": {
              "id": 49165,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49164,
                  "mutability": "mutable",
                  "name": "chainid",
                  "nameLocation": "1332:7:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 49166,
                  "src": "1324:15:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49163,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1324:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1323:17:90"
            },
            "scope": 49229,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 49171,
            "nodeType": "FunctionDefinition",
            "src": "1347:76:90",
            "nodes": [],
            "functionSelector": "a8b0574e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCurrentBlockCoinbase",
            "nameLocation": "1356:23:90",
            "parameters": {
              "id": 49167,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1379:2:90"
            },
            "returnParameters": {
              "id": 49170,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49169,
                  "mutability": "mutable",
                  "name": "coinbase",
                  "nameLocation": "1413:8:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 49171,
                  "src": "1405:16:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49168,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1405:7:90",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1404:18:90"
            },
            "scope": 49229,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 49176,
            "nodeType": "FunctionDefinition",
            "src": "1429:80:90",
            "nodes": [],
            "functionSelector": "72425d9d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCurrentBlockDifficulty",
            "nameLocation": "1438:25:90",
            "parameters": {
              "id": 49172,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1463:2:90"
            },
            "returnParameters": {
              "id": 49175,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49174,
                  "mutability": "mutable",
                  "name": "difficulty",
                  "nameLocation": "1497:10:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 49176,
                  "src": "1489:18:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49173,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1489:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1488:20:90"
            },
            "scope": 49229,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 49181,
            "nodeType": "FunctionDefinition",
            "src": "1515:76:90",
            "nodes": [],
            "functionSelector": "86d516e8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCurrentBlockGasLimit",
            "nameLocation": "1524:23:90",
            "parameters": {
              "id": 49177,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1547:2:90"
            },
            "returnParameters": {
              "id": 49180,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49179,
                  "mutability": "mutable",
                  "name": "gaslimit",
                  "nameLocation": "1581:8:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 49181,
                  "src": "1573:16:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49178,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1573:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1572:18:90"
            },
            "scope": 49229,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 49186,
            "nodeType": "FunctionDefinition",
            "src": "1597:78:90",
            "nodes": [],
            "functionSelector": "0f28c97d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCurrentBlockTimestamp",
            "nameLocation": "1606:24:90",
            "parameters": {
              "id": 49182,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1630:2:90"
            },
            "returnParameters": {
              "id": 49185,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49184,
                  "mutability": "mutable",
                  "name": "timestamp",
                  "nameLocation": "1664:9:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 49186,
                  "src": "1656:17:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49183,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1656:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1655:19:90"
            },
            "scope": 49229,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 49193,
            "nodeType": "FunctionDefinition",
            "src": "1681:77:90",
            "nodes": [],
            "functionSelector": "4d2301cc",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getEthBalance",
            "nameLocation": "1690:13:90",
            "parameters": {
              "id": 49189,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49188,
                  "mutability": "mutable",
                  "name": "addr",
                  "nameLocation": "1712:4:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 49193,
                  "src": "1704:12:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49187,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1704:7:90",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1703:14:90"
            },
            "returnParameters": {
              "id": 49192,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49191,
                  "mutability": "mutable",
                  "name": "balance",
                  "nameLocation": "1749:7:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 49193,
                  "src": "1741:15:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49190,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1741:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1740:17:90"
            },
            "scope": 49229,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 49198,
            "nodeType": "FunctionDefinition",
            "src": "1764:70:90",
            "nodes": [],
            "functionSelector": "27e86d6e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getLastBlockHash",
            "nameLocation": "1773:16:90",
            "parameters": {
              "id": 49194,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1789:2:90"
            },
            "returnParameters": {
              "id": 49197,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49196,
                  "mutability": "mutable",
                  "name": "blockHash",
                  "nameLocation": "1823:9:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 49198,
                  "src": "1815:17:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 49195,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1815:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1814:19:90"
            },
            "scope": 49229,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 49211,
            "nodeType": "FunctionDefinition",
            "src": "1840:144:90",
            "nodes": [],
            "functionSelector": "bce38bd7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "tryAggregate",
            "nameLocation": "1849:12:90",
            "parameters": {
              "id": 49205,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49200,
                  "mutability": "mutable",
                  "name": "requireSuccess",
                  "nameLocation": "1867:14:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 49211,
                  "src": "1862:19:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 49199,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1862:4:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 49204,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "1899:5:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 49211,
                  "src": "1883:21:90",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call_$49074_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 49202,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 49201,
                        "name": "Call",
                        "nameLocations": [
                          "1883:4:90"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 49074,
                        "src": "1883:4:90"
                      },
                      "referencedDeclaration": 49074,
                      "src": "1883:4:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call_$49074_storage_ptr",
                        "typeString": "struct IMulticall3.Call"
                      }
                    },
                    "id": 49203,
                    "nodeType": "ArrayTypeName",
                    "src": "1883:6:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call_$49074_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1861:44:90"
            },
            "returnParameters": {
              "id": 49210,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49209,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "1972:10:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 49211,
                  "src": "1956:26:90",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$49095_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 49207,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 49206,
                        "name": "Result",
                        "nameLocations": [
                          "1956:6:90"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 49095,
                        "src": "1956:6:90"
                      },
                      "referencedDeclaration": 49095,
                      "src": "1956:6:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$49095_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 49208,
                    "nodeType": "ArrayTypeName",
                    "src": "1956:8:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$49095_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1955:28:90"
            },
            "scope": 49229,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 49228,
            "nodeType": "FunctionDefinition",
            "src": "1990:192:90",
            "nodes": [],
            "functionSelector": "399542e9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "tryBlockAndAggregate",
            "nameLocation": "1999:20:90",
            "parameters": {
              "id": 49218,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49213,
                  "mutability": "mutable",
                  "name": "requireSuccess",
                  "nameLocation": "2025:14:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 49228,
                  "src": "2020:19:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 49212,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2020:4:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 49217,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "2057:5:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 49228,
                  "src": "2041:21:90",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call_$49074_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 49215,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 49214,
                        "name": "Call",
                        "nameLocations": [
                          "2041:4:90"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 49074,
                        "src": "2041:4:90"
                      },
                      "referencedDeclaration": 49074,
                      "src": "2041:4:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call_$49074_storage_ptr",
                        "typeString": "struct IMulticall3.Call"
                      }
                    },
                    "id": 49216,
                    "nodeType": "ArrayTypeName",
                    "src": "2041:6:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call_$49074_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2019:44:90"
            },
            "returnParameters": {
              "id": 49227,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49220,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "2122:11:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 49228,
                  "src": "2114:19:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49219,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2114:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 49222,
                  "mutability": "mutable",
                  "name": "blockHash",
                  "nameLocation": "2143:9:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 49228,
                  "src": "2135:17:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 49221,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2135:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 49226,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "2170:10:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 49228,
                  "src": "2154:26:90",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$49095_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 49224,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 49223,
                        "name": "Result",
                        "nameLocations": [
                          "2154:6:90"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 49095,
                        "src": "2154:6:90"
                      },
                      "referencedDeclaration": 49095,
                      "src": "2154:6:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$49095_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 49225,
                    "nodeType": "ArrayTypeName",
                    "src": "2154:8:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$49095_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2113:68:90"
            },
            "scope": 49229,
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
          49229
        ],
        "name": "IMulticall3",
        "nameLocation": "110:11:90",
        "scope": 49230,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 90
} as const;
