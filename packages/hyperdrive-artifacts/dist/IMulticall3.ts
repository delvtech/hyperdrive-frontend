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
    "id": 52598,
    "exportedSymbols": {
      "IMulticall3": [
        52597
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:2153:111",
    "nodes": [
      {
        "id": 52436,
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
        "id": 52437,
        "nodeType": "PragmaDirective",
        "src": "65:33:111",
        "nodes": [],
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ]
      },
      {
        "id": 52597,
        "nodeType": "ContractDefinition",
        "src": "100:2084:111",
        "nodes": [
          {
            "id": 52442,
            "nodeType": "StructDefinition",
            "src": "128:67:111",
            "nodes": [],
            "canonicalName": "IMulticall3.Call",
            "members": [
              {
                "constant": false,
                "id": 52439,
                "mutability": "mutable",
                "name": "target",
                "nameLocation": "158:6:111",
                "nodeType": "VariableDeclaration",
                "scope": 52442,
                "src": "150:14:111",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 52438,
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
                "id": 52441,
                "mutability": "mutable",
                "name": "callData",
                "nameLocation": "180:8:111",
                "nodeType": "VariableDeclaration",
                "scope": 52442,
                "src": "174:14:111",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 52440,
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
            "scope": 52597,
            "visibility": "public"
          },
          {
            "id": 52449,
            "nodeType": "StructDefinition",
            "src": "201:95:111",
            "nodes": [],
            "canonicalName": "IMulticall3.Call3",
            "members": [
              {
                "constant": false,
                "id": 52444,
                "mutability": "mutable",
                "name": "target",
                "nameLocation": "232:6:111",
                "nodeType": "VariableDeclaration",
                "scope": 52449,
                "src": "224:14:111",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 52443,
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
                "id": 52446,
                "mutability": "mutable",
                "name": "allowFailure",
                "nameLocation": "253:12:111",
                "nodeType": "VariableDeclaration",
                "scope": 52449,
                "src": "248:17:111",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 52445,
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
                "id": 52448,
                "mutability": "mutable",
                "name": "callData",
                "nameLocation": "281:8:111",
                "nodeType": "VariableDeclaration",
                "scope": 52449,
                "src": "275:14:111",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 52447,
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
            "scope": 52597,
            "visibility": "public"
          },
          {
            "id": 52458,
            "nodeType": "StructDefinition",
            "src": "302:123:111",
            "nodes": [],
            "canonicalName": "IMulticall3.Call3Value",
            "members": [
              {
                "constant": false,
                "id": 52451,
                "mutability": "mutable",
                "name": "target",
                "nameLocation": "338:6:111",
                "nodeType": "VariableDeclaration",
                "scope": 52458,
                "src": "330:14:111",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 52450,
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
                "id": 52453,
                "mutability": "mutable",
                "name": "allowFailure",
                "nameLocation": "359:12:111",
                "nodeType": "VariableDeclaration",
                "scope": 52458,
                "src": "354:17:111",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 52452,
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
                "id": 52455,
                "mutability": "mutable",
                "name": "value",
                "nameLocation": "389:5:111",
                "nodeType": "VariableDeclaration",
                "scope": 52458,
                "src": "381:13:111",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 52454,
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
                "id": 52457,
                "mutability": "mutable",
                "name": "callData",
                "nameLocation": "410:8:111",
                "nodeType": "VariableDeclaration",
                "scope": 52458,
                "src": "404:14:111",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 52456,
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
            "scope": 52597,
            "visibility": "public"
          },
          {
            "id": 52463,
            "nodeType": "StructDefinition",
            "src": "431:69:111",
            "nodes": [],
            "canonicalName": "IMulticall3.Result",
            "members": [
              {
                "constant": false,
                "id": 52460,
                "mutability": "mutable",
                "name": "success",
                "nameLocation": "460:7:111",
                "nodeType": "VariableDeclaration",
                "scope": 52463,
                "src": "455:12:111",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 52459,
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
                "id": 52462,
                "mutability": "mutable",
                "name": "returnData",
                "nameLocation": "483:10:111",
                "nodeType": "VariableDeclaration",
                "scope": 52463,
                "src": "477:16:111",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 52461,
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
            "scope": 52597,
            "visibility": "public"
          },
          {
            "id": 52475,
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
              "id": 52468,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52467,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "541:5:111",
                  "nodeType": "VariableDeclaration",
                  "scope": 52475,
                  "src": "525:21:111",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call_$52442_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 52465,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 52464,
                        "name": "Call",
                        "nameLocations": [
                          "525:4:111"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 52442,
                        "src": "525:4:111"
                      },
                      "referencedDeclaration": 52442,
                      "src": "525:4:111",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call_$52442_storage_ptr",
                        "typeString": "struct IMulticall3.Call"
                      }
                    },
                    "id": 52466,
                    "nodeType": "ArrayTypeName",
                    "src": "525:6:111",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call_$52442_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "524:23:111"
            },
            "returnParameters": {
              "id": 52474,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52470,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "606:11:111",
                  "nodeType": "VariableDeclaration",
                  "scope": 52475,
                  "src": "598:19:111",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52469,
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
                  "id": 52473,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "634:10:111",
                  "nodeType": "VariableDeclaration",
                  "scope": 52475,
                  "src": "619:25:111",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 52471,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "619:5:111",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 52472,
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
            "scope": 52597,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 52486,
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
              "id": 52480,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52479,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "689:5:111",
                  "nodeType": "VariableDeclaration",
                  "scope": 52486,
                  "src": "672:22:111",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call3_$52449_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call3[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 52477,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 52476,
                        "name": "Call3",
                        "nameLocations": [
                          "672:5:111"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 52449,
                        "src": "672:5:111"
                      },
                      "referencedDeclaration": 52449,
                      "src": "672:5:111",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call3_$52449_storage_ptr",
                        "typeString": "struct IMulticall3.Call3"
                      }
                    },
                    "id": 52478,
                    "nodeType": "ArrayTypeName",
                    "src": "672:7:111",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call3_$52449_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call3[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "671:24:111"
            },
            "returnParameters": {
              "id": 52485,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52484,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "738:10:111",
                  "nodeType": "VariableDeclaration",
                  "scope": 52486,
                  "src": "722:26:111",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$52463_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 52482,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 52481,
                        "name": "Result",
                        "nameLocations": [
                          "722:6:111"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 52463,
                        "src": "722:6:111"
                      },
                      "referencedDeclaration": 52463,
                      "src": "722:6:111",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$52463_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 52483,
                    "nodeType": "ArrayTypeName",
                    "src": "722:8:111",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$52463_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "721:28:111"
            },
            "scope": 52597,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 52497,
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
              "id": 52491,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52490,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "803:5:111",
                  "nodeType": "VariableDeclaration",
                  "scope": 52497,
                  "src": "781:27:111",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call3Value_$52458_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call3Value[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 52488,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 52487,
                        "name": "Call3Value",
                        "nameLocations": [
                          "781:10:111"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 52458,
                        "src": "781:10:111"
                      },
                      "referencedDeclaration": 52458,
                      "src": "781:10:111",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call3Value_$52458_storage_ptr",
                        "typeString": "struct IMulticall3.Call3Value"
                      }
                    },
                    "id": 52489,
                    "nodeType": "ArrayTypeName",
                    "src": "781:12:111",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call3Value_$52458_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call3Value[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "780:29:111"
            },
            "returnParameters": {
              "id": 52496,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52495,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "852:10:111",
                  "nodeType": "VariableDeclaration",
                  "scope": 52497,
                  "src": "836:26:111",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$52463_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 52493,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 52492,
                        "name": "Result",
                        "nameLocations": [
                          "836:6:111"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 52463,
                        "src": "836:6:111"
                      },
                      "referencedDeclaration": 52463,
                      "src": "836:6:111",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$52463_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 52494,
                    "nodeType": "ArrayTypeName",
                    "src": "836:8:111",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$52463_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "835:28:111"
            },
            "scope": 52597,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 52512,
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
              "id": 52502,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52501,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "913:5:111",
                  "nodeType": "VariableDeclaration",
                  "scope": 52512,
                  "src": "897:21:111",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call_$52442_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 52499,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 52498,
                        "name": "Call",
                        "nameLocations": [
                          "897:4:111"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 52442,
                        "src": "897:4:111"
                      },
                      "referencedDeclaration": 52442,
                      "src": "897:4:111",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call_$52442_storage_ptr",
                        "typeString": "struct IMulticall3.Call"
                      }
                    },
                    "id": 52500,
                    "nodeType": "ArrayTypeName",
                    "src": "897:6:111",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call_$52442_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "896:23:111"
            },
            "returnParameters": {
              "id": 52511,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52504,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "978:11:111",
                  "nodeType": "VariableDeclaration",
                  "scope": 52512,
                  "src": "970:19:111",
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
                  "id": 52506,
                  "mutability": "mutable",
                  "name": "blockHash",
                  "nameLocation": "999:9:111",
                  "nodeType": "VariableDeclaration",
                  "scope": 52512,
                  "src": "991:17:111",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52505,
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
                  "id": 52510,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "1026:10:111",
                  "nodeType": "VariableDeclaration",
                  "scope": 52512,
                  "src": "1010:26:111",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$52463_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 52508,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 52507,
                        "name": "Result",
                        "nameLocations": [
                          "1010:6:111"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 52463,
                        "src": "1010:6:111"
                      },
                      "referencedDeclaration": 52463,
                      "src": "1010:6:111",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$52463_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 52509,
                    "nodeType": "ArrayTypeName",
                    "src": "1010:8:111",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$52463_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "969:68:111"
            },
            "scope": 52597,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 52517,
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
              "id": 52513,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1063:2:111"
            },
            "returnParameters": {
              "id": 52516,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52515,
                  "mutability": "mutable",
                  "name": "basefee",
                  "nameLocation": "1097:7:111",
                  "nodeType": "VariableDeclaration",
                  "scope": 52517,
                  "src": "1089:15:111",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52514,
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
            "scope": 52597,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 52524,
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
              "id": 52520,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52519,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "1142:11:111",
                  "nodeType": "VariableDeclaration",
                  "scope": 52524,
                  "src": "1134:19:111",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52518,
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
              "id": 52523,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52522,
                  "mutability": "mutable",
                  "name": "blockHash",
                  "nameLocation": "1186:9:111",
                  "nodeType": "VariableDeclaration",
                  "scope": 52524,
                  "src": "1178:17:111",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52521,
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
            "scope": 52597,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 52529,
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
              "id": 52525,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1226:2:111"
            },
            "returnParameters": {
              "id": 52528,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52527,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "1260:11:111",
                  "nodeType": "VariableDeclaration",
                  "scope": 52529,
                  "src": "1252:19:111",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52526,
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
            "scope": 52597,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 52534,
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
              "id": 52530,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1298:2:111"
            },
            "returnParameters": {
              "id": 52533,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52532,
                  "mutability": "mutable",
                  "name": "chainid",
                  "nameLocation": "1332:7:111",
                  "nodeType": "VariableDeclaration",
                  "scope": 52534,
                  "src": "1324:15:111",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52531,
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
            "scope": 52597,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 52539,
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
              "id": 52535,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1379:2:111"
            },
            "returnParameters": {
              "id": 52538,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52537,
                  "mutability": "mutable",
                  "name": "coinbase",
                  "nameLocation": "1413:8:111",
                  "nodeType": "VariableDeclaration",
                  "scope": 52539,
                  "src": "1405:16:111",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 52536,
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
            "scope": 52597,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 52544,
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
              "id": 52540,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1463:2:111"
            },
            "returnParameters": {
              "id": 52543,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52542,
                  "mutability": "mutable",
                  "name": "difficulty",
                  "nameLocation": "1497:10:111",
                  "nodeType": "VariableDeclaration",
                  "scope": 52544,
                  "src": "1489:18:111",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52541,
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
            "scope": 52597,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 52549,
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
              "id": 52545,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1547:2:111"
            },
            "returnParameters": {
              "id": 52548,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52547,
                  "mutability": "mutable",
                  "name": "gaslimit",
                  "nameLocation": "1581:8:111",
                  "nodeType": "VariableDeclaration",
                  "scope": 52549,
                  "src": "1573:16:111",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52546,
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
            "scope": 52597,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 52554,
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
              "id": 52550,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1630:2:111"
            },
            "returnParameters": {
              "id": 52553,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52552,
                  "mutability": "mutable",
                  "name": "timestamp",
                  "nameLocation": "1664:9:111",
                  "nodeType": "VariableDeclaration",
                  "scope": 52554,
                  "src": "1656:17:111",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52551,
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
            "scope": 52597,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 52561,
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
              "id": 52557,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52556,
                  "mutability": "mutable",
                  "name": "addr",
                  "nameLocation": "1712:4:111",
                  "nodeType": "VariableDeclaration",
                  "scope": 52561,
                  "src": "1704:12:111",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 52555,
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
              "id": 52560,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52559,
                  "mutability": "mutable",
                  "name": "balance",
                  "nameLocation": "1749:7:111",
                  "nodeType": "VariableDeclaration",
                  "scope": 52561,
                  "src": "1741:15:111",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52558,
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
            "scope": 52597,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 52566,
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
              "id": 52562,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1789:2:111"
            },
            "returnParameters": {
              "id": 52565,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52564,
                  "mutability": "mutable",
                  "name": "blockHash",
                  "nameLocation": "1823:9:111",
                  "nodeType": "VariableDeclaration",
                  "scope": 52566,
                  "src": "1815:17:111",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52563,
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
            "scope": 52597,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 52579,
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
              "id": 52573,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52568,
                  "mutability": "mutable",
                  "name": "requireSuccess",
                  "nameLocation": "1867:14:111",
                  "nodeType": "VariableDeclaration",
                  "scope": 52579,
                  "src": "1862:19:111",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 52567,
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
                  "id": 52572,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "1899:5:111",
                  "nodeType": "VariableDeclaration",
                  "scope": 52579,
                  "src": "1883:21:111",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call_$52442_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 52570,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 52569,
                        "name": "Call",
                        "nameLocations": [
                          "1883:4:111"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 52442,
                        "src": "1883:4:111"
                      },
                      "referencedDeclaration": 52442,
                      "src": "1883:4:111",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call_$52442_storage_ptr",
                        "typeString": "struct IMulticall3.Call"
                      }
                    },
                    "id": 52571,
                    "nodeType": "ArrayTypeName",
                    "src": "1883:6:111",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call_$52442_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1861:44:111"
            },
            "returnParameters": {
              "id": 52578,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52577,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "1972:10:111",
                  "nodeType": "VariableDeclaration",
                  "scope": 52579,
                  "src": "1956:26:111",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$52463_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 52575,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 52574,
                        "name": "Result",
                        "nameLocations": [
                          "1956:6:111"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 52463,
                        "src": "1956:6:111"
                      },
                      "referencedDeclaration": 52463,
                      "src": "1956:6:111",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$52463_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 52576,
                    "nodeType": "ArrayTypeName",
                    "src": "1956:8:111",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$52463_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1955:28:111"
            },
            "scope": 52597,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 52596,
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
              "id": 52586,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52581,
                  "mutability": "mutable",
                  "name": "requireSuccess",
                  "nameLocation": "2025:14:111",
                  "nodeType": "VariableDeclaration",
                  "scope": 52596,
                  "src": "2020:19:111",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 52580,
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
                  "id": 52585,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "2057:5:111",
                  "nodeType": "VariableDeclaration",
                  "scope": 52596,
                  "src": "2041:21:111",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call_$52442_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 52583,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 52582,
                        "name": "Call",
                        "nameLocations": [
                          "2041:4:111"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 52442,
                        "src": "2041:4:111"
                      },
                      "referencedDeclaration": 52442,
                      "src": "2041:4:111",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call_$52442_storage_ptr",
                        "typeString": "struct IMulticall3.Call"
                      }
                    },
                    "id": 52584,
                    "nodeType": "ArrayTypeName",
                    "src": "2041:6:111",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call_$52442_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2019:44:111"
            },
            "returnParameters": {
              "id": 52595,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52588,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "2122:11:111",
                  "nodeType": "VariableDeclaration",
                  "scope": 52596,
                  "src": "2114:19:111",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52587,
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
                  "id": 52590,
                  "mutability": "mutable",
                  "name": "blockHash",
                  "nameLocation": "2143:9:111",
                  "nodeType": "VariableDeclaration",
                  "scope": 52596,
                  "src": "2135:17:111",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52589,
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
                  "id": 52594,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "2170:10:111",
                  "nodeType": "VariableDeclaration",
                  "scope": 52596,
                  "src": "2154:26:111",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$52463_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 52592,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 52591,
                        "name": "Result",
                        "nameLocations": [
                          "2154:6:111"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 52463,
                        "src": "2154:6:111"
                      },
                      "referencedDeclaration": 52463,
                      "src": "2154:6:111",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$52463_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 52593,
                    "nodeType": "ArrayTypeName",
                    "src": "2154:8:111",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$52463_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2113:68:111"
            },
            "scope": 52597,
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
          52597
        ],
        "name": "IMulticall3",
        "nameLocation": "110:11:111",
        "scope": 52598,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 111
} as const;
