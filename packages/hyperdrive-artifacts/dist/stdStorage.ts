export const StdStorage = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220b816850fdd4c44c3d30a2c722ee9b8eb8c0f86026e7bb4f19498a80561075a9364736f6c63430008140033",
    "sourceMap": "7339:4665:104:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;7339:4665:104;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220b816850fdd4c44c3d30a2c722ee9b8eb8c0f86026e7bb4f19498a80561075a9364736f6c63430008140033",
    "sourceMap": "7339:4665:104:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdStorage.sol\":\"stdStorage\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/StdStorage.sol\":{\"keccak256\":\"0x391a28a2e54aea51a6fb03a3a48035304ca4d24bc669ddf3d4c152c7162e514d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://475fd0d87ccb0fdc4418dea2babffb4adb4aafb817e61f7ef31c2303f10c6c26\",\"dweb:/ipfs/QmQgcgtZxpkW6DRmbJszN1F8mU6zhaTZGdWWsj77yCuWN9\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.20+commit.a1b79de6"
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
        "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
        "aave-v3-core/=lib/aave-v3-core/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "openzeppelin/=lib/openzeppelin-contracts/contracts/",
        "solmate/=lib/solmate/src/"
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
    "id": 32599,
    "exportedSymbols": {
      "StdStorage": [
        31145
      ],
      "Vm": [
        36245
      ],
      "stdStorage": [
        32598
      ],
      "stdStorageSafe": [
        32037
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:11973:104",
    "nodes": [
      {
        "id": 31115,
        "nodeType": "PragmaDirective",
        "src": "32:31:104",
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
        "id": 31117,
        "nodeType": "ImportDirective",
        "src": "65:28:104",
        "nodes": [],
        "absolutePath": "lib/forge-std/src/Vm.sol",
        "file": "./Vm.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 32599,
        "sourceUnit": 36246,
        "symbolAliases": [
          {
            "foreign": {
              "id": 31116,
              "name": "Vm",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 36245,
              "src": "73:2:104",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 31145,
        "nodeType": "StructDefinition",
        "src": "95:271:104",
        "nodes": [],
        "canonicalName": "StdStorage",
        "members": [
          {
            "constant": false,
            "id": 31125,
            "mutability": "mutable",
            "name": "slots",
            "nameLocation": "186:5:104",
            "nodeType": "VariableDeclaration",
            "scope": 31145,
            "src": "119:72:104",
            "stateVariable": false,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$_$",
              "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => uint256)))"
            },
            "typeName": {
              "id": 31124,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 31118,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "127:7:104",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "119:66:104",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$_$",
                "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => uint256)))"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 31123,
                "keyName": "",
                "keyNameLocation": "-1:-1:-1",
                "keyType": {
                  "id": 31119,
                  "name": "bytes4",
                  "nodeType": "ElementaryTypeName",
                  "src": "146:6:104",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  }
                },
                "nodeType": "Mapping",
                "src": "138:46:104",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$",
                  "typeString": "mapping(bytes4 => mapping(bytes32 => uint256))"
                },
                "valueName": "",
                "valueNameLocation": "-1:-1:-1",
                "valueType": {
                  "id": 31122,
                  "keyName": "",
                  "keyNameLocation": "-1:-1:-1",
                  "keyType": {
                    "id": 31120,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "164:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "156:27:104",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                    "typeString": "mapping(bytes32 => uint256)"
                  },
                  "valueName": "",
                  "valueNameLocation": "-1:-1:-1",
                  "valueType": {
                    "id": 31121,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "175:7:104",
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
            "id": 31133,
            "mutability": "mutable",
            "name": "finds",
            "nameLocation": "261:5:104",
            "nodeType": "VariableDeclaration",
            "scope": 31145,
            "src": "197:69:104",
            "stateVariable": false,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$_$",
              "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => bool)))"
            },
            "typeName": {
              "id": 31132,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 31126,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "205:7:104",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "197:63:104",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$_$",
                "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => bool)))"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 31131,
                "keyName": "",
                "keyNameLocation": "-1:-1:-1",
                "keyType": {
                  "id": 31127,
                  "name": "bytes4",
                  "nodeType": "ElementaryTypeName",
                  "src": "224:6:104",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  }
                },
                "nodeType": "Mapping",
                "src": "216:43:104",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                  "typeString": "mapping(bytes4 => mapping(bytes32 => bool))"
                },
                "valueName": "",
                "valueNameLocation": "-1:-1:-1",
                "valueType": {
                  "id": 31130,
                  "keyName": "",
                  "keyNameLocation": "-1:-1:-1",
                  "keyType": {
                    "id": 31128,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "242:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "234:24:104",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                    "typeString": "mapping(bytes32 => bool)"
                  },
                  "valueName": "",
                  "valueNameLocation": "-1:-1:-1",
                  "valueType": {
                    "id": 31129,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "253:4:104",
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
            "id": 31136,
            "mutability": "mutable",
            "name": "_keys",
            "nameLocation": "282:5:104",
            "nodeType": "VariableDeclaration",
            "scope": 31145,
            "src": "272:15:104",
            "stateVariable": false,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
              "typeString": "bytes32[]"
            },
            "typeName": {
              "baseType": {
                "id": 31134,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "272:7:104",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "id": 31135,
              "nodeType": "ArrayTypeName",
              "src": "272:9:104",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                "typeString": "bytes32[]"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 31138,
            "mutability": "mutable",
            "name": "_sig",
            "nameLocation": "300:4:104",
            "nodeType": "VariableDeclaration",
            "scope": 31145,
            "src": "293:11:104",
            "stateVariable": false,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes4",
              "typeString": "bytes4"
            },
            "typeName": {
              "id": 31137,
              "name": "bytes4",
              "nodeType": "ElementaryTypeName",
              "src": "293:6:104",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 31140,
            "mutability": "mutable",
            "name": "_depth",
            "nameLocation": "318:6:104",
            "nodeType": "VariableDeclaration",
            "scope": 31145,
            "src": "310:14:104",
            "stateVariable": false,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 31139,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "310:7:104",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 31142,
            "mutability": "mutable",
            "name": "_target",
            "nameLocation": "338:7:104",
            "nodeType": "VariableDeclaration",
            "scope": 31145,
            "src": "330:15:104",
            "stateVariable": false,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 31141,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "330:7:104",
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
            "id": 31144,
            "mutability": "mutable",
            "name": "_set",
            "nameLocation": "359:4:104",
            "nodeType": "VariableDeclaration",
            "scope": 31145,
            "src": "351:12:104",
            "stateVariable": false,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 31143,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "351:7:104",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "internal"
          }
        ],
        "name": "StdStorage",
        "nameLocation": "102:10:104",
        "scope": 32599,
        "visibility": "public"
      },
      {
        "id": 32037,
        "nodeType": "ContractDefinition",
        "src": "368:6969:104",
        "nodes": [
          {
            "id": 31155,
            "nodeType": "EventDefinition",
            "src": "397:74:104",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "9c9555b1e3102e3cf48f427d79cb678f5d9bd1ed0ad574389461e255f95170ed",
            "name": "SlotFound",
            "nameLocation": "403:9:104",
            "parameters": {
              "id": 31154,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31147,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "who",
                  "nameLocation": "421:3:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 31155,
                  "src": "413:11:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31146,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "413:7:104",
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
                  "id": 31149,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "fsig",
                  "nameLocation": "433:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 31155,
                  "src": "426:11:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 31148,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "426:6:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31151,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "keysHash",
                  "nameLocation": "447:8:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 31155,
                  "src": "439:16:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 31150,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "439:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31153,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "465:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 31155,
                  "src": "457:12:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 31152,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "457:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "412:58:104"
            }
          },
          {
            "id": 31161,
            "nodeType": "EventDefinition",
            "src": "476:54:104",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "080fc4a96620c4462e705b23f346413fe3796bb63c6f8d8591baec0e231577a5",
            "name": "WARNING_UninitedSlot",
            "nameLocation": "482:20:104",
            "parameters": {
              "id": 31160,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31157,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "who",
                  "nameLocation": "511:3:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 31161,
                  "src": "503:11:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31156,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "503:7:104",
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
                  "id": 31159,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "524:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 31161,
                  "src": "516:12:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 31158,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "516:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "502:27:104"
            }
          },
          {
            "id": 31178,
            "nodeType": "VariableDeclaration",
            "src": "536:84:104",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "vm",
            "nameLocation": "556:2:104",
            "scope": 32037,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Vm_$36245",
              "typeString": "contract Vm"
            },
            "typeName": {
              "id": 31163,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 31162,
                "name": "Vm",
                "nameLocations": [
                  "536:2:104"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 36245,
                "src": "536:2:104"
              },
              "referencedDeclaration": 36245,
              "src": "536:2:104",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Vm_$36245",
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
                                  "id": 31172,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "string",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "598:17:104",
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
                                "id": 31171,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "588:9:104",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                              },
                              "id": 31173,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "588:28:104",
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
                            "id": 31170,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "580:7:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 31169,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "580:7:104",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 31174,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "580:37:104",
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
                        "id": 31168,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "572:7:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint160_$",
                          "typeString": "type(uint160)"
                        },
                        "typeName": {
                          "id": 31167,
                          "name": "uint160",
                          "nodeType": "ElementaryTypeName",
                          "src": "572:7:104",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 31175,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "572:46:104",
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
                    "id": 31166,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "ElementaryTypeNameExpression",
                    "src": "564:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_address_$",
                      "typeString": "type(address)"
                    },
                    "typeName": {
                      "id": 31165,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "564:7:104",
                      "typeDescriptions": {}
                    }
                  },
                  "id": 31176,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "typeConversion",
                  "lValueRequested": false,
                  "nameLocations": [],
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "564:55:104",
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
                "id": 31164,
                "name": "Vm",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 36245,
                "src": "561:2:104",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_contract$_Vm_$36245_$",
                  "typeString": "type(contract Vm)"
                }
              },
              "id": 31177,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "561:59:104",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Vm_$36245",
                "typeString": "contract Vm"
              }
            },
            "visibility": "private"
          },
          {
            "id": 31196,
            "nodeType": "FunctionDefinition",
            "src": "627:123:104",
            "nodes": [],
            "body": {
              "id": 31195,
              "nodeType": "Block",
              "src": "694:56:104",
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
                                "id": 31190,
                                "name": "sigStr",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 31180,
                                "src": "734:6:104",
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
                              "id": 31189,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "728:5:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                "typeString": "type(bytes storage pointer)"
                              },
                              "typeName": {
                                "id": 31188,
                                "name": "bytes",
                                "nodeType": "ElementaryTypeName",
                                "src": "728:5:104",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 31191,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "728:13:104",
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
                          "id": 31187,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -8,
                          "src": "718:9:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 31192,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "718:24:104",
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
                      "id": 31186,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "711:6:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes4_$",
                        "typeString": "type(bytes4)"
                      },
                      "typeName": {
                        "id": 31185,
                        "name": "bytes4",
                        "nodeType": "ElementaryTypeName",
                        "src": "711:6:104",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 31193,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "711:32:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "functionReturnParameters": 31184,
                  "id": 31194,
                  "nodeType": "Return",
                  "src": "704:39:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sigs",
            "nameLocation": "636:4:104",
            "parameters": {
              "id": 31181,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31180,
                  "mutability": "mutable",
                  "name": "sigStr",
                  "nameLocation": "655:6:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 31196,
                  "src": "641:20:104",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31179,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "641:6:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "640:22:104"
            },
            "returnParameters": {
              "id": 31184,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31183,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 31196,
                  "src": "686:6:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 31182,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "686:6:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "685:8:104"
            },
            "scope": 32037,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 31640,
            "nodeType": "FunctionDefinition",
            "src": "1264:3197:104",
            "nodes": [],
            "body": {
              "id": 31639,
              "nodeType": "Block",
              "src": "1330:3131:104",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    31206
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 31206,
                      "mutability": "mutable",
                      "name": "who",
                      "nameLocation": "1348:3:104",
                      "nodeType": "VariableDeclaration",
                      "scope": 31639,
                      "src": "1340:11:104",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 31205,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1340:7:104",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 31209,
                  "initialValue": {
                    "expression": {
                      "id": 31207,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 31200,
                      "src": "1354:4:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                        "typeString": "struct StdStorage storage pointer"
                      }
                    },
                    "id": 31208,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "1359:7:104",
                    "memberName": "_target",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 31142,
                    "src": "1354:12:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1340:26:104"
                },
                {
                  "assignments": [
                    31211
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 31211,
                      "mutability": "mutable",
                      "name": "fsig",
                      "nameLocation": "1383:4:104",
                      "nodeType": "VariableDeclaration",
                      "scope": 31639,
                      "src": "1376:11:104",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      },
                      "typeName": {
                        "id": 31210,
                        "name": "bytes4",
                        "nodeType": "ElementaryTypeName",
                        "src": "1376:6:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 31214,
                  "initialValue": {
                    "expression": {
                      "id": 31212,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 31200,
                      "src": "1390:4:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                        "typeString": "struct StdStorage storage pointer"
                      }
                    },
                    "id": 31213,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "1395:4:104",
                    "memberName": "_sig",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 31138,
                    "src": "1390:9:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1376:23:104"
                },
                {
                  "assignments": [
                    31216
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 31216,
                      "mutability": "mutable",
                      "name": "field_depth",
                      "nameLocation": "1417:11:104",
                      "nodeType": "VariableDeclaration",
                      "scope": 31639,
                      "src": "1409:19:104",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 31215,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1409:7:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 31219,
                  "initialValue": {
                    "expression": {
                      "id": 31217,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 31200,
                      "src": "1431:4:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                        "typeString": "struct StdStorage storage pointer"
                      }
                    },
                    "id": 31218,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "1436:6:104",
                    "memberName": "_depth",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 31140,
                    "src": "1431:11:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1409:33:104"
                },
                {
                  "assignments": [
                    31224
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 31224,
                      "mutability": "mutable",
                      "name": "ins",
                      "nameLocation": "1469:3:104",
                      "nodeType": "VariableDeclaration",
                      "scope": 31639,
                      "src": "1452:20:104",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 31222,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "1452:7:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 31223,
                        "nodeType": "ArrayTypeName",
                        "src": "1452:9:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 31227,
                  "initialValue": {
                    "expression": {
                      "id": 31225,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 31200,
                      "src": "1475:4:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                        "typeString": "struct StdStorage storage pointer"
                      }
                    },
                    "id": 31226,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "1480:5:104",
                    "memberName": "_keys",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 31136,
                    "src": "1475:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                      "typeString": "bytes32[] storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1452:33:104"
                },
                {
                  "condition": {
                    "baseExpression": {
                      "baseExpression": {
                        "baseExpression": {
                          "expression": {
                            "id": 31228,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31200,
                            "src": "1536:4:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                              "typeString": "struct StdStorage storage pointer"
                            }
                          },
                          "id": 31229,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1541:5:104",
                          "memberName": "finds",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31133,
                          "src": "1536:10:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$_$",
                            "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => bool)))"
                          }
                        },
                        "id": 31231,
                        "indexExpression": {
                          "id": 31230,
                          "name": "who",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31206,
                          "src": "1547:3:104",
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
                        "src": "1536:15:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                          "typeString": "mapping(bytes4 => mapping(bytes32 => bool))"
                        }
                      },
                      "id": 31233,
                      "indexExpression": {
                        "id": 31232,
                        "name": "fsig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31211,
                        "src": "1552:4:104",
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
                      "src": "1536:21:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                        "typeString": "mapping(bytes32 => bool)"
                      }
                    },
                    "id": 31241,
                    "indexExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 31237,
                              "name": "ins",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 31224,
                              "src": "1585:3:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                "typeString": "bytes32[] memory"
                              }
                            },
                            {
                              "id": 31238,
                              "name": "field_depth",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 31216,
                              "src": "1590:11:104",
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
                              "id": 31235,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "1568:3:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 31236,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "1572:12:104",
                            "memberName": "encodePacked",
                            "nodeType": "MemberAccess",
                            "src": "1568:16:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 31239,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1568:34:104",
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
                        "id": 31234,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "1558:9:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 31240,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1558:45:104",
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
                    "src": "1536:68:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 31258,
                  "nodeType": "IfStatement",
                  "src": "1532:174:104",
                  "trueBody": {
                    "id": 31257,
                    "nodeType": "Block",
                    "src": "1606:100:104",
                    "statements": [
                      {
                        "expression": {
                          "baseExpression": {
                            "baseExpression": {
                              "baseExpression": {
                                "expression": {
                                  "id": 31242,
                                  "name": "self",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 31200,
                                  "src": "1627:4:104",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                                    "typeString": "struct StdStorage storage pointer"
                                  }
                                },
                                "id": 31243,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "1632:5:104",
                                "memberName": "slots",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 31125,
                                "src": "1627:10:104",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$_$",
                                  "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => uint256)))"
                                }
                              },
                              "id": 31245,
                              "indexExpression": {
                                "id": 31244,
                                "name": "who",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 31206,
                                "src": "1638:3:104",
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
                              "src": "1627:15:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$",
                                "typeString": "mapping(bytes4 => mapping(bytes32 => uint256))"
                              }
                            },
                            "id": 31247,
                            "indexExpression": {
                              "id": 31246,
                              "name": "fsig",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 31211,
                              "src": "1643:4:104",
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
                            "src": "1627:21:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                              "typeString": "mapping(bytes32 => uint256)"
                            }
                          },
                          "id": 31255,
                          "indexExpression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 31251,
                                    "name": "ins",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 31224,
                                    "src": "1676:3:104",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                      "typeString": "bytes32[] memory"
                                    }
                                  },
                                  {
                                    "id": 31252,
                                    "name": "field_depth",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 31216,
                                    "src": "1681:11:104",
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
                                    "id": 31249,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -1,
                                    "src": "1659:3:104",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 31250,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberLocation": "1663:12:104",
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "src": "1659:16:104",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 31253,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1659:34:104",
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
                              "id": 31248,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -8,
                              "src": "1649:9:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                "typeString": "function (bytes memory) pure returns (bytes32)"
                              }
                            },
                            "id": 31254,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1649:45:104",
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
                          "src": "1627:68:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 31204,
                        "id": 31256,
                        "nodeType": "Return",
                        "src": "1620:75:104"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    31260
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 31260,
                      "mutability": "mutable",
                      "name": "cald",
                      "nameLocation": "1728:4:104",
                      "nodeType": "VariableDeclaration",
                      "scope": 31639,
                      "src": "1715:17:104",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 31259,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "1715:5:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 31268,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 31263,
                        "name": "fsig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31211,
                        "src": "1752:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 31265,
                            "name": "ins",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31224,
                            "src": "1766:3:104",
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
                          "id": 31264,
                          "name": "flatten",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32036,
                          "src": "1758:7:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_array$_t_bytes32_$dyn_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes32[] memory) pure returns (bytes memory)"
                          }
                        },
                        "id": 31266,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1758:12:104",
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
                        "id": 31261,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -1,
                        "src": "1735:3:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 31262,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "1739:12:104",
                      "memberName": "encodePacked",
                      "nodeType": "MemberAccess",
                      "src": "1735:16:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function () pure returns (bytes memory)"
                      }
                    },
                    "id": 31267,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1735:36:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1715:56:104"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 31269,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31178,
                        "src": "1781:2:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Vm_$36245",
                          "typeString": "contract Vm"
                        }
                      },
                      "id": 31271,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1784:6:104",
                      "memberName": "record",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 35083,
                      "src": "1781:9:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$__$returns$__$",
                        "typeString": "function () external"
                      }
                    },
                    "id": 31272,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1781:11:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 31273,
                  "nodeType": "ExpressionStatement",
                  "src": "1781:11:104"
                },
                {
                  "assignments": [
                    31275
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 31275,
                      "mutability": "mutable",
                      "name": "fdat",
                      "nameLocation": "1810:4:104",
                      "nodeType": "VariableDeclaration",
                      "scope": 31639,
                      "src": "1802:12:104",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 31274,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "1802:7:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 31276,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1802:12:104"
                },
                {
                  "id": 31293,
                  "nodeType": "Block",
                  "src": "1824:128:104",
                  "statements": [
                    {
                      "assignments": [
                        null,
                        31278
                      ],
                      "declarations": [
                        null,
                        {
                          "constant": false,
                          "id": 31278,
                          "mutability": "mutable",
                          "name": "rdat",
                          "nameLocation": "1854:4:104",
                          "nodeType": "VariableDeclaration",
                          "scope": 31293,
                          "src": "1841:17:104",
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes"
                          },
                          "typeName": {
                            "id": 31277,
                            "name": "bytes",
                            "nodeType": "ElementaryTypeName",
                            "src": "1841:5:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_storage_ptr",
                              "typeString": "bytes"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 31283,
                      "initialValue": {
                        "arguments": [
                          {
                            "id": 31281,
                            "name": "cald",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31260,
                            "src": "1877:4:104",
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
                            "id": 31279,
                            "name": "who",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31206,
                            "src": "1862:3:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 31280,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1866:10:104",
                          "memberName": "staticcall",
                          "nodeType": "MemberAccess",
                          "src": "1862:14:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes memory) view returns (bool,bytes memory)"
                          }
                        },
                        "id": 31282,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1862:20:104",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                          "typeString": "tuple(bool,bytes memory)"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "1838:44:104"
                    },
                    {
                      "expression": {
                        "id": 31291,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 31284,
                          "name": "fdat",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31275,
                          "src": "1896:4:104",
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
                              "id": 31286,
                              "name": "rdat",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 31278,
                              "src": "1918:4:104",
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
                              "id": 31289,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "hexValue": "3332",
                                "id": 31287,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1924:2:104",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_32_by_1",
                                  "typeString": "int_const 32"
                                },
                                "value": "32"
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "id": 31288,
                                "name": "field_depth",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 31216,
                                "src": "1929:11:104",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "1924:16:104",
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
                            "id": 31285,
                            "name": "bytesToBytes32",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31995,
                            "src": "1903:14:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$_t_uint256_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory,uint256) pure returns (bytes32)"
                            }
                          },
                          "id": 31290,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1903:38:104",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "src": "1896:45:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "id": 31292,
                      "nodeType": "ExpressionStatement",
                      "src": "1896:45:104"
                    }
                  ]
                },
                {
                  "assignments": [
                    31298,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 31298,
                      "mutability": "mutable",
                      "name": "reads",
                      "nameLocation": "1980:5:104",
                      "nodeType": "VariableDeclaration",
                      "scope": 31639,
                      "src": "1963:22:104",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 31296,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "1963:7:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 31297,
                        "nodeType": "ArrayTypeName",
                        "src": "1963:9:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 31306,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 31303,
                            "name": "who",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31206,
                            "src": "2010:3:104",
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
                          "id": 31302,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2002:7:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 31301,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2002:7:104",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 31304,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2002:12:104",
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
                        "id": 31299,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31178,
                        "src": "1990:2:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Vm_$36245",
                          "typeString": "contract Vm"
                        }
                      },
                      "id": 31300,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1993:8:104",
                      "memberName": "accesses",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 35094,
                      "src": "1990:11:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                        "typeString": "function (address) external returns (bytes32[] memory,bytes32[] memory)"
                      }
                    },
                    "id": 31305,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1990:25:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_array$_t_bytes32_$dyn_memory_ptr_$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                      "typeString": "tuple(bytes32[] memory,bytes32[] memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1962:53:104"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 31310,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 31307,
                        "name": "reads",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31298,
                        "src": "2029:5:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                          "typeString": "bytes32[] memory"
                        }
                      },
                      "id": 31308,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2035:6:104",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "2029:12:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 31309,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2045:1:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "2029:17:104",
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
                      "id": 31412,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 31409,
                          "name": "reads",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31298,
                          "src": "2786:5:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                            "typeString": "bytes32[] memory"
                          }
                        },
                        "id": 31410,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2792:6:104",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "2786:12:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "hexValue": "31",
                        "id": 31411,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2801:1:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "2786:16:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "id": 31587,
                      "nodeType": "Block",
                      "src": "3986:99:104",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "hexValue": "73746453746f726167652066696e642853746453746f72616765293a204e6f2073746f726167652075736520646574656374656420666f72207461726765742e",
                                "id": 31584,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4007:66:104",
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
                              "id": 31583,
                              "name": "revert",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [
                                -19,
                                -19
                              ],
                              "referencedDeclaration": -19,
                              "src": "4000:6:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                                "typeString": "function (string memory) pure"
                              }
                            },
                            "id": 31585,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4000:74:104",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 31586,
                          "nodeType": "ExpressionStatement",
                          "src": "4000:74:104"
                        }
                      ]
                    },
                    "id": 31588,
                    "nodeType": "IfStatement",
                    "src": "2782:1303:104",
                    "trueBody": {
                      "id": 31582,
                      "nodeType": "Block",
                      "src": "2804:1176:104",
                      "statements": [
                        {
                          "body": {
                            "id": 31580,
                            "nodeType": "Block",
                            "src": "2861:1109:104",
                            "statements": [
                              {
                                "assignments": [
                                  31425
                                ],
                                "declarations": [
                                  {
                                    "constant": false,
                                    "id": 31425,
                                    "mutability": "mutable",
                                    "name": "prev",
                                    "nameLocation": "2887:4:104",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31580,
                                    "src": "2879:12:104",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    },
                                    "typeName": {
                                      "id": 31424,
                                      "name": "bytes32",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "2879:7:104",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    "visibility": "internal"
                                  }
                                ],
                                "id": 31433,
                                "initialValue": {
                                  "arguments": [
                                    {
                                      "id": 31428,
                                      "name": "who",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 31206,
                                      "src": "2902:3:104",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "baseExpression": {
                                        "id": 31429,
                                        "name": "reads",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 31298,
                                        "src": "2907:5:104",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                          "typeString": "bytes32[] memory"
                                        }
                                      },
                                      "id": 31431,
                                      "indexExpression": {
                                        "id": 31430,
                                        "name": "i",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 31414,
                                        "src": "2913:1:104",
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
                                      "src": "2907:8:104",
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
                                      "id": 31426,
                                      "name": "vm",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 31178,
                                      "src": "2894:2:104",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_Vm_$36245",
                                        "typeString": "contract Vm"
                                      }
                                    },
                                    "id": 31427,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "2897:4:104",
                                    "memberName": "load",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 34765,
                                    "src": "2894:7:104",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_external_view$_t_address_$_t_bytes32_$returns$_t_bytes32_$",
                                      "typeString": "function (address,bytes32) view external returns (bytes32)"
                                    }
                                  },
                                  "id": 31432,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2894:22:104",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                },
                                "nodeType": "VariableDeclarationStatement",
                                "src": "2879:37:104"
                              },
                              {
                                "condition": {
                                  "commonType": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  },
                                  "id": 31439,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 31434,
                                    "name": "prev",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 31425,
                                    "src": "2938:4:104",
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
                                        "id": 31437,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "2954:1:104",
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
                                      "id": 31436,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "2946:7:104",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_bytes32_$",
                                        "typeString": "type(bytes32)"
                                      },
                                      "typeName": {
                                        "id": 31435,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2946:7:104",
                                        "typeDescriptions": {}
                                      }
                                    },
                                    "id": 31438,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2946:10:104",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  },
                                  "src": "2938:18:104",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "id": 31451,
                                "nodeType": "IfStatement",
                                "src": "2934:114:104",
                                "trueBody": {
                                  "id": 31450,
                                  "nodeType": "Block",
                                  "src": "2958:90:104",
                                  "statements": [
                                    {
                                      "eventCall": {
                                        "arguments": [
                                          {
                                            "id": 31441,
                                            "name": "who",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31206,
                                            "src": "3006:3:104",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            }
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "baseExpression": {
                                                  "id": 31444,
                                                  "name": "reads",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 31298,
                                                  "src": "3019:5:104",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                    "typeString": "bytes32[] memory"
                                                  }
                                                },
                                                "id": 31446,
                                                "indexExpression": {
                                                  "id": 31445,
                                                  "name": "i",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 31414,
                                                  "src": "3025:1:104",
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
                                                "src": "3019:8:104",
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
                                              "id": 31443,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "nodeType": "ElementaryTypeNameExpression",
                                              "src": "3011:7:104",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_uint256_$",
                                                "typeString": "type(uint256)"
                                              },
                                              "typeName": {
                                                "id": 31442,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3011:7:104",
                                                "typeDescriptions": {}
                                              }
                                            },
                                            "id": 31447,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3011:17:104",
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
                                          "id": 31440,
                                          "name": "WARNING_UninitedSlot",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 31161,
                                          "src": "2985:20:104",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                            "typeString": "function (address,uint256)"
                                          }
                                        },
                                        "id": 31448,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2985:44:104",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_tuple$__$",
                                          "typeString": "tuple()"
                                        }
                                      },
                                      "id": 31449,
                                      "nodeType": "EmitStatement",
                                      "src": "2980:49:104"
                                    }
                                  ]
                                }
                              },
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "id": 31455,
                                      "name": "who",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 31206,
                                      "src": "3099:3:104",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "baseExpression": {
                                        "id": 31456,
                                        "name": "reads",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 31298,
                                        "src": "3104:5:104",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                          "typeString": "bytes32[] memory"
                                        }
                                      },
                                      "id": 31458,
                                      "indexExpression": {
                                        "id": 31457,
                                        "name": "i",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 31414,
                                        "src": "3110:1:104",
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
                                      "src": "3104:8:104",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "hexValue": "1337",
                                          "id": 31461,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "kind": "hexString",
                                          "lValueRequested": false,
                                          "nodeType": "Literal",
                                          "src": "3122:9:104",
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
                                        "id": 31460,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "3114:7:104",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_bytes32_$",
                                          "typeString": "type(bytes32)"
                                        },
                                        "typeName": {
                                          "id": 31459,
                                          "name": "bytes32",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "3114:7:104",
                                          "typeDescriptions": {}
                                        }
                                      },
                                      "id": 31462,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "3114:18:104",
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
                                      "id": 31452,
                                      "name": "vm",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 31178,
                                      "src": "3090:2:104",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_Vm_$36245",
                                        "typeString": "contract Vm"
                                      }
                                    },
                                    "id": 31454,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "3093:5:104",
                                    "memberName": "store",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 35819,
                                    "src": "3090:8:104",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_bytes32_$_t_bytes32_$returns$__$",
                                      "typeString": "function (address,bytes32,bytes32) external"
                                    }
                                  },
                                  "id": 31463,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3090:43:104",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 31464,
                                "nodeType": "ExpressionStatement",
                                "src": "3090:43:104"
                              },
                              {
                                "assignments": [
                                  31466
                                ],
                                "declarations": [
                                  {
                                    "constant": false,
                                    "id": 31466,
                                    "mutability": "mutable",
                                    "name": "success",
                                    "nameLocation": "3156:7:104",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31580,
                                    "src": "3151:12:104",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    "typeName": {
                                      "id": 31465,
                                      "name": "bool",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "3151:4:104",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    },
                                    "visibility": "internal"
                                  }
                                ],
                                "id": 31467,
                                "nodeType": "VariableDeclarationStatement",
                                "src": "3151:12:104"
                              },
                              {
                                "assignments": [
                                  31469
                                ],
                                "declarations": [
                                  {
                                    "constant": false,
                                    "id": 31469,
                                    "mutability": "mutable",
                                    "name": "rdat",
                                    "nameLocation": "3194:4:104",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31580,
                                    "src": "3181:17:104",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes"
                                    },
                                    "typeName": {
                                      "id": 31468,
                                      "name": "bytes",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "3181:5:104",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_storage_ptr",
                                        "typeString": "bytes"
                                      }
                                    },
                                    "visibility": "internal"
                                  }
                                ],
                                "id": 31470,
                                "nodeType": "VariableDeclarationStatement",
                                "src": "3181:17:104"
                              },
                              {
                                "id": 31489,
                                "nodeType": "Block",
                                "src": "3216:146:104",
                                "statements": [
                                  {
                                    "expression": {
                                      "id": 31478,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftHandSide": {
                                        "components": [
                                          {
                                            "id": 31471,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31466,
                                            "src": "3239:7:104",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_bool",
                                              "typeString": "bool"
                                            }
                                          },
                                          {
                                            "id": 31472,
                                            "name": "rdat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31469,
                                            "src": "3248:4:104",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_bytes_memory_ptr",
                                              "typeString": "bytes memory"
                                            }
                                          }
                                        ],
                                        "id": 31473,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": true,
                                        "nodeType": "TupleExpression",
                                        "src": "3238:15:104",
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
                                            "id": 31476,
                                            "name": "cald",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31260,
                                            "src": "3271:4:104",
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
                                            "id": 31474,
                                            "name": "who",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31206,
                                            "src": "3256:3:104",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            }
                                          },
                                          "id": 31475,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "3260:10:104",
                                          "memberName": "staticcall",
                                          "nodeType": "MemberAccess",
                                          "src": "3256:14:104",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "function (bytes memory) view returns (bool,bytes memory)"
                                          }
                                        },
                                        "id": 31477,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3256:20:104",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                          "typeString": "tuple(bool,bytes memory)"
                                        }
                                      },
                                      "src": "3238:38:104",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_tuple$__$",
                                        "typeString": "tuple()"
                                      }
                                    },
                                    "id": 31479,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3238:38:104"
                                  },
                                  {
                                    "expression": {
                                      "id": 31487,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftHandSide": {
                                        "id": 31480,
                                        "name": "fdat",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 31275,
                                        "src": "3298:4:104",
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
                                            "id": 31482,
                                            "name": "rdat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31469,
                                            "src": "3320:4:104",
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
                                            "id": 31485,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                              "hexValue": "3332",
                                              "id": 31483,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "kind": "number",
                                              "lValueRequested": false,
                                              "nodeType": "Literal",
                                              "src": "3326:2:104",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_rational_32_by_1",
                                                "typeString": "int_const 32"
                                              },
                                              "value": "32"
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "*",
                                            "rightExpression": {
                                              "id": 31484,
                                              "name": "field_depth",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 31216,
                                              "src": "3331:11:104",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              }
                                            },
                                            "src": "3326:16:104",
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
                                          "id": 31481,
                                          "name": "bytesToBytes32",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 31995,
                                          "src": "3305:14:104",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$_t_uint256_$returns$_t_bytes32_$",
                                            "typeString": "function (bytes memory,uint256) pure returns (bytes32)"
                                          }
                                        },
                                        "id": 31486,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3305:38:104",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      },
                                      "src": "3298:45:104",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    "id": 31488,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3298:45:104"
                                  }
                                ]
                              },
                              {
                                "condition": {
                                  "commonType": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  "id": 31497,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 31490,
                                    "name": "success",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 31466,
                                    "src": "3384:7:104",
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
                                    "id": 31496,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "id": 31491,
                                      "name": "fdat",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 31275,
                                      "src": "3395:4:104",
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
                                          "id": 31494,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "kind": "hexString",
                                          "lValueRequested": false,
                                          "nodeType": "Literal",
                                          "src": "3411:9:104",
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
                                        "id": 31493,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "3403:7:104",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_bytes32_$",
                                          "typeString": "type(bytes32)"
                                        },
                                        "typeName": {
                                          "id": 31492,
                                          "name": "bytes32",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "3403:7:104",
                                          "typeDescriptions": {}
                                        }
                                      },
                                      "id": 31495,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "3403:18:104",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    "src": "3395:26:104",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  },
                                  "src": "3384:37:104",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "id": 31569,
                                "nodeType": "IfStatement",
                                "src": "3380:529:104",
                                "trueBody": {
                                  "id": 31568,
                                  "nodeType": "Block",
                                  "src": "3423:486:104",
                                  "statements": [
                                    {
                                      "eventCall": {
                                        "arguments": [
                                          {
                                            "id": 31499,
                                            "name": "who",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31206,
                                            "src": "3529:3:104",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            }
                                          },
                                          {
                                            "id": 31500,
                                            "name": "fsig",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31211,
                                            "src": "3534:4:104",
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
                                                    "id": 31504,
                                                    "name": "ins",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31224,
                                                    "src": "3567:3:104",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                      "typeString": "bytes32[] memory"
                                                    }
                                                  },
                                                  {
                                                    "id": 31505,
                                                    "name": "field_depth",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31216,
                                                    "src": "3572:11:104",
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
                                                    "id": 31502,
                                                    "name": "abi",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -1,
                                                    "src": "3550:3:104",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_magic_abi",
                                                      "typeString": "abi"
                                                    }
                                                  },
                                                  "id": 31503,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "lValueRequested": false,
                                                  "memberLocation": "3554:12:104",
                                                  "memberName": "encodePacked",
                                                  "nodeType": "MemberAccess",
                                                  "src": "3550:16:104",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                    "typeString": "function () pure returns (bytes memory)"
                                                  }
                                                },
                                                "id": 31506,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3550:34:104",
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
                                              "id": 31501,
                                              "name": "keccak256",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": -8,
                                              "src": "3540:9:104",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                              }
                                            },
                                            "id": 31507,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3540:45:104",
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
                                                  "id": 31510,
                                                  "name": "reads",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 31298,
                                                  "src": "3595:5:104",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                    "typeString": "bytes32[] memory"
                                                  }
                                                },
                                                "id": 31512,
                                                "indexExpression": {
                                                  "id": 31511,
                                                  "name": "i",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 31414,
                                                  "src": "3601:1:104",
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
                                                "src": "3595:8:104",
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
                                              "id": 31509,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "nodeType": "ElementaryTypeNameExpression",
                                              "src": "3587:7:104",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_uint256_$",
                                                "typeString": "type(uint256)"
                                              },
                                              "typeName": {
                                                "id": 31508,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3587:7:104",
                                                "typeDescriptions": {}
                                              }
                                            },
                                            "id": 31513,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3587:17:104",
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
                                          "id": 31498,
                                          "name": "SlotFound",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 31155,
                                          "src": "3519:9:104",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_bytes4_$_t_bytes32_$_t_uint256_$returns$__$",
                                            "typeString": "function (address,bytes4,bytes32,uint256)"
                                          }
                                        },
                                        "id": 31514,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3519:86:104",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_tuple$__$",
                                          "typeString": "tuple()"
                                        }
                                      },
                                      "id": 31515,
                                      "nodeType": "EmitStatement",
                                      "src": "3514:91:104"
                                    },
                                    {
                                      "expression": {
                                        "id": 31537,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                          "baseExpression": {
                                            "baseExpression": {
                                              "baseExpression": {
                                                "expression": {
                                                  "id": 31516,
                                                  "name": "self",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 31200,
                                                  "src": "3627:4:104",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                                                    "typeString": "struct StdStorage storage pointer"
                                                  }
                                                },
                                                "id": 31527,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "3632:5:104",
                                                "memberName": "slots",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 31125,
                                                "src": "3627:10:104",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$_$",
                                                  "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => uint256)))"
                                                }
                                              },
                                              "id": 31528,
                                              "indexExpression": {
                                                "id": 31518,
                                                "name": "who",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31206,
                                                "src": "3638:3:104",
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
                                              "src": "3627:15:104",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$",
                                                "typeString": "mapping(bytes4 => mapping(bytes32 => uint256))"
                                              }
                                            },
                                            "id": 31529,
                                            "indexExpression": {
                                              "id": 31519,
                                              "name": "fsig",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 31211,
                                              "src": "3643:4:104",
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
                                            "src": "3627:21:104",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                              "typeString": "mapping(bytes32 => uint256)"
                                            }
                                          },
                                          "id": 31530,
                                          "indexExpression": {
                                            "arguments": [
                                              {
                                                "arguments": [
                                                  {
                                                    "id": 31523,
                                                    "name": "ins",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31224,
                                                    "src": "3676:3:104",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                      "typeString": "bytes32[] memory"
                                                    }
                                                  },
                                                  {
                                                    "id": 31524,
                                                    "name": "field_depth",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31216,
                                                    "src": "3681:11:104",
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
                                                    "id": 31521,
                                                    "name": "abi",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -1,
                                                    "src": "3659:3:104",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_magic_abi",
                                                      "typeString": "abi"
                                                    }
                                                  },
                                                  "id": 31522,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "lValueRequested": false,
                                                  "memberLocation": "3663:12:104",
                                                  "memberName": "encodePacked",
                                                  "nodeType": "MemberAccess",
                                                  "src": "3659:16:104",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                    "typeString": "function () pure returns (bytes memory)"
                                                  }
                                                },
                                                "id": 31525,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3659:34:104",
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
                                              "id": 31520,
                                              "name": "keccak256",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": -8,
                                              "src": "3649:9:104",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                              }
                                            },
                                            "id": 31526,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3649:45:104",
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
                                          "src": "3627:68:104",
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
                                                "id": 31533,
                                                "name": "reads",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31298,
                                                "src": "3706:5:104",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                  "typeString": "bytes32[] memory"
                                                }
                                              },
                                              "id": 31535,
                                              "indexExpression": {
                                                "id": 31534,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31414,
                                                "src": "3712:1:104",
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
                                              "src": "3706:8:104",
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
                                            "id": 31532,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "3698:7:104",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_type$_t_uint256_$",
                                              "typeString": "type(uint256)"
                                            },
                                            "typeName": {
                                              "id": 31531,
                                              "name": "uint256",
                                              "nodeType": "ElementaryTypeName",
                                              "src": "3698:7:104",
                                              "typeDescriptions": {}
                                            }
                                          },
                                          "id": 31536,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "typeConversion",
                                          "lValueRequested": false,
                                          "nameLocations": [],
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "3698:17:104",
                                          "tryCall": false,
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "src": "3627:88:104",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "id": 31538,
                                      "nodeType": "ExpressionStatement",
                                      "src": "3627:88:104"
                                    },
                                    {
                                      "expression": {
                                        "id": 31555,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                          "baseExpression": {
                                            "baseExpression": {
                                              "baseExpression": {
                                                "expression": {
                                                  "id": 31539,
                                                  "name": "self",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 31200,
                                                  "src": "3737:4:104",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                                                    "typeString": "struct StdStorage storage pointer"
                                                  }
                                                },
                                                "id": 31550,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "3742:5:104",
                                                "memberName": "finds",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 31133,
                                                "src": "3737:10:104",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$_$",
                                                  "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => bool)))"
                                                }
                                              },
                                              "id": 31551,
                                              "indexExpression": {
                                                "id": 31541,
                                                "name": "who",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31206,
                                                "src": "3748:3:104",
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
                                              "src": "3737:15:104",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                                                "typeString": "mapping(bytes4 => mapping(bytes32 => bool))"
                                              }
                                            },
                                            "id": 31552,
                                            "indexExpression": {
                                              "id": 31542,
                                              "name": "fsig",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 31211,
                                              "src": "3753:4:104",
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
                                            "src": "3737:21:104",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                                              "typeString": "mapping(bytes32 => bool)"
                                            }
                                          },
                                          "id": 31553,
                                          "indexExpression": {
                                            "arguments": [
                                              {
                                                "arguments": [
                                                  {
                                                    "id": 31546,
                                                    "name": "ins",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31224,
                                                    "src": "3786:3:104",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                      "typeString": "bytes32[] memory"
                                                    }
                                                  },
                                                  {
                                                    "id": 31547,
                                                    "name": "field_depth",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31216,
                                                    "src": "3791:11:104",
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
                                                    "id": 31544,
                                                    "name": "abi",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -1,
                                                    "src": "3769:3:104",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_magic_abi",
                                                      "typeString": "abi"
                                                    }
                                                  },
                                                  "id": 31545,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "lValueRequested": false,
                                                  "memberLocation": "3773:12:104",
                                                  "memberName": "encodePacked",
                                                  "nodeType": "MemberAccess",
                                                  "src": "3769:16:104",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                    "typeString": "function () pure returns (bytes memory)"
                                                  }
                                                },
                                                "id": 31548,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3769:34:104",
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
                                              "id": 31543,
                                              "name": "keccak256",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": -8,
                                              "src": "3759:9:104",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                              }
                                            },
                                            "id": 31549,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3759:45:104",
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
                                          "src": "3737:68:104",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                          }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                          "hexValue": "74727565",
                                          "id": 31554,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "kind": "bool",
                                          "lValueRequested": false,
                                          "nodeType": "Literal",
                                          "src": "3808:4:104",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                          },
                                          "value": "true"
                                        },
                                        "src": "3737:75:104",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                        }
                                      },
                                      "id": 31556,
                                      "nodeType": "ExpressionStatement",
                                      "src": "3737:75:104"
                                    },
                                    {
                                      "expression": {
                                        "arguments": [
                                          {
                                            "id": 31560,
                                            "name": "who",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31206,
                                            "src": "3843:3:104",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            }
                                          },
                                          {
                                            "baseExpression": {
                                              "id": 31561,
                                              "name": "reads",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 31298,
                                              "src": "3848:5:104",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                "typeString": "bytes32[] memory"
                                              }
                                            },
                                            "id": 31563,
                                            "indexExpression": {
                                              "id": 31562,
                                              "name": "i",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 31414,
                                              "src": "3854:1:104",
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
                                            "src": "3848:8:104",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_bytes32",
                                              "typeString": "bytes32"
                                            }
                                          },
                                          {
                                            "id": 31564,
                                            "name": "prev",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31425,
                                            "src": "3858:4:104",
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
                                            "id": 31557,
                                            "name": "vm",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31178,
                                            "src": "3834:2:104",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_contract$_Vm_$36245",
                                              "typeString": "contract Vm"
                                            }
                                          },
                                          "id": 31559,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "3837:5:104",
                                          "memberName": "store",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": 35819,
                                          "src": "3834:8:104",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_bytes32_$_t_bytes32_$returns$__$",
                                            "typeString": "function (address,bytes32,bytes32) external"
                                          }
                                        },
                                        "id": 31565,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3834:29:104",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_tuple$__$",
                                          "typeString": "tuple()"
                                        }
                                      },
                                      "id": 31566,
                                      "nodeType": "ExpressionStatement",
                                      "src": "3834:29:104"
                                    },
                                    {
                                      "id": 31567,
                                      "nodeType": "Break",
                                      "src": "3885:5:104"
                                    }
                                  ]
                                }
                              },
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "id": 31573,
                                      "name": "who",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 31206,
                                      "src": "3935:3:104",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "baseExpression": {
                                        "id": 31574,
                                        "name": "reads",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 31298,
                                        "src": "3940:5:104",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                          "typeString": "bytes32[] memory"
                                        }
                                      },
                                      "id": 31576,
                                      "indexExpression": {
                                        "id": 31575,
                                        "name": "i",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 31414,
                                        "src": "3946:1:104",
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
                                      "src": "3940:8:104",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    {
                                      "id": 31577,
                                      "name": "prev",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 31425,
                                      "src": "3950:4:104",
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
                                      "id": 31570,
                                      "name": "vm",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 31178,
                                      "src": "3926:2:104",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_Vm_$36245",
                                        "typeString": "contract Vm"
                                      }
                                    },
                                    "id": 31572,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "3929:5:104",
                                    "memberName": "store",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 35819,
                                    "src": "3926:8:104",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_bytes32_$_t_bytes32_$returns$__$",
                                      "typeString": "function (address,bytes32,bytes32) external"
                                    }
                                  },
                                  "id": 31578,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3926:29:104",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 31579,
                                "nodeType": "ExpressionStatement",
                                "src": "3926:29:104"
                              }
                            ]
                          },
                          "condition": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 31420,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 31417,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 31414,
                              "src": "2838:1:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "<",
                            "rightExpression": {
                              "expression": {
                                "id": 31418,
                                "name": "reads",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 31298,
                                "src": "2842:5:104",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                  "typeString": "bytes32[] memory"
                                }
                              },
                              "id": 31419,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2848:6:104",
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "src": "2842:12:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2838:16:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "id": 31581,
                          "initializationExpression": {
                            "assignments": [
                              31414
                            ],
                            "declarations": [
                              {
                                "constant": false,
                                "id": 31414,
                                "mutability": "mutable",
                                "name": "i",
                                "nameLocation": "2831:1:104",
                                "nodeType": "VariableDeclaration",
                                "scope": 31581,
                                "src": "2823:9:104",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "typeName": {
                                  "id": 31413,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2823:7:104",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "visibility": "internal"
                              }
                            ],
                            "id": 31416,
                            "initialValue": {
                              "hexValue": "30",
                              "id": 31415,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2835:1:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "nodeType": "VariableDeclarationStatement",
                            "src": "2823:13:104"
                          },
                          "loopExpression": {
                            "expression": {
                              "id": 31422,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "++",
                              "prefix": false,
                              "src": "2856:3:104",
                              "subExpression": {
                                "id": 31421,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 31414,
                                "src": "2856:1:104",
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
                            "id": 31423,
                            "nodeType": "ExpressionStatement",
                            "src": "2856:3:104"
                          },
                          "nodeType": "ForStatement",
                          "src": "2818:1152:104"
                        }
                      ]
                    }
                  },
                  "id": 31589,
                  "nodeType": "IfStatement",
                  "src": "2025:2060:104",
                  "trueBody": {
                    "id": 31408,
                    "nodeType": "Block",
                    "src": "2048:728:104",
                    "statements": [
                      {
                        "assignments": [
                          31312
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 31312,
                            "mutability": "mutable",
                            "name": "curr",
                            "nameLocation": "2070:4:104",
                            "nodeType": "VariableDeclaration",
                            "scope": 31408,
                            "src": "2062:12:104",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 31311,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "2062:7:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 31320,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 31315,
                              "name": "who",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 31206,
                              "src": "2085:3:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "baseExpression": {
                                "id": 31316,
                                "name": "reads",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 31298,
                                "src": "2090:5:104",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                  "typeString": "bytes32[] memory"
                                }
                              },
                              "id": 31318,
                              "indexExpression": {
                                "hexValue": "30",
                                "id": 31317,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2096:1:104",
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
                              "src": "2090:8:104",
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
                              "id": 31313,
                              "name": "vm",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 31178,
                              "src": "2077:2:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Vm_$36245",
                                "typeString": "contract Vm"
                              }
                            },
                            "id": 31314,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2080:4:104",
                            "memberName": "load",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 34765,
                            "src": "2077:7:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$_t_bytes32_$returns$_t_bytes32_$",
                              "typeString": "function (address,bytes32) view external returns (bytes32)"
                            }
                          },
                          "id": 31319,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2077:22:104",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2062:37:104"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "id": 31326,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 31321,
                            "name": "curr",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31312,
                            "src": "2117:4:104",
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
                                "id": 31324,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2133:1:104",
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
                              "id": 31323,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2125:7:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes32_$",
                                "typeString": "type(bytes32)"
                              },
                              "typeName": {
                                "id": 31322,
                                "name": "bytes32",
                                "nodeType": "ElementaryTypeName",
                                "src": "2125:7:104",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 31325,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2125:10:104",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "2117:18:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 31338,
                        "nodeType": "IfStatement",
                        "src": "2113:106:104",
                        "trueBody": {
                          "id": 31337,
                          "nodeType": "Block",
                          "src": "2137:82:104",
                          "statements": [
                            {
                              "eventCall": {
                                "arguments": [
                                  {
                                    "id": 31328,
                                    "name": "who",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 31206,
                                    "src": "2181:3:104",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "baseExpression": {
                                          "id": 31331,
                                          "name": "reads",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 31298,
                                          "src": "2194:5:104",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                            "typeString": "bytes32[] memory"
                                          }
                                        },
                                        "id": 31333,
                                        "indexExpression": {
                                          "hexValue": "30",
                                          "id": 31332,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "kind": "number",
                                          "lValueRequested": false,
                                          "nodeType": "Literal",
                                          "src": "2200:1:104",
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
                                        "src": "2194:8:104",
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
                                      "id": 31330,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "2186:7:104",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_uint256_$",
                                        "typeString": "type(uint256)"
                                      },
                                      "typeName": {
                                        "id": 31329,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2186:7:104",
                                        "typeDescriptions": {}
                                      }
                                    },
                                    "id": 31334,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2186:17:104",
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
                                  "id": 31327,
                                  "name": "WARNING_UninitedSlot",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 31161,
                                  "src": "2160:20:104",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                    "typeString": "function (address,uint256)"
                                  }
                                },
                                "id": 31335,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2160:44:104",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 31336,
                              "nodeType": "EmitStatement",
                              "src": "2155:49:104"
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
                          "id": 31341,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 31339,
                            "name": "fdat",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31275,
                            "src": "2236:4:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "id": 31340,
                            "name": "curr",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31312,
                            "src": "2244:4:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "2236:12:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 31348,
                        "nodeType": "IfStatement",
                        "src": "2232:238:104",
                        "trueBody": {
                          "id": 31347,
                          "nodeType": "Block",
                          "src": "2250:220:104",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "hexValue": "66616c7365",
                                    "id": 31343,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "bool",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2297:5:104",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    "value": "false"
                                  },
                                  {
                                    "hexValue": "73746453746f726167652066696e642853746453746f72616765293a205061636b656420736c6f742e205468697320776f756c642063617573652064616e6765726f7573206f76657277726974696e6720616e642063757272656e746c792069736e277420737570706f727465642e",
                                    "id": 31344,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2324:113:104",
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
                                  "id": 31342,
                                  "name": "require",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [
                                    -18,
                                    -18
                                  ],
                                  "referencedDeclaration": -18,
                                  "src": "2268:7:104",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                    "typeString": "function (bool,string memory) pure"
                                  }
                                },
                                "id": 31345,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2268:187:104",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 31346,
                              "nodeType": "ExpressionStatement",
                              "src": "2268:187:104"
                            }
                          ]
                        }
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "id": 31350,
                              "name": "who",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 31206,
                              "src": "2498:3:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 31351,
                              "name": "fsig",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 31211,
                              "src": "2503:4:104",
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
                                      "id": 31355,
                                      "name": "ins",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 31224,
                                      "src": "2536:3:104",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                        "typeString": "bytes32[] memory"
                                      }
                                    },
                                    {
                                      "id": 31356,
                                      "name": "field_depth",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 31216,
                                      "src": "2541:11:104",
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
                                      "id": 31353,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": -1,
                                      "src": "2519:3:104",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 31354,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberLocation": "2523:12:104",
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "src": "2519:16:104",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 31357,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2519:34:104",
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
                                "id": 31352,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "2509:9:104",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                              },
                              "id": 31358,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2509:45:104",
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
                                    "id": 31361,
                                    "name": "reads",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 31298,
                                    "src": "2564:5:104",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                      "typeString": "bytes32[] memory"
                                    }
                                  },
                                  "id": 31363,
                                  "indexExpression": {
                                    "hexValue": "30",
                                    "id": 31362,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2570:1:104",
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
                                  "src": "2564:8:104",
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
                                "id": 31360,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2556:7:104",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": {
                                  "id": 31359,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2556:7:104",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 31364,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2556:17:104",
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
                            "id": 31349,
                            "name": "SlotFound",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31155,
                            "src": "2488:9:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_bytes4_$_t_bytes32_$_t_uint256_$returns$__$",
                              "typeString": "function (address,bytes4,bytes32,uint256)"
                            }
                          },
                          "id": 31365,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2488:86:104",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 31366,
                        "nodeType": "EmitStatement",
                        "src": "2483:91:104"
                      },
                      {
                        "expression": {
                          "id": 31388,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "baseExpression": {
                                "baseExpression": {
                                  "expression": {
                                    "id": 31367,
                                    "name": "self",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 31200,
                                    "src": "2588:4:104",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                                      "typeString": "struct StdStorage storage pointer"
                                    }
                                  },
                                  "id": 31378,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "2593:5:104",
                                  "memberName": "slots",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 31125,
                                  "src": "2588:10:104",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$_$",
                                    "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => uint256)))"
                                  }
                                },
                                "id": 31379,
                                "indexExpression": {
                                  "id": 31369,
                                  "name": "who",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 31206,
                                  "src": "2599:3:104",
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
                                "src": "2588:15:104",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$",
                                  "typeString": "mapping(bytes4 => mapping(bytes32 => uint256))"
                                }
                              },
                              "id": 31380,
                              "indexExpression": {
                                "id": 31370,
                                "name": "fsig",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 31211,
                                "src": "2604:4:104",
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
                              "src": "2588:21:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                "typeString": "mapping(bytes32 => uint256)"
                              }
                            },
                            "id": 31381,
                            "indexExpression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "id": 31374,
                                      "name": "ins",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 31224,
                                      "src": "2637:3:104",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                        "typeString": "bytes32[] memory"
                                      }
                                    },
                                    {
                                      "id": 31375,
                                      "name": "field_depth",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 31216,
                                      "src": "2642:11:104",
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
                                      "id": 31372,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": -1,
                                      "src": "2620:3:104",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 31373,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberLocation": "2624:12:104",
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "src": "2620:16:104",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 31376,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2620:34:104",
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
                                "id": 31371,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "2610:9:104",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                              },
                              "id": 31377,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2610:45:104",
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
                            "src": "2588:68:104",
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
                                  "id": 31384,
                                  "name": "reads",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 31298,
                                  "src": "2667:5:104",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                    "typeString": "bytes32[] memory"
                                  }
                                },
                                "id": 31386,
                                "indexExpression": {
                                  "hexValue": "30",
                                  "id": 31385,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2673:1:104",
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
                                "src": "2667:8:104",
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
                              "id": 31383,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2659:7:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 31382,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "2659:7:104",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 31387,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2659:17:104",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2588:88:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 31389,
                        "nodeType": "ExpressionStatement",
                        "src": "2588:88:104"
                      },
                      {
                        "expression": {
                          "id": 31406,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "baseExpression": {
                                "baseExpression": {
                                  "expression": {
                                    "id": 31390,
                                    "name": "self",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 31200,
                                    "src": "2690:4:104",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                                      "typeString": "struct StdStorage storage pointer"
                                    }
                                  },
                                  "id": 31401,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "2695:5:104",
                                  "memberName": "finds",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 31133,
                                  "src": "2690:10:104",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$_$",
                                    "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => bool)))"
                                  }
                                },
                                "id": 31402,
                                "indexExpression": {
                                  "id": 31392,
                                  "name": "who",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 31206,
                                  "src": "2701:3:104",
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
                                "src": "2690:15:104",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                                  "typeString": "mapping(bytes4 => mapping(bytes32 => bool))"
                                }
                              },
                              "id": 31403,
                              "indexExpression": {
                                "id": 31393,
                                "name": "fsig",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 31211,
                                "src": "2706:4:104",
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
                              "src": "2690:21:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                                "typeString": "mapping(bytes32 => bool)"
                              }
                            },
                            "id": 31404,
                            "indexExpression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "id": 31397,
                                      "name": "ins",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 31224,
                                      "src": "2739:3:104",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                        "typeString": "bytes32[] memory"
                                      }
                                    },
                                    {
                                      "id": 31398,
                                      "name": "field_depth",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 31216,
                                      "src": "2744:11:104",
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
                                      "id": 31395,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": -1,
                                      "src": "2722:3:104",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 31396,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberLocation": "2726:12:104",
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "src": "2722:16:104",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 31399,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2722:34:104",
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
                                "id": 31394,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "2712:9:104",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                              },
                              "id": 31400,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2712:45:104",
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
                            "src": "2690:68:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "74727565",
                            "id": 31405,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2761:4:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "2690:75:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 31407,
                        "nodeType": "ExpressionStatement",
                        "src": "2690:75:104"
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
                                "id": 31591,
                                "name": "self",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 31200,
                                "src": "4116:4:104",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                                  "typeString": "struct StdStorage storage pointer"
                                }
                              },
                              "id": 31592,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4121:5:104",
                              "memberName": "finds",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 31133,
                              "src": "4116:10:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$_$",
                                "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => bool)))"
                              }
                            },
                            "id": 31594,
                            "indexExpression": {
                              "id": 31593,
                              "name": "who",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 31206,
                              "src": "4127:3:104",
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
                            "src": "4116:15:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                              "typeString": "mapping(bytes4 => mapping(bytes32 => bool))"
                            }
                          },
                          "id": 31596,
                          "indexExpression": {
                            "id": 31595,
                            "name": "fsig",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31211,
                            "src": "4132:4:104",
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
                          "src": "4116:21:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                            "typeString": "mapping(bytes32 => bool)"
                          }
                        },
                        "id": 31604,
                        "indexExpression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 31600,
                                  "name": "ins",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 31224,
                                  "src": "4165:3:104",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                    "typeString": "bytes32[] memory"
                                  }
                                },
                                {
                                  "id": 31601,
                                  "name": "field_depth",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 31216,
                                  "src": "4170:11:104",
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
                                  "id": 31598,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -1,
                                  "src": "4148:3:104",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 31599,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberLocation": "4152:12:104",
                                "memberName": "encodePacked",
                                "nodeType": "MemberAccess",
                                "src": "4148:16:104",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 31602,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4148:34:104",
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
                            "id": 31597,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -8,
                            "src": "4138:9:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 31603,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4138:45:104",
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
                        "src": "4116:68:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "73746453746f726167652066696e642853746453746f72616765293a20536c6f74287329206e6f7420666f756e642e",
                        "id": 31605,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4198:49:104",
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
                      "id": 31590,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4095:7:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 31606,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4095:162:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 31607,
                  "nodeType": "ExpressionStatement",
                  "src": "4095:162:104"
                },
                {
                  "expression": {
                    "id": 31610,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "4268:19:104",
                    "subExpression": {
                      "expression": {
                        "id": 31608,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31200,
                        "src": "4275:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 31609,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4280:7:104",
                      "memberName": "_target",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31142,
                      "src": "4275:12:104",
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
                  "id": 31611,
                  "nodeType": "ExpressionStatement",
                  "src": "4268:19:104"
                },
                {
                  "expression": {
                    "id": 31614,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "4297:16:104",
                    "subExpression": {
                      "expression": {
                        "id": 31612,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31200,
                        "src": "4304:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 31613,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4309:4:104",
                      "memberName": "_sig",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31138,
                      "src": "4304:9:104",
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
                  "id": 31615,
                  "nodeType": "ExpressionStatement",
                  "src": "4297:16:104"
                },
                {
                  "expression": {
                    "id": 31618,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "4323:17:104",
                    "subExpression": {
                      "expression": {
                        "id": 31616,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31200,
                        "src": "4330:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 31617,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4335:5:104",
                      "memberName": "_keys",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31136,
                      "src": "4330:10:104",
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
                  "id": 31619,
                  "nodeType": "ExpressionStatement",
                  "src": "4323:17:104"
                },
                {
                  "expression": {
                    "id": 31622,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "4350:18:104",
                    "subExpression": {
                      "expression": {
                        "id": 31620,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31200,
                        "src": "4357:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 31621,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4362:6:104",
                      "memberName": "_depth",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31140,
                      "src": "4357:11:104",
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
                  "id": 31623,
                  "nodeType": "ExpressionStatement",
                  "src": "4350:18:104"
                },
                {
                  "expression": {
                    "baseExpression": {
                      "baseExpression": {
                        "baseExpression": {
                          "expression": {
                            "id": 31624,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31200,
                            "src": "4386:4:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                              "typeString": "struct StdStorage storage pointer"
                            }
                          },
                          "id": 31625,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4391:5:104",
                          "memberName": "slots",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31125,
                          "src": "4386:10:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$_$",
                            "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => uint256)))"
                          }
                        },
                        "id": 31627,
                        "indexExpression": {
                          "id": 31626,
                          "name": "who",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31206,
                          "src": "4397:3:104",
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
                        "src": "4386:15:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$",
                          "typeString": "mapping(bytes4 => mapping(bytes32 => uint256))"
                        }
                      },
                      "id": 31629,
                      "indexExpression": {
                        "id": 31628,
                        "name": "fsig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31211,
                        "src": "4402:4:104",
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
                      "src": "4386:21:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                        "typeString": "mapping(bytes32 => uint256)"
                      }
                    },
                    "id": 31637,
                    "indexExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 31633,
                              "name": "ins",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 31224,
                              "src": "4435:3:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                "typeString": "bytes32[] memory"
                              }
                            },
                            {
                              "id": 31634,
                              "name": "field_depth",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 31216,
                              "src": "4440:11:104",
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
                              "id": 31631,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "4418:3:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 31632,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "4422:12:104",
                            "memberName": "encodePacked",
                            "nodeType": "MemberAccess",
                            "src": "4418:16:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 31635,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4418:34:104",
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
                        "id": 31630,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "4408:9:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 31636,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4408:45:104",
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
                    "src": "4386:68:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 31204,
                  "id": 31638,
                  "nodeType": "Return",
                  "src": "4379:75:104"
                }
              ]
            },
            "documentation": {
              "id": 31197,
              "nodeType": "StructuredDocumentation",
              "src": "756:129:104",
              "text": "@notice find an arbitrary storage slot given a function sig, input data, address of the contract and a value to check against"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "find",
            "nameLocation": "1273:4:104",
            "parameters": {
              "id": 31201,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31200,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "1297:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 31640,
                  "src": "1278:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 31199,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 31198,
                      "name": "StdStorage",
                      "nameLocations": [
                        "1278:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "1278:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "1278:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1277:25:104"
            },
            "returnParameters": {
              "id": 31204,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31203,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 31640,
                  "src": "1321:7:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 31202,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1321:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1320:9:104"
            },
            "scope": 32037,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 31660,
            "nodeType": "FunctionDefinition",
            "src": "4467:156:104",
            "nodes": [],
            "body": {
              "id": 31659,
              "nodeType": "Block",
              "src": "4563:60:104",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 31655,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 31651,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31643,
                        "src": "4573:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 31653,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4578:7:104",
                      "memberName": "_target",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31142,
                      "src": "4573:12:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 31654,
                      "name": "_target",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 31645,
                      "src": "4588:7:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "4573:22:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 31656,
                  "nodeType": "ExpressionStatement",
                  "src": "4573:22:104"
                },
                {
                  "expression": {
                    "id": 31657,
                    "name": "self",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 31643,
                    "src": "4612:4:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 31650,
                  "id": 31658,
                  "nodeType": "Return",
                  "src": "4605:11:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "target",
            "nameLocation": "4476:6:104",
            "parameters": {
              "id": 31646,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31643,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "4502:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 31660,
                  "src": "4483:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 31642,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 31641,
                      "name": "StdStorage",
                      "nameLocations": [
                        "4483:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "4483:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "4483:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31645,
                  "mutability": "mutable",
                  "name": "_target",
                  "nameLocation": "4516:7:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 31660,
                  "src": "4508:15:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31644,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4508:7:104",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4482:42:104"
            },
            "returnParameters": {
              "id": 31650,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31649,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 31660,
                  "src": "4543:18:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 31648,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 31647,
                      "name": "StdStorage",
                      "nameLocations": [
                        "4543:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "4543:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "4543:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4542:20:104"
            },
            "scope": 32037,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 31680,
            "nodeType": "FunctionDefinition",
            "src": "4629:143:104",
            "nodes": [],
            "body": {
              "id": 31679,
              "nodeType": "Block",
              "src": "4718:54:104",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 31675,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 31671,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31663,
                        "src": "4728:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 31673,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4733:4:104",
                      "memberName": "_sig",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31138,
                      "src": "4728:9:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 31674,
                      "name": "_sig",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 31665,
                      "src": "4740:4:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "4728:16:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "id": 31676,
                  "nodeType": "ExpressionStatement",
                  "src": "4728:16:104"
                },
                {
                  "expression": {
                    "id": 31677,
                    "name": "self",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 31663,
                    "src": "4761:4:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 31670,
                  "id": 31678,
                  "nodeType": "Return",
                  "src": "4754:11:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sig",
            "nameLocation": "4638:3:104",
            "parameters": {
              "id": 31666,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31663,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "4661:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 31680,
                  "src": "4642:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 31662,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 31661,
                      "name": "StdStorage",
                      "nameLocations": [
                        "4642:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "4642:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "4642:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31665,
                  "mutability": "mutable",
                  "name": "_sig",
                  "nameLocation": "4674:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 31680,
                  "src": "4667:11:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 31664,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "4667:6:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4641:38:104"
            },
            "returnParameters": {
              "id": 31670,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31669,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 31680,
                  "src": "4698:18:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 31668,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 31667,
                      "name": "StdStorage",
                      "nameLocations": [
                        "4698:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "4698:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "4698:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4697:20:104"
            },
            "scope": 32037,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 31702,
            "nodeType": "FunctionDefinition",
            "src": "4778:156:104",
            "nodes": [],
            "body": {
              "id": 31701,
              "nodeType": "Block",
              "src": "4874:60:104",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 31697,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 31691,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31683,
                        "src": "4884:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 31693,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4889:4:104",
                      "memberName": "_sig",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31138,
                      "src": "4884:9:104",
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
                          "id": 31695,
                          "name": "_sig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31685,
                          "src": "4901:4:104",
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
                        "id": 31694,
                        "name": "sigs",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31196,
                        "src": "4896:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_bytes4_$",
                          "typeString": "function (string memory) pure returns (bytes4)"
                        }
                      },
                      "id": 31696,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4896:10:104",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "4884:22:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "id": 31698,
                  "nodeType": "ExpressionStatement",
                  "src": "4884:22:104"
                },
                {
                  "expression": {
                    "id": 31699,
                    "name": "self",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 31683,
                    "src": "4923:4:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 31690,
                  "id": 31700,
                  "nodeType": "Return",
                  "src": "4916:11:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sig",
            "nameLocation": "4787:3:104",
            "parameters": {
              "id": 31686,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31683,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "4810:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 31702,
                  "src": "4791:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 31682,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 31681,
                      "name": "StdStorage",
                      "nameLocations": [
                        "4791:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "4791:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "4791:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31685,
                  "mutability": "mutable",
                  "name": "_sig",
                  "nameLocation": "4830:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 31702,
                  "src": "4816:18:104",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 31684,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4816:6:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4790:45:104"
            },
            "returnParameters": {
              "id": 31690,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31689,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 31702,
                  "src": "4854:18:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 31688,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 31687,
                      "name": "StdStorage",
                      "nameLocations": [
                        "4854:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "4854:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "4854:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4853:20:104"
            },
            "scope": 32037,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 31733,
            "nodeType": "FunctionDefinition",
            "src": "4940:179:104",
            "nodes": [],
            "body": {
              "id": 31732,
              "nodeType": "Block",
              "src": "5034:85:104",
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
                                    "id": 31724,
                                    "name": "who",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 31707,
                                    "src": "5084:3:104",
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
                                  "id": 31723,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "5076:7:104",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint160_$",
                                    "typeString": "type(uint160)"
                                  },
                                  "typeName": {
                                    "id": 31722,
                                    "name": "uint160",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "5076:7:104",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 31725,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "5076:12:104",
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
                              "id": 31721,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "5068:7:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 31720,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "5068:7:104",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 31726,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5068:21:104",
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
                          "id": 31719,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "5060:7:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 31718,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "5060:7:104",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 31727,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5060:30:104",
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
                          "id": 31713,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31705,
                          "src": "5044:4:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                            "typeString": "struct StdStorage storage pointer"
                          }
                        },
                        "id": 31716,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5049:5:104",
                        "memberName": "_keys",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 31136,
                        "src": "5044:10:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                          "typeString": "bytes32[] storage ref"
                        }
                      },
                      "id": 31717,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5055:4:104",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "5044:15:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_bytes32_$dyn_storage_ptr_$_t_bytes32_$returns$__$attached_to$_t_array$_t_bytes32_$dyn_storage_ptr_$",
                        "typeString": "function (bytes32[] storage pointer,bytes32)"
                      }
                    },
                    "id": 31728,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5044:47:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 31729,
                  "nodeType": "ExpressionStatement",
                  "src": "5044:47:104"
                },
                {
                  "expression": {
                    "id": 31730,
                    "name": "self",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 31705,
                    "src": "5108:4:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 31712,
                  "id": 31731,
                  "nodeType": "Return",
                  "src": "5101:11:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "with_key",
            "nameLocation": "4949:8:104",
            "parameters": {
              "id": 31708,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31705,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "4977:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 31733,
                  "src": "4958:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 31704,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 31703,
                      "name": "StdStorage",
                      "nameLocations": [
                        "4958:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "4958:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "4958:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31707,
                  "mutability": "mutable",
                  "name": "who",
                  "nameLocation": "4991:3:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 31733,
                  "src": "4983:11:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31706,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4983:7:104",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4957:38:104"
            },
            "returnParameters": {
              "id": 31712,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31711,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 31733,
                  "src": "5014:18:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 31710,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 31709,
                      "name": "StdStorage",
                      "nameLocations": [
                        "5014:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "5014:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "5014:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5013:20:104"
            },
            "scope": 32037,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 31758,
            "nodeType": "FunctionDefinition",
            "src": "5125:161:104",
            "nodes": [],
            "body": {
              "id": 31757,
              "nodeType": "Block",
              "src": "5219:67:104",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 31751,
                            "name": "amt",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31738,
                            "src": "5253:3:104",
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
                          "id": 31750,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "5245:7:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 31749,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "5245:7:104",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 31752,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5245:12:104",
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
                          "id": 31744,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31736,
                          "src": "5229:4:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                            "typeString": "struct StdStorage storage pointer"
                          }
                        },
                        "id": 31747,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5234:5:104",
                        "memberName": "_keys",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 31136,
                        "src": "5229:10:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                          "typeString": "bytes32[] storage ref"
                        }
                      },
                      "id": 31748,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5240:4:104",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "5229:15:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_bytes32_$dyn_storage_ptr_$_t_bytes32_$returns$__$attached_to$_t_array$_t_bytes32_$dyn_storage_ptr_$",
                        "typeString": "function (bytes32[] storage pointer,bytes32)"
                      }
                    },
                    "id": 31753,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5229:29:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 31754,
                  "nodeType": "ExpressionStatement",
                  "src": "5229:29:104"
                },
                {
                  "expression": {
                    "id": 31755,
                    "name": "self",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 31736,
                    "src": "5275:4:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 31743,
                  "id": 31756,
                  "nodeType": "Return",
                  "src": "5268:11:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "with_key",
            "nameLocation": "5134:8:104",
            "parameters": {
              "id": 31739,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31736,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5162:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 31758,
                  "src": "5143:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 31735,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 31734,
                      "name": "StdStorage",
                      "nameLocations": [
                        "5143:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "5143:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "5143:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31738,
                  "mutability": "mutable",
                  "name": "amt",
                  "nameLocation": "5176:3:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 31758,
                  "src": "5168:11:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 31737,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5168:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5142:38:104"
            },
            "returnParameters": {
              "id": 31743,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31742,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 31758,
                  "src": "5199:18:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 31741,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 31740,
                      "name": "StdStorage",
                      "nameLocations": [
                        "5199:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "5199:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "5199:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5198:20:104"
            },
            "scope": 32037,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 31780,
            "nodeType": "FunctionDefinition",
            "src": "5292:152:104",
            "nodes": [],
            "body": {
              "id": 31779,
              "nodeType": "Block",
              "src": "5386:58:104",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 31774,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31763,
                        "src": "5412:3:104",
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
                          "id": 31769,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31761,
                          "src": "5396:4:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                            "typeString": "struct StdStorage storage pointer"
                          }
                        },
                        "id": 31772,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5401:5:104",
                        "memberName": "_keys",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 31136,
                        "src": "5396:10:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                          "typeString": "bytes32[] storage ref"
                        }
                      },
                      "id": 31773,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5407:4:104",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "5396:15:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_bytes32_$dyn_storage_ptr_$_t_bytes32_$returns$__$attached_to$_t_array$_t_bytes32_$dyn_storage_ptr_$",
                        "typeString": "function (bytes32[] storage pointer,bytes32)"
                      }
                    },
                    "id": 31775,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5396:20:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 31776,
                  "nodeType": "ExpressionStatement",
                  "src": "5396:20:104"
                },
                {
                  "expression": {
                    "id": 31777,
                    "name": "self",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 31761,
                    "src": "5433:4:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 31768,
                  "id": 31778,
                  "nodeType": "Return",
                  "src": "5426:11:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "with_key",
            "nameLocation": "5301:8:104",
            "parameters": {
              "id": 31764,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31761,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5329:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 31780,
                  "src": "5310:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 31760,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 31759,
                      "name": "StdStorage",
                      "nameLocations": [
                        "5310:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "5310:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "5310:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31763,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "5343:3:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 31780,
                  "src": "5335:11:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 31762,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5335:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5309:38:104"
            },
            "returnParameters": {
              "id": 31768,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31767,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 31780,
                  "src": "5366:18:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 31766,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 31765,
                      "name": "StdStorage",
                      "nameLocations": [
                        "5366:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "5366:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "5366:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5365:20:104"
            },
            "scope": 32037,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 31800,
            "nodeType": "FunctionDefinition",
            "src": "5450:152:104",
            "nodes": [],
            "body": {
              "id": 31799,
              "nodeType": "Block",
              "src": "5544:58:104",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 31795,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 31791,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31783,
                        "src": "5554:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 31793,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "5559:6:104",
                      "memberName": "_depth",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31140,
                      "src": "5554:11:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 31794,
                      "name": "_depth",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 31785,
                      "src": "5568:6:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5554:20:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 31796,
                  "nodeType": "ExpressionStatement",
                  "src": "5554:20:104"
                },
                {
                  "expression": {
                    "id": 31797,
                    "name": "self",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 31783,
                    "src": "5591:4:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 31790,
                  "id": 31798,
                  "nodeType": "Return",
                  "src": "5584:11:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "depth",
            "nameLocation": "5459:5:104",
            "parameters": {
              "id": 31786,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31783,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5484:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 31800,
                  "src": "5465:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 31782,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 31781,
                      "name": "StdStorage",
                      "nameLocations": [
                        "5465:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "5465:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "5465:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31785,
                  "mutability": "mutable",
                  "name": "_depth",
                  "nameLocation": "5498:6:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 31800,
                  "src": "5490:14:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 31784,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5490:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5464:41:104"
            },
            "returnParameters": {
              "id": 31790,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31789,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 31800,
                  "src": "5524:18:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 31788,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 31787,
                      "name": "StdStorage",
                      "nameLocations": [
                        "5524:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "5524:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "5524:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5523:20:104"
            },
            "scope": 32037,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 31832,
            "nodeType": "FunctionDefinition",
            "src": "5608:194:104",
            "nodes": [],
            "body": {
              "id": 31831,
              "nodeType": "Block",
              "src": "5678:124:104",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    31809
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 31809,
                      "mutability": "mutable",
                      "name": "t",
                      "nameLocation": "5696:1:104",
                      "nodeType": "VariableDeclaration",
                      "scope": 31831,
                      "src": "5688:9:104",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 31808,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "5688:7:104",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 31812,
                  "initialValue": {
                    "expression": {
                      "id": 31810,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 31803,
                      "src": "5700:4:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                        "typeString": "struct StdStorage storage pointer"
                      }
                    },
                    "id": 31811,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "5705:7:104",
                    "memberName": "_target",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 31142,
                    "src": "5700:12:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5688:24:104"
                },
                {
                  "assignments": [
                    31814
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 31814,
                      "mutability": "mutable",
                      "name": "s",
                      "nameLocation": "5730:1:104",
                      "nodeType": "VariableDeclaration",
                      "scope": 31831,
                      "src": "5722:9:104",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 31813,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5722:7:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 31818,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 31816,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31803,
                        "src": "5739:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      ],
                      "id": 31815,
                      "name": "find",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 31640,
                      "src": "5734:4:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$31145_storage_ptr_$returns$_t_uint256_$",
                        "typeString": "function (struct StdStorage storage pointer) returns (uint256)"
                      }
                    },
                    "id": 31817,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5734:10:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5722:22:104"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 31823,
                            "name": "t",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31809,
                            "src": "5780:1:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "arguments": [
                              {
                                "id": 31826,
                                "name": "s",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 31814,
                                "src": "5791:1:104",
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
                              "id": 31825,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "5783:7:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes32_$",
                                "typeString": "type(bytes32)"
                              },
                              "typeName": {
                                "id": 31824,
                                "name": "bytes32",
                                "nodeType": "ElementaryTypeName",
                                "src": "5783:7:104",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 31827,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5783:10:104",
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
                            "id": 31821,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31178,
                            "src": "5772:2:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Vm_$36245",
                              "typeString": "contract Vm"
                            }
                          },
                          "id": 31822,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5775:4:104",
                          "memberName": "load",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 34765,
                          "src": "5772:7:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_address_$_t_bytes32_$returns$_t_bytes32_$",
                            "typeString": "function (address,bytes32) view external returns (bytes32)"
                          }
                        },
                        "id": 31828,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5772:22:104",
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
                        "id": 31819,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -1,
                        "src": "5761:3:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 31820,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "5765:6:104",
                      "memberName": "encode",
                      "nodeType": "MemberAccess",
                      "src": "5761:10:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function () pure returns (bytes memory)"
                      }
                    },
                    "id": 31829,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5761:34:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 31807,
                  "id": 31830,
                  "nodeType": "Return",
                  "src": "5754:41:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read",
            "nameLocation": "5617:4:104",
            "parameters": {
              "id": 31804,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31803,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5641:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 31832,
                  "src": "5622:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 31802,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 31801,
                      "name": "StdStorage",
                      "nameLocations": [
                        "5622:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "5622:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "5622:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5621:25:104"
            },
            "returnParameters": {
              "id": 31807,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31806,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 31832,
                  "src": "5664:12:104",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 31805,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5664:5:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5663:14:104"
            },
            "scope": 32037,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 31851,
            "nodeType": "FunctionDefinition",
            "src": "5808:131:104",
            "nodes": [],
            "body": {
              "id": 31850,
              "nodeType": "Block",
              "src": "5882:57:104",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 31843,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31835,
                            "src": "5915:4:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                              "typeString": "struct StdStorage storage pointer"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                              "typeString": "struct StdStorage storage pointer"
                            }
                          ],
                          "id": 31842,
                          "name": "read",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31832,
                          "src": "5910:4:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$31145_storage_ptr_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (struct StdStorage storage pointer) returns (bytes memory)"
                          }
                        },
                        "id": 31844,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5910:10:104",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "components": [
                          {
                            "id": 31846,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "5923:7:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_bytes32_$",
                              "typeString": "type(bytes32)"
                            },
                            "typeName": {
                              "id": 31845,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "5923:7:104",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "id": 31847,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "5922:9:104",
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
                        "id": 31840,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -1,
                        "src": "5899:3:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 31841,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "5903:6:104",
                      "memberName": "decode",
                      "nodeType": "MemberAccess",
                      "src": "5899:10:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                        "typeString": "function () pure"
                      }
                    },
                    "id": 31848,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5899:33:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 31839,
                  "id": 31849,
                  "nodeType": "Return",
                  "src": "5892:40:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read_bytes32",
            "nameLocation": "5817:12:104",
            "parameters": {
              "id": 31836,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31835,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5849:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 31851,
                  "src": "5830:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 31834,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 31833,
                      "name": "StdStorage",
                      "nameLocations": [
                        "5830:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "5830:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "5830:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5829:25:104"
            },
            "returnParameters": {
              "id": 31839,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31838,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 31851,
                  "src": "5873:7:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 31837,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5873:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5872:9:104"
            },
            "scope": 32037,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 31882,
            "nodeType": "FunctionDefinition",
            "src": "5945:279:104",
            "nodes": [],
            "body": {
              "id": 31881,
              "nodeType": "Block",
              "src": "6013:211:104",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    31860
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 31860,
                      "mutability": "mutable",
                      "name": "v",
                      "nameLocation": "6030:1:104",
                      "nodeType": "VariableDeclaration",
                      "scope": 31881,
                      "src": "6023:8:104",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 31859,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6023:6:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 31864,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 31862,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31854,
                        "src": "6043:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      ],
                      "id": 31861,
                      "name": "read_int",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 31939,
                      "src": "6034:8:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$31145_storage_ptr_$returns$_t_int256_$",
                        "typeString": "function (struct StdStorage storage pointer) returns (int256)"
                      }
                    },
                    "id": 31863,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6034:14:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6023:25:104"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 31867,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 31865,
                      "name": "v",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 31860,
                      "src": "6062:1:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 31866,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6067:1:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "6062:6:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 31870,
                  "nodeType": "IfStatement",
                  "src": "6058:24:104",
                  "trueBody": {
                    "expression": {
                      "hexValue": "66616c7365",
                      "id": 31868,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6077:5:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "functionReturnParameters": 31858,
                    "id": 31869,
                    "nodeType": "Return",
                    "src": "6070:12:104"
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 31873,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 31871,
                      "name": "v",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 31860,
                      "src": "6096:1:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 31872,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6101:1:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "6096:6:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 31876,
                  "nodeType": "IfStatement",
                  "src": "6092:23:104",
                  "trueBody": {
                    "expression": {
                      "hexValue": "74727565",
                      "id": 31874,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6111:4:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "functionReturnParameters": 31858,
                    "id": 31875,
                    "nodeType": "Return",
                    "src": "6104:11:104"
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "73746453746f7261676520726561645f626f6f6c2853746453746f72616765293a2043616e6e6f74206465636f64652e204d616b65207375726520796f75206172652072656164696e67206120626f6f6c2e",
                        "id": 31878,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6132:84:104",
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
                      "id": 31877,
                      "name": "revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -19,
                        -19
                      ],
                      "referencedDeclaration": -19,
                      "src": "6125:6:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory) pure"
                      }
                    },
                    "id": 31879,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6125:92:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 31880,
                  "nodeType": "ExpressionStatement",
                  "src": "6125:92:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read_bool",
            "nameLocation": "5954:9:104",
            "parameters": {
              "id": 31855,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31854,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5983:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 31882,
                  "src": "5964:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 31853,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 31852,
                      "name": "StdStorage",
                      "nameLocations": [
                        "5964:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "5964:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "5964:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5963:25:104"
            },
            "returnParameters": {
              "id": 31858,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31857,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 31882,
                  "src": "6007:4:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 31856,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6007:4:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6006:6:104"
            },
            "scope": 32037,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 31901,
            "nodeType": "FunctionDefinition",
            "src": "6230:131:104",
            "nodes": [],
            "body": {
              "id": 31900,
              "nodeType": "Block",
              "src": "6304:57:104",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 31893,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31885,
                            "src": "6337:4:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                              "typeString": "struct StdStorage storage pointer"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                              "typeString": "struct StdStorage storage pointer"
                            }
                          ],
                          "id": 31892,
                          "name": "read",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31832,
                          "src": "6332:4:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$31145_storage_ptr_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (struct StdStorage storage pointer) returns (bytes memory)"
                          }
                        },
                        "id": 31894,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6332:10:104",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "components": [
                          {
                            "id": 31896,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6345:7:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 31895,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "6345:7:104",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "id": 31897,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "6344:9:104",
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
                        "id": 31890,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -1,
                        "src": "6321:3:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 31891,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "6325:6:104",
                      "memberName": "decode",
                      "nodeType": "MemberAccess",
                      "src": "6321:10:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                        "typeString": "function () pure"
                      }
                    },
                    "id": 31898,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6321:33:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "functionReturnParameters": 31889,
                  "id": 31899,
                  "nodeType": "Return",
                  "src": "6314:40:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read_address",
            "nameLocation": "6239:12:104",
            "parameters": {
              "id": 31886,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31885,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "6271:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 31901,
                  "src": "6252:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 31884,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 31883,
                      "name": "StdStorage",
                      "nameLocations": [
                        "6252:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "6252:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "6252:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6251:25:104"
            },
            "returnParameters": {
              "id": 31889,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31888,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 31901,
                  "src": "6295:7:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31887,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6295:7:104",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6294:9:104"
            },
            "scope": 32037,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 31920,
            "nodeType": "FunctionDefinition",
            "src": "6367:128:104",
            "nodes": [],
            "body": {
              "id": 31919,
              "nodeType": "Block",
              "src": "6438:57:104",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 31912,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31904,
                            "src": "6471:4:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                              "typeString": "struct StdStorage storage pointer"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                              "typeString": "struct StdStorage storage pointer"
                            }
                          ],
                          "id": 31911,
                          "name": "read",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31832,
                          "src": "6466:4:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$31145_storage_ptr_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (struct StdStorage storage pointer) returns (bytes memory)"
                          }
                        },
                        "id": 31913,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6466:10:104",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "components": [
                          {
                            "id": 31915,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6479:7:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 31914,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "6479:7:104",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "id": 31916,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "6478:9:104",
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
                        "id": 31909,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -1,
                        "src": "6455:3:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 31910,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "6459:6:104",
                      "memberName": "decode",
                      "nodeType": "MemberAccess",
                      "src": "6455:10:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                        "typeString": "function () pure"
                      }
                    },
                    "id": 31917,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6455:33:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 31908,
                  "id": 31918,
                  "nodeType": "Return",
                  "src": "6448:40:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read_uint",
            "nameLocation": "6376:9:104",
            "parameters": {
              "id": 31905,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31904,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "6405:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 31920,
                  "src": "6386:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 31903,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 31902,
                      "name": "StdStorage",
                      "nameLocations": [
                        "6386:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "6386:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "6386:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6385:25:104"
            },
            "returnParameters": {
              "id": 31908,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31907,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 31920,
                  "src": "6429:7:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 31906,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6429:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6428:9:104"
            },
            "scope": 32037,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 31939,
            "nodeType": "FunctionDefinition",
            "src": "6501:125:104",
            "nodes": [],
            "body": {
              "id": 31938,
              "nodeType": "Block",
              "src": "6570:56:104",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 31931,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31923,
                            "src": "6603:4:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                              "typeString": "struct StdStorage storage pointer"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                              "typeString": "struct StdStorage storage pointer"
                            }
                          ],
                          "id": 31930,
                          "name": "read",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31832,
                          "src": "6598:4:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$31145_storage_ptr_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (struct StdStorage storage pointer) returns (bytes memory)"
                          }
                        },
                        "id": 31932,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6598:10:104",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "components": [
                          {
                            "id": 31934,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6611:6:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_int256_$",
                              "typeString": "type(int256)"
                            },
                            "typeName": {
                              "id": 31933,
                              "name": "int256",
                              "nodeType": "ElementaryTypeName",
                              "src": "6611:6:104",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "id": 31935,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "6610:8:104",
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
                        "id": 31928,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -1,
                        "src": "6587:3:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 31929,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "6591:6:104",
                      "memberName": "decode",
                      "nodeType": "MemberAccess",
                      "src": "6587:10:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                        "typeString": "function () pure"
                      }
                    },
                    "id": 31936,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6587:32:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 31927,
                  "id": 31937,
                  "nodeType": "Return",
                  "src": "6580:39:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read_int",
            "nameLocation": "6510:8:104",
            "parameters": {
              "id": 31924,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31923,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "6538:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 31939,
                  "src": "6519:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 31922,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 31921,
                      "name": "StdStorage",
                      "nameLocations": [
                        "6519:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "6519:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "6519:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6518:25:104"
            },
            "returnParameters": {
              "id": 31927,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31926,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 31939,
                  "src": "6562:6:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 31925,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6562:6:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6561:8:104"
            },
            "scope": 32037,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 31995,
            "nodeType": "FunctionDefinition",
            "src": "6632:304:104",
            "nodes": [],
            "body": {
              "id": 31994,
              "nodeType": "Block",
              "src": "6719:217:104",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    31949
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 31949,
                      "mutability": "mutable",
                      "name": "out",
                      "nameLocation": "6737:3:104",
                      "nodeType": "VariableDeclaration",
                      "scope": 31994,
                      "src": "6729:11:104",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 31948,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "6729:7:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 31950,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6729:11:104"
                },
                {
                  "assignments": [
                    31952
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 31952,
                      "mutability": "mutable",
                      "name": "max",
                      "nameLocation": "6759:3:104",
                      "nodeType": "VariableDeclaration",
                      "scope": 31994,
                      "src": "6751:11:104",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 31951,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6751:7:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 31961,
                  "initialValue": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 31956,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 31953,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31941,
                          "src": "6765:1:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 31954,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6767:6:104",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "6765:8:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "hexValue": "3332",
                        "id": 31955,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6776:2:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_32_by_1",
                          "typeString": "int_const 32"
                        },
                        "value": "32"
                      },
                      "src": "6765:13:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "expression": {
                        "id": 31958,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31941,
                        "src": "6786:1:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 31959,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6788:6:104",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "6786:8:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 31960,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "6765:29:104",
                    "trueExpression": {
                      "hexValue": "3332",
                      "id": 31957,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6781:2:104",
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
                  "src": "6751:43:104"
                },
                {
                  "body": {
                    "id": 31990,
                    "nodeType": "Block",
                    "src": "6838:72:104",
                    "statements": [
                      {
                        "expression": {
                          "id": 31988,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 31972,
                            "name": "out",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31949,
                            "src": "6852:3:104",
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
                            "id": 31987,
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
                                  "id": 31981,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "baseExpression": {
                                      "id": 31975,
                                      "name": "b",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 31941,
                                      "src": "6867:1:104",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes memory"
                                      }
                                    },
                                    "id": 31979,
                                    "indexExpression": {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "id": 31978,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 31976,
                                        "name": "offset",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 31943,
                                        "src": "6869:6:104",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "+",
                                      "rightExpression": {
                                        "id": 31977,
                                        "name": "i",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 31963,
                                        "src": "6878:1:104",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "6869:10:104",
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
                                    "src": "6867:13:104",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes1",
                                      "typeString": "bytes1"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "&",
                                  "rightExpression": {
                                    "hexValue": "30784646",
                                    "id": 31980,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6883:4:104",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_255_by_1",
                                      "typeString": "int_const 255"
                                    },
                                    "value": "0xFF"
                                  },
                                  "src": "6867:20:104",
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
                                "id": 31974,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "6859:7:104",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes32_$",
                                  "typeString": "type(bytes32)"
                                },
                                "typeName": {
                                  "id": 31973,
                                  "name": "bytes32",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "6859:7:104",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 31982,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6859:29:104",
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
                                  "id": 31985,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 31983,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 31963,
                                    "src": "6893:1:104",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "hexValue": "38",
                                    "id": 31984,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6897:1:104",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_8_by_1",
                                      "typeString": "int_const 8"
                                    },
                                    "value": "8"
                                  },
                                  "src": "6893:5:104",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "id": 31986,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "6892:7:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "6859:40:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "6852:47:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 31989,
                        "nodeType": "ExpressionStatement",
                        "src": "6852:47:104"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 31968,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 31966,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 31963,
                      "src": "6824:1:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 31967,
                      "name": "max",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 31952,
                      "src": "6828:3:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6824:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 31991,
                  "initializationExpression": {
                    "assignments": [
                      31963
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 31963,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "6817:1:104",
                        "nodeType": "VariableDeclaration",
                        "scope": 31991,
                        "src": "6809:9:104",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 31962,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "6809:7:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 31965,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 31964,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6821:1:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "6809:13:104"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 31970,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "6833:3:104",
                      "subExpression": {
                        "id": 31969,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31963,
                        "src": "6833:1:104",
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
                    "id": 31971,
                    "nodeType": "ExpressionStatement",
                    "src": "6833:3:104"
                  },
                  "nodeType": "ForStatement",
                  "src": "6804:106:104"
                },
                {
                  "expression": {
                    "id": 31992,
                    "name": "out",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 31949,
                    "src": "6926:3:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 31947,
                  "id": 31993,
                  "nodeType": "Return",
                  "src": "6919:10:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "bytesToBytes32",
            "nameLocation": "6641:14:104",
            "parameters": {
              "id": 31944,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31941,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "6669:1:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 31995,
                  "src": "6656:14:104",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 31940,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6656:5:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31943,
                  "mutability": "mutable",
                  "name": "offset",
                  "nameLocation": "6680:6:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 31995,
                  "src": "6672:14:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 31942,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6672:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6655:32:104"
            },
            "returnParameters": {
              "id": 31947,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31946,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 31995,
                  "src": "6710:7:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 31945,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6710:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6709:9:104"
            },
            "scope": 32037,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 32036,
            "nodeType": "FunctionDefinition",
            "src": "6942:393:104",
            "nodes": [],
            "body": {
              "id": 32035,
              "nodeType": "Block",
              "src": "7015:320:104",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    32004
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 32004,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "7038:6:104",
                      "nodeType": "VariableDeclaration",
                      "scope": 32035,
                      "src": "7025:19:104",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 32003,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "7025:5:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 32012,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 32010,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 32007,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31998,
                            "src": "7057:1:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                              "typeString": "bytes32[] memory"
                            }
                          },
                          "id": 32008,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7059:6:104",
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "src": "7057:8:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "hexValue": "3332",
                          "id": 32009,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7068:2:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_32_by_1",
                            "typeString": "int_const 32"
                          },
                          "value": "32"
                        },
                        "src": "7057:13:104",
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
                      "id": 32006,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "7047:9:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (bytes memory)"
                      },
                      "typeName": {
                        "id": 32005,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "7051:5:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      }
                    },
                    "id": 32011,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7047:24:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7025:46:104"
                },
                {
                  "body": {
                    "id": 32031,
                    "nodeType": "Block",
                    "src": "7120:185:104",
                    "statements": [
                      {
                        "assignments": [
                          32025
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 32025,
                            "mutability": "mutable",
                            "name": "k",
                            "nameLocation": "7142:1:104",
                            "nodeType": "VariableDeclaration",
                            "scope": 32031,
                            "src": "7134:9:104",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 32024,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "7134:7:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 32029,
                        "initialValue": {
                          "baseExpression": {
                            "id": 32026,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31998,
                            "src": "7146:1:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                              "typeString": "bytes32[] memory"
                            }
                          },
                          "id": 32028,
                          "indexExpression": {
                            "id": 32027,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32014,
                            "src": "7148:1:104",
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
                          "src": "7146:4:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "7134:16:104"
                      },
                      {
                        "AST": {
                          "nodeType": "YulBlock",
                          "src": "7220:75:104",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "result",
                                        "nodeType": "YulIdentifier",
                                        "src": "7249:6:104"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "7261:2:104",
                                            "type": "",
                                            "value": "32"
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "7269:2:104",
                                                "type": "",
                                                "value": "32"
                                              },
                                              {
                                                "name": "i",
                                                "nodeType": "YulIdentifier",
                                                "src": "7273:1:104"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "mul",
                                              "nodeType": "YulIdentifier",
                                              "src": "7265:3:104"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "7265:10:104"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "7257:3:104"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "7257:19:104"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "7245:3:104"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "7245:32:104"
                                  },
                                  {
                                    "name": "k",
                                    "nodeType": "YulIdentifier",
                                    "src": "7279:1:104"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "7238:6:104"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "7238:43:104"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "7238:43:104"
                            }
                          ]
                        },
                        "documentation": "@solidity memory-safe-assembly",
                        "evmVersion": "paris",
                        "externalReferences": [
                          {
                            "declaration": 32014,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "7273:1:104",
                            "valueSize": 1
                          },
                          {
                            "declaration": 32025,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "7279:1:104",
                            "valueSize": 1
                          },
                          {
                            "declaration": 32004,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "7249:6:104",
                            "valueSize": 1
                          }
                        ],
                        "id": 32030,
                        "nodeType": "InlineAssembly",
                        "src": "7211:84:104"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 32020,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 32017,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32014,
                      "src": "7101:1:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 32018,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31998,
                        "src": "7105:1:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                          "typeString": "bytes32[] memory"
                        }
                      },
                      "id": 32019,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7107:6:104",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "7105:8:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7101:12:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 32032,
                  "initializationExpression": {
                    "assignments": [
                      32014
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 32014,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "7094:1:104",
                        "nodeType": "VariableDeclaration",
                        "scope": 32032,
                        "src": "7086:9:104",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 32013,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "7086:7:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 32016,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 32015,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7098:1:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "7086:13:104"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 32022,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "7115:3:104",
                      "subExpression": {
                        "id": 32021,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32014,
                        "src": "7115:1:104",
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
                    "id": 32023,
                    "nodeType": "ExpressionStatement",
                    "src": "7115:3:104"
                  },
                  "nodeType": "ForStatement",
                  "src": "7081:224:104"
                },
                {
                  "expression": {
                    "id": 32033,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 32004,
                    "src": "7322:6:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 32002,
                  "id": 32034,
                  "nodeType": "Return",
                  "src": "7315:13:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "flatten",
            "nameLocation": "6951:7:104",
            "parameters": {
              "id": 31999,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31998,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "6976:1:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32036,
                  "src": "6959:18:104",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 31996,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "6959:7:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 31997,
                    "nodeType": "ArrayTypeName",
                    "src": "6959:9:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6958:20:104"
            },
            "returnParameters": {
              "id": 32002,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32001,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32036,
                  "src": "7001:12:104",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 32000,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7001:5:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7000:14:104"
            },
            "scope": 32037,
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
          32037
        ],
        "name": "stdStorageSafe",
        "nameLocation": "376:14:104",
        "scope": 32599,
        "usedErrors": [],
        "usedEvents": [
          31155,
          31161
        ]
      },
      {
        "id": 32598,
        "nodeType": "ContractDefinition",
        "src": "7339:4665:104",
        "nodes": [
          {
            "id": 32054,
            "nodeType": "VariableDeclaration",
            "src": "7364:84:104",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "vm",
            "nameLocation": "7384:2:104",
            "scope": 32598,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Vm_$36245",
              "typeString": "contract Vm"
            },
            "typeName": {
              "id": 32039,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 32038,
                "name": "Vm",
                "nameLocations": [
                  "7364:2:104"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 36245,
                "src": "7364:2:104"
              },
              "referencedDeclaration": 36245,
              "src": "7364:2:104",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Vm_$36245",
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
                                  "id": 32048,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "string",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7426:17:104",
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
                                "id": 32047,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "7416:9:104",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                              },
                              "id": 32049,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7416:28:104",
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
                            "id": 32046,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "7408:7:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 32045,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "7408:7:104",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 32050,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7408:37:104",
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
                        "id": 32044,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "7400:7:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint160_$",
                          "typeString": "type(uint160)"
                        },
                        "typeName": {
                          "id": 32043,
                          "name": "uint160",
                          "nodeType": "ElementaryTypeName",
                          "src": "7400:7:104",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 32051,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7400:46:104",
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
                    "id": 32042,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "ElementaryTypeNameExpression",
                    "src": "7392:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_address_$",
                      "typeString": "type(address)"
                    },
                    "typeName": {
                      "id": 32041,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "7392:7:104",
                      "typeDescriptions": {}
                    }
                  },
                  "id": 32052,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "typeConversion",
                  "lValueRequested": false,
                  "nameLocations": [],
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "7392:55:104",
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
                "id": 32040,
                "name": "Vm",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 36245,
                "src": "7389:2:104",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_contract$_Vm_$36245_$",
                  "typeString": "type(contract Vm)"
                }
              },
              "id": 32053,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "7389:59:104",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Vm_$36245",
                "typeString": "contract Vm"
              }
            },
            "visibility": "private"
          },
          {
            "id": 32067,
            "nodeType": "FunctionDefinition",
            "src": "7455:118:104",
            "nodes": [],
            "body": {
              "id": 32066,
              "nodeType": "Block",
              "src": "7522:51:104",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 32063,
                        "name": "sigStr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32056,
                        "src": "7559:6:104",
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
                        "id": 32061,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32037,
                        "src": "7539:14:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$32037_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 32062,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7554:4:104",
                      "memberName": "sigs",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31196,
                      "src": "7539:19:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_bytes4_$",
                        "typeString": "function (string memory) pure returns (bytes4)"
                      }
                    },
                    "id": 32064,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7539:27:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "functionReturnParameters": 32060,
                  "id": 32065,
                  "nodeType": "Return",
                  "src": "7532:34:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sigs",
            "nameLocation": "7464:4:104",
            "parameters": {
              "id": 32057,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32056,
                  "mutability": "mutable",
                  "name": "sigStr",
                  "nameLocation": "7483:6:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32067,
                  "src": "7469:20:104",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32055,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7469:6:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7468:22:104"
            },
            "returnParameters": {
              "id": 32060,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32059,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32067,
                  "src": "7514:6:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 32058,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "7514:6:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7513:8:104"
            },
            "scope": 32598,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 32081,
            "nodeType": "FunctionDefinition",
            "src": "7579:115:104",
            "nodes": [],
            "body": {
              "id": 32080,
              "nodeType": "Block",
              "src": "7645:49:104",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 32077,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32070,
                        "src": "7682:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      ],
                      "expression": {
                        "id": 32075,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32037,
                        "src": "7662:14:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$32037_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 32076,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7677:4:104",
                      "memberName": "find",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31640,
                      "src": "7662:19:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$31145_storage_ptr_$returns$_t_uint256_$",
                        "typeString": "function (struct StdStorage storage pointer) returns (uint256)"
                      }
                    },
                    "id": 32078,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7662:25:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 32074,
                  "id": 32079,
                  "nodeType": "Return",
                  "src": "7655:32:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "find",
            "nameLocation": "7588:4:104",
            "parameters": {
              "id": 32071,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32070,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "7612:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32081,
                  "src": "7593:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 32069,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 32068,
                      "name": "StdStorage",
                      "nameLocations": [
                        "7593:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "7593:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "7593:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7592:25:104"
            },
            "returnParameters": {
              "id": 32074,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32073,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32081,
                  "src": "7636:7:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32072,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7636:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7635:9:104"
            },
            "scope": 32598,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 32099,
            "nodeType": "FunctionDefinition",
            "src": "7700:156:104",
            "nodes": [],
            "body": {
              "id": 32098,
              "nodeType": "Block",
              "src": "7796:60:104",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 32094,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32084,
                        "src": "7835:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      {
                        "id": 32095,
                        "name": "_target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32086,
                        "src": "7841:7:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "id": 32092,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32037,
                        "src": "7813:14:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$32037_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 32093,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7828:6:104",
                      "memberName": "target",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31660,
                      "src": "7813:21:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$31145_storage_ptr_$_t_address_$returns$_t_struct$_StdStorage_$31145_storage_ptr_$",
                        "typeString": "function (struct StdStorage storage pointer,address) returns (struct StdStorage storage pointer)"
                      }
                    },
                    "id": 32096,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7813:36:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 32091,
                  "id": 32097,
                  "nodeType": "Return",
                  "src": "7806:43:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "target",
            "nameLocation": "7709:6:104",
            "parameters": {
              "id": 32087,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32084,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "7735:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32099,
                  "src": "7716:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 32083,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 32082,
                      "name": "StdStorage",
                      "nameLocations": [
                        "7716:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "7716:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "7716:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32086,
                  "mutability": "mutable",
                  "name": "_target",
                  "nameLocation": "7749:7:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32099,
                  "src": "7741:15:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32085,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7741:7:104",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7715:42:104"
            },
            "returnParameters": {
              "id": 32091,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32090,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32099,
                  "src": "7776:18:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 32089,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 32088,
                      "name": "StdStorage",
                      "nameLocations": [
                        "7776:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "7776:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "7776:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7775:20:104"
            },
            "scope": 32598,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 32117,
            "nodeType": "FunctionDefinition",
            "src": "7862:143:104",
            "nodes": [],
            "body": {
              "id": 32116,
              "nodeType": "Block",
              "src": "7951:54:104",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 32112,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32102,
                        "src": "7987:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      {
                        "id": 32113,
                        "name": "_sig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32104,
                        "src": "7993:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      ],
                      "expression": {
                        "id": 32110,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32037,
                        "src": "7968:14:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$32037_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 32111,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7983:3:104",
                      "memberName": "sig",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31680,
                      "src": "7968:18:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$31145_storage_ptr_$_t_bytes4_$returns$_t_struct$_StdStorage_$31145_storage_ptr_$",
                        "typeString": "function (struct StdStorage storage pointer,bytes4) returns (struct StdStorage storage pointer)"
                      }
                    },
                    "id": 32114,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7968:30:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 32109,
                  "id": 32115,
                  "nodeType": "Return",
                  "src": "7961:37:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sig",
            "nameLocation": "7871:3:104",
            "parameters": {
              "id": 32105,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32102,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "7894:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32117,
                  "src": "7875:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 32101,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 32100,
                      "name": "StdStorage",
                      "nameLocations": [
                        "7875:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "7875:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "7875:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32104,
                  "mutability": "mutable",
                  "name": "_sig",
                  "nameLocation": "7907:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32117,
                  "src": "7900:11:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 32103,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "7900:6:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7874:38:104"
            },
            "returnParameters": {
              "id": 32109,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32108,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32117,
                  "src": "7931:18:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 32107,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 32106,
                      "name": "StdStorage",
                      "nameLocations": [
                        "7931:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "7931:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "7931:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7930:20:104"
            },
            "scope": 32598,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 32135,
            "nodeType": "FunctionDefinition",
            "src": "8011:150:104",
            "nodes": [],
            "body": {
              "id": 32134,
              "nodeType": "Block",
              "src": "8107:54:104",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 32130,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32120,
                        "src": "8143:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      {
                        "id": 32131,
                        "name": "_sig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32122,
                        "src": "8149:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "id": 32128,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32037,
                        "src": "8124:14:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$32037_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 32129,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8139:3:104",
                      "memberName": "sig",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31702,
                      "src": "8124:18:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$31145_storage_ptr_$_t_string_memory_ptr_$returns$_t_struct$_StdStorage_$31145_storage_ptr_$",
                        "typeString": "function (struct StdStorage storage pointer,string memory) returns (struct StdStorage storage pointer)"
                      }
                    },
                    "id": 32132,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8124:30:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 32127,
                  "id": 32133,
                  "nodeType": "Return",
                  "src": "8117:37:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sig",
            "nameLocation": "8020:3:104",
            "parameters": {
              "id": 32123,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32120,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8043:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32135,
                  "src": "8024:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 32119,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 32118,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8024:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "8024:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "8024:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32122,
                  "mutability": "mutable",
                  "name": "_sig",
                  "nameLocation": "8063:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32135,
                  "src": "8049:18:104",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 32121,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8049:6:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8023:45:104"
            },
            "returnParameters": {
              "id": 32127,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32126,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32135,
                  "src": "8087:18:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 32125,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 32124,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8087:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "8087:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "8087:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8086:20:104"
            },
            "scope": 32598,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 32153,
            "nodeType": "FunctionDefinition",
            "src": "8167:152:104",
            "nodes": [],
            "body": {
              "id": 32152,
              "nodeType": "Block",
              "src": "8261:58:104",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 32148,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32138,
                        "src": "8302:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      {
                        "id": 32149,
                        "name": "who",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32140,
                        "src": "8308:3:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "id": 32146,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32037,
                        "src": "8278:14:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$32037_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 32147,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8293:8:104",
                      "memberName": "with_key",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31733,
                      "src": "8278:23:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$31145_storage_ptr_$_t_address_$returns$_t_struct$_StdStorage_$31145_storage_ptr_$",
                        "typeString": "function (struct StdStorage storage pointer,address) returns (struct StdStorage storage pointer)"
                      }
                    },
                    "id": 32150,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8278:34:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 32145,
                  "id": 32151,
                  "nodeType": "Return",
                  "src": "8271:41:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "with_key",
            "nameLocation": "8176:8:104",
            "parameters": {
              "id": 32141,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32138,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8204:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32153,
                  "src": "8185:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 32137,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 32136,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8185:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "8185:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "8185:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32140,
                  "mutability": "mutable",
                  "name": "who",
                  "nameLocation": "8218:3:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32153,
                  "src": "8210:11:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32139,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8210:7:104",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8184:38:104"
            },
            "returnParameters": {
              "id": 32145,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32144,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32153,
                  "src": "8241:18:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 32143,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 32142,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8241:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "8241:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "8241:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8240:20:104"
            },
            "scope": 32598,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 32171,
            "nodeType": "FunctionDefinition",
            "src": "8325:152:104",
            "nodes": [],
            "body": {
              "id": 32170,
              "nodeType": "Block",
              "src": "8419:58:104",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 32166,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32156,
                        "src": "8460:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      {
                        "id": 32167,
                        "name": "amt",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32158,
                        "src": "8466:3:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 32164,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32037,
                        "src": "8436:14:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$32037_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 32165,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8451:8:104",
                      "memberName": "with_key",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31758,
                      "src": "8436:23:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$31145_storage_ptr_$_t_uint256_$returns$_t_struct$_StdStorage_$31145_storage_ptr_$",
                        "typeString": "function (struct StdStorage storage pointer,uint256) returns (struct StdStorage storage pointer)"
                      }
                    },
                    "id": 32168,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8436:34:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 32163,
                  "id": 32169,
                  "nodeType": "Return",
                  "src": "8429:41:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "with_key",
            "nameLocation": "8334:8:104",
            "parameters": {
              "id": 32159,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32156,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8362:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32171,
                  "src": "8343:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 32155,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 32154,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8343:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "8343:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "8343:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32158,
                  "mutability": "mutable",
                  "name": "amt",
                  "nameLocation": "8376:3:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32171,
                  "src": "8368:11:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32157,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8368:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8342:38:104"
            },
            "returnParameters": {
              "id": 32163,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32162,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32171,
                  "src": "8399:18:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 32161,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 32160,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8399:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "8399:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "8399:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8398:20:104"
            },
            "scope": 32598,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 32189,
            "nodeType": "FunctionDefinition",
            "src": "8483:152:104",
            "nodes": [],
            "body": {
              "id": 32188,
              "nodeType": "Block",
              "src": "8577:58:104",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 32184,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32174,
                        "src": "8618:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      {
                        "id": 32185,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32176,
                        "src": "8624:3:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "id": 32182,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32037,
                        "src": "8594:14:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$32037_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 32183,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8609:8:104",
                      "memberName": "with_key",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31780,
                      "src": "8594:23:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$31145_storage_ptr_$_t_bytes32_$returns$_t_struct$_StdStorage_$31145_storage_ptr_$",
                        "typeString": "function (struct StdStorage storage pointer,bytes32) returns (struct StdStorage storage pointer)"
                      }
                    },
                    "id": 32186,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8594:34:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 32181,
                  "id": 32187,
                  "nodeType": "Return",
                  "src": "8587:41:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "with_key",
            "nameLocation": "8492:8:104",
            "parameters": {
              "id": 32177,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32174,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8520:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32189,
                  "src": "8501:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 32173,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 32172,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8501:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "8501:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "8501:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32176,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "8534:3:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32189,
                  "src": "8526:11:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 32175,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8526:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8500:38:104"
            },
            "returnParameters": {
              "id": 32181,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32180,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32189,
                  "src": "8557:18:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 32179,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 32178,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8557:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "8557:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "8557:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8556:20:104"
            },
            "scope": 32598,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 32207,
            "nodeType": "FunctionDefinition",
            "src": "8641:152:104",
            "nodes": [],
            "body": {
              "id": 32206,
              "nodeType": "Block",
              "src": "8735:58:104",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 32202,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32192,
                        "src": "8773:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      {
                        "id": 32203,
                        "name": "_depth",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32194,
                        "src": "8779:6:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 32200,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32037,
                        "src": "8752:14:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$32037_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 32201,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8767:5:104",
                      "memberName": "depth",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31800,
                      "src": "8752:20:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$31145_storage_ptr_$_t_uint256_$returns$_t_struct$_StdStorage_$31145_storage_ptr_$",
                        "typeString": "function (struct StdStorage storage pointer,uint256) returns (struct StdStorage storage pointer)"
                      }
                    },
                    "id": 32204,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8752:34:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 32199,
                  "id": 32205,
                  "nodeType": "Return",
                  "src": "8745:41:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "depth",
            "nameLocation": "8650:5:104",
            "parameters": {
              "id": 32195,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32192,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8675:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32207,
                  "src": "8656:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 32191,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 32190,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8656:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "8656:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "8656:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32194,
                  "mutability": "mutable",
                  "name": "_depth",
                  "nameLocation": "8689:6:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32207,
                  "src": "8681:14:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32193,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8681:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8655:41:104"
            },
            "returnParameters": {
              "id": 32199,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32198,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32207,
                  "src": "8715:18:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 32197,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 32196,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8715:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "8715:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "8715:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8714:20:104"
            },
            "scope": 32598,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 32230,
            "nodeType": "FunctionDefinition",
            "src": "8799:138:104",
            "nodes": [],
            "body": {
              "id": 32229,
              "nodeType": "Block",
              "src": "8869:68:104",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 32216,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32210,
                        "src": "8893:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
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
                                    "id": 32223,
                                    "name": "who",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 32212,
                                    "src": "8923:3:104",
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
                                  "id": 32222,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "8915:7:104",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint160_$",
                                    "typeString": "type(uint160)"
                                  },
                                  "typeName": {
                                    "id": 32221,
                                    "name": "uint160",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "8915:7:104",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 32224,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8915:12:104",
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
                              "id": 32220,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "8907:7:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 32219,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "8907:7:104",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 32225,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8907:21:104",
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
                          "id": 32218,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8899:7:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 32217,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "8899:7:104",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 32226,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8899:30:104",
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
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 32215,
                      "name": "checked_write",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        32230,
                        32247,
                        32285,
                        32430
                      ],
                      "referencedDeclaration": 32430,
                      "src": "8879:13:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$31145_storage_ptr_$_t_bytes32_$returns$__$",
                        "typeString": "function (struct StdStorage storage pointer,bytes32)"
                      }
                    },
                    "id": 32227,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8879:51:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 32228,
                  "nodeType": "ExpressionStatement",
                  "src": "8879:51:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "checked_write",
            "nameLocation": "8808:13:104",
            "parameters": {
              "id": 32213,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32210,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8841:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32230,
                  "src": "8822:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 32209,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 32208,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8822:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "8822:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "8822:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32212,
                  "mutability": "mutable",
                  "name": "who",
                  "nameLocation": "8855:3:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32230,
                  "src": "8847:11:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32211,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8847:7:104",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8821:38:104"
            },
            "returnParameters": {
              "id": 32214,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8869:0:104"
            },
            "scope": 32598,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 32247,
            "nodeType": "FunctionDefinition",
            "src": "8943:120:104",
            "nodes": [],
            "body": {
              "id": 32246,
              "nodeType": "Block",
              "src": "9013:50:104",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 32239,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32233,
                        "src": "9037:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 32242,
                            "name": "amt",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32235,
                            "src": "9051:3:104",
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
                          "id": 32241,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "9043:7:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 32240,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "9043:7:104",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 32243,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9043:12:104",
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
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 32238,
                      "name": "checked_write",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        32230,
                        32247,
                        32285,
                        32430
                      ],
                      "referencedDeclaration": 32430,
                      "src": "9023:13:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$31145_storage_ptr_$_t_bytes32_$returns$__$",
                        "typeString": "function (struct StdStorage storage pointer,bytes32)"
                      }
                    },
                    "id": 32244,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9023:33:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 32245,
                  "nodeType": "ExpressionStatement",
                  "src": "9023:33:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "checked_write",
            "nameLocation": "8952:13:104",
            "parameters": {
              "id": 32236,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32233,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8985:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32247,
                  "src": "8966:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 32232,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 32231,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8966:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "8966:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "8966:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32235,
                  "mutability": "mutable",
                  "name": "amt",
                  "nameLocation": "8999:3:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32247,
                  "src": "8991:11:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32234,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8991:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8965:38:104"
            },
            "returnParameters": {
              "id": 32237,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9013:0:104"
            },
            "scope": 32598,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 32267,
            "nodeType": "FunctionDefinition",
            "src": "9069:132:104",
            "nodes": [],
            "body": {
              "id": 32266,
              "nodeType": "Block",
              "src": "9142:59:104",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 32256,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32250,
                        "src": "9166:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 32261,
                                "name": "val",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 32252,
                                "src": "9188:3:104",
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
                              "id": 32260,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "9180:7:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 32259,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "9180:7:104",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 32262,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9180:12:104",
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
                          "id": 32258,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "9172:7:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 32257,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "9172:7:104",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 32263,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9172:21:104",
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
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 32255,
                      "name": "checked_write",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        32230,
                        32247,
                        32285,
                        32430
                      ],
                      "referencedDeclaration": 32430,
                      "src": "9152:13:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$31145_storage_ptr_$_t_bytes32_$returns$__$",
                        "typeString": "function (struct StdStorage storage pointer,bytes32)"
                      }
                    },
                    "id": 32264,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9152:42:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 32265,
                  "nodeType": "ExpressionStatement",
                  "src": "9152:42:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "checked_write_int",
            "nameLocation": "9078:17:104",
            "parameters": {
              "id": 32253,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32250,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "9115:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32267,
                  "src": "9096:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 32249,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 32248,
                      "name": "StdStorage",
                      "nameLocations": [
                        "9096:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "9096:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "9096:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32252,
                  "mutability": "mutable",
                  "name": "val",
                  "nameLocation": "9128:3:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32267,
                  "src": "9121:10:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 32251,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9121:6:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9095:37:104"
            },
            "returnParameters": {
              "id": 32254,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9142:0:104"
            },
            "scope": 32598,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 32285,
            "nodeType": "FunctionDefinition",
            "src": "9207:222:104",
            "nodes": [],
            "body": {
              "id": 32284,
              "nodeType": "Block",
              "src": "9276:153:104",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    32276
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 32276,
                      "mutability": "mutable",
                      "name": "t",
                      "nameLocation": "9294:1:104",
                      "nodeType": "VariableDeclaration",
                      "scope": 32284,
                      "src": "9286:9:104",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 32275,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "9286:7:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 32277,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9286:9:104"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "9357:34:104",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "9371:10:104",
                        "value": {
                          "name": "write",
                          "nodeType": "YulIdentifier",
                          "src": "9376:5:104"
                        },
                        "variableNames": [
                          {
                            "name": "t",
                            "nodeType": "YulIdentifier",
                            "src": "9371:1:104"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 32276,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9371:1:104",
                      "valueSize": 1
                    },
                    {
                      "declaration": 32272,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9376:5:104",
                      "valueSize": 1
                    }
                  ],
                  "id": 32278,
                  "nodeType": "InlineAssembly",
                  "src": "9348:43:104"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 32280,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32270,
                        "src": "9414:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      {
                        "id": 32281,
                        "name": "t",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32276,
                        "src": "9420:1:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 32279,
                      "name": "checked_write",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        32230,
                        32247,
                        32285,
                        32430
                      ],
                      "referencedDeclaration": 32430,
                      "src": "9400:13:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$31145_storage_ptr_$_t_bytes32_$returns$__$",
                        "typeString": "function (struct StdStorage storage pointer,bytes32)"
                      }
                    },
                    "id": 32282,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9400:22:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 32283,
                  "nodeType": "ExpressionStatement",
                  "src": "9400:22:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "checked_write",
            "nameLocation": "9216:13:104",
            "parameters": {
              "id": 32273,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32270,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "9249:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32285,
                  "src": "9230:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 32269,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 32268,
                      "name": "StdStorage",
                      "nameLocations": [
                        "9230:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "9230:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "9230:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32272,
                  "mutability": "mutable",
                  "name": "write",
                  "nameLocation": "9260:5:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32285,
                  "src": "9255:10:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 32271,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "9255:4:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9229:37:104"
            },
            "returnParameters": {
              "id": 32274,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9276:0:104"
            },
            "scope": 32598,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 32430,
            "nodeType": "FunctionDefinition",
            "src": "9435:1095:104",
            "nodes": [],
            "body": {
              "id": 32429,
              "nodeType": "Block",
              "src": "9505:1025:104",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    32294
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 32294,
                      "mutability": "mutable",
                      "name": "who",
                      "nameLocation": "9523:3:104",
                      "nodeType": "VariableDeclaration",
                      "scope": 32429,
                      "src": "9515:11:104",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 32293,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "9515:7:104",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 32297,
                  "initialValue": {
                    "expression": {
                      "id": 32295,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32288,
                      "src": "9529:4:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                        "typeString": "struct StdStorage storage pointer"
                      }
                    },
                    "id": 32296,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "9534:7:104",
                    "memberName": "_target",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 31142,
                    "src": "9529:12:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9515:26:104"
                },
                {
                  "assignments": [
                    32299
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 32299,
                      "mutability": "mutable",
                      "name": "fsig",
                      "nameLocation": "9558:4:104",
                      "nodeType": "VariableDeclaration",
                      "scope": 32429,
                      "src": "9551:11:104",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      },
                      "typeName": {
                        "id": 32298,
                        "name": "bytes4",
                        "nodeType": "ElementaryTypeName",
                        "src": "9551:6:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 32302,
                  "initialValue": {
                    "expression": {
                      "id": 32300,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32288,
                      "src": "9565:4:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                        "typeString": "struct StdStorage storage pointer"
                      }
                    },
                    "id": 32301,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "9570:4:104",
                    "memberName": "_sig",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 31138,
                    "src": "9565:9:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9551:23:104"
                },
                {
                  "assignments": [
                    32304
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 32304,
                      "mutability": "mutable",
                      "name": "field_depth",
                      "nameLocation": "9592:11:104",
                      "nodeType": "VariableDeclaration",
                      "scope": 32429,
                      "src": "9584:19:104",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 32303,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9584:7:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 32307,
                  "initialValue": {
                    "expression": {
                      "id": 32305,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32288,
                      "src": "9606:4:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                        "typeString": "struct StdStorage storage pointer"
                      }
                    },
                    "id": 32306,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "9611:6:104",
                    "memberName": "_depth",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 31140,
                    "src": "9606:11:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9584:33:104"
                },
                {
                  "assignments": [
                    32312
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 32312,
                      "mutability": "mutable",
                      "name": "ins",
                      "nameLocation": "9644:3:104",
                      "nodeType": "VariableDeclaration",
                      "scope": 32429,
                      "src": "9627:20:104",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 32310,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "9627:7:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 32311,
                        "nodeType": "ArrayTypeName",
                        "src": "9627:9:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 32315,
                  "initialValue": {
                    "expression": {
                      "id": 32313,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32288,
                      "src": "9650:4:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                        "typeString": "struct StdStorage storage pointer"
                      }
                    },
                    "id": 32314,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "9655:5:104",
                    "memberName": "_keys",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 31136,
                    "src": "9650:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                      "typeString": "bytes32[] storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9627:33:104"
                },
                {
                  "assignments": [
                    32317
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 32317,
                      "mutability": "mutable",
                      "name": "cald",
                      "nameLocation": "9684:4:104",
                      "nodeType": "VariableDeclaration",
                      "scope": 32429,
                      "src": "9671:17:104",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 32316,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "9671:5:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 32325,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 32320,
                        "name": "fsig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32299,
                        "src": "9708:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 32322,
                            "name": "ins",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32312,
                            "src": "9722:3:104",
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
                          "id": 32321,
                          "name": "flatten",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32597,
                          "src": "9714:7:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_array$_t_bytes32_$dyn_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes32[] memory) pure returns (bytes memory)"
                          }
                        },
                        "id": 32323,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9714:12:104",
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
                        "id": 32318,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -1,
                        "src": "9691:3:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 32319,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "9695:12:104",
                      "memberName": "encodePacked",
                      "nodeType": "MemberAccess",
                      "src": "9691:16:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function () pure returns (bytes memory)"
                      }
                    },
                    "id": 32324,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9691:36:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9671:56:104"
                },
                {
                  "condition": {
                    "id": 32340,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "9741:69:104",
                    "subExpression": {
                      "baseExpression": {
                        "baseExpression": {
                          "baseExpression": {
                            "expression": {
                              "id": 32326,
                              "name": "self",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32288,
                              "src": "9742:4:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                                "typeString": "struct StdStorage storage pointer"
                              }
                            },
                            "id": 32327,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "9747:5:104",
                            "memberName": "finds",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 31133,
                            "src": "9742:10:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$_$",
                              "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => bool)))"
                            }
                          },
                          "id": 32329,
                          "indexExpression": {
                            "id": 32328,
                            "name": "who",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32294,
                            "src": "9753:3:104",
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
                          "src": "9742:15:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                            "typeString": "mapping(bytes4 => mapping(bytes32 => bool))"
                          }
                        },
                        "id": 32331,
                        "indexExpression": {
                          "id": 32330,
                          "name": "fsig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32299,
                          "src": "9758:4:104",
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
                        "src": "9742:21:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                          "typeString": "mapping(bytes32 => bool)"
                        }
                      },
                      "id": 32339,
                      "indexExpression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 32335,
                                "name": "ins",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 32312,
                                "src": "9791:3:104",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                  "typeString": "bytes32[] memory"
                                }
                              },
                              {
                                "id": 32336,
                                "name": "field_depth",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 32304,
                                "src": "9796:11:104",
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
                                "id": 32333,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "9774:3:104",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 32334,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "9778:12:104",
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "src": "9774:16:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 32337,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9774:34:104",
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
                          "id": 32332,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -8,
                          "src": "9764:9:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 32338,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9764:45:104",
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
                      "src": "9742:68:104",
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
                  "id": 32346,
                  "nodeType": "IfStatement",
                  "src": "9737:110:104",
                  "trueBody": {
                    "id": 32345,
                    "nodeType": "Block",
                    "src": "9812:35:104",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 32342,
                              "name": "self",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32288,
                              "src": "9831:4:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                                "typeString": "struct StdStorage storage pointer"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                                "typeString": "struct StdStorage storage pointer"
                              }
                            ],
                            "id": 32341,
                            "name": "find",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32081,
                            "src": "9826:4:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$31145_storage_ptr_$returns$_t_uint256_$",
                              "typeString": "function (struct StdStorage storage pointer) returns (uint256)"
                            }
                          },
                          "id": 32343,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9826:10:104",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 32344,
                        "nodeType": "ExpressionStatement",
                        "src": "9826:10:104"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    32348
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 32348,
                      "mutability": "mutable",
                      "name": "slot",
                      "nameLocation": "9864:4:104",
                      "nodeType": "VariableDeclaration",
                      "scope": 32429,
                      "src": "9856:12:104",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 32347,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "9856:7:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 32366,
                  "initialValue": {
                    "arguments": [
                      {
                        "baseExpression": {
                          "baseExpression": {
                            "baseExpression": {
                              "expression": {
                                "id": 32351,
                                "name": "self",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 32288,
                                "src": "9879:4:104",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                                  "typeString": "struct StdStorage storage pointer"
                                }
                              },
                              "id": 32352,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "9884:5:104",
                              "memberName": "slots",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 31125,
                              "src": "9879:10:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$_$",
                                "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => uint256)))"
                              }
                            },
                            "id": 32354,
                            "indexExpression": {
                              "id": 32353,
                              "name": "who",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32294,
                              "src": "9890:3:104",
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
                            "src": "9879:15:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$",
                              "typeString": "mapping(bytes4 => mapping(bytes32 => uint256))"
                            }
                          },
                          "id": 32356,
                          "indexExpression": {
                            "id": 32355,
                            "name": "fsig",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32299,
                            "src": "9895:4:104",
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
                          "src": "9879:21:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                            "typeString": "mapping(bytes32 => uint256)"
                          }
                        },
                        "id": 32364,
                        "indexExpression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 32360,
                                  "name": "ins",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 32312,
                                  "src": "9928:3:104",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                    "typeString": "bytes32[] memory"
                                  }
                                },
                                {
                                  "id": 32361,
                                  "name": "field_depth",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 32304,
                                  "src": "9933:11:104",
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
                                  "id": 32358,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -1,
                                  "src": "9911:3:104",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 32359,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberLocation": "9915:12:104",
                                "memberName": "encodePacked",
                                "nodeType": "MemberAccess",
                                "src": "9911:16:104",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 32362,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9911:34:104",
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
                            "id": 32357,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -8,
                            "src": "9901:9:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 32363,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9901:45:104",
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
                        "src": "9879:68:104",
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
                      "id": 32350,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "9871:7:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes32_$",
                        "typeString": "type(bytes32)"
                      },
                      "typeName": {
                        "id": 32349,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "9871:7:104",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 32365,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9871:77:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9856:92:104"
                },
                {
                  "assignments": [
                    32368
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 32368,
                      "mutability": "mutable",
                      "name": "fdat",
                      "nameLocation": "9967:4:104",
                      "nodeType": "VariableDeclaration",
                      "scope": 32429,
                      "src": "9959:12:104",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 32367,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "9959:7:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 32369,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9959:12:104"
                },
                {
                  "id": 32386,
                  "nodeType": "Block",
                  "src": "9981:128:104",
                  "statements": [
                    {
                      "assignments": [
                        null,
                        32371
                      ],
                      "declarations": [
                        null,
                        {
                          "constant": false,
                          "id": 32371,
                          "mutability": "mutable",
                          "name": "rdat",
                          "nameLocation": "10011:4:104",
                          "nodeType": "VariableDeclaration",
                          "scope": 32386,
                          "src": "9998:17:104",
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes"
                          },
                          "typeName": {
                            "id": 32370,
                            "name": "bytes",
                            "nodeType": "ElementaryTypeName",
                            "src": "9998:5:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_storage_ptr",
                              "typeString": "bytes"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 32376,
                      "initialValue": {
                        "arguments": [
                          {
                            "id": 32374,
                            "name": "cald",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32317,
                            "src": "10034:4:104",
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
                            "id": 32372,
                            "name": "who",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32294,
                            "src": "10019:3:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 32373,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "10023:10:104",
                          "memberName": "staticcall",
                          "nodeType": "MemberAccess",
                          "src": "10019:14:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes memory) view returns (bool,bytes memory)"
                          }
                        },
                        "id": 32375,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10019:20:104",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                          "typeString": "tuple(bool,bytes memory)"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "9995:44:104"
                    },
                    {
                      "expression": {
                        "id": 32384,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 32377,
                          "name": "fdat",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32368,
                          "src": "10053:4:104",
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
                              "id": 32379,
                              "name": "rdat",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32371,
                              "src": "10075:4:104",
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
                              "id": 32382,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "hexValue": "3332",
                                "id": 32380,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10081:2:104",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_32_by_1",
                                  "typeString": "int_const 32"
                                },
                                "value": "32"
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "id": 32381,
                                "name": "field_depth",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 32304,
                                "src": "10086:11:104",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "10081:16:104",
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
                            "id": 32378,
                            "name": "bytesToBytes32",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32556,
                            "src": "10060:14:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$_t_uint256_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory,uint256) pure returns (bytes32)"
                            }
                          },
                          "id": 32383,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10060:38:104",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "src": "10053:45:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "id": 32385,
                      "nodeType": "ExpressionStatement",
                      "src": "10053:45:104"
                    }
                  ]
                },
                {
                  "assignments": [
                    32388
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 32388,
                      "mutability": "mutable",
                      "name": "curr",
                      "nameLocation": "10126:4:104",
                      "nodeType": "VariableDeclaration",
                      "scope": 32429,
                      "src": "10118:12:104",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 32387,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "10118:7:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 32394,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 32391,
                        "name": "who",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32294,
                        "src": "10141:3:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 32392,
                        "name": "slot",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32348,
                        "src": "10146:4:104",
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
                        "id": 32389,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32054,
                        "src": "10133:2:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Vm_$36245",
                          "typeString": "contract Vm"
                        }
                      },
                      "id": 32390,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10136:4:104",
                      "memberName": "load",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 34765,
                      "src": "10133:7:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (address,bytes32) view external returns (bytes32)"
                      }
                    },
                    "id": 32393,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10133:18:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10118:33:104"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 32397,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 32395,
                      "name": "fdat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32368,
                      "src": "10166:4:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 32396,
                      "name": "curr",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32388,
                      "src": "10174:4:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "10166:12:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 32404,
                  "nodeType": "IfStatement",
                  "src": "10162:218:104",
                  "trueBody": {
                    "id": 32403,
                    "nodeType": "Block",
                    "src": "10180:200:104",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "hexValue": "66616c7365",
                              "id": 32399,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10219:5:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "false"
                            },
                            {
                              "hexValue": "73746453746f726167652066696e642853746453746f72616765293a205061636b656420736c6f742e205468697320776f756c642063617573652064616e6765726f7573206f76657277726974696e6720616e642063757272656e746c792069736e277420737570706f727465642e",
                              "id": 32400,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10242:113:104",
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
                            "id": 32398,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "10194:7:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 32401,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10194:175:104",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 32402,
                        "nodeType": "ExpressionStatement",
                        "src": "10194:175:104"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 32408,
                        "name": "who",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32294,
                        "src": "10398:3:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 32409,
                        "name": "slot",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32348,
                        "src": "10403:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 32410,
                        "name": "set",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32290,
                        "src": "10409:3:104",
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
                        "id": 32405,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32054,
                        "src": "10389:2:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Vm_$36245",
                          "typeString": "contract Vm"
                        }
                      },
                      "id": 32407,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10392:5:104",
                      "memberName": "store",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 35819,
                      "src": "10389:8:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_bytes32_$_t_bytes32_$returns$__$",
                        "typeString": "function (address,bytes32,bytes32) external"
                      }
                    },
                    "id": 32411,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10389:24:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 32412,
                  "nodeType": "ExpressionStatement",
                  "src": "10389:24:104"
                },
                {
                  "expression": {
                    "id": 32415,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "10423:19:104",
                    "subExpression": {
                      "expression": {
                        "id": 32413,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32288,
                        "src": "10430:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 32414,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10435:7:104",
                      "memberName": "_target",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31142,
                      "src": "10430:12:104",
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
                  "id": 32416,
                  "nodeType": "ExpressionStatement",
                  "src": "10423:19:104"
                },
                {
                  "expression": {
                    "id": 32419,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "10452:16:104",
                    "subExpression": {
                      "expression": {
                        "id": 32417,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32288,
                        "src": "10459:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 32418,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10464:4:104",
                      "memberName": "_sig",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31138,
                      "src": "10459:9:104",
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
                  "id": 32420,
                  "nodeType": "ExpressionStatement",
                  "src": "10452:16:104"
                },
                {
                  "expression": {
                    "id": 32423,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "10478:17:104",
                    "subExpression": {
                      "expression": {
                        "id": 32421,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32288,
                        "src": "10485:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 32422,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10490:5:104",
                      "memberName": "_keys",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31136,
                      "src": "10485:10:104",
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
                  "id": 32424,
                  "nodeType": "ExpressionStatement",
                  "src": "10478:17:104"
                },
                {
                  "expression": {
                    "id": 32427,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "10505:18:104",
                    "subExpression": {
                      "expression": {
                        "id": 32425,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32288,
                        "src": "10512:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 32426,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10517:6:104",
                      "memberName": "_depth",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31140,
                      "src": "10512:11:104",
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
                  "id": 32428,
                  "nodeType": "ExpressionStatement",
                  "src": "10505:18:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "checked_write",
            "nameLocation": "9444:13:104",
            "parameters": {
              "id": 32291,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32288,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "9477:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32430,
                  "src": "9458:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 32287,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 32286,
                      "name": "StdStorage",
                      "nameLocations": [
                        "9458:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "9458:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "9458:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32290,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "9491:3:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32430,
                  "src": "9483:11:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 32289,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "9483:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9457:38:104"
            },
            "returnParameters": {
              "id": 32292,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9505:0:104"
            },
            "scope": 32598,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 32444,
            "nodeType": "FunctionDefinition",
            "src": "10536:131:104",
            "nodes": [],
            "body": {
              "id": 32443,
              "nodeType": "Block",
              "src": "10610:57:104",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 32440,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32433,
                        "src": "10655:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      ],
                      "expression": {
                        "id": 32438,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32037,
                        "src": "10627:14:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$32037_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 32439,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10642:12:104",
                      "memberName": "read_bytes32",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31851,
                      "src": "10627:27:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$31145_storage_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (struct StdStorage storage pointer) returns (bytes32)"
                      }
                    },
                    "id": 32441,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10627:33:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 32437,
                  "id": 32442,
                  "nodeType": "Return",
                  "src": "10620:40:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read_bytes32",
            "nameLocation": "10545:12:104",
            "parameters": {
              "id": 32434,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32433,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "10577:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32444,
                  "src": "10558:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 32432,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 32431,
                      "name": "StdStorage",
                      "nameLocations": [
                        "10558:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "10558:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "10558:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10557:25:104"
            },
            "returnParameters": {
              "id": 32437,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32436,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32444,
                  "src": "10601:7:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 32435,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "10601:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10600:9:104"
            },
            "scope": 32598,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 32458,
            "nodeType": "FunctionDefinition",
            "src": "10673:122:104",
            "nodes": [],
            "body": {
              "id": 32457,
              "nodeType": "Block",
              "src": "10741:54:104",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 32454,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32447,
                        "src": "10783:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      ],
                      "expression": {
                        "id": 32452,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32037,
                        "src": "10758:14:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$32037_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 32453,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10773:9:104",
                      "memberName": "read_bool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31882,
                      "src": "10758:24:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$31145_storage_ptr_$returns$_t_bool_$",
                        "typeString": "function (struct StdStorage storage pointer) returns (bool)"
                      }
                    },
                    "id": 32455,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10758:30:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 32451,
                  "id": 32456,
                  "nodeType": "Return",
                  "src": "10751:37:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read_bool",
            "nameLocation": "10682:9:104",
            "parameters": {
              "id": 32448,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32447,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "10711:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32458,
                  "src": "10692:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 32446,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 32445,
                      "name": "StdStorage",
                      "nameLocations": [
                        "10692:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "10692:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "10692:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10691:25:104"
            },
            "returnParameters": {
              "id": 32451,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32450,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32458,
                  "src": "10735:4:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 32449,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "10735:4:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10734:6:104"
            },
            "scope": 32598,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 32472,
            "nodeType": "FunctionDefinition",
            "src": "10801:131:104",
            "nodes": [],
            "body": {
              "id": 32471,
              "nodeType": "Block",
              "src": "10875:57:104",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 32468,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32461,
                        "src": "10920:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      ],
                      "expression": {
                        "id": 32466,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32037,
                        "src": "10892:14:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$32037_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 32467,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10907:12:104",
                      "memberName": "read_address",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31901,
                      "src": "10892:27:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$31145_storage_ptr_$returns$_t_address_$",
                        "typeString": "function (struct StdStorage storage pointer) returns (address)"
                      }
                    },
                    "id": 32469,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10892:33:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 32465,
                  "id": 32470,
                  "nodeType": "Return",
                  "src": "10885:40:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read_address",
            "nameLocation": "10810:12:104",
            "parameters": {
              "id": 32462,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32461,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "10842:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32472,
                  "src": "10823:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 32460,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 32459,
                      "name": "StdStorage",
                      "nameLocations": [
                        "10823:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "10823:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "10823:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10822:25:104"
            },
            "returnParameters": {
              "id": 32465,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32464,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32472,
                  "src": "10866:7:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32463,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10866:7:104",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10865:9:104"
            },
            "scope": 32598,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 32486,
            "nodeType": "FunctionDefinition",
            "src": "10938:125:104",
            "nodes": [],
            "body": {
              "id": 32485,
              "nodeType": "Block",
              "src": "11009:54:104",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 32482,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32475,
                        "src": "11051:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      ],
                      "expression": {
                        "id": 32480,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32037,
                        "src": "11026:14:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$32037_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 32481,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11041:9:104",
                      "memberName": "read_uint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31920,
                      "src": "11026:24:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$31145_storage_ptr_$returns$_t_uint256_$",
                        "typeString": "function (struct StdStorage storage pointer) returns (uint256)"
                      }
                    },
                    "id": 32483,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11026:30:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 32479,
                  "id": 32484,
                  "nodeType": "Return",
                  "src": "11019:37:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read_uint",
            "nameLocation": "10947:9:104",
            "parameters": {
              "id": 32476,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32475,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "10976:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32486,
                  "src": "10957:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 32474,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 32473,
                      "name": "StdStorage",
                      "nameLocations": [
                        "10957:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "10957:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "10957:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10956:25:104"
            },
            "returnParameters": {
              "id": 32479,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32478,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32486,
                  "src": "11000:7:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32477,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11000:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10999:9:104"
            },
            "scope": 32598,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 32500,
            "nodeType": "FunctionDefinition",
            "src": "11069:122:104",
            "nodes": [],
            "body": {
              "id": 32499,
              "nodeType": "Block",
              "src": "11138:53:104",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 32496,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32489,
                        "src": "11179:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      ],
                      "expression": {
                        "id": 32494,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32037,
                        "src": "11155:14:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$32037_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 32495,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11170:8:104",
                      "memberName": "read_int",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31939,
                      "src": "11155:23:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$31145_storage_ptr_$returns$_t_int256_$",
                        "typeString": "function (struct StdStorage storage pointer) returns (int256)"
                      }
                    },
                    "id": 32497,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11155:29:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 32493,
                  "id": 32498,
                  "nodeType": "Return",
                  "src": "11148:36:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read_int",
            "nameLocation": "11078:8:104",
            "parameters": {
              "id": 32490,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32489,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "11106:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32500,
                  "src": "11087:23:104",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 32488,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 32487,
                      "name": "StdStorage",
                      "nameLocations": [
                        "11087:10:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 31145,
                      "src": "11087:10:104"
                    },
                    "referencedDeclaration": 31145,
                    "src": "11087:10:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$31145_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11086:25:104"
            },
            "returnParameters": {
              "id": 32493,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32492,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32500,
                  "src": "11130:6:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 32491,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11130:6:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11129:8:104"
            },
            "scope": 32598,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 32556,
            "nodeType": "FunctionDefinition",
            "src": "11248:304:104",
            "nodes": [],
            "body": {
              "id": 32555,
              "nodeType": "Block",
              "src": "11335:217:104",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    32510
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 32510,
                      "mutability": "mutable",
                      "name": "out",
                      "nameLocation": "11353:3:104",
                      "nodeType": "VariableDeclaration",
                      "scope": 32555,
                      "src": "11345:11:104",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 32509,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "11345:7:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 32511,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11345:11:104"
                },
                {
                  "assignments": [
                    32513
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 32513,
                      "mutability": "mutable",
                      "name": "max",
                      "nameLocation": "11375:3:104",
                      "nodeType": "VariableDeclaration",
                      "scope": 32555,
                      "src": "11367:11:104",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 32512,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11367:7:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 32522,
                  "initialValue": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 32517,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 32514,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32502,
                          "src": "11381:1:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 32515,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11383:6:104",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "11381:8:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "hexValue": "3332",
                        "id": 32516,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "11392:2:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_32_by_1",
                          "typeString": "int_const 32"
                        },
                        "value": "32"
                      },
                      "src": "11381:13:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "expression": {
                        "id": 32519,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32502,
                        "src": "11402:1:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 32520,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11404:6:104",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "11402:8:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 32521,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "11381:29:104",
                    "trueExpression": {
                      "hexValue": "3332",
                      "id": 32518,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "11397:2:104",
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
                  "src": "11367:43:104"
                },
                {
                  "body": {
                    "id": 32551,
                    "nodeType": "Block",
                    "src": "11454:72:104",
                    "statements": [
                      {
                        "expression": {
                          "id": 32549,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 32533,
                            "name": "out",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32510,
                            "src": "11468:3:104",
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
                            "id": 32548,
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
                                  "id": 32542,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "baseExpression": {
                                      "id": 32536,
                                      "name": "b",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 32502,
                                      "src": "11483:1:104",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes memory"
                                      }
                                    },
                                    "id": 32540,
                                    "indexExpression": {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "id": 32539,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 32537,
                                        "name": "offset",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 32504,
                                        "src": "11485:6:104",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "+",
                                      "rightExpression": {
                                        "id": 32538,
                                        "name": "i",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 32524,
                                        "src": "11494:1:104",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "11485:10:104",
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
                                    "src": "11483:13:104",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes1",
                                      "typeString": "bytes1"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "&",
                                  "rightExpression": {
                                    "hexValue": "30784646",
                                    "id": 32541,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "11499:4:104",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_255_by_1",
                                      "typeString": "int_const 255"
                                    },
                                    "value": "0xFF"
                                  },
                                  "src": "11483:20:104",
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
                                "id": 32535,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "11475:7:104",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes32_$",
                                  "typeString": "type(bytes32)"
                                },
                                "typeName": {
                                  "id": 32534,
                                  "name": "bytes32",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "11475:7:104",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 32543,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "11475:29:104",
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
                                  "id": 32546,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 32544,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 32524,
                                    "src": "11509:1:104",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "hexValue": "38",
                                    "id": 32545,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "11513:1:104",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_8_by_1",
                                      "typeString": "int_const 8"
                                    },
                                    "value": "8"
                                  },
                                  "src": "11509:5:104",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "id": 32547,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "11508:7:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "11475:40:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "11468:47:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 32550,
                        "nodeType": "ExpressionStatement",
                        "src": "11468:47:104"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 32529,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 32527,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32524,
                      "src": "11440:1:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 32528,
                      "name": "max",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32513,
                      "src": "11444:3:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11440:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 32552,
                  "initializationExpression": {
                    "assignments": [
                      32524
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 32524,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "11433:1:104",
                        "nodeType": "VariableDeclaration",
                        "scope": 32552,
                        "src": "11425:9:104",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 32523,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "11425:7:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 32526,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 32525,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "11437:1:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "11425:13:104"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 32531,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "11449:3:104",
                      "subExpression": {
                        "id": 32530,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32524,
                        "src": "11449:1:104",
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
                    "id": 32532,
                    "nodeType": "ExpressionStatement",
                    "src": "11449:3:104"
                  },
                  "nodeType": "ForStatement",
                  "src": "11420:106:104"
                },
                {
                  "expression": {
                    "id": 32553,
                    "name": "out",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 32510,
                    "src": "11542:3:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 32508,
                  "id": 32554,
                  "nodeType": "Return",
                  "src": "11535:10:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "bytesToBytes32",
            "nameLocation": "11257:14:104",
            "parameters": {
              "id": 32505,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32502,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "11285:1:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32556,
                  "src": "11272:14:104",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 32501,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "11272:5:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32504,
                  "mutability": "mutable",
                  "name": "offset",
                  "nameLocation": "11296:6:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32556,
                  "src": "11288:14:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32503,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11288:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11271:32:104"
            },
            "returnParameters": {
              "id": 32508,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32507,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32556,
                  "src": "11326:7:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 32506,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "11326:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11325:9:104"
            },
            "scope": 32598,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 32597,
            "nodeType": "FunctionDefinition",
            "src": "11609:393:104",
            "nodes": [],
            "body": {
              "id": 32596,
              "nodeType": "Block",
              "src": "11682:320:104",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    32565
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 32565,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "11705:6:104",
                      "nodeType": "VariableDeclaration",
                      "scope": 32596,
                      "src": "11692:19:104",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 32564,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "11692:5:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 32573,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 32571,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 32568,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32559,
                            "src": "11724:1:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                              "typeString": "bytes32[] memory"
                            }
                          },
                          "id": 32569,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "11726:6:104",
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "src": "11724:8:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "hexValue": "3332",
                          "id": 32570,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11735:2:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_32_by_1",
                            "typeString": "int_const 32"
                          },
                          "value": "32"
                        },
                        "src": "11724:13:104",
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
                      "id": 32567,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "11714:9:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (bytes memory)"
                      },
                      "typeName": {
                        "id": 32566,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "11718:5:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      }
                    },
                    "id": 32572,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11714:24:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11692:46:104"
                },
                {
                  "body": {
                    "id": 32592,
                    "nodeType": "Block",
                    "src": "11787:185:104",
                    "statements": [
                      {
                        "assignments": [
                          32586
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 32586,
                            "mutability": "mutable",
                            "name": "k",
                            "nameLocation": "11809:1:104",
                            "nodeType": "VariableDeclaration",
                            "scope": 32592,
                            "src": "11801:9:104",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 32585,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "11801:7:104",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 32590,
                        "initialValue": {
                          "baseExpression": {
                            "id": 32587,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32559,
                            "src": "11813:1:104",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                              "typeString": "bytes32[] memory"
                            }
                          },
                          "id": 32589,
                          "indexExpression": {
                            "id": 32588,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32575,
                            "src": "11815:1:104",
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
                          "src": "11813:4:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "11801:16:104"
                      },
                      {
                        "AST": {
                          "nodeType": "YulBlock",
                          "src": "11887:75:104",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "result",
                                        "nodeType": "YulIdentifier",
                                        "src": "11916:6:104"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "11928:2:104",
                                            "type": "",
                                            "value": "32"
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "11936:2:104",
                                                "type": "",
                                                "value": "32"
                                              },
                                              {
                                                "name": "i",
                                                "nodeType": "YulIdentifier",
                                                "src": "11940:1:104"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "mul",
                                              "nodeType": "YulIdentifier",
                                              "src": "11932:3:104"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "11932:10:104"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "11924:3:104"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "11924:19:104"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "11912:3:104"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "11912:32:104"
                                  },
                                  {
                                    "name": "k",
                                    "nodeType": "YulIdentifier",
                                    "src": "11946:1:104"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "11905:6:104"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "11905:43:104"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "11905:43:104"
                            }
                          ]
                        },
                        "documentation": "@solidity memory-safe-assembly",
                        "evmVersion": "paris",
                        "externalReferences": [
                          {
                            "declaration": 32575,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "11940:1:104",
                            "valueSize": 1
                          },
                          {
                            "declaration": 32586,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "11946:1:104",
                            "valueSize": 1
                          },
                          {
                            "declaration": 32565,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "11916:6:104",
                            "valueSize": 1
                          }
                        ],
                        "id": 32591,
                        "nodeType": "InlineAssembly",
                        "src": "11878:84:104"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 32581,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 32578,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32575,
                      "src": "11768:1:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 32579,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32559,
                        "src": "11772:1:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                          "typeString": "bytes32[] memory"
                        }
                      },
                      "id": 32580,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11774:6:104",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "11772:8:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11768:12:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 32593,
                  "initializationExpression": {
                    "assignments": [
                      32575
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 32575,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "11761:1:104",
                        "nodeType": "VariableDeclaration",
                        "scope": 32593,
                        "src": "11753:9:104",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 32574,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "11753:7:104",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 32577,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 32576,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "11765:1:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "11753:13:104"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 32583,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "11782:3:104",
                      "subExpression": {
                        "id": 32582,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32575,
                        "src": "11782:1:104",
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
                    "id": 32584,
                    "nodeType": "ExpressionStatement",
                    "src": "11782:3:104"
                  },
                  "nodeType": "ForStatement",
                  "src": "11748:224:104"
                },
                {
                  "expression": {
                    "id": 32594,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 32565,
                    "src": "11989:6:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 32563,
                  "id": 32595,
                  "nodeType": "Return",
                  "src": "11982:13:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "flatten",
            "nameLocation": "11618:7:104",
            "parameters": {
              "id": 32560,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32559,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "11643:1:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 32597,
                  "src": "11626:18:104",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32557,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "11626:7:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 32558,
                    "nodeType": "ArrayTypeName",
                    "src": "11626:9:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11625:20:104"
            },
            "returnParameters": {
              "id": 32563,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32562,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 32597,
                  "src": "11668:12:104",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 32561,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "11668:5:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11667:14:104"
            },
            "scope": 32598,
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
          32598
        ],
        "name": "stdStorage",
        "nameLocation": "7347:10:104",
        "scope": 32599,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 104
} as const;
