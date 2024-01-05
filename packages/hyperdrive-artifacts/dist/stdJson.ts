export const StdJson = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212207c577dc298c9ae11e12fcf45c8f770d7710fcc4b0535c46d2911cc5cd068e3d664736f6c63430008130033",
    "sourceMap": "830:5374:81:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;830:5374:81;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212207c577dc298c9ae11e12fcf45c8f770d7710fcc4b0535c46d2911cc5cd068e3d664736f6c63430008130033",
    "sourceMap": "830:5374:81:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdJson.sol\":\"stdJson\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"lib/forge-std/src/StdJson.sol\":{\"keccak256\":\"0x9e2a7521190c462a0667706385f1c52a816220a9813ca8ac520fba7ba45d660b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7d23017fe6570b28130a731b86179352b93a5fb5af32f11559837afc1186293c\",\"dweb:/ipfs/QmR3p6zG5Kmcr8gKocFCSopLHfXv1AziPJbH17nKyMxwxV\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]}},\"version\":1}",
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
        "lib/forge-std/src/StdJson.sol": "stdJson"
      },
      "libraries": {}
    },
    "sources": {
      "lib/forge-std/src/StdJson.sol": {
        "keccak256": "0x9e2a7521190c462a0667706385f1c52a816220a9813ca8ac520fba7ba45d660b",
        "urls": [
          "bzz-raw://7d23017fe6570b28130a731b86179352b93a5fb5af32f11559837afc1186293c",
          "dweb:/ipfs/QmR3p6zG5Kmcr8gKocFCSopLHfXv1AziPJbH17nKyMxwxV"
        ],
        "license": "MIT"
      },
      "lib/forge-std/src/Vm.sol": {
        "keccak256": "0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4",
        "urls": [
          "bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241",
          "dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/forge-std/src/StdJson.sol",
    "id": 27604,
    "exportedSymbols": {
      "VmSafe": [
        32405
      ],
      "stdJson": [
        27603
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:6173:81",
    "nodes": [
      {
        "id": 27029,
        "nodeType": "PragmaDirective",
        "src": "32:31:81",
        "nodes": [],
        "literals": [
          "solidity",
          ">=",
          "0.6",
          ".0",
          "<",
          "0.9",
          ".0"
        ]
      },
      {
        "id": 27030,
        "nodeType": "PragmaDirective",
        "src": "65:33:81",
        "nodes": [],
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ]
      },
      {
        "id": 27032,
        "nodeType": "ImportDirective",
        "src": "100:32:81",
        "nodes": [],
        "absolutePath": "lib/forge-std/src/Vm.sol",
        "file": "./Vm.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 27604,
        "sourceUnit": 32878,
        "symbolAliases": [
          {
            "foreign": {
              "id": 27031,
              "name": "VmSafe",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 32405,
              "src": "108:6:81",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 27603,
        "nodeType": "ContractDefinition",
        "src": "830:5374:81",
        "nodes": [
          {
            "id": 27049,
            "nodeType": "VariableDeclaration",
            "src": "852:92:81",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "vm",
            "nameLocation": "876:2:81",
            "scope": 27603,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_VmSafe_$32405",
              "typeString": "contract VmSafe"
            },
            "typeName": {
              "id": 27034,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 27033,
                "name": "VmSafe",
                "nameLocations": [
                  "852:6:81"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 32405,
                "src": "852:6:81"
              },
              "referencedDeclaration": 32405,
              "src": "852:6:81",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_VmSafe_$32405",
                "typeString": "contract VmSafe"
              }
            },
            "value": {
              "arguments": [
                {
                  "arguments": [
                    {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "6865766d20636865617420636f6465",
                                  "id": 27043,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "string",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "922:17:81",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_stringliteral_885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d",
                                    "typeString": "literal_string \"hevm cheat code\""
                                  },
                                  "value": "hevm cheat code"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_stringliteral_885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d",
                                    "typeString": "literal_string \"hevm cheat code\""
                                  }
                                ],
                                "id": 27042,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "912:9:81",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                              },
                              "id": 27044,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "912:28:81",
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
                            "id": 27041,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "904:7:81",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 27040,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "904:7:81",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 27045,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "904:37:81",
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
                        "id": 27039,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "896:7:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint160_$",
                          "typeString": "type(uint160)"
                        },
                        "typeName": {
                          "id": 27038,
                          "name": "uint160",
                          "nodeType": "ElementaryTypeName",
                          "src": "896:7:81",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 27046,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "896:46:81",
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
                    "id": 27037,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "ElementaryTypeNameExpression",
                    "src": "888:7:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_address_$",
                      "typeString": "type(address)"
                    },
                    "typeName": {
                      "id": 27036,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "888:7:81",
                      "typeDescriptions": {}
                    }
                  },
                  "id": 27047,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "typeConversion",
                  "lValueRequested": false,
                  "nameLocations": [],
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "888:55:81",
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
                "id": 27035,
                "name": "VmSafe",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 32405,
                "src": "881:6:81",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_contract$_VmSafe_$32405_$",
                  "typeString": "type(contract VmSafe)"
                }
              },
              "id": 27048,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "881:63:81",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_VmSafe_$32405",
                "typeString": "contract VmSafe"
              }
            },
            "visibility": "private"
          },
          {
            "id": 27065,
            "nodeType": "FunctionDefinition",
            "src": "951:141:81",
            "nodes": [],
            "body": {
              "id": 27064,
              "nodeType": "Block",
              "src": "1045:47:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27060,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27051,
                        "src": "1075:4:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27061,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27053,
                        "src": "1081:3:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "id": 27058,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27049,
                        "src": "1062:2:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$32405",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 27059,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1065:9:81",
                      "memberName": "parseJson",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32032,
                      "src": "1062:12:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (string memory,string memory) pure external returns (bytes memory)"
                      }
                    },
                    "id": 27062,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1062:23:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 27057,
                  "id": 27063,
                  "nodeType": "Return",
                  "src": "1055:30:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "parseRaw",
            "nameLocation": "960:8:81",
            "parameters": {
              "id": 27054,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27051,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "983:4:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27065,
                  "src": "969:18:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27050,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "969:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27053,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "1003:3:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27065,
                  "src": "989:17:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27052,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "989:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "968:39:81"
            },
            "returnParameters": {
              "id": 27057,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27056,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27065,
                  "src": "1031:12:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27055,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1031:5:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1030:14:81"
            },
            "scope": 27603,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27081,
            "nodeType": "FunctionDefinition",
            "src": "1098:135:81",
            "nodes": [],
            "body": {
              "id": 27080,
              "nodeType": "Block",
              "src": "1182:51:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27076,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27067,
                        "src": "1216:4:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27077,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27069,
                        "src": "1222:3:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "id": 27074,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27049,
                        "src": "1199:2:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$32405",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 27075,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1202:13:81",
                      "memberName": "parseJsonUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32048,
                      "src": "1199:16:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_uint256_$",
                        "typeString": "function (string memory,string memory) external returns (uint256)"
                      }
                    },
                    "id": 27078,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1199:27:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 27073,
                  "id": 27079,
                  "nodeType": "Return",
                  "src": "1192:34:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readUint",
            "nameLocation": "1107:8:81",
            "parameters": {
              "id": 27070,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27067,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "1130:4:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27081,
                  "src": "1116:18:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27066,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1116:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27069,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "1150:3:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27081,
                  "src": "1136:17:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27068,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1136:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1115:39:81"
            },
            "returnParameters": {
              "id": 27073,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27072,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27081,
                  "src": "1173:7:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27071,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1173:7:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1172:9:81"
            },
            "scope": 27603,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27098,
            "nodeType": "FunctionDefinition",
            "src": "1239:154:81",
            "nodes": [],
            "body": {
              "id": 27097,
              "nodeType": "Block",
              "src": "1337:56:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27093,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27083,
                        "src": "1376:4:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27094,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27085,
                        "src": "1382:3:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "id": 27091,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27049,
                        "src": "1354:2:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$32405",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 27092,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1357:18:81",
                      "memberName": "parseJsonUintArray",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32058,
                      "src": "1354:21:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$",
                        "typeString": "function (string memory,string memory) external returns (uint256[] memory)"
                      }
                    },
                    "id": 27095,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1354:32:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "functionReturnParameters": 27090,
                  "id": 27096,
                  "nodeType": "Return",
                  "src": "1347:39:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readUintArray",
            "nameLocation": "1248:13:81",
            "parameters": {
              "id": 27086,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27083,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "1276:4:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27098,
                  "src": "1262:18:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27082,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1262:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27085,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "1296:3:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27098,
                  "src": "1282:17:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27084,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1282:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1261:39:81"
            },
            "returnParameters": {
              "id": 27090,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27089,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27098,
                  "src": "1319:16:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27087,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1319:7:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 27088,
                    "nodeType": "ArrayTypeName",
                    "src": "1319:9:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1318:18:81"
            },
            "scope": 27603,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27114,
            "nodeType": "FunctionDefinition",
            "src": "1399:132:81",
            "nodes": [],
            "body": {
              "id": 27113,
              "nodeType": "Block",
              "src": "1481:50:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27109,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27100,
                        "src": "1514:4:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27110,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27102,
                        "src": "1520:3:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "id": 27107,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27049,
                        "src": "1498:2:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$32405",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 27108,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1501:12:81",
                      "memberName": "parseJsonInt",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32067,
                      "src": "1498:15:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_int256_$",
                        "typeString": "function (string memory,string memory) external returns (int256)"
                      }
                    },
                    "id": 27111,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1498:26:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 27106,
                  "id": 27112,
                  "nodeType": "Return",
                  "src": "1491:33:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readInt",
            "nameLocation": "1408:7:81",
            "parameters": {
              "id": 27103,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27100,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "1430:4:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27114,
                  "src": "1416:18:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27099,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1416:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27102,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "1450:3:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27114,
                  "src": "1436:17:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27101,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1436:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1415:39:81"
            },
            "returnParameters": {
              "id": 27106,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27105,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27114,
                  "src": "1473:6:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 27104,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1473:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1472:8:81"
            },
            "scope": 27603,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27131,
            "nodeType": "FunctionDefinition",
            "src": "1537:151:81",
            "nodes": [],
            "body": {
              "id": 27130,
              "nodeType": "Block",
              "src": "1633:55:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27126,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27116,
                        "src": "1671:4:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27127,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27118,
                        "src": "1677:3:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "id": 27124,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27049,
                        "src": "1650:2:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$32405",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 27125,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1653:17:81",
                      "memberName": "parseJsonIntArray",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32077,
                      "src": "1650:20:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_int256_$dyn_memory_ptr_$",
                        "typeString": "function (string memory,string memory) external returns (int256[] memory)"
                      }
                    },
                    "id": 27128,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1650:31:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                      "typeString": "int256[] memory"
                    }
                  },
                  "functionReturnParameters": 27123,
                  "id": 27129,
                  "nodeType": "Return",
                  "src": "1643:38:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readIntArray",
            "nameLocation": "1546:12:81",
            "parameters": {
              "id": 27119,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27116,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "1573:4:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27131,
                  "src": "1559:18:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27115,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1559:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27118,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "1593:3:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27131,
                  "src": "1579:17:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27117,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1579:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1558:39:81"
            },
            "returnParameters": {
              "id": 27123,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27122,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27131,
                  "src": "1616:15:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27120,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1616:6:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 27121,
                    "nodeType": "ArrayTypeName",
                    "src": "1616:8:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1615:17:81"
            },
            "scope": 27603,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27147,
            "nodeType": "FunctionDefinition",
            "src": "1694:141:81",
            "nodes": [],
            "body": {
              "id": 27146,
              "nodeType": "Block",
              "src": "1781:54:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27142,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27133,
                        "src": "1818:4:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27143,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27135,
                        "src": "1824:3:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "id": 27140,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27049,
                        "src": "1798:2:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$32405",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 27141,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1801:16:81",
                      "memberName": "parseJsonBytes32",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32162,
                      "src": "1798:19:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (string memory,string memory) external returns (bytes32)"
                      }
                    },
                    "id": 27144,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1798:30:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 27139,
                  "id": 27145,
                  "nodeType": "Return",
                  "src": "1791:37:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readBytes32",
            "nameLocation": "1703:11:81",
            "parameters": {
              "id": 27136,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27133,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "1729:4:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27147,
                  "src": "1715:18:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27132,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1715:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27135,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "1749:3:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27147,
                  "src": "1735:17:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27134,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1735:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1714:39:81"
            },
            "returnParameters": {
              "id": 27139,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27138,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27147,
                  "src": "1772:7:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27137,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1772:7:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1771:9:81"
            },
            "scope": 27603,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27164,
            "nodeType": "FunctionDefinition",
            "src": "1841:160:81",
            "nodes": [],
            "body": {
              "id": 27163,
              "nodeType": "Block",
              "src": "1942:59:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27159,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27149,
                        "src": "1984:4:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27160,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27151,
                        "src": "1990:3:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "id": 27157,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27049,
                        "src": "1959:2:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$32405",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 27158,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1962:21:81",
                      "memberName": "parseJsonBytes32Array",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32172,
                      "src": "1959:24:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                        "typeString": "function (string memory,string memory) external returns (bytes32[] memory)"
                      }
                    },
                    "id": 27161,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1959:35:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                      "typeString": "bytes32[] memory"
                    }
                  },
                  "functionReturnParameters": 27156,
                  "id": 27162,
                  "nodeType": "Return",
                  "src": "1952:42:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readBytes32Array",
            "nameLocation": "1850:16:81",
            "parameters": {
              "id": 27152,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27149,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "1881:4:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27164,
                  "src": "1867:18:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27148,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1867:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27151,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "1901:3:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27164,
                  "src": "1887:17:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27150,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1887:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1866:39:81"
            },
            "returnParameters": {
              "id": 27156,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27155,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27164,
                  "src": "1924:16:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27153,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "1924:7:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 27154,
                    "nodeType": "ArrayTypeName",
                    "src": "1924:9:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1923:18:81"
            },
            "scope": 27603,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27180,
            "nodeType": "FunctionDefinition",
            "src": "2007:145:81",
            "nodes": [],
            "body": {
              "id": 27179,
              "nodeType": "Block",
              "src": "2099:53:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27175,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27166,
                        "src": "2135:4:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27176,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27168,
                        "src": "2141:3:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "id": 27173,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27049,
                        "src": "2116:2:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$32405",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 27174,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2119:15:81",
                      "memberName": "parseJsonString",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32124,
                      "src": "2116:18:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory) external returns (string memory)"
                      }
                    },
                    "id": 27177,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2116:29:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 27172,
                  "id": 27178,
                  "nodeType": "Return",
                  "src": "2109:36:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readString",
            "nameLocation": "2016:10:81",
            "parameters": {
              "id": 27169,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27166,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "2041:4:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27180,
                  "src": "2027:18:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27165,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2027:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27168,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "2061:3:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27180,
                  "src": "2047:17:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27167,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2047:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2026:39:81"
            },
            "returnParameters": {
              "id": 27172,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27171,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27180,
                  "src": "2084:13:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27170,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2084:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2083:15:81"
            },
            "scope": 27603,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27197,
            "nodeType": "FunctionDefinition",
            "src": "2158:157:81",
            "nodes": [],
            "body": {
              "id": 27196,
              "nodeType": "Block",
              "src": "2257:58:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27192,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27182,
                        "src": "2298:4:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27193,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27184,
                        "src": "2304:3:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "id": 27190,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27049,
                        "src": "2274:2:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$32405",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 27191,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2277:20:81",
                      "memberName": "parseJsonStringArray",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32134,
                      "src": "2274:23:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_string_memory_ptr_$dyn_memory_ptr_$",
                        "typeString": "function (string memory,string memory) external returns (string memory[] memory)"
                      }
                    },
                    "id": 27194,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2274:34:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                      "typeString": "string memory[] memory"
                    }
                  },
                  "functionReturnParameters": 27189,
                  "id": 27195,
                  "nodeType": "Return",
                  "src": "2267:41:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readStringArray",
            "nameLocation": "2167:15:81",
            "parameters": {
              "id": 27185,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27182,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "2197:4:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27197,
                  "src": "2183:18:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27181,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2183:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27184,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "2217:3:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27197,
                  "src": "2203:17:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27183,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2203:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2182:39:81"
            },
            "returnParameters": {
              "id": 27189,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27188,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27197,
                  "src": "2240:15:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27186,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "2240:6:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 27187,
                    "nodeType": "ArrayTypeName",
                    "src": "2240:8:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2239:17:81"
            },
            "scope": 27603,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27213,
            "nodeType": "FunctionDefinition",
            "src": "2321:141:81",
            "nodes": [],
            "body": {
              "id": 27212,
              "nodeType": "Block",
              "src": "2408:54:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27208,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27199,
                        "src": "2445:4:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27209,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27201,
                        "src": "2451:3:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "id": 27206,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27049,
                        "src": "2425:2:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$32405",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 27207,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2428:16:81",
                      "memberName": "parseJsonAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32105,
                      "src": "2425:19:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_address_$",
                        "typeString": "function (string memory,string memory) external returns (address)"
                      }
                    },
                    "id": 27210,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2425:30:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 27205,
                  "id": 27211,
                  "nodeType": "Return",
                  "src": "2418:37:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readAddress",
            "nameLocation": "2330:11:81",
            "parameters": {
              "id": 27202,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27199,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "2356:4:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27213,
                  "src": "2342:18:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27198,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2342:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27201,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "2376:3:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27213,
                  "src": "2362:17:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27200,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2362:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2341:39:81"
            },
            "returnParameters": {
              "id": 27205,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27204,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27213,
                  "src": "2399:7:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27203,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2399:7:81",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2398:9:81"
            },
            "scope": 27603,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27230,
            "nodeType": "FunctionDefinition",
            "src": "2468:160:81",
            "nodes": [],
            "body": {
              "id": 27229,
              "nodeType": "Block",
              "src": "2569:59:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27225,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27215,
                        "src": "2611:4:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27226,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27217,
                        "src": "2617:3:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "id": 27223,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27049,
                        "src": "2586:2:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$32405",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 27224,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2589:21:81",
                      "memberName": "parseJsonAddressArray",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32115,
                      "src": "2586:24:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$",
                        "typeString": "function (string memory,string memory) external returns (address[] memory)"
                      }
                    },
                    "id": 27227,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2586:35:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 27222,
                  "id": 27228,
                  "nodeType": "Return",
                  "src": "2579:42:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readAddressArray",
            "nameLocation": "2477:16:81",
            "parameters": {
              "id": 27218,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27215,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "2508:4:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27230,
                  "src": "2494:18:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27214,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2494:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27217,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "2528:3:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27230,
                  "src": "2514:17:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27216,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2514:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2493:39:81"
            },
            "returnParameters": {
              "id": 27222,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27221,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27230,
                  "src": "2551:16:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27219,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2551:7:81",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 27220,
                    "nodeType": "ArrayTypeName",
                    "src": "2551:9:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2550:18:81"
            },
            "scope": 27603,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27246,
            "nodeType": "FunctionDefinition",
            "src": "2634:132:81",
            "nodes": [],
            "body": {
              "id": 27245,
              "nodeType": "Block",
              "src": "2715:51:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27241,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27232,
                        "src": "2749:4:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27242,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27234,
                        "src": "2755:3:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "id": 27239,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27049,
                        "src": "2732:2:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$32405",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 27240,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2735:13:81",
                      "memberName": "parseJsonBool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32086,
                      "src": "2732:16:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bool_$",
                        "typeString": "function (string memory,string memory) external returns (bool)"
                      }
                    },
                    "id": 27243,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2732:27:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 27238,
                  "id": 27244,
                  "nodeType": "Return",
                  "src": "2725:34:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readBool",
            "nameLocation": "2643:8:81",
            "parameters": {
              "id": 27235,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27232,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "2666:4:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27246,
                  "src": "2652:18:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27231,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2652:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27234,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "2686:3:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27246,
                  "src": "2672:17:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27233,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2672:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2651:39:81"
            },
            "returnParameters": {
              "id": 27238,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27237,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27246,
                  "src": "2709:4:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27236,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2709:4:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2708:6:81"
            },
            "scope": 27603,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27263,
            "nodeType": "FunctionDefinition",
            "src": "2772:151:81",
            "nodes": [],
            "body": {
              "id": 27262,
              "nodeType": "Block",
              "src": "2867:56:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27258,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27248,
                        "src": "2906:4:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27259,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27250,
                        "src": "2912:3:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "id": 27256,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27049,
                        "src": "2884:2:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$32405",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 27257,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2887:18:81",
                      "memberName": "parseJsonBoolArray",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32096,
                      "src": "2884:21:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_bool_$dyn_memory_ptr_$",
                        "typeString": "function (string memory,string memory) external returns (bool[] memory)"
                      }
                    },
                    "id": 27260,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2884:32:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                      "typeString": "bool[] memory"
                    }
                  },
                  "functionReturnParameters": 27255,
                  "id": 27261,
                  "nodeType": "Return",
                  "src": "2877:39:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readBoolArray",
            "nameLocation": "2781:13:81",
            "parameters": {
              "id": 27251,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27248,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "2809:4:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27263,
                  "src": "2795:18:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27247,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2795:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27250,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "2829:3:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27263,
                  "src": "2815:17:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27249,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2815:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2794:39:81"
            },
            "returnParameters": {
              "id": 27255,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27254,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27263,
                  "src": "2852:13:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27252,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "2852:4:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 27253,
                    "nodeType": "ArrayTypeName",
                    "src": "2852:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2851:15:81"
            },
            "scope": 27603,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27279,
            "nodeType": "FunctionDefinition",
            "src": "2929:142:81",
            "nodes": [],
            "body": {
              "id": 27278,
              "nodeType": "Block",
              "src": "3019:52:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27274,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27265,
                        "src": "3054:4:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27275,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27267,
                        "src": "3060:3:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "id": 27272,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27049,
                        "src": "3036:2:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$32405",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 27273,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3039:14:81",
                      "memberName": "parseJsonBytes",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32143,
                      "src": "3036:17:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (string memory,string memory) external returns (bytes memory)"
                      }
                    },
                    "id": 27276,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3036:28:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 27271,
                  "id": 27277,
                  "nodeType": "Return",
                  "src": "3029:35:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readBytes",
            "nameLocation": "2938:9:81",
            "parameters": {
              "id": 27268,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27265,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "2962:4:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27279,
                  "src": "2948:18:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27264,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2948:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27267,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "2982:3:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27279,
                  "src": "2968:17:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27266,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2968:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2947:39:81"
            },
            "returnParameters": {
              "id": 27271,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27270,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27279,
                  "src": "3005:12:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27269,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3005:5:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3004:14:81"
            },
            "scope": 27603,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27296,
            "nodeType": "FunctionDefinition",
            "src": "3077:154:81",
            "nodes": [],
            "body": {
              "id": 27295,
              "nodeType": "Block",
              "src": "3174:57:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27291,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27281,
                        "src": "3214:4:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27292,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27283,
                        "src": "3220:3:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "id": 27289,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27049,
                        "src": "3191:2:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$32405",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 27290,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3194:19:81",
                      "memberName": "parseJsonBytesArray",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32153,
                      "src": "3191:22:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_bytes_memory_ptr_$dyn_memory_ptr_$",
                        "typeString": "function (string memory,string memory) external returns (bytes memory[] memory)"
                      }
                    },
                    "id": 27293,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3191:33:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                      "typeString": "bytes memory[] memory"
                    }
                  },
                  "functionReturnParameters": 27288,
                  "id": 27294,
                  "nodeType": "Return",
                  "src": "3184:40:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readBytesArray",
            "nameLocation": "3086:14:81",
            "parameters": {
              "id": 27284,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27281,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "3115:4:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27296,
                  "src": "3101:18:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27280,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3101:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27283,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "3135:3:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27296,
                  "src": "3121:17:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27282,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3121:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3100:39:81"
            },
            "returnParameters": {
              "id": 27288,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27287,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27296,
                  "src": "3158:14:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27285,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "3158:5:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 27286,
                    "nodeType": "ArrayTypeName",
                    "src": "3158:7:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3157:16:81"
            },
            "scope": 27603,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27315,
            "nodeType": "FunctionDefinition",
            "src": "3237:167:81",
            "nodes": [],
            "body": {
              "id": 27314,
              "nodeType": "Block",
              "src": "3343:61:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27309,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27298,
                        "src": "3377:7:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27310,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27300,
                        "src": "3386:3:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27311,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27302,
                        "src": "3391:5:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "expression": {
                        "id": 27307,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27049,
                        "src": "3360:2:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$32405",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 27308,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3363:13:81",
                      "memberName": "serializeBool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32193,
                      "src": "3360:16:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bool_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,bool) external returns (string memory)"
                      }
                    },
                    "id": 27312,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3360:37:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 27306,
                  "id": 27313,
                  "nodeType": "Return",
                  "src": "3353:44:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "3246:9:81",
            "parameters": {
              "id": 27303,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27298,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "3270:7:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27315,
                  "src": "3256:21:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27297,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3256:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27300,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "3293:3:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27315,
                  "src": "3279:17:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27299,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3279:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27302,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3303:5:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27315,
                  "src": "3298:10:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27301,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3298:4:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3255:54:81"
            },
            "returnParameters": {
              "id": 27306,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27305,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27315,
                  "src": "3328:13:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27304,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3328:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3327:15:81"
            },
            "scope": 27603,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27335,
            "nodeType": "FunctionDefinition",
            "src": "3410:196:81",
            "nodes": [],
            "body": {
              "id": 27334,
              "nodeType": "Block",
              "src": "3545:61:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27329,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27317,
                        "src": "3579:7:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27330,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27319,
                        "src": "3588:3:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27331,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27322,
                        "src": "3593:5:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                          "typeString": "bool[] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                          "typeString": "bool[] memory"
                        }
                      ],
                      "expression": {
                        "id": 27327,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27049,
                        "src": "3562:2:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$32405",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 27328,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3565:13:81",
                      "memberName": "serializeBool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32271,
                      "src": "3562:16:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bool_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,bool[] memory) external returns (string memory)"
                      }
                    },
                    "id": 27332,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3562:37:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 27326,
                  "id": 27333,
                  "nodeType": "Return",
                  "src": "3555:44:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "3419:9:81",
            "parameters": {
              "id": 27323,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27317,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "3443:7:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27335,
                  "src": "3429:21:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27316,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3429:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27319,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "3466:3:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27335,
                  "src": "3452:17:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27318,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3452:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27322,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3485:5:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27335,
                  "src": "3471:19:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27320,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "3471:4:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 27321,
                    "nodeType": "ArrayTypeName",
                    "src": "3471:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3428:63:81"
            },
            "returnParameters": {
              "id": 27326,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27325,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27335,
                  "src": "3526:13:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27324,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3526:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3525:15:81"
            },
            "scope": 27603,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27354,
            "nodeType": "FunctionDefinition",
            "src": "3612:170:81",
            "nodes": [],
            "body": {
              "id": 27353,
              "nodeType": "Block",
              "src": "3721:61:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27348,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27337,
                        "src": "3755:7:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27349,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27339,
                        "src": "3764:3:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27350,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27341,
                        "src": "3769:5:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 27346,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27049,
                        "src": "3738:2:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$32405",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 27347,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3741:13:81",
                      "memberName": "serializeUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32204,
                      "src": "3738:16:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_uint256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,uint256) external returns (string memory)"
                      }
                    },
                    "id": 27351,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3738:37:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 27345,
                  "id": 27352,
                  "nodeType": "Return",
                  "src": "3731:44:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "3621:9:81",
            "parameters": {
              "id": 27342,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27337,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "3645:7:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27354,
                  "src": "3631:21:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27336,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3631:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27339,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "3668:3:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27354,
                  "src": "3654:17:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27338,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3654:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27341,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3681:5:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27354,
                  "src": "3673:13:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27340,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3673:7:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3630:57:81"
            },
            "returnParameters": {
              "id": 27345,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27344,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27354,
                  "src": "3706:13:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27343,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3706:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3705:15:81"
            },
            "scope": 27603,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27374,
            "nodeType": "FunctionDefinition",
            "src": "3788:199:81",
            "nodes": [],
            "body": {
              "id": 27373,
              "nodeType": "Block",
              "src": "3926:61:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27368,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27356,
                        "src": "3960:7:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27369,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27358,
                        "src": "3969:3:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27370,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27361,
                        "src": "3974:5:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      ],
                      "expression": {
                        "id": 27366,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27049,
                        "src": "3943:2:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$32405",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 27367,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3946:13:81",
                      "memberName": "serializeUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32283,
                      "src": "3943:16:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,uint256[] memory) external returns (string memory)"
                      }
                    },
                    "id": 27371,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3943:37:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 27365,
                  "id": 27372,
                  "nodeType": "Return",
                  "src": "3936:44:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "3797:9:81",
            "parameters": {
              "id": 27362,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27356,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "3821:7:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27374,
                  "src": "3807:21:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27355,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3807:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27358,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "3844:3:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27374,
                  "src": "3830:17:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27357,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3830:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27361,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3866:5:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27374,
                  "src": "3849:22:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27359,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3849:7:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 27360,
                    "nodeType": "ArrayTypeName",
                    "src": "3849:9:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3806:66:81"
            },
            "returnParameters": {
              "id": 27365,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27364,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27374,
                  "src": "3907:13:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27363,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3907:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3906:15:81"
            },
            "scope": 27603,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27393,
            "nodeType": "FunctionDefinition",
            "src": "3993:168:81",
            "nodes": [],
            "body": {
              "id": 27392,
              "nodeType": "Block",
              "src": "4101:60:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27387,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27376,
                        "src": "4134:7:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27388,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27378,
                        "src": "4143:3:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27389,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27380,
                        "src": "4148:5:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "expression": {
                        "id": 27385,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27049,
                        "src": "4118:2:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$32405",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 27386,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4121:12:81",
                      "memberName": "serializeInt",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32215,
                      "src": "4118:15:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_int256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,int256) external returns (string memory)"
                      }
                    },
                    "id": 27390,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4118:36:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 27384,
                  "id": 27391,
                  "nodeType": "Return",
                  "src": "4111:43:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "4002:9:81",
            "parameters": {
              "id": 27381,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27376,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "4026:7:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27393,
                  "src": "4012:21:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27375,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4012:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27378,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "4049:3:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27393,
                  "src": "4035:17:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27377,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4035:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27380,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4061:5:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27393,
                  "src": "4054:12:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 27379,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4054:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4011:56:81"
            },
            "returnParameters": {
              "id": 27384,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27383,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27393,
                  "src": "4086:13:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27382,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4086:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4085:15:81"
            },
            "scope": 27603,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27413,
            "nodeType": "FunctionDefinition",
            "src": "4167:197:81",
            "nodes": [],
            "body": {
              "id": 27412,
              "nodeType": "Block",
              "src": "4304:60:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27407,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27395,
                        "src": "4337:7:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27408,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27397,
                        "src": "4346:3:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27409,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27400,
                        "src": "4351:5:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                          "typeString": "int256[] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                          "typeString": "int256[] memory"
                        }
                      ],
                      "expression": {
                        "id": 27405,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27049,
                        "src": "4321:2:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$32405",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 27406,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4324:12:81",
                      "memberName": "serializeInt",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32295,
                      "src": "4321:15:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_int256_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,int256[] memory) external returns (string memory)"
                      }
                    },
                    "id": 27410,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4321:36:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 27404,
                  "id": 27411,
                  "nodeType": "Return",
                  "src": "4314:43:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "4176:9:81",
            "parameters": {
              "id": 27401,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27395,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "4200:7:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27413,
                  "src": "4186:21:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27394,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4186:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27397,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "4223:3:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27413,
                  "src": "4209:17:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27396,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4209:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27400,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4244:5:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27413,
                  "src": "4228:21:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27398,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4228:6:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 27399,
                    "nodeType": "ArrayTypeName",
                    "src": "4228:8:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4185:65:81"
            },
            "returnParameters": {
              "id": 27404,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27403,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27413,
                  "src": "4285:13:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27402,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4285:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4284:15:81"
            },
            "scope": 27603,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27432,
            "nodeType": "FunctionDefinition",
            "src": "4370:173:81",
            "nodes": [],
            "body": {
              "id": 27431,
              "nodeType": "Block",
              "src": "4479:64:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27426,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27415,
                        "src": "4516:7:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27427,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27417,
                        "src": "4525:3:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27428,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27419,
                        "src": "4530:5:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "id": 27424,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27049,
                        "src": "4496:2:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$32405",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 27425,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4499:16:81",
                      "memberName": "serializeAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32226,
                      "src": "4496:19:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_address_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,address) external returns (string memory)"
                      }
                    },
                    "id": 27429,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4496:40:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 27423,
                  "id": 27430,
                  "nodeType": "Return",
                  "src": "4489:47:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "4379:9:81",
            "parameters": {
              "id": 27420,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27415,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "4403:7:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27432,
                  "src": "4389:21:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27414,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4389:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27417,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "4426:3:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27432,
                  "src": "4412:17:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27416,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4412:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27419,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4439:5:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27432,
                  "src": "4431:13:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27418,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4431:7:81",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4388:57:81"
            },
            "returnParameters": {
              "id": 27423,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27422,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27432,
                  "src": "4464:13:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27421,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4464:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4463:15:81"
            },
            "scope": 27603,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27452,
            "nodeType": "FunctionDefinition",
            "src": "4549:202:81",
            "nodes": [],
            "body": {
              "id": 27451,
              "nodeType": "Block",
              "src": "4687:64:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27446,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27434,
                        "src": "4724:7:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27447,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27436,
                        "src": "4733:3:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27448,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27439,
                        "src": "4738:5:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      ],
                      "expression": {
                        "id": 27444,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27049,
                        "src": "4704:2:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$32405",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 27445,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4707:16:81",
                      "memberName": "serializeAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32307,
                      "src": "4704:19:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,address[] memory) external returns (string memory)"
                      }
                    },
                    "id": 27449,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4704:40:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 27443,
                  "id": 27450,
                  "nodeType": "Return",
                  "src": "4697:47:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "4558:9:81",
            "parameters": {
              "id": 27440,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27434,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "4582:7:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27452,
                  "src": "4568:21:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27433,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4568:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27436,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "4605:3:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27452,
                  "src": "4591:17:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27435,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4591:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27439,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4627:5:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27452,
                  "src": "4610:22:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27437,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4610:7:81",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 27438,
                    "nodeType": "ArrayTypeName",
                    "src": "4610:9:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4567:66:81"
            },
            "returnParameters": {
              "id": 27443,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27442,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27452,
                  "src": "4668:13:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27441,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4668:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4667:15:81"
            },
            "scope": 27603,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27471,
            "nodeType": "FunctionDefinition",
            "src": "4757:173:81",
            "nodes": [],
            "body": {
              "id": 27470,
              "nodeType": "Block",
              "src": "4866:64:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27465,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27454,
                        "src": "4903:7:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27466,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27456,
                        "src": "4912:3:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27467,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27458,
                        "src": "4917:5:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "id": 27463,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27049,
                        "src": "4883:2:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$32405",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 27464,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4886:16:81",
                      "memberName": "serializeBytes32",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32237,
                      "src": "4883:19:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bytes32_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,bytes32) external returns (string memory)"
                      }
                    },
                    "id": 27468,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4883:40:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 27462,
                  "id": 27469,
                  "nodeType": "Return",
                  "src": "4876:47:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "4766:9:81",
            "parameters": {
              "id": 27459,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27454,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "4790:7:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27471,
                  "src": "4776:21:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27453,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4776:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27456,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "4813:3:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27471,
                  "src": "4799:17:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27455,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4799:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27458,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4826:5:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27471,
                  "src": "4818:13:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27457,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4818:7:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4775:57:81"
            },
            "returnParameters": {
              "id": 27462,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27461,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27471,
                  "src": "4851:13:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27460,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4851:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4850:15:81"
            },
            "scope": 27603,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27491,
            "nodeType": "FunctionDefinition",
            "src": "4936:202:81",
            "nodes": [],
            "body": {
              "id": 27490,
              "nodeType": "Block",
              "src": "5074:64:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27485,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27473,
                        "src": "5111:7:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27486,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27475,
                        "src": "5120:3:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27487,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27478,
                        "src": "5125:5:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                          "typeString": "bytes32[] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                          "typeString": "bytes32[] memory"
                        }
                      ],
                      "expression": {
                        "id": 27483,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27049,
                        "src": "5091:2:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$32405",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 27484,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5094:16:81",
                      "memberName": "serializeBytes32",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32319,
                      "src": "5091:19:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bytes32_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,bytes32[] memory) external returns (string memory)"
                      }
                    },
                    "id": 27488,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5091:40:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 27482,
                  "id": 27489,
                  "nodeType": "Return",
                  "src": "5084:47:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "4945:9:81",
            "parameters": {
              "id": 27479,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27473,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "4969:7:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27491,
                  "src": "4955:21:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27472,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4955:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27475,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "4992:3:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27491,
                  "src": "4978:17:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27474,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4978:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27478,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5014:5:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27491,
                  "src": "4997:22:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27476,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "4997:7:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 27477,
                    "nodeType": "ArrayTypeName",
                    "src": "4997:9:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4954:66:81"
            },
            "returnParameters": {
              "id": 27482,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27481,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27491,
                  "src": "5055:13:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27480,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5055:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5054:15:81"
            },
            "scope": 27603,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27510,
            "nodeType": "FunctionDefinition",
            "src": "5144:176:81",
            "nodes": [],
            "body": {
              "id": 27509,
              "nodeType": "Block",
              "src": "5258:62:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27504,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27493,
                        "src": "5293:7:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27505,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27495,
                        "src": "5302:3:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27506,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27497,
                        "src": "5307:5:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "id": 27502,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27049,
                        "src": "5275:2:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$32405",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 27503,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5278:14:81",
                      "memberName": "serializeBytes",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32259,
                      "src": "5275:17:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,bytes memory) external returns (string memory)"
                      }
                    },
                    "id": 27507,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5275:38:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 27501,
                  "id": 27508,
                  "nodeType": "Return",
                  "src": "5268:45:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "5153:9:81",
            "parameters": {
              "id": 27498,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27493,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "5177:7:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27510,
                  "src": "5163:21:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27492,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5163:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27495,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "5200:3:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27510,
                  "src": "5186:17:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27494,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5186:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27497,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5218:5:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27510,
                  "src": "5205:18:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27496,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5205:5:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5162:62:81"
            },
            "returnParameters": {
              "id": 27501,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27500,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27510,
                  "src": "5243:13:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27499,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5243:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5242:15:81"
            },
            "scope": 27603,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27530,
            "nodeType": "FunctionDefinition",
            "src": "5326:198:81",
            "nodes": [],
            "body": {
              "id": 27529,
              "nodeType": "Block",
              "src": "5462:62:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27524,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27512,
                        "src": "5497:7:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27525,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27514,
                        "src": "5506:3:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27526,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27517,
                        "src": "5511:5:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                          "typeString": "bytes memory[] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                          "typeString": "bytes memory[] memory"
                        }
                      ],
                      "expression": {
                        "id": 27522,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27049,
                        "src": "5479:2:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$32405",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 27523,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5482:14:81",
                      "memberName": "serializeBytes",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32343,
                      "src": "5479:17:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bytes_memory_ptr_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,bytes memory[] memory) external returns (string memory)"
                      }
                    },
                    "id": 27527,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5479:38:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 27521,
                  "id": 27528,
                  "nodeType": "Return",
                  "src": "5472:45:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "5335:9:81",
            "parameters": {
              "id": 27518,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27512,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "5359:7:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27530,
                  "src": "5345:21:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27511,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5345:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27514,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "5382:3:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27530,
                  "src": "5368:17:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27513,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5368:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27517,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5402:5:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27530,
                  "src": "5387:20:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27515,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "5387:5:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 27516,
                    "nodeType": "ArrayTypeName",
                    "src": "5387:7:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5344:64:81"
            },
            "returnParameters": {
              "id": 27521,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27520,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27530,
                  "src": "5443:13:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27519,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5443:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5442:15:81"
            },
            "scope": 27603,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27549,
            "nodeType": "FunctionDefinition",
            "src": "5530:198:81",
            "nodes": [],
            "body": {
              "id": 27548,
              "nodeType": "Block",
              "src": "5665:63:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27543,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27532,
                        "src": "5701:7:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27544,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27534,
                        "src": "5710:3:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27545,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27536,
                        "src": "5715:5:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "id": 27541,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27049,
                        "src": "5682:2:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$32405",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 27542,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5685:15:81",
                      "memberName": "serializeString",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32248,
                      "src": "5682:18:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,string memory) external returns (string memory)"
                      }
                    },
                    "id": 27546,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5682:39:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 27540,
                  "id": 27547,
                  "nodeType": "Return",
                  "src": "5675:46:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "5539:9:81",
            "parameters": {
              "id": 27537,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27532,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "5563:7:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27549,
                  "src": "5549:21:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27531,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5549:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27534,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "5586:3:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27549,
                  "src": "5572:17:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27533,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5572:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27536,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5605:5:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27549,
                  "src": "5591:19:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27535,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5591:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5548:63:81"
            },
            "returnParameters": {
              "id": 27540,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27539,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27549,
                  "src": "5646:13:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27538,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5646:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5645:15:81"
            },
            "scope": 27603,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27569,
            "nodeType": "FunctionDefinition",
            "src": "5734:200:81",
            "nodes": [],
            "body": {
              "id": 27568,
              "nodeType": "Block",
              "src": "5871:63:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27563,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27551,
                        "src": "5907:7:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27564,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27553,
                        "src": "5916:3:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27565,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27556,
                        "src": "5921:5:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                          "typeString": "string memory[] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                          "typeString": "string memory[] memory"
                        }
                      ],
                      "expression": {
                        "id": 27561,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27049,
                        "src": "5888:2:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$32405",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 27562,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5891:15:81",
                      "memberName": "serializeString",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32331,
                      "src": "5888:18:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_string_memory_ptr_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,string memory[] memory) external returns (string memory)"
                      }
                    },
                    "id": 27566,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5888:39:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 27560,
                  "id": 27567,
                  "nodeType": "Return",
                  "src": "5881:46:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "5743:9:81",
            "parameters": {
              "id": 27557,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27551,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "5767:7:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27569,
                  "src": "5753:21:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27550,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5753:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27553,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "5790:3:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27569,
                  "src": "5776:17:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27552,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5776:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27556,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5811:5:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27569,
                  "src": "5795:21:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27554,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "5795:6:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 27555,
                    "nodeType": "ArrayTypeName",
                    "src": "5795:8:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5752:65:81"
            },
            "returnParameters": {
              "id": 27560,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27559,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27569,
                  "src": "5852:13:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27558,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5852:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5851:15:81"
            },
            "scope": 27603,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27584,
            "nodeType": "FunctionDefinition",
            "src": "5940:111:81",
            "nodes": [],
            "body": {
              "id": 27583,
              "nodeType": "Block",
              "src": "6007:44:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27579,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27571,
                        "src": "6030:7:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27580,
                        "name": "path",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27573,
                        "src": "6039:4:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "id": 27576,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27049,
                        "src": "6017:2:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$32405",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 27578,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6020:9:81",
                      "memberName": "writeJson",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32350,
                      "src": "6017:12:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,string memory) external"
                      }
                    },
                    "id": 27581,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6017:27:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27582,
                  "nodeType": "ExpressionStatement",
                  "src": "6017:27:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "write",
            "nameLocation": "5949:5:81",
            "parameters": {
              "id": 27574,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27571,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "5969:7:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27584,
                  "src": "5955:21:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27570,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5955:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27573,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "5992:4:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27584,
                  "src": "5978:18:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27572,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5978:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5954:43:81"
            },
            "returnParameters": {
              "id": 27575,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6007:0:81"
            },
            "scope": 27603,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27602,
            "nodeType": "FunctionDefinition",
            "src": "6057:145:81",
            "nodes": [],
            "body": {
              "id": 27601,
              "nodeType": "Block",
              "src": "6148:54:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27596,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27586,
                        "src": "6171:7:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27597,
                        "name": "path",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27588,
                        "src": "6180:4:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27598,
                        "name": "valueKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27590,
                        "src": "6186:8:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "id": 27593,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27049,
                        "src": "6158:2:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$32405",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 27595,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6161:9:81",
                      "memberName": "writeJson",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32359,
                      "src": "6158:12:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,string memory,string memory) external"
                      }
                    },
                    "id": 27599,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6158:37:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27600,
                  "nodeType": "ExpressionStatement",
                  "src": "6158:37:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "write",
            "nameLocation": "6066:5:81",
            "parameters": {
              "id": 27591,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27586,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "6086:7:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27602,
                  "src": "6072:21:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27585,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6072:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27588,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "6109:4:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27602,
                  "src": "6095:18:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27587,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6095:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27590,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "6129:8:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 27602,
                  "src": "6115:22:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27589,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6115:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6071:67:81"
            },
            "returnParameters": {
              "id": 27592,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6148:0:81"
            },
            "scope": 27603,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "stdJson",
        "contractDependencies": [],
        "contractKind": "library",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          27603
        ],
        "name": "stdJson",
        "nameLocation": "838:7:81",
        "scope": 27604,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 81
} as const;
