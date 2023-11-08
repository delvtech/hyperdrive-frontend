export const MultiTokenStorage = 
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
    "object": "0x60c0604052348015600f57600080fd5b506040516100d63803806100d6833981016040819052602c91603f565b6001600160a01b031660805260a052607a565b60008060408385031215605157600080fd5b825160208401519092506001600160a01b0381168114606f57600080fd5b809150509250929050565b60805160a051603f6100976000396000505060005050603f6000f3fe6080604052600080fdfea2646970667358221220520c21d5cfd5ddf8c4519891694806834e2eed2b590a62a5569262cd519bf2a264736f6c63430008130033",
    "sourceMap": "379:1638:42:-:0;;;1847:168;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;1944:20:42;;;1974:34;;379:1638;;14:351:167;93:6;101;154:2;142:9;133:7;129:23;125:32;122:52;;;170:1;167;160:12;122:52;193:16;;252:2;237:18;;231:25;193:16;;-1:-1:-1;;;;;;285:31:167;;275:42;;265:70;;331:1;328;321:12;265:70;354:5;344:15;;;14:351;;;;;:::o;:::-;379:1638:42;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x6080604052600080fdfea2646970667358221220520c21d5cfd5ddf8c4519891694806834e2eed2b590a62a5569262cd519bf2a264736f6c63430008130033",
    "sourceMap": "379:1638:42:-:0;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_linkerCodeHash_\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"_factory_\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"_factory_\":\"The factory which is used to deploy the linking contracts\",\"_linkerCodeHash_\":\"The hash of the erc20 linker contract deploy code\"}}},\"title\":\"MultiTokenStorage\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Initializes the MultiToken's storage.\"}},\"notice\":\"The MultiToken storage contract.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/token/MultiTokenStorage.sol\":\"MultiTokenStorage\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/token/MultiTokenStorage.sol\":{\"keccak256\":\"0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6\",\"dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj\"]}},\"version\":1}",
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
    "id": 12545,
    "exportedSymbols": {
      "MultiTokenStorage": [
        12544
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:1979:42",
    "nodes": [
      {
        "id": 12485,
        "nodeType": "PragmaDirective",
        "src": "39:23:42",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 12544,
        "nodeType": "ContractDefinition",
        "src": "379:1638:42",
        "nodes": [
          {
            "id": 12488,
            "nodeType": "VariableDeclaration",
            "src": "456:35:42",
            "nodes": [],
            "constant": false,
            "mutability": "immutable",
            "name": "_factory",
            "nameLocation": "483:8:42",
            "scope": 12544,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 12487,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "456:7:42",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 12490,
            "nodeType": "VariableDeclaration",
            "src": "597:42:42",
            "nodes": [],
            "constant": false,
            "mutability": "immutable",
            "name": "_linkerCodeHash",
            "nameLocation": "624:15:42",
            "scope": 12544,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 12489,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "597:7:42",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 12496,
            "nodeType": "VariableDeclaration",
            "src": "684:96:42",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_balanceOf",
            "nameLocation": "770:10:42",
            "scope": 12544,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
              "typeString": "mapping(uint256 => mapping(address => uint256))"
            },
            "typeName": {
              "id": 12495,
              "keyName": "tokenId",
              "keyNameLocation": "700:7:42",
              "keyType": {
                "id": 12491,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "692:7:42",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "684:68:42",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                "typeString": "mapping(uint256 => mapping(address => uint256))"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 12494,
                "keyName": "user",
                "keyNameLocation": "727:4:42",
                "keyType": {
                  "id": 12492,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "719:7:42",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "711:40:42",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueName": "balance",
                "valueNameLocation": "743:7:42",
                "valueType": {
                  "id": 12493,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "735:7:42",
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
            "id": 12500,
            "nodeType": "VariableDeclaration",
            "src": "830:64:42",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_totalSupply",
            "nameLocation": "882:12:42",
            "scope": 12544,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 12499,
              "keyName": "tokenId",
              "keyNameLocation": "846:7:42",
              "keyType": {
                "id": 12497,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "838:7:42",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "830:42:42",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueName": "supply",
              "valueNameLocation": "865:6:42",
              "valueType": {
                "id": 12498,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "857:7:42",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 12506,
            "nodeType": "VariableDeclaration",
            "src": "940:102:42",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_isApprovedForAll",
            "nameLocation": "1025:17:42",
            "scope": 12544,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
              "typeString": "mapping(address => mapping(address => bool))"
            },
            "typeName": {
              "id": 12505,
              "keyName": "from",
              "keyNameLocation": "956:4:42",
              "keyType": {
                "id": 12501,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "948:7:42",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "940:67:42",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                "typeString": "mapping(address => mapping(address => bool))"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 12504,
                "keyName": "caller",
                "keyNameLocation": "980:6:42",
                "keyType": {
                  "id": 12502,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "972:7:42",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "964:42:42",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "valueName": "isApproved",
                "valueNameLocation": "995:10:42",
                "valueType": {
                  "id": 12503,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "990:4:42",
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
            "id": 12514,
            "nodeType": "VariableDeclaration",
            "src": "1176:132:42",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_perTokenApprovals",
            "nameLocation": "1290:18:42",
            "scope": 12544,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_$",
              "typeString": "mapping(uint256 => mapping(address => mapping(address => uint256)))"
            },
            "typeName": {
              "id": 12513,
              "keyName": "tokenId",
              "keyNameLocation": "1192:7:42",
              "keyType": {
                "id": 12507,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1184:7:42",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "1176:96:42",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_$",
                "typeString": "mapping(uint256 => mapping(address => mapping(address => uint256)))"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 12512,
                "keyName": "from",
                "keyNameLocation": "1219:4:42",
                "keyType": {
                  "id": 12508,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1211:7:42",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "1203:68:42",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                  "typeString": "mapping(address => mapping(address => uint256))"
                },
                "valueName": "",
                "valueNameLocation": "-1:-1:-1",
                "valueType": {
                  "id": 12511,
                  "keyName": "caller",
                  "keyNameLocation": "1243:6:42",
                  "keyType": {
                    "id": 12509,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1235:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "1227:43:42",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                    "typeString": "mapping(address => uint256)"
                  },
                  "valueName": "approved",
                  "valueNameLocation": "1261:8:42",
                  "valueType": {
                    "id": 12510,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1253:7:42",
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
            "id": 12518,
            "nodeType": "VariableDeclaration",
            "src": "1381:54:42",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_name",
            "nameLocation": "1430:5:42",
            "scope": 12544,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
              "typeString": "mapping(uint256 => string)"
            },
            "typeName": {
              "id": 12517,
              "keyName": "tokenId",
              "keyNameLocation": "1397:7:42",
              "keyType": {
                "id": 12515,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1389:7:42",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "1381:39:42",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                "typeString": "mapping(uint256 => string)"
              },
              "valueName": "name",
              "valueNameLocation": "1415:4:42",
              "valueType": {
                "id": 12516,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "1408:6:42",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 12522,
            "nodeType": "VariableDeclaration",
            "src": "1441:58:42",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_symbol",
            "nameLocation": "1492:7:42",
            "scope": 12544,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
              "typeString": "mapping(uint256 => string)"
            },
            "typeName": {
              "id": 12521,
              "keyName": "tokenId",
              "keyNameLocation": "1457:7:42",
              "keyType": {
                "id": 12519,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1449:7:42",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "1441:41:42",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                "typeString": "mapping(uint256 => string)"
              },
              "valueName": "symbol",
              "valueNameLocation": "1475:6:42",
              "valueType": {
                "id": 12520,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "1468:6:42",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 12526,
            "nodeType": "VariableDeclaration",
            "src": "1566:55:42",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_nonces",
            "nameLocation": "1614:7:42",
            "scope": 12544,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 12525,
              "keyName": "user",
              "keyNameLocation": "1582:4:42",
              "keyType": {
                "id": 12523,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1574:7:42",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1566:38:42",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueName": "nonce",
              "valueNameLocation": "1598:5:42",
              "valueType": {
                "id": 12524,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1590:7:42",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 12543,
            "nodeType": "FunctionDefinition",
            "src": "1847:168:42",
            "nodes": [],
            "body": {
              "id": 12542,
              "nodeType": "Block",
              "src": "1904:111:42",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 12536,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 12534,
                      "name": "_factory",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12488,
                      "src": "1944:8:42",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 12535,
                      "name": "_factory_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12531,
                      "src": "1955:9:42",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1944:20:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 12537,
                  "nodeType": "ExpressionStatement",
                  "src": "1944:20:42"
                },
                {
                  "expression": {
                    "id": 12540,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 12538,
                      "name": "_linkerCodeHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12490,
                      "src": "1974:15:42",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 12539,
                      "name": "_linkerCodeHash_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12529,
                      "src": "1992:16:42",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "1974:34:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 12541,
                  "nodeType": "ExpressionStatement",
                  "src": "1974:34:42"
                }
              ]
            },
            "documentation": {
              "id": 12527,
              "nodeType": "StructuredDocumentation",
              "src": "1628:214:42",
              "text": "@notice Initializes the MultiToken's storage.\n @param _linkerCodeHash_ The hash of the erc20 linker contract deploy code\n @param _factory_ The factory which is used to deploy the linking contracts"
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 12532,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12529,
                  "mutability": "mutable",
                  "name": "_linkerCodeHash_",
                  "nameLocation": "1867:16:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 12543,
                  "src": "1859:24:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 12528,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1859:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 12531,
                  "mutability": "mutable",
                  "name": "_factory_",
                  "nameLocation": "1893:9:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 12543,
                  "src": "1885:17:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12530,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1885:7:42",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1858:45:42"
            },
            "returnParameters": {
              "id": 12533,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1904:0:42"
            },
            "scope": 12544,
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
          "id": 12486,
          "nodeType": "StructuredDocumentation",
          "src": "64:315:42",
          "text": "@author DELV\n @title MultiTokenStorage\n @notice The MultiToken storage contract.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          12544
        ],
        "name": "MultiTokenStorage",
        "nameLocation": "388:17:42",
        "scope": 12545,
        "usedErrors": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 42
} as const;
