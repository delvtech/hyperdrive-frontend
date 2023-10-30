{
  "abi": [
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_linkerCodeHash_",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "_factory_",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    }
  ],
  "bytecode": {
    "object": "0x60c0604052348015600f57600080fd5b506040516100d63803806100d6833981016040819052602c91603f565b6001600160a01b031660805260a052607a565b60008060408385031215605157600080fd5b825160208401519092506001600160a01b0381168114606f57600080fd5b809150509250929050565b60805160a051603f6100976000396000505060005050603f6000f3fe6080604052600080fdfea2646970667358221220d6b0ef687ccc93fd0c7fb83306375976d342479e777d97c50ad5e4d65f86b52364736f6c63430008130033",
    "sourceMap": "379:1638:41:-:0;;;1847:168;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;1944:20:41;;;1974:34;;379:1638;;14:351:165;93:6;101;154:2;142:9;133:7;129:23;125:32;122:52;;;170:1;167;160:12;122:52;193:16;;252:2;237:18;;231:25;193:16;;-1:-1:-1;;;;;;285:31:165;;275:42;;265:70;;331:1;328;321:12;265:70;354:5;344:15;;;14:351;;;;;:::o;:::-;379:1638:41;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x6080604052600080fdfea2646970667358221220d6b0ef687ccc93fd0c7fb83306375976d342479e777d97c50ad5e4d65f86b52364736f6c63430008130033",
    "sourceMap": "379:1638:41:-:0;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_linkerCodeHash_\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"_factory_\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"_factory_\":\"The factory which is used to deploy the linking contracts\",\"_linkerCodeHash_\":\"The hash of the erc20 linker contract deploy code\"}}},\"title\":\"MultiTokenStorage\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Initializes the MultiToken's storage.\"}},\"notice\":\"The MultiToken storage contract.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/token/MultiTokenStorage.sol\":\"MultiTokenStorage\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"contracts/src/token/MultiTokenStorage.sol\":{\"keccak256\":\"0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6\",\"dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj\"]}},\"version\":1}",
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
              "internalType": "bytes32",
              "name": "_linkerCodeHash_",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "_factory_",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "constructor": {
            "params": {
              "_factory_": "The factory which is used to deploy the linking contracts",
              "_linkerCodeHash_": "The hash of the erc20 linker contract deploy code"
            }
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "constructor": {
            "notice": "Initializes the MultiToken's storage."
          }
        },
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
        "contracts/src/token/MultiTokenStorage.sol": "MultiTokenStorage"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/token/MultiTokenStorage.sol": {
        "keccak256": "0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8",
        "urls": [
          "bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6",
          "dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/token/MultiTokenStorage.sol",
    "id": 13197,
    "exportedSymbols": {
      "MultiTokenStorage": [
        13196
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:1979:41",
    "nodes": [
      {
        "id": 13137,
        "nodeType": "PragmaDirective",
        "src": "39:23:41",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 13196,
        "nodeType": "ContractDefinition",
        "src": "379:1638:41",
        "nodes": [
          {
            "id": 13140,
            "nodeType": "VariableDeclaration",
            "src": "456:35:41",
            "nodes": [],
            "constant": false,
            "mutability": "immutable",
            "name": "_factory",
            "nameLocation": "483:8:41",
            "scope": 13196,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 13139,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "456:7:41",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13142,
            "nodeType": "VariableDeclaration",
            "src": "597:42:41",
            "nodes": [],
            "constant": false,
            "mutability": "immutable",
            "name": "_linkerCodeHash",
            "nameLocation": "624:15:41",
            "scope": 13196,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 13141,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "597:7:41",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13148,
            "nodeType": "VariableDeclaration",
            "src": "684:96:41",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_balanceOf",
            "nameLocation": "770:10:41",
            "scope": 13196,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
              "typeString": "mapping(uint256 => mapping(address => uint256))"
            },
            "typeName": {
              "id": 13147,
              "keyName": "tokenId",
              "keyNameLocation": "700:7:41",
              "keyType": {
                "id": 13143,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "692:7:41",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "684:68:41",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                "typeString": "mapping(uint256 => mapping(address => uint256))"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 13146,
                "keyName": "user",
                "keyNameLocation": "727:4:41",
                "keyType": {
                  "id": 13144,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "719:7:41",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "711:40:41",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueName": "balance",
                "valueNameLocation": "743:7:41",
                "valueType": {
                  "id": 13145,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "735:7:41",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13152,
            "nodeType": "VariableDeclaration",
            "src": "830:64:41",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_totalSupply",
            "nameLocation": "882:12:41",
            "scope": 13196,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 13151,
              "keyName": "tokenId",
              "keyNameLocation": "846:7:41",
              "keyType": {
                "id": 13149,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "838:7:41",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "830:42:41",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueName": "supply",
              "valueNameLocation": "865:6:41",
              "valueType": {
                "id": 13150,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "857:7:41",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13158,
            "nodeType": "VariableDeclaration",
            "src": "940:102:41",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_isApprovedForAll",
            "nameLocation": "1025:17:41",
            "scope": 13196,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
              "typeString": "mapping(address => mapping(address => bool))"
            },
            "typeName": {
              "id": 13157,
              "keyName": "from",
              "keyNameLocation": "956:4:41",
              "keyType": {
                "id": 13153,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "948:7:41",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "940:67:41",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                "typeString": "mapping(address => mapping(address => bool))"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 13156,
                "keyName": "caller",
                "keyNameLocation": "980:6:41",
                "keyType": {
                  "id": 13154,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "972:7:41",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "964:42:41",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "valueName": "isApproved",
                "valueNameLocation": "995:10:41",
                "valueType": {
                  "id": 13155,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "990:4:41",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13166,
            "nodeType": "VariableDeclaration",
            "src": "1176:132:41",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_perTokenApprovals",
            "nameLocation": "1290:18:41",
            "scope": 13196,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_$",
              "typeString": "mapping(uint256 => mapping(address => mapping(address => uint256)))"
            },
            "typeName": {
              "id": 13165,
              "keyName": "tokenId",
              "keyNameLocation": "1192:7:41",
              "keyType": {
                "id": 13159,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1184:7:41",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "1176:96:41",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_$",
                "typeString": "mapping(uint256 => mapping(address => mapping(address => uint256)))"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 13164,
                "keyName": "from",
                "keyNameLocation": "1219:4:41",
                "keyType": {
                  "id": 13160,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1211:7:41",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "1203:68:41",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                  "typeString": "mapping(address => mapping(address => uint256))"
                },
                "valueName": "",
                "valueNameLocation": "-1:-1:-1",
                "valueType": {
                  "id": 13163,
                  "keyName": "caller",
                  "keyNameLocation": "1243:6:41",
                  "keyType": {
                    "id": 13161,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1235:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "1227:43:41",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                    "typeString": "mapping(address => uint256)"
                  },
                  "valueName": "approved",
                  "valueNameLocation": "1261:8:41",
                  "valueType": {
                    "id": 13162,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1253:7:41",
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
            "id": 13170,
            "nodeType": "VariableDeclaration",
            "src": "1381:54:41",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_name",
            "nameLocation": "1430:5:41",
            "scope": 13196,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
              "typeString": "mapping(uint256 => string)"
            },
            "typeName": {
              "id": 13169,
              "keyName": "tokenId",
              "keyNameLocation": "1397:7:41",
              "keyType": {
                "id": 13167,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1389:7:41",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "1381:39:41",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                "typeString": "mapping(uint256 => string)"
              },
              "valueName": "name",
              "valueNameLocation": "1415:4:41",
              "valueType": {
                "id": 13168,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "1408:6:41",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13174,
            "nodeType": "VariableDeclaration",
            "src": "1441:58:41",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_symbol",
            "nameLocation": "1492:7:41",
            "scope": 13196,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
              "typeString": "mapping(uint256 => string)"
            },
            "typeName": {
              "id": 13173,
              "keyName": "tokenId",
              "keyNameLocation": "1457:7:41",
              "keyType": {
                "id": 13171,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1449:7:41",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "1441:41:41",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                "typeString": "mapping(uint256 => string)"
              },
              "valueName": "symbol",
              "valueNameLocation": "1475:6:41",
              "valueType": {
                "id": 13172,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "1468:6:41",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13178,
            "nodeType": "VariableDeclaration",
            "src": "1566:55:41",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_nonces",
            "nameLocation": "1614:7:41",
            "scope": 13196,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 13177,
              "keyName": "user",
              "keyNameLocation": "1582:4:41",
              "keyType": {
                "id": 13175,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1574:7:41",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1566:38:41",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueName": "nonce",
              "valueNameLocation": "1598:5:41",
              "valueType": {
                "id": 13176,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1590:7:41",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13195,
            "nodeType": "FunctionDefinition",
            "src": "1847:168:41",
            "nodes": [],
            "body": {
              "id": 13194,
              "nodeType": "Block",
              "src": "1904:111:41",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 13188,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 13186,
                      "name": "_factory",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13140,
                      "src": "1944:8:41",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 13187,
                      "name": "_factory_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13183,
                      "src": "1955:9:41",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1944:20:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 13189,
                  "nodeType": "ExpressionStatement",
                  "src": "1944:20:41"
                },
                {
                  "expression": {
                    "id": 13192,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 13190,
                      "name": "_linkerCodeHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13142,
                      "src": "1974:15:41",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 13191,
                      "name": "_linkerCodeHash_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13181,
                      "src": "1992:16:41",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "1974:34:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 13193,
                  "nodeType": "ExpressionStatement",
                  "src": "1974:34:41"
                }
              ]
            },
            "documentation": {
              "id": 13179,
              "nodeType": "StructuredDocumentation",
              "src": "1628:214:41",
              "text": "@notice Initializes the MultiToken's storage.\n @param _linkerCodeHash_ The hash of the erc20 linker contract deploy code\n @param _factory_ The factory which is used to deploy the linking contracts"
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 13184,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13181,
                  "mutability": "mutable",
                  "name": "_linkerCodeHash_",
                  "nameLocation": "1867:16:41",
                  "nodeType": "VariableDeclaration",
                  "scope": 13195,
                  "src": "1859:24:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 13180,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1859:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13183,
                  "mutability": "mutable",
                  "name": "_factory_",
                  "nameLocation": "1893:9:41",
                  "nodeType": "VariableDeclaration",
                  "scope": 13195,
                  "src": "1885:17:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13182,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1885:7:41",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1858:45:41"
            },
            "returnParameters": {
              "id": 13185,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1904:0:41"
            },
            "scope": 13196,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "MultiTokenStorage",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 13138,
          "nodeType": "StructuredDocumentation",
          "src": "64:315:41",
          "text": "@author DELV\n @title MultiTokenStorage\n @notice The MultiToken storage contract.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          13196
        ],
        "name": "MultiTokenStorage",
        "nameLocation": "388:17:41",
        "scope": 13197,
        "usedErrors": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 41
}