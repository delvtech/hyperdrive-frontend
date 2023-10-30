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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Paused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Unpaused\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"paused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Contract module which allows children to implement an emergency stop mechanism that can be triggered by an authorized account. This module is used through inheritance. It will make available the modifiers `whenNotPaused` and `whenPaused`, which can be applied to the functions of your contract. Note that they will not be pausable by simply including this module, only once the modifiers are put in place.\",\"events\":{\"Paused(address)\":{\"details\":\"Emitted when the pause is triggered by `account`.\"},\"Unpaused(address)\":{\"details\":\"Emitted when the pause is lifted by `account`.\"}},\"kind\":\"dev\",\"methods\":{\"constructor\":{\"details\":\"Initializes the contract in unpaused state.\"},\"paused()\":{\"details\":\"Returns true if the contract is paused, and false otherwise.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/security/Pausable.sol\":\"Pausable\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/security/Pausable.sol\":{\"keccak256\":\"0x0849d93b16c9940beb286a7864ed02724b248b93e0d80ef6355af5ef15c64773\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ddabb16009cd17eaca3143feadf450ac13e72919ebe2ca50e00f61cb78bc004\",\"dweb:/ipfs/QmSPwPxX7d6TTWakN5jy5wsaGkS1y9TW8fuhGSraMkLk2B\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]}},\"version\":1}",
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
    "id": 58316,
    "exportedSymbols": {
      "Context": [
        60015
      ],
      "Pausable": [
        58315
      ]
    },
    "nodeType": "SourceUnit",
    "src": "105:2448:73",
    "nodes": [
      {
        "id": 58209,
        "nodeType": "PragmaDirective",
        "src": "105:23:73",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 58210,
        "nodeType": "ImportDirective",
        "src": "130:30:73",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/utils/Context.sol",
        "file": "../utils/Context.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 58316,
        "sourceUnit": 60016,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 58315,
        "nodeType": "ContractDefinition",
        "src": "602:1950:73",
        "nodes": [
          {
            "id": 58218,
            "nodeType": "EventDefinition",
            "src": "724:30:73",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 58214,
              "nodeType": "StructuredDocumentation",
              "src": "646:73:73",
              "text": " @dev Emitted when the pause is triggered by `account`."
            },
            "eventSelector": "62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258",
            "name": "Paused",
            "nameLocation": "730:6:73",
            "parameters": {
              "id": 58217,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58216,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "745:7:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 58218,
                  "src": "737:15:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58215,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "737:7:73",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "736:17:73"
            }
          },
          {
            "id": 58223,
            "nodeType": "EventDefinition",
            "src": "835:32:73",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 58219,
              "nodeType": "StructuredDocumentation",
              "src": "760:70:73",
              "text": " @dev Emitted when the pause is lifted by `account`."
            },
            "eventSelector": "5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa",
            "name": "Unpaused",
            "nameLocation": "841:8:73",
            "parameters": {
              "id": 58222,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58221,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "858:7:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 58223,
                  "src": "850:15:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58220,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "850:7:73",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "849:17:73"
            }
          },
          {
            "id": 58225,
            "nodeType": "VariableDeclaration",
            "src": "873:20:73",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_paused",
            "nameLocation": "886:7:73",
            "scope": 58315,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 58224,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "873:4:73",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "visibility": "private"
          },
          {
            "id": 58234,
            "nodeType": "FunctionDefinition",
            "src": "972:46:73",
            "nodes": [],
            "body": {
              "id": 58233,
              "nodeType": "Block",
              "src": "986:32:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 58231,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 58229,
                      "name": "_paused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58225,
                      "src": "996:7:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "66616c7365",
                      "id": 58230,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1006:5:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "996:15:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 58232,
                  "nodeType": "ExpressionStatement",
                  "src": "996:15:73"
                }
              ]
            },
            "documentation": {
              "id": 58226,
              "nodeType": "StructuredDocumentation",
              "src": "900:67:73",
              "text": " @dev Initializes the contract in unpaused state."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 58227,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "983:2:73"
            },
            "returnParameters": {
              "id": 58228,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "986:0:73"
            },
            "scope": 58315,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 58242,
            "nodeType": "ModifierDefinition",
            "src": "1204:72:73",
            "nodes": [],
            "body": {
              "id": 58241,
              "nodeType": "Block",
              "src": "1229:47:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 58237,
                      "name": "_requireNotPaused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58271,
                      "src": "1239:17:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$__$",
                        "typeString": "function () view"
                      }
                    },
                    "id": 58238,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1239:19:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 58239,
                  "nodeType": "ExpressionStatement",
                  "src": "1239:19:73"
                },
                {
                  "id": 58240,
                  "nodeType": "PlaceholderStatement",
                  "src": "1268:1:73"
                }
              ]
            },
            "documentation": {
              "id": 58235,
              "nodeType": "StructuredDocumentation",
              "src": "1024:175:73",
              "text": " @dev Modifier to make a function callable only when the contract is not paused.\n Requirements:\n - The contract must not be paused."
            },
            "name": "whenNotPaused",
            "nameLocation": "1213:13:73",
            "parameters": {
              "id": 58236,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1226:2:73"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 58250,
            "nodeType": "ModifierDefinition",
            "src": "1454:66:73",
            "nodes": [],
            "body": {
              "id": 58249,
              "nodeType": "Block",
              "src": "1476:44:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 58245,
                      "name": "_requirePaused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58282,
                      "src": "1486:14:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$__$",
                        "typeString": "function () view"
                      }
                    },
                    "id": 58246,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1486:16:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 58247,
                  "nodeType": "ExpressionStatement",
                  "src": "1486:16:73"
                },
                {
                  "id": 58248,
                  "nodeType": "PlaceholderStatement",
                  "src": "1512:1:73"
                }
              ]
            },
            "documentation": {
              "id": 58243,
              "nodeType": "StructuredDocumentation",
              "src": "1282:167:73",
              "text": " @dev Modifier to make a function callable only when the contract is paused.\n Requirements:\n - The contract must be paused."
            },
            "name": "whenPaused",
            "nameLocation": "1463:10:73",
            "parameters": {
              "id": 58244,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1473:2:73"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 58259,
            "nodeType": "FunctionDefinition",
            "src": "1615:84:73",
            "nodes": [],
            "body": {
              "id": 58258,
              "nodeType": "Block",
              "src": "1668:31:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 58256,
                    "name": "_paused",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 58225,
                    "src": "1685:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 58255,
                  "id": 58257,
                  "nodeType": "Return",
                  "src": "1678:14:73"
                }
              ]
            },
            "documentation": {
              "id": 58251,
              "nodeType": "StructuredDocumentation",
              "src": "1526:84:73",
              "text": " @dev Returns true if the contract is paused, and false otherwise."
            },
            "functionSelector": "5c975abb",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "paused",
            "nameLocation": "1624:6:73",
            "parameters": {
              "id": 58252,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1630:2:73"
            },
            "returnParameters": {
              "id": 58255,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58254,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 58259,
                  "src": "1662:4:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 58253,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1662:4:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1661:6:73"
            },
            "scope": 58315,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 58271,
            "nodeType": "FunctionDefinition",
            "src": "1767:106:73",
            "nodes": [],
            "body": {
              "id": 58270,
              "nodeType": "Block",
              "src": "1818:55:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 58266,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "1836:9:73",
                        "subExpression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 58264,
                            "name": "paused",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 58259,
                            "src": "1837:6:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                              "typeString": "function () view returns (bool)"
                            }
                          },
                          "id": 58265,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1837:8:73",
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
                        "id": 58267,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1847:18:73",
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
                      "id": 58263,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1828:7:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 58268,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1828:38:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 58269,
                  "nodeType": "ExpressionStatement",
                  "src": "1828:38:73"
                }
              ]
            },
            "documentation": {
              "id": 58260,
              "nodeType": "StructuredDocumentation",
              "src": "1705:57:73",
              "text": " @dev Throws if the contract is paused."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_requireNotPaused",
            "nameLocation": "1776:17:73",
            "parameters": {
              "id": 58261,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1793:2:73"
            },
            "returnParameters": {
              "id": 58262,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1818:0:73"
            },
            "scope": 58315,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 58282,
            "nodeType": "FunctionDefinition",
            "src": "1945:106:73",
            "nodes": [],
            "body": {
              "id": 58281,
              "nodeType": "Block",
              "src": "1993:58:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 58276,
                          "name": "paused",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58259,
                          "src": "2011:6:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 58277,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2011:8:73",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5061757361626c653a206e6f7420706175736564",
                        "id": 58278,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2021:22:73",
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
                      "id": 58275,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2003:7:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 58279,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2003:41:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 58280,
                  "nodeType": "ExpressionStatement",
                  "src": "2003:41:73"
                }
              ]
            },
            "documentation": {
              "id": 58272,
              "nodeType": "StructuredDocumentation",
              "src": "1879:61:73",
              "text": " @dev Throws if the contract is not paused."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_requirePaused",
            "nameLocation": "1954:14:73",
            "parameters": {
              "id": 58273,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1968:2:73"
            },
            "returnParameters": {
              "id": 58274,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1993:0:73"
            },
            "scope": 58315,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 58298,
            "nodeType": "FunctionDefinition",
            "src": "2186:115:73",
            "nodes": [],
            "body": {
              "id": 58297,
              "nodeType": "Block",
              "src": "2235:66:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 58290,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 58288,
                      "name": "_paused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58225,
                      "src": "2245:7:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 58289,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2255:4:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "2245:14:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 58291,
                  "nodeType": "ExpressionStatement",
                  "src": "2245:14:73"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 58293,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60005,
                          "src": "2281:10:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 58294,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2281:12:73",
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
                      "id": 58292,
                      "name": "Paused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58218,
                      "src": "2274:6:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 58295,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2274:20:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 58296,
                  "nodeType": "EmitStatement",
                  "src": "2269:25:73"
                }
              ]
            },
            "documentation": {
              "id": 58283,
              "nodeType": "StructuredDocumentation",
              "src": "2057:124:73",
              "text": " @dev Triggers stopped state.\n Requirements:\n - The contract must not be paused."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 58286,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 58285,
                  "name": "whenNotPaused",
                  "nameLocations": [
                    "2221:13:73"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 58242,
                  "src": "2221:13:73"
                },
                "nodeType": "ModifierInvocation",
                "src": "2221:13:73"
              }
            ],
            "name": "_pause",
            "nameLocation": "2195:6:73",
            "parameters": {
              "id": 58284,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2201:2:73"
            },
            "returnParameters": {
              "id": 58287,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2235:0:73"
            },
            "scope": 58315,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 58314,
            "nodeType": "FunctionDefinition",
            "src": "2433:117:73",
            "nodes": [],
            "body": {
              "id": 58313,
              "nodeType": "Block",
              "src": "2481:69:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 58306,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 58304,
                      "name": "_paused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58225,
                      "src": "2491:7:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "66616c7365",
                      "id": 58305,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2501:5:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "2491:15:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 58307,
                  "nodeType": "ExpressionStatement",
                  "src": "2491:15:73"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 58309,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60005,
                          "src": "2530:10:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 58310,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2530:12:73",
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
                      "id": 58308,
                      "name": "Unpaused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58223,
                      "src": "2521:8:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 58311,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2521:22:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 58312,
                  "nodeType": "EmitStatement",
                  "src": "2516:27:73"
                }
              ]
            },
            "documentation": {
              "id": 58299,
              "nodeType": "StructuredDocumentation",
              "src": "2307:121:73",
              "text": " @dev Returns to normal state.\n Requirements:\n - The contract must be paused."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 58302,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 58301,
                  "name": "whenPaused",
                  "nameLocations": [
                    "2470:10:73"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 58250,
                  "src": "2470:10:73"
                },
                "nodeType": "ModifierInvocation",
                "src": "2470:10:73"
              }
            ],
            "name": "_unpause",
            "nameLocation": "2442:8:73",
            "parameters": {
              "id": 58300,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2450:2:73"
            },
            "returnParameters": {
              "id": 58303,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2481:0:73"
            },
            "scope": 58315,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 58212,
              "name": "Context",
              "nameLocations": [
                "632:7:73"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 60015,
              "src": "632:7:73"
            },
            "id": 58213,
            "nodeType": "InheritanceSpecifier",
            "src": "632:7:73"
          }
        ],
        "canonicalName": "Pausable",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 58211,
          "nodeType": "StructuredDocumentation",
          "src": "162:439:73",
          "text": " @dev Contract module which allows children to implement an emergency stop\n mechanism that can be triggered by an authorized account.\n This module is used through inheritance. It will make available the\n modifiers `whenNotPaused` and `whenPaused`, which can be applied to\n the functions of your contract. Note that they will not be pausable by\n simply including this module, only once the modifiers are put in place."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          58315,
          60015
        ],
        "name": "Pausable",
        "nameLocation": "620:8:73",
        "scope": 58316,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 73
}