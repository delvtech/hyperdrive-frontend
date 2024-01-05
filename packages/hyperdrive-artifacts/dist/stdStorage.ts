export const StdStorage = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220eabf62087138291110c337273f7d396abaf74c9241052680338b9fd9423ee5ae64736f6c63430008130033",
    "sourceMap": "7339:4665:83:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;7339:4665:83;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220eabf62087138291110c337273f7d396abaf74c9241052680338b9fd9423ee5ae64736f6c63430008130033",
    "sourceMap": "7339:4665:83:-:0;;;;;;;;",
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
    "id": 29231,
    "exportedSymbols": {
      "StdStorage": [
        27777
      ],
      "Vm": [
        32877
      ],
      "stdStorage": [
        29230
      ],
      "stdStorageSafe": [
        28669
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:11973:83",
    "nodes": [
      {
        "id": 27747,
        "nodeType": "PragmaDirective",
        "src": "32:31:83",
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
        "id": 27749,
        "nodeType": "ImportDirective",
        "src": "65:28:83",
        "nodes": [],
        "absolutePath": "lib/forge-std/src/Vm.sol",
        "file": "./Vm.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 29231,
        "sourceUnit": 32878,
        "symbolAliases": [
          {
            "foreign": {
              "id": 27748,
              "name": "Vm",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 32877,
              "src": "73:2:83",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 27777,
        "nodeType": "StructDefinition",
        "src": "95:271:83",
        "nodes": [],
        "canonicalName": "StdStorage",
        "members": [
          {
            "constant": false,
            "id": 27757,
            "mutability": "mutable",
            "name": "slots",
            "nameLocation": "186:5:83",
            "nodeType": "VariableDeclaration",
            "scope": 27777,
            "src": "119:72:83",
            "stateVariable": false,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$_$",
              "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => uint256)))"
            },
            "typeName": {
              "id": 27756,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 27750,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "127:7:83",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "119:66:83",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$_$",
                "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => uint256)))"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 27755,
                "keyName": "",
                "keyNameLocation": "-1:-1:-1",
                "keyType": {
                  "id": 27751,
                  "name": "bytes4",
                  "nodeType": "ElementaryTypeName",
                  "src": "146:6:83",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  }
                },
                "nodeType": "Mapping",
                "src": "138:46:83",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$",
                  "typeString": "mapping(bytes4 => mapping(bytes32 => uint256))"
                },
                "valueName": "",
                "valueNameLocation": "-1:-1:-1",
                "valueType": {
                  "id": 27754,
                  "keyName": "",
                  "keyNameLocation": "-1:-1:-1",
                  "keyType": {
                    "id": 27752,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "164:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "156:27:83",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                    "typeString": "mapping(bytes32 => uint256)"
                  },
                  "valueName": "",
                  "valueNameLocation": "-1:-1:-1",
                  "valueType": {
                    "id": 27753,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "175:7:83",
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
            "id": 27765,
            "mutability": "mutable",
            "name": "finds",
            "nameLocation": "261:5:83",
            "nodeType": "VariableDeclaration",
            "scope": 27777,
            "src": "197:69:83",
            "stateVariable": false,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$_$",
              "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => bool)))"
            },
            "typeName": {
              "id": 27764,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 27758,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "205:7:83",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "197:63:83",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$_$",
                "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => bool)))"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 27763,
                "keyName": "",
                "keyNameLocation": "-1:-1:-1",
                "keyType": {
                  "id": 27759,
                  "name": "bytes4",
                  "nodeType": "ElementaryTypeName",
                  "src": "224:6:83",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  }
                },
                "nodeType": "Mapping",
                "src": "216:43:83",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                  "typeString": "mapping(bytes4 => mapping(bytes32 => bool))"
                },
                "valueName": "",
                "valueNameLocation": "-1:-1:-1",
                "valueType": {
                  "id": 27762,
                  "keyName": "",
                  "keyNameLocation": "-1:-1:-1",
                  "keyType": {
                    "id": 27760,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "242:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "234:24:83",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                    "typeString": "mapping(bytes32 => bool)"
                  },
                  "valueName": "",
                  "valueNameLocation": "-1:-1:-1",
                  "valueType": {
                    "id": 27761,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "253:4:83",
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
            "id": 27768,
            "mutability": "mutable",
            "name": "_keys",
            "nameLocation": "282:5:83",
            "nodeType": "VariableDeclaration",
            "scope": 27777,
            "src": "272:15:83",
            "stateVariable": false,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
              "typeString": "bytes32[]"
            },
            "typeName": {
              "baseType": {
                "id": 27766,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "272:7:83",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "id": 27767,
              "nodeType": "ArrayTypeName",
              "src": "272:9:83",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                "typeString": "bytes32[]"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 27770,
            "mutability": "mutable",
            "name": "_sig",
            "nameLocation": "300:4:83",
            "nodeType": "VariableDeclaration",
            "scope": 27777,
            "src": "293:11:83",
            "stateVariable": false,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes4",
              "typeString": "bytes4"
            },
            "typeName": {
              "id": 27769,
              "name": "bytes4",
              "nodeType": "ElementaryTypeName",
              "src": "293:6:83",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 27772,
            "mutability": "mutable",
            "name": "_depth",
            "nameLocation": "318:6:83",
            "nodeType": "VariableDeclaration",
            "scope": 27777,
            "src": "310:14:83",
            "stateVariable": false,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 27771,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "310:7:83",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 27774,
            "mutability": "mutable",
            "name": "_target",
            "nameLocation": "338:7:83",
            "nodeType": "VariableDeclaration",
            "scope": 27777,
            "src": "330:15:83",
            "stateVariable": false,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 27773,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "330:7:83",
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
            "id": 27776,
            "mutability": "mutable",
            "name": "_set",
            "nameLocation": "359:4:83",
            "nodeType": "VariableDeclaration",
            "scope": 27777,
            "src": "351:12:83",
            "stateVariable": false,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 27775,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "351:7:83",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "internal"
          }
        ],
        "name": "StdStorage",
        "nameLocation": "102:10:83",
        "scope": 29231,
        "visibility": "public"
      },
      {
        "id": 28669,
        "nodeType": "ContractDefinition",
        "src": "368:6969:83",
        "nodes": [
          {
            "id": 27787,
            "nodeType": "EventDefinition",
            "src": "397:74:83",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "9c9555b1e3102e3cf48f427d79cb678f5d9bd1ed0ad574389461e255f95170ed",
            "name": "SlotFound",
            "nameLocation": "403:9:83",
            "parameters": {
              "id": 27786,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27779,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "who",
                  "nameLocation": "421:3:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 27787,
                  "src": "413:11:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27778,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "413:7:83",
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
                  "id": 27781,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "fsig",
                  "nameLocation": "433:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 27787,
                  "src": "426:11:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 27780,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "426:6:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27783,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "keysHash",
                  "nameLocation": "447:8:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 27787,
                  "src": "439:16:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27782,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "439:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27785,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "465:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 27787,
                  "src": "457:12:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27784,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "457:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "412:58:83"
            }
          },
          {
            "id": 27793,
            "nodeType": "EventDefinition",
            "src": "476:54:83",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "080fc4a96620c4462e705b23f346413fe3796bb63c6f8d8591baec0e231577a5",
            "name": "WARNING_UninitedSlot",
            "nameLocation": "482:20:83",
            "parameters": {
              "id": 27792,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27789,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "who",
                  "nameLocation": "511:3:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 27793,
                  "src": "503:11:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27788,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "503:7:83",
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
                  "id": 27791,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "524:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 27793,
                  "src": "516:12:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27790,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "516:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "502:27:83"
            }
          },
          {
            "id": 27810,
            "nodeType": "VariableDeclaration",
            "src": "536:84:83",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "vm",
            "nameLocation": "556:2:83",
            "scope": 28669,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Vm_$32877",
              "typeString": "contract Vm"
            },
            "typeName": {
              "id": 27795,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 27794,
                "name": "Vm",
                "nameLocations": [
                  "536:2:83"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 32877,
                "src": "536:2:83"
              },
              "referencedDeclaration": 32877,
              "src": "536:2:83",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Vm_$32877",
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
                                  "id": 27804,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "string",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "598:17:83",
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
                                "id": 27803,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "588:9:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                              },
                              "id": 27805,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "588:28:83",
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
                            "id": 27802,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "580:7:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 27801,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "580:7:83",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 27806,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "580:37:83",
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
                        "id": 27800,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "572:7:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint160_$",
                          "typeString": "type(uint160)"
                        },
                        "typeName": {
                          "id": 27799,
                          "name": "uint160",
                          "nodeType": "ElementaryTypeName",
                          "src": "572:7:83",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 27807,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "572:46:83",
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
                    "id": 27798,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "ElementaryTypeNameExpression",
                    "src": "564:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_address_$",
                      "typeString": "type(address)"
                    },
                    "typeName": {
                      "id": 27797,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "564:7:83",
                      "typeDescriptions": {}
                    }
                  },
                  "id": 27808,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "typeConversion",
                  "lValueRequested": false,
                  "nameLocations": [],
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "564:55:83",
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
                "id": 27796,
                "name": "Vm",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 32877,
                "src": "561:2:83",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_contract$_Vm_$32877_$",
                  "typeString": "type(contract Vm)"
                }
              },
              "id": 27809,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "561:59:83",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Vm_$32877",
                "typeString": "contract Vm"
              }
            },
            "visibility": "private"
          },
          {
            "id": 27828,
            "nodeType": "FunctionDefinition",
            "src": "627:123:83",
            "nodes": [],
            "body": {
              "id": 27827,
              "nodeType": "Block",
              "src": "694:56:83",
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
                                "id": 27822,
                                "name": "sigStr",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27812,
                                "src": "734:6:83",
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
                              "id": 27821,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "728:5:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                "typeString": "type(bytes storage pointer)"
                              },
                              "typeName": {
                                "id": 27820,
                                "name": "bytes",
                                "nodeType": "ElementaryTypeName",
                                "src": "728:5:83",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 27823,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "728:13:83",
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
                          "id": 27819,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -8,
                          "src": "718:9:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 27824,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "718:24:83",
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
                      "id": 27818,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "711:6:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes4_$",
                        "typeString": "type(bytes4)"
                      },
                      "typeName": {
                        "id": 27817,
                        "name": "bytes4",
                        "nodeType": "ElementaryTypeName",
                        "src": "711:6:83",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 27825,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "711:32:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "functionReturnParameters": 27816,
                  "id": 27826,
                  "nodeType": "Return",
                  "src": "704:39:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sigs",
            "nameLocation": "636:4:83",
            "parameters": {
              "id": 27813,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27812,
                  "mutability": "mutable",
                  "name": "sigStr",
                  "nameLocation": "655:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 27828,
                  "src": "641:20:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27811,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "641:6:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "640:22:83"
            },
            "returnParameters": {
              "id": 27816,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27815,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27828,
                  "src": "686:6:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 27814,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "686:6:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "685:8:83"
            },
            "scope": 28669,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 28272,
            "nodeType": "FunctionDefinition",
            "src": "1264:3197:83",
            "nodes": [],
            "body": {
              "id": 28271,
              "nodeType": "Block",
              "src": "1330:3131:83",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    27838
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27838,
                      "mutability": "mutable",
                      "name": "who",
                      "nameLocation": "1348:3:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 28271,
                      "src": "1340:11:83",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 27837,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1340:7:83",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 27841,
                  "initialValue": {
                    "expression": {
                      "id": 27839,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27832,
                      "src": "1354:4:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                        "typeString": "struct StdStorage storage pointer"
                      }
                    },
                    "id": 27840,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "1359:7:83",
                    "memberName": "_target",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 27774,
                    "src": "1354:12:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1340:26:83"
                },
                {
                  "assignments": [
                    27843
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27843,
                      "mutability": "mutable",
                      "name": "fsig",
                      "nameLocation": "1383:4:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 28271,
                      "src": "1376:11:83",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      },
                      "typeName": {
                        "id": 27842,
                        "name": "bytes4",
                        "nodeType": "ElementaryTypeName",
                        "src": "1376:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 27846,
                  "initialValue": {
                    "expression": {
                      "id": 27844,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27832,
                      "src": "1390:4:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                        "typeString": "struct StdStorage storage pointer"
                      }
                    },
                    "id": 27845,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "1395:4:83",
                    "memberName": "_sig",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 27770,
                    "src": "1390:9:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1376:23:83"
                },
                {
                  "assignments": [
                    27848
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27848,
                      "mutability": "mutable",
                      "name": "field_depth",
                      "nameLocation": "1417:11:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 28271,
                      "src": "1409:19:83",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 27847,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1409:7:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 27851,
                  "initialValue": {
                    "expression": {
                      "id": 27849,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27832,
                      "src": "1431:4:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                        "typeString": "struct StdStorage storage pointer"
                      }
                    },
                    "id": 27850,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "1436:6:83",
                    "memberName": "_depth",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 27772,
                    "src": "1431:11:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1409:33:83"
                },
                {
                  "assignments": [
                    27856
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27856,
                      "mutability": "mutable",
                      "name": "ins",
                      "nameLocation": "1469:3:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 28271,
                      "src": "1452:20:83",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 27854,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "1452:7:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 27855,
                        "nodeType": "ArrayTypeName",
                        "src": "1452:9:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 27859,
                  "initialValue": {
                    "expression": {
                      "id": 27857,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27832,
                      "src": "1475:4:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                        "typeString": "struct StdStorage storage pointer"
                      }
                    },
                    "id": 27858,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "1480:5:83",
                    "memberName": "_keys",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 27768,
                    "src": "1475:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                      "typeString": "bytes32[] storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1452:33:83"
                },
                {
                  "condition": {
                    "baseExpression": {
                      "baseExpression": {
                        "baseExpression": {
                          "expression": {
                            "id": 27860,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27832,
                            "src": "1536:4:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                              "typeString": "struct StdStorage storage pointer"
                            }
                          },
                          "id": 27861,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1541:5:83",
                          "memberName": "finds",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 27765,
                          "src": "1536:10:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$_$",
                            "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => bool)))"
                          }
                        },
                        "id": 27863,
                        "indexExpression": {
                          "id": 27862,
                          "name": "who",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27838,
                          "src": "1547:3:83",
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
                        "src": "1536:15:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                          "typeString": "mapping(bytes4 => mapping(bytes32 => bool))"
                        }
                      },
                      "id": 27865,
                      "indexExpression": {
                        "id": 27864,
                        "name": "fsig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27843,
                        "src": "1552:4:83",
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
                      "src": "1536:21:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                        "typeString": "mapping(bytes32 => bool)"
                      }
                    },
                    "id": 27873,
                    "indexExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 27869,
                              "name": "ins",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27856,
                              "src": "1585:3:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                "typeString": "bytes32[] memory"
                              }
                            },
                            {
                              "id": 27870,
                              "name": "field_depth",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27848,
                              "src": "1590:11:83",
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
                              "id": 27867,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "1568:3:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 27868,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "1572:12:83",
                            "memberName": "encodePacked",
                            "nodeType": "MemberAccess",
                            "src": "1568:16:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 27871,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1568:34:83",
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
                        "id": 27866,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "1558:9:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 27872,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1558:45:83",
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
                    "src": "1536:68:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 27890,
                  "nodeType": "IfStatement",
                  "src": "1532:174:83",
                  "trueBody": {
                    "id": 27889,
                    "nodeType": "Block",
                    "src": "1606:100:83",
                    "statements": [
                      {
                        "expression": {
                          "baseExpression": {
                            "baseExpression": {
                              "baseExpression": {
                                "expression": {
                                  "id": 27874,
                                  "name": "self",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 27832,
                                  "src": "1627:4:83",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                                    "typeString": "struct StdStorage storage pointer"
                                  }
                                },
                                "id": 27875,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "1632:5:83",
                                "memberName": "slots",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 27757,
                                "src": "1627:10:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$_$",
                                  "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => uint256)))"
                                }
                              },
                              "id": 27877,
                              "indexExpression": {
                                "id": 27876,
                                "name": "who",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27838,
                                "src": "1638:3:83",
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
                              "src": "1627:15:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$",
                                "typeString": "mapping(bytes4 => mapping(bytes32 => uint256))"
                              }
                            },
                            "id": 27879,
                            "indexExpression": {
                              "id": 27878,
                              "name": "fsig",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27843,
                              "src": "1643:4:83",
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
                            "src": "1627:21:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                              "typeString": "mapping(bytes32 => uint256)"
                            }
                          },
                          "id": 27887,
                          "indexExpression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 27883,
                                    "name": "ins",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 27856,
                                    "src": "1676:3:83",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                      "typeString": "bytes32[] memory"
                                    }
                                  },
                                  {
                                    "id": 27884,
                                    "name": "field_depth",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 27848,
                                    "src": "1681:11:83",
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
                                    "id": 27881,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -1,
                                    "src": "1659:3:83",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 27882,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberLocation": "1663:12:83",
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "src": "1659:16:83",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 27885,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1659:34:83",
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
                              "id": 27880,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -8,
                              "src": "1649:9:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                "typeString": "function (bytes memory) pure returns (bytes32)"
                              }
                            },
                            "id": 27886,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1649:45:83",
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
                          "src": "1627:68:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 27836,
                        "id": 27888,
                        "nodeType": "Return",
                        "src": "1620:75:83"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    27892
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27892,
                      "mutability": "mutable",
                      "name": "cald",
                      "nameLocation": "1728:4:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 28271,
                      "src": "1715:17:83",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 27891,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "1715:5:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 27900,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 27895,
                        "name": "fsig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27843,
                        "src": "1752:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 27897,
                            "name": "ins",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27856,
                            "src": "1766:3:83",
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
                          "id": 27896,
                          "name": "flatten",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28668,
                          "src": "1758:7:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_array$_t_bytes32_$dyn_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes32[] memory) pure returns (bytes memory)"
                          }
                        },
                        "id": 27898,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1758:12:83",
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
                        "id": 27893,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -1,
                        "src": "1735:3:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 27894,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "1739:12:83",
                      "memberName": "encodePacked",
                      "nodeType": "MemberAccess",
                      "src": "1735:16:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function () pure returns (bytes memory)"
                      }
                    },
                    "id": 27899,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1735:36:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1715:56:83"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 27901,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27810,
                        "src": "1781:2:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Vm_$32877",
                          "typeString": "contract Vm"
                        }
                      },
                      "id": 27903,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1784:6:83",
                      "memberName": "record",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31715,
                      "src": "1781:9:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$__$returns$__$",
                        "typeString": "function () external"
                      }
                    },
                    "id": 27904,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1781:11:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27905,
                  "nodeType": "ExpressionStatement",
                  "src": "1781:11:83"
                },
                {
                  "assignments": [
                    27907
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27907,
                      "mutability": "mutable",
                      "name": "fdat",
                      "nameLocation": "1810:4:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 28271,
                      "src": "1802:12:83",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 27906,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "1802:7:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 27908,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1802:12:83"
                },
                {
                  "id": 27925,
                  "nodeType": "Block",
                  "src": "1824:128:83",
                  "statements": [
                    {
                      "assignments": [
                        null,
                        27910
                      ],
                      "declarations": [
                        null,
                        {
                          "constant": false,
                          "id": 27910,
                          "mutability": "mutable",
                          "name": "rdat",
                          "nameLocation": "1854:4:83",
                          "nodeType": "VariableDeclaration",
                          "scope": 27925,
                          "src": "1841:17:83",
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes"
                          },
                          "typeName": {
                            "id": 27909,
                            "name": "bytes",
                            "nodeType": "ElementaryTypeName",
                            "src": "1841:5:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_storage_ptr",
                              "typeString": "bytes"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 27915,
                      "initialValue": {
                        "arguments": [
                          {
                            "id": 27913,
                            "name": "cald",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27892,
                            "src": "1877:4:83",
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
                            "id": 27911,
                            "name": "who",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27838,
                            "src": "1862:3:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 27912,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1866:10:83",
                          "memberName": "staticcall",
                          "nodeType": "MemberAccess",
                          "src": "1862:14:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes memory) view returns (bool,bytes memory)"
                          }
                        },
                        "id": 27914,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1862:20:83",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                          "typeString": "tuple(bool,bytes memory)"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "1838:44:83"
                    },
                    {
                      "expression": {
                        "id": 27923,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 27916,
                          "name": "fdat",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27907,
                          "src": "1896:4:83",
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
                              "id": 27918,
                              "name": "rdat",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27910,
                              "src": "1918:4:83",
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
                              "id": 27921,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "hexValue": "3332",
                                "id": 27919,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1924:2:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_32_by_1",
                                  "typeString": "int_const 32"
                                },
                                "value": "32"
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "id": 27920,
                                "name": "field_depth",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27848,
                                "src": "1929:11:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "1924:16:83",
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
                            "id": 27917,
                            "name": "bytesToBytes32",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28627,
                            "src": "1903:14:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$_t_uint256_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory,uint256) pure returns (bytes32)"
                            }
                          },
                          "id": 27922,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1903:38:83",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "src": "1896:45:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "id": 27924,
                      "nodeType": "ExpressionStatement",
                      "src": "1896:45:83"
                    }
                  ]
                },
                {
                  "assignments": [
                    27930,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27930,
                      "mutability": "mutable",
                      "name": "reads",
                      "nameLocation": "1980:5:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 28271,
                      "src": "1963:22:83",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 27928,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "1963:7:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 27929,
                        "nodeType": "ArrayTypeName",
                        "src": "1963:9:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 27938,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 27935,
                            "name": "who",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27838,
                            "src": "2010:3:83",
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
                          "id": 27934,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2002:7:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 27933,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2002:7:83",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 27936,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2002:12:83",
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
                        "id": 27931,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27810,
                        "src": "1990:2:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Vm_$32877",
                          "typeString": "contract Vm"
                        }
                      },
                      "id": 27932,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1993:8:83",
                      "memberName": "accesses",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31726,
                      "src": "1990:11:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                        "typeString": "function (address) external returns (bytes32[] memory,bytes32[] memory)"
                      }
                    },
                    "id": 27937,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1990:25:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_array$_t_bytes32_$dyn_memory_ptr_$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                      "typeString": "tuple(bytes32[] memory,bytes32[] memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1962:53:83"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 27942,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 27939,
                        "name": "reads",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27930,
                        "src": "2029:5:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                          "typeString": "bytes32[] memory"
                        }
                      },
                      "id": 27940,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2035:6:83",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "2029:12:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 27941,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2045:1:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "2029:17:83",
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
                      "id": 28044,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 28041,
                          "name": "reads",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27930,
                          "src": "2786:5:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                            "typeString": "bytes32[] memory"
                          }
                        },
                        "id": 28042,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2792:6:83",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "2786:12:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "hexValue": "31",
                        "id": 28043,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2801:1:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "2786:16:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "id": 28219,
                      "nodeType": "Block",
                      "src": "3986:99:83",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "hexValue": "73746453746f726167652066696e642853746453746f72616765293a204e6f2073746f726167652075736520646574656374656420666f72207461726765742e",
                                "id": 28216,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4007:66:83",
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
                              "id": 28215,
                              "name": "revert",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [
                                -19,
                                -19
                              ],
                              "referencedDeclaration": -19,
                              "src": "4000:6:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                                "typeString": "function (string memory) pure"
                              }
                            },
                            "id": 28217,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4000:74:83",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 28218,
                          "nodeType": "ExpressionStatement",
                          "src": "4000:74:83"
                        }
                      ]
                    },
                    "id": 28220,
                    "nodeType": "IfStatement",
                    "src": "2782:1303:83",
                    "trueBody": {
                      "id": 28214,
                      "nodeType": "Block",
                      "src": "2804:1176:83",
                      "statements": [
                        {
                          "body": {
                            "id": 28212,
                            "nodeType": "Block",
                            "src": "2861:1109:83",
                            "statements": [
                              {
                                "assignments": [
                                  28057
                                ],
                                "declarations": [
                                  {
                                    "constant": false,
                                    "id": 28057,
                                    "mutability": "mutable",
                                    "name": "prev",
                                    "nameLocation": "2887:4:83",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 28212,
                                    "src": "2879:12:83",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    },
                                    "typeName": {
                                      "id": 28056,
                                      "name": "bytes32",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "2879:7:83",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    "visibility": "internal"
                                  }
                                ],
                                "id": 28065,
                                "initialValue": {
                                  "arguments": [
                                    {
                                      "id": 28060,
                                      "name": "who",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 27838,
                                      "src": "2902:3:83",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "baseExpression": {
                                        "id": 28061,
                                        "name": "reads",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 27930,
                                        "src": "2907:5:83",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                          "typeString": "bytes32[] memory"
                                        }
                                      },
                                      "id": 28063,
                                      "indexExpression": {
                                        "id": 28062,
                                        "name": "i",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 28046,
                                        "src": "2913:1:83",
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
                                      "src": "2907:8:83",
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
                                      "id": 28058,
                                      "name": "vm",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 27810,
                                      "src": "2894:2:83",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_Vm_$32877",
                                        "typeString": "contract Vm"
                                      }
                                    },
                                    "id": 28059,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "2897:4:83",
                                    "memberName": "load",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 31397,
                                    "src": "2894:7:83",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_external_view$_t_address_$_t_bytes32_$returns$_t_bytes32_$",
                                      "typeString": "function (address,bytes32) view external returns (bytes32)"
                                    }
                                  },
                                  "id": 28064,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2894:22:83",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                },
                                "nodeType": "VariableDeclarationStatement",
                                "src": "2879:37:83"
                              },
                              {
                                "condition": {
                                  "commonType": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  },
                                  "id": 28071,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 28066,
                                    "name": "prev",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 28057,
                                    "src": "2938:4:83",
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
                                        "id": 28069,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "2954:1:83",
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
                                      "id": 28068,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "2946:7:83",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_bytes32_$",
                                        "typeString": "type(bytes32)"
                                      },
                                      "typeName": {
                                        "id": 28067,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2946:7:83",
                                        "typeDescriptions": {}
                                      }
                                    },
                                    "id": 28070,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2946:10:83",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  },
                                  "src": "2938:18:83",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "id": 28083,
                                "nodeType": "IfStatement",
                                "src": "2934:114:83",
                                "trueBody": {
                                  "id": 28082,
                                  "nodeType": "Block",
                                  "src": "2958:90:83",
                                  "statements": [
                                    {
                                      "eventCall": {
                                        "arguments": [
                                          {
                                            "id": 28073,
                                            "name": "who",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27838,
                                            "src": "3006:3:83",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            }
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "baseExpression": {
                                                  "id": 28076,
                                                  "name": "reads",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 27930,
                                                  "src": "3019:5:83",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                    "typeString": "bytes32[] memory"
                                                  }
                                                },
                                                "id": 28078,
                                                "indexExpression": {
                                                  "id": 28077,
                                                  "name": "i",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 28046,
                                                  "src": "3025:1:83",
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
                                                "src": "3019:8:83",
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
                                              "id": 28075,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "nodeType": "ElementaryTypeNameExpression",
                                              "src": "3011:7:83",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_uint256_$",
                                                "typeString": "type(uint256)"
                                              },
                                              "typeName": {
                                                "id": 28074,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3011:7:83",
                                                "typeDescriptions": {}
                                              }
                                            },
                                            "id": 28079,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3011:17:83",
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
                                          "id": 28072,
                                          "name": "WARNING_UninitedSlot",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 27793,
                                          "src": "2985:20:83",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                            "typeString": "function (address,uint256)"
                                          }
                                        },
                                        "id": 28080,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2985:44:83",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_tuple$__$",
                                          "typeString": "tuple()"
                                        }
                                      },
                                      "id": 28081,
                                      "nodeType": "EmitStatement",
                                      "src": "2980:49:83"
                                    }
                                  ]
                                }
                              },
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "id": 28087,
                                      "name": "who",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 27838,
                                      "src": "3099:3:83",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "baseExpression": {
                                        "id": 28088,
                                        "name": "reads",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 27930,
                                        "src": "3104:5:83",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                          "typeString": "bytes32[] memory"
                                        }
                                      },
                                      "id": 28090,
                                      "indexExpression": {
                                        "id": 28089,
                                        "name": "i",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 28046,
                                        "src": "3110:1:83",
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
                                      "src": "3104:8:83",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "hexValue": "1337",
                                          "id": 28093,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "kind": "hexString",
                                          "lValueRequested": false,
                                          "nodeType": "Literal",
                                          "src": "3122:9:83",
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
                                        "id": 28092,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "3114:7:83",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_bytes32_$",
                                          "typeString": "type(bytes32)"
                                        },
                                        "typeName": {
                                          "id": 28091,
                                          "name": "bytes32",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "3114:7:83",
                                          "typeDescriptions": {}
                                        }
                                      },
                                      "id": 28094,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "3114:18:83",
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
                                      "id": 28084,
                                      "name": "vm",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 27810,
                                      "src": "3090:2:83",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_Vm_$32877",
                                        "typeString": "contract Vm"
                                      }
                                    },
                                    "id": 28086,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "3093:5:83",
                                    "memberName": "store",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 32451,
                                    "src": "3090:8:83",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_bytes32_$_t_bytes32_$returns$__$",
                                      "typeString": "function (address,bytes32,bytes32) external"
                                    }
                                  },
                                  "id": 28095,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3090:43:83",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 28096,
                                "nodeType": "ExpressionStatement",
                                "src": "3090:43:83"
                              },
                              {
                                "assignments": [
                                  28098
                                ],
                                "declarations": [
                                  {
                                    "constant": false,
                                    "id": 28098,
                                    "mutability": "mutable",
                                    "name": "success",
                                    "nameLocation": "3156:7:83",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 28212,
                                    "src": "3151:12:83",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    "typeName": {
                                      "id": 28097,
                                      "name": "bool",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "3151:4:83",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    },
                                    "visibility": "internal"
                                  }
                                ],
                                "id": 28099,
                                "nodeType": "VariableDeclarationStatement",
                                "src": "3151:12:83"
                              },
                              {
                                "assignments": [
                                  28101
                                ],
                                "declarations": [
                                  {
                                    "constant": false,
                                    "id": 28101,
                                    "mutability": "mutable",
                                    "name": "rdat",
                                    "nameLocation": "3194:4:83",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 28212,
                                    "src": "3181:17:83",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes"
                                    },
                                    "typeName": {
                                      "id": 28100,
                                      "name": "bytes",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "3181:5:83",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_storage_ptr",
                                        "typeString": "bytes"
                                      }
                                    },
                                    "visibility": "internal"
                                  }
                                ],
                                "id": 28102,
                                "nodeType": "VariableDeclarationStatement",
                                "src": "3181:17:83"
                              },
                              {
                                "id": 28121,
                                "nodeType": "Block",
                                "src": "3216:146:83",
                                "statements": [
                                  {
                                    "expression": {
                                      "id": 28110,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftHandSide": {
                                        "components": [
                                          {
                                            "id": 28103,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 28098,
                                            "src": "3239:7:83",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_bool",
                                              "typeString": "bool"
                                            }
                                          },
                                          {
                                            "id": 28104,
                                            "name": "rdat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 28101,
                                            "src": "3248:4:83",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_bytes_memory_ptr",
                                              "typeString": "bytes memory"
                                            }
                                          }
                                        ],
                                        "id": 28105,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": true,
                                        "nodeType": "TupleExpression",
                                        "src": "3238:15:83",
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
                                            "id": 28108,
                                            "name": "cald",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27892,
                                            "src": "3271:4:83",
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
                                            "id": 28106,
                                            "name": "who",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27838,
                                            "src": "3256:3:83",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            }
                                          },
                                          "id": 28107,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "3260:10:83",
                                          "memberName": "staticcall",
                                          "nodeType": "MemberAccess",
                                          "src": "3256:14:83",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "function (bytes memory) view returns (bool,bytes memory)"
                                          }
                                        },
                                        "id": 28109,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3256:20:83",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                          "typeString": "tuple(bool,bytes memory)"
                                        }
                                      },
                                      "src": "3238:38:83",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_tuple$__$",
                                        "typeString": "tuple()"
                                      }
                                    },
                                    "id": 28111,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3238:38:83"
                                  },
                                  {
                                    "expression": {
                                      "id": 28119,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftHandSide": {
                                        "id": 28112,
                                        "name": "fdat",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 27907,
                                        "src": "3298:4:83",
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
                                            "id": 28114,
                                            "name": "rdat",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 28101,
                                            "src": "3320:4:83",
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
                                            "id": 28117,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                              "hexValue": "3332",
                                              "id": 28115,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "kind": "number",
                                              "lValueRequested": false,
                                              "nodeType": "Literal",
                                              "src": "3326:2:83",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_rational_32_by_1",
                                                "typeString": "int_const 32"
                                              },
                                              "value": "32"
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "*",
                                            "rightExpression": {
                                              "id": 28116,
                                              "name": "field_depth",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 27848,
                                              "src": "3331:11:83",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              }
                                            },
                                            "src": "3326:16:83",
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
                                          "id": 28113,
                                          "name": "bytesToBytes32",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 28627,
                                          "src": "3305:14:83",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$_t_uint256_$returns$_t_bytes32_$",
                                            "typeString": "function (bytes memory,uint256) pure returns (bytes32)"
                                          }
                                        },
                                        "id": 28118,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3305:38:83",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      },
                                      "src": "3298:45:83",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    "id": 28120,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3298:45:83"
                                  }
                                ]
                              },
                              {
                                "condition": {
                                  "commonType": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  "id": 28129,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 28122,
                                    "name": "success",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 28098,
                                    "src": "3384:7:83",
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
                                    "id": 28128,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "id": 28123,
                                      "name": "fdat",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 27907,
                                      "src": "3395:4:83",
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
                                          "id": 28126,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "kind": "hexString",
                                          "lValueRequested": false,
                                          "nodeType": "Literal",
                                          "src": "3411:9:83",
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
                                        "id": 28125,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "3403:7:83",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_bytes32_$",
                                          "typeString": "type(bytes32)"
                                        },
                                        "typeName": {
                                          "id": 28124,
                                          "name": "bytes32",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "3403:7:83",
                                          "typeDescriptions": {}
                                        }
                                      },
                                      "id": 28127,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "3403:18:83",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    "src": "3395:26:83",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  },
                                  "src": "3384:37:83",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "id": 28201,
                                "nodeType": "IfStatement",
                                "src": "3380:529:83",
                                "trueBody": {
                                  "id": 28200,
                                  "nodeType": "Block",
                                  "src": "3423:486:83",
                                  "statements": [
                                    {
                                      "eventCall": {
                                        "arguments": [
                                          {
                                            "id": 28131,
                                            "name": "who",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27838,
                                            "src": "3529:3:83",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            }
                                          },
                                          {
                                            "id": 28132,
                                            "name": "fsig",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27843,
                                            "src": "3534:4:83",
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
                                                    "id": 28136,
                                                    "name": "ins",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 27856,
                                                    "src": "3567:3:83",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                      "typeString": "bytes32[] memory"
                                                    }
                                                  },
                                                  {
                                                    "id": 28137,
                                                    "name": "field_depth",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 27848,
                                                    "src": "3572:11:83",
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
                                                    "id": 28134,
                                                    "name": "abi",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -1,
                                                    "src": "3550:3:83",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_magic_abi",
                                                      "typeString": "abi"
                                                    }
                                                  },
                                                  "id": 28135,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "lValueRequested": false,
                                                  "memberLocation": "3554:12:83",
                                                  "memberName": "encodePacked",
                                                  "nodeType": "MemberAccess",
                                                  "src": "3550:16:83",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                    "typeString": "function () pure returns (bytes memory)"
                                                  }
                                                },
                                                "id": 28138,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3550:34:83",
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
                                              "id": 28133,
                                              "name": "keccak256",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": -8,
                                              "src": "3540:9:83",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                              }
                                            },
                                            "id": 28139,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3540:45:83",
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
                                                  "id": 28142,
                                                  "name": "reads",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 27930,
                                                  "src": "3595:5:83",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                    "typeString": "bytes32[] memory"
                                                  }
                                                },
                                                "id": 28144,
                                                "indexExpression": {
                                                  "id": 28143,
                                                  "name": "i",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 28046,
                                                  "src": "3601:1:83",
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
                                                "src": "3595:8:83",
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
                                              "id": 28141,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "nodeType": "ElementaryTypeNameExpression",
                                              "src": "3587:7:83",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_uint256_$",
                                                "typeString": "type(uint256)"
                                              },
                                              "typeName": {
                                                "id": 28140,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3587:7:83",
                                                "typeDescriptions": {}
                                              }
                                            },
                                            "id": 28145,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3587:17:83",
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
                                          "id": 28130,
                                          "name": "SlotFound",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 27787,
                                          "src": "3519:9:83",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_bytes4_$_t_bytes32_$_t_uint256_$returns$__$",
                                            "typeString": "function (address,bytes4,bytes32,uint256)"
                                          }
                                        },
                                        "id": 28146,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3519:86:83",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_tuple$__$",
                                          "typeString": "tuple()"
                                        }
                                      },
                                      "id": 28147,
                                      "nodeType": "EmitStatement",
                                      "src": "3514:91:83"
                                    },
                                    {
                                      "expression": {
                                        "id": 28169,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                          "baseExpression": {
                                            "baseExpression": {
                                              "baseExpression": {
                                                "expression": {
                                                  "id": 28148,
                                                  "name": "self",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 27832,
                                                  "src": "3627:4:83",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                                                    "typeString": "struct StdStorage storage pointer"
                                                  }
                                                },
                                                "id": 28159,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "3632:5:83",
                                                "memberName": "slots",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 27757,
                                                "src": "3627:10:83",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$_$",
                                                  "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => uint256)))"
                                                }
                                              },
                                              "id": 28160,
                                              "indexExpression": {
                                                "id": 28150,
                                                "name": "who",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 27838,
                                                "src": "3638:3:83",
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
                                              "src": "3627:15:83",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$",
                                                "typeString": "mapping(bytes4 => mapping(bytes32 => uint256))"
                                              }
                                            },
                                            "id": 28161,
                                            "indexExpression": {
                                              "id": 28151,
                                              "name": "fsig",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 27843,
                                              "src": "3643:4:83",
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
                                            "src": "3627:21:83",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                              "typeString": "mapping(bytes32 => uint256)"
                                            }
                                          },
                                          "id": 28162,
                                          "indexExpression": {
                                            "arguments": [
                                              {
                                                "arguments": [
                                                  {
                                                    "id": 28155,
                                                    "name": "ins",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 27856,
                                                    "src": "3676:3:83",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                      "typeString": "bytes32[] memory"
                                                    }
                                                  },
                                                  {
                                                    "id": 28156,
                                                    "name": "field_depth",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 27848,
                                                    "src": "3681:11:83",
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
                                                    "id": 28153,
                                                    "name": "abi",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -1,
                                                    "src": "3659:3:83",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_magic_abi",
                                                      "typeString": "abi"
                                                    }
                                                  },
                                                  "id": 28154,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "lValueRequested": false,
                                                  "memberLocation": "3663:12:83",
                                                  "memberName": "encodePacked",
                                                  "nodeType": "MemberAccess",
                                                  "src": "3659:16:83",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                    "typeString": "function () pure returns (bytes memory)"
                                                  }
                                                },
                                                "id": 28157,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3659:34:83",
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
                                              "id": 28152,
                                              "name": "keccak256",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": -8,
                                              "src": "3649:9:83",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                              }
                                            },
                                            "id": 28158,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3649:45:83",
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
                                          "src": "3627:68:83",
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
                                                "id": 28165,
                                                "name": "reads",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 27930,
                                                "src": "3706:5:83",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                  "typeString": "bytes32[] memory"
                                                }
                                              },
                                              "id": 28167,
                                              "indexExpression": {
                                                "id": 28166,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 28046,
                                                "src": "3712:1:83",
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
                                              "src": "3706:8:83",
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
                                            "id": 28164,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "3698:7:83",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_type$_t_uint256_$",
                                              "typeString": "type(uint256)"
                                            },
                                            "typeName": {
                                              "id": 28163,
                                              "name": "uint256",
                                              "nodeType": "ElementaryTypeName",
                                              "src": "3698:7:83",
                                              "typeDescriptions": {}
                                            }
                                          },
                                          "id": 28168,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "typeConversion",
                                          "lValueRequested": false,
                                          "nameLocations": [],
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "3698:17:83",
                                          "tryCall": false,
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "src": "3627:88:83",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "id": 28170,
                                      "nodeType": "ExpressionStatement",
                                      "src": "3627:88:83"
                                    },
                                    {
                                      "expression": {
                                        "id": 28187,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                          "baseExpression": {
                                            "baseExpression": {
                                              "baseExpression": {
                                                "expression": {
                                                  "id": 28171,
                                                  "name": "self",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 27832,
                                                  "src": "3737:4:83",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                                                    "typeString": "struct StdStorage storage pointer"
                                                  }
                                                },
                                                "id": 28182,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "3742:5:83",
                                                "memberName": "finds",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 27765,
                                                "src": "3737:10:83",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$_$",
                                                  "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => bool)))"
                                                }
                                              },
                                              "id": 28183,
                                              "indexExpression": {
                                                "id": 28173,
                                                "name": "who",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 27838,
                                                "src": "3748:3:83",
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
                                              "src": "3737:15:83",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                                                "typeString": "mapping(bytes4 => mapping(bytes32 => bool))"
                                              }
                                            },
                                            "id": 28184,
                                            "indexExpression": {
                                              "id": 28174,
                                              "name": "fsig",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 27843,
                                              "src": "3753:4:83",
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
                                            "src": "3737:21:83",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                                              "typeString": "mapping(bytes32 => bool)"
                                            }
                                          },
                                          "id": 28185,
                                          "indexExpression": {
                                            "arguments": [
                                              {
                                                "arguments": [
                                                  {
                                                    "id": 28178,
                                                    "name": "ins",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 27856,
                                                    "src": "3786:3:83",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                      "typeString": "bytes32[] memory"
                                                    }
                                                  },
                                                  {
                                                    "id": 28179,
                                                    "name": "field_depth",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 27848,
                                                    "src": "3791:11:83",
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
                                                    "id": 28176,
                                                    "name": "abi",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -1,
                                                    "src": "3769:3:83",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_magic_abi",
                                                      "typeString": "abi"
                                                    }
                                                  },
                                                  "id": 28177,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "lValueRequested": false,
                                                  "memberLocation": "3773:12:83",
                                                  "memberName": "encodePacked",
                                                  "nodeType": "MemberAccess",
                                                  "src": "3769:16:83",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                    "typeString": "function () pure returns (bytes memory)"
                                                  }
                                                },
                                                "id": 28180,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3769:34:83",
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
                                              "id": 28175,
                                              "name": "keccak256",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": -8,
                                              "src": "3759:9:83",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                              }
                                            },
                                            "id": 28181,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3759:45:83",
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
                                          "src": "3737:68:83",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                          }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                          "hexValue": "74727565",
                                          "id": 28186,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "kind": "bool",
                                          "lValueRequested": false,
                                          "nodeType": "Literal",
                                          "src": "3808:4:83",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                          },
                                          "value": "true"
                                        },
                                        "src": "3737:75:83",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                        }
                                      },
                                      "id": 28188,
                                      "nodeType": "ExpressionStatement",
                                      "src": "3737:75:83"
                                    },
                                    {
                                      "expression": {
                                        "arguments": [
                                          {
                                            "id": 28192,
                                            "name": "who",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27838,
                                            "src": "3843:3:83",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            }
                                          },
                                          {
                                            "baseExpression": {
                                              "id": 28193,
                                              "name": "reads",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 27930,
                                              "src": "3848:5:83",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                "typeString": "bytes32[] memory"
                                              }
                                            },
                                            "id": 28195,
                                            "indexExpression": {
                                              "id": 28194,
                                              "name": "i",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 28046,
                                              "src": "3854:1:83",
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
                                            "src": "3848:8:83",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_bytes32",
                                              "typeString": "bytes32"
                                            }
                                          },
                                          {
                                            "id": 28196,
                                            "name": "prev",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 28057,
                                            "src": "3858:4:83",
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
                                            "id": 28189,
                                            "name": "vm",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27810,
                                            "src": "3834:2:83",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_contract$_Vm_$32877",
                                              "typeString": "contract Vm"
                                            }
                                          },
                                          "id": 28191,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "3837:5:83",
                                          "memberName": "store",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": 32451,
                                          "src": "3834:8:83",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_bytes32_$_t_bytes32_$returns$__$",
                                            "typeString": "function (address,bytes32,bytes32) external"
                                          }
                                        },
                                        "id": 28197,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3834:29:83",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_tuple$__$",
                                          "typeString": "tuple()"
                                        }
                                      },
                                      "id": 28198,
                                      "nodeType": "ExpressionStatement",
                                      "src": "3834:29:83"
                                    },
                                    {
                                      "id": 28199,
                                      "nodeType": "Break",
                                      "src": "3885:5:83"
                                    }
                                  ]
                                }
                              },
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "id": 28205,
                                      "name": "who",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 27838,
                                      "src": "3935:3:83",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "baseExpression": {
                                        "id": 28206,
                                        "name": "reads",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 27930,
                                        "src": "3940:5:83",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                          "typeString": "bytes32[] memory"
                                        }
                                      },
                                      "id": 28208,
                                      "indexExpression": {
                                        "id": 28207,
                                        "name": "i",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 28046,
                                        "src": "3946:1:83",
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
                                      "src": "3940:8:83",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    {
                                      "id": 28209,
                                      "name": "prev",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 28057,
                                      "src": "3950:4:83",
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
                                      "id": 28202,
                                      "name": "vm",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 27810,
                                      "src": "3926:2:83",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_Vm_$32877",
                                        "typeString": "contract Vm"
                                      }
                                    },
                                    "id": 28204,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "3929:5:83",
                                    "memberName": "store",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 32451,
                                    "src": "3926:8:83",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_bytes32_$_t_bytes32_$returns$__$",
                                      "typeString": "function (address,bytes32,bytes32) external"
                                    }
                                  },
                                  "id": 28210,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3926:29:83",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 28211,
                                "nodeType": "ExpressionStatement",
                                "src": "3926:29:83"
                              }
                            ]
                          },
                          "condition": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 28052,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 28049,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28046,
                              "src": "2838:1:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "<",
                            "rightExpression": {
                              "expression": {
                                "id": 28050,
                                "name": "reads",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27930,
                                "src": "2842:5:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                  "typeString": "bytes32[] memory"
                                }
                              },
                              "id": 28051,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2848:6:83",
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "src": "2842:12:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2838:16:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "id": 28213,
                          "initializationExpression": {
                            "assignments": [
                              28046
                            ],
                            "declarations": [
                              {
                                "constant": false,
                                "id": 28046,
                                "mutability": "mutable",
                                "name": "i",
                                "nameLocation": "2831:1:83",
                                "nodeType": "VariableDeclaration",
                                "scope": 28213,
                                "src": "2823:9:83",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "typeName": {
                                  "id": 28045,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2823:7:83",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "visibility": "internal"
                              }
                            ],
                            "id": 28048,
                            "initialValue": {
                              "hexValue": "30",
                              "id": 28047,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2835:1:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "nodeType": "VariableDeclarationStatement",
                            "src": "2823:13:83"
                          },
                          "loopExpression": {
                            "expression": {
                              "id": 28054,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "++",
                              "prefix": false,
                              "src": "2856:3:83",
                              "subExpression": {
                                "id": 28053,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28046,
                                "src": "2856:1:83",
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
                            "id": 28055,
                            "nodeType": "ExpressionStatement",
                            "src": "2856:3:83"
                          },
                          "nodeType": "ForStatement",
                          "src": "2818:1152:83"
                        }
                      ]
                    }
                  },
                  "id": 28221,
                  "nodeType": "IfStatement",
                  "src": "2025:2060:83",
                  "trueBody": {
                    "id": 28040,
                    "nodeType": "Block",
                    "src": "2048:728:83",
                    "statements": [
                      {
                        "assignments": [
                          27944
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 27944,
                            "mutability": "mutable",
                            "name": "curr",
                            "nameLocation": "2070:4:83",
                            "nodeType": "VariableDeclaration",
                            "scope": 28040,
                            "src": "2062:12:83",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 27943,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "2062:7:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 27952,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 27947,
                              "name": "who",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27838,
                              "src": "2085:3:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "baseExpression": {
                                "id": 27948,
                                "name": "reads",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27930,
                                "src": "2090:5:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                  "typeString": "bytes32[] memory"
                                }
                              },
                              "id": 27950,
                              "indexExpression": {
                                "hexValue": "30",
                                "id": 27949,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2096:1:83",
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
                              "src": "2090:8:83",
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
                              "id": 27945,
                              "name": "vm",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27810,
                              "src": "2077:2:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Vm_$32877",
                                "typeString": "contract Vm"
                              }
                            },
                            "id": 27946,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2080:4:83",
                            "memberName": "load",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 31397,
                            "src": "2077:7:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$_t_bytes32_$returns$_t_bytes32_$",
                              "typeString": "function (address,bytes32) view external returns (bytes32)"
                            }
                          },
                          "id": 27951,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2077:22:83",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2062:37:83"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "id": 27958,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 27953,
                            "name": "curr",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27944,
                            "src": "2117:4:83",
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
                                "id": 27956,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2133:1:83",
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
                              "id": 27955,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2125:7:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes32_$",
                                "typeString": "type(bytes32)"
                              },
                              "typeName": {
                                "id": 27954,
                                "name": "bytes32",
                                "nodeType": "ElementaryTypeName",
                                "src": "2125:7:83",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 27957,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2125:10:83",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "2117:18:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 27970,
                        "nodeType": "IfStatement",
                        "src": "2113:106:83",
                        "trueBody": {
                          "id": 27969,
                          "nodeType": "Block",
                          "src": "2137:82:83",
                          "statements": [
                            {
                              "eventCall": {
                                "arguments": [
                                  {
                                    "id": 27960,
                                    "name": "who",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 27838,
                                    "src": "2181:3:83",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "baseExpression": {
                                          "id": 27963,
                                          "name": "reads",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 27930,
                                          "src": "2194:5:83",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                            "typeString": "bytes32[] memory"
                                          }
                                        },
                                        "id": 27965,
                                        "indexExpression": {
                                          "hexValue": "30",
                                          "id": 27964,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "kind": "number",
                                          "lValueRequested": false,
                                          "nodeType": "Literal",
                                          "src": "2200:1:83",
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
                                        "src": "2194:8:83",
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
                                      "id": 27962,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "2186:7:83",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_uint256_$",
                                        "typeString": "type(uint256)"
                                      },
                                      "typeName": {
                                        "id": 27961,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2186:7:83",
                                        "typeDescriptions": {}
                                      }
                                    },
                                    "id": 27966,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2186:17:83",
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
                                  "id": 27959,
                                  "name": "WARNING_UninitedSlot",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 27793,
                                  "src": "2160:20:83",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                    "typeString": "function (address,uint256)"
                                  }
                                },
                                "id": 27967,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2160:44:83",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 27968,
                              "nodeType": "EmitStatement",
                              "src": "2155:49:83"
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
                          "id": 27973,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 27971,
                            "name": "fdat",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27907,
                            "src": "2236:4:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "id": 27972,
                            "name": "curr",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27944,
                            "src": "2244:4:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "2236:12:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 27980,
                        "nodeType": "IfStatement",
                        "src": "2232:238:83",
                        "trueBody": {
                          "id": 27979,
                          "nodeType": "Block",
                          "src": "2250:220:83",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "hexValue": "66616c7365",
                                    "id": 27975,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "bool",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2297:5:83",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    "value": "false"
                                  },
                                  {
                                    "hexValue": "73746453746f726167652066696e642853746453746f72616765293a205061636b656420736c6f742e205468697320776f756c642063617573652064616e6765726f7573206f76657277726974696e6720616e642063757272656e746c792069736e277420737570706f727465642e",
                                    "id": 27976,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2324:113:83",
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
                                  "id": 27974,
                                  "name": "require",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [
                                    -18,
                                    -18
                                  ],
                                  "referencedDeclaration": -18,
                                  "src": "2268:7:83",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                    "typeString": "function (bool,string memory) pure"
                                  }
                                },
                                "id": 27977,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2268:187:83",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 27978,
                              "nodeType": "ExpressionStatement",
                              "src": "2268:187:83"
                            }
                          ]
                        }
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "id": 27982,
                              "name": "who",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27838,
                              "src": "2498:3:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 27983,
                              "name": "fsig",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27843,
                              "src": "2503:4:83",
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
                                      "id": 27987,
                                      "name": "ins",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 27856,
                                      "src": "2536:3:83",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                        "typeString": "bytes32[] memory"
                                      }
                                    },
                                    {
                                      "id": 27988,
                                      "name": "field_depth",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 27848,
                                      "src": "2541:11:83",
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
                                      "id": 27985,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": -1,
                                      "src": "2519:3:83",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 27986,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberLocation": "2523:12:83",
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "src": "2519:16:83",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 27989,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2519:34:83",
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
                                "id": 27984,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "2509:9:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                              },
                              "id": 27990,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2509:45:83",
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
                                    "id": 27993,
                                    "name": "reads",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 27930,
                                    "src": "2564:5:83",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                      "typeString": "bytes32[] memory"
                                    }
                                  },
                                  "id": 27995,
                                  "indexExpression": {
                                    "hexValue": "30",
                                    "id": 27994,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2570:1:83",
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
                                  "src": "2564:8:83",
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
                                "id": 27992,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2556:7:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": {
                                  "id": 27991,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2556:7:83",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 27996,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2556:17:83",
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
                            "id": 27981,
                            "name": "SlotFound",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27787,
                            "src": "2488:9:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_bytes4_$_t_bytes32_$_t_uint256_$returns$__$",
                              "typeString": "function (address,bytes4,bytes32,uint256)"
                            }
                          },
                          "id": 27997,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2488:86:83",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 27998,
                        "nodeType": "EmitStatement",
                        "src": "2483:91:83"
                      },
                      {
                        "expression": {
                          "id": 28020,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "baseExpression": {
                                "baseExpression": {
                                  "expression": {
                                    "id": 27999,
                                    "name": "self",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 27832,
                                    "src": "2588:4:83",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                                      "typeString": "struct StdStorage storage pointer"
                                    }
                                  },
                                  "id": 28010,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "2593:5:83",
                                  "memberName": "slots",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 27757,
                                  "src": "2588:10:83",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$_$",
                                    "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => uint256)))"
                                  }
                                },
                                "id": 28011,
                                "indexExpression": {
                                  "id": 28001,
                                  "name": "who",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 27838,
                                  "src": "2599:3:83",
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
                                "src": "2588:15:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$",
                                  "typeString": "mapping(bytes4 => mapping(bytes32 => uint256))"
                                }
                              },
                              "id": 28012,
                              "indexExpression": {
                                "id": 28002,
                                "name": "fsig",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27843,
                                "src": "2604:4:83",
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
                              "src": "2588:21:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                "typeString": "mapping(bytes32 => uint256)"
                              }
                            },
                            "id": 28013,
                            "indexExpression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "id": 28006,
                                      "name": "ins",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 27856,
                                      "src": "2637:3:83",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                        "typeString": "bytes32[] memory"
                                      }
                                    },
                                    {
                                      "id": 28007,
                                      "name": "field_depth",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 27848,
                                      "src": "2642:11:83",
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
                                      "id": 28004,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": -1,
                                      "src": "2620:3:83",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 28005,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberLocation": "2624:12:83",
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "src": "2620:16:83",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 28008,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2620:34:83",
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
                                "id": 28003,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "2610:9:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                              },
                              "id": 28009,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2610:45:83",
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
                            "src": "2588:68:83",
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
                                  "id": 28016,
                                  "name": "reads",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 27930,
                                  "src": "2667:5:83",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                    "typeString": "bytes32[] memory"
                                  }
                                },
                                "id": 28018,
                                "indexExpression": {
                                  "hexValue": "30",
                                  "id": 28017,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2673:1:83",
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
                                "src": "2667:8:83",
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
                              "id": 28015,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2659:7:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 28014,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "2659:7:83",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 28019,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2659:17:83",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2588:88:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 28021,
                        "nodeType": "ExpressionStatement",
                        "src": "2588:88:83"
                      },
                      {
                        "expression": {
                          "id": 28038,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "baseExpression": {
                                "baseExpression": {
                                  "expression": {
                                    "id": 28022,
                                    "name": "self",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 27832,
                                    "src": "2690:4:83",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                                      "typeString": "struct StdStorage storage pointer"
                                    }
                                  },
                                  "id": 28033,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "2695:5:83",
                                  "memberName": "finds",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 27765,
                                  "src": "2690:10:83",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$_$",
                                    "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => bool)))"
                                  }
                                },
                                "id": 28034,
                                "indexExpression": {
                                  "id": 28024,
                                  "name": "who",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 27838,
                                  "src": "2701:3:83",
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
                                "src": "2690:15:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                                  "typeString": "mapping(bytes4 => mapping(bytes32 => bool))"
                                }
                              },
                              "id": 28035,
                              "indexExpression": {
                                "id": 28025,
                                "name": "fsig",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27843,
                                "src": "2706:4:83",
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
                              "src": "2690:21:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                                "typeString": "mapping(bytes32 => bool)"
                              }
                            },
                            "id": 28036,
                            "indexExpression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "id": 28029,
                                      "name": "ins",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 27856,
                                      "src": "2739:3:83",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                        "typeString": "bytes32[] memory"
                                      }
                                    },
                                    {
                                      "id": 28030,
                                      "name": "field_depth",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 27848,
                                      "src": "2744:11:83",
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
                                      "id": 28027,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": -1,
                                      "src": "2722:3:83",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 28028,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberLocation": "2726:12:83",
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "src": "2722:16:83",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 28031,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2722:34:83",
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
                                "id": 28026,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "2712:9:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                              },
                              "id": 28032,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2712:45:83",
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
                            "src": "2690:68:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "74727565",
                            "id": 28037,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2761:4:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "2690:75:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 28039,
                        "nodeType": "ExpressionStatement",
                        "src": "2690:75:83"
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
                                "id": 28223,
                                "name": "self",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27832,
                                "src": "4116:4:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                                  "typeString": "struct StdStorage storage pointer"
                                }
                              },
                              "id": 28224,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4121:5:83",
                              "memberName": "finds",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 27765,
                              "src": "4116:10:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$_$",
                                "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => bool)))"
                              }
                            },
                            "id": 28226,
                            "indexExpression": {
                              "id": 28225,
                              "name": "who",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27838,
                              "src": "4127:3:83",
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
                            "src": "4116:15:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                              "typeString": "mapping(bytes4 => mapping(bytes32 => bool))"
                            }
                          },
                          "id": 28228,
                          "indexExpression": {
                            "id": 28227,
                            "name": "fsig",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27843,
                            "src": "4132:4:83",
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
                          "src": "4116:21:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                            "typeString": "mapping(bytes32 => bool)"
                          }
                        },
                        "id": 28236,
                        "indexExpression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 28232,
                                  "name": "ins",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 27856,
                                  "src": "4165:3:83",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                    "typeString": "bytes32[] memory"
                                  }
                                },
                                {
                                  "id": 28233,
                                  "name": "field_depth",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 27848,
                                  "src": "4170:11:83",
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
                                  "id": 28230,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -1,
                                  "src": "4148:3:83",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 28231,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberLocation": "4152:12:83",
                                "memberName": "encodePacked",
                                "nodeType": "MemberAccess",
                                "src": "4148:16:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 28234,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4148:34:83",
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
                            "id": 28229,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -8,
                            "src": "4138:9:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 28235,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4138:45:83",
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
                        "src": "4116:68:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "73746453746f726167652066696e642853746453746f72616765293a20536c6f74287329206e6f7420666f756e642e",
                        "id": 28237,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4198:49:83",
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
                      "id": 28222,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4095:7:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 28238,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4095:162:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 28239,
                  "nodeType": "ExpressionStatement",
                  "src": "4095:162:83"
                },
                {
                  "expression": {
                    "id": 28242,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "4268:19:83",
                    "subExpression": {
                      "expression": {
                        "id": 28240,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27832,
                        "src": "4275:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 28241,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4280:7:83",
                      "memberName": "_target",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27774,
                      "src": "4275:12:83",
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
                  "id": 28243,
                  "nodeType": "ExpressionStatement",
                  "src": "4268:19:83"
                },
                {
                  "expression": {
                    "id": 28246,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "4297:16:83",
                    "subExpression": {
                      "expression": {
                        "id": 28244,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27832,
                        "src": "4304:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 28245,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4309:4:83",
                      "memberName": "_sig",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27770,
                      "src": "4304:9:83",
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
                  "id": 28247,
                  "nodeType": "ExpressionStatement",
                  "src": "4297:16:83"
                },
                {
                  "expression": {
                    "id": 28250,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "4323:17:83",
                    "subExpression": {
                      "expression": {
                        "id": 28248,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27832,
                        "src": "4330:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 28249,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4335:5:83",
                      "memberName": "_keys",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27768,
                      "src": "4330:10:83",
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
                  "id": 28251,
                  "nodeType": "ExpressionStatement",
                  "src": "4323:17:83"
                },
                {
                  "expression": {
                    "id": 28254,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "4350:18:83",
                    "subExpression": {
                      "expression": {
                        "id": 28252,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27832,
                        "src": "4357:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 28253,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4362:6:83",
                      "memberName": "_depth",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27772,
                      "src": "4357:11:83",
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
                  "id": 28255,
                  "nodeType": "ExpressionStatement",
                  "src": "4350:18:83"
                },
                {
                  "expression": {
                    "baseExpression": {
                      "baseExpression": {
                        "baseExpression": {
                          "expression": {
                            "id": 28256,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27832,
                            "src": "4386:4:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                              "typeString": "struct StdStorage storage pointer"
                            }
                          },
                          "id": 28257,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4391:5:83",
                          "memberName": "slots",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 27757,
                          "src": "4386:10:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$_$",
                            "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => uint256)))"
                          }
                        },
                        "id": 28259,
                        "indexExpression": {
                          "id": 28258,
                          "name": "who",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27838,
                          "src": "4397:3:83",
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
                        "src": "4386:15:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$",
                          "typeString": "mapping(bytes4 => mapping(bytes32 => uint256))"
                        }
                      },
                      "id": 28261,
                      "indexExpression": {
                        "id": 28260,
                        "name": "fsig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27843,
                        "src": "4402:4:83",
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
                      "src": "4386:21:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                        "typeString": "mapping(bytes32 => uint256)"
                      }
                    },
                    "id": 28269,
                    "indexExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 28265,
                              "name": "ins",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27856,
                              "src": "4435:3:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                "typeString": "bytes32[] memory"
                              }
                            },
                            {
                              "id": 28266,
                              "name": "field_depth",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27848,
                              "src": "4440:11:83",
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
                              "id": 28263,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "4418:3:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 28264,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "4422:12:83",
                            "memberName": "encodePacked",
                            "nodeType": "MemberAccess",
                            "src": "4418:16:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 28267,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4418:34:83",
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
                        "id": 28262,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "4408:9:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 28268,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4408:45:83",
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
                    "src": "4386:68:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 27836,
                  "id": 28270,
                  "nodeType": "Return",
                  "src": "4379:75:83"
                }
              ]
            },
            "documentation": {
              "id": 27829,
              "nodeType": "StructuredDocumentation",
              "src": "756:129:83",
              "text": "@notice find an arbitrary storage slot given a function sig, input data, address of the contract and a value to check against"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "find",
            "nameLocation": "1273:4:83",
            "parameters": {
              "id": 27833,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27832,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "1297:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28272,
                  "src": "1278:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 27831,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 27830,
                      "name": "StdStorage",
                      "nameLocations": [
                        "1278:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "1278:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "1278:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1277:25:83"
            },
            "returnParameters": {
              "id": 27836,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27835,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28272,
                  "src": "1321:7:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27834,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1321:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1320:9:83"
            },
            "scope": 28669,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 28292,
            "nodeType": "FunctionDefinition",
            "src": "4467:156:83",
            "nodes": [],
            "body": {
              "id": 28291,
              "nodeType": "Block",
              "src": "4563:60:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 28287,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 28283,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28275,
                        "src": "4573:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 28285,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4578:7:83",
                      "memberName": "_target",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27774,
                      "src": "4573:12:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 28286,
                      "name": "_target",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28277,
                      "src": "4588:7:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "4573:22:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 28288,
                  "nodeType": "ExpressionStatement",
                  "src": "4573:22:83"
                },
                {
                  "expression": {
                    "id": 28289,
                    "name": "self",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 28275,
                    "src": "4612:4:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 28282,
                  "id": 28290,
                  "nodeType": "Return",
                  "src": "4605:11:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "target",
            "nameLocation": "4476:6:83",
            "parameters": {
              "id": 28278,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28275,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "4502:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28292,
                  "src": "4483:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28274,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28273,
                      "name": "StdStorage",
                      "nameLocations": [
                        "4483:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "4483:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "4483:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28277,
                  "mutability": "mutable",
                  "name": "_target",
                  "nameLocation": "4516:7:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28292,
                  "src": "4508:15:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28276,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4508:7:83",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4482:42:83"
            },
            "returnParameters": {
              "id": 28282,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28281,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28292,
                  "src": "4543:18:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28280,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28279,
                      "name": "StdStorage",
                      "nameLocations": [
                        "4543:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "4543:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "4543:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4542:20:83"
            },
            "scope": 28669,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 28312,
            "nodeType": "FunctionDefinition",
            "src": "4629:143:83",
            "nodes": [],
            "body": {
              "id": 28311,
              "nodeType": "Block",
              "src": "4718:54:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 28307,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 28303,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28295,
                        "src": "4728:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 28305,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4733:4:83",
                      "memberName": "_sig",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27770,
                      "src": "4728:9:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 28306,
                      "name": "_sig",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28297,
                      "src": "4740:4:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "4728:16:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "id": 28308,
                  "nodeType": "ExpressionStatement",
                  "src": "4728:16:83"
                },
                {
                  "expression": {
                    "id": 28309,
                    "name": "self",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 28295,
                    "src": "4761:4:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 28302,
                  "id": 28310,
                  "nodeType": "Return",
                  "src": "4754:11:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sig",
            "nameLocation": "4638:3:83",
            "parameters": {
              "id": 28298,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28295,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "4661:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28312,
                  "src": "4642:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28294,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28293,
                      "name": "StdStorage",
                      "nameLocations": [
                        "4642:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "4642:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "4642:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28297,
                  "mutability": "mutable",
                  "name": "_sig",
                  "nameLocation": "4674:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28312,
                  "src": "4667:11:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 28296,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "4667:6:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4641:38:83"
            },
            "returnParameters": {
              "id": 28302,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28301,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28312,
                  "src": "4698:18:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28300,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28299,
                      "name": "StdStorage",
                      "nameLocations": [
                        "4698:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "4698:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "4698:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4697:20:83"
            },
            "scope": 28669,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 28334,
            "nodeType": "FunctionDefinition",
            "src": "4778:156:83",
            "nodes": [],
            "body": {
              "id": 28333,
              "nodeType": "Block",
              "src": "4874:60:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 28329,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 28323,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28315,
                        "src": "4884:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 28325,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4889:4:83",
                      "memberName": "_sig",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27770,
                      "src": "4884:9:83",
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
                          "id": 28327,
                          "name": "_sig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28317,
                          "src": "4901:4:83",
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
                        "id": 28326,
                        "name": "sigs",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27828,
                        "src": "4896:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_bytes4_$",
                          "typeString": "function (string memory) pure returns (bytes4)"
                        }
                      },
                      "id": 28328,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4896:10:83",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "4884:22:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "id": 28330,
                  "nodeType": "ExpressionStatement",
                  "src": "4884:22:83"
                },
                {
                  "expression": {
                    "id": 28331,
                    "name": "self",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 28315,
                    "src": "4923:4:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 28322,
                  "id": 28332,
                  "nodeType": "Return",
                  "src": "4916:11:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sig",
            "nameLocation": "4787:3:83",
            "parameters": {
              "id": 28318,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28315,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "4810:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28334,
                  "src": "4791:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28314,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28313,
                      "name": "StdStorage",
                      "nameLocations": [
                        "4791:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "4791:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "4791:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28317,
                  "mutability": "mutable",
                  "name": "_sig",
                  "nameLocation": "4830:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28334,
                  "src": "4816:18:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28316,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4816:6:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4790:45:83"
            },
            "returnParameters": {
              "id": 28322,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28321,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28334,
                  "src": "4854:18:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28320,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28319,
                      "name": "StdStorage",
                      "nameLocations": [
                        "4854:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "4854:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "4854:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4853:20:83"
            },
            "scope": 28669,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 28365,
            "nodeType": "FunctionDefinition",
            "src": "4940:179:83",
            "nodes": [],
            "body": {
              "id": 28364,
              "nodeType": "Block",
              "src": "5034:85:83",
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
                                    "id": 28356,
                                    "name": "who",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 28339,
                                    "src": "5084:3:83",
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
                                  "id": 28355,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "5076:7:83",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint160_$",
                                    "typeString": "type(uint160)"
                                  },
                                  "typeName": {
                                    "id": 28354,
                                    "name": "uint160",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "5076:7:83",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 28357,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "5076:12:83",
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
                              "id": 28353,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "5068:7:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 28352,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "5068:7:83",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 28358,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5068:21:83",
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
                          "id": 28351,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "5060:7:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 28350,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "5060:7:83",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 28359,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5060:30:83",
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
                          "id": 28345,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28337,
                          "src": "5044:4:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                            "typeString": "struct StdStorage storage pointer"
                          }
                        },
                        "id": 28348,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5049:5:83",
                        "memberName": "_keys",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 27768,
                        "src": "5044:10:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                          "typeString": "bytes32[] storage ref"
                        }
                      },
                      "id": 28349,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5055:4:83",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "5044:15:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_bytes32_$dyn_storage_ptr_$_t_bytes32_$returns$__$attached_to$_t_array$_t_bytes32_$dyn_storage_ptr_$",
                        "typeString": "function (bytes32[] storage pointer,bytes32)"
                      }
                    },
                    "id": 28360,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5044:47:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 28361,
                  "nodeType": "ExpressionStatement",
                  "src": "5044:47:83"
                },
                {
                  "expression": {
                    "id": 28362,
                    "name": "self",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 28337,
                    "src": "5108:4:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 28344,
                  "id": 28363,
                  "nodeType": "Return",
                  "src": "5101:11:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "with_key",
            "nameLocation": "4949:8:83",
            "parameters": {
              "id": 28340,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28337,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "4977:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28365,
                  "src": "4958:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28336,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28335,
                      "name": "StdStorage",
                      "nameLocations": [
                        "4958:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "4958:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "4958:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28339,
                  "mutability": "mutable",
                  "name": "who",
                  "nameLocation": "4991:3:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28365,
                  "src": "4983:11:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28338,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4983:7:83",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4957:38:83"
            },
            "returnParameters": {
              "id": 28344,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28343,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28365,
                  "src": "5014:18:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28342,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28341,
                      "name": "StdStorage",
                      "nameLocations": [
                        "5014:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "5014:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "5014:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5013:20:83"
            },
            "scope": 28669,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 28390,
            "nodeType": "FunctionDefinition",
            "src": "5125:161:83",
            "nodes": [],
            "body": {
              "id": 28389,
              "nodeType": "Block",
              "src": "5219:67:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 28383,
                            "name": "amt",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28370,
                            "src": "5253:3:83",
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
                          "id": 28382,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "5245:7:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 28381,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "5245:7:83",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 28384,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5245:12:83",
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
                          "id": 28376,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28368,
                          "src": "5229:4:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                            "typeString": "struct StdStorage storage pointer"
                          }
                        },
                        "id": 28379,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5234:5:83",
                        "memberName": "_keys",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 27768,
                        "src": "5229:10:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                          "typeString": "bytes32[] storage ref"
                        }
                      },
                      "id": 28380,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5240:4:83",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "5229:15:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_bytes32_$dyn_storage_ptr_$_t_bytes32_$returns$__$attached_to$_t_array$_t_bytes32_$dyn_storage_ptr_$",
                        "typeString": "function (bytes32[] storage pointer,bytes32)"
                      }
                    },
                    "id": 28385,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5229:29:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 28386,
                  "nodeType": "ExpressionStatement",
                  "src": "5229:29:83"
                },
                {
                  "expression": {
                    "id": 28387,
                    "name": "self",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 28368,
                    "src": "5275:4:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 28375,
                  "id": 28388,
                  "nodeType": "Return",
                  "src": "5268:11:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "with_key",
            "nameLocation": "5134:8:83",
            "parameters": {
              "id": 28371,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28368,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5162:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28390,
                  "src": "5143:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28367,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28366,
                      "name": "StdStorage",
                      "nameLocations": [
                        "5143:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "5143:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "5143:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28370,
                  "mutability": "mutable",
                  "name": "amt",
                  "nameLocation": "5176:3:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28390,
                  "src": "5168:11:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28369,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5168:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5142:38:83"
            },
            "returnParameters": {
              "id": 28375,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28374,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28390,
                  "src": "5199:18:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28373,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28372,
                      "name": "StdStorage",
                      "nameLocations": [
                        "5199:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "5199:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "5199:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5198:20:83"
            },
            "scope": 28669,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 28412,
            "nodeType": "FunctionDefinition",
            "src": "5292:152:83",
            "nodes": [],
            "body": {
              "id": 28411,
              "nodeType": "Block",
              "src": "5386:58:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 28406,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28395,
                        "src": "5412:3:83",
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
                          "id": 28401,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28393,
                          "src": "5396:4:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                            "typeString": "struct StdStorage storage pointer"
                          }
                        },
                        "id": 28404,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5401:5:83",
                        "memberName": "_keys",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 27768,
                        "src": "5396:10:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                          "typeString": "bytes32[] storage ref"
                        }
                      },
                      "id": 28405,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5407:4:83",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "5396:15:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_bytes32_$dyn_storage_ptr_$_t_bytes32_$returns$__$attached_to$_t_array$_t_bytes32_$dyn_storage_ptr_$",
                        "typeString": "function (bytes32[] storage pointer,bytes32)"
                      }
                    },
                    "id": 28407,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5396:20:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 28408,
                  "nodeType": "ExpressionStatement",
                  "src": "5396:20:83"
                },
                {
                  "expression": {
                    "id": 28409,
                    "name": "self",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 28393,
                    "src": "5433:4:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 28400,
                  "id": 28410,
                  "nodeType": "Return",
                  "src": "5426:11:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "with_key",
            "nameLocation": "5301:8:83",
            "parameters": {
              "id": 28396,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28393,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5329:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28412,
                  "src": "5310:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28392,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28391,
                      "name": "StdStorage",
                      "nameLocations": [
                        "5310:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "5310:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "5310:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28395,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "5343:3:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28412,
                  "src": "5335:11:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28394,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5335:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5309:38:83"
            },
            "returnParameters": {
              "id": 28400,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28399,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28412,
                  "src": "5366:18:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28398,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28397,
                      "name": "StdStorage",
                      "nameLocations": [
                        "5366:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "5366:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "5366:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5365:20:83"
            },
            "scope": 28669,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 28432,
            "nodeType": "FunctionDefinition",
            "src": "5450:152:83",
            "nodes": [],
            "body": {
              "id": 28431,
              "nodeType": "Block",
              "src": "5544:58:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 28427,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 28423,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28415,
                        "src": "5554:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 28425,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "5559:6:83",
                      "memberName": "_depth",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27772,
                      "src": "5554:11:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 28426,
                      "name": "_depth",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28417,
                      "src": "5568:6:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5554:20:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 28428,
                  "nodeType": "ExpressionStatement",
                  "src": "5554:20:83"
                },
                {
                  "expression": {
                    "id": 28429,
                    "name": "self",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 28415,
                    "src": "5591:4:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 28422,
                  "id": 28430,
                  "nodeType": "Return",
                  "src": "5584:11:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "depth",
            "nameLocation": "5459:5:83",
            "parameters": {
              "id": 28418,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28415,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5484:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28432,
                  "src": "5465:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28414,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28413,
                      "name": "StdStorage",
                      "nameLocations": [
                        "5465:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "5465:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "5465:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28417,
                  "mutability": "mutable",
                  "name": "_depth",
                  "nameLocation": "5498:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28432,
                  "src": "5490:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28416,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5490:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5464:41:83"
            },
            "returnParameters": {
              "id": 28422,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28421,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28432,
                  "src": "5524:18:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28420,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28419,
                      "name": "StdStorage",
                      "nameLocations": [
                        "5524:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "5524:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "5524:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5523:20:83"
            },
            "scope": 28669,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 28464,
            "nodeType": "FunctionDefinition",
            "src": "5608:194:83",
            "nodes": [],
            "body": {
              "id": 28463,
              "nodeType": "Block",
              "src": "5678:124:83",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    28441
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 28441,
                      "mutability": "mutable",
                      "name": "t",
                      "nameLocation": "5696:1:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 28463,
                      "src": "5688:9:83",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 28440,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "5688:7:83",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 28444,
                  "initialValue": {
                    "expression": {
                      "id": 28442,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28435,
                      "src": "5700:4:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                        "typeString": "struct StdStorage storage pointer"
                      }
                    },
                    "id": 28443,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "5705:7:83",
                    "memberName": "_target",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 27774,
                    "src": "5700:12:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5688:24:83"
                },
                {
                  "assignments": [
                    28446
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 28446,
                      "mutability": "mutable",
                      "name": "s",
                      "nameLocation": "5730:1:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 28463,
                      "src": "5722:9:83",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 28445,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5722:7:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 28450,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 28448,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28435,
                        "src": "5739:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      ],
                      "id": 28447,
                      "name": "find",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28272,
                      "src": "5734:4:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$27777_storage_ptr_$returns$_t_uint256_$",
                        "typeString": "function (struct StdStorage storage pointer) returns (uint256)"
                      }
                    },
                    "id": 28449,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5734:10:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5722:22:83"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 28455,
                            "name": "t",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28441,
                            "src": "5780:1:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "arguments": [
                              {
                                "id": 28458,
                                "name": "s",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28446,
                                "src": "5791:1:83",
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
                              "id": 28457,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "5783:7:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes32_$",
                                "typeString": "type(bytes32)"
                              },
                              "typeName": {
                                "id": 28456,
                                "name": "bytes32",
                                "nodeType": "ElementaryTypeName",
                                "src": "5783:7:83",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 28459,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5783:10:83",
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
                            "id": 28453,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27810,
                            "src": "5772:2:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Vm_$32877",
                              "typeString": "contract Vm"
                            }
                          },
                          "id": 28454,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5775:4:83",
                          "memberName": "load",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31397,
                          "src": "5772:7:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_address_$_t_bytes32_$returns$_t_bytes32_$",
                            "typeString": "function (address,bytes32) view external returns (bytes32)"
                          }
                        },
                        "id": 28460,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5772:22:83",
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
                        "id": 28451,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -1,
                        "src": "5761:3:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 28452,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "5765:6:83",
                      "memberName": "encode",
                      "nodeType": "MemberAccess",
                      "src": "5761:10:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function () pure returns (bytes memory)"
                      }
                    },
                    "id": 28461,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5761:34:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 28439,
                  "id": 28462,
                  "nodeType": "Return",
                  "src": "5754:41:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read",
            "nameLocation": "5617:4:83",
            "parameters": {
              "id": 28436,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28435,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5641:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28464,
                  "src": "5622:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28434,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28433,
                      "name": "StdStorage",
                      "nameLocations": [
                        "5622:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "5622:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "5622:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5621:25:83"
            },
            "returnParameters": {
              "id": 28439,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28438,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28464,
                  "src": "5664:12:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28437,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5664:5:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5663:14:83"
            },
            "scope": 28669,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 28483,
            "nodeType": "FunctionDefinition",
            "src": "5808:131:83",
            "nodes": [],
            "body": {
              "id": 28482,
              "nodeType": "Block",
              "src": "5882:57:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 28475,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28467,
                            "src": "5915:4:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                              "typeString": "struct StdStorage storage pointer"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                              "typeString": "struct StdStorage storage pointer"
                            }
                          ],
                          "id": 28474,
                          "name": "read",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28464,
                          "src": "5910:4:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$27777_storage_ptr_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (struct StdStorage storage pointer) returns (bytes memory)"
                          }
                        },
                        "id": 28476,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5910:10:83",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "components": [
                          {
                            "id": 28478,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "5923:7:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_bytes32_$",
                              "typeString": "type(bytes32)"
                            },
                            "typeName": {
                              "id": 28477,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "5923:7:83",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "id": 28479,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "5922:9:83",
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
                        "id": 28472,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -1,
                        "src": "5899:3:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 28473,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "5903:6:83",
                      "memberName": "decode",
                      "nodeType": "MemberAccess",
                      "src": "5899:10:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                        "typeString": "function () pure"
                      }
                    },
                    "id": 28480,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5899:33:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 28471,
                  "id": 28481,
                  "nodeType": "Return",
                  "src": "5892:40:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read_bytes32",
            "nameLocation": "5817:12:83",
            "parameters": {
              "id": 28468,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28467,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5849:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28483,
                  "src": "5830:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28466,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28465,
                      "name": "StdStorage",
                      "nameLocations": [
                        "5830:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "5830:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "5830:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5829:25:83"
            },
            "returnParameters": {
              "id": 28471,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28470,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28483,
                  "src": "5873:7:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28469,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5873:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5872:9:83"
            },
            "scope": 28669,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 28514,
            "nodeType": "FunctionDefinition",
            "src": "5945:279:83",
            "nodes": [],
            "body": {
              "id": 28513,
              "nodeType": "Block",
              "src": "6013:211:83",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    28492
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 28492,
                      "mutability": "mutable",
                      "name": "v",
                      "nameLocation": "6030:1:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 28513,
                      "src": "6023:8:83",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 28491,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6023:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 28496,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 28494,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28486,
                        "src": "6043:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      ],
                      "id": 28493,
                      "name": "read_int",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28571,
                      "src": "6034:8:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$27777_storage_ptr_$returns$_t_int256_$",
                        "typeString": "function (struct StdStorage storage pointer) returns (int256)"
                      }
                    },
                    "id": 28495,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6034:14:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6023:25:83"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 28499,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 28497,
                      "name": "v",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28492,
                      "src": "6062:1:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 28498,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6067:1:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "6062:6:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 28502,
                  "nodeType": "IfStatement",
                  "src": "6058:24:83",
                  "trueBody": {
                    "expression": {
                      "hexValue": "66616c7365",
                      "id": 28500,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6077:5:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "functionReturnParameters": 28490,
                    "id": 28501,
                    "nodeType": "Return",
                    "src": "6070:12:83"
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 28505,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 28503,
                      "name": "v",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28492,
                      "src": "6096:1:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 28504,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6101:1:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "6096:6:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 28508,
                  "nodeType": "IfStatement",
                  "src": "6092:23:83",
                  "trueBody": {
                    "expression": {
                      "hexValue": "74727565",
                      "id": 28506,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6111:4:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "functionReturnParameters": 28490,
                    "id": 28507,
                    "nodeType": "Return",
                    "src": "6104:11:83"
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "73746453746f7261676520726561645f626f6f6c2853746453746f72616765293a2043616e6e6f74206465636f64652e204d616b65207375726520796f75206172652072656164696e67206120626f6f6c2e",
                        "id": 28510,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6132:84:83",
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
                      "id": 28509,
                      "name": "revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -19,
                        -19
                      ],
                      "referencedDeclaration": -19,
                      "src": "6125:6:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory) pure"
                      }
                    },
                    "id": 28511,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6125:92:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 28512,
                  "nodeType": "ExpressionStatement",
                  "src": "6125:92:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read_bool",
            "nameLocation": "5954:9:83",
            "parameters": {
              "id": 28487,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28486,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5983:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28514,
                  "src": "5964:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28485,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28484,
                      "name": "StdStorage",
                      "nameLocations": [
                        "5964:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "5964:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "5964:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5963:25:83"
            },
            "returnParameters": {
              "id": 28490,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28489,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28514,
                  "src": "6007:4:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 28488,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6007:4:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6006:6:83"
            },
            "scope": 28669,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 28533,
            "nodeType": "FunctionDefinition",
            "src": "6230:131:83",
            "nodes": [],
            "body": {
              "id": 28532,
              "nodeType": "Block",
              "src": "6304:57:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 28525,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28517,
                            "src": "6337:4:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                              "typeString": "struct StdStorage storage pointer"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                              "typeString": "struct StdStorage storage pointer"
                            }
                          ],
                          "id": 28524,
                          "name": "read",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28464,
                          "src": "6332:4:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$27777_storage_ptr_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (struct StdStorage storage pointer) returns (bytes memory)"
                          }
                        },
                        "id": 28526,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6332:10:83",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "components": [
                          {
                            "id": 28528,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6345:7:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 28527,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "6345:7:83",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "id": 28529,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "6344:9:83",
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
                        "id": 28522,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -1,
                        "src": "6321:3:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 28523,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "6325:6:83",
                      "memberName": "decode",
                      "nodeType": "MemberAccess",
                      "src": "6321:10:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                        "typeString": "function () pure"
                      }
                    },
                    "id": 28530,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6321:33:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "functionReturnParameters": 28521,
                  "id": 28531,
                  "nodeType": "Return",
                  "src": "6314:40:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read_address",
            "nameLocation": "6239:12:83",
            "parameters": {
              "id": 28518,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28517,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "6271:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28533,
                  "src": "6252:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28516,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28515,
                      "name": "StdStorage",
                      "nameLocations": [
                        "6252:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "6252:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "6252:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6251:25:83"
            },
            "returnParameters": {
              "id": 28521,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28520,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28533,
                  "src": "6295:7:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28519,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6295:7:83",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6294:9:83"
            },
            "scope": 28669,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 28552,
            "nodeType": "FunctionDefinition",
            "src": "6367:128:83",
            "nodes": [],
            "body": {
              "id": 28551,
              "nodeType": "Block",
              "src": "6438:57:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 28544,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28536,
                            "src": "6471:4:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                              "typeString": "struct StdStorage storage pointer"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                              "typeString": "struct StdStorage storage pointer"
                            }
                          ],
                          "id": 28543,
                          "name": "read",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28464,
                          "src": "6466:4:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$27777_storage_ptr_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (struct StdStorage storage pointer) returns (bytes memory)"
                          }
                        },
                        "id": 28545,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6466:10:83",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "components": [
                          {
                            "id": 28547,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6479:7:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 28546,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "6479:7:83",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "id": 28548,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "6478:9:83",
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
                        "id": 28541,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -1,
                        "src": "6455:3:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 28542,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "6459:6:83",
                      "memberName": "decode",
                      "nodeType": "MemberAccess",
                      "src": "6455:10:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                        "typeString": "function () pure"
                      }
                    },
                    "id": 28549,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6455:33:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 28540,
                  "id": 28550,
                  "nodeType": "Return",
                  "src": "6448:40:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read_uint",
            "nameLocation": "6376:9:83",
            "parameters": {
              "id": 28537,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28536,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "6405:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28552,
                  "src": "6386:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28535,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28534,
                      "name": "StdStorage",
                      "nameLocations": [
                        "6386:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "6386:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "6386:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6385:25:83"
            },
            "returnParameters": {
              "id": 28540,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28539,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28552,
                  "src": "6429:7:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28538,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6429:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6428:9:83"
            },
            "scope": 28669,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 28571,
            "nodeType": "FunctionDefinition",
            "src": "6501:125:83",
            "nodes": [],
            "body": {
              "id": 28570,
              "nodeType": "Block",
              "src": "6570:56:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 28563,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28555,
                            "src": "6603:4:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                              "typeString": "struct StdStorage storage pointer"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                              "typeString": "struct StdStorage storage pointer"
                            }
                          ],
                          "id": 28562,
                          "name": "read",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28464,
                          "src": "6598:4:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$27777_storage_ptr_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (struct StdStorage storage pointer) returns (bytes memory)"
                          }
                        },
                        "id": 28564,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6598:10:83",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "components": [
                          {
                            "id": 28566,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6611:6:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_int256_$",
                              "typeString": "type(int256)"
                            },
                            "typeName": {
                              "id": 28565,
                              "name": "int256",
                              "nodeType": "ElementaryTypeName",
                              "src": "6611:6:83",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "id": 28567,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "6610:8:83",
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
                        "id": 28560,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -1,
                        "src": "6587:3:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 28561,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "6591:6:83",
                      "memberName": "decode",
                      "nodeType": "MemberAccess",
                      "src": "6587:10:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                        "typeString": "function () pure"
                      }
                    },
                    "id": 28568,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6587:32:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 28559,
                  "id": 28569,
                  "nodeType": "Return",
                  "src": "6580:39:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read_int",
            "nameLocation": "6510:8:83",
            "parameters": {
              "id": 28556,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28555,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "6538:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28571,
                  "src": "6519:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28554,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28553,
                      "name": "StdStorage",
                      "nameLocations": [
                        "6519:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "6519:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "6519:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6518:25:83"
            },
            "returnParameters": {
              "id": 28559,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28558,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28571,
                  "src": "6562:6:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 28557,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6562:6:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6561:8:83"
            },
            "scope": 28669,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 28627,
            "nodeType": "FunctionDefinition",
            "src": "6632:304:83",
            "nodes": [],
            "body": {
              "id": 28626,
              "nodeType": "Block",
              "src": "6719:217:83",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    28581
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 28581,
                      "mutability": "mutable",
                      "name": "out",
                      "nameLocation": "6737:3:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 28626,
                      "src": "6729:11:83",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 28580,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "6729:7:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 28582,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6729:11:83"
                },
                {
                  "assignments": [
                    28584
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 28584,
                      "mutability": "mutable",
                      "name": "max",
                      "nameLocation": "6759:3:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 28626,
                      "src": "6751:11:83",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 28583,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6751:7:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 28593,
                  "initialValue": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 28588,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 28585,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28573,
                          "src": "6765:1:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 28586,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6767:6:83",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "6765:8:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "hexValue": "3332",
                        "id": 28587,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6776:2:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_32_by_1",
                          "typeString": "int_const 32"
                        },
                        "value": "32"
                      },
                      "src": "6765:13:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "expression": {
                        "id": 28590,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28573,
                        "src": "6786:1:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 28591,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6788:6:83",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "6786:8:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 28592,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "6765:29:83",
                    "trueExpression": {
                      "hexValue": "3332",
                      "id": 28589,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6781:2:83",
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
                  "src": "6751:43:83"
                },
                {
                  "body": {
                    "id": 28622,
                    "nodeType": "Block",
                    "src": "6838:72:83",
                    "statements": [
                      {
                        "expression": {
                          "id": 28620,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 28604,
                            "name": "out",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28581,
                            "src": "6852:3:83",
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
                            "id": 28619,
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
                                  "id": 28613,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "baseExpression": {
                                      "id": 28607,
                                      "name": "b",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 28573,
                                      "src": "6867:1:83",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes memory"
                                      }
                                    },
                                    "id": 28611,
                                    "indexExpression": {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "id": 28610,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 28608,
                                        "name": "offset",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 28575,
                                        "src": "6869:6:83",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "+",
                                      "rightExpression": {
                                        "id": 28609,
                                        "name": "i",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 28595,
                                        "src": "6878:1:83",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "6869:10:83",
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
                                    "src": "6867:13:83",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes1",
                                      "typeString": "bytes1"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "&",
                                  "rightExpression": {
                                    "hexValue": "30784646",
                                    "id": 28612,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6883:4:83",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_255_by_1",
                                      "typeString": "int_const 255"
                                    },
                                    "value": "0xFF"
                                  },
                                  "src": "6867:20:83",
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
                                "id": 28606,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "6859:7:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes32_$",
                                  "typeString": "type(bytes32)"
                                },
                                "typeName": {
                                  "id": 28605,
                                  "name": "bytes32",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "6859:7:83",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 28614,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6859:29:83",
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
                                  "id": 28617,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 28615,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 28595,
                                    "src": "6893:1:83",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "hexValue": "38",
                                    "id": 28616,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6897:1:83",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_8_by_1",
                                      "typeString": "int_const 8"
                                    },
                                    "value": "8"
                                  },
                                  "src": "6893:5:83",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "id": 28618,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "6892:7:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "6859:40:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "6852:47:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 28621,
                        "nodeType": "ExpressionStatement",
                        "src": "6852:47:83"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 28600,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 28598,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28595,
                      "src": "6824:1:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 28599,
                      "name": "max",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28584,
                      "src": "6828:3:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6824:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 28623,
                  "initializationExpression": {
                    "assignments": [
                      28595
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 28595,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "6817:1:83",
                        "nodeType": "VariableDeclaration",
                        "scope": 28623,
                        "src": "6809:9:83",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 28594,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "6809:7:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 28597,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 28596,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6821:1:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "6809:13:83"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 28602,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "6833:3:83",
                      "subExpression": {
                        "id": 28601,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28595,
                        "src": "6833:1:83",
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
                    "id": 28603,
                    "nodeType": "ExpressionStatement",
                    "src": "6833:3:83"
                  },
                  "nodeType": "ForStatement",
                  "src": "6804:106:83"
                },
                {
                  "expression": {
                    "id": 28624,
                    "name": "out",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 28581,
                    "src": "6926:3:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 28579,
                  "id": 28625,
                  "nodeType": "Return",
                  "src": "6919:10:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "bytesToBytes32",
            "nameLocation": "6641:14:83",
            "parameters": {
              "id": 28576,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28573,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "6669:1:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28627,
                  "src": "6656:14:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28572,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6656:5:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28575,
                  "mutability": "mutable",
                  "name": "offset",
                  "nameLocation": "6680:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28627,
                  "src": "6672:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28574,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6672:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6655:32:83"
            },
            "returnParameters": {
              "id": 28579,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28578,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28627,
                  "src": "6710:7:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28577,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6710:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6709:9:83"
            },
            "scope": 28669,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 28668,
            "nodeType": "FunctionDefinition",
            "src": "6942:393:83",
            "nodes": [],
            "body": {
              "id": 28667,
              "nodeType": "Block",
              "src": "7015:320:83",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    28636
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 28636,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "7038:6:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 28667,
                      "src": "7025:19:83",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 28635,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "7025:5:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 28644,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 28642,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 28639,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28630,
                            "src": "7057:1:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                              "typeString": "bytes32[] memory"
                            }
                          },
                          "id": 28640,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7059:6:83",
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "src": "7057:8:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "hexValue": "3332",
                          "id": 28641,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7068:2:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_32_by_1",
                            "typeString": "int_const 32"
                          },
                          "value": "32"
                        },
                        "src": "7057:13:83",
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
                      "id": 28638,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "7047:9:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (bytes memory)"
                      },
                      "typeName": {
                        "id": 28637,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "7051:5:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      }
                    },
                    "id": 28643,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7047:24:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7025:46:83"
                },
                {
                  "body": {
                    "id": 28663,
                    "nodeType": "Block",
                    "src": "7120:185:83",
                    "statements": [
                      {
                        "assignments": [
                          28657
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 28657,
                            "mutability": "mutable",
                            "name": "k",
                            "nameLocation": "7142:1:83",
                            "nodeType": "VariableDeclaration",
                            "scope": 28663,
                            "src": "7134:9:83",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 28656,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "7134:7:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 28661,
                        "initialValue": {
                          "baseExpression": {
                            "id": 28658,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28630,
                            "src": "7146:1:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                              "typeString": "bytes32[] memory"
                            }
                          },
                          "id": 28660,
                          "indexExpression": {
                            "id": 28659,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28646,
                            "src": "7148:1:83",
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
                          "src": "7146:4:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "7134:16:83"
                      },
                      {
                        "AST": {
                          "nodeType": "YulBlock",
                          "src": "7220:75:83",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "result",
                                        "nodeType": "YulIdentifier",
                                        "src": "7249:6:83"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "7261:2:83",
                                            "type": "",
                                            "value": "32"
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "7269:2:83",
                                                "type": "",
                                                "value": "32"
                                              },
                                              {
                                                "name": "i",
                                                "nodeType": "YulIdentifier",
                                                "src": "7273:1:83"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "mul",
                                              "nodeType": "YulIdentifier",
                                              "src": "7265:3:83"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "7265:10:83"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "7257:3:83"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "7257:19:83"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "7245:3:83"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "7245:32:83"
                                  },
                                  {
                                    "name": "k",
                                    "nodeType": "YulIdentifier",
                                    "src": "7279:1:83"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "7238:6:83"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "7238:43:83"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "7238:43:83"
                            }
                          ]
                        },
                        "documentation": "@solidity memory-safe-assembly",
                        "evmVersion": "paris",
                        "externalReferences": [
                          {
                            "declaration": 28646,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "7273:1:83",
                            "valueSize": 1
                          },
                          {
                            "declaration": 28657,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "7279:1:83",
                            "valueSize": 1
                          },
                          {
                            "declaration": 28636,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "7249:6:83",
                            "valueSize": 1
                          }
                        ],
                        "id": 28662,
                        "nodeType": "InlineAssembly",
                        "src": "7211:84:83"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 28652,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 28649,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28646,
                      "src": "7101:1:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 28650,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28630,
                        "src": "7105:1:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                          "typeString": "bytes32[] memory"
                        }
                      },
                      "id": 28651,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7107:6:83",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "7105:8:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7101:12:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 28664,
                  "initializationExpression": {
                    "assignments": [
                      28646
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 28646,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "7094:1:83",
                        "nodeType": "VariableDeclaration",
                        "scope": 28664,
                        "src": "7086:9:83",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 28645,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "7086:7:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 28648,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 28647,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7098:1:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "7086:13:83"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 28654,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "7115:3:83",
                      "subExpression": {
                        "id": 28653,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28646,
                        "src": "7115:1:83",
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
                    "id": 28655,
                    "nodeType": "ExpressionStatement",
                    "src": "7115:3:83"
                  },
                  "nodeType": "ForStatement",
                  "src": "7081:224:83"
                },
                {
                  "expression": {
                    "id": 28665,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 28636,
                    "src": "7322:6:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 28634,
                  "id": 28666,
                  "nodeType": "Return",
                  "src": "7315:13:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "flatten",
            "nameLocation": "6951:7:83",
            "parameters": {
              "id": 28631,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28630,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "6976:1:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28668,
                  "src": "6959:18:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 28628,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "6959:7:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 28629,
                    "nodeType": "ArrayTypeName",
                    "src": "6959:9:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6958:20:83"
            },
            "returnParameters": {
              "id": 28634,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28633,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28668,
                  "src": "7001:12:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 28632,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7001:5:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7000:14:83"
            },
            "scope": 28669,
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
          28669
        ],
        "name": "stdStorageSafe",
        "nameLocation": "376:14:83",
        "scope": 29231,
        "usedErrors": []
      },
      {
        "id": 29230,
        "nodeType": "ContractDefinition",
        "src": "7339:4665:83",
        "nodes": [
          {
            "id": 28686,
            "nodeType": "VariableDeclaration",
            "src": "7364:84:83",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "vm",
            "nameLocation": "7384:2:83",
            "scope": 29230,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Vm_$32877",
              "typeString": "contract Vm"
            },
            "typeName": {
              "id": 28671,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 28670,
                "name": "Vm",
                "nameLocations": [
                  "7364:2:83"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 32877,
                "src": "7364:2:83"
              },
              "referencedDeclaration": 32877,
              "src": "7364:2:83",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Vm_$32877",
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
                                  "id": 28680,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "string",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7426:17:83",
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
                                "id": 28679,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "7416:9:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                              },
                              "id": 28681,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7416:28:83",
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
                            "id": 28678,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "7408:7:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 28677,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "7408:7:83",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 28682,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7408:37:83",
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
                        "id": 28676,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "7400:7:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint160_$",
                          "typeString": "type(uint160)"
                        },
                        "typeName": {
                          "id": 28675,
                          "name": "uint160",
                          "nodeType": "ElementaryTypeName",
                          "src": "7400:7:83",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 28683,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7400:46:83",
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
                    "id": 28674,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "ElementaryTypeNameExpression",
                    "src": "7392:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_address_$",
                      "typeString": "type(address)"
                    },
                    "typeName": {
                      "id": 28673,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "7392:7:83",
                      "typeDescriptions": {}
                    }
                  },
                  "id": 28684,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "typeConversion",
                  "lValueRequested": false,
                  "nameLocations": [],
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "7392:55:83",
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
                "id": 28672,
                "name": "Vm",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 32877,
                "src": "7389:2:83",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_contract$_Vm_$32877_$",
                  "typeString": "type(contract Vm)"
                }
              },
              "id": 28685,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "7389:59:83",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Vm_$32877",
                "typeString": "contract Vm"
              }
            },
            "visibility": "private"
          },
          {
            "id": 28699,
            "nodeType": "FunctionDefinition",
            "src": "7455:118:83",
            "nodes": [],
            "body": {
              "id": 28698,
              "nodeType": "Block",
              "src": "7522:51:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 28695,
                        "name": "sigStr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28688,
                        "src": "7559:6:83",
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
                        "id": 28693,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28669,
                        "src": "7539:14:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$28669_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 28694,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7554:4:83",
                      "memberName": "sigs",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27828,
                      "src": "7539:19:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_bytes4_$",
                        "typeString": "function (string memory) pure returns (bytes4)"
                      }
                    },
                    "id": 28696,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7539:27:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "functionReturnParameters": 28692,
                  "id": 28697,
                  "nodeType": "Return",
                  "src": "7532:34:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sigs",
            "nameLocation": "7464:4:83",
            "parameters": {
              "id": 28689,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28688,
                  "mutability": "mutable",
                  "name": "sigStr",
                  "nameLocation": "7483:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28699,
                  "src": "7469:20:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28687,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7469:6:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7468:22:83"
            },
            "returnParameters": {
              "id": 28692,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28691,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28699,
                  "src": "7514:6:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 28690,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "7514:6:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7513:8:83"
            },
            "scope": 29230,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 28713,
            "nodeType": "FunctionDefinition",
            "src": "7579:115:83",
            "nodes": [],
            "body": {
              "id": 28712,
              "nodeType": "Block",
              "src": "7645:49:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 28709,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28702,
                        "src": "7682:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      ],
                      "expression": {
                        "id": 28707,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28669,
                        "src": "7662:14:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$28669_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 28708,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7677:4:83",
                      "memberName": "find",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28272,
                      "src": "7662:19:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$27777_storage_ptr_$returns$_t_uint256_$",
                        "typeString": "function (struct StdStorage storage pointer) returns (uint256)"
                      }
                    },
                    "id": 28710,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7662:25:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 28706,
                  "id": 28711,
                  "nodeType": "Return",
                  "src": "7655:32:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "find",
            "nameLocation": "7588:4:83",
            "parameters": {
              "id": 28703,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28702,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "7612:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28713,
                  "src": "7593:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28701,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28700,
                      "name": "StdStorage",
                      "nameLocations": [
                        "7593:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "7593:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "7593:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7592:25:83"
            },
            "returnParameters": {
              "id": 28706,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28705,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28713,
                  "src": "7636:7:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28704,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7636:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7635:9:83"
            },
            "scope": 29230,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 28731,
            "nodeType": "FunctionDefinition",
            "src": "7700:156:83",
            "nodes": [],
            "body": {
              "id": 28730,
              "nodeType": "Block",
              "src": "7796:60:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 28726,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28716,
                        "src": "7835:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      {
                        "id": 28727,
                        "name": "_target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28718,
                        "src": "7841:7:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "id": 28724,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28669,
                        "src": "7813:14:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$28669_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 28725,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7828:6:83",
                      "memberName": "target",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28292,
                      "src": "7813:21:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$27777_storage_ptr_$_t_address_$returns$_t_struct$_StdStorage_$27777_storage_ptr_$",
                        "typeString": "function (struct StdStorage storage pointer,address) returns (struct StdStorage storage pointer)"
                      }
                    },
                    "id": 28728,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7813:36:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 28723,
                  "id": 28729,
                  "nodeType": "Return",
                  "src": "7806:43:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "target",
            "nameLocation": "7709:6:83",
            "parameters": {
              "id": 28719,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28716,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "7735:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28731,
                  "src": "7716:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28715,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28714,
                      "name": "StdStorage",
                      "nameLocations": [
                        "7716:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "7716:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "7716:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28718,
                  "mutability": "mutable",
                  "name": "_target",
                  "nameLocation": "7749:7:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28731,
                  "src": "7741:15:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28717,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7741:7:83",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7715:42:83"
            },
            "returnParameters": {
              "id": 28723,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28722,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28731,
                  "src": "7776:18:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28721,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28720,
                      "name": "StdStorage",
                      "nameLocations": [
                        "7776:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "7776:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "7776:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7775:20:83"
            },
            "scope": 29230,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 28749,
            "nodeType": "FunctionDefinition",
            "src": "7862:143:83",
            "nodes": [],
            "body": {
              "id": 28748,
              "nodeType": "Block",
              "src": "7951:54:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 28744,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28734,
                        "src": "7987:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      {
                        "id": 28745,
                        "name": "_sig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28736,
                        "src": "7993:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      ],
                      "expression": {
                        "id": 28742,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28669,
                        "src": "7968:14:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$28669_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 28743,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7983:3:83",
                      "memberName": "sig",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28312,
                      "src": "7968:18:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$27777_storage_ptr_$_t_bytes4_$returns$_t_struct$_StdStorage_$27777_storage_ptr_$",
                        "typeString": "function (struct StdStorage storage pointer,bytes4) returns (struct StdStorage storage pointer)"
                      }
                    },
                    "id": 28746,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7968:30:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 28741,
                  "id": 28747,
                  "nodeType": "Return",
                  "src": "7961:37:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sig",
            "nameLocation": "7871:3:83",
            "parameters": {
              "id": 28737,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28734,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "7894:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28749,
                  "src": "7875:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28733,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28732,
                      "name": "StdStorage",
                      "nameLocations": [
                        "7875:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "7875:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "7875:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28736,
                  "mutability": "mutable",
                  "name": "_sig",
                  "nameLocation": "7907:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28749,
                  "src": "7900:11:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 28735,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "7900:6:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7874:38:83"
            },
            "returnParameters": {
              "id": 28741,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28740,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28749,
                  "src": "7931:18:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28739,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28738,
                      "name": "StdStorage",
                      "nameLocations": [
                        "7931:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "7931:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "7931:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7930:20:83"
            },
            "scope": 29230,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 28767,
            "nodeType": "FunctionDefinition",
            "src": "8011:150:83",
            "nodes": [],
            "body": {
              "id": 28766,
              "nodeType": "Block",
              "src": "8107:54:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 28762,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28752,
                        "src": "8143:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      {
                        "id": 28763,
                        "name": "_sig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28754,
                        "src": "8149:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "id": 28760,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28669,
                        "src": "8124:14:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$28669_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 28761,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8139:3:83",
                      "memberName": "sig",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28334,
                      "src": "8124:18:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$27777_storage_ptr_$_t_string_memory_ptr_$returns$_t_struct$_StdStorage_$27777_storage_ptr_$",
                        "typeString": "function (struct StdStorage storage pointer,string memory) returns (struct StdStorage storage pointer)"
                      }
                    },
                    "id": 28764,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8124:30:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 28759,
                  "id": 28765,
                  "nodeType": "Return",
                  "src": "8117:37:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sig",
            "nameLocation": "8020:3:83",
            "parameters": {
              "id": 28755,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28752,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8043:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28767,
                  "src": "8024:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28751,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28750,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8024:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "8024:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "8024:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28754,
                  "mutability": "mutable",
                  "name": "_sig",
                  "nameLocation": "8063:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28767,
                  "src": "8049:18:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28753,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8049:6:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8023:45:83"
            },
            "returnParameters": {
              "id": 28759,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28758,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28767,
                  "src": "8087:18:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28757,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28756,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8087:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "8087:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "8087:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8086:20:83"
            },
            "scope": 29230,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 28785,
            "nodeType": "FunctionDefinition",
            "src": "8167:152:83",
            "nodes": [],
            "body": {
              "id": 28784,
              "nodeType": "Block",
              "src": "8261:58:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 28780,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28770,
                        "src": "8302:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      {
                        "id": 28781,
                        "name": "who",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28772,
                        "src": "8308:3:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "id": 28778,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28669,
                        "src": "8278:14:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$28669_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 28779,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8293:8:83",
                      "memberName": "with_key",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28365,
                      "src": "8278:23:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$27777_storage_ptr_$_t_address_$returns$_t_struct$_StdStorage_$27777_storage_ptr_$",
                        "typeString": "function (struct StdStorage storage pointer,address) returns (struct StdStorage storage pointer)"
                      }
                    },
                    "id": 28782,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8278:34:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 28777,
                  "id": 28783,
                  "nodeType": "Return",
                  "src": "8271:41:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "with_key",
            "nameLocation": "8176:8:83",
            "parameters": {
              "id": 28773,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28770,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8204:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28785,
                  "src": "8185:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28769,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28768,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8185:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "8185:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "8185:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28772,
                  "mutability": "mutable",
                  "name": "who",
                  "nameLocation": "8218:3:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28785,
                  "src": "8210:11:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28771,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8210:7:83",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8184:38:83"
            },
            "returnParameters": {
              "id": 28777,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28776,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28785,
                  "src": "8241:18:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28775,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28774,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8241:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "8241:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "8241:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8240:20:83"
            },
            "scope": 29230,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 28803,
            "nodeType": "FunctionDefinition",
            "src": "8325:152:83",
            "nodes": [],
            "body": {
              "id": 28802,
              "nodeType": "Block",
              "src": "8419:58:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 28798,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28788,
                        "src": "8460:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      {
                        "id": 28799,
                        "name": "amt",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28790,
                        "src": "8466:3:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 28796,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28669,
                        "src": "8436:14:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$28669_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 28797,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8451:8:83",
                      "memberName": "with_key",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28390,
                      "src": "8436:23:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$27777_storage_ptr_$_t_uint256_$returns$_t_struct$_StdStorage_$27777_storage_ptr_$",
                        "typeString": "function (struct StdStorage storage pointer,uint256) returns (struct StdStorage storage pointer)"
                      }
                    },
                    "id": 28800,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8436:34:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 28795,
                  "id": 28801,
                  "nodeType": "Return",
                  "src": "8429:41:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "with_key",
            "nameLocation": "8334:8:83",
            "parameters": {
              "id": 28791,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28788,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8362:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28803,
                  "src": "8343:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28787,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28786,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8343:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "8343:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "8343:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28790,
                  "mutability": "mutable",
                  "name": "amt",
                  "nameLocation": "8376:3:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28803,
                  "src": "8368:11:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28789,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8368:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8342:38:83"
            },
            "returnParameters": {
              "id": 28795,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28794,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28803,
                  "src": "8399:18:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28793,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28792,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8399:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "8399:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "8399:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8398:20:83"
            },
            "scope": 29230,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 28821,
            "nodeType": "FunctionDefinition",
            "src": "8483:152:83",
            "nodes": [],
            "body": {
              "id": 28820,
              "nodeType": "Block",
              "src": "8577:58:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 28816,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28806,
                        "src": "8618:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      {
                        "id": 28817,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28808,
                        "src": "8624:3:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "id": 28814,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28669,
                        "src": "8594:14:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$28669_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 28815,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8609:8:83",
                      "memberName": "with_key",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28412,
                      "src": "8594:23:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$27777_storage_ptr_$_t_bytes32_$returns$_t_struct$_StdStorage_$27777_storage_ptr_$",
                        "typeString": "function (struct StdStorage storage pointer,bytes32) returns (struct StdStorage storage pointer)"
                      }
                    },
                    "id": 28818,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8594:34:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 28813,
                  "id": 28819,
                  "nodeType": "Return",
                  "src": "8587:41:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "with_key",
            "nameLocation": "8492:8:83",
            "parameters": {
              "id": 28809,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28806,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8520:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28821,
                  "src": "8501:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28805,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28804,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8501:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "8501:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "8501:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28808,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "8534:3:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28821,
                  "src": "8526:11:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28807,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8526:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8500:38:83"
            },
            "returnParameters": {
              "id": 28813,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28812,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28821,
                  "src": "8557:18:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28811,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28810,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8557:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "8557:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "8557:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8556:20:83"
            },
            "scope": 29230,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 28839,
            "nodeType": "FunctionDefinition",
            "src": "8641:152:83",
            "nodes": [],
            "body": {
              "id": 28838,
              "nodeType": "Block",
              "src": "8735:58:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 28834,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28824,
                        "src": "8773:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      {
                        "id": 28835,
                        "name": "_depth",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28826,
                        "src": "8779:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 28832,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28669,
                        "src": "8752:14:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$28669_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 28833,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8767:5:83",
                      "memberName": "depth",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28432,
                      "src": "8752:20:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$27777_storage_ptr_$_t_uint256_$returns$_t_struct$_StdStorage_$27777_storage_ptr_$",
                        "typeString": "function (struct StdStorage storage pointer,uint256) returns (struct StdStorage storage pointer)"
                      }
                    },
                    "id": 28836,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8752:34:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage storage pointer"
                    }
                  },
                  "functionReturnParameters": 28831,
                  "id": 28837,
                  "nodeType": "Return",
                  "src": "8745:41:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "depth",
            "nameLocation": "8650:5:83",
            "parameters": {
              "id": 28827,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28824,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8675:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28839,
                  "src": "8656:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28823,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28822,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8656:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "8656:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "8656:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28826,
                  "mutability": "mutable",
                  "name": "_depth",
                  "nameLocation": "8689:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28839,
                  "src": "8681:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28825,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8681:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8655:41:83"
            },
            "returnParameters": {
              "id": 28831,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28830,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 28839,
                  "src": "8715:18:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28829,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28828,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8715:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "8715:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "8715:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8714:20:83"
            },
            "scope": 29230,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 28862,
            "nodeType": "FunctionDefinition",
            "src": "8799:138:83",
            "nodes": [],
            "body": {
              "id": 28861,
              "nodeType": "Block",
              "src": "8869:68:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 28848,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28842,
                        "src": "8893:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
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
                                    "id": 28855,
                                    "name": "who",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 28844,
                                    "src": "8923:3:83",
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
                                  "id": 28854,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "8915:7:83",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint160_$",
                                    "typeString": "type(uint160)"
                                  },
                                  "typeName": {
                                    "id": 28853,
                                    "name": "uint160",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "8915:7:83",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 28856,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8915:12:83",
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
                              "id": 28852,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "8907:7:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 28851,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "8907:7:83",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 28857,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8907:21:83",
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
                          "id": 28850,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8899:7:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 28849,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "8899:7:83",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 28858,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8899:30:83",
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
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 28847,
                      "name": "checked_write",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28862,
                        28879,
                        28917,
                        29062
                      ],
                      "referencedDeclaration": 29062,
                      "src": "8879:13:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$27777_storage_ptr_$_t_bytes32_$returns$__$",
                        "typeString": "function (struct StdStorage storage pointer,bytes32)"
                      }
                    },
                    "id": 28859,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8879:51:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 28860,
                  "nodeType": "ExpressionStatement",
                  "src": "8879:51:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "checked_write",
            "nameLocation": "8808:13:83",
            "parameters": {
              "id": 28845,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28842,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8841:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28862,
                  "src": "8822:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28841,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28840,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8822:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "8822:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "8822:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28844,
                  "mutability": "mutable",
                  "name": "who",
                  "nameLocation": "8855:3:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28862,
                  "src": "8847:11:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28843,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8847:7:83",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8821:38:83"
            },
            "returnParameters": {
              "id": 28846,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8869:0:83"
            },
            "scope": 29230,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 28879,
            "nodeType": "FunctionDefinition",
            "src": "8943:120:83",
            "nodes": [],
            "body": {
              "id": 28878,
              "nodeType": "Block",
              "src": "9013:50:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 28871,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28865,
                        "src": "9037:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 28874,
                            "name": "amt",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28867,
                            "src": "9051:3:83",
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
                          "id": 28873,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "9043:7:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 28872,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "9043:7:83",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 28875,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9043:12:83",
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
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 28870,
                      "name": "checked_write",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28862,
                        28879,
                        28917,
                        29062
                      ],
                      "referencedDeclaration": 29062,
                      "src": "9023:13:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$27777_storage_ptr_$_t_bytes32_$returns$__$",
                        "typeString": "function (struct StdStorage storage pointer,bytes32)"
                      }
                    },
                    "id": 28876,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9023:33:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 28877,
                  "nodeType": "ExpressionStatement",
                  "src": "9023:33:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "checked_write",
            "nameLocation": "8952:13:83",
            "parameters": {
              "id": 28868,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28865,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8985:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28879,
                  "src": "8966:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28864,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28863,
                      "name": "StdStorage",
                      "nameLocations": [
                        "8966:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "8966:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "8966:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28867,
                  "mutability": "mutable",
                  "name": "amt",
                  "nameLocation": "8999:3:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28879,
                  "src": "8991:11:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 28866,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8991:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8965:38:83"
            },
            "returnParameters": {
              "id": 28869,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9013:0:83"
            },
            "scope": 29230,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 28899,
            "nodeType": "FunctionDefinition",
            "src": "9069:132:83",
            "nodes": [],
            "body": {
              "id": 28898,
              "nodeType": "Block",
              "src": "9142:59:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 28888,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28882,
                        "src": "9166:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 28893,
                                "name": "val",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28884,
                                "src": "9188:3:83",
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
                              "id": 28892,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "9180:7:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 28891,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "9180:7:83",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 28894,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9180:12:83",
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
                          "id": 28890,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "9172:7:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 28889,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "9172:7:83",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 28895,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9172:21:83",
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
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 28887,
                      "name": "checked_write",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28862,
                        28879,
                        28917,
                        29062
                      ],
                      "referencedDeclaration": 29062,
                      "src": "9152:13:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$27777_storage_ptr_$_t_bytes32_$returns$__$",
                        "typeString": "function (struct StdStorage storage pointer,bytes32)"
                      }
                    },
                    "id": 28896,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9152:42:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 28897,
                  "nodeType": "ExpressionStatement",
                  "src": "9152:42:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "checked_write_int",
            "nameLocation": "9078:17:83",
            "parameters": {
              "id": 28885,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28882,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "9115:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28899,
                  "src": "9096:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28881,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28880,
                      "name": "StdStorage",
                      "nameLocations": [
                        "9096:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "9096:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "9096:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28884,
                  "mutability": "mutable",
                  "name": "val",
                  "nameLocation": "9128:3:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28899,
                  "src": "9121:10:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 28883,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9121:6:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9095:37:83"
            },
            "returnParameters": {
              "id": 28886,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9142:0:83"
            },
            "scope": 29230,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 28917,
            "nodeType": "FunctionDefinition",
            "src": "9207:222:83",
            "nodes": [],
            "body": {
              "id": 28916,
              "nodeType": "Block",
              "src": "9276:153:83",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    28908
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 28908,
                      "mutability": "mutable",
                      "name": "t",
                      "nameLocation": "9294:1:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 28916,
                      "src": "9286:9:83",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 28907,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "9286:7:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 28909,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9286:9:83"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "9357:34:83",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "9371:10:83",
                        "value": {
                          "name": "write",
                          "nodeType": "YulIdentifier",
                          "src": "9376:5:83"
                        },
                        "variableNames": [
                          {
                            "name": "t",
                            "nodeType": "YulIdentifier",
                            "src": "9371:1:83"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 28908,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9371:1:83",
                      "valueSize": 1
                    },
                    {
                      "declaration": 28904,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9376:5:83",
                      "valueSize": 1
                    }
                  ],
                  "id": 28910,
                  "nodeType": "InlineAssembly",
                  "src": "9348:43:83"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 28912,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28902,
                        "src": "9414:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      {
                        "id": 28913,
                        "name": "t",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28908,
                        "src": "9420:1:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 28911,
                      "name": "checked_write",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28862,
                        28879,
                        28917,
                        29062
                      ],
                      "referencedDeclaration": 29062,
                      "src": "9400:13:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$27777_storage_ptr_$_t_bytes32_$returns$__$",
                        "typeString": "function (struct StdStorage storage pointer,bytes32)"
                      }
                    },
                    "id": 28914,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9400:22:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 28915,
                  "nodeType": "ExpressionStatement",
                  "src": "9400:22:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "checked_write",
            "nameLocation": "9216:13:83",
            "parameters": {
              "id": 28905,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28902,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "9249:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28917,
                  "src": "9230:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28901,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28900,
                      "name": "StdStorage",
                      "nameLocations": [
                        "9230:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "9230:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "9230:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28904,
                  "mutability": "mutable",
                  "name": "write",
                  "nameLocation": "9260:5:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 28917,
                  "src": "9255:10:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 28903,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "9255:4:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9229:37:83"
            },
            "returnParameters": {
              "id": 28906,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9276:0:83"
            },
            "scope": 29230,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29062,
            "nodeType": "FunctionDefinition",
            "src": "9435:1095:83",
            "nodes": [],
            "body": {
              "id": 29061,
              "nodeType": "Block",
              "src": "9505:1025:83",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    28926
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 28926,
                      "mutability": "mutable",
                      "name": "who",
                      "nameLocation": "9523:3:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 29061,
                      "src": "9515:11:83",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 28925,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "9515:7:83",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 28929,
                  "initialValue": {
                    "expression": {
                      "id": 28927,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28920,
                      "src": "9529:4:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                        "typeString": "struct StdStorage storage pointer"
                      }
                    },
                    "id": 28928,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "9534:7:83",
                    "memberName": "_target",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 27774,
                    "src": "9529:12:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9515:26:83"
                },
                {
                  "assignments": [
                    28931
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 28931,
                      "mutability": "mutable",
                      "name": "fsig",
                      "nameLocation": "9558:4:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 29061,
                      "src": "9551:11:83",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      },
                      "typeName": {
                        "id": 28930,
                        "name": "bytes4",
                        "nodeType": "ElementaryTypeName",
                        "src": "9551:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 28934,
                  "initialValue": {
                    "expression": {
                      "id": 28932,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28920,
                      "src": "9565:4:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                        "typeString": "struct StdStorage storage pointer"
                      }
                    },
                    "id": 28933,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "9570:4:83",
                    "memberName": "_sig",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 27770,
                    "src": "9565:9:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9551:23:83"
                },
                {
                  "assignments": [
                    28936
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 28936,
                      "mutability": "mutable",
                      "name": "field_depth",
                      "nameLocation": "9592:11:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 29061,
                      "src": "9584:19:83",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 28935,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9584:7:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 28939,
                  "initialValue": {
                    "expression": {
                      "id": 28937,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28920,
                      "src": "9606:4:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                        "typeString": "struct StdStorage storage pointer"
                      }
                    },
                    "id": 28938,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "9611:6:83",
                    "memberName": "_depth",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 27772,
                    "src": "9606:11:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9584:33:83"
                },
                {
                  "assignments": [
                    28944
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 28944,
                      "mutability": "mutable",
                      "name": "ins",
                      "nameLocation": "9644:3:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 29061,
                      "src": "9627:20:83",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 28942,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "9627:7:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 28943,
                        "nodeType": "ArrayTypeName",
                        "src": "9627:9:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 28947,
                  "initialValue": {
                    "expression": {
                      "id": 28945,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28920,
                      "src": "9650:4:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                        "typeString": "struct StdStorage storage pointer"
                      }
                    },
                    "id": 28946,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "9655:5:83",
                    "memberName": "_keys",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 27768,
                    "src": "9650:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                      "typeString": "bytes32[] storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9627:33:83"
                },
                {
                  "assignments": [
                    28949
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 28949,
                      "mutability": "mutable",
                      "name": "cald",
                      "nameLocation": "9684:4:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 29061,
                      "src": "9671:17:83",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 28948,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "9671:5:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 28957,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 28952,
                        "name": "fsig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28931,
                        "src": "9708:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 28954,
                            "name": "ins",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28944,
                            "src": "9722:3:83",
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
                          "id": 28953,
                          "name": "flatten",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 29229,
                          "src": "9714:7:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_array$_t_bytes32_$dyn_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes32[] memory) pure returns (bytes memory)"
                          }
                        },
                        "id": 28955,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9714:12:83",
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
                        "id": 28950,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -1,
                        "src": "9691:3:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 28951,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "9695:12:83",
                      "memberName": "encodePacked",
                      "nodeType": "MemberAccess",
                      "src": "9691:16:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function () pure returns (bytes memory)"
                      }
                    },
                    "id": 28956,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9691:36:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9671:56:83"
                },
                {
                  "condition": {
                    "id": 28972,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "9741:69:83",
                    "subExpression": {
                      "baseExpression": {
                        "baseExpression": {
                          "baseExpression": {
                            "expression": {
                              "id": 28958,
                              "name": "self",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28920,
                              "src": "9742:4:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                                "typeString": "struct StdStorage storage pointer"
                              }
                            },
                            "id": 28959,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "9747:5:83",
                            "memberName": "finds",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 27765,
                            "src": "9742:10:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$_$",
                              "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => bool)))"
                            }
                          },
                          "id": 28961,
                          "indexExpression": {
                            "id": 28960,
                            "name": "who",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28926,
                            "src": "9753:3:83",
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
                          "src": "9742:15:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                            "typeString": "mapping(bytes4 => mapping(bytes32 => bool))"
                          }
                        },
                        "id": 28963,
                        "indexExpression": {
                          "id": 28962,
                          "name": "fsig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28931,
                          "src": "9758:4:83",
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
                        "src": "9742:21:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                          "typeString": "mapping(bytes32 => bool)"
                        }
                      },
                      "id": 28971,
                      "indexExpression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 28967,
                                "name": "ins",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28944,
                                "src": "9791:3:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                  "typeString": "bytes32[] memory"
                                }
                              },
                              {
                                "id": 28968,
                                "name": "field_depth",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28936,
                                "src": "9796:11:83",
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
                                "id": 28965,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "9774:3:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 28966,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "9778:12:83",
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "src": "9774:16:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 28969,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9774:34:83",
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
                          "id": 28964,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -8,
                          "src": "9764:9:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 28970,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9764:45:83",
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
                      "src": "9742:68:83",
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
                  "id": 28978,
                  "nodeType": "IfStatement",
                  "src": "9737:110:83",
                  "trueBody": {
                    "id": 28977,
                    "nodeType": "Block",
                    "src": "9812:35:83",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 28974,
                              "name": "self",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28920,
                              "src": "9831:4:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                                "typeString": "struct StdStorage storage pointer"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                                "typeString": "struct StdStorage storage pointer"
                              }
                            ],
                            "id": 28973,
                            "name": "find",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28713,
                            "src": "9826:4:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$27777_storage_ptr_$returns$_t_uint256_$",
                              "typeString": "function (struct StdStorage storage pointer) returns (uint256)"
                            }
                          },
                          "id": 28975,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9826:10:83",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 28976,
                        "nodeType": "ExpressionStatement",
                        "src": "9826:10:83"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    28980
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 28980,
                      "mutability": "mutable",
                      "name": "slot",
                      "nameLocation": "9864:4:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 29061,
                      "src": "9856:12:83",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 28979,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "9856:7:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 28998,
                  "initialValue": {
                    "arguments": [
                      {
                        "baseExpression": {
                          "baseExpression": {
                            "baseExpression": {
                              "expression": {
                                "id": 28983,
                                "name": "self",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28920,
                                "src": "9879:4:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                                  "typeString": "struct StdStorage storage pointer"
                                }
                              },
                              "id": 28984,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "9884:5:83",
                              "memberName": "slots",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 27757,
                              "src": "9879:10:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$_$",
                                "typeString": "mapping(address => mapping(bytes4 => mapping(bytes32 => uint256)))"
                              }
                            },
                            "id": 28986,
                            "indexExpression": {
                              "id": 28985,
                              "name": "who",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28926,
                              "src": "9890:3:83",
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
                            "src": "9879:15:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes4_$_t_mapping$_t_bytes32_$_t_uint256_$_$",
                              "typeString": "mapping(bytes4 => mapping(bytes32 => uint256))"
                            }
                          },
                          "id": 28988,
                          "indexExpression": {
                            "id": 28987,
                            "name": "fsig",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28931,
                            "src": "9895:4:83",
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
                          "src": "9879:21:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                            "typeString": "mapping(bytes32 => uint256)"
                          }
                        },
                        "id": 28996,
                        "indexExpression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 28992,
                                  "name": "ins",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 28944,
                                  "src": "9928:3:83",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                    "typeString": "bytes32[] memory"
                                  }
                                },
                                {
                                  "id": 28993,
                                  "name": "field_depth",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 28936,
                                  "src": "9933:11:83",
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
                                  "id": 28990,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -1,
                                  "src": "9911:3:83",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 28991,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberLocation": "9915:12:83",
                                "memberName": "encodePacked",
                                "nodeType": "MemberAccess",
                                "src": "9911:16:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 28994,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9911:34:83",
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
                            "id": 28989,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -8,
                            "src": "9901:9:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 28995,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9901:45:83",
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
                        "src": "9879:68:83",
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
                      "id": 28982,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "9871:7:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes32_$",
                        "typeString": "type(bytes32)"
                      },
                      "typeName": {
                        "id": 28981,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "9871:7:83",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 28997,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9871:77:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9856:92:83"
                },
                {
                  "assignments": [
                    29000
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 29000,
                      "mutability": "mutable",
                      "name": "fdat",
                      "nameLocation": "9967:4:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 29061,
                      "src": "9959:12:83",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 28999,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "9959:7:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 29001,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9959:12:83"
                },
                {
                  "id": 29018,
                  "nodeType": "Block",
                  "src": "9981:128:83",
                  "statements": [
                    {
                      "assignments": [
                        null,
                        29003
                      ],
                      "declarations": [
                        null,
                        {
                          "constant": false,
                          "id": 29003,
                          "mutability": "mutable",
                          "name": "rdat",
                          "nameLocation": "10011:4:83",
                          "nodeType": "VariableDeclaration",
                          "scope": 29018,
                          "src": "9998:17:83",
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes"
                          },
                          "typeName": {
                            "id": 29002,
                            "name": "bytes",
                            "nodeType": "ElementaryTypeName",
                            "src": "9998:5:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_storage_ptr",
                              "typeString": "bytes"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 29008,
                      "initialValue": {
                        "arguments": [
                          {
                            "id": 29006,
                            "name": "cald",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28949,
                            "src": "10034:4:83",
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
                            "id": 29004,
                            "name": "who",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28926,
                            "src": "10019:3:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 29005,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "10023:10:83",
                          "memberName": "staticcall",
                          "nodeType": "MemberAccess",
                          "src": "10019:14:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes memory) view returns (bool,bytes memory)"
                          }
                        },
                        "id": 29007,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10019:20:83",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                          "typeString": "tuple(bool,bytes memory)"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "9995:44:83"
                    },
                    {
                      "expression": {
                        "id": 29016,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 29009,
                          "name": "fdat",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 29000,
                          "src": "10053:4:83",
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
                              "id": 29011,
                              "name": "rdat",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 29003,
                              "src": "10075:4:83",
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
                              "id": 29014,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "hexValue": "3332",
                                "id": 29012,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10081:2:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_32_by_1",
                                  "typeString": "int_const 32"
                                },
                                "value": "32"
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "id": 29013,
                                "name": "field_depth",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28936,
                                "src": "10086:11:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "10081:16:83",
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
                            "id": 29010,
                            "name": "bytesToBytes32",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29188,
                            "src": "10060:14:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$_t_uint256_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory,uint256) pure returns (bytes32)"
                            }
                          },
                          "id": 29015,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10060:38:83",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "src": "10053:45:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "id": 29017,
                      "nodeType": "ExpressionStatement",
                      "src": "10053:45:83"
                    }
                  ]
                },
                {
                  "assignments": [
                    29020
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 29020,
                      "mutability": "mutable",
                      "name": "curr",
                      "nameLocation": "10126:4:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 29061,
                      "src": "10118:12:83",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 29019,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "10118:7:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 29026,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 29023,
                        "name": "who",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28926,
                        "src": "10141:3:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 29024,
                        "name": "slot",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28980,
                        "src": "10146:4:83",
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
                        "id": 29021,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28686,
                        "src": "10133:2:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Vm_$32877",
                          "typeString": "contract Vm"
                        }
                      },
                      "id": 29022,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10136:4:83",
                      "memberName": "load",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31397,
                      "src": "10133:7:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (address,bytes32) view external returns (bytes32)"
                      }
                    },
                    "id": 29025,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10133:18:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10118:33:83"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 29029,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 29027,
                      "name": "fdat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 29000,
                      "src": "10166:4:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 29028,
                      "name": "curr",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 29020,
                      "src": "10174:4:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "10166:12:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 29036,
                  "nodeType": "IfStatement",
                  "src": "10162:218:83",
                  "trueBody": {
                    "id": 29035,
                    "nodeType": "Block",
                    "src": "10180:200:83",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "hexValue": "66616c7365",
                              "id": 29031,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10219:5:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "false"
                            },
                            {
                              "hexValue": "73746453746f726167652066696e642853746453746f72616765293a205061636b656420736c6f742e205468697320776f756c642063617573652064616e6765726f7573206f76657277726974696e6720616e642063757272656e746c792069736e277420737570706f727465642e",
                              "id": 29032,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10242:113:83",
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
                            "id": 29030,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "10194:7:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 29033,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10194:175:83",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 29034,
                        "nodeType": "ExpressionStatement",
                        "src": "10194:175:83"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 29040,
                        "name": "who",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28926,
                        "src": "10398:3:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 29041,
                        "name": "slot",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28980,
                        "src": "10403:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 29042,
                        "name": "set",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28922,
                        "src": "10409:3:83",
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
                        "id": 29037,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28686,
                        "src": "10389:2:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Vm_$32877",
                          "typeString": "contract Vm"
                        }
                      },
                      "id": 29039,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10392:5:83",
                      "memberName": "store",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32451,
                      "src": "10389:8:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_bytes32_$_t_bytes32_$returns$__$",
                        "typeString": "function (address,bytes32,bytes32) external"
                      }
                    },
                    "id": 29043,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10389:24:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 29044,
                  "nodeType": "ExpressionStatement",
                  "src": "10389:24:83"
                },
                {
                  "expression": {
                    "id": 29047,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "10423:19:83",
                    "subExpression": {
                      "expression": {
                        "id": 29045,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28920,
                        "src": "10430:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 29046,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10435:7:83",
                      "memberName": "_target",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27774,
                      "src": "10430:12:83",
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
                  "id": 29048,
                  "nodeType": "ExpressionStatement",
                  "src": "10423:19:83"
                },
                {
                  "expression": {
                    "id": 29051,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "10452:16:83",
                    "subExpression": {
                      "expression": {
                        "id": 29049,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28920,
                        "src": "10459:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 29050,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10464:4:83",
                      "memberName": "_sig",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27770,
                      "src": "10459:9:83",
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
                  "id": 29052,
                  "nodeType": "ExpressionStatement",
                  "src": "10452:16:83"
                },
                {
                  "expression": {
                    "id": 29055,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "10478:17:83",
                    "subExpression": {
                      "expression": {
                        "id": 29053,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28920,
                        "src": "10485:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 29054,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10490:5:83",
                      "memberName": "_keys",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27768,
                      "src": "10485:10:83",
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
                  "id": 29056,
                  "nodeType": "ExpressionStatement",
                  "src": "10478:17:83"
                },
                {
                  "expression": {
                    "id": 29059,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "10505:18:83",
                    "subExpression": {
                      "expression": {
                        "id": 29057,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28920,
                        "src": "10512:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      },
                      "id": 29058,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10517:6:83",
                      "memberName": "_depth",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27772,
                      "src": "10512:11:83",
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
                  "id": 29060,
                  "nodeType": "ExpressionStatement",
                  "src": "10505:18:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "checked_write",
            "nameLocation": "9444:13:83",
            "parameters": {
              "id": 28923,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28920,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "9477:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 29062,
                  "src": "9458:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 28919,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 28918,
                      "name": "StdStorage",
                      "nameLocations": [
                        "9458:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "9458:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "9458:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28922,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "9491:3:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 29062,
                  "src": "9483:11:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 28921,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "9483:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9457:38:83"
            },
            "returnParameters": {
              "id": 28924,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9505:0:83"
            },
            "scope": 29230,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29076,
            "nodeType": "FunctionDefinition",
            "src": "10536:131:83",
            "nodes": [],
            "body": {
              "id": 29075,
              "nodeType": "Block",
              "src": "10610:57:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 29072,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29065,
                        "src": "10655:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      ],
                      "expression": {
                        "id": 29070,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28669,
                        "src": "10627:14:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$28669_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 29071,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10642:12:83",
                      "memberName": "read_bytes32",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28483,
                      "src": "10627:27:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$27777_storage_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (struct StdStorage storage pointer) returns (bytes32)"
                      }
                    },
                    "id": 29073,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10627:33:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 29069,
                  "id": 29074,
                  "nodeType": "Return",
                  "src": "10620:40:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read_bytes32",
            "nameLocation": "10545:12:83",
            "parameters": {
              "id": 29066,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29065,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "10577:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 29076,
                  "src": "10558:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 29064,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 29063,
                      "name": "StdStorage",
                      "nameLocations": [
                        "10558:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "10558:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "10558:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10557:25:83"
            },
            "returnParameters": {
              "id": 29069,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29068,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29076,
                  "src": "10601:7:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 29067,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "10601:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10600:9:83"
            },
            "scope": 29230,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29090,
            "nodeType": "FunctionDefinition",
            "src": "10673:122:83",
            "nodes": [],
            "body": {
              "id": 29089,
              "nodeType": "Block",
              "src": "10741:54:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 29086,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29079,
                        "src": "10783:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      ],
                      "expression": {
                        "id": 29084,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28669,
                        "src": "10758:14:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$28669_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 29085,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10773:9:83",
                      "memberName": "read_bool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28514,
                      "src": "10758:24:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$27777_storage_ptr_$returns$_t_bool_$",
                        "typeString": "function (struct StdStorage storage pointer) returns (bool)"
                      }
                    },
                    "id": 29087,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10758:30:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 29083,
                  "id": 29088,
                  "nodeType": "Return",
                  "src": "10751:37:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read_bool",
            "nameLocation": "10682:9:83",
            "parameters": {
              "id": 29080,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29079,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "10711:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 29090,
                  "src": "10692:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 29078,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 29077,
                      "name": "StdStorage",
                      "nameLocations": [
                        "10692:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "10692:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "10692:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10691:25:83"
            },
            "returnParameters": {
              "id": 29083,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29082,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29090,
                  "src": "10735:4:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 29081,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "10735:4:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10734:6:83"
            },
            "scope": 29230,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29104,
            "nodeType": "FunctionDefinition",
            "src": "10801:131:83",
            "nodes": [],
            "body": {
              "id": 29103,
              "nodeType": "Block",
              "src": "10875:57:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 29100,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29093,
                        "src": "10920:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      ],
                      "expression": {
                        "id": 29098,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28669,
                        "src": "10892:14:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$28669_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 29099,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10907:12:83",
                      "memberName": "read_address",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28533,
                      "src": "10892:27:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$27777_storage_ptr_$returns$_t_address_$",
                        "typeString": "function (struct StdStorage storage pointer) returns (address)"
                      }
                    },
                    "id": 29101,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10892:33:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 29097,
                  "id": 29102,
                  "nodeType": "Return",
                  "src": "10885:40:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read_address",
            "nameLocation": "10810:12:83",
            "parameters": {
              "id": 29094,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29093,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "10842:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 29104,
                  "src": "10823:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 29092,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 29091,
                      "name": "StdStorage",
                      "nameLocations": [
                        "10823:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "10823:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "10823:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10822:25:83"
            },
            "returnParameters": {
              "id": 29097,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29096,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29104,
                  "src": "10866:7:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29095,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10866:7:83",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10865:9:83"
            },
            "scope": 29230,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29118,
            "nodeType": "FunctionDefinition",
            "src": "10938:125:83",
            "nodes": [],
            "body": {
              "id": 29117,
              "nodeType": "Block",
              "src": "11009:54:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 29114,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29107,
                        "src": "11051:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      ],
                      "expression": {
                        "id": 29112,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28669,
                        "src": "11026:14:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$28669_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 29113,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11041:9:83",
                      "memberName": "read_uint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28552,
                      "src": "11026:24:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$27777_storage_ptr_$returns$_t_uint256_$",
                        "typeString": "function (struct StdStorage storage pointer) returns (uint256)"
                      }
                    },
                    "id": 29115,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11026:30:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 29111,
                  "id": 29116,
                  "nodeType": "Return",
                  "src": "11019:37:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read_uint",
            "nameLocation": "10947:9:83",
            "parameters": {
              "id": 29108,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29107,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "10976:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 29118,
                  "src": "10957:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 29106,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 29105,
                      "name": "StdStorage",
                      "nameLocations": [
                        "10957:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "10957:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "10957:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10956:25:83"
            },
            "returnParameters": {
              "id": 29111,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29110,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29118,
                  "src": "11000:7:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29109,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11000:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10999:9:83"
            },
            "scope": 29230,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29132,
            "nodeType": "FunctionDefinition",
            "src": "11069:122:83",
            "nodes": [],
            "body": {
              "id": 29131,
              "nodeType": "Block",
              "src": "11138:53:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 29128,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29121,
                        "src": "11179:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                          "typeString": "struct StdStorage storage pointer"
                        }
                      ],
                      "expression": {
                        "id": 29126,
                        "name": "stdStorageSafe",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28669,
                        "src": "11155:14:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdStorageSafe_$28669_$",
                          "typeString": "type(library stdStorageSafe)"
                        }
                      },
                      "id": 29127,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11170:8:83",
                      "memberName": "read_int",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28571,
                      "src": "11155:23:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_StdStorage_$27777_storage_ptr_$returns$_t_int256_$",
                        "typeString": "function (struct StdStorage storage pointer) returns (int256)"
                      }
                    },
                    "id": 29129,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11155:29:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 29125,
                  "id": 29130,
                  "nodeType": "Return",
                  "src": "11148:36:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read_int",
            "nameLocation": "11078:8:83",
            "parameters": {
              "id": 29122,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29121,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "11106:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 29132,
                  "src": "11087:23:83",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                    "typeString": "struct StdStorage"
                  },
                  "typeName": {
                    "id": 29120,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 29119,
                      "name": "StdStorage",
                      "nameLocations": [
                        "11087:10:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 27777,
                      "src": "11087:10:83"
                    },
                    "referencedDeclaration": 27777,
                    "src": "11087:10:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StdStorage_$27777_storage_ptr",
                      "typeString": "struct StdStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11086:25:83"
            },
            "returnParameters": {
              "id": 29125,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29124,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29132,
                  "src": "11130:6:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 29123,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11130:6:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11129:8:83"
            },
            "scope": 29230,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29188,
            "nodeType": "FunctionDefinition",
            "src": "11248:304:83",
            "nodes": [],
            "body": {
              "id": 29187,
              "nodeType": "Block",
              "src": "11335:217:83",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    29142
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 29142,
                      "mutability": "mutable",
                      "name": "out",
                      "nameLocation": "11353:3:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 29187,
                      "src": "11345:11:83",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 29141,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "11345:7:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 29143,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11345:11:83"
                },
                {
                  "assignments": [
                    29145
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 29145,
                      "mutability": "mutable",
                      "name": "max",
                      "nameLocation": "11375:3:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 29187,
                      "src": "11367:11:83",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 29144,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11367:7:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 29154,
                  "initialValue": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 29149,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 29146,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 29134,
                          "src": "11381:1:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 29147,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11383:6:83",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "11381:8:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "hexValue": "3332",
                        "id": 29148,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "11392:2:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_32_by_1",
                          "typeString": "int_const 32"
                        },
                        "value": "32"
                      },
                      "src": "11381:13:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "expression": {
                        "id": 29151,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29134,
                        "src": "11402:1:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 29152,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11404:6:83",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "11402:8:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 29153,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "11381:29:83",
                    "trueExpression": {
                      "hexValue": "3332",
                      "id": 29150,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "11397:2:83",
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
                  "src": "11367:43:83"
                },
                {
                  "body": {
                    "id": 29183,
                    "nodeType": "Block",
                    "src": "11454:72:83",
                    "statements": [
                      {
                        "expression": {
                          "id": 29181,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 29165,
                            "name": "out",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29142,
                            "src": "11468:3:83",
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
                            "id": 29180,
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
                                  "id": 29174,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "baseExpression": {
                                      "id": 29168,
                                      "name": "b",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 29134,
                                      "src": "11483:1:83",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes memory"
                                      }
                                    },
                                    "id": 29172,
                                    "indexExpression": {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "id": 29171,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 29169,
                                        "name": "offset",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 29136,
                                        "src": "11485:6:83",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "+",
                                      "rightExpression": {
                                        "id": 29170,
                                        "name": "i",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 29156,
                                        "src": "11494:1:83",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "11485:10:83",
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
                                    "src": "11483:13:83",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes1",
                                      "typeString": "bytes1"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "&",
                                  "rightExpression": {
                                    "hexValue": "30784646",
                                    "id": 29173,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "11499:4:83",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_255_by_1",
                                      "typeString": "int_const 255"
                                    },
                                    "value": "0xFF"
                                  },
                                  "src": "11483:20:83",
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
                                "id": 29167,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "11475:7:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes32_$",
                                  "typeString": "type(bytes32)"
                                },
                                "typeName": {
                                  "id": 29166,
                                  "name": "bytes32",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "11475:7:83",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 29175,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "11475:29:83",
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
                                  "id": 29178,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 29176,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 29156,
                                    "src": "11509:1:83",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "hexValue": "38",
                                    "id": 29177,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "11513:1:83",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_8_by_1",
                                      "typeString": "int_const 8"
                                    },
                                    "value": "8"
                                  },
                                  "src": "11509:5:83",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "id": 29179,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "11508:7:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "11475:40:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "11468:47:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 29182,
                        "nodeType": "ExpressionStatement",
                        "src": "11468:47:83"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 29161,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 29159,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 29156,
                      "src": "11440:1:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 29160,
                      "name": "max",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 29145,
                      "src": "11444:3:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11440:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 29184,
                  "initializationExpression": {
                    "assignments": [
                      29156
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 29156,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "11433:1:83",
                        "nodeType": "VariableDeclaration",
                        "scope": 29184,
                        "src": "11425:9:83",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 29155,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "11425:7:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 29158,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 29157,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "11437:1:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "11425:13:83"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 29163,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "11449:3:83",
                      "subExpression": {
                        "id": 29162,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29156,
                        "src": "11449:1:83",
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
                    "id": 29164,
                    "nodeType": "ExpressionStatement",
                    "src": "11449:3:83"
                  },
                  "nodeType": "ForStatement",
                  "src": "11420:106:83"
                },
                {
                  "expression": {
                    "id": 29185,
                    "name": "out",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 29142,
                    "src": "11542:3:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 29140,
                  "id": 29186,
                  "nodeType": "Return",
                  "src": "11535:10:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "bytesToBytes32",
            "nameLocation": "11257:14:83",
            "parameters": {
              "id": 29137,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29134,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "11285:1:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 29188,
                  "src": "11272:14:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 29133,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "11272:5:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29136,
                  "mutability": "mutable",
                  "name": "offset",
                  "nameLocation": "11296:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 29188,
                  "src": "11288:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29135,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11288:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11271:32:83"
            },
            "returnParameters": {
              "id": 29140,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29139,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29188,
                  "src": "11326:7:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 29138,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "11326:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11325:9:83"
            },
            "scope": 29230,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 29229,
            "nodeType": "FunctionDefinition",
            "src": "11609:393:83",
            "nodes": [],
            "body": {
              "id": 29228,
              "nodeType": "Block",
              "src": "11682:320:83",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    29197
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 29197,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "11705:6:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 29228,
                      "src": "11692:19:83",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 29196,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "11692:5:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 29205,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 29203,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 29200,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29191,
                            "src": "11724:1:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                              "typeString": "bytes32[] memory"
                            }
                          },
                          "id": 29201,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "11726:6:83",
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "src": "11724:8:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "hexValue": "3332",
                          "id": 29202,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11735:2:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_32_by_1",
                            "typeString": "int_const 32"
                          },
                          "value": "32"
                        },
                        "src": "11724:13:83",
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
                      "id": 29199,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "11714:9:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (bytes memory)"
                      },
                      "typeName": {
                        "id": 29198,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "11718:5:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      }
                    },
                    "id": 29204,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11714:24:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11692:46:83"
                },
                {
                  "body": {
                    "id": 29224,
                    "nodeType": "Block",
                    "src": "11787:185:83",
                    "statements": [
                      {
                        "assignments": [
                          29218
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 29218,
                            "mutability": "mutable",
                            "name": "k",
                            "nameLocation": "11809:1:83",
                            "nodeType": "VariableDeclaration",
                            "scope": 29224,
                            "src": "11801:9:83",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 29217,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "11801:7:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 29222,
                        "initialValue": {
                          "baseExpression": {
                            "id": 29219,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29191,
                            "src": "11813:1:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                              "typeString": "bytes32[] memory"
                            }
                          },
                          "id": 29221,
                          "indexExpression": {
                            "id": 29220,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29207,
                            "src": "11815:1:83",
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
                          "src": "11813:4:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "11801:16:83"
                      },
                      {
                        "AST": {
                          "nodeType": "YulBlock",
                          "src": "11887:75:83",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "result",
                                        "nodeType": "YulIdentifier",
                                        "src": "11916:6:83"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "11928:2:83",
                                            "type": "",
                                            "value": "32"
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "11936:2:83",
                                                "type": "",
                                                "value": "32"
                                              },
                                              {
                                                "name": "i",
                                                "nodeType": "YulIdentifier",
                                                "src": "11940:1:83"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "mul",
                                              "nodeType": "YulIdentifier",
                                              "src": "11932:3:83"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "11932:10:83"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "11924:3:83"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "11924:19:83"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "11912:3:83"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "11912:32:83"
                                  },
                                  {
                                    "name": "k",
                                    "nodeType": "YulIdentifier",
                                    "src": "11946:1:83"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "11905:6:83"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "11905:43:83"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "11905:43:83"
                            }
                          ]
                        },
                        "documentation": "@solidity memory-safe-assembly",
                        "evmVersion": "paris",
                        "externalReferences": [
                          {
                            "declaration": 29207,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "11940:1:83",
                            "valueSize": 1
                          },
                          {
                            "declaration": 29218,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "11946:1:83",
                            "valueSize": 1
                          },
                          {
                            "declaration": 29197,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "11916:6:83",
                            "valueSize": 1
                          }
                        ],
                        "id": 29223,
                        "nodeType": "InlineAssembly",
                        "src": "11878:84:83"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 29213,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 29210,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 29207,
                      "src": "11768:1:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 29211,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29191,
                        "src": "11772:1:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                          "typeString": "bytes32[] memory"
                        }
                      },
                      "id": 29212,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11774:6:83",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "11772:8:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11768:12:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 29225,
                  "initializationExpression": {
                    "assignments": [
                      29207
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 29207,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "11761:1:83",
                        "nodeType": "VariableDeclaration",
                        "scope": 29225,
                        "src": "11753:9:83",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 29206,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "11753:7:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 29209,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 29208,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "11765:1:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "11753:13:83"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 29215,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "11782:3:83",
                      "subExpression": {
                        "id": 29214,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29207,
                        "src": "11782:1:83",
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
                    "id": 29216,
                    "nodeType": "ExpressionStatement",
                    "src": "11782:3:83"
                  },
                  "nodeType": "ForStatement",
                  "src": "11748:224:83"
                },
                {
                  "expression": {
                    "id": 29226,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 29197,
                    "src": "11989:6:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 29195,
                  "id": 29227,
                  "nodeType": "Return",
                  "src": "11982:13:83"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "flatten",
            "nameLocation": "11618:7:83",
            "parameters": {
              "id": 29192,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29191,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "11643:1:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 29229,
                  "src": "11626:18:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 29189,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "11626:7:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 29190,
                    "nodeType": "ArrayTypeName",
                    "src": "11626:9:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11625:20:83"
            },
            "returnParameters": {
              "id": 29195,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29194,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29229,
                  "src": "11668:12:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 29193,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "11668:5:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11667:14:83"
            },
            "scope": 29230,
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
          29230
        ],
        "name": "stdStorage",
        "nameLocation": "7347:10:83",
        "scope": 29231,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 83
} as const;
