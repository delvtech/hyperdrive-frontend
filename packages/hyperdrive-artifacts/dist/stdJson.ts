export const StdJson = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212207c577dc298c9ae11e12fcf45c8f770d7710fcc4b0535c46d2911cc5cd068e3d664736f6c63430008130033",
    "sourceMap": "830:5374:70:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;830:5374:70;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212207c577dc298c9ae11e12fcf45c8f770d7710fcc4b0535c46d2911cc5cd068e3d664736f6c63430008130033",
    "sourceMap": "830:5374:70:-:0;;;;;;;;",
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
    "id": 24254,
    "exportedSymbols": {
      "VmSafe": [
        29055
      ],
      "stdJson": [
        24253
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:6173:70",
    "nodes": [
      {
        "id": 23679,
        "nodeType": "PragmaDirective",
        "src": "32:31:70",
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
        "id": 23680,
        "nodeType": "PragmaDirective",
        "src": "65:33:70",
        "nodes": [],
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ]
      },
      {
        "id": 23682,
        "nodeType": "ImportDirective",
        "src": "100:32:70",
        "nodes": [],
        "absolutePath": "lib/forge-std/src/Vm.sol",
        "file": "./Vm.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 24254,
        "sourceUnit": 29528,
        "symbolAliases": [
          {
            "foreign": {
              "id": 23681,
              "name": "VmSafe",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 29055,
              "src": "108:6:70",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 24253,
        "nodeType": "ContractDefinition",
        "src": "830:5374:70",
        "nodes": [
          {
            "id": 23699,
            "nodeType": "VariableDeclaration",
            "src": "852:92:70",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "vm",
            "nameLocation": "876:2:70",
            "scope": 24253,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_VmSafe_$29055",
              "typeString": "contract VmSafe"
            },
            "typeName": {
              "id": 23684,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 23683,
                "name": "VmSafe",
                "nameLocations": [
                  "852:6:70"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 29055,
                "src": "852:6:70"
              },
              "referencedDeclaration": 29055,
              "src": "852:6:70",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_VmSafe_$29055",
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
                                  "id": 23693,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "string",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "922:17:70",
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
                                "id": 23692,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "912:9:70",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                              },
                              "id": 23694,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "912:28:70",
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
                            "id": 23691,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "904:7:70",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 23690,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "904:7:70",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 23695,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "904:37:70",
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
                        "id": 23689,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "896:7:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint160_$",
                          "typeString": "type(uint160)"
                        },
                        "typeName": {
                          "id": 23688,
                          "name": "uint160",
                          "nodeType": "ElementaryTypeName",
                          "src": "896:7:70",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 23696,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "896:46:70",
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
                    "id": 23687,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "ElementaryTypeNameExpression",
                    "src": "888:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_address_$",
                      "typeString": "type(address)"
                    },
                    "typeName": {
                      "id": 23686,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "888:7:70",
                      "typeDescriptions": {}
                    }
                  },
                  "id": 23697,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "typeConversion",
                  "lValueRequested": false,
                  "nameLocations": [],
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "888:55:70",
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
                "id": 23685,
                "name": "VmSafe",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 29055,
                "src": "881:6:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_contract$_VmSafe_$29055_$",
                  "typeString": "type(contract VmSafe)"
                }
              },
              "id": 23698,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "881:63:70",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_VmSafe_$29055",
                "typeString": "contract VmSafe"
              }
            },
            "visibility": "private"
          },
          {
            "id": 23715,
            "nodeType": "FunctionDefinition",
            "src": "951:141:70",
            "nodes": [],
            "body": {
              "id": 23714,
              "nodeType": "Block",
              "src": "1045:47:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23710,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23701,
                        "src": "1075:4:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23711,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23703,
                        "src": "1081:3:70",
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
                        "id": 23708,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23699,
                        "src": "1062:2:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$29055",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23709,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1065:9:70",
                      "memberName": "parseJson",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28682,
                      "src": "1062:12:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (string memory,string memory) pure external returns (bytes memory)"
                      }
                    },
                    "id": 23712,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1062:23:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 23707,
                  "id": 23713,
                  "nodeType": "Return",
                  "src": "1055:30:70"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "parseRaw",
            "nameLocation": "960:8:70",
            "parameters": {
              "id": 23704,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23701,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "983:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23715,
                  "src": "969:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23700,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "969:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23703,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "1003:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23715,
                  "src": "989:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23702,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "989:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "968:39:70"
            },
            "returnParameters": {
              "id": 23707,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23706,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23715,
                  "src": "1031:12:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 23705,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1031:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1030:14:70"
            },
            "scope": 24253,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23731,
            "nodeType": "FunctionDefinition",
            "src": "1098:135:70",
            "nodes": [],
            "body": {
              "id": 23730,
              "nodeType": "Block",
              "src": "1182:51:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23726,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23717,
                        "src": "1216:4:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23727,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23719,
                        "src": "1222:3:70",
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
                        "id": 23724,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23699,
                        "src": "1199:2:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$29055",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23725,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1202:13:70",
                      "memberName": "parseJsonUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28698,
                      "src": "1199:16:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_uint256_$",
                        "typeString": "function (string memory,string memory) external returns (uint256)"
                      }
                    },
                    "id": 23728,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1199:27:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 23723,
                  "id": 23729,
                  "nodeType": "Return",
                  "src": "1192:34:70"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readUint",
            "nameLocation": "1107:8:70",
            "parameters": {
              "id": 23720,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23717,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "1130:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23731,
                  "src": "1116:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23716,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1116:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23719,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "1150:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23731,
                  "src": "1136:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23718,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1136:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1115:39:70"
            },
            "returnParameters": {
              "id": 23723,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23722,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23731,
                  "src": "1173:7:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 23721,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1173:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1172:9:70"
            },
            "scope": 24253,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23748,
            "nodeType": "FunctionDefinition",
            "src": "1239:154:70",
            "nodes": [],
            "body": {
              "id": 23747,
              "nodeType": "Block",
              "src": "1337:56:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23743,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23733,
                        "src": "1376:4:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23744,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23735,
                        "src": "1382:3:70",
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
                        "id": 23741,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23699,
                        "src": "1354:2:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$29055",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23742,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1357:18:70",
                      "memberName": "parseJsonUintArray",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28708,
                      "src": "1354:21:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$",
                        "typeString": "function (string memory,string memory) external returns (uint256[] memory)"
                      }
                    },
                    "id": 23745,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1354:32:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "functionReturnParameters": 23740,
                  "id": 23746,
                  "nodeType": "Return",
                  "src": "1347:39:70"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readUintArray",
            "nameLocation": "1248:13:70",
            "parameters": {
              "id": 23736,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23733,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "1276:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23748,
                  "src": "1262:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23732,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1262:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23735,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "1296:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23748,
                  "src": "1282:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23734,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1282:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1261:39:70"
            },
            "returnParameters": {
              "id": 23740,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23739,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23748,
                  "src": "1319:16:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23737,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1319:7:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 23738,
                    "nodeType": "ArrayTypeName",
                    "src": "1319:9:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1318:18:70"
            },
            "scope": 24253,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23764,
            "nodeType": "FunctionDefinition",
            "src": "1399:132:70",
            "nodes": [],
            "body": {
              "id": 23763,
              "nodeType": "Block",
              "src": "1481:50:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23759,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23750,
                        "src": "1514:4:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23760,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23752,
                        "src": "1520:3:70",
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
                        "id": 23757,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23699,
                        "src": "1498:2:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$29055",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23758,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1501:12:70",
                      "memberName": "parseJsonInt",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28717,
                      "src": "1498:15:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_int256_$",
                        "typeString": "function (string memory,string memory) external returns (int256)"
                      }
                    },
                    "id": 23761,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1498:26:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 23756,
                  "id": 23762,
                  "nodeType": "Return",
                  "src": "1491:33:70"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readInt",
            "nameLocation": "1408:7:70",
            "parameters": {
              "id": 23753,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23750,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "1430:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23764,
                  "src": "1416:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23749,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1416:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23752,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "1450:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23764,
                  "src": "1436:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23751,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1436:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1415:39:70"
            },
            "returnParameters": {
              "id": 23756,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23755,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23764,
                  "src": "1473:6:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 23754,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1473:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1472:8:70"
            },
            "scope": 24253,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23781,
            "nodeType": "FunctionDefinition",
            "src": "1537:151:70",
            "nodes": [],
            "body": {
              "id": 23780,
              "nodeType": "Block",
              "src": "1633:55:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23776,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23766,
                        "src": "1671:4:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23777,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23768,
                        "src": "1677:3:70",
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
                        "id": 23774,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23699,
                        "src": "1650:2:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$29055",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23775,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1653:17:70",
                      "memberName": "parseJsonIntArray",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28727,
                      "src": "1650:20:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_int256_$dyn_memory_ptr_$",
                        "typeString": "function (string memory,string memory) external returns (int256[] memory)"
                      }
                    },
                    "id": 23778,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1650:31:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                      "typeString": "int256[] memory"
                    }
                  },
                  "functionReturnParameters": 23773,
                  "id": 23779,
                  "nodeType": "Return",
                  "src": "1643:38:70"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readIntArray",
            "nameLocation": "1546:12:70",
            "parameters": {
              "id": 23769,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23766,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "1573:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23781,
                  "src": "1559:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23765,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1559:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23768,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "1593:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23781,
                  "src": "1579:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23767,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1579:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1558:39:70"
            },
            "returnParameters": {
              "id": 23773,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23772,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23781,
                  "src": "1616:15:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23770,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1616:6:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 23771,
                    "nodeType": "ArrayTypeName",
                    "src": "1616:8:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1615:17:70"
            },
            "scope": 24253,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23797,
            "nodeType": "FunctionDefinition",
            "src": "1694:141:70",
            "nodes": [],
            "body": {
              "id": 23796,
              "nodeType": "Block",
              "src": "1781:54:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23792,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23783,
                        "src": "1818:4:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23793,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23785,
                        "src": "1824:3:70",
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
                        "id": 23790,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23699,
                        "src": "1798:2:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$29055",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23791,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1801:16:70",
                      "memberName": "parseJsonBytes32",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28812,
                      "src": "1798:19:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (string memory,string memory) external returns (bytes32)"
                      }
                    },
                    "id": 23794,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1798:30:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 23789,
                  "id": 23795,
                  "nodeType": "Return",
                  "src": "1791:37:70"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readBytes32",
            "nameLocation": "1703:11:70",
            "parameters": {
              "id": 23786,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23783,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "1729:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23797,
                  "src": "1715:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23782,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1715:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23785,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "1749:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23797,
                  "src": "1735:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23784,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1735:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1714:39:70"
            },
            "returnParameters": {
              "id": 23789,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23788,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23797,
                  "src": "1772:7:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 23787,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1772:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1771:9:70"
            },
            "scope": 24253,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23814,
            "nodeType": "FunctionDefinition",
            "src": "1841:160:70",
            "nodes": [],
            "body": {
              "id": 23813,
              "nodeType": "Block",
              "src": "1942:59:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23809,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23799,
                        "src": "1984:4:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23810,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23801,
                        "src": "1990:3:70",
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
                        "id": 23807,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23699,
                        "src": "1959:2:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$29055",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23808,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1962:21:70",
                      "memberName": "parseJsonBytes32Array",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28822,
                      "src": "1959:24:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                        "typeString": "function (string memory,string memory) external returns (bytes32[] memory)"
                      }
                    },
                    "id": 23811,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1959:35:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                      "typeString": "bytes32[] memory"
                    }
                  },
                  "functionReturnParameters": 23806,
                  "id": 23812,
                  "nodeType": "Return",
                  "src": "1952:42:70"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readBytes32Array",
            "nameLocation": "1850:16:70",
            "parameters": {
              "id": 23802,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23799,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "1881:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23814,
                  "src": "1867:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23798,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1867:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23801,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "1901:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23814,
                  "src": "1887:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23800,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1887:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1866:39:70"
            },
            "returnParameters": {
              "id": 23806,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23805,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23814,
                  "src": "1924:16:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23803,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "1924:7:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 23804,
                    "nodeType": "ArrayTypeName",
                    "src": "1924:9:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1923:18:70"
            },
            "scope": 24253,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23830,
            "nodeType": "FunctionDefinition",
            "src": "2007:145:70",
            "nodes": [],
            "body": {
              "id": 23829,
              "nodeType": "Block",
              "src": "2099:53:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23825,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23816,
                        "src": "2135:4:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23826,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23818,
                        "src": "2141:3:70",
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
                        "id": 23823,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23699,
                        "src": "2116:2:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$29055",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23824,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2119:15:70",
                      "memberName": "parseJsonString",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28774,
                      "src": "2116:18:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory) external returns (string memory)"
                      }
                    },
                    "id": 23827,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2116:29:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 23822,
                  "id": 23828,
                  "nodeType": "Return",
                  "src": "2109:36:70"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readString",
            "nameLocation": "2016:10:70",
            "parameters": {
              "id": 23819,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23816,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "2041:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23830,
                  "src": "2027:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23815,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2027:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23818,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "2061:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23830,
                  "src": "2047:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23817,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2047:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2026:39:70"
            },
            "returnParameters": {
              "id": 23822,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23821,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23830,
                  "src": "2084:13:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23820,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2084:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2083:15:70"
            },
            "scope": 24253,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23847,
            "nodeType": "FunctionDefinition",
            "src": "2158:157:70",
            "nodes": [],
            "body": {
              "id": 23846,
              "nodeType": "Block",
              "src": "2257:58:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23842,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23832,
                        "src": "2298:4:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23843,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23834,
                        "src": "2304:3:70",
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
                        "id": 23840,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23699,
                        "src": "2274:2:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$29055",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23841,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2277:20:70",
                      "memberName": "parseJsonStringArray",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28784,
                      "src": "2274:23:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_string_memory_ptr_$dyn_memory_ptr_$",
                        "typeString": "function (string memory,string memory) external returns (string memory[] memory)"
                      }
                    },
                    "id": 23844,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2274:34:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                      "typeString": "string memory[] memory"
                    }
                  },
                  "functionReturnParameters": 23839,
                  "id": 23845,
                  "nodeType": "Return",
                  "src": "2267:41:70"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readStringArray",
            "nameLocation": "2167:15:70",
            "parameters": {
              "id": 23835,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23832,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "2197:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23847,
                  "src": "2183:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23831,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2183:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23834,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "2217:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23847,
                  "src": "2203:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23833,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2203:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2182:39:70"
            },
            "returnParameters": {
              "id": 23839,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23838,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23847,
                  "src": "2240:15:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23836,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "2240:6:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 23837,
                    "nodeType": "ArrayTypeName",
                    "src": "2240:8:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2239:17:70"
            },
            "scope": 24253,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23863,
            "nodeType": "FunctionDefinition",
            "src": "2321:141:70",
            "nodes": [],
            "body": {
              "id": 23862,
              "nodeType": "Block",
              "src": "2408:54:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23858,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23849,
                        "src": "2445:4:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23859,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23851,
                        "src": "2451:3:70",
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
                        "id": 23856,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23699,
                        "src": "2425:2:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$29055",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23857,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2428:16:70",
                      "memberName": "parseJsonAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28755,
                      "src": "2425:19:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_address_$",
                        "typeString": "function (string memory,string memory) external returns (address)"
                      }
                    },
                    "id": 23860,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2425:30:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 23855,
                  "id": 23861,
                  "nodeType": "Return",
                  "src": "2418:37:70"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readAddress",
            "nameLocation": "2330:11:70",
            "parameters": {
              "id": 23852,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23849,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "2356:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23863,
                  "src": "2342:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23848,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2342:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23851,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "2376:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23863,
                  "src": "2362:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23850,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2362:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2341:39:70"
            },
            "returnParameters": {
              "id": 23855,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23854,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23863,
                  "src": "2399:7:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 23853,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2399:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2398:9:70"
            },
            "scope": 24253,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23880,
            "nodeType": "FunctionDefinition",
            "src": "2468:160:70",
            "nodes": [],
            "body": {
              "id": 23879,
              "nodeType": "Block",
              "src": "2569:59:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23875,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23865,
                        "src": "2611:4:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23876,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23867,
                        "src": "2617:3:70",
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
                        "id": 23873,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23699,
                        "src": "2586:2:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$29055",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23874,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2589:21:70",
                      "memberName": "parseJsonAddressArray",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28765,
                      "src": "2586:24:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$",
                        "typeString": "function (string memory,string memory) external returns (address[] memory)"
                      }
                    },
                    "id": 23877,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2586:35:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 23872,
                  "id": 23878,
                  "nodeType": "Return",
                  "src": "2579:42:70"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readAddressArray",
            "nameLocation": "2477:16:70",
            "parameters": {
              "id": 23868,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23865,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "2508:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23880,
                  "src": "2494:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23864,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2494:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23867,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "2528:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23880,
                  "src": "2514:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23866,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2514:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2493:39:70"
            },
            "returnParameters": {
              "id": 23872,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23871,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23880,
                  "src": "2551:16:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23869,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2551:7:70",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 23870,
                    "nodeType": "ArrayTypeName",
                    "src": "2551:9:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2550:18:70"
            },
            "scope": 24253,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23896,
            "nodeType": "FunctionDefinition",
            "src": "2634:132:70",
            "nodes": [],
            "body": {
              "id": 23895,
              "nodeType": "Block",
              "src": "2715:51:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23891,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23882,
                        "src": "2749:4:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23892,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23884,
                        "src": "2755:3:70",
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
                        "id": 23889,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23699,
                        "src": "2732:2:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$29055",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23890,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2735:13:70",
                      "memberName": "parseJsonBool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28736,
                      "src": "2732:16:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bool_$",
                        "typeString": "function (string memory,string memory) external returns (bool)"
                      }
                    },
                    "id": 23893,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2732:27:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 23888,
                  "id": 23894,
                  "nodeType": "Return",
                  "src": "2725:34:70"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readBool",
            "nameLocation": "2643:8:70",
            "parameters": {
              "id": 23885,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23882,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "2666:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23896,
                  "src": "2652:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23881,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2652:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23884,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "2686:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23896,
                  "src": "2672:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23883,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2672:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2651:39:70"
            },
            "returnParameters": {
              "id": 23888,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23887,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23896,
                  "src": "2709:4:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 23886,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2709:4:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2708:6:70"
            },
            "scope": 24253,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23913,
            "nodeType": "FunctionDefinition",
            "src": "2772:151:70",
            "nodes": [],
            "body": {
              "id": 23912,
              "nodeType": "Block",
              "src": "2867:56:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23908,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23898,
                        "src": "2906:4:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23909,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23900,
                        "src": "2912:3:70",
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
                        "id": 23906,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23699,
                        "src": "2884:2:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$29055",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23907,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2887:18:70",
                      "memberName": "parseJsonBoolArray",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28746,
                      "src": "2884:21:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_bool_$dyn_memory_ptr_$",
                        "typeString": "function (string memory,string memory) external returns (bool[] memory)"
                      }
                    },
                    "id": 23910,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2884:32:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                      "typeString": "bool[] memory"
                    }
                  },
                  "functionReturnParameters": 23905,
                  "id": 23911,
                  "nodeType": "Return",
                  "src": "2877:39:70"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readBoolArray",
            "nameLocation": "2781:13:70",
            "parameters": {
              "id": 23901,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23898,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "2809:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23913,
                  "src": "2795:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23897,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2795:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23900,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "2829:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23913,
                  "src": "2815:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23899,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2815:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2794:39:70"
            },
            "returnParameters": {
              "id": 23905,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23904,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23913,
                  "src": "2852:13:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23902,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "2852:4:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 23903,
                    "nodeType": "ArrayTypeName",
                    "src": "2852:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2851:15:70"
            },
            "scope": 24253,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23929,
            "nodeType": "FunctionDefinition",
            "src": "2929:142:70",
            "nodes": [],
            "body": {
              "id": 23928,
              "nodeType": "Block",
              "src": "3019:52:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23924,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23915,
                        "src": "3054:4:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23925,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23917,
                        "src": "3060:3:70",
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
                        "id": 23922,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23699,
                        "src": "3036:2:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$29055",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23923,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3039:14:70",
                      "memberName": "parseJsonBytes",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28793,
                      "src": "3036:17:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (string memory,string memory) external returns (bytes memory)"
                      }
                    },
                    "id": 23926,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3036:28:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 23921,
                  "id": 23927,
                  "nodeType": "Return",
                  "src": "3029:35:70"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readBytes",
            "nameLocation": "2938:9:70",
            "parameters": {
              "id": 23918,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23915,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "2962:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23929,
                  "src": "2948:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23914,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2948:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23917,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "2982:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23929,
                  "src": "2968:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23916,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2968:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2947:39:70"
            },
            "returnParameters": {
              "id": 23921,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23920,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23929,
                  "src": "3005:12:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 23919,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3005:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3004:14:70"
            },
            "scope": 24253,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23946,
            "nodeType": "FunctionDefinition",
            "src": "3077:154:70",
            "nodes": [],
            "body": {
              "id": 23945,
              "nodeType": "Block",
              "src": "3174:57:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23941,
                        "name": "json",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23931,
                        "src": "3214:4:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23942,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23933,
                        "src": "3220:3:70",
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
                        "id": 23939,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23699,
                        "src": "3191:2:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$29055",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23940,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3194:19:70",
                      "memberName": "parseJsonBytesArray",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28803,
                      "src": "3191:22:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_bytes_memory_ptr_$dyn_memory_ptr_$",
                        "typeString": "function (string memory,string memory) external returns (bytes memory[] memory)"
                      }
                    },
                    "id": 23943,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3191:33:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                      "typeString": "bytes memory[] memory"
                    }
                  },
                  "functionReturnParameters": 23938,
                  "id": 23944,
                  "nodeType": "Return",
                  "src": "3184:40:70"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readBytesArray",
            "nameLocation": "3086:14:70",
            "parameters": {
              "id": 23934,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23931,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "3115:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23946,
                  "src": "3101:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23930,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3101:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23933,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "3135:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23946,
                  "src": "3121:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23932,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3121:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3100:39:70"
            },
            "returnParameters": {
              "id": 23938,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23937,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23946,
                  "src": "3158:14:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23935,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "3158:5:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 23936,
                    "nodeType": "ArrayTypeName",
                    "src": "3158:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3157:16:70"
            },
            "scope": 24253,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23965,
            "nodeType": "FunctionDefinition",
            "src": "3237:167:70",
            "nodes": [],
            "body": {
              "id": 23964,
              "nodeType": "Block",
              "src": "3343:61:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23959,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23948,
                        "src": "3377:7:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23960,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23950,
                        "src": "3386:3:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23961,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23952,
                        "src": "3391:5:70",
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
                        "id": 23957,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23699,
                        "src": "3360:2:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$29055",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23958,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3363:13:70",
                      "memberName": "serializeBool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28843,
                      "src": "3360:16:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bool_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,bool) external returns (string memory)"
                      }
                    },
                    "id": 23962,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3360:37:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 23956,
                  "id": 23963,
                  "nodeType": "Return",
                  "src": "3353:44:70"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "3246:9:70",
            "parameters": {
              "id": 23953,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23948,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "3270:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23965,
                  "src": "3256:21:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23947,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3256:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23950,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "3293:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23965,
                  "src": "3279:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23949,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3279:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23952,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3303:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23965,
                  "src": "3298:10:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 23951,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3298:4:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3255:54:70"
            },
            "returnParameters": {
              "id": 23956,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23955,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23965,
                  "src": "3328:13:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23954,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3328:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3327:15:70"
            },
            "scope": 24253,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23985,
            "nodeType": "FunctionDefinition",
            "src": "3410:196:70",
            "nodes": [],
            "body": {
              "id": 23984,
              "nodeType": "Block",
              "src": "3545:61:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23979,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23967,
                        "src": "3579:7:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23980,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23969,
                        "src": "3588:3:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23981,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23972,
                        "src": "3593:5:70",
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
                        "id": 23977,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23699,
                        "src": "3562:2:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$29055",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23978,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3565:13:70",
                      "memberName": "serializeBool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28921,
                      "src": "3562:16:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bool_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,bool[] memory) external returns (string memory)"
                      }
                    },
                    "id": 23982,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3562:37:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 23976,
                  "id": 23983,
                  "nodeType": "Return",
                  "src": "3555:44:70"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "3419:9:70",
            "parameters": {
              "id": 23973,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23967,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "3443:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23985,
                  "src": "3429:21:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23966,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3429:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23969,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "3466:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23985,
                  "src": "3452:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23968,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3452:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23972,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3485:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 23985,
                  "src": "3471:19:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23970,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "3471:4:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 23971,
                    "nodeType": "ArrayTypeName",
                    "src": "3471:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3428:63:70"
            },
            "returnParameters": {
              "id": 23976,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23975,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23985,
                  "src": "3526:13:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23974,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3526:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3525:15:70"
            },
            "scope": 24253,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 24004,
            "nodeType": "FunctionDefinition",
            "src": "3612:170:70",
            "nodes": [],
            "body": {
              "id": 24003,
              "nodeType": "Block",
              "src": "3721:61:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23998,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23987,
                        "src": "3755:7:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23999,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23989,
                        "src": "3764:3:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 24000,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23991,
                        "src": "3769:5:70",
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
                        "id": 23996,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23699,
                        "src": "3738:2:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$29055",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 23997,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3741:13:70",
                      "memberName": "serializeUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28854,
                      "src": "3738:16:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_uint256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,uint256) external returns (string memory)"
                      }
                    },
                    "id": 24001,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3738:37:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 23995,
                  "id": 24002,
                  "nodeType": "Return",
                  "src": "3731:44:70"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "3621:9:70",
            "parameters": {
              "id": 23992,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23987,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "3645:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24004,
                  "src": "3631:21:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23986,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3631:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23989,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "3668:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24004,
                  "src": "3654:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23988,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3654:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23991,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3681:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24004,
                  "src": "3673:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 23990,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3673:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3630:57:70"
            },
            "returnParameters": {
              "id": 23995,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23994,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 24004,
                  "src": "3706:13:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23993,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3706:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3705:15:70"
            },
            "scope": 24253,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 24024,
            "nodeType": "FunctionDefinition",
            "src": "3788:199:70",
            "nodes": [],
            "body": {
              "id": 24023,
              "nodeType": "Block",
              "src": "3926:61:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 24018,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24006,
                        "src": "3960:7:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 24019,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24008,
                        "src": "3969:3:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 24020,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24011,
                        "src": "3974:5:70",
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
                        "id": 24016,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23699,
                        "src": "3943:2:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$29055",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 24017,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3946:13:70",
                      "memberName": "serializeUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28933,
                      "src": "3943:16:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,uint256[] memory) external returns (string memory)"
                      }
                    },
                    "id": 24021,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3943:37:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 24015,
                  "id": 24022,
                  "nodeType": "Return",
                  "src": "3936:44:70"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "3797:9:70",
            "parameters": {
              "id": 24012,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24006,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "3821:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24024,
                  "src": "3807:21:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24005,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3807:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24008,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "3844:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24024,
                  "src": "3830:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24007,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3830:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24011,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3866:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24024,
                  "src": "3849:22:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 24009,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3849:7:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 24010,
                    "nodeType": "ArrayTypeName",
                    "src": "3849:9:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3806:66:70"
            },
            "returnParameters": {
              "id": 24015,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24014,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 24024,
                  "src": "3907:13:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24013,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3907:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3906:15:70"
            },
            "scope": 24253,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 24043,
            "nodeType": "FunctionDefinition",
            "src": "3993:168:70",
            "nodes": [],
            "body": {
              "id": 24042,
              "nodeType": "Block",
              "src": "4101:60:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 24037,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24026,
                        "src": "4134:7:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 24038,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24028,
                        "src": "4143:3:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 24039,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24030,
                        "src": "4148:5:70",
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
                        "id": 24035,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23699,
                        "src": "4118:2:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$29055",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 24036,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4121:12:70",
                      "memberName": "serializeInt",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28865,
                      "src": "4118:15:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_int256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,int256) external returns (string memory)"
                      }
                    },
                    "id": 24040,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4118:36:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 24034,
                  "id": 24041,
                  "nodeType": "Return",
                  "src": "4111:43:70"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "4002:9:70",
            "parameters": {
              "id": 24031,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24026,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "4026:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24043,
                  "src": "4012:21:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24025,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4012:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24028,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "4049:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24043,
                  "src": "4035:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24027,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4035:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24030,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4061:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24043,
                  "src": "4054:12:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 24029,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4054:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4011:56:70"
            },
            "returnParameters": {
              "id": 24034,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24033,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 24043,
                  "src": "4086:13:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24032,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4086:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4085:15:70"
            },
            "scope": 24253,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 24063,
            "nodeType": "FunctionDefinition",
            "src": "4167:197:70",
            "nodes": [],
            "body": {
              "id": 24062,
              "nodeType": "Block",
              "src": "4304:60:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 24057,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24045,
                        "src": "4337:7:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 24058,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24047,
                        "src": "4346:3:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 24059,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24050,
                        "src": "4351:5:70",
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
                        "id": 24055,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23699,
                        "src": "4321:2:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$29055",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 24056,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4324:12:70",
                      "memberName": "serializeInt",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28945,
                      "src": "4321:15:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_int256_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,int256[] memory) external returns (string memory)"
                      }
                    },
                    "id": 24060,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4321:36:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 24054,
                  "id": 24061,
                  "nodeType": "Return",
                  "src": "4314:43:70"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "4176:9:70",
            "parameters": {
              "id": 24051,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24045,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "4200:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24063,
                  "src": "4186:21:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24044,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4186:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24047,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "4223:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24063,
                  "src": "4209:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24046,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4209:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24050,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4244:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24063,
                  "src": "4228:21:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 24048,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4228:6:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 24049,
                    "nodeType": "ArrayTypeName",
                    "src": "4228:8:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4185:65:70"
            },
            "returnParameters": {
              "id": 24054,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24053,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 24063,
                  "src": "4285:13:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24052,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4285:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4284:15:70"
            },
            "scope": 24253,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 24082,
            "nodeType": "FunctionDefinition",
            "src": "4370:173:70",
            "nodes": [],
            "body": {
              "id": 24081,
              "nodeType": "Block",
              "src": "4479:64:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 24076,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24065,
                        "src": "4516:7:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 24077,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24067,
                        "src": "4525:3:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 24078,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24069,
                        "src": "4530:5:70",
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
                        "id": 24074,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23699,
                        "src": "4496:2:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$29055",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 24075,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4499:16:70",
                      "memberName": "serializeAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28876,
                      "src": "4496:19:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_address_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,address) external returns (string memory)"
                      }
                    },
                    "id": 24079,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4496:40:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 24073,
                  "id": 24080,
                  "nodeType": "Return",
                  "src": "4489:47:70"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "4379:9:70",
            "parameters": {
              "id": 24070,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24065,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "4403:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24082,
                  "src": "4389:21:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24064,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4389:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24067,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "4426:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24082,
                  "src": "4412:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24066,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4412:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24069,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4439:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24082,
                  "src": "4431:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 24068,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4431:7:70",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4388:57:70"
            },
            "returnParameters": {
              "id": 24073,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24072,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 24082,
                  "src": "4464:13:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24071,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4464:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4463:15:70"
            },
            "scope": 24253,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 24102,
            "nodeType": "FunctionDefinition",
            "src": "4549:202:70",
            "nodes": [],
            "body": {
              "id": 24101,
              "nodeType": "Block",
              "src": "4687:64:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 24096,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24084,
                        "src": "4724:7:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 24097,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24086,
                        "src": "4733:3:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 24098,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24089,
                        "src": "4738:5:70",
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
                        "id": 24094,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23699,
                        "src": "4704:2:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$29055",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 24095,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4707:16:70",
                      "memberName": "serializeAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28957,
                      "src": "4704:19:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,address[] memory) external returns (string memory)"
                      }
                    },
                    "id": 24099,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4704:40:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 24093,
                  "id": 24100,
                  "nodeType": "Return",
                  "src": "4697:47:70"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "4558:9:70",
            "parameters": {
              "id": 24090,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24084,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "4582:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24102,
                  "src": "4568:21:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24083,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4568:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24086,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "4605:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24102,
                  "src": "4591:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24085,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4591:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24089,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4627:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24102,
                  "src": "4610:22:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 24087,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4610:7:70",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 24088,
                    "nodeType": "ArrayTypeName",
                    "src": "4610:9:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4567:66:70"
            },
            "returnParameters": {
              "id": 24093,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24092,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 24102,
                  "src": "4668:13:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24091,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4668:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4667:15:70"
            },
            "scope": 24253,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 24121,
            "nodeType": "FunctionDefinition",
            "src": "4757:173:70",
            "nodes": [],
            "body": {
              "id": 24120,
              "nodeType": "Block",
              "src": "4866:64:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 24115,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24104,
                        "src": "4903:7:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 24116,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24106,
                        "src": "4912:3:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 24117,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24108,
                        "src": "4917:5:70",
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
                        "id": 24113,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23699,
                        "src": "4883:2:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$29055",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 24114,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4886:16:70",
                      "memberName": "serializeBytes32",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28887,
                      "src": "4883:19:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bytes32_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,bytes32) external returns (string memory)"
                      }
                    },
                    "id": 24118,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4883:40:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 24112,
                  "id": 24119,
                  "nodeType": "Return",
                  "src": "4876:47:70"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "4766:9:70",
            "parameters": {
              "id": 24109,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24104,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "4790:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24121,
                  "src": "4776:21:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24103,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4776:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24106,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "4813:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24121,
                  "src": "4799:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24105,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4799:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24108,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4826:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24121,
                  "src": "4818:13:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 24107,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4818:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4775:57:70"
            },
            "returnParameters": {
              "id": 24112,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24111,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 24121,
                  "src": "4851:13:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24110,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4851:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4850:15:70"
            },
            "scope": 24253,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 24141,
            "nodeType": "FunctionDefinition",
            "src": "4936:202:70",
            "nodes": [],
            "body": {
              "id": 24140,
              "nodeType": "Block",
              "src": "5074:64:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 24135,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24123,
                        "src": "5111:7:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 24136,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24125,
                        "src": "5120:3:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 24137,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24128,
                        "src": "5125:5:70",
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
                        "id": 24133,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23699,
                        "src": "5091:2:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$29055",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 24134,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5094:16:70",
                      "memberName": "serializeBytes32",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28969,
                      "src": "5091:19:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bytes32_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,bytes32[] memory) external returns (string memory)"
                      }
                    },
                    "id": 24138,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5091:40:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 24132,
                  "id": 24139,
                  "nodeType": "Return",
                  "src": "5084:47:70"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "4945:9:70",
            "parameters": {
              "id": 24129,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24123,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "4969:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24141,
                  "src": "4955:21:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24122,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4955:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24125,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "4992:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24141,
                  "src": "4978:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24124,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4978:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24128,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5014:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24141,
                  "src": "4997:22:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 24126,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "4997:7:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 24127,
                    "nodeType": "ArrayTypeName",
                    "src": "4997:9:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4954:66:70"
            },
            "returnParameters": {
              "id": 24132,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24131,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 24141,
                  "src": "5055:13:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24130,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5055:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5054:15:70"
            },
            "scope": 24253,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 24160,
            "nodeType": "FunctionDefinition",
            "src": "5144:176:70",
            "nodes": [],
            "body": {
              "id": 24159,
              "nodeType": "Block",
              "src": "5258:62:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 24154,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24143,
                        "src": "5293:7:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 24155,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24145,
                        "src": "5302:3:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 24156,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24147,
                        "src": "5307:5:70",
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
                        "id": 24152,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23699,
                        "src": "5275:2:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$29055",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 24153,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5278:14:70",
                      "memberName": "serializeBytes",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28909,
                      "src": "5275:17:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,bytes memory) external returns (string memory)"
                      }
                    },
                    "id": 24157,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5275:38:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 24151,
                  "id": 24158,
                  "nodeType": "Return",
                  "src": "5268:45:70"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "5153:9:70",
            "parameters": {
              "id": 24148,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24143,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "5177:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24160,
                  "src": "5163:21:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24142,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5163:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24145,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "5200:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24160,
                  "src": "5186:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24144,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5186:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24147,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5218:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24160,
                  "src": "5205:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 24146,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5205:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5162:62:70"
            },
            "returnParameters": {
              "id": 24151,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24150,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 24160,
                  "src": "5243:13:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24149,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5243:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5242:15:70"
            },
            "scope": 24253,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 24180,
            "nodeType": "FunctionDefinition",
            "src": "5326:198:70",
            "nodes": [],
            "body": {
              "id": 24179,
              "nodeType": "Block",
              "src": "5462:62:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 24174,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24162,
                        "src": "5497:7:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 24175,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24164,
                        "src": "5506:3:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 24176,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24167,
                        "src": "5511:5:70",
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
                        "id": 24172,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23699,
                        "src": "5479:2:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$29055",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 24173,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5482:14:70",
                      "memberName": "serializeBytes",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28993,
                      "src": "5479:17:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bytes_memory_ptr_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,bytes memory[] memory) external returns (string memory)"
                      }
                    },
                    "id": 24177,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5479:38:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 24171,
                  "id": 24178,
                  "nodeType": "Return",
                  "src": "5472:45:70"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "5335:9:70",
            "parameters": {
              "id": 24168,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24162,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "5359:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24180,
                  "src": "5345:21:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24161,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5345:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24164,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "5382:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24180,
                  "src": "5368:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24163,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5368:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24167,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5402:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24180,
                  "src": "5387:20:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 24165,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "5387:5:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 24166,
                    "nodeType": "ArrayTypeName",
                    "src": "5387:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5344:64:70"
            },
            "returnParameters": {
              "id": 24171,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24170,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 24180,
                  "src": "5443:13:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24169,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5443:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5442:15:70"
            },
            "scope": 24253,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 24199,
            "nodeType": "FunctionDefinition",
            "src": "5530:198:70",
            "nodes": [],
            "body": {
              "id": 24198,
              "nodeType": "Block",
              "src": "5665:63:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 24193,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24182,
                        "src": "5701:7:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 24194,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24184,
                        "src": "5710:3:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 24195,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24186,
                        "src": "5715:5:70",
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
                        "id": 24191,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23699,
                        "src": "5682:2:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$29055",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 24192,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5685:15:70",
                      "memberName": "serializeString",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28898,
                      "src": "5682:18:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,string memory) external returns (string memory)"
                      }
                    },
                    "id": 24196,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5682:39:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 24190,
                  "id": 24197,
                  "nodeType": "Return",
                  "src": "5675:46:70"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "5539:9:70",
            "parameters": {
              "id": 24187,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24182,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "5563:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24199,
                  "src": "5549:21:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24181,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5549:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24184,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "5586:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24199,
                  "src": "5572:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24183,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5572:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24186,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5605:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24199,
                  "src": "5591:19:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24185,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5591:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5548:63:70"
            },
            "returnParameters": {
              "id": 24190,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24189,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 24199,
                  "src": "5646:13:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24188,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5646:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5645:15:70"
            },
            "scope": 24253,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 24219,
            "nodeType": "FunctionDefinition",
            "src": "5734:200:70",
            "nodes": [],
            "body": {
              "id": 24218,
              "nodeType": "Block",
              "src": "5871:63:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 24213,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24201,
                        "src": "5907:7:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 24214,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24203,
                        "src": "5916:3:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 24215,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24206,
                        "src": "5921:5:70",
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
                        "id": 24211,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23699,
                        "src": "5888:2:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$29055",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 24212,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5891:15:70",
                      "memberName": "serializeString",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28981,
                      "src": "5888:18:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_string_memory_ptr_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,string memory[] memory) external returns (string memory)"
                      }
                    },
                    "id": 24216,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5888:39:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 24210,
                  "id": 24217,
                  "nodeType": "Return",
                  "src": "5881:46:70"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "serialize",
            "nameLocation": "5743:9:70",
            "parameters": {
              "id": 24207,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24201,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "5767:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24219,
                  "src": "5753:21:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24200,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5753:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24203,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "5790:3:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24219,
                  "src": "5776:17:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24202,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5776:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24206,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5811:5:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24219,
                  "src": "5795:21:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 24204,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "5795:6:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 24205,
                    "nodeType": "ArrayTypeName",
                    "src": "5795:8:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5752:65:70"
            },
            "returnParameters": {
              "id": 24210,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24209,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 24219,
                  "src": "5852:13:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24208,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5852:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5851:15:70"
            },
            "scope": 24253,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 24234,
            "nodeType": "FunctionDefinition",
            "src": "5940:111:70",
            "nodes": [],
            "body": {
              "id": 24233,
              "nodeType": "Block",
              "src": "6007:44:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 24229,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24221,
                        "src": "6030:7:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 24230,
                        "name": "path",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24223,
                        "src": "6039:4:70",
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
                        "id": 24226,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23699,
                        "src": "6017:2:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$29055",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 24228,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6020:9:70",
                      "memberName": "writeJson",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 29000,
                      "src": "6017:12:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,string memory) external"
                      }
                    },
                    "id": 24231,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6017:27:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 24232,
                  "nodeType": "ExpressionStatement",
                  "src": "6017:27:70"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "write",
            "nameLocation": "5949:5:70",
            "parameters": {
              "id": 24224,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24221,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "5969:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24234,
                  "src": "5955:21:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24220,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5955:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24223,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "5992:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24234,
                  "src": "5978:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24222,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5978:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5954:43:70"
            },
            "returnParameters": {
              "id": 24225,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6007:0:70"
            },
            "scope": 24253,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 24252,
            "nodeType": "FunctionDefinition",
            "src": "6057:145:70",
            "nodes": [],
            "body": {
              "id": 24251,
              "nodeType": "Block",
              "src": "6148:54:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 24246,
                        "name": "jsonKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24236,
                        "src": "6171:7:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 24247,
                        "name": "path",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24238,
                        "src": "6180:4:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 24248,
                        "name": "valueKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24240,
                        "src": "6186:8:70",
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
                        "id": 24243,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23699,
                        "src": "6158:2:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VmSafe_$29055",
                          "typeString": "contract VmSafe"
                        }
                      },
                      "id": 24245,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6161:9:70",
                      "memberName": "writeJson",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 29009,
                      "src": "6158:12:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,string memory,string memory) external"
                      }
                    },
                    "id": 24249,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6158:37:70",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 24250,
                  "nodeType": "ExpressionStatement",
                  "src": "6158:37:70"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "write",
            "nameLocation": "6066:5:70",
            "parameters": {
              "id": 24241,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24236,
                  "mutability": "mutable",
                  "name": "jsonKey",
                  "nameLocation": "6086:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24252,
                  "src": "6072:21:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24235,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6072:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24238,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "6109:4:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24252,
                  "src": "6095:18:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24237,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6095:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24240,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "6129:8:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 24252,
                  "src": "6115:22:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24239,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6115:6:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6071:67:70"
            },
            "returnParameters": {
              "id": 24242,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6148:0:70"
            },
            "scope": 24253,
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
          24253
        ],
        "name": "stdJson",
        "nameLocation": "838:7:70",
        "scope": 24254,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 70
} as const;
