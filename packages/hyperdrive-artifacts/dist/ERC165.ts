{
  "abi": [
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": {
    "object": "0x",
    "sourceMap": "",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x",
    "sourceMap": "",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "supportsInterface(bytes4)": "01ffc9a7"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Implementation of the {IERC165} interface. Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check for the additional interface id that will be supported. For example: ```solidity function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId); } ``` Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\",\"kind\":\"dev\",\"methods\":{\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol\":\"ERC165\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d\",\"dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]}},\"version\":1}",
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
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "supportsInterface(bytes4)": {
            "details": "See {IERC165-supportsInterface}."
          }
        },
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
        "lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol": "ERC165"
      },
      "libraries": {}
    },
    "sources": {
      "lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol": {
        "keccak256": "0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b",
        "urls": [
          "bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d",
          "dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol": {
        "keccak256": "0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1",
        "urls": [
          "bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f",
          "dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol",
    "id": 60269,
    "exportedSymbols": {
      "ERC165": [
        60268
      ],
      "IERC165": [
        60280
      ]
    },
    "nodeType": "SourceUnit",
    "src": "99:888:86",
    "nodes": [
      {
        "id": 60246,
        "nodeType": "PragmaDirective",
        "src": "99:23:86",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 60247,
        "nodeType": "ImportDirective",
        "src": "124:23:86",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol",
        "file": "./IERC165.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 60269,
        "sourceUnit": 60281,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 60268,
        "nodeType": "ContractDefinition",
        "src": "726:260:86",
        "nodes": [
          {
            "id": 60267,
            "nodeType": "FunctionDefinition",
            "src": "829:155:86",
            "nodes": [],
            "body": {
              "id": 60266,
              "nodeType": "Block",
              "src": "920:64:86",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 60264,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 60259,
                      "name": "interfaceId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60253,
                      "src": "937:11:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 60261,
                            "name": "IERC165",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60280,
                            "src": "957:7:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_IERC165_$60280_$",
                              "typeString": "type(contract IERC165)"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_contract$_IERC165_$60280_$",
                              "typeString": "type(contract IERC165)"
                            }
                          ],
                          "id": 60260,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "952:4:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 60262,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "952:13:86",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_contract$_IERC165_$60280",
                          "typeString": "type(contract IERC165)"
                        }
                      },
                      "id": 60263,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "966:11:86",
                      "memberName": "interfaceId",
                      "nodeType": "MemberAccess",
                      "src": "952:25:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "937:40:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 60258,
                  "id": 60265,
                  "nodeType": "Return",
                  "src": "930:47:86"
                }
              ]
            },
            "baseFunctions": [
              60279
            ],
            "documentation": {
              "id": 60251,
              "nodeType": "StructuredDocumentation",
              "src": "768:56:86",
              "text": " @dev See {IERC165-supportsInterface}."
            },
            "functionSelector": "01ffc9a7",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "supportsInterface",
            "nameLocation": "838:17:86",
            "overrides": {
              "id": 60255,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "896:8:86"
            },
            "parameters": {
              "id": 60254,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60253,
                  "mutability": "mutable",
                  "name": "interfaceId",
                  "nameLocation": "863:11:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 60267,
                  "src": "856:18:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 60252,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "856:6:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "855:20:86"
            },
            "returnParameters": {
              "id": 60258,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60257,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 60267,
                  "src": "914:4:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 60256,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "914:4:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "913:6:86"
            },
            "scope": 60268,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 60249,
              "name": "IERC165",
              "nameLocations": [
                "754:7:86"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 60280,
              "src": "754:7:86"
            },
            "id": 60250,
            "nodeType": "InheritanceSpecifier",
            "src": "754:7:86"
          }
        ],
        "canonicalName": "ERC165",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 60248,
          "nodeType": "StructuredDocumentation",
          "src": "149:576:86",
          "text": " @dev Implementation of the {IERC165} interface.\n Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\n for the additional interface id that will be supported. For example:\n ```solidity\n function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\n }\n ```\n Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          60268,
          60280
        ],
        "name": "ERC165",
        "nameLocation": "744:6:86",
        "scope": 60269,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 86
}