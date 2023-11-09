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
    "id": 45300,
    "exportedSymbols": {
      "IMulticall3": [
        45299
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:2153:73",
    "nodes": [
      {
        "id": 45138,
        "nodeType": "PragmaDirective",
        "src": "32:31:73",
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
        "id": 45139,
        "nodeType": "PragmaDirective",
        "src": "65:33:73",
        "nodes": [],
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ]
      },
      {
        "id": 45299,
        "nodeType": "ContractDefinition",
        "src": "100:2084:73",
        "nodes": [
          {
            "id": 45144,
            "nodeType": "StructDefinition",
            "src": "128:67:73",
            "nodes": [],
            "canonicalName": "IMulticall3.Call",
            "members": [
              {
                "constant": false,
                "id": 45141,
                "mutability": "mutable",
                "name": "target",
                "nameLocation": "158:6:73",
                "nodeType": "VariableDeclaration",
                "scope": 45144,
                "src": "150:14:73",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 45140,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "150:7:73",
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
                "id": 45143,
                "mutability": "mutable",
                "name": "callData",
                "nameLocation": "180:8:73",
                "nodeType": "VariableDeclaration",
                "scope": 45144,
                "src": "174:14:73",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 45142,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "174:5:73",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Call",
            "nameLocation": "135:4:73",
            "scope": 45299,
            "visibility": "public"
          },
          {
            "id": 45151,
            "nodeType": "StructDefinition",
            "src": "201:95:73",
            "nodes": [],
            "canonicalName": "IMulticall3.Call3",
            "members": [
              {
                "constant": false,
                "id": 45146,
                "mutability": "mutable",
                "name": "target",
                "nameLocation": "232:6:73",
                "nodeType": "VariableDeclaration",
                "scope": 45151,
                "src": "224:14:73",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 45145,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "224:7:73",
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
                "id": 45148,
                "mutability": "mutable",
                "name": "allowFailure",
                "nameLocation": "253:12:73",
                "nodeType": "VariableDeclaration",
                "scope": 45151,
                "src": "248:17:73",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 45147,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "248:4:73",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 45150,
                "mutability": "mutable",
                "name": "callData",
                "nameLocation": "281:8:73",
                "nodeType": "VariableDeclaration",
                "scope": 45151,
                "src": "275:14:73",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 45149,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "275:5:73",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Call3",
            "nameLocation": "208:5:73",
            "scope": 45299,
            "visibility": "public"
          },
          {
            "id": 45160,
            "nodeType": "StructDefinition",
            "src": "302:123:73",
            "nodes": [],
            "canonicalName": "IMulticall3.Call3Value",
            "members": [
              {
                "constant": false,
                "id": 45153,
                "mutability": "mutable",
                "name": "target",
                "nameLocation": "338:6:73",
                "nodeType": "VariableDeclaration",
                "scope": 45160,
                "src": "330:14:73",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 45152,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "330:7:73",
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
                "id": 45155,
                "mutability": "mutable",
                "name": "allowFailure",
                "nameLocation": "359:12:73",
                "nodeType": "VariableDeclaration",
                "scope": 45160,
                "src": "354:17:73",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 45154,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "354:4:73",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 45157,
                "mutability": "mutable",
                "name": "value",
                "nameLocation": "389:5:73",
                "nodeType": "VariableDeclaration",
                "scope": 45160,
                "src": "381:13:73",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 45156,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "381:7:73",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 45159,
                "mutability": "mutable",
                "name": "callData",
                "nameLocation": "410:8:73",
                "nodeType": "VariableDeclaration",
                "scope": 45160,
                "src": "404:14:73",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 45158,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "404:5:73",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Call3Value",
            "nameLocation": "309:10:73",
            "scope": 45299,
            "visibility": "public"
          },
          {
            "id": 45165,
            "nodeType": "StructDefinition",
            "src": "431:69:73",
            "nodes": [],
            "canonicalName": "IMulticall3.Result",
            "members": [
              {
                "constant": false,
                "id": 45162,
                "mutability": "mutable",
                "name": "success",
                "nameLocation": "460:7:73",
                "nodeType": "VariableDeclaration",
                "scope": 45165,
                "src": "455:12:73",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 45161,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "455:4:73",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 45164,
                "mutability": "mutable",
                "name": "returnData",
                "nameLocation": "483:10:73",
                "nodeType": "VariableDeclaration",
                "scope": 45165,
                "src": "477:16:73",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 45163,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "477:5:73",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Result",
            "nameLocation": "438:6:73",
            "scope": 45299,
            "visibility": "public"
          },
          {
            "id": 45177,
            "nodeType": "FunctionDefinition",
            "src": "506:140:73",
            "nodes": [],
            "functionSelector": "252dba42",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "aggregate",
            "nameLocation": "515:9:73",
            "parameters": {
              "id": 45170,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45169,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "541:5:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 45177,
                  "src": "525:21:73",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call_$45144_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 45167,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 45166,
                        "name": "Call",
                        "nameLocations": [
                          "525:4:73"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 45144,
                        "src": "525:4:73"
                      },
                      "referencedDeclaration": 45144,
                      "src": "525:4:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call_$45144_storage_ptr",
                        "typeString": "struct IMulticall3.Call"
                      }
                    },
                    "id": 45168,
                    "nodeType": "ArrayTypeName",
                    "src": "525:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call_$45144_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "524:23:73"
            },
            "returnParameters": {
              "id": 45176,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45172,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "606:11:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 45177,
                  "src": "598:19:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45171,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "598:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 45175,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "634:10:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 45177,
                  "src": "619:25:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 45173,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "619:5:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 45174,
                    "nodeType": "ArrayTypeName",
                    "src": "619:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "597:48:73"
            },
            "scope": 45299,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 45188,
            "nodeType": "FunctionDefinition",
            "src": "652:98:73",
            "nodes": [],
            "functionSelector": "82ad56cb",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "aggregate3",
            "nameLocation": "661:10:73",
            "parameters": {
              "id": 45182,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45181,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "689:5:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 45188,
                  "src": "672:22:73",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call3_$45151_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call3[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 45179,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 45178,
                        "name": "Call3",
                        "nameLocations": [
                          "672:5:73"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 45151,
                        "src": "672:5:73"
                      },
                      "referencedDeclaration": 45151,
                      "src": "672:5:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call3_$45151_storage_ptr",
                        "typeString": "struct IMulticall3.Call3"
                      }
                    },
                    "id": 45180,
                    "nodeType": "ArrayTypeName",
                    "src": "672:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call3_$45151_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call3[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "671:24:73"
            },
            "returnParameters": {
              "id": 45187,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45186,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "738:10:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 45188,
                  "src": "722:26:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$45165_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 45184,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 45183,
                        "name": "Result",
                        "nameLocations": [
                          "722:6:73"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 45165,
                        "src": "722:6:73"
                      },
                      "referencedDeclaration": 45165,
                      "src": "722:6:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$45165_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 45185,
                    "nodeType": "ArrayTypeName",
                    "src": "722:8:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$45165_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "721:28:73"
            },
            "scope": 45299,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 45199,
            "nodeType": "FunctionDefinition",
            "src": "756:108:73",
            "nodes": [],
            "functionSelector": "174dea71",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "aggregate3Value",
            "nameLocation": "765:15:73",
            "parameters": {
              "id": 45193,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45192,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "803:5:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 45199,
                  "src": "781:27:73",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call3Value_$45160_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call3Value[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 45190,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 45189,
                        "name": "Call3Value",
                        "nameLocations": [
                          "781:10:73"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 45160,
                        "src": "781:10:73"
                      },
                      "referencedDeclaration": 45160,
                      "src": "781:10:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call3Value_$45160_storage_ptr",
                        "typeString": "struct IMulticall3.Call3Value"
                      }
                    },
                    "id": 45191,
                    "nodeType": "ArrayTypeName",
                    "src": "781:12:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call3Value_$45160_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call3Value[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "780:29:73"
            },
            "returnParameters": {
              "id": 45198,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45197,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "852:10:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 45199,
                  "src": "836:26:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$45165_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 45195,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 45194,
                        "name": "Result",
                        "nameLocations": [
                          "836:6:73"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 45165,
                        "src": "836:6:73"
                      },
                      "referencedDeclaration": 45165,
                      "src": "836:6:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$45165_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 45196,
                    "nodeType": "ArrayTypeName",
                    "src": "836:8:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$45165_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "835:28:73"
            },
            "scope": 45299,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 45214,
            "nodeType": "FunctionDefinition",
            "src": "870:168:73",
            "nodes": [],
            "functionSelector": "c3077fa9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "blockAndAggregate",
            "nameLocation": "879:17:73",
            "parameters": {
              "id": 45204,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45203,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "913:5:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 45214,
                  "src": "897:21:73",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call_$45144_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 45201,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 45200,
                        "name": "Call",
                        "nameLocations": [
                          "897:4:73"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 45144,
                        "src": "897:4:73"
                      },
                      "referencedDeclaration": 45144,
                      "src": "897:4:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call_$45144_storage_ptr",
                        "typeString": "struct IMulticall3.Call"
                      }
                    },
                    "id": 45202,
                    "nodeType": "ArrayTypeName",
                    "src": "897:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call_$45144_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "896:23:73"
            },
            "returnParameters": {
              "id": 45213,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45206,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "978:11:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 45214,
                  "src": "970:19:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45205,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "970:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 45208,
                  "mutability": "mutable",
                  "name": "blockHash",
                  "nameLocation": "999:9:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 45214,
                  "src": "991:17:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45207,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "991:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 45212,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "1026:10:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 45214,
                  "src": "1010:26:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$45165_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 45210,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 45209,
                        "name": "Result",
                        "nameLocations": [
                          "1010:6:73"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 45165,
                        "src": "1010:6:73"
                      },
                      "referencedDeclaration": 45165,
                      "src": "1010:6:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$45165_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 45211,
                    "nodeType": "ArrayTypeName",
                    "src": "1010:8:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$45165_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "969:68:73"
            },
            "scope": 45299,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 45219,
            "nodeType": "FunctionDefinition",
            "src": "1044:62:73",
            "nodes": [],
            "functionSelector": "3e64a696",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getBasefee",
            "nameLocation": "1053:10:73",
            "parameters": {
              "id": 45215,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1063:2:73"
            },
            "returnParameters": {
              "id": 45218,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45217,
                  "mutability": "mutable",
                  "name": "basefee",
                  "nameLocation": "1097:7:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 45219,
                  "src": "1089:15:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45216,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1089:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1088:17:73"
            },
            "scope": 45299,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 45226,
            "nodeType": "FunctionDefinition",
            "src": "1112:85:73",
            "nodes": [],
            "functionSelector": "ee82ac5e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getBlockHash",
            "nameLocation": "1121:12:73",
            "parameters": {
              "id": 45222,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45221,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "1142:11:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 45226,
                  "src": "1134:19:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45220,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1134:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1133:21:73"
            },
            "returnParameters": {
              "id": 45225,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45224,
                  "mutability": "mutable",
                  "name": "blockHash",
                  "nameLocation": "1186:9:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 45226,
                  "src": "1178:17:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45223,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1178:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1177:19:73"
            },
            "scope": 45299,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 45231,
            "nodeType": "FunctionDefinition",
            "src": "1203:70:73",
            "nodes": [],
            "functionSelector": "42cbb15c",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getBlockNumber",
            "nameLocation": "1212:14:73",
            "parameters": {
              "id": 45227,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1226:2:73"
            },
            "returnParameters": {
              "id": 45230,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45229,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "1260:11:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 45231,
                  "src": "1252:19:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45228,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1252:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1251:21:73"
            },
            "scope": 45299,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 45236,
            "nodeType": "FunctionDefinition",
            "src": "1279:62:73",
            "nodes": [],
            "functionSelector": "3408e470",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getChainId",
            "nameLocation": "1288:10:73",
            "parameters": {
              "id": 45232,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1298:2:73"
            },
            "returnParameters": {
              "id": 45235,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45234,
                  "mutability": "mutable",
                  "name": "chainid",
                  "nameLocation": "1332:7:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 45236,
                  "src": "1324:15:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45233,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1324:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1323:17:73"
            },
            "scope": 45299,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 45241,
            "nodeType": "FunctionDefinition",
            "src": "1347:76:73",
            "nodes": [],
            "functionSelector": "a8b0574e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCurrentBlockCoinbase",
            "nameLocation": "1356:23:73",
            "parameters": {
              "id": 45237,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1379:2:73"
            },
            "returnParameters": {
              "id": 45240,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45239,
                  "mutability": "mutable",
                  "name": "coinbase",
                  "nameLocation": "1413:8:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 45241,
                  "src": "1405:16:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 45238,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1405:7:73",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1404:18:73"
            },
            "scope": 45299,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 45246,
            "nodeType": "FunctionDefinition",
            "src": "1429:80:73",
            "nodes": [],
            "functionSelector": "72425d9d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCurrentBlockDifficulty",
            "nameLocation": "1438:25:73",
            "parameters": {
              "id": 45242,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1463:2:73"
            },
            "returnParameters": {
              "id": 45245,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45244,
                  "mutability": "mutable",
                  "name": "difficulty",
                  "nameLocation": "1497:10:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 45246,
                  "src": "1489:18:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45243,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1489:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1488:20:73"
            },
            "scope": 45299,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 45251,
            "nodeType": "FunctionDefinition",
            "src": "1515:76:73",
            "nodes": [],
            "functionSelector": "86d516e8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCurrentBlockGasLimit",
            "nameLocation": "1524:23:73",
            "parameters": {
              "id": 45247,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1547:2:73"
            },
            "returnParameters": {
              "id": 45250,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45249,
                  "mutability": "mutable",
                  "name": "gaslimit",
                  "nameLocation": "1581:8:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 45251,
                  "src": "1573:16:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45248,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1573:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1572:18:73"
            },
            "scope": 45299,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 45256,
            "nodeType": "FunctionDefinition",
            "src": "1597:78:73",
            "nodes": [],
            "functionSelector": "0f28c97d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCurrentBlockTimestamp",
            "nameLocation": "1606:24:73",
            "parameters": {
              "id": 45252,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1630:2:73"
            },
            "returnParameters": {
              "id": 45255,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45254,
                  "mutability": "mutable",
                  "name": "timestamp",
                  "nameLocation": "1664:9:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 45256,
                  "src": "1656:17:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45253,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1656:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1655:19:73"
            },
            "scope": 45299,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 45263,
            "nodeType": "FunctionDefinition",
            "src": "1681:77:73",
            "nodes": [],
            "functionSelector": "4d2301cc",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getEthBalance",
            "nameLocation": "1690:13:73",
            "parameters": {
              "id": 45259,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45258,
                  "mutability": "mutable",
                  "name": "addr",
                  "nameLocation": "1712:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 45263,
                  "src": "1704:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 45257,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1704:7:73",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1703:14:73"
            },
            "returnParameters": {
              "id": 45262,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45261,
                  "mutability": "mutable",
                  "name": "balance",
                  "nameLocation": "1749:7:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 45263,
                  "src": "1741:15:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45260,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1741:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1740:17:73"
            },
            "scope": 45299,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 45268,
            "nodeType": "FunctionDefinition",
            "src": "1764:70:73",
            "nodes": [],
            "functionSelector": "27e86d6e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getLastBlockHash",
            "nameLocation": "1773:16:73",
            "parameters": {
              "id": 45264,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1789:2:73"
            },
            "returnParameters": {
              "id": 45267,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45266,
                  "mutability": "mutable",
                  "name": "blockHash",
                  "nameLocation": "1823:9:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 45268,
                  "src": "1815:17:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45265,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1815:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1814:19:73"
            },
            "scope": 45299,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 45281,
            "nodeType": "FunctionDefinition",
            "src": "1840:144:73",
            "nodes": [],
            "functionSelector": "bce38bd7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "tryAggregate",
            "nameLocation": "1849:12:73",
            "parameters": {
              "id": 45275,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45270,
                  "mutability": "mutable",
                  "name": "requireSuccess",
                  "nameLocation": "1867:14:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 45281,
                  "src": "1862:19:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 45269,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1862:4:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 45274,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "1899:5:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 45281,
                  "src": "1883:21:73",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call_$45144_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 45272,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 45271,
                        "name": "Call",
                        "nameLocations": [
                          "1883:4:73"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 45144,
                        "src": "1883:4:73"
                      },
                      "referencedDeclaration": 45144,
                      "src": "1883:4:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call_$45144_storage_ptr",
                        "typeString": "struct IMulticall3.Call"
                      }
                    },
                    "id": 45273,
                    "nodeType": "ArrayTypeName",
                    "src": "1883:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call_$45144_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1861:44:73"
            },
            "returnParameters": {
              "id": 45280,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45279,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "1972:10:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 45281,
                  "src": "1956:26:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$45165_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 45277,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 45276,
                        "name": "Result",
                        "nameLocations": [
                          "1956:6:73"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 45165,
                        "src": "1956:6:73"
                      },
                      "referencedDeclaration": 45165,
                      "src": "1956:6:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$45165_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 45278,
                    "nodeType": "ArrayTypeName",
                    "src": "1956:8:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$45165_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1955:28:73"
            },
            "scope": 45299,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 45298,
            "nodeType": "FunctionDefinition",
            "src": "1990:192:73",
            "nodes": [],
            "functionSelector": "399542e9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "tryBlockAndAggregate",
            "nameLocation": "1999:20:73",
            "parameters": {
              "id": 45288,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45283,
                  "mutability": "mutable",
                  "name": "requireSuccess",
                  "nameLocation": "2025:14:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 45298,
                  "src": "2020:19:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 45282,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2020:4:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 45287,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "2057:5:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 45298,
                  "src": "2041:21:73",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call_$45144_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 45285,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 45284,
                        "name": "Call",
                        "nameLocations": [
                          "2041:4:73"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 45144,
                        "src": "2041:4:73"
                      },
                      "referencedDeclaration": 45144,
                      "src": "2041:4:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call_$45144_storage_ptr",
                        "typeString": "struct IMulticall3.Call"
                      }
                    },
                    "id": 45286,
                    "nodeType": "ArrayTypeName",
                    "src": "2041:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call_$45144_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2019:44:73"
            },
            "returnParameters": {
              "id": 45297,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45290,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "2122:11:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 45298,
                  "src": "2114:19:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45289,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2114:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 45292,
                  "mutability": "mutable",
                  "name": "blockHash",
                  "nameLocation": "2143:9:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 45298,
                  "src": "2135:17:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45291,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2135:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 45296,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "2170:10:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 45298,
                  "src": "2154:26:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$45165_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 45294,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 45293,
                        "name": "Result",
                        "nameLocations": [
                          "2154:6:73"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 45165,
                        "src": "2154:6:73"
                      },
                      "referencedDeclaration": 45165,
                      "src": "2154:6:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$45165_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 45295,
                    "nodeType": "ArrayTypeName",
                    "src": "2154:8:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$45165_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2113:68:73"
            },
            "scope": 45299,
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
          45299
        ],
        "name": "IMulticall3",
        "nameLocation": "110:11:73",
        "scope": 45300,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 73
} as const;
