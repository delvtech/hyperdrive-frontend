export const EtchingVault = 
{
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_baseToken_",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_sharePrice_",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "asset",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "convertToAssets",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": {
    "object": "0x60c060405234801561001057600080fd5b5060405161019e38038061019e83398101604081905261002f91610045565b6001600160a01b0390911660805260a05261007f565b6000806040838503121561005857600080fd5b82516001600160a01b038116811461006f57600080fd5b6020939093015192949293505050565b60805160a05160fe6100a060003960006045015260006087015260fe6000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806307a2d13a14603757806338d52e0f14607a575b600080fd5b6067604236600460b0565b507f000000000000000000000000000000000000000000000000000000000000000090565b6040519081526020015b60405180910390f35b6040516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681526020016071565b60006020828403121560c157600080fd5b503591905056fea264697066735822122076602c4fa7f6120af36dd27266575833c02ef051128a4ffb223db46c7288254464736f6c63430008130033",
    "sourceMap": "511:446:60:-:0;;;627:132;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;692:24:60;;;;;726:26;;511:446;;14:351:161;93:6;101;154:2;142:9;133:7;129:23;125:32;122:52;;;170:1;167;160:12;122:52;196:16;;-1:-1:-1;;;;;241:31:161;;231:42;;221:70;;287:1;284;277:12;221:70;355:2;340:18;;;;334:25;310:5;;334:25;;-1:-1:-1;;;14:351:161:o;:::-;511:446:60;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x6080604052348015600f57600080fd5b506004361060325760003560e01c806307a2d13a14603757806338d52e0f14607a575b600080fd5b6067604236600460b0565b507f000000000000000000000000000000000000000000000000000000000000000090565b6040519081526020015b60405180910390f35b6040516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681526020016071565b60006020828403121560c157600080fd5b503591905056fea264697066735822122076602c4fa7f6120af36dd27266575833c02ef051128a4ffb223db46c7288254464736f6c63430008130033",
    "sourceMap": "511:446:60:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;854:101;;;;;;:::i;:::-;-1:-1:-1;937:11:60;;854:101;;;;345:25:161;;;333:2;318:18;854:101:60;;;;;;;;765:83;;;-1:-1:-1;;;;;831:10:60;545:32:161;527:51;;515:2;500:18;765:83:60;381:203:161;14:180;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:161;;14:180;-1:-1:-1;14:180:161:o",
    "linkReferences": {},
    "immutableReferences": {
      "16265": [
        {
          "start": 135,
          "length": 32
        }
      ],
      "16267": [
        {
          "start": 69,
          "length": 32
        }
      ]
    }
  },
  "methodIdentifiers": {
    "asset()": "38d52e0f",
    "convertToAssets(uint256)": "07a2d13a"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_baseToken_\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_sharePrice_\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"asset\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"convertToAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"details\":\"This is a helper contract that is etched onto a `MockERC4626` vault      as one of the intermediate steps in the \\\"etching\\\" process in the Rust      debugging tools.\",\"kind\":\"dev\",\"methods\":{},\"title\":\"EtchingVault\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/EtchingVault.sol\":\"EtchingVault\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/test/EtchingVault.sol\":{\"keccak256\":\"0xa0656cdeead131dcba3688200253b2547d710adca67a21dfe2b4802e47226e45\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7a9f41b8929ae5d4a9cf9325ed3b821941dee50ed4b42c56bccfd61ea4d535fd\",\"dweb:/ipfs/QmZf7s2ziihnuN33in7A4bbKJposzFs9tbCoyZE6oiNdAx\"]}},\"version\":1}",
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
              "internalType": "address",
              "name": "_baseToken_",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_sharePrice_",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "asset",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "convertToAssets",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        }
      ],
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
        "contracts/test/EtchingVault.sol": "EtchingVault"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/test/EtchingVault.sol": {
        "keccak256": "0xa0656cdeead131dcba3688200253b2547d710adca67a21dfe2b4802e47226e45",
        "urls": [
          "bzz-raw://7a9f41b8929ae5d4a9cf9325ed3b821941dee50ed4b42c56bccfd61ea4d535fd",
          "dweb:/ipfs/QmZf7s2ziihnuN33in7A4bbKJposzFs9tbCoyZE6oiNdAx"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/test/EtchingVault.sol",
    "id": 16303,
    "exportedSymbols": {
      "EtchingVault": [
        16302
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:919:60",
    "nodes": [
      {
        "id": 16262,
        "nodeType": "PragmaDirective",
        "src": "39:23:60",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 16302,
        "nodeType": "ContractDefinition",
        "src": "511:446:60",
        "nodes": [
          {
            "id": 16265,
            "nodeType": "VariableDeclaration",
            "src": "539:37:60",
            "nodes": [],
            "constant": false,
            "mutability": "immutable",
            "name": "_baseToken",
            "nameLocation": "566:10:60",
            "scope": 16302,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 16264,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "539:7:60",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 16267,
            "nodeType": "VariableDeclaration",
            "src": "582:38:60",
            "nodes": [],
            "constant": false,
            "mutability": "immutable",
            "name": "_sharePrice",
            "nameLocation": "609:11:60",
            "scope": 16302,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 16266,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "582:7:60",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 16283,
            "nodeType": "FunctionDefinition",
            "src": "627:132:60",
            "nodes": [],
            "body": {
              "id": 16282,
              "nodeType": "Block",
              "src": "682:77:60",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 16276,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 16274,
                      "name": "_baseToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16265,
                      "src": "692:10:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 16275,
                      "name": "_baseToken_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16269,
                      "src": "705:11:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "692:24:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 16277,
                  "nodeType": "ExpressionStatement",
                  "src": "692:24:60"
                },
                {
                  "expression": {
                    "id": 16280,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 16278,
                      "name": "_sharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16267,
                      "src": "726:11:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 16279,
                      "name": "_sharePrice_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16271,
                      "src": "740:12:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "726:26:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 16281,
                  "nodeType": "ExpressionStatement",
                  "src": "726:26:60"
                }
              ]
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 16272,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16269,
                  "mutability": "mutable",
                  "name": "_baseToken_",
                  "nameLocation": "647:11:60",
                  "nodeType": "VariableDeclaration",
                  "scope": 16283,
                  "src": "639:19:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16268,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "639:7:60",
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
                  "id": 16271,
                  "mutability": "mutable",
                  "name": "_sharePrice_",
                  "nameLocation": "668:12:60",
                  "nodeType": "VariableDeclaration",
                  "scope": 16283,
                  "src": "660:20:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16270,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "660:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "638:43:60"
            },
            "returnParameters": {
              "id": 16273,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "682:0:60"
            },
            "scope": 16302,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 16291,
            "nodeType": "FunctionDefinition",
            "src": "765:83:60",
            "nodes": [],
            "body": {
              "id": 16290,
              "nodeType": "Block",
              "src": "814:34:60",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 16288,
                    "name": "_baseToken",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 16265,
                    "src": "831:10:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 16287,
                  "id": 16289,
                  "nodeType": "Return",
                  "src": "824:17:60"
                }
              ]
            },
            "functionSelector": "38d52e0f",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "asset",
            "nameLocation": "774:5:60",
            "parameters": {
              "id": 16284,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "779:2:60"
            },
            "returnParameters": {
              "id": 16287,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16286,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 16291,
                  "src": "805:7:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16285,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "805:7:60",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "804:9:60"
            },
            "scope": 16302,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 16301,
            "nodeType": "FunctionDefinition",
            "src": "854:101:60",
            "nodes": [],
            "body": {
              "id": 16300,
              "nodeType": "Block",
              "src": "920:35:60",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 16298,
                    "name": "_sharePrice",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 16267,
                    "src": "937:11:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 16297,
                  "id": 16299,
                  "nodeType": "Return",
                  "src": "930:18:60"
                }
              ]
            },
            "functionSelector": "07a2d13a",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "convertToAssets",
            "nameLocation": "863:15:60",
            "parameters": {
              "id": 16294,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16293,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 16301,
                  "src": "879:7:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16292,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "879:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "878:9:60"
            },
            "returnParameters": {
              "id": 16297,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16296,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 16301,
                  "src": "911:7:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16295,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "911:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "910:9:60"
            },
            "scope": 16302,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "EtchingVault",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 16263,
          "nodeType": "StructuredDocumentation",
          "src": "64:447:60",
          "text": "@author DELV\n @title EtchingVault\n @dev This is a helper contract that is etched onto a `MockERC4626` vault\n      as one of the intermediate steps in the \"etching\" process in the Rust\n      debugging tools.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          16302
        ],
        "name": "EtchingVault",
        "nameLocation": "520:12:60",
        "scope": 16303,
        "usedErrors": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 60
} as const;
