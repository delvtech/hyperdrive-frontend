export const Pausable = 
{
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Paused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Unpaused",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
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
    "paused()": "5c975abb"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Paused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Unpaused\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"paused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Contract module which allows children to implement an emergency stop mechanism that can be triggered by an authorized account. This module is used through inheritance. It will make available the modifiers `whenNotPaused` and `whenPaused`, which can be applied to the functions of your contract. Note that they will not be pausable by simply including this module, only once the modifiers are put in place.\",\"events\":{\"Paused(address)\":{\"details\":\"Emitted when the pause is triggered by `account`.\"},\"Unpaused(address)\":{\"details\":\"Emitted when the pause is lifted by `account`.\"}},\"kind\":\"dev\",\"methods\":{\"constructor\":{\"details\":\"Initializes the contract in unpaused state.\"},\"paused()\":{\"details\":\"Returns true if the contract is paused, and false otherwise.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/security/Pausable.sol\":\"Pausable\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/security/Pausable.sol\":{\"keccak256\":\"0x0849d93b16c9940beb286a7864ed02724b248b93e0d80ef6355af5ef15c64773\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ddabb16009cd17eaca3143feadf450ac13e72919ebe2ca50e00f61cb78bc004\",\"dweb:/ipfs/QmSPwPxX7d6TTWakN5jy5wsaGkS1y9TW8fuhGSraMkLk2B\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]}},\"version\":1}",
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
              "name": "account",
              "type": "address",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Paused",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Unpaused",
          "anonymous": false
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "paused",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "constructor": {
            "details": "Initializes the contract in unpaused state."
          },
          "paused()": {
            "details": "Returns true if the contract is paused, and false otherwise."
          }
        },
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
        "lib/openzeppelin-contracts/contracts/security/Pausable.sol": "Pausable"
      },
      "libraries": {}
    },
    "sources": {
      "lib/openzeppelin-contracts/contracts/security/Pausable.sol": {
        "keccak256": "0x0849d93b16c9940beb286a7864ed02724b248b93e0d80ef6355af5ef15c64773",
        "urls": [
          "bzz-raw://4ddabb16009cd17eaca3143feadf450ac13e72919ebe2ca50e00f61cb78bc004",
          "dweb:/ipfs/QmSPwPxX7d6TTWakN5jy5wsaGkS1y9TW8fuhGSraMkLk2B"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
        "keccak256": "0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7",
        "urls": [
          "bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92",
          "dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/openzeppelin-contracts/contracts/security/Pausable.sol",
    "id": 59022,
    "exportedSymbols": {
      "Context": [
        60721
      ],
      "Pausable": [
        59021
      ]
    },
    "nodeType": "SourceUnit",
    "src": "105:2448:79",
    "nodes": [
      {
        "id": 58915,
        "nodeType": "PragmaDirective",
        "src": "105:23:79",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 58916,
        "nodeType": "ImportDirective",
        "src": "130:30:79",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/utils/Context.sol",
        "file": "../utils/Context.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 59022,
        "sourceUnit": 60722,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 59021,
        "nodeType": "ContractDefinition",
        "src": "602:1950:79",
        "nodes": [
          {
            "id": 58924,
            "nodeType": "EventDefinition",
            "src": "724:30:79",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 58920,
              "nodeType": "StructuredDocumentation",
              "src": "646:73:79",
              "text": " @dev Emitted when the pause is triggered by `account`."
            },
            "eventSelector": "62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258",
            "name": "Paused",
            "nameLocation": "730:6:79",
            "parameters": {
              "id": 58923,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58922,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "745:7:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 58924,
                  "src": "737:15:79",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58921,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "737:7:79",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "736:17:79"
            }
          },
          {
            "id": 58929,
            "nodeType": "EventDefinition",
            "src": "835:32:79",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 58925,
              "nodeType": "StructuredDocumentation",
              "src": "760:70:79",
              "text": " @dev Emitted when the pause is lifted by `account`."
            },
            "eventSelector": "5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa",
            "name": "Unpaused",
            "nameLocation": "841:8:79",
            "parameters": {
              "id": 58928,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58927,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "858:7:79",
                  "nodeType": "VariableDeclaration",
                  "scope": 58929,
                  "src": "850:15:79",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58926,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "850:7:79",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "849:17:79"
            }
          },
          {
            "id": 58931,
            "nodeType": "VariableDeclaration",
            "src": "873:20:79",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_paused",
            "nameLocation": "886:7:79",
            "scope": 59021,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 58930,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "873:4:79",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "visibility": "private"
          },
          {
            "id": 58940,
            "nodeType": "FunctionDefinition",
            "src": "972:46:79",
            "nodes": [],
            "body": {
              "id": 58939,
              "nodeType": "Block",
              "src": "986:32:79",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 58937,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 58935,
                      "name": "_paused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58931,
                      "src": "996:7:79",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "66616c7365",
                      "id": 58936,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1006:5:79",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "996:15:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 58938,
                  "nodeType": "ExpressionStatement",
                  "src": "996:15:79"
                }
              ]
            },
            "documentation": {
              "id": 58932,
              "nodeType": "StructuredDocumentation",
              "src": "900:67:79",
              "text": " @dev Initializes the contract in unpaused state."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 58933,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "983:2:79"
            },
            "returnParameters": {
              "id": 58934,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "986:0:79"
            },
            "scope": 59021,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 58948,
            "nodeType": "ModifierDefinition",
            "src": "1204:72:79",
            "nodes": [],
            "body": {
              "id": 58947,
              "nodeType": "Block",
              "src": "1229:47:79",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 58943,
                      "name": "_requireNotPaused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58977,
                      "src": "1239:17:79",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$__$",
                        "typeString": "function () view"
                      }
                    },
                    "id": 58944,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1239:19:79",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 58945,
                  "nodeType": "ExpressionStatement",
                  "src": "1239:19:79"
                },
                {
                  "id": 58946,
                  "nodeType": "PlaceholderStatement",
                  "src": "1268:1:79"
                }
              ]
            },
            "documentation": {
              "id": 58941,
              "nodeType": "StructuredDocumentation",
              "src": "1024:175:79",
              "text": " @dev Modifier to make a function callable only when the contract is not paused.\n Requirements:\n - The contract must not be paused."
            },
            "name": "whenNotPaused",
            "nameLocation": "1213:13:79",
            "parameters": {
              "id": 58942,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1226:2:79"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 58956,
            "nodeType": "ModifierDefinition",
            "src": "1454:66:79",
            "nodes": [],
            "body": {
              "id": 58955,
              "nodeType": "Block",
              "src": "1476:44:79",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 58951,
                      "name": "_requirePaused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58988,
                      "src": "1486:14:79",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$__$",
                        "typeString": "function () view"
                      }
                    },
                    "id": 58952,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1486:16:79",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 58953,
                  "nodeType": "ExpressionStatement",
                  "src": "1486:16:79"
                },
                {
                  "id": 58954,
                  "nodeType": "PlaceholderStatement",
                  "src": "1512:1:79"
                }
              ]
            },
            "documentation": {
              "id": 58949,
              "nodeType": "StructuredDocumentation",
              "src": "1282:167:79",
              "text": " @dev Modifier to make a function callable only when the contract is paused.\n Requirements:\n - The contract must be paused."
            },
            "name": "whenPaused",
            "nameLocation": "1463:10:79",
            "parameters": {
              "id": 58950,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1473:2:79"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 58965,
            "nodeType": "FunctionDefinition",
            "src": "1615:84:79",
            "nodes": [],
            "body": {
              "id": 58964,
              "nodeType": "Block",
              "src": "1668:31:79",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 58962,
                    "name": "_paused",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 58931,
                    "src": "1685:7:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 58961,
                  "id": 58963,
                  "nodeType": "Return",
                  "src": "1678:14:79"
                }
              ]
            },
            "documentation": {
              "id": 58957,
              "nodeType": "StructuredDocumentation",
              "src": "1526:84:79",
              "text": " @dev Returns true if the contract is paused, and false otherwise."
            },
            "functionSelector": "5c975abb",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "paused",
            "nameLocation": "1624:6:79",
            "parameters": {
              "id": 58958,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1630:2:79"
            },
            "returnParameters": {
              "id": 58961,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58960,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 58965,
                  "src": "1662:4:79",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 58959,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1662:4:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1661:6:79"
            },
            "scope": 59021,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 58977,
            "nodeType": "FunctionDefinition",
            "src": "1767:106:79",
            "nodes": [],
            "body": {
              "id": 58976,
              "nodeType": "Block",
              "src": "1818:55:79",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 58972,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "1836:9:79",
                        "subExpression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 58970,
                            "name": "paused",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 58965,
                            "src": "1837:6:79",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                              "typeString": "function () view returns (bool)"
                            }
                          },
                          "id": 58971,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1837:8:79",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5061757361626c653a20706175736564",
                        "id": 58973,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1847:18:79",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_68571e1369f7a6dcdcd736cb0343b35a58ed0f64d245c2ed839c98d412744f8a",
                          "typeString": "literal_string \"Pausable: paused\""
                        },
                        "value": "Pausable: paused"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_68571e1369f7a6dcdcd736cb0343b35a58ed0f64d245c2ed839c98d412744f8a",
                          "typeString": "literal_string \"Pausable: paused\""
                        }
                      ],
                      "id": 58969,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1828:7:79",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 58974,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1828:38:79",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 58975,
                  "nodeType": "ExpressionStatement",
                  "src": "1828:38:79"
                }
              ]
            },
            "documentation": {
              "id": 58966,
              "nodeType": "StructuredDocumentation",
              "src": "1705:57:79",
              "text": " @dev Throws if the contract is paused."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_requireNotPaused",
            "nameLocation": "1776:17:79",
            "parameters": {
              "id": 58967,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1793:2:79"
            },
            "returnParameters": {
              "id": 58968,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1818:0:79"
            },
            "scope": 59021,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 58988,
            "nodeType": "FunctionDefinition",
            "src": "1945:106:79",
            "nodes": [],
            "body": {
              "id": 58987,
              "nodeType": "Block",
              "src": "1993:58:79",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 58982,
                          "name": "paused",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58965,
                          "src": "2011:6:79",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 58983,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2011:8:79",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5061757361626c653a206e6f7420706175736564",
                        "id": 58984,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2021:22:79",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_0d1d997348c4b502650619e51f7d09f80514d98b6993be5051d07f703984619a",
                          "typeString": "literal_string \"Pausable: not paused\""
                        },
                        "value": "Pausable: not paused"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_0d1d997348c4b502650619e51f7d09f80514d98b6993be5051d07f703984619a",
                          "typeString": "literal_string \"Pausable: not paused\""
                        }
                      ],
                      "id": 58981,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2003:7:79",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 58985,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2003:41:79",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 58986,
                  "nodeType": "ExpressionStatement",
                  "src": "2003:41:79"
                }
              ]
            },
            "documentation": {
              "id": 58978,
              "nodeType": "StructuredDocumentation",
              "src": "1879:61:79",
              "text": " @dev Throws if the contract is not paused."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_requirePaused",
            "nameLocation": "1954:14:79",
            "parameters": {
              "id": 58979,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1968:2:79"
            },
            "returnParameters": {
              "id": 58980,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1993:0:79"
            },
            "scope": 59021,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 59004,
            "nodeType": "FunctionDefinition",
            "src": "2186:115:79",
            "nodes": [],
            "body": {
              "id": 59003,
              "nodeType": "Block",
              "src": "2235:66:79",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 58996,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 58994,
                      "name": "_paused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58931,
                      "src": "2245:7:79",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 58995,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2255:4:79",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "2245:14:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 58997,
                  "nodeType": "ExpressionStatement",
                  "src": "2245:14:79"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 58999,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60711,
                          "src": "2281:10:79",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 59000,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2281:12:79",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 58998,
                      "name": "Paused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58924,
                      "src": "2274:6:79",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 59001,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2274:20:79",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59002,
                  "nodeType": "EmitStatement",
                  "src": "2269:25:79"
                }
              ]
            },
            "documentation": {
              "id": 58989,
              "nodeType": "StructuredDocumentation",
              "src": "2057:124:79",
              "text": " @dev Triggers stopped state.\n Requirements:\n - The contract must not be paused."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 58992,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 58991,
                  "name": "whenNotPaused",
                  "nameLocations": [
                    "2221:13:79"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 58948,
                  "src": "2221:13:79"
                },
                "nodeType": "ModifierInvocation",
                "src": "2221:13:79"
              }
            ],
            "name": "_pause",
            "nameLocation": "2195:6:79",
            "parameters": {
              "id": 58990,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2201:2:79"
            },
            "returnParameters": {
              "id": 58993,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2235:0:79"
            },
            "scope": 59021,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 59020,
            "nodeType": "FunctionDefinition",
            "src": "2433:117:79",
            "nodes": [],
            "body": {
              "id": 59019,
              "nodeType": "Block",
              "src": "2481:69:79",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 59012,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 59010,
                      "name": "_paused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58931,
                      "src": "2491:7:79",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "66616c7365",
                      "id": 59011,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2501:5:79",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "2491:15:79",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 59013,
                  "nodeType": "ExpressionStatement",
                  "src": "2491:15:79"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 59015,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60711,
                          "src": "2530:10:79",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 59016,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2530:12:79",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 59014,
                      "name": "Unpaused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58929,
                      "src": "2521:8:79",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 59017,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2521:22:79",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59018,
                  "nodeType": "EmitStatement",
                  "src": "2516:27:79"
                }
              ]
            },
            "documentation": {
              "id": 59005,
              "nodeType": "StructuredDocumentation",
              "src": "2307:121:79",
              "text": " @dev Returns to normal state.\n Requirements:\n - The contract must be paused."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 59008,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 59007,
                  "name": "whenPaused",
                  "nameLocations": [
                    "2470:10:79"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 58956,
                  "src": "2470:10:79"
                },
                "nodeType": "ModifierInvocation",
                "src": "2470:10:79"
              }
            ],
            "name": "_unpause",
            "nameLocation": "2442:8:79",
            "parameters": {
              "id": 59006,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2450:2:79"
            },
            "returnParameters": {
              "id": 59009,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2481:0:79"
            },
            "scope": 59021,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 58918,
              "name": "Context",
              "nameLocations": [
                "632:7:79"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 60721,
              "src": "632:7:79"
            },
            "id": 58919,
            "nodeType": "InheritanceSpecifier",
            "src": "632:7:79"
          }
        ],
        "canonicalName": "Pausable",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 58917,
          "nodeType": "StructuredDocumentation",
          "src": "162:439:79",
          "text": " @dev Contract module which allows children to implement an emergency stop\n mechanism that can be triggered by an authorized account.\n This module is used through inheritance. It will make available the\n modifiers `whenNotPaused` and `whenPaused`, which can be applied to\n the functions of your contract. Note that they will not be pausable by\n simply including this module, only once the modifiers are put in place."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          59021,
          60721
        ],
        "name": "Pausable",
        "nameLocation": "620:8:79",
        "scope": 59022,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 79
} as const;
