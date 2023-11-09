export const EnumerableSet = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220d7369ebf219f77756056a99ba2cd271de763bf72962b3a5ddba7f6338e75f20664736f6c63430008130033",
    "sourceMap": "1329:11630:96:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;1329:11630:96;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220d7369ebf219f77756056a99ba2cd271de763bf72962b3a5ddba7f6338e75f20664736f6c63430008130033",
    "sourceMap": "1329:11630:96:-:0;;;;;;;;",
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
    "id": 62571,
    "exportedSymbols": {
      "EnumerableSet": [
        62570
      ]
    },
    "nodeType": "SourceUnit",
    "src": "205:12755:96",
    "nodes": [
      {
        "id": 61959,
        "nodeType": "PragmaDirective",
        "src": "205:23:96",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 62570,
        "nodeType": "ContractDefinition",
        "src": "1329:11630:96",
        "nodes": [
          {
            "id": 61968,
            "nodeType": "StructDefinition",
            "src": "1797:247:96",
            "nodes": [],
            "canonicalName": "EnumerableSet.Set",
            "members": [
              {
                "constant": false,
                "id": 61963,
                "mutability": "mutable",
                "name": "_values",
                "nameLocation": "1861:7:96",
                "nodeType": "VariableDeclaration",
                "scope": 61968,
                "src": "1851:17:96",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                  "typeString": "bytes32[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 61961,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1851:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 61962,
                  "nodeType": "ArrayTypeName",
                  "src": "1851:9:96",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                    "typeString": "bytes32[]"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 61967,
                "mutability": "mutable",
                "name": "_indexes",
                "nameLocation": "2029:8:96",
                "nodeType": "VariableDeclaration",
                "scope": 61968,
                "src": "2001:36:96",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                  "typeString": "mapping(bytes32 => uint256)"
                },
                "typeName": {
                  "id": 61966,
                  "keyName": "",
                  "keyNameLocation": "-1:-1:-1",
                  "keyType": {
                    "id": 61964,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2009:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "2001:27:96",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                    "typeString": "mapping(bytes32 => uint256)"
                  },
                  "valueName": "",
                  "valueNameLocation": "-1:-1:-1",
                  "valueType": {
                    "id": 61965,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2020:7:96",
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
            "nameLocation": "1804:3:96",
            "scope": 62570,
            "visibility": "public"
          },
          {
            "id": 62010,
            "nodeType": "FunctionDefinition",
            "src": "2214:404:96",
            "nodes": [],
            "body": {
              "id": 62009,
              "nodeType": "Block",
              "src": "2283:335:96",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 61983,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "2297:22:96",
                    "subExpression": {
                      "arguments": [
                        {
                          "id": 61980,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61972,
                          "src": "2308:3:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                            "typeString": "struct EnumerableSet.Set storage pointer"
                          }
                        },
                        {
                          "id": 61981,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61974,
                          "src": "2313:5:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                            "typeString": "struct EnumerableSet.Set storage pointer"
                          },
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        ],
                        "id": 61979,
                        "name": "_contains",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62113,
                        "src": "2298:9:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$61968_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                          "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) view returns (bool)"
                        }
                      },
                      "id": 61982,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2298:21:96",
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
                    "id": 62007,
                    "nodeType": "Block",
                    "src": "2575:37:96",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "66616c7365",
                          "id": 62005,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2596:5:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 61978,
                        "id": 62006,
                        "nodeType": "Return",
                        "src": "2589:12:96"
                      }
                    ]
                  },
                  "id": 62008,
                  "nodeType": "IfStatement",
                  "src": "2293:319:96",
                  "trueBody": {
                    "id": 62004,
                    "nodeType": "Block",
                    "src": "2321:248:96",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 61989,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61974,
                              "src": "2352:5:96",
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
                                "id": 61984,
                                "name": "set",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61972,
                                "src": "2335:3:96",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                                  "typeString": "struct EnumerableSet.Set storage pointer"
                                }
                              },
                              "id": 61987,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2339:7:96",
                              "memberName": "_values",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 61963,
                              "src": "2335:11:96",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                "typeString": "bytes32[] storage ref"
                              }
                            },
                            "id": 61988,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2347:4:96",
                            "memberName": "push",
                            "nodeType": "MemberAccess",
                            "src": "2335:16:96",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_bytes32_$dyn_storage_ptr_$_t_bytes32_$returns$__$attached_to$_t_array$_t_bytes32_$dyn_storage_ptr_$",
                              "typeString": "function (bytes32[] storage pointer,bytes32)"
                            }
                          },
                          "id": 61990,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2335:23:96",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 61991,
                        "nodeType": "ExpressionStatement",
                        "src": "2335:23:96"
                      },
                      {
                        "expression": {
                          "id": 62000,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "expression": {
                                "id": 61992,
                                "name": "set",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61972,
                                "src": "2493:3:96",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                                  "typeString": "struct EnumerableSet.Set storage pointer"
                                }
                              },
                              "id": 61995,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2497:8:96",
                              "memberName": "_indexes",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 61967,
                              "src": "2493:12:96",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                "typeString": "mapping(bytes32 => uint256)"
                              }
                            },
                            "id": 61996,
                            "indexExpression": {
                              "id": 61994,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61974,
                              "src": "2506:5:96",
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
                            "src": "2493:19:96",
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
                                "id": 61997,
                                "name": "set",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61972,
                                "src": "2515:3:96",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                                  "typeString": "struct EnumerableSet.Set storage pointer"
                                }
                              },
                              "id": 61998,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2519:7:96",
                              "memberName": "_values",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 61963,
                              "src": "2515:11:96",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                "typeString": "bytes32[] storage ref"
                              }
                            },
                            "id": 61999,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2527:6:96",
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "src": "2515:18:96",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2493:40:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 62001,
                        "nodeType": "ExpressionStatement",
                        "src": "2493:40:96"
                      },
                      {
                        "expression": {
                          "hexValue": "74727565",
                          "id": 62002,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2554:4:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 61978,
                        "id": 62003,
                        "nodeType": "Return",
                        "src": "2547:11:96"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 61969,
              "nodeType": "StructuredDocumentation",
              "src": "2050:159:96",
              "text": " @dev Add a value to a set. O(1).\n Returns true if the value was added to the set, that is if it was not\n already present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_add",
            "nameLocation": "2223:4:96",
            "parameters": {
              "id": 61975,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61972,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "2240:3:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62010,
                  "src": "2228:15:96",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  },
                  "typeName": {
                    "id": 61971,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61970,
                      "name": "Set",
                      "nameLocations": [
                        "2228:3:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 61968,
                      "src": "2228:3:96"
                    },
                    "referencedDeclaration": 61968,
                    "src": "2228:3:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                      "typeString": "struct EnumerableSet.Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61974,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2253:5:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62010,
                  "src": "2245:13:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 61973,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2245:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2227:32:96"
            },
            "returnParameters": {
              "id": 61978,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61977,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62010,
                  "src": "2277:4:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 61976,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2277:4:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2276:6:96"
            },
            "scope": 62570,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 62094,
            "nodeType": "FunctionDefinition",
            "src": "2786:1388:96",
            "nodes": [],
            "body": {
              "id": 62093,
              "nodeType": "Block",
              "src": "2858:1316:96",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    62022
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 62022,
                      "mutability": "mutable",
                      "name": "valueIndex",
                      "nameLocation": "2976:10:96",
                      "nodeType": "VariableDeclaration",
                      "scope": 62093,
                      "src": "2968:18:96",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 62021,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2968:7:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 62027,
                  "initialValue": {
                    "baseExpression": {
                      "expression": {
                        "id": 62023,
                        "name": "set",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62014,
                        "src": "2989:3:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                          "typeString": "struct EnumerableSet.Set storage pointer"
                        }
                      },
                      "id": 62024,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2993:8:96",
                      "memberName": "_indexes",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 61967,
                      "src": "2989:12:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                        "typeString": "mapping(bytes32 => uint256)"
                      }
                    },
                    "id": 62026,
                    "indexExpression": {
                      "id": 62025,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62016,
                      "src": "3002:5:96",
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
                    "src": "2989:19:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2968:40:96"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 62030,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 62028,
                      "name": "valueIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62022,
                      "src": "3023:10:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 62029,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3037:1:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "3023:15:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 62091,
                    "nodeType": "Block",
                    "src": "4131:37:96",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "66616c7365",
                          "id": 62089,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4152:5:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 62020,
                        "id": 62090,
                        "nodeType": "Return",
                        "src": "4145:12:96"
                      }
                    ]
                  },
                  "id": 62092,
                  "nodeType": "IfStatement",
                  "src": "3019:1149:96",
                  "trueBody": {
                    "id": 62088,
                    "nodeType": "Block",
                    "src": "3040:1085:96",
                    "statements": [
                      {
                        "assignments": [
                          62032
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 62032,
                            "mutability": "mutable",
                            "name": "toDeleteIndex",
                            "nameLocation": "3400:13:96",
                            "nodeType": "VariableDeclaration",
                            "scope": 62088,
                            "src": "3392:21:96",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 62031,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "3392:7:96",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 62036,
                        "initialValue": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 62035,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 62033,
                            "name": "valueIndex",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62022,
                            "src": "3416:10:96",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 62034,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3429:1:96",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "3416:14:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3392:38:96"
                      },
                      {
                        "assignments": [
                          62038
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 62038,
                            "mutability": "mutable",
                            "name": "lastIndex",
                            "nameLocation": "3452:9:96",
                            "nodeType": "VariableDeclaration",
                            "scope": 62088,
                            "src": "3444:17:96",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 62037,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "3444:7:96",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 62044,
                        "initialValue": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 62043,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "expression": {
                                "id": 62039,
                                "name": "set",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 62014,
                                "src": "3464:3:96",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                                  "typeString": "struct EnumerableSet.Set storage pointer"
                                }
                              },
                              "id": 62040,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3468:7:96",
                              "memberName": "_values",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 61963,
                              "src": "3464:11:96",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                "typeString": "bytes32[] storage ref"
                              }
                            },
                            "id": 62041,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3476:6:96",
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "src": "3464:18:96",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 62042,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3485:1:96",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "3464:22:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3444:42:96"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 62047,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 62045,
                            "name": "lastIndex",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62038,
                            "src": "3505:9:96",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "id": 62046,
                            "name": "toDeleteIndex",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62032,
                            "src": "3518:13:96",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3505:26:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 62072,
                        "nodeType": "IfStatement",
                        "src": "3501:398:96",
                        "trueBody": {
                          "id": 62071,
                          "nodeType": "Block",
                          "src": "3533:366:96",
                          "statements": [
                            {
                              "assignments": [
                                62049
                              ],
                              "declarations": [
                                {
                                  "constant": false,
                                  "id": 62049,
                                  "mutability": "mutable",
                                  "name": "lastValue",
                                  "nameLocation": "3559:9:96",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 62071,
                                  "src": "3551:17:96",
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  },
                                  "typeName": {
                                    "id": 62048,
                                    "name": "bytes32",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "3551:7:96",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  },
                                  "visibility": "internal"
                                }
                              ],
                              "id": 62054,
                              "initialValue": {
                                "baseExpression": {
                                  "expression": {
                                    "id": 62050,
                                    "name": "set",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 62014,
                                    "src": "3571:3:96",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                                      "typeString": "struct EnumerableSet.Set storage pointer"
                                    }
                                  },
                                  "id": 62051,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "3575:7:96",
                                  "memberName": "_values",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 61963,
                                  "src": "3571:11:96",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                    "typeString": "bytes32[] storage ref"
                                  }
                                },
                                "id": 62053,
                                "indexExpression": {
                                  "id": 62052,
                                  "name": "lastIndex",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 62038,
                                  "src": "3583:9:96",
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
                                "src": "3571:22:96",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "nodeType": "VariableDeclarationStatement",
                              "src": "3551:42:96"
                            },
                            {
                              "expression": {
                                "id": 62061,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "expression": {
                                      "id": 62055,
                                      "name": "set",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 62014,
                                      "src": "3693:3:96",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                                        "typeString": "struct EnumerableSet.Set storage pointer"
                                      }
                                    },
                                    "id": 62058,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "3697:7:96",
                                    "memberName": "_values",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 61963,
                                    "src": "3693:11:96",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                      "typeString": "bytes32[] storage ref"
                                    }
                                  },
                                  "id": 62059,
                                  "indexExpression": {
                                    "id": 62057,
                                    "name": "toDeleteIndex",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 62032,
                                    "src": "3705:13:96",
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
                                  "src": "3693:26:96",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "id": 62060,
                                  "name": "lastValue",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 62049,
                                  "src": "3722:9:96",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                },
                                "src": "3693:38:96",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "id": 62062,
                              "nodeType": "ExpressionStatement",
                              "src": "3693:38:96"
                            },
                            {
                              "expression": {
                                "id": 62069,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "expression": {
                                      "id": 62063,
                                      "name": "set",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 62014,
                                      "src": "3805:3:96",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                                        "typeString": "struct EnumerableSet.Set storage pointer"
                                      }
                                    },
                                    "id": 62066,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "3809:8:96",
                                    "memberName": "_indexes",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 61967,
                                    "src": "3805:12:96",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                      "typeString": "mapping(bytes32 => uint256)"
                                    }
                                  },
                                  "id": 62067,
                                  "indexExpression": {
                                    "id": 62065,
                                    "name": "lastValue",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 62049,
                                    "src": "3818:9:96",
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
                                  "src": "3805:23:96",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "id": 62068,
                                  "name": "valueIndex",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 62022,
                                  "src": "3831:10:96",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "3805:36:96",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 62070,
                              "nodeType": "ExpressionStatement",
                              "src": "3805:36:96"
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
                                "id": 62073,
                                "name": "set",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 62014,
                                "src": "3977:3:96",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                                  "typeString": "struct EnumerableSet.Set storage pointer"
                                }
                              },
                              "id": 62076,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3981:7:96",
                              "memberName": "_values",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 61963,
                              "src": "3977:11:96",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                "typeString": "bytes32[] storage ref"
                              }
                            },
                            "id": 62077,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3989:3:96",
                            "memberName": "pop",
                            "nodeType": "MemberAccess",
                            "src": "3977:15:96",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_arraypop_nonpayable$_t_array$_t_bytes32_$dyn_storage_ptr_$returns$__$attached_to$_t_array$_t_bytes32_$dyn_storage_ptr_$",
                              "typeString": "function (bytes32[] storage pointer)"
                            }
                          },
                          "id": 62078,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3977:17:96",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 62079,
                        "nodeType": "ExpressionStatement",
                        "src": "3977:17:96"
                      },
                      {
                        "expression": {
                          "id": 62084,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "delete",
                          "prefix": true,
                          "src": "4062:26:96",
                          "subExpression": {
                            "baseExpression": {
                              "expression": {
                                "id": 62080,
                                "name": "set",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 62014,
                                "src": "4069:3:96",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                                  "typeString": "struct EnumerableSet.Set storage pointer"
                                }
                              },
                              "id": 62081,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4073:8:96",
                              "memberName": "_indexes",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 61967,
                              "src": "4069:12:96",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                "typeString": "mapping(bytes32 => uint256)"
                              }
                            },
                            "id": 62083,
                            "indexExpression": {
                              "id": 62082,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62016,
                              "src": "4082:5:96",
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
                            "src": "4069:19:96",
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
                        "id": 62085,
                        "nodeType": "ExpressionStatement",
                        "src": "4062:26:96"
                      },
                      {
                        "expression": {
                          "hexValue": "74727565",
                          "id": 62086,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4110:4:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 62020,
                        "id": 62087,
                        "nodeType": "Return",
                        "src": "4103:11:96"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 62011,
              "nodeType": "StructuredDocumentation",
              "src": "2624:157:96",
              "text": " @dev Removes a value from a set. O(1).\n Returns true if the value was removed from the set, that is if it was\n present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_remove",
            "nameLocation": "2795:7:96",
            "parameters": {
              "id": 62017,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62014,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "2815:3:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62094,
                  "src": "2803:15:96",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  },
                  "typeName": {
                    "id": 62013,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62012,
                      "name": "Set",
                      "nameLocations": [
                        "2803:3:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 61968,
                      "src": "2803:3:96"
                    },
                    "referencedDeclaration": 61968,
                    "src": "2803:3:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                      "typeString": "struct EnumerableSet.Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62016,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2828:5:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62094,
                  "src": "2820:13:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 62015,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2820:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2802:32:96"
            },
            "returnParameters": {
              "id": 62020,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62019,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62094,
                  "src": "2852:4:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62018,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2852:4:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2851:6:96"
            },
            "scope": 62570,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 62113,
            "nodeType": "FunctionDefinition",
            "src": "4255:127:96",
            "nodes": [],
            "body": {
              "id": 62112,
              "nodeType": "Block",
              "src": "4334:48:96",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 62110,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "baseExpression": {
                        "expression": {
                          "id": 62105,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62098,
                          "src": "4351:3:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                            "typeString": "struct EnumerableSet.Set storage pointer"
                          }
                        },
                        "id": 62106,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4355:8:96",
                        "memberName": "_indexes",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 61967,
                        "src": "4351:12:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                          "typeString": "mapping(bytes32 => uint256)"
                        }
                      },
                      "id": 62108,
                      "indexExpression": {
                        "id": 62107,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62100,
                        "src": "4364:5:96",
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
                      "src": "4351:19:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 62109,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4374:1:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4351:24:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 62104,
                  "id": 62111,
                  "nodeType": "Return",
                  "src": "4344:31:96"
                }
              ]
            },
            "documentation": {
              "id": 62095,
              "nodeType": "StructuredDocumentation",
              "src": "4180:70:96",
              "text": " @dev Returns true if the value is in the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_contains",
            "nameLocation": "4264:9:96",
            "parameters": {
              "id": 62101,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62098,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "4286:3:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62113,
                  "src": "4274:15:96",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  },
                  "typeName": {
                    "id": 62097,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62096,
                      "name": "Set",
                      "nameLocations": [
                        "4274:3:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 61968,
                      "src": "4274:3:96"
                    },
                    "referencedDeclaration": 61968,
                    "src": "4274:3:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                      "typeString": "struct EnumerableSet.Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62100,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4299:5:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62113,
                  "src": "4291:13:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 62099,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4291:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4273:32:96"
            },
            "returnParameters": {
              "id": 62104,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62103,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62113,
                  "src": "4328:4:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62102,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4328:4:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4327:6:96"
            },
            "scope": 62570,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 62127,
            "nodeType": "FunctionDefinition",
            "src": "4463:107:96",
            "nodes": [],
            "body": {
              "id": 62126,
              "nodeType": "Block",
              "src": "4528:42:96",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "expression": {
                        "id": 62122,
                        "name": "set",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62117,
                        "src": "4545:3:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                          "typeString": "struct EnumerableSet.Set storage pointer"
                        }
                      },
                      "id": 62123,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4549:7:96",
                      "memberName": "_values",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 61963,
                      "src": "4545:11:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                        "typeString": "bytes32[] storage ref"
                      }
                    },
                    "id": 62124,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "4557:6:96",
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "src": "4545:18:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 62121,
                  "id": 62125,
                  "nodeType": "Return",
                  "src": "4538:25:96"
                }
              ]
            },
            "documentation": {
              "id": 62114,
              "nodeType": "StructuredDocumentation",
              "src": "4388:70:96",
              "text": " @dev Returns the number of values on the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_length",
            "nameLocation": "4472:7:96",
            "parameters": {
              "id": 62118,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62117,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "4492:3:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62127,
                  "src": "4480:15:96",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  },
                  "typeName": {
                    "id": 62116,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62115,
                      "name": "Set",
                      "nameLocations": [
                        "4480:3:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 61968,
                      "src": "4480:3:96"
                    },
                    "referencedDeclaration": 61968,
                    "src": "4480:3:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                      "typeString": "struct EnumerableSet.Set"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4479:17:96"
            },
            "returnParameters": {
              "id": 62121,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62120,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62127,
                  "src": "4519:7:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 62119,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4519:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4518:9:96"
            },
            "scope": 62570,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 62144,
            "nodeType": "FunctionDefinition",
            "src": "4912:118:96",
            "nodes": [],
            "body": {
              "id": 62143,
              "nodeType": "Block",
              "src": "4988:42:96",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "expression": {
                        "id": 62138,
                        "name": "set",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62131,
                        "src": "5005:3:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                          "typeString": "struct EnumerableSet.Set storage pointer"
                        }
                      },
                      "id": 62139,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5009:7:96",
                      "memberName": "_values",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 61963,
                      "src": "5005:11:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                        "typeString": "bytes32[] storage ref"
                      }
                    },
                    "id": 62141,
                    "indexExpression": {
                      "id": 62140,
                      "name": "index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62133,
                      "src": "5017:5:96",
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
                    "src": "5005:18:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 62137,
                  "id": 62142,
                  "nodeType": "Return",
                  "src": "4998:25:96"
                }
              ]
            },
            "documentation": {
              "id": 62128,
              "nodeType": "StructuredDocumentation",
              "src": "4576:331:96",
              "text": " @dev Returns the value stored at position `index` in the set. O(1).\n Note that there are no guarantees on the ordering of values inside the\n array, and it may change when more values are added or removed.\n Requirements:\n - `index` must be strictly less than {length}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_at",
            "nameLocation": "4921:3:96",
            "parameters": {
              "id": 62134,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62131,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "4937:3:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62144,
                  "src": "4925:15:96",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  },
                  "typeName": {
                    "id": 62130,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62129,
                      "name": "Set",
                      "nameLocations": [
                        "4925:3:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 61968,
                      "src": "4925:3:96"
                    },
                    "referencedDeclaration": 61968,
                    "src": "4925:3:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                      "typeString": "struct EnumerableSet.Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62133,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "4950:5:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62144,
                  "src": "4942:13:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 62132,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4942:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4924:32:96"
            },
            "returnParameters": {
              "id": 62137,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62136,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62144,
                  "src": "4979:7:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 62135,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4979:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4978:9:96"
            },
            "scope": 62570,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 62158,
            "nodeType": "FunctionDefinition",
            "src": "5570:109:96",
            "nodes": [],
            "body": {
              "id": 62157,
              "nodeType": "Block",
              "src": "5644:35:96",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "id": 62154,
                      "name": "set",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62148,
                      "src": "5661:3:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                        "typeString": "struct EnumerableSet.Set storage pointer"
                      }
                    },
                    "id": 62155,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "5665:7:96",
                    "memberName": "_values",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 61963,
                    "src": "5661:11:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                      "typeString": "bytes32[] storage ref"
                    }
                  },
                  "functionReturnParameters": 62153,
                  "id": 62156,
                  "nodeType": "Return",
                  "src": "5654:18:96"
                }
              ]
            },
            "documentation": {
              "id": 62145,
              "nodeType": "StructuredDocumentation",
              "src": "5036:529:96",
              "text": " @dev Return the entire set in an array\n WARNING: This operation will copy the entire storage to memory, which can be quite expensive. This is designed\n to mostly be used by view accessors that are queried without any gas fees. Developers should keep in mind that\n this function has an unbounded cost, and using it as part of a state-changing function may render the function\n uncallable if the set grows to a point where copying to memory consumes too much gas to fit in a block."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_values",
            "nameLocation": "5579:7:96",
            "parameters": {
              "id": 62149,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62148,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "5599:3:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62158,
                  "src": "5587:15:96",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  },
                  "typeName": {
                    "id": 62147,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62146,
                      "name": "Set",
                      "nameLocations": [
                        "5587:3:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 61968,
                      "src": "5587:3:96"
                    },
                    "referencedDeclaration": 61968,
                    "src": "5587:3:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                      "typeString": "struct EnumerableSet.Set"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5586:17:96"
            },
            "returnParameters": {
              "id": 62153,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62152,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62158,
                  "src": "5626:16:96",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 62150,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "5626:7:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 62151,
                    "nodeType": "ArrayTypeName",
                    "src": "5626:9:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5625:18:96"
            },
            "scope": 62570,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 62162,
            "nodeType": "StructDefinition",
            "src": "5704:45:96",
            "nodes": [],
            "canonicalName": "EnumerableSet.Bytes32Set",
            "members": [
              {
                "constant": false,
                "id": 62161,
                "mutability": "mutable",
                "name": "_inner",
                "nameLocation": "5736:6:96",
                "nodeType": "VariableDeclaration",
                "scope": 62162,
                "src": "5732:10:96",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                  "typeString": "struct EnumerableSet.Set"
                },
                "typeName": {
                  "id": 62160,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 62159,
                    "name": "Set",
                    "nameLocations": [
                      "5732:3:96"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 61968,
                    "src": "5732:3:96"
                  },
                  "referencedDeclaration": 61968,
                  "src": "5732:3:96",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Bytes32Set",
            "nameLocation": "5711:10:96",
            "scope": 62570,
            "visibility": "public"
          },
          {
            "id": 62180,
            "nodeType": "FunctionDefinition",
            "src": "5919:123:96",
            "nodes": [],
            "body": {
              "id": 62179,
              "nodeType": "Block",
              "src": "5995:47:96",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 62174,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62166,
                          "src": "6017:3:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Bytes32Set_$62162_storage_ptr",
                            "typeString": "struct EnumerableSet.Bytes32Set storage pointer"
                          }
                        },
                        "id": 62175,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6021:6:96",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62161,
                        "src": "6017:10:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "id": 62176,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62168,
                        "src": "6029:5:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 62173,
                      "name": "_add",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62010,
                      "src": "6012:4:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Set_$61968_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) returns (bool)"
                      }
                    },
                    "id": 62177,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6012:23:96",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 62172,
                  "id": 62178,
                  "nodeType": "Return",
                  "src": "6005:30:96"
                }
              ]
            },
            "documentation": {
              "id": 62163,
              "nodeType": "StructuredDocumentation",
              "src": "5755:159:96",
              "text": " @dev Add a value to a set. O(1).\n Returns true if the value was added to the set, that is if it was not\n already present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "add",
            "nameLocation": "5928:3:96",
            "parameters": {
              "id": 62169,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62166,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "5951:3:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62180,
                  "src": "5932:22:96",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Bytes32Set_$62162_storage_ptr",
                    "typeString": "struct EnumerableSet.Bytes32Set"
                  },
                  "typeName": {
                    "id": 62165,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62164,
                      "name": "Bytes32Set",
                      "nameLocations": [
                        "5932:10:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62162,
                      "src": "5932:10:96"
                    },
                    "referencedDeclaration": 62162,
                    "src": "5932:10:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Bytes32Set_$62162_storage_ptr",
                      "typeString": "struct EnumerableSet.Bytes32Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62168,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5964:5:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62180,
                  "src": "5956:13:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 62167,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5956:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5931:39:96"
            },
            "returnParameters": {
              "id": 62172,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62171,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62180,
                  "src": "5989:4:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62170,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5989:4:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5988:6:96"
            },
            "scope": 62570,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 62198,
            "nodeType": "FunctionDefinition",
            "src": "6210:129:96",
            "nodes": [],
            "body": {
              "id": 62197,
              "nodeType": "Block",
              "src": "6289:50:96",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 62192,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62184,
                          "src": "6314:3:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Bytes32Set_$62162_storage_ptr",
                            "typeString": "struct EnumerableSet.Bytes32Set storage pointer"
                          }
                        },
                        "id": 62193,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6318:6:96",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62161,
                        "src": "6314:10:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "id": 62194,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62186,
                        "src": "6326:5:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 62191,
                      "name": "_remove",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62094,
                      "src": "6306:7:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Set_$61968_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) returns (bool)"
                      }
                    },
                    "id": 62195,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6306:26:96",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 62190,
                  "id": 62196,
                  "nodeType": "Return",
                  "src": "6299:33:96"
                }
              ]
            },
            "documentation": {
              "id": 62181,
              "nodeType": "StructuredDocumentation",
              "src": "6048:157:96",
              "text": " @dev Removes a value from a set. O(1).\n Returns true if the value was removed from the set, that is if it was\n present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "remove",
            "nameLocation": "6219:6:96",
            "parameters": {
              "id": 62187,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62184,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "6245:3:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62198,
                  "src": "6226:22:96",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Bytes32Set_$62162_storage_ptr",
                    "typeString": "struct EnumerableSet.Bytes32Set"
                  },
                  "typeName": {
                    "id": 62183,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62182,
                      "name": "Bytes32Set",
                      "nameLocations": [
                        "6226:10:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62162,
                      "src": "6226:10:96"
                    },
                    "referencedDeclaration": 62162,
                    "src": "6226:10:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Bytes32Set_$62162_storage_ptr",
                      "typeString": "struct EnumerableSet.Bytes32Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62186,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "6258:5:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62198,
                  "src": "6250:13:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 62185,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6250:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6225:39:96"
            },
            "returnParameters": {
              "id": 62190,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62189,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62198,
                  "src": "6283:4:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62188,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6283:4:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6282:6:96"
            },
            "scope": 62570,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 62216,
            "nodeType": "FunctionDefinition",
            "src": "6420:138:96",
            "nodes": [],
            "body": {
              "id": 62215,
              "nodeType": "Block",
              "src": "6506:52:96",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 62210,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62202,
                          "src": "6533:3:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Bytes32Set_$62162_storage_ptr",
                            "typeString": "struct EnumerableSet.Bytes32Set storage pointer"
                          }
                        },
                        "id": 62211,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6537:6:96",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62161,
                        "src": "6533:10:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "id": 62212,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62204,
                        "src": "6545:5:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 62209,
                      "name": "_contains",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62113,
                      "src": "6523:9:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$61968_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) view returns (bool)"
                      }
                    },
                    "id": 62213,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6523:28:96",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 62208,
                  "id": 62214,
                  "nodeType": "Return",
                  "src": "6516:35:96"
                }
              ]
            },
            "documentation": {
              "id": 62199,
              "nodeType": "StructuredDocumentation",
              "src": "6345:70:96",
              "text": " @dev Returns true if the value is in the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "contains",
            "nameLocation": "6429:8:96",
            "parameters": {
              "id": 62205,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62202,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "6457:3:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62216,
                  "src": "6438:22:96",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Bytes32Set_$62162_storage_ptr",
                    "typeString": "struct EnumerableSet.Bytes32Set"
                  },
                  "typeName": {
                    "id": 62201,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62200,
                      "name": "Bytes32Set",
                      "nameLocations": [
                        "6438:10:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62162,
                      "src": "6438:10:96"
                    },
                    "referencedDeclaration": 62162,
                    "src": "6438:10:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Bytes32Set_$62162_storage_ptr",
                      "typeString": "struct EnumerableSet.Bytes32Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62204,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "6470:5:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62216,
                  "src": "6462:13:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 62203,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6462:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6437:39:96"
            },
            "returnParameters": {
              "id": 62208,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62207,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62216,
                  "src": "6500:4:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62206,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6500:4:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6499:6:96"
            },
            "scope": 62570,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 62231,
            "nodeType": "FunctionDefinition",
            "src": "6639:115:96",
            "nodes": [],
            "body": {
              "id": 62230,
              "nodeType": "Block",
              "src": "6711:43:96",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 62226,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62220,
                          "src": "6736:3:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Bytes32Set_$62162_storage_ptr",
                            "typeString": "struct EnumerableSet.Bytes32Set storage pointer"
                          }
                        },
                        "id": 62227,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6740:6:96",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62161,
                        "src": "6736:10:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      ],
                      "id": 62225,
                      "name": "_length",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62127,
                      "src": "6728:7:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$61968_storage_ptr_$returns$_t_uint256_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 62228,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6728:19:96",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 62224,
                  "id": 62229,
                  "nodeType": "Return",
                  "src": "6721:26:96"
                }
              ]
            },
            "documentation": {
              "id": 62217,
              "nodeType": "StructuredDocumentation",
              "src": "6564:70:96",
              "text": " @dev Returns the number of values in the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "length",
            "nameLocation": "6648:6:96",
            "parameters": {
              "id": 62221,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62220,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "6674:3:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62231,
                  "src": "6655:22:96",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Bytes32Set_$62162_storage_ptr",
                    "typeString": "struct EnumerableSet.Bytes32Set"
                  },
                  "typeName": {
                    "id": 62219,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62218,
                      "name": "Bytes32Set",
                      "nameLocations": [
                        "6655:10:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62162,
                      "src": "6655:10:96"
                    },
                    "referencedDeclaration": 62162,
                    "src": "6655:10:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Bytes32Set_$62162_storage_ptr",
                      "typeString": "struct EnumerableSet.Bytes32Set"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6654:24:96"
            },
            "returnParameters": {
              "id": 62224,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62223,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62231,
                  "src": "6702:7:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 62222,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6702:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6701:9:96"
            },
            "scope": 62570,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 62249,
            "nodeType": "FunctionDefinition",
            "src": "7096:129:96",
            "nodes": [],
            "body": {
              "id": 62248,
              "nodeType": "Block",
              "src": "7179:46:96",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 62243,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62235,
                          "src": "7200:3:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Bytes32Set_$62162_storage_ptr",
                            "typeString": "struct EnumerableSet.Bytes32Set storage pointer"
                          }
                        },
                        "id": 62244,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7204:6:96",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62161,
                        "src": "7200:10:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "id": 62245,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62237,
                        "src": "7212:5:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 62242,
                      "name": "_at",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62144,
                      "src": "7196:3:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$61968_storage_ptr_$_t_uint256_$returns$_t_bytes32_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,uint256) view returns (bytes32)"
                      }
                    },
                    "id": 62246,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7196:22:96",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 62241,
                  "id": 62247,
                  "nodeType": "Return",
                  "src": "7189:29:96"
                }
              ]
            },
            "documentation": {
              "id": 62232,
              "nodeType": "StructuredDocumentation",
              "src": "6760:331:96",
              "text": " @dev Returns the value stored at position `index` in the set. O(1).\n Note that there are no guarantees on the ordering of values inside the\n array, and it may change when more values are added or removed.\n Requirements:\n - `index` must be strictly less than {length}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "at",
            "nameLocation": "7105:2:96",
            "parameters": {
              "id": 62238,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62235,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "7127:3:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62249,
                  "src": "7108:22:96",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Bytes32Set_$62162_storage_ptr",
                    "typeString": "struct EnumerableSet.Bytes32Set"
                  },
                  "typeName": {
                    "id": 62234,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62233,
                      "name": "Bytes32Set",
                      "nameLocations": [
                        "7108:10:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62162,
                      "src": "7108:10:96"
                    },
                    "referencedDeclaration": 62162,
                    "src": "7108:10:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Bytes32Set_$62162_storage_ptr",
                      "typeString": "struct EnumerableSet.Bytes32Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62237,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "7140:5:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62249,
                  "src": "7132:13:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 62236,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7132:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7107:39:96"
            },
            "returnParameters": {
              "id": 62241,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62240,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62249,
                  "src": "7170:7:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 62239,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "7170:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7169:9:96"
            },
            "scope": 62570,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 62279,
            "nodeType": "FunctionDefinition",
            "src": "7765:300:96",
            "nodes": [],
            "body": {
              "id": 62278,
              "nodeType": "Block",
              "src": "7846:219:96",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    62263
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 62263,
                      "mutability": "mutable",
                      "name": "store",
                      "nameLocation": "7873:5:96",
                      "nodeType": "VariableDeclaration",
                      "scope": 62278,
                      "src": "7856:22:96",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 62261,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "7856:7:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 62262,
                        "nodeType": "ArrayTypeName",
                        "src": "7856:9:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 62268,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 62265,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62253,
                          "src": "7889:3:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Bytes32Set_$62162_storage_ptr",
                            "typeString": "struct EnumerableSet.Bytes32Set storage pointer"
                          }
                        },
                        "id": 62266,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7893:6:96",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62161,
                        "src": "7889:10:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      ],
                      "id": 62264,
                      "name": "_values",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62158,
                      "src": "7881:7:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$61968_storage_ptr_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer) view returns (bytes32[] memory)"
                      }
                    },
                    "id": 62267,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7881:19:96",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                      "typeString": "bytes32[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7856:44:96"
                },
                {
                  "assignments": [
                    62273
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 62273,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "7927:6:96",
                      "nodeType": "VariableDeclaration",
                      "scope": 62278,
                      "src": "7910:23:96",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 62271,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "7910:7:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 62272,
                        "nodeType": "ArrayTypeName",
                        "src": "7910:9:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 62274,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7910:23:96"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "7996:39:96",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "8010:15:96",
                        "value": {
                          "name": "store",
                          "nodeType": "YulIdentifier",
                          "src": "8020:5:96"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nodeType": "YulIdentifier",
                            "src": "8010:6:96"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 62273,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8010:6:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 62263,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8020:5:96",
                      "valueSize": 1
                    }
                  ],
                  "id": 62275,
                  "nodeType": "InlineAssembly",
                  "src": "7987:48:96"
                },
                {
                  "expression": {
                    "id": 62276,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 62273,
                    "src": "8052:6:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                      "typeString": "bytes32[] memory"
                    }
                  },
                  "functionReturnParameters": 62258,
                  "id": 62277,
                  "nodeType": "Return",
                  "src": "8045:13:96"
                }
              ]
            },
            "documentation": {
              "id": 62250,
              "nodeType": "StructuredDocumentation",
              "src": "7231:529:96",
              "text": " @dev Return the entire set in an array\n WARNING: This operation will copy the entire storage to memory, which can be quite expensive. This is designed\n to mostly be used by view accessors that are queried without any gas fees. Developers should keep in mind that\n this function has an unbounded cost, and using it as part of a state-changing function may render the function\n uncallable if the set grows to a point where copying to memory consumes too much gas to fit in a block."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "values",
            "nameLocation": "7774:6:96",
            "parameters": {
              "id": 62254,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62253,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "7800:3:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62279,
                  "src": "7781:22:96",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Bytes32Set_$62162_storage_ptr",
                    "typeString": "struct EnumerableSet.Bytes32Set"
                  },
                  "typeName": {
                    "id": 62252,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62251,
                      "name": "Bytes32Set",
                      "nameLocations": [
                        "7781:10:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62162,
                      "src": "7781:10:96"
                    },
                    "referencedDeclaration": 62162,
                    "src": "7781:10:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Bytes32Set_$62162_storage_ptr",
                      "typeString": "struct EnumerableSet.Bytes32Set"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7780:24:96"
            },
            "returnParameters": {
              "id": 62258,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62257,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62279,
                  "src": "7828:16:96",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 62255,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "7828:7:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 62256,
                    "nodeType": "ArrayTypeName",
                    "src": "7828:9:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7827:18:96"
            },
            "scope": 62570,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 62283,
            "nodeType": "StructDefinition",
            "src": "8090:45:96",
            "nodes": [],
            "canonicalName": "EnumerableSet.AddressSet",
            "members": [
              {
                "constant": false,
                "id": 62282,
                "mutability": "mutable",
                "name": "_inner",
                "nameLocation": "8122:6:96",
                "nodeType": "VariableDeclaration",
                "scope": 62283,
                "src": "8118:10:96",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                  "typeString": "struct EnumerableSet.Set"
                },
                "typeName": {
                  "id": 62281,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 62280,
                    "name": "Set",
                    "nameLocations": [
                      "8118:3:96"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 61968,
                    "src": "8118:3:96"
                  },
                  "referencedDeclaration": 61968,
                  "src": "8118:3:96",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "AddressSet",
            "nameLocation": "8097:10:96",
            "scope": 62570,
            "visibility": "public"
          },
          {
            "id": 62310,
            "nodeType": "FunctionDefinition",
            "src": "8305:150:96",
            "nodes": [],
            "body": {
              "id": 62309,
              "nodeType": "Block",
              "src": "8381:74:96",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 62295,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62287,
                          "src": "8403:3:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_AddressSet_$62283_storage_ptr",
                            "typeString": "struct EnumerableSet.AddressSet storage pointer"
                          }
                        },
                        "id": 62296,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8407:6:96",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62282,
                        "src": "8403:10:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
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
                                    "id": 62303,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 62289,
                                    "src": "8439:5:96",
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
                                  "id": 62302,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "8431:7:96",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint160_$",
                                    "typeString": "type(uint160)"
                                  },
                                  "typeName": {
                                    "id": 62301,
                                    "name": "uint160",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "8431:7:96",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 62304,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8431:14:96",
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
                              "id": 62300,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "8423:7:96",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 62299,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "8423:7:96",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 62305,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8423:23:96",
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
                          "id": 62298,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8415:7:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 62297,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "8415:7:96",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 62306,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8415:32:96",
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
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 62294,
                      "name": "_add",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62010,
                      "src": "8398:4:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Set_$61968_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) returns (bool)"
                      }
                    },
                    "id": 62307,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8398:50:96",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 62293,
                  "id": 62308,
                  "nodeType": "Return",
                  "src": "8391:57:96"
                }
              ]
            },
            "documentation": {
              "id": 62284,
              "nodeType": "StructuredDocumentation",
              "src": "8141:159:96",
              "text": " @dev Add a value to a set. O(1).\n Returns true if the value was added to the set, that is if it was not\n already present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "add",
            "nameLocation": "8314:3:96",
            "parameters": {
              "id": 62290,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62287,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "8337:3:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62310,
                  "src": "8318:22:96",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AddressSet_$62283_storage_ptr",
                    "typeString": "struct EnumerableSet.AddressSet"
                  },
                  "typeName": {
                    "id": 62286,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62285,
                      "name": "AddressSet",
                      "nameLocations": [
                        "8318:10:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62283,
                      "src": "8318:10:96"
                    },
                    "referencedDeclaration": 62283,
                    "src": "8318:10:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AddressSet_$62283_storage_ptr",
                      "typeString": "struct EnumerableSet.AddressSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62289,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "8350:5:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62310,
                  "src": "8342:13:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62288,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8342:7:96",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8317:39:96"
            },
            "returnParameters": {
              "id": 62293,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62292,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62310,
                  "src": "8375:4:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62291,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8375:4:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8374:6:96"
            },
            "scope": 62570,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 62337,
            "nodeType": "FunctionDefinition",
            "src": "8623:156:96",
            "nodes": [],
            "body": {
              "id": 62336,
              "nodeType": "Block",
              "src": "8702:77:96",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 62322,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62314,
                          "src": "8727:3:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_AddressSet_$62283_storage_ptr",
                            "typeString": "struct EnumerableSet.AddressSet storage pointer"
                          }
                        },
                        "id": 62323,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8731:6:96",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62282,
                        "src": "8727:10:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
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
                                    "id": 62330,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 62316,
                                    "src": "8763:5:96",
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
                                  "id": 62329,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "8755:7:96",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint160_$",
                                    "typeString": "type(uint160)"
                                  },
                                  "typeName": {
                                    "id": 62328,
                                    "name": "uint160",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "8755:7:96",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 62331,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8755:14:96",
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
                              "id": 62327,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "8747:7:96",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 62326,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "8747:7:96",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 62332,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8747:23:96",
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
                          "id": 62325,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8739:7:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 62324,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "8739:7:96",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 62333,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8739:32:96",
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
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 62321,
                      "name": "_remove",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62094,
                      "src": "8719:7:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Set_$61968_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) returns (bool)"
                      }
                    },
                    "id": 62334,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8719:53:96",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 62320,
                  "id": 62335,
                  "nodeType": "Return",
                  "src": "8712:60:96"
                }
              ]
            },
            "documentation": {
              "id": 62311,
              "nodeType": "StructuredDocumentation",
              "src": "8461:157:96",
              "text": " @dev Removes a value from a set. O(1).\n Returns true if the value was removed from the set, that is if it was\n present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "remove",
            "nameLocation": "8632:6:96",
            "parameters": {
              "id": 62317,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62314,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "8658:3:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62337,
                  "src": "8639:22:96",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AddressSet_$62283_storage_ptr",
                    "typeString": "struct EnumerableSet.AddressSet"
                  },
                  "typeName": {
                    "id": 62313,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62312,
                      "name": "AddressSet",
                      "nameLocations": [
                        "8639:10:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62283,
                      "src": "8639:10:96"
                    },
                    "referencedDeclaration": 62283,
                    "src": "8639:10:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AddressSet_$62283_storage_ptr",
                      "typeString": "struct EnumerableSet.AddressSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62316,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "8671:5:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62337,
                  "src": "8663:13:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62315,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8663:7:96",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8638:39:96"
            },
            "returnParameters": {
              "id": 62320,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62319,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62337,
                  "src": "8696:4:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62318,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8696:4:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8695:6:96"
            },
            "scope": 62570,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 62364,
            "nodeType": "FunctionDefinition",
            "src": "8860:165:96",
            "nodes": [],
            "body": {
              "id": 62363,
              "nodeType": "Block",
              "src": "8946:79:96",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 62349,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62341,
                          "src": "8973:3:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_AddressSet_$62283_storage_ptr",
                            "typeString": "struct EnumerableSet.AddressSet storage pointer"
                          }
                        },
                        "id": 62350,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8977:6:96",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62282,
                        "src": "8973:10:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
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
                                    "id": 62357,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 62343,
                                    "src": "9009:5:96",
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
                                  "id": 62356,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "9001:7:96",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint160_$",
                                    "typeString": "type(uint160)"
                                  },
                                  "typeName": {
                                    "id": 62355,
                                    "name": "uint160",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "9001:7:96",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 62358,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "9001:14:96",
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
                              "id": 62354,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "8993:7:96",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 62353,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "8993:7:96",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 62359,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8993:23:96",
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
                          "id": 62352,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8985:7:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 62351,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "8985:7:96",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 62360,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8985:32:96",
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
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 62348,
                      "name": "_contains",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62113,
                      "src": "8963:9:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$61968_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) view returns (bool)"
                      }
                    },
                    "id": 62361,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8963:55:96",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 62347,
                  "id": 62362,
                  "nodeType": "Return",
                  "src": "8956:62:96"
                }
              ]
            },
            "documentation": {
              "id": 62338,
              "nodeType": "StructuredDocumentation",
              "src": "8785:70:96",
              "text": " @dev Returns true if the value is in the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "contains",
            "nameLocation": "8869:8:96",
            "parameters": {
              "id": 62344,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62341,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "8897:3:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62364,
                  "src": "8878:22:96",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AddressSet_$62283_storage_ptr",
                    "typeString": "struct EnumerableSet.AddressSet"
                  },
                  "typeName": {
                    "id": 62340,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62339,
                      "name": "AddressSet",
                      "nameLocations": [
                        "8878:10:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62283,
                      "src": "8878:10:96"
                    },
                    "referencedDeclaration": 62283,
                    "src": "8878:10:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AddressSet_$62283_storage_ptr",
                      "typeString": "struct EnumerableSet.AddressSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62343,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "8910:5:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62364,
                  "src": "8902:13:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62342,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8902:7:96",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8877:39:96"
            },
            "returnParameters": {
              "id": 62347,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62346,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62364,
                  "src": "8940:4:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62345,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8940:4:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8939:6:96"
            },
            "scope": 62570,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 62379,
            "nodeType": "FunctionDefinition",
            "src": "9106:115:96",
            "nodes": [],
            "body": {
              "id": 62378,
              "nodeType": "Block",
              "src": "9178:43:96",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 62374,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62368,
                          "src": "9203:3:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_AddressSet_$62283_storage_ptr",
                            "typeString": "struct EnumerableSet.AddressSet storage pointer"
                          }
                        },
                        "id": 62375,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9207:6:96",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62282,
                        "src": "9203:10:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      ],
                      "id": 62373,
                      "name": "_length",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62127,
                      "src": "9195:7:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$61968_storage_ptr_$returns$_t_uint256_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 62376,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9195:19:96",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 62372,
                  "id": 62377,
                  "nodeType": "Return",
                  "src": "9188:26:96"
                }
              ]
            },
            "documentation": {
              "id": 62365,
              "nodeType": "StructuredDocumentation",
              "src": "9031:70:96",
              "text": " @dev Returns the number of values in the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "length",
            "nameLocation": "9115:6:96",
            "parameters": {
              "id": 62369,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62368,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "9141:3:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62379,
                  "src": "9122:22:96",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AddressSet_$62283_storage_ptr",
                    "typeString": "struct EnumerableSet.AddressSet"
                  },
                  "typeName": {
                    "id": 62367,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62366,
                      "name": "AddressSet",
                      "nameLocations": [
                        "9122:10:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62283,
                      "src": "9122:10:96"
                    },
                    "referencedDeclaration": 62283,
                    "src": "9122:10:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AddressSet_$62283_storage_ptr",
                      "typeString": "struct EnumerableSet.AddressSet"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9121:24:96"
            },
            "returnParameters": {
              "id": 62372,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62371,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62379,
                  "src": "9169:7:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 62370,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9169:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9168:9:96"
            },
            "scope": 62570,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 62406,
            "nodeType": "FunctionDefinition",
            "src": "9563:156:96",
            "nodes": [],
            "body": {
              "id": 62405,
              "nodeType": "Block",
              "src": "9646:73:96",
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
                                      "id": 62397,
                                      "name": "set",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 62383,
                                      "src": "9691:3:96",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_AddressSet_$62283_storage_ptr",
                                        "typeString": "struct EnumerableSet.AddressSet storage pointer"
                                      }
                                    },
                                    "id": 62398,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "9695:6:96",
                                    "memberName": "_inner",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 62282,
                                    "src": "9691:10:96",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_Set_$61968_storage",
                                      "typeString": "struct EnumerableSet.Set storage ref"
                                    }
                                  },
                                  {
                                    "id": 62399,
                                    "name": "index",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 62385,
                                    "src": "9703:5:96",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_struct$_Set_$61968_storage",
                                      "typeString": "struct EnumerableSet.Set storage ref"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "id": 62396,
                                  "name": "_at",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 62144,
                                  "src": "9687:3:96",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$61968_storage_ptr_$_t_uint256_$returns$_t_bytes32_$",
                                    "typeString": "function (struct EnumerableSet.Set storage pointer,uint256) view returns (bytes32)"
                                  }
                                },
                                "id": 62400,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "9687:22:96",
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
                              "id": 62395,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "9679:7:96",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 62394,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "9679:7:96",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 62401,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9679:31:96",
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
                          "id": 62393,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "9671:7:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint160_$",
                            "typeString": "type(uint160)"
                          },
                          "typeName": {
                            "id": 62392,
                            "name": "uint160",
                            "nodeType": "ElementaryTypeName",
                            "src": "9671:7:96",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 62402,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9671:40:96",
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
                      "id": 62391,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "9663:7:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": {
                        "id": 62390,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "9663:7:96",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 62403,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9663:49:96",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 62389,
                  "id": 62404,
                  "nodeType": "Return",
                  "src": "9656:56:96"
                }
              ]
            },
            "documentation": {
              "id": 62380,
              "nodeType": "StructuredDocumentation",
              "src": "9227:331:96",
              "text": " @dev Returns the value stored at position `index` in the set. O(1).\n Note that there are no guarantees on the ordering of values inside the\n array, and it may change when more values are added or removed.\n Requirements:\n - `index` must be strictly less than {length}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "at",
            "nameLocation": "9572:2:96",
            "parameters": {
              "id": 62386,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62383,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "9594:3:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62406,
                  "src": "9575:22:96",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AddressSet_$62283_storage_ptr",
                    "typeString": "struct EnumerableSet.AddressSet"
                  },
                  "typeName": {
                    "id": 62382,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62381,
                      "name": "AddressSet",
                      "nameLocations": [
                        "9575:10:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62283,
                      "src": "9575:10:96"
                    },
                    "referencedDeclaration": 62283,
                    "src": "9575:10:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AddressSet_$62283_storage_ptr",
                      "typeString": "struct EnumerableSet.AddressSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62385,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "9607:5:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62406,
                  "src": "9599:13:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 62384,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9599:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9574:39:96"
            },
            "returnParameters": {
              "id": 62389,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62388,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62406,
                  "src": "9637:7:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62387,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9637:7:96",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9636:9:96"
            },
            "scope": 62570,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 62436,
            "nodeType": "FunctionDefinition",
            "src": "10259:300:96",
            "nodes": [],
            "body": {
              "id": 62435,
              "nodeType": "Block",
              "src": "10340:219:96",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    62420
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 62420,
                      "mutability": "mutable",
                      "name": "store",
                      "nameLocation": "10367:5:96",
                      "nodeType": "VariableDeclaration",
                      "scope": 62435,
                      "src": "10350:22:96",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 62418,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "10350:7:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 62419,
                        "nodeType": "ArrayTypeName",
                        "src": "10350:9:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 62425,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 62422,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62410,
                          "src": "10383:3:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_AddressSet_$62283_storage_ptr",
                            "typeString": "struct EnumerableSet.AddressSet storage pointer"
                          }
                        },
                        "id": 62423,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "10387:6:96",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62282,
                        "src": "10383:10:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      ],
                      "id": 62421,
                      "name": "_values",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62158,
                      "src": "10375:7:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$61968_storage_ptr_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer) view returns (bytes32[] memory)"
                      }
                    },
                    "id": 62424,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10375:19:96",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                      "typeString": "bytes32[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10350:44:96"
                },
                {
                  "assignments": [
                    62430
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 62430,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "10421:6:96",
                      "nodeType": "VariableDeclaration",
                      "scope": 62435,
                      "src": "10404:23:96",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 62428,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "10404:7:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 62429,
                        "nodeType": "ArrayTypeName",
                        "src": "10404:9:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 62431,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10404:23:96"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "10490:39:96",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "10504:15:96",
                        "value": {
                          "name": "store",
                          "nodeType": "YulIdentifier",
                          "src": "10514:5:96"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nodeType": "YulIdentifier",
                            "src": "10504:6:96"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 62430,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10504:6:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 62420,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10514:5:96",
                      "valueSize": 1
                    }
                  ],
                  "id": 62432,
                  "nodeType": "InlineAssembly",
                  "src": "10481:48:96"
                },
                {
                  "expression": {
                    "id": 62433,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 62430,
                    "src": "10546:6:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 62415,
                  "id": 62434,
                  "nodeType": "Return",
                  "src": "10539:13:96"
                }
              ]
            },
            "documentation": {
              "id": 62407,
              "nodeType": "StructuredDocumentation",
              "src": "9725:529:96",
              "text": " @dev Return the entire set in an array\n WARNING: This operation will copy the entire storage to memory, which can be quite expensive. This is designed\n to mostly be used by view accessors that are queried without any gas fees. Developers should keep in mind that\n this function has an unbounded cost, and using it as part of a state-changing function may render the function\n uncallable if the set grows to a point where copying to memory consumes too much gas to fit in a block."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "values",
            "nameLocation": "10268:6:96",
            "parameters": {
              "id": 62411,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62410,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "10294:3:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62436,
                  "src": "10275:22:96",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AddressSet_$62283_storage_ptr",
                    "typeString": "struct EnumerableSet.AddressSet"
                  },
                  "typeName": {
                    "id": 62409,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62408,
                      "name": "AddressSet",
                      "nameLocations": [
                        "10275:10:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62283,
                      "src": "10275:10:96"
                    },
                    "referencedDeclaration": 62283,
                    "src": "10275:10:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AddressSet_$62283_storage_ptr",
                      "typeString": "struct EnumerableSet.AddressSet"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10274:24:96"
            },
            "returnParameters": {
              "id": 62415,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62414,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62436,
                  "src": "10322:16:96",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 62412,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "10322:7:96",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 62413,
                    "nodeType": "ArrayTypeName",
                    "src": "10322:9:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10321:18:96"
            },
            "scope": 62570,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 62440,
            "nodeType": "StructDefinition",
            "src": "10581:42:96",
            "nodes": [],
            "canonicalName": "EnumerableSet.UintSet",
            "members": [
              {
                "constant": false,
                "id": 62439,
                "mutability": "mutable",
                "name": "_inner",
                "nameLocation": "10610:6:96",
                "nodeType": "VariableDeclaration",
                "scope": 62440,
                "src": "10606:10:96",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                  "typeString": "struct EnumerableSet.Set"
                },
                "typeName": {
                  "id": 62438,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 62437,
                    "name": "Set",
                    "nameLocations": [
                      "10606:3:96"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 61968,
                    "src": "10606:3:96"
                  },
                  "referencedDeclaration": 61968,
                  "src": "10606:3:96",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$61968_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "UintSet",
            "nameLocation": "10588:7:96",
            "scope": 62570,
            "visibility": "public"
          },
          {
            "id": 62461,
            "nodeType": "FunctionDefinition",
            "src": "10793:129:96",
            "nodes": [],
            "body": {
              "id": 62460,
              "nodeType": "Block",
              "src": "10866:56:96",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 62452,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62444,
                          "src": "10888:3:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UintSet_$62440_storage_ptr",
                            "typeString": "struct EnumerableSet.UintSet storage pointer"
                          }
                        },
                        "id": 62453,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "10892:6:96",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62439,
                        "src": "10888:10:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 62456,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62446,
                            "src": "10908:5:96",
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
                          "id": 62455,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "10900:7:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 62454,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "10900:7:96",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 62457,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10900:14:96",
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
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 62451,
                      "name": "_add",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62010,
                      "src": "10883:4:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Set_$61968_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) returns (bool)"
                      }
                    },
                    "id": 62458,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10883:32:96",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 62450,
                  "id": 62459,
                  "nodeType": "Return",
                  "src": "10876:39:96"
                }
              ]
            },
            "documentation": {
              "id": 62441,
              "nodeType": "StructuredDocumentation",
              "src": "10629:159:96",
              "text": " @dev Add a value to a set. O(1).\n Returns true if the value was added to the set, that is if it was not\n already present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "add",
            "nameLocation": "10802:3:96",
            "parameters": {
              "id": 62447,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62444,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "10822:3:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62461,
                  "src": "10806:19:96",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_UintSet_$62440_storage_ptr",
                    "typeString": "struct EnumerableSet.UintSet"
                  },
                  "typeName": {
                    "id": 62443,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62442,
                      "name": "UintSet",
                      "nameLocations": [
                        "10806:7:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62440,
                      "src": "10806:7:96"
                    },
                    "referencedDeclaration": 62440,
                    "src": "10806:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UintSet_$62440_storage_ptr",
                      "typeString": "struct EnumerableSet.UintSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62446,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "10835:5:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62461,
                  "src": "10827:13:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 62445,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10827:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10805:36:96"
            },
            "returnParameters": {
              "id": 62450,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62449,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62461,
                  "src": "10860:4:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62448,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "10860:4:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10859:6:96"
            },
            "scope": 62570,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 62482,
            "nodeType": "FunctionDefinition",
            "src": "11090:135:96",
            "nodes": [],
            "body": {
              "id": 62481,
              "nodeType": "Block",
              "src": "11166:59:96",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 62473,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62465,
                          "src": "11191:3:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UintSet_$62440_storage_ptr",
                            "typeString": "struct EnumerableSet.UintSet storage pointer"
                          }
                        },
                        "id": 62474,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11195:6:96",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62439,
                        "src": "11191:10:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 62477,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62467,
                            "src": "11211:5:96",
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
                          "id": 62476,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "11203:7:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 62475,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "11203:7:96",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 62478,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11203:14:96",
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
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 62472,
                      "name": "_remove",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62094,
                      "src": "11183:7:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Set_$61968_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) returns (bool)"
                      }
                    },
                    "id": 62479,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11183:35:96",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 62471,
                  "id": 62480,
                  "nodeType": "Return",
                  "src": "11176:42:96"
                }
              ]
            },
            "documentation": {
              "id": 62462,
              "nodeType": "StructuredDocumentation",
              "src": "10928:157:96",
              "text": " @dev Removes a value from a set. O(1).\n Returns true if the value was removed from the set, that is if it was\n present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "remove",
            "nameLocation": "11099:6:96",
            "parameters": {
              "id": 62468,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62465,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "11122:3:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62482,
                  "src": "11106:19:96",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_UintSet_$62440_storage_ptr",
                    "typeString": "struct EnumerableSet.UintSet"
                  },
                  "typeName": {
                    "id": 62464,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62463,
                      "name": "UintSet",
                      "nameLocations": [
                        "11106:7:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62440,
                      "src": "11106:7:96"
                    },
                    "referencedDeclaration": 62440,
                    "src": "11106:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UintSet_$62440_storage_ptr",
                      "typeString": "struct EnumerableSet.UintSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62467,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11135:5:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62482,
                  "src": "11127:13:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 62466,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11127:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11105:36:96"
            },
            "returnParameters": {
              "id": 62471,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62470,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62482,
                  "src": "11160:4:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62469,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "11160:4:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11159:6:96"
            },
            "scope": 62570,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 62503,
            "nodeType": "FunctionDefinition",
            "src": "11306:144:96",
            "nodes": [],
            "body": {
              "id": 62502,
              "nodeType": "Block",
              "src": "11389:61:96",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 62494,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62486,
                          "src": "11416:3:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UintSet_$62440_storage_ptr",
                            "typeString": "struct EnumerableSet.UintSet storage pointer"
                          }
                        },
                        "id": 62495,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11420:6:96",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62439,
                        "src": "11416:10:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 62498,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62488,
                            "src": "11436:5:96",
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
                          "id": 62497,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "11428:7:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 62496,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "11428:7:96",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 62499,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11428:14:96",
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
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 62493,
                      "name": "_contains",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62113,
                      "src": "11406:9:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$61968_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) view returns (bool)"
                      }
                    },
                    "id": 62500,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11406:37:96",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 62492,
                  "id": 62501,
                  "nodeType": "Return",
                  "src": "11399:44:96"
                }
              ]
            },
            "documentation": {
              "id": 62483,
              "nodeType": "StructuredDocumentation",
              "src": "11231:70:96",
              "text": " @dev Returns true if the value is in the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "contains",
            "nameLocation": "11315:8:96",
            "parameters": {
              "id": 62489,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62486,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "11340:3:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62503,
                  "src": "11324:19:96",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_UintSet_$62440_storage_ptr",
                    "typeString": "struct EnumerableSet.UintSet"
                  },
                  "typeName": {
                    "id": 62485,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62484,
                      "name": "UintSet",
                      "nameLocations": [
                        "11324:7:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62440,
                      "src": "11324:7:96"
                    },
                    "referencedDeclaration": 62440,
                    "src": "11324:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UintSet_$62440_storage_ptr",
                      "typeString": "struct EnumerableSet.UintSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62488,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11353:5:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62503,
                  "src": "11345:13:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 62487,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11345:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11323:36:96"
            },
            "returnParameters": {
              "id": 62492,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62491,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62503,
                  "src": "11383:4:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62490,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "11383:4:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11382:6:96"
            },
            "scope": 62570,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 62518,
            "nodeType": "FunctionDefinition",
            "src": "11531:112:96",
            "nodes": [],
            "body": {
              "id": 62517,
              "nodeType": "Block",
              "src": "11600:43:96",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 62513,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62507,
                          "src": "11625:3:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UintSet_$62440_storage_ptr",
                            "typeString": "struct EnumerableSet.UintSet storage pointer"
                          }
                        },
                        "id": 62514,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11629:6:96",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62439,
                        "src": "11625:10:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      ],
                      "id": 62512,
                      "name": "_length",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62127,
                      "src": "11617:7:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$61968_storage_ptr_$returns$_t_uint256_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 62515,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11617:19:96",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 62511,
                  "id": 62516,
                  "nodeType": "Return",
                  "src": "11610:26:96"
                }
              ]
            },
            "documentation": {
              "id": 62504,
              "nodeType": "StructuredDocumentation",
              "src": "11456:70:96",
              "text": " @dev Returns the number of values in the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "length",
            "nameLocation": "11540:6:96",
            "parameters": {
              "id": 62508,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62507,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "11563:3:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62518,
                  "src": "11547:19:96",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_UintSet_$62440_storage_ptr",
                    "typeString": "struct EnumerableSet.UintSet"
                  },
                  "typeName": {
                    "id": 62506,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62505,
                      "name": "UintSet",
                      "nameLocations": [
                        "11547:7:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62440,
                      "src": "11547:7:96"
                    },
                    "referencedDeclaration": 62440,
                    "src": "11547:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UintSet_$62440_storage_ptr",
                      "typeString": "struct EnumerableSet.UintSet"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11546:21:96"
            },
            "returnParameters": {
              "id": 62511,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62510,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62518,
                  "src": "11591:7:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 62509,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11591:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11590:9:96"
            },
            "scope": 62570,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 62539,
            "nodeType": "FunctionDefinition",
            "src": "11985:135:96",
            "nodes": [],
            "body": {
              "id": 62538,
              "nodeType": "Block",
              "src": "12065:55:96",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 62532,
                              "name": "set",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62522,
                              "src": "12094:3:96",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_UintSet_$62440_storage_ptr",
                                "typeString": "struct EnumerableSet.UintSet storage pointer"
                              }
                            },
                            "id": 62533,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "12098:6:96",
                            "memberName": "_inner",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 62439,
                            "src": "12094:10:96",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Set_$61968_storage",
                              "typeString": "struct EnumerableSet.Set storage ref"
                            }
                          },
                          {
                            "id": 62534,
                            "name": "index",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62524,
                            "src": "12106:5:96",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_Set_$61968_storage",
                              "typeString": "struct EnumerableSet.Set storage ref"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 62531,
                          "name": "_at",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62144,
                          "src": "12090:3:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$61968_storage_ptr_$_t_uint256_$returns$_t_bytes32_$",
                            "typeString": "function (struct EnumerableSet.Set storage pointer,uint256) view returns (bytes32)"
                          }
                        },
                        "id": 62535,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12090:22:96",
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
                      "id": 62530,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "12082:7:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 62529,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "12082:7:96",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 62536,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12082:31:96",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 62528,
                  "id": 62537,
                  "nodeType": "Return",
                  "src": "12075:38:96"
                }
              ]
            },
            "documentation": {
              "id": 62519,
              "nodeType": "StructuredDocumentation",
              "src": "11649:331:96",
              "text": " @dev Returns the value stored at position `index` in the set. O(1).\n Note that there are no guarantees on the ordering of values inside the\n array, and it may change when more values are added or removed.\n Requirements:\n - `index` must be strictly less than {length}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "at",
            "nameLocation": "11994:2:96",
            "parameters": {
              "id": 62525,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62522,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "12013:3:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62539,
                  "src": "11997:19:96",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_UintSet_$62440_storage_ptr",
                    "typeString": "struct EnumerableSet.UintSet"
                  },
                  "typeName": {
                    "id": 62521,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62520,
                      "name": "UintSet",
                      "nameLocations": [
                        "11997:7:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62440,
                      "src": "11997:7:96"
                    },
                    "referencedDeclaration": 62440,
                    "src": "11997:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UintSet_$62440_storage_ptr",
                      "typeString": "struct EnumerableSet.UintSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62524,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "12026:5:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62539,
                  "src": "12018:13:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 62523,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12018:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11996:36:96"
            },
            "returnParameters": {
              "id": 62528,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62527,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62539,
                  "src": "12056:7:96",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 62526,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12056:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12055:9:96"
            },
            "scope": 62570,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 62569,
            "nodeType": "FunctionDefinition",
            "src": "12660:297:96",
            "nodes": [],
            "body": {
              "id": 62568,
              "nodeType": "Block",
              "src": "12738:219:96",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    62553
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 62553,
                      "mutability": "mutable",
                      "name": "store",
                      "nameLocation": "12765:5:96",
                      "nodeType": "VariableDeclaration",
                      "scope": 62568,
                      "src": "12748:22:96",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 62551,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "12748:7:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 62552,
                        "nodeType": "ArrayTypeName",
                        "src": "12748:9:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 62558,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 62555,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62543,
                          "src": "12781:3:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UintSet_$62440_storage_ptr",
                            "typeString": "struct EnumerableSet.UintSet storage pointer"
                          }
                        },
                        "id": 62556,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "12785:6:96",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62439,
                        "src": "12781:10:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$61968_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      ],
                      "id": 62554,
                      "name": "_values",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62158,
                      "src": "12773:7:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$61968_storage_ptr_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer) view returns (bytes32[] memory)"
                      }
                    },
                    "id": 62557,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12773:19:96",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                      "typeString": "bytes32[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12748:44:96"
                },
                {
                  "assignments": [
                    62563
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 62563,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "12819:6:96",
                      "nodeType": "VariableDeclaration",
                      "scope": 62568,
                      "src": "12802:23:96",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 62561,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "12802:7:96",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 62562,
                        "nodeType": "ArrayTypeName",
                        "src": "12802:9:96",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 62564,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12802:23:96"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "12888:39:96",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "12902:15:96",
                        "value": {
                          "name": "store",
                          "nodeType": "YulIdentifier",
                          "src": "12912:5:96"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nodeType": "YulIdentifier",
                            "src": "12902:6:96"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 62563,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "12902:6:96",
                      "valueSize": 1
                    },
                    {
                      "declaration": 62553,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "12912:5:96",
                      "valueSize": 1
                    }
                  ],
                  "id": 62565,
                  "nodeType": "InlineAssembly",
                  "src": "12879:48:96"
                },
                {
                  "expression": {
                    "id": 62566,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 62563,
                    "src": "12944:6:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "functionReturnParameters": 62548,
                  "id": 62567,
                  "nodeType": "Return",
                  "src": "12937:13:96"
                }
              ]
            },
            "documentation": {
              "id": 62540,
              "nodeType": "StructuredDocumentation",
              "src": "12126:529:96",
              "text": " @dev Return the entire set in an array\n WARNING: This operation will copy the entire storage to memory, which can be quite expensive. This is designed\n to mostly be used by view accessors that are queried without any gas fees. Developers should keep in mind that\n this function has an unbounded cost, and using it as part of a state-changing function may render the function\n uncallable if the set grows to a point where copying to memory consumes too much gas to fit in a block."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "values",
            "nameLocation": "12669:6:96",
            "parameters": {
              "id": 62544,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62543,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "12692:3:96",
                  "nodeType": "VariableDeclaration",
                  "scope": 62569,
                  "src": "12676:19:96",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_UintSet_$62440_storage_ptr",
                    "typeString": "struct EnumerableSet.UintSet"
                  },
                  "typeName": {
                    "id": 62542,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62541,
                      "name": "UintSet",
                      "nameLocations": [
                        "12676:7:96"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62440,
                      "src": "12676:7:96"
                    },
                    "referencedDeclaration": 62440,
                    "src": "12676:7:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UintSet_$62440_storage_ptr",
                      "typeString": "struct EnumerableSet.UintSet"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12675:21:96"
            },
            "returnParameters": {
              "id": 62548,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62547,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62569,
                  "src": "12720:16:96",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 62545,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "12720:7:96",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 62546,
                    "nodeType": "ArrayTypeName",
                    "src": "12720:9:96",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12719:18:96"
            },
            "scope": 62570,
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
          "id": 61960,
          "nodeType": "StructuredDocumentation",
          "src": "230:1098:96",
          "text": " @dev Library for managing\n https://en.wikipedia.org/wiki/Set_(abstract_data_type)[sets] of primitive\n types.\n Sets have the following properties:\n - Elements are added, removed, and checked for existence in constant time\n (O(1)).\n - Elements are enumerated in O(n). No guarantees are made on the ordering.\n ```solidity\n contract Example {\n     // Add the library methods\n     using EnumerableSet for EnumerableSet.AddressSet;\n     // Declare a set state variable\n     EnumerableSet.AddressSet private mySet;\n }\n ```\n As of v3.3.0, sets of type `bytes32` (`Bytes32Set`), `address` (`AddressSet`)\n and `uint256` (`UintSet`) are supported.\n [WARNING]\n ====\n Trying to delete such a structure from storage will likely result in data corruption, rendering the structure\n unusable.\n See https://github.com/ethereum/solidity/pull/11843[ethereum/solidity#11843] for more info.\n In order to clean an EnumerableSet, you can either remove all elements one by one or create a fresh instance using an\n array of EnumerableSet.\n ===="
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          62570
        ],
        "name": "EnumerableSet",
        "nameLocation": "1337:13:96",
        "scope": 62571,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 96
} as const;
