export const StdJson = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220cb2f28ffa28a2680e4abd281ab7d6c3a8930cadf855c19e5998e398041b2ea9164736f6c63430008130033",
    "sourceMap": "830:5374:64:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;830:5374:64;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220cb2f28ffa28a2680e4abd281ab7d6c3a8930cadf855c19e5998e398041b2ea9164736f6c63430008130033",
    "sourceMap": "830:5374:64:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdJson.sol\":\"stdJson\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"lib/forge-std/src/StdJson.sol\":{\"keccak256\":\"0x9e2a7521190c462a0667706385f1c52a816220a9813ca8ac520fba7ba45d660b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7d23017fe6570b28130a731b86179352b93a5fb5af32f11559837afc1186293c\",\"dweb:/ipfs/QmR3p6zG5Kmcr8gKocFCSopLHfXv1AziPJbH17nKyMxwxV\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]}},\"version\":1}",
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
    "id": 23674,
    "exportedSymbols": {
      "VmSafe": [
        28475
      ],
      "stdJson": [
        23673
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:6173:64",
    "nodes": [
      {
        "id": 23099,
        "nodeType": "PragmaDirective",
        "src": "32:31:64",
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
        "id": 23100,
        "nodeType": "PragmaDirective",
        "src": "65:33:64",
        "nodes": [],
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ]
      },
      {
        "id": 23102,
        "nodeType": "ImportDirective",
        "src": "100:32:64",
        "nodes": [],
        "absolutePath": "lib/forge-std/src/Vm.sol",
        "file": "./Vm.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 23674,
        "sourceUnit": 28948,
        "symbolAliases": [
          {
            "foreign": {
              "id": 23101,
              "name": "VmSafe",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 28475,
              "src": "108:6:64",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 23673,
        "nodeType": "ContractDefinition",
        "src": "830:5374:64",
        "nodes": [
          {
            "id": 23119,
            "nodeType": "VariableDeclaration",
            "src": "852:92:64",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "vm",
            "nameLocation": "876:2:64",
            "scope": 23673,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_VmSafe_$28475",
              "typeString": "contract VmSafe"
            },
            "typeName": {
              "id": 23104,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 23103,
                "name": "VmSafe",
                "nameLocations": [
                  "852:6:64"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 28475,
                "src": "852:6:64"
              },
              "referencedDeclaration": 28475,
              "src": "852:6:64",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_VmSafe_$28475",
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
                                  "id": 23113,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "string",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "922:17:64",
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
                                "id": 23112,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "912:9:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                              },
                              "id": 23114,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "912:28:64",
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
                            "id": 23111,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "904:7:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 23110,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "904:7:64",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 23115,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "904:37:64",
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
                        "id": 23109,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "896:7:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint160_$",
                          "typeString": "type(uint160)"
                        },
                        "typeName": {
                          "id": 23108,
                          "name": "uint160",
                          "nodeType": "ElementaryTypeName",
                          "src": "896:7:64",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 23116,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "896:46:64",
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
                    "id": 23107,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "ElementaryTypeNameExpression",
                    "src": "888:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_address_$",
                      "typeString": "type(address)"
                    },
                    "typeName": {
                      "id": 23106,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "888:7:64",
                      "typeDescriptions": {}
                    }
                  },
                  "id": 23117,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "typeConversion",
                  "lValueRequested": false,
                  "nameLocations": [],
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "888:55:64",
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
                "id": 23105,
                "name": "VmSafe",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 28475,
                "src": "881:6:64",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_contract$_VmSafe_$28475_$",
                  "typeString": "type(contract VmSafe)"
                }
              },
              "id": 23118,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "881:63:64",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_VmSafe_$28475",
                "typeString": "contract VmSafe"
              }
            },
            "visibility": "private"
          },
          {
            "id": 23135,
            "nodeType": "FunctionDefinition",
            "src": "951:141:64",
            "nodes": [],
            "body": {
              "id": 23134,
              "nodeType": "Block",
              "src": "1045:47:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23130,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23121,
                        "src": "1075:4:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23131,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23123,
                        "src": "1081:3:64",
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
                        "id": 23128,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23119,
                        "src": "1062:2:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$28475",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23129,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1065:9:64",
                      "memberName": "parseJson",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28102,
                      "src": "1062:12:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (string memory,string memory) pure external returns (bytes memory)"
                      }
                    },
                    "id": 23132,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1062:23:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 23127,
                  "id": 23133,
                  "nodeType": "Return",
                  "src": "1055:30:64"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "parseRaw",
            "nameLocation": "960:8:64",
            "parameters": {
              "id": 23124,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23121,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "983:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23135,
                  "src": "969:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23120,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "969:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23123,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "1003:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23135,
                  "src": "989:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23122,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "989:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "968:39:64"
            },
            "returnParameters": {
              "id": 23127,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23126,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23135,
                  "src": "1031:12:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 23125,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1031:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1030:14:64"
            },
            "scope": 23673,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23151,
            "nodeType": "FunctionDefinition",
            "src": "1098:135:64",
            "nodes": [],
            "body": {
              "id": 23150,
              "nodeType": "Block",
              "src": "1182:51:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23146,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23137,
                        "src": "1216:4:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23147,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23139,
                        "src": "1222:3:64",
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
                        "id": 23144,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23119,
                        "src": "1199:2:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$28475",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23145,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1202:13:64",
                      "memberName": "parseJsonUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28118,
                      "src": "1199:16:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_uint256_$",
                        "typeString": "function (string memory,string memory) external returns (uint256)"
                      }
                    },
                    "id": 23148,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1199:27:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 23143,
                  "id": 23149,
                  "nodeType": "Return",
                  "src": "1192:34:64"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readUint",
            "nameLocation": "1107:8:64",
            "parameters": {
              "id": 23140,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23137,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "1130:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23151,
                  "src": "1116:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23136,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1116:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23139,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "1150:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23151,
                  "src": "1136:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23138,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1136:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1115:39:64"
            },
            "returnParameters": {
              "id": 23143,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23142,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23151,
                  "src": "1173:7:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 23141,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1173:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1172:9:64"
            },
            "scope": 23673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23168,
            "nodeType": "FunctionDefinition",
            "src": "1239:154:64",
            "nodes": [],
            "body": {
              "id": 23167,
              "nodeType": "Block",
              "src": "1337:56:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23163,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23153,
                        "src": "1376:4:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23164,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23155,
                        "src": "1382:3:64",
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
                        "id": 23161,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23119,
                        "src": "1354:2:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$28475",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23162,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1357:18:64",
                      "memberName": "parseJsonUintArray",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28128,
                      "src": "1354:21:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$",
                        "typeString": "function (string memory,string memory) external returns (uint256[] memory)"
                      }
                    },
                    "id": 23165,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1354:32:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "functionReturnParameters": 23160,
                  "id": 23166,
                  "nodeType": "Return",
                  "src": "1347:39:64"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readUintArray",
            "nameLocation": "1248:13:64",
            "parameters": {
              "id": 23156,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23153,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "1276:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23168,
                  "src": "1262:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23152,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1262:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23155,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "1296:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23168,
                  "src": "1282:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23154,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1282:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1261:39:64"
            },
            "returnParameters": {
              "id": 23160,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23159,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23168,
                  "src": "1319:16:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23157,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1319:7:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 23158,
                    "nodeType": "ArrayTypeName",
                    "src": "1319:9:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1318:18:64"
            },
            "scope": 23673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23184,
            "nodeType": "FunctionDefinition",
            "src": "1399:132:64",
            "nodes": [],
            "body": {
              "id": 23183,
              "nodeType": "Block",
              "src": "1481:50:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23179,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23170,
                        "src": "1514:4:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23180,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23172,
                        "src": "1520:3:64",
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
                        "id": 23177,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23119,
                        "src": "1498:2:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$28475",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23178,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1501:12:64",
                      "memberName": "parseJsonInt",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28137,
                      "src": "1498:15:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_int256_$",
                        "typeString": "function (string memory,string memory) external returns (int256)"
                      }
                    },
                    "id": 23181,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1498:26:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 23176,
                  "id": 23182,
                  "nodeType": "Return",
                  "src": "1491:33:64"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readInt",
            "nameLocation": "1408:7:64",
            "parameters": {
              "id": 23173,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23170,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "1430:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23184,
                  "src": "1416:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23169,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1416:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23172,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "1450:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23184,
                  "src": "1436:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23171,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1436:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1415:39:64"
            },
            "returnParameters": {
              "id": 23176,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23175,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23184,
                  "src": "1473:6:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 23174,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1473:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1472:8:64"
            },
            "scope": 23673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23201,
            "nodeType": "FunctionDefinition",
            "src": "1537:151:64",
            "nodes": [],
            "body": {
              "id": 23200,
              "nodeType": "Block",
              "src": "1633:55:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23196,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23186,
                        "src": "1671:4:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23197,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23188,
                        "src": "1677:3:64",
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
                        "id": 23194,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23119,
                        "src": "1650:2:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$28475",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23195,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1653:17:64",
                      "memberName": "parseJsonIntArray",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28147,
                      "src": "1650:20:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_int256_$dyn_memory_ptr_$",
                        "typeString": "function (string memory,string memory) external returns (int256[] memory)"
                      }
                    },
                    "id": 23198,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1650:31:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                      "typeString": "int256[] memory"
                    }
                  },
                  "functionReturnParameters": 23193,
                  "id": 23199,
                  "nodeType": "Return",
                  "src": "1643:38:64"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readIntArray",
            "nameLocation": "1546:12:64",
            "parameters": {
              "id": 23189,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23186,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "1573:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23201,
                  "src": "1559:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23185,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1559:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23188,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "1593:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23201,
                  "src": "1579:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23187,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1579:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1558:39:64"
            },
            "returnParameters": {
              "id": 23193,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23192,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23201,
                  "src": "1616:15:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23190,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1616:6:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 23191,
                    "nodeType": "ArrayTypeName",
                    "src": "1616:8:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1615:17:64"
            },
            "scope": 23673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23217,
            "nodeType": "FunctionDefinition",
            "src": "1694:141:64",
            "nodes": [],
            "body": {
              "id": 23216,
              "nodeType": "Block",
              "src": "1781:54:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23212,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23203,
                        "src": "1818:4:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23213,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23205,
                        "src": "1824:3:64",
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
                        "id": 23210,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23119,
                        "src": "1798:2:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$28475",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23211,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1801:16:64",
                      "memberName": "parseJsonBytes32",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28232,
                      "src": "1798:19:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (string memory,string memory) external returns (bytes32)"
                      }
                    },
                    "id": 23214,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1798:30:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 23209,
                  "id": 23215,
                  "nodeType": "Return",
                  "src": "1791:37:64"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readBytes32",
            "nameLocation": "1703:11:64",
            "parameters": {
              "id": 23206,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23203,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "1729:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23217,
                  "src": "1715:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23202,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1715:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23205,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "1749:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23217,
                  "src": "1735:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23204,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1735:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1714:39:64"
            },
            "returnParameters": {
              "id": 23209,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23208,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23217,
                  "src": "1772:7:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 23207,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1772:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1771:9:64"
            },
            "scope": 23673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23234,
            "nodeType": "FunctionDefinition",
            "src": "1841:160:64",
            "nodes": [],
            "body": {
              "id": 23233,
              "nodeType": "Block",
              "src": "1942:59:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23229,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23219,
                        "src": "1984:4:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23230,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23221,
                        "src": "1990:3:64",
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
                        "id": 23227,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23119,
                        "src": "1959:2:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$28475",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23228,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1962:21:64",
                      "memberName": "parseJsonBytes32Array",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28242,
                      "src": "1959:24:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                        "typeString": "function (string memory,string memory) external returns (bytes32[] memory)"
                      }
                    },
                    "id": 23231,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1959:35:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                      "typeString": "bytes32[] memory"
                    }
                  },
                  "functionReturnParameters": 23226,
                  "id": 23232,
                  "nodeType": "Return",
                  "src": "1952:42:64"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readBytes32Array",
            "nameLocation": "1850:16:64",
            "parameters": {
              "id": 23222,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23219,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "1881:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23234,
                  "src": "1867:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23218,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1867:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23221,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "1901:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23234,
                  "src": "1887:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23220,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1887:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1866:39:64"
            },
            "returnParameters": {
              "id": 23226,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23225,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23234,
                  "src": "1924:16:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23223,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "1924:7:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 23224,
                    "nodeType": "ArrayTypeName",
                    "src": "1924:9:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1923:18:64"
            },
            "scope": 23673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23250,
            "nodeType": "FunctionDefinition",
            "src": "2007:145:64",
            "nodes": [],
            "body": {
              "id": 23249,
              "nodeType": "Block",
              "src": "2099:53:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23245,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23236,
                        "src": "2135:4:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23246,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23238,
                        "src": "2141:3:64",
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
                        "id": 23243,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23119,
                        "src": "2116:2:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$28475",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23244,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2119:15:64",
                      "memberName": "parseJsonString",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28194,
                      "src": "2116:18:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory) external returns (string memory)"
                      }
                    },
                    "id": 23247,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2116:29:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 23242,
                  "id": 23248,
                  "nodeType": "Return",
                  "src": "2109:36:64"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readString",
            "nameLocation": "2016:10:64",
            "parameters": {
              "id": 23239,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23236,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "2041:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23250,
                  "src": "2027:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23235,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2027:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23238,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "2061:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23250,
                  "src": "2047:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23237,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2047:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2026:39:64"
            },
            "returnParameters": {
              "id": 23242,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23241,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23250,
                  "src": "2084:13:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23240,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2084:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2083:15:64"
            },
            "scope": 23673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23267,
            "nodeType": "FunctionDefinition",
            "src": "2158:157:64",
            "nodes": [],
            "body": {
              "id": 23266,
              "nodeType": "Block",
              "src": "2257:58:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23262,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23252,
                        "src": "2298:4:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23263,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23254,
                        "src": "2304:3:64",
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
                        "id": 23260,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23119,
                        "src": "2274:2:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$28475",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23261,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2277:20:64",
                      "memberName": "parseJsonStringArray",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28204,
                      "src": "2274:23:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_string_memory_ptr_$dyn_memory_ptr_$",
                        "typeString": "function (string memory,string memory) external returns (string memory[] memory)"
                      }
                    },
                    "id": 23264,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2274:34:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                      "typeString": "string memory[] memory"
                    }
                  },
                  "functionReturnParameters": 23259,
                  "id": 23265,
                  "nodeType": "Return",
                  "src": "2267:41:64"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readStringArray",
            "nameLocation": "2167:15:64",
            "parameters": {
              "id": 23255,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23252,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "2197:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23267,
                  "src": "2183:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23251,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2183:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23254,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "2217:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23267,
                  "src": "2203:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23253,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2203:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2182:39:64"
            },
            "returnParameters": {
              "id": 23259,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23258,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23267,
                  "src": "2240:15:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23256,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "2240:6:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 23257,
                    "nodeType": "ArrayTypeName",
                    "src": "2240:8:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2239:17:64"
            },
            "scope": 23673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23283,
            "nodeType": "FunctionDefinition",
            "src": "2321:141:64",
            "nodes": [],
            "body": {
              "id": 23282,
              "nodeType": "Block",
              "src": "2408:54:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23278,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23269,
                        "src": "2445:4:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23279,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23271,
                        "src": "2451:3:64",
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
                        "id": 23276,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23119,
                        "src": "2425:2:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$28475",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23277,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2428:16:64",
                      "memberName": "parseJsonAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28175,
                      "src": "2425:19:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_address_$",
                        "typeString": "function (string memory,string memory) external returns (address)"
                      }
                    },
                    "id": 23280,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2425:30:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 23275,
                  "id": 23281,
                  "nodeType": "Return",
                  "src": "2418:37:64"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readAddress",
            "nameLocation": "2330:11:64",
            "parameters": {
              "id": 23272,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23269,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "2356:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23283,
                  "src": "2342:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23268,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2342:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23271,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "2376:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23283,
                  "src": "2362:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23270,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2362:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2341:39:64"
            },
            "returnParameters": {
              "id": 23275,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23274,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23283,
                  "src": "2399:7:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 23273,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2399:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2398:9:64"
            },
            "scope": 23673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23300,
            "nodeType": "FunctionDefinition",
            "src": "2468:160:64",
            "nodes": [],
            "body": {
              "id": 23299,
              "nodeType": "Block",
              "src": "2569:59:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23295,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23285,
                        "src": "2611:4:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23296,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23287,
                        "src": "2617:3:64",
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
                        "id": 23293,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23119,
                        "src": "2586:2:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$28475",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23294,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2589:21:64",
                      "memberName": "parseJsonAddressArray",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28185,
                      "src": "2586:24:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$",
                        "typeString": "function (string memory,string memory) external returns (address[] memory)"
                      }
                    },
                    "id": 23297,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2586:35:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 23292,
                  "id": 23298,
                  "nodeType": "Return",
                  "src": "2579:42:64"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readAddressArray",
            "nameLocation": "2477:16:64",
            "parameters": {
              "id": 23288,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23285,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "2508:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23300,
                  "src": "2494:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23284,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2494:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23287,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "2528:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23300,
                  "src": "2514:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23286,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2514:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2493:39:64"
            },
            "returnParameters": {
              "id": 23292,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23291,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23300,
                  "src": "2551:16:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23289,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2551:7:64",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 23290,
                    "nodeType": "ArrayTypeName",
                    "src": "2551:9:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2550:18:64"
            },
            "scope": 23673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23316,
            "nodeType": "FunctionDefinition",
            "src": "2634:132:64",
            "nodes": [],
            "body": {
              "id": 23315,
              "nodeType": "Block",
              "src": "2715:51:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23311,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23302,
                        "src": "2749:4:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23312,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23304,
                        "src": "2755:3:64",
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
                        "id": 23309,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23119,
                        "src": "2732:2:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$28475",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23310,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2735:13:64",
                      "memberName": "parseJsonBool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28156,
                      "src": "2732:16:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bool_$",
                        "typeString": "function (string memory,string memory) external returns (bool)"
                      }
                    },
                    "id": 23313,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2732:27:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 23308,
                  "id": 23314,
                  "nodeType": "Return",
                  "src": "2725:34:64"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readBool",
            "nameLocation": "2643:8:64",
            "parameters": {
              "id": 23305,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23302,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "2666:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23316,
                  "src": "2652:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23301,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2652:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23304,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "2686:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23316,
                  "src": "2672:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23303,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2672:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2651:39:64"
            },
            "returnParameters": {
              "id": 23308,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23307,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23316,
                  "src": "2709:4:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 23306,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2709:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2708:6:64"
            },
            "scope": 23673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23333,
            "nodeType": "FunctionDefinition",
            "src": "2772:151:64",
            "nodes": [],
            "body": {
              "id": 23332,
              "nodeType": "Block",
              "src": "2867:56:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23328,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23318,
                        "src": "2906:4:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23329,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23320,
                        "src": "2912:3:64",
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
                        "id": 23326,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23119,
                        "src": "2884:2:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$28475",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23327,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2887:18:64",
                      "memberName": "parseJsonBoolArray",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28166,
                      "src": "2884:21:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_bool_$dyn_memory_ptr_$",
                        "typeString": "function (string memory,string memory) external returns (bool[] memory)"
                      }
                    },
                    "id": 23330,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2884:32:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                      "typeString": "bool[] memory"
                    }
                  },
                  "functionReturnParameters": 23325,
                  "id": 23331,
                  "nodeType": "Return",
                  "src": "2877:39:64"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readBoolArray",
            "nameLocation": "2781:13:64",
            "parameters": {
              "id": 23321,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23318,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "2809:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23333,
                  "src": "2795:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23317,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2795:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23320,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "2829:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23333,
                  "src": "2815:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23319,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2815:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2794:39:64"
            },
            "returnParameters": {
              "id": 23325,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23324,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23333,
                  "src": "2852:13:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23322,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "2852:4:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 23323,
                    "nodeType": "ArrayTypeName",
                    "src": "2852:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2851:15:64"
            },
            "scope": 23673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23349,
            "nodeType": "FunctionDefinition",
            "src": "2929:142:64",
            "nodes": [],
            "body": {
              "id": 23348,
              "nodeType": "Block",
              "src": "3019:52:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23344,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23335,
                        "src": "3054:4:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23345,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23337,
                        "src": "3060:3:64",
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
                        "id": 23342,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23119,
                        "src": "3036:2:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$28475",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23343,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3039:14:64",
                      "memberName": "parseJsonBytes",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28213,
                      "src": "3036:17:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (string memory,string memory) external returns (bytes memory)"
                      }
                    },
                    "id": 23346,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3036:28:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 23341,
                  "id": 23347,
                  "nodeType": "Return",
                  "src": "3029:35:64"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readBytes",
            "nameLocation": "2938:9:64",
            "parameters": {
              "id": 23338,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23335,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "2962:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23349,
                  "src": "2948:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23334,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2948:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23337,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "2982:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23349,
                  "src": "2968:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23336,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2968:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2947:39:64"
            },
            "returnParameters": {
              "id": 23341,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23340,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23349,
                  "src": "3005:12:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 23339,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3005:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3004:14:64"
            },
            "scope": 23673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23366,
            "nodeType": "FunctionDefinition",
            "src": "3077:154:64",
            "nodes": [],
            "body": {
              "id": 23365,
              "nodeType": "Block",
              "src": "3174:57:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23361,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23351,
                        "src": "3214:4:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23362,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23353,
                        "src": "3220:3:64",
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
                        "id": 23359,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23119,
                        "src": "3191:2:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$28475",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23360,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3194:19:64",
                      "memberName": "parseJsonBytesArray",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28223,
                      "src": "3191:22:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_bytes_memory_ptr_$dyn_memory_ptr_$",
                        "typeString": "function (string memory,string memory) external returns (bytes memory[] memory)"
                      }
                    },
                    "id": 23363,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3191:33:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                      "typeString": "bytes memory[] memory"
                    }
                  },
                  "functionReturnParameters": 23358,
                  "id": 23364,
                  "nodeType": "Return",
                  "src": "3184:40:64"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readBytesArray",
            "nameLocation": "3086:14:64",
            "parameters": {
              "id": 23354,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23351,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "3115:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23366,
                  "src": "3101:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23350,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3101:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23353,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "3135:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23366,
                  "src": "3121:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23352,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3121:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3100:39:64"
            },
            "returnParameters": {
              "id": 23358,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23357,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23366,
                  "src": "3158:14:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23355,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "3158:5:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 23356,
                    "nodeType": "ArrayTypeName",
                    "src": "3158:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3157:16:64"
            },
            "scope": 23673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23385,
            "nodeType": "FunctionDefinition",
            "src": "3237:167:64",
            "nodes": [],
            "body": {
              "id": 23384,
              "nodeType": "Block",
              "src": "3343:61:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23379,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23368,
                        "src": "3377:7:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23380,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23370,
                        "src": "3386:3:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23381,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23372,
                        "src": "3391:5:64",
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
                        "id": 23377,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23119,
                        "src": "3360:2:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$28475",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23378,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3363:13:64",
                      "memberName": "serializeBool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28263,
                      "src": "3360:16:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bool_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,bool) external returns (string memory)"
                      }
                    },
                    "id": 23382,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3360:37:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 23376,
                  "id": 23383,
                  "nodeType": "Return",
                  "src": "3353:44:64"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "3246:9:64",
            "parameters": {
              "id": 23373,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23368,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "3270:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23385,
                  "src": "3256:21:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23367,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3256:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23370,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "3293:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23385,
                  "src": "3279:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23369,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3279:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23372,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3303:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23385,
                  "src": "3298:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 23371,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3298:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3255:54:64"
            },
            "returnParameters": {
              "id": 23376,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23375,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23385,
                  "src": "3328:13:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23374,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3328:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3327:15:64"
            },
            "scope": 23673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23405,
            "nodeType": "FunctionDefinition",
            "src": "3410:196:64",
            "nodes": [],
            "body": {
              "id": 23404,
              "nodeType": "Block",
              "src": "3545:61:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23399,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23387,
                        "src": "3579:7:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23400,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23389,
                        "src": "3588:3:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23401,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23392,
                        "src": "3593:5:64",
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
                        "id": 23397,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23119,
                        "src": "3562:2:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$28475",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23398,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3565:13:64",
                      "memberName": "serializeBool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28341,
                      "src": "3562:16:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bool_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,bool[] memory) external returns (string memory)"
                      }
                    },
                    "id": 23402,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3562:37:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 23396,
                  "id": 23403,
                  "nodeType": "Return",
                  "src": "3555:44:64"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "3419:9:64",
            "parameters": {
              "id": 23393,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23387,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "3443:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23405,
                  "src": "3429:21:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23386,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3429:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23389,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "3466:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23405,
                  "src": "3452:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23388,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3452:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23392,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3485:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23405,
                  "src": "3471:19:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23390,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "3471:4:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 23391,
                    "nodeType": "ArrayTypeName",
                    "src": "3471:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3428:63:64"
            },
            "returnParameters": {
              "id": 23396,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23395,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23405,
                  "src": "3526:13:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23394,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3526:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3525:15:64"
            },
            "scope": 23673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23424,
            "nodeType": "FunctionDefinition",
            "src": "3612:170:64",
            "nodes": [],
            "body": {
              "id": 23423,
              "nodeType": "Block",
              "src": "3721:61:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23418,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23407,
                        "src": "3755:7:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23419,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23409,
                        "src": "3764:3:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23420,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23411,
                        "src": "3769:5:64",
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
                        "id": 23416,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23119,
                        "src": "3738:2:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$28475",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23417,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3741:13:64",
                      "memberName": "serializeUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28274,
                      "src": "3738:16:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_uint256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,uint256) external returns (string memory)"
                      }
                    },
                    "id": 23421,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3738:37:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 23415,
                  "id": 23422,
                  "nodeType": "Return",
                  "src": "3731:44:64"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "3621:9:64",
            "parameters": {
              "id": 23412,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23407,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "3645:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23424,
                  "src": "3631:21:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23406,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3631:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23409,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "3668:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23424,
                  "src": "3654:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23408,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3654:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23411,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3681:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23424,
                  "src": "3673:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 23410,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3673:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3630:57:64"
            },
            "returnParameters": {
              "id": 23415,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23414,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23424,
                  "src": "3706:13:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23413,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3706:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3705:15:64"
            },
            "scope": 23673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23444,
            "nodeType": "FunctionDefinition",
            "src": "3788:199:64",
            "nodes": [],
            "body": {
              "id": 23443,
              "nodeType": "Block",
              "src": "3926:61:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23438,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23426,
                        "src": "3960:7:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23439,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23428,
                        "src": "3969:3:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23440,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23431,
                        "src": "3974:5:64",
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
                        "id": 23436,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23119,
                        "src": "3943:2:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$28475",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23437,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3946:13:64",
                      "memberName": "serializeUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28353,
                      "src": "3943:16:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,uint256[] memory) external returns (string memory)"
                      }
                    },
                    "id": 23441,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3943:37:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 23435,
                  "id": 23442,
                  "nodeType": "Return",
                  "src": "3936:44:64"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "3797:9:64",
            "parameters": {
              "id": 23432,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23426,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "3821:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23444,
                  "src": "3807:21:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23425,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3807:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23428,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "3844:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23444,
                  "src": "3830:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23427,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3830:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23431,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3866:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23444,
                  "src": "3849:22:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23429,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3849:7:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 23430,
                    "nodeType": "ArrayTypeName",
                    "src": "3849:9:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3806:66:64"
            },
            "returnParameters": {
              "id": 23435,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23434,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23444,
                  "src": "3907:13:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23433,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3907:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3906:15:64"
            },
            "scope": 23673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23463,
            "nodeType": "FunctionDefinition",
            "src": "3993:168:64",
            "nodes": [],
            "body": {
              "id": 23462,
              "nodeType": "Block",
              "src": "4101:60:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23457,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23446,
                        "src": "4134:7:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23458,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23448,
                        "src": "4143:3:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23459,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23450,
                        "src": "4148:5:64",
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
                        "id": 23455,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23119,
                        "src": "4118:2:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$28475",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23456,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4121:12:64",
                      "memberName": "serializeInt",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28285,
                      "src": "4118:15:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_int256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,int256) external returns (string memory)"
                      }
                    },
                    "id": 23460,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4118:36:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 23454,
                  "id": 23461,
                  "nodeType": "Return",
                  "src": "4111:43:64"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "4002:9:64",
            "parameters": {
              "id": 23451,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23446,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "4026:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23463,
                  "src": "4012:21:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23445,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4012:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23448,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "4049:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23463,
                  "src": "4035:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23447,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4035:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23450,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4061:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23463,
                  "src": "4054:12:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 23449,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4054:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4011:56:64"
            },
            "returnParameters": {
              "id": 23454,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23453,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23463,
                  "src": "4086:13:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23452,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4086:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4085:15:64"
            },
            "scope": 23673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23483,
            "nodeType": "FunctionDefinition",
            "src": "4167:197:64",
            "nodes": [],
            "body": {
              "id": 23482,
              "nodeType": "Block",
              "src": "4304:60:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23477,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23465,
                        "src": "4337:7:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23478,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23467,
                        "src": "4346:3:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23479,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23470,
                        "src": "4351:5:64",
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
                        "id": 23475,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23119,
                        "src": "4321:2:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$28475",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23476,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4324:12:64",
                      "memberName": "serializeInt",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28365,
                      "src": "4321:15:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_int256_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,int256[] memory) external returns (string memory)"
                      }
                    },
                    "id": 23480,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4321:36:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 23474,
                  "id": 23481,
                  "nodeType": "Return",
                  "src": "4314:43:64"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "4176:9:64",
            "parameters": {
              "id": 23471,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23465,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "4200:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23483,
                  "src": "4186:21:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23464,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4186:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23467,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "4223:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23483,
                  "src": "4209:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23466,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4209:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23470,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4244:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23483,
                  "src": "4228:21:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23468,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4228:6:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 23469,
                    "nodeType": "ArrayTypeName",
                    "src": "4228:8:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4185:65:64"
            },
            "returnParameters": {
              "id": 23474,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23473,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23483,
                  "src": "4285:13:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23472,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4285:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4284:15:64"
            },
            "scope": 23673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23502,
            "nodeType": "FunctionDefinition",
            "src": "4370:173:64",
            "nodes": [],
            "body": {
              "id": 23501,
              "nodeType": "Block",
              "src": "4479:64:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23496,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23485,
                        "src": "4516:7:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23497,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23487,
                        "src": "4525:3:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23498,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23489,
                        "src": "4530:5:64",
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
                        "id": 23494,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23119,
                        "src": "4496:2:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$28475",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23495,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4499:16:64",
                      "memberName": "serializeAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28296,
                      "src": "4496:19:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_address_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,address) external returns (string memory)"
                      }
                    },
                    "id": 23499,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4496:40:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 23493,
                  "id": 23500,
                  "nodeType": "Return",
                  "src": "4489:47:64"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "4379:9:64",
            "parameters": {
              "id": 23490,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23485,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "4403:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23502,
                  "src": "4389:21:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23484,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4389:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23487,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "4426:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23502,
                  "src": "4412:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23486,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4412:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23489,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4439:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23502,
                  "src": "4431:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 23488,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4431:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4388:57:64"
            },
            "returnParameters": {
              "id": 23493,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23492,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23502,
                  "src": "4464:13:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23491,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4464:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4463:15:64"
            },
            "scope": 23673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23522,
            "nodeType": "FunctionDefinition",
            "src": "4549:202:64",
            "nodes": [],
            "body": {
              "id": 23521,
              "nodeType": "Block",
              "src": "4687:64:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23516,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23504,
                        "src": "4724:7:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23517,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23506,
                        "src": "4733:3:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23518,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23509,
                        "src": "4738:5:64",
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
                        "id": 23514,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23119,
                        "src": "4704:2:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$28475",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23515,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4707:16:64",
                      "memberName": "serializeAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28377,
                      "src": "4704:19:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,address[] memory) external returns (string memory)"
                      }
                    },
                    "id": 23519,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4704:40:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 23513,
                  "id": 23520,
                  "nodeType": "Return",
                  "src": "4697:47:64"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "4558:9:64",
            "parameters": {
              "id": 23510,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23504,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "4582:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23522,
                  "src": "4568:21:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23503,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4568:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23506,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "4605:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23522,
                  "src": "4591:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23505,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4591:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23509,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4627:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23522,
                  "src": "4610:22:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23507,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4610:7:64",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 23508,
                    "nodeType": "ArrayTypeName",
                    "src": "4610:9:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4567:66:64"
            },
            "returnParameters": {
              "id": 23513,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23512,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23522,
                  "src": "4668:13:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23511,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4668:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4667:15:64"
            },
            "scope": 23673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23541,
            "nodeType": "FunctionDefinition",
            "src": "4757:173:64",
            "nodes": [],
            "body": {
              "id": 23540,
              "nodeType": "Block",
              "src": "4866:64:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23535,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23524,
                        "src": "4903:7:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23536,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23526,
                        "src": "4912:3:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23537,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23528,
                        "src": "4917:5:64",
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
                        "id": 23533,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23119,
                        "src": "4883:2:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$28475",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23534,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4886:16:64",
                      "memberName": "serializeBytes32",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28307,
                      "src": "4883:19:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bytes32_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,bytes32) external returns (string memory)"
                      }
                    },
                    "id": 23538,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4883:40:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 23532,
                  "id": 23539,
                  "nodeType": "Return",
                  "src": "4876:47:64"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "4766:9:64",
            "parameters": {
              "id": 23529,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23524,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "4790:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23541,
                  "src": "4776:21:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23523,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4776:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23526,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "4813:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23541,
                  "src": "4799:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23525,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4799:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23528,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4826:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23541,
                  "src": "4818:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 23527,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4818:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4775:57:64"
            },
            "returnParameters": {
              "id": 23532,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23531,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23541,
                  "src": "4851:13:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23530,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4851:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4850:15:64"
            },
            "scope": 23673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23561,
            "nodeType": "FunctionDefinition",
            "src": "4936:202:64",
            "nodes": [],
            "body": {
              "id": 23560,
              "nodeType": "Block",
              "src": "5074:64:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23555,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23543,
                        "src": "5111:7:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23556,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23545,
                        "src": "5120:3:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23557,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23548,
                        "src": "5125:5:64",
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
                        "id": 23553,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23119,
                        "src": "5091:2:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$28475",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23554,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5094:16:64",
                      "memberName": "serializeBytes32",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28389,
                      "src": "5091:19:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bytes32_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,bytes32[] memory) external returns (string memory)"
                      }
                    },
                    "id": 23558,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5091:40:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 23552,
                  "id": 23559,
                  "nodeType": "Return",
                  "src": "5084:47:64"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "4945:9:64",
            "parameters": {
              "id": 23549,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23543,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "4969:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23561,
                  "src": "4955:21:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23542,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4955:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23545,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "4992:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23561,
                  "src": "4978:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23544,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4978:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23548,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5014:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23561,
                  "src": "4997:22:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23546,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "4997:7:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 23547,
                    "nodeType": "ArrayTypeName",
                    "src": "4997:9:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4954:66:64"
            },
            "returnParameters": {
              "id": 23552,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23551,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23561,
                  "src": "5055:13:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23550,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5055:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5054:15:64"
            },
            "scope": 23673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23580,
            "nodeType": "FunctionDefinition",
            "src": "5144:176:64",
            "nodes": [],
            "body": {
              "id": 23579,
              "nodeType": "Block",
              "src": "5258:62:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23574,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23563,
                        "src": "5293:7:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23575,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23565,
                        "src": "5302:3:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23576,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23567,
                        "src": "5307:5:64",
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
                        "id": 23572,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23119,
                        "src": "5275:2:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$28475",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23573,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5278:14:64",
                      "memberName": "serializeBytes",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28329,
                      "src": "5275:17:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,bytes memory) external returns (string memory)"
                      }
                    },
                    "id": 23577,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5275:38:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 23571,
                  "id": 23578,
                  "nodeType": "Return",
                  "src": "5268:45:64"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "5153:9:64",
            "parameters": {
              "id": 23568,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23563,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "5177:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23580,
                  "src": "5163:21:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23562,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5163:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23565,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "5200:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23580,
                  "src": "5186:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23564,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5186:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23567,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5218:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23580,
                  "src": "5205:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 23566,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5205:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5162:62:64"
            },
            "returnParameters": {
              "id": 23571,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23570,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23580,
                  "src": "5243:13:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23569,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5243:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5242:15:64"
            },
            "scope": 23673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23600,
            "nodeType": "FunctionDefinition",
            "src": "5326:198:64",
            "nodes": [],
            "body": {
              "id": 23599,
              "nodeType": "Block",
              "src": "5462:62:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23594,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23582,
                        "src": "5497:7:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23595,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23584,
                        "src": "5506:3:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23596,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23587,
                        "src": "5511:5:64",
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
                        "id": 23592,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23119,
                        "src": "5479:2:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$28475",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23593,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5482:14:64",
                      "memberName": "serializeBytes",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28413,
                      "src": "5479:17:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bytes_memory_ptr_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,bytes memory[] memory) external returns (string memory)"
                      }
                    },
                    "id": 23597,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5479:38:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 23591,
                  "id": 23598,
                  "nodeType": "Return",
                  "src": "5472:45:64"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "5335:9:64",
            "parameters": {
              "id": 23588,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23582,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "5359:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23600,
                  "src": "5345:21:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23581,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5345:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23584,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "5382:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23600,
                  "src": "5368:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23583,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5368:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23587,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5402:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23600,
                  "src": "5387:20:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23585,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "5387:5:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 23586,
                    "nodeType": "ArrayTypeName",
                    "src": "5387:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5344:64:64"
            },
            "returnParameters": {
              "id": 23591,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23590,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23600,
                  "src": "5443:13:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23589,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5443:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5442:15:64"
            },
            "scope": 23673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23619,
            "nodeType": "FunctionDefinition",
            "src": "5530:198:64",
            "nodes": [],
            "body": {
              "id": 23618,
              "nodeType": "Block",
              "src": "5665:63:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23613,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23602,
                        "src": "5701:7:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23614,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23604,
                        "src": "5710:3:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23615,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23606,
                        "src": "5715:5:64",
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
                        "id": 23611,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23119,
                        "src": "5682:2:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$28475",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23612,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5685:15:64",
                      "memberName": "serializeString",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28318,
                      "src": "5682:18:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,string memory) external returns (string memory)"
                      }
                    },
                    "id": 23616,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5682:39:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 23610,
                  "id": 23617,
                  "nodeType": "Return",
                  "src": "5675:46:64"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "5539:9:64",
            "parameters": {
              "id": 23607,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23602,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "5563:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23619,
                  "src": "5549:21:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23601,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5549:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23604,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "5586:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23619,
                  "src": "5572:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23603,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5572:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23606,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5605:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23619,
                  "src": "5591:19:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23605,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5591:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5548:63:64"
            },
            "returnParameters": {
              "id": 23610,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23609,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23619,
                  "src": "5646:13:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23608,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5646:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5645:15:64"
            },
            "scope": 23673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23639,
            "nodeType": "FunctionDefinition",
            "src": "5734:200:64",
            "nodes": [],
            "body": {
              "id": 23638,
              "nodeType": "Block",
              "src": "5871:63:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23633,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23621,
                        "src": "5907:7:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23634,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23623,
                        "src": "5916:3:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23635,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23626,
                        "src": "5921:5:64",
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
                        "id": 23631,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23119,
                        "src": "5888:2:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$28475",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23632,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5891:15:64",
                      "memberName": "serializeString",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28401,
                      "src": "5888:18:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_string_memory_ptr_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,string memory[] memory) external returns (string memory)"
                      }
                    },
                    "id": 23636,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5888:39:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 23630,
                  "id": 23637,
                  "nodeType": "Return",
                  "src": "5881:46:64"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "5743:9:64",
            "parameters": {
              "id": 23627,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23621,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "5767:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23639,
                  "src": "5753:21:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23620,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5753:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23623,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "5790:3:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23639,
                  "src": "5776:17:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23622,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5776:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23626,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5811:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23639,
                  "src": "5795:21:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23624,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "5795:6:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 23625,
                    "nodeType": "ArrayTypeName",
                    "src": "5795:8:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5752:65:64"
            },
            "returnParameters": {
              "id": 23630,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23629,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23639,
                  "src": "5852:13:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23628,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5852:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5851:15:64"
            },
            "scope": 23673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23654,
            "nodeType": "FunctionDefinition",
            "src": "5940:111:64",
            "nodes": [],
            "body": {
              "id": 23653,
              "nodeType": "Block",
              "src": "6007:44:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23649,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23641,
                        "src": "6030:7:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23650,
                        "name": "path",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23643,
                        "src": "6039:4:64",
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
                        "id": 23646,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23119,
                        "src": "6017:2:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$28475",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23648,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6020:9:64",
                      "memberName": "writeJson",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28420,
                      "src": "6017:12:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,string memory) external"
                      }
                    },
                    "id": 23651,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6017:27:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23652,
                  "nodeType": "ExpressionStatement",
                  "src": "6017:27:64"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "write",
            "nameLocation": "5949:5:64",
            "parameters": {
              "id": 23644,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23641,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "5969:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23654,
                  "src": "5955:21:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23640,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5955:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23643,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "5992:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23654,
                  "src": "5978:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23642,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5978:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5954:43:64"
            },
            "returnParameters": {
              "id": 23645,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6007:0:64"
            },
            "scope": 23673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23672,
            "nodeType": "FunctionDefinition",
            "src": "6057:145:64",
            "nodes": [],
            "body": {
              "id": 23671,
              "nodeType": "Block",
              "src": "6148:54:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23666,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23656,
                        "src": "6171:7:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23667,
                        "name": "path",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23658,
                        "src": "6180:4:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23668,
                        "name": "valueKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23660,
                        "src": "6186:8:64",
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
                        "id": 23663,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23119,
                        "src": "6158:2:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$28475",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23665,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6161:9:64",
                      "memberName": "writeJson",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28429,
                      "src": "6158:12:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,string memory,string memory) external"
                      }
                    },
                    "id": 23669,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6158:37:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23670,
                  "nodeType": "ExpressionStatement",
                  "src": "6158:37:64"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "write",
            "nameLocation": "6066:5:64",
            "parameters": {
              "id": 23661,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23656,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "6086:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23672,
                  "src": "6072:21:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23655,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6072:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23658,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "6109:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23672,
                  "src": "6095:18:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23657,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6095:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23660,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "6129:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 23672,
                  "src": "6115:22:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23659,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6115:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6071:67:64"
            },
            "returnParameters": {
              "id": 23662,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6148:0:64"
            },
            "scope": 23673,
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
          23673
        ],
        "name": "stdJson",
        "nameLocation": "838:7:64",
        "scope": 23674,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 64
} as const;
