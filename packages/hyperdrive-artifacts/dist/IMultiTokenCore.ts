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
    "id": 4253,
    "exportedSymbols": {
      "IMultiTokenCore": [
        4252
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:1044:28",
    "nodes": [
      {
        "id": 4170,
        "nodeType": "PragmaDirective",
        "src": "39:23:28",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 4252,
        "nodeType": "ContractDefinition",
        "src": "64:1018:28",
        "nodes": [
          {
            "id": 4181,
            "nodeType": "FunctionDefinition",
            "src": "96:128:28",
            "nodes": [],
            "functionSelector": "1c0f12b6",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transferFrom",
            "nameLocation": "105:12:28",
            "parameters": {
              "id": 4179,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4172,
                  "mutability": "mutable",
                  "name": "tokenID",
                  "nameLocation": "135:7:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4181,
                  "src": "127:15:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4171,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "127:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4174,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "160:4:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4181,
                  "src": "152:12:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4173,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "152:7:28",
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
                  "id": 4176,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "182:2:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4181,
                  "src": "174:10:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4175,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "174:7:28",
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
                  "id": 4178,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "202:6:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4181,
                  "src": "194:14:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4177,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "194:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "117:97:28"
            },
            "returnParameters": {
              "id": 4180,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "223:0:28"
            },
            "scope": 4252,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 4194,
            "nodeType": "FunctionDefinition",
            "src": "230:158:28",
            "nodes": [],
            "functionSelector": "e44808bc",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transferFromBridge",
            "nameLocation": "239:18:28",
            "parameters": {
              "id": 4192,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4183,
                  "mutability": "mutable",
                  "name": "tokenID",
                  "nameLocation": "275:7:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4194,
                  "src": "267:15:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4182,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "267:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4185,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "300:4:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4194,
                  "src": "292:12:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4184,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "292:7:28",
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
                  "id": 4187,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "322:2:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4194,
                  "src": "314:10:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4186,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "314:7:28",
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
                  "id": 4189,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "342:6:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4194,
                  "src": "334:14:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4188,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "334:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4191,
                  "mutability": "mutable",
                  "name": "caller",
                  "nameLocation": "366:6:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4194,
                  "src": "358:14:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4190,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "358:7:28",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "257:121:28"
            },
            "returnParameters": {
              "id": 4193,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "387:0:28"
            },
            "scope": 4252,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 4203,
            "nodeType": "FunctionDefinition",
            "src": "394:111:28",
            "nodes": [],
            "functionSelector": "9cd241af",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setApproval",
            "nameLocation": "403:11:28",
            "parameters": {
              "id": 4201,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4196,
                  "mutability": "mutable",
                  "name": "tokenID",
                  "nameLocation": "432:7:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4203,
                  "src": "424:15:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4195,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "424:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4198,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "457:8:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4203,
                  "src": "449:16:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4197,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "449:7:28",
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
                  "id": 4200,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "483:6:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4203,
                  "src": "475:14:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4199,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "475:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "414:81:28"
            },
            "returnParameters": {
              "id": 4202,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "504:0:28"
            },
            "scope": 4252,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 4214,
            "nodeType": "FunctionDefinition",
            "src": "511:141:28",
            "nodes": [],
            "functionSelector": "4ed2d6ac",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setApprovalBridge",
            "nameLocation": "520:17:28",
            "parameters": {
              "id": 4212,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4205,
                  "mutability": "mutable",
                  "name": "tokenID",
                  "nameLocation": "555:7:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4214,
                  "src": "547:15:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4204,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "547:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4207,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "580:8:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4214,
                  "src": "572:16:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4206,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "572:7:28",
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
                  "id": 4209,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "606:6:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4214,
                  "src": "598:14:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4208,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "598:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4211,
                  "mutability": "mutable",
                  "name": "caller",
                  "nameLocation": "630:6:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4214,
                  "src": "622:14:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4210,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "622:7:28",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "537:105:28"
            },
            "returnParameters": {
              "id": 4213,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "651:0:28"
            },
            "scope": 4252,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 4221,
            "nodeType": "FunctionDefinition",
            "src": "658:69:28",
            "nodes": [],
            "functionSelector": "a22cb465",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setApprovalForAll",
            "nameLocation": "667:17:28",
            "parameters": {
              "id": 4219,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4216,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "693:8:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4221,
                  "src": "685:16:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4215,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "685:7:28",
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
                  "id": 4218,
                  "mutability": "mutable",
                  "name": "approved",
                  "nameLocation": "708:8:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4221,
                  "src": "703:13:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 4217,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "703:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "684:33:28"
            },
            "returnParameters": {
              "id": 4220,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "726:0:28"
            },
            "scope": 4252,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 4234,
            "nodeType": "FunctionDefinition",
            "src": "733:151:28",
            "nodes": [],
            "functionSelector": "17fad7fc",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "batchTransferFrom",
            "nameLocation": "742:17:28",
            "parameters": {
              "id": 4232,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4223,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "777:4:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4234,
                  "src": "769:12:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4222,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "769:7:28",
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
                  "id": 4225,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "799:2:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4234,
                  "src": "791:10:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4224,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "791:7:28",
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
                  "id": 4228,
                  "mutability": "mutable",
                  "name": "ids",
                  "nameLocation": "830:3:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4234,
                  "src": "811:22:28",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 4226,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "811:7:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 4227,
                    "nodeType": "ArrayTypeName",
                    "src": "811:9:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4231,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "862:6:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4234,
                  "src": "843:25:28",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 4229,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "843:7:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 4230,
                    "nodeType": "ArrayTypeName",
                    "src": "843:9:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "759:115:28"
            },
            "returnParameters": {
              "id": 4233,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "883:0:28"
            },
            "scope": 4252,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 4251,
            "nodeType": "FunctionDefinition",
            "src": "890:190:28",
            "nodes": [],
            "functionSelector": "9032c726",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "permitForAll",
            "nameLocation": "899:12:28",
            "parameters": {
              "id": 4249,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4236,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "929:5:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4251,
                  "src": "921:13:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4235,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "921:7:28",
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
                  "id": 4238,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "952:7:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4251,
                  "src": "944:15:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4237,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "944:7:28",
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
                  "id": 4240,
                  "mutability": "mutable",
                  "name": "_approved",
                  "nameLocation": "974:9:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4251,
                  "src": "969:14:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 4239,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "969:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4242,
                  "mutability": "mutable",
                  "name": "deadline",
                  "nameLocation": "1001:8:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4251,
                  "src": "993:16:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4241,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "993:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4244,
                  "mutability": "mutable",
                  "name": "v",
                  "nameLocation": "1025:1:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4251,
                  "src": "1019:7:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 4243,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1019:5:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4246,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "1044:1:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4251,
                  "src": "1036:9:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 4245,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1036:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4248,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "1063:1:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4251,
                  "src": "1055:9:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 4247,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1055:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "911:159:28"
            },
            "returnParameters": {
              "id": 4250,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1079:0:28"
            },
            "scope": 4252,
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
          4252
        ],
        "name": "IMultiTokenCore",
        "nameLocation": "74:15:28",
        "scope": 4253,
        "usedErrors": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 28
} as const;
