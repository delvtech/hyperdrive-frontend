export const LogExpMath = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220ff89b9588d8061ea4873bfecb3707032f5f8eb72ef24e9ab904168a951fa9bd364736f6c63430008130033",
    "sourceMap": "1671:19613:108:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;1671:19613:108;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220ff89b9588d8061ea4873bfecb3707032f5f8eb72ef24e9ab904168a951fa9bd364736f6c63430008130033",
    "sourceMap": "1671:19613:108:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"Fernando Martinelli - @fernandomartinelliSergio Yuhjtman - @sergioyuhjtmanDaniel Fernandez - @dmf7z\",\"details\":\"Exponentiation and logarithm functions for 18 decimal fixed point numbers (both base and exponent/argument). Exponentiation and logarithm with arbitrary bases (x^y and log_x(y)) are implemented by conversion to natural exponentiation and logarithm (where the base is Euler's number).\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"test/3rdPartyLibs/LogExpMath.sol\":\"LogExpMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"test/3rdPartyLibs/BalancerErrors.sol\":{\"keccak256\":\"0xd4bc389c3bb940fe0ebd712a06c219dd8ebcaa8749fa5e166c8a373ca7eaa4ca\",\"license\":\"GPL-3.0-or-later\",\"urls\":[\"bzz-raw://9d0847b6535322c1ffa9d2783b32557f80aed5e8de430c824a496ea3b6f58611\",\"dweb:/ipfs/QmRDqDSkP3FDvFYbPQNXwYq25FbYsx1UEYSg11caiw2xtU\"]},\"test/3rdPartyLibs/LogExpMath.sol\":{\"keccak256\":\"0x6ce1763535e5457f8e6132d74a1d16b857fb5eac7a63a9773df5768095513dee\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://36dfca19e82dd52bc30eab2aa2441e59cc9dbac583d65a02a1b4a045620258e9\",\"dweb:/ipfs/QmbyuAJ9e1FnaWJB1aizXR5DfiAXrXAaRT9B8DPwPQboM1\"]}},\"version\":1}",
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
    "id": 68679,
    "exportedSymbols": {
      "BalancerErrors": [
        67378
      ],
      "LogExpMath": [
        68678
      ],
      "_require": [
        66822,
        66841
      ]
    },
    "nodeType": "SourceUnit",
    "src": "1094:20191:108",
    "nodes": [
      {
        "id": 67380,
        "nodeType": "PragmaDirective",
        "src": "1094:23:108",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 67383,
        "nodeType": "ImportDirective",
        "src": "1119:80:108",
        "nodes": [],
        "absolutePath": "test/3rdPartyLibs/BalancerErrors.sol",
        "file": "test/3rdPartyLibs/BalancerErrors.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 68679,
        "sourceUnit": 67379,
        "symbolAliases": [
          {
            "foreign": {
              "id": 67381,
              "name": "BalancerErrors",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 67378,
              "src": "1128:14:108",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 67382,
              "name": "_require",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "src": "1144:8:108",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 68678,
        "nodeType": "ContractDefinition",
        "src": "1671:19613:108",
        "nodes": [
          {
            "id": 67387,
            "nodeType": "VariableDeclaration",
            "src": "1951:29:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ONE_18",
            "nameLocation": "1967:6:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 67385,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "1951:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "31653138",
              "id": 67386,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1976:4:108",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1000000000000000000_by_1",
                "typeString": "int_const 1000000000000000000"
              },
              "value": "1e18"
            },
            "visibility": "internal"
          },
          {
            "id": 67390,
            "nodeType": "VariableDeclaration",
            "src": "2141:29:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ONE_20",
            "nameLocation": "2157:6:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 67388,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "2141:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "31653230",
              "id": 67389,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2166:4:108",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_100000000000000000000_by_1",
                "typeString": "int_const 100000000000000000000"
              },
              "value": "1e20"
            },
            "visibility": "internal"
          },
          {
            "id": 67393,
            "nodeType": "VariableDeclaration",
            "src": "2176:29:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ONE_36",
            "nameLocation": "2192:6:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 67391,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "2176:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "31653336",
              "id": 67392,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2201:4:108",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1000000000000000000000000000000000000_by_1",
                "typeString": "int_const 1000...(29 digits omitted)...0000"
              },
              "value": "1e36"
            },
            "visibility": "internal"
          },
          {
            "id": 67396,
            "nodeType": "VariableDeclaration",
            "src": "2722:45:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_NATURAL_EXPONENT",
            "nameLocation": "2738:20:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 67394,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "2722:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "313330653138",
              "id": 67395,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2761:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_130000000000000000000_by_1",
                "typeString": "int_const 130000000000000000000"
              },
              "value": "130e18"
            },
            "visibility": "internal"
          },
          {
            "id": 67400,
            "nodeType": "VariableDeclaration",
            "src": "2773:45:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MIN_NATURAL_EXPONENT",
            "nameLocation": "2789:20:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 67397,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "2773:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "id": 67399,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "nodeType": "UnaryOperation",
              "operator": "-",
              "prefix": true,
              "src": "2812:6:108",
              "subExpression": {
                "hexValue": "3431653138",
                "id": 67398,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "2813:5:108",
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
            "id": 67405,
            "nodeType": "VariableDeclaration",
            "src": "2969:49:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "LN_36_LOWER_BOUND",
            "nameLocation": "2985:17:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 67401,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "2969:6:108",
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
              "id": 67404,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "id": 67402,
                "name": "ONE_18",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 67387,
                "src": "3005:6:108",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                }
              },
              "nodeType": "BinaryOperation",
              "operator": "-",
              "rightExpression": {
                "hexValue": "31653137",
                "id": 67403,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "3014:4:108",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_100000000000000000_by_1",
                  "typeString": "int_const 100000000000000000"
                },
                "value": "1e17"
              },
              "src": "3005:13:108",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 67410,
            "nodeType": "VariableDeclaration",
            "src": "3024:49:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "LN_36_UPPER_BOUND",
            "nameLocation": "3040:17:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 67406,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "3024:6:108",
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
              "id": 67409,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "id": 67407,
                "name": "ONE_18",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 67387,
                "src": "3060:6:108",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                }
              },
              "nodeType": "BinaryOperation",
              "operator": "+",
              "rightExpression": {
                "hexValue": "31653137",
                "id": 67408,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "3069:4:108",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_100000000000000000_by_1",
                  "typeString": "int_const 100000000000000000"
                },
                "value": "1e17"
              },
              "src": "3060:13:108",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 67420,
            "nodeType": "VariableDeclaration",
            "src": "3080:65:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MILD_EXPONENT_BOUND",
            "nameLocation": "3097:19:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67411,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "3080:7:108",
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
              "id": 67419,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "commonType": {
                  "typeIdentifier": "t_rational_28948022309329048855892746252171976963317496166410141009864396001978282409984_by_1",
                  "typeString": "int_const 2894...(69 digits omitted)...9984"
                },
                "id": 67414,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "leftExpression": {
                  "hexValue": "32",
                  "id": 67412,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "3119:1:108",
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
                  "id": 67413,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "3124:3:108",
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_254_by_1",
                    "typeString": "int_const 254"
                  },
                  "value": "254"
                },
                "src": "3119:8:108",
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
                    "id": 67417,
                    "name": "ONE_20",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 67390,
                    "src": "3138:6:108",
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
                  "id": 67416,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "nodeType": "ElementaryTypeNameExpression",
                  "src": "3130:7:108",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_uint256_$",
                    "typeString": "type(uint256)"
                  },
                  "typeName": {
                    "id": 67415,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3130:7:108",
                    "typeDescriptions": {}
                  }
                },
                "id": 67418,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "typeConversion",
                "lValueRequested": false,
                "nameLocations": [],
                "names": [],
                "nodeType": "FunctionCall",
                "src": "3130:15:108",
                "tryCall": false,
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "src": "3119:26:108",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 67423,
            "nodeType": "VariableDeclaration",
            "src": "3180:42:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "x0",
            "nameLocation": "3196:2:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 67421,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "3180:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "313238303030303030303030303030303030303030",
              "id": 67422,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3201:21:108",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_128000000000000000000_by_1",
                "typeString": "int_const 128000000000000000000"
              },
              "value": "128000000000000000000"
            },
            "visibility": "internal"
          },
          {
            "id": 67426,
            "nodeType": "VariableDeclaration",
            "src": "3236:85:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "a0",
            "nameLocation": "3252:2:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 67424,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "3236:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "3338383737303834303539393435393530393232323030303030303030303030303030303030303030303030303030303030303030303030",
              "id": 67425,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3265:56:108",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_38877084059945950922200000000000000000000000000000000000_by_1",
                "typeString": "int_const 3887...(48 digits omitted)...0000"
              },
              "value": "38877084059945950922200000000000000000000000000000000000"
            },
            "visibility": "internal"
          },
          {
            "id": 67429,
            "nodeType": "VariableDeclaration",
            "src": "3352:41:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "x1",
            "nameLocation": "3368:2:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 67427,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "3352:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "3634303030303030303030303030303030303030",
              "id": 67428,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3373:20:108",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_64000000000000000000_by_1",
                "typeString": "int_const 64000000000000000000"
              },
              "value": "64000000000000000000"
            },
            "visibility": "internal"
          },
          {
            "id": 67432,
            "nodeType": "VariableDeclaration",
            "src": "3407:49:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "a1",
            "nameLocation": "3423:2:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 67430,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "3407:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "36323335313439303830383131363136383832393130303030303030",
              "id": 67431,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3428:28:108",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_6235149080811616882910000000_by_1",
                "typeString": "int_const 6235149080811616882910000000"
              },
              "value": "6235149080811616882910000000"
            },
            "visibility": "internal"
          },
          {
            "id": 67435,
            "nodeType": "VariableDeclaration",
            "src": "3516:43:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "x2",
            "nameLocation": "3532:2:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 67433,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "3516:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "33323030303030303030303030303030303030303030",
              "id": 67434,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3537:22:108",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_3200000000000000000000_by_1",
                "typeString": "int_const 3200000000000000000000"
              },
              "value": "3200000000000000000000"
            },
            "visibility": "internal"
          },
          {
            "id": 67438,
            "nodeType": "VariableDeclaration",
            "src": "3573:55:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "a2",
            "nameLocation": "3589:2:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 67436,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "3573:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "37383936323936303138323638303639353136313030303030303030303030303030",
              "id": 67437,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3594:34:108",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_7896296018268069516100000000000000_by_1",
                "typeString": "int_const 7896...(26 digits omitted)...0000"
              },
              "value": "7896296018268069516100000000000000"
            },
            "visibility": "internal"
          },
          {
            "id": 67441,
            "nodeType": "VariableDeclaration",
            "src": "3645:43:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "x3",
            "nameLocation": "3661:2:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 67439,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "3645:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "31363030303030303030303030303030303030303030",
              "id": 67440,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3666:22:108",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1600000000000000000000_by_1",
                "typeString": "int_const 1600000000000000000000"
              },
              "value": "1600000000000000000000"
            },
            "visibility": "internal"
          },
          {
            "id": 67444,
            "nodeType": "VariableDeclaration",
            "src": "3702:48:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "a3",
            "nameLocation": "3718:2:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 67442,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "3702:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "383838363131303532303530373837323633363736303030303030",
              "id": 67443,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3723:27:108",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_888611052050787263676000000_by_1",
                "typeString": "int_const 888611052050787263676000000"
              },
              "value": "888611052050787263676000000"
            },
            "visibility": "internal"
          },
          {
            "id": 67447,
            "nodeType": "VariableDeclaration",
            "src": "3767:42:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "x4",
            "nameLocation": "3783:2:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 67445,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "3767:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "383030303030303030303030303030303030303030",
              "id": 67446,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3788:21:108",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_800000000000000000000_by_1",
                "typeString": "int_const 800000000000000000000"
              },
              "value": "800000000000000000000"
            },
            "visibility": "internal"
          },
          {
            "id": 67450,
            "nodeType": "VariableDeclaration",
            "src": "3823:45:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "a4",
            "nameLocation": "3839:2:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 67448,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "3823:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "323938303935373938373034313732383237343734303030",
              "id": 67449,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3844:24:108",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_298095798704172827474000_by_1",
                "typeString": "int_const 298095798704172827474000"
              },
              "value": "298095798704172827474000"
            },
            "visibility": "internal"
          },
          {
            "id": 67453,
            "nodeType": "VariableDeclaration",
            "src": "3885:42:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "x5",
            "nameLocation": "3901:2:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 67451,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "3885:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "343030303030303030303030303030303030303030",
              "id": 67452,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3906:21:108",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_400000000000000000000_by_1",
                "typeString": "int_const 400000000000000000000"
              },
              "value": "400000000000000000000"
            },
            "visibility": "internal"
          },
          {
            "id": 67456,
            "nodeType": "VariableDeclaration",
            "src": "3941:43:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "a5",
            "nameLocation": "3957:2:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 67454,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "3941:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "35343539383135303033333134343233393037383130",
              "id": 67455,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3962:22:108",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_5459815003314423907810_by_1",
                "typeString": "int_const 5459815003314423907810"
              },
              "value": "5459815003314423907810"
            },
            "visibility": "internal"
          },
          {
            "id": 67459,
            "nodeType": "VariableDeclaration",
            "src": "4001:42:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "x6",
            "nameLocation": "4017:2:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 67457,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "4001:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "323030303030303030303030303030303030303030",
              "id": 67458,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "4022:21:108",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_200000000000000000000_by_1",
                "typeString": "int_const 200000000000000000000"
              },
              "value": "200000000000000000000"
            },
            "visibility": "internal"
          },
          {
            "id": 67462,
            "nodeType": "VariableDeclaration",
            "src": "4057:42:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "a6",
            "nameLocation": "4073:2:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 67460,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "4057:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "373338393035363039383933303635303232373233",
              "id": 67461,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "4078:21:108",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_738905609893065022723_by_1",
                "typeString": "int_const 738905609893065022723"
              },
              "value": "738905609893065022723"
            },
            "visibility": "internal"
          },
          {
            "id": 67465,
            "nodeType": "VariableDeclaration",
            "src": "4116:42:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "x7",
            "nameLocation": "4132:2:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 67463,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "4116:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "313030303030303030303030303030303030303030",
              "id": 67464,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "4137:21:108",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_100000000000000000000_by_1",
                "typeString": "int_const 100000000000000000000"
              },
              "value": "100000000000000000000"
            },
            "visibility": "internal"
          },
          {
            "id": 67468,
            "nodeType": "VariableDeclaration",
            "src": "4172:42:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "a7",
            "nameLocation": "4188:2:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 67466,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "4172:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "323731383238313832383435393034353233353336",
              "id": 67467,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "4193:21:108",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_271828182845904523536_by_1",
                "typeString": "int_const 271828182845904523536"
              },
              "value": "271828182845904523536"
            },
            "visibility": "internal"
          },
          {
            "id": 67471,
            "nodeType": "VariableDeclaration",
            "src": "4231:41:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "x8",
            "nameLocation": "4247:2:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 67469,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "4231:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "3530303030303030303030303030303030303030",
              "id": 67470,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "4252:20:108",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_50000000000000000000_by_1",
                "typeString": "int_const 50000000000000000000"
              },
              "value": "50000000000000000000"
            },
            "visibility": "internal"
          },
          {
            "id": 67474,
            "nodeType": "VariableDeclaration",
            "src": "4287:42:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "a8",
            "nameLocation": "4303:2:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 67472,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "4287:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "313634383732313237303730303132383134363835",
              "id": 67473,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "4308:21:108",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_164872127070012814685_by_1",
                "typeString": "int_const 164872127070012814685"
              },
              "value": "164872127070012814685"
            },
            "visibility": "internal"
          },
          {
            "id": 67477,
            "nodeType": "VariableDeclaration",
            "src": "4346:41:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "x9",
            "nameLocation": "4362:2:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 67475,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "4346:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "3235303030303030303030303030303030303030",
              "id": 67476,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "4367:20:108",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_25000000000000000000_by_1",
                "typeString": "int_const 25000000000000000000"
              },
              "value": "25000000000000000000"
            },
            "visibility": "internal"
          },
          {
            "id": 67480,
            "nodeType": "VariableDeclaration",
            "src": "4402:42:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "a9",
            "nameLocation": "4418:2:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 67478,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "4402:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "313238343032353431363638373734313438343037",
              "id": 67479,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "4423:21:108",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_128402541668774148407_by_1",
                "typeString": "int_const 128402541668774148407"
              },
              "value": "128402541668774148407"
            },
            "visibility": "internal"
          },
          {
            "id": 67483,
            "nodeType": "VariableDeclaration",
            "src": "4461:42:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "x10",
            "nameLocation": "4477:3:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 67481,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "4461:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "3132353030303030303030303030303030303030",
              "id": 67482,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "4483:20:108",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_12500000000000000000_by_1",
                "typeString": "int_const 12500000000000000000"
              },
              "value": "12500000000000000000"
            },
            "visibility": "internal"
          },
          {
            "id": 67486,
            "nodeType": "VariableDeclaration",
            "src": "4518:43:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "a10",
            "nameLocation": "4534:3:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 67484,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "4518:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "313133333134383435333036363832363331363833",
              "id": 67485,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "4540:21:108",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_113314845306682631683_by_1",
                "typeString": "int_const 113314845306682631683"
              },
              "value": "113314845306682631683"
            },
            "visibility": "internal"
          },
          {
            "id": 67489,
            "nodeType": "VariableDeclaration",
            "src": "4579:41:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "x11",
            "nameLocation": "4595:3:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 67487,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "4579:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "36323530303030303030303030303030303030",
              "id": 67488,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "4601:19:108",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_6250000000000000000_by_1",
                "typeString": "int_const 6250000000000000000"
              },
              "value": "6250000000000000000"
            },
            "visibility": "internal"
          },
          {
            "id": 67492,
            "nodeType": "VariableDeclaration",
            "src": "4635:43:108",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "a11",
            "nameLocation": "4651:3:108",
            "scope": 68678,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 67490,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "4635:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "313036343439343435383931373835393432393536",
              "id": 67491,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "4657:21:108",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_106449445891785942956_by_1",
                "typeString": "int_const 106449445891785942956"
              },
              "value": "106449445891785942956"
            },
            "visibility": "internal"
          },
          {
            "id": 67622,
            "nodeType": "FunctionDefinition",
            "src": "4916:2283:108",
            "nodes": [],
            "body": {
              "id": 67621,
              "nodeType": "Block",
              "src": "4983:2216:108",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 67504,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 67502,
                      "name": "y",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67497,
                      "src": "4997:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 67503,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5002:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4997:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 67511,
                  "nodeType": "IfStatement",
                  "src": "4993:131:108",
                  "trueBody": {
                    "id": 67510,
                    "nodeType": "Block",
                    "src": "5005:119:108",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 67507,
                              "name": "ONE_18",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67387,
                              "src": "5106:6:108",
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
                            "id": 67506,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "5098:7:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 67505,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "5098:7:108",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 67508,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5098:15:108",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 67501,
                        "id": 67509,
                        "nodeType": "Return",
                        "src": "5091:22:108"
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
                    "id": 67514,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 67512,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67495,
                      "src": "5138:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 67513,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5143:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "5138:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 67518,
                  "nodeType": "IfStatement",
                  "src": "5134:45:108",
                  "trueBody": {
                    "id": 67517,
                    "nodeType": "Block",
                    "src": "5146:33:108",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "30",
                          "id": 67515,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5167:1:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 67501,
                        "id": 67516,
                        "nodeType": "Return",
                        "src": "5160:8:108"
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
                        "id": 67524,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 67522,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 67520,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67495,
                            "src": "5558:1:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "323535",
                            "id": 67521,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5563:3:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_255_by_1",
                              "typeString": "int_const 255"
                            },
                            "value": "255"
                          },
                          "src": "5558:8:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 67523,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5570:1:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "5558:13:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "expression": {
                          "id": 67525,
                          "name": "BalancerErrors",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 67378,
                          "src": "5573:14:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_BalancerErrors_$67378_$",
                            "typeString": "type(library BalancerErrors)"
                          }
                        },
                        "id": 67526,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "5588:15:108",
                        "memberName": "X_OUT_OF_BOUNDS",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 66894,
                        "src": "5573:30:108",
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
                      "id": 67519,
                      "name": "_require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        66822,
                        66841
                      ],
                      "referencedDeclaration": 66822,
                      "src": "5549:8:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bool_$_t_uint256_$returns$__$",
                        "typeString": "function (bool,uint256) pure"
                      }
                    },
                    "id": 67527,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5549:55:108",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 67528,
                  "nodeType": "ExpressionStatement",
                  "src": "5549:55:108"
                },
                {
                  "assignments": [
                    67530
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 67530,
                      "mutability": "mutable",
                      "name": "x_int256",
                      "nameLocation": "5621:8:108",
                      "nodeType": "VariableDeclaration",
                      "scope": 67621,
                      "src": "5614:15:108",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 67529,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5614:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 67535,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 67533,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67495,
                        "src": "5639:1:108",
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
                      "id": 67532,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "5632:6:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_int256_$",
                        "typeString": "type(int256)"
                      },
                      "typeName": {
                        "id": 67531,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5632:6:108",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 67534,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5632:9:108",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5614:27:108"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 67539,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 67537,
                          "name": "y",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 67497,
                          "src": "6004:1:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "id": 67538,
                          "name": "MILD_EXPONENT_BOUND",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 67420,
                          "src": "6008:19:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6004:23:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "expression": {
                          "id": 67540,
                          "name": "BalancerErrors",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 67378,
                          "src": "6029:14:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_BalancerErrors_$67378_$",
                            "typeString": "type(library BalancerErrors)"
                          }
                        },
                        "id": 67541,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "6044:15:108",
                        "memberName": "Y_OUT_OF_BOUNDS",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 66897,
                        "src": "6029:30:108",
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
                      "id": 67536,
                      "name": "_require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        66822,
                        66841
                      ],
                      "referencedDeclaration": 66822,
                      "src": "5995:8:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bool_$_t_uint256_$returns$__$",
                        "typeString": "function (bool,uint256) pure"
                      }
                    },
                    "id": 67542,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5995:65:108",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 67543,
                  "nodeType": "ExpressionStatement",
                  "src": "5995:65:108"
                },
                {
                  "assignments": [
                    67545
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 67545,
                      "mutability": "mutable",
                      "name": "y_int256",
                      "nameLocation": "6077:8:108",
                      "nodeType": "VariableDeclaration",
                      "scope": 67621,
                      "src": "6070:15:108",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 67544,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6070:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 67550,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 67548,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67497,
                        "src": "6095:1:108",
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
                      "id": 67547,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "6088:6:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_int256_$",
                        "typeString": "type(int256)"
                      },
                      "typeName": {
                        "id": 67546,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6088:6:108",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 67549,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6088:9:108",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6070:27:108"
                },
                {
                  "assignments": [
                    67552
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 67552,
                      "mutability": "mutable",
                      "name": "logx_times_y",
                      "nameLocation": "6115:12:108",
                      "nodeType": "VariableDeclaration",
                      "scope": 67621,
                      "src": "6108:19:108",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 67551,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6108:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 67553,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6108:19:108"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 67560,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
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
                        "name": "LN_36_LOWER_BOUND",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67405,
                        "src": "6141:17:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "id": 67555,
                        "name": "x_int256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67530,
                        "src": "6161:8:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "6141:28:108",
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
                      "id": 67559,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 67557,
                        "name": "x_int256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67530,
                        "src": "6173:8:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "id": 67558,
                        "name": "LN_36_UPPER_BOUND",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67410,
                        "src": "6184:17:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "6173:28:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "6141:60:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 67596,
                    "nodeType": "Block",
                    "src": "6805:64:108",
                    "statements": [
                      {
                        "expression": {
                          "id": 67594,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67588,
                            "name": "logx_times_y",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67552,
                            "src": "6819:12:108",
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
                            "id": 67593,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 67590,
                                  "name": "x_int256",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 67530,
                                  "src": "6838:8:108",
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
                                "id": 67589,
                                "name": "_ln",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 68523,
                                "src": "6834:3:108",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                                  "typeString": "function (int256) pure returns (int256)"
                                }
                              },
                              "id": 67591,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6834:13:108",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 67592,
                              "name": "y_int256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67545,
                              "src": "6850:8:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "6834:24:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "6819:39:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67595,
                        "nodeType": "ExpressionStatement",
                        "src": "6819:39:108"
                      }
                    ]
                  },
                  "id": 67597,
                  "nodeType": "IfStatement",
                  "src": "6137:732:108",
                  "trueBody": {
                    "id": 67587,
                    "nodeType": "Block",
                    "src": "6203:596:108",
                    "statements": [
                      {
                        "assignments": [
                          67562
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 67562,
                            "mutability": "mutable",
                            "name": "ln_36_x",
                            "nameLocation": "6224:7:108",
                            "nodeType": "VariableDeclaration",
                            "scope": 67587,
                            "src": "6217:14:108",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "typeName": {
                              "id": 67561,
                              "name": "int256",
                              "nodeType": "ElementaryTypeName",
                              "src": "6217:6:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 67566,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 67564,
                              "name": "x_int256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67530,
                              "src": "6241:8:108",
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
                            "id": 67563,
                            "name": "_ln_36",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68677,
                            "src": "6234:6:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                              "typeString": "function (int256) pure returns (int256)"
                            }
                          },
                          "id": 67565,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6234:16:108",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6217:33:108"
                      },
                      {
                        "expression": {
                          "id": 67585,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67567,
                            "name": "logx_times_y",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67552,
                            "src": "6651:12:108",
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
                                "id": 67583,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 67573,
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
                                        "id": 67570,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "id": 67568,
                                          "name": "ln_36_x",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 67562,
                                          "src": "6668:7:108",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "/",
                                        "rightExpression": {
                                          "id": 67569,
                                          "name": "ONE_18",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 67387,
                                          "src": "6678:6:108",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                          }
                                        },
                                        "src": "6668:16:108",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      }
                                    ],
                                    "id": 67571,
                                    "isConstant": false,
                                    "isInlineArray": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "TupleExpression",
                                    "src": "6667:18:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67572,
                                    "name": "y_int256",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67545,
                                    "src": "6704:8:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "6667:45:108",
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
                                  "id": 67582,
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
                                        "id": 67579,
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
                                              "id": 67576,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "leftExpression": {
                                                "id": 67574,
                                                "name": "ln_36_x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67562,
                                                "src": "6733:7:108",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_int256",
                                                  "typeString": "int256"
                                                }
                                              },
                                              "nodeType": "BinaryOperation",
                                              "operator": "%",
                                              "rightExpression": {
                                                "id": 67575,
                                                "name": "ONE_18",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67387,
                                                "src": "6743:6:108",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_int256",
                                                  "typeString": "int256"
                                                }
                                              },
                                              "src": "6733:16:108",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                              }
                                            }
                                          ],
                                          "id": 67577,
                                          "isConstant": false,
                                          "isInlineArray": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "nodeType": "TupleExpression",
                                          "src": "6732:18:108",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "*",
                                        "rightExpression": {
                                          "id": 67578,
                                          "name": "y_int256",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 67545,
                                          "src": "6753:8:108",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                          }
                                        },
                                        "src": "6732:29:108",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      }
                                    ],
                                    "id": 67580,
                                    "isConstant": false,
                                    "isInlineArray": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "TupleExpression",
                                    "src": "6731:31:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "/",
                                  "rightExpression": {
                                    "id": 67581,
                                    "name": "ONE_18",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67387,
                                    "src": "6781:6:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "6731:56:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "6667:120:108",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 67584,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "6666:122:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "6651:137:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67586,
                        "nodeType": "ExpressionStatement",
                        "src": "6651:137:108"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 67600,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67598,
                      "name": "logx_times_y",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67552,
                      "src": "6878:12:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "/=",
                    "rightHandSide": {
                      "id": 67599,
                      "name": "ONE_18",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67387,
                      "src": "6894:6:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "6878:22:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67601,
                  "nodeType": "ExpressionStatement",
                  "src": "6878:22:108"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 67609,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
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
                            "id": 67603,
                            "name": "MIN_NATURAL_EXPONENT",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67400,
                            "src": "6996:20:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "id": 67604,
                            "name": "logx_times_y",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67552,
                            "src": "7020:12:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "6996:36:108",
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
                          "id": 67608,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 67606,
                            "name": "logx_times_y",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67552,
                            "src": "7052:12:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "id": 67607,
                            "name": "MAX_NATURAL_EXPONENT",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67396,
                            "src": "7068:20:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "7052:36:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "6996:92:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "expression": {
                          "id": 67610,
                          "name": "BalancerErrors",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 67378,
                          "src": "7102:14:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_BalancerErrors_$67378_$",
                            "typeString": "type(library BalancerErrors)"
                          }
                        },
                        "id": 67611,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "7117:21:108",
                        "memberName": "PRODUCT_OUT_OF_BOUNDS",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 66900,
                        "src": "7102:36:108",
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
                      "id": 67602,
                      "name": "_require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        66822,
                        66841
                      ],
                      "referencedDeclaration": 66822,
                      "src": "6974:8:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bool_$_t_uint256_$returns$__$",
                        "typeString": "function (bool,uint256) pure"
                      }
                    },
                    "id": 67612,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6974:174:108",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 67613,
                  "nodeType": "ExpressionStatement",
                  "src": "6974:174:108"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 67617,
                            "name": "logx_times_y",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67552,
                            "src": "7178:12:108",
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
                          "id": 67616,
                          "name": "exp",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 68049,
                          "src": "7174:3:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                            "typeString": "function (int256) pure returns (int256)"
                          }
                        },
                        "id": 67618,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7174:17:108",
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
                      "id": 67615,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "7166:7:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 67614,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7166:7:108",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 67619,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7166:26:108",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 67501,
                  "id": 67620,
                  "nodeType": "Return",
                  "src": "7159:33:108"
                }
              ]
            },
            "documentation": {
              "id": 67493,
              "nodeType": "StructuredDocumentation",
              "src": "4697:214:108",
              "text": " @dev Exponentiation (x^y) with unsigned 18 decimal fixed point base and exponent.\n Reverts if ln(x) * y is smaller than `MIN_NATURAL_EXPONENT`, or larger than `MAX_NATURAL_EXPONENT`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "pow",
            "nameLocation": "4925:3:108",
            "parameters": {
              "id": 67498,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67495,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "4937:1:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 67622,
                  "src": "4929:9:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 67494,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4929:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 67497,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "4948:1:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 67622,
                  "src": "4940:9:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 67496,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4940:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4928:22:108"
            },
            "returnParameters": {
              "id": 67501,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67500,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 67622,
                  "src": "4974:7:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 67499,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4974:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4973:9:108"
            },
            "scope": 68678,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 68049,
            "nodeType": "FunctionDefinition",
            "src": "7413:5421:108",
            "nodes": [],
            "body": {
              "id": 68048,
              "nodeType": "Block",
              "src": "7467:5367:108",
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
                        "id": 67637,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
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
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67625,
                            "src": "7499:1:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "id": 67632,
                            "name": "MIN_NATURAL_EXPONENT",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67400,
                            "src": "7504:20:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "7499:25:108",
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
                          "id": 67636,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 67634,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67625,
                            "src": "7528:1:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "id": 67635,
                            "name": "MAX_NATURAL_EXPONENT",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67396,
                            "src": "7533:20:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "7528:25:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "7499:54:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "expression": {
                          "id": 67638,
                          "name": "BalancerErrors",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 67378,
                          "src": "7567:14:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_BalancerErrors_$67378_$",
                            "typeString": "type(library BalancerErrors)"
                          }
                        },
                        "id": 67639,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "7582:16:108",
                        "memberName": "INVALID_EXPONENT",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 66903,
                        "src": "7567:31:108",
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
                      "id": 67630,
                      "name": "_require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        66822,
                        66841
                      ],
                      "referencedDeclaration": 66822,
                      "src": "7477:8:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bool_$_t_uint256_$returns$__$",
                        "typeString": "function (bool,uint256) pure"
                      }
                    },
                    "id": 67640,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7477:131:108",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 67641,
                  "nodeType": "ExpressionStatement",
                  "src": "7477:131:108"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 67644,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 67642,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67625,
                      "src": "7623:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 67643,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7627:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "7623:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 67657,
                  "nodeType": "IfStatement",
                  "src": "7619:353:108",
                  "trueBody": {
                    "id": 67656,
                    "nodeType": "Block",
                    "src": "7630:342:108",
                    "statements": [
                      {
                        "expression": {
                          "components": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              "id": 67653,
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
                                    "id": 67647,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "id": 67645,
                                      "name": "ONE_18",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 67387,
                                      "src": "7934:6:108",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "*",
                                    "rightExpression": {
                                      "id": 67646,
                                      "name": "ONE_18",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 67387,
                                      "src": "7943:6:108",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    },
                                    "src": "7934:15:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  }
                                ],
                                "id": 67648,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "7933:17:108",
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
                                    "id": 67651,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "UnaryOperation",
                                    "operator": "-",
                                    "prefix": true,
                                    "src": "7957:2:108",
                                    "subExpression": {
                                      "id": 67650,
                                      "name": "x",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 67625,
                                      "src": "7958:1:108",
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
                                  "id": 67649,
                                  "name": "exp",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 68049,
                                  "src": "7953:3:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                                    "typeString": "function (int256) pure returns (int256)"
                                  }
                                },
                                "id": 67652,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7953:7:108",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "src": "7933:27:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "id": 67654,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "7932:29:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "functionReturnParameters": 67629,
                        "id": 67655,
                        "nodeType": "Return",
                        "src": "7925:36:108"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    67659
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 67659,
                      "mutability": "mutable",
                      "name": "firstAN",
                      "nameLocation": "9280:7:108",
                      "nodeType": "VariableDeclaration",
                      "scope": 68048,
                      "src": "9273:14:108",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 67658,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9273:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 67660,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9273:14:108"
                },
                {
                  "condition": {
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
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67625,
                      "src": "9301:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 67662,
                      "name": "x0",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67423,
                      "src": "9306:2:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "9301:7:108",
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
                      "id": 67675,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 67673,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67625,
                        "src": "9378:1:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">=",
                      "rightExpression": {
                        "id": 67674,
                        "name": "x1",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67429,
                        "src": "9383:2:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "9378:7:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "id": 67689,
                      "nodeType": "Block",
                      "src": "9451:66:108",
                      "statements": [
                        {
                          "expression": {
                            "id": 67687,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "id": 67685,
                              "name": "firstAN",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67659,
                              "src": "9465:7:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "hexValue": "31",
                              "id": 67686,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9475:1:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "src": "9465:11:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "id": 67688,
                          "nodeType": "ExpressionStatement",
                          "src": "9465:11:108"
                        }
                      ]
                    },
                    "id": 67690,
                    "nodeType": "IfStatement",
                    "src": "9374:143:108",
                    "trueBody": {
                      "id": 67684,
                      "nodeType": "Block",
                      "src": "9387:58:108",
                      "statements": [
                        {
                          "expression": {
                            "id": 67678,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "id": 67676,
                              "name": "x",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67625,
                              "src": "9401:1:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "-=",
                            "rightHandSide": {
                              "id": 67677,
                              "name": "x1",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67429,
                              "src": "9406:2:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "9401:7:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "id": 67679,
                          "nodeType": "ExpressionStatement",
                          "src": "9401:7:108"
                        },
                        {
                          "expression": {
                            "id": 67682,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "id": 67680,
                              "name": "firstAN",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67659,
                              "src": "9422:7:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "id": 67681,
                              "name": "a1",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67432,
                              "src": "9432:2:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "9422:12:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "id": 67683,
                          "nodeType": "ExpressionStatement",
                          "src": "9422:12:108"
                        }
                      ]
                    }
                  },
                  "id": 67691,
                  "nodeType": "IfStatement",
                  "src": "9297:220:108",
                  "trueBody": {
                    "id": 67672,
                    "nodeType": "Block",
                    "src": "9310:58:108",
                    "statements": [
                      {
                        "expression": {
                          "id": 67666,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67664,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67625,
                            "src": "9324:1:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "id": 67665,
                            "name": "x0",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67423,
                            "src": "9329:2:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "9324:7:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67667,
                        "nodeType": "ExpressionStatement",
                        "src": "9324:7:108"
                      },
                      {
                        "expression": {
                          "id": 67670,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67668,
                            "name": "firstAN",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67659,
                            "src": "9345:7:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 67669,
                            "name": "a0",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67426,
                            "src": "9355:2:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "9345:12:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67671,
                        "nodeType": "ExpressionStatement",
                        "src": "9345:12:108"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 67694,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67692,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67625,
                      "src": "9667:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "*=",
                    "rightHandSide": {
                      "hexValue": "313030",
                      "id": 67693,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "9672:3:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_100_by_1",
                        "typeString": "int_const 100"
                      },
                      "value": "100"
                    },
                    "src": "9667:8:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67695,
                  "nodeType": "ExpressionStatement",
                  "src": "9667:8:108"
                },
                {
                  "assignments": [
                    67697
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 67697,
                      "mutability": "mutable",
                      "name": "product",
                      "nameLocation": "9895:7:108",
                      "nodeType": "VariableDeclaration",
                      "scope": 68048,
                      "src": "9888:14:108",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 67696,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9888:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 67699,
                  "initialValue": {
                    "id": 67698,
                    "name": "ONE_20",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 67390,
                    "src": "9905:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9888:23:108"
                },
                {
                  "condition": {
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
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67625,
                      "src": "9926:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 67701,
                      "name": "x2",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67435,
                      "src": "9931:2:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "9926:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 67717,
                  "nodeType": "IfStatement",
                  "src": "9922:92:108",
                  "trueBody": {
                    "id": 67716,
                    "nodeType": "Block",
                    "src": "9935:79:108",
                    "statements": [
                      {
                        "expression": {
                          "id": 67705,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67703,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67625,
                            "src": "9949:1:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "id": 67704,
                            "name": "x2",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67435,
                            "src": "9954:2:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "9949:7:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67706,
                        "nodeType": "ExpressionStatement",
                        "src": "9949:7:108"
                      },
                      {
                        "expression": {
                          "id": 67714,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67707,
                            "name": "product",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67697,
                            "src": "9970:7:108",
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
                            "id": 67713,
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
                                  "id": 67710,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67708,
                                    "name": "product",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67697,
                                    "src": "9981:7:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67709,
                                    "name": "a2",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67438,
                                    "src": "9991:2:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "9981:12:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67711,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "9980:14:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67712,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67390,
                              "src": "9997:6:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "9980:23:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "9970:33:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67715,
                        "nodeType": "ExpressionStatement",
                        "src": "9970:33:108"
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
                    "id": 67720,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 67718,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67625,
                      "src": "10027:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 67719,
                      "name": "x3",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67441,
                      "src": "10032:2:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "10027:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 67735,
                  "nodeType": "IfStatement",
                  "src": "10023:92:108",
                  "trueBody": {
                    "id": 67734,
                    "nodeType": "Block",
                    "src": "10036:79:108",
                    "statements": [
                      {
                        "expression": {
                          "id": 67723,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67721,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67625,
                            "src": "10050:1:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "id": 67722,
                            "name": "x3",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67441,
                            "src": "10055:2:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "10050:7:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67724,
                        "nodeType": "ExpressionStatement",
                        "src": "10050:7:108"
                      },
                      {
                        "expression": {
                          "id": 67732,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67725,
                            "name": "product",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67697,
                            "src": "10071:7:108",
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
                            "id": 67731,
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
                                  "id": 67728,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67726,
                                    "name": "product",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67697,
                                    "src": "10082:7:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67727,
                                    "name": "a3",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67444,
                                    "src": "10092:2:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "10082:12:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67729,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "10081:14:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67730,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67390,
                              "src": "10098:6:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "10081:23:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "10071:33:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67733,
                        "nodeType": "ExpressionStatement",
                        "src": "10071:33:108"
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
                    "id": 67738,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 67736,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67625,
                      "src": "10128:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 67737,
                      "name": "x4",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67447,
                      "src": "10133:2:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "10128:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 67753,
                  "nodeType": "IfStatement",
                  "src": "10124:92:108",
                  "trueBody": {
                    "id": 67752,
                    "nodeType": "Block",
                    "src": "10137:79:108",
                    "statements": [
                      {
                        "expression": {
                          "id": 67741,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67739,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67625,
                            "src": "10151:1:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "id": 67740,
                            "name": "x4",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67447,
                            "src": "10156:2:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "10151:7:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67742,
                        "nodeType": "ExpressionStatement",
                        "src": "10151:7:108"
                      },
                      {
                        "expression": {
                          "id": 67750,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67743,
                            "name": "product",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67697,
                            "src": "10172:7:108",
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
                            "id": 67749,
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
                                  "id": 67746,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67744,
                                    "name": "product",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67697,
                                    "src": "10183:7:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67745,
                                    "name": "a4",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67450,
                                    "src": "10193:2:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "10183:12:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67747,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "10182:14:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67748,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67390,
                              "src": "10199:6:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "10182:23:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "10172:33:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67751,
                        "nodeType": "ExpressionStatement",
                        "src": "10172:33:108"
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
                    "id": 67756,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 67754,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67625,
                      "src": "10229:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 67755,
                      "name": "x5",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67453,
                      "src": "10234:2:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "10229:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 67771,
                  "nodeType": "IfStatement",
                  "src": "10225:92:108",
                  "trueBody": {
                    "id": 67770,
                    "nodeType": "Block",
                    "src": "10238:79:108",
                    "statements": [
                      {
                        "expression": {
                          "id": 67759,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67757,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67625,
                            "src": "10252:1:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "id": 67758,
                            "name": "x5",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67453,
                            "src": "10257:2:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "10252:7:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67760,
                        "nodeType": "ExpressionStatement",
                        "src": "10252:7:108"
                      },
                      {
                        "expression": {
                          "id": 67768,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67761,
                            "name": "product",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67697,
                            "src": "10273:7:108",
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
                            "id": 67767,
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
                                  "id": 67764,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67762,
                                    "name": "product",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67697,
                                    "src": "10284:7:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67763,
                                    "name": "a5",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67456,
                                    "src": "10294:2:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "10284:12:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67765,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "10283:14:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67766,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67390,
                              "src": "10300:6:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "10283:23:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "10273:33:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67769,
                        "nodeType": "ExpressionStatement",
                        "src": "10273:33:108"
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
                    "id": 67774,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 67772,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67625,
                      "src": "10330:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 67773,
                      "name": "x6",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67459,
                      "src": "10335:2:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "10330:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 67789,
                  "nodeType": "IfStatement",
                  "src": "10326:92:108",
                  "trueBody": {
                    "id": 67788,
                    "nodeType": "Block",
                    "src": "10339:79:108",
                    "statements": [
                      {
                        "expression": {
                          "id": 67777,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67775,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67625,
                            "src": "10353:1:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "id": 67776,
                            "name": "x6",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67459,
                            "src": "10358:2:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "10353:7:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67778,
                        "nodeType": "ExpressionStatement",
                        "src": "10353:7:108"
                      },
                      {
                        "expression": {
                          "id": 67786,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67779,
                            "name": "product",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67697,
                            "src": "10374:7:108",
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
                            "id": 67785,
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
                                  "id": 67782,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67780,
                                    "name": "product",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67697,
                                    "src": "10385:7:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67781,
                                    "name": "a6",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67462,
                                    "src": "10395:2:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "10385:12:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67783,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "10384:14:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67784,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67390,
                              "src": "10401:6:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "10384:23:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "10374:33:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67787,
                        "nodeType": "ExpressionStatement",
                        "src": "10374:33:108"
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
                    "id": 67792,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 67790,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67625,
                      "src": "10431:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 67791,
                      "name": "x7",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67465,
                      "src": "10436:2:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "10431:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 67807,
                  "nodeType": "IfStatement",
                  "src": "10427:92:108",
                  "trueBody": {
                    "id": 67806,
                    "nodeType": "Block",
                    "src": "10440:79:108",
                    "statements": [
                      {
                        "expression": {
                          "id": 67795,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67793,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67625,
                            "src": "10454:1:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "id": 67794,
                            "name": "x7",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67465,
                            "src": "10459:2:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "10454:7:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67796,
                        "nodeType": "ExpressionStatement",
                        "src": "10454:7:108"
                      },
                      {
                        "expression": {
                          "id": 67804,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67797,
                            "name": "product",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67697,
                            "src": "10475:7:108",
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
                            "id": 67803,
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
                                  "id": 67800,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67798,
                                    "name": "product",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67697,
                                    "src": "10486:7:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67799,
                                    "name": "a7",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67468,
                                    "src": "10496:2:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "10486:12:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67801,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "10485:14:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67802,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67390,
                              "src": "10502:6:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "10485:23:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "10475:33:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67805,
                        "nodeType": "ExpressionStatement",
                        "src": "10475:33:108"
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
                    "id": 67810,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 67808,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67625,
                      "src": "10532:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 67809,
                      "name": "x8",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67471,
                      "src": "10537:2:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "10532:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 67825,
                  "nodeType": "IfStatement",
                  "src": "10528:92:108",
                  "trueBody": {
                    "id": 67824,
                    "nodeType": "Block",
                    "src": "10541:79:108",
                    "statements": [
                      {
                        "expression": {
                          "id": 67813,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67811,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67625,
                            "src": "10555:1:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "id": 67812,
                            "name": "x8",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67471,
                            "src": "10560:2:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "10555:7:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67814,
                        "nodeType": "ExpressionStatement",
                        "src": "10555:7:108"
                      },
                      {
                        "expression": {
                          "id": 67822,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67815,
                            "name": "product",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67697,
                            "src": "10576:7:108",
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
                            "id": 67821,
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
                                  "id": 67818,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67816,
                                    "name": "product",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67697,
                                    "src": "10587:7:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67817,
                                    "name": "a8",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67474,
                                    "src": "10597:2:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "10587:12:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67819,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "10586:14:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67820,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67390,
                              "src": "10603:6:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "10586:23:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "10576:33:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67823,
                        "nodeType": "ExpressionStatement",
                        "src": "10576:33:108"
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
                    "id": 67828,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 67826,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67625,
                      "src": "10633:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 67827,
                      "name": "x9",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67477,
                      "src": "10638:2:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "10633:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 67843,
                  "nodeType": "IfStatement",
                  "src": "10629:92:108",
                  "trueBody": {
                    "id": 67842,
                    "nodeType": "Block",
                    "src": "10642:79:108",
                    "statements": [
                      {
                        "expression": {
                          "id": 67831,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67829,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67625,
                            "src": "10656:1:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "id": 67830,
                            "name": "x9",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67477,
                            "src": "10661:2:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "10656:7:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67832,
                        "nodeType": "ExpressionStatement",
                        "src": "10656:7:108"
                      },
                      {
                        "expression": {
                          "id": 67840,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 67833,
                            "name": "product",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67697,
                            "src": "10677:7:108",
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
                            "id": 67839,
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
                                  "id": 67836,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67834,
                                    "name": "product",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67697,
                                    "src": "10688:7:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67835,
                                    "name": "a9",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67480,
                                    "src": "10698:2:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "10688:12:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67837,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "10687:14:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67838,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67390,
                              "src": "10704:6:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "10687:23:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "10677:33:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 67841,
                        "nodeType": "ExpressionStatement",
                        "src": "10677:33:108"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    67845
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 67845,
                      "mutability": "mutable",
                      "name": "seriesSum",
                      "nameLocation": "11032:9:108",
                      "nodeType": "VariableDeclaration",
                      "scope": 68048,
                      "src": "11025:16:108",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 67844,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11025:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 67847,
                  "initialValue": {
                    "id": 67846,
                    "name": "ONE_20",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 67390,
                    "src": "11044:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11025:25:108"
                },
                {
                  "assignments": [
                    67849
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 67849,
                      "mutability": "mutable",
                      "name": "term",
                      "nameLocation": "11122:4:108",
                      "nodeType": "VariableDeclaration",
                      "scope": 68048,
                      "src": "11115:11:108",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 67848,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11115:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 67850,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11115:11:108"
                },
                {
                  "expression": {
                    "id": 67853,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67851,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67849,
                      "src": "11235:4:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 67852,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67625,
                      "src": "11242:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11235:8:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67854,
                  "nodeType": "ExpressionStatement",
                  "src": "11235:8:108"
                },
                {
                  "expression": {
                    "id": 67857,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67855,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67845,
                      "src": "11253:9:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 67856,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67849,
                      "src": "11266:4:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11253:17:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67858,
                  "nodeType": "ExpressionStatement",
                  "src": "11253:17:108"
                },
                {
                  "expression": {
                    "id": 67869,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67859,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67849,
                      "src": "11507:4:108",
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
                      "id": 67868,
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
                            "id": 67865,
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
                                  "id": 67862,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67860,
                                    "name": "term",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67849,
                                    "src": "11516:4:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67861,
                                    "name": "x",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67625,
                                    "src": "11523:1:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "11516:8:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67863,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "11515:10:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67864,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67390,
                              "src": "11528:6:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "11515:19:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 67866,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "11514:21:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "32",
                        "id": 67867,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "11538:1:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "src": "11514:25:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11507:32:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67870,
                  "nodeType": "ExpressionStatement",
                  "src": "11507:32:108"
                },
                {
                  "expression": {
                    "id": 67873,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67871,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67845,
                      "src": "11549:9:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 67872,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67849,
                      "src": "11562:4:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11549:17:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67874,
                  "nodeType": "ExpressionStatement",
                  "src": "11549:17:108"
                },
                {
                  "expression": {
                    "id": 67885,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67875,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67849,
                      "src": "11577:4:108",
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
                      "id": 67884,
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
                            "id": 67881,
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
                                  "id": 67878,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67876,
                                    "name": "term",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67849,
                                    "src": "11586:4:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67877,
                                    "name": "x",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67625,
                                    "src": "11593:1:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "11586:8:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67879,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "11585:10:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67880,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67390,
                              "src": "11598:6:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "11585:19:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 67882,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "11584:21:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "33",
                        "id": 67883,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "11608:1:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_3_by_1",
                          "typeString": "int_const 3"
                        },
                        "value": "3"
                      },
                      "src": "11584:25:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11577:32:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67886,
                  "nodeType": "ExpressionStatement",
                  "src": "11577:32:108"
                },
                {
                  "expression": {
                    "id": 67889,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67887,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67845,
                      "src": "11619:9:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 67888,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67849,
                      "src": "11632:4:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11619:17:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67890,
                  "nodeType": "ExpressionStatement",
                  "src": "11619:17:108"
                },
                {
                  "expression": {
                    "id": 67901,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67891,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67849,
                      "src": "11647:4:108",
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
                      "id": 67900,
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
                            "id": 67897,
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
                                  "id": 67894,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67892,
                                    "name": "term",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67849,
                                    "src": "11656:4:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67893,
                                    "name": "x",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67625,
                                    "src": "11663:1:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "11656:8:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67895,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "11655:10:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67896,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67390,
                              "src": "11668:6:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "11655:19:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 67898,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "11654:21:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "34",
                        "id": 67899,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "11678:1:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_4_by_1",
                          "typeString": "int_const 4"
                        },
                        "value": "4"
                      },
                      "src": "11654:25:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11647:32:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67902,
                  "nodeType": "ExpressionStatement",
                  "src": "11647:32:108"
                },
                {
                  "expression": {
                    "id": 67905,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67903,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67845,
                      "src": "11689:9:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 67904,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67849,
                      "src": "11702:4:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11689:17:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67906,
                  "nodeType": "ExpressionStatement",
                  "src": "11689:17:108"
                },
                {
                  "expression": {
                    "id": 67917,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67907,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67849,
                      "src": "11717:4:108",
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
                      "id": 67916,
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
                            "id": 67913,
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
                                  "id": 67910,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67908,
                                    "name": "term",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67849,
                                    "src": "11726:4:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67909,
                                    "name": "x",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67625,
                                    "src": "11733:1:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "11726:8:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67911,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "11725:10:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67912,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67390,
                              "src": "11738:6:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "11725:19:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 67914,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "11724:21:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "35",
                        "id": 67915,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "11748:1:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_5_by_1",
                          "typeString": "int_const 5"
                        },
                        "value": "5"
                      },
                      "src": "11724:25:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11717:32:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67918,
                  "nodeType": "ExpressionStatement",
                  "src": "11717:32:108"
                },
                {
                  "expression": {
                    "id": 67921,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67919,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67845,
                      "src": "11759:9:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 67920,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67849,
                      "src": "11772:4:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11759:17:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67922,
                  "nodeType": "ExpressionStatement",
                  "src": "11759:17:108"
                },
                {
                  "expression": {
                    "id": 67933,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67923,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67849,
                      "src": "11787:4:108",
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
                      "id": 67932,
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
                            "id": 67929,
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
                                  "id": 67926,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67924,
                                    "name": "term",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67849,
                                    "src": "11796:4:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67925,
                                    "name": "x",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67625,
                                    "src": "11803:1:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "11796:8:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67927,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "11795:10:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67928,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67390,
                              "src": "11808:6:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "11795:19:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 67930,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "11794:21:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "36",
                        "id": 67931,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "11818:1:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_6_by_1",
                          "typeString": "int_const 6"
                        },
                        "value": "6"
                      },
                      "src": "11794:25:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11787:32:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67934,
                  "nodeType": "ExpressionStatement",
                  "src": "11787:32:108"
                },
                {
                  "expression": {
                    "id": 67937,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67935,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67845,
                      "src": "11829:9:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 67936,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67849,
                      "src": "11842:4:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11829:17:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67938,
                  "nodeType": "ExpressionStatement",
                  "src": "11829:17:108"
                },
                {
                  "expression": {
                    "id": 67949,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67939,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67849,
                      "src": "11857:4:108",
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
                      "id": 67948,
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
                            "id": 67945,
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
                                  "id": 67942,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67940,
                                    "name": "term",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67849,
                                    "src": "11866:4:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67941,
                                    "name": "x",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67625,
                                    "src": "11873:1:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "11866:8:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67943,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "11865:10:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67944,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67390,
                              "src": "11878:6:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "11865:19:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 67946,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "11864:21:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "37",
                        "id": 67947,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "11888:1:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_7_by_1",
                          "typeString": "int_const 7"
                        },
                        "value": "7"
                      },
                      "src": "11864:25:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11857:32:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67950,
                  "nodeType": "ExpressionStatement",
                  "src": "11857:32:108"
                },
                {
                  "expression": {
                    "id": 67953,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67951,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67845,
                      "src": "11899:9:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 67952,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67849,
                      "src": "11912:4:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11899:17:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67954,
                  "nodeType": "ExpressionStatement",
                  "src": "11899:17:108"
                },
                {
                  "expression": {
                    "id": 67965,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67955,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67849,
                      "src": "11927:4:108",
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
                      "id": 67964,
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
                            "id": 67961,
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
                                  "id": 67958,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67956,
                                    "name": "term",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67849,
                                    "src": "11936:4:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67957,
                                    "name": "x",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67625,
                                    "src": "11943:1:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "11936:8:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67959,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "11935:10:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67960,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67390,
                              "src": "11948:6:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "11935:19:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 67962,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "11934:21:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "38",
                        "id": 67963,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "11958:1:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_8_by_1",
                          "typeString": "int_const 8"
                        },
                        "value": "8"
                      },
                      "src": "11934:25:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11927:32:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67966,
                  "nodeType": "ExpressionStatement",
                  "src": "11927:32:108"
                },
                {
                  "expression": {
                    "id": 67969,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67967,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67845,
                      "src": "11969:9:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 67968,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67849,
                      "src": "11982:4:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11969:17:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67970,
                  "nodeType": "ExpressionStatement",
                  "src": "11969:17:108"
                },
                {
                  "expression": {
                    "id": 67981,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67971,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67849,
                      "src": "11997:4:108",
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
                      "id": 67980,
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
                            "id": 67977,
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
                                  "id": 67974,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67972,
                                    "name": "term",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67849,
                                    "src": "12006:4:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67973,
                                    "name": "x",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67625,
                                    "src": "12013:1:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "12006:8:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67975,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "12005:10:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67976,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67390,
                              "src": "12018:6:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "12005:19:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 67978,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "12004:21:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "39",
                        "id": 67979,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12028:1:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_9_by_1",
                          "typeString": "int_const 9"
                        },
                        "value": "9"
                      },
                      "src": "12004:25:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11997:32:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67982,
                  "nodeType": "ExpressionStatement",
                  "src": "11997:32:108"
                },
                {
                  "expression": {
                    "id": 67985,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67983,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67845,
                      "src": "12039:9:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 67984,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67849,
                      "src": "12052:4:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "12039:17:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67986,
                  "nodeType": "ExpressionStatement",
                  "src": "12039:17:108"
                },
                {
                  "expression": {
                    "id": 67997,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67987,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67849,
                      "src": "12067:4:108",
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
                      "id": 67996,
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
                            "id": 67993,
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
                                  "id": 67990,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 67988,
                                    "name": "term",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67849,
                                    "src": "12076:4:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 67989,
                                    "name": "x",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67625,
                                    "src": "12083:1:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "12076:8:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 67991,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "12075:10:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 67992,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67390,
                              "src": "12088:6:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "12075:19:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 67994,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "12074:21:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "3130",
                        "id": 67995,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12098:2:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10_by_1",
                          "typeString": "int_const 10"
                        },
                        "value": "10"
                      },
                      "src": "12074:26:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "12067:33:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 67998,
                  "nodeType": "ExpressionStatement",
                  "src": "12067:33:108"
                },
                {
                  "expression": {
                    "id": 68001,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67999,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67845,
                      "src": "12110:9:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 68000,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67849,
                      "src": "12123:4:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "12110:17:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68002,
                  "nodeType": "ExpressionStatement",
                  "src": "12110:17:108"
                },
                {
                  "expression": {
                    "id": 68013,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68003,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67849,
                      "src": "12138:4:108",
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
                      "id": 68012,
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
                            "id": 68009,
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
                                  "id": 68006,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 68004,
                                    "name": "term",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67849,
                                    "src": "12147:4:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 68005,
                                    "name": "x",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67625,
                                    "src": "12154:1:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "12147:8:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 68007,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "12146:10:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 68008,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67390,
                              "src": "12159:6:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "12146:19:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 68010,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "12145:21:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "3131",
                        "id": 68011,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12169:2:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_11_by_1",
                          "typeString": "int_const 11"
                        },
                        "value": "11"
                      },
                      "src": "12145:26:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "12138:33:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68014,
                  "nodeType": "ExpressionStatement",
                  "src": "12138:33:108"
                },
                {
                  "expression": {
                    "id": 68017,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68015,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67845,
                      "src": "12181:9:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 68016,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67849,
                      "src": "12194:4:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "12181:17:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68018,
                  "nodeType": "ExpressionStatement",
                  "src": "12181:17:108"
                },
                {
                  "expression": {
                    "id": 68029,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68019,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67849,
                      "src": "12209:4:108",
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
                      "id": 68028,
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
                            "id": 68025,
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
                                  "id": 68022,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 68020,
                                    "name": "term",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67849,
                                    "src": "12218:4:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 68021,
                                    "name": "x",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67625,
                                    "src": "12225:1:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "12218:8:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 68023,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "12217:10:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 68024,
                              "name": "ONE_20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67390,
                              "src": "12230:6:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "12217:19:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 68026,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "12216:21:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "3132",
                        "id": 68027,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12240:2:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_12_by_1",
                          "typeString": "int_const 12"
                        },
                        "value": "12"
                      },
                      "src": "12216:26:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "12209:33:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68030,
                  "nodeType": "ExpressionStatement",
                  "src": "12209:33:108"
                },
                {
                  "expression": {
                    "id": 68033,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68031,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67845,
                      "src": "12252:9:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 68032,
                      "name": "term",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67849,
                      "src": "12265:4:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "12252:17:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68034,
                  "nodeType": "ExpressionStatement",
                  "src": "12252:17:108"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 68046,
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
                          "id": 68043,
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
                                "id": 68040,
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
                                      "id": 68037,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 68035,
                                        "name": "product",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 67697,
                                        "src": "12780:7:108",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 68036,
                                        "name": "seriesSum",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 67845,
                                        "src": "12790:9:108",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "12780:19:108",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 68038,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "12779:21:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "/",
                                "rightExpression": {
                                  "id": 68039,
                                  "name": "ONE_20",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 67390,
                                  "src": "12803:6:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "12779:30:108",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 68041,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "12778:32:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 68042,
                            "name": "firstAN",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67659,
                            "src": "12813:7:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "12778:42:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "id": 68044,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "12777:44:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "hexValue": "313030",
                      "id": 68045,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "12824:3:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_100_by_1",
                        "typeString": "int_const 100"
                      },
                      "value": "100"
                    },
                    "src": "12777:50:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 67629,
                  "id": 68047,
                  "nodeType": "Return",
                  "src": "12770:57:108"
                }
              ]
            },
            "documentation": {
              "id": 67623,
              "nodeType": "StructuredDocumentation",
              "src": "7205:203:108",
              "text": " @dev Natural exponentiation (e^x) with signed 18 decimal fixed point exponent.\n Reverts if `x` is smaller than MIN_NATURAL_EXPONENT, or larger than `MAX_NATURAL_EXPONENT`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "exp",
            "nameLocation": "7422:3:108",
            "parameters": {
              "id": 67626,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67625,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "7433:1:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 68049,
                  "src": "7426:8:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 67624,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7426:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7425:10:108"
            },
            "returnParameters": {
              "id": 67629,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67628,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 68049,
                  "src": "7459:6:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 67627,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7459:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7458:8:108"
            },
            "scope": 68678,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 68121,
            "nodeType": "FunctionDefinition",
            "src": "12949:822:108",
            "nodes": [],
            "body": {
              "id": 68120,
              "nodeType": "Block",
              "src": "13018:753:108",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    68060
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 68060,
                      "mutability": "mutable",
                      "name": "logBase",
                      "nameLocation": "13255:7:108",
                      "nodeType": "VariableDeclaration",
                      "scope": 68120,
                      "src": "13248:14:108",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 68059,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "13248:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 68061,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "13248:14:108"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 68068,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 68064,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 68062,
                        "name": "LN_36_LOWER_BOUND",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67405,
                        "src": "13276:17:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "id": 68063,
                        "name": "base",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 68054,
                        "src": "13296:4:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "13276:24:108",
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
                      "id": 68067,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 68065,
                        "name": "base",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 68054,
                        "src": "13304:4:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "id": 68066,
                        "name": "LN_36_UPPER_BOUND",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67410,
                        "src": "13311:17:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "13304:24:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "13276:52:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 68084,
                    "nodeType": "Block",
                    "src": "13383:53:108",
                    "statements": [
                      {
                        "expression": {
                          "id": 68082,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 68076,
                            "name": "logBase",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68060,
                            "src": "13397:7:108",
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
                            "id": 68081,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 68078,
                                  "name": "base",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 68054,
                                  "src": "13411:4:108",
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
                                "id": 68077,
                                "name": "_ln",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 68523,
                                "src": "13407:3:108",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                                  "typeString": "function (int256) pure returns (int256)"
                                }
                              },
                              "id": 68079,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "13407:9:108",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 68080,
                              "name": "ONE_18",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67387,
                              "src": "13419:6:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "13407:18:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "13397:28:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 68083,
                        "nodeType": "ExpressionStatement",
                        "src": "13397:28:108"
                      }
                    ]
                  },
                  "id": 68085,
                  "nodeType": "IfStatement",
                  "src": "13272:164:108",
                  "trueBody": {
                    "id": 68075,
                    "nodeType": "Block",
                    "src": "13330:47:108",
                    "statements": [
                      {
                        "expression": {
                          "id": 68073,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 68069,
                            "name": "logBase",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68060,
                            "src": "13344:7:108",
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
                                "id": 68071,
                                "name": "base",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 68054,
                                "src": "13361:4:108",
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
                              "id": 68070,
                              "name": "_ln_36",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 68677,
                              "src": "13354:6:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                                "typeString": "function (int256) pure returns (int256)"
                              }
                            },
                            "id": 68072,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "13354:12:108",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "13344:22:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 68074,
                        "nodeType": "ExpressionStatement",
                        "src": "13344:22:108"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    68087
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 68087,
                      "mutability": "mutable",
                      "name": "logArg",
                      "nameLocation": "13453:6:108",
                      "nodeType": "VariableDeclaration",
                      "scope": 68120,
                      "src": "13446:13:108",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 68086,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "13446:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 68088,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "13446:13:108"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 68095,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 68091,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 68089,
                        "name": "LN_36_LOWER_BOUND",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67405,
                        "src": "13473:17:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "id": 68090,
                        "name": "arg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 68052,
                        "src": "13493:3:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "13473:23:108",
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
                      "id": 68094,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 68092,
                        "name": "arg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 68052,
                        "src": "13500:3:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "id": 68093,
                        "name": "LN_36_UPPER_BOUND",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67410,
                        "src": "13506:17:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "13500:23:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "13473:50:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 68111,
                    "nodeType": "Block",
                    "src": "13576:51:108",
                    "statements": [
                      {
                        "expression": {
                          "id": 68109,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 68103,
                            "name": "logArg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68087,
                            "src": "13590:6:108",
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
                            "id": 68108,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 68105,
                                  "name": "arg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 68052,
                                  "src": "13603:3:108",
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
                                "id": 68104,
                                "name": "_ln",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 68523,
                                "src": "13599:3:108",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                                  "typeString": "function (int256) pure returns (int256)"
                                }
                              },
                              "id": 68106,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "13599:8:108",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 68107,
                              "name": "ONE_18",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67387,
                              "src": "13610:6:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "13599:17:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "13590:26:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 68110,
                        "nodeType": "ExpressionStatement",
                        "src": "13590:26:108"
                      }
                    ]
                  },
                  "id": 68112,
                  "nodeType": "IfStatement",
                  "src": "13469:158:108",
                  "trueBody": {
                    "id": 68102,
                    "nodeType": "Block",
                    "src": "13525:45:108",
                    "statements": [
                      {
                        "expression": {
                          "id": 68100,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 68096,
                            "name": "logArg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68087,
                            "src": "13539:6:108",
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
                                "id": 68098,
                                "name": "arg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 68052,
                                "src": "13555:3:108",
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
                              "id": 68097,
                              "name": "_ln_36",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 68677,
                              "src": "13548:6:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                                "typeString": "function (int256) pure returns (int256)"
                              }
                            },
                            "id": 68099,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "13548:11:108",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "13539:20:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 68101,
                        "nodeType": "ExpressionStatement",
                        "src": "13539:20:108"
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
                    "id": 68118,
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
                          "id": 68115,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 68113,
                            "name": "logArg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68087,
                            "src": "13738:6:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 68114,
                            "name": "ONE_18",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67387,
                            "src": "13747:6:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "13738:15:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "id": 68116,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "13737:17:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "id": 68117,
                      "name": "logBase",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68060,
                      "src": "13757:7:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "13737:27:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 68058,
                  "id": 68119,
                  "nodeType": "Return",
                  "src": "13730:34:108"
                }
              ]
            },
            "documentation": {
              "id": 68050,
              "nodeType": "StructuredDocumentation",
              "src": "12840:104:108",
              "text": " @dev Logarithm (log(arg, base), with signed 18 decimal fixed point base and argument."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "log",
            "nameLocation": "12958:3:108",
            "parameters": {
              "id": 68055,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 68052,
                  "mutability": "mutable",
                  "name": "arg",
                  "nameLocation": "12969:3:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 68121,
                  "src": "12962:10:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 68051,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12962:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 68054,
                  "mutability": "mutable",
                  "name": "base",
                  "nameLocation": "12981:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 68121,
                  "src": "12974:11:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 68053,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12974:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12961:25:108"
            },
            "returnParameters": {
              "id": 68058,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 68057,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 68121,
                  "src": "13010:6:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 68056,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13010:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13009:8:108"
            },
            "scope": 68678,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 68158,
            "nodeType": "FunctionDefinition",
            "src": "13876:353:108",
            "nodes": [],
            "body": {
              "id": 68157,
              "nodeType": "Block",
              "src": "13929:300:108",
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
                        "id": 68132,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 68130,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 68124,
                          "src": "14031:1:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 68131,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "14035:1:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "14031:5:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "expression": {
                          "id": 68133,
                          "name": "BalancerErrors",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 67378,
                          "src": "14038:14:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_BalancerErrors_$67378_$",
                            "typeString": "type(library BalancerErrors)"
                          }
                        },
                        "id": 68134,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "14053:13:108",
                        "memberName": "OUT_OF_BOUNDS",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 66906,
                        "src": "14038:28:108",
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
                      "id": 68129,
                      "name": "_require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        66822,
                        66841
                      ],
                      "referencedDeclaration": 66822,
                      "src": "14022:8:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bool_$_t_uint256_$returns$__$",
                        "typeString": "function (bool,uint256) pure"
                      }
                    },
                    "id": 68135,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "14022:45:108",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 68136,
                  "nodeType": "ExpressionStatement",
                  "src": "14022:45:108"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 68143,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 68139,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 68137,
                        "name": "LN_36_LOWER_BOUND",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67405,
                        "src": "14081:17:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "id": 68138,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 68124,
                        "src": "14101:1:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "14081:21:108",
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
                      "id": 68142,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 68140,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 68124,
                        "src": "14106:1:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "id": 68141,
                        "name": "LN_36_UPPER_BOUND",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67410,
                        "src": "14110:17:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "14106:21:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "14081:46:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 68155,
                    "nodeType": "Block",
                    "src": "14185:38:108",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 68152,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 68124,
                              "src": "14210:1:108",
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
                            "id": 68151,
                            "name": "_ln",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68523,
                            "src": "14206:3:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                              "typeString": "function (int256) pure returns (int256)"
                            }
                          },
                          "id": 68153,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "14206:6:108",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "functionReturnParameters": 68128,
                        "id": 68154,
                        "nodeType": "Return",
                        "src": "14199:13:108"
                      }
                    ]
                  },
                  "id": 68156,
                  "nodeType": "IfStatement",
                  "src": "14077:146:108",
                  "trueBody": {
                    "id": 68150,
                    "nodeType": "Block",
                    "src": "14129:50:108",
                    "statements": [
                      {
                        "expression": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 68148,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [
                              {
                                "id": 68145,
                                "name": "a",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 68124,
                                "src": "14157:1:108",
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
                              "id": 68144,
                              "name": "_ln_36",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 68677,
                              "src": "14150:6:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                                "typeString": "function (int256) pure returns (int256)"
                              }
                            },
                            "id": 68146,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "14150:9:108",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "id": 68147,
                            "name": "ONE_18",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67387,
                            "src": "14162:6:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "14150:18:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "functionReturnParameters": 68128,
                        "id": 68149,
                        "nodeType": "Return",
                        "src": "14143:25:108"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 68122,
              "nodeType": "StructuredDocumentation",
              "src": "13777:94:108",
              "text": " @dev Natural logarithm (ln(a)) with signed 18 decimal fixed point argument."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "ln",
            "nameLocation": "13885:2:108",
            "parameters": {
              "id": 68125,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 68124,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "13895:1:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 68158,
                  "src": "13888:8:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 68123,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13888:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13887:10:108"
            },
            "returnParameters": {
              "id": 68128,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 68127,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 68158,
                  "src": "13921:6:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 68126,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13921:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13920:8:108"
            },
            "scope": 68678,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 68523,
            "nodeType": "FunctionDefinition",
            "src": "14343:4959:108",
            "nodes": [],
            "body": {
              "id": 68522,
              "nodeType": "Block",
              "src": "14396:4906:108",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 68168,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 68166,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68161,
                      "src": "14410:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 68167,
                      "name": "ONE_18",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67387,
                      "src": "14414:6:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "14410:10:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 68181,
                  "nodeType": "IfStatement",
                  "src": "14406:382:108",
                  "trueBody": {
                    "id": 68180,
                    "nodeType": "Block",
                    "src": "14422:366:108",
                    "statements": [
                      {
                        "expression": {
                          "components": [
                            {
                              "id": 68177,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "-",
                              "prefix": true,
                              "src": "14749:27:108",
                              "subExpression": {
                                "arguments": [
                                  {
                                    "commonType": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    },
                                    "id": 68175,
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
                                          "id": 68172,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "leftExpression": {
                                            "id": 68170,
                                            "name": "ONE_18",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67387,
                                            "src": "14755:6:108",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_int256",
                                              "typeString": "int256"
                                            }
                                          },
                                          "nodeType": "BinaryOperation",
                                          "operator": "*",
                                          "rightExpression": {
                                            "id": 68171,
                                            "name": "ONE_18",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67387,
                                            "src": "14764:6:108",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_int256",
                                              "typeString": "int256"
                                            }
                                          },
                                          "src": "14755:15:108",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                          }
                                        }
                                      ],
                                      "id": 68173,
                                      "isConstant": false,
                                      "isInlineArray": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "TupleExpression",
                                      "src": "14754:17:108",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "/",
                                    "rightExpression": {
                                      "id": 68174,
                                      "name": "a",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 68161,
                                      "src": "14774:1:108",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    },
                                    "src": "14754:21:108",
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
                                  "id": 68169,
                                  "name": "_ln",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 68523,
                                  "src": "14750:3:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                                    "typeString": "function (int256) pure returns (int256)"
                                  }
                                },
                                "id": 68176,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "14750:26:108",
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
                          "id": 68178,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "14748:29:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "functionReturnParameters": 68165,
                        "id": 68179,
                        "nodeType": "Return",
                        "src": "14741:36:108"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    68183
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 68183,
                      "mutability": "mutable",
                      "name": "sum",
                      "nameLocation": "16120:3:108",
                      "nodeType": "VariableDeclaration",
                      "scope": 68522,
                      "src": "16113:10:108",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 68182,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "16113:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 68185,
                  "initialValue": {
                    "hexValue": "30",
                    "id": 68184,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "16126:1:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "16113:14:108"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 68190,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 68186,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68161,
                      "src": "16141:1:108",
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
                      "id": 68189,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 68187,
                        "name": "a0",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67426,
                        "src": "16146:2:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "id": 68188,
                        "name": "ONE_18",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67387,
                        "src": "16151:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "16146:11:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "16141:16:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 68200,
                  "nodeType": "IfStatement",
                  "src": "16137:114:108",
                  "trueBody": {
                    "id": 68199,
                    "nodeType": "Block",
                    "src": "16159:92:108",
                    "statements": [
                      {
                        "expression": {
                          "id": 68193,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 68191,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68161,
                            "src": "16173:1:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "/=",
                          "rightHandSide": {
                            "id": 68192,
                            "name": "a0",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67426,
                            "src": "16178:2:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "16173:7:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 68194,
                        "nodeType": "ExpressionStatement",
                        "src": "16173:7:108"
                      },
                      {
                        "expression": {
                          "id": 68197,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 68195,
                            "name": "sum",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68183,
                            "src": "16231:3:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 68196,
                            "name": "x0",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67423,
                            "src": "16238:2:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "16231:9:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 68198,
                        "nodeType": "ExpressionStatement",
                        "src": "16231:9:108"
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
                    "id": 68205,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 68201,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68161,
                      "src": "16265:1:108",
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
                      "id": 68204,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 68202,
                        "name": "a1",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67432,
                        "src": "16270:2:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "id": 68203,
                        "name": "ONE_18",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67387,
                        "src": "16275:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "16270:11:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "16265:16:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 68215,
                  "nodeType": "IfStatement",
                  "src": "16261:114:108",
                  "trueBody": {
                    "id": 68214,
                    "nodeType": "Block",
                    "src": "16283:92:108",
                    "statements": [
                      {
                        "expression": {
                          "id": 68208,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 68206,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68161,
                            "src": "16297:1:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "/=",
                          "rightHandSide": {
                            "id": 68207,
                            "name": "a1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67432,
                            "src": "16302:2:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "16297:7:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 68209,
                        "nodeType": "ExpressionStatement",
                        "src": "16297:7:108"
                      },
                      {
                        "expression": {
                          "id": 68212,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 68210,
                            "name": "sum",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68183,
                            "src": "16355:3:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 68211,
                            "name": "x1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67429,
                            "src": "16362:2:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "16355:9:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 68213,
                        "nodeType": "ExpressionStatement",
                        "src": "16355:9:108"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 68218,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68216,
                      "name": "sum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68183,
                      "src": "16506:3:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "*=",
                    "rightHandSide": {
                      "hexValue": "313030",
                      "id": 68217,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "16513:3:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_100_by_1",
                        "typeString": "int_const 100"
                      },
                      "value": "100"
                    },
                    "src": "16506:10:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68219,
                  "nodeType": "ExpressionStatement",
                  "src": "16506:10:108"
                },
                {
                  "expression": {
                    "id": 68222,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68220,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68161,
                      "src": "16526:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "*=",
                    "rightHandSide": {
                      "hexValue": "313030",
                      "id": 68221,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "16531:3:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_100_by_1",
                        "typeString": "int_const 100"
                      },
                      "value": "100"
                    },
                    "src": "16526:8:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68223,
                  "nodeType": "ExpressionStatement",
                  "src": "16526:8:108"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 68226,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 68224,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68161,
                      "src": "16661:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 68225,
                      "name": "a2",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67438,
                      "src": "16666:2:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "16661:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 68241,
                  "nodeType": "IfStatement",
                  "src": "16657:82:108",
                  "trueBody": {
                    "id": 68240,
                    "nodeType": "Block",
                    "src": "16670:69:108",
                    "statements": [
                      {
                        "expression": {
                          "id": 68234,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 68227,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68161,
                            "src": "16684:1:108",
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
                            "id": 68233,
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
                                  "id": 68230,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 68228,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 68161,
                                    "src": "16689:1:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 68229,
                                    "name": "ONE_20",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67390,
                                    "src": "16693:6:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "16689:10:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 68231,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "16688:12:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 68232,
                              "name": "a2",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67438,
                              "src": "16703:2:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "16688:17:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "16684:21:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 68235,
                        "nodeType": "ExpressionStatement",
                        "src": "16684:21:108"
                      },
                      {
                        "expression": {
                          "id": 68238,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 68236,
                            "name": "sum",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68183,
                            "src": "16719:3:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 68237,
                            "name": "x2",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67435,
                            "src": "16726:2:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "16719:9:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 68239,
                        "nodeType": "ExpressionStatement",
                        "src": "16719:9:108"
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
                    "id": 68244,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 68242,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68161,
                      "src": "16753:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 68243,
                      "name": "a3",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67444,
                      "src": "16758:2:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "16753:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 68259,
                  "nodeType": "IfStatement",
                  "src": "16749:82:108",
                  "trueBody": {
                    "id": 68258,
                    "nodeType": "Block",
                    "src": "16762:69:108",
                    "statements": [
                      {
                        "expression": {
                          "id": 68252,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 68245,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68161,
                            "src": "16776:1:108",
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
                            "id": 68251,
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
                                  "id": 68248,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 68246,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 68161,
                                    "src": "16781:1:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 68247,
                                    "name": "ONE_20",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67390,
                                    "src": "16785:6:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "16781:10:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 68249,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "16780:12:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 68250,
                              "name": "a3",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67444,
                              "src": "16795:2:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "16780:17:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "16776:21:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 68253,
                        "nodeType": "ExpressionStatement",
                        "src": "16776:21:108"
                      },
                      {
                        "expression": {
                          "id": 68256,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 68254,
                            "name": "sum",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68183,
                            "src": "16811:3:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 68255,
                            "name": "x3",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67441,
                            "src": "16818:2:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "16811:9:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 68257,
                        "nodeType": "ExpressionStatement",
                        "src": "16811:9:108"
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
                    "id": 68262,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 68260,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68161,
                      "src": "16845:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 68261,
                      "name": "a4",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67450,
                      "src": "16850:2:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "16845:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 68277,
                  "nodeType": "IfStatement",
                  "src": "16841:82:108",
                  "trueBody": {
                    "id": 68276,
                    "nodeType": "Block",
                    "src": "16854:69:108",
                    "statements": [
                      {
                        "expression": {
                          "id": 68270,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 68263,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68161,
                            "src": "16868:1:108",
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
                            "id": 68269,
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
                                  "id": 68266,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 68264,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 68161,
                                    "src": "16873:1:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 68265,
                                    "name": "ONE_20",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67390,
                                    "src": "16877:6:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "16873:10:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 68267,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "16872:12:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 68268,
                              "name": "a4",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67450,
                              "src": "16887:2:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "16872:17:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "16868:21:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 68271,
                        "nodeType": "ExpressionStatement",
                        "src": "16868:21:108"
                      },
                      {
                        "expression": {
                          "id": 68274,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 68272,
                            "name": "sum",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68183,
                            "src": "16903:3:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 68273,
                            "name": "x4",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67447,
                            "src": "16910:2:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "16903:9:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 68275,
                        "nodeType": "ExpressionStatement",
                        "src": "16903:9:108"
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
                    "id": 68280,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 68278,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68161,
                      "src": "16937:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 68279,
                      "name": "a5",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67456,
                      "src": "16942:2:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "16937:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 68295,
                  "nodeType": "IfStatement",
                  "src": "16933:82:108",
                  "trueBody": {
                    "id": 68294,
                    "nodeType": "Block",
                    "src": "16946:69:108",
                    "statements": [
                      {
                        "expression": {
                          "id": 68288,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 68281,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68161,
                            "src": "16960:1:108",
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
                            "id": 68287,
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
                                  "id": 68284,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 68282,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 68161,
                                    "src": "16965:1:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 68283,
                                    "name": "ONE_20",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67390,
                                    "src": "16969:6:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "16965:10:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 68285,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "16964:12:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 68286,
                              "name": "a5",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67456,
                              "src": "16979:2:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "16964:17:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "16960:21:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 68289,
                        "nodeType": "ExpressionStatement",
                        "src": "16960:21:108"
                      },
                      {
                        "expression": {
                          "id": 68292,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 68290,
                            "name": "sum",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68183,
                            "src": "16995:3:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 68291,
                            "name": "x5",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67453,
                            "src": "17002:2:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "16995:9:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 68293,
                        "nodeType": "ExpressionStatement",
                        "src": "16995:9:108"
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
                    "id": 68298,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 68296,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68161,
                      "src": "17029:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 68297,
                      "name": "a6",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67462,
                      "src": "17034:2:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "17029:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 68313,
                  "nodeType": "IfStatement",
                  "src": "17025:82:108",
                  "trueBody": {
                    "id": 68312,
                    "nodeType": "Block",
                    "src": "17038:69:108",
                    "statements": [
                      {
                        "expression": {
                          "id": 68306,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 68299,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68161,
                            "src": "17052:1:108",
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
                            "id": 68305,
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
                                  "id": 68302,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 68300,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 68161,
                                    "src": "17057:1:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 68301,
                                    "name": "ONE_20",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67390,
                                    "src": "17061:6:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "17057:10:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 68303,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "17056:12:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 68304,
                              "name": "a6",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67462,
                              "src": "17071:2:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "17056:17:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "17052:21:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 68307,
                        "nodeType": "ExpressionStatement",
                        "src": "17052:21:108"
                      },
                      {
                        "expression": {
                          "id": 68310,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 68308,
                            "name": "sum",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68183,
                            "src": "17087:3:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 68309,
                            "name": "x6",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67459,
                            "src": "17094:2:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "17087:9:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 68311,
                        "nodeType": "ExpressionStatement",
                        "src": "17087:9:108"
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
                    "id": 68316,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 68314,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68161,
                      "src": "17121:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 68315,
                      "name": "a7",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67468,
                      "src": "17126:2:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "17121:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 68331,
                  "nodeType": "IfStatement",
                  "src": "17117:82:108",
                  "trueBody": {
                    "id": 68330,
                    "nodeType": "Block",
                    "src": "17130:69:108",
                    "statements": [
                      {
                        "expression": {
                          "id": 68324,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 68317,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68161,
                            "src": "17144:1:108",
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
                            "id": 68323,
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
                                  "id": 68320,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 68318,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 68161,
                                    "src": "17149:1:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 68319,
                                    "name": "ONE_20",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67390,
                                    "src": "17153:6:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "17149:10:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 68321,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "17148:12:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 68322,
                              "name": "a7",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67468,
                              "src": "17163:2:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "17148:17:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "17144:21:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 68325,
                        "nodeType": "ExpressionStatement",
                        "src": "17144:21:108"
                      },
                      {
                        "expression": {
                          "id": 68328,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 68326,
                            "name": "sum",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68183,
                            "src": "17179:3:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 68327,
                            "name": "x7",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67465,
                            "src": "17186:2:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "17179:9:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 68329,
                        "nodeType": "ExpressionStatement",
                        "src": "17179:9:108"
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
                    "id": 68334,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 68332,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68161,
                      "src": "17213:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 68333,
                      "name": "a8",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67474,
                      "src": "17218:2:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "17213:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 68349,
                  "nodeType": "IfStatement",
                  "src": "17209:82:108",
                  "trueBody": {
                    "id": 68348,
                    "nodeType": "Block",
                    "src": "17222:69:108",
                    "statements": [
                      {
                        "expression": {
                          "id": 68342,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 68335,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68161,
                            "src": "17236:1:108",
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
                            "id": 68341,
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
                                  "id": 68338,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 68336,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 68161,
                                    "src": "17241:1:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 68337,
                                    "name": "ONE_20",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67390,
                                    "src": "17245:6:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "17241:10:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 68339,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "17240:12:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 68340,
                              "name": "a8",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67474,
                              "src": "17255:2:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "17240:17:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "17236:21:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 68343,
                        "nodeType": "ExpressionStatement",
                        "src": "17236:21:108"
                      },
                      {
                        "expression": {
                          "id": 68346,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 68344,
                            "name": "sum",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68183,
                            "src": "17271:3:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 68345,
                            "name": "x8",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67471,
                            "src": "17278:2:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "17271:9:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 68347,
                        "nodeType": "ExpressionStatement",
                        "src": "17271:9:108"
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
                    "id": 68352,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 68350,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68161,
                      "src": "17305:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 68351,
                      "name": "a9",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67480,
                      "src": "17310:2:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "17305:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 68367,
                  "nodeType": "IfStatement",
                  "src": "17301:82:108",
                  "trueBody": {
                    "id": 68366,
                    "nodeType": "Block",
                    "src": "17314:69:108",
                    "statements": [
                      {
                        "expression": {
                          "id": 68360,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 68353,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68161,
                            "src": "17328:1:108",
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
                            "id": 68359,
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
                                  "id": 68356,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 68354,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 68161,
                                    "src": "17333:1:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 68355,
                                    "name": "ONE_20",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67390,
                                    "src": "17337:6:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "17333:10:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 68357,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "17332:12:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 68358,
                              "name": "a9",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67480,
                              "src": "17347:2:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "17332:17:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "17328:21:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 68361,
                        "nodeType": "ExpressionStatement",
                        "src": "17328:21:108"
                      },
                      {
                        "expression": {
                          "id": 68364,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 68362,
                            "name": "sum",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68183,
                            "src": "17363:3:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 68363,
                            "name": "x9",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67477,
                            "src": "17370:2:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "17363:9:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 68365,
                        "nodeType": "ExpressionStatement",
                        "src": "17363:9:108"
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
                    "id": 68370,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 68368,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68161,
                      "src": "17397:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 68369,
                      "name": "a10",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67486,
                      "src": "17402:3:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "17397:8:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 68385,
                  "nodeType": "IfStatement",
                  "src": "17393:85:108",
                  "trueBody": {
                    "id": 68384,
                    "nodeType": "Block",
                    "src": "17407:71:108",
                    "statements": [
                      {
                        "expression": {
                          "id": 68378,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 68371,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68161,
                            "src": "17421:1:108",
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
                            "id": 68377,
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
                                  "id": 68374,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 68372,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 68161,
                                    "src": "17426:1:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 68373,
                                    "name": "ONE_20",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67390,
                                    "src": "17430:6:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "17426:10:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 68375,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "17425:12:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 68376,
                              "name": "a10",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67486,
                              "src": "17440:3:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "17425:18:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "17421:22:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 68379,
                        "nodeType": "ExpressionStatement",
                        "src": "17421:22:108"
                      },
                      {
                        "expression": {
                          "id": 68382,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 68380,
                            "name": "sum",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68183,
                            "src": "17457:3:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 68381,
                            "name": "x10",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67483,
                            "src": "17464:3:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "17457:10:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 68383,
                        "nodeType": "ExpressionStatement",
                        "src": "17457:10:108"
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
                    "id": 68388,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 68386,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68161,
                      "src": "17492:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 68387,
                      "name": "a11",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67492,
                      "src": "17497:3:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "17492:8:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 68403,
                  "nodeType": "IfStatement",
                  "src": "17488:85:108",
                  "trueBody": {
                    "id": 68402,
                    "nodeType": "Block",
                    "src": "17502:71:108",
                    "statements": [
                      {
                        "expression": {
                          "id": 68396,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 68389,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68161,
                            "src": "17516:1:108",
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
                            "id": 68395,
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
                                  "id": 68392,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 68390,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 68161,
                                    "src": "17521:1:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "id": 68391,
                                    "name": "ONE_20",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67390,
                                    "src": "17525:6:108",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "17521:10:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 68393,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "17520:12:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 68394,
                              "name": "a11",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67492,
                              "src": "17535:3:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "17520:18:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "17516:22:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 68397,
                        "nodeType": "ExpressionStatement",
                        "src": "17516:22:108"
                      },
                      {
                        "expression": {
                          "id": 68400,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 68398,
                            "name": "sum",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68183,
                            "src": "17552:3:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 68399,
                            "name": "x11",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67489,
                            "src": "17559:3:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "17552:10:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 68401,
                        "nodeType": "ExpressionStatement",
                        "src": "17552:10:108"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    68405
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 68405,
                      "mutability": "mutable",
                      "name": "z",
                      "nameLocation": "18082:1:108",
                      "nodeType": "VariableDeclaration",
                      "scope": 68522,
                      "src": "18075:8:108",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 68404,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "18075:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 68418,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 68417,
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
                          "id": 68411,
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
                                "id": 68408,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 68406,
                                  "name": "a",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 68161,
                                  "src": "18088:1:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "id": 68407,
                                  "name": "ONE_20",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 67390,
                                  "src": "18092:6:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "18088:10:108",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 68409,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "18087:12:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 68410,
                            "name": "ONE_20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67390,
                            "src": "18102:6:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "18087:21:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "id": 68412,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "18086:23:108",
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
                          "id": 68415,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 68413,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68161,
                            "src": "18113:1:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "id": 68414,
                            "name": "ONE_20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67390,
                            "src": "18117:6:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "18113:10:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "id": 68416,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "18112:12:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "18086:38:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "18075:49:108"
                },
                {
                  "assignments": [
                    68420
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 68420,
                      "mutability": "mutable",
                      "name": "z_squared",
                      "nameLocation": "18141:9:108",
                      "nodeType": "VariableDeclaration",
                      "scope": 68522,
                      "src": "18134:16:108",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 68419,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "18134:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 68427,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 68426,
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
                          "id": 68423,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 68421,
                            "name": "z",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68405,
                            "src": "18154:1:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 68422,
                            "name": "z",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68405,
                            "src": "18158:1:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "18154:5:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "id": 68424,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "18153:7:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "id": 68425,
                      "name": "ONE_20",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67390,
                      "src": "18163:6:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "18153:16:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "18134:35:108"
                },
                {
                  "assignments": [
                    68429
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 68429,
                      "mutability": "mutable",
                      "name": "num",
                      "nameLocation": "18257:3:108",
                      "nodeType": "VariableDeclaration",
                      "scope": 68522,
                      "src": "18250:10:108",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 68428,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "18250:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 68431,
                  "initialValue": {
                    "id": 68430,
                    "name": "z",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 68405,
                    "src": "18263:1:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "18250:14:108"
                },
                {
                  "assignments": [
                    68433
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 68433,
                      "mutability": "mutable",
                      "name": "seriesSum",
                      "nameLocation": "18385:9:108",
                      "nodeType": "VariableDeclaration",
                      "scope": 68522,
                      "src": "18378:16:108",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 68432,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "18378:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 68435,
                  "initialValue": {
                    "id": 68434,
                    "name": "num",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 68429,
                    "src": "18397:3:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "18378:22:108"
                },
                {
                  "expression": {
                    "id": 68443,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68436,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68429,
                      "src": "18471:3:108",
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
                      "id": 68442,
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
                            "id": 68439,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 68437,
                              "name": "num",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 68429,
                              "src": "18478:3:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 68438,
                              "name": "z_squared",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 68420,
                              "src": "18484:9:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "18478:15:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 68440,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "18477:17:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 68441,
                        "name": "ONE_20",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67390,
                        "src": "18497:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "18477:26:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "18471:32:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68444,
                  "nodeType": "ExpressionStatement",
                  "src": "18471:32:108"
                },
                {
                  "expression": {
                    "id": 68449,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68445,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68433,
                      "src": "18513:9:108",
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
                      "id": 68448,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 68446,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 68429,
                        "src": "18526:3:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "33",
                        "id": 68447,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "18532:1:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_3_by_1",
                          "typeString": "int_const 3"
                        },
                        "value": "3"
                      },
                      "src": "18526:7:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "18513:20:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68450,
                  "nodeType": "ExpressionStatement",
                  "src": "18513:20:108"
                },
                {
                  "expression": {
                    "id": 68458,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68451,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68429,
                      "src": "18544:3:108",
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
                      "id": 68457,
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
                            "id": 68454,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 68452,
                              "name": "num",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 68429,
                              "src": "18551:3:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 68453,
                              "name": "z_squared",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 68420,
                              "src": "18557:9:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "18551:15:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 68455,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "18550:17:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 68456,
                        "name": "ONE_20",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67390,
                        "src": "18570:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "18550:26:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "18544:32:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68459,
                  "nodeType": "ExpressionStatement",
                  "src": "18544:32:108"
                },
                {
                  "expression": {
                    "id": 68464,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68460,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68433,
                      "src": "18586:9:108",
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
                      "id": 68463,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 68461,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 68429,
                        "src": "18599:3:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "35",
                        "id": 68462,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "18605:1:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_5_by_1",
                          "typeString": "int_const 5"
                        },
                        "value": "5"
                      },
                      "src": "18599:7:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "18586:20:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68465,
                  "nodeType": "ExpressionStatement",
                  "src": "18586:20:108"
                },
                {
                  "expression": {
                    "id": 68473,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68466,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68429,
                      "src": "18617:3:108",
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
                      "id": 68472,
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
                            "id": 68469,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 68467,
                              "name": "num",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 68429,
                              "src": "18624:3:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 68468,
                              "name": "z_squared",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 68420,
                              "src": "18630:9:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "18624:15:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 68470,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "18623:17:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 68471,
                        "name": "ONE_20",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67390,
                        "src": "18643:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "18623:26:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "18617:32:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68474,
                  "nodeType": "ExpressionStatement",
                  "src": "18617:32:108"
                },
                {
                  "expression": {
                    "id": 68479,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68475,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68433,
                      "src": "18659:9:108",
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
                      "id": 68478,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 68476,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 68429,
                        "src": "18672:3:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "37",
                        "id": 68477,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "18678:1:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_7_by_1",
                          "typeString": "int_const 7"
                        },
                        "value": "7"
                      },
                      "src": "18672:7:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "18659:20:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68480,
                  "nodeType": "ExpressionStatement",
                  "src": "18659:20:108"
                },
                {
                  "expression": {
                    "id": 68488,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68481,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68429,
                      "src": "18690:3:108",
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
                      "id": 68487,
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
                            "id": 68484,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 68482,
                              "name": "num",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 68429,
                              "src": "18697:3:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 68483,
                              "name": "z_squared",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 68420,
                              "src": "18703:9:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "18697:15:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 68485,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "18696:17:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 68486,
                        "name": "ONE_20",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67390,
                        "src": "18716:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "18696:26:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "18690:32:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68489,
                  "nodeType": "ExpressionStatement",
                  "src": "18690:32:108"
                },
                {
                  "expression": {
                    "id": 68494,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68490,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68433,
                      "src": "18732:9:108",
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
                      "id": 68493,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 68491,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 68429,
                        "src": "18745:3:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "39",
                        "id": 68492,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "18751:1:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_9_by_1",
                          "typeString": "int_const 9"
                        },
                        "value": "9"
                      },
                      "src": "18745:7:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "18732:20:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68495,
                  "nodeType": "ExpressionStatement",
                  "src": "18732:20:108"
                },
                {
                  "expression": {
                    "id": 68503,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68496,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68429,
                      "src": "18763:3:108",
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
                      "id": 68502,
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
                            "id": 68499,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 68497,
                              "name": "num",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 68429,
                              "src": "18770:3:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 68498,
                              "name": "z_squared",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 68420,
                              "src": "18776:9:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "18770:15:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 68500,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "18769:17:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 68501,
                        "name": "ONE_20",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67390,
                        "src": "18789:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "18769:26:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "18763:32:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68504,
                  "nodeType": "ExpressionStatement",
                  "src": "18763:32:108"
                },
                {
                  "expression": {
                    "id": 68509,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68505,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68433,
                      "src": "18805:9:108",
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
                      "id": 68508,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 68506,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 68429,
                        "src": "18818:3:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "3131",
                        "id": 68507,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "18824:2:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_11_by_1",
                          "typeString": "int_const 11"
                        },
                        "value": "11"
                      },
                      "src": "18818:8:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "18805:21:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68510,
                  "nodeType": "ExpressionStatement",
                  "src": "18805:21:108"
                },
                {
                  "expression": {
                    "id": 68513,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68511,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68433,
                      "src": "18985:9:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "*=",
                    "rightHandSide": {
                      "hexValue": "32",
                      "id": 68512,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "18998:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "src": "18985:14:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68514,
                  "nodeType": "ExpressionStatement",
                  "src": "18985:14:108"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 68520,
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
                          "id": 68517,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 68515,
                            "name": "sum",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68183,
                            "src": "19273:3:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "id": 68516,
                            "name": "seriesSum",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68433,
                            "src": "19279:9:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "19273:15:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "id": 68518,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "19272:17:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "hexValue": "313030",
                      "id": 68519,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "19292:3:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_100_by_1",
                        "typeString": "int_const 100"
                      },
                      "value": "100"
                    },
                    "src": "19272:23:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 68165,
                  "id": 68521,
                  "nodeType": "Return",
                  "src": "19265:30:108"
                }
              ]
            },
            "documentation": {
              "id": 68159,
              "nodeType": "StructuredDocumentation",
              "src": "14235:103:108",
              "text": " @dev Internal natural logarithm (ln(a)) with signed 18 decimal fixed point argument."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_ln",
            "nameLocation": "14352:3:108",
            "parameters": {
              "id": 68162,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 68161,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "14363:1:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 68523,
                  "src": "14356:8:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 68160,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14356:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14355:10:108"
            },
            "returnParameters": {
              "id": 68165,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 68164,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 68523,
                  "src": "14388:6:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 68163,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14388:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14387:8:108"
            },
            "scope": 68678,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 68677,
            "nodeType": "FunctionDefinition",
            "src": "19568:1714:108",
            "nodes": [],
            "body": {
              "id": 68676,
              "nodeType": "Block",
              "src": "19624:1658:108",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 68533,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68531,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68526,
                      "src": "19838:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "*=",
                    "rightHandSide": {
                      "id": 68532,
                      "name": "ONE_18",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67387,
                      "src": "19843:6:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "19838:11:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68534,
                  "nodeType": "ExpressionStatement",
                  "src": "19838:11:108"
                },
                {
                  "assignments": [
                    68536
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 68536,
                      "mutability": "mutable",
                      "name": "z",
                      "nameLocation": "20217:1:108",
                      "nodeType": "VariableDeclaration",
                      "scope": 68676,
                      "src": "20210:8:108",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 68535,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "20210:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 68549,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 68548,
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
                          "id": 68542,
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
                                "id": 68539,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 68537,
                                  "name": "x",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 68526,
                                  "src": "20223:1:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "id": 68538,
                                  "name": "ONE_36",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 67393,
                                  "src": "20227:6:108",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "20223:10:108",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 68540,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "20222:12:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 68541,
                            "name": "ONE_36",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67393,
                            "src": "20237:6:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "20222:21:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "id": 68543,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "20221:23:108",
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
                          "id": 68546,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 68544,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68526,
                            "src": "20248:1:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "id": 68545,
                            "name": "ONE_36",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67393,
                            "src": "20252:6:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "20248:10:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "id": 68547,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "20247:12:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "20221:38:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "20210:49:108"
                },
                {
                  "assignments": [
                    68551
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 68551,
                      "mutability": "mutable",
                      "name": "z_squared",
                      "nameLocation": "20276:9:108",
                      "nodeType": "VariableDeclaration",
                      "scope": 68676,
                      "src": "20269:16:108",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 68550,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "20269:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 68558,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 68557,
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
                          "id": 68554,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 68552,
                            "name": "z",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68536,
                            "src": "20289:1:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 68553,
                            "name": "z",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68536,
                            "src": "20293:1:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "20289:5:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "id": 68555,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "20288:7:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "id": 68556,
                      "name": "ONE_36",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67393,
                      "src": "20298:6:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "20288:16:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "20269:35:108"
                },
                {
                  "assignments": [
                    68560
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 68560,
                      "mutability": "mutable",
                      "name": "num",
                      "nameLocation": "20392:3:108",
                      "nodeType": "VariableDeclaration",
                      "scope": 68676,
                      "src": "20385:10:108",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 68559,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "20385:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 68562,
                  "initialValue": {
                    "id": 68561,
                    "name": "z",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 68536,
                    "src": "20398:1:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "20385:14:108"
                },
                {
                  "assignments": [
                    68564
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 68564,
                      "mutability": "mutable",
                      "name": "seriesSum",
                      "nameLocation": "20520:9:108",
                      "nodeType": "VariableDeclaration",
                      "scope": 68676,
                      "src": "20513:16:108",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 68563,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "20513:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 68566,
                  "initialValue": {
                    "id": 68565,
                    "name": "num",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 68560,
                    "src": "20532:3:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "20513:22:108"
                },
                {
                  "expression": {
                    "id": 68574,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68567,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68560,
                      "src": "20606:3:108",
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
                      "id": 68573,
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
                            "id": 68570,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 68568,
                              "name": "num",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 68560,
                              "src": "20613:3:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 68569,
                              "name": "z_squared",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 68551,
                              "src": "20619:9:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "20613:15:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 68571,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "20612:17:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 68572,
                        "name": "ONE_36",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67393,
                        "src": "20632:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "20612:26:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "20606:32:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68575,
                  "nodeType": "ExpressionStatement",
                  "src": "20606:32:108"
                },
                {
                  "expression": {
                    "id": 68580,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68576,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68564,
                      "src": "20648:9:108",
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
                      "id": 68579,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 68577,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 68560,
                        "src": "20661:3:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "33",
                        "id": 68578,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "20667:1:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_3_by_1",
                          "typeString": "int_const 3"
                        },
                        "value": "3"
                      },
                      "src": "20661:7:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "20648:20:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68581,
                  "nodeType": "ExpressionStatement",
                  "src": "20648:20:108"
                },
                {
                  "expression": {
                    "id": 68589,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68582,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68560,
                      "src": "20679:3:108",
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
                      "id": 68588,
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
                            "id": 68585,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 68583,
                              "name": "num",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 68560,
                              "src": "20686:3:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 68584,
                              "name": "z_squared",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 68551,
                              "src": "20692:9:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "20686:15:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 68586,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "20685:17:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 68587,
                        "name": "ONE_36",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67393,
                        "src": "20705:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "20685:26:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "20679:32:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68590,
                  "nodeType": "ExpressionStatement",
                  "src": "20679:32:108"
                },
                {
                  "expression": {
                    "id": 68595,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68591,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68564,
                      "src": "20721:9:108",
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
                      "id": 68594,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 68592,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 68560,
                        "src": "20734:3:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "35",
                        "id": 68593,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "20740:1:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_5_by_1",
                          "typeString": "int_const 5"
                        },
                        "value": "5"
                      },
                      "src": "20734:7:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "20721:20:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68596,
                  "nodeType": "ExpressionStatement",
                  "src": "20721:20:108"
                },
                {
                  "expression": {
                    "id": 68604,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68597,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68560,
                      "src": "20752:3:108",
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
                      "id": 68603,
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
                            "id": 68600,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 68598,
                              "name": "num",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 68560,
                              "src": "20759:3:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 68599,
                              "name": "z_squared",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 68551,
                              "src": "20765:9:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "20759:15:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 68601,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "20758:17:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 68602,
                        "name": "ONE_36",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67393,
                        "src": "20778:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "20758:26:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "20752:32:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68605,
                  "nodeType": "ExpressionStatement",
                  "src": "20752:32:108"
                },
                {
                  "expression": {
                    "id": 68610,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68606,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68564,
                      "src": "20794:9:108",
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
                      "id": 68609,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 68607,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 68560,
                        "src": "20807:3:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "37",
                        "id": 68608,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "20813:1:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_7_by_1",
                          "typeString": "int_const 7"
                        },
                        "value": "7"
                      },
                      "src": "20807:7:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "20794:20:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68611,
                  "nodeType": "ExpressionStatement",
                  "src": "20794:20:108"
                },
                {
                  "expression": {
                    "id": 68619,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68612,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68560,
                      "src": "20825:3:108",
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
                      "id": 68618,
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
                            "id": 68615,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 68613,
                              "name": "num",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 68560,
                              "src": "20832:3:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 68614,
                              "name": "z_squared",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 68551,
                              "src": "20838:9:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "20832:15:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 68616,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "20831:17:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 68617,
                        "name": "ONE_36",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67393,
                        "src": "20851:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "20831:26:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "20825:32:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68620,
                  "nodeType": "ExpressionStatement",
                  "src": "20825:32:108"
                },
                {
                  "expression": {
                    "id": 68625,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68621,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68564,
                      "src": "20867:9:108",
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
                      "id": 68624,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 68622,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 68560,
                        "src": "20880:3:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "39",
                        "id": 68623,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "20886:1:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_9_by_1",
                          "typeString": "int_const 9"
                        },
                        "value": "9"
                      },
                      "src": "20880:7:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "20867:20:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68626,
                  "nodeType": "ExpressionStatement",
                  "src": "20867:20:108"
                },
                {
                  "expression": {
                    "id": 68634,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68627,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68560,
                      "src": "20898:3:108",
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
                      "id": 68633,
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
                            "id": 68630,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 68628,
                              "name": "num",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 68560,
                              "src": "20905:3:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 68629,
                              "name": "z_squared",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 68551,
                              "src": "20911:9:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "20905:15:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 68631,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "20904:17:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 68632,
                        "name": "ONE_36",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67393,
                        "src": "20924:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "20904:26:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "20898:32:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68635,
                  "nodeType": "ExpressionStatement",
                  "src": "20898:32:108"
                },
                {
                  "expression": {
                    "id": 68640,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68636,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68564,
                      "src": "20940:9:108",
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
                      "id": 68639,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 68637,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 68560,
                        "src": "20953:3:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "3131",
                        "id": 68638,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "20959:2:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_11_by_1",
                          "typeString": "int_const 11"
                        },
                        "value": "11"
                      },
                      "src": "20953:8:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "20940:21:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68641,
                  "nodeType": "ExpressionStatement",
                  "src": "20940:21:108"
                },
                {
                  "expression": {
                    "id": 68649,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68642,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68560,
                      "src": "20972:3:108",
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
                      "id": 68648,
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
                            "id": 68645,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 68643,
                              "name": "num",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 68560,
                              "src": "20979:3:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 68644,
                              "name": "z_squared",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 68551,
                              "src": "20985:9:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "20979:15:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 68646,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "20978:17:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 68647,
                        "name": "ONE_36",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67393,
                        "src": "20998:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "20978:26:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "20972:32:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68650,
                  "nodeType": "ExpressionStatement",
                  "src": "20972:32:108"
                },
                {
                  "expression": {
                    "id": 68655,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68651,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68564,
                      "src": "21014:9:108",
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
                      "id": 68654,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 68652,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 68560,
                        "src": "21027:3:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "3133",
                        "id": 68653,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "21033:2:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_13_by_1",
                          "typeString": "int_const 13"
                        },
                        "value": "13"
                      },
                      "src": "21027:8:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "21014:21:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68656,
                  "nodeType": "ExpressionStatement",
                  "src": "21014:21:108"
                },
                {
                  "expression": {
                    "id": 68664,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68657,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68560,
                      "src": "21046:3:108",
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
                      "id": 68663,
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
                            "id": 68660,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 68658,
                              "name": "num",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 68560,
                              "src": "21053:3:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 68659,
                              "name": "z_squared",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 68551,
                              "src": "21059:9:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "21053:15:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 68661,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "21052:17:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 68662,
                        "name": "ONE_36",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67393,
                        "src": "21072:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "21052:26:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "21046:32:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68665,
                  "nodeType": "ExpressionStatement",
                  "src": "21046:32:108"
                },
                {
                  "expression": {
                    "id": 68670,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 68666,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68564,
                      "src": "21088:9:108",
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
                      "id": 68669,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 68667,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 68560,
                        "src": "21101:3:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "3135",
                        "id": 68668,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "21107:2:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_15_by_1",
                          "typeString": "int_const 15"
                        },
                        "value": "15"
                      },
                      "src": "21101:8:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "21088:21:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 68671,
                  "nodeType": "ExpressionStatement",
                  "src": "21088:21:108"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 68674,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 68672,
                      "name": "seriesSum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68564,
                      "src": "21262:9:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "*",
                    "rightExpression": {
                      "hexValue": "32",
                      "id": 68673,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "21274:1:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "src": "21262:13:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 68530,
                  "id": 68675,
                  "nodeType": "Return",
                  "src": "21255:20:108"
                }
              ]
            },
            "documentation": {
              "id": 68524,
              "nodeType": "StructuredDocumentation",
              "src": "19308:255:108",
              "text": " @dev Intrnal high precision (36 decimal places) natural logarithm (ln(x)) with signed 18 decimal fixed point argument,\n for x close to one.\n Should only be used if x is between LN_36_LOWER_BOUND and LN_36_UPPER_BOUND."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_ln_36",
            "nameLocation": "19577:6:108",
            "parameters": {
              "id": 68527,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 68526,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "19591:1:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 68677,
                  "src": "19584:8:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 68525,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "19584:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19583:10:108"
            },
            "returnParameters": {
              "id": 68530,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 68529,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 68677,
                  "src": "19616:6:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 68528,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "19616:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19615:8:108"
            },
            "scope": 68678,
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
          "id": 67384,
          "nodeType": "StructuredDocumentation",
          "src": "1224:446:108",
          "text": " @dev Exponentiation and logarithm functions for 18 decimal fixed point numbers (both base and exponent/argument).\n Exponentiation and logarithm with arbitrary bases (x^y and log_x(y)) are implemented by conversion to natural\n exponentiation and logarithm (where the base is Euler's number).\n @author Fernando Martinelli - @fernandomartinelli\n @author Sergio Yuhjtman - @sergioyuhjtman\n @author Daniel Fernandez - @dmf7z"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          68678
        ],
        "name": "LogExpMath",
        "nameLocation": "1679:10:108",
        "scope": 68679,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 108
} as const;
