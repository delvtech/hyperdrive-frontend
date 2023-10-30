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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"aggregate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"internalType\":\"bytes[]\",\"name\":\"returnData\",\"type\":\"bytes[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"allowFailure\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call3[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"aggregate3\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"allowFailure\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call3Value[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"aggregate3Value\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"blockAndAggregate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBasefee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"basefee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"name\":\"getBlockHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBlockNumber\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getChainId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"chainid\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockCoinbase\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"coinbase\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockDifficulty\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"difficulty\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockGasLimit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"gaslimit\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockTimestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"timestamp\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"getEthBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getLastBlockHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"requireSuccess\",\"type\":\"bool\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"tryAggregate\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"requireSuccess\",\"type\":\"bool\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"tryBlockAndAggregate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/interfaces/IMulticall3.sol\":\"IMulticall3\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"lib/forge-std/src/interfaces/IMulticall3.sol\":{\"keccak256\":\"0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0\",\"dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2\"]}},\"version\":1}",
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
        "@aave/=lib/aave-v3-core/contracts/",
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/",
        "lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/"
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
    "id": 44594,
    "exportedSymbols": {
      "IMulticall3": [
        44593
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:2153:67",
    "nodes": [
      {
        "id": 44432,
        "nodeType": "PragmaDirective",
        "src": "32:31:67",
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
        "id": 44433,
        "nodeType": "PragmaDirective",
        "src": "65:33:67",
        "nodes": [],
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ]
      },
      {
        "id": 44593,
        "nodeType": "ContractDefinition",
        "src": "100:2084:67",
        "nodes": [
          {
            "id": 44438,
            "nodeType": "StructDefinition",
            "src": "128:67:67",
            "nodes": [],
            "canonicalName": "IMulticall3.Call",
            "members": [
              {
                "constant": false,
                "id": 44435,
                "mutability": "mutable",
                "name": "target",
                "nameLocation": "158:6:67",
                "nodeType": "VariableDeclaration",
                "scope": 44438,
                "src": "150:14:67",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 44434,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "150:7:67",
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
                "id": 44437,
                "mutability": "mutable",
                "name": "callData",
                "nameLocation": "180:8:67",
                "nodeType": "VariableDeclaration",
                "scope": 44438,
                "src": "174:14:67",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 44436,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "174:5:67",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Call",
            "nameLocation": "135:4:67",
            "scope": 44593,
            "visibility": "public"
          },
          {
            "id": 44445,
            "nodeType": "StructDefinition",
            "src": "201:95:67",
            "nodes": [],
            "canonicalName": "IMulticall3.Call3",
            "members": [
              {
                "constant": false,
                "id": 44440,
                "mutability": "mutable",
                "name": "target",
                "nameLocation": "232:6:67",
                "nodeType": "VariableDeclaration",
                "scope": 44445,
                "src": "224:14:67",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 44439,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "224:7:67",
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
                "id": 44442,
                "mutability": "mutable",
                "name": "allowFailure",
                "nameLocation": "253:12:67",
                "nodeType": "VariableDeclaration",
                "scope": 44445,
                "src": "248:17:67",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 44441,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "248:4:67",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 44444,
                "mutability": "mutable",
                "name": "callData",
                "nameLocation": "281:8:67",
                "nodeType": "VariableDeclaration",
                "scope": 44445,
                "src": "275:14:67",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 44443,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "275:5:67",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Call3",
            "nameLocation": "208:5:67",
            "scope": 44593,
            "visibility": "public"
          },
          {
            "id": 44454,
            "nodeType": "StructDefinition",
            "src": "302:123:67",
            "nodes": [],
            "canonicalName": "IMulticall3.Call3Value",
            "members": [
              {
                "constant": false,
                "id": 44447,
                "mutability": "mutable",
                "name": "target",
                "nameLocation": "338:6:67",
                "nodeType": "VariableDeclaration",
                "scope": 44454,
                "src": "330:14:67",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 44446,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "330:7:67",
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
                "id": 44449,
                "mutability": "mutable",
                "name": "allowFailure",
                "nameLocation": "359:12:67",
                "nodeType": "VariableDeclaration",
                "scope": 44454,
                "src": "354:17:67",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 44448,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "354:4:67",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 44451,
                "mutability": "mutable",
                "name": "value",
                "nameLocation": "389:5:67",
                "nodeType": "VariableDeclaration",
                "scope": 44454,
                "src": "381:13:67",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 44450,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "381:7:67",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 44453,
                "mutability": "mutable",
                "name": "callData",
                "nameLocation": "410:8:67",
                "nodeType": "VariableDeclaration",
                "scope": 44454,
                "src": "404:14:67",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 44452,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "404:5:67",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Call3Value",
            "nameLocation": "309:10:67",
            "scope": 44593,
            "visibility": "public"
          },
          {
            "id": 44459,
            "nodeType": "StructDefinition",
            "src": "431:69:67",
            "nodes": [],
            "canonicalName": "IMulticall3.Result",
            "members": [
              {
                "constant": false,
                "id": 44456,
                "mutability": "mutable",
                "name": "success",
                "nameLocation": "460:7:67",
                "nodeType": "VariableDeclaration",
                "scope": 44459,
                "src": "455:12:67",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 44455,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "455:4:67",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 44458,
                "mutability": "mutable",
                "name": "returnData",
                "nameLocation": "483:10:67",
                "nodeType": "VariableDeclaration",
                "scope": 44459,
                "src": "477:16:67",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 44457,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "477:5:67",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Result",
            "nameLocation": "438:6:67",
            "scope": 44593,
            "visibility": "public"
          },
          {
            "id": 44471,
            "nodeType": "FunctionDefinition",
            "src": "506:140:67",
            "nodes": [],
            "functionSelector": "252dba42",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "aggregate",
            "nameLocation": "515:9:67",
            "parameters": {
              "id": 44464,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44463,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "541:5:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 44471,
                  "src": "525:21:67",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call_$44438_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 44461,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 44460,
                        "name": "Call",
                        "nameLocations": [
                          "525:4:67"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 44438,
                        "src": "525:4:67"
                      },
                      "referencedDeclaration": 44438,
                      "src": "525:4:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call_$44438_storage_ptr",
                        "typeString": "struct IMulticall3.Call"
                      }
                    },
                    "id": 44462,
                    "nodeType": "ArrayTypeName",
                    "src": "525:6:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call_$44438_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "524:23:67"
            },
            "returnParameters": {
              "id": 44470,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44466,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "606:11:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 44471,
                  "src": "598:19:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44465,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "598:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 44469,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "634:10:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 44471,
                  "src": "619:25:67",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 44467,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "619:5:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 44468,
                    "nodeType": "ArrayTypeName",
                    "src": "619:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "597:48:67"
            },
            "scope": 44593,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 44482,
            "nodeType": "FunctionDefinition",
            "src": "652:98:67",
            "nodes": [],
            "functionSelector": "82ad56cb",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "aggregate3",
            "nameLocation": "661:10:67",
            "parameters": {
              "id": 44476,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44475,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "689:5:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 44482,
                  "src": "672:22:67",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call3_$44445_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call3[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 44473,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 44472,
                        "name": "Call3",
                        "nameLocations": [
                          "672:5:67"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 44445,
                        "src": "672:5:67"
                      },
                      "referencedDeclaration": 44445,
                      "src": "672:5:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call3_$44445_storage_ptr",
                        "typeString": "struct IMulticall3.Call3"
                      }
                    },
                    "id": 44474,
                    "nodeType": "ArrayTypeName",
                    "src": "672:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call3_$44445_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call3[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "671:24:67"
            },
            "returnParameters": {
              "id": 44481,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44480,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "738:10:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 44482,
                  "src": "722:26:67",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$44459_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 44478,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 44477,
                        "name": "Result",
                        "nameLocations": [
                          "722:6:67"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 44459,
                        "src": "722:6:67"
                      },
                      "referencedDeclaration": 44459,
                      "src": "722:6:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$44459_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 44479,
                    "nodeType": "ArrayTypeName",
                    "src": "722:8:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$44459_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "721:28:67"
            },
            "scope": 44593,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 44493,
            "nodeType": "FunctionDefinition",
            "src": "756:108:67",
            "nodes": [],
            "functionSelector": "174dea71",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "aggregate3Value",
            "nameLocation": "765:15:67",
            "parameters": {
              "id": 44487,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44486,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "803:5:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 44493,
                  "src": "781:27:67",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call3Value_$44454_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call3Value[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 44484,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 44483,
                        "name": "Call3Value",
                        "nameLocations": [
                          "781:10:67"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 44454,
                        "src": "781:10:67"
                      },
                      "referencedDeclaration": 44454,
                      "src": "781:10:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call3Value_$44454_storage_ptr",
                        "typeString": "struct IMulticall3.Call3Value"
                      }
                    },
                    "id": 44485,
                    "nodeType": "ArrayTypeName",
                    "src": "781:12:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call3Value_$44454_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call3Value[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "780:29:67"
            },
            "returnParameters": {
              "id": 44492,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44491,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "852:10:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 44493,
                  "src": "836:26:67",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$44459_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 44489,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 44488,
                        "name": "Result",
                        "nameLocations": [
                          "836:6:67"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 44459,
                        "src": "836:6:67"
                      },
                      "referencedDeclaration": 44459,
                      "src": "836:6:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$44459_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 44490,
                    "nodeType": "ArrayTypeName",
                    "src": "836:8:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$44459_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "835:28:67"
            },
            "scope": 44593,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 44508,
            "nodeType": "FunctionDefinition",
            "src": "870:168:67",
            "nodes": [],
            "functionSelector": "c3077fa9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "blockAndAggregate",
            "nameLocation": "879:17:67",
            "parameters": {
              "id": 44498,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44497,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "913:5:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 44508,
                  "src": "897:21:67",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call_$44438_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 44495,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 44494,
                        "name": "Call",
                        "nameLocations": [
                          "897:4:67"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 44438,
                        "src": "897:4:67"
                      },
                      "referencedDeclaration": 44438,
                      "src": "897:4:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call_$44438_storage_ptr",
                        "typeString": "struct IMulticall3.Call"
                      }
                    },
                    "id": 44496,
                    "nodeType": "ArrayTypeName",
                    "src": "897:6:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call_$44438_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "896:23:67"
            },
            "returnParameters": {
              "id": 44507,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44500,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "978:11:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 44508,
                  "src": "970:19:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44499,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "970:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 44502,
                  "mutability": "mutable",
                  "name": "blockHash",
                  "nameLocation": "999:9:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 44508,
                  "src": "991:17:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 44501,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "991:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 44506,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "1026:10:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 44508,
                  "src": "1010:26:67",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$44459_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 44504,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 44503,
                        "name": "Result",
                        "nameLocations": [
                          "1010:6:67"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 44459,
                        "src": "1010:6:67"
                      },
                      "referencedDeclaration": 44459,
                      "src": "1010:6:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$44459_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 44505,
                    "nodeType": "ArrayTypeName",
                    "src": "1010:8:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$44459_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "969:68:67"
            },
            "scope": 44593,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 44513,
            "nodeType": "FunctionDefinition",
            "src": "1044:62:67",
            "nodes": [],
            "functionSelector": "3e64a696",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getBasefee",
            "nameLocation": "1053:10:67",
            "parameters": {
              "id": 44509,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1063:2:67"
            },
            "returnParameters": {
              "id": 44512,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44511,
                  "mutability": "mutable",
                  "name": "basefee",
                  "nameLocation": "1097:7:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 44513,
                  "src": "1089:15:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44510,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1089:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1088:17:67"
            },
            "scope": 44593,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 44520,
            "nodeType": "FunctionDefinition",
            "src": "1112:85:67",
            "nodes": [],
            "functionSelector": "ee82ac5e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getBlockHash",
            "nameLocation": "1121:12:67",
            "parameters": {
              "id": 44516,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44515,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "1142:11:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 44520,
                  "src": "1134:19:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44514,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1134:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1133:21:67"
            },
            "returnParameters": {
              "id": 44519,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44518,
                  "mutability": "mutable",
                  "name": "blockHash",
                  "nameLocation": "1186:9:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 44520,
                  "src": "1178:17:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 44517,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1178:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1177:19:67"
            },
            "scope": 44593,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 44525,
            "nodeType": "FunctionDefinition",
            "src": "1203:70:67",
            "nodes": [],
            "functionSelector": "42cbb15c",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getBlockNumber",
            "nameLocation": "1212:14:67",
            "parameters": {
              "id": 44521,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1226:2:67"
            },
            "returnParameters": {
              "id": 44524,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44523,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "1260:11:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 44525,
                  "src": "1252:19:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44522,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1252:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1251:21:67"
            },
            "scope": 44593,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 44530,
            "nodeType": "FunctionDefinition",
            "src": "1279:62:67",
            "nodes": [],
            "functionSelector": "3408e470",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getChainId",
            "nameLocation": "1288:10:67",
            "parameters": {
              "id": 44526,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1298:2:67"
            },
            "returnParameters": {
              "id": 44529,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44528,
                  "mutability": "mutable",
                  "name": "chainid",
                  "nameLocation": "1332:7:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 44530,
                  "src": "1324:15:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44527,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1324:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1323:17:67"
            },
            "scope": 44593,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 44535,
            "nodeType": "FunctionDefinition",
            "src": "1347:76:67",
            "nodes": [],
            "functionSelector": "a8b0574e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCurrentBlockCoinbase",
            "nameLocation": "1356:23:67",
            "parameters": {
              "id": 44531,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1379:2:67"
            },
            "returnParameters": {
              "id": 44534,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44533,
                  "mutability": "mutable",
                  "name": "coinbase",
                  "nameLocation": "1413:8:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 44535,
                  "src": "1405:16:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44532,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1405:7:67",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1404:18:67"
            },
            "scope": 44593,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 44540,
            "nodeType": "FunctionDefinition",
            "src": "1429:80:67",
            "nodes": [],
            "functionSelector": "72425d9d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCurrentBlockDifficulty",
            "nameLocation": "1438:25:67",
            "parameters": {
              "id": 44536,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1463:2:67"
            },
            "returnParameters": {
              "id": 44539,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44538,
                  "mutability": "mutable",
                  "name": "difficulty",
                  "nameLocation": "1497:10:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 44540,
                  "src": "1489:18:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44537,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1489:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1488:20:67"
            },
            "scope": 44593,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 44545,
            "nodeType": "FunctionDefinition",
            "src": "1515:76:67",
            "nodes": [],
            "functionSelector": "86d516e8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCurrentBlockGasLimit",
            "nameLocation": "1524:23:67",
            "parameters": {
              "id": 44541,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1547:2:67"
            },
            "returnParameters": {
              "id": 44544,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44543,
                  "mutability": "mutable",
                  "name": "gaslimit",
                  "nameLocation": "1581:8:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 44545,
                  "src": "1573:16:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44542,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1573:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1572:18:67"
            },
            "scope": 44593,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 44550,
            "nodeType": "FunctionDefinition",
            "src": "1597:78:67",
            "nodes": [],
            "functionSelector": "0f28c97d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCurrentBlockTimestamp",
            "nameLocation": "1606:24:67",
            "parameters": {
              "id": 44546,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1630:2:67"
            },
            "returnParameters": {
              "id": 44549,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44548,
                  "mutability": "mutable",
                  "name": "timestamp",
                  "nameLocation": "1664:9:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 44550,
                  "src": "1656:17:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44547,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1656:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1655:19:67"
            },
            "scope": 44593,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 44557,
            "nodeType": "FunctionDefinition",
            "src": "1681:77:67",
            "nodes": [],
            "functionSelector": "4d2301cc",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getEthBalance",
            "nameLocation": "1690:13:67",
            "parameters": {
              "id": 44553,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44552,
                  "mutability": "mutable",
                  "name": "addr",
                  "nameLocation": "1712:4:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 44557,
                  "src": "1704:12:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44551,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1704:7:67",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1703:14:67"
            },
            "returnParameters": {
              "id": 44556,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44555,
                  "mutability": "mutable",
                  "name": "balance",
                  "nameLocation": "1749:7:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 44557,
                  "src": "1741:15:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44554,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1741:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1740:17:67"
            },
            "scope": 44593,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 44562,
            "nodeType": "FunctionDefinition",
            "src": "1764:70:67",
            "nodes": [],
            "functionSelector": "27e86d6e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getLastBlockHash",
            "nameLocation": "1773:16:67",
            "parameters": {
              "id": 44558,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1789:2:67"
            },
            "returnParameters": {
              "id": 44561,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44560,
                  "mutability": "mutable",
                  "name": "blockHash",
                  "nameLocation": "1823:9:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 44562,
                  "src": "1815:17:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 44559,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1815:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1814:19:67"
            },
            "scope": 44593,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 44575,
            "nodeType": "FunctionDefinition",
            "src": "1840:144:67",
            "nodes": [],
            "functionSelector": "bce38bd7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "tryAggregate",
            "nameLocation": "1849:12:67",
            "parameters": {
              "id": 44569,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44564,
                  "mutability": "mutable",
                  "name": "requireSuccess",
                  "nameLocation": "1867:14:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 44575,
                  "src": "1862:19:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 44563,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1862:4:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 44568,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "1899:5:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 44575,
                  "src": "1883:21:67",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call_$44438_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 44566,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 44565,
                        "name": "Call",
                        "nameLocations": [
                          "1883:4:67"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 44438,
                        "src": "1883:4:67"
                      },
                      "referencedDeclaration": 44438,
                      "src": "1883:4:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call_$44438_storage_ptr",
                        "typeString": "struct IMulticall3.Call"
                      }
                    },
                    "id": 44567,
                    "nodeType": "ArrayTypeName",
                    "src": "1883:6:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call_$44438_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1861:44:67"
            },
            "returnParameters": {
              "id": 44574,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44573,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "1972:10:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 44575,
                  "src": "1956:26:67",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$44459_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 44571,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 44570,
                        "name": "Result",
                        "nameLocations": [
                          "1956:6:67"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 44459,
                        "src": "1956:6:67"
                      },
                      "referencedDeclaration": 44459,
                      "src": "1956:6:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$44459_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 44572,
                    "nodeType": "ArrayTypeName",
                    "src": "1956:8:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$44459_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1955:28:67"
            },
            "scope": 44593,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 44592,
            "nodeType": "FunctionDefinition",
            "src": "1990:192:67",
            "nodes": [],
            "functionSelector": "399542e9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "tryBlockAndAggregate",
            "nameLocation": "1999:20:67",
            "parameters": {
              "id": 44582,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44577,
                  "mutability": "mutable",
                  "name": "requireSuccess",
                  "nameLocation": "2025:14:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 44592,
                  "src": "2020:19:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 44576,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2020:4:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 44581,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "2057:5:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 44592,
                  "src": "2041:21:67",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call_$44438_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 44579,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 44578,
                        "name": "Call",
                        "nameLocations": [
                          "2041:4:67"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 44438,
                        "src": "2041:4:67"
                      },
                      "referencedDeclaration": 44438,
                      "src": "2041:4:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call_$44438_storage_ptr",
                        "typeString": "struct IMulticall3.Call"
                      }
                    },
                    "id": 44580,
                    "nodeType": "ArrayTypeName",
                    "src": "2041:6:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call_$44438_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2019:44:67"
            },
            "returnParameters": {
              "id": 44591,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44584,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "2122:11:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 44592,
                  "src": "2114:19:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44583,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2114:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 44586,
                  "mutability": "mutable",
                  "name": "blockHash",
                  "nameLocation": "2143:9:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 44592,
                  "src": "2135:17:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 44585,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2135:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 44590,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "2170:10:67",
                  "nodeType": "VariableDeclaration",
                  "scope": 44592,
                  "src": "2154:26:67",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$44459_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 44588,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 44587,
                        "name": "Result",
                        "nameLocations": [
                          "2154:6:67"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 44459,
                        "src": "2154:6:67"
                      },
                      "referencedDeclaration": 44459,
                      "src": "2154:6:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$44459_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 44589,
                    "nodeType": "ArrayTypeName",
                    "src": "2154:8:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$44459_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2113:68:67"
            },
            "scope": 44593,
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
          44593
        ],
        "name": "IMulticall3",
        "nameLocation": "110:11:67",
        "scope": 44594,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 67
}