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
    "id": 45880,
    "exportedSymbols": {
      "IMulticall3": [
        45879
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:2153:79",
    "nodes": [
      {
        "id": 45718,
        "nodeType": "PragmaDirective",
        "src": "32:31:79",
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
        "id": 45719,
        "nodeType": "PragmaDirective",
        "src": "65:33:79",
        "nodes": [],
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ]
      },
      {
        "id": 45879,
        "nodeType": "ContractDefinition",
        "src": "100:2084:79",
        "nodes": [
          {
            "id": 45724,
            "nodeType": "StructDefinition",
            "src": "128:67:79",
            "nodes": [],
            "canonicalName": "IMulticall3.Call",
            "members": [
              {
                "constant": false,
                "id": 45721,
                "mutability": "mutable",
                "name": "target",
                "nameLocation": "158:6:79",
                "nodeType": "VariableDeclaration",
                "scope": 45724,
                "src": "150:14:79",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 45720,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "150:7:79",
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
                "id": 45723,
                "mutability": "mutable",
                "name": "callData",
                "nameLocation": "180:8:79",
                "nodeType": "VariableDeclaration",
                "scope": 45724,
                "src": "174:14:79",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 45722,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "174:5:79",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Call",
            "nameLocation": "135:4:79",
            "scope": 45879,
            "visibility": "public"
          },
          {
            "id": 45731,
            "nodeType": "StructDefinition",
            "src": "201:95:79",
            "nodes": [],
            "canonicalName": "IMulticall3.Call3",
            "members": [
              {
                "constant": false,
                "id": 45726,
                "mutability": "mutable",
                "name": "target",
                "nameLocation": "232:6:79",
                "nodeType": "VariableDeclaration",
                "scope": 45731,
                "src": "224:14:79",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 45725,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "224:7:79",
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
                "id": 45728,
                "mutability": "mutable",
                "name": "allowFailure",
                "nameLocation": "253:12:79",
                "nodeType": "VariableDeclaration",
                "scope": 45731,
                "src": "248:17:79",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 45727,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "248:4:79",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 45730,
                "mutability": "mutable",
                "name": "callData",
                "nameLocation": "281:8:79",
                "nodeType": "VariableDeclaration",
                "scope": 45731,
                "src": "275:14:79",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 45729,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "275:5:79",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Call3",
            "nameLocation": "208:5:79",
            "scope": 45879,
            "visibility": "public"
          },
          {
            "id": 45740,
            "nodeType": "StructDefinition",
            "src": "302:123:79",
            "nodes": [],
            "canonicalName": "IMulticall3.Call3Value",
            "members": [
              {
                "constant": false,
                "id": 45733,
                "mutability": "mutable",
                "name": "target",
                "nameLocation": "338:6:79",
                "nodeType": "VariableDeclaration",
                "scope": 45740,
                "src": "330:14:79",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 45732,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "330:7:79",
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
                "id": 45735,
                "mutability": "mutable",
                "name": "allowFailure",
                "nameLocation": "359:12:79",
                "nodeType": "VariableDeclaration",
                "scope": 45740,
                "src": "354:17:79",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 45734,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "354:4:79",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 45737,
                "mutability": "mutable",
                "name": "value",
                "nameLocation": "389:5:79",
                "nodeType": "VariableDeclaration",
                "scope": 45740,
                "src": "381:13:79",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 45736,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "381:7:79",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 45739,
                "mutability": "mutable",
                "name": "callData",
                "nameLocation": "410:8:79",
                "nodeType": "VariableDeclaration",
                "scope": 45740,
                "src": "404:14:79",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 45738,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "404:5:79",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Call3Value",
            "nameLocation": "309:10:79",
            "scope": 45879,
            "visibility": "public"
          },
          {
            "id": 45745,
            "nodeType": "StructDefinition",
            "src": "431:69:79",
            "nodes": [],
            "canonicalName": "IMulticall3.Result",
            "members": [
              {
                "constant": false,
                "id": 45742,
                "mutability": "mutable",
                "name": "success",
                "nameLocation": "460:7:79",
                "nodeType": "VariableDeclaration",
                "scope": 45745,
                "src": "455:12:79",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 45741,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "455:4:79",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 45744,
                "mutability": "mutable",
                "name": "returnData",
                "nameLocation": "483:10:79",
                "nodeType": "VariableDeclaration",
                "scope": 45745,
                "src": "477:16:79",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 45743,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "477:5:79",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Result",
            "nameLocation": "438:6:79",
            "scope": 45879,
            "visibility": "public"
          },
          {
            "id": 45757,
            "nodeType": "FunctionDefinition",
            "src": "506:140:79",
            "nodes": [],
            "functionSelector": "252dba42",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "aggregate",
            "nameLocation": "515:9:79",
            "parameters": {
              "id": 45750,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45749,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "541:5:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 45757,
                  "src": "525:21:79",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call_$45724_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 45747,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 45746,
                        "name": "Call",
                        "nameLocations": [
                          "525:4:79"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 45724,
                        "src": "525:4:79"
                      },
                      "referencedDeclaration": 45724,
                      "src": "525:4:79",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call_$45724_storage_ptr",
                        "typeString": "struct IMulticall3.Call"
                      }
                    },
                    "id": 45748,
                    "nodeType": "ArrayTypeName",
                    "src": "525:6:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call_$45724_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "524:23:79"
            },
            "returnParameters": {
              "id": 45756,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45752,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "606:11:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 45757,
                  "src": "598:19:79",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45751,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "598:7:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 45755,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "634:10:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 45757,
                  "src": "619:25:79",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 45753,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "619:5:79",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 45754,
                    "nodeType": "ArrayTypeName",
                    "src": "619:7:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "597:48:79"
            },
            "scope": 45879,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 45768,
            "nodeType": "FunctionDefinition",
            "src": "652:98:79",
            "nodes": [],
            "functionSelector": "82ad56cb",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "aggregate3",
            "nameLocation": "661:10:79",
            "parameters": {
              "id": 45762,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45761,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "689:5:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 45768,
                  "src": "672:22:79",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call3_$45731_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call3[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 45759,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 45758,
                        "name": "Call3",
                        "nameLocations": [
                          "672:5:79"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 45731,
                        "src": "672:5:79"
                      },
                      "referencedDeclaration": 45731,
                      "src": "672:5:79",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call3_$45731_storage_ptr",
                        "typeString": "struct IMulticall3.Call3"
                      }
                    },
                    "id": 45760,
                    "nodeType": "ArrayTypeName",
                    "src": "672:7:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call3_$45731_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call3[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "671:24:79"
            },
            "returnParameters": {
              "id": 45767,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45766,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "738:10:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 45768,
                  "src": "722:26:79",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$45745_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 45764,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 45763,
                        "name": "Result",
                        "nameLocations": [
                          "722:6:79"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 45745,
                        "src": "722:6:79"
                      },
                      "referencedDeclaration": 45745,
                      "src": "722:6:79",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$45745_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 45765,
                    "nodeType": "ArrayTypeName",
                    "src": "722:8:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$45745_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "721:28:79"
            },
            "scope": 45879,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 45779,
            "nodeType": "FunctionDefinition",
            "src": "756:108:79",
            "nodes": [],
            "functionSelector": "174dea71",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "aggregate3Value",
            "nameLocation": "765:15:79",
            "parameters": {
              "id": 45773,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45772,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "803:5:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 45779,
                  "src": "781:27:79",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call3Value_$45740_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call3Value[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 45770,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 45769,
                        "name": "Call3Value",
                        "nameLocations": [
                          "781:10:79"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 45740,
                        "src": "781:10:79"
                      },
                      "referencedDeclaration": 45740,
                      "src": "781:10:79",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call3Value_$45740_storage_ptr",
                        "typeString": "struct IMulticall3.Call3Value"
                      }
                    },
                    "id": 45771,
                    "nodeType": "ArrayTypeName",
                    "src": "781:12:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call3Value_$45740_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call3Value[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "780:29:79"
            },
            "returnParameters": {
              "id": 45778,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45777,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "852:10:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 45779,
                  "src": "836:26:79",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$45745_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 45775,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 45774,
                        "name": "Result",
                        "nameLocations": [
                          "836:6:79"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 45745,
                        "src": "836:6:79"
                      },
                      "referencedDeclaration": 45745,
                      "src": "836:6:79",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$45745_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 45776,
                    "nodeType": "ArrayTypeName",
                    "src": "836:8:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$45745_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "835:28:79"
            },
            "scope": 45879,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 45794,
            "nodeType": "FunctionDefinition",
            "src": "870:168:79",
            "nodes": [],
            "functionSelector": "c3077fa9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "blockAndAggregate",
            "nameLocation": "879:17:79",
            "parameters": {
              "id": 45784,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45783,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "913:5:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 45794,
                  "src": "897:21:79",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call_$45724_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 45781,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 45780,
                        "name": "Call",
                        "nameLocations": [
                          "897:4:79"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 45724,
                        "src": "897:4:79"
                      },
                      "referencedDeclaration": 45724,
                      "src": "897:4:79",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call_$45724_storage_ptr",
                        "typeString": "struct IMulticall3.Call"
                      }
                    },
                    "id": 45782,
                    "nodeType": "ArrayTypeName",
                    "src": "897:6:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call_$45724_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "896:23:79"
            },
            "returnParameters": {
              "id": 45793,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45786,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "978:11:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 45794,
                  "src": "970:19:79",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45785,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "970:7:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 45788,
                  "mutability": "mutable",
                  "name": "blockHash",
                  "nameLocation": "999:9:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 45794,
                  "src": "991:17:79",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45787,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "991:7:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 45792,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "1026:10:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 45794,
                  "src": "1010:26:79",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$45745_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 45790,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 45789,
                        "name": "Result",
                        "nameLocations": [
                          "1010:6:79"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 45745,
                        "src": "1010:6:79"
                      },
                      "referencedDeclaration": 45745,
                      "src": "1010:6:79",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$45745_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 45791,
                    "nodeType": "ArrayTypeName",
                    "src": "1010:8:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$45745_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "969:68:79"
            },
            "scope": 45879,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 45799,
            "nodeType": "FunctionDefinition",
            "src": "1044:62:79",
            "nodes": [],
            "functionSelector": "3e64a696",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getBasefee",
            "nameLocation": "1053:10:79",
            "parameters": {
              "id": 45795,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1063:2:79"
            },
            "returnParameters": {
              "id": 45798,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45797,
                  "mutability": "mutable",
                  "name": "basefee",
                  "nameLocation": "1097:7:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 45799,
                  "src": "1089:15:79",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45796,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1089:7:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1088:17:79"
            },
            "scope": 45879,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 45806,
            "nodeType": "FunctionDefinition",
            "src": "1112:85:79",
            "nodes": [],
            "functionSelector": "ee82ac5e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getBlockHash",
            "nameLocation": "1121:12:79",
            "parameters": {
              "id": 45802,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45801,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "1142:11:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 45806,
                  "src": "1134:19:79",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45800,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1134:7:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1133:21:79"
            },
            "returnParameters": {
              "id": 45805,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45804,
                  "mutability": "mutable",
                  "name": "blockHash",
                  "nameLocation": "1186:9:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 45806,
                  "src": "1178:17:79",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45803,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1178:7:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1177:19:79"
            },
            "scope": 45879,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 45811,
            "nodeType": "FunctionDefinition",
            "src": "1203:70:79",
            "nodes": [],
            "functionSelector": "42cbb15c",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getBlockNumber",
            "nameLocation": "1212:14:79",
            "parameters": {
              "id": 45807,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1226:2:79"
            },
            "returnParameters": {
              "id": 45810,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45809,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "1260:11:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 45811,
                  "src": "1252:19:79",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45808,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1252:7:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1251:21:79"
            },
            "scope": 45879,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 45816,
            "nodeType": "FunctionDefinition",
            "src": "1279:62:79",
            "nodes": [],
            "functionSelector": "3408e470",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getChainId",
            "nameLocation": "1288:10:79",
            "parameters": {
              "id": 45812,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1298:2:79"
            },
            "returnParameters": {
              "id": 45815,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45814,
                  "mutability": "mutable",
                  "name": "chainid",
                  "nameLocation": "1332:7:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 45816,
                  "src": "1324:15:79",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45813,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1324:7:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1323:17:79"
            },
            "scope": 45879,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 45821,
            "nodeType": "FunctionDefinition",
            "src": "1347:76:79",
            "nodes": [],
            "functionSelector": "a8b0574e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCurrentBlockCoinbase",
            "nameLocation": "1356:23:79",
            "parameters": {
              "id": 45817,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1379:2:79"
            },
            "returnParameters": {
              "id": 45820,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45819,
                  "mutability": "mutable",
                  "name": "coinbase",
                  "nameLocation": "1413:8:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 45821,
                  "src": "1405:16:79",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 45818,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1405:7:79",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1404:18:79"
            },
            "scope": 45879,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 45826,
            "nodeType": "FunctionDefinition",
            "src": "1429:80:79",
            "nodes": [],
            "functionSelector": "72425d9d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCurrentBlockDifficulty",
            "nameLocation": "1438:25:79",
            "parameters": {
              "id": 45822,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1463:2:79"
            },
            "returnParameters": {
              "id": 45825,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45824,
                  "mutability": "mutable",
                  "name": "difficulty",
                  "nameLocation": "1497:10:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 45826,
                  "src": "1489:18:79",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45823,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1489:7:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1488:20:79"
            },
            "scope": 45879,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 45831,
            "nodeType": "FunctionDefinition",
            "src": "1515:76:79",
            "nodes": [],
            "functionSelector": "86d516e8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCurrentBlockGasLimit",
            "nameLocation": "1524:23:79",
            "parameters": {
              "id": 45827,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1547:2:79"
            },
            "returnParameters": {
              "id": 45830,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45829,
                  "mutability": "mutable",
                  "name": "gaslimit",
                  "nameLocation": "1581:8:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 45831,
                  "src": "1573:16:79",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45828,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1573:7:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1572:18:79"
            },
            "scope": 45879,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 45836,
            "nodeType": "FunctionDefinition",
            "src": "1597:78:79",
            "nodes": [],
            "functionSelector": "0f28c97d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCurrentBlockTimestamp",
            "nameLocation": "1606:24:79",
            "parameters": {
              "id": 45832,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1630:2:79"
            },
            "returnParameters": {
              "id": 45835,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45834,
                  "mutability": "mutable",
                  "name": "timestamp",
                  "nameLocation": "1664:9:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 45836,
                  "src": "1656:17:79",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45833,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1656:7:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1655:19:79"
            },
            "scope": 45879,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 45843,
            "nodeType": "FunctionDefinition",
            "src": "1681:77:79",
            "nodes": [],
            "functionSelector": "4d2301cc",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getEthBalance",
            "nameLocation": "1690:13:79",
            "parameters": {
              "id": 45839,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45838,
                  "mutability": "mutable",
                  "name": "addr",
                  "nameLocation": "1712:4:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 45843,
                  "src": "1704:12:79",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 45837,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1704:7:79",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1703:14:79"
            },
            "returnParameters": {
              "id": 45842,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45841,
                  "mutability": "mutable",
                  "name": "balance",
                  "nameLocation": "1749:7:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 45843,
                  "src": "1741:15:79",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45840,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1741:7:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1740:17:79"
            },
            "scope": 45879,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 45848,
            "nodeType": "FunctionDefinition",
            "src": "1764:70:79",
            "nodes": [],
            "functionSelector": "27e86d6e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getLastBlockHash",
            "nameLocation": "1773:16:79",
            "parameters": {
              "id": 45844,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1789:2:79"
            },
            "returnParameters": {
              "id": 45847,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45846,
                  "mutability": "mutable",
                  "name": "blockHash",
                  "nameLocation": "1823:9:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 45848,
                  "src": "1815:17:79",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45845,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1815:7:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1814:19:79"
            },
            "scope": 45879,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 45861,
            "nodeType": "FunctionDefinition",
            "src": "1840:144:79",
            "nodes": [],
            "functionSelector": "bce38bd7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "tryAggregate",
            "nameLocation": "1849:12:79",
            "parameters": {
              "id": 45855,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45850,
                  "mutability": "mutable",
                  "name": "requireSuccess",
                  "nameLocation": "1867:14:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 45861,
                  "src": "1862:19:79",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 45849,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1862:4:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 45854,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "1899:5:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 45861,
                  "src": "1883:21:79",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call_$45724_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 45852,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 45851,
                        "name": "Call",
                        "nameLocations": [
                          "1883:4:79"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 45724,
                        "src": "1883:4:79"
                      },
                      "referencedDeclaration": 45724,
                      "src": "1883:4:79",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call_$45724_storage_ptr",
                        "typeString": "struct IMulticall3.Call"
                      }
                    },
                    "id": 45853,
                    "nodeType": "ArrayTypeName",
                    "src": "1883:6:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call_$45724_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1861:44:79"
            },
            "returnParameters": {
              "id": 45860,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45859,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "1972:10:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 45861,
                  "src": "1956:26:79",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$45745_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 45857,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 45856,
                        "name": "Result",
                        "nameLocations": [
                          "1956:6:79"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 45745,
                        "src": "1956:6:79"
                      },
                      "referencedDeclaration": 45745,
                      "src": "1956:6:79",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$45745_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 45858,
                    "nodeType": "ArrayTypeName",
                    "src": "1956:8:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$45745_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1955:28:79"
            },
            "scope": 45879,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 45878,
            "nodeType": "FunctionDefinition",
            "src": "1990:192:79",
            "nodes": [],
            "functionSelector": "399542e9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "tryBlockAndAggregate",
            "nameLocation": "1999:20:79",
            "parameters": {
              "id": 45868,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45863,
                  "mutability": "mutable",
                  "name": "requireSuccess",
                  "nameLocation": "2025:14:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 45878,
                  "src": "2020:19:79",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 45862,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2020:4:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 45867,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "2057:5:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 45878,
                  "src": "2041:21:79",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call_$45724_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 45865,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 45864,
                        "name": "Call",
                        "nameLocations": [
                          "2041:4:79"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 45724,
                        "src": "2041:4:79"
                      },
                      "referencedDeclaration": 45724,
                      "src": "2041:4:79",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call_$45724_storage_ptr",
                        "typeString": "struct IMulticall3.Call"
                      }
                    },
                    "id": 45866,
                    "nodeType": "ArrayTypeName",
                    "src": "2041:6:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call_$45724_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2019:44:79"
            },
            "returnParameters": {
              "id": 45877,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45870,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "2122:11:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 45878,
                  "src": "2114:19:79",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45869,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2114:7:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 45872,
                  "mutability": "mutable",
                  "name": "blockHash",
                  "nameLocation": "2143:9:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 45878,
                  "src": "2135:17:79",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45871,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2135:7:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 45876,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "2170:10:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 45878,
                  "src": "2154:26:79",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$45745_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 45874,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 45873,
                        "name": "Result",
                        "nameLocations": [
                          "2154:6:79"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 45745,
                        "src": "2154:6:79"
                      },
                      "referencedDeclaration": 45745,
                      "src": "2154:6:79",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$45745_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 45875,
                    "nodeType": "ArrayTypeName",
                    "src": "2154:8:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$45745_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2113:68:79"
            },
            "scope": 45879,
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
          45879
        ],
        "name": "IMulticall3",
        "nameLocation": "110:11:79",
        "scope": 45880,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 79
} as const;
