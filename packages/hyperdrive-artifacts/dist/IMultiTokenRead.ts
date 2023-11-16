export const IMultiTokenRead = 
{
  "abi": [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
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
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "nonces",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
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
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "perTokenApprovals",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
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
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
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
    "balanceOf(uint256,address)": "3656eec2",
    "isApprovedForAll(address,address)": "e985e9c5",
    "name(uint256)": "00ad800c",
    "nonces(address)": "7ecebe00",
    "perTokenApprovals(uint256,address,address)": "21ff32a9",
    "symbol(uint256)": "4e41a1fb",
    "totalSupply(uint256)": "bd85b039"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IMultiTokenRead.sol\":\"IMultiTokenRead\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6\",\"dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW\"]}},\"version\":1}",
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
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
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
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isApprovedForAll",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "nonces",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "perTokenApprovals",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
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
        "contracts/src/interfaces/IMultiTokenRead.sol": "IMultiTokenRead"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        "keccak256": "0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4",
        "urls": [
          "bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6",
          "dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/interfaces/IMultiTokenRead.sol",
    "id": 4326,
    "exportedSymbols": {
      "IMultiTokenRead": [
        4325
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:706:30",
    "nodes": [
      {
        "id": 4267,
        "nodeType": "PragmaDirective",
        "src": "39:23:30",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 4325,
        "nodeType": "ContractDefinition",
        "src": "64:680:30",
        "nodes": [
          {
            "id": 4274,
            "nodeType": "FunctionDefinition",
            "src": "96:64:30",
            "nodes": [],
            "functionSelector": "00ad800c",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "name",
            "nameLocation": "105:4:30",
            "parameters": {
              "id": 4270,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4269,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "118:2:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 4274,
                  "src": "110:10:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4268,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "110:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "109:12:30"
            },
            "returnParameters": {
              "id": 4273,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4272,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 4274,
                  "src": "145:13:30",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 4271,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "145:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "144:15:30"
            },
            "scope": 4325,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 4281,
            "nodeType": "FunctionDefinition",
            "src": "166:66:30",
            "nodes": [],
            "functionSelector": "4e41a1fb",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "symbol",
            "nameLocation": "175:6:30",
            "parameters": {
              "id": 4277,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4276,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "190:2:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 4281,
                  "src": "182:10:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4275,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "182:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "181:12:30"
            },
            "returnParameters": {
              "id": 4280,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4279,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 4281,
                  "src": "217:13:30",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 4278,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "217:6:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "216:15:30"
            },
            "scope": 4325,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 4288,
            "nodeType": "FunctionDefinition",
            "src": "238:65:30",
            "nodes": [],
            "functionSelector": "bd85b039",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "totalSupply",
            "nameLocation": "247:11:30",
            "parameters": {
              "id": 4284,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4283,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "267:2:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 4288,
                  "src": "259:10:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4282,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "259:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "258:12:30"
            },
            "returnParameters": {
              "id": 4287,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4286,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 4288,
                  "src": "294:7:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4285,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "294:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "293:9:30"
            },
            "scope": 4325,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 4297,
            "nodeType": "FunctionDefinition",
            "src": "309:109:30",
            "nodes": [],
            "functionSelector": "e985e9c5",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "isApprovedForAll",
            "nameLocation": "318:16:30",
            "parameters": {
              "id": 4293,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4290,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "352:5:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 4297,
                  "src": "344:13:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4289,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "344:7:30",
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
                  "id": 4292,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "375:7:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 4297,
                  "src": "367:15:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4291,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "367:7:30",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "334:54:30"
            },
            "returnParameters": {
              "id": 4296,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4295,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 4297,
                  "src": "412:4:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 4294,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "412:4:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "411:6:30"
            },
            "scope": 4325,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 4308,
            "nodeType": "FunctionDefinition",
            "src": "424:138:30",
            "nodes": [],
            "functionSelector": "21ff32a9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "perTokenApprovals",
            "nameLocation": "433:17:30",
            "parameters": {
              "id": 4304,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4299,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "468:7:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 4308,
                  "src": "460:15:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4298,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "460:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4301,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "493:5:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 4308,
                  "src": "485:13:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4300,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "485:7:30",
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
                  "id": 4303,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "516:7:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 4308,
                  "src": "508:15:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4302,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "508:7:30",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "450:79:30"
            },
            "returnParameters": {
              "id": 4307,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4306,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 4308,
                  "src": "553:7:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4305,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "553:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "552:9:30"
            },
            "scope": 4325,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 4317,
            "nodeType": "FunctionDefinition",
            "src": "568:105:30",
            "nodes": [],
            "functionSelector": "3656eec2",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nameLocation": "577:9:30",
            "parameters": {
              "id": 4313,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4310,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "604:7:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 4317,
                  "src": "596:15:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4309,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "596:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4312,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "629:5:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 4317,
                  "src": "621:13:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4311,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "621:7:30",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "586:54:30"
            },
            "returnParameters": {
              "id": 4316,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4315,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 4317,
                  "src": "664:7:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4314,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "664:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "663:9:30"
            },
            "scope": 4325,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 4324,
            "nodeType": "FunctionDefinition",
            "src": "679:63:30",
            "nodes": [],
            "functionSelector": "7ecebe00",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "nonces",
            "nameLocation": "688:6:30",
            "parameters": {
              "id": 4320,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4319,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "703:5:30",
                  "nodeType": "VariableDeclaration",
                  "scope": 4324,
                  "src": "695:13:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4318,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "695:7:30",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "694:15:30"
            },
            "returnParameters": {
              "id": 4323,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4322,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 4324,
                  "src": "733:7:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4321,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "733:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "732:9:30"
            },
            "scope": 4325,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IMultiTokenRead",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          4325
        ],
        "name": "IMultiTokenRead",
        "nameLocation": "74:15:30",
        "scope": 4326,
        "usedErrors": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 30
} as const;
