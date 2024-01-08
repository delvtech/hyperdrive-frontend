export const IMultiTokenCore = 
{
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        }
      ],
      "name": "batchTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_approved",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "permitForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "setApproval",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "caller",
          "type": "address"
        }
      ],
      "name": "setApprovalBridge",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "caller",
          "type": "address"
        }
      ],
      "name": "transferFromBridge",
      "outputs": [],
      "stateMutability": "nonpayable",
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
    "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
    "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": "9032c726",
    "setApproval(uint256,address,uint256)": "9cd241af",
    "setApprovalBridge(uint256,address,uint256,address)": "4ed2d6ac",
    "setApprovalForAll(address,bool)": "a22cb465",
    "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
    "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IMultiTokenCore.sol\":\"IMultiTokenCore\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8\",\"dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE\"]}},\"version\":1}",
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
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256[]",
              "name": "ids",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "values",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "batchTransferFrom"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_approved",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "permitForAll"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setApproval"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "caller",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setApprovalBridge"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setApprovalForAll"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferFrom"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "caller",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferFromBridge"
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
        "contracts/src/interfaces/IMultiTokenCore.sol": "IMultiTokenCore"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/interfaces/IMultiTokenCore.sol": {
        "keccak256": "0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d",
        "urls": [
          "bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8",
          "dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/interfaces/IMultiTokenCore.sol",
    "id": 5206,
    "exportedSymbols": {
      "IMultiTokenCore": [
        5205
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:1044:38",
    "nodes": [
      {
        "id": 5123,
        "nodeType": "PragmaDirective",
        "src": "39:23:38",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 5205,
        "nodeType": "ContractDefinition",
        "src": "64:1018:38",
        "nodes": [
          {
            "id": 5134,
            "nodeType": "FunctionDefinition",
            "src": "96:128:38",
            "nodes": [],
            "functionSelector": "1c0f12b6",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transferFrom",
            "nameLocation": "105:12:38",
            "parameters": {
              "id": 5132,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5125,
                  "mutability": "mutable",
                  "name": "tokenID",
                  "nameLocation": "135:7:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 5134,
                  "src": "127:15:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5124,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "127:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5127,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "160:4:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 5134,
                  "src": "152:12:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5126,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "152:7:38",
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
                  "id": 5129,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "182:2:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 5134,
                  "src": "174:10:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5128,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "174:7:38",
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
                  "id": 5131,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "202:6:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 5134,
                  "src": "194:14:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5130,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "194:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "117:97:38"
            },
            "returnParameters": {
              "id": 5133,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "223:0:38"
            },
            "scope": 5205,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 5147,
            "nodeType": "FunctionDefinition",
            "src": "230:158:38",
            "nodes": [],
            "functionSelector": "e44808bc",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transferFromBridge",
            "nameLocation": "239:18:38",
            "parameters": {
              "id": 5145,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5136,
                  "mutability": "mutable",
                  "name": "tokenID",
                  "nameLocation": "275:7:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 5147,
                  "src": "267:15:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5135,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "267:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5138,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "300:4:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 5147,
                  "src": "292:12:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5137,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "292:7:38",
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
                  "id": 5140,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "322:2:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 5147,
                  "src": "314:10:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5139,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "314:7:38",
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
                  "id": 5142,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "342:6:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 5147,
                  "src": "334:14:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5141,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "334:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5144,
                  "mutability": "mutable",
                  "name": "caller",
                  "nameLocation": "366:6:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 5147,
                  "src": "358:14:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5143,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "358:7:38",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "257:121:38"
            },
            "returnParameters": {
              "id": 5146,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "387:0:38"
            },
            "scope": 5205,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 5156,
            "nodeType": "FunctionDefinition",
            "src": "394:111:38",
            "nodes": [],
            "functionSelector": "9cd241af",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setApproval",
            "nameLocation": "403:11:38",
            "parameters": {
              "id": 5154,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5149,
                  "mutability": "mutable",
                  "name": "tokenID",
                  "nameLocation": "432:7:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 5156,
                  "src": "424:15:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5148,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "424:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5151,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "457:8:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 5156,
                  "src": "449:16:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5150,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "449:7:38",
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
                  "id": 5153,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "483:6:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 5156,
                  "src": "475:14:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5152,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "475:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "414:81:38"
            },
            "returnParameters": {
              "id": 5155,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "504:0:38"
            },
            "scope": 5205,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 5167,
            "nodeType": "FunctionDefinition",
            "src": "511:141:38",
            "nodes": [],
            "functionSelector": "4ed2d6ac",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setApprovalBridge",
            "nameLocation": "520:17:38",
            "parameters": {
              "id": 5165,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5158,
                  "mutability": "mutable",
                  "name": "tokenID",
                  "nameLocation": "555:7:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 5167,
                  "src": "547:15:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5157,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "547:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5160,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "580:8:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 5167,
                  "src": "572:16:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5159,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "572:7:38",
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
                  "id": 5162,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "606:6:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 5167,
                  "src": "598:14:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5161,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "598:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5164,
                  "mutability": "mutable",
                  "name": "caller",
                  "nameLocation": "630:6:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 5167,
                  "src": "622:14:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5163,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "622:7:38",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "537:105:38"
            },
            "returnParameters": {
              "id": 5166,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "651:0:38"
            },
            "scope": 5205,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 5174,
            "nodeType": "FunctionDefinition",
            "src": "658:69:38",
            "nodes": [],
            "functionSelector": "a22cb465",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setApprovalForAll",
            "nameLocation": "667:17:38",
            "parameters": {
              "id": 5172,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5169,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "693:8:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 5174,
                  "src": "685:16:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5168,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "685:7:38",
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
                  "id": 5171,
                  "mutability": "mutable",
                  "name": "approved",
                  "nameLocation": "708:8:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 5174,
                  "src": "703:13:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5170,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "703:4:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "684:33:38"
            },
            "returnParameters": {
              "id": 5173,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "726:0:38"
            },
            "scope": 5205,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 5187,
            "nodeType": "FunctionDefinition",
            "src": "733:151:38",
            "nodes": [],
            "functionSelector": "17fad7fc",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "batchTransferFrom",
            "nameLocation": "742:17:38",
            "parameters": {
              "id": 5185,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5176,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "777:4:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 5187,
                  "src": "769:12:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5175,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "769:7:38",
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
                  "id": 5178,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "799:2:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 5187,
                  "src": "791:10:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5177,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "791:7:38",
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
                  "id": 5181,
                  "mutability": "mutable",
                  "name": "ids",
                  "nameLocation": "830:3:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 5187,
                  "src": "811:22:38",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 5179,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "811:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 5180,
                    "nodeType": "ArrayTypeName",
                    "src": "811:9:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5184,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "862:6:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 5187,
                  "src": "843:25:38",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 5182,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "843:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 5183,
                    "nodeType": "ArrayTypeName",
                    "src": "843:9:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "759:115:38"
            },
            "returnParameters": {
              "id": 5186,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "883:0:38"
            },
            "scope": 5205,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 5204,
            "nodeType": "FunctionDefinition",
            "src": "890:190:38",
            "nodes": [],
            "functionSelector": "9032c726",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "permitForAll",
            "nameLocation": "899:12:38",
            "parameters": {
              "id": 5202,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5189,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "929:5:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 5204,
                  "src": "921:13:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5188,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "921:7:38",
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
                  "id": 5191,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "952:7:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 5204,
                  "src": "944:15:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5190,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "944:7:38",
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
                  "id": 5193,
                  "mutability": "mutable",
                  "name": "_approved",
                  "nameLocation": "974:9:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 5204,
                  "src": "969:14:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5192,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "969:4:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5195,
                  "mutability": "mutable",
                  "name": "deadline",
                  "nameLocation": "1001:8:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 5204,
                  "src": "993:16:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5194,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "993:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5197,
                  "mutability": "mutable",
                  "name": "v",
                  "nameLocation": "1025:1:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 5204,
                  "src": "1019:7:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 5196,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1019:5:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5199,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "1044:1:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 5204,
                  "src": "1036:9:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5198,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1036:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5201,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "1063:1:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 5204,
                  "src": "1055:9:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5200,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1055:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "911:159:38"
            },
            "returnParameters": {
              "id": 5203,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1079:0:38"
            },
            "scope": 5205,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IMultiTokenCore",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          5205
        ],
        "name": "IMultiTokenCore",
        "nameLocation": "74:15:38",
        "scope": 5206,
        "usedErrors": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 38
} as const;
