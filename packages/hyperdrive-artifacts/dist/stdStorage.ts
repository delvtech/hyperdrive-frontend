export const StdStorage = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220eabf62087138291110c337273f7d396abaf74c9241052680338b9fd9423ee5ae64736f6c63430008130033",
    "sourceMap": "7339:4665:72:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;7339:4665:72;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220eabf62087138291110c337273f7d396abaf74c9241052680338b9fd9423ee5ae64736f6c63430008130033",
    "sourceMap": "7339:4665:72:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdStorage.sol\":\"stdStorage\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"lib/forge-std/src/StdStorage.sol\":{\"keccak256\":\"0x391a28a2e54aea51a6fb03a3a48035304ca4d24bc669ddf3d4c152c7162e514d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://475fd0d87ccb0fdc4418dea2babffb4adb4aafb817e61f7ef31c2303f10c6c26\",\"dweb:/ipfs/QmQgcgtZxpkW6DRmbJszN1F8mU6zhaTZGdWWsj77yCuWN9\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]}},\"version\":1}",
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
        "lib/forge-std/src/StdStorage.sol": "stdStorage"
      },
      "libraries": {}
    },
    "sources": {
      "lib/forge-std/src/StdStorage.sol": {
        "keccak256": "0x391a28a2e54aea51a6fb03a3a48035304ca4d24bc669ddf3d4c152c7162e514d",
        "urls": [
          "bzz-raw://475fd0d87ccb0fdc4418dea2babffb4adb4aafb817e61f7ef31c2303f10c6c26",
          "dweb:/ipfs/QmQgcgtZxpkW6DRmbJszN1F8mU6zhaTZGdWWsj77yCuWN9"
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
    "absolutePath": "lib/forge-std/src/StdStorage.sol",
    "id": 25881,
    "exportedSymbols": {
      "StdStorage": [
        24427
      ],
      "Vm": [
        29527
      ],
      "stdStorage": [
        25880
      ],
      "stdStorageSafe": [
        25319
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:11973:72",
    "nodes": [
      {
        "id": 24397,
        "nodeType": "PragmaDirective",
        "src": "32:31:72",
        "nodes": [],
        "literals": [
          "solidity",
          ">=",
          "0.6",
          ".2",
          "<",
          "0.9",
          ".0"
        ]
      },
      {
        "id": 24399,
        "nodeType": "ImportDirective",
        "src": "65:28:72",
        "nodes": [],
        "absolutePath": "lib/forge-std/src/Vm.sol",
        "file": "./Vm.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 25881,
        "sourceUnit": 29528,
        "symbolAliases": [
          {
            "foreign": {
              "id": 24398,
              "name": "Vm",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 29527,
              "src": "73:2:72",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 24427,
        "nodeType": "StructDefinition",
        "src": "95:271:72",
        "nodes": [],
        "canonicalName": "StdStorage",
        "members": [
          {
            "constant": false,
            "id": 24407,
            "mutability": "mutable",
            "name": "slots",
            "nameLocation": "186:5:72",
            "nodeType": "VariableDeclaration",
            "scope": 24427,
            "src": "119:72:72",
            "stateVariable": false,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$_$",
              "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => uint256)))"
            },
            "typeName": {
              "id": 24406,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 24400,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "127:7:72",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "119:66:72",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$_$",
                "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => uint256)))"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 24405,
                "keyName": "",
                "keyNameLocation": "-1:-1:-1",
                "keyType": {
                  "id": 24401,
                  "name": "bytes4",
                  "nodeType": "ElementaryTypeName",
                  "src": "146:6:72",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  }
                },
                "nodeType": "Mapping",
                "src": "138:46:72",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$",
                  "typeString": "mapping(bytes4 => mapping(bytes32 => uint256))"
                },
                "valueName": "",
                "valueNameLocation": "-1:-1:-1",
                "valueType": {
                  "id": 24404,
                  "keyName": "",
                  "keyNameLocation": "-1:-1:-1",
                  "keyType": {
                    "id": 24402,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "164:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "156:27:72",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                    "typeString": "mapping(bytes32 => uint256)"
                  },
                  "valueName": "",
                  "valueNameLocation": "-1:-1:-1",
                  "valueType": {
                    "id": 24403,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "175:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                }
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 24415,
            "mutability": "mutable",
            "name": "finds",
            "nameLocation": "261:5:72",
            "nodeType": "VariableDeclaration",
            "scope": 24427,
            "src": "197:69:72",
            "stateVariable": false,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$_$",
              "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => bool)))"
            },
            "typeName": {
              "id": 24414,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 24408,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "205:7:72",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "197:63:72",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$_$",
                "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => bool)))"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 24413,
                "keyName": "",
                "keyNameLocation": "-1:-1:-1",
                "keyType": {
                  "id": 24409,
                  "name": "bytes4",
                  "nodeType": "ElementaryTypeName",
                  "src": "224:6:72",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  }
                },
                "nodeType": "Mapping",
                "src": "216:43:72",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                  "typeString": "mapping(bytes4 => mapping(bytes32 => bool))"
                },
                "valueName": "",
                "valueNameLocation": "-1:-1:-1",
                "valueType": {
                  "id": 24412,
                  "keyName": "",
                  "keyNameLocation": "-1:-1:-1",
                  "keyType": {
                    "id": 24410,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "242:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "234:24:72",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                    "typeString": "mapping(bytes32 => bool)"
                  },
                  "valueName": "",
                  "valueNameLocation": "-1:-1:-1",
                  "valueType": {
                    "id": 24411,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "253:4:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  }
                }
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 24418,
            "mutability": "mutable",
            "name": "_keys",
            "nameLocation": "282:5:72",
            "nodeType": "VariableDeclaration",
            "scope": 24427,
            "src": "272:15:72",
            "stateVariable": false,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
              "typeString": "bytes32[]"
            },
            "typeName": {
              "baseType": {
                "id": 24416,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "272:7:72",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "id": 24417,
              "nodeType": "ArrayTypeName",
              "src": "272:9:72",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                "typeString": "bytes32[]"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 24420,
            "mutability": "mutable",
            "name": "_sig",
            "nameLocation": "300:4:72",
            "nodeType": "VariableDeclaration",
            "scope": 24427,
            "src": "293:11:72",
            "stateVariable": false,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes4",
              "typeString": "bytes4"
            },
            "typeName": {
              "id": 24419,
              "name": "bytes4",
              "nodeType": "ElementaryTypeName",
              "src": "293:6:72",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 24422,
            "mutability": "mutable",
            "name": "_depth",
            "nameLocation": "318:6:72",
            "nodeType": "VariableDeclaration",
            "scope": 24427,
            "src": "310:14:72",
            "stateVariable": false,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 24421,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "310:7:72",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 24424,
            "mutability": "mutable",
            "name": "_target",
            "nameLocation": "338:7:72",
            "nodeType": "VariableDeclaration",
            "scope": 24427,
            "src": "330:15:72",
            "stateVariable": false,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 24423,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "330:7:72",
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
            "id": 24426,
            "mutability": "mutable",
            "name": "_set",
            "nameLocation": "359:4:72",
            "nodeType": "VariableDeclaration",
            "scope": 24427,
            "src": "351:12:72",
            "stateVariable": false,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 24425,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "351:7:72",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "internal"
          }
        ],
        "name": "StdStorage",
        "nameLocation": "102:10:72",
        "scope": 25881,
        "visibility": "public"
      },
      {
        "id": 25319,
        "nodeType": "ContractDefinition",
        "src": "368:6969:72",
        "nodes": [
          {
            "id": 24437,
            "nodeType": "EventDefinition",
            "src": "397:74:72",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "9c9555b1e3102e3cf48f427d79cb678f5d9bd1ed0ad574389461e255f95170ed",
            "name": "SlotFound",
            "nameLocation": "403:9:72",
            "parameters": {
              "id": 24436,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24429,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "who",
                  "nameLocation": "421:3:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 24437,
                  "src": "413:11:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 24428,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "413:7:72",
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
                  "id": 24431,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "fsig",
                  "nameLocation": "433:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 24437,
                  "src": "426:11:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 24430,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "426:6:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24433,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "keysHash",
                  "nameLocation": "447:8:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 24437,
                  "src": "439:16:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 24432,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "439:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24435,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "465:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 24437,
                  "src": "457:12:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 24434,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "457:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "412:58:72"
            }
          },
          {
            "id": 24443,
            "nodeType": "EventDefinition",
            "src": "476:54:72",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "080fc4a96620c4462e705b23f346413fe3796bb63c6f8d8591baec0e231577a5",
            "name": "WARNING_UninitedSlot",
            "nameLocation": "482:20:72",
            "parameters": {
              "id": 24442,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24439,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "who",
                  "nameLocation": "511:3:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 24443,
                  "src": "503:11:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 24438,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "503:7:72",
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
                  "id": 24441,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "524:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 24443,
                  "src": "516:12:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 24440,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "516:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "502:27:72"
            }
          },
          {
            "id": 24460,
            "nodeType": "VariableDeclaration",
            "src": "536:84:72",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "vm",
            "nameLocation": "556:2:72",
            "scope": 25319,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Vm_$29527",
              "typeString": "contract Vm"
            },
            "typeName": {
              "id": 24445,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 24444,
                "name": "Vm",
                "nameLocations": [
                  "536:2:72"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 29527,
                "src": "536:2:72"
              },
              "referencedDeclaration": 29527,
              "src": "536:2:72",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Vm_$29527",
                "typeString": "contract Vm"
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
                                  "id": 24454,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "string",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "598:17:72",
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
                                "id": 24453,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "588:9:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                              },
                              "id": 24455,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "588:28:72",
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
                            "id": 24452,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "580:7:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 24451,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "580:7:72",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 24456,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "580:37:72",
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
                        "id": 24450,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "572:7:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint160_$",
                          "typeString": "type(uint160)"
                        },
                        "typeName": {
                          "id": 24449,
                          "name": "uint160",
                          "nodeType": "ElementaryTypeName",
                          "src": "572:7:72",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 24457,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "572:46:72",
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
                    "id": 24448,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "ElementaryTypeNameExpression",
                    "src": "564:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_address_$",
                      "typeString": "type(address)"
                    },
                    "typeName": {
                      "id": 24447,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "564:7:72",
                      "typeDescriptions": {}
                    }
                  },
                  "id": 24458,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "typeConversion",
                  "lValueRequested": false,
                  "nameLocations": [],
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "564:55:72",
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
                "id": 24446,
                "name": "Vm",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 29527,
                "src": "561:2:72",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_contract$_Vm_$29527_$",
                  "typeString": "type(contract Vm)"
                }
              },
              "id": 24459,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "561:59:72",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Vm_$29527",
                "typeString": "contract Vm"
              }
            },
            "visibility": "private"
          },
          {
            "id": 24478,
            "nodeType": "FunctionDefinition",
            "src": "627:123:72",
            "nodes": [],
            "body": {
              "id": 24477,
              "nodeType": "Block",
              "src": "694:56:72",
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
                                "id": 24472,
                                "name": "sigStr",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 24462,
                                "src": "734:6:72",
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
                                }
                              ],
                              "id": 24471,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "728:5:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                "typeString": "type(bytes storage pointer)"
                              },
                              "typeName": {
                                "id": 24470,
                                "name": "bytes",
                                "nodeType": "ElementaryTypeName",
                                "src": "728:5:72",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 24473,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "728:13:72",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 24469,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -8,
                          "src": "718:9:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 24474,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "718:24:72",
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
                      "id": 24468,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "711:6:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes4_$",
                        "typeString": "type(bytes4)"
                      },
                      "typeName": {
                        "id": 24467,
                        "name": "bytes4",
                        "nodeType": "ElementaryTypeName",
                        "src": "711:6:72",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 24475,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "711:32:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "functionReturnParameters": 24466,
                  "id": 24476,
                  "nodeType": "Return",
                  "src": "704:39:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sigs",
            "nameLocation": "636:4:72",
            "parameters": {
              "id": 24463,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24462,
                  "mutability": "mutable",
                  "name": "sigStr",
                  "nameLocation": "655:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 24478,
                  "src": "641:20:72",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24461,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "641:6:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "640:22:72"
            },
            "returnParameters": {
              "id": 24466,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24465,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 24478,
                  "src": "686:6:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 24464,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "686:6:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "685:8:72"
            },
            "scope": 25319,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 24922,
            "nodeType": "FunctionDefinition",
            "src": "1264:3197:72",
            "nodes": [],
            "body": {
              "id": 24921,
              "nodeType": "Block",
              "src": "1330:3131:72",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    24488
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 24488,
                      "mutability": "mutable",
                      "name": "who",
                      "nameLocation": "1348:3:72",
                      "nodeType": "VariableDeclaration",
                      "scope": 24921,
                      "src": "1340:11:72",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 24487,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1340:7:72",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 24491,
                  "initialValue": {
                    "expression": {
                      "id": 24489,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 24482,
                      "src": "1354:4:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                        "typeString": "struct StdStorage storage pointer"
                      }
                    },
                    "id": 24490,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "1359:7:72",
                    "memberName": "_target",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 24424,
                    "src": "1354:12:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1340:26:72"
                },
                {
                  "assignments": [
                    24493
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 24493,
                      "mutability": "mutable",
                      "name": "fsig",
                      "nameLocation": "1383:4:72",
                      "nodeType": "VariableDeclaration",
                      "scope": 24921,
                      "src": "1376:11:72",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      },
                      "typeName": {
                        "id": 24492,
                        "name": "bytes4",
                        "nodeType": "ElementaryTypeName",
                        "src": "1376:6:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 24496,
                  "initialValue": {
                    "expression": {
                      "id": 24494,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 24482,
                      "src": "1390:4:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                        "typeString": "struct StdStorage storage pointer"
                      }
                    },
                    "id": 24495,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "1395:4:72",
                    "memberName": "_sig",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 24420,
                    "src": "1390:9:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1376:23:72"
                },
                {
                  "assignments": [
                    24498
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 24498,
                      "mutability": "mutable",
                      "name": "field_depth",
                      "nameLocation": "1417:11:72",
                      "nodeType": "VariableDeclaration",
                      "scope": 24921,
                      "src": "1409:19:72",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 24497,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1409:7:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 24501,
                  "initialValue": {
                    "expression": {
                      "id": 24499,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 24482,
                      "src": "1431:4:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                        "typeString": "struct StdStorage storage pointer"
                      }
                    },
                    "id": 24500,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "1436:6:72",
                    "memberName": "_depth",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 24422,
                    "src": "1431:11:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1409:33:72"
                },
                {
                  "assignments": [
                    24506
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 24506,
                      "mutability": "mutable",
                      "name": "ins",
                      "nameLocation": "1469:3:72",
                      "nodeType": "VariableDeclaration",
                      "scope": 24921,
                      "src": "1452:20:72",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 24504,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "1452:7:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 24505,
                        "nodeType": "ArrayTypeName",
                        "src": "1452:9:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 24509,
                  "initialValue": {
                    "expression": {
                      "id": 24507,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 24482,
                      "src": "1475:4:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                        "typeString": "struct StdStorage storage pointer"
                      }
                    },
                    "id": 24508,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "1480:5:72",
                    "memberName": "_keys",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 24418,
                    "src": "1475:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                      "typeString": "bytes32[] storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1452:33:72"
                },
                {
                  "condition": {
                    "baseExpression": {
                      "baseExpression": {
                        "baseExpression": {
                          "expression": {
                            "id": 24510,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 24482,
                            "src": "1536:4:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                              "typeString": "struct StdStorage storage pointer"
                            }
                          },
                          "id": 24511,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1541:5:72",
                          "memberName": "finds",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 24415,
                          "src": "1536:10:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$_$",
                            "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => bool)))"
                          }
                        },
                        "id": 24513,
                        "indexExpression": {
                          "id": 24512,
                          "name": "who",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 24488,
                          "src": "1547:3:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1536:15:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                          "typeString": "mapping(bytes4 => mapping(bytes32 => bool))"
                        }
                      },
                      "id": 24515,
                      "indexExpression": {
                        "id": 24514,
                        "name": "fsig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24493,
                        "src": "1552:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1536:21:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                        "typeString": "mapping(bytes32 => bool)"
                      }
                    },
                    "id": 24523,
                    "indexExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 24519,
                              "name": "ins",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 24506,
                              "src": "1585:3:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                "typeString": "bytes32[] memory"
                              }
                            },
                            {
                              "id": 24520,
                              "name": "field_depth",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 24498,
                              "src": "1590:11:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                "typeString": "bytes32[] memory"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "id": 24517,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "1568:3:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 24518,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "1572:12:72",
                            "memberName": "encodePacked",
                            "nodeType": "MemberAccess",
                            "src": "1568:16:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 24521,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1568:34:72",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 24516,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "1558:9:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 24522,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1558:45:72",
                      "tryCall": false,
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
                    "src": "1536:68:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 24540,
                  "nodeType": "IfStatement",
                  "src": "1532:174:72",
                  "trueBody": {
                    "id": 24539,
                    "nodeType": "Block",
                    "src": "1606:100:72",
                    "statements": [
                      {
                        "expression": {
                          "baseExpression": {
                            "baseExpression": {
                              "baseExpression": {
                                "expression": {
                                  "id": 24524,
                                  "name": "self",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 24482,
                                  "src": "1627:4:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                                    "typeString": "struct StdStorage storage pointer"
                                  }
                                },
                                "id": 24525,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "1632:5:72",
                                "memberName": "slots",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 24407,
                                "src": "1627:10:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$_$",
                                  "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => uint256)))"
                                }
                              },
                              "id": 24527,
                              "indexExpression": {
                                "id": 24526,
                                "name": "who",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 24488,
                                "src": "1638:3:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "1627:15:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$",
                                "typeString": "mapping(bytes4 => mapping(bytes32 => uint256))"
                              }
                            },
                            "id": 24529,
                            "indexExpression": {
                              "id": 24528,
                              "name": "fsig",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 24493,
                              "src": "1643:4:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes4",
                                "typeString": "bytes4"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1627:21:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                              "typeString": "mapping(bytes32 => uint256)"
                            }
                          },
                          "id": 24537,
                          "indexExpression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 24533,
                                    "name": "ins",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 24506,
                                    "src": "1676:3:72",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                      "typeString": "bytes32[] memory"
                                    }
                                  },
                                  {
                                    "id": 24534,
                                    "name": "field_depth",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 24498,
                                    "src": "1681:11:72",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                      "typeString": "bytes32[] memory"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "expression": {
                                    "id": 24531,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -1,
                                    "src": "1659:3:72",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 24532,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberLocation": "1663:12:72",
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "src": "1659:16:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 24535,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1659:34:72",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "id": 24530,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -8,
                              "src": "1649:9:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                "typeString": "function (bytes memory) pure returns (bytes32)"
                              }
                            },
                            "id": 24536,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1649:45:72",
                            "tryCall": false,
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
                          "src": "1627:68:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 24486,
                        "id": 24538,
                        "nodeType": "Return",
                        "src": "1620:75:72"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    24542
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 24542,
                      "mutability": "mutable",
                      "name": "cald",
                      "nameLocation": "1728:4:72",
                      "nodeType": "VariableDeclaration",
                      "scope": 24921,
                      "src": "1715:17:72",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 24541,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "1715:5:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 24550,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 24545,
                        "name": "fsig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24493,
                        "src": "1752:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 24547,
                            "name": "ins",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 24506,
                            "src": "1766:3:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                              "typeString": "bytes32[] memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                              "typeString": "bytes32[] memory"
                            }
                          ],
                          "id": 24546,
                          "name": "flatten",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25318,
                          "src": "1758:7:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_array$_t_bytes32_$dyn_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes32[] memory) pure returns (bytes memory)"
                          }
                        },
                        "id": 24548,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1758:12:72",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "id": 24543,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -1,
                        "src": "1735:3:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 24544,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "1739:12:72",
                      "memberName": "encodePacked",
                      "nodeType": "MemberAccess",
                      "src": "1735:16:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function () pure returns (bytes memory)"
                      }
                    },
                    "id": 24549,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1735:36:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1715:56:72"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 24551,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24460,
                        "src": "1781:2:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Vm_$29527",
                          "typeString": "contract Vm"
                        }
                      },
                      "id": 24553,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1784:6:72",
                      "memberName": "record",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28365,
                      "src": "1781:9:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$__$returns$__$",
                        "typeString": "function () external"
                      }
                    },
                    "id": 24554,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1781:11:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 24555,
                  "nodeType": "ExpressionStatement",
                  "src": "1781:11:72"
                },
                {
                  "assignments": [
                    24557
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 24557,
                      "mutability": "mutable",
                      "name": "fdat",
                      "nameLocation": "1810:4:72",
                      "nodeType": "VariableDeclaration",
                      "scope": 24921,
                      "src": "1802:12:72",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 24556,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "1802:7:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 24558,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1802:12:72"
                },
                {
                  "id": 24575,
                  "nodeType": "Block",
                  "src": "1824:128:72",
                  "statements": [
                    {
                      "assignments": [
                        null,
                        24560
                      ],
                      "declarations": [
                        null,
                        {
                          "constant": false,
                          "id": 24560,
                          "mutability": "mutable",
                          "name": "rdat",
                          "nameLocation": "1854:4:72",
                          "nodeType": "VariableDeclaration",
                          "scope": 24575,
                          "src": "1841:17:72",
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes"
                          },
                          "typeName": {
                            "id": 24559,
                            "name": "bytes",
                            "nodeType": "ElementaryTypeName",
                            "src": "1841:5:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_storage_ptr",
                              "typeString": "bytes"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 24565,
                      "initialValue": {
                        "arguments": [
                          {
                            "id": 24563,
                            "name": "cald",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 24542,
                            "src": "1877:4:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "expression": {
                            "id": 24561,
                            "name": "who",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 24488,
                            "src": "1862:3:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 24562,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1866:10:72",
                          "memberName": "staticcall",
                          "nodeType": "MemberAccess",
                          "src": "1862:14:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes memory) view returns (bool,bytes memory)"
                          }
                        },
                        "id": 24564,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1862:20:72",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                          "typeString": "tuple(bool,bytes memory)"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "1838:44:72"
                    },
                    {
                      "expression": {
                        "id": 24573,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 24566,
                          "name": "fdat",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 24557,
                          "src": "1896:4:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "arguments": [
                            {
                              "id": 24568,
                              "name": "rdat",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 24560,
                              "src": "1918:4:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 24571,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "hexValue": "3332",
                                "id": 24569,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1924:2:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_32_by_1",
                                  "typeString": "int_const 32"
                                },
                                "value": "32"
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "id": 24570,
                                "name": "field_depth",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 24498,
                                "src": "1929:11:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "1924:16:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 24567,
                            "name": "bytesToBytes32",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25277,
                            "src": "1903:14:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$_t_uint256_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory,uint256) pure returns (bytes32)"
                            }
                          },
                          "id": 24572,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1903:38:72",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "src": "1896:45:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "id": 24574,
                      "nodeType": "ExpressionStatement",
                      "src": "1896:45:72"
                    }
                  ]
                },
                {
                  "assignments": [
                    24580,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 24580,
                      "mutability": "mutable",
                      "name": "reads",
                      "nameLocation": "1980:5:72",
                      "nodeType": "VariableDeclaration",
                      "scope": 24921,
                      "src": "1963:22:72",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 24578,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "1963:7:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 24579,
                        "nodeType": "ArrayTypeName",
                        "src": "1963:9:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 24588,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 24585,
                            "name": "who",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 24488,
                            "src": "2010:3:72",
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
                          "id": 24584,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2002:7:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 24583,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2002:7:72",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 24586,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2002:12:72",
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
                      "expression": {
                        "id": 24581,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24460,
                        "src": "1990:2:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Vm_$29527",
                          "typeString": "contract Vm"
                        }
                      },
                      "id": 24582,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1993:8:72",
                      "memberName": "accesses",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28376,
                      "src": "1990:11:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                        "typeString": "function (address) external returns (bytes32[] memory,bytes32[] memory)"
                      }
                    },
                    "id": 24587,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1990:25:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_array$_t_bytes32_$dyn_memory_ptr_$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                      "typeString": "tuple(bytes32[] memory,bytes32[] memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1962:53:72"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 24592,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 24589,
                        "name": "reads",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24580,
                        "src": "2029:5:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                          "typeString": "bytes32[] memory"
                        }
                      },
                      "id": 24590,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2035:6:72",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "2029:12:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 24591,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2045:1:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "2029:17:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 24694,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 24691,
                          "name": "reads",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 24580,
                          "src": "2786:5:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                            "typeString": "bytes32[] memory"
                          }
                        },
                        "id": 24692,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2792:6:72",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "2786:12:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "hexValue": "31",
                        "id": 24693,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2801:1:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "2786:16:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "id": 24869,
                      "nodeType": "Block",
                      "src": "3986:99:72",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "hexValue": "73746453746f726167652066696e642853746453746f72616765293a204e6f2073746f726167652075736520646574656374656420666f72207461726765742e",
                                "id": 24866,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4007:66:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_328ff448bebe6b9a52a670e66989b0a23c94fd0cbd86c30e5432c6ddc5340283",
                                  "typeString": "literal_string \"stdStorage find(StdStorage): No storage use detected for target.\""
                                },
                                "value": "stdStorage find(StdStorage): No storage use detected for target."
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_328ff448bebe6b9a52a670e66989b0a23c94fd0cbd86c30e5432c6ddc5340283",
                                  "typeString": "literal_string \"stdStorage find(StdStorage): No storage use detected for target.\""
                                }
                              ],
                              "id": 24865,
                              "name": "revert",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [
                                -19,
                                -19
                              ],
                              "referencedDeclaration": -19,
                              "src": "4000:6:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                                "typeString": "function (string memory) pure"
                              }
                            },
                            "id": 24867,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4000:74:72",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 24868,
                          "nodeType": "ExpressionStatement",
                          "src": "4000:74:72"
                        }
                      ]
                    },
                    "id": 24870,
                    "nodeType": "IfStatement",
                    "src": "2782:1303:72",
                    "trueBody": {
                      "id": 24864,
                      "nodeType": "Block",
                      "src": "2804:1176:72",
                      "statements": [
                        {
                          "body": {
                            "id": 24862,
                            "nodeType": "Block",
                            "src": "2861:1109:72",
                            "statements": [
                              {
                                "assignments": [
                                  24707
                                ],
                                "declarations": [
                                  {
                                    "constant": false,
                                    "id": 24707,
                                    "mutability": "mutable",
                                    "name": "prev",
                                    "nameLocation": "2887:4:72",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24862,
                                    "src": "2879:12:72",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    },
                                    "typeName": {
                                      "id": 24706,
                                      "name": "bytes32",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "2879:7:72",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    "visibility": "internal"
                                  }
                                ],
                                "id": 24715,
                                "initialValue": {
                                  "arguments": [
                                    {
                                      "id": 24710,
                                      "name": "who",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 24488,
                                      "src": "2902:3:72",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "baseExpression": {
                                        "id": 24711,
                                        "name": "reads",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 24580,
                                        "src": "2907:5:72",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                          "typeString": "bytes32[] memory"
                                        }
                                      },
                                      "id": 24713,
                                      "indexExpression": {
                                        "id": 24712,
                                        "name": "i",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 24696,
                                        "src": "2913:1:72",
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
                                      "src": "2907:8:72",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      },
                                      {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    ],
                                    "expression": {
                                      "id": 24708,
                                      "name": "vm",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 24460,
                                      "src": "2894:2:72",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_Vm_$29527",
                                        "typeString": "contract Vm"
                                      }
                                    },
                                    "id": 24709,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "2897:4:72",
                                    "memberName": "load",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 28047,
                                    "src": "2894:7:72",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_external_view$_t_address_$_t_bytes32_$returns$_t_bytes32_$",
                                      "typeString": "function (address,bytes32) view external returns (bytes32)"
                                    }
                                  },
                                  "id": 24714,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2894:22:72",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                },
                                "nodeType": "VariableDeclarationStatement",
                                "src": "2879:37:72"
                              },
                              {
                                "condition": {
                                  "commonType": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  },
                                  "id": 24721,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 24716,
                                    "name": "prev",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 24707,
                                    "src": "2938:4:72",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "==",
                                  "rightExpression": {
                                    "arguments": [
                                      {
                                        "hexValue": "30",
                                        "id": 24719,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "2954:1:72",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        },
                                        "value": "0"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "id": 24718,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "2946:7:72",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_bytes32_$",
                                        "typeString": "type(bytes32)"
                                      },
                                      "typeName": {
                                        "id": 24717,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2946:7:72",
                                        "typeDescriptions": {}
                                      }
                                    },
                                    "id": 24720,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2946:10:72",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  },
                                  "src": "2938:18:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "id": 24733,
                                "nodeType": "IfStatement",
                                "src": "2934:114:72",
                                "trueBody": {
                                  "id": 24732,
                                  "nodeType": "Block",
                                  "src": "2958:90:72",
                                  "statements": [
                                    {
                                      "eventCall": {
                                        "arguments": [
                                          {
                                            "id": 24723,
                                            "name": "who",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24488,
                                            "src": "3006:3:72",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            }
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "baseExpression": {
                                                  "id": 24726,
                                                  "name": "reads",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 24580,
                                                  "src": "3019:5:72",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                    "typeString": "bytes32[] memory"
                                                  }
                                                },
                                                "id": 24728,
                                                "indexExpression": {
                                                  "id": 24727,
                                                  "name": "i",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 24696,
                                                  "src": "3025:1:72",
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
                                                "src": "3019:8:72",
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
                                              "id": 24725,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "nodeType": "ElementaryTypeNameExpression",
                                              "src": "3011:7:72",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_uint256_$",
                                                "typeString": "type(uint256)"
                                              },
                                              "typeName": {
                                                "id": 24724,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3011:7:72",
                                                "typeDescriptions": {}
                                              }
                                            },
                                            "id": 24729,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3011:17:72",
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
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            },
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "id": 24722,
                                          "name": "WARNING_UninitedSlot",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 24443,
                                          "src": "2985:20:72",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                            "typeString": "function (address,uint256)"
                                          }
                                        },
                                        "id": 24730,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2985:44:72",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_tuple$__$",
                                          "typeString": "tuple()"
                                        }
                                      },
                                      "id": 24731,
                                      "nodeType": "EmitStatement",
                                      "src": "2980:49:72"
                                    }
                                  ]
                                }
                              },
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "id": 24737,
                                      "name": "who",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 24488,
                                      "src": "3099:3:72",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "baseExpression": {
                                        "id": 24738,
                                        "name": "reads",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 24580,
                                        "src": "3104:5:72",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                          "typeString": "bytes32[] memory"
                                        }
                                      },
                                      "id": 24740,
                                      "indexExpression": {
                                        "id": 24739,
                                        "name": "i",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 24696,
                                        "src": "3110:1:72",
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
                                      "src": "3104:8:72",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "hexValue": "1337",
                                          "id": 24743,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "kind": "hexString",
                                          "lValueRequested": false,
                                          "nodeType": "Literal",
                                          "src": "3122:9:72",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_stringliteral_2636a8beb2c41b8ccafa9a55a5a5e333892a83b491df3a67d2768946a9f9c6dc",
                                            "typeString": "literal_string hex\"1337\""
                                          },
                                          "value": "\u00137"
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_stringliteral_2636a8beb2c41b8ccafa9a55a5a5e333892a83b491df3a67d2768946a9f9c6dc",
                                            "typeString": "literal_string hex\"1337\""
                                          }
                                        ],
                                        "id": 24742,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "3114:7:72",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_bytes32_$",
                                          "typeString": "type(bytes32)"
                                        },
                                        "typeName": {
                                          "id": 24741,
                                          "name": "bytes32",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "3114:7:72",
                                          "typeDescriptions": {}
                                        }
                                      },
                                      "id": 24744,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "3114:18:72",
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
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      },
                                      {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      },
                                      {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    ],
                                    "expression": {
                                      "id": 24734,
                                      "name": "vm",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 24460,
                                      "src": "3090:2:72",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_Vm_$29527",
                                        "typeString": "contract Vm"
                                      }
                                    },
                                    "id": 24736,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "3093:5:72",
                                    "memberName": "store",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 29101,
                                    "src": "3090:8:72",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_bytes32_$_t_bytes32_$returns$__$",
                                      "typeString": "function (address,bytes32,bytes32) external"
                                    }
                                  },
                                  "id": 24745,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3090:43:72",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 24746,
                                "nodeType": "ExpressionStatement",
                                "src": "3090:43:72"
                              },
                              {
                                "assignments": [
                                  24748
                                ],
                                "declarations": [
                                  {
                                    "constant": false,
                                    "id": 24748,
                                    "mutability": "mutable",
                                    "name": "success",
                                    "nameLocation": "3156:7:72",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24862,
                                    "src": "3151:12:72",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    "typeName": {
                                      "id": 24747,
                                      "name": "bool",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "3151:4:72",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    },
                                    "visibility": "internal"
                                  }
                                ],
                                "id": 24749,
                                "nodeType": "VariableDeclarationStatement",
                                "src": "3151:12:72"
                              },
                              {
                                "assignments": [
                                  24751
                                ],
                                "declarations": [
                                  {
                                    "constant": false,
                                    "id": 24751,
                                    "mutability": "mutable",
                                    "name": "rdat",
                                    "nameLocation": "3194:4:72",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24862,
                                    "src": "3181:17:72",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes"
                                    },
                                    "typeName": {
                                      "id": 24750,
                                      "name": "bytes",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "3181:5:72",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_storage_ptr",
                                        "typeString": "bytes"
                                      }
                                    },
                                    "visibility": "internal"
                                  }
                                ],
                                "id": 24752,
                                "nodeType": "VariableDeclarationStatement",
                                "src": "3181:17:72"
                              },
                              {
                                "id": 24771,
                                "nodeType": "Block",
                                "src": "3216:146:72",
                                "statements": [
                                  {
                                    "expression": {
                                      "id": 24760,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftHandSide": {
                                        "components": [
                                          {
                                            "id": 24753,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24748,
                                            "src": "3239:7:72",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_bool",
                                              "typeString": "bool"
                                            }
                                          },
                                          {
                                            "id": 24754,
                                            "name": "rdat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24751,
                                            "src": "3248:4:72",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_bytes_memory_ptr",
                                              "typeString": "bytes memory"
                                            }
                                          }
                                        ],
                                        "id": 24755,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": true,
                                        "nodeType": "TupleExpression",
                                        "src": "3238:15:72",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                          "typeString": "tuple(bool,bytes memory)"
                                        }
                                      },
                                      "nodeType": "Assignment",
                                      "operator": "=",
                                      "rightHandSide": {
                                        "arguments": [
                                          {
                                            "id": 24758,
                                            "name": "cald",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24542,
                                            "src": "3271:4:72",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_bytes_memory_ptr",
                                              "typeString": "bytes memory"
                                            }
                                          }
                                        ],
                                        "expression": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_bytes_memory_ptr",
                                              "typeString": "bytes memory"
                                            }
                                          ],
                                          "expression": {
                                            "id": 24756,
                                            "name": "who",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24488,
                                            "src": "3256:3:72",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            }
                                          },
                                          "id": 24757,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "3260:10:72",
                                          "memberName": "staticcall",
                                          "nodeType": "MemberAccess",
                                          "src": "3256:14:72",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "function (bytes memory) view returns (bool,bytes memory)"
                                          }
                                        },
                                        "id": 24759,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3256:20:72",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                          "typeString": "tuple(bool,bytes memory)"
                                        }
                                      },
                                      "src": "3238:38:72",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_tuple$__$",
                                        "typeString": "tuple()"
                                      }
                                    },
                                    "id": 24761,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3238:38:72"
                                  },
                                  {
                                    "expression": {
                                      "id": 24769,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftHandSide": {
                                        "id": 24762,
                                        "name": "fdat",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 24557,
                                        "src": "3298:4:72",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      },
                                      "nodeType": "Assignment",
                                      "operator": "=",
                                      "rightHandSide": {
                                        "arguments": [
                                          {
                                            "id": 24764,
                                            "name": "rdat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24751,
                                            "src": "3320:4:72",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_bytes_memory_ptr",
                                              "typeString": "bytes memory"
                                            }
                                          },
                                          {
                                            "commonType": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            },
                                            "id": 24767,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                              "hexValue": "3332",
                                              "id": 24765,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "kind": "number",
                                              "lValueRequested": false,
                                              "nodeType": "Literal",
                                              "src": "3326:2:72",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_rational_32_by_1",
                                                "typeString": "int_const 32"
                                              },
                                              "value": "32"
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "*",
                                            "rightExpression": {
                                              "id": 24766,
                                              "name": "field_depth",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 24498,
                                              "src": "3331:11:72",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              }
                                            },
                                            "src": "3326:16:72",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          }
                                        ],
                                        "expression": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_bytes_memory_ptr",
                                              "typeString": "bytes memory"
                                            },
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "id": 24763,
                                          "name": "bytesToBytes32",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 25277,
                                          "src": "3305:14:72",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$_t_uint256_$returns$_t_bytes32_$",
                                            "typeString": "function (bytes memory,uint256) pure returns (bytes32)"
                                          }
                                        },
                                        "id": 24768,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3305:38:72",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      },
                                      "src": "3298:45:72",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    "id": 24770,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3298:45:72"
                                  }
                                ]
                              },
                              {
                                "condition": {
                                  "commonType": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  "id": 24779,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 24772,
                                    "name": "success",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 24748,
                                    "src": "3384:7:72",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "&&",
                                  "rightExpression": {
                                    "commonType": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    },
                                    "id": 24778,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "id": 24773,
                                      "name": "fdat",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 24557,
                                      "src": "3395:4:72",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "==",
                                    "rightExpression": {
                                      "arguments": [
                                        {
                                          "hexValue": "1337",
                                          "id": 24776,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "kind": "hexString",
                                          "lValueRequested": false,
                                          "nodeType": "Literal",
                                          "src": "3411:9:72",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_stringliteral_2636a8beb2c41b8ccafa9a55a5a5e333892a83b491df3a67d2768946a9f9c6dc",
                                            "typeString": "literal_string hex\"1337\""
                                          },
                                          "value": "\u00137"
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_stringliteral_2636a8beb2c41b8ccafa9a55a5a5e333892a83b491df3a67d2768946a9f9c6dc",
                                            "typeString": "literal_string hex\"1337\""
                                          }
                                        ],
                                        "id": 24775,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "3403:7:72",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_bytes32_$",
                                          "typeString": "type(bytes32)"
                                        },
                                        "typeName": {
                                          "id": 24774,
                                          "name": "bytes32",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "3403:7:72",
                                          "typeDescriptions": {}
                                        }
                                      },
                                      "id": 24777,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "3403:18:72",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    "src": "3395:26:72",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  },
                                  "src": "3384:37:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "id": 24851,
                                "nodeType": "IfStatement",
                                "src": "3380:529:72",
                                "trueBody": {
                                  "id": 24850,
                                  "nodeType": "Block",
                                  "src": "3423:486:72",
                                  "statements": [
                                    {
                                      "eventCall": {
                                        "arguments": [
                                          {
                                            "id": 24781,
                                            "name": "who",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24488,
                                            "src": "3529:3:72",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            }
                                          },
                                          {
                                            "id": 24782,
                                            "name": "fsig",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24493,
                                            "src": "3534:4:72",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_bytes4",
                                              "typeString": "bytes4"
                                            }
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "arguments": [
                                                  {
                                                    "id": 24786,
                                                    "name": "ins",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 24506,
                                                    "src": "3567:3:72",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                      "typeString": "bytes32[] memory"
                                                    }
                                                  },
                                                  {
                                                    "id": 24787,
                                                    "name": "field_depth",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 24498,
                                                    "src": "3572:11:72",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_uint256",
                                                      "typeString": "uint256"
                                                    }
                                                  }
                                                ],
                                                "expression": {
                                                  "argumentTypes": [
                                                    {
                                                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                      "typeString": "bytes32[] memory"
                                                    },
                                                    {
                                                      "typeIdentifier": "t_uint256",
                                                      "typeString": "uint256"
                                                    }
                                                  ],
                                                  "expression": {
                                                    "id": 24784,
                                                    "name": "abi",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -1,
                                                    "src": "3550:3:72",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_magic_abi",
                                                      "typeString": "abi"
                                                    }
                                                  },
                                                  "id": 24785,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "lValueRequested": false,
                                                  "memberLocation": "3554:12:72",
                                                  "memberName": "encodePacked",
                                                  "nodeType": "MemberAccess",
                                                  "src": "3550:16:72",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                    "typeString": "function () pure returns (bytes memory)"
                                                  }
                                                },
                                                "id": 24788,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3550:34:72",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_bytes_memory_ptr",
                                                  "typeString": "bytes memory"
                                                }
                                              }
                                            ],
                                            "expression": {
                                              "argumentTypes": [
                                                {
                                                  "typeIdentifier": "t_bytes_memory_ptr",
                                                  "typeString": "bytes memory"
                                                }
                                              ],
                                              "id": 24783,
                                              "name": "keccak256",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": -8,
                                              "src": "3540:9:72",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                              }
                                            },
                                            "id": 24789,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3540:45:72",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_bytes32",
                                              "typeString": "bytes32"
                                            }
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "baseExpression": {
                                                  "id": 24792,
                                                  "name": "reads",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 24580,
                                                  "src": "3595:5:72",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                    "typeString": "bytes32[] memory"
                                                  }
                                                },
                                                "id": 24794,
                                                "indexExpression": {
                                                  "id": 24793,
                                                  "name": "i",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 24696,
                                                  "src": "3601:1:72",
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
                                                "src": "3595:8:72",
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
                                              "id": 24791,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "nodeType": "ElementaryTypeNameExpression",
                                              "src": "3587:7:72",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_uint256_$",
                                                "typeString": "type(uint256)"
                                              },
                                              "typeName": {
                                                "id": 24790,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3587:7:72",
                                                "typeDescriptions": {}
                                              }
                                            },
                                            "id": 24795,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3587:17:72",
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
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            },
                                            {
                                              "typeIdentifier": "t_bytes4",
                                              "typeString": "bytes4"
                                            },
                                            {
                                              "typeIdentifier": "t_bytes32",
                                              "typeString": "bytes32"
                                            },
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "id": 24780,
                                          "name": "SlotFound",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 24437,
                                          "src": "3519:9:72",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_bytes4_$_t_bytes32_$_t_uint256_$returns$__$",
                                            "typeString": "function (address,bytes4,bytes32,uint256)"
                                          }
                                        },
                                        "id": 24796,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3519:86:72",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_tuple$__$",
                                          "typeString": "tuple()"
                                        }
                                      },
                                      "id": 24797,
                                      "nodeType": "EmitStatement",
                                      "src": "3514:91:72"
                                    },
                                    {
                                      "expression": {
                                        "id": 24819,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                          "baseExpression": {
                                            "baseExpression": {
                                              "baseExpression": {
                                                "expression": {
                                                  "id": 24798,
                                                  "name": "self",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 24482,
                                                  "src": "3627:4:72",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                                                    "typeString": "struct StdStorage storage pointer"
                                                  }
                                                },
                                                "id": 24809,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "3632:5:72",
                                                "memberName": "slots",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 24407,
                                                "src": "3627:10:72",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$_$",
                                                  "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => uint256)))"
                                                }
                                              },
                                              "id": 24810,
                                              "indexExpression": {
                                                "id": 24800,
                                                "name": "who",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24488,
                                                "src": "3638:3:72",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_address",
                                                  "typeString": "address"
                                                }
                                              },
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "nodeType": "IndexAccess",
                                              "src": "3627:15:72",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$",
                                                "typeString": "mapping(bytes4 => mapping(bytes32 => uint256))"
                                              }
                                            },
                                            "id": 24811,
                                            "indexExpression": {
                                              "id": 24801,
                                              "name": "fsig",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 24493,
                                              "src": "3643:4:72",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_bytes4",
                                                "typeString": "bytes4"
                                              }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "IndexAccess",
                                            "src": "3627:21:72",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                              "typeString": "mapping(bytes32 => uint256)"
                                            }
                                          },
                                          "id": 24812,
                                          "indexExpression": {
                                            "arguments": [
                                              {
                                                "arguments": [
                                                  {
                                                    "id": 24805,
                                                    "name": "ins",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 24506,
                                                    "src": "3676:3:72",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                      "typeString": "bytes32[] memory"
                                                    }
                                                  },
                                                  {
                                                    "id": 24806,
                                                    "name": "field_depth",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 24498,
                                                    "src": "3681:11:72",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_uint256",
                                                      "typeString": "uint256"
                                                    }
                                                  }
                                                ],
                                                "expression": {
                                                  "argumentTypes": [
                                                    {
                                                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                      "typeString": "bytes32[] memory"
                                                    },
                                                    {
                                                      "typeIdentifier": "t_uint256",
                                                      "typeString": "uint256"
                                                    }
                                                  ],
                                                  "expression": {
                                                    "id": 24803,
                                                    "name": "abi",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -1,
                                                    "src": "3659:3:72",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_magic_abi",
                                                      "typeString": "abi"
                                                    }
                                                  },
                                                  "id": 24804,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "lValueRequested": false,
                                                  "memberLocation": "3663:12:72",
                                                  "memberName": "encodePacked",
                                                  "nodeType": "MemberAccess",
                                                  "src": "3659:16:72",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                    "typeString": "function () pure returns (bytes memory)"
                                                  }
                                                },
                                                "id": 24807,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3659:34:72",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_bytes_memory_ptr",
                                                  "typeString": "bytes memory"
                                                }
                                              }
                                            ],
                                            "expression": {
                                              "argumentTypes": [
                                                {
                                                  "typeIdentifier": "t_bytes_memory_ptr",
                                                  "typeString": "bytes memory"
                                                }
                                              ],
                                              "id": 24802,
                                              "name": "keccak256",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": -8,
                                              "src": "3649:9:72",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                              }
                                            },
                                            "id": 24808,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3649:45:72",
                                            "tryCall": false,
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
                                          "src": "3627:68:72",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                          "arguments": [
                                            {
                                              "baseExpression": {
                                                "id": 24815,
                                                "name": "reads",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24580,
                                                "src": "3706:5:72",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                  "typeString": "bytes32[] memory"
                                                }
                                              },
                                              "id": 24817,
                                              "indexExpression": {
                                                "id": 24816,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24696,
                                                "src": "3712:1:72",
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
                                              "src": "3706:8:72",
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
                                            "id": 24814,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "3698:7:72",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_type$_t_uint256_$",
                                              "typeString": "type(uint256)"
                                            },
                                            "typeName": {
                                              "id": 24813,
                                              "name": "uint256",
                                              "nodeType": "ElementaryTypeName",
                                              "src": "3698:7:72",
                                              "typeDescriptions": {}
                                            }
                                          },
                                          "id": 24818,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "typeConversion",
                                          "lValueRequested": false,
                                          "nameLocations": [],
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "3698:17:72",
                                          "tryCall": false,
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "src": "3627:88:72",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "id": 24820,
                                      "nodeType": "ExpressionStatement",
                                      "src": "3627:88:72"
                                    },
                                    {
                                      "expression": {
                                        "id": 24837,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                          "baseExpression": {
                                            "baseExpression": {
                                              "baseExpression": {
                                                "expression": {
                                                  "id": 24821,
                                                  "name": "self",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 24482,
                                                  "src": "3737:4:72",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                                                    "typeString": "struct StdStorage storage pointer"
                                                  }
                                                },
                                                "id": 24832,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "3742:5:72",
                                                "memberName": "finds",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 24415,
                                                "src": "3737:10:72",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$_$",
                                                  "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => bool)))"
                                                }
                                              },
                                              "id": 24833,
                                              "indexExpression": {
                                                "id": 24823,
                                                "name": "who",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24488,
                                                "src": "3748:3:72",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_address",
                                                  "typeString": "address"
                                                }
                                              },
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "nodeType": "IndexAccess",
                                              "src": "3737:15:72",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                                                "typeString": "mapping(bytes4 => mapping(bytes32 => bool))"
                                              }
                                            },
                                            "id": 24834,
                                            "indexExpression": {
                                              "id": 24824,
                                              "name": "fsig",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 24493,
                                              "src": "3753:4:72",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_bytes4",
                                                "typeString": "bytes4"
                                              }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "IndexAccess",
                                            "src": "3737:21:72",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                                              "typeString": "mapping(bytes32 => bool)"
                                            }
                                          },
                                          "id": 24835,
                                          "indexExpression": {
                                            "arguments": [
                                              {
                                                "arguments": [
                                                  {
                                                    "id": 24828,
                                                    "name": "ins",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 24506,
                                                    "src": "3786:3:72",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                      "typeString": "bytes32[] memory"
                                                    }
                                                  },
                                                  {
                                                    "id": 24829,
                                                    "name": "field_depth",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 24498,
                                                    "src": "3791:11:72",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_uint256",
                                                      "typeString": "uint256"
                                                    }
                                                  }
                                                ],
                                                "expression": {
                                                  "argumentTypes": [
                                                    {
                                                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                      "typeString": "bytes32[] memory"
                                                    },
                                                    {
                                                      "typeIdentifier": "t_uint256",
                                                      "typeString": "uint256"
                                                    }
                                                  ],
                                                  "expression": {
                                                    "id": 24826,
                                                    "name": "abi",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -1,
                                                    "src": "3769:3:72",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_magic_abi",
                                                      "typeString": "abi"
                                                    }
                                                  },
                                                  "id": 24827,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "lValueRequested": false,
                                                  "memberLocation": "3773:12:72",
                                                  "memberName": "encodePacked",
                                                  "nodeType": "MemberAccess",
                                                  "src": "3769:16:72",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                    "typeString": "function () pure returns (bytes memory)"
                                                  }
                                                },
                                                "id": 24830,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3769:34:72",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_bytes_memory_ptr",
                                                  "typeString": "bytes memory"
                                                }
                                              }
                                            ],
                                            "expression": {
                                              "argumentTypes": [
                                                {
                                                  "typeIdentifier": "t_bytes_memory_ptr",
                                                  "typeString": "bytes memory"
                                                }
                                              ],
                                              "id": 24825,
                                              "name": "keccak256",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": -8,
                                              "src": "3759:9:72",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                              }
                                            },
                                            "id": 24831,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3759:45:72",
                                            "tryCall": false,
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
                                          "src": "3737:68:72",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                          }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                          "hexValue": "74727565",
                                          "id": 24836,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "kind": "bool",
                                          "lValueRequested": false,
                                          "nodeType": "Literal",
                                          "src": "3808:4:72",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                          },
                                          "value": "true"
                                        },
                                        "src": "3737:75:72",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                        }
                                      },
                                      "id": 24838,
                                      "nodeType": "ExpressionStatement",
                                      "src": "3737:75:72"
                                    },
                                    {
                                      "expression": {
                                        "arguments": [
                                          {
                                            "id": 24842,
                                            "name": "who",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24488,
                                            "src": "3843:3:72",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            }
                                          },
                                          {
                                            "baseExpression": {
                                              "id": 24843,
                                              "name": "reads",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 24580,
                                              "src": "3848:5:72",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                "typeString": "bytes32[] memory"
                                              }
                                            },
                                            "id": 24845,
                                            "indexExpression": {
                                              "id": 24844,
                                              "name": "i",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 24696,
                                              "src": "3854:1:72",
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
                                            "src": "3848:8:72",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_bytes32",
                                              "typeString": "bytes32"
                                            }
                                          },
                                          {
                                            "id": 24846,
                                            "name": "prev",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24707,
                                            "src": "3858:4:72",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_bytes32",
                                              "typeString": "bytes32"
                                            }
                                          }
                                        ],
                                        "expression": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            },
                                            {
                                              "typeIdentifier": "t_bytes32",
                                              "typeString": "bytes32"
                                            },
                                            {
                                              "typeIdentifier": "t_bytes32",
                                              "typeString": "bytes32"
                                            }
                                          ],
                                          "expression": {
                                            "id": 24839,
                                            "name": "vm",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24460,
                                            "src": "3834:2:72",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_contract$_Vm_$29527",
                                              "typeString": "contract Vm"
                                            }
                                          },
                                          "id": 24841,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "3837:5:72",
                                          "memberName": "store",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": 29101,
                                          "src": "3834:8:72",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_bytes32_$_t_bytes32_$returns$__$",
                                            "typeString": "function (address,bytes32,bytes32) external"
                                          }
                                        },
                                        "id": 24847,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3834:29:72",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_tuple$__$",
                                          "typeString": "tuple()"
                                        }
                                      },
                                      "id": 24848,
                                      "nodeType": "ExpressionStatement",
                                      "src": "3834:29:72"
                                    },
                                    {
                                      "id": 24849,
                                      "nodeType": "Break",
                                      "src": "3885:5:72"
                                    }
                                  ]
                                }
                              },
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "id": 24855,
                                      "name": "who",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 24488,
                                      "src": "3935:3:72",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "baseExpression": {
                                        "id": 24856,
                                        "name": "reads",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 24580,
                                        "src": "3940:5:72",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                          "typeString": "bytes32[] memory"
                                        }
                                      },
                                      "id": 24858,
                                      "indexExpression": {
                                        "id": 24857,
                                        "name": "i",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 24696,
                                        "src": "3946:1:72",
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
                                      "src": "3940:8:72",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    {
                                      "id": 24859,
                                      "name": "prev",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 24707,
                                      "src": "3950:4:72",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      },
                                      {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      },
                                      {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    ],
                                    "expression": {
                                      "id": 24852,
                                      "name": "vm",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 24460,
                                      "src": "3926:2:72",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_Vm_$29527",
                                        "typeString": "contract Vm"
                                      }
                                    },
                                    "id": 24854,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "3929:5:72",
                                    "memberName": "store",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 29101,
                                    "src": "3926:8:72",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_bytes32_$_t_bytes32_$returns$__$",
                                      "typeString": "function (address,bytes32,bytes32) external"
                                    }
                                  },
                                  "id": 24860,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3926:29:72",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 24861,
                                "nodeType": "ExpressionStatement",
                                "src": "3926:29:72"
                              }
                            ]
                          },
                          "condition": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 24702,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 24699,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 24696,
                              "src": "2838:1:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "<",
                            "rightExpression": {
                              "expression": {
                                "id": 24700,
                                "name": "reads",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 24580,
                                "src": "2842:5:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                  "typeString": "bytes32[] memory"
                                }
                              },
                              "id": 24701,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2848:6:72",
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "src": "2842:12:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2838:16:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "id": 24863,
                          "initializationExpression": {
                            "assignments": [
                              24696
                            ],
                            "declarations": [
                              {
                                "constant": false,
                                "id": 24696,
                                "mutability": "mutable",
                                "name": "i",
                                "nameLocation": "2831:1:72",
                                "nodeType": "VariableDeclaration",
                                "scope": 24863,
                                "src": "2823:9:72",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "typeName": {
                                  "id": 24695,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2823:7:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "visibility": "internal"
                              }
                            ],
                            "id": 24698,
                            "initialValue": {
                              "hexValue": "30",
                              "id": 24697,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2835:1:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "nodeType": "VariableDeclarationStatement",
                            "src": "2823:13:72"
                          },
                          "loopExpression": {
                            "expression": {
                              "id": 24704,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "++",
                              "prefix": false,
                              "src": "2856:3:72",
                              "subExpression": {
                                "id": 24703,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 24696,
                                "src": "2856:1:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 24705,
                            "nodeType": "ExpressionStatement",
                            "src": "2856:3:72"
                          },
                          "nodeType": "ForStatement",
                          "src": "2818:1152:72"
                        }
                      ]
                    }
                  },
                  "id": 24871,
                  "nodeType": "IfStatement",
                  "src": "2025:2060:72",
                  "trueBody": {
                    "id": 24690,
                    "nodeType": "Block",
                    "src": "2048:728:72",
                    "statements": [
                      {
                        "assignments": [
                          24594
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 24594,
                            "mutability": "mutable",
                            "name": "curr",
                            "nameLocation": "2070:4:72",
                            "nodeType": "VariableDeclaration",
                            "scope": 24690,
                            "src": "2062:12:72",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 24593,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "2062:7:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 24602,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 24597,
                              "name": "who",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 24488,
                              "src": "2085:3:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "baseExpression": {
                                "id": 24598,
                                "name": "reads",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 24580,
                                "src": "2090:5:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                  "typeString": "bytes32[] memory"
                                }
                              },
                              "id": 24600,
                              "indexExpression": {
                                "hexValue": "30",
                                "id": 24599,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2096:1:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2090:8:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "expression": {
                              "id": 24595,
                              "name": "vm",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 24460,
                              "src": "2077:2:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Vm_$29527",
                                "typeString": "contract Vm"
                              }
                            },
                            "id": 24596,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2080:4:72",
                            "memberName": "load",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 28047,
                            "src": "2077:7:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$_t_bytes32_$returns$_t_bytes32_$",
                              "typeString": "function (address,bytes32) view external returns (bytes32)"
                            }
                          },
                          "id": 24601,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2077:22:72",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2062:37:72"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "id": 24608,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 24603,
                            "name": "curr",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 24594,
                            "src": "2117:4:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "arguments": [
                              {
                                "hexValue": "30",
                                "id": 24606,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2133:1:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                }
                              ],
                              "id": 24605,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2125:7:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes32_$",
                                "typeString": "type(bytes32)"
                              },
                              "typeName": {
                                "id": 24604,
                                "name": "bytes32",
                                "nodeType": "ElementaryTypeName",
                                "src": "2125:7:72",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 24607,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2125:10:72",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "2117:18:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 24620,
                        "nodeType": "IfStatement",
                        "src": "2113:106:72",
                        "trueBody": {
                          "id": 24619,
                          "nodeType": "Block",
                          "src": "2137:82:72",
                          "statements": [
                            {
                              "eventCall": {
                                "arguments": [
                                  {
                                    "id": 24610,
                                    "name": "who",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 24488,
                                    "src": "2181:3:72",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "baseExpression": {
                                          "id": 24613,
                                          "name": "reads",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 24580,
                                          "src": "2194:5:72",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                            "typeString": "bytes32[] memory"
                                          }
                                        },
                                        "id": 24615,
                                        "indexExpression": {
                                          "hexValue": "30",
                                          "id": 24614,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "kind": "number",
                                          "lValueRequested": false,
                                          "nodeType": "Literal",
                                          "src": "2200:1:72",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_rational_0_by_1",
                                            "typeString": "int_const 0"
                                          },
                                          "value": "0"
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "2194:8:72",
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
                                      "id": 24612,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "2186:7:72",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_uint256_$",
                                        "typeString": "type(uint256)"
                                      },
                                      "typeName": {
                                        "id": 24611,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2186:7:72",
                                        "typeDescriptions": {}
                                      }
                                    },
                                    "id": 24616,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2186:17:72",
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
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "id": 24609,
                                  "name": "WARNING_UninitedSlot",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 24443,
                                  "src": "2160:20:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                    "typeString": "function (address,uint256)"
                                  }
                                },
                                "id": 24617,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2160:44:72",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 24618,
                              "nodeType": "EmitStatement",
                              "src": "2155:49:72"
                            }
                          ]
                        }
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "id": 24623,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 24621,
                            "name": "fdat",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 24557,
                            "src": "2236:4:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "id": 24622,
                            "name": "curr",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 24594,
                            "src": "2244:4:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "2236:12:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 24630,
                        "nodeType": "IfStatement",
                        "src": "2232:238:72",
                        "trueBody": {
                          "id": 24629,
                          "nodeType": "Block",
                          "src": "2250:220:72",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "hexValue": "66616c7365",
                                    "id": 24625,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "bool",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2297:5:72",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    "value": "false"
                                  },
                                  {
                                    "hexValue": "73746453746f726167652066696e642853746453746f72616765293a205061636b656420736c6f742e205468697320776f756c642063617573652064616e6765726f7573206f76657277726974696e6720616e642063757272656e746c792069736e277420737570706f727465642e",
                                    "id": 24626,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2324:113:72",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_4bfa78e02b745efea2b29d358f6dc28382f5209b1d2b2dbeb8ef0862e74440b3",
                                      "typeString": "literal_string \"stdStorage find(StdStorage): Packed slot. This would cause dangerous overwriting and currently isn't supported.\""
                                    },
                                    "value": "stdStorage find(StdStorage): Packed slot. This would cause dangerous overwriting and currently isn't supported."
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    {
                                      "typeIdentifier": "t_stringliteral_4bfa78e02b745efea2b29d358f6dc28382f5209b1d2b2dbeb8ef0862e74440b3",
                                      "typeString": "literal_string \"stdStorage find(StdStorage): Packed slot. This would cause dangerous overwriting and currently isn't supported.\""
                                    }
                                  ],
                                  "id": 24624,
                                  "name": "require",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [
                                    -18,
                                    -18
                                  ],
                                  "referencedDeclaration": -18,
                                  "src": "2268:7:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                    "typeString": "function (bool,string memory) pure"
                                  }
                                },
                                "id": 24627,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2268:187:72",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 24628,
                              "nodeType": "ExpressionStatement",
                              "src": "2268:187:72"
                            }
                          ]
                        }
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "id": 24632,
                              "name": "who",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 24488,
                              "src": "2498:3:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 24633,
                              "name": "fsig",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 24493,
                              "src": "2503:4:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes4",
                                "typeString": "bytes4"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "id": 24637,
                                      "name": "ins",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 24506,
                                      "src": "2536:3:72",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                        "typeString": "bytes32[] memory"
                                      }
                                    },
                                    {
                                      "id": 24638,
                                      "name": "field_depth",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 24498,
                                      "src": "2541:11:72",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                        "typeString": "bytes32[] memory"
                                      },
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "expression": {
                                      "id": 24635,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": -1,
                                      "src": "2519:3:72",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 24636,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberLocation": "2523:12:72",
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "src": "2519:16:72",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 24639,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2519:34:72",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                ],
                                "id": 24634,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "2509:9:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                              },
                              "id": 24640,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2509:45:72",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "baseExpression": {
                                    "id": 24643,
                                    "name": "reads",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 24580,
                                    "src": "2564:5:72",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                      "typeString": "bytes32[] memory"
                                    }
                                  },
                                  "id": 24645,
                                  "indexExpression": {
                                    "hexValue": "30",
                                    "id": 24644,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2570:1:72",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    },
                                    "value": "0"
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "2564:8:72",
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
                                "id": 24642,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2556:7:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": {
                                  "id": 24641,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2556:7:72",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 24646,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2556:17:72",
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
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_bytes4",
                                "typeString": "bytes4"
                              },
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 24631,
                            "name": "SlotFound",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 24437,
                            "src": "2488:9:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_bytes4_$_t_bytes32_$_t_uint256_$returns$__$",
                              "typeString": "function (address,bytes4,bytes32,uint256)"
                            }
                          },
                          "id": 24647,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2488:86:72",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 24648,
                        "nodeType": "EmitStatement",
                        "src": "2483:91:72"
                      },
                      {
                        "expression": {
                          "id": 24670,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "baseExpression": {
                                "baseExpression": {
                                  "expression": {
                                    "id": 24649,
                                    "name": "self",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 24482,
                                    "src": "2588:4:72",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                                      "typeString": "struct StdStorage storage pointer"
                                    }
                                  },
                                  "id": 24660,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "2593:5:72",
                                  "memberName": "slots",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 24407,
                                  "src": "2588:10:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$_$",
                                    "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => uint256)))"
                                  }
                                },
                                "id": 24661,
                                "indexExpression": {
                                  "id": 24651,
                                  "name": "who",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 24488,
                                  "src": "2599:3:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "2588:15:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$",
                                  "typeString": "mapping(bytes4 => mapping(bytes32 => uint256))"
                                }
                              },
                              "id": 24662,
                              "indexExpression": {
                                "id": 24652,
                                "name": "fsig",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 24493,
                                "src": "2604:4:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2588:21:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                "typeString": "mapping(bytes32 => uint256)"
                              }
                            },
                            "id": 24663,
                            "indexExpression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "id": 24656,
                                      "name": "ins",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 24506,
                                      "src": "2637:3:72",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                        "typeString": "bytes32[] memory"
                                      }
                                    },
                                    {
                                      "id": 24657,
                                      "name": "field_depth",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 24498,
                                      "src": "2642:11:72",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                        "typeString": "bytes32[] memory"
                                      },
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "expression": {
                                      "id": 24654,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": -1,
                                      "src": "2620:3:72",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 24655,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberLocation": "2624:12:72",
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "src": "2620:16:72",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 24658,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2620:34:72",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                ],
                                "id": 24653,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "2610:9:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                              },
                              "id": 24659,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2610:45:72",
                              "tryCall": false,
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
                            "src": "2588:68:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "baseExpression": {
                                  "id": 24666,
                                  "name": "reads",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 24580,
                                  "src": "2667:5:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                    "typeString": "bytes32[] memory"
                                  }
                                },
                                "id": 24668,
                                "indexExpression": {
                                  "hexValue": "30",
                                  "id": 24667,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2673:1:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "2667:8:72",
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
                              "id": 24665,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2659:7:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 24664,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "2659:7:72",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 24669,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2659:17:72",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2588:88:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 24671,
                        "nodeType": "ExpressionStatement",
                        "src": "2588:88:72"
                      },
                      {
                        "expression": {
                          "id": 24688,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "baseExpression": {
                                "baseExpression": {
                                  "expression": {
                                    "id": 24672,
                                    "name": "self",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 24482,
                                    "src": "2690:4:72",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                                      "typeString": "struct StdStorage storage pointer"
                                    }
                                  },
                                  "id": 24683,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "2695:5:72",
                                  "memberName": "finds",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 24415,
                                  "src": "2690:10:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$_$",
                                    "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => bool)))"
                                  }
                                },
                                "id": 24684,
                                "indexExpression": {
                                  "id": 24674,
                                  "name": "who",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 24488,
                                  "src": "2701:3:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "2690:15:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                                  "typeString": "mapping(bytes4 => mapping(bytes32 => bool))"
                                }
                              },
                              "id": 24685,
                              "indexExpression": {
                                "id": 24675,
                                "name": "fsig",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 24493,
                                "src": "2706:4:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2690:21:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                                "typeString": "mapping(bytes32 => bool)"
                              }
                            },
                            "id": 24686,
                            "indexExpression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "id": 24679,
                                      "name": "ins",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 24506,
                                      "src": "2739:3:72",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                        "typeString": "bytes32[] memory"
                                      }
                                    },
                                    {
                                      "id": 24680,
                                      "name": "field_depth",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 24498,
                                      "src": "2744:11:72",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                        "typeString": "bytes32[] memory"
                                      },
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "expression": {
                                      "id": 24677,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": -1,
                                      "src": "2722:3:72",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 24678,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberLocation": "2726:12:72",
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "src": "2722:16:72",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 24681,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2722:34:72",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                ],
                                "id": 24676,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "2712:9:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                              },
                              "id": 24682,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2712:45:72",
                              "tryCall": false,
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
                            "src": "2690:68:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "74727565",
                            "id": 24687,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2761:4:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "2690:75:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 24689,
                        "nodeType": "ExpressionStatement",
                        "src": "2690:75:72"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "baseExpression": {
                          "baseExpression": {
                            "baseExpression": {
                              "expression": {
                                "id": 24873,
                                "name": "self",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 24482,
                                "src": "4116:4:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                                  "typeString": "struct StdStorage storage pointer"
                                }
                              },
                              "id": 24874,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4121:5:72",
                              "memberName": "finds",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 24415,
                              "src": "4116:10:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$_$",
                                "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => bool)))"
                              }
                            },
                            "id": 24876,
                            "indexExpression": {
                              "id": 24875,
                              "name": "who",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 24488,
                              "src": "4127:3:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "4116:15:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                              "typeString": "mapping(bytes4 => mapping(bytes32 => bool))"
                            }
                          },
                          "id": 24878,
                          "indexExpression": {
                            "id": 24877,
                            "name": "fsig",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 24493,
                            "src": "4132:4:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "4116:21:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                            "typeString": "mapping(bytes32 => bool)"
                          }
                        },
                        "id": 24886,
                        "indexExpression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 24882,
                                  "name": "ins",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 24506,
                                  "src": "4165:3:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                    "typeString": "bytes32[] memory"
                                  }
                                },
                                {
                                  "id": 24883,
                                  "name": "field_depth",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 24498,
                                  "src": "4170:11:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                    "typeString": "bytes32[] memory"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "expression": {
                                  "id": 24880,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -1,
                                  "src": "4148:3:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 24881,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberLocation": "4152:12:72",
                                "memberName": "encodePacked",
                                "nodeType": "MemberAccess",
                                "src": "4148:16:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 24884,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4148:34:72",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 24879,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -8,
                            "src": "4138:9:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 24885,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4138:45:72",
                          "tryCall": false,
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
                        "src": "4116:68:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "73746453746f726167652066696e642853746453746f72616765293a20536c6f74287329206e6f7420666f756e642e",
                        "id": 24887,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4198:49:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_47c274d4780c7bff83310cd576005a97888a2b2935c22f84e1e5282c1bfb39a8",
                          "typeString": "literal_string \"stdStorage find(StdStorage): Slot(s) not found.\""
                        },
                        "value": "stdStorage find(StdStorage): Slot(s) not found."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_47c274d4780c7bff83310cd576005a97888a2b2935c22f84e1e5282c1bfb39a8",
                          "typeString": "literal_string \"stdStorage find(StdStorage): Slot(s) not found.\""
                        }
                      ],
                      "id": 24872,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4095:7:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 24888,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4095:162:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 24889,
                  "nodeType": "ExpressionStatement",
                  "src": "4095:162:72"
                },
                {
                  "expression": {
                    "id": 24892,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "4268:19:72",
                    "subExpression": {
                      "expression": {
                        "id": 24890,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24482,
                        "src": "4275:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 24891,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4280:7:72",
                      "memberName": "_target",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24424,
                      "src": "4275:12:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 24893,
                  "nodeType": "ExpressionStatement",
                  "src": "4268:19:72"
                },
                {
                  "expression": {
                    "id": 24896,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "4297:16:72",
                    "subExpression": {
                      "expression": {
                        "id": 24894,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24482,
                        "src": "4304:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 24895,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4309:4:72",
                      "memberName": "_sig",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24420,
                      "src": "4304:9:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 24897,
                  "nodeType": "ExpressionStatement",
                  "src": "4297:16:72"
                },
                {
                  "expression": {
                    "id": 24900,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "4323:17:72",
                    "subExpression": {
                      "expression": {
                        "id": 24898,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24482,
                        "src": "4330:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 24899,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4335:5:72",
                      "memberName": "_keys",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24418,
                      "src": "4330:10:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                        "typeString": "bytes32[] storage ref"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 24901,
                  "nodeType": "ExpressionStatement",
                  "src": "4323:17:72"
                },
                {
                  "expression": {
                    "id": 24904,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "4350:18:72",
                    "subExpression": {
                      "expression": {
                        "id": 24902,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24482,
                        "src": "4357:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 24903,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4362:6:72",
                      "memberName": "_depth",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24422,
                      "src": "4357:11:72",
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
                  "id": 24905,
                  "nodeType": "ExpressionStatement",
                  "src": "4350:18:72"
                },
                {
                  "expression": {
                    "baseExpression": {
                      "baseExpression": {
                        "baseExpression": {
                          "expression": {
                            "id": 24906,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 24482,
                            "src": "4386:4:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                              "typeString": "struct StdStorage storage pointer"
                            }
                          },
                          "id": 24907,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4391:5:72",
                          "memberName": "slots",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 24407,
                          "src": "4386:10:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$_$",
                            "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => uint256)))"
                          }
                        },
                        "id": 24909,
                        "indexExpression": {
                          "id": 24908,
                          "name": "who",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 24488,
                          "src": "4397:3:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4386:15:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$",
                          "typeString": "mapping(bytes4 => mapping(bytes32 => uint256))"
                        }
                      },
                      "id": 24911,
                      "indexExpression": {
                        "id": 24910,
                        "name": "fsig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24493,
                        "src": "4402:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "4386:21:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                        "typeString": "mapping(bytes32 => uint256)"
                      }
                    },
                    "id": 24919,
                    "indexExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 24915,
                              "name": "ins",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 24506,
                              "src": "4435:3:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                "typeString": "bytes32[] memory"
                              }
                            },
                            {
                              "id": 24916,
                              "name": "field_depth",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 24498,
                              "src": "4440:11:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                "typeString": "bytes32[] memory"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "id": 24913,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "4418:3:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 24914,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "4422:12:72",
                            "memberName": "encodePacked",
                            "nodeType": "MemberAccess",
                            "src": "4418:16:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 24917,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4418:34:72",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 24912,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "4408:9:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 24918,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4408:45:72",
                      "tryCall": false,
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
                    "src": "4386:68:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 24486,
                  "id": 24920,
                  "nodeType": "Return",
                  "src": "4379:75:72"
                }
              ]
            },
            "documentation": {
              "id": 24479,
              "nodeType": "StructuredDocumentation",
              "src": "756:129:72",
              "text": "@notice find an arbitrary storage slot given a function sig, input data, address of the contract and a value to check against"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "find",
            "nameLocation": "1273:4:72",
            "parameters": {
              "id": 24483,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24482,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "1297:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 24922,
                  "src": "1278:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 24481,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 24480,
                      "name": "StdStorage",
                      "nameLocations": [
                        "1278:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "1278:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "1278:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1277:25:72"
            },
            "returnParameters": {
              "id": 24486,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24485,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 24922,
                  "src": "1321:7:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 24484,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1321:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1320:9:72"
            },
            "scope": 25319,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 24942,
            "nodeType": "FunctionDefinition",
            "src": "4467:156:72",
            "nodes": [],
            "body": {
              "id": 24941,
              "nodeType": "Block",
              "src": "4563:60:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 24937,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 24933,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24925,
                        "src": "4573:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 24935,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4578:7:72",
                      "memberName": "_target",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24424,
                      "src": "4573:12:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 24936,
                      "name": "_target",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 24927,
                      "src": "4588:7:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "4573:22:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 24938,
                  "nodeType": "ExpressionStatement",
                  "src": "4573:22:72"
                },
                {
                  "expression": {
                    "id": 24939,
                    "name": "self",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 24925,
                    "src": "4612:4:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 24932,
                  "id": 24940,
                  "nodeType": "Return",
                  "src": "4605:11:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "target",
            "nameLocation": "4476:6:72",
            "parameters": {
              "id": 24928,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24925,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "4502:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 24942,
                  "src": "4483:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 24924,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 24923,
                      "name": "StdStorage",
                      "nameLocations": [
                        "4483:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "4483:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "4483:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24927,
                  "mutability": "mutable",
                  "name": "_target",
                  "nameLocation": "4516:7:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 24942,
                  "src": "4508:15:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 24926,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4508:7:72",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4482:42:72"
            },
            "returnParameters": {
              "id": 24932,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24931,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 24942,
                  "src": "4543:18:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 24930,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 24929,
                      "name": "StdStorage",
                      "nameLocations": [
                        "4543:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "4543:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "4543:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4542:20:72"
            },
            "scope": 25319,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 24962,
            "nodeType": "FunctionDefinition",
            "src": "4629:143:72",
            "nodes": [],
            "body": {
              "id": 24961,
              "nodeType": "Block",
              "src": "4718:54:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 24957,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 24953,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24945,
                        "src": "4728:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 24955,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4733:4:72",
                      "memberName": "_sig",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24420,
                      "src": "4728:9:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 24956,
                      "name": "_sig",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 24947,
                      "src": "4740:4:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "4728:16:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "id": 24958,
                  "nodeType": "ExpressionStatement",
                  "src": "4728:16:72"
                },
                {
                  "expression": {
                    "id": 24959,
                    "name": "self",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 24945,
                    "src": "4761:4:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 24952,
                  "id": 24960,
                  "nodeType": "Return",
                  "src": "4754:11:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sig",
            "nameLocation": "4638:3:72",
            "parameters": {
              "id": 24948,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24945,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "4661:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 24962,
                  "src": "4642:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 24944,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 24943,
                      "name": "StdStorage",
                      "nameLocations": [
                        "4642:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "4642:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "4642:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24947,
                  "mutability": "mutable",
                  "name": "_sig",
                  "nameLocation": "4674:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 24962,
                  "src": "4667:11:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 24946,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "4667:6:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4641:38:72"
            },
            "returnParameters": {
              "id": 24952,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24951,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 24962,
                  "src": "4698:18:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 24950,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 24949,
                      "name": "StdStorage",
                      "nameLocations": [
                        "4698:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "4698:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "4698:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4697:20:72"
            },
            "scope": 25319,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 24984,
            "nodeType": "FunctionDefinition",
            "src": "4778:156:72",
            "nodes": [],
            "body": {
              "id": 24983,
              "nodeType": "Block",
              "src": "4874:60:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 24979,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 24973,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24965,
                        "src": "4884:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 24975,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4889:4:72",
                      "memberName": "_sig",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24420,
                      "src": "4884:9:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 24977,
                          "name": "_sig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 24967,
                          "src": "4901:4:72",
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
                          }
                        ],
                        "id": 24976,
                        "name": "sigs",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24478,
                        "src": "4896:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_bytes4_$",
                          "typeString": "function (string memory) pure returns (bytes4)"
                        }
                      },
                      "id": 24978,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4896:10:72",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "4884:22:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "id": 24980,
                  "nodeType": "ExpressionStatement",
                  "src": "4884:22:72"
                },
                {
                  "expression": {
                    "id": 24981,
                    "name": "self",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 24965,
                    "src": "4923:4:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 24972,
                  "id": 24982,
                  "nodeType": "Return",
                  "src": "4916:11:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sig",
            "nameLocation": "4787:3:72",
            "parameters": {
              "id": 24968,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24965,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "4810:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 24984,
                  "src": "4791:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 24964,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 24963,
                      "name": "StdStorage",
                      "nameLocations": [
                        "4791:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "4791:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "4791:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24967,
                  "mutability": "mutable",
                  "name": "_sig",
                  "nameLocation": "4830:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 24984,
                  "src": "4816:18:72",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 24966,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4816:6:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4790:45:72"
            },
            "returnParameters": {
              "id": 24972,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24971,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 24984,
                  "src": "4854:18:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 24970,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 24969,
                      "name": "StdStorage",
                      "nameLocations": [
                        "4854:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "4854:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "4854:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4853:20:72"
            },
            "scope": 25319,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 25015,
            "nodeType": "FunctionDefinition",
            "src": "4940:179:72",
            "nodes": [],
            "body": {
              "id": 25014,
              "nodeType": "Block",
              "src": "5034:85:72",
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
                                    "id": 25006,
                                    "name": "who",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 24989,
                                    "src": "5084:3:72",
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
                                  "id": 25005,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "5076:7:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint160_$",
                                    "typeString": "type(uint160)"
                                  },
                                  "typeName": {
                                    "id": 25004,
                                    "name": "uint160",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "5076:7:72",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 25007,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "5076:12:72",
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
                              "id": 25003,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "5068:7:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 25002,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "5068:7:72",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 25008,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5068:21:72",
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
                          "id": 25001,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "5060:7:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 25000,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "5060:7:72",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 25009,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5060:30:72",
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
                      "expression": {
                        "expression": {
                          "id": 24995,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 24987,
                          "src": "5044:4:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                            "typeString": "struct StdStorage storage pointer"
                          }
                        },
                        "id": 24998,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5049:5:72",
                        "memberName": "_keys",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 24418,
                        "src": "5044:10:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                          "typeString": "bytes32[] storage ref"
                        }
                      },
                      "id": 24999,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5055:4:72",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "5044:15:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_bytes32_$dyn_storage_ptr_$_t_bytes32_$returns$__$attached_to$_t_array$_t_bytes32_$dyn_storage_ptr_$",
                        "typeString": "function (bytes32[] storage pointer,bytes32)"
                      }
                    },
                    "id": 25010,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5044:47:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 25011,
                  "nodeType": "ExpressionStatement",
                  "src": "5044:47:72"
                },
                {
                  "expression": {
                    "id": 25012,
                    "name": "self",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 24987,
                    "src": "5108:4:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 24994,
                  "id": 25013,
                  "nodeType": "Return",
                  "src": "5101:11:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "with_key",
            "nameLocation": "4949:8:72",
            "parameters": {
              "id": 24990,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24987,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "4977:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25015,
                  "src": "4958:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 24986,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 24985,
                      "name": "StdStorage",
                      "nameLocations": [
                        "4958:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "4958:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "4958:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24989,
                  "mutability": "mutable",
                  "name": "who",
                  "nameLocation": "4991:3:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25015,
                  "src": "4983:11:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 24988,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4983:7:72",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4957:38:72"
            },
            "returnParameters": {
              "id": 24994,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24993,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 25015,
                  "src": "5014:18:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 24992,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 24991,
                      "name": "StdStorage",
                      "nameLocations": [
                        "5014:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "5014:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "5014:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5013:20:72"
            },
            "scope": 25319,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 25040,
            "nodeType": "FunctionDefinition",
            "src": "5125:161:72",
            "nodes": [],
            "body": {
              "id": 25039,
              "nodeType": "Block",
              "src": "5219:67:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 25033,
                            "name": "amt",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25020,
                            "src": "5253:3:72",
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
                          "id": 25032,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "5245:7:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 25031,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "5245:7:72",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 25034,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5245:12:72",
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
                      "expression": {
                        "expression": {
                          "id": 25026,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25018,
                          "src": "5229:4:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                            "typeString": "struct StdStorage storage pointer"
                          }
                        },
                        "id": 25029,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5234:5:72",
                        "memberName": "_keys",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 24418,
                        "src": "5229:10:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                          "typeString": "bytes32[] storage ref"
                        }
                      },
                      "id": 25030,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5240:4:72",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "5229:15:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_bytes32_$dyn_storage_ptr_$_t_bytes32_$returns$__$attached_to$_t_array$_t_bytes32_$dyn_storage_ptr_$",
                        "typeString": "function (bytes32[] storage pointer,bytes32)"
                      }
                    },
                    "id": 25035,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5229:29:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 25036,
                  "nodeType": "ExpressionStatement",
                  "src": "5229:29:72"
                },
                {
                  "expression": {
                    "id": 25037,
                    "name": "self",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 25018,
                    "src": "5275:4:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 25025,
                  "id": 25038,
                  "nodeType": "Return",
                  "src": "5268:11:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "with_key",
            "nameLocation": "5134:8:72",
            "parameters": {
              "id": 25021,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25018,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5162:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25040,
                  "src": "5143:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25017,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25016,
                      "name": "StdStorage",
                      "nameLocations": [
                        "5143:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "5143:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "5143:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25020,
                  "mutability": "mutable",
                  "name": "amt",
                  "nameLocation": "5176:3:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25040,
                  "src": "5168:11:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25019,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5168:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5142:38:72"
            },
            "returnParameters": {
              "id": 25025,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25024,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 25040,
                  "src": "5199:18:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25023,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25022,
                      "name": "StdStorage",
                      "nameLocations": [
                        "5199:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "5199:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "5199:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5198:20:72"
            },
            "scope": 25319,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 25062,
            "nodeType": "FunctionDefinition",
            "src": "5292:152:72",
            "nodes": [],
            "body": {
              "id": 25061,
              "nodeType": "Block",
              "src": "5386:58:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 25056,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25045,
                        "src": "5412:3:72",
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
                          "id": 25051,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25043,
                          "src": "5396:4:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                            "typeString": "struct StdStorage storage pointer"
                          }
                        },
                        "id": 25054,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5401:5:72",
                        "memberName": "_keys",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 24418,
                        "src": "5396:10:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                          "typeString": "bytes32[] storage ref"
                        }
                      },
                      "id": 25055,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5407:4:72",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "5396:15:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_bytes32_$dyn_storage_ptr_$_t_bytes32_$returns$__$attached_to$_t_array$_t_bytes32_$dyn_storage_ptr_$",
                        "typeString": "function (bytes32[] storage pointer,bytes32)"
                      }
                    },
                    "id": 25057,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5396:20:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 25058,
                  "nodeType": "ExpressionStatement",
                  "src": "5396:20:72"
                },
                {
                  "expression": {
                    "id": 25059,
                    "name": "self",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 25043,
                    "src": "5433:4:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 25050,
                  "id": 25060,
                  "nodeType": "Return",
                  "src": "5426:11:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "with_key",
            "nameLocation": "5301:8:72",
            "parameters": {
              "id": 25046,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25043,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5329:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25062,
                  "src": "5310:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25042,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25041,
                      "name": "StdStorage",
                      "nameLocations": [
                        "5310:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "5310:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "5310:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25045,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "5343:3:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25062,
                  "src": "5335:11:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 25044,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5335:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5309:38:72"
            },
            "returnParameters": {
              "id": 25050,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25049,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 25062,
                  "src": "5366:18:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25048,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25047,
                      "name": "StdStorage",
                      "nameLocations": [
                        "5366:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "5366:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "5366:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5365:20:72"
            },
            "scope": 25319,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 25082,
            "nodeType": "FunctionDefinition",
            "src": "5450:152:72",
            "nodes": [],
            "body": {
              "id": 25081,
              "nodeType": "Block",
              "src": "5544:58:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 25077,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 25073,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25065,
                        "src": "5554:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 25075,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "5559:6:72",
                      "memberName": "_depth",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24422,
                      "src": "5554:11:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 25076,
                      "name": "_depth",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25067,
                      "src": "5568:6:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5554:20:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 25078,
                  "nodeType": "ExpressionStatement",
                  "src": "5554:20:72"
                },
                {
                  "expression": {
                    "id": 25079,
                    "name": "self",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 25065,
                    "src": "5591:4:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 25072,
                  "id": 25080,
                  "nodeType": "Return",
                  "src": "5584:11:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "depth",
            "nameLocation": "5459:5:72",
            "parameters": {
              "id": 25068,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25065,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5484:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25082,
                  "src": "5465:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25064,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25063,
                      "name": "StdStorage",
                      "nameLocations": [
                        "5465:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "5465:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "5465:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25067,
                  "mutability": "mutable",
                  "name": "_depth",
                  "nameLocation": "5498:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25082,
                  "src": "5490:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25066,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5490:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5464:41:72"
            },
            "returnParameters": {
              "id": 25072,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25071,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 25082,
                  "src": "5524:18:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25070,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25069,
                      "name": "StdStorage",
                      "nameLocations": [
                        "5524:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "5524:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "5524:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5523:20:72"
            },
            "scope": 25319,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 25114,
            "nodeType": "FunctionDefinition",
            "src": "5608:194:72",
            "nodes": [],
            "body": {
              "id": 25113,
              "nodeType": "Block",
              "src": "5678:124:72",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    25091
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25091,
                      "mutability": "mutable",
                      "name": "t",
                      "nameLocation": "5696:1:72",
                      "nodeType": "VariableDeclaration",
                      "scope": 25113,
                      "src": "5688:9:72",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 25090,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "5688:7:72",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 25094,
                  "initialValue": {
                    "expression": {
                      "id": 25092,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25085,
                      "src": "5700:4:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                        "typeString": "struct StdStorage storage pointer"
                      }
                    },
                    "id": 25093,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "5705:7:72",
                    "memberName": "_target",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 24424,
                    "src": "5700:12:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5688:24:72"
                },
                {
                  "assignments": [
                    25096
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25096,
                      "mutability": "mutable",
                      "name": "s",
                      "nameLocation": "5730:1:72",
                      "nodeType": "VariableDeclaration",
                      "scope": 25113,
                      "src": "5722:9:72",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 25095,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5722:7:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 25100,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 25098,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25085,
                        "src": "5739:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      ],
                      "id": 25097,
                      "name": "find",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 24922,
                      "src": "5734:4:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$24427_storage_ptr_$returns$_t_uint256_$",
                        "typeString": "function (struct StdStorage storage pointer) returns (uint256)"
                      }
                    },
                    "id": 25099,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5734:10:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5722:22:72"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 25105,
                            "name": "t",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25091,
                            "src": "5780:1:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "arguments": [
                              {
                                "id": 25108,
                                "name": "s",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 25096,
                                "src": "5791:1:72",
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
                              "id": 25107,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "5783:7:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes32_$",
                                "typeString": "type(bytes32)"
                              },
                              "typeName": {
                                "id": 25106,
                                "name": "bytes32",
                                "nodeType": "ElementaryTypeName",
                                "src": "5783:7:72",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 25109,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5783:10:72",
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
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "id": 25103,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 24460,
                            "src": "5772:2:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Vm_$29527",
                              "typeString": "contract Vm"
                            }
                          },
                          "id": 25104,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5775:4:72",
                          "memberName": "load",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28047,
                          "src": "5772:7:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_address_$_t_bytes32_$returns$_t_bytes32_$",
                            "typeString": "function (address,bytes32) view external returns (bytes32)"
                          }
                        },
                        "id": 25110,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5772:22:72",
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
                      "expression": {
                        "id": 25101,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -1,
                        "src": "5761:3:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 25102,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "5765:6:72",
                      "memberName": "encode",
                      "nodeType": "MemberAccess",
                      "src": "5761:10:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function () pure returns (bytes memory)"
                      }
                    },
                    "id": 25111,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5761:34:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 25089,
                  "id": 25112,
                  "nodeType": "Return",
                  "src": "5754:41:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read",
            "nameLocation": "5617:4:72",
            "parameters": {
              "id": 25086,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25085,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5641:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25114,
                  "src": "5622:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25084,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25083,
                      "name": "StdStorage",
                      "nameLocations": [
                        "5622:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "5622:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "5622:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5621:25:72"
            },
            "returnParameters": {
              "id": 25089,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25088,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 25114,
                  "src": "5664:12:72",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 25087,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5664:5:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5663:14:72"
            },
            "scope": 25319,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 25133,
            "nodeType": "FunctionDefinition",
            "src": "5808:131:72",
            "nodes": [],
            "body": {
              "id": 25132,
              "nodeType": "Block",
              "src": "5882:57:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 25125,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25117,
                            "src": "5915:4:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                              "typeString": "struct StdStorage storage pointer"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                              "typeString": "struct StdStorage storage pointer"
                            }
                          ],
                          "id": 25124,
                          "name": "read",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25114,
                          "src": "5910:4:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$24427_storage_ptr_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (struct StdStorage storage pointer) returns (bytes memory)"
                          }
                        },
                        "id": 25126,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5910:10:72",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "components": [
                          {
                            "id": 25128,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "5923:7:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_bytes32_$",
                              "typeString": "type(bytes32)"
                            },
                            "typeName": {
                              "id": 25127,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "5923:7:72",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "id": 25129,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "5922:9:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_bytes32_$",
                          "typeString": "type(bytes32)"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_type$_t_bytes32_$",
                          "typeString": "type(bytes32)"
                        }
                      ],
                      "expression": {
                        "id": 25122,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -1,
                        "src": "5899:3:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 25123,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "5903:6:72",
                      "memberName": "decode",
                      "nodeType": "MemberAccess",
                      "src": "5899:10:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                        "typeString": "function () pure"
                      }
                    },
                    "id": 25130,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5899:33:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 25121,
                  "id": 25131,
                  "nodeType": "Return",
                  "src": "5892:40:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read_bytes32",
            "nameLocation": "5817:12:72",
            "parameters": {
              "id": 25118,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25117,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5849:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25133,
                  "src": "5830:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25116,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25115,
                      "name": "StdStorage",
                      "nameLocations": [
                        "5830:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "5830:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "5830:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5829:25:72"
            },
            "returnParameters": {
              "id": 25121,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25120,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 25133,
                  "src": "5873:7:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 25119,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5873:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5872:9:72"
            },
            "scope": 25319,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 25164,
            "nodeType": "FunctionDefinition",
            "src": "5945:279:72",
            "nodes": [],
            "body": {
              "id": 25163,
              "nodeType": "Block",
              "src": "6013:211:72",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    25142
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25142,
                      "mutability": "mutable",
                      "name": "v",
                      "nameLocation": "6030:1:72",
                      "nodeType": "VariableDeclaration",
                      "scope": 25163,
                      "src": "6023:8:72",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 25141,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6023:6:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 25146,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 25144,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25136,
                        "src": "6043:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      ],
                      "id": 25143,
                      "name": "read_int",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25221,
                      "src": "6034:8:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$24427_storage_ptr_$returns$_t_int256_$",
                        "typeString": "function (struct StdStorage storage pointer) returns (int256)"
                      }
                    },
                    "id": 25145,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6034:14:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6023:25:72"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 25149,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 25147,
                      "name": "v",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25142,
                      "src": "6062:1:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 25148,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6067:1:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "6062:6:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 25152,
                  "nodeType": "IfStatement",
                  "src": "6058:24:72",
                  "trueBody": {
                    "expression": {
                      "hexValue": "66616c7365",
                      "id": 25150,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6077:5:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "functionReturnParameters": 25140,
                    "id": 25151,
                    "nodeType": "Return",
                    "src": "6070:12:72"
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 25155,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 25153,
                      "name": "v",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25142,
                      "src": "6096:1:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 25154,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6101:1:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "6096:6:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 25158,
                  "nodeType": "IfStatement",
                  "src": "6092:23:72",
                  "trueBody": {
                    "expression": {
                      "hexValue": "74727565",
                      "id": 25156,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6111:4:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "functionReturnParameters": 25140,
                    "id": 25157,
                    "nodeType": "Return",
                    "src": "6104:11:72"
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "73746453746f7261676520726561645f626f6f6c2853746453746f72616765293a2043616e6e6f74206465636f64652e204d616b65207375726520796f75206172652072656164696e67206120626f6f6c2e",
                        "id": 25160,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6132:84:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_91e3b02d190bb3e407570bfe894974b331ad10ba40f732248485a8a79ed8e4f5",
                          "typeString": "literal_string \"stdStorage read_bool(StdStorage): Cannot decode. Make sure you are reading a bool.\""
                        },
                        "value": "stdStorage read_bool(StdStorage): Cannot decode. Make sure you are reading a bool."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_91e3b02d190bb3e407570bfe894974b331ad10ba40f732248485a8a79ed8e4f5",
                          "typeString": "literal_string \"stdStorage read_bool(StdStorage): Cannot decode. Make sure you are reading a bool.\""
                        }
                      ],
                      "id": 25159,
                      "name": "revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -19,
                        -19
                      ],
                      "referencedDeclaration": -19,
                      "src": "6125:6:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory) pure"
                      }
                    },
                    "id": 25161,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6125:92:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 25162,
                  "nodeType": "ExpressionStatement",
                  "src": "6125:92:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read_bool",
            "nameLocation": "5954:9:72",
            "parameters": {
              "id": 25137,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25136,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5983:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25164,
                  "src": "5964:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25135,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25134,
                      "name": "StdStorage",
                      "nameLocations": [
                        "5964:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "5964:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "5964:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5963:25:72"
            },
            "returnParameters": {
              "id": 25140,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25139,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 25164,
                  "src": "6007:4:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 25138,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6007:4:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6006:6:72"
            },
            "scope": 25319,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 25183,
            "nodeType": "FunctionDefinition",
            "src": "6230:131:72",
            "nodes": [],
            "body": {
              "id": 25182,
              "nodeType": "Block",
              "src": "6304:57:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 25175,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25167,
                            "src": "6337:4:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                              "typeString": "struct StdStorage storage pointer"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                              "typeString": "struct StdStorage storage pointer"
                            }
                          ],
                          "id": 25174,
                          "name": "read",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25114,
                          "src": "6332:4:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$24427_storage_ptr_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (struct StdStorage storage pointer) returns (bytes memory)"
                          }
                        },
                        "id": 25176,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6332:10:72",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "components": [
                          {
                            "id": 25178,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6345:7:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 25177,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "6345:7:72",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "id": 25179,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "6344:9:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        }
                      ],
                      "expression": {
                        "id": 25172,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -1,
                        "src": "6321:3:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 25173,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "6325:6:72",
                      "memberName": "decode",
                      "nodeType": "MemberAccess",
                      "src": "6321:10:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                        "typeString": "function () pure"
                      }
                    },
                    "id": 25180,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6321:33:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "functionReturnParameters": 25171,
                  "id": 25181,
                  "nodeType": "Return",
                  "src": "6314:40:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read_address",
            "nameLocation": "6239:12:72",
            "parameters": {
              "id": 25168,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25167,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "6271:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25183,
                  "src": "6252:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25166,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25165,
                      "name": "StdStorage",
                      "nameLocations": [
                        "6252:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "6252:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "6252:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6251:25:72"
            },
            "returnParameters": {
              "id": 25171,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25170,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 25183,
                  "src": "6295:7:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 25169,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6295:7:72",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6294:9:72"
            },
            "scope": 25319,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 25202,
            "nodeType": "FunctionDefinition",
            "src": "6367:128:72",
            "nodes": [],
            "body": {
              "id": 25201,
              "nodeType": "Block",
              "src": "6438:57:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 25194,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25186,
                            "src": "6471:4:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                              "typeString": "struct StdStorage storage pointer"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                              "typeString": "struct StdStorage storage pointer"
                            }
                          ],
                          "id": 25193,
                          "name": "read",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25114,
                          "src": "6466:4:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$24427_storage_ptr_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (struct StdStorage storage pointer) returns (bytes memory)"
                          }
                        },
                        "id": 25195,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6466:10:72",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "components": [
                          {
                            "id": 25197,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6479:7:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 25196,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "6479:7:72",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "id": 25198,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "6478:9:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        }
                      ],
                      "expression": {
                        "id": 25191,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -1,
                        "src": "6455:3:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 25192,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "6459:6:72",
                      "memberName": "decode",
                      "nodeType": "MemberAccess",
                      "src": "6455:10:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                        "typeString": "function () pure"
                      }
                    },
                    "id": 25199,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6455:33:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 25190,
                  "id": 25200,
                  "nodeType": "Return",
                  "src": "6448:40:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read_uint",
            "nameLocation": "6376:9:72",
            "parameters": {
              "id": 25187,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25186,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "6405:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25202,
                  "src": "6386:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25185,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25184,
                      "name": "StdStorage",
                      "nameLocations": [
                        "6386:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "6386:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "6386:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6385:25:72"
            },
            "returnParameters": {
              "id": 25190,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25189,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 25202,
                  "src": "6429:7:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25188,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6429:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6428:9:72"
            },
            "scope": 25319,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 25221,
            "nodeType": "FunctionDefinition",
            "src": "6501:125:72",
            "nodes": [],
            "body": {
              "id": 25220,
              "nodeType": "Block",
              "src": "6570:56:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 25213,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25205,
                            "src": "6603:4:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                              "typeString": "struct StdStorage storage pointer"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                              "typeString": "struct StdStorage storage pointer"
                            }
                          ],
                          "id": 25212,
                          "name": "read",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25114,
                          "src": "6598:4:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$24427_storage_ptr_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (struct StdStorage storage pointer) returns (bytes memory)"
                          }
                        },
                        "id": 25214,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6598:10:72",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "components": [
                          {
                            "id": 25216,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6611:6:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_int256_$",
                              "typeString": "type(int256)"
                            },
                            "typeName": {
                              "id": 25215,
                              "name": "int256",
                              "nodeType": "ElementaryTypeName",
                              "src": "6611:6:72",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "id": 25217,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "6610:8:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        }
                      ],
                      "expression": {
                        "id": 25210,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -1,
                        "src": "6587:3:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 25211,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "6591:6:72",
                      "memberName": "decode",
                      "nodeType": "MemberAccess",
                      "src": "6587:10:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                        "typeString": "function () pure"
                      }
                    },
                    "id": 25218,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6587:32:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 25209,
                  "id": 25219,
                  "nodeType": "Return",
                  "src": "6580:39:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read_int",
            "nameLocation": "6510:8:72",
            "parameters": {
              "id": 25206,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25205,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "6538:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25221,
                  "src": "6519:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25204,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25203,
                      "name": "StdStorage",
                      "nameLocations": [
                        "6519:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "6519:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "6519:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6518:25:72"
            },
            "returnParameters": {
              "id": 25209,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25208,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 25221,
                  "src": "6562:6:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 25207,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6562:6:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6561:8:72"
            },
            "scope": 25319,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 25277,
            "nodeType": "FunctionDefinition",
            "src": "6632:304:72",
            "nodes": [],
            "body": {
              "id": 25276,
              "nodeType": "Block",
              "src": "6719:217:72",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    25231
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25231,
                      "mutability": "mutable",
                      "name": "out",
                      "nameLocation": "6737:3:72",
                      "nodeType": "VariableDeclaration",
                      "scope": 25276,
                      "src": "6729:11:72",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 25230,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "6729:7:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 25232,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6729:11:72"
                },
                {
                  "assignments": [
                    25234
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25234,
                      "mutability": "mutable",
                      "name": "max",
                      "nameLocation": "6759:3:72",
                      "nodeType": "VariableDeclaration",
                      "scope": 25276,
                      "src": "6751:11:72",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 25233,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6751:7:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 25243,
                  "initialValue": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 25238,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 25235,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25223,
                          "src": "6765:1:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 25236,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6767:6:72",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "6765:8:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "hexValue": "3332",
                        "id": 25237,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6776:2:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_32_by_1",
                          "typeString": "int_const 32"
                        },
                        "value": "32"
                      },
                      "src": "6765:13:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "expression": {
                        "id": 25240,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25223,
                        "src": "6786:1:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 25241,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6788:6:72",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "6786:8:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 25242,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "6765:29:72",
                    "trueExpression": {
                      "hexValue": "3332",
                      "id": 25239,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6781:2:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_32_by_1",
                        "typeString": "int_const 32"
                      },
                      "value": "32"
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6751:43:72"
                },
                {
                  "body": {
                    "id": 25272,
                    "nodeType": "Block",
                    "src": "6838:72:72",
                    "statements": [
                      {
                        "expression": {
                          "id": 25270,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 25254,
                            "name": "out",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25231,
                            "src": "6852:3:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "|=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "id": 25269,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  },
                                  "id": 25263,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "baseExpression": {
                                      "id": 25257,
                                      "name": "b",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 25223,
                                      "src": "6867:1:72",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes memory"
                                      }
                                    },
                                    "id": 25261,
                                    "indexExpression": {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "id": 25260,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 25258,
                                        "name": "offset",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 25225,
                                        "src": "6869:6:72",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "+",
                                      "rightExpression": {
                                        "id": 25259,
                                        "name": "i",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 25245,
                                        "src": "6878:1:72",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "6869:10:72",
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
                                    "src": "6867:13:72",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes1",
                                      "typeString": "bytes1"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "&",
                                  "rightExpression": {
                                    "hexValue": "30784646",
                                    "id": 25262,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6883:4:72",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_255_by_1",
                                      "typeString": "int_const 255"
                                    },
                                    "value": "0xFF"
                                  },
                                  "src": "6867:20:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                ],
                                "id": 25256,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "6859:7:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes32_$",
                                  "typeString": "type(bytes32)"
                                },
                                "typeName": {
                                  "id": 25255,
                                  "name": "bytes32",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "6859:7:72",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 25264,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6859:29:72",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">>",
                            "rightExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 25267,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 25265,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 25245,
                                    "src": "6893:1:72",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "hexValue": "38",
                                    "id": 25266,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6897:1:72",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_8_by_1",
                                      "typeString": "int_const 8"
                                    },
                                    "value": "8"
                                  },
                                  "src": "6893:5:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "id": 25268,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "6892:7:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "6859:40:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "6852:47:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 25271,
                        "nodeType": "ExpressionStatement",
                        "src": "6852:47:72"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 25250,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 25248,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25245,
                      "src": "6824:1:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 25249,
                      "name": "max",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25234,
                      "src": "6828:3:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6824:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 25273,
                  "initializationExpression": {
                    "assignments": [
                      25245
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 25245,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "6817:1:72",
                        "nodeType": "VariableDeclaration",
                        "scope": 25273,
                        "src": "6809:9:72",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 25244,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "6809:7:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 25247,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 25246,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6821:1:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "6809:13:72"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 25252,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "6833:3:72",
                      "subExpression": {
                        "id": 25251,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25245,
                        "src": "6833:1:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 25253,
                    "nodeType": "ExpressionStatement",
                    "src": "6833:3:72"
                  },
                  "nodeType": "ForStatement",
                  "src": "6804:106:72"
                },
                {
                  "expression": {
                    "id": 25274,
                    "name": "out",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 25231,
                    "src": "6926:3:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 25229,
                  "id": 25275,
                  "nodeType": "Return",
                  "src": "6919:10:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "bytesToBytes32",
            "nameLocation": "6641:14:72",
            "parameters": {
              "id": 25226,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25223,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "6669:1:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25277,
                  "src": "6656:14:72",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 25222,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6656:5:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25225,
                  "mutability": "mutable",
                  "name": "offset",
                  "nameLocation": "6680:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25277,
                  "src": "6672:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25224,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6672:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6655:32:72"
            },
            "returnParameters": {
              "id": 25229,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25228,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 25277,
                  "src": "6710:7:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 25227,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6710:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6709:9:72"
            },
            "scope": 25319,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 25318,
            "nodeType": "FunctionDefinition",
            "src": "6942:393:72",
            "nodes": [],
            "body": {
              "id": 25317,
              "nodeType": "Block",
              "src": "7015:320:72",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    25286
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25286,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "7038:6:72",
                      "nodeType": "VariableDeclaration",
                      "scope": 25317,
                      "src": "7025:19:72",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 25285,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "7025:5:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 25294,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 25292,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 25289,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25280,
                            "src": "7057:1:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                              "typeString": "bytes32[] memory"
                            }
                          },
                          "id": 25290,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7059:6:72",
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "src": "7057:8:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "hexValue": "3332",
                          "id": 25291,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7068:2:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_32_by_1",
                            "typeString": "int_const 32"
                          },
                          "value": "32"
                        },
                        "src": "7057:13:72",
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
                      "id": 25288,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "7047:9:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (bytes memory)"
                      },
                      "typeName": {
                        "id": 25287,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "7051:5:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      }
                    },
                    "id": 25293,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7047:24:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7025:46:72"
                },
                {
                  "body": {
                    "id": 25313,
                    "nodeType": "Block",
                    "src": "7120:185:72",
                    "statements": [
                      {
                        "assignments": [
                          25307
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 25307,
                            "mutability": "mutable",
                            "name": "k",
                            "nameLocation": "7142:1:72",
                            "nodeType": "VariableDeclaration",
                            "scope": 25313,
                            "src": "7134:9:72",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 25306,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "7134:7:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 25311,
                        "initialValue": {
                          "baseExpression": {
                            "id": 25308,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25280,
                            "src": "7146:1:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                              "typeString": "bytes32[] memory"
                            }
                          },
                          "id": 25310,
                          "indexExpression": {
                            "id": 25309,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25296,
                            "src": "7148:1:72",
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
                          "src": "7146:4:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "7134:16:72"
                      },
                      {
                        "AST": {
                          "nodeType": "YulBlock",
                          "src": "7220:75:72",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "result",
                                        "nodeType": "YulIdentifier",
                                        "src": "7249:6:72"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "7261:2:72",
                                            "type": "",
                                            "value": "32"
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "7269:2:72",
                                                "type": "",
                                                "value": "32"
                                              },
                                              {
                                                "name": "i",
                                                "nodeType": "YulIdentifier",
                                                "src": "7273:1:72"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "mul",
                                              "nodeType": "YulIdentifier",
                                              "src": "7265:3:72"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "7265:10:72"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "7257:3:72"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "7257:19:72"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "7245:3:72"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "7245:32:72"
                                  },
                                  {
                                    "name": "k",
                                    "nodeType": "YulIdentifier",
                                    "src": "7279:1:72"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "7238:6:72"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "7238:43:72"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "7238:43:72"
                            }
                          ]
                        },
                        "documentation": "@solidity memory-safe-assembly",
                        "evmVersion": "paris",
                        "externalReferences": [
                          {
                            "declaration": 25296,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "7273:1:72",
                            "valueSize": 1
                          },
                          {
                            "declaration": 25307,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "7279:1:72",
                            "valueSize": 1
                          },
                          {
                            "declaration": 25286,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "7249:6:72",
                            "valueSize": 1
                          }
                        ],
                        "id": 25312,
                        "nodeType": "InlineAssembly",
                        "src": "7211:84:72"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 25302,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 25299,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25296,
                      "src": "7101:1:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 25300,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25280,
                        "src": "7105:1:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                          "typeString": "bytes32[] memory"
                        }
                      },
                      "id": 25301,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7107:6:72",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "7105:8:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7101:12:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 25314,
                  "initializationExpression": {
                    "assignments": [
                      25296
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 25296,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "7094:1:72",
                        "nodeType": "VariableDeclaration",
                        "scope": 25314,
                        "src": "7086:9:72",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 25295,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "7086:7:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 25298,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 25297,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7098:1:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "7086:13:72"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 25304,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "7115:3:72",
                      "subExpression": {
                        "id": 25303,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25296,
                        "src": "7115:1:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 25305,
                    "nodeType": "ExpressionStatement",
                    "src": "7115:3:72"
                  },
                  "nodeType": "ForStatement",
                  "src": "7081:224:72"
                },
                {
                  "expression": {
                    "id": 25315,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 25286,
                    "src": "7322:6:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 25284,
                  "id": 25316,
                  "nodeType": "Return",
                  "src": "7315:13:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "flatten",
            "nameLocation": "6951:7:72",
            "parameters": {
              "id": 25281,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25280,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "6976:1:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25318,
                  "src": "6959:18:72",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 25278,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "6959:7:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 25279,
                    "nodeType": "ArrayTypeName",
                    "src": "6959:9:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6958:20:72"
            },
            "returnParameters": {
              "id": 25284,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25283,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 25318,
                  "src": "7001:12:72",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 25282,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7001:5:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7000:14:72"
            },
            "scope": 25319,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "stdStorageSafe",
        "contractDependencies": [],
        "contractKind": "library",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          25319
        ],
        "name": "stdStorageSafe",
        "nameLocation": "376:14:72",
        "scope": 25881,
        "usedErrors": []
      },
      {
        "id": 25880,
        "nodeType": "ContractDefinition",
        "src": "7339:4665:72",
        "nodes": [
          {
            "id": 25336,
            "nodeType": "VariableDeclaration",
            "src": "7364:84:72",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "vm",
            "nameLocation": "7384:2:72",
            "scope": 25880,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Vm_$29527",
              "typeString": "contract Vm"
            },
            "typeName": {
              "id": 25321,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 25320,
                "name": "Vm",
                "nameLocations": [
                  "7364:2:72"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 29527,
                "src": "7364:2:72"
              },
              "referencedDeclaration": 29527,
              "src": "7364:2:72",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Vm_$29527",
                "typeString": "contract Vm"
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
                                  "id": 25330,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "string",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7426:17:72",
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
                                "id": 25329,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "7416:9:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                              },
                              "id": 25331,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7416:28:72",
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
                            "id": 25328,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "7408:7:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 25327,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "7408:7:72",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 25332,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7408:37:72",
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
                        "id": 25326,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "7400:7:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint160_$",
                          "typeString": "type(uint160)"
                        },
                        "typeName": {
                          "id": 25325,
                          "name": "uint160",
                          "nodeType": "ElementaryTypeName",
                          "src": "7400:7:72",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 25333,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7400:46:72",
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
                    "id": 25324,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "ElementaryTypeNameExpression",
                    "src": "7392:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_address_$",
                      "typeString": "type(address)"
                    },
                    "typeName": {
                      "id": 25323,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "7392:7:72",
                      "typeDescriptions": {}
                    }
                  },
                  "id": 25334,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "typeConversion",
                  "lValueRequested": false,
                  "nameLocations": [],
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "7392:55:72",
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
                "id": 25322,
                "name": "Vm",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 29527,
                "src": "7389:2:72",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_contract$_Vm_$29527_$",
                  "typeString": "type(contract Vm)"
                }
              },
              "id": 25335,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "7389:59:72",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Vm_$29527",
                "typeString": "contract Vm"
              }
            },
            "visibility": "private"
          },
          {
            "id": 25349,
            "nodeType": "FunctionDefinition",
            "src": "7455:118:72",
            "nodes": [],
            "body": {
              "id": 25348,
              "nodeType": "Block",
              "src": "7522:51:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 25345,
                        "name": "sigStr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25338,
                        "src": "7559:6:72",
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
                        }
                      ],
                      "expression": {
                        "id": 25343,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25319,
                        "src": "7539:14:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$25319_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 25344,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7554:4:72",
                      "memberName": "sigs",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24478,
                      "src": "7539:19:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_bytes4_$",
                        "typeString": "function (string memory) pure returns (bytes4)"
                      }
                    },
                    "id": 25346,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7539:27:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "functionReturnParameters": 25342,
                  "id": 25347,
                  "nodeType": "Return",
                  "src": "7532:34:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sigs",
            "nameLocation": "7464:4:72",
            "parameters": {
              "id": 25339,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25338,
                  "mutability": "mutable",
                  "name": "sigStr",
                  "nameLocation": "7483:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25349,
                  "src": "7469:20:72",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 25337,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7469:6:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7468:22:72"
            },
            "returnParameters": {
              "id": 25342,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25341,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 25349,
                  "src": "7514:6:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 25340,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "7514:6:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7513:8:72"
            },
            "scope": 25880,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 25363,
            "nodeType": "FunctionDefinition",
            "src": "7579:115:72",
            "nodes": [],
            "body": {
              "id": 25362,
              "nodeType": "Block",
              "src": "7645:49:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 25359,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25352,
                        "src": "7682:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      ],
                      "expression": {
                        "id": 25357,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25319,
                        "src": "7662:14:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$25319_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 25358,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7677:4:72",
                      "memberName": "find",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24922,
                      "src": "7662:19:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$24427_storage_ptr_$returns$_t_uint256_$",
                        "typeString": "function (struct StdStorage storage pointer) returns (uint256)"
                      }
                    },
                    "id": 25360,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7662:25:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 25356,
                  "id": 25361,
                  "nodeType": "Return",
                  "src": "7655:32:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "find",
            "nameLocation": "7588:4:72",
            "parameters": {
              "id": 25353,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25352,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "7612:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25363,
                  "src": "7593:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25351,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25350,
                      "name": "StdStorage",
                      "nameLocations": [
                        "7593:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "7593:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "7593:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7592:25:72"
            },
            "returnParameters": {
              "id": 25356,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25355,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 25363,
                  "src": "7636:7:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25354,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7636:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7635:9:72"
            },
            "scope": 25880,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 25381,
            "nodeType": "FunctionDefinition",
            "src": "7700:156:72",
            "nodes": [],
            "body": {
              "id": 25380,
              "nodeType": "Block",
              "src": "7796:60:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 25376,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25366,
                        "src": "7835:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      {
                        "id": 25377,
                        "name": "_target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25368,
                        "src": "7841:7:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "id": 25374,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25319,
                        "src": "7813:14:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$25319_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 25375,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7828:6:72",
                      "memberName": "target",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24942,
                      "src": "7813:21:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$24427_storage_ptr_$_t_address_$returns$_t_struct$_StdStorage_$24427_storage_ptr_$",
                        "typeString": "function (struct StdStorage storage pointer,address) returns (struct StdStorage storage pointer)"
                      }
                    },
                    "id": 25378,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7813:36:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 25373,
                  "id": 25379,
                  "nodeType": "Return",
                  "src": "7806:43:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "target",
            "nameLocation": "7709:6:72",
            "parameters": {
              "id": 25369,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25366,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "7735:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25381,
                  "src": "7716:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25365,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25364,
                      "name": "StdStorage",
                      "nameLocations": [
                        "7716:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "7716:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "7716:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25368,
                  "mutability": "mutable",
                  "name": "_target",
                  "nameLocation": "7749:7:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25381,
                  "src": "7741:15:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 25367,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7741:7:72",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7715:42:72"
            },
            "returnParameters": {
              "id": 25373,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25372,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 25381,
                  "src": "7776:18:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25371,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25370,
                      "name": "StdStorage",
                      "nameLocations": [
                        "7776:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "7776:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "7776:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7775:20:72"
            },
            "scope": 25880,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 25399,
            "nodeType": "FunctionDefinition",
            "src": "7862:143:72",
            "nodes": [],
            "body": {
              "id": 25398,
              "nodeType": "Block",
              "src": "7951:54:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 25394,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25384,
                        "src": "7987:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      {
                        "id": 25395,
                        "name": "_sig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25386,
                        "src": "7993:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      ],
                      "expression": {
                        "id": 25392,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25319,
                        "src": "7968:14:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$25319_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 25393,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7983:3:72",
                      "memberName": "sig",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24962,
                      "src": "7968:18:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$24427_storage_ptr_$_t_bytes4_$returns$_t_struct$_StdStorage_$24427_storage_ptr_$",
                        "typeString": "function (struct StdStorage storage pointer,bytes4) returns (struct StdStorage storage pointer)"
                      }
                    },
                    "id": 25396,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7968:30:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 25391,
                  "id": 25397,
                  "nodeType": "Return",
                  "src": "7961:37:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sig",
            "nameLocation": "7871:3:72",
            "parameters": {
              "id": 25387,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25384,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "7894:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25399,
                  "src": "7875:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25383,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25382,
                      "name": "StdStorage",
                      "nameLocations": [
                        "7875:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "7875:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "7875:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25386,
                  "mutability": "mutable",
                  "name": "_sig",
                  "nameLocation": "7907:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25399,
                  "src": "7900:11:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 25385,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "7900:6:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7874:38:72"
            },
            "returnParameters": {
              "id": 25391,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25390,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 25399,
                  "src": "7931:18:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25389,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25388,
                      "name": "StdStorage",
                      "nameLocations": [
                        "7931:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "7931:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "7931:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7930:20:72"
            },
            "scope": 25880,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 25417,
            "nodeType": "FunctionDefinition",
            "src": "8011:150:72",
            "nodes": [],
            "body": {
              "id": 25416,
              "nodeType": "Block",
              "src": "8107:54:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 25412,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25402,
                        "src": "8143:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      {
                        "id": 25413,
                        "name": "_sig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25404,
                        "src": "8149:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "id": 25410,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25319,
                        "src": "8124:14:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$25319_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 25411,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8139:3:72",
                      "memberName": "sig",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24984,
                      "src": "8124:18:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$24427_storage_ptr_$_t_string_memory_ptr_$returns$_t_struct$_StdStorage_$24427_storage_ptr_$",
                        "typeString": "function (struct StdStorage storage pointer,string memory) returns (struct StdStorage storage pointer)"
                      }
                    },
                    "id": 25414,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8124:30:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 25409,
                  "id": 25415,
                  "nodeType": "Return",
                  "src": "8117:37:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sig",
            "nameLocation": "8020:3:72",
            "parameters": {
              "id": 25405,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25402,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8043:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25417,
                  "src": "8024:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25401,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25400,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8024:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "8024:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "8024:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25404,
                  "mutability": "mutable",
                  "name": "_sig",
                  "nameLocation": "8063:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25417,
                  "src": "8049:18:72",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 25403,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8049:6:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8023:45:72"
            },
            "returnParameters": {
              "id": 25409,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25408,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 25417,
                  "src": "8087:18:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25407,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25406,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8087:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "8087:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "8087:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8086:20:72"
            },
            "scope": 25880,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 25435,
            "nodeType": "FunctionDefinition",
            "src": "8167:152:72",
            "nodes": [],
            "body": {
              "id": 25434,
              "nodeType": "Block",
              "src": "8261:58:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 25430,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25420,
                        "src": "8302:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      {
                        "id": 25431,
                        "name": "who",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25422,
                        "src": "8308:3:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "id": 25428,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25319,
                        "src": "8278:14:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$25319_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 25429,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8293:8:72",
                      "memberName": "with_key",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 25015,
                      "src": "8278:23:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$24427_storage_ptr_$_t_address_$returns$_t_struct$_StdStorage_$24427_storage_ptr_$",
                        "typeString": "function (struct StdStorage storage pointer,address) returns (struct StdStorage storage pointer)"
                      }
                    },
                    "id": 25432,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8278:34:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 25427,
                  "id": 25433,
                  "nodeType": "Return",
                  "src": "8271:41:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "with_key",
            "nameLocation": "8176:8:72",
            "parameters": {
              "id": 25423,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25420,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8204:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25435,
                  "src": "8185:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25419,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25418,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8185:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "8185:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "8185:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25422,
                  "mutability": "mutable",
                  "name": "who",
                  "nameLocation": "8218:3:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25435,
                  "src": "8210:11:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 25421,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8210:7:72",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8184:38:72"
            },
            "returnParameters": {
              "id": 25427,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25426,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 25435,
                  "src": "8241:18:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25425,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25424,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8241:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "8241:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "8241:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8240:20:72"
            },
            "scope": 25880,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 25453,
            "nodeType": "FunctionDefinition",
            "src": "8325:152:72",
            "nodes": [],
            "body": {
              "id": 25452,
              "nodeType": "Block",
              "src": "8419:58:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 25448,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25438,
                        "src": "8460:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      {
                        "id": 25449,
                        "name": "amt",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25440,
                        "src": "8466:3:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 25446,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25319,
                        "src": "8436:14:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$25319_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 25447,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8451:8:72",
                      "memberName": "with_key",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 25040,
                      "src": "8436:23:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$24427_storage_ptr_$_t_uint256_$returns$_t_struct$_StdStorage_$24427_storage_ptr_$",
                        "typeString": "function (struct StdStorage storage pointer,uint256) returns (struct StdStorage storage pointer)"
                      }
                    },
                    "id": 25450,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8436:34:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 25445,
                  "id": 25451,
                  "nodeType": "Return",
                  "src": "8429:41:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "with_key",
            "nameLocation": "8334:8:72",
            "parameters": {
              "id": 25441,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25438,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8362:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25453,
                  "src": "8343:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25437,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25436,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8343:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "8343:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "8343:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25440,
                  "mutability": "mutable",
                  "name": "amt",
                  "nameLocation": "8376:3:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25453,
                  "src": "8368:11:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25439,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8368:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8342:38:72"
            },
            "returnParameters": {
              "id": 25445,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25444,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 25453,
                  "src": "8399:18:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25443,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25442,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8399:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "8399:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "8399:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8398:20:72"
            },
            "scope": 25880,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 25471,
            "nodeType": "FunctionDefinition",
            "src": "8483:152:72",
            "nodes": [],
            "body": {
              "id": 25470,
              "nodeType": "Block",
              "src": "8577:58:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 25466,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25456,
                        "src": "8618:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      {
                        "id": 25467,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25458,
                        "src": "8624:3:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "id": 25464,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25319,
                        "src": "8594:14:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$25319_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 25465,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8609:8:72",
                      "memberName": "with_key",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 25062,
                      "src": "8594:23:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$24427_storage_ptr_$_t_bytes32_$returns$_t_struct$_StdStorage_$24427_storage_ptr_$",
                        "typeString": "function (struct StdStorage storage pointer,bytes32) returns (struct StdStorage storage pointer)"
                      }
                    },
                    "id": 25468,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8594:34:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 25463,
                  "id": 25469,
                  "nodeType": "Return",
                  "src": "8587:41:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "with_key",
            "nameLocation": "8492:8:72",
            "parameters": {
              "id": 25459,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25456,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8520:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25471,
                  "src": "8501:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25455,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25454,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8501:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "8501:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "8501:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25458,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "8534:3:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25471,
                  "src": "8526:11:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 25457,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8526:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8500:38:72"
            },
            "returnParameters": {
              "id": 25463,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25462,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 25471,
                  "src": "8557:18:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25461,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25460,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8557:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "8557:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "8557:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8556:20:72"
            },
            "scope": 25880,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 25489,
            "nodeType": "FunctionDefinition",
            "src": "8641:152:72",
            "nodes": [],
            "body": {
              "id": 25488,
              "nodeType": "Block",
              "src": "8735:58:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 25484,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25474,
                        "src": "8773:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      {
                        "id": 25485,
                        "name": "_depth",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25476,
                        "src": "8779:6:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 25482,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25319,
                        "src": "8752:14:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$25319_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 25483,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8767:5:72",
                      "memberName": "depth",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 25082,
                      "src": "8752:20:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$24427_storage_ptr_$_t_uint256_$returns$_t_struct$_StdStorage_$24427_storage_ptr_$",
                        "typeString": "function (struct StdStorage storage pointer,uint256) returns (struct StdStorage storage pointer)"
                      }
                    },
                    "id": 25486,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8752:34:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 25481,
                  "id": 25487,
                  "nodeType": "Return",
                  "src": "8745:41:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "depth",
            "nameLocation": "8650:5:72",
            "parameters": {
              "id": 25477,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25474,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8675:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25489,
                  "src": "8656:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25473,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25472,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8656:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "8656:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "8656:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25476,
                  "mutability": "mutable",
                  "name": "_depth",
                  "nameLocation": "8689:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25489,
                  "src": "8681:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25475,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8681:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8655:41:72"
            },
            "returnParameters": {
              "id": 25481,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25480,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 25489,
                  "src": "8715:18:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25479,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25478,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8715:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "8715:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "8715:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8714:20:72"
            },
            "scope": 25880,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 25512,
            "nodeType": "FunctionDefinition",
            "src": "8799:138:72",
            "nodes": [],
            "body": {
              "id": 25511,
              "nodeType": "Block",
              "src": "8869:68:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 25498,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25492,
                        "src": "8893:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 25505,
                                    "name": "who",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 25494,
                                    "src": "8923:3:72",
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
                                  "id": 25504,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "8915:7:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint160_$",
                                    "typeString": "type(uint160)"
                                  },
                                  "typeName": {
                                    "id": 25503,
                                    "name": "uint160",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "8915:7:72",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 25506,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8915:12:72",
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
                              "id": 25502,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "8907:7:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 25501,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "8907:7:72",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 25507,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8907:21:72",
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
                          "id": 25500,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8899:7:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 25499,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "8899:7:72",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 25508,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8899:30:72",
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
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 25497,
                      "name": "checked_write",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        25512,
                        25529,
                        25567,
                        25712
                      ],
                      "referencedDeclaration": 25712,
                      "src": "8879:13:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$24427_storage_ptr_$_t_bytes32_$returns$__$",
                        "typeString": "function (struct StdStorage storage pointer,bytes32)"
                      }
                    },
                    "id": 25509,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8879:51:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 25510,
                  "nodeType": "ExpressionStatement",
                  "src": "8879:51:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "checked_write",
            "nameLocation": "8808:13:72",
            "parameters": {
              "id": 25495,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25492,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8841:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25512,
                  "src": "8822:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25491,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25490,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8822:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "8822:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "8822:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25494,
                  "mutability": "mutable",
                  "name": "who",
                  "nameLocation": "8855:3:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25512,
                  "src": "8847:11:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 25493,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8847:7:72",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8821:38:72"
            },
            "returnParameters": {
              "id": 25496,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8869:0:72"
            },
            "scope": 25880,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 25529,
            "nodeType": "FunctionDefinition",
            "src": "8943:120:72",
            "nodes": [],
            "body": {
              "id": 25528,
              "nodeType": "Block",
              "src": "9013:50:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 25521,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25515,
                        "src": "9037:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 25524,
                            "name": "amt",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25517,
                            "src": "9051:3:72",
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
                          "id": 25523,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "9043:7:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 25522,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "9043:7:72",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 25525,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9043:12:72",
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
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 25520,
                      "name": "checked_write",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        25512,
                        25529,
                        25567,
                        25712
                      ],
                      "referencedDeclaration": 25712,
                      "src": "9023:13:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$24427_storage_ptr_$_t_bytes32_$returns$__$",
                        "typeString": "function (struct StdStorage storage pointer,bytes32)"
                      }
                    },
                    "id": 25526,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9023:33:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 25527,
                  "nodeType": "ExpressionStatement",
                  "src": "9023:33:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "checked_write",
            "nameLocation": "8952:13:72",
            "parameters": {
              "id": 25518,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25515,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8985:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25529,
                  "src": "8966:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25514,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25513,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8966:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "8966:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "8966:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25517,
                  "mutability": "mutable",
                  "name": "amt",
                  "nameLocation": "8999:3:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25529,
                  "src": "8991:11:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25516,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8991:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8965:38:72"
            },
            "returnParameters": {
              "id": 25519,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9013:0:72"
            },
            "scope": 25880,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 25549,
            "nodeType": "FunctionDefinition",
            "src": "9069:132:72",
            "nodes": [],
            "body": {
              "id": 25548,
              "nodeType": "Block",
              "src": "9142:59:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 25538,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25532,
                        "src": "9166:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 25543,
                                "name": "val",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 25534,
                                "src": "9188:3:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              ],
                              "id": 25542,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "9180:7:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 25541,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "9180:7:72",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 25544,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9180:12:72",
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
                          "id": 25540,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "9172:7:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 25539,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "9172:7:72",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 25545,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9172:21:72",
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
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 25537,
                      "name": "checked_write",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        25512,
                        25529,
                        25567,
                        25712
                      ],
                      "referencedDeclaration": 25712,
                      "src": "9152:13:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$24427_storage_ptr_$_t_bytes32_$returns$__$",
                        "typeString": "function (struct StdStorage storage pointer,bytes32)"
                      }
                    },
                    "id": 25546,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9152:42:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 25547,
                  "nodeType": "ExpressionStatement",
                  "src": "9152:42:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "checked_write_int",
            "nameLocation": "9078:17:72",
            "parameters": {
              "id": 25535,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25532,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "9115:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25549,
                  "src": "9096:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25531,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25530,
                      "name": "StdStorage",
                      "nameLocations": [
                        "9096:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "9096:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "9096:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25534,
                  "mutability": "mutable",
                  "name": "val",
                  "nameLocation": "9128:3:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25549,
                  "src": "9121:10:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 25533,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9121:6:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9095:37:72"
            },
            "returnParameters": {
              "id": 25536,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9142:0:72"
            },
            "scope": 25880,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 25567,
            "nodeType": "FunctionDefinition",
            "src": "9207:222:72",
            "nodes": [],
            "body": {
              "id": 25566,
              "nodeType": "Block",
              "src": "9276:153:72",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    25558
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25558,
                      "mutability": "mutable",
                      "name": "t",
                      "nameLocation": "9294:1:72",
                      "nodeType": "VariableDeclaration",
                      "scope": 25566,
                      "src": "9286:9:72",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 25557,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "9286:7:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 25559,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9286:9:72"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "9357:34:72",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "9371:10:72",
                        "value": {
                          "name": "write",
                          "nodeType": "YulIdentifier",
                          "src": "9376:5:72"
                        },
                        "variableNames": [
                          {
                            "name": "t",
                            "nodeType": "YulIdentifier",
                            "src": "9371:1:72"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 25558,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9371:1:72",
                      "valueSize": 1
                    },
                    {
                      "declaration": 25554,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9376:5:72",
                      "valueSize": 1
                    }
                  ],
                  "id": 25560,
                  "nodeType": "InlineAssembly",
                  "src": "9348:43:72"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 25562,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25552,
                        "src": "9414:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      {
                        "id": 25563,
                        "name": "t",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25558,
                        "src": "9420:1:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 25561,
                      "name": "checked_write",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        25512,
                        25529,
                        25567,
                        25712
                      ],
                      "referencedDeclaration": 25712,
                      "src": "9400:13:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$24427_storage_ptr_$_t_bytes32_$returns$__$",
                        "typeString": "function (struct StdStorage storage pointer,bytes32)"
                      }
                    },
                    "id": 25564,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9400:22:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 25565,
                  "nodeType": "ExpressionStatement",
                  "src": "9400:22:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "checked_write",
            "nameLocation": "9216:13:72",
            "parameters": {
              "id": 25555,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25552,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "9249:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25567,
                  "src": "9230:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25551,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25550,
                      "name": "StdStorage",
                      "nameLocations": [
                        "9230:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "9230:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "9230:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25554,
                  "mutability": "mutable",
                  "name": "write",
                  "nameLocation": "9260:5:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25567,
                  "src": "9255:10:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 25553,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "9255:4:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9229:37:72"
            },
            "returnParameters": {
              "id": 25556,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9276:0:72"
            },
            "scope": 25880,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 25712,
            "nodeType": "FunctionDefinition",
            "src": "9435:1095:72",
            "nodes": [],
            "body": {
              "id": 25711,
              "nodeType": "Block",
              "src": "9505:1025:72",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    25576
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25576,
                      "mutability": "mutable",
                      "name": "who",
                      "nameLocation": "9523:3:72",
                      "nodeType": "VariableDeclaration",
                      "scope": 25711,
                      "src": "9515:11:72",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 25575,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "9515:7:72",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 25579,
                  "initialValue": {
                    "expression": {
                      "id": 25577,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25570,
                      "src": "9529:4:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                        "typeString": "struct StdStorage storage pointer"
                      }
                    },
                    "id": 25578,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "9534:7:72",
                    "memberName": "_target",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 24424,
                    "src": "9529:12:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9515:26:72"
                },
                {
                  "assignments": [
                    25581
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25581,
                      "mutability": "mutable",
                      "name": "fsig",
                      "nameLocation": "9558:4:72",
                      "nodeType": "VariableDeclaration",
                      "scope": 25711,
                      "src": "9551:11:72",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      },
                      "typeName": {
                        "id": 25580,
                        "name": "bytes4",
                        "nodeType": "ElementaryTypeName",
                        "src": "9551:6:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 25584,
                  "initialValue": {
                    "expression": {
                      "id": 25582,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25570,
                      "src": "9565:4:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                        "typeString": "struct StdStorage storage pointer"
                      }
                    },
                    "id": 25583,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "9570:4:72",
                    "memberName": "_sig",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 24420,
                    "src": "9565:9:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9551:23:72"
                },
                {
                  "assignments": [
                    25586
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25586,
                      "mutability": "mutable",
                      "name": "field_depth",
                      "nameLocation": "9592:11:72",
                      "nodeType": "VariableDeclaration",
                      "scope": 25711,
                      "src": "9584:19:72",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 25585,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9584:7:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 25589,
                  "initialValue": {
                    "expression": {
                      "id": 25587,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25570,
                      "src": "9606:4:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                        "typeString": "struct StdStorage storage pointer"
                      }
                    },
                    "id": 25588,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "9611:6:72",
                    "memberName": "_depth",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 24422,
                    "src": "9606:11:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9584:33:72"
                },
                {
                  "assignments": [
                    25594
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25594,
                      "mutability": "mutable",
                      "name": "ins",
                      "nameLocation": "9644:3:72",
                      "nodeType": "VariableDeclaration",
                      "scope": 25711,
                      "src": "9627:20:72",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 25592,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "9627:7:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 25593,
                        "nodeType": "ArrayTypeName",
                        "src": "9627:9:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 25597,
                  "initialValue": {
                    "expression": {
                      "id": 25595,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25570,
                      "src": "9650:4:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                        "typeString": "struct StdStorage storage pointer"
                      }
                    },
                    "id": 25596,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "9655:5:72",
                    "memberName": "_keys",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 24418,
                    "src": "9650:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                      "typeString": "bytes32[] storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9627:33:72"
                },
                {
                  "assignments": [
                    25599
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25599,
                      "mutability": "mutable",
                      "name": "cald",
                      "nameLocation": "9684:4:72",
                      "nodeType": "VariableDeclaration",
                      "scope": 25711,
                      "src": "9671:17:72",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 25598,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "9671:5:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 25607,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 25602,
                        "name": "fsig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25581,
                        "src": "9708:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 25604,
                            "name": "ins",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25594,
                            "src": "9722:3:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                              "typeString": "bytes32[] memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                              "typeString": "bytes32[] memory"
                            }
                          ],
                          "id": 25603,
                          "name": "flatten",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25879,
                          "src": "9714:7:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_array$_t_bytes32_$dyn_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes32[] memory) pure returns (bytes memory)"
                          }
                        },
                        "id": 25605,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9714:12:72",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "id": 25600,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -1,
                        "src": "9691:3:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 25601,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "9695:12:72",
                      "memberName": "encodePacked",
                      "nodeType": "MemberAccess",
                      "src": "9691:16:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function () pure returns (bytes memory)"
                      }
                    },
                    "id": 25606,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9691:36:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9671:56:72"
                },
                {
                  "condition": {
                    "id": 25622,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "9741:69:72",
                    "subExpression": {
                      "baseExpression": {
                        "baseExpression": {
                          "baseExpression": {
                            "expression": {
                              "id": 25608,
                              "name": "self",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25570,
                              "src": "9742:4:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                                "typeString": "struct StdStorage storage pointer"
                              }
                            },
                            "id": 25609,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "9747:5:72",
                            "memberName": "finds",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 24415,
                            "src": "9742:10:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$_$",
                              "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => bool)))"
                            }
                          },
                          "id": 25611,
                          "indexExpression": {
                            "id": 25610,
                            "name": "who",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25576,
                            "src": "9753:3:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "9742:15:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                            "typeString": "mapping(bytes4 => mapping(bytes32 => bool))"
                          }
                        },
                        "id": 25613,
                        "indexExpression": {
                          "id": 25612,
                          "name": "fsig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25581,
                          "src": "9758:4:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "9742:21:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                          "typeString": "mapping(bytes32 => bool)"
                        }
                      },
                      "id": 25621,
                      "indexExpression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 25617,
                                "name": "ins",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 25594,
                                "src": "9791:3:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                  "typeString": "bytes32[] memory"
                                }
                              },
                              {
                                "id": 25618,
                                "name": "field_depth",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 25586,
                                "src": "9796:11:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                  "typeString": "bytes32[] memory"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 25615,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "9774:3:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 25616,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "9778:12:72",
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "src": "9774:16:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 25619,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9774:34:72",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 25614,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -8,
                          "src": "9764:9:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 25620,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9764:45:72",
                        "tryCall": false,
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
                      "src": "9742:68:72",
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
                  "id": 25628,
                  "nodeType": "IfStatement",
                  "src": "9737:110:72",
                  "trueBody": {
                    "id": 25627,
                    "nodeType": "Block",
                    "src": "9812:35:72",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 25624,
                              "name": "self",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25570,
                              "src": "9831:4:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                                "typeString": "struct StdStorage storage pointer"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                                "typeString": "struct StdStorage storage pointer"
                              }
                            ],
                            "id": 25623,
                            "name": "find",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25363,
                            "src": "9826:4:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$24427_storage_ptr_$returns$_t_uint256_$",
                              "typeString": "function (struct StdStorage storage pointer) returns (uint256)"
                            }
                          },
                          "id": 25625,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9826:10:72",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 25626,
                        "nodeType": "ExpressionStatement",
                        "src": "9826:10:72"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    25630
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25630,
                      "mutability": "mutable",
                      "name": "slot",
                      "nameLocation": "9864:4:72",
                      "nodeType": "VariableDeclaration",
                      "scope": 25711,
                      "src": "9856:12:72",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 25629,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "9856:7:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 25648,
                  "initialValue": {
                    "arguments": [
                      {
                        "baseExpression": {
                          "baseExpression": {
                            "baseExpression": {
                              "expression": {
                                "id": 25633,
                                "name": "self",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 25570,
                                "src": "9879:4:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                                  "typeString": "struct StdStorage storage pointer"
                                }
                              },
                              "id": 25634,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "9884:5:72",
                              "memberName": "slots",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 24407,
                              "src": "9879:10:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$_$",
                                "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => uint256)))"
                              }
                            },
                            "id": 25636,
                            "indexExpression": {
                              "id": 25635,
                              "name": "who",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25576,
                              "src": "9890:3:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "9879:15:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$",
                              "typeString": "mapping(bytes4 => mapping(bytes32 => uint256))"
                            }
                          },
                          "id": 25638,
                          "indexExpression": {
                            "id": 25637,
                            "name": "fsig",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25581,
                            "src": "9895:4:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "9879:21:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                            "typeString": "mapping(bytes32 => uint256)"
                          }
                        },
                        "id": 25646,
                        "indexExpression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 25642,
                                  "name": "ins",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 25594,
                                  "src": "9928:3:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                    "typeString": "bytes32[] memory"
                                  }
                                },
                                {
                                  "id": 25643,
                                  "name": "field_depth",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 25586,
                                  "src": "9933:11:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                    "typeString": "bytes32[] memory"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "expression": {
                                  "id": 25640,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -1,
                                  "src": "9911:3:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 25641,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberLocation": "9915:12:72",
                                "memberName": "encodePacked",
                                "nodeType": "MemberAccess",
                                "src": "9911:16:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 25644,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9911:34:72",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 25639,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -8,
                            "src": "9901:9:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 25645,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9901:45:72",
                          "tryCall": false,
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
                        "src": "9879:68:72",
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
                      "id": 25632,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "9871:7:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes32_$",
                        "typeString": "type(bytes32)"
                      },
                      "typeName": {
                        "id": 25631,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "9871:7:72",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 25647,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9871:77:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9856:92:72"
                },
                {
                  "assignments": [
                    25650
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25650,
                      "mutability": "mutable",
                      "name": "fdat",
                      "nameLocation": "9967:4:72",
                      "nodeType": "VariableDeclaration",
                      "scope": 25711,
                      "src": "9959:12:72",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 25649,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "9959:7:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 25651,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9959:12:72"
                },
                {
                  "id": 25668,
                  "nodeType": "Block",
                  "src": "9981:128:72",
                  "statements": [
                    {
                      "assignments": [
                        null,
                        25653
                      ],
                      "declarations": [
                        null,
                        {
                          "constant": false,
                          "id": 25653,
                          "mutability": "mutable",
                          "name": "rdat",
                          "nameLocation": "10011:4:72",
                          "nodeType": "VariableDeclaration",
                          "scope": 25668,
                          "src": "9998:17:72",
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes"
                          },
                          "typeName": {
                            "id": 25652,
                            "name": "bytes",
                            "nodeType": "ElementaryTypeName",
                            "src": "9998:5:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_storage_ptr",
                              "typeString": "bytes"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 25658,
                      "initialValue": {
                        "arguments": [
                          {
                            "id": 25656,
                            "name": "cald",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25599,
                            "src": "10034:4:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "expression": {
                            "id": 25654,
                            "name": "who",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25576,
                            "src": "10019:3:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 25655,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "10023:10:72",
                          "memberName": "staticcall",
                          "nodeType": "MemberAccess",
                          "src": "10019:14:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes memory) view returns (bool,bytes memory)"
                          }
                        },
                        "id": 25657,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10019:20:72",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                          "typeString": "tuple(bool,bytes memory)"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "9995:44:72"
                    },
                    {
                      "expression": {
                        "id": 25666,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 25659,
                          "name": "fdat",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25650,
                          "src": "10053:4:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "arguments": [
                            {
                              "id": 25661,
                              "name": "rdat",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25653,
                              "src": "10075:4:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 25664,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "hexValue": "3332",
                                "id": 25662,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10081:2:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_32_by_1",
                                  "typeString": "int_const 32"
                                },
                                "value": "32"
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "id": 25663,
                                "name": "field_depth",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 25586,
                                "src": "10086:11:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "10081:16:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 25660,
                            "name": "bytesToBytes32",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25838,
                            "src": "10060:14:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$_t_uint256_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory,uint256) pure returns (bytes32)"
                            }
                          },
                          "id": 25665,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10060:38:72",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "src": "10053:45:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "id": 25667,
                      "nodeType": "ExpressionStatement",
                      "src": "10053:45:72"
                    }
                  ]
                },
                {
                  "assignments": [
                    25670
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25670,
                      "mutability": "mutable",
                      "name": "curr",
                      "nameLocation": "10126:4:72",
                      "nodeType": "VariableDeclaration",
                      "scope": 25711,
                      "src": "10118:12:72",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 25669,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "10118:7:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 25676,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 25673,
                        "name": "who",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25576,
                        "src": "10141:3:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 25674,
                        "name": "slot",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25630,
                        "src": "10146:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "id": 25671,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25336,
                        "src": "10133:2:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Vm_$29527",
                          "typeString": "contract Vm"
                        }
                      },
                      "id": 25672,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10136:4:72",
                      "memberName": "load",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28047,
                      "src": "10133:7:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (address,bytes32) view external returns (bytes32)"
                      }
                    },
                    "id": 25675,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10133:18:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10118:33:72"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 25679,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 25677,
                      "name": "fdat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25650,
                      "src": "10166:4:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 25678,
                      "name": "curr",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25670,
                      "src": "10174:4:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "10166:12:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 25686,
                  "nodeType": "IfStatement",
                  "src": "10162:218:72",
                  "trueBody": {
                    "id": 25685,
                    "nodeType": "Block",
                    "src": "10180:200:72",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "hexValue": "66616c7365",
                              "id": 25681,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10219:5:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "false"
                            },
                            {
                              "hexValue": "73746453746f726167652066696e642853746453746f72616765293a205061636b656420736c6f742e205468697320776f756c642063617573652064616e6765726f7573206f76657277726974696e6720616e642063757272656e746c792069736e277420737570706f727465642e",
                              "id": 25682,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10242:113:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_4bfa78e02b745efea2b29d358f6dc28382f5209b1d2b2dbeb8ef0862e74440b3",
                                "typeString": "literal_string \"stdStorage find(StdStorage): Packed slot. This would cause dangerous overwriting and currently isn't supported.\""
                              },
                              "value": "stdStorage find(StdStorage): Packed slot. This would cause dangerous overwriting and currently isn't supported."
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_4bfa78e02b745efea2b29d358f6dc28382f5209b1d2b2dbeb8ef0862e74440b3",
                                "typeString": "literal_string \"stdStorage find(StdStorage): Packed slot. This would cause dangerous overwriting and currently isn't supported.\""
                              }
                            ],
                            "id": 25680,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "10194:7:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 25683,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10194:175:72",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 25684,
                        "nodeType": "ExpressionStatement",
                        "src": "10194:175:72"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 25690,
                        "name": "who",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25576,
                        "src": "10398:3:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 25691,
                        "name": "slot",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25630,
                        "src": "10403:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 25692,
                        "name": "set",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25572,
                        "src": "10409:3:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "id": 25687,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25336,
                        "src": "10389:2:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Vm_$29527",
                          "typeString": "contract Vm"
                        }
                      },
                      "id": 25689,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10392:5:72",
                      "memberName": "store",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 29101,
                      "src": "10389:8:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_bytes32_$_t_bytes32_$returns$__$",
                        "typeString": "function (address,bytes32,bytes32) external"
                      }
                    },
                    "id": 25693,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10389:24:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 25694,
                  "nodeType": "ExpressionStatement",
                  "src": "10389:24:72"
                },
                {
                  "expression": {
                    "id": 25697,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "10423:19:72",
                    "subExpression": {
                      "expression": {
                        "id": 25695,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25570,
                        "src": "10430:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 25696,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10435:7:72",
                      "memberName": "_target",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24424,
                      "src": "10430:12:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 25698,
                  "nodeType": "ExpressionStatement",
                  "src": "10423:19:72"
                },
                {
                  "expression": {
                    "id": 25701,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "10452:16:72",
                    "subExpression": {
                      "expression": {
                        "id": 25699,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25570,
                        "src": "10459:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 25700,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10464:4:72",
                      "memberName": "_sig",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24420,
                      "src": "10459:9:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 25702,
                  "nodeType": "ExpressionStatement",
                  "src": "10452:16:72"
                },
                {
                  "expression": {
                    "id": 25705,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "10478:17:72",
                    "subExpression": {
                      "expression": {
                        "id": 25703,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25570,
                        "src": "10485:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 25704,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10490:5:72",
                      "memberName": "_keys",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24418,
                      "src": "10485:10:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                        "typeString": "bytes32[] storage ref"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 25706,
                  "nodeType": "ExpressionStatement",
                  "src": "10478:17:72"
                },
                {
                  "expression": {
                    "id": 25709,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "10505:18:72",
                    "subExpression": {
                      "expression": {
                        "id": 25707,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25570,
                        "src": "10512:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 25708,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10517:6:72",
                      "memberName": "_depth",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24422,
                      "src": "10512:11:72",
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
                  "id": 25710,
                  "nodeType": "ExpressionStatement",
                  "src": "10505:18:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "checked_write",
            "nameLocation": "9444:13:72",
            "parameters": {
              "id": 25573,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25570,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "9477:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25712,
                  "src": "9458:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25569,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25568,
                      "name": "StdStorage",
                      "nameLocations": [
                        "9458:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "9458:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "9458:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25572,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "9491:3:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25712,
                  "src": "9483:11:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 25571,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "9483:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9457:38:72"
            },
            "returnParameters": {
              "id": 25574,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9505:0:72"
            },
            "scope": 25880,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 25726,
            "nodeType": "FunctionDefinition",
            "src": "10536:131:72",
            "nodes": [],
            "body": {
              "id": 25725,
              "nodeType": "Block",
              "src": "10610:57:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 25722,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25715,
                        "src": "10655:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      ],
                      "expression": {
                        "id": 25720,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25319,
                        "src": "10627:14:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$25319_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 25721,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10642:12:72",
                      "memberName": "read_bytes32",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 25133,
                      "src": "10627:27:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$24427_storage_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (struct StdStorage storage pointer) returns (bytes32)"
                      }
                    },
                    "id": 25723,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10627:33:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 25719,
                  "id": 25724,
                  "nodeType": "Return",
                  "src": "10620:40:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read_bytes32",
            "nameLocation": "10545:12:72",
            "parameters": {
              "id": 25716,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25715,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "10577:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25726,
                  "src": "10558:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25714,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25713,
                      "name": "StdStorage",
                      "nameLocations": [
                        "10558:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "10558:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "10558:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10557:25:72"
            },
            "returnParameters": {
              "id": 25719,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25718,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 25726,
                  "src": "10601:7:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 25717,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "10601:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10600:9:72"
            },
            "scope": 25880,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 25740,
            "nodeType": "FunctionDefinition",
            "src": "10673:122:72",
            "nodes": [],
            "body": {
              "id": 25739,
              "nodeType": "Block",
              "src": "10741:54:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 25736,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25729,
                        "src": "10783:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      ],
                      "expression": {
                        "id": 25734,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25319,
                        "src": "10758:14:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$25319_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 25735,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10773:9:72",
                      "memberName": "read_bool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 25164,
                      "src": "10758:24:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$24427_storage_ptr_$returns$_t_bool_$",
                        "typeString": "function (struct StdStorage storage pointer) returns (bool)"
                      }
                    },
                    "id": 25737,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10758:30:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 25733,
                  "id": 25738,
                  "nodeType": "Return",
                  "src": "10751:37:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read_bool",
            "nameLocation": "10682:9:72",
            "parameters": {
              "id": 25730,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25729,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "10711:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25740,
                  "src": "10692:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25728,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25727,
                      "name": "StdStorage",
                      "nameLocations": [
                        "10692:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "10692:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "10692:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10691:25:72"
            },
            "returnParameters": {
              "id": 25733,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25732,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 25740,
                  "src": "10735:4:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 25731,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "10735:4:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10734:6:72"
            },
            "scope": 25880,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 25754,
            "nodeType": "FunctionDefinition",
            "src": "10801:131:72",
            "nodes": [],
            "body": {
              "id": 25753,
              "nodeType": "Block",
              "src": "10875:57:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 25750,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25743,
                        "src": "10920:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      ],
                      "expression": {
                        "id": 25748,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25319,
                        "src": "10892:14:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$25319_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 25749,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10907:12:72",
                      "memberName": "read_address",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 25183,
                      "src": "10892:27:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$24427_storage_ptr_$returns$_t_address_$",
                        "typeString": "function (struct StdStorage storage pointer) returns (address)"
                      }
                    },
                    "id": 25751,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10892:33:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 25747,
                  "id": 25752,
                  "nodeType": "Return",
                  "src": "10885:40:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read_address",
            "nameLocation": "10810:12:72",
            "parameters": {
              "id": 25744,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25743,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "10842:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25754,
                  "src": "10823:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25742,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25741,
                      "name": "StdStorage",
                      "nameLocations": [
                        "10823:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "10823:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "10823:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10822:25:72"
            },
            "returnParameters": {
              "id": 25747,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25746,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 25754,
                  "src": "10866:7:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 25745,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10866:7:72",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10865:9:72"
            },
            "scope": 25880,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 25768,
            "nodeType": "FunctionDefinition",
            "src": "10938:125:72",
            "nodes": [],
            "body": {
              "id": 25767,
              "nodeType": "Block",
              "src": "11009:54:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 25764,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25757,
                        "src": "11051:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      ],
                      "expression": {
                        "id": 25762,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25319,
                        "src": "11026:14:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$25319_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 25763,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11041:9:72",
                      "memberName": "read_uint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 25202,
                      "src": "11026:24:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$24427_storage_ptr_$returns$_t_uint256_$",
                        "typeString": "function (struct StdStorage storage pointer) returns (uint256)"
                      }
                    },
                    "id": 25765,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11026:30:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 25761,
                  "id": 25766,
                  "nodeType": "Return",
                  "src": "11019:37:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read_uint",
            "nameLocation": "10947:9:72",
            "parameters": {
              "id": 25758,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25757,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "10976:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25768,
                  "src": "10957:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25756,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25755,
                      "name": "StdStorage",
                      "nameLocations": [
                        "10957:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "10957:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "10957:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10956:25:72"
            },
            "returnParameters": {
              "id": 25761,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25760,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 25768,
                  "src": "11000:7:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25759,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11000:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10999:9:72"
            },
            "scope": 25880,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 25782,
            "nodeType": "FunctionDefinition",
            "src": "11069:122:72",
            "nodes": [],
            "body": {
              "id": 25781,
              "nodeType": "Block",
              "src": "11138:53:72",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 25778,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25771,
                        "src": "11179:4:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      ],
                      "expression": {
                        "id": 25776,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25319,
                        "src": "11155:14:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$25319_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 25777,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11170:8:72",
                      "memberName": "read_int",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 25221,
                      "src": "11155:23:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$24427_storage_ptr_$returns$_t_int256_$",
                        "typeString": "function (struct StdStorage storage pointer) returns (int256)"
                      }
                    },
                    "id": 25779,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11155:29:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 25775,
                  "id": 25780,
                  "nodeType": "Return",
                  "src": "11148:36:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read_int",
            "nameLocation": "11078:8:72",
            "parameters": {
              "id": 25772,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25771,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "11106:4:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25782,
                  "src": "11087:23:72",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 25770,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 25769,
                      "name": "StdStorage",
                      "nameLocations": [
                        "11087:10:72"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 24427,
                      "src": "11087:10:72"
                    },
                    "referencedDeclaration": 24427,
                    "src": "11087:10:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$24427_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11086:25:72"
            },
            "returnParameters": {
              "id": 25775,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25774,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 25782,
                  "src": "11130:6:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 25773,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11130:6:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11129:8:72"
            },
            "scope": 25880,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 25838,
            "nodeType": "FunctionDefinition",
            "src": "11248:304:72",
            "nodes": [],
            "body": {
              "id": 25837,
              "nodeType": "Block",
              "src": "11335:217:72",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    25792
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25792,
                      "mutability": "mutable",
                      "name": "out",
                      "nameLocation": "11353:3:72",
                      "nodeType": "VariableDeclaration",
                      "scope": 25837,
                      "src": "11345:11:72",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 25791,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "11345:7:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 25793,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11345:11:72"
                },
                {
                  "assignments": [
                    25795
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25795,
                      "mutability": "mutable",
                      "name": "max",
                      "nameLocation": "11375:3:72",
                      "nodeType": "VariableDeclaration",
                      "scope": 25837,
                      "src": "11367:11:72",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 25794,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11367:7:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 25804,
                  "initialValue": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 25799,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 25796,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25784,
                          "src": "11381:1:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 25797,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11383:6:72",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "11381:8:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "hexValue": "3332",
                        "id": 25798,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "11392:2:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_32_by_1",
                          "typeString": "int_const 32"
                        },
                        "value": "32"
                      },
                      "src": "11381:13:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "expression": {
                        "id": 25801,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25784,
                        "src": "11402:1:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 25802,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11404:6:72",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "11402:8:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 25803,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "11381:29:72",
                    "trueExpression": {
                      "hexValue": "3332",
                      "id": 25800,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "11397:2:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_32_by_1",
                        "typeString": "int_const 32"
                      },
                      "value": "32"
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11367:43:72"
                },
                {
                  "body": {
                    "id": 25833,
                    "nodeType": "Block",
                    "src": "11454:72:72",
                    "statements": [
                      {
                        "expression": {
                          "id": 25831,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 25815,
                            "name": "out",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25792,
                            "src": "11468:3:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "|=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "id": 25830,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  },
                                  "id": 25824,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "baseExpression": {
                                      "id": 25818,
                                      "name": "b",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 25784,
                                      "src": "11483:1:72",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes memory"
                                      }
                                    },
                                    "id": 25822,
                                    "indexExpression": {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "id": 25821,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 25819,
                                        "name": "offset",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 25786,
                                        "src": "11485:6:72",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "+",
                                      "rightExpression": {
                                        "id": 25820,
                                        "name": "i",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 25806,
                                        "src": "11494:1:72",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "11485:10:72",
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
                                    "src": "11483:13:72",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes1",
                                      "typeString": "bytes1"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "&",
                                  "rightExpression": {
                                    "hexValue": "30784646",
                                    "id": 25823,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "11499:4:72",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_255_by_1",
                                      "typeString": "int_const 255"
                                    },
                                    "value": "0xFF"
                                  },
                                  "src": "11483:20:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                ],
                                "id": 25817,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "11475:7:72",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes32_$",
                                  "typeString": "type(bytes32)"
                                },
                                "typeName": {
                                  "id": 25816,
                                  "name": "bytes32",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "11475:7:72",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 25825,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "11475:29:72",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">>",
                            "rightExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 25828,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 25826,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 25806,
                                    "src": "11509:1:72",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "hexValue": "38",
                                    "id": 25827,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "11513:1:72",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_8_by_1",
                                      "typeString": "int_const 8"
                                    },
                                    "value": "8"
                                  },
                                  "src": "11509:5:72",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "id": 25829,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "11508:7:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "11475:40:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "11468:47:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 25832,
                        "nodeType": "ExpressionStatement",
                        "src": "11468:47:72"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 25811,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 25809,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25806,
                      "src": "11440:1:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 25810,
                      "name": "max",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25795,
                      "src": "11444:3:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11440:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 25834,
                  "initializationExpression": {
                    "assignments": [
                      25806
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 25806,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "11433:1:72",
                        "nodeType": "VariableDeclaration",
                        "scope": 25834,
                        "src": "11425:9:72",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 25805,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "11425:7:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 25808,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 25807,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "11437:1:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "11425:13:72"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 25813,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "11449:3:72",
                      "subExpression": {
                        "id": 25812,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25806,
                        "src": "11449:1:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 25814,
                    "nodeType": "ExpressionStatement",
                    "src": "11449:3:72"
                  },
                  "nodeType": "ForStatement",
                  "src": "11420:106:72"
                },
                {
                  "expression": {
                    "id": 25835,
                    "name": "out",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 25792,
                    "src": "11542:3:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 25790,
                  "id": 25836,
                  "nodeType": "Return",
                  "src": "11535:10:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "bytesToBytes32",
            "nameLocation": "11257:14:72",
            "parameters": {
              "id": 25787,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25784,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "11285:1:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25838,
                  "src": "11272:14:72",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 25783,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "11272:5:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25786,
                  "mutability": "mutable",
                  "name": "offset",
                  "nameLocation": "11296:6:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25838,
                  "src": "11288:14:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25785,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11288:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11271:32:72"
            },
            "returnParameters": {
              "id": 25790,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25789,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 25838,
                  "src": "11326:7:72",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 25788,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "11326:7:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11325:9:72"
            },
            "scope": 25880,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 25879,
            "nodeType": "FunctionDefinition",
            "src": "11609:393:72",
            "nodes": [],
            "body": {
              "id": 25878,
              "nodeType": "Block",
              "src": "11682:320:72",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    25847
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25847,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "11705:6:72",
                      "nodeType": "VariableDeclaration",
                      "scope": 25878,
                      "src": "11692:19:72",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 25846,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "11692:5:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 25855,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 25853,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 25850,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25841,
                            "src": "11724:1:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                              "typeString": "bytes32[] memory"
                            }
                          },
                          "id": 25851,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "11726:6:72",
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "src": "11724:8:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "hexValue": "3332",
                          "id": 25852,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11735:2:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_32_by_1",
                            "typeString": "int_const 32"
                          },
                          "value": "32"
                        },
                        "src": "11724:13:72",
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
                      "id": 25849,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "11714:9:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (bytes memory)"
                      },
                      "typeName": {
                        "id": 25848,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "11718:5:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      }
                    },
                    "id": 25854,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11714:24:72",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11692:46:72"
                },
                {
                  "body": {
                    "id": 25874,
                    "nodeType": "Block",
                    "src": "11787:185:72",
                    "statements": [
                      {
                        "assignments": [
                          25868
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 25868,
                            "mutability": "mutable",
                            "name": "k",
                            "nameLocation": "11809:1:72",
                            "nodeType": "VariableDeclaration",
                            "scope": 25874,
                            "src": "11801:9:72",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 25867,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "11801:7:72",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 25872,
                        "initialValue": {
                          "baseExpression": {
                            "id": 25869,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25841,
                            "src": "11813:1:72",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                              "typeString": "bytes32[] memory"
                            }
                          },
                          "id": 25871,
                          "indexExpression": {
                            "id": 25870,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25857,
                            "src": "11815:1:72",
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
                          "src": "11813:4:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "11801:16:72"
                      },
                      {
                        "AST": {
                          "nodeType": "YulBlock",
                          "src": "11887:75:72",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "result",
                                        "nodeType": "YulIdentifier",
                                        "src": "11916:6:72"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "11928:2:72",
                                            "type": "",
                                            "value": "32"
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "11936:2:72",
                                                "type": "",
                                                "value": "32"
                                              },
                                              {
                                                "name": "i",
                                                "nodeType": "YulIdentifier",
                                                "src": "11940:1:72"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "mul",
                                              "nodeType": "YulIdentifier",
                                              "src": "11932:3:72"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "11932:10:72"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "11924:3:72"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "11924:19:72"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "11912:3:72"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "11912:32:72"
                                  },
                                  {
                                    "name": "k",
                                    "nodeType": "YulIdentifier",
                                    "src": "11946:1:72"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "11905:6:72"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "11905:43:72"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "11905:43:72"
                            }
                          ]
                        },
                        "documentation": "@solidity memory-safe-assembly",
                        "evmVersion": "paris",
                        "externalReferences": [
                          {
                            "declaration": 25857,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "11940:1:72",
                            "valueSize": 1
                          },
                          {
                            "declaration": 25868,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "11946:1:72",
                            "valueSize": 1
                          },
                          {
                            "declaration": 25847,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "11916:6:72",
                            "valueSize": 1
                          }
                        ],
                        "id": 25873,
                        "nodeType": "InlineAssembly",
                        "src": "11878:84:72"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 25863,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 25860,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25857,
                      "src": "11768:1:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 25861,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25841,
                        "src": "11772:1:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                          "typeString": "bytes32[] memory"
                        }
                      },
                      "id": 25862,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11774:6:72",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "11772:8:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11768:12:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 25875,
                  "initializationExpression": {
                    "assignments": [
                      25857
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 25857,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "11761:1:72",
                        "nodeType": "VariableDeclaration",
                        "scope": 25875,
                        "src": "11753:9:72",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 25856,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "11753:7:72",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 25859,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 25858,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "11765:1:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "11753:13:72"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 25865,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "11782:3:72",
                      "subExpression": {
                        "id": 25864,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25857,
                        "src": "11782:1:72",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 25866,
                    "nodeType": "ExpressionStatement",
                    "src": "11782:3:72"
                  },
                  "nodeType": "ForStatement",
                  "src": "11748:224:72"
                },
                {
                  "expression": {
                    "id": 25876,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 25847,
                    "src": "11989:6:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 25845,
                  "id": 25877,
                  "nodeType": "Return",
                  "src": "11982:13:72"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "flatten",
            "nameLocation": "11618:7:72",
            "parameters": {
              "id": 25842,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25841,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "11643:1:72",
                  "nodeType": "VariableDeclaration",
                  "scope": 25879,
                  "src": "11626:18:72",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 25839,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "11626:7:72",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 25840,
                    "nodeType": "ArrayTypeName",
                    "src": "11626:9:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11625:20:72"
            },
            "returnParameters": {
              "id": 25845,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25844,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 25879,
                  "src": "11668:12:72",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 25843,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "11668:5:72",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11667:14:72"
            },
            "scope": 25880,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "stdStorage",
        "contractDependencies": [],
        "contractKind": "library",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          25880
        ],
        "name": "stdStorage",
        "nameLocation": "7347:10:72",
        "scope": 25881,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 72
} as const;
