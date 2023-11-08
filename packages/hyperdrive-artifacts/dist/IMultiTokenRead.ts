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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"factory\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"linkerCodeHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IMultiTokenRead.sol\":\"IMultiTokenRead\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]}},\"version\":1}",
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
        "openzeppelin/=lib/openzeppelin-contracts/contracts/",
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
    "id": 7869,
    "exportedSymbols": {
      "IMultiTokenRead": [
        7868
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:827:29",
    "nodes": [
      {
        "id": 7800,
        "nodeType": "PragmaDirective",
        "src": "39:23:29",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 7868,
        "nodeType": "ContractDefinition",
        "src": "64:801:29",
        "nodes": [
          {
            "id": 7807,
            "nodeType": "FunctionDefinition",
            "src": "96:64:29",
            "nodes": [],
            "functionSelector": "00ad800c",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "name",
            "nameLocation": "105:4:29",
            "parameters": {
              "id": 7803,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7802,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "118:2:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7807,
                  "src": "110:10:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7801,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "110:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "109:12:29"
            },
            "returnParameters": {
              "id": 7806,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7805,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7807,
                  "src": "145:13:29",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7804,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "145:6:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "144:15:29"
            },
            "scope": 7868,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7814,
            "nodeType": "FunctionDefinition",
            "src": "166:66:29",
            "nodes": [],
            "functionSelector": "4e41a1fb",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "symbol",
            "nameLocation": "175:6:29",
            "parameters": {
              "id": 7810,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7809,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "190:2:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7814,
                  "src": "182:10:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7808,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "182:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "181:12:29"
            },
            "returnParameters": {
              "id": 7813,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7812,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7814,
                  "src": "217:13:29",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7811,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "217:6:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "216:15:29"
            },
            "scope": 7868,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7821,
            "nodeType": "FunctionDefinition",
            "src": "238:65:29",
            "nodes": [],
            "functionSelector": "bd85b039",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "totalSupply",
            "nameLocation": "247:11:29",
            "parameters": {
              "id": 7817,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7816,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "267:2:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7821,
                  "src": "259:10:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7815,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "259:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "258:12:29"
            },
            "returnParameters": {
              "id": 7820,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7819,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7821,
                  "src": "294:7:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7818,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "294:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "293:9:29"
            },
            "scope": 7868,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7826,
            "nodeType": "FunctionDefinition",
            "src": "309:51:29",
            "nodes": [],
            "functionSelector": "c45a0155",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "factory",
            "nameLocation": "318:7:29",
            "parameters": {
              "id": 7822,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "325:2:29"
            },
            "returnParameters": {
              "id": 7825,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7824,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7826,
                  "src": "351:7:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7823,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "351:7:29",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "350:9:29"
            },
            "scope": 7868,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7831,
            "nodeType": "FunctionDefinition",
            "src": "366:58:29",
            "nodes": [],
            "functionSelector": "c905a4b5",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "linkerCodeHash",
            "nameLocation": "375:14:29",
            "parameters": {
              "id": 7827,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "389:2:29"
            },
            "returnParameters": {
              "id": 7830,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7829,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7831,
                  "src": "415:7:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 7828,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "415:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "414:9:29"
            },
            "scope": 7868,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7840,
            "nodeType": "FunctionDefinition",
            "src": "430:109:29",
            "nodes": [],
            "functionSelector": "e985e9c5",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "isApprovedForAll",
            "nameLocation": "439:16:29",
            "parameters": {
              "id": 7836,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7833,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "473:5:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7840,
                  "src": "465:13:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7832,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "465:7:29",
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
                  "id": 7835,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "496:7:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7840,
                  "src": "488:15:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7834,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "488:7:29",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "455:54:29"
            },
            "returnParameters": {
              "id": 7839,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7838,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7840,
                  "src": "533:4:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7837,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "533:4:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "532:6:29"
            },
            "scope": 7868,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7851,
            "nodeType": "FunctionDefinition",
            "src": "545:138:29",
            "nodes": [],
            "functionSelector": "21ff32a9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "perTokenApprovals",
            "nameLocation": "554:17:29",
            "parameters": {
              "id": 7847,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7842,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "589:7:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7851,
                  "src": "581:15:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7841,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "581:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7844,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "614:5:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7851,
                  "src": "606:13:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7843,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "606:7:29",
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
                  "id": 7846,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "637:7:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7851,
                  "src": "629:15:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7845,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "629:7:29",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "571:79:29"
            },
            "returnParameters": {
              "id": 7850,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7849,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7851,
                  "src": "674:7:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7848,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "674:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "673:9:29"
            },
            "scope": 7868,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7860,
            "nodeType": "FunctionDefinition",
            "src": "689:105:29",
            "nodes": [],
            "functionSelector": "3656eec2",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nameLocation": "698:9:29",
            "parameters": {
              "id": 7856,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7853,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "725:7:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7860,
                  "src": "717:15:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7852,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "717:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7855,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "750:5:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7860,
                  "src": "742:13:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7854,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "742:7:29",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "707:54:29"
            },
            "returnParameters": {
              "id": 7859,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7858,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7860,
                  "src": "785:7:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7857,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "785:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "784:9:29"
            },
            "scope": 7868,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7867,
            "nodeType": "FunctionDefinition",
            "src": "800:63:29",
            "nodes": [],
            "functionSelector": "7ecebe00",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "nonces",
            "nameLocation": "809:6:29",
            "parameters": {
              "id": 7863,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7862,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "824:5:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 7867,
                  "src": "816:13:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7861,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "816:7:29",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "815:15:29"
            },
            "returnParameters": {
              "id": 7866,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7865,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7867,
                  "src": "854:7:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7864,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "854:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "853:9:29"
            },
            "scope": 7868,
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
          7868
        ],
        "name": "IMultiTokenRead",
        "nameLocation": "74:15:29",
        "scope": 7869,
        "usedErrors": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 29
} as const;
