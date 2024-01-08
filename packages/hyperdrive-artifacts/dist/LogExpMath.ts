export const LogExpMath = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220499f9fccb7a89fcf4958c61d2a30ffc897814597f4962eeb6c2dc2516b1d09c464736f6c63430008130033",
    "sourceMap": "1671:19613:107:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;1671:19613:107;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220499f9fccb7a89fcf4958c61d2a30ffc897814597f4962eeb6c2dc2516b1d09c464736f6c63430008130033",
    "sourceMap": "1671:19613:107:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"Fernando Martinelli - @fernandomartinelliSergio Yuhjtman - @sergioyuhjtmanDaniel Fernandez - @dmf7z\",\"details\":\"Exponentiation and logarithm functions for 18 decimal fixed point numbers (both base and exponent/argument). Exponentiation and logarithm with arbitrary bases (x^y and log_x(y)) are implemented by conversion to natural exponentiation and logarithm (where the base is Euler's number).\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"test/3rdPartyLibs/LogExpMath.sol\":\"LogExpMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"test/3rdPartyLibs/BalancerErrors.sol\":{\"keccak256\":\"0xd4bc389c3bb940fe0ebd712a06c219dd8ebcaa8749fa5e166c8a373ca7eaa4ca\",\"license\":\"GPL-3.0-or-later\",\"urls\":[\"bzz-raw://9d0847b6535322c1ffa9d2783b32557f80aed5e8de430c824a496ea3b6f58611\",\"dweb:/ipfs/QmRDqDSkP3FDvFYbPQNXwYq25FbYsx1UEYSg11caiw2xtU\"]},\"test/3rdPartyLibs/LogExpMath.sol\":{\"keccak256\":\"0x6ce1763535e5457f8e6132d74a1d16b857fb5eac7a63a9773df5768095513dee\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://36dfca19e82dd52bc30eab2aa2441e59cc9dbac583d65a02a1b4a045620258e9\",\"dweb:/ipfs/QmbyuAJ9e1FnaWJB1aizXR5DfiAXrXAaRT9B8DPwPQboM1\"]}},\"version\":1}",
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
        "test/3rdPartyLibs/LogExpMath.sol": "LogExpMath"
      },
      "libraries": {}
    },
    "sources": {
      "test/3rdPartyLibs/BalancerErrors.sol": {
        "keccak256": "0xd4bc389c3bb940fe0ebd712a06c219dd8ebcaa8749fa5e166c8a373ca7eaa4ca",
        "urls": [
          "bzz-raw://9d0847b6535322c1ffa9d2783b32557f80aed5e8de430c824a496ea3b6f58611",
          "dweb:/ipfs/QmRDqDSkP3FDvFYbPQNXwYq25FbYsx1UEYSg11caiw2xtU"
        ],
        "license": "GPL-3.0-or-later"
      },
      "test/3rdPartyLibs/LogExpMath.sol": {
        "keccak256": "0x6ce1763535e5457f8e6132d74a1d16b857fb5eac7a63a9773df5768095513dee",
        "urls": [
          "bzz-raw://36dfca19e82dd52bc30eab2aa2441e59cc9dbac583d65a02a1b4a045620258e9",
          "dweb:/ipfs/QmbyuAJ9e1FnaWJB1aizXR5DfiAXrXAaRT9B8DPwPQboM1"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "test/3rdPartyLibs/LogExpMath.sol",
    "id": 67742,
    "exportedSymbols": {
      "BalancerErrors": [
        66441
      ],
      "LogExpMath": [
        67741
      ],
      "_require": [
        65885,
        65904
      ]
    },
    "nodeType": "SourceUnit",
    "src": "1094:20191:107",
    "nodes": [
      {
        "id": 66443,
        "nodeType": "PragmaDirective",
        "src": "1094:23:107",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 66446,
        "nodeType": "ImportDirective",
        "src": "1119:80:107",
        "nodes": [],
        "absolutePath": "test/3rdPartyLibs/BalancerErrors.sol",
        "file": "test/3rdPartyLibs/BalancerErrors.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 67742,
        "sourceUnit": 66442,
        "symbolAliases": [
          {
            "foreign": {
              "id": 66444,
              "name": "BalancerErrors",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 66441,
              "src": "1128:14:107",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 66445,
              "name": "_require",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "src": "1144:8:107",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 67741,
        "nodeType": "ContractDefinition",
        "src": "1671:19613:107",
        "nodes": [
          {
            "id": 66450,
            "nodeType": "VariableDeclaration",
            "src": "1951:29:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ONE_18",
            "nameLocation": "1967:6:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 66448,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "1951:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "31653138",
              "id": 66449,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1976:4:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1000000000000000000_by_1",
                "typeString": "int_const 1000000000000000000"
              },
              "value": "1e18"
            },
            "visibility": "internal"
          },
          {
            "id": 66453,
            "nodeType": "VariableDeclaration",
            "src": "2141:29:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ONE_20",
            "nameLocation": "2157:6:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 66451,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "2141:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "31653230",
              "id": 66452,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2166:4:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_100000000000000000000_by_1",
                "typeString": "int_const 100000000000000000000"
              },
              "value": "1e20"
            },
            "visibility": "internal"
          },
          {
            "id": 66456,
            "nodeType": "VariableDeclaration",
            "src": "2176:29:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ONE_36",
            "nameLocation": "2192:6:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 66454,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "2176:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "31653336",
              "id": 66455,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2201:4:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1000000000000000000000000000000000000_by_1",
                "typeString": "int_const 1000...(29 digits omitted)...0000"
              },
              "value": "1e36"
            },
            "visibility": "internal"
          },
          {
            "id": 66459,
            "nodeType": "VariableDeclaration",
            "src": "2722:45:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_NATURAL_EXPONENT",
            "nameLocation": "2738:20:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 66457,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "2722:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "313330653138",
              "id": 66458,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2761:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_130000000000000000000_by_1",
                "typeString": "int_const 130000000000000000000"
              },
              "value": "130e18"
            },
            "visibility": "internal"
          },
          {
            "id": 66463,
            "nodeType": "VariableDeclaration",
            "src": "2773:45:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MIN_NATURAL_EXPONENT",
            "nameLocation": "2789:20:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 66460,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "2773:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "id": 66462,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "nodeType": "UnaryOperation",
              "operator": "-",
              "prefix": true,
              "src": "2812:6:107",
              "subExpression": {
                "hexValue": "3431653138",
                "id": 66461,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "2813:5:107",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_41000000000000000000_by_1",
                  "typeString": "int_const 41000000000000000000"
                },
                "value": "41e18"
              },
              "typeDescriptions": {
                "typeIdentifier": "t_rational_minus_41000000000000000000_by_1",
                "typeString": "int_const -41000000000000000000"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 66468,
            "nodeType": "VariableDeclaration",
            "src": "2969:49:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "LN_36_LOWER_BOUND",
            "nameLocation": "2985:17:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 66464,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "2969:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              },
              "id": 66467,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "id": 66465,
                "name": "ONE_18",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 66450,
                "src": "3005:6:107",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                }
              },
              "nodeType": "BinaryOperation",
              "operator": "-",
              "rightExpression": {
                "hexValue": "31653137",
                "id": 66466,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "3014:4:107",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_100000000000000000_by_1",
                  "typeString": "int_const 100000000000000000"
                },
                "value": "1e17"
              },
              "src": "3005:13:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 66473,
            "nodeType": "VariableDeclaration",
            "src": "3024:49:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "LN_36_UPPER_BOUND",
            "nameLocation": "3040:17:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 66469,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "3024:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              },
              "id": 66472,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "id": 66470,
                "name": "ONE_18",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 66450,
                "src": "3060:6:107",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                }
              },
              "nodeType": "BinaryOperation",
              "operator": "+",
              "rightExpression": {
                "hexValue": "31653137",
                "id": 66471,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "3069:4:107",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_100000000000000000_by_1",
                  "typeString": "int_const 100000000000000000"
                },
                "value": "1e17"
              },
              "src": "3060:13:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 66483,
            "nodeType": "VariableDeclaration",
            "src": "3080:65:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MILD_EXPONENT_BOUND",
            "nameLocation": "3097:19:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66474,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "3080:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "id": 66482,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "commonType": {
                  "typeIdentifier": "t_rational_28948022309329048855892746252171976963317496166410141009864396001978282409984_by_1",
                  "typeString": "int_const 2894...(69 digits omitted)...9984"
                },
                "id": 66477,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "leftExpression": {
                  "hexValue": "32",
                  "id": 66475,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "3119:1:107",
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_2_by_1",
                    "typeString": "int_const 2"
                  },
                  "value": "2"
                },
                "nodeType": "BinaryOperation",
                "operator": "**",
                "rightExpression": {
                  "hexValue": "323534",
                  "id": 66476,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "3124:3:107",
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_254_by_1",
                    "typeString": "int_const 254"
                  },
                  "value": "254"
                },
                "src": "3119:8:107",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_28948022309329048855892746252171976963317496166410141009864396001978282409984_by_1",
                  "typeString": "int_const 2894...(69 digits omitted)...9984"
                }
              },
              "nodeType": "BinaryOperation",
              "operator": "/",
              "rightExpression": {
                "arguments": [
                  {
                    "id": 66480,
                    "name": "ONE_20",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 66453,
                    "src": "3138:6:107",
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
                  "id": 66479,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "nodeType": "ElementaryTypeNameExpression",
                  "src": "3130:7:107",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_uint256_$",
                    "typeString": "type(uint256)"
                  },
                  "typeName": {
                    "id": 66478,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3130:7:107",
                    "typeDescriptions": {}
                  }
                },
                "id": 66481,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "typeConversion",
                "lValueRequested": false,
                "nameLocations": [],
                "names": [],
                "nodeType": "FunctionCall",
                "src": "3130:15:107",
                "tryCall": false,
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "src": "3119:26:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 66486,
            "nodeType": "VariableDeclaration",
            "src": "3180:42:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "x0",
            "nameLocation": "3196:2:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 66484,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "3180:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "313238303030303030303030303030303030303030",
              "id": 66485,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3201:21:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_128000000000000000000_by_1",
                "typeString": "int_const 128000000000000000000"
              },
              "value": "128000000000000000000"
            },
            "visibility": "internal"
          },
          {
            "id": 66489,
            "nodeType": "VariableDeclaration",
            "src": "3236:85:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "a0",
            "nameLocation": "3252:2:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 66487,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "3236:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "3338383737303834303539393435393530393232323030303030303030303030303030303030303030303030303030303030303030303030",
              "id": 66488,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3265:56:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_38877084059945950922200000000000000000000000000000000000_by_1",
                "typeString": "int_const 3887...(48 digits omitted)...0000"
              },
              "value": "38877084059945950922200000000000000000000000000000000000"
            },
            "visibility": "internal"
          },
          {
            "id": 66492,
            "nodeType": "VariableDeclaration",
            "src": "3352:41:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "x1",
            "nameLocation": "3368:2:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 66490,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "3352:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "3634303030303030303030303030303030303030",
              "id": 66491,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3373:20:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_64000000000000000000_by_1",
                "typeString": "int_const 64000000000000000000"
              },
              "value": "64000000000000000000"
            },
            "visibility": "internal"
          },
          {
            "id": 66495,
            "nodeType": "VariableDeclaration",
            "src": "3407:49:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "a1",
            "nameLocation": "3423:2:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 66493,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "3407:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "36323335313439303830383131363136383832393130303030303030",
              "id": 66494,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3428:28:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_6235149080811616882910000000_by_1",
                "typeString": "int_const 6235149080811616882910000000"
              },
              "value": "6235149080811616882910000000"
            },
            "visibility": "internal"
          },
          {
            "id": 66498,
            "nodeType": "VariableDeclaration",
            "src": "3516:43:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "x2",
            "nameLocation": "3532:2:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 66496,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "3516:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "33323030303030303030303030303030303030303030",
              "id": 66497,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3537:22:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_3200000000000000000000_by_1",
                "typeString": "int_const 3200000000000000000000"
              },
              "value": "3200000000000000000000"
            },
            "visibility": "internal"
          },
          {
            "id": 66501,
            "nodeType": "VariableDeclaration",
            "src": "3573:55:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "a2",
            "nameLocation": "3589:2:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 66499,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "3573:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "37383936323936303138323638303639353136313030303030303030303030303030",
              "id": 66500,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3594:34:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_7896296018268069516100000000000000_by_1",
                "typeString": "int_const 7896...(26 digits omitted)...0000"
              },
              "value": "7896296018268069516100000000000000"
            },
            "visibility": "internal"
          },
          {
            "id": 66504,
            "nodeType": "VariableDeclaration",
            "src": "3645:43:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "x3",
            "nameLocation": "3661:2:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 66502,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "3645:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "31363030303030303030303030303030303030303030",
              "id": 66503,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3666:22:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1600000000000000000000_by_1",
                "typeString": "int_const 1600000000000000000000"
              },
              "value": "1600000000000000000000"
            },
            "visibility": "internal"
          },
          {
            "id": 66507,
            "nodeType": "VariableDeclaration",
            "src": "3702:48:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "a3",
            "nameLocation": "3718:2:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 66505,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "3702:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "383838363131303532303530373837323633363736303030303030",
              "id": 66506,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3723:27:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_888611052050787263676000000_by_1",
                "typeString": "int_const 888611052050787263676000000"
              },
              "value": "888611052050787263676000000"
            },
            "visibility": "internal"
          },
          {
            "id": 66510,
            "nodeType": "VariableDeclaration",
            "src": "3767:42:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "x4",
            "nameLocation": "3783:2:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 66508,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "3767:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "383030303030303030303030303030303030303030",
              "id": 66509,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3788:21:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_800000000000000000000_by_1",
                "typeString": "int_const 800000000000000000000"
              },
              "value": "800000000000000000000"
            },
            "visibility": "internal"
          },
          {
            "id": 66513,
            "nodeType": "VariableDeclaration",
            "src": "3823:45:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "a4",
            "nameLocation": "3839:2:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 66511,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "3823:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "323938303935373938373034313732383237343734303030",
              "id": 66512,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3844:24:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_298095798704172827474000_by_1",
                "typeString": "int_const 298095798704172827474000"
              },
              "value": "298095798704172827474000"
            },
            "visibility": "internal"
          },
          {
            "id": 66516,
            "nodeType": "VariableDeclaration",
            "src": "3885:42:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "x5",
            "nameLocation": "3901:2:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 66514,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "3885:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "343030303030303030303030303030303030303030",
              "id": 66515,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3906:21:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_400000000000000000000_by_1",
                "typeString": "int_const 400000000000000000000"
              },
              "value": "400000000000000000000"
            },
            "visibility": "internal"
          },
          {
            "id": 66519,
            "nodeType": "VariableDeclaration",
            "src": "3941:43:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "a5",
            "nameLocation": "3957:2:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 66517,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "3941:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "35343539383135303033333134343233393037383130",
              "id": 66518,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3962:22:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_5459815003314423907810_by_1",
                "typeString": "int_const 5459815003314423907810"
              },
              "value": "5459815003314423907810"
            },
            "visibility": "internal"
          },
          {
            "id": 66522,
            "nodeType": "VariableDeclaration",
            "src": "4001:42:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "x6",
            "nameLocation": "4017:2:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 66520,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "4001:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "323030303030303030303030303030303030303030",
              "id": 66521,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "4022:21:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_200000000000000000000_by_1",
                "typeString": "int_const 200000000000000000000"
              },
              "value": "200000000000000000000"
            },
            "visibility": "internal"
          },
          {
            "id": 66525,
            "nodeType": "VariableDeclaration",
            "src": "4057:42:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "a6",
            "nameLocation": "4073:2:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 66523,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "4057:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "373338393035363039383933303635303232373233",
              "id": 66524,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "4078:21:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_738905609893065022723_by_1",
                "typeString": "int_const 738905609893065022723"
              },
              "value": "738905609893065022723"
            },
            "visibility": "internal"
          },
          {
            "id": 66528,
            "nodeType": "VariableDeclaration",
            "src": "4116:42:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "x7",
            "nameLocation": "4132:2:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 66526,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "4116:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "313030303030303030303030303030303030303030",
              "id": 66527,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "4137:21:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_100000000000000000000_by_1",
                "typeString": "int_const 100000000000000000000"
              },
              "value": "100000000000000000000"
            },
            "visibility": "internal"
          },
          {
            "id": 66531,
            "nodeType": "VariableDeclaration",
            "src": "4172:42:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "a7",
            "nameLocation": "4188:2:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 66529,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "4172:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "323731383238313832383435393034353233353336",
              "id": 66530,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "4193:21:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_271828182845904523536_by_1",
                "typeString": "int_const 271828182845904523536"
              },
              "value": "271828182845904523536"
            },
            "visibility": "internal"
          },
          {
            "id": 66534,
            "nodeType": "VariableDeclaration",
            "src": "4231:41:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "x8",
            "nameLocation": "4247:2:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 66532,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "4231:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "3530303030303030303030303030303030303030",
              "id": 66533,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "4252:20:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_50000000000000000000_by_1",
                "typeString": "int_const 50000000000000000000"
              },
              "value": "50000000000000000000"
            },
            "visibility": "internal"
          },
          {
            "id": 66537,
            "nodeType": "VariableDeclaration",
            "src": "4287:42:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "a8",
            "nameLocation": "4303:2:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 66535,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "4287:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "313634383732313237303730303132383134363835",
              "id": 66536,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "4308:21:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_164872127070012814685_by_1",
                "typeString": "int_const 164872127070012814685"
              },
              "value": "164872127070012814685"
            },
            "visibility": "internal"
          },
          {
            "id": 66540,
            "nodeType": "VariableDeclaration",
            "src": "4346:41:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "x9",
            "nameLocation": "4362:2:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 66538,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "4346:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "3235303030303030303030303030303030303030",
              "id": 66539,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "4367:20:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_25000000000000000000_by_1",
                "typeString": "int_const 25000000000000000000"
              },
              "value": "25000000000000000000"
            },
            "visibility": "internal"
          },
          {
            "id": 66543,
            "nodeType": "VariableDeclaration",
            "src": "4402:42:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "a9",
            "nameLocation": "4418:2:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 66541,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "4402:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "313238343032353431363638373734313438343037",
              "id": 66542,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "4423:21:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_128402541668774148407_by_1",
                "typeString": "int_const 128402541668774148407"
              },
              "value": "128402541668774148407"
            },
            "visibility": "internal"
          },
          {
            "id": 66546,
            "nodeType": "VariableDeclaration",
            "src": "4461:42:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "x10",
            "nameLocation": "4477:3:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 66544,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "4461:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "3132353030303030303030303030303030303030",
              "id": 66545,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "4483:20:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_12500000000000000000_by_1",
                "typeString": "int_const 12500000000000000000"
              },
              "value": "12500000000000000000"
            },
            "visibility": "internal"
          },
          {
            "id": 66549,
            "nodeType": "VariableDeclaration",
            "src": "4518:43:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "a10",
            "nameLocation": "4534:3:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 66547,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "4518:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "313133333134383435333036363832363331363833",
              "id": 66548,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "4540:21:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_113314845306682631683_by_1",
                "typeString": "int_const 113314845306682631683"
              },
              "value": "113314845306682631683"
            },
            "visibility": "internal"
          },
          {
            "id": 66552,
            "nodeType": "VariableDeclaration",
            "src": "4579:41:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "x11",
            "nameLocation": "4595:3:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 66550,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "4579:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "36323530303030303030303030303030303030",
              "id": 66551,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "4601:19:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_6250000000000000000_by_1",
                "typeString": "int_const 6250000000000000000"
              },
              "value": "6250000000000000000"
            },
            "visibility": "internal"
          },
          {
            "id": 66555,
            "nodeType": "VariableDeclaration",
            "src": "4635:43:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "a11",
            "nameLocation": "4651:3:107",
            "scope": 67741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 66553,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "4635:6:107",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "313036343439343435383931373835393432393536",
              "id": 66554,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "4657:21:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_106449445891785942956_by_1",
                "typeString": "int_const 106449445891785942956"
              },
              "value": "106449445891785942956"
            },
            "visibility": "internal"
          },
          {
            "id": 66685,
            "nodeType": "FunctionDefinition",
            "src": "4916:2283:107",
            "nodes": [],
            "body": {
              "id": 66684,
              "nodeType": "Block",
              "src": "4983:2216:107",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 66567,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 66565,
                      "name": "y",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66560,
                      "src": "4997:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 66566,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5002:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4997:6:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 66574,
                  "nodeType": "IfStatement",
                  "src": "4993:131:107",
                  "trueBody": {
                    "id": 66573,
                    "nodeType": "Block",
                    "src": "5005:119:107",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 66570,
                              "name": "ONE_18",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66450,
                              "src": "5106:6:107",
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
                            "id": 66569,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "5098:7:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 66568,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "5098:7:107",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 66571,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5098:15:107",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 66564,
                        "id": 66572,
                        "nodeType": "Return",
                        "src": "5091:22:107"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 66577,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 66575,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66558,
                      "src": "5138:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 66576,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5143:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "5138:6:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 66581,
                  "nodeType": "IfStatement",
                  "src": "5134:45:107",
                  "trueBody": {
                    "id": 66580,
                    "nodeType": "Block",
                    "src": "5146:33:107",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "30",
                          "id": 66578,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5167:1:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 66564,
                        "id": 66579,
                        "nodeType": "Return",
                        "src": "5160:8:107"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 66587,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 66585,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 66583,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66558,
                            "src": "5558:1:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "323535",
                            "id": 66584,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5563:3:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_255_by_1",
                              "typeString": "int_const 255"
                            },
                            "value": "255"
                          },
                          "src": "5558:8:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 66586,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5570:1:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "5558:13:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "expression": {
                          "id": 66588,
                          "name": "BalancerErrors",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 66441,
                          "src": "5573:14:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_BalancerErrors_$66441_$",
                            "typeString": "type(library BalancerErrors)"
                          }
                        },
                        "id": 66589,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "5588:15:107",
                        "memberName": "X_OUT_OF_BOUNDS",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 65957,
                        "src": "5573:30:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 66582,
                      "name": "_require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        65885,
                        65904
                      ],
                      "referencedDeclaration": 65885,
                      "src": "5549:8:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bool_$_t_uint256_$returns$__$",
                        "typeString": "function (bool,uint256) pure"
                      }
                    },
                    "id": 66590,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5549:55:107",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 66591,
                  "nodeType": "ExpressionStatement",
                  "src": "5549:55:107"
                },
                {
                  "assignments": [
                    66593
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 66593,
                      "mutability": "mutable",
                      "name": "x_int256",
                      "nameLocation": "5621:8:107",
                      "nodeType": "VariableDeclaration",
                      "scope": 66684,
                      "src": "5614:15:107",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 66592,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5614:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 66598,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 66596,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66558,
                        "src": "5639:1:107",
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
                      "id": 66595,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "5632:6:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_int256_$",
                        "typeString": "type(int256)"
                      },
                      "typeName": {
                        "id": 66594,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5632:6:107",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 66597,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5632:9:107",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5614:27:107"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 66602,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 66600,
                          "name": "y",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 66560,
                          "src": "6004:1:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "id": 66601,
                          "name": "MILD_EXPONENT_BOUND",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 66483,
                          "src": "6008:19:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6004:23:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "expression": {
                          "id": 66603,
                          "name": "BalancerErrors",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 66441,
                          "src": "6029:14:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_BalancerErrors_$66441_$",
                            "typeString": "type(library BalancerErrors)"
                          }
                        },
                        "id": 66604,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "6044:15:107",
                        "memberName": "Y_OUT_OF_BOUNDS",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 65960,
                        "src": "6029:30:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 66599,
                      "name": "_require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        65885,
                        65904
                      ],
                      "referencedDeclaration": 65885,
                      "src": "5995:8:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bool_$_t_uint256_$returns$__$",
                        "typeString": "function (bool,uint256) pure"
                      }
                    },
                    "id": 66605,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5995:65:107",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 66606,
                  "nodeType": "ExpressionStatement",
                  "src": "5995:65:107"
                },
                {
                  "assignments": [
                    66608
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 66608,
                      "mutability": "mutable",
                      "name": "y_int256",
                      "nameLocation": "6077:8:107",
                      "nodeType": "VariableDeclaration",
                      "scope": 66684,
                      "src": "6070:15:107",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 66607,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6070:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 66613,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 66611,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66560,
                        "src": "6095:1:107",
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
                      "id": 66610,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "6088:6:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_int256_$",
                        "typeString": "type(int256)"
                      },
                      "typeName": {
                        "id": 66609,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6088:6:107",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 66612,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6088:9:107",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6070:27:107"
                },
                {
                  "assignments": [
                    66615
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 66615,
                      "mutability": "mutable",
                      "name": "logx_times_y",
                      "nameLocation": "6115:12:107",
                      "nodeType": "VariableDeclaration",
                      "scope": 66684,
                      "src": "6108:19:107",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 66614,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6108:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 66616,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6108:19:107"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 66623,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 66619,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 66617,
                        "name": "LN_36_LOWER_BOUND",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66468,
                        "src": "6141:17:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "id": 66618,
                        "name": "x_int256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66593,
                        "src": "6161:8:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "6141:28:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 66622,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 66620,
                        "name": "x_int256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66593,
                        "src": "6173:8:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "id": 66621,
                        "name": "LN_36_UPPER_BOUND",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66473,
                        "src": "6184:17:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "6173:28:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "6141:60:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 66659,
                    "nodeType": "Block",
                    "src": "6805:64:107",
                    "statements": [
                      {
                        "expression": {
                          "id": 66657,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 66651,
                            "name": "logx_times_y",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66615,
                            "src": "6819:12:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 66656,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 66653,
                                  "name": "x_int256",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 66593,
                                  "src": "6838:8:107",
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
                                "id": 66652,
                                "name": "_ln",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 67586,
                                "src": "6834:3:107",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                                  "typeString": "function (int256) pure returns (int256)"
                                }
                              },
                              "id": 66654,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6834:13:107",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 66655,
                              "name": "y_int256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66608,
                              "src": "6850:8:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "6834:24:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "6819:39:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 66658,
                        "nodeType": "ExpressionStatement",
                        "src": "6819:39:107"
                      }
                    ]
                  },
                  "id": 66660,
                  "nodeType": "IfStatement",
                  "src": "6137:732:107",
                  "trueBody": {
                    "id": 66650,
                    "nodeType": "Block",
                    "src": "6203:596:107",
                    "statements": [
                      {
                        "assignments": [
                          66625
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 66625,
                            "mutability": "mutable",
                            "name": "ln_36_x",
                            "nameLocation": "6224:7:107",
                            "nodeType": "VariableDeclaration",
                            "scope": 66650,
                            "src": "6217:14:107",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "typeName": {
                              "id": 66624,
                              "name": "int256",
                              "nodeType": "ElementaryTypeName",
                              "src": "6217:6:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 66629,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 66627,
                              "name": "x_int256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66593,
                              "src": "6241:8:107",
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
                            "id": 66626,
                            "name": "_ln_36",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67740,
                            "src": "6234:6:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                              "typeString": "function (int256) pure returns (int256)"
                            }
                          },
                          "id": 66628,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6234:16:107",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6217:33:107"
                      },
                      {
                        "expression": {
                          "id": 66648,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 66630,
                            "name": "logx_times_y",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66615,
                            "src": "6651:12:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 66646,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 66636,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "components": [
                                      {
                                        "commonType": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        },
                                        "id": 66633,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "id": 66631,
                                          "name": "ln_36_x",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 66625,
                                          "src": "6668:7:107",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "/",
                                        "rightExpression": {
                                          "id": 66632,
                                          "name": "ONE_18",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 66450,
                                          "src": "6678:6:107",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                          }
                                        },
                                        "src": "6668:16:107",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      }
                                    ],
                                    "id": 66634,
                                    "isConstant": false,
                                    "isInlineArray": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "TupleExpression",
                                    "src": "6667:18:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 66635,
                                    "name": "y_int256",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66608,
                                    "src": "6704:8:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "6667:45:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "+",
                                "rightExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 66645,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "components": [
                                      {
                                        "commonType": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        },
                                        "id": 66642,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "components": [
                                            {
                                              "commonType": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                              },
                                              "id": 66639,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "leftExpression": {
                                                "id": 66637,
                                                "name": "ln_36_x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66625,
                                                "src": "6733:7:107",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_int256",
                                                  "typeString": "int256"
                                                }
                                              },
                                              "nodeType": "BinaryOperation",
                                              "operator": "%",
                                              "rightExpression": {
                                                "id": 66638,
                                                "name": "ONE_18",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66450,
                                                "src": "6743:6:107",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_int256",
                                                  "typeString": "int256"
                                                }
                                              },
                                              "src": "6733:16:107",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                              }
                                            }
                                          ],
                                          "id": 66640,
                                          "isConstant": false,
                                          "isInlineArray": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "nodeType": "TupleExpression",
                                          "src": "6732:18:107",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "*",
                                        "rightExpression": {
                                          "id": 66641,
                                          "name": "y_int256",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 66608,
                                          "src": "6753:8:107",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                          }
                                        },
                                        "src": "6732:29:107",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      }
                                    ],
                                    "id": 66643,
                                    "isConstant": false,
                                    "isInlineArray": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "TupleExpression",
                                    "src": "6731:31:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "/",
                                  "rightExpression": {
                                    "id": 66644,
                                    "name": "ONE_18",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66450,
                                    "src": "6781:6:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "6731:56:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "6667:120:107",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 66647,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "6666:122:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "6651:137:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 66649,
                        "nodeType": "ExpressionStatement",
                        "src": "6651:137:107"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 66663,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 66661,
                      "name": "logx_times_y",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66615,
                      "src": "6878:12:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "/=",
                    "rightHandSide": {
                      "id": 66662,
                      "name": "ONE_18",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66450,
                      "src": "6894:6:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "6878:22:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 66664,
                  "nodeType": "ExpressionStatement",
                  "src": "6878:22:107"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 66672,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 66668,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 66666,
                            "name": "MIN_NATURAL_EXPONENT",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66463,
                            "src": "6996:20:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "id": 66667,
                            "name": "logx_times_y",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66615,
                            "src": "7020:12:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "6996:36:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 66671,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 66669,
                            "name": "logx_times_y",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66615,
                            "src": "7052:12:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "id": 66670,
                            "name": "MAX_NATURAL_EXPONENT",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66459,
                            "src": "7068:20:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "7052:36:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "6996:92:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "expression": {
                          "id": 66673,
                          "name": "BalancerErrors",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 66441,
                          "src": "7102:14:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_BalancerErrors_$66441_$",
                            "typeString": "type(library BalancerErrors)"
                          }
                        },
                        "id": 66674,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "7117:21:107",
                        "memberName": "PRODUCT_OUT_OF_BOUNDS",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 65963,
                        "src": "7102:36:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 66665,
                      "name": "_require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        65885,
                        65904
                      ],
                      "referencedDeclaration": 65885,
                      "src": "6974:8:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bool_$_t_uint256_$returns$__$",
                        "typeString": "function (bool,uint256) pure"
                      }
                    },
                    "id": 66675,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6974:174:107",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 66676,
                  "nodeType": "ExpressionStatement",
                  "src": "6974:174:107"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 66680,
                            "name": "logx_times_y",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66615,
                            "src": "7178:12:107",
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
                          "id": 66679,
                          "name": "exp",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 67112,
                          "src": "7174:3:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                            "typeString": "function (int256) pure returns (int256)"
                          }
                        },
                        "id": 66681,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7174:17:107",
                        "tryCall": false,
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
                      "id": 66678,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "7166:7:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 66677,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7166:7:107",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 66682,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7166:26:107",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 66564,
                  "id": 66683,
                  "nodeType": "Return",
                  "src": "7159:33:107"
                }
              ]
            },
            "documentation": {
              "id": 66556,
              "nodeType": "StructuredDocumentation",
              "src": "4697:214:107",
              "text": " @dev Exponentiation (x^y) with unsigned 18 decimal fixed point base and exponent.\n Reverts if ln(x) * y is smaller than `MIN_NATURAL_EXPONENT`, or larger than `MAX_NATURAL_EXPONENT`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "pow",
            "nameLocation": "4925:3:107",
            "parameters": {
              "id": 66561,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 66558,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "4937:1:107",
                  "nodeType": "VariableDeclaration",
                  "scope": 66685,
                  "src": "4929:9:107",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 66557,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4929:7:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 66560,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "4948:1:107",
                  "nodeType": "VariableDeclaration",
                  "scope": 66685,
                  "src": "4940:9:107",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 66559,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4940:7:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4928:22:107"
            },
            "returnParameters": {
              "id": 66564,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 66563,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 66685,
                  "src": "4974:7:107",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 66562,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4974:7:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4973:9:107"
            },
            "scope": 67741,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 67112,
            "nodeType": "FunctionDefinition",
            "src": "7413:5421:107",
            "nodes": [],
            "body": {
              "id": 67111,
              "nodeType": "Block",
              "src": "7467:5367:107",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 66700,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 66696,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 66694,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66688,
                            "src": "7499:1:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "id": 66695,
                            "name": "MIN_NATURAL_EXPONENT",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66463,
                            "src": "7504:20:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "7499:25:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 66699,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 66697,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66688,
                            "src": "7528:1:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "id": 66698,
                            "name": "MAX_NATURAL_EXPONENT",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66459,
                            "src": "7533:20:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "7528:25:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "7499:54:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "expression": {
                          "id": 66701,
                          "name": "BalancerErrors",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 66441,
                          "src": "7567:14:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_BalancerErrors_$66441_$",
                            "typeString": "type(library BalancerErrors)"
                          }
                        },
                        "id": 66702,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "7582:16:107",
                        "memberName": "INVALID_EXPONENT",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 65966,
                        "src": "7567:31:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 66693,
                      "name": "_require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        65885,
                        65904
                      ],
                      "referencedDeclaration": 65885,
                      "src": "7477:8:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bool_$_t_uint256_$returns$__$",
                        "typeString": "function (bool,uint256) pure"
                      }
                    },
                    "id": 66703,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7477:131:107",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 66704,
                  "nodeType": "ExpressionStatement",
                  "src": "7477:131:107"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 66707,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 66705,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66688,
                      "src": "7623:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 66706,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7627:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "7623:5:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 66720,
                  "nodeType": "IfStatement",
                  "src": "7619:353:107",
                  "trueBody": {
                    "id": 66719,
                    "nodeType": "Block",
                    "src": "7630:342:107",
                    "statements": [
                      {
                        "expression": {
                          "components": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              "id": 66716,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "components": [
                                  {
                                    "commonType": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    },
                                    "id": 66710,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "id": 66708,
                                      "name": "ONE_18",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 66450,
                                      "src": "7934:6:107",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "*",
                                    "rightExpression": {
                                      "id": 66709,
                                      "name": "ONE_18",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 66450,
                                      "src": "7943:6:107",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    },
                                    "src": "7934:15:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  }
                                ],
                                "id": 66711,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "7933:17:107",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "/",
                              "rightExpression": {
                                "arguments": [
                                  {
                                    "id": 66714,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "UnaryOperation",
                                    "operator": "-",
                                    "prefix": true,
                                    "src": "7957:2:107",
                                    "subExpression": {
                                      "id": 66713,
                                      "name": "x",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 66688,
                                      "src": "7958:1:107",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    },
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
                                  "id": 66712,
                                  "name": "exp",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 67112,
                                  "src": "7953:3:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                                    "typeString": "function (int256) pure returns (int256)"
                                  }
                                },
                                "id": 66715,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7953:7:107",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "src": "7933:27:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "id": 66717,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "7932:29:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "functionReturnParameters": 66692,
                        "id": 66718,
                        "nodeType": "Return",
                        "src": "7925:36:107"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    66722
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 66722,
                      "mutability": "mutable",
                      "name": "firstAN",
                      "nameLocation": "9280:7:107",
                      "nodeType": "VariableDeclaration",
                      "scope": 67111,
                      "src": "9273:14:107",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 66721,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9273:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 66723,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9273:14:107"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 66726,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 66724,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66688,
                      "src": "9301:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 66725,
                      "name": "x0",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66486,
                      "src": "9306:2:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "9301:7:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 66738,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 66736,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66688,
                        "src": "9378:1:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">=",
                      "rightExpression": {
                        "id": 66737,
                        "name": "x1",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66492,
                        "src": "9383:2:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "9378:7:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "id": 66752,
                      "nodeType": "Block",
                      "src": "9451:66:107",
                      "statements": [
                        {
                          "expression": {
                            "id": 66750,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "id": 66748,
                              "name": "firstAN",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66722,
                              "src": "9465:7:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "hexValue": "31",
                              "id": 66749,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9475:1:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "src": "9465:11:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "id": 66751,
                          "nodeType": "ExpressionStatement",
                          "src": "9465:11:107"
                        }
                      ]
                    },
                    "id": 66753,
                    "nodeType": "IfStatement",
                    "src": "9374:143:107",
                    "trueBody": {
                      "id": 66747,
                      "nodeType": "Block",
                      "src": "9387:58:107",
                      "statements": [
                        {
                          "expression": {
                            "id": 66741,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "id": 66739,
                              "name": "x",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66688,
                              "src": "9401:1:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "-=",
                            "rightHandSide": {
                              "id": 66740,
                              "name": "x1",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66492,
                              "src": "9406:2:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "9401:7:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "id": 66742,
                          "nodeType": "ExpressionStatement",
                          "src": "9401:7:107"
                        },
                        {
                          "expression": {
                            "id": 66745,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "id": 66743,
                              "name": "firstAN",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66722,
                              "src": "9422:7:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "id": 66744,
                              "name": "a1",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66495,
                              "src": "9432:2:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "9422:12:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "id": 66746,
                          "nodeType": "ExpressionStatement",
                          "src": "9422:12:107"
                        }
                      ]
                    }
                  },
                  "id": 66754,
                  "nodeType": "IfStatement",
                  "src": "9297:220:107",
                  "trueBody": {
                    "id": 66735,
                    "nodeType": "Block",
                    "src": "9310:58:107",
                    "statements": [
                      {
                        "expression": {
                          "id": 66729,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 66727,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66688,
                            "src": "9324:1:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "id": 66728,
                            "name": "x0",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66486,
                            "src": "9329:2:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "9324:7:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 66730,
                        "nodeType": "ExpressionStatement",
                        "src": "9324:7:107"
                      },
                      {
                        "expression": {
                          "id": 66733,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 66731,
                            "name": "firstAN",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66722,
                            "src": "9345:7:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 66732,
                            "name": "a0",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66489,
                            "src": "9355:2:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "9345:12:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 66734,
                        "nodeType": "ExpressionStatement",
                        "src": "9345:12:107"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 66757,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 66755,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66688,
                      "src": "9667:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "*=",
                    "rightHandSide": {
                      "hexValue": "313030",
                      "id": 66756,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "9672:3:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_100_by_1",
                        "typeString": "int_const 100"
                      },
                      "value": "100"
                    },
                    "src": "9667:8:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 66758,
                  "nodeType": "ExpressionStatement",
                  "src": "9667:8:107"
                },
                {
                  "assignments": [
                    66760
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 66760,
                      "mutability": "mutable",
                      "name": "product",
                      "nameLocation": "9895:7:107",
                      "nodeType": "VariableDeclaration",
                      "scope": 67111,
                      "src": "9888:14:107",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 66759,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9888:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 66762,
                  "initialValue": {
                    "id": 66761,
                    "name": "ONE_20",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 66453,
                    "src": "9905:6:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9888:23:107"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 66765,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 66763,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66688,
                      "src": "9926:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 66764,
                      "name": "x2",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66498,
                      "src": "9931:2:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "9926:7:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 66780,
                  "nodeType": "IfStatement",
                  "src": "9922:92:107",
                  "trueBody": {
                    "id": 66779,
                    "nodeType": "Block",
                    "src": "9935:79:107",
                    "statements": [
                      {
                        "expression": {
                          "id": 66768,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 66766,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66688,
                            "src": "9949:1:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "id": 66767,
                            "name": "x2",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66498,
                            "src": "9954:2:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "9949:7:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 66769,
                        "nodeType": "ExpressionStatement",
                        "src": "9949:7:107"
                      },
                      {
                        "expression": {
                          "id": 66777,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 66770,
                            "name": "product",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66760,
                            "src": "9970:7:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 66776,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 66773,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 66771,
                                    "name": "product",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66760,
                                    "src": "9981:7:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 66772,
                                    "name": "a2",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66501,
                                    "src": "9991:2:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "9981:12:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 66774,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "9980:14:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 66775,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66453,
                              "src": "9997:6:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "9980:23:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "9970:33:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 66778,
                        "nodeType": "ExpressionStatement",
                        "src": "9970:33:107"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 66783,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 66781,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66688,
                      "src": "10027:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 66782,
                      "name": "x3",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66504,
                      "src": "10032:2:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "10027:7:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 66798,
                  "nodeType": "IfStatement",
                  "src": "10023:92:107",
                  "trueBody": {
                    "id": 66797,
                    "nodeType": "Block",
                    "src": "10036:79:107",
                    "statements": [
                      {
                        "expression": {
                          "id": 66786,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 66784,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66688,
                            "src": "10050:1:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "id": 66785,
                            "name": "x3",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66504,
                            "src": "10055:2:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "10050:7:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 66787,
                        "nodeType": "ExpressionStatement",
                        "src": "10050:7:107"
                      },
                      {
                        "expression": {
                          "id": 66795,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 66788,
                            "name": "product",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66760,
                            "src": "10071:7:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 66794,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 66791,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 66789,
                                    "name": "product",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66760,
                                    "src": "10082:7:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 66790,
                                    "name": "a3",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66507,
                                    "src": "10092:2:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "10082:12:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 66792,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "10081:14:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 66793,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66453,
                              "src": "10098:6:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "10081:23:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "10071:33:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 66796,
                        "nodeType": "ExpressionStatement",
                        "src": "10071:33:107"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 66801,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 66799,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66688,
                      "src": "10128:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 66800,
                      "name": "x4",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66510,
                      "src": "10133:2:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "10128:7:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 66816,
                  "nodeType": "IfStatement",
                  "src": "10124:92:107",
                  "trueBody": {
                    "id": 66815,
                    "nodeType": "Block",
                    "src": "10137:79:107",
                    "statements": [
                      {
                        "expression": {
                          "id": 66804,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 66802,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66688,
                            "src": "10151:1:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "id": 66803,
                            "name": "x4",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66510,
                            "src": "10156:2:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "10151:7:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 66805,
                        "nodeType": "ExpressionStatement",
                        "src": "10151:7:107"
                      },
                      {
                        "expression": {
                          "id": 66813,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 66806,
                            "name": "product",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66760,
                            "src": "10172:7:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 66812,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 66809,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 66807,
                                    "name": "product",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66760,
                                    "src": "10183:7:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 66808,
                                    "name": "a4",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66513,
                                    "src": "10193:2:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "10183:12:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 66810,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "10182:14:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 66811,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66453,
                              "src": "10199:6:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "10182:23:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "10172:33:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 66814,
                        "nodeType": "ExpressionStatement",
                        "src": "10172:33:107"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 66819,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 66817,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66688,
                      "src": "10229:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 66818,
                      "name": "x5",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66516,
                      "src": "10234:2:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "10229:7:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 66834,
                  "nodeType": "IfStatement",
                  "src": "10225:92:107",
                  "trueBody": {
                    "id": 66833,
                    "nodeType": "Block",
                    "src": "10238:79:107",
                    "statements": [
                      {
                        "expression": {
                          "id": 66822,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 66820,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66688,
                            "src": "10252:1:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "id": 66821,
                            "name": "x5",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66516,
                            "src": "10257:2:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "10252:7:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 66823,
                        "nodeType": "ExpressionStatement",
                        "src": "10252:7:107"
                      },
                      {
                        "expression": {
                          "id": 66831,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 66824,
                            "name": "product",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66760,
                            "src": "10273:7:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 66830,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 66827,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 66825,
                                    "name": "product",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66760,
                                    "src": "10284:7:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 66826,
                                    "name": "a5",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66519,
                                    "src": "10294:2:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "10284:12:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 66828,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "10283:14:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 66829,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66453,
                              "src": "10300:6:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "10283:23:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "10273:33:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 66832,
                        "nodeType": "ExpressionStatement",
                        "src": "10273:33:107"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 66837,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 66835,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66688,
                      "src": "10330:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 66836,
                      "name": "x6",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66522,
                      "src": "10335:2:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "10330:7:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 66852,
                  "nodeType": "IfStatement",
                  "src": "10326:92:107",
                  "trueBody": {
                    "id": 66851,
                    "nodeType": "Block",
                    "src": "10339:79:107",
                    "statements": [
                      {
                        "expression": {
                          "id": 66840,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 66838,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66688,
                            "src": "10353:1:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "id": 66839,
                            "name": "x6",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66522,
                            "src": "10358:2:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "10353:7:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 66841,
                        "nodeType": "ExpressionStatement",
                        "src": "10353:7:107"
                      },
                      {
                        "expression": {
                          "id": 66849,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 66842,
                            "name": "product",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66760,
                            "src": "10374:7:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 66848,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 66845,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 66843,
                                    "name": "product",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66760,
                                    "src": "10385:7:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 66844,
                                    "name": "a6",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66525,
                                    "src": "10395:2:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "10385:12:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 66846,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "10384:14:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 66847,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66453,
                              "src": "10401:6:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "10384:23:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "10374:33:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 66850,
                        "nodeType": "ExpressionStatement",
                        "src": "10374:33:107"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 66855,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 66853,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66688,
                      "src": "10431:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 66854,
                      "name": "x7",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66528,
                      "src": "10436:2:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "10431:7:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 66870,
                  "nodeType": "IfStatement",
                  "src": "10427:92:107",
                  "trueBody": {
                    "id": 66869,
                    "nodeType": "Block",
                    "src": "10440:79:107",
                    "statements": [
                      {
                        "expression": {
                          "id": 66858,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 66856,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66688,
                            "src": "10454:1:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "id": 66857,
                            "name": "x7",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66528,
                            "src": "10459:2:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "10454:7:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 66859,
                        "nodeType": "ExpressionStatement",
                        "src": "10454:7:107"
                      },
                      {
                        "expression": {
                          "id": 66867,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 66860,
                            "name": "product",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66760,
                            "src": "10475:7:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 66866,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 66863,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 66861,
                                    "name": "product",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66760,
                                    "src": "10486:7:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 66862,
                                    "name": "a7",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66531,
                                    "src": "10496:2:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "10486:12:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 66864,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "10485:14:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 66865,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66453,
                              "src": "10502:6:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "10485:23:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "10475:33:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 66868,
                        "nodeType": "ExpressionStatement",
                        "src": "10475:33:107"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 66873,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 66871,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66688,
                      "src": "10532:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 66872,
                      "name": "x8",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66534,
                      "src": "10537:2:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "10532:7:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 66888,
                  "nodeType": "IfStatement",
                  "src": "10528:92:107",
                  "trueBody": {
                    "id": 66887,
                    "nodeType": "Block",
                    "src": "10541:79:107",
                    "statements": [
                      {
                        "expression": {
                          "id": 66876,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 66874,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66688,
                            "src": "10555:1:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "id": 66875,
                            "name": "x8",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66534,
                            "src": "10560:2:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "10555:7:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 66877,
                        "nodeType": "ExpressionStatement",
                        "src": "10555:7:107"
                      },
                      {
                        "expression": {
                          "id": 66885,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 66878,
                            "name": "product",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66760,
                            "src": "10576:7:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 66884,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 66881,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 66879,
                                    "name": "product",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66760,
                                    "src": "10587:7:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 66880,
                                    "name": "a8",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66537,
                                    "src": "10597:2:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "10587:12:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 66882,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "10586:14:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 66883,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66453,
                              "src": "10603:6:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "10586:23:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "10576:33:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 66886,
                        "nodeType": "ExpressionStatement",
                        "src": "10576:33:107"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 66891,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 66889,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66688,
                      "src": "10633:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 66890,
                      "name": "x9",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66540,
                      "src": "10638:2:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "10633:7:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 66906,
                  "nodeType": "IfStatement",
                  "src": "10629:92:107",
                  "trueBody": {
                    "id": 66905,
                    "nodeType": "Block",
                    "src": "10642:79:107",
                    "statements": [
                      {
                        "expression": {
                          "id": 66894,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 66892,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66688,
                            "src": "10656:1:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "id": 66893,
                            "name": "x9",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66540,
                            "src": "10661:2:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "10656:7:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 66895,
                        "nodeType": "ExpressionStatement",
                        "src": "10656:7:107"
                      },
                      {
                        "expression": {
                          "id": 66903,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 66896,
                            "name": "product",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66760,
                            "src": "10677:7:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 66902,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 66899,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 66897,
                                    "name": "product",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66760,
                                    "src": "10688:7:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 66898,
                                    "name": "a9",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66543,
                                    "src": "10698:2:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "10688:12:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 66900,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "10687:14:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 66901,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66453,
                              "src": "10704:6:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "10687:23:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "10677:33:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 66904,
                        "nodeType": "ExpressionStatement",
                        "src": "10677:33:107"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    66908
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 66908,
                      "mutability": "mutable",
                      "name": "seriesSum",
                      "nameLocation": "11032:9:107",
                      "nodeType": "VariableDeclaration",
                      "scope": 67111,
                      "src": "11025:16:107",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 66907,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11025:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 66910,
                  "initialValue": {
                    "id": 66909,
                    "name": "ONE_20",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 66453,
                    "src": "11044:6:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11025:25:107"
                },
                {
                  "assignments": [
                    66912
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 66912,
                      "mutability": "mutable",
                      "name": "term",
                      "nameLocation": "11122:4:107",
                      "nodeType": "VariableDeclaration",
                      "scope": 67111,
                      "src": "11115:11:107",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 66911,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11115:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 66913,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11115:11:107"
                },
                {
                  "expression": {
                    "id": 66916,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 66914,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66912,
                      "src": "11235:4:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 66915,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66688,
                      "src": "11242:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11235:8:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 66917,
                  "nodeType": "ExpressionStatement",
                  "src": "11235:8:107"
                },
                {
                  "expression": {
                    "id": 66920,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 66918,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66908,
                      "src": "11253:9:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 66919,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66912,
                      "src": "11266:4:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11253:17:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 66921,
                  "nodeType": "ExpressionStatement",
                  "src": "11253:17:107"
                },
                {
                  "expression": {
                    "id": 66932,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 66922,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66912,
                      "src": "11507:4:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 66931,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 66928,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 66925,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 66923,
                                    "name": "term",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66912,
                                    "src": "11516:4:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 66924,
                                    "name": "x",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66688,
                                    "src": "11523:1:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "11516:8:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 66926,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "11515:10:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 66927,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66453,
                              "src": "11528:6:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "11515:19:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 66929,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "11514:21:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "32",
                        "id": 66930,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "11538:1:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "src": "11514:25:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11507:32:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 66933,
                  "nodeType": "ExpressionStatement",
                  "src": "11507:32:107"
                },
                {
                  "expression": {
                    "id": 66936,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 66934,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66908,
                      "src": "11549:9:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 66935,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66912,
                      "src": "11562:4:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11549:17:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 66937,
                  "nodeType": "ExpressionStatement",
                  "src": "11549:17:107"
                },
                {
                  "expression": {
                    "id": 66948,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 66938,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66912,
                      "src": "11577:4:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 66947,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 66944,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 66941,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 66939,
                                    "name": "term",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66912,
                                    "src": "11586:4:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 66940,
                                    "name": "x",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66688,
                                    "src": "11593:1:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "11586:8:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 66942,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "11585:10:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 66943,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66453,
                              "src": "11598:6:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "11585:19:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 66945,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "11584:21:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "33",
                        "id": 66946,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "11608:1:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_3_by_1",
                          "typeString": "int_const 3"
                        },
                        "value": "3"
                      },
                      "src": "11584:25:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11577:32:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 66949,
                  "nodeType": "ExpressionStatement",
                  "src": "11577:32:107"
                },
                {
                  "expression": {
                    "id": 66952,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 66950,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66908,
                      "src": "11619:9:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 66951,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66912,
                      "src": "11632:4:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11619:17:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 66953,
                  "nodeType": "ExpressionStatement",
                  "src": "11619:17:107"
                },
                {
                  "expression": {
                    "id": 66964,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 66954,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66912,
                      "src": "11647:4:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 66963,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 66960,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 66957,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 66955,
                                    "name": "term",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66912,
                                    "src": "11656:4:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 66956,
                                    "name": "x",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66688,
                                    "src": "11663:1:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "11656:8:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 66958,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "11655:10:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 66959,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66453,
                              "src": "11668:6:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "11655:19:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 66961,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "11654:21:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "34",
                        "id": 66962,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "11678:1:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_4_by_1",
                          "typeString": "int_const 4"
                        },
                        "value": "4"
                      },
                      "src": "11654:25:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11647:32:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 66965,
                  "nodeType": "ExpressionStatement",
                  "src": "11647:32:107"
                },
                {
                  "expression": {
                    "id": 66968,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 66966,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66908,
                      "src": "11689:9:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 66967,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66912,
                      "src": "11702:4:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11689:17:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 66969,
                  "nodeType": "ExpressionStatement",
                  "src": "11689:17:107"
                },
                {
                  "expression": {
                    "id": 66980,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 66970,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66912,
                      "src": "11717:4:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 66979,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 66976,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 66973,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 66971,
                                    "name": "term",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66912,
                                    "src": "11726:4:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 66972,
                                    "name": "x",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66688,
                                    "src": "11733:1:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "11726:8:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 66974,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "11725:10:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 66975,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66453,
                              "src": "11738:6:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "11725:19:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 66977,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "11724:21:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "35",
                        "id": 66978,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "11748:1:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_5_by_1",
                          "typeString": "int_const 5"
                        },
                        "value": "5"
                      },
                      "src": "11724:25:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11717:32:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 66981,
                  "nodeType": "ExpressionStatement",
                  "src": "11717:32:107"
                },
                {
                  "expression": {
                    "id": 66984,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 66982,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66908,
                      "src": "11759:9:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 66983,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66912,
                      "src": "11772:4:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11759:17:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 66985,
                  "nodeType": "ExpressionStatement",
                  "src": "11759:17:107"
                },
                {
                  "expression": {
                    "id": 66996,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 66986,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66912,
                      "src": "11787:4:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 66995,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 66992,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 66989,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 66987,
                                    "name": "term",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66912,
                                    "src": "11796:4:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 66988,
                                    "name": "x",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66688,
                                    "src": "11803:1:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "11796:8:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 66990,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "11795:10:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 66991,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66453,
                              "src": "11808:6:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "11795:19:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 66993,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "11794:21:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "36",
                        "id": 66994,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "11818:1:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_6_by_1",
                          "typeString": "int_const 6"
                        },
                        "value": "6"
                      },
                      "src": "11794:25:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11787:32:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 66997,
                  "nodeType": "ExpressionStatement",
                  "src": "11787:32:107"
                },
                {
                  "expression": {
                    "id": 67000,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 66998,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66908,
                      "src": "11829:9:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 66999,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66912,
                      "src": "11842:4:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11829:17:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67001,
                  "nodeType": "ExpressionStatement",
                  "src": "11829:17:107"
                },
                {
                  "expression": {
                    "id": 67012,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67002,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66912,
                      "src": "11857:4:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67011,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 67008,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 67005,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67003,
                                    "name": "term",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66912,
                                    "src": "11866:4:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67004,
                                    "name": "x",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66688,
                                    "src": "11873:1:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "11866:8:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67006,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "11865:10:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67007,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66453,
                              "src": "11878:6:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "11865:19:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 67009,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "11864:21:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "37",
                        "id": 67010,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "11888:1:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_7_by_1",
                          "typeString": "int_const 7"
                        },
                        "value": "7"
                      },
                      "src": "11864:25:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11857:32:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67013,
                  "nodeType": "ExpressionStatement",
                  "src": "11857:32:107"
                },
                {
                  "expression": {
                    "id": 67016,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67014,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66908,
                      "src": "11899:9:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 67015,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66912,
                      "src": "11912:4:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11899:17:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67017,
                  "nodeType": "ExpressionStatement",
                  "src": "11899:17:107"
                },
                {
                  "expression": {
                    "id": 67028,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67018,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66912,
                      "src": "11927:4:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67027,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 67024,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 67021,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67019,
                                    "name": "term",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66912,
                                    "src": "11936:4:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67020,
                                    "name": "x",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66688,
                                    "src": "11943:1:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "11936:8:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67022,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "11935:10:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67023,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66453,
                              "src": "11948:6:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "11935:19:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 67025,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "11934:21:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "38",
                        "id": 67026,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "11958:1:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_8_by_1",
                          "typeString": "int_const 8"
                        },
                        "value": "8"
                      },
                      "src": "11934:25:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11927:32:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67029,
                  "nodeType": "ExpressionStatement",
                  "src": "11927:32:107"
                },
                {
                  "expression": {
                    "id": 67032,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67030,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66908,
                      "src": "11969:9:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 67031,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66912,
                      "src": "11982:4:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11969:17:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67033,
                  "nodeType": "ExpressionStatement",
                  "src": "11969:17:107"
                },
                {
                  "expression": {
                    "id": 67044,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67034,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66912,
                      "src": "11997:4:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67043,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 67040,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 67037,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67035,
                                    "name": "term",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66912,
                                    "src": "12006:4:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67036,
                                    "name": "x",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66688,
                                    "src": "12013:1:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "12006:8:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67038,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "12005:10:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67039,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66453,
                              "src": "12018:6:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "12005:19:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 67041,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "12004:21:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "39",
                        "id": 67042,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12028:1:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_9_by_1",
                          "typeString": "int_const 9"
                        },
                        "value": "9"
                      },
                      "src": "12004:25:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11997:32:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67045,
                  "nodeType": "ExpressionStatement",
                  "src": "11997:32:107"
                },
                {
                  "expression": {
                    "id": 67048,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67046,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66908,
                      "src": "12039:9:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 67047,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66912,
                      "src": "12052:4:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "12039:17:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67049,
                  "nodeType": "ExpressionStatement",
                  "src": "12039:17:107"
                },
                {
                  "expression": {
                    "id": 67060,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67050,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66912,
                      "src": "12067:4:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67059,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 67056,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 67053,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67051,
                                    "name": "term",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66912,
                                    "src": "12076:4:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67052,
                                    "name": "x",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66688,
                                    "src": "12083:1:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "12076:8:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67054,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "12075:10:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67055,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66453,
                              "src": "12088:6:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "12075:19:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 67057,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "12074:21:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "3130",
                        "id": 67058,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12098:2:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10_by_1",
                          "typeString": "int_const 10"
                        },
                        "value": "10"
                      },
                      "src": "12074:26:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "12067:33:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67061,
                  "nodeType": "ExpressionStatement",
                  "src": "12067:33:107"
                },
                {
                  "expression": {
                    "id": 67064,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67062,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66908,
                      "src": "12110:9:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 67063,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66912,
                      "src": "12123:4:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "12110:17:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67065,
                  "nodeType": "ExpressionStatement",
                  "src": "12110:17:107"
                },
                {
                  "expression": {
                    "id": 67076,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67066,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66912,
                      "src": "12138:4:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67075,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 67072,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 67069,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67067,
                                    "name": "term",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66912,
                                    "src": "12147:4:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67068,
                                    "name": "x",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66688,
                                    "src": "12154:1:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "12147:8:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67070,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "12146:10:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67071,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66453,
                              "src": "12159:6:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "12146:19:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 67073,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "12145:21:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "3131",
                        "id": 67074,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12169:2:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_11_by_1",
                          "typeString": "int_const 11"
                        },
                        "value": "11"
                      },
                      "src": "12145:26:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "12138:33:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67077,
                  "nodeType": "ExpressionStatement",
                  "src": "12138:33:107"
                },
                {
                  "expression": {
                    "id": 67080,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67078,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66908,
                      "src": "12181:9:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 67079,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66912,
                      "src": "12194:4:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "12181:17:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67081,
                  "nodeType": "ExpressionStatement",
                  "src": "12181:17:107"
                },
                {
                  "expression": {
                    "id": 67092,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67082,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66912,
                      "src": "12209:4:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67091,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 67088,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 67085,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67083,
                                    "name": "term",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66912,
                                    "src": "12218:4:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67084,
                                    "name": "x",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66688,
                                    "src": "12225:1:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "12218:8:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67086,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "12217:10:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67087,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66453,
                              "src": "12230:6:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "12217:19:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 67089,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "12216:21:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "3132",
                        "id": 67090,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12240:2:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_12_by_1",
                          "typeString": "int_const 12"
                        },
                        "value": "12"
                      },
                      "src": "12216:26:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "12209:33:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67093,
                  "nodeType": "ExpressionStatement",
                  "src": "12209:33:107"
                },
                {
                  "expression": {
                    "id": 67096,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67094,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66908,
                      "src": "12252:9:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 67095,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66912,
                      "src": "12265:4:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "12252:17:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67097,
                  "nodeType": "ExpressionStatement",
                  "src": "12252:17:107"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 67109,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 67106,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 67103,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 67100,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 67098,
                                        "name": "product",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 66760,
                                        "src": "12780:7:107",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 67099,
                                        "name": "seriesSum",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 66908,
                                        "src": "12790:9:107",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "12780:19:107",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 67101,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "12779:21:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "/",
                                "rightExpression": {
                                  "id": 67102,
                                  "name": "ONE_20",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 66453,
                                  "src": "12803:6:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "12779:30:107",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 67104,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "12778:32:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 67105,
                            "name": "firstAN",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66722,
                            "src": "12813:7:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "12778:42:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "id": 67107,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "12777:44:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "hexValue": "313030",
                      "id": 67108,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "12824:3:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_100_by_1",
                        "typeString": "int_const 100"
                      },
                      "value": "100"
                    },
                    "src": "12777:50:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 66692,
                  "id": 67110,
                  "nodeType": "Return",
                  "src": "12770:57:107"
                }
              ]
            },
            "documentation": {
              "id": 66686,
              "nodeType": "StructuredDocumentation",
              "src": "7205:203:107",
              "text": " @dev Natural exponentiation (e^x) with signed 18 decimal fixed point exponent.\n Reverts if `x` is smaller than MIN_NATURAL_EXPONENT, or larger than `MAX_NATURAL_EXPONENT`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "exp",
            "nameLocation": "7422:3:107",
            "parameters": {
              "id": 66689,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 66688,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "7433:1:107",
                  "nodeType": "VariableDeclaration",
                  "scope": 67112,
                  "src": "7426:8:107",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 66687,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7426:6:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7425:10:107"
            },
            "returnParameters": {
              "id": 66692,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 66691,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 67112,
                  "src": "7459:6:107",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 66690,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7459:6:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7458:8:107"
            },
            "scope": 67741,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 67184,
            "nodeType": "FunctionDefinition",
            "src": "12949:822:107",
            "nodes": [],
            "body": {
              "id": 67183,
              "nodeType": "Block",
              "src": "13018:753:107",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    67123
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 67123,
                      "mutability": "mutable",
                      "name": "logBase",
                      "nameLocation": "13255:7:107",
                      "nodeType": "VariableDeclaration",
                      "scope": 67183,
                      "src": "13248:14:107",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 67122,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "13248:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 67124,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "13248:14:107"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 67131,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67127,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 67125,
                        "name": "LN_36_LOWER_BOUND",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66468,
                        "src": "13276:17:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "id": 67126,
                        "name": "base",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67117,
                        "src": "13296:4:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "13276:24:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67130,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 67128,
                        "name": "base",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67117,
                        "src": "13304:4:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "id": 67129,
                        "name": "LN_36_UPPER_BOUND",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66473,
                        "src": "13311:17:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "13304:24:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "13276:52:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 67147,
                    "nodeType": "Block",
                    "src": "13383:53:107",
                    "statements": [
                      {
                        "expression": {
                          "id": 67145,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67139,
                            "name": "logBase",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67123,
                            "src": "13397:7:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 67144,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 67141,
                                  "name": "base",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 67117,
                                  "src": "13411:4:107",
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
                                "id": 67140,
                                "name": "_ln",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 67586,
                                "src": "13407:3:107",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                                  "typeString": "function (int256) pure returns (int256)"
                                }
                              },
                              "id": 67142,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "13407:9:107",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 67143,
                              "name": "ONE_18",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66450,
                              "src": "13419:6:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "13407:18:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "13397:28:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67146,
                        "nodeType": "ExpressionStatement",
                        "src": "13397:28:107"
                      }
                    ]
                  },
                  "id": 67148,
                  "nodeType": "IfStatement",
                  "src": "13272:164:107",
                  "trueBody": {
                    "id": 67138,
                    "nodeType": "Block",
                    "src": "13330:47:107",
                    "statements": [
                      {
                        "expression": {
                          "id": 67136,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67132,
                            "name": "logBase",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67123,
                            "src": "13344:7:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "id": 67134,
                                "name": "base",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 67117,
                                "src": "13361:4:107",
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
                              "id": 67133,
                              "name": "_ln_36",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67740,
                              "src": "13354:6:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                                "typeString": "function (int256) pure returns (int256)"
                              }
                            },
                            "id": 67135,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "13354:12:107",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "13344:22:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67137,
                        "nodeType": "ExpressionStatement",
                        "src": "13344:22:107"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    67150
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 67150,
                      "mutability": "mutable",
                      "name": "logArg",
                      "nameLocation": "13453:6:107",
                      "nodeType": "VariableDeclaration",
                      "scope": 67183,
                      "src": "13446:13:107",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 67149,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "13446:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 67151,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "13446:13:107"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 67158,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67154,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 67152,
                        "name": "LN_36_LOWER_BOUND",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66468,
                        "src": "13473:17:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "id": 67153,
                        "name": "arg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67115,
                        "src": "13493:3:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "13473:23:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67157,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 67155,
                        "name": "arg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67115,
                        "src": "13500:3:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "id": 67156,
                        "name": "LN_36_UPPER_BOUND",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66473,
                        "src": "13506:17:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "13500:23:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "13473:50:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 67174,
                    "nodeType": "Block",
                    "src": "13576:51:107",
                    "statements": [
                      {
                        "expression": {
                          "id": 67172,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67166,
                            "name": "logArg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67150,
                            "src": "13590:6:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 67171,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 67168,
                                  "name": "arg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 67115,
                                  "src": "13603:3:107",
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
                                "id": 67167,
                                "name": "_ln",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 67586,
                                "src": "13599:3:107",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                                  "typeString": "function (int256) pure returns (int256)"
                                }
                              },
                              "id": 67169,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "13599:8:107",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 67170,
                              "name": "ONE_18",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66450,
                              "src": "13610:6:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "13599:17:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "13590:26:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67173,
                        "nodeType": "ExpressionStatement",
                        "src": "13590:26:107"
                      }
                    ]
                  },
                  "id": 67175,
                  "nodeType": "IfStatement",
                  "src": "13469:158:107",
                  "trueBody": {
                    "id": 67165,
                    "nodeType": "Block",
                    "src": "13525:45:107",
                    "statements": [
                      {
                        "expression": {
                          "id": 67163,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67159,
                            "name": "logArg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67150,
                            "src": "13539:6:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "id": 67161,
                                "name": "arg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 67115,
                                "src": "13555:3:107",
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
                              "id": 67160,
                              "name": "_ln_36",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67740,
                              "src": "13548:6:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                                "typeString": "function (int256) pure returns (int256)"
                              }
                            },
                            "id": 67162,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "13548:11:107",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "13539:20:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67164,
                        "nodeType": "ExpressionStatement",
                        "src": "13539:20:107"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 67181,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 67178,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 67176,
                            "name": "logArg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67150,
                            "src": "13738:6:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 67177,
                            "name": "ONE_18",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66450,
                            "src": "13747:6:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "13738:15:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "id": 67179,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "13737:17:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "id": 67180,
                      "name": "logBase",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67123,
                      "src": "13757:7:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "13737:27:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 67121,
                  "id": 67182,
                  "nodeType": "Return",
                  "src": "13730:34:107"
                }
              ]
            },
            "documentation": {
              "id": 67113,
              "nodeType": "StructuredDocumentation",
              "src": "12840:104:107",
              "text": " @dev Logarithm (log(arg, base), with signed 18 decimal fixed point base and argument."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "log",
            "nameLocation": "12958:3:107",
            "parameters": {
              "id": 67118,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67115,
                  "mutability": "mutable",
                  "name": "arg",
                  "nameLocation": "12969:3:107",
                  "nodeType": "VariableDeclaration",
                  "scope": 67184,
                  "src": "12962:10:107",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 67114,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12962:6:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 67117,
                  "mutability": "mutable",
                  "name": "base",
                  "nameLocation": "12981:4:107",
                  "nodeType": "VariableDeclaration",
                  "scope": 67184,
                  "src": "12974:11:107",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 67116,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12974:6:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12961:25:107"
            },
            "returnParameters": {
              "id": 67121,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67120,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 67184,
                  "src": "13010:6:107",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 67119,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13010:6:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13009:8:107"
            },
            "scope": 67741,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 67221,
            "nodeType": "FunctionDefinition",
            "src": "13876:353:107",
            "nodes": [],
            "body": {
              "id": 67220,
              "nodeType": "Block",
              "src": "13929:300:107",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 67195,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 67193,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 67187,
                          "src": "14031:1:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 67194,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "14035:1:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "14031:5:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "expression": {
                          "id": 67196,
                          "name": "BalancerErrors",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 66441,
                          "src": "14038:14:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_BalancerErrors_$66441_$",
                            "typeString": "type(library BalancerErrors)"
                          }
                        },
                        "id": 67197,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "14053:13:107",
                        "memberName": "OUT_OF_BOUNDS",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 65969,
                        "src": "14038:28:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 67192,
                      "name": "_require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        65885,
                        65904
                      ],
                      "referencedDeclaration": 65885,
                      "src": "14022:8:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bool_$_t_uint256_$returns$__$",
                        "typeString": "function (bool,uint256) pure"
                      }
                    },
                    "id": 67198,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "14022:45:107",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 67199,
                  "nodeType": "ExpressionStatement",
                  "src": "14022:45:107"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 67206,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67202,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 67200,
                        "name": "LN_36_LOWER_BOUND",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66468,
                        "src": "14081:17:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "id": 67201,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67187,
                        "src": "14101:1:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "14081:21:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67205,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 67203,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67187,
                        "src": "14106:1:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "id": 67204,
                        "name": "LN_36_UPPER_BOUND",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66473,
                        "src": "14110:17:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "14106:21:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "14081:46:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 67218,
                    "nodeType": "Block",
                    "src": "14185:38:107",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 67215,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67187,
                              "src": "14210:1:107",
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
                            "id": 67214,
                            "name": "_ln",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67586,
                            "src": "14206:3:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                              "typeString": "function (int256) pure returns (int256)"
                            }
                          },
                          "id": 67216,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "14206:6:107",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "functionReturnParameters": 67191,
                        "id": 67217,
                        "nodeType": "Return",
                        "src": "14199:13:107"
                      }
                    ]
                  },
                  "id": 67219,
                  "nodeType": "IfStatement",
                  "src": "14077:146:107",
                  "trueBody": {
                    "id": 67213,
                    "nodeType": "Block",
                    "src": "14129:50:107",
                    "statements": [
                      {
                        "expression": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 67211,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [
                              {
                                "id": 67208,
                                "name": "a",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 67187,
                                "src": "14157:1:107",
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
                              "id": 67207,
                              "name": "_ln_36",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67740,
                              "src": "14150:6:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                                "typeString": "function (int256) pure returns (int256)"
                              }
                            },
                            "id": 67209,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "14150:9:107",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "id": 67210,
                            "name": "ONE_18",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66450,
                            "src": "14162:6:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "14150:18:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "functionReturnParameters": 67191,
                        "id": 67212,
                        "nodeType": "Return",
                        "src": "14143:25:107"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 67185,
              "nodeType": "StructuredDocumentation",
              "src": "13777:94:107",
              "text": " @dev Natural logarithm (ln(a)) with signed 18 decimal fixed point argument."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "ln",
            "nameLocation": "13885:2:107",
            "parameters": {
              "id": 67188,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67187,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "13895:1:107",
                  "nodeType": "VariableDeclaration",
                  "scope": 67221,
                  "src": "13888:8:107",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 67186,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13888:6:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13887:10:107"
            },
            "returnParameters": {
              "id": 67191,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67190,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 67221,
                  "src": "13921:6:107",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 67189,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13921:6:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13920:8:107"
            },
            "scope": 67741,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 67586,
            "nodeType": "FunctionDefinition",
            "src": "14343:4959:107",
            "nodes": [],
            "body": {
              "id": 67585,
              "nodeType": "Block",
              "src": "14396:4906:107",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 67231,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 67229,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67224,
                      "src": "14410:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 67230,
                      "name": "ONE_18",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66450,
                      "src": "14414:6:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "14410:10:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 67244,
                  "nodeType": "IfStatement",
                  "src": "14406:382:107",
                  "trueBody": {
                    "id": 67243,
                    "nodeType": "Block",
                    "src": "14422:366:107",
                    "statements": [
                      {
                        "expression": {
                          "components": [
                            {
                              "id": 67240,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "-",
                              "prefix": true,
                              "src": "14749:27:107",
                              "subExpression": {
                                "arguments": [
                                  {
                                    "commonType": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    },
                                    "id": 67238,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "components": [
                                        {
                                          "commonType": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                          },
                                          "id": 67235,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "leftExpression": {
                                            "id": 67233,
                                            "name": "ONE_18",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 66450,
                                            "src": "14755:6:107",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_int256",
                                              "typeString": "int256"
                                            }
                                          },
                                          "nodeType": "BinaryOperation",
                                          "operator": "*",
                                          "rightExpression": {
                                            "id": 67234,
                                            "name": "ONE_18",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 66450,
                                            "src": "14764:6:107",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_int256",
                                              "typeString": "int256"
                                            }
                                          },
                                          "src": "14755:15:107",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                          }
                                        }
                                      ],
                                      "id": 67236,
                                      "isConstant": false,
                                      "isInlineArray": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "TupleExpression",
                                      "src": "14754:17:107",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "/",
                                    "rightExpression": {
                                      "id": 67237,
                                      "name": "a",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 67224,
                                      "src": "14774:1:107",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    },
                                    "src": "14754:21:107",
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
                                  "id": 67232,
                                  "name": "_ln",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 67586,
                                  "src": "14750:3:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                                    "typeString": "function (int256) pure returns (int256)"
                                  }
                                },
                                "id": 67239,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "14750:26:107",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "id": 67241,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "14748:29:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "functionReturnParameters": 67228,
                        "id": 67242,
                        "nodeType": "Return",
                        "src": "14741:36:107"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    67246
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 67246,
                      "mutability": "mutable",
                      "name": "sum",
                      "nameLocation": "16120:3:107",
                      "nodeType": "VariableDeclaration",
                      "scope": 67585,
                      "src": "16113:10:107",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 67245,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "16113:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 67248,
                  "initialValue": {
                    "hexValue": "30",
                    "id": 67247,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "16126:1:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "16113:14:107"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 67253,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 67249,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67224,
                      "src": "16141:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67252,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 67250,
                        "name": "a0",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66489,
                        "src": "16146:2:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "id": 67251,
                        "name": "ONE_18",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66450,
                        "src": "16151:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "16146:11:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "16141:16:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 67263,
                  "nodeType": "IfStatement",
                  "src": "16137:114:107",
                  "trueBody": {
                    "id": 67262,
                    "nodeType": "Block",
                    "src": "16159:92:107",
                    "statements": [
                      {
                        "expression": {
                          "id": 67256,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67254,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67224,
                            "src": "16173:1:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "/=",
                          "rightHandSide": {
                            "id": 67255,
                            "name": "a0",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66489,
                            "src": "16178:2:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "16173:7:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67257,
                        "nodeType": "ExpressionStatement",
                        "src": "16173:7:107"
                      },
                      {
                        "expression": {
                          "id": 67260,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67258,
                            "name": "sum",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67246,
                            "src": "16231:3:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 67259,
                            "name": "x0",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66486,
                            "src": "16238:2:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "16231:9:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67261,
                        "nodeType": "ExpressionStatement",
                        "src": "16231:9:107"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 67268,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 67264,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67224,
                      "src": "16265:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67267,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 67265,
                        "name": "a1",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66495,
                        "src": "16270:2:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "id": 67266,
                        "name": "ONE_18",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66450,
                        "src": "16275:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "16270:11:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "16265:16:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 67278,
                  "nodeType": "IfStatement",
                  "src": "16261:114:107",
                  "trueBody": {
                    "id": 67277,
                    "nodeType": "Block",
                    "src": "16283:92:107",
                    "statements": [
                      {
                        "expression": {
                          "id": 67271,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67269,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67224,
                            "src": "16297:1:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "/=",
                          "rightHandSide": {
                            "id": 67270,
                            "name": "a1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66495,
                            "src": "16302:2:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "16297:7:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67272,
                        "nodeType": "ExpressionStatement",
                        "src": "16297:7:107"
                      },
                      {
                        "expression": {
                          "id": 67275,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67273,
                            "name": "sum",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67246,
                            "src": "16355:3:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 67274,
                            "name": "x1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66492,
                            "src": "16362:2:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "16355:9:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67276,
                        "nodeType": "ExpressionStatement",
                        "src": "16355:9:107"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 67281,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67279,
                      "name": "sum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67246,
                      "src": "16506:3:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "*=",
                    "rightHandSide": {
                      "hexValue": "313030",
                      "id": 67280,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "16513:3:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_100_by_1",
                        "typeString": "int_const 100"
                      },
                      "value": "100"
                    },
                    "src": "16506:10:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67282,
                  "nodeType": "ExpressionStatement",
                  "src": "16506:10:107"
                },
                {
                  "expression": {
                    "id": 67285,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67283,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67224,
                      "src": "16526:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "*=",
                    "rightHandSide": {
                      "hexValue": "313030",
                      "id": 67284,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "16531:3:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_100_by_1",
                        "typeString": "int_const 100"
                      },
                      "value": "100"
                    },
                    "src": "16526:8:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67286,
                  "nodeType": "ExpressionStatement",
                  "src": "16526:8:107"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 67289,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 67287,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67224,
                      "src": "16661:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 67288,
                      "name": "a2",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66501,
                      "src": "16666:2:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "16661:7:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 67304,
                  "nodeType": "IfStatement",
                  "src": "16657:82:107",
                  "trueBody": {
                    "id": 67303,
                    "nodeType": "Block",
                    "src": "16670:69:107",
                    "statements": [
                      {
                        "expression": {
                          "id": 67297,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67290,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67224,
                            "src": "16684:1:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 67296,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 67293,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67291,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67224,
                                    "src": "16689:1:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67292,
                                    "name": "ONE_20",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66453,
                                    "src": "16693:6:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "16689:10:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67294,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "16688:12:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67295,
                              "name": "a2",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66501,
                              "src": "16703:2:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "16688:17:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "16684:21:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67298,
                        "nodeType": "ExpressionStatement",
                        "src": "16684:21:107"
                      },
                      {
                        "expression": {
                          "id": 67301,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67299,
                            "name": "sum",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67246,
                            "src": "16719:3:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 67300,
                            "name": "x2",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66498,
                            "src": "16726:2:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "16719:9:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67302,
                        "nodeType": "ExpressionStatement",
                        "src": "16719:9:107"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 67307,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 67305,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67224,
                      "src": "16753:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 67306,
                      "name": "a3",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66507,
                      "src": "16758:2:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "16753:7:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 67322,
                  "nodeType": "IfStatement",
                  "src": "16749:82:107",
                  "trueBody": {
                    "id": 67321,
                    "nodeType": "Block",
                    "src": "16762:69:107",
                    "statements": [
                      {
                        "expression": {
                          "id": 67315,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67308,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67224,
                            "src": "16776:1:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 67314,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 67311,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67309,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67224,
                                    "src": "16781:1:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67310,
                                    "name": "ONE_20",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66453,
                                    "src": "16785:6:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "16781:10:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67312,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "16780:12:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67313,
                              "name": "a3",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66507,
                              "src": "16795:2:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "16780:17:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "16776:21:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67316,
                        "nodeType": "ExpressionStatement",
                        "src": "16776:21:107"
                      },
                      {
                        "expression": {
                          "id": 67319,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67317,
                            "name": "sum",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67246,
                            "src": "16811:3:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 67318,
                            "name": "x3",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66504,
                            "src": "16818:2:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "16811:9:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67320,
                        "nodeType": "ExpressionStatement",
                        "src": "16811:9:107"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 67325,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 67323,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67224,
                      "src": "16845:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 67324,
                      "name": "a4",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66513,
                      "src": "16850:2:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "16845:7:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 67340,
                  "nodeType": "IfStatement",
                  "src": "16841:82:107",
                  "trueBody": {
                    "id": 67339,
                    "nodeType": "Block",
                    "src": "16854:69:107",
                    "statements": [
                      {
                        "expression": {
                          "id": 67333,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67326,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67224,
                            "src": "16868:1:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 67332,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 67329,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67327,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67224,
                                    "src": "16873:1:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67328,
                                    "name": "ONE_20",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66453,
                                    "src": "16877:6:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "16873:10:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67330,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "16872:12:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67331,
                              "name": "a4",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66513,
                              "src": "16887:2:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "16872:17:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "16868:21:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67334,
                        "nodeType": "ExpressionStatement",
                        "src": "16868:21:107"
                      },
                      {
                        "expression": {
                          "id": 67337,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67335,
                            "name": "sum",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67246,
                            "src": "16903:3:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 67336,
                            "name": "x4",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66510,
                            "src": "16910:2:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "16903:9:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67338,
                        "nodeType": "ExpressionStatement",
                        "src": "16903:9:107"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 67343,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 67341,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67224,
                      "src": "16937:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 67342,
                      "name": "a5",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66519,
                      "src": "16942:2:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "16937:7:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 67358,
                  "nodeType": "IfStatement",
                  "src": "16933:82:107",
                  "trueBody": {
                    "id": 67357,
                    "nodeType": "Block",
                    "src": "16946:69:107",
                    "statements": [
                      {
                        "expression": {
                          "id": 67351,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67344,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67224,
                            "src": "16960:1:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 67350,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 67347,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67345,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67224,
                                    "src": "16965:1:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67346,
                                    "name": "ONE_20",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66453,
                                    "src": "16969:6:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "16965:10:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67348,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "16964:12:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67349,
                              "name": "a5",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66519,
                              "src": "16979:2:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "16964:17:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "16960:21:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67352,
                        "nodeType": "ExpressionStatement",
                        "src": "16960:21:107"
                      },
                      {
                        "expression": {
                          "id": 67355,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67353,
                            "name": "sum",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67246,
                            "src": "16995:3:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 67354,
                            "name": "x5",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66516,
                            "src": "17002:2:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "16995:9:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67356,
                        "nodeType": "ExpressionStatement",
                        "src": "16995:9:107"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 67361,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 67359,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67224,
                      "src": "17029:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 67360,
                      "name": "a6",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66525,
                      "src": "17034:2:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "17029:7:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 67376,
                  "nodeType": "IfStatement",
                  "src": "17025:82:107",
                  "trueBody": {
                    "id": 67375,
                    "nodeType": "Block",
                    "src": "17038:69:107",
                    "statements": [
                      {
                        "expression": {
                          "id": 67369,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67362,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67224,
                            "src": "17052:1:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 67368,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 67365,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67363,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67224,
                                    "src": "17057:1:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67364,
                                    "name": "ONE_20",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66453,
                                    "src": "17061:6:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "17057:10:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67366,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "17056:12:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67367,
                              "name": "a6",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66525,
                              "src": "17071:2:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "17056:17:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "17052:21:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67370,
                        "nodeType": "ExpressionStatement",
                        "src": "17052:21:107"
                      },
                      {
                        "expression": {
                          "id": 67373,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67371,
                            "name": "sum",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67246,
                            "src": "17087:3:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 67372,
                            "name": "x6",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66522,
                            "src": "17094:2:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "17087:9:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67374,
                        "nodeType": "ExpressionStatement",
                        "src": "17087:9:107"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 67379,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 67377,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67224,
                      "src": "17121:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 67378,
                      "name": "a7",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66531,
                      "src": "17126:2:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "17121:7:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 67394,
                  "nodeType": "IfStatement",
                  "src": "17117:82:107",
                  "trueBody": {
                    "id": 67393,
                    "nodeType": "Block",
                    "src": "17130:69:107",
                    "statements": [
                      {
                        "expression": {
                          "id": 67387,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67380,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67224,
                            "src": "17144:1:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 67386,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 67383,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67381,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67224,
                                    "src": "17149:1:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67382,
                                    "name": "ONE_20",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66453,
                                    "src": "17153:6:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "17149:10:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67384,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "17148:12:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67385,
                              "name": "a7",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66531,
                              "src": "17163:2:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "17148:17:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "17144:21:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67388,
                        "nodeType": "ExpressionStatement",
                        "src": "17144:21:107"
                      },
                      {
                        "expression": {
                          "id": 67391,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67389,
                            "name": "sum",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67246,
                            "src": "17179:3:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 67390,
                            "name": "x7",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66528,
                            "src": "17186:2:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "17179:9:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67392,
                        "nodeType": "ExpressionStatement",
                        "src": "17179:9:107"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 67397,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 67395,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67224,
                      "src": "17213:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 67396,
                      "name": "a8",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66537,
                      "src": "17218:2:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "17213:7:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 67412,
                  "nodeType": "IfStatement",
                  "src": "17209:82:107",
                  "trueBody": {
                    "id": 67411,
                    "nodeType": "Block",
                    "src": "17222:69:107",
                    "statements": [
                      {
                        "expression": {
                          "id": 67405,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67398,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67224,
                            "src": "17236:1:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 67404,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 67401,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67399,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67224,
                                    "src": "17241:1:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67400,
                                    "name": "ONE_20",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66453,
                                    "src": "17245:6:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "17241:10:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67402,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "17240:12:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67403,
                              "name": "a8",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66537,
                              "src": "17255:2:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "17240:17:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "17236:21:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67406,
                        "nodeType": "ExpressionStatement",
                        "src": "17236:21:107"
                      },
                      {
                        "expression": {
                          "id": 67409,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67407,
                            "name": "sum",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67246,
                            "src": "17271:3:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 67408,
                            "name": "x8",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66534,
                            "src": "17278:2:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "17271:9:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67410,
                        "nodeType": "ExpressionStatement",
                        "src": "17271:9:107"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 67415,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 67413,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67224,
                      "src": "17305:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 67414,
                      "name": "a9",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66543,
                      "src": "17310:2:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "17305:7:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 67430,
                  "nodeType": "IfStatement",
                  "src": "17301:82:107",
                  "trueBody": {
                    "id": 67429,
                    "nodeType": "Block",
                    "src": "17314:69:107",
                    "statements": [
                      {
                        "expression": {
                          "id": 67423,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67416,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67224,
                            "src": "17328:1:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 67422,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 67419,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67417,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67224,
                                    "src": "17333:1:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67418,
                                    "name": "ONE_20",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66453,
                                    "src": "17337:6:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "17333:10:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67420,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "17332:12:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67421,
                              "name": "a9",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66543,
                              "src": "17347:2:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "17332:17:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "17328:21:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67424,
                        "nodeType": "ExpressionStatement",
                        "src": "17328:21:107"
                      },
                      {
                        "expression": {
                          "id": 67427,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67425,
                            "name": "sum",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67246,
                            "src": "17363:3:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 67426,
                            "name": "x9",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66540,
                            "src": "17370:2:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "17363:9:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67428,
                        "nodeType": "ExpressionStatement",
                        "src": "17363:9:107"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 67433,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 67431,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67224,
                      "src": "17397:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 67432,
                      "name": "a10",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66549,
                      "src": "17402:3:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "17397:8:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 67448,
                  "nodeType": "IfStatement",
                  "src": "17393:85:107",
                  "trueBody": {
                    "id": 67447,
                    "nodeType": "Block",
                    "src": "17407:71:107",
                    "statements": [
                      {
                        "expression": {
                          "id": 67441,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67434,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67224,
                            "src": "17421:1:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 67440,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 67437,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67435,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67224,
                                    "src": "17426:1:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67436,
                                    "name": "ONE_20",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66453,
                                    "src": "17430:6:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "17426:10:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67438,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "17425:12:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67439,
                              "name": "a10",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66549,
                              "src": "17440:3:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "17425:18:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "17421:22:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67442,
                        "nodeType": "ExpressionStatement",
                        "src": "17421:22:107"
                      },
                      {
                        "expression": {
                          "id": 67445,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67443,
                            "name": "sum",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67246,
                            "src": "17457:3:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 67444,
                            "name": "x10",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66546,
                            "src": "17464:3:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "17457:10:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67446,
                        "nodeType": "ExpressionStatement",
                        "src": "17457:10:107"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 67451,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 67449,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67224,
                      "src": "17492:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 67450,
                      "name": "a11",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66555,
                      "src": "17497:3:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "17492:8:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 67466,
                  "nodeType": "IfStatement",
                  "src": "17488:85:107",
                  "trueBody": {
                    "id": 67465,
                    "nodeType": "Block",
                    "src": "17502:71:107",
                    "statements": [
                      {
                        "expression": {
                          "id": 67459,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67452,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67224,
                            "src": "17516:1:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 67458,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 67455,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67453,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67224,
                                    "src": "17521:1:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67454,
                                    "name": "ONE_20",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66453,
                                    "src": "17525:6:107",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "17521:10:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67456,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "17520:12:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67457,
                              "name": "a11",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66555,
                              "src": "17535:3:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "17520:18:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "17516:22:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67460,
                        "nodeType": "ExpressionStatement",
                        "src": "17516:22:107"
                      },
                      {
                        "expression": {
                          "id": 67463,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67461,
                            "name": "sum",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67246,
                            "src": "17552:3:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 67462,
                            "name": "x11",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66552,
                            "src": "17559:3:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "17552:10:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67464,
                        "nodeType": "ExpressionStatement",
                        "src": "17552:10:107"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    67468
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 67468,
                      "mutability": "mutable",
                      "name": "z",
                      "nameLocation": "18082:1:107",
                      "nodeType": "VariableDeclaration",
                      "scope": 67585,
                      "src": "18075:8:107",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 67467,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "18075:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 67481,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 67480,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 67474,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 67471,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 67469,
                                  "name": "a",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 67224,
                                  "src": "18088:1:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "id": 67470,
                                  "name": "ONE_20",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 66453,
                                  "src": "18092:6:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "18088:10:107",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 67472,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "18087:12:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 67473,
                            "name": "ONE_20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66453,
                            "src": "18102:6:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "18087:21:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "id": 67475,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "18086:23:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 67478,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 67476,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67224,
                            "src": "18113:1:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "id": 67477,
                            "name": "ONE_20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66453,
                            "src": "18117:6:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "18113:10:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "id": 67479,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "18112:12:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "18086:38:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "18075:49:107"
                },
                {
                  "assignments": [
                    67483
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 67483,
                      "mutability": "mutable",
                      "name": "z_squared",
                      "nameLocation": "18141:9:107",
                      "nodeType": "VariableDeclaration",
                      "scope": 67585,
                      "src": "18134:16:107",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 67482,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "18134:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 67490,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 67489,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 67486,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 67484,
                            "name": "z",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67468,
                            "src": "18154:1:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 67485,
                            "name": "z",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67468,
                            "src": "18158:1:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "18154:5:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "id": 67487,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "18153:7:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "id": 67488,
                      "name": "ONE_20",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66453,
                      "src": "18163:6:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "18153:16:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "18134:35:107"
                },
                {
                  "assignments": [
                    67492
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 67492,
                      "mutability": "mutable",
                      "name": "num",
                      "nameLocation": "18257:3:107",
                      "nodeType": "VariableDeclaration",
                      "scope": 67585,
                      "src": "18250:10:107",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 67491,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "18250:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 67494,
                  "initialValue": {
                    "id": 67493,
                    "name": "z",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 67468,
                    "src": "18263:1:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "18250:14:107"
                },
                {
                  "assignments": [
                    67496
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 67496,
                      "mutability": "mutable",
                      "name": "seriesSum",
                      "nameLocation": "18385:9:107",
                      "nodeType": "VariableDeclaration",
                      "scope": 67585,
                      "src": "18378:16:107",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 67495,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "18378:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 67498,
                  "initialValue": {
                    "id": 67497,
                    "name": "num",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 67492,
                    "src": "18397:3:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "18378:22:107"
                },
                {
                  "expression": {
                    "id": 67506,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67499,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67492,
                      "src": "18471:3:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67505,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 67502,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 67500,
                              "name": "num",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67492,
                              "src": "18478:3:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 67501,
                              "name": "z_squared",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67483,
                              "src": "18484:9:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "18478:15:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 67503,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "18477:17:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 67504,
                        "name": "ONE_20",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66453,
                        "src": "18497:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "18477:26:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "18471:32:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67507,
                  "nodeType": "ExpressionStatement",
                  "src": "18471:32:107"
                },
                {
                  "expression": {
                    "id": 67512,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67508,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67496,
                      "src": "18513:9:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67511,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 67509,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67492,
                        "src": "18526:3:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "33",
                        "id": 67510,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "18532:1:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_3_by_1",
                          "typeString": "int_const 3"
                        },
                        "value": "3"
                      },
                      "src": "18526:7:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "18513:20:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67513,
                  "nodeType": "ExpressionStatement",
                  "src": "18513:20:107"
                },
                {
                  "expression": {
                    "id": 67521,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67514,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67492,
                      "src": "18544:3:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67520,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 67517,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 67515,
                              "name": "num",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67492,
                              "src": "18551:3:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 67516,
                              "name": "z_squared",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67483,
                              "src": "18557:9:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "18551:15:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 67518,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "18550:17:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 67519,
                        "name": "ONE_20",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66453,
                        "src": "18570:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "18550:26:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "18544:32:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67522,
                  "nodeType": "ExpressionStatement",
                  "src": "18544:32:107"
                },
                {
                  "expression": {
                    "id": 67527,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67523,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67496,
                      "src": "18586:9:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67526,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 67524,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67492,
                        "src": "18599:3:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "35",
                        "id": 67525,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "18605:1:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_5_by_1",
                          "typeString": "int_const 5"
                        },
                        "value": "5"
                      },
                      "src": "18599:7:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "18586:20:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67528,
                  "nodeType": "ExpressionStatement",
                  "src": "18586:20:107"
                },
                {
                  "expression": {
                    "id": 67536,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67529,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67492,
                      "src": "18617:3:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67535,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 67532,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 67530,
                              "name": "num",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67492,
                              "src": "18624:3:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 67531,
                              "name": "z_squared",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67483,
                              "src": "18630:9:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "18624:15:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 67533,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "18623:17:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 67534,
                        "name": "ONE_20",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66453,
                        "src": "18643:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "18623:26:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "18617:32:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67537,
                  "nodeType": "ExpressionStatement",
                  "src": "18617:32:107"
                },
                {
                  "expression": {
                    "id": 67542,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67538,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67496,
                      "src": "18659:9:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67541,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 67539,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67492,
                        "src": "18672:3:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "37",
                        "id": 67540,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "18678:1:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_7_by_1",
                          "typeString": "int_const 7"
                        },
                        "value": "7"
                      },
                      "src": "18672:7:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "18659:20:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67543,
                  "nodeType": "ExpressionStatement",
                  "src": "18659:20:107"
                },
                {
                  "expression": {
                    "id": 67551,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67544,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67492,
                      "src": "18690:3:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67550,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 67547,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 67545,
                              "name": "num",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67492,
                              "src": "18697:3:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 67546,
                              "name": "z_squared",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67483,
                              "src": "18703:9:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "18697:15:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 67548,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "18696:17:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 67549,
                        "name": "ONE_20",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66453,
                        "src": "18716:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "18696:26:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "18690:32:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67552,
                  "nodeType": "ExpressionStatement",
                  "src": "18690:32:107"
                },
                {
                  "expression": {
                    "id": 67557,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67553,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67496,
                      "src": "18732:9:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67556,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 67554,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67492,
                        "src": "18745:3:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "39",
                        "id": 67555,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "18751:1:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_9_by_1",
                          "typeString": "int_const 9"
                        },
                        "value": "9"
                      },
                      "src": "18745:7:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "18732:20:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67558,
                  "nodeType": "ExpressionStatement",
                  "src": "18732:20:107"
                },
                {
                  "expression": {
                    "id": 67566,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67559,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67492,
                      "src": "18763:3:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67565,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 67562,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 67560,
                              "name": "num",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67492,
                              "src": "18770:3:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 67561,
                              "name": "z_squared",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67483,
                              "src": "18776:9:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "18770:15:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 67563,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "18769:17:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 67564,
                        "name": "ONE_20",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66453,
                        "src": "18789:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "18769:26:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "18763:32:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67567,
                  "nodeType": "ExpressionStatement",
                  "src": "18763:32:107"
                },
                {
                  "expression": {
                    "id": 67572,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67568,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67496,
                      "src": "18805:9:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67571,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 67569,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67492,
                        "src": "18818:3:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "3131",
                        "id": 67570,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "18824:2:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_11_by_1",
                          "typeString": "int_const 11"
                        },
                        "value": "11"
                      },
                      "src": "18818:8:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "18805:21:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67573,
                  "nodeType": "ExpressionStatement",
                  "src": "18805:21:107"
                },
                {
                  "expression": {
                    "id": 67576,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67574,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67496,
                      "src": "18985:9:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "*=",
                    "rightHandSide": {
                      "hexValue": "32",
                      "id": 67575,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "18998:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "src": "18985:14:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67577,
                  "nodeType": "ExpressionStatement",
                  "src": "18985:14:107"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 67583,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 67580,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 67578,
                            "name": "sum",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67246,
                            "src": "19273:3:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "id": 67579,
                            "name": "seriesSum",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67496,
                            "src": "19279:9:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "19273:15:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "id": 67581,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "19272:17:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "hexValue": "313030",
                      "id": 67582,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "19292:3:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_100_by_1",
                        "typeString": "int_const 100"
                      },
                      "value": "100"
                    },
                    "src": "19272:23:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 67228,
                  "id": 67584,
                  "nodeType": "Return",
                  "src": "19265:30:107"
                }
              ]
            },
            "documentation": {
              "id": 67222,
              "nodeType": "StructuredDocumentation",
              "src": "14235:103:107",
              "text": " @dev Internal natural logarithm (ln(a)) with signed 18 decimal fixed point argument."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_ln",
            "nameLocation": "14352:3:107",
            "parameters": {
              "id": 67225,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67224,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "14363:1:107",
                  "nodeType": "VariableDeclaration",
                  "scope": 67586,
                  "src": "14356:8:107",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 67223,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14356:6:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14355:10:107"
            },
            "returnParameters": {
              "id": 67228,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67227,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 67586,
                  "src": "14388:6:107",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 67226,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14388:6:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14387:8:107"
            },
            "scope": 67741,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 67740,
            "nodeType": "FunctionDefinition",
            "src": "19568:1714:107",
            "nodes": [],
            "body": {
              "id": 67739,
              "nodeType": "Block",
              "src": "19624:1658:107",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 67596,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67594,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67589,
                      "src": "19838:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "*=",
                    "rightHandSide": {
                      "id": 67595,
                      "name": "ONE_18",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66450,
                      "src": "19843:6:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "19838:11:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67597,
                  "nodeType": "ExpressionStatement",
                  "src": "19838:11:107"
                },
                {
                  "assignments": [
                    67599
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 67599,
                      "mutability": "mutable",
                      "name": "z",
                      "nameLocation": "20217:1:107",
                      "nodeType": "VariableDeclaration",
                      "scope": 67739,
                      "src": "20210:8:107",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 67598,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "20210:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 67612,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 67611,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 67605,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 67602,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 67600,
                                  "name": "x",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 67589,
                                  "src": "20223:1:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "id": 67601,
                                  "name": "ONE_36",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 66456,
                                  "src": "20227:6:107",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "20223:10:107",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 67603,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "20222:12:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 67604,
                            "name": "ONE_36",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66456,
                            "src": "20237:6:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "20222:21:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "id": 67606,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "20221:23:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 67609,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 67607,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67589,
                            "src": "20248:1:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "id": 67608,
                            "name": "ONE_36",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66456,
                            "src": "20252:6:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "20248:10:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "id": 67610,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "20247:12:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "20221:38:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "20210:49:107"
                },
                {
                  "assignments": [
                    67614
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 67614,
                      "mutability": "mutable",
                      "name": "z_squared",
                      "nameLocation": "20276:9:107",
                      "nodeType": "VariableDeclaration",
                      "scope": 67739,
                      "src": "20269:16:107",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 67613,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "20269:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 67621,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 67620,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 67617,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 67615,
                            "name": "z",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67599,
                            "src": "20289:1:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 67616,
                            "name": "z",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67599,
                            "src": "20293:1:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "20289:5:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "id": 67618,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "20288:7:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "id": 67619,
                      "name": "ONE_36",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66456,
                      "src": "20298:6:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "20288:16:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "20269:35:107"
                },
                {
                  "assignments": [
                    67623
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 67623,
                      "mutability": "mutable",
                      "name": "num",
                      "nameLocation": "20392:3:107",
                      "nodeType": "VariableDeclaration",
                      "scope": 67739,
                      "src": "20385:10:107",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 67622,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "20385:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 67625,
                  "initialValue": {
                    "id": 67624,
                    "name": "z",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 67599,
                    "src": "20398:1:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "20385:14:107"
                },
                {
                  "assignments": [
                    67627
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 67627,
                      "mutability": "mutable",
                      "name": "seriesSum",
                      "nameLocation": "20520:9:107",
                      "nodeType": "VariableDeclaration",
                      "scope": 67739,
                      "src": "20513:16:107",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 67626,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "20513:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 67629,
                  "initialValue": {
                    "id": 67628,
                    "name": "num",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 67623,
                    "src": "20532:3:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "20513:22:107"
                },
                {
                  "expression": {
                    "id": 67637,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67630,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67623,
                      "src": "20606:3:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67636,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 67633,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 67631,
                              "name": "num",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67623,
                              "src": "20613:3:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 67632,
                              "name": "z_squared",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67614,
                              "src": "20619:9:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "20613:15:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 67634,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "20612:17:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 67635,
                        "name": "ONE_36",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66456,
                        "src": "20632:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "20612:26:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "20606:32:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67638,
                  "nodeType": "ExpressionStatement",
                  "src": "20606:32:107"
                },
                {
                  "expression": {
                    "id": 67643,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67639,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67627,
                      "src": "20648:9:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67642,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 67640,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67623,
                        "src": "20661:3:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "33",
                        "id": 67641,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "20667:1:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_3_by_1",
                          "typeString": "int_const 3"
                        },
                        "value": "3"
                      },
                      "src": "20661:7:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "20648:20:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67644,
                  "nodeType": "ExpressionStatement",
                  "src": "20648:20:107"
                },
                {
                  "expression": {
                    "id": 67652,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67645,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67623,
                      "src": "20679:3:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67651,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 67648,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 67646,
                              "name": "num",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67623,
                              "src": "20686:3:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 67647,
                              "name": "z_squared",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67614,
                              "src": "20692:9:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "20686:15:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 67649,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "20685:17:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 67650,
                        "name": "ONE_36",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66456,
                        "src": "20705:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "20685:26:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "20679:32:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67653,
                  "nodeType": "ExpressionStatement",
                  "src": "20679:32:107"
                },
                {
                  "expression": {
                    "id": 67658,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67654,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67627,
                      "src": "20721:9:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67657,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 67655,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67623,
                        "src": "20734:3:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "35",
                        "id": 67656,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "20740:1:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_5_by_1",
                          "typeString": "int_const 5"
                        },
                        "value": "5"
                      },
                      "src": "20734:7:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "20721:20:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67659,
                  "nodeType": "ExpressionStatement",
                  "src": "20721:20:107"
                },
                {
                  "expression": {
                    "id": 67667,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67660,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67623,
                      "src": "20752:3:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67666,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 67663,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 67661,
                              "name": "num",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67623,
                              "src": "20759:3:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 67662,
                              "name": "z_squared",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67614,
                              "src": "20765:9:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "20759:15:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 67664,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "20758:17:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 67665,
                        "name": "ONE_36",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66456,
                        "src": "20778:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "20758:26:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "20752:32:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67668,
                  "nodeType": "ExpressionStatement",
                  "src": "20752:32:107"
                },
                {
                  "expression": {
                    "id": 67673,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67669,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67627,
                      "src": "20794:9:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67672,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 67670,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67623,
                        "src": "20807:3:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "37",
                        "id": 67671,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "20813:1:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_7_by_1",
                          "typeString": "int_const 7"
                        },
                        "value": "7"
                      },
                      "src": "20807:7:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "20794:20:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67674,
                  "nodeType": "ExpressionStatement",
                  "src": "20794:20:107"
                },
                {
                  "expression": {
                    "id": 67682,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67675,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67623,
                      "src": "20825:3:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67681,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 67678,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 67676,
                              "name": "num",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67623,
                              "src": "20832:3:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 67677,
                              "name": "z_squared",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67614,
                              "src": "20838:9:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "20832:15:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 67679,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "20831:17:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 67680,
                        "name": "ONE_36",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66456,
                        "src": "20851:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "20831:26:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "20825:32:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67683,
                  "nodeType": "ExpressionStatement",
                  "src": "20825:32:107"
                },
                {
                  "expression": {
                    "id": 67688,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67684,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67627,
                      "src": "20867:9:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67687,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 67685,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67623,
                        "src": "20880:3:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "39",
                        "id": 67686,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "20886:1:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_9_by_1",
                          "typeString": "int_const 9"
                        },
                        "value": "9"
                      },
                      "src": "20880:7:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "20867:20:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67689,
                  "nodeType": "ExpressionStatement",
                  "src": "20867:20:107"
                },
                {
                  "expression": {
                    "id": 67697,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67690,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67623,
                      "src": "20898:3:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67696,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 67693,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 67691,
                              "name": "num",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67623,
                              "src": "20905:3:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 67692,
                              "name": "z_squared",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67614,
                              "src": "20911:9:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "20905:15:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 67694,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "20904:17:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 67695,
                        "name": "ONE_36",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66456,
                        "src": "20924:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "20904:26:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "20898:32:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67698,
                  "nodeType": "ExpressionStatement",
                  "src": "20898:32:107"
                },
                {
                  "expression": {
                    "id": 67703,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67699,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67627,
                      "src": "20940:9:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67702,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 67700,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67623,
                        "src": "20953:3:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "3131",
                        "id": 67701,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "20959:2:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_11_by_1",
                          "typeString": "int_const 11"
                        },
                        "value": "11"
                      },
                      "src": "20953:8:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "20940:21:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67704,
                  "nodeType": "ExpressionStatement",
                  "src": "20940:21:107"
                },
                {
                  "expression": {
                    "id": 67712,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67705,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67623,
                      "src": "20972:3:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67711,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 67708,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 67706,
                              "name": "num",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67623,
                              "src": "20979:3:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 67707,
                              "name": "z_squared",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67614,
                              "src": "20985:9:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "20979:15:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 67709,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "20978:17:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 67710,
                        "name": "ONE_36",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66456,
                        "src": "20998:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "20978:26:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "20972:32:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67713,
                  "nodeType": "ExpressionStatement",
                  "src": "20972:32:107"
                },
                {
                  "expression": {
                    "id": 67718,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67714,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67627,
                      "src": "21014:9:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67717,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 67715,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67623,
                        "src": "21027:3:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "3133",
                        "id": 67716,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "21033:2:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_13_by_1",
                          "typeString": "int_const 13"
                        },
                        "value": "13"
                      },
                      "src": "21027:8:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "21014:21:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67719,
                  "nodeType": "ExpressionStatement",
                  "src": "21014:21:107"
                },
                {
                  "expression": {
                    "id": 67727,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67720,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67623,
                      "src": "21046:3:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67726,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 67723,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 67721,
                              "name": "num",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67623,
                              "src": "21053:3:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 67722,
                              "name": "z_squared",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67614,
                              "src": "21059:9:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "21053:15:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 67724,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "21052:17:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 67725,
                        "name": "ONE_36",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66456,
                        "src": "21072:6:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "21052:26:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "21046:32:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67728,
                  "nodeType": "ExpressionStatement",
                  "src": "21046:32:107"
                },
                {
                  "expression": {
                    "id": 67733,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67729,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67627,
                      "src": "21088:9:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 67732,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 67730,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67623,
                        "src": "21101:3:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "3135",
                        "id": 67731,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "21107:2:107",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_15_by_1",
                          "typeString": "int_const 15"
                        },
                        "value": "15"
                      },
                      "src": "21101:8:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "21088:21:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67734,
                  "nodeType": "ExpressionStatement",
                  "src": "21088:21:107"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 67737,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 67735,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67627,
                      "src": "21262:9:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "*",
                    "rightExpression": {
                      "hexValue": "32",
                      "id": 67736,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "21274:1:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "src": "21262:13:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 67593,
                  "id": 67738,
                  "nodeType": "Return",
                  "src": "21255:20:107"
                }
              ]
            },
            "documentation": {
              "id": 67587,
              "nodeType": "StructuredDocumentation",
              "src": "19308:255:107",
              "text": " @dev Intrnal high precision (36 decimal places) natural logarithm (ln(x)) with signed 18 decimal fixed point argument,\n for x close to one.\n Should only be used if x is between LN_36_LOWER_BOUND and LN_36_UPPER_BOUND."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_ln_36",
            "nameLocation": "19577:6:107",
            "parameters": {
              "id": 67590,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67589,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "19591:1:107",
                  "nodeType": "VariableDeclaration",
                  "scope": 67740,
                  "src": "19584:8:107",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 67588,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "19584:6:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19583:10:107"
            },
            "returnParameters": {
              "id": 67593,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67592,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 67740,
                  "src": "19616:6:107",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 67591,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "19616:6:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19615:8:107"
            },
            "scope": 67741,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "LogExpMath",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 66447,
          "nodeType": "StructuredDocumentation",
          "src": "1224:446:107",
          "text": " @dev Exponentiation and logarithm functions for 18 decimal fixed point numbers (both base and exponent/argument).\n Exponentiation and logarithm with arbitrary bases (x^y and log_x(y)) are implemented by conversion to natural\n exponentiation and logarithm (where the base is Euler's number).\n @author Fernando Martinelli - @fernandomartinelli\n @author Sergio Yuhjtman - @sergioyuhjtman\n @author Daniel Fernandez - @dmf7z"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          67741
        ],
        "name": "LogExpMath",
        "nameLocation": "1679:10:107",
        "scope": 67742,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 107
} as const;
