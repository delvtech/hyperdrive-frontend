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
      "inputs": [],
      "name": "factory",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
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
      "inputs": [],
      "name": "linkerCodeHash",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
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
    "factory()": "c45a0155",
    "isApprovedForAll(address,address)": "e985e9c5",
    "linkerCodeHash()": "c905a4b5",
    "name(uint256)": "00ad800c",
    "nonces(address)": "7ecebe00",
    "perTokenApprovals(uint256,address,address)": "21ff32a9",
    "symbol(uint256)": "4e41a1fb",
    "totalSupply(uint256)": "bd85b039"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"factory\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"linkerCodeHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IMultiTokenRead.sol\":\"IMultiTokenRead\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]}},\"version\":1}",
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
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "factory",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
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
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "linkerCodeHash",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
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
        "contracts/src/interfaces/IMultiTokenRead.sol": "IMultiTokenRead"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        "keccak256": "0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05",
        "urls": [
          "bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939",
          "dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/interfaces/IMultiTokenRead.sol",
    "id": 7546,
    "exportedSymbols": {
      "IMultiTokenRead": [
        7545
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:827:28",
    "nodes": [
      {
        "id": 7477,
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
        "id": 7545,
        "nodeType": "ContractDefinition",
        "src": "64:801:28",
        "nodes": [
          {
            "id": 7484,
            "nodeType": "FunctionDefinition",
            "src": "96:64:28",
            "nodes": [],
            "functionSelector": "00ad800c",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "name",
            "nameLocation": "105:4:28",
            "parameters": {
              "id": 7480,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7479,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "118:2:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 7484,
                  "src": "110:10:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7478,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "110:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "109:12:28"
            },
            "returnParameters": {
              "id": 7483,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7482,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7484,
                  "src": "145:13:28",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7481,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "145:6:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "144:15:28"
            },
            "scope": 7545,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7491,
            "nodeType": "FunctionDefinition",
            "src": "166:66:28",
            "nodes": [],
            "functionSelector": "4e41a1fb",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "symbol",
            "nameLocation": "175:6:28",
            "parameters": {
              "id": 7487,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7486,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "190:2:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 7491,
                  "src": "182:10:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7485,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "182:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "181:12:28"
            },
            "returnParameters": {
              "id": 7490,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7489,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7491,
                  "src": "217:13:28",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7488,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "217:6:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "216:15:28"
            },
            "scope": 7545,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7498,
            "nodeType": "FunctionDefinition",
            "src": "238:65:28",
            "nodes": [],
            "functionSelector": "bd85b039",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "totalSupply",
            "nameLocation": "247:11:28",
            "parameters": {
              "id": 7494,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7493,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "267:2:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 7498,
                  "src": "259:10:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7492,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "259:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "258:12:28"
            },
            "returnParameters": {
              "id": 7497,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7496,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7498,
                  "src": "294:7:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7495,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "294:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "293:9:28"
            },
            "scope": 7545,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7503,
            "nodeType": "FunctionDefinition",
            "src": "309:51:28",
            "nodes": [],
            "functionSelector": "c45a0155",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "factory",
            "nameLocation": "318:7:28",
            "parameters": {
              "id": 7499,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "325:2:28"
            },
            "returnParameters": {
              "id": 7502,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7501,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7503,
                  "src": "351:7:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7500,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "351:7:28",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "350:9:28"
            },
            "scope": 7545,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7508,
            "nodeType": "FunctionDefinition",
            "src": "366:58:28",
            "nodes": [],
            "functionSelector": "c905a4b5",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "linkerCodeHash",
            "nameLocation": "375:14:28",
            "parameters": {
              "id": 7504,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "389:2:28"
            },
            "returnParameters": {
              "id": 7507,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7506,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7508,
                  "src": "415:7:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 7505,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "415:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "414:9:28"
            },
            "scope": 7545,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7517,
            "nodeType": "FunctionDefinition",
            "src": "430:109:28",
            "nodes": [],
            "functionSelector": "e985e9c5",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "isApprovedForAll",
            "nameLocation": "439:16:28",
            "parameters": {
              "id": 7513,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7510,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "473:5:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 7517,
                  "src": "465:13:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7509,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "465:7:28",
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
                  "id": 7512,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "496:7:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 7517,
                  "src": "488:15:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7511,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "488:7:28",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "455:54:28"
            },
            "returnParameters": {
              "id": 7516,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7515,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7517,
                  "src": "533:4:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7514,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "533:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "532:6:28"
            },
            "scope": 7545,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7528,
            "nodeType": "FunctionDefinition",
            "src": "545:138:28",
            "nodes": [],
            "functionSelector": "21ff32a9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "perTokenApprovals",
            "nameLocation": "554:17:28",
            "parameters": {
              "id": 7524,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7519,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "589:7:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 7528,
                  "src": "581:15:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7518,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "581:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7521,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "614:5:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 7528,
                  "src": "606:13:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7520,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "606:7:28",
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
                  "id": 7523,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "637:7:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 7528,
                  "src": "629:15:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7522,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "629:7:28",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "571:79:28"
            },
            "returnParameters": {
              "id": 7527,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7526,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7528,
                  "src": "674:7:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7525,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "674:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "673:9:28"
            },
            "scope": 7545,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7537,
            "nodeType": "FunctionDefinition",
            "src": "689:105:28",
            "nodes": [],
            "functionSelector": "3656eec2",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nameLocation": "698:9:28",
            "parameters": {
              "id": 7533,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7530,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "725:7:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 7537,
                  "src": "717:15:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7529,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "717:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7532,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "750:5:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 7537,
                  "src": "742:13:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7531,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "742:7:28",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "707:54:28"
            },
            "returnParameters": {
              "id": 7536,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7535,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7537,
                  "src": "785:7:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7534,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "785:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "784:9:28"
            },
            "scope": 7545,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7544,
            "nodeType": "FunctionDefinition",
            "src": "800:63:28",
            "nodes": [],
            "functionSelector": "7ecebe00",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "nonces",
            "nameLocation": "809:6:28",
            "parameters": {
              "id": 7540,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7539,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "824:5:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 7544,
                  "src": "816:13:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7538,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "816:7:28",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "815:15:28"
            },
            "returnParameters": {
              "id": 7543,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7542,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7544,
                  "src": "854:7:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7541,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "854:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "853:9:28"
            },
            "scope": 7545,
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
          7545
        ],
        "name": "IMultiTokenRead",
        "nameLocation": "74:15:28",
        "scope": 7546,
        "usedErrors": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 28
}