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
    "object": "0x60c060405234801561001057600080fd5b5060405161019e38038061019e83398101604081905261002f91610045565b6001600160a01b0390911660805260a05261007f565b6000806040838503121561005857600080fd5b82516001600160a01b038116811461006f57600080fd5b6020939093015192949293505050565b60805160a05160fe6100a060003960006045015260006087015260fe6000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806307a2d13a14603757806338d52e0f14607a575b600080fd5b6067604236600460b0565b507f000000000000000000000000000000000000000000000000000000000000000090565b6040519081526020015b60405180910390f35b6040516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681526020016071565b60006020828403121560c157600080fd5b503591905056fea26469706673582212205a5551e53c3bb004b92d39a637058ece50e01717f6ad0c9ce30e54b02e0f838564736f6c63430008130033",
    "sourceMap": "511:446:44:-:0;;;627:132;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;692:24:44;;;;;726:26;;511:446;;14:351:167;93:6;101;154:2;142:9;133:7;129:23;125:32;122:52;;;170:1;167;160:12;122:52;196:16;;-1:-1:-1;;;;;241:31:167;;231:42;;221:70;;287:1;284;277:12;221:70;355:2;340:18;;;;334:25;310:5;;334:25;;-1:-1:-1;;;14:351:167:o;:::-;511:446:44;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x6080604052348015600f57600080fd5b506004361060325760003560e01c806307a2d13a14603757806338d52e0f14607a575b600080fd5b6067604236600460b0565b507f000000000000000000000000000000000000000000000000000000000000000090565b6040519081526020015b60405180910390f35b6040516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681526020016071565b60006020828403121560c157600080fd5b503591905056fea26469706673582212205a5551e53c3bb004b92d39a637058ece50e01717f6ad0c9ce30e54b02e0f838564736f6c63430008130033",
    "sourceMap": "511:446:44:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;854:101;;;;;;:::i;:::-;-1:-1:-1;937:11:44;;854:101;;;;345:25:167;;;333:2;318:18;854:101:44;;;;;;;;765:83;;;-1:-1:-1;;;;;831:10:44;545:32:167;527:51;;515:2;500:18;765:83:44;381:203:167;14:180;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:167;;14:180;-1:-1:-1;14:180:167:o",
    "linkReferences": {},
    "immutableReferences": {
      "12674": [
        {
          "start": 135,
          "length": 32
        }
      ],
      "12676": [
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_baseToken_\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_sharePrice_\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"asset\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"convertToAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"details\":\"This is a helper contract that is etched onto a `MockERC4626` vault      as one of the intermediate steps in the \\\"etching\\\" process in the Rust      debugging tools.\",\"kind\":\"dev\",\"methods\":{},\"title\":\"EtchingVault\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/EtchingVault.sol\":\"EtchingVault\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/test/EtchingVault.sol\":{\"keccak256\":\"0xa0656cdeead131dcba3688200253b2547d710adca67a21dfe2b4802e47226e45\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7a9f41b8929ae5d4a9cf9325ed3b821941dee50ed4b42c56bccfd61ea4d535fd\",\"dweb:/ipfs/QmZf7s2ziihnuN33in7A4bbKJposzFs9tbCoyZE6oiNdAx\"]}},\"version\":1}",
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
    "id": 12712,
    "exportedSymbols": {
      "EtchingVault": [
        12711
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:919:44",
    "nodes": [
      {
        "id": 12671,
        "nodeType": "PragmaDirective",
        "src": "39:23:44",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 12711,
        "nodeType": "ContractDefinition",
        "src": "511:446:44",
        "nodes": [
          {
            "id": 12674,
            "nodeType": "VariableDeclaration",
            "src": "539:37:44",
            "nodes": [],
            "constant": false,
            "mutability": "immutable",
            "name": "_baseToken",
            "nameLocation": "566:10:44",
            "scope": 12711,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 12673,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "539:7:44",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 12676,
            "nodeType": "VariableDeclaration",
            "src": "582:38:44",
            "nodes": [],
            "constant": false,
            "mutability": "immutable",
            "name": "_sharePrice",
            "nameLocation": "609:11:44",
            "scope": 12711,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 12675,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "582:7:44",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 12692,
            "nodeType": "FunctionDefinition",
            "src": "627:132:44",
            "nodes": [],
            "body": {
              "id": 12691,
              "nodeType": "Block",
              "src": "682:77:44",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 12685,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 12683,
                      "name": "_baseToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12674,
                      "src": "692:10:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 12684,
                      "name": "_baseToken_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12678,
                      "src": "705:11:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "692:24:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 12686,
                  "nodeType": "ExpressionStatement",
                  "src": "692:24:44"
                },
                {
                  "expression": {
                    "id": 12689,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 12687,
                      "name": "_sharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12676,
                      "src": "726:11:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 12688,
                      "name": "_sharePrice_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12680,
                      "src": "740:12:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "726:26:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 12690,
                  "nodeType": "ExpressionStatement",
                  "src": "726:26:44"
                }
              ]
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 12681,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12678,
                  "mutability": "mutable",
                  "name": "_baseToken_",
                  "nameLocation": "647:11:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 12692,
                  "src": "639:19:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12677,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "639:7:44",
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
                  "id": 12680,
                  "mutability": "mutable",
                  "name": "_sharePrice_",
                  "nameLocation": "668:12:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 12692,
                  "src": "660:20:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12679,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "660:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "638:43:44"
            },
            "returnParameters": {
              "id": 12682,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "682:0:44"
            },
            "scope": 12711,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 12700,
            "nodeType": "FunctionDefinition",
            "src": "765:83:44",
            "nodes": [],
            "body": {
              "id": 12699,
              "nodeType": "Block",
              "src": "814:34:44",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 12697,
                    "name": "_baseToken",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 12674,
                    "src": "831:10:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 12696,
                  "id": 12698,
                  "nodeType": "Return",
                  "src": "824:17:44"
                }
              ]
            },
            "functionSelector": "38d52e0f",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "asset",
            "nameLocation": "774:5:44",
            "parameters": {
              "id": 12693,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "779:2:44"
            },
            "returnParameters": {
              "id": 12696,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12695,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 12700,
                  "src": "805:7:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12694,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "805:7:44",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "804:9:44"
            },
            "scope": 12711,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 12710,
            "nodeType": "FunctionDefinition",
            "src": "854:101:44",
            "nodes": [],
            "body": {
              "id": 12709,
              "nodeType": "Block",
              "src": "920:35:44",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 12707,
                    "name": "_sharePrice",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 12676,
                    "src": "937:11:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 12706,
                  "id": 12708,
                  "nodeType": "Return",
                  "src": "930:18:44"
                }
              ]
            },
            "functionSelector": "07a2d13a",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "convertToAssets",
            "nameLocation": "863:15:44",
            "parameters": {
              "id": 12703,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12702,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 12710,
                  "src": "879:7:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12701,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "879:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "878:9:44"
            },
            "returnParameters": {
              "id": 12706,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12705,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 12710,
                  "src": "911:7:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12704,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "911:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "910:9:44"
            },
            "scope": 12711,
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
          "id": 12672,
          "nodeType": "StructuredDocumentation",
          "src": "64:447:44",
          "text": "@author DELV\n @title EtchingVault\n @dev This is a helper contract that is etched onto a `MockERC4626` vault\n      as one of the intermediate steps in the \"etching\" process in the Rust\n      debugging tools.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          12711
        ],
        "name": "EtchingVault",
        "nameLocation": "520:12:44",
        "scope": 12712,
        "usedErrors": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 44
} as const;
