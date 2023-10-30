{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220d7369ebf219f77756056a99ba2cd271de763bf72962b3a5ddba7f6338e75f20664736f6c63430008130033",
    "sourceMap": "1329:11630:90:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;1329:11630:90;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220d7369ebf219f77756056a99ba2cd271de763bf72962b3a5ddba7f6338e75f20664736f6c63430008130033",
    "sourceMap": "1329:11630:90:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Library for managing https://en.wikipedia.org/wiki/Set_(abstract_data_type)[sets] of primitive types. Sets have the following properties: - Elements are added, removed, and checked for existence in constant time (O(1)). - Elements are enumerated in O(n). No guarantees are made on the ordering. ```solidity contract Example {     // Add the library methods     using EnumerableSet for EnumerableSet.AddressSet;     // Declare a set state variable     EnumerableSet.AddressSet private mySet; } ``` As of v3.3.0, sets of type `bytes32` (`Bytes32Set`), `address` (`AddressSet`) and `uint256` (`UintSet`) are supported. [WARNING] ==== Trying to delete such a structure from storage will likely result in data corruption, rendering the structure unusable. See https://github.com/ethereum/solidity/pull/11843[ethereum/solidity#11843] for more info. In order to clean an EnumerableSet, you can either remove all elements one by one or create a fresh instance using an array of EnumerableSet. ====\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/utils/structs/EnumerableSet.sol\":\"EnumerableSet\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/utils/structs/EnumerableSet.sol\":{\"keccak256\":\"0xacbaaa9be521944f83d2852379e1f40b28ada61a256493474f6cdc9b59620598\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://15aa625baf68ba948a074361f38f7cf0e6198ba67d1d808c43865409296f1e72\",\"dweb:/ipfs/Qmbcae8x18H5Uzp2DsQcfZH3PMxokhhVCcwks22CDqVsPQ\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
    },
    "language": "Solidity",
    "output": {
      "abi": [],
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
        "lib/openzeppelin-contracts/contracts/utils/structs/EnumerableSet.sol": "EnumerableSet"
      },
      "libraries": {}
    },
    "sources": {
      "lib/openzeppelin-contracts/contracts/utils/structs/EnumerableSet.sol": {
        "keccak256": "0xacbaaa9be521944f83d2852379e1f40b28ada61a256493474f6cdc9b59620598",
        "urls": [
          "bzz-raw://15aa625baf68ba948a074361f38f7cf0e6198ba67d1d808c43865409296f1e72",
          "dweb:/ipfs/Qmbcae8x18H5Uzp2DsQcfZH3PMxokhhVCcwks22CDqVsPQ"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/openzeppelin-contracts/contracts/utils/structs/EnumerableSet.sol",
    "id": 61865,
    "exportedSymbols": {
      "EnumerableSet": [
        61864
      ]
    },
    "nodeType": "SourceUnit",
    "src": "205:12755:90",
    "nodes": [
      {
        "id": 61253,
        "nodeType": "PragmaDirective",
        "src": "205:23:90",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 61864,
        "nodeType": "ContractDefinition",
        "src": "1329:11630:90",
        "nodes": [
          {
            "id": 61262,
            "nodeType": "StructDefinition",
            "src": "1797:247:90",
            "nodes": [],
            "canonicalName": "EnumerableSet.Set",
            "members": [
              {
                "constant": false,
                "id": 61257,
                "mutability": "mutable",
                "name": "_values",
                "nameLocation": "1861:7:90",
                "nodeType": "VariableDeclaration",
                "scope": 61262,
                "src": "1851:17:90",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                  "typeString": "bytes32[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 61255,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1851:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 61256,
                  "nodeType": "ArrayTypeName",
                  "src": "1851:9:90",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                    "typeString": "bytes32[]"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 61261,
                "mutability": "mutable",
                "name": "_indexes",
                "nameLocation": "2029:8:90",
                "nodeType": "VariableDeclaration",
                "scope": 61262,
                "src": "2001:36:90",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                  "typeString": "mapping(bytes32 => uint256)"
                },
                "typeName": {
                  "id": 61260,
                  "keyName": "",
                  "keyNameLocation": "-1:-1:-1",
                  "keyType": {
                    "id": 61258,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2009:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "2001:27:90",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                    "typeString": "mapping(bytes32 => uint256)"
                  },
                  "valueName": "",
                  "valueNameLocation": "-1:-1:-1",
                  "valueType": {
                    "id": 61259,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2020:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Set",
            "nameLocation": "1804:3:90",
            "scope": 61864,
            "visibility": "public"
          },
          {
            "id": 61304,
            "nodeType": "FunctionDefinition",
            "src": "2214:404:90",
            "nodes": [],
            "body": {
              "id": 61303,
              "nodeType": "Block",
              "src": "2283:335:90",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 61277,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "2297:22:90",
                    "subExpression": {
                      "arguments": [
                        {
                          "id": 61274,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61266,
                          "src": "2308:3:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                            "typeString": "struct EnumerableSet.Set storage pointer"
                          }
                        },
                        {
                          "id": 61275,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61268,
                          "src": "2313:5:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                            "typeString": "struct EnumerableSet.Set storage pointer"
                          },
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        ],
                        "id": 61273,
                        "name": "_contains",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61407,
                        "src": "2298:9:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$61262_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                          "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) view returns (bool)"
                        }
                      },
                      "id": 61276,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2298:21:90",
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
                  "falseBody": {
                    "id": 61301,
                    "nodeType": "Block",
                    "src": "2575:37:90",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "66616c7365",
                          "id": 61299,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2596:5:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 61272,
                        "id": 61300,
                        "nodeType": "Return",
                        "src": "2589:12:90"
                      }
                    ]
                  },
                  "id": 61302,
                  "nodeType": "IfStatement",
                  "src": "2293:319:90",
                  "trueBody": {
                    "id": 61298,
                    "nodeType": "Block",
                    "src": "2321:248:90",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 61283,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61268,
                              "src": "2352:5:90",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "expression": {
                              "expression": {
                                "id": 61278,
                                "name": "set",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61266,
                                "src": "2335:3:90",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                                  "typeString": "struct EnumerableSet.Set storage pointer"
                                }
                              },
                              "id": 61281,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2339:7:90",
                              "memberName": "_values",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 61257,
                              "src": "2335:11:90",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                "typeString": "bytes32[] storage ref"
                              }
                            },
                            "id": 61282,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2347:4:90",
                            "memberName": "push",
                            "nodeType": "MemberAccess",
                            "src": "2335:16:90",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_bytes32_$dyn_storage_ptr_$_t_bytes32_$returns$__$attached_to$_t_array$_t_bytes32_$dyn_storage_ptr_$",
                              "typeString": "function (bytes32[] storage pointer,bytes32)"
                            }
                          },
                          "id": 61284,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2335:23:90",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 61285,
                        "nodeType": "ExpressionStatement",
                        "src": "2335:23:90"
                      },
                      {
                        "expression": {
                          "id": 61294,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "expression": {
                                "id": 61286,
                                "name": "set",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61266,
                                "src": "2493:3:90",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                                  "typeString": "struct EnumerableSet.Set storage pointer"
                                }
                              },
                              "id": 61289,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2497:8:90",
                              "memberName": "_indexes",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 61261,
                              "src": "2493:12:90",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                "typeString": "mapping(bytes32 => uint256)"
                              }
                            },
                            "id": 61290,
                            "indexExpression": {
                              "id": 61288,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61268,
                              "src": "2506:5:90",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "2493:19:90",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "expression": {
                              "expression": {
                                "id": 61291,
                                "name": "set",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61266,
                                "src": "2515:3:90",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                                  "typeString": "struct EnumerableSet.Set storage pointer"
                                }
                              },
                              "id": 61292,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2519:7:90",
                              "memberName": "_values",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 61257,
                              "src": "2515:11:90",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                "typeString": "bytes32[] storage ref"
                              }
                            },
                            "id": 61293,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2527:6:90",
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "src": "2515:18:90",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2493:40:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 61295,
                        "nodeType": "ExpressionStatement",
                        "src": "2493:40:90"
                      },
                      {
                        "expression": {
                          "hexValue": "74727565",
                          "id": 61296,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2554:4:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 61272,
                        "id": 61297,
                        "nodeType": "Return",
                        "src": "2547:11:90"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 61263,
              "nodeType": "StructuredDocumentation",
              "src": "2050:159:90",
              "text": " @dev Add a value to a set. O(1).\n Returns true if the value was added to the set, that is if it was not\n already present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_add",
            "nameLocation": "2223:4:90",
            "parameters": {
              "id": 61269,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61266,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "2240:3:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61304,
                  "src": "2228:15:90",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  },
                  "typeName": {
                    "id": 61265,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61264,
                      "name": "Set",
                      "nameLocations": [
                        "2228:3:90"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 61262,
                      "src": "2228:3:90"
                    },
                    "referencedDeclaration": 61262,
                    "src": "2228:3:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                      "typeString": "struct EnumerableSet.Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61268,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2253:5:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61304,
                  "src": "2245:13:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 61267,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2245:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2227:32:90"
            },
            "returnParameters": {
              "id": 61272,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61271,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61304,
                  "src": "2277:4:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 61270,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2277:4:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2276:6:90"
            },
            "scope": 61864,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 61388,
            "nodeType": "FunctionDefinition",
            "src": "2786:1388:90",
            "nodes": [],
            "body": {
              "id": 61387,
              "nodeType": "Block",
              "src": "2858:1316:90",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    61316
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61316,
                      "mutability": "mutable",
                      "name": "valueIndex",
                      "nameLocation": "2976:10:90",
                      "nodeType": "VariableDeclaration",
                      "scope": 61387,
                      "src": "2968:18:90",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 61315,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2968:7:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61321,
                  "initialValue": {
                    "baseExpression": {
                      "expression": {
                        "id": 61317,
                        "name": "set",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61308,
                        "src": "2989:3:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                          "typeString": "struct EnumerableSet.Set storage pointer"
                        }
                      },
                      "id": 61318,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2993:8:90",
                      "memberName": "_indexes",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 61261,
                      "src": "2989:12:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                        "typeString": "mapping(bytes32 => uint256)"
                      }
                    },
                    "id": 61320,
                    "indexExpression": {
                      "id": 61319,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61310,
                      "src": "3002:5:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2989:19:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2968:40:90"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 61324,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 61322,
                      "name": "valueIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61316,
                      "src": "3023:10:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 61323,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3037:1:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "3023:15:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 61385,
                    "nodeType": "Block",
                    "src": "4131:37:90",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "66616c7365",
                          "id": 61383,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4152:5:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 61314,
                        "id": 61384,
                        "nodeType": "Return",
                        "src": "4145:12:90"
                      }
                    ]
                  },
                  "id": 61386,
                  "nodeType": "IfStatement",
                  "src": "3019:1149:90",
                  "trueBody": {
                    "id": 61382,
                    "nodeType": "Block",
                    "src": "3040:1085:90",
                    "statements": [
                      {
                        "assignments": [
                          61326
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 61326,
                            "mutability": "mutable",
                            "name": "toDeleteIndex",
                            "nameLocation": "3400:13:90",
                            "nodeType": "VariableDeclaration",
                            "scope": 61382,
                            "src": "3392:21:90",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 61325,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "3392:7:90",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 61330,
                        "initialValue": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 61329,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 61327,
                            "name": "valueIndex",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61316,
                            "src": "3416:10:90",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 61328,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3429:1:90",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "3416:14:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3392:38:90"
                      },
                      {
                        "assignments": [
                          61332
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 61332,
                            "mutability": "mutable",
                            "name": "lastIndex",
                            "nameLocation": "3452:9:90",
                            "nodeType": "VariableDeclaration",
                            "scope": 61382,
                            "src": "3444:17:90",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 61331,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "3444:7:90",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 61338,
                        "initialValue": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 61337,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "expression": {
                                "id": 61333,
                                "name": "set",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61308,
                                "src": "3464:3:90",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                                  "typeString": "struct EnumerableSet.Set storage pointer"
                                }
                              },
                              "id": 61334,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3468:7:90",
                              "memberName": "_values",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 61257,
                              "src": "3464:11:90",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                "typeString": "bytes32[] storage ref"
                              }
                            },
                            "id": 61335,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3476:6:90",
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "src": "3464:18:90",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 61336,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3485:1:90",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "3464:22:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3444:42:90"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 61341,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 61339,
                            "name": "lastIndex",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61332,
                            "src": "3505:9:90",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "id": 61340,
                            "name": "toDeleteIndex",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61326,
                            "src": "3518:13:90",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3505:26:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 61366,
                        "nodeType": "IfStatement",
                        "src": "3501:398:90",
                        "trueBody": {
                          "id": 61365,
                          "nodeType": "Block",
                          "src": "3533:366:90",
                          "statements": [
                            {
                              "assignments": [
                                61343
                              ],
                              "declarations": [
                                {
                                  "constant": false,
                                  "id": 61343,
                                  "mutability": "mutable",
                                  "name": "lastValue",
                                  "nameLocation": "3559:9:90",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 61365,
                                  "src": "3551:17:90",
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  },
                                  "typeName": {
                                    "id": 61342,
                                    "name": "bytes32",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "3551:7:90",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  },
                                  "visibility": "internal"
                                }
                              ],
                              "id": 61348,
                              "initialValue": {
                                "baseExpression": {
                                  "expression": {
                                    "id": 61344,
                                    "name": "set",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61308,
                                    "src": "3571:3:90",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                                      "typeString": "struct EnumerableSet.Set storage pointer"
                                    }
                                  },
                                  "id": 61345,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "3575:7:90",
                                  "memberName": "_values",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 61257,
                                  "src": "3571:11:90",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                    "typeString": "bytes32[] storage ref"
                                  }
                                },
                                "id": 61347,
                                "indexExpression": {
                                  "id": 61346,
                                  "name": "lastIndex",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 61332,
                                  "src": "3583:9:90",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "3571:22:90",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "nodeType": "VariableDeclarationStatement",
                              "src": "3551:42:90"
                            },
                            {
                              "expression": {
                                "id": 61355,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "expression": {
                                      "id": 61349,
                                      "name": "set",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 61308,
                                      "src": "3693:3:90",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                                        "typeString": "struct EnumerableSet.Set storage pointer"
                                      }
                                    },
                                    "id": 61352,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "3697:7:90",
                                    "memberName": "_values",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 61257,
                                    "src": "3693:11:90",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                      "typeString": "bytes32[] storage ref"
                                    }
                                  },
                                  "id": 61353,
                                  "indexExpression": {
                                    "id": 61351,
                                    "name": "toDeleteIndex",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61326,
                                    "src": "3705:13:90",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "nodeType": "IndexAccess",
                                  "src": "3693:26:90",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "id": 61354,
                                  "name": "lastValue",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 61343,
                                  "src": "3722:9:90",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                },
                                "src": "3693:38:90",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "id": 61356,
                              "nodeType": "ExpressionStatement",
                              "src": "3693:38:90"
                            },
                            {
                              "expression": {
                                "id": 61363,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "expression": {
                                      "id": 61357,
                                      "name": "set",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 61308,
                                      "src": "3805:3:90",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                                        "typeString": "struct EnumerableSet.Set storage pointer"
                                      }
                                    },
                                    "id": 61360,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "3809:8:90",
                                    "memberName": "_indexes",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 61261,
                                    "src": "3805:12:90",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                      "typeString": "mapping(bytes32 => uint256)"
                                    }
                                  },
                                  "id": 61361,
                                  "indexExpression": {
                                    "id": 61359,
                                    "name": "lastValue",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61343,
                                    "src": "3818:9:90",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "nodeType": "IndexAccess",
                                  "src": "3805:23:90",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "id": 61362,
                                  "name": "valueIndex",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 61316,
                                  "src": "3831:10:90",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "3805:36:90",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 61364,
                              "nodeType": "ExpressionStatement",
                              "src": "3805:36:90"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "expression": {
                                "id": 61367,
                                "name": "set",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61308,
                                "src": "3977:3:90",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                                  "typeString": "struct EnumerableSet.Set storage pointer"
                                }
                              },
                              "id": 61370,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3981:7:90",
                              "memberName": "_values",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 61257,
                              "src": "3977:11:90",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                "typeString": "bytes32[] storage ref"
                              }
                            },
                            "id": 61371,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3989:3:90",
                            "memberName": "pop",
                            "nodeType": "MemberAccess",
                            "src": "3977:15:90",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_arraypop_nonpayable$_t_array$_t_bytes32_$dyn_storage_ptr_$returns$__$attached_to$_t_array$_t_bytes32_$dyn_storage_ptr_$",
                              "typeString": "function (bytes32[] storage pointer)"
                            }
                          },
                          "id": 61372,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3977:17:90",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 61373,
                        "nodeType": "ExpressionStatement",
                        "src": "3977:17:90"
                      },
                      {
                        "expression": {
                          "id": 61378,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "delete",
                          "prefix": true,
                          "src": "4062:26:90",
                          "subExpression": {
                            "baseExpression": {
                              "expression": {
                                "id": 61374,
                                "name": "set",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61308,
                                "src": "4069:3:90",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                                  "typeString": "struct EnumerableSet.Set storage pointer"
                                }
                              },
                              "id": 61375,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4073:8:90",
                              "memberName": "_indexes",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 61261,
                              "src": "4069:12:90",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                "typeString": "mapping(bytes32 => uint256)"
                              }
                            },
                            "id": 61377,
                            "indexExpression": {
                              "id": 61376,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61310,
                              "src": "4082:5:90",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "4069:19:90",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 61379,
                        "nodeType": "ExpressionStatement",
                        "src": "4062:26:90"
                      },
                      {
                        "expression": {
                          "hexValue": "74727565",
                          "id": 61380,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4110:4:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 61314,
                        "id": 61381,
                        "nodeType": "Return",
                        "src": "4103:11:90"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 61305,
              "nodeType": "StructuredDocumentation",
              "src": "2624:157:90",
              "text": " @dev Removes a value from a set. O(1).\n Returns true if the value was removed from the set, that is if it was\n present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_remove",
            "nameLocation": "2795:7:90",
            "parameters": {
              "id": 61311,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61308,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "2815:3:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61388,
                  "src": "2803:15:90",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  },
                  "typeName": {
                    "id": 61307,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61306,
                      "name": "Set",
                      "nameLocations": [
                        "2803:3:90"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 61262,
                      "src": "2803:3:90"
                    },
                    "referencedDeclaration": 61262,
                    "src": "2803:3:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                      "typeString": "struct EnumerableSet.Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61310,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2828:5:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61388,
                  "src": "2820:13:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 61309,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2820:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2802:32:90"
            },
            "returnParameters": {
              "id": 61314,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61313,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61388,
                  "src": "2852:4:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 61312,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2852:4:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2851:6:90"
            },
            "scope": 61864,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 61407,
            "nodeType": "FunctionDefinition",
            "src": "4255:127:90",
            "nodes": [],
            "body": {
              "id": 61406,
              "nodeType": "Block",
              "src": "4334:48:90",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 61404,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "baseExpression": {
                        "expression": {
                          "id": 61399,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61392,
                          "src": "4351:3:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                            "typeString": "struct EnumerableSet.Set storage pointer"
                          }
                        },
                        "id": 61400,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4355:8:90",
                        "memberName": "_indexes",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 61261,
                        "src": "4351:12:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                          "typeString": "mapping(bytes32 => uint256)"
                        }
                      },
                      "id": 61402,
                      "indexExpression": {
                        "id": 61401,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61394,
                        "src": "4364:5:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "4351:19:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 61403,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4374:1:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4351:24:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 61398,
                  "id": 61405,
                  "nodeType": "Return",
                  "src": "4344:31:90"
                }
              ]
            },
            "documentation": {
              "id": 61389,
              "nodeType": "StructuredDocumentation",
              "src": "4180:70:90",
              "text": " @dev Returns true if the value is in the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_contains",
            "nameLocation": "4264:9:90",
            "parameters": {
              "id": 61395,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61392,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "4286:3:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61407,
                  "src": "4274:15:90",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  },
                  "typeName": {
                    "id": 61391,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61390,
                      "name": "Set",
                      "nameLocations": [
                        "4274:3:90"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 61262,
                      "src": "4274:3:90"
                    },
                    "referencedDeclaration": 61262,
                    "src": "4274:3:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                      "typeString": "struct EnumerableSet.Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61394,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4299:5:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61407,
                  "src": "4291:13:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 61393,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4291:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4273:32:90"
            },
            "returnParameters": {
              "id": 61398,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61397,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61407,
                  "src": "4328:4:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 61396,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4328:4:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4327:6:90"
            },
            "scope": 61864,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 61421,
            "nodeType": "FunctionDefinition",
            "src": "4463:107:90",
            "nodes": [],
            "body": {
              "id": 61420,
              "nodeType": "Block",
              "src": "4528:42:90",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "expression": {
                        "id": 61416,
                        "name": "set",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61411,
                        "src": "4545:3:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                          "typeString": "struct EnumerableSet.Set storage pointer"
                        }
                      },
                      "id": 61417,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4549:7:90",
                      "memberName": "_values",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 61257,
                      "src": "4545:11:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                        "typeString": "bytes32[] storage ref"
                      }
                    },
                    "id": 61418,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "4557:6:90",
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "src": "4545:18:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 61415,
                  "id": 61419,
                  "nodeType": "Return",
                  "src": "4538:25:90"
                }
              ]
            },
            "documentation": {
              "id": 61408,
              "nodeType": "StructuredDocumentation",
              "src": "4388:70:90",
              "text": " @dev Returns the number of values on the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_length",
            "nameLocation": "4472:7:90",
            "parameters": {
              "id": 61412,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61411,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "4492:3:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61421,
                  "src": "4480:15:90",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  },
                  "typeName": {
                    "id": 61410,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61409,
                      "name": "Set",
                      "nameLocations": [
                        "4480:3:90"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 61262,
                      "src": "4480:3:90"
                    },
                    "referencedDeclaration": 61262,
                    "src": "4480:3:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                      "typeString": "struct EnumerableSet.Set"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4479:17:90"
            },
            "returnParameters": {
              "id": 61415,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61414,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61421,
                  "src": "4519:7:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61413,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4519:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4518:9:90"
            },
            "scope": 61864,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 61438,
            "nodeType": "FunctionDefinition",
            "src": "4912:118:90",
            "nodes": [],
            "body": {
              "id": 61437,
              "nodeType": "Block",
              "src": "4988:42:90",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "expression": {
                        "id": 61432,
                        "name": "set",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61425,
                        "src": "5005:3:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                          "typeString": "struct EnumerableSet.Set storage pointer"
                        }
                      },
                      "id": 61433,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5009:7:90",
                      "memberName": "_values",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 61257,
                      "src": "5005:11:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                        "typeString": "bytes32[] storage ref"
                      }
                    },
                    "id": 61435,
                    "indexExpression": {
                      "id": 61434,
                      "name": "index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61427,
                      "src": "5017:5:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "5005:18:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 61431,
                  "id": 61436,
                  "nodeType": "Return",
                  "src": "4998:25:90"
                }
              ]
            },
            "documentation": {
              "id": 61422,
              "nodeType": "StructuredDocumentation",
              "src": "4576:331:90",
              "text": " @dev Returns the value stored at position `index` in the set. O(1).\n Note that there are no guarantees on the ordering of values inside the\n array, and it may change when more values are added or removed.\n Requirements:\n - `index` must be strictly less than {length}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_at",
            "nameLocation": "4921:3:90",
            "parameters": {
              "id": 61428,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61425,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "4937:3:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61438,
                  "src": "4925:15:90",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  },
                  "typeName": {
                    "id": 61424,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61423,
                      "name": "Set",
                      "nameLocations": [
                        "4925:3:90"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 61262,
                      "src": "4925:3:90"
                    },
                    "referencedDeclaration": 61262,
                    "src": "4925:3:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                      "typeString": "struct EnumerableSet.Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61427,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "4950:5:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61438,
                  "src": "4942:13:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61426,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4942:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4924:32:90"
            },
            "returnParameters": {
              "id": 61431,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61430,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61438,
                  "src": "4979:7:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 61429,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4979:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4978:9:90"
            },
            "scope": 61864,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 61452,
            "nodeType": "FunctionDefinition",
            "src": "5570:109:90",
            "nodes": [],
            "body": {
              "id": 61451,
              "nodeType": "Block",
              "src": "5644:35:90",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "id": 61448,
                      "name": "set",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61442,
                      "src": "5661:3:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                        "typeString": "struct EnumerableSet.Set storage pointer"
                      }
                    },
                    "id": 61449,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "5665:7:90",
                    "memberName": "_values",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 61257,
                    "src": "5661:11:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                      "typeString": "bytes32[] storage ref"
                    }
                  },
                  "functionReturnParameters": 61447,
                  "id": 61450,
                  "nodeType": "Return",
                  "src": "5654:18:90"
                }
              ]
            },
            "documentation": {
              "id": 61439,
              "nodeType": "StructuredDocumentation",
              "src": "5036:529:90",
              "text": " @dev Return the entire set in an array\n WARNING: This operation will copy the entire storage to memory, which can be quite expensive. This is designed\n to mostly be used by view accessors that are queried without any gas fees. Developers should keep in mind that\n this function has an unbounded cost, and using it as part of a state-changing function may render the function\n uncallable if the set grows to a point where copying to memory consumes too much gas to fit in a block."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_values",
            "nameLocation": "5579:7:90",
            "parameters": {
              "id": 61443,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61442,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "5599:3:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61452,
                  "src": "5587:15:90",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  },
                  "typeName": {
                    "id": 61441,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61440,
                      "name": "Set",
                      "nameLocations": [
                        "5587:3:90"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 61262,
                      "src": "5587:3:90"
                    },
                    "referencedDeclaration": 61262,
                    "src": "5587:3:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                      "typeString": "struct EnumerableSet.Set"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5586:17:90"
            },
            "returnParameters": {
              "id": 61447,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61446,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61452,
                  "src": "5626:16:90",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 61444,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "5626:7:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 61445,
                    "nodeType": "ArrayTypeName",
                    "src": "5626:9:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5625:18:90"
            },
            "scope": 61864,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 61456,
            "nodeType": "StructDefinition",
            "src": "5704:45:90",
            "nodes": [],
            "canonicalName": "EnumerableSet.Bytes32Set",
            "members": [
              {
                "constant": false,
                "id": 61455,
                "mutability": "mutable",
                "name": "_inner",
                "nameLocation": "5736:6:90",
                "nodeType": "VariableDeclaration",
                "scope": 61456,
                "src": "5732:10:90",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                  "typeString": "struct EnumerableSet.Set"
                },
                "typeName": {
                  "id": 61454,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 61453,
                    "name": "Set",
                    "nameLocations": [
                      "5732:3:90"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 61262,
                    "src": "5732:3:90"
                  },
                  "referencedDeclaration": 61262,
                  "src": "5732:3:90",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Bytes32Set",
            "nameLocation": "5711:10:90",
            "scope": 61864,
            "visibility": "public"
          },
          {
            "id": 61474,
            "nodeType": "FunctionDefinition",
            "src": "5919:123:90",
            "nodes": [],
            "body": {
              "id": 61473,
              "nodeType": "Block",
              "src": "5995:47:90",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 61468,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61460,
                          "src": "6017:3:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Bytes32Set_$61456_storage_ptr",
                            "typeString": "struct EnumerableSet.Bytes32Set storage pointer"
                          }
                        },
                        "id": 61469,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6021:6:90",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 61455,
                        "src": "6017:10:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "id": 61470,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61462,
                        "src": "6029:5:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 61467,
                      "name": "_add",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61304,
                      "src": "6012:4:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Set_$61262_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) returns (bool)"
                      }
                    },
                    "id": 61471,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6012:23:90",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 61466,
                  "id": 61472,
                  "nodeType": "Return",
                  "src": "6005:30:90"
                }
              ]
            },
            "documentation": {
              "id": 61457,
              "nodeType": "StructuredDocumentation",
              "src": "5755:159:90",
              "text": " @dev Add a value to a set. O(1).\n Returns true if the value was added to the set, that is if it was not\n already present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "add",
            "nameLocation": "5928:3:90",
            "parameters": {
              "id": 61463,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61460,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "5951:3:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61474,
                  "src": "5932:22:90",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Bytes32Set_$61456_storage_ptr",
                    "typeString": "struct EnumerableSet.Bytes32Set"
                  },
                  "typeName": {
                    "id": 61459,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61458,
                      "name": "Bytes32Set",
                      "nameLocations": [
                        "5932:10:90"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 61456,
                      "src": "5932:10:90"
                    },
                    "referencedDeclaration": 61456,
                    "src": "5932:10:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Bytes32Set_$61456_storage_ptr",
                      "typeString": "struct EnumerableSet.Bytes32Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61462,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5964:5:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61474,
                  "src": "5956:13:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 61461,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5956:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5931:39:90"
            },
            "returnParameters": {
              "id": 61466,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61465,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61474,
                  "src": "5989:4:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 61464,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5989:4:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5988:6:90"
            },
            "scope": 61864,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61492,
            "nodeType": "FunctionDefinition",
            "src": "6210:129:90",
            "nodes": [],
            "body": {
              "id": 61491,
              "nodeType": "Block",
              "src": "6289:50:90",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 61486,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61478,
                          "src": "6314:3:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Bytes32Set_$61456_storage_ptr",
                            "typeString": "struct EnumerableSet.Bytes32Set storage pointer"
                          }
                        },
                        "id": 61487,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6318:6:90",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 61455,
                        "src": "6314:10:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "id": 61488,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61480,
                        "src": "6326:5:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 61485,
                      "name": "_remove",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61388,
                      "src": "6306:7:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Set_$61262_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) returns (bool)"
                      }
                    },
                    "id": 61489,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6306:26:90",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 61484,
                  "id": 61490,
                  "nodeType": "Return",
                  "src": "6299:33:90"
                }
              ]
            },
            "documentation": {
              "id": 61475,
              "nodeType": "StructuredDocumentation",
              "src": "6048:157:90",
              "text": " @dev Removes a value from a set. O(1).\n Returns true if the value was removed from the set, that is if it was\n present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "remove",
            "nameLocation": "6219:6:90",
            "parameters": {
              "id": 61481,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61478,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "6245:3:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61492,
                  "src": "6226:22:90",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Bytes32Set_$61456_storage_ptr",
                    "typeString": "struct EnumerableSet.Bytes32Set"
                  },
                  "typeName": {
                    "id": 61477,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61476,
                      "name": "Bytes32Set",
                      "nameLocations": [
                        "6226:10:90"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 61456,
                      "src": "6226:10:90"
                    },
                    "referencedDeclaration": 61456,
                    "src": "6226:10:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Bytes32Set_$61456_storage_ptr",
                      "typeString": "struct EnumerableSet.Bytes32Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61480,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "6258:5:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61492,
                  "src": "6250:13:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 61479,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6250:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6225:39:90"
            },
            "returnParameters": {
              "id": 61484,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61483,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61492,
                  "src": "6283:4:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 61482,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6283:4:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6282:6:90"
            },
            "scope": 61864,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61510,
            "nodeType": "FunctionDefinition",
            "src": "6420:138:90",
            "nodes": [],
            "body": {
              "id": 61509,
              "nodeType": "Block",
              "src": "6506:52:90",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 61504,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61496,
                          "src": "6533:3:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Bytes32Set_$61456_storage_ptr",
                            "typeString": "struct EnumerableSet.Bytes32Set storage pointer"
                          }
                        },
                        "id": 61505,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6537:6:90",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 61455,
                        "src": "6533:10:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "id": 61506,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61498,
                        "src": "6545:5:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 61503,
                      "name": "_contains",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61407,
                      "src": "6523:9:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$61262_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) view returns (bool)"
                      }
                    },
                    "id": 61507,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6523:28:90",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 61502,
                  "id": 61508,
                  "nodeType": "Return",
                  "src": "6516:35:90"
                }
              ]
            },
            "documentation": {
              "id": 61493,
              "nodeType": "StructuredDocumentation",
              "src": "6345:70:90",
              "text": " @dev Returns true if the value is in the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "contains",
            "nameLocation": "6429:8:90",
            "parameters": {
              "id": 61499,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61496,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "6457:3:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61510,
                  "src": "6438:22:90",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Bytes32Set_$61456_storage_ptr",
                    "typeString": "struct EnumerableSet.Bytes32Set"
                  },
                  "typeName": {
                    "id": 61495,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61494,
                      "name": "Bytes32Set",
                      "nameLocations": [
                        "6438:10:90"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 61456,
                      "src": "6438:10:90"
                    },
                    "referencedDeclaration": 61456,
                    "src": "6438:10:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Bytes32Set_$61456_storage_ptr",
                      "typeString": "struct EnumerableSet.Bytes32Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61498,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "6470:5:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61510,
                  "src": "6462:13:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 61497,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6462:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6437:39:90"
            },
            "returnParameters": {
              "id": 61502,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61501,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61510,
                  "src": "6500:4:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 61500,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6500:4:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6499:6:90"
            },
            "scope": 61864,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61525,
            "nodeType": "FunctionDefinition",
            "src": "6639:115:90",
            "nodes": [],
            "body": {
              "id": 61524,
              "nodeType": "Block",
              "src": "6711:43:90",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 61520,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61514,
                          "src": "6736:3:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Bytes32Set_$61456_storage_ptr",
                            "typeString": "struct EnumerableSet.Bytes32Set storage pointer"
                          }
                        },
                        "id": 61521,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6740:6:90",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 61455,
                        "src": "6736:10:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      ],
                      "id": 61519,
                      "name": "_length",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61421,
                      "src": "6728:7:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$61262_storage_ptr_$returns$_t_uint256_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 61522,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6728:19:90",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 61518,
                  "id": 61523,
                  "nodeType": "Return",
                  "src": "6721:26:90"
                }
              ]
            },
            "documentation": {
              "id": 61511,
              "nodeType": "StructuredDocumentation",
              "src": "6564:70:90",
              "text": " @dev Returns the number of values in the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "length",
            "nameLocation": "6648:6:90",
            "parameters": {
              "id": 61515,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61514,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "6674:3:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61525,
                  "src": "6655:22:90",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Bytes32Set_$61456_storage_ptr",
                    "typeString": "struct EnumerableSet.Bytes32Set"
                  },
                  "typeName": {
                    "id": 61513,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61512,
                      "name": "Bytes32Set",
                      "nameLocations": [
                        "6655:10:90"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 61456,
                      "src": "6655:10:90"
                    },
                    "referencedDeclaration": 61456,
                    "src": "6655:10:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Bytes32Set_$61456_storage_ptr",
                      "typeString": "struct EnumerableSet.Bytes32Set"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6654:24:90"
            },
            "returnParameters": {
              "id": 61518,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61517,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61525,
                  "src": "6702:7:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61516,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6702:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6701:9:90"
            },
            "scope": 61864,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61543,
            "nodeType": "FunctionDefinition",
            "src": "7096:129:90",
            "nodes": [],
            "body": {
              "id": 61542,
              "nodeType": "Block",
              "src": "7179:46:90",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 61537,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61529,
                          "src": "7200:3:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Bytes32Set_$61456_storage_ptr",
                            "typeString": "struct EnumerableSet.Bytes32Set storage pointer"
                          }
                        },
                        "id": 61538,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7204:6:90",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 61455,
                        "src": "7200:10:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "id": 61539,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61531,
                        "src": "7212:5:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 61536,
                      "name": "_at",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61438,
                      "src": "7196:3:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$61262_storage_ptr_$_t_uint256_$returns$_t_bytes32_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,uint256) view returns (bytes32)"
                      }
                    },
                    "id": 61540,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7196:22:90",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 61535,
                  "id": 61541,
                  "nodeType": "Return",
                  "src": "7189:29:90"
                }
              ]
            },
            "documentation": {
              "id": 61526,
              "nodeType": "StructuredDocumentation",
              "src": "6760:331:90",
              "text": " @dev Returns the value stored at position `index` in the set. O(1).\n Note that there are no guarantees on the ordering of values inside the\n array, and it may change when more values are added or removed.\n Requirements:\n - `index` must be strictly less than {length}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "at",
            "nameLocation": "7105:2:90",
            "parameters": {
              "id": 61532,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61529,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "7127:3:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61543,
                  "src": "7108:22:90",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Bytes32Set_$61456_storage_ptr",
                    "typeString": "struct EnumerableSet.Bytes32Set"
                  },
                  "typeName": {
                    "id": 61528,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61527,
                      "name": "Bytes32Set",
                      "nameLocations": [
                        "7108:10:90"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 61456,
                      "src": "7108:10:90"
                    },
                    "referencedDeclaration": 61456,
                    "src": "7108:10:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Bytes32Set_$61456_storage_ptr",
                      "typeString": "struct EnumerableSet.Bytes32Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61531,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "7140:5:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61543,
                  "src": "7132:13:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61530,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7132:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7107:39:90"
            },
            "returnParameters": {
              "id": 61535,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61534,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61543,
                  "src": "7170:7:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 61533,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "7170:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7169:9:90"
            },
            "scope": 61864,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61573,
            "nodeType": "FunctionDefinition",
            "src": "7765:300:90",
            "nodes": [],
            "body": {
              "id": 61572,
              "nodeType": "Block",
              "src": "7846:219:90",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    61557
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61557,
                      "mutability": "mutable",
                      "name": "store",
                      "nameLocation": "7873:5:90",
                      "nodeType": "VariableDeclaration",
                      "scope": 61572,
                      "src": "7856:22:90",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 61555,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "7856:7:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 61556,
                        "nodeType": "ArrayTypeName",
                        "src": "7856:9:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61562,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 61559,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61547,
                          "src": "7889:3:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Bytes32Set_$61456_storage_ptr",
                            "typeString": "struct EnumerableSet.Bytes32Set storage pointer"
                          }
                        },
                        "id": 61560,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7893:6:90",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 61455,
                        "src": "7889:10:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      ],
                      "id": 61558,
                      "name": "_values",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61452,
                      "src": "7881:7:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$61262_storage_ptr_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer) view returns (bytes32[] memory)"
                      }
                    },
                    "id": 61561,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7881:19:90",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                      "typeString": "bytes32[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7856:44:90"
                },
                {
                  "assignments": [
                    61567
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61567,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "7927:6:90",
                      "nodeType": "VariableDeclaration",
                      "scope": 61572,
                      "src": "7910:23:90",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 61565,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "7910:7:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 61566,
                        "nodeType": "ArrayTypeName",
                        "src": "7910:9:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61568,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7910:23:90"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "7996:39:90",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "8010:15:90",
                        "value": {
                          "name": "store",
                          "nodeType": "YulIdentifier",
                          "src": "8020:5:90"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nodeType": "YulIdentifier",
                            "src": "8010:6:90"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 61567,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8010:6:90",
                      "valueSize": 1
                    },
                    {
                      "declaration": 61557,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8020:5:90",
                      "valueSize": 1
                    }
                  ],
                  "id": 61569,
                  "nodeType": "InlineAssembly",
                  "src": "7987:48:90"
                },
                {
                  "expression": {
                    "id": 61570,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 61567,
                    "src": "8052:6:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                      "typeString": "bytes32[] memory"
                    }
                  },
                  "functionReturnParameters": 61552,
                  "id": 61571,
                  "nodeType": "Return",
                  "src": "8045:13:90"
                }
              ]
            },
            "documentation": {
              "id": 61544,
              "nodeType": "StructuredDocumentation",
              "src": "7231:529:90",
              "text": " @dev Return the entire set in an array\n WARNING: This operation will copy the entire storage to memory, which can be quite expensive. This is designed\n to mostly be used by view accessors that are queried without any gas fees. Developers should keep in mind that\n this function has an unbounded cost, and using it as part of a state-changing function may render the function\n uncallable if the set grows to a point where copying to memory consumes too much gas to fit in a block."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "values",
            "nameLocation": "7774:6:90",
            "parameters": {
              "id": 61548,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61547,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "7800:3:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61573,
                  "src": "7781:22:90",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Bytes32Set_$61456_storage_ptr",
                    "typeString": "struct EnumerableSet.Bytes32Set"
                  },
                  "typeName": {
                    "id": 61546,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61545,
                      "name": "Bytes32Set",
                      "nameLocations": [
                        "7781:10:90"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 61456,
                      "src": "7781:10:90"
                    },
                    "referencedDeclaration": 61456,
                    "src": "7781:10:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Bytes32Set_$61456_storage_ptr",
                      "typeString": "struct EnumerableSet.Bytes32Set"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7780:24:90"
            },
            "returnParameters": {
              "id": 61552,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61551,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61573,
                  "src": "7828:16:90",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 61549,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "7828:7:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 61550,
                    "nodeType": "ArrayTypeName",
                    "src": "7828:9:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7827:18:90"
            },
            "scope": 61864,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61577,
            "nodeType": "StructDefinition",
            "src": "8090:45:90",
            "nodes": [],
            "canonicalName": "EnumerableSet.AddressSet",
            "members": [
              {
                "constant": false,
                "id": 61576,
                "mutability": "mutable",
                "name": "_inner",
                "nameLocation": "8122:6:90",
                "nodeType": "VariableDeclaration",
                "scope": 61577,
                "src": "8118:10:90",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                  "typeString": "struct EnumerableSet.Set"
                },
                "typeName": {
                  "id": 61575,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 61574,
                    "name": "Set",
                    "nameLocations": [
                      "8118:3:90"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 61262,
                    "src": "8118:3:90"
                  },
                  "referencedDeclaration": 61262,
                  "src": "8118:3:90",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "AddressSet",
            "nameLocation": "8097:10:90",
            "scope": 61864,
            "visibility": "public"
          },
          {
            "id": 61604,
            "nodeType": "FunctionDefinition",
            "src": "8305:150:90",
            "nodes": [],
            "body": {
              "id": 61603,
              "nodeType": "Block",
              "src": "8381:74:90",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 61589,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61581,
                          "src": "8403:3:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_AddressSet_$61577_storage_ptr",
                            "typeString": "struct EnumerableSet.AddressSet storage pointer"
                          }
                        },
                        "id": 61590,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8407:6:90",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 61576,
                        "src": "8403:10:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 61597,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61583,
                                    "src": "8439:5:90",
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
                                  "id": 61596,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "8431:7:90",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint160_$",
                                    "typeString": "type(uint160)"
                                  },
                                  "typeName": {
                                    "id": 61595,
                                    "name": "uint160",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "8431:7:90",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 61598,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8431:14:90",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint160",
                                  "typeString": "uint160"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint160",
                                  "typeString": "uint160"
                                }
                              ],
                              "id": 61594,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "8423:7:90",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 61593,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "8423:7:90",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 61599,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8423:23:90",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 61592,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8415:7:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 61591,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "8415:7:90",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 61600,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8415:32:90",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 61588,
                      "name": "_add",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61304,
                      "src": "8398:4:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Set_$61262_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) returns (bool)"
                      }
                    },
                    "id": 61601,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8398:50:90",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 61587,
                  "id": 61602,
                  "nodeType": "Return",
                  "src": "8391:57:90"
                }
              ]
            },
            "documentation": {
              "id": 61578,
              "nodeType": "StructuredDocumentation",
              "src": "8141:159:90",
              "text": " @dev Add a value to a set. O(1).\n Returns true if the value was added to the set, that is if it was not\n already present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "add",
            "nameLocation": "8314:3:90",
            "parameters": {
              "id": 61584,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61581,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "8337:3:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61604,
                  "src": "8318:22:90",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AddressSet_$61577_storage_ptr",
                    "typeString": "struct EnumerableSet.AddressSet"
                  },
                  "typeName": {
                    "id": 61580,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61579,
                      "name": "AddressSet",
                      "nameLocations": [
                        "8318:10:90"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 61577,
                      "src": "8318:10:90"
                    },
                    "referencedDeclaration": 61577,
                    "src": "8318:10:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AddressSet_$61577_storage_ptr",
                      "typeString": "struct EnumerableSet.AddressSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61583,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "8350:5:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61604,
                  "src": "8342:13:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61582,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8342:7:90",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8317:39:90"
            },
            "returnParameters": {
              "id": 61587,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61586,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61604,
                  "src": "8375:4:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 61585,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8375:4:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8374:6:90"
            },
            "scope": 61864,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61631,
            "nodeType": "FunctionDefinition",
            "src": "8623:156:90",
            "nodes": [],
            "body": {
              "id": 61630,
              "nodeType": "Block",
              "src": "8702:77:90",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 61616,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61608,
                          "src": "8727:3:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_AddressSet_$61577_storage_ptr",
                            "typeString": "struct EnumerableSet.AddressSet storage pointer"
                          }
                        },
                        "id": 61617,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8731:6:90",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 61576,
                        "src": "8727:10:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 61624,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61610,
                                    "src": "8763:5:90",
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
                                  "id": 61623,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "8755:7:90",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint160_$",
                                    "typeString": "type(uint160)"
                                  },
                                  "typeName": {
                                    "id": 61622,
                                    "name": "uint160",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "8755:7:90",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 61625,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8755:14:90",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint160",
                                  "typeString": "uint160"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint160",
                                  "typeString": "uint160"
                                }
                              ],
                              "id": 61621,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "8747:7:90",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 61620,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "8747:7:90",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 61626,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8747:23:90",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 61619,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8739:7:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 61618,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "8739:7:90",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 61627,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8739:32:90",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 61615,
                      "name": "_remove",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61388,
                      "src": "8719:7:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Set_$61262_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) returns (bool)"
                      }
                    },
                    "id": 61628,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8719:53:90",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 61614,
                  "id": 61629,
                  "nodeType": "Return",
                  "src": "8712:60:90"
                }
              ]
            },
            "documentation": {
              "id": 61605,
              "nodeType": "StructuredDocumentation",
              "src": "8461:157:90",
              "text": " @dev Removes a value from a set. O(1).\n Returns true if the value was removed from the set, that is if it was\n present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "remove",
            "nameLocation": "8632:6:90",
            "parameters": {
              "id": 61611,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61608,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "8658:3:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61631,
                  "src": "8639:22:90",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AddressSet_$61577_storage_ptr",
                    "typeString": "struct EnumerableSet.AddressSet"
                  },
                  "typeName": {
                    "id": 61607,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61606,
                      "name": "AddressSet",
                      "nameLocations": [
                        "8639:10:90"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 61577,
                      "src": "8639:10:90"
                    },
                    "referencedDeclaration": 61577,
                    "src": "8639:10:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AddressSet_$61577_storage_ptr",
                      "typeString": "struct EnumerableSet.AddressSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61610,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "8671:5:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61631,
                  "src": "8663:13:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61609,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8663:7:90",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8638:39:90"
            },
            "returnParameters": {
              "id": 61614,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61613,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61631,
                  "src": "8696:4:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 61612,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8696:4:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8695:6:90"
            },
            "scope": 61864,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61658,
            "nodeType": "FunctionDefinition",
            "src": "8860:165:90",
            "nodes": [],
            "body": {
              "id": 61657,
              "nodeType": "Block",
              "src": "8946:79:90",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 61643,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61635,
                          "src": "8973:3:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_AddressSet_$61577_storage_ptr",
                            "typeString": "struct EnumerableSet.AddressSet storage pointer"
                          }
                        },
                        "id": 61644,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8977:6:90",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 61576,
                        "src": "8973:10:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 61651,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61637,
                                    "src": "9009:5:90",
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
                                  "id": 61650,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "9001:7:90",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint160_$",
                                    "typeString": "type(uint160)"
                                  },
                                  "typeName": {
                                    "id": 61649,
                                    "name": "uint160",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "9001:7:90",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 61652,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "9001:14:90",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint160",
                                  "typeString": "uint160"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint160",
                                  "typeString": "uint160"
                                }
                              ],
                              "id": 61648,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "8993:7:90",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 61647,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "8993:7:90",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 61653,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8993:23:90",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 61646,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8985:7:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 61645,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "8985:7:90",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 61654,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8985:32:90",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 61642,
                      "name": "_contains",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61407,
                      "src": "8963:9:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$61262_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) view returns (bool)"
                      }
                    },
                    "id": 61655,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8963:55:90",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 61641,
                  "id": 61656,
                  "nodeType": "Return",
                  "src": "8956:62:90"
                }
              ]
            },
            "documentation": {
              "id": 61632,
              "nodeType": "StructuredDocumentation",
              "src": "8785:70:90",
              "text": " @dev Returns true if the value is in the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "contains",
            "nameLocation": "8869:8:90",
            "parameters": {
              "id": 61638,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61635,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "8897:3:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61658,
                  "src": "8878:22:90",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AddressSet_$61577_storage_ptr",
                    "typeString": "struct EnumerableSet.AddressSet"
                  },
                  "typeName": {
                    "id": 61634,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61633,
                      "name": "AddressSet",
                      "nameLocations": [
                        "8878:10:90"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 61577,
                      "src": "8878:10:90"
                    },
                    "referencedDeclaration": 61577,
                    "src": "8878:10:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AddressSet_$61577_storage_ptr",
                      "typeString": "struct EnumerableSet.AddressSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61637,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "8910:5:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61658,
                  "src": "8902:13:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61636,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8902:7:90",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8877:39:90"
            },
            "returnParameters": {
              "id": 61641,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61640,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61658,
                  "src": "8940:4:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 61639,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8940:4:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8939:6:90"
            },
            "scope": 61864,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61673,
            "nodeType": "FunctionDefinition",
            "src": "9106:115:90",
            "nodes": [],
            "body": {
              "id": 61672,
              "nodeType": "Block",
              "src": "9178:43:90",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 61668,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61662,
                          "src": "9203:3:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_AddressSet_$61577_storage_ptr",
                            "typeString": "struct EnumerableSet.AddressSet storage pointer"
                          }
                        },
                        "id": 61669,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9207:6:90",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 61576,
                        "src": "9203:10:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      ],
                      "id": 61667,
                      "name": "_length",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61421,
                      "src": "9195:7:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$61262_storage_ptr_$returns$_t_uint256_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 61670,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9195:19:90",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 61666,
                  "id": 61671,
                  "nodeType": "Return",
                  "src": "9188:26:90"
                }
              ]
            },
            "documentation": {
              "id": 61659,
              "nodeType": "StructuredDocumentation",
              "src": "9031:70:90",
              "text": " @dev Returns the number of values in the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "length",
            "nameLocation": "9115:6:90",
            "parameters": {
              "id": 61663,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61662,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "9141:3:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61673,
                  "src": "9122:22:90",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AddressSet_$61577_storage_ptr",
                    "typeString": "struct EnumerableSet.AddressSet"
                  },
                  "typeName": {
                    "id": 61661,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61660,
                      "name": "AddressSet",
                      "nameLocations": [
                        "9122:10:90"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 61577,
                      "src": "9122:10:90"
                    },
                    "referencedDeclaration": 61577,
                    "src": "9122:10:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AddressSet_$61577_storage_ptr",
                      "typeString": "struct EnumerableSet.AddressSet"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9121:24:90"
            },
            "returnParameters": {
              "id": 61666,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61665,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61673,
                  "src": "9169:7:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61664,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9169:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9168:9:90"
            },
            "scope": 61864,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61700,
            "nodeType": "FunctionDefinition",
            "src": "9563:156:90",
            "nodes": [],
            "body": {
              "id": 61699,
              "nodeType": "Block",
              "src": "9646:73:90",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "expression": {
                                      "id": 61691,
                                      "name": "set",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 61677,
                                      "src": "9691:3:90",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_AddressSet_$61577_storage_ptr",
                                        "typeString": "struct EnumerableSet.AddressSet storage pointer"
                                      }
                                    },
                                    "id": 61692,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "9695:6:90",
                                    "memberName": "_inner",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 61576,
                                    "src": "9691:10:90",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_Set_$61262_storage",
                                      "typeString": "struct EnumerableSet.Set storage ref"
                                    }
                                  },
                                  {
                                    "id": 61693,
                                    "name": "index",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61679,
                                    "src": "9703:5:90",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_struct$_Set_$61262_storage",
                                      "typeString": "struct EnumerableSet.Set storage ref"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "id": 61690,
                                  "name": "_at",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 61438,
                                  "src": "9687:3:90",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$61262_storage_ptr_$_t_uint256_$returns$_t_bytes32_$",
                                    "typeString": "function (struct EnumerableSet.Set storage pointer,uint256) view returns (bytes32)"
                                  }
                                },
                                "id": 61694,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "9687:22:90",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "id": 61689,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "9679:7:90",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 61688,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "9679:7:90",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 61695,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9679:31:90",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 61687,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "9671:7:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint160_$",
                            "typeString": "type(uint160)"
                          },
                          "typeName": {
                            "id": 61686,
                            "name": "uint160",
                            "nodeType": "ElementaryTypeName",
                            "src": "9671:7:90",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 61696,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9671:40:90",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint160",
                          "typeString": "uint160"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint160",
                          "typeString": "uint160"
                        }
                      ],
                      "id": 61685,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "9663:7:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": {
                        "id": 61684,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "9663:7:90",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 61697,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9663:49:90",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 61683,
                  "id": 61698,
                  "nodeType": "Return",
                  "src": "9656:56:90"
                }
              ]
            },
            "documentation": {
              "id": 61674,
              "nodeType": "StructuredDocumentation",
              "src": "9227:331:90",
              "text": " @dev Returns the value stored at position `index` in the set. O(1).\n Note that there are no guarantees on the ordering of values inside the\n array, and it may change when more values are added or removed.\n Requirements:\n - `index` must be strictly less than {length}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "at",
            "nameLocation": "9572:2:90",
            "parameters": {
              "id": 61680,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61677,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "9594:3:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61700,
                  "src": "9575:22:90",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AddressSet_$61577_storage_ptr",
                    "typeString": "struct EnumerableSet.AddressSet"
                  },
                  "typeName": {
                    "id": 61676,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61675,
                      "name": "AddressSet",
                      "nameLocations": [
                        "9575:10:90"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 61577,
                      "src": "9575:10:90"
                    },
                    "referencedDeclaration": 61577,
                    "src": "9575:10:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AddressSet_$61577_storage_ptr",
                      "typeString": "struct EnumerableSet.AddressSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61679,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "9607:5:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61700,
                  "src": "9599:13:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61678,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9599:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9574:39:90"
            },
            "returnParameters": {
              "id": 61683,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61682,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61700,
                  "src": "9637:7:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61681,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9637:7:90",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9636:9:90"
            },
            "scope": 61864,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61730,
            "nodeType": "FunctionDefinition",
            "src": "10259:300:90",
            "nodes": [],
            "body": {
              "id": 61729,
              "nodeType": "Block",
              "src": "10340:219:90",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    61714
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61714,
                      "mutability": "mutable",
                      "name": "store",
                      "nameLocation": "10367:5:90",
                      "nodeType": "VariableDeclaration",
                      "scope": 61729,
                      "src": "10350:22:90",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 61712,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "10350:7:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 61713,
                        "nodeType": "ArrayTypeName",
                        "src": "10350:9:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61719,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 61716,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61704,
                          "src": "10383:3:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_AddressSet_$61577_storage_ptr",
                            "typeString": "struct EnumerableSet.AddressSet storage pointer"
                          }
                        },
                        "id": 61717,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "10387:6:90",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 61576,
                        "src": "10383:10:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      ],
                      "id": 61715,
                      "name": "_values",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61452,
                      "src": "10375:7:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$61262_storage_ptr_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer) view returns (bytes32[] memory)"
                      }
                    },
                    "id": 61718,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10375:19:90",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                      "typeString": "bytes32[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10350:44:90"
                },
                {
                  "assignments": [
                    61724
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61724,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "10421:6:90",
                      "nodeType": "VariableDeclaration",
                      "scope": 61729,
                      "src": "10404:23:90",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 61722,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "10404:7:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 61723,
                        "nodeType": "ArrayTypeName",
                        "src": "10404:9:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61725,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10404:23:90"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "10490:39:90",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "10504:15:90",
                        "value": {
                          "name": "store",
                          "nodeType": "YulIdentifier",
                          "src": "10514:5:90"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nodeType": "YulIdentifier",
                            "src": "10504:6:90"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 61724,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10504:6:90",
                      "valueSize": 1
                    },
                    {
                      "declaration": 61714,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10514:5:90",
                      "valueSize": 1
                    }
                  ],
                  "id": 61726,
                  "nodeType": "InlineAssembly",
                  "src": "10481:48:90"
                },
                {
                  "expression": {
                    "id": 61727,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 61724,
                    "src": "10546:6:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 61709,
                  "id": 61728,
                  "nodeType": "Return",
                  "src": "10539:13:90"
                }
              ]
            },
            "documentation": {
              "id": 61701,
              "nodeType": "StructuredDocumentation",
              "src": "9725:529:90",
              "text": " @dev Return the entire set in an array\n WARNING: This operation will copy the entire storage to memory, which can be quite expensive. This is designed\n to mostly be used by view accessors that are queried without any gas fees. Developers should keep in mind that\n this function has an unbounded cost, and using it as part of a state-changing function may render the function\n uncallable if the set grows to a point where copying to memory consumes too much gas to fit in a block."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "values",
            "nameLocation": "10268:6:90",
            "parameters": {
              "id": 61705,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61704,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "10294:3:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61730,
                  "src": "10275:22:90",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AddressSet_$61577_storage_ptr",
                    "typeString": "struct EnumerableSet.AddressSet"
                  },
                  "typeName": {
                    "id": 61703,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61702,
                      "name": "AddressSet",
                      "nameLocations": [
                        "10275:10:90"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 61577,
                      "src": "10275:10:90"
                    },
                    "referencedDeclaration": 61577,
                    "src": "10275:10:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AddressSet_$61577_storage_ptr",
                      "typeString": "struct EnumerableSet.AddressSet"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10274:24:90"
            },
            "returnParameters": {
              "id": 61709,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61708,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61730,
                  "src": "10322:16:90",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 61706,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "10322:7:90",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 61707,
                    "nodeType": "ArrayTypeName",
                    "src": "10322:9:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10321:18:90"
            },
            "scope": 61864,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61734,
            "nodeType": "StructDefinition",
            "src": "10581:42:90",
            "nodes": [],
            "canonicalName": "EnumerableSet.UintSet",
            "members": [
              {
                "constant": false,
                "id": 61733,
                "mutability": "mutable",
                "name": "_inner",
                "nameLocation": "10610:6:90",
                "nodeType": "VariableDeclaration",
                "scope": 61734,
                "src": "10606:10:90",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                  "typeString": "struct EnumerableSet.Set"
                },
                "typeName": {
                  "id": 61732,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 61731,
                    "name": "Set",
                    "nameLocations": [
                      "10606:3:90"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 61262,
                    "src": "10606:3:90"
                  },
                  "referencedDeclaration": 61262,
                  "src": "10606:3:90",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$61262_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "UintSet",
            "nameLocation": "10588:7:90",
            "scope": 61864,
            "visibility": "public"
          },
          {
            "id": 61755,
            "nodeType": "FunctionDefinition",
            "src": "10793:129:90",
            "nodes": [],
            "body": {
              "id": 61754,
              "nodeType": "Block",
              "src": "10866:56:90",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 61746,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61738,
                          "src": "10888:3:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UintSet_$61734_storage_ptr",
                            "typeString": "struct EnumerableSet.UintSet storage pointer"
                          }
                        },
                        "id": 61747,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "10892:6:90",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 61733,
                        "src": "10888:10:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 61750,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61740,
                            "src": "10908:5:90",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 61749,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "10900:7:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 61748,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "10900:7:90",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 61751,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10900:14:90",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 61745,
                      "name": "_add",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61304,
                      "src": "10883:4:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Set_$61262_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) returns (bool)"
                      }
                    },
                    "id": 61752,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10883:32:90",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 61744,
                  "id": 61753,
                  "nodeType": "Return",
                  "src": "10876:39:90"
                }
              ]
            },
            "documentation": {
              "id": 61735,
              "nodeType": "StructuredDocumentation",
              "src": "10629:159:90",
              "text": " @dev Add a value to a set. O(1).\n Returns true if the value was added to the set, that is if it was not\n already present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "add",
            "nameLocation": "10802:3:90",
            "parameters": {
              "id": 61741,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61738,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "10822:3:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61755,
                  "src": "10806:19:90",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_UintSet_$61734_storage_ptr",
                    "typeString": "struct EnumerableSet.UintSet"
                  },
                  "typeName": {
                    "id": 61737,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61736,
                      "name": "UintSet",
                      "nameLocations": [
                        "10806:7:90"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 61734,
                      "src": "10806:7:90"
                    },
                    "referencedDeclaration": 61734,
                    "src": "10806:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UintSet_$61734_storage_ptr",
                      "typeString": "struct EnumerableSet.UintSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61740,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "10835:5:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61755,
                  "src": "10827:13:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61739,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10827:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10805:36:90"
            },
            "returnParameters": {
              "id": 61744,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61743,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61755,
                  "src": "10860:4:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 61742,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "10860:4:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10859:6:90"
            },
            "scope": 61864,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61776,
            "nodeType": "FunctionDefinition",
            "src": "11090:135:90",
            "nodes": [],
            "body": {
              "id": 61775,
              "nodeType": "Block",
              "src": "11166:59:90",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 61767,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61759,
                          "src": "11191:3:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UintSet_$61734_storage_ptr",
                            "typeString": "struct EnumerableSet.UintSet storage pointer"
                          }
                        },
                        "id": 61768,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11195:6:90",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 61733,
                        "src": "11191:10:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 61771,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61761,
                            "src": "11211:5:90",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 61770,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "11203:7:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 61769,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "11203:7:90",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 61772,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11203:14:90",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 61766,
                      "name": "_remove",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61388,
                      "src": "11183:7:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Set_$61262_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) returns (bool)"
                      }
                    },
                    "id": 61773,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11183:35:90",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 61765,
                  "id": 61774,
                  "nodeType": "Return",
                  "src": "11176:42:90"
                }
              ]
            },
            "documentation": {
              "id": 61756,
              "nodeType": "StructuredDocumentation",
              "src": "10928:157:90",
              "text": " @dev Removes a value from a set. O(1).\n Returns true if the value was removed from the set, that is if it was\n present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "remove",
            "nameLocation": "11099:6:90",
            "parameters": {
              "id": 61762,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61759,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "11122:3:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61776,
                  "src": "11106:19:90",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_UintSet_$61734_storage_ptr",
                    "typeString": "struct EnumerableSet.UintSet"
                  },
                  "typeName": {
                    "id": 61758,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61757,
                      "name": "UintSet",
                      "nameLocations": [
                        "11106:7:90"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 61734,
                      "src": "11106:7:90"
                    },
                    "referencedDeclaration": 61734,
                    "src": "11106:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UintSet_$61734_storage_ptr",
                      "typeString": "struct EnumerableSet.UintSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61761,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11135:5:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61776,
                  "src": "11127:13:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61760,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11127:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11105:36:90"
            },
            "returnParameters": {
              "id": 61765,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61764,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61776,
                  "src": "11160:4:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 61763,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "11160:4:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11159:6:90"
            },
            "scope": 61864,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61797,
            "nodeType": "FunctionDefinition",
            "src": "11306:144:90",
            "nodes": [],
            "body": {
              "id": 61796,
              "nodeType": "Block",
              "src": "11389:61:90",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 61788,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61780,
                          "src": "11416:3:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UintSet_$61734_storage_ptr",
                            "typeString": "struct EnumerableSet.UintSet storage pointer"
                          }
                        },
                        "id": 61789,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11420:6:90",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 61733,
                        "src": "11416:10:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 61792,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61782,
                            "src": "11436:5:90",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 61791,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "11428:7:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 61790,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "11428:7:90",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 61793,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11428:14:90",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 61787,
                      "name": "_contains",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61407,
                      "src": "11406:9:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$61262_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) view returns (bool)"
                      }
                    },
                    "id": 61794,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11406:37:90",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 61786,
                  "id": 61795,
                  "nodeType": "Return",
                  "src": "11399:44:90"
                }
              ]
            },
            "documentation": {
              "id": 61777,
              "nodeType": "StructuredDocumentation",
              "src": "11231:70:90",
              "text": " @dev Returns true if the value is in the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "contains",
            "nameLocation": "11315:8:90",
            "parameters": {
              "id": 61783,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61780,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "11340:3:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61797,
                  "src": "11324:19:90",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_UintSet_$61734_storage_ptr",
                    "typeString": "struct EnumerableSet.UintSet"
                  },
                  "typeName": {
                    "id": 61779,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61778,
                      "name": "UintSet",
                      "nameLocations": [
                        "11324:7:90"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 61734,
                      "src": "11324:7:90"
                    },
                    "referencedDeclaration": 61734,
                    "src": "11324:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UintSet_$61734_storage_ptr",
                      "typeString": "struct EnumerableSet.UintSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61782,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11353:5:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61797,
                  "src": "11345:13:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61781,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11345:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11323:36:90"
            },
            "returnParameters": {
              "id": 61786,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61785,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61797,
                  "src": "11383:4:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 61784,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "11383:4:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11382:6:90"
            },
            "scope": 61864,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61812,
            "nodeType": "FunctionDefinition",
            "src": "11531:112:90",
            "nodes": [],
            "body": {
              "id": 61811,
              "nodeType": "Block",
              "src": "11600:43:90",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 61807,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61801,
                          "src": "11625:3:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UintSet_$61734_storage_ptr",
                            "typeString": "struct EnumerableSet.UintSet storage pointer"
                          }
                        },
                        "id": 61808,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11629:6:90",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 61733,
                        "src": "11625:10:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      ],
                      "id": 61806,
                      "name": "_length",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61421,
                      "src": "11617:7:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$61262_storage_ptr_$returns$_t_uint256_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 61809,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11617:19:90",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 61805,
                  "id": 61810,
                  "nodeType": "Return",
                  "src": "11610:26:90"
                }
              ]
            },
            "documentation": {
              "id": 61798,
              "nodeType": "StructuredDocumentation",
              "src": "11456:70:90",
              "text": " @dev Returns the number of values in the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "length",
            "nameLocation": "11540:6:90",
            "parameters": {
              "id": 61802,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61801,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "11563:3:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61812,
                  "src": "11547:19:90",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_UintSet_$61734_storage_ptr",
                    "typeString": "struct EnumerableSet.UintSet"
                  },
                  "typeName": {
                    "id": 61800,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61799,
                      "name": "UintSet",
                      "nameLocations": [
                        "11547:7:90"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 61734,
                      "src": "11547:7:90"
                    },
                    "referencedDeclaration": 61734,
                    "src": "11547:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UintSet_$61734_storage_ptr",
                      "typeString": "struct EnumerableSet.UintSet"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11546:21:90"
            },
            "returnParameters": {
              "id": 61805,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61804,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61812,
                  "src": "11591:7:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61803,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11591:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11590:9:90"
            },
            "scope": 61864,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61833,
            "nodeType": "FunctionDefinition",
            "src": "11985:135:90",
            "nodes": [],
            "body": {
              "id": 61832,
              "nodeType": "Block",
              "src": "12065:55:90",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 61826,
                              "name": "set",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61816,
                              "src": "12094:3:90",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_UintSet_$61734_storage_ptr",
                                "typeString": "struct EnumerableSet.UintSet storage pointer"
                              }
                            },
                            "id": 61827,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "12098:6:90",
                            "memberName": "_inner",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 61733,
                            "src": "12094:10:90",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Set_$61262_storage",
                              "typeString": "struct EnumerableSet.Set storage ref"
                            }
                          },
                          {
                            "id": 61828,
                            "name": "index",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61818,
                            "src": "12106:5:90",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_Set_$61262_storage",
                              "typeString": "struct EnumerableSet.Set storage ref"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 61825,
                          "name": "_at",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61438,
                          "src": "12090:3:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$61262_storage_ptr_$_t_uint256_$returns$_t_bytes32_$",
                            "typeString": "function (struct EnumerableSet.Set storage pointer,uint256) view returns (bytes32)"
                          }
                        },
                        "id": 61829,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12090:22:90",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 61824,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "12082:7:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 61823,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "12082:7:90",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 61830,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12082:31:90",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 61822,
                  "id": 61831,
                  "nodeType": "Return",
                  "src": "12075:38:90"
                }
              ]
            },
            "documentation": {
              "id": 61813,
              "nodeType": "StructuredDocumentation",
              "src": "11649:331:90",
              "text": " @dev Returns the value stored at position `index` in the set. O(1).\n Note that there are no guarantees on the ordering of values inside the\n array, and it may change when more values are added or removed.\n Requirements:\n - `index` must be strictly less than {length}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "at",
            "nameLocation": "11994:2:90",
            "parameters": {
              "id": 61819,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61816,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "12013:3:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61833,
                  "src": "11997:19:90",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_UintSet_$61734_storage_ptr",
                    "typeString": "struct EnumerableSet.UintSet"
                  },
                  "typeName": {
                    "id": 61815,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61814,
                      "name": "UintSet",
                      "nameLocations": [
                        "11997:7:90"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 61734,
                      "src": "11997:7:90"
                    },
                    "referencedDeclaration": 61734,
                    "src": "11997:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UintSet_$61734_storage_ptr",
                      "typeString": "struct EnumerableSet.UintSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61818,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "12026:5:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61833,
                  "src": "12018:13:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61817,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12018:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11996:36:90"
            },
            "returnParameters": {
              "id": 61822,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61821,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61833,
                  "src": "12056:7:90",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61820,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12056:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12055:9:90"
            },
            "scope": 61864,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61863,
            "nodeType": "FunctionDefinition",
            "src": "12660:297:90",
            "nodes": [],
            "body": {
              "id": 61862,
              "nodeType": "Block",
              "src": "12738:219:90",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    61847
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61847,
                      "mutability": "mutable",
                      "name": "store",
                      "nameLocation": "12765:5:90",
                      "nodeType": "VariableDeclaration",
                      "scope": 61862,
                      "src": "12748:22:90",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 61845,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "12748:7:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 61846,
                        "nodeType": "ArrayTypeName",
                        "src": "12748:9:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61852,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 61849,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61837,
                          "src": "12781:3:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UintSet_$61734_storage_ptr",
                            "typeString": "struct EnumerableSet.UintSet storage pointer"
                          }
                        },
                        "id": 61850,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "12785:6:90",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 61733,
                        "src": "12781:10:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$61262_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      ],
                      "id": 61848,
                      "name": "_values",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61452,
                      "src": "12773:7:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$61262_storage_ptr_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer) view returns (bytes32[] memory)"
                      }
                    },
                    "id": 61851,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12773:19:90",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                      "typeString": "bytes32[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12748:44:90"
                },
                {
                  "assignments": [
                    61857
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61857,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "12819:6:90",
                      "nodeType": "VariableDeclaration",
                      "scope": 61862,
                      "src": "12802:23:90",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 61855,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "12802:7:90",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 61856,
                        "nodeType": "ArrayTypeName",
                        "src": "12802:9:90",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61858,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12802:23:90"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "12888:39:90",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "12902:15:90",
                        "value": {
                          "name": "store",
                          "nodeType": "YulIdentifier",
                          "src": "12912:5:90"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nodeType": "YulIdentifier",
                            "src": "12902:6:90"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 61857,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "12902:6:90",
                      "valueSize": 1
                    },
                    {
                      "declaration": 61847,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "12912:5:90",
                      "valueSize": 1
                    }
                  ],
                  "id": 61859,
                  "nodeType": "InlineAssembly",
                  "src": "12879:48:90"
                },
                {
                  "expression": {
                    "id": 61860,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 61857,
                    "src": "12944:6:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "functionReturnParameters": 61842,
                  "id": 61861,
                  "nodeType": "Return",
                  "src": "12937:13:90"
                }
              ]
            },
            "documentation": {
              "id": 61834,
              "nodeType": "StructuredDocumentation",
              "src": "12126:529:90",
              "text": " @dev Return the entire set in an array\n WARNING: This operation will copy the entire storage to memory, which can be quite expensive. This is designed\n to mostly be used by view accessors that are queried without any gas fees. Developers should keep in mind that\n this function has an unbounded cost, and using it as part of a state-changing function may render the function\n uncallable if the set grows to a point where copying to memory consumes too much gas to fit in a block."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "values",
            "nameLocation": "12669:6:90",
            "parameters": {
              "id": 61838,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61837,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "12692:3:90",
                  "nodeType": "VariableDeclaration",
                  "scope": 61863,
                  "src": "12676:19:90",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_UintSet_$61734_storage_ptr",
                    "typeString": "struct EnumerableSet.UintSet"
                  },
                  "typeName": {
                    "id": 61836,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61835,
                      "name": "UintSet",
                      "nameLocations": [
                        "12676:7:90"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 61734,
                      "src": "12676:7:90"
                    },
                    "referencedDeclaration": 61734,
                    "src": "12676:7:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UintSet_$61734_storage_ptr",
                      "typeString": "struct EnumerableSet.UintSet"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12675:21:90"
            },
            "returnParameters": {
              "id": 61842,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61841,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61863,
                  "src": "12720:16:90",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 61839,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "12720:7:90",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 61840,
                    "nodeType": "ArrayTypeName",
                    "src": "12720:9:90",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12719:18:90"
            },
            "scope": 61864,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "EnumerableSet",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 61254,
          "nodeType": "StructuredDocumentation",
          "src": "230:1098:90",
          "text": " @dev Library for managing\n https://en.wikipedia.org/wiki/Set_(abstract_data_type)[sets] of primitive\n types.\n Sets have the following properties:\n - Elements are added, removed, and checked for existence in constant time\n (O(1)).\n - Elements are enumerated in O(n). No guarantees are made on the ordering.\n ```solidity\n contract Example {\n     // Add the library methods\n     using EnumerableSet for EnumerableSet.AddressSet;\n     // Declare a set state variable\n     EnumerableSet.AddressSet private mySet;\n }\n ```\n As of v3.3.0, sets of type `bytes32` (`Bytes32Set`), `address` (`AddressSet`)\n and `uint256` (`UintSet`) are supported.\n [WARNING]\n ====\n Trying to delete such a structure from storage will likely result in data corruption, rendering the structure\n unusable.\n See https://github.com/ethereum/solidity/pull/11843[ethereum/solidity#11843] for more info.\n In order to clean an EnumerableSet, you can either remove all elements one by one or create a fresh instance using an\n array of EnumerableSet.\n ===="
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          61864
        ],
        "name": "EnumerableSet",
        "nameLocation": "1337:13:90",
        "scope": 61865,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 90
}